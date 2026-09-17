---
format: 1920x1080
duration: 75s
message: "工具把「不会、没空、不敢」这三堵外部的墙拆完了，剩下认知、意愿、边界三堵墙长在自己身上，只能自己拆——工具是放大镜，放大的是你本身"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: none
---

# STORYBOARD — 最大限制，在自己


## Video direction

- **Palette:** 白底 + 深绿文字 #155f33 / #114a28；亮绿 #39d377 只做块面、描边、圆点、图标，不做白底正文字色；警示语义统一用深琥珀 #a0611a，且不作为正文小字色。
- **Type:** LXGW WenKai（霞鹜文楷）；标题 Bold，正文 Regular。
- **Motion:** 单时间轴、seek-safe；主体 0.4s 内入场，场景切换 0.5s 左右。
- **Rhythm:** hook 快 → 命名停 → 放大镜两栏展开 → 三堵墙递进 → 代价卡片扫描 → 四句自查点射 → 金句放慢 → CTA 收。
- **Topbar:** 全片统一「最大限制在自己 · NN — 08」。
- **章鱼:** 一律用 `assets/octopus.html` 标准件（细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手 + 头顶实心 #39d377 圆点）；禁止整只涂成实心绿。
- **Voice:** Kokoro `zf_xiaobei`，75 秒单口，speed 1.0 零提速。


## Frame 1 — 外部的墙，拆完了

- scene: 反直觉陈述落在纯白底上：工具把「不会、没空、不敢」三堵墙拆得差不多了，剩下的那堵却是自己砌的
- voiceover: "不会、没空、不敢，这三堵墙工具都拆得差不多了；剩下的那堵，是你自己砌的。"
- duration: 7.701s
- transition_in: cut
- status: outline
- src: compositions/frames/01-walls-you-built.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「三堵墙都拆了」↔「剩下一堵是你自己砌的」的反差
- roles: 两组字 = foreground subject · 三堵简笔墙形 = supporting（被划掉淡出）· 标准章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用「工具都拆完了」这个读者默认的好消息，翻出「剩下的墙是自己砌的」这个反直觉结论，为全片立题。
keyMessage: 外部三堵墙工具拆了，剩下的那堵是自己砌的。

Scene 1 (0.0–2.6s): 纯白底；「不会」「没空」「不敢」三个词 per-word staggered reveal（`dynamic-content-sequencing`）横排落下，长尾 settle（power3），每个词旁一道绿短线 `#39d377`。
Scene 2 (2.6–5.6s): 三词下方浮出三堵简笔墙形（细黑线自绘 `svg-path-draw`），随后被一道斜线划掉、淡出——外部的墙拆掉了。
Scene 3 (5.6–8.6s): 画面右侧立起第四堵墙（细黑线轮廓，未划掉，比前三个高）；标准章鱼在右下角 svg self-draw 探出，微微仰头看这堵墙，hold。


## Frame 2 — 那堵墙，在身上

- scene: 画面中央砸出「自己」二字，下方并列三个词：认知 · 意愿 · 边界
- voiceover: "答案有点直白：真正拦住你的，是自己身上那三堵墙——认知、意愿、边界。"
- duration: 7.787s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-three-inner-walls.html
- type: naming
- persuasion: Reframing
- beat: clarity + orientation
- blueprint: oversized-statement (Reproduce)
- focal: 「自己」大字 + 认知 / 意愿 / 边界三词
- roles: 「自己」大字 = foreground subject · 三词 = foreground subject（下方）· 标准章鱼 = supporting（句末）
- sfx: （无）

narrativeRole: 把「墙在自己身上」这件事命名出来，把三堵墙拆成三个可以叫得出名字的词。
keyMessage: 真正拦住你的，是自己身上那三堵墙。

Scene 1 (0.0–2.4s): 白底；引导句「答案有点直白」小字先出（深绿 `#155f33`），居中上方。
Scene 2 (2.4–5.0s): 「自己」以 oversized 大字砸进画面（`scale-settle`，深绿 `#114a28`），字号约画面 1/6 高。
Scene 3 (5.0–7.7s): 下方三词「认知 · 意愿 · 边界」并列 reveal，各落一个绿 `#39d377` 圆点；标准章鱼在句末抬头，头顶绿点亮起后 hold。


## Frame 3 — 它是放大镜

- scene: 左右两栏对照放大镜的两面：左边「肯想的人」，右边「想甩锅的人」，同一件工具放大出不同结果
- voiceover: "工具像一面放大镜，放大的只有你本身：肯想的人想得更深，想甩锅的人锅甩得更顺。"
- duration: 9.536s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-magnifying-glass.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 放大镜图形 + 两栏对照（肯想的人 / 想甩锅的人）
- roles: 左栏 = foreground subject（肯想的人）· 右栏 = foreground subject（想甩锅的人）· 放大镜图形 = supporting（中轴）· 标准章鱼 = supporting（中轴旁）
- sfx: whoosh-soft, pop

narrativeRole: 用放大镜的两面把「工具放大的是你本身」讲清楚——同一件工具，人的不同会被放得更大。
keyMessage: 工具放大的，是你本来就有的东西。

Scene 1 (0.0–2.4s): 白底；中轴一条细黑竖线 + 一枚简笔放大镜（细线自绘 `svg-path-draw`）落在中央，镜面环用 `#39d377` 描边、不填充；引导句「工具像一面放大镜」reveal。
Scene 2 (2.4–4.8s): 左栏亮起，标题「肯想的人」+ 副行「想得更深」，文字深绿 `#155f33`。
Scene 3 (4.8–7.2s): 右栏亮起，标题「想甩锅的人」+ 副行「错铺得更广」，文字深绿 `#114a28`；两栏内缘各落一个 pill badge——左「放大长处」、右「放大问题」（`spring-pop-entrance` settle）。
Scene 4 (7.2–9.7s): 放大镜缓缓平移过两栏（`gsap-effects` translate，power3），表示同一件工具；标准章鱼站在中轴旁不动，hold。


## Frame 4 — 三堵墙的样子

- scene: 三行字依次叠出，写出三堵墙各自的样子：不认判断与责任 · 不愿一遍遍改 · 说不清守什么放什么
- voiceover: "三堵墙样子不一样：不承认判断和责任是自己的，不肯一遍遍验收和改，说不清该守什么、放什么。"
- duration: 10.453s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-three-wall-shapes.html
- type: feature_showcase
- persuasion: Rule of three
- beat: clarity + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三行递进的墙的样子描述
- roles: 三行字 = foreground subject · 三堵简笔墙形 = supporting · 标准章鱼 = supporting
- sfx: tick, tick, pop

narrativeRole: 把三堵墙从名字展开成三种具体的样子，让「认知、意愿、边界」落到能对照自己的行为上。
keyMessage: 不认责任、不愿改、说不清边界，就是这三堵墙的样子。

Scene 1 (0.0–1.8s): 白底；引导句「三堵墙样子不一样」reveal（`dynamic-content-sequencing`）居中上方，下方预留三道横槽。
Scene 2 (1.8–5.0s): 第一堵墙 flash-in 居中（`discrete-text-sequence`）：主行「不承认判断和责任是自己的」；旁落一枚深琥珀 `#a0611a` 空心描边圆点（警示语义，不作正文小字色）。
Scene 3 (5.0–8.2s): velocity-matched cut 换，第二堵墙 flash-in：主行「不肯一遍遍验收和改」；同样一枚琥珀描边圆点。
Scene 4 (8.2–11.1s): 第三堵墙 flash-in：主行「说不清该守什么、该放什么」；三行 resolve 成并排三道简笔墙形，hold 前标准章鱼轻点一次头。


## Frame 5 — 不拆会怎样

- scene: 三张卡依次展开，写不拆墙的代价：认知那堵让错误更快更漂亮 · 意愿那堵让你停在及格 · 边界那堵工具也帮不上
- voiceover: "不拆会怎样：认知那堵，只让错误做得更快更漂亮；意愿那堵，你停在及格；边界那堵，工具也帮不上。"
- duration: 10.475s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-cost-of-not-breaking.html
- type: feature_showcase
- persuasion: Progressive disclosure
- beat: mastery + caution
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张卡（认知 / 意愿 / 边界）各自的代价
- roles: 三张卡 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（角落）
- sfx: soft-tick

narrativeRole: 每堵墙配一个代价，讲清「不拆」会发生什么，把「墙挡住的到底是什么」说实。
keyMessage: 这三堵墙不拆，工具再强也帮不上你。

Scene 1 (0.0–1.8s): 白底；引导句「不拆会怎样」reveal（深绿 `#155f33`），居中上方。
Scene 2 (1.8–4.8s): 卡一「认知」入位（`center-outward-expansion` direct-into-slot），副行「只让错误做得更快、更漂亮」（卡内文字 `#114a28` + `#39d377` 描边）。
Scene 3 (4.8–7.8s): 卡二「意愿」随 VO 入位（staggered ~0.2s）：副行「永远停在及格」。
Scene 4 (7.8–11.1s): 卡三「边界」入位并绿高亮（绿边框 + accent 描边）：副行「说不清，工具也帮不上」；三卡 resolve 成一行后 hold，subtle jitter。


## Frame 6 — 四句自查

- scene: 四块磁贴逐个点出四句自查：想清楚了吗 · 认下责任了吗 · 一遍遍改了吗 · 边界划好了吗
- voiceover: "别问它能不能让你变强，问自己：想清楚了吗，认下责任了吗，一遍遍改了吗，边界划好了吗。"
- duration: 9.877s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-self-check-questions.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四块自查磁贴
- roles: 四磁贴 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting
- sfx: tick, tick, pop

narrativeRole: 把问题从「工具行不行」扭回「我做到没有」，给一套能自己核对的四问清单。
keyMessage: 该问的不是工具能不能让你变强，是这四句你自己答得怎样。

Scene 1 (0.0–2.2s): 白底；引导句「别问它能不能让你变强」per-word reveal（`dynamic-content-sequencing`）居中上方，其后跟一行小字「问自己」。
Scene 2 (2.2–4.2s): 磁贴一「想清楚了吗」flash-in（`kinetic-beat-slam`）。
Scene 3 (4.2–6.2s): 磁贴二「认下责任了吗」。
Scene 4 (6.2–8.2s): 磁贴三「一遍遍改了吗」。
Scene 5 (8.2–10.3s): 磁贴四「边界划好了吗」；四块磁贴共用同一套描边（`#39d377` 描边 + 白底 + 深绿文字），不使用红色；标准章鱼在右下角停住，hold。


## Frame 7 — 过路的和留下的

- scene: 极简留白，一句金句居中：工具会过时，你是谁不会；工具是过路的，人是留下的
- voiceover: "工具会过时，你是谁不会；工具是过路的，人是留下的。"
- duration: 6.272s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-tools-pass-people-stay.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「工具是过路的，人是留下的」
- roles: 句子 = foreground subject · 标准章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 全片题眼——把「最大限制在自己」收成一句关于人的话，而不是关于工具的夸奖。
keyMessage: 工具是过路的，人是留下的。

Scene 1 (0.0–2.2s): 大留白；「工具会过时，你是谁不会」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态），黑字居中；「你是谁」用深绿 `#155f33` + 下方一道绿线。
Scene 2 (2.2–4.2s): 第一句 slide-up crossfade 让位（`discrete-text-sequence`），第二句「工具是过路的，人是留下的」slide-up 进中心；「人是留下的」绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 3 (4.2–6.0s): 标准章鱼安静坐在句末，几乎静止（最多 subtle jitter）；hold 到帧末，无第二发展段。


## Frame 8 — 写下你那堵墙

- scene: 一个动作居中：挑一件拖着没做的活，写下「其实是我……」，做出一版初稿——绿点落在「初稿」上
- voiceover: "挑一件你一直拖着没做的活，写下后面那句「其实是我……」。做出一版初稿，就是拆墙的开始。"
- duration: 10.923s
- transition_in: cut
- status: outline
- src: compositions/frames/08-write-your-wall.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 动作三步（挑一件活 · 写下那句话 · 做一版初稿）
- roles: 三个步骤磁贴 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（点头）
- sfx: pop, tick

narrativeRole: 给一个今天就能执行的动作——挑一件拖着的活、写下背后的原因、做出第一版初稿，收束全片。
keyMessage: 不用做完，做出一版能看的初稿，就是拆墙的开始。

Scene 1 (0.0–2.4s): 白底；引导句「挑一件一直拖着没做的活」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.4–4.8s): 三个步骤磁贴「挑一件活 · 写下「其实是我……」 · 做一版初稿」逐个 flash-in（`discrete-text-sequence`，staggered）。
Scene 3 (4.8–7.4s): 「做一版初稿」被绿高亮，「就是拆墙的开始」落地（`spring-pop-entrance` settle）；标准章鱼在旁边点头。
Scene 4 (7.4–10.0s): 三个步骤排齐 hold；标准章鱼探出点头（subtle jitter + 轻微 scale），收回后 hold 到帧末。
