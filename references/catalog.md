# React Bits 组件目录

> 数据源：https://www.reactbits.dev/llms.txt（仅免费库，Pro 付费区已排除）
> 同步时间：2026-10-29
> 组件总数：217（Text Animations 33 · Animations 38 · Components 48 · Micro 35 · Backgrounds 63）
> 标记列由脚本按官方描述自动生成：⚡WebGL = WebGL/shader 实现，注意性能预算（见 pitfalls.md）。
> 「依赖」「适用」两列为人工增补，重新同步时按 CLI ID 自动保留；空缺表示未增补。
> 检索提示：官方描述为英文，可中英双语检索（如「跑马灯」→ marquee，「故障」→ glitch，「玻璃」→ glass）。

## Text Animations 文本动画（33）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [ASCII Text](https://www.reactbits.dev/text-animations/ascii-text) | `ASCIIText` | Waving ASCII text that tilts toward the pointer, scrambles on hover and ripples on click |  |  |  |
| [Blur Text](https://www.reactbits.dev/text-animations/blur-text) | `BlurText` | Text starts blurred then crisply resolves for a soft-focus reveal effect |  |  |  |
| [Circular Text](https://www.reactbits.dev/text-animations/circular-text) | `CircularText` | Layouts characters around a circle with optional rotation animation |  |  |  |
| [Count Up](https://www.reactbits.dev/text-animations/count-up) | `CountUp` | Animated number counter supporting formatting and decimals |  |  |  |
| [Curved Loop](https://www.reactbits.dev/text-animations/curved-loop) | `CurvedLoop` | Flowing looping text path along a customizable curve with drag interaction |  |  |  |
| [Decrypted Text](https://www.reactbits.dev/text-animations/decrypted-text) | `DecryptedText` | Hacker-style decryption cycling random glyphs until resolving to real text |  |  |  |
| [Depth Text](https://www.reactbits.dev/text-animations/depth-text) | `DepthText` | Layered extruded type with parallax that shifts against the pointer |  |  |  |
| [Echo Text](https://www.reactbits.dev/text-animations/echo-text) | `EchoText` | Ghosted copies trail behind the text and settle into a single word |  |  |  |
| [Falling Text](https://www.reactbits.dev/text-animations/falling-text) | `FallingText` | Text that breaks apart and tumbles into a pile you can drag, throw and swipe, then flies back into place |  |  |  |
| [Fold Text](https://www.reactbits.dev/text-animations/fold-text) | `FoldText` | Lines unfold into place like creased paper opening flat |  |  |  |
| [Fuzzy Text](https://www.reactbits.dev/text-animations/fuzzy-text) | `FuzzyText` | Vibrating fuzzy text with controllable hover intensity |  |  |  |
| [Glitch Text](https://www.reactbits.dev/text-animations/glitch-text) | `GlitchText` | RGB split and distortion glitch effect with jitter effects |  |  |  |
| [Gradient Text](https://www.reactbits.dev/text-animations/gradient-text) | `GradientText` | Living gradients inside your text: a sliding sweep, a drifting mesh or a swinging conic fan |  |  |  |
| [Masked Heading](https://www.reactbits.dev/text-animations/masked-heading) | `MaskedHeading` | A headline with a drifting colour mesh or image showing through, revealed word by word |  |  |  |
| [Particle Text](https://www.reactbits.dev/text-animations/particle-text) | `ParticleText` | Text assembles from drifting particles that scatter and reform on demand |  |  |  |
| [Rotating Text](https://www.reactbits.dev/text-animations/rotating-text) | `RotatingText` | Cycles through multiple phrases with 3D rotate / flip transitions |  |  |  |
| [Scrambled Text](https://www.reactbits.dev/text-animations/scrambled-text) | `ScrambledText` | Detects cursor position and applies a distortion effect to text |  |  |  |
| [Scroll Float](https://www.reactbits.dev/text-animations/scroll-float) | `ScrollFloat` | Text gently floats / parallax shifts on scroll |  |  |  |
| [Scroll Reveal](https://www.reactbits.dev/text-animations/scroll-reveal) | `ScrollReveal` | Text gently unblurs and reveals on scroll |  |  |  |
| [Scroll Velocity](https://www.reactbits.dev/text-animations/scroll-velocity) | `ScrollVelocity` | Text marquee animatio - speed and distortion scale with user's scroll velocity |  |  |  |
| [Shiny Text](https://www.reactbits.dev/text-animations/shiny-text) | `ShinyText` | A sheen of light that sweeps across text, from soft bands to chrome-like reflections |  |  |  |
| [Shuffle](https://www.reactbits.dev/text-animations/shuffle) | `Shuffle` | Animated text reveal where characters shuffle before settling |  |  |  |
| [Split Flap Text](https://www.reactbits.dev/text-animations/split-flap-text) | `SplitFlapText` | Mechanical split-flap departure board that clacks through to each new phrase |  |  |  |
| [Split Text](https://www.reactbits.dev/text-animations/split-text) | `SplitText` | Splits text into characters / words for staggered entrance animation |  | gsap | 标题入场 |
| [Stroke Text](https://www.reactbits.dev/text-animations/stroke-text) | `StrokeText` | Outlined letterforms draw themselves on, then flood with fill |  |  |  |
| [Tech Text](https://www.reactbits.dev/text-animations/tech-text) | `TechText` | A wordmark whose letters turn into dashed vector paths under the cursor |  |  |  |
| [Text Cursor](https://www.reactbits.dev/text-animations/text-cursor) | `TextCursor` | Text or emoji that trails your cursor as stamped copies, a following chain or a ribbon of letters |  |  |  |
| [Text Loop](https://www.reactbits.dev/text-animations/text-loop) | `TextLoop` | A seamless text marquee that flows along curved SVG paths |  |  |  |
| [Text Pressure](https://www.reactbits.dev/text-animations/text-pressure) | `TextPressure` | Characters scale / warp interactively based on pointer pressure zone |  |  |  |
| [Text Type](https://www.reactbits.dev/text-animations/text-type) | `TextType` | Typewriter effect with blinking cursor and adjustable typing cadence |  |  |  |
| [True Focus](https://www.reactbits.dev/text-animations/true-focus) | `TrueFocus` | Applies dynamic blur / clarity based over a series of words in order |  |  |  |
| [Variable Proximity](https://www.reactbits.dev/text-animations/variable-proximity) | `VariableProximity` | Letter styling changes continuously with pointer distance mapping |  |  |  |
| [Warp Text](https://www.reactbits.dev/text-animations/warp-text) | `WarpText` | WebGL warp that bends and refracts the text around the pointer | ⚡WebGL |  |  |

## Animations 动画（38）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [Animated Content](https://www.reactbits.dev/animations/animated-content) | `AnimatedContent` | Wrapper that reveals its content on scroll with slides, blur, 3D tilts, soft wipes and staggered children |  |  |  |
| [Blob Cursor](https://www.reactbits.dev/animations/blob-cursor) | `BlobCursor` | Liquid metal blob cursor that stretches, sloshes and bursts into droplets, in chrome, jelly, pearl or ink |  |  |  |
| [Click Spark](https://www.reactbits.dev/animations/click-spark) | `ClickSpark` | Bursts of sparks at every click, as dashes, comets, dots or stars, that can spill around buttons |  |  |  |
| [Crosshair](https://www.reactbits.dev/animations/crosshair) | `Crosshair` | Crosshair cursor with live coordinates that locks onto links and buttons and measures them |  |  |  |
| [Crystalized Ball](https://www.reactbits.dev/animations/crystalized-ball) | `CrystalizedBall` | A glass ball with a crackling electric rim and glowing dust that swirls with the cursor |  |  |  |
| [Cubes](https://www.reactbits.dev/animations/cubes) | `Cubes` | A grid of outlined 3D cubes that turn to face the cursor, spin when swept and ripple on click |  |  |  |
| [Cursor Grid](https://www.reactbits.dev/animations/cursor-grid) | `CursorGrid` | A crisp grid whose cells light up and fade behind the cursor, with grid styles, tiles and click pulses |  |  |  |
| [Dither Veil](https://www.reactbits.dev/animations/dither-veil) | `DitherVeil` | A 1-bit dithered photo the cursor burns through to full colour, knitting back cell by cell |  |  |  |
| [Elastic Mesh](https://www.reactbits.dev/animations/elastic-mesh) | `ElasticMesh` | Turns text or any logo into a puffy inflated shape you can press, poke and stretch like jelly |  |  |  |
| [Electric Border](https://www.reactbits.dev/animations/electric-border) | `ElectricBorder` | Wraps any element in crackling strands of current that surge near the cursor and leap off in sparks |  |  |  |
| [Electric Logo](https://www.reactbits.dev/animations/electric-logo) | `ElectricLogo` | Turns any logo into a living lightning outline, with arcs that leap off its edges |  |  |  |
| [Fade Content](https://www.reactbits.dev/animations/fade-content) | `FadeContent` | Wrapper that fades content in on scroll, plain or out of focus, from washed-out gray, or through grain, mist and pixel blocks |  |  |  |
| [Ghost Cursor](https://www.reactbits.dev/animations/ghost-cursor) | `GhostCursor` | A ghost of glowing smoke that floats after the cursor and curls away as it rises |  |  |  |
| [Glare Hover](https://www.reactbits.dev/animations/glare-hover) | `GlareHover` | A glossy light streak that sweeps across any element in the direction the cursor moves |  |  |  |
| [Glow Cursor](https://www.reactbits.dev/animations/glow-cursor) | `GlowCursor` | Light that pours from the cursor, drifts softly through the air and cools as it fades |  |  |  |
| [Gradual Blur](https://www.reactbits.dev/animations/gradual-blur) | `GradualBlur` | Progressive edge blur for headers, footers, captions and carousels, with an optional fade to color that hides at the ends of a scroll |  |  |  |
| [Halftone Reveal](https://www.reactbits.dev/animations/halftone-reveal) | `HalftoneReveal` | A halftone print of an image whose dots swell into the real photo under the cursor |  |  |  |
| [Image Trail](https://www.reactbits.dev/animations/image-trail) | `ImageTrail` | Cursor-based image trail with several built-in variants |  |  |  |
| [Laser Flow](https://www.reactbits.dev/animations/laser-flow) | `LaserFlow` | A beam of light that splashes onto your content and pours over its corners |  |  |  |
| [Logo Loop](https://www.reactbits.dev/animations/logo-loop) | `LogoLoop` | Continuously looping marquee of brand or tech logos with seamless repeat and hover pause |  |  |  |
| [Magnet](https://www.reactbits.dev/animations/magnet) | `Magnet` | Elements magnetically ease toward the cursor then settle back with spring physics |  |  |  |
| [Meta Balls](https://www.reactbits.dev/animations/meta-balls) | `MetaBalls` | Liquid metaballs that merge, stretch and pinch apart, with a cursor blob that pushes through them |  |  |  |
| [Metallic Paint](https://www.reactbits.dev/animations/metallic-paint) | `MetallicPaint` | Liquid chrome that flows over your logo or text, adapted from Paper's Liquid Metal shader | ⚡WebGL |  |  |
| [Noise](https://www.reactbits.dev/animations/noise) | `Noise` | Film grain overlay for photos and pages, from fine 35mm grain to dust, paper and TV static |  |  |  |
| [Orbit Images](https://www.reactbits.dev/animations/orbit-images) | `OrbitImages` | SVG Path customizable orbiting images effect |  |  |  |
| [Pixel Swap](https://www.reactbits.dev/animations/pixel-swap) | `PixelSwap` | New content builds in pixel by pixel in a springy wave that starts wherever the cursor enters |  |  |  |
| [Pixel Trail](https://www.reactbits.dev/animations/pixel-trail) | `PixelTrail` | Glossy pixels melt into a fluid goo trail behind the cursor, with color shifts and drips |  |  |  |
| [Pixel Transition](https://www.reactbits.dev/animations/pixel-transition) | `PixelTransition` | Retro pixel dissolve that covers a card in solid pixels, swaps the content underneath and clears again |  |  |  |
| [Ribbons](https://www.reactbits.dev/animations/ribbons) | `Ribbons` | Springy ribbons that trail the cursor, in lens, comet or even shapes with an optional wave |  |  |  |
| [Ripple Distortion](https://www.reactbits.dev/animations/ripple-distortion) | `RippleDistortion` | Pointer-driven water displacement that warps content and leaves a decaying wake |  |  |  |
| [Scroll Expand](https://www.reactbits.dev/animations/scroll-expand) | `ScrollExpand` | A rounded media frame that grows to full bleed as it scrolls through the viewport |  |  |  |
| [Shape Blur](https://www.reactbits.dev/animations/shape-blur) | `ShapeBlur` | A crisp logo or shape that drifts out of focus under the pointer like a camera lens |  |  |  |
| [Splash Cursor](https://www.reactbits.dev/animations/splash-cursor) | `SplashCursor` | A fluid simulation that trails the cursor in swirling ink and bursts into a splash on click |  |  |  |
| [Star Border](https://www.reactbits.dev/animations/star-border) | `StarBorder` | A twinkling star that travels the exact outline of any button, pill or card, trailing light and stardust |  |  |  |
| [Sticker Peel](https://www.reactbits.dev/animations/sticker-peel) | `StickerPeel` | A die-cut sticker you can peel at any edge, drag, throw and swing, in gloss, matte or holographic finishes |  |  |  |
| [Strands](https://www.reactbits.dev/animations/strands) | `Strands` | Spectral strands that twist inside a frosted glass orb and swell into a smooth bulge where they come together, like the new Siri |  |  |  |
| [Swarm Cursor](https://www.reactbits.dev/animations/swarm-cursor) | `SwarmCursor` | A liquid swarm of particles that flows after the cursor, curls into eddies and pours around hovered buttons |  |  |  |
| [Target Cursor](https://www.reactbits.dev/animations/target-cursor) | `TargetCursor` | A reticle cursor whose corner brackets snap around targets, matching their shape |  |  |  |

## Components 组件（48）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [Accordion Gallery](https://www.reactbits.dev/components/accordion-gallery) | `AccordionGallery` | Panels expand on hover or focus, revealing parallax imagery and captions |  |  |  |
| [Animated List](https://www.reactbits.dev/components/animated-list) | `AnimatedList` | A scrolling list whose rows spring into view, with a gliding selection and arrow keys |  |  |  |
| [Border Glow](https://www.reactbits.dev/components/border-glow) | `BorderGlow` | Glowing mesh-gradient border that follows cursor direction and intensifies near edges |  |  |  |
| [Bounce Cards](https://www.reactbits.dev/components/bounce-cards) | `BounceCards` | A fan of photo cards that bounce in, then spread apart and straighten the one you hover |  |  |  |
| [Bubble Menu](https://www.reactbits.dev/components/bubble-menu) | `BubbleMenu` | Floating circular expanding menu with staggered item reveal |  |  |  |
| [Card Nav](https://www.reactbits.dev/components/card-nav) | `CardNav` | A navigation bar that springs open into a row of cards, each with its own links |  |  |  |
| [Card Swap](https://www.reactbits.dev/components/card-swap) | `CardSwap` | A 3D stack of cards that sends the front card to the back on a timer, or when you fling it |  |  |  |
| [Carousel](https://www.reactbits.dev/components/carousel) | `Carousel` | Swipeable cards for feature tours, stories and galleries, with five transitions and an autoplay timer |  |  |  |
| [Chroma Grid](https://www.reactbits.dev/components/chroma-grid) | `ChromaGrid` | A grid of grayscale photo cards where a spotlight follows the cursor and brings back color |  |  |  |
| [Circular Carousel](https://www.reactbits.dev/components/circular-carousel) | `CircularCarousel` | A 3D ring of images with bendable cards, momentum drag, snapping and click to focus |  |  |  |
| [Circular Gallery](https://www.reactbits.dev/components/circular-gallery) | `CircularGallery` | A curved image gallery you can drag, scroll or tab through, with cards that open to the full image |  |  |  |
| [Counter](https://www.reactbits.dev/components/counter) | `Counter` | An odometer-style number whose digits roll to every new value, with currency, separators and locales |  |  |  |
| [Curved Input](https://www.reactbits.dev/components/curved-input) | `CurvedInput` | Arc-bent input bar with text, caret and submit button all following the curve |  |  |  |
| [Decay Card](https://www.reactbits.dev/components/decay-card) | `DecayCard` | An image card that tears and melts as the pointer moves, then pulls itself back together |  |  |  |
| [Depth Carousel](https://www.reactbits.dev/components/depth-carousel) | `DepthCarousel` | Cards recede into depth on a 3D rail, with drag, keyboard and auto-advance |  |  |  |
| [Dock](https://www.reactbits.dev/components/dock) | `Dock` | macOS style dock with smooth magnification, launch bounce, badges and context menus |  |  |  |
| [Dome Gallery](https://www.reactbits.dev/components/dome-gallery) | `DomeGallery` | Immersive 3D dome gallery projecting images on a hemispheric surface |  |  |  |
| [Drift Wall](https://www.reactbits.dev/components/drift-wall) | `DriftWall` | An endless perspective wall of tiles drifting past, lifting on hover |  |  |  |
| [Elastic Slider](https://www.reactbits.dev/components/elastic-slider) | `ElasticSlider` | A slider that grows under your cursor and stretches like rubber when pulled past either end, then springs back |  |  |  |
| [Flex Carousel](https://www.reactbits.dev/components/flex-carousel) | `FlexCarousel` | An infinite image row that flows through invisible liquid glass at its edges |  |  |  |
| [Flowing Menu](https://www.reactbits.dev/components/flowing-menu) | `FlowingMenu` | A full-height menu with a liquid band that glides between rows and reveals a scrolling marquee of each item |  |  |  |
| [Fluid Glass](https://www.reactbits.dev/components/fluid-glass) | `FluidGlass` | A 3D glass object that refracts your headline, image or video, follows the cursor and melts between shapes |  |  |  |
| [Flying Posters](https://www.reactbits.dev/components/flying-posters) | `FlyingPosters` | 3D posters that twist and flip as you scroll or drag through an endless column |  |  |  |
| [Folder](https://www.reactbits.dev/components/folder) | `Folder` | Folder that drops its flap open or swings open like a book, with pages you can pick |  |  |  |
| [Glass Icons](https://www.reactbits.dev/components/glass-icons) | `GlassIcons` | Liquid glass icons that bend the color behind them, for app grids, docks and social links |  |  |  |
| [Glass Surface](https://www.reactbits.dev/components/glass-surface) | `GlassSurface` | Apple-style liquid glass that bends what is behind it, in a rounded panel or any logo shape |  |  |  |
| [Gooey Nav](https://www.reactbits.dev/components/gooey-nav) | `GooeyNav` | A navigation bar whose active pill breaks into goo that flows over to the item you pick |  |  |  |
| [Holo Card](https://www.reactbits.dev/components/holo-card) | `HoloCard` | Collectible trading card with a real holographic foil and glitter that sparkles as it tilts |  |  |  |
| [Infinite Menu](https://www.reactbits.dev/components/infinite-menu) | `InfiniteMenu` | A draggable sphere of image tiles that snaps the nearest one forward and shows its title |  |  |  |
| [Infinite Spiral](https://www.reactbits.dev/components/infinite-spiral) | `InfiniteSpiral` | An endlessly looping 3D helix of images with adjustable motion, depth and spacing |  |  |  |
| [Lanyard](https://www.reactbits.dev/components/lanyard) | `Lanyard` | Swinging 3D badge on a stretchy woven band that you can drag, throw or click to flip |  | three | 3D 展示位 |
| [Line Sidebar](https://www.reactbits.dev/components/line-sidebar) | `LineSidebar` | Static list navigation with a cursor-proximity effect that shifts and highlights nearby items |  |  |  |
| [Magic Bento](https://www.reactbits.dev/components/magic-bento) | `MagicBento` | A bento grid of feature cards with live artwork, edge light that follows the cursor and a click wave |  |  |  |
| [Masonry](https://www.reactbits.dev/components/masonry) | `Masonry` | A masonry gallery that springs into place, reflows as it resizes and opens images in a lightbox |  |  |  |
| [Model Viewer](https://www.reactbits.dev/components/model-viewer) | `ModelViewer` | A product-style 3D model viewer that frames itself and floats over a soft shadow |  |  |  |
| [Morph Slider](https://www.reactbits.dev/components/morph-slider) | `MorphSlider` | WebGL slider that melts between images with a displacement transition | ⚡WebGL |  |  |
| [Option Wheel](https://www.reactbits.dev/components/option-wheel) | `OptionWheel` | Curved option picker that spins with scroll, drag or arrow keys, tilting items away |  |  |  |
| [Pill Nav](https://www.reactbits.dev/components/pill-nav) | `PillNav` | A pill navigation bar where a fill rises through each link as its label rolls over, with a sliding active dot |  |  |  |
| [Pixel Card](https://www.reactbits.dev/components/pixel-card) | `PixelCard` | A card that fills with twinkling pixels on hover, rippling out from the center or the cursor |  |  |  |
| [Profile Card](https://www.reactbits.dev/components/profile-card) | `ProfileCard` | A framed profile card that tilts toward the cursor, with holographic foil shining through a tiled pattern |  |  |  |
| [Reflective Card](https://www.reactbits.dev/components/reflective-card) | `ReflectiveCard` | A metal ID card that reflects your camera or a looping video and catches the light as it tilts |  |  |  |
| [Scroll Stack](https://www.reactbits.dev/components/scroll-stack) | `ScrollStack` | Cards pin and stack as you scroll, settling back into a dimmed deck with smooth, jitter-free motion |  |  |  |
| [Specular Button](https://www.reactbits.dev/components/specular-button) | `SpecularButton` | Glass button whose edge catches the light, with a highlight that glides toward the cursor |  |  |  |
| [Spotlight Card](https://www.reactbits.dev/components/spotlight-card) | `SpotlightCard` | Card lit by a soft spotlight that follows the pointer, catches its edge and reaches nearby cards |  |  |  |
| [Stack](https://www.reactbits.dev/components/stack) | `Stack` | Pile of cards you can drag, flick or click through, with thrown cards tucking underneath |  |  |  |
| [Staggered Menu](https://www.reactbits.dev/components/staggered-menu) | `StaggeredMenu` | Menu with staggered item animations and smooth transitions on open/close |  |  |  |
| [Stepper](https://www.reactbits.dev/components/stepper) | `Stepper` | A multi-step flow with a gliding step indicator, spring transitions and horizontal or vertical layouts |  |  |  |
| [Tilted Card](https://www.reactbits.dev/components/tilted-card) | `TiltedCard` | A 3D card that tilts toward the cursor, with glare, a soft shadow, floating layers and a flip side |  |  |  |

## Micro 微交互（35）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [Bell Toggle](https://www.reactbits.dev/micro/bell-toggle) | `BellToggle` | Pill toggle where a press rings the bell, crossfades the label and unfurls the pill |  |  |  |
| [Branched Menu](https://www.reactbits.dev/micro/branched-menu) | `BranchedMenu` | Collapsible menu that branches each section from a trunk and traces a line to your pick |  |  |  |
| [Call Chip](https://www.reactbits.dev/micro/call-chip) | `CallChip` | Tool-call chip whose fill wipes across as a live timer ticks, ending green or shaking red |  |  |  |
| [Code Slots](https://www.reactbits.dev/micro/code-slots) | `CodeSlots` | One-time code input whose digits spring into their slots, with paste and SMS autofill |  |  |  |
| [Comet Dial](https://www.reactbits.dev/micro/comet-dial) | `CometDial` | Tick-ring dial you flick by angle, with a comet that streaks behind the lit head |  |  |  |
| [Dodge Field](https://www.reactbits.dev/micro/dodge-field) | `DodgeField` | Wrapper that makes any child dodge the pointer until it relents and glides home |  |  |  |
| [Flip Card](https://www.reactbits.dev/micro/flip-card) | `FlipCard` | Two-faced card that flips in 3D on a click, drag or flick and settles on a spring |  |  |  |
| [Flying Button](https://www.reactbits.dev/micro/flying-button) | `FlyingButton` | Button that fires its thrusters on hover, lifts off on a WebGL smoke plume and lands back in its own cloud | ⚡WebGL |  |  |
| [Folder Float](https://www.reactbits.dev/micro/folder-float) | `FolderFloat` | Folder whose notes spring out into a floating cloud when it opens on hover or press |  |  |  |
| [Fuse Button](https://www.reactbits.dev/micro/fuse-button) | `FuseButton` | Action button whose done state carries an undo on a burning fuse |  |  |  |
| [Glide Select](https://www.reactbits.dev/micro/glide-select) | `GlideSelect` | Select chip whose menu pops from its corner and whose highlight glides between rows |  |  |  |
| [Hold Button](https://www.reactbits.dev/micro/hold-button) | `HoldButton` | Hold-to-confirm button whose liquid fill rises while pressed and snaps back if you let go |  |  |  |
| [Jelly Radio](https://www.reactbits.dev/micro/jelly-radio) | `JellyRadio` | Radio group of chips where the chosen one swells and barges its neighbours outward |  |  |  |
| [Lattice Loader](https://www.reactbits.dev/micro/lattice-loader) | `LatticeLoader` | Agent status row with a lattice of cells that brighten in a wave beside a live stopwatch |  |  |  |
| [Paper Crumple](https://www.reactbits.dev/micro/paper-crumple) | `PaperCrumple` | An image that crumples into a textured 3D sheet while you hold and drag it |  |  |  |
| [Peek Rating](https://www.reactbits.dev/micro/peek-rating) | `PeekRating` | Star rating that lifts a wave of stars up to the pointer, then commits with a pop on click |  |  |  |
| [Prompt Bar](https://www.reactbits.dev/micro/prompt-bar) | `PromptBar` | Chat composer with @ sources, / commands, a model picker, dictation and attachments |  |  |  |
| [Pulse Heart](https://www.reactbits.dev/micro/pulse-heart) | `PulseHeart` | Like button that contracts to a dot, flips colour and pulses back as the count ticks over |  |  |  |
| [Refine Frame](https://www.reactbits.dev/micro/refine-frame) | `RefineFrame` | Media frame that steps an image through generation stages without any layout shift |  |  |  |
| [Rubber Segment](https://www.reactbits.dev/micro/rubber-segment) | `RubberSegment` | Segmented control whose rubber thumb stretches across the gap and squashes into place |  |  |  |
| [Scrub Field](https://www.reactbits.dev/micro/scrub-field) | `ScrubField` | Number chip you drag to scrub, with rubber-band limits and click to type |  |  |  |
| [Shredder](https://www.reactbits.dev/micro/shredder) | `Shredder` | A list with a paper shredder at the bottom that cuts dragged rows into curling strips |  |  |  |
| [Slide Commit](https://www.reactbits.dev/micro/slide-commit) | `SlideCommit` | Slide-to-confirm handle that spins while your action runs and unfurls into a done pill |  |  |  |
| [Sling Button](https://www.reactbits.dev/micro/sling-button) | `SlingButton` | Send button you pull back like a slingshot and release to fire |  |  |  |
| [Slosh Gauge](https://www.reactbits.dev/micro/slosh-gauge) | `SloshGauge` | Tank gauge whose liquid chases the value, tilts as it moves and splashes when it fills |  |  |  |
| [Spring Check](https://www.reactbits.dev/micro/spring-check) | `SpringCheck` | Checkbox row where one spring fills the box, draws the tick and strikes through the label |  |  |  |
| [Squish Switch](https://www.reactbits.dev/micro/squish-switch) | `SquishSwitch` | Switch whose thumb stretches with speed and squashes against the end when you flick it |  |  |  |
| [Status Mark](https://www.reactbits.dev/micro/status-mark) | `StatusMark` | Agent task status glyph that morphs from an idle ring to a progress arc, then a check |  |  |  |
| [Swipe Row](https://www.reactbits.dev/micro/swipe-row) | `SwipeRow` | List row that swipes open to reveal actions and deletes on a full swipe |  |  |  |
| [Swipe Toast](https://www.reactbits.dev/micro/swipe-toast) | `SwipeToast` | Toast that swipes down to dismiss and burns a thin fuse for its remaining time |  |  |  |
| [Tear Ticket](https://www.reactbits.dev/micro/tear-ticket) | `TearTicket` | Ticket whose perforated stub tears off by hand, fibre by fibre, and drops away |  |  |  |
| [Thought Line](https://www.reactbits.dev/micro/thought-line) | `ThoughtLine` | Reasoning trace header with a live clock that folds its steps into one line when done |  |  |  |
| [Voice Pill](https://www.reactbits.dev/micro/voice-pill) | `VoicePill` | Mic button that swells into a capsule of live equalizer bars and a timer while recording |  |  |  |
| [Wake Slider](https://www.reactbits.dev/micro/wake-slider) | `WakeSlider` | Thumbless range slider of thin bars where drag speed raises a wake behind the handle |  |  |  |
| [Warm Tooltip](https://www.reactbits.dev/micro/warm-tooltip) | `WarmTooltip` | Tooltip group where the first label waits, then its siblings open instantly while warm |  |  |  |

## Backgrounds 背景（63）

| 组件 | CLI ID | 官方描述 | 标记 | 依赖 | 适用 |
|---|---|---|---|---|---|
| [Acid Squares](https://www.reactbits.dev/backgrounds/acid-squares) | `AcidSquares` | A rolling field of glossy squares that ripples under two drifting colored lights |  |  |  |
| [Aero Shards](https://www.reactbits.dev/backgrounds/aero-shards) | `AeroShards` | Silk ribbons of thick glass shards streaming on layered depths among survey markers, catching light along their edges |  |  |  |
| [Antigravity](https://www.reactbits.dev/backgrounds/antigravity) | `Antigravity` | A field of particles that lifts into a glowing ring around the cursor and bursts outward on click |  |  |  |
| [Aurora](https://www.reactbits.dev/backgrounds/aurora) | `Aurora` | A soft, calm aurora that flows across the top of the page and drifts toward the cursor |  | ogl | 页面背景 |
| [Balatro](https://www.reactbits.dev/backgrounds/balatro) | `Balatro` | The swirling Balatro paint shader, with crisp pixels, a cursor that stirs the paint and click whirlpools | ⚡WebGL |  |  |
| [Ballpit](https://www.reactbits.dev/backgrounds/ballpit) | `Ballpit` | A soft-lit pit of physics balls you can shove with the cursor, grab, throw and blast apart |  |  |  |
| [Beams](https://www.reactbits.dev/backgrounds/beams) | `Beams` | Glossy ribbons that ripple in the dark and catch the light, which follows your cursor |  |  |  |
| [Color Bends](https://www.reactbits.dev/backgrounds/color-bends) | `ColorBends` | Vibrant color bends with smooth flowing animation |  |  |  |
| [CRT Warp](https://www.reactbits.dev/backgrounds/crt-warp) | `CRTWarp` | A blocky plasma glowing on a curved CRT, with real scanlines, a phosphor mask, afterglow and a power-on intro |  |  |  |
| [Dark Veil](https://www.reactbits.dev/backgrounds/dark-veil) | `DarkVeil` | A silky veil of light that drifts in the dark and bends around the cursor |  |  |  |
| [Dither](https://www.reactbits.dev/backgrounds/dither) | `Dither` | Retro dithered waves with Bayer, halftone, line and noise patterns, palettes and cursor trails |  |  |  |
| [Dot Field](https://www.reactbits.dev/backgrounds/dot-field) | `DotField` | A gradient dot field seen through a lens that follows the cursor, magnifying, pinching or swirling the dots |  |  |  |
| [Dot Grid](https://www.reactbits.dev/backgrounds/dot-grid) | `DotGrid` | A springy dot grid that the cursor flicks and drags through like jelly, with click shockwaves |  |  |  |
| [Faulty Terminal](https://www.reactbits.dev/backgrounds/faulty-terminal) | `FaultyTerminal` | A flickering CRT terminal of glowing glyphs, with phosphor trails under the cursor and glitches on click |  |  |  |
| [Ferrofluid](https://www.reactbits.dev/backgrounds/ferrofluid) | `Ferrofluid` | A glossy sea of magnetic fluid where swells of spikes roll in and the cursor raises a crown |  |  |  |
| [Floating Lines](https://www.reactbits.dev/backgrounds/floating-lines) | `FloatingLines` | Ribbons of fine glowing lines that drift in waves, part around the cursor and curl when clicked |  |  |  |
| [Flux Lines](https://www.reactbits.dev/backgrounds/flux-lines) | `FluxLines` | Glowing flux lines tracing a churning magnetic fluid. The cursor magnet reveals and curls them |  |  |  |
| [Galaxy](https://www.reactbits.dev/backgrounds/galaxy) | `Galaxy` | Endless flight through a twinkling starfield with warp jumps, cursor repulsion and star palettes |  |  |  |
| [Ghost Fibers](https://www.reactbits.dev/backgrounds/ghost-fibers) | `GhostFibers` | Layered ribbons of fine glowing fibers that twist, fold and drift through soft depth of field |  |  |  |
| [Gradient ASCII](https://www.reactbits.dev/backgrounds/gradient-ascii) | `GradientASCII` | Soft gradient glows drawn in ASCII characters that scramble under the cursor |  |  |  |
| [Gradient Blinds](https://www.reactbits.dev/backgrounds/gradient-blinds) | `GradientBlinds` | Satin gradient blinds lit by a spotlight that follows the cursor, swaying and turning toward the light |  |  |  |
| [Gradient Waves](https://www.reactbits.dev/backgrounds/gradient-waves) | `GradientWaves` | Lit satin waves rolling in from a hazy horizon, with a light that follows the cursor and swells on click |  |  |  |
| [Grainient](https://www.reactbits.dev/backgrounds/grainient) | `Grainient` | Flowing grainy gradients you can stir with the cursor |  |  |  |
| [Grid Distortion](https://www.reactbits.dev/backgrounds/grid-distortion) | `GridDistortion` | Image background that breaks into a grid of blocks under the cursor and settles back into place |  |  |  |
| [Grid Motion](https://www.reactbits.dev/backgrounds/grid-motion) | `GridMotion` | A tilted wall of drifting tiles that slides with the pointer and lights up where it rests |  |  |  |
| [Grid Scan](https://www.reactbits.dev/backgrounds/grid-scan) | `GridScan` | A 3D grid room swept by a scanning light that follows your view |  |  |  |
| [Hyperspeed](https://www.reactbits.dev/backgrounds/hyperspeed) | `Hyperspeed` | Night highway of glowing light trails on a winding road that warps into hyperspace while you hold |  |  |  |
| [Iridescence](https://www.reactbits.dev/backgrounds/iridescence) | `Iridescence` | Liquid iridescent surface with shifting folds that you can stir with the cursor |  |  |  |
| [Letter Glitch](https://www.reactbits.dev/backgrounds/letter-glitch) | `LetterGlitch` | A calm field of letters that flicker, scramble and glitch in color, stirred by the cursor and torn by clicks |  |  |  |
| [Lightfall](https://www.reactbits.dev/backgrounds/lightfall) | `Lightfall` | Streaks of light falling down a curved tunnel, bending around the cursor and stretching into warp trails on hold |  |  |  |
| [Lightning](https://www.reactbits.dev/backgrounds/lightning) | `Lightning` | Crackling, branching lightning that bends toward the cursor and strikes wherever you click |  |  |  |
| [Light Pillar](https://www.reactbits.dev/backgrounds/light-pillar) | `LightPillar` | A swirling pillar of light that ignites on load, leans toward the cursor and surges on click |  |  |  |
| [Light Rays](https://www.reactbits.dev/backgrounds/light-rays) | `LightRays` | Volumetric light rays from any edge, with source glow and haze. The cursor steers the beam and casts a shadow |  |  |  |
| [Light Tunnel](https://www.reactbits.dev/backgrounds/light-tunnel) | `LightTunnel` | A swirling fibre-optic tunnel where comets of light race into depth, steered by the cursor |  |  |  |
| [Line Waves](https://www.reactbits.dev/backgrounds/line-waves) | `LineWaves` | Fine lines that flow in silky waves while a band of light drifts through them |  |  |  |
| [Liquid Chrome](https://www.reactbits.dev/backgrounds/liquid-chrome) | `LiquidChrome` | Soft ribbons of liquid chrome that swirl through a dark pool, ripple under the cursor and catch the light as it moves |  |  |  |
| [Liquid Ether](https://www.reactbits.dev/backgrounds/liquid-ether) | `LiquidEther` | A glowing liquid that swirls under the cursor, colored by how fast it flows |  |  |  |
| [Magic Rings](https://www.reactbits.dev/backgrounds/magic-rings) | `MagicRings` | Glowing rings that pulse outward in a wave, swell toward the cursor and flare on click |  |  |  |
| [Magnet Lines](https://www.reactbits.dev/backgrounds/magnet-lines) | `MagnetLines` | A field of magnetic lines that swing toward the cursor, ripple outward and spin with every click |  |  |  |
| [Micro Slats](https://www.reactbits.dev/backgrounds/micro-slats) | `MicroSlats` | A wall of tiny slats that becomes a rolling sea in perspective, with glinting crests |  |  |  |
| [Molten Metal](https://www.reactbits.dev/backgrounds/molten-metal) | `MoltenMetal` | Swirling caustic filaments with white-hot cores that heat up under the cursor and flare on click |  |  |  |
| [Orb](https://www.reactbits.dev/backgrounds/orb) | `Orb` | A glowing ring of swirling color that breathes, trails an orbiting light and reaches toward the cursor |  |  |  |
| [Particles](https://www.reactbits.dev/backgrounds/particles) | `Particles` | A drifting 3D field of particles with glow, twinkle, constellation lines and cursor interaction |  |  |  |
| [Pattern Waves](https://www.reactbits.dev/backgrounds/pattern-waves) | `PatternWaves` | A lit halftone surface of dots, lines or glyphs that moves like draped silk |  |  |  |
| [Pixel Blast](https://www.reactbits.dev/backgrounds/pixel-blast) | `PixelBlast` | Dithered pixel clouds that drift, shimmer and light up under the cursor, with ripples, shapes and a perspective floor |  |  |  |
| [Pixel Snow](https://www.reactbits.dev/backgrounds/pixel-snow) | `PixelSnow` | Pixel-art snowflakes drifting down in layers of depth, brushed aside by the cursor |  |  |  |
| [Plasma](https://www.reactbits.dev/backgrounds/plasma) | `Plasma` | Folds of satin light twisting slowly through the dark, turning to follow the cursor |  |  |  |
| [Plasma Wave](https://www.reactbits.dev/backgrounds/plasma-wave) | `PlasmaWave` | Two ribbons of plasma curling through each other, with soft glow and white-hot cores |  |  |  |
| [Prism](https://www.reactbits.dev/backgrounds/prism) | `Prism` | Rotating prism of glowing spectral light with configurable shape, colors and motion |  |  |  |
| [Prismatic Burst](https://www.reactbits.dev/backgrounds/prismatic-burst) | `PrismaticBurst` | A burst of prismatic light rays that leans toward the cursor and sends a wave of light outward on click |  |  |  |
| [Radar](https://www.reactbits.dev/backgrounds/radar) | `Radar` | A radar scope whose sweep leaves a phosphor afterglow and picks up moving contacts |  |  |  |
| [Ripple Grid](https://www.reactbits.dev/backgrounds/ripple-grid) | `RippleGrid` | A crisp grid that ripples like water, bending and lighting up as waves pass through it |  |  |  |
| [Scanner](https://www.reactbits.dev/backgrounds/scanner) | `Scanner` | Glowing interference lines swept by a scan beam, with a CRT finish, cursor lensing and click pings |  |  |  |
| [Shape Grid](https://www.reactbits.dev/backgrounds/shape-grid) | `ShapeGrid` | A drifting grid of shapes that lights up under the cursor, with perspective tilt and rainbow trails |  |  |  |
| [Shape Waves](https://www.reactbits.dev/backgrounds/shape-waves) | `ShapeWaves` | A field of triangles, circles and squares that brighten and grow along rolling waves |  |  |  |
| [Side Rays](https://www.reactbits.dev/backgrounds/side-rays) | `SideRays` | Shafts of light that fan in from a corner or side, shimmer slowly and lean toward the cursor |  |  |  |
| [Silk](https://www.reactbits.dev/backgrounds/silk) | `Silk` | Flowing satin folds with glossy highlights that turn toward the cursor and ripple on click |  | ogl | 页面背景 |
| [Sliced Waves](https://www.reactbits.dev/backgrounds/sliced-waves) | `SlicedWaves` | Waves of colored light sliced into glowing bars, seen in depth with a focus that follows the cursor |  |  |  |
| [Soft Aurora](https://www.reactbits.dev/backgrounds/soft-aurora) | `SoftAurora` | Soft aurora borealis shader with 3D Perlin noise and cosine gradient palettes | ⚡WebGL |  |  |
| [Threads](https://www.reactbits.dev/backgrounds/threads) | `Threads` | Flowing threads that fray apart and part around the cursor, from fine silk to contour lines |  |  |  |
| [Topography](https://www.reactbits.dev/backgrounds/topography) | `Topography` | A 3D landscape drawn in glowing contour lines that rises under the cursor, with light pulses on click |  |  |  |
| [Waves](https://www.reactbits.dev/backgrounds/waves) | `Waves` | Dense flowing lines that sway like silk, bend around the cursor and spring back into place |  |  |  |
| [Web Threads](https://www.reactbits.dev/backgrounds/web-threads) | `WebThreads` | Glowing threads woven through luminous pinch points that light up under the cursor and carry light on click |  |  |  |
