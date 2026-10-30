#!/usr/bin/env node
/**
 * BetterFront 统一选型脚本（v1.7.0 三段式）
 *
 * 输入：{ site_type, background_mode, mobile_ratio, text_overlay }
 * 输出：恰好 3 个候选（CLI ID、分类、命中理由、命中的约束、反例提示）。
 *
 * 三段式：
 *   1. 站点类型过滤 —— 只保留 site_type[] 命中的组件（数据池 = references/components.yaml）
 *   2. 约束过滤 —— 深底/亮底（背景类）、移动端占比（鼠标/WebGL/重性能降权）、叠字（背景类三档）
 *   3. 强度排序 —— visual_intensity 为主，组件特异性（覆盖站点类型越少越靠前）
 *      与页面区域权重参与排序，保证候选跨区域、跨类别
 *
 * 词表见 references/taxonomy.json。用法：
 *   node scripts/select.mjs --site-type ai-product --background-mode 深底 --mobile-ratio 高 --text-overlay 可叠字
 *   node scripts/select.mjs --list-types
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseComponentsYaml } from "./yaml-lite.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const taxonomy = JSON.parse(readFileSync(path.join(ROOT, "references", "taxonomy.json"), "utf8"));
const components = parseComponentsYaml(readFileSync(path.join(ROOT, "references", "components.yaml"), "utf8"));

const SITE_LABELS = Object.fromEntries(taxonomy.site_type.items.map((it) => [it.id, it.label]));
/** 别名表：允许用中文 label 或 id 传参（Agent 常直接抄文档里的中文名） */
const SITE_ALIASES = Object.fromEntries(
  taxonomy.site_type.items.flatMap((it) => [[it.id, it.id], [it.label, it.id], [it.label.split("/")[0], it.id]])
);

/** 把任意写法（id / 中文 label / 带空格）归一化为 id，不可识别时抛带相近建议的错误 */
export function resolveSiteType(input) {
  const raw = String(input ?? "").trim();
  const hit = SITE_ALIASES[raw] || SITE_ALIASES[raw.replace(/\s+/g, "")];
  if (hit) return hit;
  const loose = taxonomy.site_type.items.find(
    (it) => it.label.includes(raw) || raw.includes(it.label) || it.id.includes(raw.toLowerCase())
  );
  if (loose) return loose.id;
  throw new Error(
    `未知 site_type: ${raw}\n合法 id：${taxonomy.site_type.items.map((it) => it.id).join(", ")}\n` +
      `也可用中文名（如「AI 产品」「作品集」）。完整词表见 taxonomy.json 或运行 --list-types`
  );
}
const REGION_PRIORITY = {
  background: 0.5,
  hero: 0.4,
  nav: 0.35,
  card: 0.3,
  gallery: 0.3,
  transition: 0.25,
  list: 0.2,
  overlay: 0.2,
  form: 0.1,
  cursor: 0.1,
};

/** 约束枚举的英文别名（英文 README / 非中文语境下传参友好） */
const ENUM_ALIASES = {
  background_mode: { dark: "深底", light: "亮底", any: "任意", both: "任意" },
  mobile_ratio: { high: "高", low: "低" },
  text_overlay: { overlap: "可叠字", "need-space": "需留白", clean: "需留白", any: "任意" },
};

/** 归一化约束取值：中文原值优先，其次英文别名，都失败则抛带合法值的错误 */
function resolveEnum(value, name, valid) {
  const raw = String(value ?? "").trim();
  if (valid.includes(raw)) return raw;
  const aliased = ENUM_ALIASES[name]?.[raw.toLowerCase()];
  if (aliased && valid.includes(aliased)) return aliased;
  const hints = Object.keys(ENUM_ALIASES[name] || {});
  throw new Error(`非法 ${name}: ${raw}（取值 ${valid.join("/")}${hints.length ? ` 或 ${hints.join("/")}` : ""}）`);
}

/** 三段式选型主函数（供 verify.mjs 以编程方式调用） */
export function select(query) {
  let { background_mode = "任意", mobile_ratio = "低", text_overlay = "任意" } = query;
  const site_type = resolveSiteType(query.site_type);
  background_mode = resolveEnum(background_mode, "background_mode", taxonomy.constraint.background_mode);
  mobile_ratio = resolveEnum(mobile_ratio, "mobile_ratio", taxonomy.constraint.mobile_ratio);
  text_overlay = resolveEnum(text_overlay, "text_overlay", taxonomy.constraint.text_overlay_query);

  // ---- 第 1 段：站点类型过滤 ----
  const pool = components.filter((c) => c.site_type.includes(site_type));
  if (pool.length < 3) {
    throw new Error(`site_type ${site_type} 候选池不足 3 个（当前 ${pool.length}），请扩充 components.yaml`);
  }

  // ---- 第 2 段：约束过滤/降权 + 第 3 段：强度排序 ----
  const scored = pool.map((c) => {
    const reasons = [];
    const hit = [];
    let score = c.visual_intensity;

    // 组件特异性：专属组件优先于大路货
    const spec = Math.max(0, 5 - c.site_type.length);
    score += spec * 1.6;
    if (spec >= 2) reasons.push(`高度契合「${SITE_LABELS[site_type]}」`);

    // 区域权重：整页推荐优先主视觉层
    const regionScore = Math.max(...c.region.map((r) => REGION_PRIORITY[r] ?? 0));
    score += regionScore;

    // 约束 1：背景明暗（背景类组件）
    if (c.category === "background") {
      if (background_mode === "深底" && !c.bg_light) {
        score += 0.8;
        hit.push("深底适配");
      } else if (background_mode === "亮底") {
        if (c.bg_light) {
          score += 0.8;
          hit.push("亮底适配");
        } else {
          score -= 3;
          reasons.push("仅深底设计，亮底下降权");
        }
      }
    }

    // 约束 2：移动端占比（高 = 触屏优先：轻量静态优先；低 = 桌面展示：指针/WebGL 大场面优先）
    if (mobile_ratio === "高") {
      if (c.input === "需鼠标") {
        score -= 3;
        reasons.push("移动端高占比降权（需鼠标）");
      }
      if (c.is_webgl) {
        score -= 2.5;
        reasons.push("移动端高占比降权（WebGL）");
      }
      if (c.perf_cost >= 5) {
        score -= 1.5;
        reasons.push("移动端高占比降权（性能开销 5）");
      }
      if (c.input === "静态" && !c.is_webgl) {
        score += 0.8;
        hit.push("移动端友好");
      }
      if (c.category === "text") {
        score += 0.6;
        hit.push("文本动效轻量适配移动端");
      }
      if (c.category === "micro") {
        score += 1.0;
        hit.push("触屏微交互核心载体");
      }
    } else {
      hit.push("桌面端优先");
      if (c.input === "需鼠标" || c.is_webgl) {
        score += 1.0;
        hit.push("指针/WebGL 展示位");
      }
      if (c.input === "触屏可降级") score += 0.4;
      if (c.perf_cost >= 4) score += 0.5;
      if (c.category === "component") {
        score += 0.4;
        hit.push("桌面组件展示位");
      }
    }

    // 约束 3：叠字（对背景/覆盖层生效）
    if (c.category === "background" || c.region.includes("overlay")) {
      if (text_overlay === "可叠字") {
        if (c.text_overlay === "须独立区") {
          score -= 2;
          reasons.push("须独立区，与可叠字约束冲突降权");
        } else if (c.text_overlay === "需留白") {
          score -= 0.5;
        } else {
          hit.push("可叠字");
        }
      } else if (text_overlay === "需留白" && c.text_overlay === "须独立区") {
        score -= 1;
        reasons.push("须独立区降权");
      }
    }

    if (!reasons.length) reasons.push(`通用候选（${c.category === "background" ? "背景氛围" : "强度 " + c.visual_intensity + " 级"}）`);
    hit.push(`强度 ${c.visual_intensity}/5`);

    return {
      id: c.id,
      category: c.category,
      region: [...c.region],
      score: Math.round(score * 100) / 100,
      visual_intensity: c.visual_intensity,
      reasons: reasons.slice(0, 2),
      constraints_hit: hit,
      avoid_when: c.avoid_when,
      deps: c.deps,
      is_webgl: c.is_webgl,
      input: c.input,
      perf_cost: c.perf_cost,
    };
  });

  scored.sort((a, b) => b.score - a.score || b.visual_intensity - a.visual_intensity || a.id.localeCompare(b.id));

  // top3 = 约束过滤后的强度排序前三（三段式的第三段产出）
  const picked = scored.slice(0, 3);

  return {
    query: { site_type, site_type_label: SITE_LABELS[site_type], background_mode, mobile_ratio, text_overlay },
    pool_size: pool.length,
    candidates: picked,
  };
}

// ---------- CLI ----------
function main() {
  const args = process.argv.slice(2);
  if (args.includes("--list-types")) {
    console.log("site_type（taxonomy.json）：");
    for (const it of taxonomy.site_type.items) console.log(`  ${it.id.padEnd(22)} ${it.label}`);
    return;
  }
  const get = (flag) => {
    const i = args.indexOf(flag);
    return i >= 0 ? args[i + 1] : undefined;
  };
  const query = {
    site_type: get("--site-type"),
    background_mode: get("--background-mode") ?? "任意",
    mobile_ratio: get("--mobile-ratio") ?? "低",
    text_overlay: get("--text-overlay") ?? "任意",
  };
  if (!query.site_type) {
    console.error("缺少 --site-type。可选值：node scripts/select.mjs --list-types");
    process.exit(2);
  }
  const result = select(query);
  if (args.includes("--json")) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }
  const q = result.query;
  console.log(`【${q.site_type_label}】背景=${q.background_mode} · 移动端=${q.mobile_ratio} · 叠字=${q.text_overlay}（候选池 ${result.pool_size}）`);
  for (const [i, c] of result.candidates.entries()) {
    console.log(`${i + 1}. ${c.id}（${c.category} · ${c.region.join("/")} · 强度 ${c.visual_intensity}/5）`);
    console.log(`   理由：${c.reasons.join("；")}；命中约束：${c.constraints_hit.join("、")}`);
    console.log(`   慎用：${c.avoid_when}`);
  }
}

const isMain = (() => {
  try {
    return process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
  } catch { return false; }
})();
if (isMain) {
  main();
}
