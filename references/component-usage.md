# 组件用法速查（默认层高频组件）

> 用途：替代"只有目录描述没有源码指引"的缺口 —— 为选型结果中**最高频使用的 31 个组件**给出 import 路径、必需/关键 props、依赖包与实测踩坑。其余组件按同规则查阅官方文档页 `https://www.reactbits.dev/<category>/<slug>`。
> 依赖列表与 [catalog.md](catalog.md)「依赖」列同源（官方 registry 权威同步）。

## 0. import 路径与四种变体

shadcn CLI 安装后组件落在 `@/components/<Name>/<Name>.<ext>`，**import 时省略扩展名**：

| 变体 | 判定 | 文件 | import 写法 |
|---|---|---|---|
| TS-TW（默认文档展示） | TS + Tailwind | `Name.tsx` | `import Aurora from "@/components/Aurora/Aurora"` |
| TS-CSS | TS 无 Tailwind | `Name.tsx` + `Name.css` | 同上（需同时引入组件自带 CSS 的组件见踩坑列） |
| JS-TW | JS + Tailwind | `Name.jsx` | 同上 |
| JS-CSS | JS 无 Tailwind | `Name.jsx` + `Name.css` | 同上 |

变体后缀只影响文件与样式写法，**props 完全一致**。变体判定见 SKILL.md Step 3。

## 1. 文本动画（Text Animations）

| 组件 | 必需 props | 关键 props（默认值） | 依赖 | 常见踩坑 |
|---|---|---|---|---|
| SplitText | `text: string` | `delay=50` `effect='rise'`（rise/fade/blur/flip/pop/skew/wave）`splitType='chars'` `trigger='view'` `loop=false` | gsap、@gsap/react | 字体未加载完成会等待 `document.fonts.ready`；SSR 安全（内部已判断 window）；`mask` 需配合 splitType 行/字使用 |
| BlurText | `children`（文本节点） | `delay=100` `animateBy='words'` `direction='top'` | motion | 传纯文本而非 JSX；中文建议 `animateBy='words'`（按词组模糊进场更自然） |
| GradientText | children | `colors` 数组、`animationSpeed=8`、`showBorder=false` | 无 | 浅色底注意对比度（pitfalls 红线）；渐变色统一用品牌色 |
| RotatingText | `texts: string[]` | `rotationInterval=2200`、`loop`、`staggerDuration` | motion | 短语数量 ≥2 才有意义；轮换会隐藏非当前短语，不适合需要完整阅读的场景 |
| TextType | `text: string` | `typingSpeed=75`、`pauseDuration=1500`、`showCursor=true`、`loop` | gsap | 长文案打字过程拖慢阅读，仅用于短句；`loop` 会反复清空重打 |
| CountUp | `to: number` | `from=0`、`duration=2`、`separator=','`、`decimals` | motion | 需要滚动触发到位再播；交易/报表等要精确即时读数的场景不要用 |
| DecryptedText | `text: string` | `speed=50`、`characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ...'`、`revealDirection` | motion | 气质偏黑客，金融/医疗信任敏感首页避免 |
| ShinyText | children | `speed=5`、`disabled=false` | 无 | 纯 CSS 实现；只在深底/图片底上有"流光"效果，浅底正文禁用 |
| ScrollVelocity | children | `baseVelocity=-5`、`scrollContainer`、`damping` | motion | 速度跟随滚动方向，放在内容区之间做氛围；不要承载正文 |

## 2. 背景（Backgrounds）

| 组件 | 必需 props | 关键 props（默认值） | 依赖 | 常见踩坑 |
|---|---|---|---|---|
| Aurora | 无 | `colorStops={['#5227FF','#7cff67','#5227FF']}`、`amplitude=1`、`blend=0.5`、`speed=0.5`、`direction='top'`、`mouseInteraction=true` | 无（内联 WebGL） | 官方已重写为零依赖内联 shader，**无需安装 ogl**；移动端 `mouseInteraction={false}` 省电；挂在 `fixed inset-0` 全局层 |
| Silk | 无 | `color='#7e5bef'`、`speed=1`、`noiseIntensity`、`rotation` | 无（内联 WebGL） | 同上零依赖；深浅底都可用，配合遮罩层叠正文 |
| Particles | 无 | `particleCount=200`、`particleColors`、`particleBaseSize=3`、`moveParticlesOnHover=true`、`shape='square'` | 无（内联 WebGL） | `particleCount` 调低于 120 移动端更稳；`alphaParticles` 开启更柔和 |
| LetterGlitch | 无 | `glitchColors` 数组、`glitchSpeed=35`、`className`、`backgroundColor` | 无 | 纯 DOM 实现（轻量）；信任敏感页面（医疗/金融）避免故障气质 |
| Beams | 无 | `beamCount`、`beamColors`、`speed`、`intensity` | 无（内联 WebGL） | 深底专用，亮色底几乎不可见 |

## 3. 动画（Animations）

| 组件 | 必需 props | 关键 props（默认值） | 依赖 | 常见踩坑 |
|---|---|---|---|---|
| StarBorder | children | `color='#c084fc'`、`speed=5s`、`thickness=1px`、`className` | 无 | 恒常动效组件，单页只给 1 个主按钮用；多按钮同时巡光 = 焦点泛滥 |
| ElectricBorder | children | `color`、`speed=1`、`chaos=0.5`、`thickness` | 无 | 与 StarBorder 二选一，禁止同页两种强调风格 |
| Magnet | children | `padding=100`、`magnetStrength=5`、`disabled=false` | 无 | 纯指针驱动，触屏自动失效（不影响点击）；包住整个按钮而非容器 |
| ClickSpark | children（或全局包裹） | `sparkColor='#FFE066'`、`sparkSize=10`、`sparkCount=12`、`duration=400` | 无 | 包在页面根层捕获全局点击；后台工具类高频点击界面慎用 |
| AnimatedContent | children | `distance=100`、`direction='vertical'`、`duration=0.8`、`threshold=0.1` | gsap | 页面统一进场包装器，同页不要再叠 FadeContent（重复进场）；SSR 需 `"use client"` |
| FadeContent | children | `threshold=0`、`delay=0`、`duration=500` | gsap | 最轻进场；需要方向性/3D 进场改用 AnimatedContent |
| TiltedCard | —（children 或 imageSrc） | `imageSrc`、`captionText`、`rotateAmplitude=12`、`scaleOnHover=1.05`、`showTooltip=false` | 无 | 走指针倾斜，触屏降级为静态卡（内容不丢）；`containerClassName` 控制外框尺寸 |
| SpotlightCard | children | `className`、`spotlightColor='rgba(0,229,255,0.25)'` | 无 | 聚光跟随指针，触屏无聚光但卡片功能正常 |
| MagicBento | —（`items` 或 children） | `items` 数组、`columns`、`theme='dark'`、`glowColor`、`enableBorderGlow`、`enableTilt` | @hugeicons/react、@hugeicons/core-free-icons | 依赖 hugeicons 图标包（CLI 自动装）；触屏保留布局、失去边缘光跟随 |
| LogoLoop | `logos: LogoItem[]`（必需） | `speed=80`、`direction='left'`、`logoHeight=24`、`pauseOnHover=true`、`fadeOut=true` | 无 | Logo ≥6 个再上循环，1~2 个循环重复露馅；`layout='wave'/'arc'/'orbit'` 可做路径变体 |
| Dock | `items` 数组（官方示例必传） | `items`、`magnification=80`、`distance=150`、`panelHeight=68` | react-dom | 图标 ≤8 个，多了放大挤压；触屏失去放大但可点击 |

## 4. 微交互（Micro）

| 组件 | 必需 props | 关键 props（默认值） | 依赖 | 常见踩坑 |
|---|---|---|---|---|
| SquishSwitch | 受控 `checked`/`onCheckedChange`（按文档页签名） | `defaultChecked`、`disabled` | motion | 关键系统开关慎用（误触感知强）；时长 ≤400ms 红线 |
| CodeSlots | `onComplete` 回调 | `length=6`、`autoFocus`、`autoSubmit` | motion、@hugeicons/react | 只用于真实验证码输入；`paste`/SMS 自动填充已内置 |
| SwipeToast | `toasts` 数据驱动 | `duration`、`swipeDirection` | motion、@hugeicons/react | 错误提示等需要长时间驻留的场景不要自动消失 |

## 5. 3D 展示位（单页至多 1 个）

| 组件 | 必需 props | 关键 props（默认值） | 依赖 | 常见踩坑 |
|---|---|---|---|---|
| Lanyard | — | `count=[1,2,...]`（骰子点数）、`colors`、`position` | three | **必装 `npm i -D @types/three`**，Vite 需 `optimizeDeps.include: ['three']`；Next.js 必须 `next/dynamic` + `ssr:false`；体积大、GPU 重，正文页禁用 |

## 6. 通用踩坑（全部组件适用）

1. **安装后先 build**：`npm run build && npm run preview` 验证；Vite dev 模式对新依赖"按需发现"可能随机白屏（详见 pitfalls.md 第 7 节）
2. **依赖以 registry 元数据为准**：通道 A/B（MCP / CLI）自动安装依赖；手动复制源码前先核对 catalog.md「依赖」列
3. **props 与文档页一致**：组件页默认展示 TS-TW 变体；四种变体 props 相同，仅 import 路径与样式写法不同
4. **SSR**：所有动效组件 `"use client"`；WebGL/three 系组件动态导入关闭 SSR
5. **prefers-reduced-motion**：官方组件内部已响应（如 SplitText 直接呈现最终态）；自行封装的包装器需手动处理
