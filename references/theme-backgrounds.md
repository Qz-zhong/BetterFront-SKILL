# 背景主题推荐指南

> 用途：用户只给出「网站主题 / 行业 / 氛围词」而未指定背景组件时，按本文件做主题分析，给出 **2~4 个最适配的背景候选**供用户选择。
> 配合 [catalog.md](catalog.md)（全量清单）、[taxonomy.json](taxonomy.json)（统一词表）与 SKILL.md 工作流使用。
> **词表约束**：本文件出现的所有站点类型一律使用 [taxonomy.json](taxonomy.json) 的 `site_type`（id / label），禁止新造行业名；旧版 17 个主题行已 100% 映射进 taxonomy（见 taxonomy.json 的 `legacy_mappings.theme-backgrounds`）。精确选型请运行 `node scripts/select.mjs --site-type <id>`。

## 1. 主题分析三步法

1. **提取领域词** → 映射为 taxonomy 的 `site_type`（25 项，如「AI 产品」「开发者工具」「环保自然」，完整清单见 taxonomy.json / `node scripts/select.mjs --list-types`）
2. **提取氛围词**：科技感 / 未来感 / 极客 / 高级感 / 稳重 / 活力 / 神秘 / 柔和 / 自然 / 复古……
3. **提取约束**（词表 = taxonomy.json 的 `constraint`，决定排序权重）：
   - 亮度：`深底` / `亮底` / `皆可`（多数背景为深色设计，亮色底优先 Aurora / SoftAurora / Silk / Dither 等 `bg_light` 组件）
   - 叠字：`可叠字` / `需留白` / `须独立区`（正文是否直接压在背景上 → 看「叠字友好」列）
   - 移动端占比：`高` / `低`（占比高 → 优先低 perf_cost，光标驱动背景必须走第 5 节触屏降级清单）

## 2. 背景组件风格标签表（精选 25 个）

| CLI ID | 视觉 | 情绪关键词 | 亮度 | 叠字友好 | 性能 |
|---|---|---|---|---|---|
| Particles | 粒子星空、星座连线 | 理性、未来、AI | 深 | ★★★ | 中 |
| LetterGlitch | 字符矩阵、故障闪烁 | 极客、黑客、酷 | 深 | ★★★ | 低 |
| FaultyTerminal | CRT 终端、扫描线 | 极客、复古、硬核 | 深 | ★★★ | 低 |
| Gradient ASCII | ASCII 字符画 | 极客、艺术 | 深 | ★★ | 中 |
| DotGrid | 弹性点阵、冲击波 | 灵动、趣味 | 深 | ★★★ | 低 |
| GridMotion | 漂移瓦片墙 | 秩序、科技 | 深 | ★★★ | 低 |
| GridScan | 3D 网格房间扫描 | 科幻、精密 | 深 | ★★★ | 中 |
| Radar | 雷达扫描 | 侦测、警戒 | 深 | ★★★ | 低 |
| Topography | 发光等高线地形 | 探索、数据 | 深 | ★★★ | 中 |
| Hyperspeed | 高速光轨 | 速度、冲击 | 深 | ★★ | 高 |
| LightTunnel | 光隧道 | 穿越、深邃 | 深 | ★★ | 中 |
| Prism | 光谱棱镜 | 绚烂、炫彩 | 深 | ★★ | 中 |
| LiquidChrome | 液态金属 | 高级、冷峻、未来 | 深 | ★★ | 中 |
| Iridescence | 虹彩流体 | 梦幻、艺术 | 深 | ★★ | 中 |
| Beams | 暗中光带 | 高级、静谧 | 深 | ★★★ | 中 |
| Dark Veil | 暗纱光影 | 神秘、高级 | 深 | ★★★ | 中 |
| Plasma | 缎光暗流 | 高级、神秘 | 深 | ★★★ | 中 |
| Galaxy | 星场穿越 | 浩瀚、神秘 | 深 | ★★★ | 中 |
| Aurora | 极光渐变 | 平静、梦幻 | 深/亮 | ★★★ | 中 |
| Soft Aurora | 柔和极光 | 治愈、洁净 | 皆可 | ★★★ | 中 |
| Silk | 绸缎柔光 | 优雅、高级 | 皆可 | ★★★ | 中 |
| Threads | 漂浮丝线 | 轻盈、文艺 | 深 | ★★★ | 低 |
| Waves | 波纹线条 | 流动、柔和 | 深 | ★★★ | 低 |
| Orb | 呼吸光环 | 温暖、聚焦 | 深 | ★★★ | 低 |
| Dither | 像素抖动波 | 复古、趣味 | 皆可 | ★★★ | 中 |

> 性能列是粗估（低=canvas 2D / 中=轻 shader / 高=three 系重 3D），精确值见 components.yaml 的 `perf_cost`；叠字友好 = 背景上直接叠标题/正文的可读性（三档枚举见 taxonomy.json `constraint.text_overlay`）。未进本表的 38 个背景同样参与选型 —— 由 select 脚本按 components.yaml 全量池计算，不要把本表当封闭清单。

## 3. 站点类型 → 推荐背景映射（site_type 统一词表）

| site_type（label） | 首推 | 备选 | 一句话理由 |
|---|---|---|---|
| AI 产品/大模型（ai-product） | Particles | LetterGlitch · GridScan | 粒子星空是最经典的 AI 隐喻，理性且不抢内容 |
| 科技媒体（tech-media） | LetterGlitch | Particles · DotGrid | 字符场与「信息」属性呼应 |
| 开发者工具/编程（dev-tool） | FaultyTerminal | LetterGlitch · GradientASCII | 终端是程序员的母语 |
| 网络安全（cybersecurity） | LetterGlitch | Radar · FaultyTerminal | 故障字符场天然带「攻防」气质 |
| 数据/BI/分析（data-bi） | Topography | GridScan · DotGrid | 等高线与网格自带「数据地形」感 |
| 金融/金融科技（finance） | Beams | LiquidChrome · DarkVeil | 深色静谧高级感，稳重不轻浮 |
| 游戏/电竞（gaming） | Hyperspeed | Lightning · Prism | 冲击力优先，可以在首页用重动效 |
| 汽车/出行/物流（automotive） | Hyperspeed | LightTunnel · DotField | 速度感与产品强关联 |
| 医疗/健康（healthcare） | SoftAurora | Orb · Aurora | 柔和洁净，避免压迫感 |
| 教育/知识（education） | Orb | Antigravity · Particles | 温暖聚焦，学习氛围 |
| 电商大促/营销活动（promo-campaign） | Prism | PixelBlast · ShapeGrid | 绚烂热闹，转化氛围 |
| 作品集/设计（portfolio） | Iridescence | Silk · LiquidChrome | 艺术质感，作品是主角背景要退后 |
| 资讯/媒体/门户（news-media） | LetterGlitch | Particles · DotGrid | 字符场与信息属性呼应 |
| 企业官网（enterprise） | Beams | GridMotion · Waves | 克制专业，商务可信 |
| 环保/自然/户外（eco-nature） | Topography | GradientWaves · Threads | 等高线/波纹的自然隐喻 |
| 音乐/娱乐/派对（music-party） | Prism | LiquidEther · PlasmaWave | 律动炫彩，情绪浓度高 |
| 太空/航天（space） | Galaxy | Particles · Hyperspeed | 星场穿越即主题本身 |
| 儿童/益智（kids） | DotGrid | ShapeGrid · Ballpit | 圆润趣味、无攻击性 |

> 上表是**人工示例集**（v1.6 沿革，方便快速定位），不再是唯一决策源。其余 7 个 site_type（工业/监控/看板、企业电商、SaaS 落地页、产品发布页、时尚/奢侈品、旅行/酒店、餐饮/生活方式）以及上表所有类型的**精确 top3**，运行：
>
> ```bash
> node scripts/select.mjs --site-type <id> --background-mode 深底 --mobile-ratio 高
> ```
>
> 映射表没覆盖的氛围取领域最近的行做基准，再用第 2 节标签表微调（如「法律」→ 企业官网行 + Dark Veil 换掉 Beams）。

## 4. 推荐输出格式

```
主题分析：site_type「AI 产品（ai-product）」+ 氛围词「XX」+ 约束「深底 / 移动端高 / 可叠字」（枚举见 taxonomy.json）

推荐背景（2~4 个）：
1. <CliId> —— 理由；配色建议：<具体 hex / colorStops>；预览：https://www.reactbits.dev/backgrounds/<slug>
2. ...
3. ...

需要我搭一个本地预览页让你逐个对比吗？
```

- 每个候选必须给**具体配色参数建议**（hex 或 colorStops 数组），而不是让用户自己调
- 官方预览链接 slug 为组件页 kebab-case（如 LetterGlitch → `letter-glitch`）
- 深浅色未明确时，明暗假设写进分析结论，但**不代替用户选择**

**交互停点（强制）**：给出候选后必须停下等待用户选择。除用户明确委托（"你来定"）外，禁止跳过选择环节自行落背景 —— 本地可搭预览页时，把预览地址一并发给用户，等其拍板后再进入安装/替换。

## 5. 触屏降级清单（cursor 驱动背景，46 个）

下列 46 个背景的官方描述含 cursor 交互（光标驱动）。**触屏设备上光标交互无效果**，移动端占比高（`mobile_ratio: 高`）的项目必须降级：

- **动效主体不依赖光标、触屏仅失去交互增强** → 可直接用，建议在触屏上停用指针监听（`matchMedia('(pointer: coarse)')` 判断），静态/自主动画首帧照常呈现
- **交互即卖点**（如 Ballpit 的推球、LiquidEther 的搅动）→ 移动端改用**静态首帧降级**或换低交互背景，并在交付说明中告知用户差异

| # | CLI ID | # | CLI ID | # | CLI ID | # | CLI ID |
|---|---|---|---|---|---|---|---|
| 1 | Antigravity | 2 | Aurora | 3 | Balatro | 4 | Ballpit |
| 5 | Beams | 6 | DarkVeil | 7 | Dither | 8 | DotField |
| 9 | DotGrid | 10 | FaultyTerminal | 11 | Ferrofluid | 12 | FloatingLines |
| 13 | FluxLines | 14 | Galaxy | 15 | GradientASCII | 16 | GradientBlinds |
| 17 | GradientWaves | 18 | Grainient | 19 | GridDistortion | 20 | Iridescence |
| 21 | LetterGlitch | 22 | Lightfall | 23 | Lightning | 24 | LightPillar |
| 25 | LightRays | 26 | LightTunnel | 27 | LiquidChrome | 28 | LiquidEther |
| 29 | MagicRings | 30 | MagnetLines | 31 | MoltenMetal | 32 | Orb |
| 33 | Particles | 34 | PixelBlast | 35 | PixelSnow | 36 | Plasma |
| 37 | PrismaticBurst | 38 | Scanner | 39 | ShapeGrid | 40 | SideRays |
| 41 | Silk | 42 | SlicedWaves | 43 | Threads | 44 | Topography |
| 45 | Waves | 46 | WebThreads |  |  |  |  |

> 完整清单以 components.yaml `input` 字段为准（背景类 cursor 驱动 = `触屏可降级`）；此清单与 catalog.md 官方描述同步（46/63），verify.mjs 会逐个核对。

## 6. 附录：背景对比预览页（最小实现）

用户犹豫时主动提供此方案 —— 装好候选组件后，新建 `src/Preview.tsx` 并在 `main.tsx` 按 `location.pathname.endsWith('/preview')` 切换渲染：

```tsx
// src/Preview.tsx —— 访问 /preview?bg=<id> 逐个查看
const OPTIONS = [
  { id: 'particles', name: 'Particles 星空粒子', node: <Particles particleColors={['#67e8f9', '#818cf8', '#c084fc']} /> },
  { id: 'letterglitch', name: 'LetterGlitch 黑客字符', node: <LetterGlitch baseColor="#101013" /> },
  // ...候选背景
]
export default function Preview() {
  const current = new URLSearchParams(window.location.search).get('bg') ?? OPTIONS[0].id
  const opt = OPTIONS.find((o) => o.id === current) ?? OPTIONS[0]
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">{opt.node}</div>
      <div className="absolute inset-x-0 top-0 z-10 flex gap-2 p-4">
        {OPTIONS.map((o) => (
          <a key={o.id} href={`?bg=${o.id}`} className="rounded-full bg-zinc-900/70 px-3.5 py-1.5 text-xs text-zinc-300">
            {o.name}
          </a>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-8 z-10 text-center text-sm text-zinc-300">{opt.name}</div>
    </div>
  )
}
```

注意（实测踩坑）：

- 一次只挂载一个背景（切换 = 整页跳转），避免多个 WebGL 上下文互抢
- 验证动效时优先 `npm run build && npm run preview`，dev 模式新依赖"按需发现"可能造成随机白屏
- Hyperspeed 等 three 系组件需要 `npm i -D @types/three`，并在 vite.config 的 `optimizeDeps.include` 中加 `'three'`
