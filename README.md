# BetterFront-SKILL

> **AI writes frontend. BetterFront makes it memorable.**
> 给 AI 编程助手装上动效前端大脑 —— 让 Claude Code / Trae / Cursor 等 Agent 写出更有"人味"的前端页面。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Agent Skills](https://img.shields.io/badge/spec-Agent%20Skills-green)
![Components](https://img.shields.io/badge/components-217-blueviolet)
![平台](https://img.shields.io/badge/%E5%B9%B3%E5%8F%B0-Claude%20Code%20%7C%20Trae%20%7C%20Cursor-orange)

**Unofficial community skill** —— 一个遵循开放 [Agent Skills](https://agentskills.io) 规范的编程助手技能（Skill），让 AI 在 React 项目中表现如熟悉动效组件库全量 API 的资深工程师。

---

## 为什么需要它

AI 写 React 动效页面有三大高频翻车点：

| 痛点 | BetterFront 的解法 |
|---|---|
| 组件名瞎编、变体后缀写错、忘装依赖 | 内置 **217 个组件目录快照**（自动同步官方数据源），38+ CLI ID 逐一核验，四变体（JS/TS × CSS/Tailwind）自动探测 |
| 选型靠猜，用户没有选择权 | **强制交互停点**：AI 只做「主题分析 → 2~4 候选 → 本地预览」，最终由你拍板 |
| 排版一股"AI 味" | **反模板黑名单 9 条 + 排版自查 14 条**（借鉴 GitHub 高星设计 Skill），写码前强制产出设计契约 |

## 效果对比：同一个 prompt，有无 Skill

> Prompt：*"帮我做一个 AI 写作助手 NovaWriter 的 SaaS 落地页"*
> 两个页面均为真实可打开的静态文件，见 [demo/comparison/](demo/comparison/)。

| 不使用 Skill（before） | 使用 Skill（after） |
|---|---|
| ![before](demo/comparison/screenshots/before.png) | ![after](demo/comparison/screenshots/after.png) |

**差异拆解**（对应 Skill 的具体能力）：

| Before 的"AI 味" | After 的做法 | 来自 Skill 的哪条规则 |
|---|---|---|
| 紫色渐变 + 渐变斜体高亮标题单词 | 深色底 + 单一品牌青色，仅强调核心词"定稿" | layout-guide · 反模板黑名单 #1/#7 |
| Lorem ipsum 占位文 | 真实感中文产品文案（会暴露布局问题才叫好占位） | layout-guide · 黑名单 #8 |
| 万物皆卡片：同圆角 + 同阴影 + 同尺寸三栏 | 卡片只用于真分组，非对称 3:2 栅格，零阴影 | layout-guide · 黑名单 #4 + 间距细则 |
| 全大写 eyebrow 挂每个标题 + 无意义大数字 01/02/03 | 元信息语义化；流程确为序列才用行内小序号 | layout-guide · 黑名单 #2/#3 |
| `10k+ · 1M+ · 99%` 中点串与泛泛数字 | 数据条 4 项均带可验证的具体口径 | layout-guide · 黑名单 #5 |
| 动效：无重点或过度装饰 | 全页唯一焦点动效 = 打字机轮播，其余静态 | layout-guide · 黑名单 #6 + "大胆只用在一处" |

打开 [demo/comparison/before.html](demo/comparison/before.html) 与 [demo/comparison/after.html](demo/comparison/after.html) 可在浏览器中直接对比（after 页含打字机动效，截图截不出来的部分更有感）。

## 能力一览

| 能力 | 说明 |
|---|---|
| 🎨 背景主题推荐 | 按网站主题做三步分析（领域词 + 氛围词 + 约束），给出候选背景与具体配色参数 |
| 🖱️ 交互层推荐 | 按钮 / 转场 / 微交互按「点缀 / 强调 / 沉浸」三级强度组合，杜绝动效堆砌 |
| 📐 排版设计规范 | 设计契约 → 骨架配方（看板 22:52:26 等）→ 8pt 间距 → 字阶 1.25 倍率 → 60-30-10 配色 |
| ✅ 双档可视化验证 | 1920×1080 + 1366×768 双分辨率截图自查，动画与排版一并确认 |
| 🔄 目录自动同步 | 一条命令从官方数据源更新组件目录，并校验全部引用的组件 ID 是否失效 |

## 安装

```bash
# Claude Code（全局）
git clone https://github.com/<you>/BetterFront-SKILL ~/.claude/skills/betterfront

# Trae（项目级）
git clone https://github.com/<you>/BetterFront-SKILL .trae/skills/betterfront

# 其他遵循 Agent Skills 规范的 Agent
将本仓库放入对应 skills 目录即可
```

安装后，直接对 Agent 说"帮我做一个 XX 网站 / 看板"，Skill 会自动介入选型流程。

## 兼容性

| Agent | 状态 |
|---|---|
| Claude Code | ✅ 实测 |
| Trae | ✅ 实测 |
| Cursor / Codex / Windsurf 等规范兼容 Agent | 🟡 社区验证中，欢迎反馈 |
| Vue / 小程序 / 非 React 框架 | ❌ 不适用 |

## Credits 致敬

本项目站在以下优秀开源项目的肩膀上，衷心感谢：

- [React Bits](https://github.com/DavidHDev/react-bits) —— 组件能力来源；组件目录数据同步自其官方 `llms.txt`
- [anthropics/skills](https://github.com/anthropics/skills) —— `frontend-design` Skill 的反模板黑名单与设计契约思想
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) —— 间距档位与视觉层级规则借鉴
- [impeccable-lite](https://github.com/ilindaniel/impeccable-lite) —— 排版细节与留白规则借鉴
- [shadcn-ui](https://github.com/shadcn-ui/ui) —— 组件安装 CLI 通道
- [Trae](https://www.trae.ai) · [Claude Code](https://claude.com/claude-code) —— Agent Skills 生态

> **声明**：BetterFront 为非官方社区项目，与 React Bits 及其商业版 Pro 无隶属关系。组件目录仅引用官方公开的组件名与描述，不包含、不转售任何组件源码。

## License

[MIT](LICENSE)
