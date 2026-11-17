# 原生平台优先指引（Modern Platform First）

> 用途：选型前的**分流器**——能用现代 Web 平台原生能力达成的简单动效/浮层/排版不引库；高级视觉动效（WebGL、物理、逐字编排）仍走 React Bits（见 catalog.md）。
> 风格借鉴 [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance)（Chrome/Edge/Firefox/MDN 联合维护）：每个指引给出适用判据 → 最小代码 → 回退策略 → Baseline 状态。
> 加速层：环境可用时优先跑官方 262 指引 `npx -y modern-web-guidance@latest search "<2~5词动宾查询>"` / `retrieve "<id>"`（用法见 SKILL.md 第 5 节）；离线/不可用时用本文件兜底，工作流不中断。

## 0. 分流原则（一句话）

**平台能原生达成的简单动效不引库；替换判据不满足时一律回到 React Bits。**

## 1. 原生指引（12 个高价值特性）

### 1.1 scroll-driven animations（滚动驱动动画）

- **何时用**：滚动进场 reveal、视差、进度条联动——凡「随滚动位置播放」的动效，替代 `addEventListener('scroll')` / IntersectionObserver + JS 补间。
- **最小代码**：

```css
@supports (animation-timeline: view()) {
  .reveal {
    animation: reveal linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 35%;
  }
  @keyframes reveal {
    from { opacity: 0; translate: 0 40px; }
    to   { opacity: 1; translate: 0 0; }
  }
}
```

- **回退**：`@supports` 外不写动画（内容直接可见），或退回 React Bits FadeContent/ScrollReveal（gsap/motion 已内置回退）。
- **Baseline**：Chrome/Edge 115+，Firefox/Safari 仍在实现 → 必须带 `@supports`，回退路径里内容不得被隐藏。
- **React 适配**：纯 CSS 类名即可，无需组件；SSR 无额外 guard（CSS 层特性）。

### 1.2 View Transitions（转场）

- **何时用**：SPA 路由/状态切换的元素转场（列表 → 详情共享元素）、整页 MPA 转场。
- **最小代码**：

```ts
function swap(view: ReactNode) {
  if (document.startViewTransition) {
    document.startViewTransition(() => { flushSync(() => setView(view)); });
  } else {
    setView(view); // 回退：直接切换
  }
}
```

```css
::view-transition-old(root) { animation: fade-out 200ms both; }
::view-transition-new(root) { animation: fade-in 200ms both; }
```

- **回退**：特性检测 `document.startViewTransition`，缺失时直接 setState——**不做**补间库补齐。
- **Baseline**：Chrome/Edge 111+、Safari 18+，Firefox 实现中 → 特性检测即可。
- **React 适配**：回调内用 `flushSync` 提交 DOM；`react` 19 与 `<ViewTransition>` 实验属性并存时以手写 API 为准。

### 1.3 `<dialog>` + `::backdrop` + `@starting-style`（模态）

- **何时用**：任何模态/确认框。浏览器自带顶层（top layer）、Escape、焦点圈定、`inert` 背景——手写 fixed + state 开关的模态全部属于遗留模式。
- **最小代码**：

```tsx
function Confirm() {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button onClick={() => ref.current?.showModal()}>删除</button>
      <dialog ref={ref} onClick={(e) => { if (e.target === ref.current) ref.current.close(); }}>
        <p>确认删除？</p>
        <button onClick={() => ref.current?.close()}>取消</button>
      </dialog>
    </>
  );
}
```

```css
dialog[open] { opacity: 1; translate: 0 0; }
@starting-style { dialog[open] { opacity: 0; translate: 0 20px; } }
dialog { transition: opacity 200ms, translate 200ms, overlay 200ms allow-discrete, display 200ms allow-discrete; }
```

- **回退**：`<dialog>` 自 2022 年起 Baseline 广泛可用，无需回退；仅 `@starting-style` 入场动画在旧浏览器退化为直切。
- **React 适配**：通过 ref 调 `showModal()/close()`，不要用 `open` 属性受控写法（会绕过顶层与 inert）。

### 1.4 Popover API（浮层/菜单）

- **何时用**：菜单、tooltip 宿主、非模态浮层。`popover` 属性自带 light dismiss、顶层渲染、焦点管理——手写 `position: fixed` + 全局 click 监听的浮层属于遗留模式。
- **最小代码**：

```tsx
<button popovertarget="menu-1">选项</button>
<div id="menu-1" popover>
  {/* 菜单项；React 19 对新属性用 spread 透传，避免 @types 缺失报错 */}
  <button {...({ popovertargetaction: 'hide', popovertarget: 'menu-1' } as any)}>关闭</button>
</div>
```

- **回退**：Chrome/Edge 114+、Safari 17+，Firefox 125+；回退路径退回受控 state 浮层（已有实现不必重写）。
- **React 适配**：`popover`/`popovertarget` 在 React 19 已是合法属性；旧版本用 spread + `as any` 透传，勿删属性。

### 1.5 CSS anchor positioning（锚定浮层）

- **何时用**：浮层需要贴着触发元素定位（tooltip/下拉/气泡），替代 JS 测量 `getBoundingClientRect`。
- **最小代码**：

```css
.trigger  { anchor-name: --t1; }
.flyout   { position-anchor: --t1; position-area: bottom span-right; position-visibility: anchors-visible; }
@supports not (anchor-name: --x) { .flyout { position: absolute; } }
```

- **回退**：`@supports not` 分支退回 CSS absolute 定位；JS 测量仅作为最后一档。
- **Baseline**：Chrome/Edge 125+，Firefox/Safari 实现中 → 必须带回退分支。
- **React 适配**：`anchor-name` 含实例 id 时用 `useId()` 生成，避免同页多实例冲突。

### 1.6 `light-dark()` + oklch（色板与深浅色）

- **何时用**：设计契约色板单点声明、深浅色双主题。替代「`:root` 双份变量 + dataset.theme 手动切换」。
- **最小代码**：

```css
:root { color-scheme: light dark; }
:root {
  --bg: light-dark(oklch(98% 0.01 145), oklch(18% 0.03 220));
  --accent: oklch(75% 0.15 165);
}
```

- **回退**：`light-dark()` 基线广泛可用（2024）；oklch 全主流可用。旧 Safari 仅当项目声明支持时才写双份变量回退。
- **React 适配**：Tailwind v4 原生消费 CSS 变量，`bg-(--bg)`/任意值写法均可。

### 1.7 `text-box`（行高裁剪）

- **何时用**：大标题/按钮文字的「上松下紧」精确留白，替代手工 `line-height: 0.9` + 负 margin 微调。
- **最小代码**：`h1 { text-box: trim-both cap alphabetic; }`
- **回退**：`@supports not (text-box: trim-both cap alphabetic) { h1 { line-height: 1.05; } }`
- **Baseline**：Chrome/Edge 133+，其他实现中 → 装饰性增强，可放心带回退使用。

### 1.8 container queries（组件级响应式）

- **何时用**：卡片/侧栏组件按**容器**（非视口）宽度换布局——同一组件在主列与侧栏形态不同。
- **最小代码**：

```css
.card-wrap { container-type: inline-size; }
@container (min-width: 480px) { .card { grid-template-columns: 1fr 2fr; } }
```

- **Baseline**：2023 年起广泛可用，无回退负担。
- **React 适配**：容器类加在包裹 div 上；Tailwind v4 `@container` 原生支持。

### 1.9 滚动质感套件（scrollbar / snap / scrollend）

- **何时用**：横向卡片带、图片轨道、分区滚动容器。
- **最小代码**：

```css
.rail {
  overflow-x: auto;
  scrollbar-color: #5eead4 transparent;
  scrollbar-gutter: stable;
  scroll-snap-type: x mandatory;
}
.rail > * { scroll-snap-align: start; }
```

- **回退**：全部为渐进增强（不支持时退化为基础滚动条），无需分支。
- **注意**：`scrollend` 事件替代 scroll + debounce 判断停帧（Firefox/Chrome 已支持，Safari 实现中——需要时特性检测）。

### 1.10 `content-visibility: auto`（长页渲染性能）

- **何时用**：长营销页/列表页的视口外大区块，跳过屏外渲染成本，直接改善首屏与滚动 INP。
- **最小代码**：`.below-fold { content-visibility: auto; contain-intrinsic-size: auto 800px; }`
- **回退**：不支持时等同普通渲染；`contain-intrinsic-size` 防滚动条跳动。
- **注意**：屏内锚点跳转目标不要放在 `content-visibility: hidden` 区块内。

### 1.11 交互媒体查询（触屏/动效偏好）

- **何时用**：与 betterfront 既有触屏降级清单（theme-backgrounds 第 5 节）对接——光标组件在触屏的降级判断、动效尊重用户偏好。
- **最小代码**：

```css
@media (pointer: coarse) { /* 触屏：隐藏 hover 提示、放大点击区 */ }
@media (hover: none)     { /* 无悬停：常驻显示原 hover 才出现的内容 */ }
@media (prefers-reduced-motion: reduce) {
  .bg-fx { animation: none; }
  .reveal { animation: none; opacity: 1; translate: none; }
}
```

- **红线**：`prefers-reduced-motion: reduce` 时 scroll-driven/入场动画必须直接呈现终态（与 pitfalls 第 2 节一致）。

### 1.12 Baseline 与回退策略

- **默认策略**：Baseline Newly Available（发布当年）特性可用，但**必须**按各指引给回退；Baseline Widely Available 直接用。
- **回退预算**：单个特性回退代码 ≤ 20 行、零外部依赖；超过则改用 React Bits 组件方案。
- **禁止**：为单个 CSS 特性引入 polyfill 运行时；`@supports` 外隐藏关键内容（回退态必须内容完整）。
- **查询兼容性**：加速层可用时 `npx -y modern-web-guidance@latest search "<query>"` 直接读官方兼容性指引。

## 2. 原生替代映射表（React Bits → 原生）

> 用法：Step 2 选型前先查此表。**命中替换判据 → 用原生（带回退）；不命中 → 回 React Bits。**

| React Bits 组件 / 场景 | 原生方案 | 替换判据（全部满足才替换） |
|---|---|---|
| FadeContent / ScrollReveal / ScrollFloat | scroll-driven animations（1.1） | 纯透明度/位移进场；无需与滚动速度联动的复杂缓动编排 |
| TextLoop / ScrollVelocity（匀速循环） | CSS keyframes 无限循环（配 `prefers-reduced-motion` 关停） | 匀速、无限、无滚动变速交互 |
| 手写模态 / 确认框（catalog 无对位组件） | `<dialog>` + `@starting-style`（1.3） | 任何模态场景 |
| 手写 tooltip / 下拉 / 气泡 | Popover API + anchor positioning（1.4/1.5） | 无 gooey/液态等特殊视觉特效诉求 |
| 手写深浅色双份样式 | `light-dark()` + oklch（1.6） | 单页双色板、变量化色板 |
| 手写视差 / 滚动进度条 | scroll-driven animations（1.1） | 位移/透明度/缩放类；3D 视差仍归组件 |
| 路由/状态切换转场 | View Transitions（1.2） | 有可共享元素的切换语义 |
| 长页屏外大区块性能 | `content-visibility: auto`（1.10） | 页面 > 3 屏且区块高度可预估 |
| MorphSlider / PixelTransition / 弹性物理类 / WebGL 背景类 / 逐字文字类 | **无原生替代** | 高级视觉一律走 React Bits 选型（catalog.md） |

> 本表与 catalog.md 的关系：catalog 是**组件全量池**，本表是**分流器**。分流后仍需遵守 pitfalls 的性能红线与 layout-guide 的排版契约。
