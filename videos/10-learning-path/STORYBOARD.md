---
format: 1920x1080
duration: 75s
message: "工具把学习顺序倒过来了——不必先学会再用，先做、边做边学；工具省掉技能，省不掉元能力的练习"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: none
---

# STORYBOARD — 学习路径的颠覆

第 10 章 · 60–90 秒概念拆解 · 绿线章鱼视觉（黑线白底 + #39D377 绿强调 + 章鱼 IP）


## Video direction

- **Palette:** 白底 + 深绿文字 #155f33 / #114a28；亮绿 #39d377 只做块面、描边、圆点、图标，不做白底正文字色；警示语义统一用深琥珀 #a0611a，且不作为正文小字色。
- **Type:** LXGW WenKai（霞鹜文楷）；标题 Bold，正文 Regular。
- **Motion:** 单时间轴、seek-safe；主体 0.4s 内入场，场景切换 0.5s 左右。
- **Rhythm:** hook 快 → 命名停 → 对比展开 → 递进加重 → 卡片扫描 → 瓷片点射 → 金句放慢 → CTA 收。
- **Topbar:** 全片统一「先做，边做边学 · NN — 08」。
- **章鱼:** 一律用 `assets/octopus.html` 标准件（细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手 + 头顶实心 #39d377 圆点）；禁止整只涂成实心绿。
- **Voice:** Kokoro `zf_xiaobei`，75 秒单口，speed 1.0 零提速。


## Frame 1 — 先学会，才敢动手

- scene: 反直觉陈述落在纯白底上：过去用一样东西干活，得先把它的功能挨个学一遍，没学会就不敢动手
- voiceover: "过去想用一样东西干活，你得先把它的功能挨个学一遍；没学会，就不敢开始动手。"
- duration: 9.024s
- transition_in: cut
- status: outline
- src: compositions/frames/01-no-need-to-learn-first.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「学一遍」↔「不敢动手」的因果链
- roles: 「学一遍」与「不敢动手」两组字 = foreground subject · 一串功能小方块 = supporting · 标准章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用「先学会才敢动手」这条人人熟悉的旧习惯打开认知缺口，为「先做」铺垫。
keyMessage: 过去是先学会，才敢动手。

Scene 1 (0.0–3.0s): 纯白底；「先学会」三个字从下方推入（`dynamic-content-sequencing`），长尾 settle（power3）。
Scene 2 (3.0–6.0s): 下方浮出一排浅灰小方块（代表一项项功能，纯 CSS 浮层），「学一遍」逐块点亮后停住。
Scene 3 (6.0–9.4s): 切到「没学会，就不敢动手」，字重加粗、色用深绿 `#155f33`；标准章鱼在右下角 svg self-draw 探出（`svg-path-draw`），略低头后 hold。

## Frame 2 — 顺序被打乱了

- scene: 把「先学后用」这条直线打了个折：先做，边做边学，学习不再排在做事前头
- voiceover: "这一章讲的颠覆，其实就一句话：先做，边做边学；顺序反过来，学习不再排在做事前头。"
- duration: 9.963s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-do-first.html
- type: naming
- persuasion: Reframing
- beat: clarity + orientation
- blueprint: oversized-statement (Reproduce)
- focal: 「先做」这行大字 + 被折弯的直线
- roles: 「先做」大字 = foreground subject · 被折的路径线 = supporting · 标准章鱼 = supporting（句末）
- sfx: （无）

narrativeRole: 命名本章的核心概念——顺序被倒过来：先做，边做边学。
keyMessage: 顺序反了——先做，边做边学。

Scene 1 (0.0–2.8s): 一条笔直的路径线自绘（`svg-path-draw`），左端标「先学」、右端标「后用」，线用细黑。
Scene 2 (2.8–5.8s): 直线在中间被打折、折成一个回环（`svg-path-draw` 接续）；「先做」以 oversized 大字砸进画面（`scale-settle`，深绿 `#114a28`），字号约画面的 1/6 高。
Scene 3 (5.8–9.7s): 回收的线上「边做边学」并列 reveal；标准章鱼站在折线旁，头顶绿亮点起后 hold。

## Frame 3 — 过去和现在

- scene: 左右两栏对照：左栏过去先学会再上手，右栏现在先上手、不会的先让工具补上
- voiceover: "过去是先学会再上手，没学会就不敢开始；现在是先上手，不会的那部分先让工具补上。"
- duration: 9.749s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-then-vs-now.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两卡对比（过去 / 现在）
- roles: 左卡 = foreground subject（过去）· 右卡 = foreground subject（现在）· 标准章鱼 = supporting（右卡内）· 标题 = supporting
- sfx: whoosh-soft, pop

narrativeRole: 把「顺序被打乱」落成一张两栏对照图，画出旧路与新路的差别。
keyMessage: 过去学完才敢开始，现在先上手，不会的让工具补。

Scene 1 (0.0–2.4s): 白底；标题「两条学习路径」从上 slide-down settle（`gsap-effects` translate + opacity，power3），「路径」两字绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 2 (2.4–6.0s): 左卡「过去」从左侧入，带 mirrored rotateY tilt（`split-tilt-cards`，scale 0.85→1）；卡内两条随 VO 逐条 reveal：「先学会，再上手」「没学会，不敢开始」——配一条从入门指向工具的直线简笔。卡占左 ~45%。
Scene 3 (6.0–10.0s): 右卡「现在」从右侧入（tilt 镜像，晚 ~0.2s）；卡内两条随 VO 逐条 reveal：「先上手」「不会的先让工具补上」——配一个被补上一块的底稿简笔 + 绿点章鱼在卡里干活；hold，左右卡 phase-opposed subtle jitter（`sine-wave-loop`，sin(t) vs sin(t+π)）。

## Frame 4 — 用是最好的老师

- scene: 三句话依次叠出：判断是练出来的、流程是改出来的、沉淀是逼出来的，最后一句亮绿框
- voiceover: "而且，用才是最好的老师：判断是练出来的，流程是改出来的，沉淀是逼出来的。"
- duration: 9.323s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-use-teaches.html
- type: feature_showcase
- persuasion: Rule of three
- beat: clarity + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三句递进（判断 / 流程 / 沉淀）
- roles: 三句 = foreground subject · 一道「用」的底线 = supporting · 绿 tag = supporting · 标准章鱼 = supporting
- sfx: tick, tick, pop

narrativeRole: 说明「用」本身就是学习——那几样元能力，都是在做事里长出来的。
keyMessage: 判断、流程、沉淀，都是「用着用着会的」。

Scene 1 (0.0–1.8s): 白底；引导句「用，才是最好的老师」per-word reveal（`dynamic-content-sequencing`）居中上方；三句框架预留。
Scene 2 (1.8–4.2s): 第一句「判断是练出来的」flash-in 居中（`discrete-text-sequence`），下方绿 tag「核对」落（`spring-pop-entrance` settle）；标准章鱼在旁边点头。
Scene 3 (4.2–6.6s): velocity-matched cut 换，第二句「流程是改出来的」flash-in，tag「复盘」。
Scene 4 (6.6–8.9s): 第三句「沉淀是逼出来的」flash-in，tag「复用」，整句套一个绿 selection-box 高亮（`css-marker-patterns`）；三句 resolve 成一行后 hold，subtle jitter。

## Frame 5 — 省掉技能，省不掉元能力

- scene: 三张卡依次展开：说清需求、验收结果、承担责任——工具替你干的是技能，替不了的是这几样
- voiceover: "工具省掉的是技能，怎么操作、怎么排版；省不掉的是元能力：说清需求、验收结果、承担责任。"
- duration: 9.877s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-what-cant-be-saved.html
- type: feature_showcase
- persuasion: Progressive disclosure
- beat: mastery + caution
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张卡（说清需求 / 验收结果 / 承担责任）
- roles: 三张卡 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（角落）
- sfx: soft-tick

narrativeRole: 把「工具省掉技能、省不掉元能力」拆成三张可以逐个认领的卡，指明该练什么。
keyMessage: 省掉的是技能，省不掉的是需求、验收、责任。

Scene 1 (0.0–1.6s): 引导句「工具省不掉什么」reveal（深绿 `#155f33`）居中上方。
Scene 2 (1.6–4.5s): 卡片一「说清需求」入场（卡内标题 + 一行说明，文字 `#114a28`），配一个小对话气泡简笔。
Scene 3 (4.5–7.4s): 卡片二「验收结果」入场，配一个带折角的底稿简笔 + 一道核对线。
Scene 4 (7.4–10.3s): 卡片三「承担责任」入场并绿高亮（绿边框 + accent 描边）——责任是终点；三卡 resolve 成一行后 hold，标准章鱼在右下角轻点头。

## Frame 6 — 四个动作

- scene: 四块磁贴依次点出可以立刻照做的四个动作：先说要什么、让工具先交一版、边看边学、再改一轮
- voiceover: "真想上手，其实就四个动作：先说要什么，让工具先交一版，边看边学，再改一轮。"
- duration: 9.109s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-four-moves.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四块磁贴（说 / 交 / 看 / 改）
- roles: 四磁贴 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting
- sfx: tick, tick, pop

narrativeRole: 给出一个可自查的四步清单，让「先做边学」从想法落成今天就能走的流程。
keyMessage: 先说要什么，让它交一版，边看边学，再改一轮。

Scene 1 (0.0–1.5s): 引导句「四个动作」reveal（深绿 `#155f33`）居中上方。
Scene 2 (1.5–3.4s): 磁贴一「先说要什么」随 VO flash 入位（`kinetic-beat-slam`，约 0.5s）。
Scene 3 (3.4–5.2s): 磁贴二「让工具先交一版」入位。
Scene 4 (5.2–7.0s): 磁贴三「边看边学」入位。
Scene 5 (7.0–8.9s): 磁贴四「再改一轮」入位并绿高亮；四块磁贴共用同一套描边（`#39d377` 描边 + 白底 + 深绿文字），不使用红色；标准章鱼在行尾，每落一片点一次头，收回后 hold。

## Frame 7 — 会是用的结果

- scene: 极简留白，一句金句居中，绿点章鱼安静坐在句末
- voiceover: "所以工具时代最反直觉的一点是：会不是用的前提，而是用的结果。"
- duration: 8.405s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-capability-is-result.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「会不是用的前提，而是用的结果」
- roles: 句子 = foreground subject · 标准章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 本章题眼——把「会」和「用」的先后彻底翻过来，收拢全片。
keyMessage: 会不是用的前提，是用的结果。

Scene 1 (0.0–2.6s): 大留白；引句「工具时代最反直觉的一点」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态），灰绿小字居中。
Scene 2 (2.6–5.4s): 引句 slide-up crossfade 让位（`discrete-text-sequence`），主句前半「会不是用的前提」slide-up 进中心，黑字居中；「前提」两字下方压一道浅绿下划线。
Scene 3 (5.4–7.7s): 「而是用的结果」续入中心，「用的结果」用深绿 `#155f33` + 下方一道绿线（`css-marker-patterns`）；标准章鱼安静坐在句末，几乎静止（最多 subtle jitter），hold 到帧末，无第二发展段。

## Frame 8 — 挑一件「我不会」的活

- scene: 一个动作居中：挑一件自己一直说不会、觉得得先学会才能做的活，别先去学，直接开始做
- voiceover: "挑一件你一直说不会、总觉得自己得先学会才能做的活，别先去学，直接开始做。"
- duration: 9.259s
- transition_in: cut
- status: outline
- src: compositions/frames/08-start-with-i-cant.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 一句起手式「挑一件，直接开始做」
- roles: 起手式句子 = foreground subject · 「我不会」的小标签 = supporting · 标准章鱼 = supporting（右下角点头）
- sfx: pop, tick

narrativeRole: 给一个立即可执行的动作——挑一件「我不会」的活，跳过「先学」，直接开始，收束全片。
keyMessage: 挑一件你不会的活，别先去学，直接开始做。

Scene 1 (0.0–2.6s): 白底；引导句「挑一件你不会的活」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.6–6.0s): 几个「我不会」小标签逐字出现后，被一道深绿横线划掉（`css-marker-patterns`，划线用 `#155f33`）；「得先学会才能做」以灰绿小字浮出再淡出。
Scene 3 (6.0–9.1s): 「别先去学，直接开始做」落地（`spring-pop-entrance` settle），「直接开始做」绿高亮；标准章鱼探出点头（subtle jitter + 轻微 scale）；hold 到帧末。
