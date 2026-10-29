# React Bits 场景选型指南

> 用法：先定位「页面区域」，再在首选/备选里选。所有 CLI ID 均可在 [catalog.md](catalog.md) 查到与核对；安装与变体判定见 SKILL.md Step 3-4。
> **背景类需求**（用户只给网站主题/氛围词）请优先读 [theme-backgrounds.md](theme-backgrounds.md) 的主题分析流程，本表背景行仅是快捷索引。
> **交互类需求**（按钮/转场/微交互）请读 [interactions.md](interactions.md)；选型完成后排版遵循 [layout-guide.md](layout-guide.md)。
> 本表是官方文档没有的「场景 → 组件」反查视角，与 catalog.md（全量清单）配合使用。

## 1. 按页面区域选型（主表）

| 页面区域 | 首选 | 备选 | 选择提示 |
|---|---|---|---|
| Hero 大标题入场 | SplitText | BlurText / GradientText | 逐字交错最通用；GradientText 适合品牌渐变色常驻标题 |
| 标题轮换 / 多短语 | RotatingText | TextType / TrueFocus | 3D 翻转轮换 / 打字机 / 逐词聚焦 |
| 数字与数据展示 | CountUp | Counter / SloshGauge | 滚动计数 / 翻牌里程表 / 液体仪表盘 |
| 页面背景（氛围感） | Aurora | Silk / Particles / GridMotion | Aurora 平静科技感；Silk 高级绸缎；Particles 星空粒子 |
| 页面背景（强科技感） | LiquidChrome | Beams / Iridescence / Prism / Galaxy | 多为 shader 实现，注意性能预算 |
| 深色极客风背景 | LetterGlitch | Hyperspeed / DotGrid / Ballpit | 字符故障 / 光速公路 / 弹性点阵 / 物理球池 |
| CTA 按钮 / 重要入口 | StarBorder | ElectricBorder / Magnet | 星光描边 / 电流描边 / 磁吸按钮 |
| 导航栏（信息多） | CardNav | StaggeredMenu / FlowingMenu | 卡片展开导航 / 全屏交错菜单 / 液体滑带菜单 |
| 导航栏（轻量） | Dock | GooeyNav / PillNav | macOS Dock / 黏液药丸切换 / 胶囊导航 |
| 卡片容器 | TiltedCard | SpotlightCard / GlareHover / BorderGlow | 3D 倾斜 / 聚光跟随 / 扫光 / 发光边框 |
| 特色功能网格 | MagicBento | ChromaGrid / GlassIcons | Bento 网格 / 聚光显色照片卡 / 液态玻璃图标 |
| 图片画廊 | Masonry | CircularGallery / DomeGallery / Stack | 瀑布流 / 3D 环形 / 半球穹顶 / 可拖卡堆 |
| 作品 / 海报展示 | FlyingPosters | OrbitImages / BounceCards | 3D 海报墙 / 轨道环绕图 / 弹跳卡扇 |
| 品牌 / Logo 墙 | LogoLoop | MetallicPaint / ElectricLogo | 无限滚动 / 液态金属覆盖 / 电流描边 |
| 滚动进场（通用包装） | AnimatedContent | FadeContent / ScrollReveal / ScrollFloat | 统一进场包装器；纯淡入用 FadeContent |
| 滚动氛围文字 | ScrollVelocity | TextLoop / CurvedLoop | 速度感应跑马灯 / 曲线循环文字 |
| 表单开关类微交互 | SquishSwitch | SpringCheck / PeekRating / JellyRadio | 开关 / 勾选 / 星级评分 / 单选 chips |
| 输入与提交反馈 | CodeSlots | HoldButton / ElasticSlider / SwipeToast | 验证码槽 / 长按确认 / 弹性滑块 / 滑动 Toast |
| 流程与状态 | Stepper | FlipCard / SwipeToast | 步骤条 / 翻卡 / Toast |
| 光标特效（点缀） | ClickSpark | SplashCursor / ImageTrail / Ribbons | 点击火花 / 流体墨迹 / 图片拖尾 / 弹性丝带 |
| 3D 展示位（单页至多 1 个） | Lanyard | ModelViewer / FluidGlass / Cubes | 吊牌 / 产品模型 / 折射玻璃 / 立方墙 |

## 2. 按意图关键词速查

| 关键词 | 候选 CLI ID |
|---|---|
| 打字机 | TextType |
| 跑马灯 / 滚动字幕 | ScrollVelocity, LogoLoop, TextLoop, CurvedLoop |
| 故障 / 赛博朋克 | GlitchText, LetterGlitch, ScrambledText |
| 解密 / 黑客 | DecryptedText, ScrambledText |
| 发光 / 流光 | ShinyText, GradientText, StarBorder, BorderGlow |
| 鼠标跟随 | SplashCursor, BlobCursor, GhostCursor, SwarmCursor, PixelTrail, ImageTrail |
| 点击反馈 | ClickSpark, Magnet |
| 玻璃拟态 | GlassSurface, GlassIcons, FluidGlass |
| 像素 / 复古 | PixelCard, PixelTrail, Cubes |
| 拖拽互动 | Stack, InfiniteMenu, Ballpit, FallingText, Cubes |
| 悬停显色 / 变质 | ChromaGrid, DecayCard, HoloCard, PixelCard |
| 文字排布创意 | TextPressure, VariableProximity, CircularText, CurvedLoop, FallingText |

## 3. 选型原则

1. **动效密度递减**：主视觉 > 内容区 > 微交互；背景只选 1 个
2. **同类不叠加**：一个页面 1 种背景、1 种卡片强调、1 套进场方式
3. **色彩一致**：所有发光/渐变组件的颜色参数统一到品牌色，避免五颜六色
4. **移动端**：光标跟随类失效需降级；WebGL 类减半或移除；进场类保留
5. **定稿前**：过一遍 [pitfalls.md](pitfalls.md)，特别是性能与可访问性红线
