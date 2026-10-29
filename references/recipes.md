# React Bits 整页组合配方

> 免费库没有页面级 blocks，整页由下列**免费组件**分层组合而成。
> 每层的组件用法（Props）见对应文档页；安装与变体判定见 SKILL.md Step 3-4。
> 组装顺序建议：先搭静态布局 → 逐层替换为动效组件 → 每加一层浏览器实测一次。

---

## 配方 1：SaaS 产品落地页

| 层 | 组件 | CLI ID | 作用 |
|---|---|---|---|
| 背景 | Aurora | `Aurora` | 顶部极光氛围，平静科技感 |
| 主视觉 | Split Text | `SplitText` | Hero 标题逐字交错入场 |
| 主视觉 CTA | Star Border | `StarBorder` | 发光主按钮 |
| 内容区 | Magic Bento | `MagicBento` | 特性卡片 Bento 网格，边缘光跟随鼠标 |
| 内容区数据 | Count Up | `CountUp` | 关键指标滚动计数 |
| 客户墙 | Logo Loop | `LogoLoop` | 客户/技术栈 Logo 无限滚动 |
| 通用进场 | Animated Content | `AnimatedContent` | 各区块滚动进场统一包装 |

组装要点：

- Aurora 作为页面顶部背景层，内容区用纯色/渐变衔接，避免整页 WebGL
- SplitText 动画只播一次（进入视口触发），CTA 的 StarBorder 是恒常动效 —— 一静一动不冲突
- CountUp 放在数据区，滚动到视口再触发

```jsx
// 骨架示意（TS-TW 变体，路径以实际安装结果为准）
import Aurora from "@/components/Aurora";
import SplitText from "@/components/SplitText";
import StarBorder from "@/components/StarBorder";
import AnimatedContent from "@/components/AnimatedContent";

export default function Landing() {
  return (
    <>
      <section className="relative h-[60vh]">
        <Aurora />
        <div className="relative z-10">
          <SplitText text="让产品被记住" delay={80} />
          <StarBorder>免费开始</StarBorder>
        </div>
      </section>
      <AnimatedContent>
        <FeatureBento />
      </AnimatedContent>
      <AnimatedContent><MetricsRow /></AnimatedContent>
      <AnimatedContent><CustomerLogos /></AnimatedContent>
    </>
  );
}
```

---

## 配方 2：个人作品集

| 层 | 组件 | CLI ID | 作用 |
|---|---|---|---|
| 背景 | Noise | `Noise` | 胶片颗粒质感，低调不抢戏 |
| 主视觉 | Decrypted Text | `DecryptedText` | 名字解密式入场 |
| 内容区 | Masonry | `Masonry` | 作品瀑布流 + 灯箱 |
| 联系方式 | Dock | `Dock` | macOS 风格快捷入口 |
| 微交互 | Click Spark | `ClickSpark` | 点击火花反馈 |

组装要点：

- 作品集主角是作品：Noise + DecryptedText 提供氛围即可，画廊区不加多余动效
- Masonry 自带 lightbox，无需再引第三方灯箱
- Dock 固定底部，图标 ≤ 6 个

---

## 配方 3：产品发布页

| 层 | 组件 | CLI ID | 作用 |
|---|---|---|---|
| 背景 | Threads | `Threads` | 流动丝线背景 |
| 主视觉 | Gradient Text | `GradientText` | 渐变流动的产品口号 |
| 内容区 | Tilted Card | `TiltedCard` | 特性卡片 3D 倾斜 |
| 内容区数据 | Counter | `Counter` | 翻牌数字（下载量/评分） |
| 底部收尾 | Gradual Blur | `GradualBlur` | 页面底部渐进模糊 |
| 微交互 | Click Spark | `ClickSpark` | 点击火花 |

组装要点：

- Threads + GradientText 同色系（都取品牌色），深色底效果最佳
- TiltedCard ≤ 4 张，超过改用 SpotlightCard（更轻）
- Counter 需要「旧值 → 新值」的数字推进感时优先于 CountUp

---

## 通用组装规则

1. 分层预算：背景 ×1 + 主视觉 ×1~2 + 内容区 ×2~3 + 微交互点缀，超配=廉价感
2. 一屏 1 个焦点动效；主视觉动效播完就停，恒常动效留给按钮/背景
3. 所有发光、渐变组件颜色参数统一到品牌色
4. 移动端：光标类与 WebGL 类按 pitfalls.md 降级
5. 每完成一层 → build/preview → 浏览器实测（见 SKILL.md Step 5）
6. **背景全局挂载**：单页滚动站的背景用 `fixed inset-0` 挂在页面根层 + 轻遮罩（如 `bg-zinc-950/55`），滚动全程可见；挂在某个 section 内会"滚过即消失"。注意 fixed 元素不要用 `-z-10` 压进父级底色之下，遮罩放背景容器内部

## 排版参数（骨架/间距/字阶，规则详见 layout-guide.md）

| 配方 | 垂直骨架 | 栅格 | 关键档位 |
|---|---|---|---|
| SaaS 落地页 | Hero 65vh / 内容区自适应 / 页脚 ~10% | 12 栏 · max-w-6xl | 区块间距 96px；标题字阶 30/38；正文行长 ≤80 字符 |
| 个人作品集 | 头部 40vh / 瀑布流 / 页脚 | Masonry 3 栏 | 图:文 ≈ 7:3；卡片图高固定保齐平；Dock ≤6 图标 |
| 产品发布页 | Hero 60vh / 特性网格 / 底部 8vh 渐隐 | 特性卡 2×2（lg 4 栏） | 色彩 60-30-10；每屏焦点 ≤1；字阶 ≤4 档 |

交付前逐条过 layout-guide.md 第 6 节 **14 条排版自查**。
