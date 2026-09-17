---
format: 1920x1080
duration: 75s
message: "六块能力是六个零件，不是六门课；能力越多，越要想清哪一步交给它、哪一步留给人——内容、权限、结论都得有人核"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: none
---

# STORYBOARD — 六大能力逐个上手


## Video direction

- **Palette:** 白底 + 深绿文字 #155f33 / #114a28；亮绿 #39d377 只做块面、描边、圆点、图标，不做白底正文字色；警示语义统一用深琥珀 #a0611a，且不作为正文小字色。
- **Type:** LXGW WenKai（霞鹜文楷）；标题 Bold，正文 Regular。
- **Motion:** 单时间轴、seek-safe；主体 0.4s 内入场，场景切换 0.5s 左右。
- **Rhythm:** hook 停 → 命名砸词 → 对比展开 → 三条通用规矩 → 三件上手事 → 四块磁贴点射 → 金句放慢 → CTA 收。
- **Topbar:** 全片统一「能力是零件，方法是本事 · NN — 08」。
- **章鱼:** 一律用 `assets/octopus.html` 标准件（细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手 + 头顶实心 #39d377 圆点）；禁止整只涂成实心绿。
- **Voice:** Kokoro `zf_xiaobei`，75 秒单口，speed 1.0 零提速。


## Frame 1 — 六块摆出来，先别急着全学

- scene: 反直觉陈述落在纯白底上：六块能力摆到一起，第一反应是「得一块一块都学会」，而这恰恰是最容易犯的错
- voiceover: "看到六块能力摆到一起，第一反应常常是：这么多，我是不是得一块一块都学会。"
- duration: 8.683s
- transition_in: cut
- status: outline
- src: compositions/frames/01-not-six-courses.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「得一块一块都学会」这句直觉被轻轻停住
- roles: 两句话 = foreground subject · 一串极简能力标签块 = supporting（后方一排浮现）· 标准章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用「六块能力=六门课」这个人人都会有的反应打开认知缺口——它其实不是要你都学会，为「零件」这个说法铺垫。
keyMessage: 六块能力摆出来，难点不在「多学几块」。

Scene 1 (0.0–2.8s): 纯白底；「六块能力摆到一起」per-word staggered reveal（`dynamic-content-sequencing`）黑字居中，长尾 settle（power3）。
Scene 2 (2.8–5.8s): 一排 6 个极简能力标签块自左向右依次亮起（每块约 0.2s 差），代表六块能力；标准章鱼在右下角 svg self-draw 探出（`svg-path-draw`）。
Scene 3 (5.8–7.4s): 转折——「第一反应常常是：」reveal，语速落下来。
Scene 4 (7.4–9.1s): 「这么多，我是不是得一块一块都学会」落在绿 `#39d377` 圆角色块上（块内文字用 `#114a28`），句末留一个轻停顿；整句 resolve 后 hold，章鱼 subtle jitter。

## Frame 2 — 关键词，是零件

- scene: 「零件」两个字成为主角，随后缩到标题位；下方六个小方块被串成同一件工作，各管一段
- voiceover: "换个说法就通了：这六块不是六门课，是同一件工作的六种零件，各管一段。"
- duration: 9.472s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-the-word-parts.html
- type: naming
- persuasion: Reframing
- beat: clarity + orientation
- blueprint: oversized-statement (Reproduce)
- focal: 「零件」大词 + 「六种零件拼成一件工作」的传递图
- roles: 「零件」大词 = foreground subject · 拼块图 = foreground subject（下方）· 定义句 = supporting · 标准章鱼 = supporting（拼块起点）
- sfx: （无）

narrativeRole: 命名本章的落点——六块能力不是六门课，而是同一件工作的六种零件，各自负责一段。
keyMessage: 这六块，是一件工作的六种零件。

Scene 1 (0.0–2.4s): 纯白底；「零件」二字 display-hero 级大号、**深绿 `#155f33` 填充**（不要用 `#39d377` 做字色），死中心 hard-cut flash-in（`discrete-text-sequence`）——命名主角。Centered。
Scene 2 (2.4–5.0s): 「零件」平滑缩小上移到标题位；下方六个小方块（对应六块能力，各带一个极短标签）被一条细线串成一件「工作」的轮廓，中间用绿点标出「各管一段」的方向。Asymmetric 60/40，上标题下图形。
Scene 3 (5.0–8.6s): 「这六块不是六门课」与「是同一件工作的六种零件，各管一段」在图形下方 per-word reveal（`dynamic-content-sequencing`）；标准章鱼站在拼块起点张望（subtle jitter）；hold。

## Frame 3 — 当课背，还是当地图翻

- scene: 左右两栏对比：左边「当六门课学」要背下整张图，右边「当六块地图翻」只要知道该往哪块看
- voiceover: "当六门课学，你得先背下整张图；把它当六块地图翻，你只要遇到一件活，知道该往哪块看。"
- duration: 9.877s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-course-vs-map.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两卡对比（当课背 / 当地图翻）
- roles: 左卡 = foreground subject（当六门课学）· 右卡 = foreground subject（当六块地图翻）· 标准章鱼 = supporting（右卡内）· 标题 = supporting
- sfx: whoosh-soft, pop

narrativeRole: 把「当课背」和「当地图翻」摆成两栏，画出两种用法的差别，说清为什么不用都学会。
keyMessage: 它不是六门课，是六块遇到活才翻的地图。

Scene 1 (0.0–1.6s): 白底；标题「两种用法」从上 slide-down settle（`gsap-effects` translate + opacity，power3），「用法」两字绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 2 (1.6–5.2s): 左卡「当六门课学」从左侧入，带 mirrored rotateY tilt（`split-tilt-cards`，scale 0.85→1）；卡内随 VO 逐条 reveal：「背下整张图」「想都学会」「记不住就慌」——配一张密密麻麻的目录简笔。卡占左 ~45%。
Scene 3 (5.2–8.4s): 右卡「当六块地图翻」从右侧入（tilt 镜像，晚 ~0.2s）；卡内随 VO 逐条 reveal：「遇到一件活」「知道往哪块看」「不用全记住」——配一张只点亮一格的简笔地图 + 绿点章鱼在卡里指路。
Scene 4 (8.4–10.3s): 两卡内缘各落一个 pill badge（`spring-pop-entrance`，全片唯一 overshoot）——左「背下来」、右「按需翻」；hold，左右卡 phase-opposed subtle jitter（`sine-wave-loop`，sin(t) vs sin(t+π)）。

## Frame 4 — 三条一样的规矩

- scene: 三句话依次叠出：内容先核、权限先设、结论留给你自己拍，最后一句亮绿框
- voiceover: "不管用哪一块，有三条规矩都一样：内容先核，权限先设，结论留给你自己拍。"
- duration: 9.387s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-three-same-rules.html
- type: feature_showcase
- persuasion: Rule of three
- beat: clarity + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三条规矩递进，第三条「结论留给你自己拍」最重
- roles: 三句话 = foreground subject · 各自的绿 tag = supporting · 标准章鱼 = supporting（第三条旁）
- sfx: tick, tick, pop

narrativeRole: 给出六块能力共用的三条规矩，把「先核内容、再谈其他」从口号落成可执行的顺序。
keyMessage: 内容先核，权限先设，结论留给你自己拍。

Scene 1 (0.0–1.4s): 白底；引导句「不管用哪一块」per-word reveal（`dynamic-content-sequencing`）居中上方，三段框架预留。
Scene 2 (1.4–3.4s): 第一句「内容先核」flash-in 居中（`discrete-text-sequence`），下方绿 tag「回到原始材料」落（`spring-pop-entrance` settle）；轻 tick。
Scene 3 (3.4–5.4s): velocity-matched cut 换，第二句「权限先设」flash-in，tag「按任务需要给」；轻 tick。
Scene 4 (5.4–8.6s): 第三句「结论留给你自己拍」flash-in，tag「决定权在人」，整句套一个绿 selection-box 高亮（`css-marker-patterns`）——最重的一句；标准章鱼在第三句旁点头，三句 resolve 后 hold。

## Frame 5 — 上手三件事

- scene: 三张卡片自下而上排开：先归类是哪一类活 · 说清你到底要什么 · 要一份能接着改的底稿
- voiceover: "上手也不复杂：先归类这是哪一类活，再说清你到底要什么，最后要一份能接着改的底稿。"
- duration: 9.792s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-three-first-steps.html
- type: feature_showcase
- persuasion: Progressive disclosure
- beat: mastery + caution
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张卡（归类 / 说清需求 / 要底稿）
- roles: 三张卡 = foreground subject · 引导句 = supporting · 绿点章鱼 = supporting（角落）
- sfx: soft-tick

narrativeRole: 把「怎么上手」压成能记住的三步，并强调第一份东西永远是「能接着改的底稿」。
keyMessage: 先归类，再说清要什么，最后要一份能接着改的底稿。

Scene 1 (0.0–1.5s): 白底；引导句「上手也不复杂」reveal（`dynamic-content-sequencing`）居中上方，三卡槽位预留。
Scene 2 (1.5–4.4s): 第一卡「归类 · 这是哪一类活」short-path slide 入位（`center-outward-expansion` 的 direct-into-slot 形式）；卡含 mono 序号「01」+ 标题 + 一行说明。
Scene 3 (4.4–7.3s): 第二卡「说清需求 · 你到底要什么」随 VO 入位（staggered ~0.2s 差）。
Scene 4 (7.3–10.3s): 第三卡「要份底稿 · 能接着改的」入位并绿高亮（绿边框 + accent 描边）——终点是「能接着改」；三卡 resolve 成一行后 hold，subtle jitter。

## Frame 6 — 越多，越有四件事省不掉

- scene: 四块磁贴依次点出：用哪一块 · 谁拍板 · 权限开到多大 · 最后谁来验收
- voiceover: "能力越多，越有四件事省不掉：用哪一块，谁拍板，权限开到多大，最后谁来验收。"
- duration: 9.024s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-four-you-cant-skip.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四块磁贴（用哪块 / 谁拍板 / 权限 / 谁验收）
- roles: 四磁贴 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（行尾）
- sfx: tick, tick, pop

narrativeRole: 点出本章的落点——能力越多，边界和分工越省不掉；这四件事就是人和工具的交界。
keyMessage: 用哪块、谁拍板、权限多大、谁来验收——四件都省不掉。

Scene 1 (0.0–1.8s): 白底；引导句「能力越多，越有四件事省不掉」per-word reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (1.8–4.6s): 四个瓷片「用哪一块 · 谁拍板 · 权限开到多大 · 最后谁来验收」随 VO 逐片 flash 入位（`kinetic-beat-slam`，每片约 0.7s），一行排开；章鱼在行尾，每落一片点一次头。
Scene 3 (4.6–6.8s): 「权限开到多大」瓷片单独一亮（另外三片短暂压暗）——对应「权限按任务需要设、不一把全开」，这一条最常被忽略。
Scene 4 (6.8–8.9s): 四片排齐 hold，底部一行小结「能力越多，越要有人管边界」；subtle jitter。

## Frame 7 — 能力是零件，方法是本事

- scene: 极简留白，一句金句居中，第二条短句接上，绿点章鱼安静坐在句末
- voiceover: "能力是零件，方法是本事；零件越齐，越考验你会用哪一块。"
- duration: 6.997s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-parts-vs-craft.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「能力是零件，方法是本事」
- roles: 句子 = foreground subject · 标准章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 全片题眼——把「零件会换、本事不换」压成一句，让「零件越齐越考验人」在观众心里落地。
keyMessage: 能力是零件，方法是本事；零件越齐，越考验你会用哪一块。

Scene 1 (0.0–2.6s): 大留白；第一句「能力是零件，方法是本事」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态），黑字居中；「零件」「本事」用深绿 `#155f33` + 下方一道绿线。这是 designated breather，低动效。
Scene 2 (2.6–3.4s): 第一句停顿一下后 slide-up 淡出（`discrete-text-sequence`），画面回到近乎空白，只留章鱼头顶那枚绿点。
Scene 3 (3.4–8.0s): 第二句「零件越齐，越考验你会用哪一块」slide-up 进中心；「越考验你会用哪一块」绿高亮（`#39d377` 块 + `#114a28` 字）；标准章鱼安静坐在句末，几乎静止（最多 subtle jitter）。Hold 到帧末，无第二发展段。

## Frame 8 — 先挑最痛的那一件

- scene: 一个动作居中：先别急着全都用上，挑手头最痛的那件重复活，交给一块能力跑顺，再走下一样
- voiceover: "所以别急着全都用上。先挑你手头最痛的那件重复活，交给一块能力跑顺，再走下一样。"
- duration: 10.56s
- transition_in: cut
- status: outline
- src: compositions/frames/08-start-with-the-painful-one.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 三个动作（挑最痛的一件 · 交给一块能力 · 跑顺再走）
- roles: 三个动作瓷片 = foreground subject · 引导句 = supporting · 绿点章鱼 = supporting（右下角点头）
- sfx: pop, tick

narrativeRole: 给一个立即可执行的动作——别贪多，先挑最痛的那件重复活跑顺一块能力，收束全片（不升华）。
keyMessage: 先挑手头最痛的那件重复活，交给一块能力跑顺，再走下一样。

Scene 1 (0.0–2.4s): 白底；引导句「所以别急着全都用上」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.4–5.6s): 三个动作瓷片「挑最痛的一件 · 交给一块能力 · 跑顺再走下一样」逐个 flash-in 居中（`discrete-text-sequence`，staggered）；章鱼在旁边点头。
Scene 3 (5.6–8.0s): 「你手头最痛的那件重复活」落地（`spring-pop-entrance` settle），「最痛的」绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 4 (8.0–10.0s): 绿点章鱼探出点头（subtle jitter + 轻微 scale）；三个瓷片排齐 hold 到帧末。
