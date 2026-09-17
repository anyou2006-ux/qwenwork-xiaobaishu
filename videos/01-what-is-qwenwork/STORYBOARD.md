---
format: 1920x1080
duration: 75s
message: "千问办公的关键词不是「回答」，是「交付」；你负责提需求、验收结果、承担责任，它负责把明确的任务尽力做出来"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: minimal calm underscore
---

# STORYBOARD — 千问办公是什么

第 01 章 · 60–90 秒概念拆解 · 绿线章鱼视觉（黑线白底 + #39D377 绿强调 + 章鱼 IP）

## Video direction

- **palette system**（源自 frame.md，editorial-forest 已 remix 成绿线）：canvas 白 `#FFFFFF` · ink 黑 `#000000` · accent 绿 `#39D377`（强调块、关键词、章鱼绿点）· green-deep `#155f33` / green-lite `#baf0d0` 作为卡片深浅填充与边框。扁平纸质感：无 box-shadow、无渐变；2px hairline 分隔线；6/8px 圆角；唯一全圆是章鱼 IP 的绿点。**文字用深绿 `#155f33`（或 `#114a28`）；`#39D377` 只做块面/描边/图标，不做正文字色**（它在白底上只有 1.95:1，达不到 WCAG AA）。
- **motion grammar + reveal model**：长尾缓动 `power3` 默认（平滑优于弹跳，无 back.out/bounce.out/elastic.out）。VO-paced reveal：每块内容只在配音念到它时出现，绝不 front-load——t=0 只放那句话正在说的内容，其余沿时间轴逐块 reveal，重点压在**后 ~50%**。静止优先于坏动效：hold 时最多 subtle jitter（低幅度 `sine-wave-loop`），无呼吸、无后段平移/推拉。
- **rhythm / held-frame allocation**：大部分帧 reveal 到 VO；Frame 7（金句）是 designated breather（titlecard-reveal，近乎静止）。Frame 1（hook）与 Frame 8（cta）节奏稍快、首尾呼应；Frame 3–5（机制三连）用一致的 `push-slide LEFT` 承接，读成一条连续讲解流。
- **negative list**：无阴影渐变、无 AI 紫蓝渐变、无 bokeh、无导航栏/滚动条/真实光标/浏览器 chrome；不出现 slideshow（前 25% 全 dump 再冻结）与 screensaver（各元素独立漂浮）两种失败模式；无 `repeat`/`yoyo`、无 `Math.random`/`Date.now`（确定性渲染）。章鱼 IP 一律配角，不与文字抢戏。
- **顶栏（the spine — 每帧必有）**：左「关键词是交付」，右「NN — 08」（NN = 该帧序号，两位数；左右各 96px、距顶 48px、2px `#39d377` hairline 分隔）。全片 8 帧格式完全一致。

## Frame 1 — 问一句、答一句，然后呢

- scene: 反直觉陈述落在纯白底上，两句话对比：你得到的是「一条回答」，而办公要的是「一份能往下推进的东西」
- voiceover: "问一句、答一句，你得到一条回答。办公真正要的，是一份能往下推进的东西。"
- duration: 8.384s
- transition_in: cut
- status: outline
- src: compositions/frames/01-answer-vs-deliver.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「一条回答」↔「一份能往下推进的东西」的对照
- roles: 句子 = foreground subject · 绿点章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用「问一句、答一句」这个人人熟悉的动作打开认知缺口——回答不等于交付，为「交付」铺垫。
keyMessage: 回答是一条消息，交付是一份东西。

Scene 1 (0.0–3.0s): 纯白底；「问一句、答一句」per-word staggered reveal（`dynamic-content-sequencing`）黑字居中，长尾 settle（power3）；绿点章鱼在右下角 svg self-draw 悄悄探出（`svg-path-draw`）。
Scene 2 (3.0–5.0s): 「你得到一条回答」reveal 补全——「一条回答」四个字用深绿 `#155f33` 加粗 + 下方一道绿线（`css-marker-patterns`，线用 `#39d377`）。
Scene 3 (5.0–6.0s): 转折「办公真正要的」hard-cut flash 换场（`discrete-text-sequence`），轻 whoosh。
Scene 4 (6.0–8.4s): 「是一份能往下推进的东西」reveal；「一份能往下推进的东西」落在绿 `#39d377` 圆角色块上（块内文字用 `#114a28`，对比达标）；整句 resolve 后 hold，章鱼 subtle jitter。

## Frame 2 — 关键词，是交付

- scene: 「交付」两个字成为主角，随后缩到标题位；下方一条线把「一句回答」送到「一份底稿」
- voiceover: "这里的关键词不是回答，是交付——它不只等你问，还试着把一件事做出个结果。"
- duration: 9.003s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-the-word-deliver.html
- type: product_intro
- persuasion: Coined term
- beat: clarity + orientation
- blueprint: kinetic-type-beats (Adapt)
- focal: 「交付」大词 + 「回答 → 底稿」的传递图
- roles: 「交付」大词 = foreground subject · 传递图 = foreground subject（下方）· 定义句 = supporting · 章鱼 = supporting（起点）
- sfx: （无）

narrativeRole: 命名核心概念「交付」，把它从抽象词落成「一份能接着用的底稿」这个具象结果。
keyMessage: 关键词不是回答，是交付。

Scene 1 (0.0–2.6s): 纯白底；「交付」二字 display-hero 级大号、**深绿 `#155f33` 填充**（不要用 `#39d377` 做字色），死中心 hard-cut flash-in（`discrete-text-sequence`）——命名主角。Centered。
Scene 2 (2.6–4.6s): 「交付」平滑缩小上移到标题位；下方一条线自绘（`svg-path-draw`）：左端一个小「回答」方块，向右流动，右端变成一个「底稿」方块（带折角），中间用绿点标出「往下推进」的方向。Asymmetric 60/40，上标题下图形。
Scene 3 (4.6–9.0s): 「这里的关键词不是回答，是交付」与「它不只等你问，还试着把一件事做出个结果」在图形下方 per-word reveal（`dynamic-content-sequencing`）；章鱼站在传递线起点张望（subtle jitter）；hold。

## Frame 3 — 问和交，终点不一样

- scene: 左右两栏对比：左栏「问」（终点：一段回答）交给……不，两边都是给你的，是两种工作终点
- voiceover: "问，终点是一段回答；交，终点是一份可检查、可修改、能接着往下用的底稿。"
- duration: 8.747s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-ask-vs-handover.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两卡对比（问 / 交）
- roles: 左卡 = foreground subject（问）· 右卡 = foreground subject（交）· 绿点章鱼 = supporting（右卡内）· 标题 = supporting
- sfx: whoosh-soft, pop

narrativeRole: 把「问」和「交」拆成两种不同的工作终点，画出边界，说清各自之后你还要做什么。
keyMessage: 问的终点是回答，交的终点是能继续用的底稿。

Scene 1 (0.0–0.8s): 白底；标题「两种工作终点」从上 slide-down settle（`gsap-effects` translate + opacity，power3），「终点」两字绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 2 (0.8–4.4s): 左卡「问」从左侧入，带 mirrored rotateY tilt（`split-tilt-cards`，scale 0.85→1）；卡内三条随 VO 逐条 reveal：「得到一段回答」「得到一个建议」「得到一个灵感」——配一个小对话气泡简笔。卡占左 ~45%。
Scene 3 (4.4–7.2s): 右卡「交」从右侧入（tilt 镜像，晚 ~0.2s）；卡内三条随 VO 逐条 reveal：「可检查」「可修改」「能接着往下用」——配一个带折角的底稿简笔 + 绿点章鱼在卡里干活。
Scene 4 (7.2–8.7s): 两卡内缘各落一个 pill badge（`spring-pop-entrance`，全片唯一 overshoot）——左「继续组织」、右「往下推进」；hold，左右卡 phase-opposed subtle jitter（`sine-wave-loop`，sin(t) vs sin(t+π)）。

## Frame 4 — 三个限制，先说清楚

- scene: 三句话依次叠出：「不知道你默认的前提」→「不保证每句都对」→「没资格替你作决定」，最后一句亮绿框
- voiceover: "但别把它当万能替身。它不知道你默认的前提，不保证每一句都对，也没资格替你作决定。"
- duration: 9.365s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-three-limits.html
- type: feature_showcase
- persuasion: Progressive disclosure + Rule of three
- beat: aha + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三句限制递进
- roles: 三句 = foreground subject · 三道门框 = supporting · 绿 tag = supporting · 章鱼 = supporting
- sfx: tick, tick, pop

narrativeRole: 主动划出三条硬边界，替读者避免「什么都能做」与「什么都不能做」两种误会。
keyMessage: 它不知道默认前提、不保证全对、也没资格替你作决定。

Scene 1 (0.0–1.6s): 白底；引导句「别把它当万能替身」per-word reveal（`dynamic-content-sequencing`）居中上方，Triptych 框架预留。
Scene 2 (1.6–3.5s): 第一句「不知道你默认的前提」flash-in 居中（`discrete-text-sequence`），下方绿 tag「默认前提」落（`spring-pop-entrance` settle）；章鱼在旁边点头。
Scene 3 (3.5–5.4s): velocity-matched cut 换，第二句「不保证每一句都对」flash-in，tag「逐句核对」。
Scene 4 (5.4–7.4s): 第三句「没资格替你作决定」flash-in，tag「决定权在人」，整句套一个绿 selection-box 高亮（`css-marker-patterns`）——最重的一句。
Scene 5 (7.4–9.4s): 三句 resolve 成三道并排门框，前两道门灰、最后一道门绿高亮；「最后一步留在人手里」的意象落定，hold。

## Frame 5 — 分工就一句

- scene: 三张卡片自下而上排开：提需求 · 验收结果 · 承担责任
- voiceover: "分工就一句：你提需求、验收结果、承担责任；它把已经说清楚的任务尽力做出来，再交回你手上。"
- duration: 10.944s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-who-does-what.html
- type: feature_showcase
- persuasion: Numbered enumeration
- beat: mastery + confidence
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张卡（提需求 / 验收 / 负责）
- roles: 三张卡 = foreground subject · 引导句 = supporting · 绿点章鱼 = supporting（角落）
- sfx: soft-tick

narrativeRole: 把「人机分工」压成一句能记住的清单，同时把责任明确留在人这边。
keyMessage: 你提需求、验收、负责；它处理、制作、执行。

Scene 1 (0.0–1.5s): 白底；引导句「你负责三件事」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (1.5–4.4s): 第一卡「提需求 · 说清要解决什么问题」short-path slide 入位（`center-outward-expansion` 的 direct-into-slot 形式）；卡含 mono 序号「01」+ 标题 + 一行说明。
Scene 3 (4.4–7.3s): 第二卡「验收 · 事实、数据、结论、格式」随 VO 入位（staggered ~0.2s 差）。
Scene 4 (7.3–10.9s): 第三卡「负责 · 承诺和后果都由人承担」入位并绿高亮（绿边框 + accent 描边）——责任是终点；三卡 resolve 成一行后 hold，subtle jitter。

## Frame 6 — 交不交得出去，看四件事

- scene: 四个条件排成一行瓷片：目标清楚 · 材料足够 · 权限合适 · 验收认真
- voiceover: "交不交得出去，看四件事：目标清不清楚，材料够不够齐，权限合不合适，验收认不认真。"
- duration: 9.835s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-four-conditions.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四个条件瓷片
- roles: 四瓷片 = foreground subject · 引导句 = supporting · 绿点章鱼 = supporting
- sfx: tick, tick, pop

narrativeRole: 给出一个可自查的四项清单，让「该不该交给它」从感觉变成判断。
keyMessage: 目标、材料、权限、验收——四项都清楚，才谈得上交出去。

Scene 1 (0.0–2.1s): 白底；引导句「交不交得出去，看四件事」per-word reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.1–5.6s): 四个瓷片「目标清楚 · 材料足够 · 权限合适 · 验收认真」随 VO 逐片 flash 入位（`kinetic-beat-slam`，每片约 0.8s），一行排开；章鱼在行尾，每落一片点一次头。
Scene 3 (5.6–7.9s): 「权限合适」瓷片单独一亮（另外三片短暂压暗）——对应「组织规则优先于个人判断」，这一条最常被忽略。
Scene 4 (7.9–9.8s): 四片排齐 hold，底部一行小结「四项都清楚，再谈交出去」；subtle jitter。

## Frame 7 — 省下的，不该是你的判断

- scene: 极简留白，一句金句居中，绿点章鱼安静坐在句末
- voiceover: "工具替你省下的，不该是你的判断，而是那些不值得你亲手重复的机械劳动。"
- duration: 8.683s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-what-gets-saved.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「省下的不该是你的判断」
- roles: 句子 = foreground subject · 绿点章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 主题金句落地——工具的意义是把重复劳动接走，而不是替人拿主意。
keyMessage: 省下的是重复劳动，不是你的判断。

Scene 1 (0.0–3.6s): 大留白；第一句「工具替你省下的，不该是你的判断」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态），黑字居中；「不该是你的判断」中「判断」用深绿 `#155f33` + 下方一道绿线。这是 designated breather，低动效。
Scene 2 (3.6–8.7s): 第一句 slide-up crossfade 让位（`discrete-text-sequence`），第二句「而是那些不值得你亲手重复的机械劳动」slide-up 进中心；「不值得你亲手重复」绿高亮（`#39d377` 块 + `#114a28` 字）；绿点章鱼安静坐在句末，几乎静止（最多 subtle jitter）。Hold 到结束，无第二发展段。

## Frame 8 — 先从一件小事开始

- scene: 一个动作居中：挑一件低风险、材料齐全、结果好核验的小任务，绿点落在「小任务」上
- voiceover: "第一次上手，别挑最难的那件；挑一件低风险、材料齐全、结果好核验的小任务。"
- duration: 8.747s
- transition_in: cut
- status: outline
- src: compositions/frames/08-start-small.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 三个筛选条件（低风险 · 材料齐全 · 结果好核验）
- roles: 三个条件 = foreground subject · 引导句 = supporting · 绿点章鱼 = supporting
- sfx: pop, tick

narrativeRole: 给一个立即可执行的动作——第一次上手从小任务开始，收束全片。
keyMessage: 第一次上手，先挑一件低风险、材料齐全、好核验的小任务。

Scene 1 (0.0–2.5s): 白底；引导句「第一次上手」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.5–5.7s): 三个条件瓷片「低风险 · 材料齐全 · 结果好核验」逐个 flash-in 居中（`discrete-text-sequence`，staggered）；章鱼在旁边点头。
Scene 3 (5.7–8.7s): 「先把一件小事交付清楚」落地（`spring-pop-entrance` settle），「交付清楚」绿高亮；绿点章鱼探出点头（subtle jitter + 轻微 scale）；hold。
