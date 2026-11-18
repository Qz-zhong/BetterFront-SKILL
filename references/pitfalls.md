# 反模式与红线

选型后、写代码前必读。违反任何一条都可能造成性能崩坏或用户反感。

## 1. 性能红线

- **WebGL/shader 组件单页 ≤ 2 个**，移动端项目慎用。catalog 中带 ⚡WebGL 标记的组件由脚本按「依赖含 ogl/three ∪ 描述含 webgl/shader」自动标记（v1.7.0 规则，19 个）。注意：官方已将多数背景重写为**零 npm 依赖的内联 WebGL**（如 Aurora、Silk、Particles），它们可能无 ⚡ 标记但仍是 shader 实现 —— 背景类组件使用前一律按 components.yaml 的 `perf_cost` 与组件文档页确认性能预算
- three.js 系组件（Lanyard、ModelViewer、Hyperspeed 等，deps 列已标 three）安装体积大、GPU 开销高，单页至多 1 个展示位
- 背景组件用 `absolute` + 固定高度定位，不参与文档流，避免触发整页重排
- 同页多个 WebGL 组件会受浏览器 WebGL 上下文数量限制，可能初始化失败

## 2. 可访问性红线

- 所有动效必须响应 `prefers-reduced-motion: reduce`：WebGL/循环动画 → 静态首帧；进场动画 → 直接呈现最终态
- 文本动画组件必须保留真实文本节点（可选中、可复制、可被读屏朗读），不能只剩视觉字符
- 对比度：发光文字（GradientText/ShinyText）注意在浅色背景上的可读性

## 3. 克制红线

- 一屏最多 **1 个焦点动效**，其余做氛围或静态
- **文本动画不用于长段落正文**，只用于标题/短语/数字
- 同类不叠加：1 个背景 + 1 种卡片强调 + 1 套进场方式
- 动效为内容服务：如果删掉动效页面更好，就删掉

## 4. 兼容性红线

- **光标跟随类组件在触屏设备上无效果**，必须设计降级（如改 hover/点击触发，或静态首帧呈现）。光标类组件（region 含 cursor）与 **46 个 cursor 驱动背景**的完整降级清单见 [theme-backgrounds.md 第 5 节](theme-backgrounds.md)；逐组件的输入模式见 components.yaml 的 `input` 字段（`静态` / `需鼠标` / `触屏可降级`），select 脚本在 `--mobile-ratio 高` 时会自动降权前两类
- 完整清单见本文第 8 节，与 theme-backgrounds.md 第 5 节同源，verify.mjs 会逐个核对两者是否一致
- **SSR / Next.js**：绝大多数组件需要 `"use client"`；WebGL 系组件访问 `window`，需动态导入关闭 SSR（`next/dynamic` + `ssr: false`）
- React 18+ 项目注意 StrictMode 双挂载对动画初始化的影响，官方示例默认兼容，自行改造时留意清理函数

## 5. 许可与边界

- 许可证：MIT + Commons Clause —— 组件可自由用于个人与商业项目，但**不得将组件本身单独出售或再分发**
- 免费库与 React Bits Pro 是两个独立 registry；Pro 安装命令需要 license key，**禁止在无 license 时建议 Pro 命令**
- 免费库没有页面级 blocks / 模板；整页由免费组件组合（见 recipes.md）

## 6. 交互组合红线（详见 interactions.md）

- 单页 **1 种按钮强调风格 + 1 套转场语言**，禁止两种强调按钮混用（如 StarBorder + ElectricBorder 同页）
- 表单区微交互控件 ≤ 3 种动效，避免"游乐园效应"
- 转场组件（PixelTransition / FlipCard / MorphSlider）用于**内容切换**，不用于页面路由跳转
- 控件微交互动效时长 ≤ 400ms，不打断操作流
- 页面类型决定强度上限：看板/后台 = 点缀级，landing/资讯 = 强调级，活动/发布 = 沉浸级（详见 interactions.md 第 2 节）

## 7. 工程兼容性（实测踩坑，2026-10）

- **shadcn CLI v4+ 参数变更**：`init -b` 现在是组件基座（`base` / `radix` / `aria`），不再是基础色；预设用 `-p nova` 等名称（不带前缀）。旧教程的 `-b neutral` 会报错。Vite 项目初始化：`npx shadcn@latest init -b base -p nova --no-monorepo`
- **three 系组件（Hyperspeed 等）**：装组件后需 `npm i -D @types/three`，并在 `vite.config.ts` 加 `optimizeDeps: { include: ['three'] }`
- **官方组件偶与项目 strict lint 冲突**（如未使用的回调参数触发 `noUnusedParameters`）：最小修复 = 参数加 `_` 前缀，不要全项目关 lint
- **Vite dev 模式依赖发现竞态**：新装组件后 dev server 对新依赖（three/ogl）"按需发现"，浏览器可能随机白屏 + `net::ERR_ABORTED`；生产构建无此问题。**验证动效一律 `npm run build && npm run preview`**
- **背景对比预览页**：一次只挂载一个背景（切换用整页跳转），避免多 WebGL 上下文互抢（方案见 theme-backgrounds.md 附录）
- **镜像坏包**：npm 镜像偶发包不完整（如 create-vite 缺模板目录），报 ENOENT 时降版本重试（如 `npm create vite@8`）

## 8. 触屏降级清单（cursor 驱动背景 46 个）

与 [theme-backgrounds.md 第 5 节](theme-backgrounds.md)同源（同一份 catalog 官方描述推导，46/63 背景描述含 cursor）。触屏设备上光标交互**无效果**，移动端占比高时必须按以下原则处理：

| 情况 | 处理 |
|---|---|
| 动效主体不依赖光标，触屏仅失去交互增强 | 可直接用；触屏端用 `matchMedia('(pointer: coarse)')` 停用指针监听，静态/自主动画首帧照常呈现 |
| 交互即卖点（Ballpit 推球、LiquidEther 搅动等） | 移动端改用**静态首帧降级**或换低交互背景，并在交付说明中告知用户差异 |

**清单（46 个）**：Antigravity, Aurora, Balatro, Ballpit, Beams, DarkVeil, Dither, DotField, DotGrid, FaultyTerminal, Ferrofluid, FloatingLines, FluxLines, Galaxy, GradientASCII, GradientBlinds, GradientWaves, Grainient, GridDistortion, Iridescence, LetterGlitch, Lightfall, Lightning, LightPillar, LightRays, LightTunnel, LiquidChrome, LiquidEther, MagicRings, MagnetLines, MoltenMetal, Orb, Particles, PixelBlast, PixelSnow, Plasma, PrismaticBurst, Scanner, ShapeGrid, SideRays, Silk, SlicedWaves, Threads, Topography, Waves, WebThreads

> 逐组件的输入模式以 components.yaml 的 `input` 字段为准（`静态` / `需鼠标` / `触屏可降级`），select 脚本在 `--mobile-ratio 高` 时自动降权前两类。

## 9. 遗留模式黑名单（v1.8.0，参考 Modern Web Guidance）

现代 Web 平台已有原生解法的场景，**默认不写遗留实现**；交付前跑 `node scripts/legacy-scan.mjs <项目>/src` 产出候选，逐条按 keepWhen/dropWhen 核验。写法与回退见 [modern-platform.md](modern-platform.md)：

| # | 遗留模式 | 原生替代 |
|---|---|---|
| 1 | `addEventListener('scroll')` + transform 手写滚动动效 | scroll-driven animations（`@supports` 回退） |
| 2 | IntersectionObserver 仅做视觉 reveal | scroll-driven animations |
| 3 | 手写 fixed 覆盖层模态（state 开关 + 遮罩） | `<dialog>` + `::backdrop` + `@starting-style` |
| 4 | mousemove 手写定位 tooltip/浮层 | Popover API + anchor positioning |
| 5 | `setInterval` 驱动装饰性匀速轮播 | CSS keyframes 无限循环 + `prefers-reduced-motion` 关停 |
| 6 | dataset/classList 手写深浅色双份样式 | `light-dark()` + oklch 变量 |
| 7 | 引入 polyfill.io / core-js 等垫片（默认现代目标） | 移除；确需回退用 `@supports` ≤20 行 |
| 8 | requestAnimationFrame 逐帧补间 DOM opacity/transform | CSS transition + `linear()`（canvas/WebGL 循环除外） |

> 铁律：新特性裸用必须带回退且回退态内容完整；单条回退 ≤20 行、零依赖；超预算改用 React Bits 组件方案。核验惯例：**第三方组件内部实现（如 `src/components` 下安装的组件源码）视为 vendor code，默认 drop** —— 只对 Agent 自写的业务代码做核验与修复（与 MWG 的 false-positive 分类一致）。

## 10. 整页视觉完整性（v1.8.0 实战胜出）

| 症状 | 后果 | 判定与修法 |
|---|---|---|
| 全页共用一张底色，只有 Hero 有背景 | 滚到第二屏起像未完成稿 | 每个主要区块一条全宽背景带（layout-guide §2.1），相邻区块靠明暗 / 纹理区分 |
| 背景只铺在卡片里 | 背景被卡片裁切，页面仍是大片留白 | 背景层 `absolute inset-0` 铺满 section，内容 `relative z-10` |
| 除 Hero 外全页无动效 | 用户感知为"静态页面 + 一个炫背景" | 一条带配一种适配动效（统计 / 卡堆 / 滚动生长 / 光斑），仍守"一屏 1 焦点" |
| 每条带都塞一个背景组件 | 首屏外多个画布 / rAF 常驻，滚动掉帧 | 背景组件全页 ≤2（WebGL ≤2，见 §1），其余用 CSS 纹理 / 渐变 |

> 铁律：验收时**滚到第二屏以后**再看 —— 若背景在此处"消失"，判为未完成；只验收首屏等于没验收。
