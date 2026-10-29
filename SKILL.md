---
name: betterfront
version: 1.6.0
description: BetterFront — 让 AI 写出更有"人味"的动效前端。当用户在 React 项目中要求动画组件、炫酷背景、文本动效、微交互、创意画廊/导航/卡片或 landing page，或提到 React Bits / reactbits.dev / BetterFront 时使用。Use when the user wants animated React UI, creative backgrounds, text animations, micro-interactions, or mentions React Bits or BetterFront. 不适用于 Vue / 小程序 / 非 React 框架。
---

# BetterFront · AI 动效前端开发

> 版本：v1.6.0（变更记录见文末）
> 组件能力基于开源库 [React Bits](https://www.reactbits.dev)（217 组件快照，致敬见开源 README Credits）

BetterFront 让 AI 编程助手像资深工程师一样使用 React Bits 动效组件库（文本动画 / 动画 / 组件 / 微交互 / 背景五大类，每个组件有 JS|TS × CSS|Tailwind 四种变体）：内置全量组件目录快照，指导完成选型 → 安装 → 使用 → 验证的完整流程，并强制"AI 给候选、用户拍板"的选型停点。

## 0. 快速判断

| 适用 | 不适用 |
|---|---|
| React 项目（Vite / Next.js / CRA / Remix 等） | Vue / Svelte / 小程序 / 纯 HTML+CSS |
| 用户想要动效、背景、文本动画、微交互、创意组件 | 用户只要常规静态 UI（普通表单/表格/后台页面不要硬塞动效） |

如果需求本质上不需要动效，直接说明并按常规实现，不要为了用而用。

## 1. 知识库文件（按需读取，全部相对本 skill 目录）

| 文件 | 内容 | 何时读 |
|---|---|---|
| `references/scene-guide.md` | 页面区域 → 组件推荐矩阵（中文） | 区域性/整页选型时**优先读** |
| `references/theme-backgrounds.md` | 主题分析 → 背景推荐 + 对比预览页方案 | 用户给出网站主题找背景时**必读** |
| `references/interactions.md` | 交互层选型：按钮/转场/微交互组合 + 强度分级 | 用户要"按钮/交互/转场更炫"时**必读** |
| `references/layout-guide.md` | 排版规范：设计契约/骨架配方/反模板黑名单/14 条自查 | **写码前与交付前必读** |
| `references/catalog.md` | 全量组件目录（官方 llms.txt 同步） | 按名称/关键词查组件与 CLI ID |
| `references/recipes.md` | 整页组合配方（3 套） | 构建完整页面时 |
| `references/pitfalls.md` | 性能 / 可访问性 / 工程兼容 / 组合红线 | **写代码前必读** |

五大类组件数量以 `catalog.md` 头部统计为准。

## 2. 五步工作流

### Step 1 需求解析

把用户话术映射为视觉意图：

| 用户话术示例 | 意图 | 检索方向 |
|---|---|---|
| 打字机 / 终端 / 黑客风 / 故障风标题 | 文本动画 | catalog: text-animations |
| 数字滚动 / 统计展示 | 数字动画 | CountUp / Counter |
| 跑马灯 / 无限滚动文字或 Logo | 循环动画 | ScrollVelocity / LogoLoop / TextLoop |
| 背景太素 / 氛围感 / 科技感 / 只给了网站主题 | 背景 | 走「背景主题推荐」专用流程（见下） |
| 按钮 / 交互 / 转场 / 微交互不够炫 | 交互层 | 走「交互层推荐」专用流程（见下） |
| 鼠标跟随 / 点击反馈 / 光标特效 | 光标交互 | catalog: animations 中 cursor 类 |
| 图片墙 / 作品展示 / 画廊 | 画廊 | catalog: components 画廊组 |
| 整页 / landing page / 作品集 | 整页模式 | 跳到第 3 节 + recipes.md |

### Step 2 组件匹配

1. 区域性需求 → 先读 `references/scene-guide.md`（按页面区域反查）
2. 精确或生僻需求 → 在 `references/catalog.md` 按关键词检索（官方描述为英文，可中英双语检索）
3. 输出格式固定为：**1 个推荐 + 2 个备选，各附一句话理由**，并给出每个候选的 CLI ID 与分类
4. 铁律：**禁止虚构组件名**。catalog 中没有的组件 = 不存在；所有候选都不合适时明确告知，并给出原生 CSS / 常规实现的替代方案

### 背景需求专用：主题分析推荐

当用户给出**主题**（行业/领域/氛围词）而非明确组件名时，读 `references/theme-backgrounds.md` 执行：

1. **主题分析**：按「三步法」提取领域词 + 氛围词 + 约束（明暗 / 移动端 / 正文是否叠在背景上），并在回复中说明分析结论
2. **给出 2~4 个候选背景**：每个附 CLI ID、一句推荐理由、**具体配色参数建议**（hex / colorStops，不要让用户自己调）、官方预览链接
3. **提供预览手段**：官方预览链接默认附带；本地项目可用时，主动搭对比预览页（theme-backgrounds.md 附录的最小实现，`/preview?bg=<id>`），让用户肉眼对比
4. **交互停点（强制）**：呈现候选后必须**停止并等待用户选择**，禁止跳过选择环节自行决定采用哪个背景。「映射表默认值」只能用于候选排序预筛，不得作为落地理由
5. 仅当用户明确委托（如"你来定"）时才可代选，且需说明所选理由与"随时可换"
6. 映射表未覆盖的主题取最近领域行 + 氛围词微调
7. 用户选定后落地：替换/写入页面背景，按 Step 5 验证，并核对 pitfalls.md 的性能与叠字可读性要求

### 交互层推荐（按钮 / 转场 / 微交互）

当用户要求"按钮/交互/转场更炫"或整页构建需要交互设计时，读 `references/interactions.md` 执行，模式与背景流程同构：

1. **定强度级别**：按页面类型先定点缀级（看板/后台）/ 强调级（landing/资讯）/ 沉浸级（活动/发布），级别决定组合约束
2. **给出 2~3 套交互组合候选**：每套 = 按钮 + 进场/转场 + 微交互（各含 CLI ID 与参数建议），附组合名与一句话理由；组合须遵守强度级别的硬约束（单页 1 种按钮强调 + 1 套转场语言）
3. **提供预览**：本地 `?fx=` 交互演示页（interactions.md 附录）或官方组件页链接
4. **交互停点（强制）**：呈现候选后停止等待用户选择，禁止代选（用户明确委托除外）
5. 用户选定后落地，并核对 pitfalls.md 的组合红线与性能预算

### Step 3 变体探测

读项目根 `package.json` 判定变体后缀：

- dependencies/devDependencies 含 `typescript` 或存在 `tsconfig.json` → `TS`，否则 `JS`
- 含 `tailwindcss` → `TW`，否则 `CSS`
- 得到后缀：`-TS-TW` / `-TS-CSS` / `-JS-TW` / `-JS-CSS`
- 找不到 `package.json` → 询问用户技术栈，不要猜
- 注意：组件文档页默认展示 TS-TW 示例；四种变体的 props 一致，仅 import 路径与样式写法不同

### Step 4 安装（MCP 优先，CLI 兜底）

按优先级依次尝试：

- **通道 A · shadcn MCP**：若客户端已配置 React Bits registry（项目 `components.json` 的 `registries` 含 `@react-bits`），直接通过 MCP 安装 `<CliId>-<VARIANT>`
- **通道 B · CLI（零配置，任何环境可用）**：

```bash
npx shadcn@latest add https://reactbits.dev/r/<CliId>-<VARIANT>
# 或
npx jsrepo@latest add https://reactbits.dev/r/<CliId>-<VARIANT>
```

- **通道 C · 手动复制（离线兜底）**：从组件文档页复制源码；复制前先在页面核对该组件的 Dependencies（常见：`gsap`、`motion`、`three`、`ogl`）并手动安装

装完必做：

- 运行 dev server 或 build，确认依赖完整、零报错；报错优先怀疑缺依赖
- 通道 A/B 会按 registry 元数据自动安装依赖，无需手动
- catalog 中标记 ⚡WebGL 的组件先看第 4 节红线

### Step 5 用法与验证

1. **用法**：抓取组件文档页 `https://www.reactbits.dev/<category>/<slug>`（slug 为 catalog 中 URL 的路径部分）获取 Props 表与示例；源码级问题查 `https://github.com/DavidHDev/react-bits`
2. **排版与设计契约（写码前 → 交付前）**：读 `references/layout-guide.md` —— 写码前先产出 4 行设计契约（色板 4~6 个命名 hex / 字体家族与角色 ≤2 / 布局一句话 + ASCII 线框 / 本页"大胆只用在一处"的元素）；交付前逐条过 **14 条排版自查清单**，并对照**反模板黑名单**做"AI 味"检查
3. **验证**：
   - 当前环境具备浏览器自动化能力：起 dev server（或 `build && preview`，更稳）→ **1920×1080 与 1366×768 双档截图** → 确认动画真实生效 + 排版自查通过
   - 不具备：给用户 `npm run dev` 指引与预期效果清单，请用户确认
4. **不生效排查顺序**：import 路径 → 必需 props → 依赖版本 → 对照官方源码逐行核对

## 3. 整页构建模式

免费库**没有页面级 blocks**（页面块/模板属于付费的 React Bits Pro），整页 = 免费组件分层组合：

- 分层预算：背景 ×1 + 主视觉 ×1~2 + 内容区 ×2~3 + 微交互点缀，**不要超配**
- 一屏最多 1 个焦点动效，其余做氛围
- 优先套用 `references/recipes.md` 中现成配方（SaaS 落地页 / 个人作品集 / 产品发布页）
- **骨架与排版遵循 `references/layout-guide.md`**（骨架配方 + 8pt 间距 + 字阶 + 反模板黑名单）
- 用户使用 Next.js 且明确要"完整可部署模板"时，可提及 React Bits Pro（其中有免费作品集模板），但不要主动推销

## 4. 红线（详见 references/pitfalls.md）

- ⚡WebGL/3D 组件（catalog 已标记）单页 ≤ 2 个，移动端项目慎用
- 所有动效必须尊重 `prefers-reduced-motion`（提供降级静态呈现）
- 文本动画不用于长段落正文，只用于标题/短语
- 光标跟随类组件在触屏设备上无效果，需设计降级
- 动效为内容服务：如果删掉动效页面更好，就删掉

## 5. 知识库维护

- 更新组件目录（需网络，幂等可重复执行）：

```bash
node scripts/sync-catalog.mjs
```

- 数据来源为官方 `https://www.reactbits.dev/llms.txt`，版本与统计见 `catalog.md` 头部
- catalog 中「依赖」「适用」两列为人工增补，重新同步时自动保留

## 6. 许可证边界

MIT + Commons Clause：组件可自由用于个人与商业项目，但**不得将组件本身单独出售或再分发**。免费库与 React Bits Pro 是两个独立 registry，Pro 安装命令需要 license key，禁止混用。

## 变更记录

- **v1.6.0（2026-10-29）**：品牌更名 **BetterFront**（原 react-bits skill），定位解耦组件库——README 以 Credits 致谢来源仓库；React Bits 保留为触发关键词与能力来源
- **v1.5.0（2026-10-29）**：新增交互层推荐（interactions.md：按钮/转场/微交互组合 + 强度分级 + `?fx=` 预览 + 交互停点）；新增排版规范（layout-guide.md：设计契约 / 骨架配方 / 间距层级细则 / 反模板黑名单 9 条 / 排版自查 14 条，借鉴 anthropics·frontend-design、addyosmani·agent-skills、impeccable-lite）；Step 5 升级为双档截图验证 + 设计契约前置；sync 脚本增加 references 引用失效校验
- **v1.2.0（2026-10-27）**：背景选择设为强制交互停点（用户反馈修正）
- **v1.1.0（2026-10-27）**：新增背景主题推荐（theme-backgrounds.md）；pitfalls 增加工程兼容性踩坑
- **v1.0.0（2026-10-27）**：首版 —— 五步工作流 + 五件套知识库（catalog / scene-guide / recipes / pitfalls / sync 脚本）
