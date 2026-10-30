# 交互层选型指南（按钮 / 转场 / 微交互）

> 用途：用户要求"按钮/交互/转场更炫"或整页构建时，据此给出**交互组合候选**，经用户选择后落地。
> 与 theme-backgrounds.md（背景）平行的姊妹篇，输出格式与交互停点规则完全一致。
> 所有 CLI ID 均可在 [catalog.md](catalog.md) 核对；安装见 SKILL.md Step 3-4。
> **词表约束**：页面主题一律使用 [taxonomy.json](taxonomy.json) 的 `site_type`；旧版 7 个交互主题已 100% 映射进 taxonomy（见 `legacy_mappings.interactions`）。精确 top3 运行 `node scripts/select.mjs --site-type <id> --mobile-ratio 高|低`。

## 1. 三大类组件清单

| 类别 | 组件（CLI ID） | 效果一句话 | 强度 |
|---|---|---|---|
| **按钮强调类** | `StarBorder` | 星光沿按钮轮廓巡游 | 强调级 |
| | `ElectricBorder` | 电流裂纹描边，近鼠标加剧 | 强调级 |
| | `SpecularButton` | 玻璃按钮边缘高光滑向指针 | 强调级 |
| | `Magnet` | 按钮磁吸向指针、弹性归位 | 克制 |
| | `HoldButton` | 长按确认，液态填充上升 | 强调级 |
| | `SlingButton` | 弹弓拉放发送 | 强调级 |
| | `FuseButton` | 完成态带引信倒计时撤销 | 点缀级 |
| | `FlyingButton` | hover 点火起飞（WebGL） | 沉浸级 ⚡ |
| **转场/进场类** | `AnimatedContent` | 滚动进场统一包装（滑/模糊/3D） | 点缀~强调 |
| | `FadeContent` | 纯淡入进场 | 点缀级 |
| | `PixelTransition` | 像素溶解切换卡面 | 强调级 |
| | `FlipCard` | 3D 翻转双面卡 | 强调级 |
| | `PixelSwap` | 内容像素波重建 | 强调级 |
| | `Carousel` | 五态轮播 + 自动播放 | 强调级 |
| | `Stepper` | 步骤指示 glide 滑动 | 点缀级 |
| | `MorphSlider` | WebGL 图像融切 | 沉浸级 ⚡ |
| | `DecayCard` | 指针撕裂/复原 | 沉浸级 |
| | `RefineFrame` | 生成阶段步进无位移 | 点缀级 |
| **微交互控件类** | `SquishSwitch` / `SpringCheck` / `PeekRating` / `JellyRadio` | 开关 / 勾选 / 评分 / 单选 | 点缀级 |
| | `CodeSlots` / `ElasticSlider` / `WakeSlider` / `CometDial` / `RubberSegment` | 验证码 / 滑块 / 拨盘 / 分段 | 点缀级 |
| | `SwipeToast` / `SlideCommit` / `SwipeRow` | Toast / 滑动确认 / 滑动行 | 点缀级 |
| | `BellToggle` / `PulseHeart` / `WarmTooltip` | 通知铃 / 点赞 / 暖提示 | 点缀级 |

## 2. 交互强度分级（先定级别，再选组件）

| 级别 | 适用页面（site_type） | 组合约束（硬性） |
|---|---|---|
| **点缀级** | 工业/监控/看板（industrial-dashboard）、企业官网（enterprise）、金融（finance） | 1 种按钮强调（建议 Magnet）+ 1 套淡进场（FadeContent）；禁用花式转场 |
| **强调级** | SaaS 落地页（saas）、资讯/媒体（news-media）、AI 产品（ai-product） | 1 种按钮强调 + 1 套进场（AnimatedContent）+ 全页 ≤1 处花式转场 |
| **沉浸级** | 电商大促（promo-campaign）、产品发布页（product-launch）、游戏（gaming）、音乐/派对（music-party） | 按钮组 + 转场组 + 微交互组可同时用，仍受 pitfalls 性能红线约束 |

## 3. 站点类型 → 交互风格映射（site_type 统一词表）

| site_type（label） | 按钮 | 转场/进场 | 微交互 | 总基调 |
|---|---|---|---|---|
| 工业/监控/看板（industrial-dashboard） | `Magnet` | `FadeContent` | `SwipeToast` | 克制型（点缀级） |
| AI 产品/科技媒体（ai-product） | `StarBorder` | `AnimatedContent` | `CountUp` 联动 | 科技型（强调级） |
| 极客/开发者（dev-tool） | `ElectricBorder` | `GlitchText` 标题联动 | `CodeSlots` | 终端型（强调级） |
| 电商/大促活动（ecommerce · promo-campaign） | `StarBorder` + `ClickSpark` | `PixelTransition` | `PeekRating` + `SwipeToast` | 热闹型（沉浸级） |
| 作品集/设计（portfolio） | `SpecularButton` | `FlipCard` / `MorphSlider` | `ElasticSlider` | 质感型（强调级） |
| 金融/企业官网（finance · enterprise） | `Magnet` | `FadeContent` | `SlideCommit` | 稳重型（点缀级） |
| 儿童/娱乐（kids · music-party） | `SlingButton` | `BounceCards` | `JellyRadio` + `PulseHeart` | 趣味型（沉浸级） |

> 上表是**人工示例集**（v1.6 沿革），不再是唯一决策源。其余 18 个 site_type 的精确 top3 与移动端/桌面端变体，运行 `node scripts/select.mjs --site-type <id> --mobile-ratio 高|低`。映射表未覆盖的主题：取最近领域行 + 按钮强度降一档（宁克制勿过度）。

## 4. 输出格式（含强制交互停点）

```text
【交互层分析】页面类型：xxx → 强度级别：点缀/强调/沉浸
【候选组合】2~3 套，每套含：
  组合名（如"科技型"）
  按钮：CLI ID + 参数建议（颜色/时长）
  进场/转场：CLI ID + 用在哪类区块
  微交互：CLI ID（≤2 个）
  一句话理由
【预览】本地 ?fx= 演示地址 / 官方组件页链接
→ 停下等待用户选择，禁止代选（用户明确委托除外）
```

**交互停点（强制）**：与背景流程一致 —— 候选呈现后必须等待用户选择；仅用户明确委托（"你来定"）时才可代选并说明理由。

## 5. 组合红线（详见 pitfalls.md）

- 单页 **1 种按钮强调风格 + 1 套转场语言**，禁止两种强调按钮混用
- 表单区微交互 ≤ 3 种（"游乐园效应"）
- 转场组件用于内容切换，不用于页面路由跳转
- `FlyingButton` / `MorphSlider` 为 ⚡WebGL，计入单页 WebGL ≤ 2 预算
- 微交互是点缀：控件动效时长 ≤ 400ms，不打断操作流

## 6. 附录：交互对比预览页（?fx= 模式）

在背景预览页（theme-backgrounds.md 附录）基础上扩展：URL 带 `?fx=<组合名>` 时渲染交互演示页 —— 每套候选一行，展示真实按钮（默认/hover 态）、一个进场/转场 demo、微交互控件实物。要点：

- 与背景切换一样**整页跳转**切换组合（`?fx=tech` ↔ `?fx=geek`）
- 演示页只装候选涉及的组件，未选中的组合在落地前不进业务代码
- 演示完提醒用户：未选用组件可卸载，保持项目干净
