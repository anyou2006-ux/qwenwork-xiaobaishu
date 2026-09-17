---
format: 1920x1080
duration: 75s
message: "这本书真正教你的不是某个工具的操作，而是怎么让工具替你干活的方法；工具是杠杆，不是支点，支点是你自己"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: none
---

# STORYBOARD — 千问办公之外


## Video direction

- **Palette:** 白底 + 深绿文字 #155f33 / #114a28；亮绿 #39d377 只做块面、描边、圆点、图标，不做白底正文字色；警示语义统一用深琥珀 #a0611a，且不作为正文小字色。
- **Type:** LXGW WenKai（霞鹜文楷）；标题 Bold，正文 Regular。
- **Motion:** 单时间轴、seek-safe；主体 0.4s 内入场，场景切换 0.5s 左右。
- **Rhythm:** hook 快 → 命名停 → 两栏对照 → 三问递进 → 三张卡 → 瓷片点射 → 金句放慢 → CTA 收。
- **Topbar:** 全片统一「工具会换，方法不换 · NN — 08」。
- **章鱼:** 一律用 `assets/octopus.html` 标准件（细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手 + 头顶实心 #39d377 圆点）；禁止整只涂成实心绿。
- **Voice:** Kokoro `zf_xiaobei`，75 秒单口，speed 1.0 零提速。


## Frame 1 — 过时最快的，是你最想学的操作

- scene: 反直觉陈述落在纯白底上：你最想学的那套操作会先过时，不随工具变的东西才值得带走
- voiceover: "你最想学的那套操作，明年可能就过时；真正不随工具变的，才值得你带走。"
- duration: 8.939s
- transition_in: cut
- status: outline
- src: compositions/frames/01-what-expires.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「那套操作」↔「不随工具变的」的对照
- roles: 两组字 = foreground subject · 渐隐的版本号方块 = supporting（后方浮现）· 标准章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用「你最想学的反而最快过时」打开认知缺口，把注意力从不随工具变的东西上领过来，为「工具之外」铺垫。
keyMessage: 会过时的是操作，不随工具变的才值得带走。

Scene 1 (0.0–2.6s): 纯白底；「你最想学的那套操作」per-word staggered reveal（`dynamic-content-sequencing`），长尾 settle（power3）；右上角一枚纯 CSS 折角小方块，暗示"会过期"。
Scene 2 (2.6–5.4s): 「明年可能就过时」淡入，其上划过一道深绿横线把「操作」两字轻轻划掉（`css-marker-patterns`，线用 `#155f33`）。
Scene 3 (5.4–8.6s): 转折换场（`discrete-text-sequence`），「真正不随工具变的，才值得你带走」reveal；「不随工具变」落在绿 `#39d377` 圆角色块上（块内文字用 `#114a28`，对比达标）；标准章鱼在右下角 svg self-draw 探出（`svg-path-draw`）后 hold。

## Frame 2 — 这一章，只问工具之外

- scene: 把提问换掉——不问你学了多少功能，问千问办公之外，真正该带走的是什么
- voiceover: "所以最后一章，先把话说透、退一步问：千问办公之外，真正该带走的是什么。"
- duration: 8.491s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-beyond-the-tool.html
- type: naming
- persuasion: Reframing
- beat: clarity + orientation
- blueprint: oversized-statement (Reproduce)
- focal: 「千问办公之外」这行大字
- roles: 大字 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（句末）
- sfx: （无）

narrativeRole: 把「这本书教了什么」换成「工具之外该带走什么」，把本章那个词「千问办公之外」砸出来。
keyMessage: 这一章只问一件事：工具之外，你该带走什么。

Scene 1 (0.0–2.4s): 白底；引导句「最后一章」小字落定上半，中央留出大字位。
Scene 2 (2.4–5.4s): 「千问办公之外」以 oversized 大字砸进画面（`scale-settle`，深绿 `#114a28`），字号约画面的 1/5 高；「之外」两字绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 3 (5.4–8.9s): 下方副句「真正该带走的是什么」并列 reveal；标准章鱼举起一条触手，头顶绿点亮起后 hold。

## Frame 3 — 工具会变，方法不换

- scene: 左右两栏对照：左边工具会更新换代，右边方法换个工具照样用
- voiceover: "工具会更新，版本会换代；可判断、流程、递归这些方法，换个工具照样用。"
- duration: 8.469s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-tool-vs-method.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两栏对比（工具 / 方法）
- roles: 左栏 = foreground subject（工具）· 右栏 = foreground subject（方法）· 标准章鱼 = supporting（右栏内）
- sfx: whoosh-soft, pop

narrativeRole: 把「工具会变、方法不换」落成一张两栏对照图，画出两者的边界。
keyMessage: 工具会更新换代，判断、流程、递归不换。

Scene 1 (0.0–1.0s): 白底；标题「工具会变，方法不换」从上 slide-down settle（`gsap-effects` translate + opacity，power3），「不换」两字绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 2 (1.0–4.4s): 左栏「工具」从左侧入，带 mirrored rotateY tilt（`split-tilt-cards`，scale 0.85→1）；栏内三条随 VO 逐条 reveal：「功能会更新」「版本会换代」「按键会变」——配一个渐渐褪色的小方块。
Scene 3 (4.4–7.2s): 右栏「方法」从右侧入（tilt 镜像，晚约 0.2s）；栏内三条：「判断」「流程」「递归」——配三枚不褪色的绿描边小方块；标准章鱼在右栏角落。
Scene 4 (7.2–8.0s): 两栏内缘各落一个 pill badge（`spring-pop-entrance` settle）——左「会变」、右「照样用」；hold。

## Frame 4 — 选工具，别看谁强

- scene: 三个问题依次砸出：能不能解决你最痛的那件、数据权限放不放心、沉淀能不能带走
- voiceover: "选工具别看谁强，就问三句：能不能解决你最痛的那件？数据权限放不放心？沉淀能不能带走？"
- duration: 10.795s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-how-to-choose.html
- type: feature_showcase
- persuasion: Rule of three
- beat: clarity + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 选工具的三问
- roles: 三问 = foreground subject · 引导句 = supporting · 三枚绿 tag = supporting · 标准章鱼 = supporting（角落）
- sfx: tick, tick, pop

narrativeRole: 把「怎么选工具」从比功能拉回到自己身上，给出任何人都能自问的三条。
keyMessage: 最痛的那件、数据权限、沉淀带走——过不了这三问，功能再多也白搭。

Scene 1 (0.0–2.0s): 白底；引导句「选工具别看谁强」reveal（`dynamic-content-sequencing`），「谁强」被一道深绿线划掉（`css-marker-patterns`，线用 `#155f33`）。
Scene 2 (2.0–4.6s): 第一问「能不能解决你最痛的那件」flash-in 居中（`discrete-text-sequence`），下方绿 tag「最痛的那件」落定（`spring-pop-entrance` settle）；标准章鱼在旁边点头。
Scene 3 (4.6–7.4s): velocity-matched cut 换，第二问「数据权限放不放心」flash-in，tag「数据权限」。
Scene 4 (7.4–10.6s): 第三问「沉淀能不能带走」flash-in，tag「沉淀带走」，整行套一个绿 selection-box 高亮（`css-marker-patterns`）；三问 resolve 成三行并排 hold，最后一行最重。

## Frame 5 — 做事就三件

- scene: 三张卡片自左而右排开：判断 · 流程 · 递归
- voiceover: "做事就三件：判断，哪些能交、哪些得自己拍板；流程，把会做的写成能照做的；递归，拿上一轮喂下一轮。"
- duration: 11.605s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-three-moves.html
- type: feature_showcase
- persuasion: Progressive disclosure
- beat: mastery + caution
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张卡（判断 / 流程 / 递归）
- roles: 三张卡 = foreground subject · 引导句 = supporting · 递进箭头 = supporting · 标准章鱼 = supporting（角落）
- sfx: soft-tick

narrativeRole: 把「方法」这个抽象词拆成三件能照着做的事，也是本章收尾要人带走的第一句话。
keyMessage: 判断、流程、递归——这是做事的三件事。

Scene 1 (0.0–1.6s): 白底；引导句「方法就三件」reveal（`dynamic-content-sequencing`）居中上方，预留三卡槽位。
Scene 2 (1.6–4.4s): 第一卡「判断」short-path slide 入位（`center-outward-expansion` 的 direct-into-slot 形式），副行「哪些能交、哪些得自己拍板」；卡含序号「01」。
Scene 3 (4.4–7.9s): 第二卡「流程」入位，副行「把会做的写成能照做的」（staggered ~0.2s）。
Scene 4 (7.9–11.4s): 第三卡「递归」入位，副行「拿上一轮喂下一轮」，卡绿高亮（绿边框 + accent 描边）——方法在它这里闭环；三卡 resolve 成一行后 hold，标准章鱼在角落轻点头。

## Frame 6 — 没有工具，也能做事

- scene: 四块磁贴依次点出：会拆、会改、会定标准、会担责任——只不过慢一点
- voiceover: "就算哪天没有工具，你也知道一件事该怎么拆、怎么改、怎么定标准、怎么担责任，无非慢一点。"
- duration: 10.688s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-without-the-tool.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四块磁贴
- roles: 四磁贴 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting
- sfx: tick, tick, pop

narrativeRole: 把「离了工具就不会做事」这个担忧拆掉——方法本来就是人做事的办法，没有工具只是慢。
keyMessage: 方法本来是人做事的办法，没有工具，你只是慢一点。

Scene 1 (0.0–2.2s): 白底；引导句「就算哪天没有工具」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.2–4.4s): 磁贴一「会拆」：一件事先拆开。
Scene 3 (4.4–6.4s): 磁贴二「会改」：哪儿不对改哪儿。
Scene 4 (6.4–8.4s): 磁贴三「会定标准」：什么算做好了。
Scene 5 (8.4–10.6s): 磁贴四「会担责任」：结果由谁认；四块磁贴共用同一套描边（`#39d377` 描边 + 白底 + 深绿文字），不使用红色；标准章鱼在行尾点头。

## Frame 7 — 工具是杠杆，不是支点

- scene: 极简留白，一句金句居中：工具是杠杆，不是支点，支点是你自己
- voiceover: "说到底，工具是杠杆，不是支点；杠杆会换，支点始终是你自己。"
- duration: 7.253s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-lever-not-pivot.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「工具是杠杆，不是支点」
- roles: 句子 = foreground subject · 标准章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 全片的题眼——把「工具重要，但重要在哪」说成一句能记住的话：它是杠杆，不是支点。
keyMessage: 工具会换，杠杆会换，支点始终是你自己。

Scene 1 (0.0–3.0s): 大留白；第一句「说到底，工具是杠杆，不是支点」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态）；「杠杆」与「支点」用深绿 `#155f33`。这是 designated breather，低动效。
Scene 2 (3.0–6.9s): 第二句「杠杆会换，支点始终是你自己」slide-up 进中心（`discrete-text-sequence`）；「你自己」绿高亮（`#39d377` 块 + `#114a28` 字）；标准章鱼安静坐在句末，几乎静止（最多 subtle jitter）。Hold 到帧末，无第二发展段。

## Frame 8 — 带走三句话

- scene: 收尾给三句话——方法三件、分工三件、位置一件，章鱼点头收束全片
- voiceover: "到底该带走什么？三句话：方法三件、分工三件、位置一件。剩下的，交给你自己。"
- duration: 8.555s
- transition_in: cut
- status: outline
- src: compositions/frames/08-three-sentences.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 三句话（方法 / 分工 / 位置）
- roles: 三枚标签 = foreground subject · 引导问句 = supporting · 标准章鱼 = supporting（右下角点头）
- sfx: pop, tick

narrativeRole: 把全片压成能带走的三句话，克制收束，不升华。
keyMessage: 方法三件、分工三件、位置一件——剩下的，交给你自己。

Scene 1 (0.0–2.5s): 白底；引导问句「到底该带走什么」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.5–5.5s): 三枚小标签「方法三件 · 分工三件 · 位置一件」逐个 flash-in 居中（`discrete-text-sequence`，staggered）；标准章鱼在旁边点头。
Scene 3 (5.5–8.6s): 三句并排 hold，底部一行「剩下的，交给你自己」轻落（`spring-pop-entrance` settle），「交给你自己」绿高亮；标准章鱼探出点头（subtle jitter + 轻微 scale），hold 到帧末。
