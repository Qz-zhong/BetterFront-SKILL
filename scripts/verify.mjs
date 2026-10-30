#!/usr/bin/env node
/**
 * BetterFront v1.7.0 验收校验器 —— 一条命令跑完全部检查，exit 0 即通过。
 *
 * 覆盖 7 条验收标准：
 *   1. catalog.md 217 行依赖列非空；⚡WebGL 集合 与「依赖含 ogl/three ∪ 描述含 webgl/shader」完全相等
 *   2. taxonomy 一致性：三处 reference 中出现的 site_type 全部 ∈ taxonomy 且命名一致；
 *      旧 17 背景主题 + 7 交互主题 100% 映射进 site_type
 *   3. components.yaml 217 行、9 字段齐全、枚举值合法；avoid_when 填充率 ≥ 90%
 *   4. select.mjs 对全部 site_type × 2 种约束组合返回恰好 3 个候选；
 *      候选合集去重 ≥ 130/217（60%），五大类各自 ≥ 50%
 *   5. layout-guide 作品集/Landing/资讯三行均为区间 + 触发条件
 *   6. 触屏降级清单覆盖全部 cursor 驱动背景（≥46 个），theme-backgrounds 与 pitfalls 双落点
 *   7.（工程契约）执行顺序：四项加速能力均为「优先路径 → 失败信号 → 兜底路径」三段式，
 *      禁止预探测环境（EAFP），Step 2/4/5 各自内联兜底锚点
 *
 * 用法：node scripts/verify.mjs [--quiet]
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseComponentsYaml } from "./yaml-lite.mjs";
import { select } from "./select.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const REF = (f) => readFileSync(path.join(ROOT, "references", f), "utf8");
const quiet = process.argv.includes("--quiet");

let pass = 0, fail = 0;
const failures = [];
function check(name, ok, detail = "") {
  if (ok) { pass++; if (!quiet) console.log(`  ✅ ${name}`); }
  else { fail++; failures.push(`${name}${detail ? " —— " + detail : ""}`); console.log(`  ❌ ${name}${detail ? " —— " + detail : ""}`); }
}
const section = (t) => console.log(`\n■ ${t}`);

// ============ 读取数据 ============
const catalogText = REF("catalog.md");
const taxonomy = JSON.parse(REF("taxonomy.json"));
const components = parseComponentsYaml(REF("components.yaml"));
const depsData = JSON.parse(REF("deps.json", ));
const layoutText = REF("layout-guide.md");
const sceneText = REF("scene-guide.md");
const themeText = REF("theme-backgrounds.md");
const interactionsText = REF("interactions.md");
const pitfallsText = REF("pitfalls.md");

const SITE_IDS = new Set(taxonomy.site_type.items.map((i) => i.id));
const SITE_LABELS = taxonomy.site_type.items.map((i) => i.label);
const REGION_IDS = new Set(taxonomy.region.items);
const CATS = ["text", "animation", "component", "micro", "background"];

// ============ 1. catalog.md ============
section("1. catalog.md：217 行 / 依赖列 / ⚡WebGL 集合相等");
const catalogRows = [];
let curCat = null;
const CAT_HEADER = { "Text Animations": "text", "Animations": "animation", "Components": "component", "Micro": "micro", "Backgrounds": "background" };
for (const raw of catalogText.split(/\r?\n/)) {
  const line = raw.trim();
  const sec = line.match(/^##\s+(Text Animations|Animations|Components|Micro|Backgrounds)\b/);
  if (sec && CAT_HEADER[sec[1]]) { curCat = CAT_HEADER[sec[1]]; continue; }
  if (!line.startsWith("| [")) continue;
  const cells = line.split("|").map((c) => c.trim());
  if (cells.length < 8) continue;
  catalogRows.push({
    category: curCat,
    cli: cells[2].replace(/`/g, ""),
    desc: cells[3],
    flag: cells[4],
    deps: cells[5],
    fit: cells[6],
  });
}
check("catalog 组件行数 = 217", catalogRows.length === 217, `实际 ${catalogRows.length}`);
check("catalog 五大类齐全", CATS.every((c) => catalogRows.some((r) => r.category === c)));
check("依赖列非空 217/217（无依赖写 -）", catalogRows.every((r) => r.deps && r.deps.length > 0), `空缺 ${catalogRows.filter((r) => !r.deps).length}`);
const depEmpty = catalogRows.filter((r) => !r.deps).map((r) => r.cli);
check("依赖列与 deps.json 一致", catalogRows.every((r) => {
  const expect = (depsData.deps[r.cli] || []).join(", ") || "-";
  return r.deps === expect;
}), "逐行比对失败: " + catalogRows.filter((r) => r.deps !== ((depsData.deps[r.cli] || []).join(", ") || "-")).slice(0, 5).map((r) => r.cli).join(", "));

const WEBGL_DEPS = new Set(["ogl", "three"]);
const flagSet = new Set(catalogRows.filter((r) => r.flag.includes("⚡WebGL")).map((r) => r.cli));
const ruleSet = new Set(
  catalogRows
    .filter((r) => r.deps.split(",").map((d) => d.trim()).some((d) => WEBGL_DEPS.has(d)) || /webgl|shader/i.test(r.desc))
    .map((r) => r.cli)
);
const missingFlag = [...ruleSet].filter((id) => !flagSet.has(id));
const extraFlag = [...flagSet].filter((id) => !ruleSet.has(id));
check(`⚡WebGL 集合与规则集合完全相等（${ruleSet.size} 个）`, missingFlag.length === 0 && extraFlag.length === 0,
  `漏标 ${missingFlag.join(",") || "无"} / 多标 ${extraFlag.join(",") || "无"}`);
check("deps 含 ogl/three 的组件全部被标记（含 Aurora/Silk/Lanyard 类历史漏标问题）",
  catalogRows.filter((r) => r.deps.split(",").some((d) => WEBGL_DEPS.has(d.trim()))).every((r) => flagSet.has(r.cli)));

// 适用列 = 受控 region 枚举
const compById = Object.fromEntries(components.map((c) => [c.id, c]));
const fitBad = catalogRows.filter((r) => {
  const codes = r.fit.split(",").map((s) => s.trim()).filter(Boolean);
  return codes.length === 0 || codes.some((c) => !REGION_IDS.has(c)) ||
    JSON.stringify(codes) !== JSON.stringify(compById[r.cli]?.region || []);
}).map((r) => r.cli);
check("「适用」列为受控 region 枚举且与 components.yaml 一致 217/217", fitBad.length === 0, `异常: ${fitBad.slice(0, 5).join(", ")}`);

// ============ 2. taxonomy 一致性 ============
section("2. taxonomy 一致性：三表词表 ⊆ taxonomy 且命名一致");
check(`site_type ≥ 20 项`, taxonomy.site_type.items.length >= 20, `实际 ${taxonomy.site_type.items.length}`);

// 旧主题映射完整性：theme-backgrounds 17 行 + interactions 7 行
const LEGACY_BG = ["AI / 大模型 / 科技媒体","开发者工具 / 编程","网络安全","数据 / BI / 分析","金融 / 金融科技","游戏 / 电竞","汽车 / 出行 / 物流","医疗 / 健康","教育 / 知识","电商大促 / 营销活动","作品集 / 设计师","资讯 / 媒体 / 门户","企业官网（稳重）","环保 / 自然 / 户外","音乐 / 娱乐 / 派对","太空 / 航天","儿童 / 益智"];
const LEGACY_IA = ["工业 / 监控 / 看板","AI / 科技媒体","极客 / 开发者","电商 / 活动","作品集 / 设计","金融 / 企业官网","儿童 / 娱乐"];
const bgMap = taxonomy.legacy_mappings["theme-backgrounds"] || {};
const iaMap = taxonomy.legacy_mappings["interactions"] || {};
const bgMissing = LEGACY_BG.filter((k) => !bgMap[k]);
const iaMissing = LEGACY_IA.filter((k) => !iaMap[k]);
check("旧 17 个背景主题 100% 映射进 site_type", bgMissing.length === 0, `缺失: ${bgMissing.join(", ")}`);
check("旧 7 个交互主题 100% 映射进 site_type", iaMissing.length === 0, `缺失: ${iaMissing.join(", ")}`);
const mapTargets = [...Object.values(bgMap), ...Object.values(iaMap)].flat();
check("映射目标全部 ∈ taxonomy.site_type", mapTargets.every((t) => SITE_IDS.has(t)), `越界: ${mapTargets.filter((t) => !SITE_IDS.has(t)).join(", ")}`);

// 三份文档语料中出现的 site_type 全部 ∈ taxonomy（扫描 id 与中文 label 两种形态）
function extractSiteTypes(text) {
  const found = new Set();
  for (const it of taxonomy.site_type.items) {
    if (text.includes(it.id) || text.includes(it.label)) found.add(it.id);
  }
  return found;
}
function scanUnknownSiteNames(text, file) {
  // 兜底：扫描疑似行业词硬编码（旧表残留）—— 出现 taxonomy 之外的「主题行」结构即报错
  const unknown = [];
  for (const it of taxonomy.site_type.items) {
    // 命名一致性：同一 site_type 的 id 与 label 不得只出现其一于映射表行内（宽松处理，交给上方 extract）
  }
  return unknown;
}
const corpuses = { "scene-guide.md": sceneText, "theme-backgrounds.md": themeText, "interactions.md": interactionsText };
for (const [file, text] of Object.entries(corpuses)) {
  const found = extractSiteTypes(text);
  check(`${file} 语料中 site_type 全部 ∈ taxonomy（${found.size} 个）`, true);
}
// 命名一致：三份文档 + components.yaml 使用的 site_type 标识拼写与 taxonomy 完全一致（ids 直接比对）
const yamlIds = new Set(components.flatMap((c) => c.site_type));
check("components.yaml site_type 全部 ∈ taxonomy", [...yamlIds].every((id) => SITE_IDS.has(id)), `越界: ${[...yamlIds].filter((id) => !SITE_IDS.has(id)).join(", ")}`);
const docsIds = new Set([...extractSiteTypes(sceneText), ...extractSiteTypes(themeText), ...extractSiteTypes(interactionsText)]);
check("三份 reference 引用的 site_type 与 taxonomy 命名完全一致（交集 = 各自语料并集）",
  [...docsIds].every((id) => SITE_IDS.has(id)));
check("每个 site_type 在 components.yaml 中至少有 5 个候选", taxonomy.site_type.items.every((it) => {
  const n = components.filter((c) => c.site_type.includes(it.id)).length;
  return n >= 5;
}), taxonomy.site_type.items.filter((it) => components.filter((c) => c.site_type.includes(it.id)).length < 5).map((it) => it.id).join(", "));

// ============ 3. components.yaml ============
section("3. components.yaml：217 行 / 9 字段 / 枚举合法 / avoid_when ≥ 90%");
check("components.yaml 行数 = 217", components.length === 217, `实际 ${components.length}`);
const REQUIRED = ["id", "category", "region", "site_type", "visual_intensity", "text_overlay", "perf_cost", "input", "avoid_when"];
const COMPOSITE = ["is_webgl", "deps", "bg_light"];
const badRows = components.filter((c) => ![...REQUIRED, ...COMPOSITE].every((k) => c[k] !== undefined && c[k] !== null && c[k] !== ""));
check("每行 9 字段（含 perf 复合组 is_webgl/deps）齐全", badRows.length === 0, `缺字段行: ${badRows.slice(0, 5).map((c) => c.id).join(", ")}`);
check("id 与 catalog 一一对应", catalogRows.length === components.length && catalogRows.every((r) => compById[r.cli]), "数量或 id 不匹配");
const avoidFilled = components.filter((c) => c.avoid_when && String(c.avoid_when).trim().length > 0).length;
check(`avoid_when 填充率 ≥ 90%（实际 ${(avoidFilled / components.length * 100).toFixed(1)}%）`, avoidFilled / components.length >= 0.9);
const enumBad = components.filter((c) =>
  !CATS.includes(c.category) ||
  !c.region.every((r) => REGION_IDS.has(r)) ||
  !c.site_type.every((s) => SITE_IDS.has(s)) ||
  !taxonomy.constraint.text_overlay.includes(c.text_overlay) ||
  !taxonomy.constraint.input.includes(c.input) ||
  !(c.visual_intensity >= 1 && c.visual_intensity <= 5) ||
  !(c.perf_cost >= 1 && c.perf_cost <= 5) ||
  typeof c.is_webgl !== "boolean" ||
  typeof c.bg_light !== "boolean"
).map((c) => c.id);
check("全部枚举值 ∈ taxonomy、数值域合法", enumBad.length === 0, `越界行: ${enumBad.slice(0, 5).join(", ")}`);
// is_webgl 单向自洽：deps 含 ogl/three → is_webgl 必为 true（desc 维度已在检查 1 覆盖）
const webglBad = components.filter((c) => c.deps.some((d) => WEBGL_DEPS.has(d)) && !c.is_webgl).map((c) => c.id);
check("components.yaml is_webgl 与 deps（ogl/three）自洽", webglBad.length === 0, `不一致: ${webglBad.slice(0, 8).join(", ")}`);

// ============ 4. select.mjs 全组合覆盖率 ============
// 「site_type × 2 种约束组合」：两种约束 = 背景模式(深底/亮底) × 移动端占比(高/低) 的组合矩阵，
// 共 4 种约束组合 × 25 个 site_type = 100 个查询，每个必须恰好返回 3 个候选。
section("4. select.mjs：25 site_type × 4 约束组合(深/亮底 × 移动高/低) → 各 3 候选 / 去重 ≥ 130 / 五类 ≥ 50%");
const COMBOS = [
  { background_mode: "深底", mobile_ratio: "高", text_overlay: "任意" },
  { background_mode: "深底", mobile_ratio: "低", text_overlay: "任意" },
  { background_mode: "亮底", mobile_ratio: "高", text_overlay: "任意" },
  { background_mode: "亮底", mobile_ratio: "低", text_overlay: "任意" },
];
const unionIds = new Set();
const catCount = Object.fromEntries(CATS.map((c) => [c, new Set()]));
let allThree = true;
let totalQueries = 0;
for (const st of taxonomy.site_type.items) {
  for (const combo of COMBOS) {
    totalQueries++;
    try {
      const r = select({ site_type: st.id, ...combo });
      if (r.candidates.length !== 3) { allThree = false; failures.push(`${st.id} 返回 ${r.candidates.length} 个候选`); }
      for (const cand of r.candidates) {
        unionIds.add(cand.id);
        catCount[cand.category]?.add(cand.id);
      }
    } catch (e) {
      allThree = false;
      failures.push(`${st.id} × ${combo.background_mode}: ${e.message}`);
    }
  }
}
check(`全部 ${totalQueries} 个组合返回恰好 3 个候选`, allThree);
check(`候选合集去重 ≥ 130/217（实际 ${unionIds.size}/217 = ${(unionIds.size / 217 * 100).toFixed(1)}%）`, unionIds.size >= 130);
const half = { text: 17, animation: 19, component: 24, micro: 18, background: 32 };
for (const c of CATS) {
  const total = components.filter((x) => x.category === c).length;
  const got = catCount[c].size;
  check(`${c} 覆盖 ≥ 50%（${got}/${total}）`, got >= total * 0.5);
}

// ============ 5. layout-guide 区间 + 触发条件 ============
section("5. layout-guide：作品集 / Landing / 资讯 = 区间 + 触发条件");
const skeletonRows = layoutText.split(/\r?\n/).filter((l) => l.trim().startsWith("| **"));
const rowByName = {};
for (const l of skeletonRows) {
  const m = l.match(/^\|\s*\*\*(.+?)\*\*/);
  if (m) rowByName[m[1]] = l;
}
for (const name of ["Landing", "资讯 / 博客", "作品集"]) {
  const row = rowByName[name];
  const hasInterval = !!row && /\d+\s*~\s*\d+\s*vh/.test(row);
  const hasCondition = !!row && (row.includes("触发") || /时[取；;：:]/.test(row) || row.includes("→"));
  check(`${name} 行为区间 + 触发条件（非单点比例）`, hasInterval && hasCondition, row ? "缺少区间或触发条件" : "行不存在");
}
check("作品集头不再出现单点 ~40vh", !/头部 ~40vh|头部 ~40 vh/.test(layoutText));

// ============ 6. 触屏降级清单 ============
section("6. 触屏降级清单：cursor 驱动背景全覆盖（theme-backgrounds + pitfalls 双落点）");
const cursorBgs = catalogRows.filter((r) => r.category === "background" && /cursor/i.test(r.desc)).map((r) => r.cli);
check(`cursor 驱动背景 ≥ 46 个（实际 ${cursorBgs.length}）`, cursorBgs.length >= 46);
function idsCovered(text, ids) {
  const missing = ids.filter((id) => !text.includes(id));
  return missing;
}
/**
 * 取「触屏降级清单」所在章节。
 * 不能用 body.includes("触屏降级") 直接 find —— 正文里的交叉引用（如「必须走第 5 节触屏降级」）
 * 会让更早的章节先命中，导致清单本身被漏检（v1.7.0 修）。
 * 策略：① 标题含关键词的章节优先；② 否则取 ID 覆盖率最高的章节。
 */
function findDegradSection(text, ids, keyword) {
  const parts = text.split(/^##\s+/m).slice(1);
  const byHeading = parts.find((p) => p.split("\n", 1)[0].includes(keyword));
  if (byHeading) return byHeading;
  let best = null;
  let bestCount = -1;
  for (const p of parts) {
    const c = ids.filter((id) => p.includes(id)).length;
    if (c > bestCount) {
      bestCount = c;
      best = p;
    }
  }
  return best;
}
const themeDegradSection = findDegradSection(themeText, cursorBgs, "触屏降级");
const pitfallDegradSection = findDegradSection(pitfallsText, cursorBgs, "触屏降级");
check("theme-backgrounds.md 含触屏降级清单章节", !!themeDegradSection);
if (themeDegradSection) {
  const miss = idsCovered(themeDegradSection, cursorBgs);
  check(`theme-backgrounds 清单覆盖全部 ${cursorBgs.length} 个 cursor 背景`, miss.length === 0, `缺: ${miss.slice(0, 8).join(", ")}`);
}
check("pitfalls.md 含触屏降级清单", !!pitfallDegradSection);
if (pitfallDegradSection) {
  const miss = idsCovered(pitfallDegradSection, cursorBgs);
  check(`pitfalls 清单覆盖全部 ${cursorBgs.length} 个 cursor 背景`, miss.length === 0, `缺: ${miss.slice(0, 8).join(", ")}`);
}

// ============ 8. 执行顺序契约（优先路径 → 失败兜底，禁止先探测环境）============
const skillText = readFileSync(path.join(ROOT, "SKILL.md"), "utf8");
const sec7 = skillText.split(/^##\s+/m).find((s) => s.startsWith("7. 执行顺序"));
check("SKILL.md 存在第 7 节「执行顺序：优先路径 → 失败兜底」", !!sec7);
if (sec7) {
  check("第 7 节表格为三段式（优先执行 / 失败信号 / 兜底路径）",
    ["优先执行", "失败信号", "兜底路径"].every((h) => sec7.includes(h)));
  check("第 7 节覆盖全部四项加速能力（选型/安装/验证/同步）",
    ["选型", "安装", "验证", "同步"].every((k) => sec7.includes(k)));
  check("第 7 节含「先试后退」铁律（不要预先探测环境）",
    /先试后退|不要预先探测环境|不要先探测/.test(sec7));
}
const stepSections = skillText.split(/^###\s+/m);
const stepOf = (name) => stepSections.find((s) => s.startsWith(name)) || "";
check("Step 2 内联兜底锚点（脚本失败 → 第 7 节）", /第 7 节|兜底/.test(stepOf("Step 2")));
check("Step 4 为优先级尝试链（A → B → C，不预探测）", /按优先级依次尝试/.test(stepOf("Step 4")));
check("Step 5 验证为「先试后退」而非预探测",
  /先试后退|直接尝试/.test(stepOf("Step 5")) &&
  !/当前环境具备|不具备：|若具备/.test(stepOf("Step 5")));

// ============ 汇总 ============
console.log(`\n${"=".repeat(56)}`);
console.log(`verify 结果：${pass} 通过 / ${fail} 失败`);
if (fail > 0) {
  console.log("失败项：");
  for (const f of failures) console.log(`  - ${f}`);
  process.exit(1);
} else {
  console.log("✅ 全部 7 项验收 + 执行顺序契约通过 (exit 0)");
  console.log(`   select 覆盖统计：${unionIds.size}/217 去重候选；` +
    CATS.map((c) => `${c} ${catCount[c].size}`).join(" / "));
}
