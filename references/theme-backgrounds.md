# 背景主题推荐指南

> 用途：用户只给出「网站主题 / 行业 / 氛围词」而未指定背景组件时，按本文件做主题分析，给出 **2~4 个最适配的背景候选**供用户选择。
> 配合 [catalog.md](catalog.md)（全量清单）与 SKILL.md 工作流使用。

## 1. 主题分析三步法

1. **提取领域词**：AI/科技、开发者、安全、金融、游戏、汽车、医疗、教育、电商、作品集、资讯媒体、企业官网、环保、音乐娱乐、太空……
2. **提取氛围词**：科技感 / 未来感 / 极客 / 高级感 / 稳重 / 活力 / 神秘 / 柔和 / 自然 / 复古……
3. **提取约束**（决定排序权重）：
   - 亮色还是深色底？（多数背景为深色设计，亮色底优先 Aurora / SoftAurora / Silk / Dither）
   - 正文是否直接压在背景上？→ 看「叠字友好」列
   - 移动端占比高？→ 优先低性能等级，交互类（光标驱动）注意触屏降级

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

> 性能列是粗估（低=canvas 2D / 中=轻 shader / 高=three 系重 3D），安装前以组件文档页 Dependencies 为准；叠字友好 = 背景上直接叠标题/正文的可读性。

## 3. 主题 → 推荐背景映射

| 网站主题 | 首推 | 备选 | 一句话理由 |
|---|---|---|---|
| AI / 大模型 / 科技媒体 | Particles | LetterGlitch · GridScan | 粒子星空是最经典的 AI 隐喻，理性且不抢内容 |
| 开发者工具 / 编程 | FaultyTerminal | LetterGlitch · GradientASCII | 终端是程序员的母语 |
| 网络安全 | LetterGlitch | Radar · FaultyTerminal | 故障字符场天然带"攻防"气质 |
| 数据 / BI / 分析 | Topography | GridScan · DotGrid | 等高线与网格自带"数据地形"感 |
| 金融 / 金融科技 | Beams | LiquidChrome · DarkVeil | 深色静谧高级感，稳重不轻浮 |
| 游戏 / 电竞 | Hyperspeed | Lightning · Prism | 冲击力优先，可以在首页用重动效 |
| 汽车 / 出行 / 物流 | Hyperspeed | LightTunnel · DotField | 速度感与产品强关联 |
| 医疗 / 健康 | SoftAurora | Orb · Aurora | 柔和洁净，避免压迫感 |
| 教育 / 知识 | Orb | Antigravity · Particles | 温暖聚焦，学习氛围 |
| 电商大促 / 营销活动 | Prism | PixelBlast · ShapeGrid | 绚烂热闹，转化氛围 |
| 作品集 / 设计师 | Iridescence | Silk · LiquidChrome | 艺术质感，作品是主角背景要退后 |
| 资讯 / 媒体 / 门户 | LetterGlitch | Particles · DotGrid | 字符场与"信息"属性呼应 |
| 企业官网（稳重） | Beams | GridMotion · Waves | 克制专业，商务可信 |
| 环保 / 自然 / 户外 | Topography | GradientWaves · Threads | 等高线/波纹的自然隐喻 |
| 音乐 / 娱乐 / 派对 | Prism | LiquidEther · PlasmaWave | 律动炫彩，情绪浓度高 |
| 太空 / 航天 | Galaxy | Particles · Hyperspeed | 星场穿越即主题本身 |
| 儿童 / 益智 | DotGrid | ShapeGrid · Ballpit | 圆润趣味、无攻击性 |

映射表没覆盖的主题：取**领域最近的行**做基准，再用氛围词在标签表里微调（如"法律"→ 企业官网行 + Dark Veil 换掉 Beams）。

## 4. 推荐输出格式

```
主题分析：领域词「XX」+ 氛围词「XX」+ 约束「深色 / 移动端 / 正文叠底」

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

## 5. 附录：背景对比预览页（最小实现）

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
