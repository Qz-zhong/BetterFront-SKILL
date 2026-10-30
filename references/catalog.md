# React Bits 组件目录

> 数据源：https://www.reactbits.dev/llms.txt（仅免费库，Pro 付费区已排除）
> 同步时间：2026-10-30
> 组件总数：217（Text Animations 33 · Animations 38 · Components 48 · Micro 35 · Backgrounds 63）
> 标记列由脚本自动生成：⚡WebGL = 依赖含 ogl/three，或官方描述含 webgl/shader（性能预算见 pitfalls.md）。
> 依赖列来自官方 registry（无外部依赖写 `-`）；「适用」列为受控枚举（区域代码，取值见 taxonomy.json 的 region），重新同步时按 CLI ID 自动保留。
> 检索提示：官方描述为英文，可中英双语检索（如「跑马灯」→ marquee，「故障」→ glitch，「玻璃」→ glass）。

## Text Animations 文本动画（33）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [ASCII Text](https://www.reactbits.dev/text-animations/ascii-text) | `ASCIIText` | Waving ASCII text that tilts toward the pointer, scrambles on hover and ripples on click |  | - | hero |
| [Blur Text](https://www.reactbits.dev/text-animations/blur-text) | `BlurText` | Text starts blurred then crisply resolves for a soft-focus reveal effect |  | motion | hero |
| [Circular Text](https://www.reactbits.dev/text-animations/circular-text) | `CircularText` | Layouts characters around a circle with optional rotation animation |  | motion | hero, overlay |
| [Count Up](https://www.reactbits.dev/text-animations/count-up) | `CountUp` | Animated number counter supporting formatting and decimals |  | motion | hero, card, list |
| [Curved Loop](https://www.reactbits.dev/text-animations/curved-loop) | `CurvedLoop` | Flowing looping text path along a customizable curve with drag interaction |  | - | background, overlay |
| [Decrypted Text](https://www.reactbits.dev/text-animations/decrypted-text) | `DecryptedText` | Hacker-style decryption cycling random glyphs until resolving to real text |  | motion | hero |
| [Depth Text](https://www.reactbits.dev/text-animations/depth-text) | `DepthText` | Layered extruded type with parallax that shifts against the pointer |  | - | hero |
| [Echo Text](https://www.reactbits.dev/text-animations/echo-text) | `EchoText` | Ghosted copies trail behind the text and settle into a single word |  | - | hero |
| [Falling Text](https://www.reactbits.dev/text-animations/falling-text) | `FallingText` | Text that breaks apart and tumbles into a pile you can drag, throw and swipe, then flies back into place |  | matter-js | hero, overlay |
| [Fold Text](https://www.reactbits.dev/text-animations/fold-text) | `FoldText` | Lines unfold into place like creased paper opening flat |  | gsap | hero |
| [Fuzzy Text](https://www.reactbits.dev/text-animations/fuzzy-text) | `FuzzyText` | Vibrating fuzzy text with controllable hover intensity |  | - | hero |
| [Glitch Text](https://www.reactbits.dev/text-animations/glitch-text) | `GlitchText` | RGB split and distortion glitch effect with jitter effects |  | - | hero |
| [Gradient Text](https://www.reactbits.dev/text-animations/gradient-text) | `GradientText` | Living gradients inside your text: a sliding sweep, a drifting mesh or a swinging conic fan |  | - | hero |
| [Masked Heading](https://www.reactbits.dev/text-animations/masked-heading) | `MaskedHeading` | A headline with a drifting colour mesh or image showing through, revealed word by word |  | gsap | hero |
| [Particle Text](https://www.reactbits.dev/text-animations/particle-text) | `ParticleText` | Text assembles from drifting particles that scatter and reform on demand |  | - | hero |
| [Rotating Text](https://www.reactbits.dev/text-animations/rotating-text) | `RotatingText` | Cycles through multiple phrases with 3D rotate / flip transitions |  | motion | hero, nav |
| [Scrambled Text](https://www.reactbits.dev/text-animations/scrambled-text) | `ScrambledText` | Detects cursor position and applies a distortion effect to text |  | gsap | hero |
| [Scroll Float](https://www.reactbits.dev/text-animations/scroll-float) | `ScrollFloat` | Text gently floats / parallax shifts on scroll |  | gsap | hero, list |
| [Scroll Reveal](https://www.reactbits.dev/text-animations/scroll-reveal) | `ScrollReveal` | Text gently unblurs and reveals on scroll |  | gsap | hero, list |
| [Scroll Velocity](https://www.reactbits.dev/text-animations/scroll-velocity) | `ScrollVelocity` | Text marquee animatio - speed and distortion scale with user's scroll velocity |  | motion | background, overlay |
| [Shiny Text](https://www.reactbits.dev/text-animations/shiny-text) | `ShinyText` | A sheen of light that sweeps across text, from soft bands to chrome-like reflections |  | - | hero, card |
| [Shuffle](https://www.reactbits.dev/text-animations/shuffle) | `Shuffle` | Animated text reveal where characters shuffle before settling |  | gsap, @gsap/react | hero |
| [Split Flap Text](https://www.reactbits.dev/text-animations/split-flap-text) | `SplitFlapText` | Mechanical split-flap departure board that clacks through to each new phrase |  | - | hero, card |
| [Split Text](https://www.reactbits.dev/text-animations/split-text) | `SplitText` | Splits text into characters / words for staggered entrance animation |  | gsap, @gsap/react | hero |
| [Stroke Text](https://www.reactbits.dev/text-animations/stroke-text) | `StrokeText` | Outlined letterforms draw themselves on, then flood with fill |  | gsap | hero |
| [Tech Text](https://www.reactbits.dev/text-animations/tech-text) | `TechText` | A wordmark whose letters turn into dashed vector paths under the cursor |  | - | hero |
| [Text Cursor](https://www.reactbits.dev/text-animations/text-cursor) | `TextCursor` | Text or emoji that trails your cursor as stamped copies, a following chain or a ribbon of letters |  | - | cursor, overlay |
| [Text Loop](https://www.reactbits.dev/text-animations/text-loop) | `TextLoop` | A seamless text marquee that flows along curved SVG paths |  | gsap | nav, card |
| [Text Pressure](https://www.reactbits.dev/text-animations/text-pressure) | `TextPressure` | Characters scale / warp interactively based on pointer pressure zone |  | - | hero |
| [Text Type](https://www.reactbits.dev/text-animations/text-type) | `TextType` | Typewriter effect with blinking cursor and adjustable typing cadence |  | gsap | hero, card |
| [True Focus](https://www.reactbits.dev/text-animations/true-focus) | `TrueFocus` | Applies dynamic blur / clarity based over a series of words in order |  | motion | hero, list |
| [Variable Proximity](https://www.reactbits.dev/text-animations/variable-proximity) | `VariableProximity` | Letter styling changes continuously with pointer distance mapping |  | - | hero |
| [Warp Text](https://www.reactbits.dev/text-animations/warp-text) | `WarpText` | WebGL warp that bends and refracts the text around the pointer | ⚡WebGL | ogl | hero |

## Animations 动画（38）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [Animated Content](https://www.reactbits.dev/animations/animated-content) | `AnimatedContent` | Wrapper that reveals its content on scroll with slides, blur, 3D tilts, soft wipes and staggered children |  | gsap | transition, card, list |
| [Blob Cursor](https://www.reactbits.dev/animations/blob-cursor) | `BlobCursor` | Liquid metal blob cursor that stretches, sloshes and bursts into droplets, in chrome, jelly, pearl or ink | ⚡WebGL | three | cursor |
| [Click Spark](https://www.reactbits.dev/animations/click-spark) | `ClickSpark` | Bursts of sparks at every click, as dashes, comets, dots or stars, that can spill around buttons |  | - | cursor, overlay |
| [Crosshair](https://www.reactbits.dev/animations/crosshair) | `Crosshair` | Crosshair cursor with live coordinates that locks onto links and buttons and measures them |  | - | cursor |
| [Crystalized Ball](https://www.reactbits.dev/animations/crystalized-ball) | `CrystalizedBall` | A glass ball with a crackling electric rim and glowing dust that swirls with the cursor | ⚡WebGL | ogl | cursor, overlay |
| [Cubes](https://www.reactbits.dev/animations/cubes) | `Cubes` | A grid of outlined 3D cubes that turn to face the cursor, spin when swept and ripple on click |  | - | hero, background |
| [Cursor Grid](https://www.reactbits.dev/animations/cursor-grid) | `CursorGrid` | A crisp grid whose cells light up and fade behind the cursor, with grid styles, tiles and click pulses |  | - | cursor, background |
| [Dither Veil](https://www.reactbits.dev/animations/dither-veil) | `DitherVeil` | A 1-bit dithered photo the cursor burns through to full colour, knitting back cell by cell | ⚡WebGL | ogl | card, gallery |
| [Elastic Mesh](https://www.reactbits.dev/animations/elastic-mesh) | `ElasticMesh` | Turns text or any logo into a puffy inflated shape you can press, poke and stretch like jelly |  | - | hero, overlay |
| [Electric Border](https://www.reactbits.dev/animations/electric-border) | `ElectricBorder` | Wraps any element in crackling strands of current that surge near the cursor and leap off in sparks |  | - | card, nav |
| [Electric Logo](https://www.reactbits.dev/animations/electric-logo) | `ElectricLogo` | Turns any logo into a living lightning outline, with arcs that leap off its edges | ⚡WebGL | ogl | card, overlay |
| [Fade Content](https://www.reactbits.dev/animations/fade-content) | `FadeContent` | Wrapper that fades content in on scroll, plain or out of focus, from washed-out gray, or through grain, mist and pixel blocks |  | gsap | transition, card |
| [Ghost Cursor](https://www.reactbits.dev/animations/ghost-cursor) | `GhostCursor` | A ghost of glowing smoke that floats after the cursor and curls away as it rises |  | - | cursor |
| [Glare Hover](https://www.reactbits.dev/animations/glare-hover) | `GlareHover` | A glossy light streak that sweeps across any element in the direction the cursor moves |  | - | card, gallery |
| [Glow Cursor](https://www.reactbits.dev/animations/glow-cursor) | `GlowCursor` | Light that pours from the cursor, drifts softly through the air and cools as it fades |  | - | cursor |
| [Gradual Blur](https://www.reactbits.dev/animations/gradual-blur) | `GradualBlur` | Progressive edge blur for headers, footers, captions and carousels, with an optional fade to color that hides at the ends of a scroll |  | - | overlay |
| [Halftone Reveal](https://www.reactbits.dev/animations/halftone-reveal) | `HalftoneReveal` | A halftone print of an image whose dots swell into the real photo under the cursor |  | - | card, gallery |
| [Image Trail](https://www.reactbits.dev/animations/image-trail) | `ImageTrail` | Cursor-based image trail with several built-in variants |  | gsap | cursor, background |
| [Laser Flow](https://www.reactbits.dev/animations/laser-flow) | `LaserFlow` | A beam of light that splashes onto your content and pours over its corners |  | - | overlay, card |
| [Logo Loop](https://www.reactbits.dev/animations/logo-loop) | `LogoLoop` | Continuously looping marquee of brand or tech logos with seamless repeat and hover pause |  | - | nav, background |
| [Magnet](https://www.reactbits.dev/animations/magnet) | `Magnet` | Elements magnetically ease toward the cursor then settle back with spring physics |  | - | nav, card |
| [Meta Balls](https://www.reactbits.dev/animations/meta-balls) | `MetaBalls` | Liquid metaballs that merge, stretch and pinch apart, with a cursor blob that pushes through them |  | - | background, overlay |
| [Metallic Paint](https://www.reactbits.dev/animations/metallic-paint) | `MetallicPaint` | Liquid chrome that flows over your logo or text, adapted from Paper's Liquid Metal shader | ⚡WebGL | - | card, overlay |
| [Noise](https://www.reactbits.dev/animations/noise) | `Noise` | Film grain overlay for photos and pages, from fine 35mm grain to dust, paper and TV static |  | - | background, overlay |
| [Orbit Images](https://www.reactbits.dev/animations/orbit-images) | `OrbitImages` | SVG Path customizable orbiting images effect |  | - | hero, background |
| [Pixel Swap](https://www.reactbits.dev/animations/pixel-swap) | `PixelSwap` | New content builds in pixel by pixel in a springy wave that starts wherever the cursor enters |  | - | card, gallery |
| [Pixel Trail](https://www.reactbits.dev/animations/pixel-trail) | `PixelTrail` | Glossy pixels melt into a fluid goo trail behind the cursor, with color shifts and drips |  | - | cursor, background |
| [Pixel Transition](https://www.reactbits.dev/animations/pixel-transition) | `PixelTransition` | Retro pixel dissolve that covers a card in solid pixels, swaps the content underneath and clears again |  | - | card, transition |
| [Ribbons](https://www.reactbits.dev/animations/ribbons) | `Ribbons` | Springy ribbons that trail the cursor, in lens, comet or even shapes with an optional wave |  | - | cursor, background |
| [Ripple Distortion](https://www.reactbits.dev/animations/ripple-distortion) | `RippleDistortion` | Pointer-driven water displacement that warps content and leaves a decaying wake | ⚡WebGL | ogl | overlay, card |
| [Scroll Expand](https://www.reactbits.dev/animations/scroll-expand) | `ScrollExpand` | A rounded media frame that grows to full bleed as it scrolls through the viewport |  | - | card, gallery |
| [Shape Blur](https://www.reactbits.dev/animations/shape-blur) | `ShapeBlur` | A crisp logo or shape that drifts out of focus under the pointer like a camera lens |  | - | card, overlay |
| [Splash Cursor](https://www.reactbits.dev/animations/splash-cursor) | `SplashCursor` | A fluid simulation that trails the cursor in swirling ink and bursts into a splash on click |  | - | cursor, background |
| [Star Border](https://www.reactbits.dev/animations/star-border) | `StarBorder` | A twinkling star that travels the exact outline of any button, pill or card, trailing light and stardust |  | - | card, nav, hero |
| [Sticker Peel](https://www.reactbits.dev/animations/sticker-peel) | `StickerPeel` | A die-cut sticker you can peel at any edge, drag, throw and swing, in gloss, matte or holographic finishes |  | - | card, overlay |
| [Strands](https://www.reactbits.dev/animations/strands) | `Strands` | Spectral strands that twist inside a frosted glass orb and swell into a smooth bulge where they come together, like the new Siri |  | - | hero, background |
| [Swarm Cursor](https://www.reactbits.dev/animations/swarm-cursor) | `SwarmCursor` | A liquid swarm of particles that flows after the cursor, curls into eddies and pours around hovered buttons |  | - | cursor, background |
| [Target Cursor](https://www.reactbits.dev/animations/target-cursor) | `TargetCursor` | A reticle cursor whose corner brackets snap around targets, matching their shape |  | react-dom | cursor |

## Components 组件（48）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [Accordion Gallery](https://www.reactbits.dev/components/accordion-gallery) | `AccordionGallery` | Panels expand on hover or focus, revealing parallax imagery and captions |  | gsap | gallery, card |
| [Animated List](https://www.reactbits.dev/components/animated-list) | `AnimatedList` | A scrolling list whose rows spring into view, with a gliding selection and arrow keys |  | @hugeicons/react, @hugeicons/core-free-icons | list |
| [Border Glow](https://www.reactbits.dev/components/border-glow) | `BorderGlow` | Glowing mesh-gradient border that follows cursor direction and intensifies near edges |  | - | card, nav |
| [Bounce Cards](https://www.reactbits.dev/components/bounce-cards) | `BounceCards` | A fan of photo cards that bounce in, then spread apart and straighten the one you hover |  | - | gallery, card |
| [Bubble Menu](https://www.reactbits.dev/components/bubble-menu) | `BubbleMenu` | Floating circular expanding menu with staggered item reveal |  | gsap | nav |
| [Card Nav](https://www.reactbits.dev/components/card-nav) | `CardNav` | A navigation bar that springs open into a row of cards, each with its own links |  | @hugeicons/react, @hugeicons/core-free-icons | nav |
| [Card Swap](https://www.reactbits.dev/components/card-swap) | `CardSwap` | A 3D stack of cards that sends the front card to the back on a timer, or when you fling it |  | @hugeicons/react, @hugeicons/core-free-icons | card, gallery |
| [Carousel](https://www.reactbits.dev/components/carousel) | `Carousel` | Swipeable cards for feature tours, stories and galleries, with five transitions and an autoplay timer |  | @hugeicons/react, @hugeicons/core-free-icons | gallery, card |
| [Chroma Grid](https://www.reactbits.dev/components/chroma-grid) | `ChromaGrid` | A grid of grayscale photo cards where a spotlight follows the cursor and brings back color |  | - | gallery, card |
| [Circular Carousel](https://www.reactbits.dev/components/circular-carousel) | `CircularCarousel` | A 3D ring of images with bendable cards, momentum drag, snapping and click to focus |  | - | gallery |
| [Circular Gallery](https://www.reactbits.dev/components/circular-gallery) | `CircularGallery` | A curved image gallery you can drag, scroll or tab through, with cards that open to the full image |  | - | gallery |
| [Counter](https://www.reactbits.dev/components/counter) | `Counter` | An odometer-style number whose digits roll to every new value, with currency, separators and locales |  | - | card, list, hero |
| [Curved Input](https://www.reactbits.dev/components/curved-input) | `CurvedInput` | Arc-bent input bar with text, caret and submit button all following the curve |  | - | form |
| [Decay Card](https://www.reactbits.dev/components/decay-card) | `DecayCard` | An image card that tears and melts as the pointer moves, then pulls itself back together |  | - | card |
| [Depth Carousel](https://www.reactbits.dev/components/depth-carousel) | `DepthCarousel` | Cards recede into depth on a 3D rail, with drag, keyboard and auto-advance |  | gsap | gallery, card |
| [Dock](https://www.reactbits.dev/components/dock) | `Dock` | macOS style dock with smooth magnification, launch bounce, badges and context menus |  | react-dom | nav |
| [Dome Gallery](https://www.reactbits.dev/components/dome-gallery) | `DomeGallery` | Immersive 3D dome gallery projecting images on a hemispheric surface |  | @use-gesture/react | gallery |
| [Drift Wall](https://www.reactbits.dev/components/drift-wall) | `DriftWall` | An endless perspective wall of tiles drifting past, lifting on hover |  | - | background, gallery |
| [Elastic Slider](https://www.reactbits.dev/components/elastic-slider) | `ElasticSlider` | A slider that grows under your cursor and stretches like rubber when pulled past either end, then springs back |  | @hugeicons/react, @hugeicons/core-free-icons | form, card |
| [Flex Carousel](https://www.reactbits.dev/components/flex-carousel) | `FlexCarousel` | An infinite image row that flows through invisible liquid glass at its edges | ⚡WebGL | ogl | gallery |
| [Flowing Menu](https://www.reactbits.dev/components/flowing-menu) | `FlowingMenu` | A full-height menu with a liquid band that glides between rows and reveals a scrolling marquee of each item |  | @hugeicons/react, @hugeicons/core-free-icons | nav, list |
| [Fluid Glass](https://www.reactbits.dev/components/fluid-glass) | `FluidGlass` | A 3D glass object that refracts your headline, image or video, follows the cursor and melts between shapes |  | - | hero, overlay |
| [Flying Posters](https://www.reactbits.dev/components/flying-posters) | `FlyingPosters` | 3D posters that twist and flip as you scroll or drag through an endless column |  | - | gallery |
| [Folder](https://www.reactbits.dev/components/folder) | `Folder` | Folder that drops its flap open or swings open like a book, with pages you can pick |  | - | card, nav |
| [Glass Icons](https://www.reactbits.dev/components/glass-icons) | `GlassIcons` | Liquid glass icons that bend the color behind them, for app grids, docks and social links |  | - | card, nav |
| [Glass Surface](https://www.reactbits.dev/components/glass-surface) | `GlassSurface` | Apple-style liquid glass that bends what is behind it, in a rounded panel or any logo shape |  | - | card, nav, overlay |
| [Gooey Nav](https://www.reactbits.dev/components/gooey-nav) | `GooeyNav` | A navigation bar whose active pill breaks into goo that flows over to the item you pick |  | - | nav |
| [Holo Card](https://www.reactbits.dev/components/holo-card) | `HoloCard` | Collectible trading card with a real holographic foil and glitter that sparkles as it tilts |  | - | card |
| [Infinite Menu](https://www.reactbits.dev/components/infinite-menu) | `InfiniteMenu` | A draggable sphere of image tiles that snaps the nearest one forward and shows its title |  | - | gallery, cursor |
| [Infinite Spiral](https://www.reactbits.dev/components/infinite-spiral) | `InfiniteSpiral` | An endlessly looping 3D helix of images with adjustable motion, depth and spacing |  | - | gallery, background |
| [Lanyard](https://www.reactbits.dev/components/lanyard) | `Lanyard` | Swinging 3D badge on a stretchy woven band that you can drag, throw or click to flip | ⚡WebGL | three | hero |
| [Line Sidebar](https://www.reactbits.dev/components/line-sidebar) | `LineSidebar` | Static list navigation with a cursor-proximity effect that shifts and highlights nearby items |  | - | nav, list |
| [Magic Bento](https://www.reactbits.dev/components/magic-bento) | `MagicBento` | A bento grid of feature cards with live artwork, edge light that follows the cursor and a click wave |  | @hugeicons/react, @hugeicons/core-free-icons | card |
| [Masonry](https://www.reactbits.dev/components/masonry) | `Masonry` | A masonry gallery that springs into place, reflows as it resizes and opens images in a lightbox |  | react-dom, @hugeicons/react, @hugeicons/core-free-icons | gallery |
| [Model Viewer](https://www.reactbits.dev/components/model-viewer) | `ModelViewer` | A product-style 3D model viewer that frames itself and floats over a soft shadow | ⚡WebGL | @react-three/fiber, @react-three/drei, three | hero, card |
| [Morph Slider](https://www.reactbits.dev/components/morph-slider) | `MorphSlider` | WebGL slider that melts between images with a displacement transition | ⚡WebGL | ogl, gsap | gallery, transition |
| [Option Wheel](https://www.reactbits.dev/components/option-wheel) | `OptionWheel` | Curved option picker that spins with scroll, drag or arrow keys, tilting items away |  | - | form, nav |
| [Pill Nav](https://www.reactbits.dev/components/pill-nav) | `PillNav` | A pill navigation bar where a fill rises through each link as its label rolls over, with a sliding active dot |  | - | nav |
| [Pixel Card](https://www.reactbits.dev/components/pixel-card) | `PixelCard` | A card that fills with twinkling pixels on hover, rippling out from the center or the cursor |  | - | card |
| [Profile Card](https://www.reactbits.dev/components/profile-card) | `ProfileCard` | A framed profile card that tilts toward the cursor, with holographic foil shining through a tiled pattern |  | @hugeicons/react, @hugeicons/core-free-icons | card, list |
| [Reflective Card](https://www.reactbits.dev/components/reflective-card) | `ReflectiveCard` | A metal ID card that reflects your camera or a looping video and catches the light as it tilts |  | @hugeicons/react, @hugeicons/core-free-icons | card |
| [Scroll Stack](https://www.reactbits.dev/components/scroll-stack) | `ScrollStack` | Cards pin and stack as you scroll, settling back into a dimmed deck with smooth, jitter-free motion |  | - | card, list |
| [Specular Button](https://www.reactbits.dev/components/specular-button) | `SpecularButton` | Glass button whose edge catches the light, with a highlight that glides toward the cursor |  | - | form, nav |
| [Spotlight Card](https://www.reactbits.dev/components/spotlight-card) | `SpotlightCard` | Card lit by a soft spotlight that follows the pointer, catches its edge and reaches nearby cards |  | - | card |
| [Stack](https://www.reactbits.dev/components/stack) | `Stack` | Pile of cards you can drag, flick or click through, with thrown cards tucking underneath |  | motion | card, gallery |
| [Staggered Menu](https://www.reactbits.dev/components/staggered-menu) | `StaggeredMenu` | Menu with staggered item animations and smooth transitions on open/close |  | gsap | nav |
| [Stepper](https://www.reactbits.dev/components/stepper) | `Stepper` | A multi-step flow with a gliding step indicator, spring transitions and horizontal or vertical layouts |  | @hugeicons/react, @hugeicons/core-free-icons | form, card |
| [Tilted Card](https://www.reactbits.dev/components/tilted-card) | `TiltedCard` | A 3D card that tilts toward the cursor, with glare, a soft shadow, floating layers and a flip side |  | - | card |

## Micro 微交互（35）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [Bell Toggle](https://www.reactbits.dev/micro/bell-toggle) | `BellToggle` | Pill toggle where a press rings the bell, crossfades the label and unfurls the pill |  | motion, @hugeicons/react, @hugeicons/core-free-icons | form, card |
| [Branched Menu](https://www.reactbits.dev/micro/branched-menu) | `BranchedMenu` | Collapsible menu that branches each section from a trunk and traces a line to your pick |  | @hugeicons/react, @hugeicons/core-free-icons | nav, list |
| [Call Chip](https://www.reactbits.dev/micro/call-chip) | `CallChip` | Tool-call chip whose fill wipes across as a live timer ticks, ending green or shaking red |  | @hugeicons/react, @hugeicons/core-free-icons | list, card |
| [Code Slots](https://www.reactbits.dev/micro/code-slots) | `CodeSlots` | One-time code input whose digits spring into their slots, with paste and SMS autofill |  | motion, @hugeicons/react, @hugeicons/core-free-icons | form |
| [Comet Dial](https://www.reactbits.dev/micro/comet-dial) | `CometDial` | Tick-ring dial you flick by angle, with a comet that streaks behind the lit head |  | motion | form, card |
| [Dodge Field](https://www.reactbits.dev/micro/dodge-field) | `DodgeField` | Wrapper that makes any child dodge the pointer until it relents and glides home |  | motion | form, overlay |
| [Flip Card](https://www.reactbits.dev/micro/flip-card) | `FlipCard` | Two-faced card that flips in 3D on a click, drag or flick and settles on a spring |  | motion | card, transition |
| [Flying Button](https://www.reactbits.dev/micro/flying-button) | `FlyingButton` | Button that fires its thrusters on hover, lifts off on a WebGL smoke plume and lands back in its own cloud | ⚡WebGL | - | form, nav |
| [Folder Float](https://www.reactbits.dev/micro/folder-float) | `FolderFloat` | Folder whose notes spring out into a floating cloud when it opens on hover or press |  | matter-js | card, nav |
| [Fuse Button](https://www.reactbits.dev/micro/fuse-button) | `FuseButton` | Action button whose done state carries an undo on a burning fuse |  | @hugeicons/react, @hugeicons/core-free-icons | form |
| [Glide Select](https://www.reactbits.dev/micro/glide-select) | `GlideSelect` | Select chip whose menu pops from its corner and whose highlight glides between rows |  | @hugeicons/react, @hugeicons/core-free-icons | form |
| [Hold Button](https://www.reactbits.dev/micro/hold-button) | `HoldButton` | Hold-to-confirm button whose liquid fill rises while pressed and snaps back if you let go |  | - | form |
| [Jelly Radio](https://www.reactbits.dev/micro/jelly-radio) | `JellyRadio` | Radio group of chips where the chosen one swells and barges its neighbours outward |  | motion | form |
| [Lattice Loader](https://www.reactbits.dev/micro/lattice-loader) | `LatticeLoader` | Agent status row with a lattice of cells that brighten in a wave beside a live stopwatch |  | - | list, overlay |
| [Paper Crumple](https://www.reactbits.dev/micro/paper-crumple) | `PaperCrumple` | An image that crumples into a textured 3D sheet while you hold and drag it | ⚡WebGL | three | card, overlay |
| [Peek Rating](https://www.reactbits.dev/micro/peek-rating) | `PeekRating` | Star rating that lifts a wave of stars up to the pointer, then commits with a pop on click |  | @hugeicons/react, @hugeicons/core-free-icons | form, card |
| [Prompt Bar](https://www.reactbits.dev/micro/prompt-bar) | `PromptBar` | Chat composer with @ sources, / commands, a model picker, dictation and attachments |  | motion, @hugeicons/react, @hugeicons/core-free-icons | form |
| [Pulse Heart](https://www.reactbits.dev/micro/pulse-heart) | `PulseHeart` | Like button that contracts to a dot, flips colour and pulses back as the count ticks over |  | @hugeicons/core-free-icons | card, list |
| [Refine Frame](https://www.reactbits.dev/micro/refine-frame) | `RefineFrame` | Media frame that steps an image through generation stages without any layout shift |  | @hugeicons/react, @hugeicons/core-free-icons | card, gallery |
| [Rubber Segment](https://www.reactbits.dev/micro/rubber-segment) | `RubberSegment` | Segmented control whose rubber thumb stretches across the gap and squashes into place |  | motion | form, nav |
| [Scrub Field](https://www.reactbits.dev/micro/scrub-field) | `ScrubField` | Number chip you drag to scrub, with rubber-band limits and click to type |  | motion | form |
| [Shredder](https://www.reactbits.dev/micro/shredder) | `Shredder` | A list with a paper shredder at the bottom that cuts dragged rows into curling strips |  | react-dom | list |
| [Slide Commit](https://www.reactbits.dev/micro/slide-commit) | `SlideCommit` | Slide-to-confirm handle that spins while your action runs and unfurls into a done pill |  | motion, @hugeicons/react, @hugeicons/core-free-icons | form |
| [Sling Button](https://www.reactbits.dev/micro/sling-button) | `SlingButton` | Send button you pull back like a slingshot and release to fire |  | motion, @hugeicons/react, @hugeicons/core-free-icons | form, nav |
| [Slosh Gauge](https://www.reactbits.dev/micro/slosh-gauge) | `SloshGauge` | Tank gauge whose liquid chases the value, tilts as it moves and splashes when it fills |  | - | card, list |
| [Spring Check](https://www.reactbits.dev/micro/spring-check) | `SpringCheck` | Checkbox row where one spring fills the box, draws the tick and strikes through the label |  | motion, @hugeicons/core-free-icons | form, list |
| [Squish Switch](https://www.reactbits.dev/micro/squish-switch) | `SquishSwitch` | Switch whose thumb stretches with speed and squashes against the end when you flick it |  | motion | form, card |
| [Status Mark](https://www.reactbits.dev/micro/status-mark) | `StatusMark` | Agent task status glyph that morphs from an idle ring to a progress arc, then a check |  | motion | list, card |
| [Swipe Row](https://www.reactbits.dev/micro/swipe-row) | `SwipeRow` | List row that swipes open to reveal actions and deletes on a full swipe |  | motion, @hugeicons/react, @hugeicons/core-free-icons | list |
| [Swipe Toast](https://www.reactbits.dev/micro/swipe-toast) | `SwipeToast` | Toast that swipes down to dismiss and burns a thin fuse for its remaining time |  | motion, @hugeicons/react, @hugeicons/core-free-icons | overlay |
| [Tear Ticket](https://www.reactbits.dev/micro/tear-ticket) | `TearTicket` | Ticket whose perforated stub tears off by hand, fibre by fibre, and drops away |  | motion | card, overlay |
| [Thought Line](https://www.reactbits.dev/micro/thought-line) | `ThoughtLine` | Reasoning trace header with a live clock that folds its steps into one line when done |  | motion, @hugeicons/react, @hugeicons/core-free-icons | list, overlay |
| [Voice Pill](https://www.reactbits.dev/micro/voice-pill) | `VoicePill` | Mic button that swells into a capsule of live equalizer bars and a timer while recording |  | @hugeicons/react, @hugeicons/core-free-icons | form, card |
| [Wake Slider](https://www.reactbits.dev/micro/wake-slider) | `WakeSlider` | Thumbless range slider of thin bars where drag speed raises a wake behind the handle |  | motion | form |
| [Warm Tooltip](https://www.reactbits.dev/micro/warm-tooltip) | `WarmTooltip` | Tooltip group where the first label waits, then its siblings open instantly while warm |  | react-dom, motion | nav, list |

## Backgrounds 背景（63）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [Acid Squares](https://www.reactbits.dev/backgrounds/acid-squares) | `AcidSquares` | A rolling field of glossy squares that ripples under two drifting colored lights |  | - | background |
| [Aero Shards](https://www.reactbits.dev/backgrounds/aero-shards) | `AeroShards` | Silk ribbons of thick glass shards streaming on layered depths among survey markers, catching light along their edges |  | vgpu | background |
| [Antigravity](https://www.reactbits.dev/backgrounds/antigravity) | `Antigravity` | A field of particles that lifts into a glowing ring around the cursor and bursts outward on click |  | - | background |
| [Aurora](https://www.reactbits.dev/backgrounds/aurora) | `Aurora` | A soft, calm aurora that flows across the top of the page and drifts toward the cursor |  | - | background |
| [Balatro](https://www.reactbits.dev/backgrounds/balatro) | `Balatro` | The swirling Balatro paint shader, with crisp pixels, a cursor that stirs the paint and click whirlpools | ⚡WebGL | - | background |
| [Ballpit](https://www.reactbits.dev/backgrounds/ballpit) | `Ballpit` | A soft-lit pit of physics balls you can shove with the cursor, grab, throw and blast apart |  | - | background |
| [Beams](https://www.reactbits.dev/backgrounds/beams) | `Beams` | Glossy ribbons that ripple in the dark and catch the light, which follows your cursor |  | - | background |
| [Color Bends](https://www.reactbits.dev/backgrounds/color-bends) | `ColorBends` | Vibrant color bends with smooth flowing animation | ⚡WebGL | three | background |
| [CRT Warp](https://www.reactbits.dev/backgrounds/crt-warp) | `CRTWarp` | A blocky plasma glowing on a curved CRT, with real scanlines, a phosphor mask, afterglow and a power-on intro |  | - | background |
| [Dark Veil](https://www.reactbits.dev/backgrounds/dark-veil) | `DarkVeil` | A silky veil of light that drifts in the dark and bends around the cursor |  | - | background |
| [Dither](https://www.reactbits.dev/backgrounds/dither) | `Dither` | Retro dithered waves with Bayer, halftone, line and noise patterns, palettes and cursor trails |  | - | background |
| [Dot Field](https://www.reactbits.dev/backgrounds/dot-field) | `DotField` | A gradient dot field seen through a lens that follows the cursor, magnifying, pinching or swirling the dots |  | - | background |
| [Dot Grid](https://www.reactbits.dev/backgrounds/dot-grid) | `DotGrid` | A springy dot grid that the cursor flicks and drags through like jelly, with click shockwaves |  | - | background |
| [Faulty Terminal](https://www.reactbits.dev/backgrounds/faulty-terminal) | `FaultyTerminal` | A flickering CRT terminal of glowing glyphs, with phosphor trails under the cursor and glitches on click |  | - | background |
| [Ferrofluid](https://www.reactbits.dev/backgrounds/ferrofluid) | `Ferrofluid` | A glossy sea of magnetic fluid where swells of spikes roll in and the cursor raises a crown |  | - | background |
| [Floating Lines](https://www.reactbits.dev/backgrounds/floating-lines) | `FloatingLines` | Ribbons of fine glowing lines that drift in waves, part around the cursor and curl when clicked |  | - | background |
| [Flux Lines](https://www.reactbits.dev/backgrounds/flux-lines) | `FluxLines` | Glowing flux lines tracing a churning magnetic fluid. The cursor magnet reveals and curls them |  | - | background |
| [Galaxy](https://www.reactbits.dev/backgrounds/galaxy) | `Galaxy` | Endless flight through a twinkling starfield with warp jumps, cursor repulsion and star palettes |  | - | background |
| [Ghost Fibers](https://www.reactbits.dev/backgrounds/ghost-fibers) | `GhostFibers` | Layered ribbons of fine glowing fibers that twist, fold and drift through soft depth of field |  | - | background |
| [Gradient ASCII](https://www.reactbits.dev/backgrounds/gradient-ascii) | `GradientASCII` | Soft gradient glows drawn in ASCII characters that scramble under the cursor |  | - | background |
| [Gradient Blinds](https://www.reactbits.dev/backgrounds/gradient-blinds) | `GradientBlinds` | Satin gradient blinds lit by a spotlight that follows the cursor, swaying and turning toward the light |  | - | background |
| [Gradient Waves](https://www.reactbits.dev/backgrounds/gradient-waves) | `GradientWaves` | Lit satin waves rolling in from a hazy horizon, with a light that follows the cursor and swells on click |  | - | background |
| [Grainient](https://www.reactbits.dev/backgrounds/grainient) | `Grainient` | Flowing grainy gradients you can stir with the cursor |  | - | background |
| [Grid Distortion](https://www.reactbits.dev/backgrounds/grid-distortion) | `GridDistortion` | Image background that breaks into a grid of blocks under the cursor and settles back into place |  | - | background |
| [Grid Motion](https://www.reactbits.dev/backgrounds/grid-motion) | `GridMotion` | A tilted wall of drifting tiles that slides with the pointer and lights up where it rests |  | - | background |
| [Grid Scan](https://www.reactbits.dev/backgrounds/grid-scan) | `GridScan` | A 3D grid room swept by a scanning light that follows your view |  | - | background |
| [Hyperspeed](https://www.reactbits.dev/backgrounds/hyperspeed) | `Hyperspeed` | Night highway of glowing light trails on a winding road that warps into hyperspace while you hold | ⚡WebGL | three | background |
| [Iridescence](https://www.reactbits.dev/backgrounds/iridescence) | `Iridescence` | Liquid iridescent surface with shifting folds that you can stir with the cursor |  | - | background |
| [Letter Glitch](https://www.reactbits.dev/backgrounds/letter-glitch) | `LetterGlitch` | A calm field of letters that flicker, scramble and glitch in color, stirred by the cursor and torn by clicks |  | - | background |
| [Lightfall](https://www.reactbits.dev/backgrounds/lightfall) | `Lightfall` | Streaks of light falling down a curved tunnel, bending around the cursor and stretching into warp trails on hold |  | - | background |
| [Lightning](https://www.reactbits.dev/backgrounds/lightning) | `Lightning` | Crackling, branching lightning that bends toward the cursor and strikes wherever you click |  | - | background |
| [Light Pillar](https://www.reactbits.dev/backgrounds/light-pillar) | `LightPillar` | A swirling pillar of light that ignites on load, leans toward the cursor and surges on click |  | - | background |
| [Light Rays](https://www.reactbits.dev/backgrounds/light-rays) | `LightRays` | Volumetric light rays from any edge, with source glow and haze. The cursor steers the beam and casts a shadow |  | - | background |
| [Light Tunnel](https://www.reactbits.dev/backgrounds/light-tunnel) | `LightTunnel` | A swirling fibre-optic tunnel where comets of light race into depth, steered by the cursor |  | - | background |
| [Line Waves](https://www.reactbits.dev/backgrounds/line-waves) | `LineWaves` | Fine lines that flow in silky waves while a band of light drifts through them |  | - | background |
| [Liquid Chrome](https://www.reactbits.dev/backgrounds/liquid-chrome) | `LiquidChrome` | Soft ribbons of liquid chrome that swirl through a dark pool, ripple under the cursor and catch the light as it moves |  | - | background |
| [Liquid Ether](https://www.reactbits.dev/backgrounds/liquid-ether) | `LiquidEther` | A glowing liquid that swirls under the cursor, colored by how fast it flows |  | - | background |
| [Magic Rings](https://www.reactbits.dev/backgrounds/magic-rings) | `MagicRings` | Glowing rings that pulse outward in a wave, swell toward the cursor and flare on click |  | - | background |
| [Magnet Lines](https://www.reactbits.dev/backgrounds/magnet-lines) | `MagnetLines` | A field of magnetic lines that swing toward the cursor, ripple outward and spin with every click |  | - | background |
| [Micro Slats](https://www.reactbits.dev/backgrounds/micro-slats) | `MicroSlats` | A wall of tiny slats that becomes a rolling sea in perspective, with glinting crests | ⚡WebGL | ogl | background |
| [Molten Metal](https://www.reactbits.dev/backgrounds/molten-metal) | `MoltenMetal` | Swirling caustic filaments with white-hot cores that heat up under the cursor and flare on click |  | - | background |
| [Orb](https://www.reactbits.dev/backgrounds/orb) | `Orb` | A glowing ring of swirling color that breathes, trails an orbiting light and reaches toward the cursor |  | - | background |
| [Particles](https://www.reactbits.dev/backgrounds/particles) | `Particles` | A drifting 3D field of particles with glow, twinkle, constellation lines and cursor interaction |  | - | background |
| [Pattern Waves](https://www.reactbits.dev/backgrounds/pattern-waves) | `PatternWaves` | A lit halftone surface of dots, lines or glyphs that moves like draped silk | ⚡WebGL | ogl | background |
| [Pixel Blast](https://www.reactbits.dev/backgrounds/pixel-blast) | `PixelBlast` | Dithered pixel clouds that drift, shimmer and light up under the cursor, with ripples, shapes and a perspective floor |  | - | background |
| [Pixel Snow](https://www.reactbits.dev/backgrounds/pixel-snow) | `PixelSnow` | Pixel-art snowflakes drifting down in layers of depth, brushed aside by the cursor |  | - | background |
| [Plasma](https://www.reactbits.dev/backgrounds/plasma) | `Plasma` | Folds of satin light twisting slowly through the dark, turning to follow the cursor |  | - | background |
| [Plasma Wave](https://www.reactbits.dev/backgrounds/plasma-wave) | `PlasmaWave` | Two ribbons of plasma curling through each other, with soft glow and white-hot cores |  | - | background |
| [Prism](https://www.reactbits.dev/backgrounds/prism) | `Prism` | Rotating prism of glowing spectral light with configurable shape, colors and motion |  | - | background |
| [Prismatic Burst](https://www.reactbits.dev/backgrounds/prismatic-burst) | `PrismaticBurst` | A burst of prismatic light rays that leans toward the cursor and sends a wave of light outward on click |  | - | background |
| [Radar](https://www.reactbits.dev/backgrounds/radar) | `Radar` | A radar scope whose sweep leaves a phosphor afterglow and picks up moving contacts |  | - | background |
| [Ripple Grid](https://www.reactbits.dev/backgrounds/ripple-grid) | `RippleGrid` | A crisp grid that ripples like water, bending and lighting up as waves pass through it |  | - | background |
| [Scanner](https://www.reactbits.dev/backgrounds/scanner) | `Scanner` | Glowing interference lines swept by a scan beam, with a CRT finish, cursor lensing and click pings |  | - | background |
| [Shape Grid](https://www.reactbits.dev/backgrounds/shape-grid) | `ShapeGrid` | A drifting grid of shapes that lights up under the cursor, with perspective tilt and rainbow trails |  | - | background |
| [Shape Waves](https://www.reactbits.dev/backgrounds/shape-waves) | `ShapeWaves` | A field of triangles, circles and squares that brighten and grow along rolling waves |  | vgpu | background |
| [Side Rays](https://www.reactbits.dev/backgrounds/side-rays) | `SideRays` | Shafts of light that fan in from a corner or side, shimmer slowly and lean toward the cursor |  | - | background |
| [Silk](https://www.reactbits.dev/backgrounds/silk) | `Silk` | Flowing satin folds with glossy highlights that turn toward the cursor and ripple on click |  | - | background |
| [Sliced Waves](https://www.reactbits.dev/backgrounds/sliced-waves) | `SlicedWaves` | Waves of colored light sliced into glowing bars, seen in depth with a focus that follows the cursor |  | - | background |
| [Soft Aurora](https://www.reactbits.dev/backgrounds/soft-aurora) | `SoftAurora` | Soft aurora borealis shader with 3D Perlin noise and cosine gradient palettes | ⚡WebGL | - | background |
| [Threads](https://www.reactbits.dev/backgrounds/threads) | `Threads` | Flowing threads that fray apart and part around the cursor, from fine silk to contour lines |  | - | background |
| [Topography](https://www.reactbits.dev/backgrounds/topography) | `Topography` | A 3D landscape drawn in glowing contour lines that rises under the cursor, with light pulses on click |  | - | background |
| [Waves](https://www.reactbits.dev/backgrounds/waves) | `Waves` | Dense flowing lines that sway like silk, bend around the cursor and spring back into place |  | - | background |
| [Web Threads](https://www.reactbits.dev/backgrounds/web-threads) | `WebThreads` | Glowing threads woven through luminous pinch points that light up under the cursor and carry light on click |  | - | background |
