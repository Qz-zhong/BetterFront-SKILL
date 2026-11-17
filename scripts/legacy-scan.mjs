#!/usr/bin/env node
/**
 * BetterFront 遗留模式扫描器（v1.8.0）—— 轻量版 MWG legacy-scan
 *
 * 用途：交付前自查用户项目源码，找出「现代 Web 平台已有原生解法」的确定性遗留模式。
 * - 每条规则带 keepWhen / dropWhen：输出只是**候选**，必须人工核验后再改（防误报误改）。
 * - 只检确定性模式（约 12 条指引的子集），非全量 lint。
 * - 零依赖，Node >= 18。
 *
 * 用法：
 *   node scripts/legacy-scan.mjs <项目src目录> [--json]
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const EXT = new Set([".tsx", ".ts", ".jsx", ".js", ".css"]);
const SKIP_DIRS = new Set(["node_modules", "dist", "build", ".next", ".git", "out"]);

/** 8 条确定性遗留规则（与 pitfalls.md 第 8 节同源） */
const RULES = [
  {
    id: "scroll-listener-fx",
    title: "scroll 监听 + transform 手写滚动动效",
    modernAlt: "CSS scroll-driven animations（animation-timeline: view()/scroll()）",
    keepWhen: "需要读取真实滚动状态联动外部系统（如进度上传、非合成状态同步）",
    dropWhen: "仅做视差、进场 reveal、滚动进度条等视觉联动（含 Tailwind class 中的 fixed/translate）",
    patterns: [/addEventListener\(\s*['"`]scroll['"`]/, /(translate|transform|opacity)/],
    where: ["code"],
  },
  {
    id: "io-reveal",
    title: "IntersectionObserver 仅用于视觉 reveal",
    modernAlt: "CSS scroll-driven animations（@supports 回退）",
    keepWhen: "观察目的不是视觉 reveal（懒加载图片、埋点曝光、一次性业务触发）",
    dropWhen: "观察后只改 opacity/transform/class='reveal|show|visible' 做进场",
    patterns: [/new IntersectionObserver/, /(classList\.(add|toggle)|style\.(opacity|transform))/],
    where: ["code"],
  },
  {
    id: "manual-modal",
    title: "手写 fixed 覆盖层模态（state 开关）",
    modernAlt: "<dialog> + showModal() + ::backdrop + @starting-style",
    keepWhen: "已有完整 <dialog> 封装或需要非顶层的多实例浮层（极少见）",
    dropWhen: "fixed inset-0/position:fixed + isOpen/visible state + 遮罩点击关闭的经典三件套",
    patterns: [/(fixed inset-0|position:\s*fixed)/, /(isOpen|open|visible|show)\s*[=:]/i, /(backdrop|mask|overlay)/i],
    where: ["code", "css"],
  },
  {
    id: "manual-tooltip",
    title: "mousemove 手写定位 tooltip/浮层",
    modernAlt: "Popover API + CSS anchor positioning",
    keepWhen: "tooltip 需要逐帧跟随鼠标的特效形态（且无遮挡语义问题）",
    dropWhen: "贴着触发元素定位的普通 tooltip/下拉/气泡",
    patterns: [/onMouseMove|addEventListener\(\s*['"`]mousemove['"`]/, /(tooltip|popover|flyout|popup)/i],
    where: ["code"],
  },
  {
    id: "interval-carousel",
    title: "setInterval 驱动轮播/无限循环",
    modernAlt: "CSS keyframes 无限循环 + prefers-reduced-motion 关停",
    keepWhen: "轮播索引由业务数据/用户交互驱动（分页、受控状态）",
    dropWhen: "纯装饰性匀速循环（跑马灯、匀速轮播图）",
    patterns: [/setInterval\(/, /(carousel|slider|slide|marquee|rotate|轮播)/i],
    where: ["code"],
  },
  {
    id: "manual-theme",
    title: "dataset/classList 手写深浅色双份样式",
    modernAlt: "light-dark() + oklch 变量（color-scheme 声明）",
    keepWhen: "品牌要求两套主题差异超出颜色变量范围（布局/插画不同）",
    dropWhen: "同一套变量按明暗取两值的单页色板",
    patterns: [/dataset\.theme|classList\.(add|toggle)\(\s*['"`](dark|light|theme)/, /(theme|dark|light)/i],
    where: ["code", "css"],
  },
  {
    id: "legacy-polyfill",
    title: "引入遗留 polyfill / CDN 垫片",
    modernAlt: "移除（Baseline 广泛可用特性无需 polyfill；确需回退用 @supports ≤20 行）",
    keepWhen: "项目明确声明支持极老旧浏览器目标（并写在 AGENTS.md/CLAUDE.md 策略里）",
    dropWhen: "默认现代浏览器目标",
    patterns: [/polyfill\.io|core-js|whatwg-fetch|babel-polyfill|regenerator-runtime/],
    where: ["code"],
  },
  {
    id: "raf-dom-tween",
    title: "requestAnimationFrame 手写 DOM 补间",
    modernAlt: "CSS transition + linear() 缓动（或 View Transitions）",
    keepWhen: "canvas 2D / WebGL / Three / ogl 的渲染循环（画布内动画必须 rAF）",
    dropWhen: "对 DOM 元素 style.opacity/transform 做逐帧补间",
    patterns: [/requestAnimationFrame/, /style\.(opacity|transform|translate)\s*=/],
    where: ["code"],
  },
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) {
      if (SKIP_DIRS.has(name)) continue;
      yield* walk(p);
    } else if (EXT.has(path.extname(name))) {
      yield p;
    }
  }
}

function lineOf(lines, re) {
  for (let i = 0; i < lines.length; i++) {
    if (re.test(lines[i])) return { line: i + 1, excerpt: lines[i].trim().slice(0, 120) };
  }
  const m = lines.join("\n").match(re);
  return m ? { line: null, excerpt: m[0].slice(0, 120) } : null;
}

function scanFile(file, kind) {
  const content = readFileSync(file, "utf8");
  const lines = content.split(/\r?\n/);
  const findings = [];
  for (const rule of RULES) {
    if (!rule.where.includes(kind)) continue;
    const hits = rule.patterns.map((re) => lineOf(lines, re));
    if (hits.every((h) => h !== null)) {
      findings.push({
        id: rule.id,
        title: rule.title,
        modernAlt: rule.modernAlt,
        keepWhen: rule.keepWhen,
        dropWhen: rule.dropWhen,
        evidence: hits.map((h) => ({ line: h.line, excerpt: h.excerpt })),
      });
    }
  }
  return findings;
}

function main() {
  const args = process.argv.slice(2);
  const asJson = args.includes("--json");
  const target = args.find((a) => !a.startsWith("--"));
  if (!target) {
    console.error("用法：node scripts/legacy-scan.mjs <项目src目录> [--json]");
    process.exit(2);
  }
  const root = path.resolve(target);
  try {
    if (!statSync(root).isDirectory()) throw new Error("不是目录");
  } catch (e) {
    console.error(`目录不可访问：${root}（${e.message}）`);
    process.exit(2);
  }

  const results = [];
  for (const file of walk(root)) {
    const kind = path.extname(file) === ".css" ? "css" : "code";
    const findings = scanFile(file, kind);
    if (findings.length) results.push({ file: path.relative(process.cwd(), file), findings });
  }

  const total = results.reduce((n, r) => n + r.findings.length, 0);
  if (asJson) {
    console.log(JSON.stringify({ target: root, files: results.length, findings: total, results }, null, 2));
  } else {
    console.log(`[legacy-scan] 扫描 ${root}`);
    for (const r of results) {
      console.log(`\n${r.file}`);
      for (const f of r.findings) {
        console.log(`  - [${f.id}] ${f.title}`);
        console.log(`    → 原生替代：${f.modernAlt}`);
        console.log(`    → 保留条件：${f.keepWhen}`);
        console.log(`    → 排除条件：${f.dropWhen}`);
        for (const ev of f.evidence) console.log(`    证据 ${ev.line ? `L${ev.line}` : ""}: ${ev.excerpt}`);
      }
    }
    console.log(`\n[legacy-scan] ${results.length} 个文件命中 ${total} 条候选（输出仅为候选，须按 keepWhen/dropWhen 人工核验；指引见 references/modern-platform.md）`);
    console.log("[legacy-scan] 核验惯例：src/components 等目录下的第三方组件内部实现视为 vendor code，默认 drop —— 只核验/修复 Agent 自写的业务代码。");
  }
  process.exit(0);
}

main();
