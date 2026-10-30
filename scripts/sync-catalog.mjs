#!/usr/bin/env node
/**
 * React Bits Skill — 组件目录同步脚本
 *
 * 从官方 llms.txt 拉取免费库全量组件，并从官方 registry 拉取每个组件的真实依赖，
 * 生成 references/catalog.md 与 references/deps.json。
 * - 仅收录免费五类（Text Animations / Animations / Components / Micro / Backgrounds），
 *   自动排除 React Bits Pro 付费区。
 * - 依赖列：registry JSON 的 dependencies 字段（权威数据），无外部依赖写 `-`；
 *   registry 拉取失败的组件回退到本地 deps.json 缓存。
 * - ⚡WebGL 判定（v1.7.0）：依赖含 ogl/three，或官方描述含 webgl/shader。
 * - 「适用」列为人工增补（受控枚举，取值见 references/taxonomy.json 的 region），
 *   重新同步时按 CLI ID 自动保留。
 * - 幂等可重复执行；网络失败时不改动现有文件。
 *
 * 要求：Node.js >= 18（使用内置 fetch），零第三方依赖。
 * 用法：node sync-catalog.mjs
 */

import { writeFile, readFile, mkdir } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LLMS_URL = "https://www.reactbits.dev/llms.txt";
const REGISTRY_URL = (cliId) => `https://www.reactbits.dev/r/${cliId}-TS-TW.json`;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_PATH = path.join(__dirname, "..", "references", "catalog.md");
const DEPS_PATH = path.join(__dirname, "..", "references", "deps.json");

const CATEGORY_ZH = {
  "Text Animations": "文本动画",
  Animations: "动画",
  Components: "组件",
  Micro: "微交互",
  Backgrounds: "背景",
};

/** 依赖中视为 WebGL 实现的包 */
const WEBGL_DEPS = new Set(["ogl", "three"]);
/** 官方描述中出现即判定 WebGL 的关键词（v1.7.0 规则） */
const WEBGL_DESC_RE = /webgl|shader/i;

/** 人工增补列的表头定位（依赖 / 适用） */
const HEADERS = ["组件", "CLI ID", "官方描述", "标记", "依赖", "适用"];

function parseEntries(text) {
  const lines = text.split(/\r?\n/);
  const result = {}; // { [category]: [{name, url, desc, cli}] }
  let current = null;

  for (const raw of lines) {
    const line = raw.trim();

    // 进入免费区分类
    const section = line.match(/^##\s+(.+?)\s*$/);
    if (section) {
      const name = section[1];
      current = CATEGORY_ZH[name] !== undefined ? name : null;
      // "## Variants" 及之后（含 Pro 区）全部排除
      continue;
    }
    if (!current) continue;

    const entry = line.match(
      /^-\s+\[(.+?)\]\((https:\/\/www\.reactbits\.dev\/[^\s)]+)\):\s*(.+)$/
    );
    if (!entry) continue;

    const [, name, url, rest] = entry;
    let desc = rest.trim();
    let cli = "";

    const cliMatch = desc.match(/CLI:\s*`([A-Za-z0-9]+)`\s*\.?\s*$/);
    if (cliMatch) {
      cli = cliMatch[1];
      desc = desc.slice(0, cliMatch.index).trim().replace(/\.$/, "");
    } else {
      // 官方数据理论上都带 CLI；兜底：由名称推导 PascalCase
      cli = name.replace(/[^A-Za-z0-9 ]/g, "").split(/\s+/).map(w =>
        w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ""
      ).join("");
    }

    (result[current] ||= []).push({ name, url, desc, cli });
  }
  return result;
}

/** 并发抓取所有组件的 registry JSON，返回 { [cli]: string[] 外部依赖包名 } */
async function fetchAllDeps(entries) {
  const ids = Object.values(entries).flat().map((it) => it.cli);
  const out = {};
  let done = 0;
  const CONCURRENCY = 8;

  async function worker(queue) {
    while (queue.length) {
      const id = queue.shift();
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const res = await fetch(REGISTRY_URL(id), {
            headers: { "User-Agent": "betterfront-skill" },
            signal: AbortSignal.timeout(15000),
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const json = await res.json();
          // "gsap@^3.13.0" → "gsap"；"@gsap/react@^2.1.2" → "@gsap/react"（scoped 包按最后一个 @ 切）
          const deps = (json.dependencies || []).map((d) => {
            const i = d.lastIndexOf("@");
            return i <= 0 ? d : d.slice(0, i);
          });
          out[id] = deps;
          break;
        } catch (err) {
          if (attempt === 1) out[id] = null; // 标记失败，回退缓存
        }
      }
      done++;
      if (done % 40 === 0) console.log(`[sync-catalog] 依赖抓取进度 ${done}/${ids.length}`);
    }
  }

  const queue = [...ids];
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));
  return out;
}

/** 从现有 catalog.md 解析「适用」列人工增补（按 CLI ID 匹配） */
function parseManualNotes(existing) {
  const notes = new Map(); // cli -> { deps, fit }
  if (!existing) return notes;
  for (const raw of existing.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line.startsWith("| [")) continue;
    const cells = line.split("|").map(c => c.trim());
    // cells: ['', '[Name](url)', '`CliId`', 'desc', 'flag', 'deps', 'fit', '']
    if (cells.length < 7) continue;
    const cli = cells[2].replace(/`/g, "").trim();
    if (!cli) continue;
    const fit = cells[6] || "";
    if (!fit) continue; // 只保留真实的人工增补（依赖列现在由 registry 权威提供）
    notes.set(cli, { fit });
  }
  return notes;
}

/** ⚡WebGL 判定（v1.7.0）：依赖含 ogl/three，或官方描述含 webgl/shader */
function computeFlags(desc, deps) {
  const depsHit = (deps || []).some((d) => WEBGL_DEPS.has(d));
  const descHit = WEBGL_DESC_RE.test(desc);
  return depsHit || descHit ? ["⚡WebGL"] : [];
}

function buildMarkdown(data, depsMap, notes) {
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  let total = 0;
  const counts = [];

  const sections = Object.keys(CATEGORY_ZH)
    .filter(c => data[c] && data[c].length)
    .map(cat => {
      const items = data[cat];
      total += items.length;
      counts.push(`${cat} ${items.length}`);
      const rows = items.map(it => {
        const deps = depsMap[it.cli] || [];
        const depCell = deps.length ? deps.join(", ") : "-";
        const fit = notes.get(it.cli)?.fit || "";
        const flag = computeFlags(it.desc, deps).join(" ");
        return `| [${it.name}](${it.url}) | \`${it.cli}\` | ${it.desc} | ${flag} | ${depCell} | ${fit} |`;
      });
      return `## ${cat} ${CATEGORY_ZH[cat]}（${items.length}）\n\n| ${HEADERS.join(" | ")} |\n|---|---|---|---|---|---|\n${rows.join("\n")}\n`;
    });

  return [
    "# React Bits 组件目录",
    "",
    "> 数据源：https://www.reactbits.dev/llms.txt（仅免费库，Pro 付费区已排除）",
    `> 同步时间：${date}`,
    `> 组件总数：${total}（${counts.join(" · ")}）`,
    "> 标记列由脚本自动生成：⚡WebGL = 依赖含 ogl/three，或官方描述含 webgl/shader（性能预算见 pitfalls.md）。",
    "> 依赖列来自官方 registry（无外部依赖写 `-`）；「适用」列为受控枚举（区域代码，取值见 taxonomy.json 的 region），重新同步时按 CLI ID 自动保留。",
    "> 检索提示：官方描述为英文，可中英双语检索（如「跑马灯」→ marquee，「故障」→ glitch，「玻璃」→ glass）。",
    "",
    ...sections,
  ].join("\n");
}

/** 校验 references 文档中引用的 CLI ID 是否仍存在于最新目录 */
function validateReferences(data) {
  const ids = new Set(Object.values(data).flat().map((it) => it.cli));
  const refsDir = path.join(__dirname, "..", "references");
  const files = [
    "scene-guide.md",
    "recipes.md",
    "interactions.md",
    "theme-backgrounds.md",
    "layout-guide.md",
    "pitfalls.md",
    "component-usage.md",
  ];
  const stale = new Set();
  for (const f of files) {
    const p = path.join(refsDir, f);
    if (!existsSync(p)) continue;
    const content = readFileSync(p, "utf8");
    for (const m of content.matchAll(/`([A-Z][A-Za-z0-9]{1,})`/g)) {
      if (!ids.has(m[1])) stale.add(`${f} → ${m[1]}`);
    }
  }
  return [...stale];
}

async function main() {
  let text;
  try {
    const res = await fetch(LLMS_URL, { headers: { "User-Agent": "betterfront-skill" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    text = await res.text();
  } catch (err) {
    console.error(`[sync-catalog] 拉取 llms.txt 失败：${err.message}`);
    console.error("[sync-catalog] 保留现有 catalog.md 不变。请检查网络后重试。");
    process.exit(1);
  }

  const data = parseEntries(text);
  const total = Object.values(data).reduce((n, arr) => n + arr.length, 0);
  if (!total) {
    console.error("[sync-catalog] 解析结果为空，llms.txt 格式可能已变化；保留现有文件。");
    process.exit(1);
  }

  // 依赖：registry 实时抓取 → 失败回退本地 deps.json 缓存
  let cached = {};
  if (existsSync(DEPS_PATH)) {
    try { cached = JSON.parse(readFileSync(DEPS_PATH, "utf8")).deps || {}; } catch { cached = {}; }
  }
  const fetched = await fetchAllDeps(data);
  const depsMap = {};
  let fallbackCount = 0;
  for (const it of Object.values(data).flat()) {
    if (Array.isArray(fetched[it.cli])) depsMap[it.cli] = fetched[it.cli];
    else if (Array.isArray(cached[it.cli])) { depsMap[it.cli] = cached[it.cli]; fallbackCount++; }
    else depsMap[it.cli] = [];
  }

  const existing = existsSync(OUT_PATH) ? await readFile(OUT_PATH, "utf8") : "";
  const notes = parseManualNotes(existing);
  const md = buildMarkdown(data, depsMap, notes);
  await mkdir(path.dirname(OUT_PATH), { recursive: true });
  await writeFile(OUT_PATH, md, "utf8");
  await writeFile(
    DEPS_PATH,
    JSON.stringify({ syncedAt: new Date().toISOString().slice(0, 10), deps: depsMap }, null, 2),
    "utf8"
  );

  const stats = Object.keys(CATEGORY_ZH)
    .filter(c => data[c])
    .map(c => `${c} ${data[c].length}`)
    .join(" · ");
  const webglCount = Object.values(data).flat().filter(it => computeFlags(it.desc, depsMap[it.cli]).length).length;
  console.log(`[sync-catalog] 已生成 ${OUT_PATH}`);
  console.log(`[sync-catalog] 共 ${total} 个组件（${stats}），⚡WebGL ${webglCount} 个，保留「适用」增补 ${notes.size} 条`);
  if (fallbackCount) console.warn(`[sync-catalog] ⚠ ${fallbackCount} 个组件 registry 抓取失败，使用本地 deps.json 缓存`);

  const stale = validateReferences(data);
  if (stale.length) {
    console.warn(`[sync-catalog] ⚠ 发现 ${stale.length} 个失效的组件引用（组件可能已被官方更名/下架）：`);
    for (const s of stale) console.warn(`  - ${s}`);
  } else {
    console.log("[sync-catalog] references 文档引用校验通过，无失效组件");
  }
}

main();
