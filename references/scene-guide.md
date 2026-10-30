# 场景选型指南（人工示例集）

> **定位声明（v1.7.0）**：本文件是**人工整理的示例集，不再是唯一决策源**。权威选型路径 = `references/components.yaml`（217 组件全量属性池）+ `scripts/select.mjs`（三段式选型）。
> 旧版「首选 + 2 备选」的封闭结构已删除 —— 每个区域给出**开放示例**（≥3 个，仅示意可选项），完整排序一律以 select 脚本输出为准。
> 所有 CLI ID 均可在 [catalog.md](catalog.md) 查到与核对；安装与变体判定见 SKILL.md Step 3-4。
> **背景类需求**（用户只给网站主题/氛围词）优先读 [theme-backgrounds.md](theme-backgrounds.md)；**交互类需求**读 [interactions.md](interactions.md)；站点类型词表见 [taxonomy.json](taxonomy.json)。

## 1. 标准选型命令（先跑这个）

```bash
# 按站点类型 + 约束出 top3（词表见 taxonomy.json / --list-types）
node scripts/select.mjs --site-type saas --background-mode 深底 --mobile-ratio 高 --text-overlay 可叠字
node scripts/select.mjs --site-type portfolio --background-mode 亮底 --mobile-ratio 低 --text-overlay 需留白
node scripts/select.mjs --list-types
```

输出格式（每个候选含命中理由、约束命中与反例提示）：

```text
【SaaS 产品落地页】背景=深底 · 移动端=高 · 叠字=可叠字（候选池 23）
1. GradientBlinds（background · background · 强度 3/5）
   理由：高度契合「SaaS 产品落地页」；命中约束：深底适配、强度 3/5
   慎用：正文叠放区域
2. ...
3. ...
```

Agent 工作流：把脚本 top3 作为候选底池，再按下方区域示例表做区域微调与组合，最终仍按 SKILL.md「AI 给候选、用户拍板」输出 1 推荐 + 2 备选。

## 2. 按页面区域选型（开放示例，非封闭推荐）

下表每行是**该区域的示例组件集**（供组合参考，无先后之分）；同一区域在 components.yaml 的 `region[]` 下还有更多候选，由 select 脚本按 site_type/约束过滤。

| 页面区域 | 示例组件（开放集） | 选择提示 |
|---|---|---|
| Hero 大标题入场 | SplitText / BlurText / GradientText / RotatingText / DecryptedText | 逐字交错最通用；GradientText 适合品牌渐变色常驻标题 |
| 标题轮换 / 多短语 | RotatingText / TextType / TrueFocus / Shuffle | 3D 翻转轮换 / 打字机 / 逐词聚焦 |
| 数字与数据展示 | CountUp / Counter / SloshGauge / ScrubField | 滚动计数 / 翻牌里程表 / 液体仪表盘 |
| 页面背景（氛围感） | Aurora / Silk / Particles / GridMotion / SoftAurora | 背景层只选 1 个；叠字需求看 components.yaml text_overlay |
| 页面背景（强科技感） | LiquidChrome / Beams / Iridescence / Prism / Galaxy | 多为 shader 实现，注意 perf_cost 与 WebGL 预算 |
| 深色极客风背景 | LetterGlitch / FaultyTerminal / DotGrid / CRTWarp | 字符故障 / CRT 终端 / 弹性点阵 |
| CTA 按钮 / 重要入口 | StarBorder / ElectricBorder / Magnet / SpecularButton / HoldButton | 单页只选 1 种强调风格 |
| 导航栏 | CardNav / StaggeredMenu / FlowingMenu / Dock / GooeyNav / PillNav | 卡片展开 / 全屏交错 / 液体滑带 / Dock 放大 |
| 卡片容器 | TiltedCard / SpotlightCard / GlareHover / BorderGlow / GlassSurface | 3D 倾斜 / 聚光跟随 / 扫光 / 发光边框 |
| 特色功能网格 | MagicBento / ChromaGrid / GlassIcons / AnimatedList | Bento 网格 / 聚光显色照片卡 / 液态玻璃图标 |
| 图片画廊 | Masonry / CircularGallery / DomeGallery / Stack / AccordionGallery | 瀑布流 / 3D 环形 / 半球穹顶 / 可拖卡堆 |
| 作品 / 海报展示 | FlyingPosters / OrbitImages / BounceCards / ScrollExpand | 3D 海报墙 / 轨道环绕图 / 弹跳卡扇 |
| 品牌 / Logo 墙 | LogoLoop / MetallicPaint / ElectricLogo | 无限滚动 / 液态金属覆盖 / 电流描边 |
| 滚动进场（通用包装） | AnimatedContent / FadeContent / ScrollReveal / ScrollFloat | 统一进场包装器；纯淡入用 FadeContent |
| 滚动氛围文字 | ScrollVelocity / TextLoop / CurvedLoop | 速度感应跑马灯 / 曲线循环文字 |
| 表单开关类微交互 | SquishSwitch / SpringCheck / PeekRating / JellyRadio / CodeSlots | 开关 / 勾选 / 星级评分 / 单选 chips / 验证码 |
| 输入与提交反馈 | HoldButton / ElasticSlider / SwipeToast / SlideCommit / SlingButton | 长按确认 / 弹性滑块 / 滑动 Toast |
| 流程与状态 | Stepper / FlipCard / StatusMark / ThoughtLine | 步骤条 / 翻卡 / 状态符号 |
| 光标特效（点缀） | ClickSpark / SplashCursor / ImageTrail / Ribbons / BlobCursor | 点击火花 / 流体墨迹 / 图片拖尾；触屏需降级 |
| 3D 展示位（单页至多 1 个） | Lanyard / ModelViewer / FluidGlass / Cubes / InfiniteSpiral | 吊牌 / 产品模型 / 折射玻璃 / 立方墙 |

## 3. 按意图关键词速查

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

## 4. 选型原则

1. **动效密度递减**：主视觉 > 内容区 > 微交互；背景只选 1 个
2. **同类不叠加**：一个页面 1 种背景、1 种卡片强调、1 套进场方式
3. **色彩一致**：所有发光/渐变组件的颜色参数统一到品牌色，避免五颜六色
4. **移动端**：光标跟随类失效需降级（清单见 theme-backgrounds.md 第 5 节）；WebGL 类减半或移除（select `--mobile-ratio 高` 自动降权）；进场类保留
5. **定稿前**：过一遍 [pitfalls.md](pitfalls.md)，特别是性能与可访问性红线
