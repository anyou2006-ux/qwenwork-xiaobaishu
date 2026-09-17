---
format: 1920x1080
duration: 75s
message: "工具接走的是重复劳动，留下的是提需求、作判断、验收和担责任；「排斥懒人」不是骂人懒，是把机会留给愿意负责的人"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: none
---

# STORYBOARD — 排斥懒人

第 09 章 · 60–90 秒概念拆解 · 绿线章鱼视觉（黑线白底 + #39D377 绿强调 + 章鱼 IP）


## Video direction

- **Palette:** 白底 + 深绿文字 #155f33 / #114a28；亮绿 #39d377 只做块面、描边、圆点、图标，不做白底正文字色；警示语义统一用深琥珀 #a0611a，且不作为正文小字色。
- **Type:** LXGW WenKai（霞鹜文楷）；标题 Bold，正文 Regular。
- **Motion:** 单时间轴、seek-safe；主体 0.4s 内入场，场景切换 0.5s 左右。
- **Rhythm:** hook 快 → 命名停 → 对比展开 → 递进加重 → 卡片扫描 → 瓷片点射 → 金句放慢 → CTA 收。
- **Topbar:** 全片统一「排斥懒人，是奖励肯负责的人 · NN — 08」。
- **章鱼:** 一律用 `assets/octopus.html` 标准件（细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手 + 头顶实心 #39d377 圆点）；禁止整只涂成实心绿。
- **Voice:** Kokoro `zf_xiaobei`，75 秒单口，speed 1.0 零提速。


## Frame 1 — 它不让你躺平

- scene: 反直觉陈述落在纯白底上：它不让你躺平，正相反，把你能偷懒的余地一块一块收走
- voiceover: "千问办公不会让你躺平，恰恰相反，它会把你能偷懒的余地，一块一块收走。"
- duration: 8.491s
- transition_in: cut
- status: outline
- src: compositions/frames/01-not-a-free-pass.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「不会让你躺平」↔「一块一块收走」的反差
- roles: 两组字 = foreground subject · 被抽走的余地方块 = supporting（后方浅绿浮层）· 标准章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用一个反直觉的判断打开认知缺口——工具不制造清闲，反而收走可以偷懒的余地，为「懒」的重新命名铺垫。
keyMessage: 它不会让你躺平，反而把偷懒的余地一块块收走。

Scene 1 (0.0–2.8s): 纯白底；「不会让你躺平」per-word staggered reveal（`dynamic-content-sequencing`）黑字居中，长尾 settle（power3）；标准章鱼在右下角 svg self-draw 悄悄探出（`svg-path-draw`）。
Scene 2 (2.8–5.4s): 转折「恰恰相反」hard-cut flash 换场（`discrete-text-sequence`），轻 whoosh；「一块一块收走」用深绿 `#155f33` 加粗并下方一道绿线（`css-marker-patterns`，线用 `#39d377`）。
Scene 3 (5.4–8.6s): 一排浅绿小方块（代表「偷懒的余地」）从左到右逐个变淡、抽离消失（纯 CSS 浮层）；「收走」二字落在绿 `#39d377` 圆角色块上（块内文字 `#114a28`）；settle 后 hold，章鱼 subtle jitter。

## Frame 2 — 关键词，是「懒」的新意思

- scene: 「懒」字成为主角，随后被划线否掉旧义，再落成「不动脑、不担责」两条新义
- voiceover: "「懒」这个词，在这儿换了意思：不是不干活，是不动脑、不担责——忙得团团转，也算。"
- duration: 9.493s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-the-word-lazy.html
- type: naming
- persuasion: Reframing
- beat: clarity + orientation
- blueprint: oversized-statement (Reproduce)
- focal: 「懒」大词 + 「不动脑 / 不担责」两条新义
- roles: 「懒」大词 = foreground subject · 被划掉的旧义 = supporting · 两条新义 = foreground subject（下方）· 标准章鱼 = supporting（块旁）
- sfx: （无）

narrativeRole: 把本章那个词砸出来——「懒」在这里换了意思，先把定义钉死，后面才好分好坏。
keyMessage: 「懒」不是不干活，是不动脑、不担责。

Scene 1 (0.0–2.4s): 纯白底；「懒」一字 display-hero 级大号、**深绿 `#155f33` 填充**（不要用 `#39d377` 做字色），死中心 hard-cut flash-in（`discrete-text-sequence`）——命名主角。
Scene 2 (2.4–4.4s): 「懒」平滑缩小上移到标题位；右侧浮出小字「不干活」并被一道深绿横线划掉（`css-marker-patterns`，划线用 `#155f33`），提示旧义作废。
Scene 3 (4.4–8.6s): 下方两块并列 reveal：「不动脑」「不担责」per-word（`dynamic-content-sequencing`），每块配一枚绿点；末句「忙得团团转，也算」在下方淡入；标准章鱼站在块旁张望后 hold。

## Frame 3 — 同一件工具，照出两种人

- scene: 左右两栏对比：左栏「越用越强」滚雪球，右栏「越用越糟」原地打转
- voiceover: "同一件工具，照出两种人：愿意说清需求、反复验收的人越用越强；丢一句含糊需求就交差的人越用越糟。"
- duration: 11.989s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-two-kinds-of-users.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两卡对比（越用越强 / 越用越糟）
- roles: 左卡 = foreground subject（越用越强）· 右卡 = foreground subject（越用越糟）· pill badge = supporting · 标准章鱼 = supporting（右卡内）
- sfx: whoosh-soft, pop

narrativeRole: 把「工具是面镜子」落成一张两栏对照图——同样一个工具，放大人本来就有的那一面，差距越拉越大。
keyMessage: 工具照出两种人，一种越用越强，一种越用越糟。

Scene 1 (0.0–1.0s): 白底；标题「同一件工具，两种人」从上 slide-down settle（`gsap-effects` translate + opacity，power3），「两种人」绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 2 (1.0–5.6s): 左卡「越用越强」从左侧入（带 mirrored rotateY tilt，`split-tilt-cards`，scale 0.85→1）；卡内三条随 VO 逐条 reveal：「愿意把需求说清」「一遍遍验收、给反馈」「把做顺的方法沉淀下来」——配一个越滚越大的雪球简笔。卡占左 ~45%。
Scene 3 (5.6–10.2s): 右卡「越用越糟」从右侧入（tilt 镜像，晚 ~0.2s）；卡内三条随 VO 逐条 reveal：「丢一句含糊需求」「扫一眼就交差」「出了错怪工具」——配一个越用越空的一次性纸杯简笔 + 绿点章鱼在卡里叹气。
Scene 4 (10.2–12.0s): 两卡内缘各落一个 pill badge（`spring-pop-entrance`，全片唯一 overshoot）——左「滚雪球」、右「原地打转」；hold，左右卡 phase-opposed subtle jitter（`sine-wave-loop`，sin(t) vs sin(t+π)）。

## Frame 4 — 接走重复，留下判断

- scene: 三句依次递进：接走的从来只是重复 → 留下的是判断和责任 → 剩下那半更显眼、也更值钱
- voiceover: "工具接走的，从来只是重复；留下的是判断和责任，而且，比过去更显眼、也更值钱。"
- duration: 9.835s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-what-gets-left.html
- type: feature_showcase
- persuasion: Rule of three
- beat: clarity + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三句递进（重复 / 判断和责任 / 更值钱）
- roles: 三句 = foreground subject · 重复块与托盘 = supporting · 绿点 = supporting · 标准章鱼 = supporting（列尾）
- sfx: tick, tick, pop

narrativeRole: 给出本章的机制主干——工具只接走重复，把判断和责任留给人，而且留得更显眼、更值钱。
keyMessage: 接走的是重复，留下的是判断和责任。

Scene 1 (0.0–1.8s): 白底；引导句「工具接走的，从来只是重复」per-word reveal（`dynamic-content-sequencing`）居中上方，三句框架预留。
Scene 2 (1.8–4.4s): 第一句落定；右侧浮出一排灰底重复块（整理材料、生成底稿一类动作的抽象简笔，不带文字标签），随 VO 逐个被收进一个绿描边托盘（`#39d377` 描边）；落定时轻 tick。
Scene 3 (4.4–7.0s): velocity-matched cut 换句，「留下的是判断和责任」flash-in（`discrete-text-sequence`），深绿 `#155f33`；「判断」「责任」各配一枚绿点。
Scene 4 (7.0–9.1s): 第三句「比过去更显眼、也更值钱」slide-up 进中心，「更值钱」用绿 `#39d377` 圆角色块高亮（块内 `#114a28`）；三句排成一列 hold，标准章鱼在列尾点头（subtle jitter）。

## Frame 5 — 懒，也分好坏

- scene: 三张卡依次展开：好的懒、坏的懒，以及那条分界线
- voiceover: "懒也分好坏：省掉不该人做的重复，是好懒；省掉只能人做的判断和责任，是坏懒。"
- duration: 9.045s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-good-lazy-bad-lazy.html
- type: feature_showcase
- persuasion: Progressive disclosure
- beat: mastery + caution
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张卡（好的懒 / 坏的懒 / 分界线）
- roles: 三张卡 = foreground subject · 引导句 = supporting · 分界线 = supporting · 标准章鱼 = supporting（第三张旁）
- sfx: soft-tick

narrativeRole: 把「懒」一分为二，避免一棍子打死——省重复是好懒，省判断和责任才是坏懒。
keyMessage: 省掉不该人做的重复是好懒，省掉只能人做的判断和责任是坏懒。

Scene 1 (0.0–1.6s): 白底；引导句「懒，也分好坏」reveal（`dynamic-content-sequencing`，深绿 `#155f33`）居中上方。
Scene 2 (1.6–4.2s): 卡片一「好的懒」入场（`grid-card-assemble`），副行「把重复交给工具，省下时间做判断」（卡内文字 `#114a28`）；卡内一枚绿点。
Scene 3 (4.2–6.6s): 卡片二「坏的懒」入场，副行「把判断和责任，也一起推给工具」；这一张用深琥珀 `#a0611a` 细描边（警示语义，不作正文小字色）。
Scene 4 (6.6–9.1s): 卡片三「分界线」入场，副行「界线在：这件事该不该由人做」；三卡排齐后用一条绿线把前两张分开 hold，标准章鱼在第三张旁轻点头。

## Frame 6 — 接不走的四样

- scene: 四块磁贴依次点出工具接不走的四样：提需求、作判断、验收结果、承担责任
- voiceover: "工具接不走的，其实就四样：提需求、作判断、验收结果、承担责任——一件都省不了。"
- duration: 9.088s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-four-you-cant-skip.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四块磁贴（提需求 / 作判断 / 验收结果 / 承担责任）
- roles: 四磁贴 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（行尾）
- sfx: tick, tick, pop

narrativeRole: 把「留下的是判断和责任」落成一份可自查的四项清单，明确哪些活一件都推不掉。
keyMessage: 提需求、作判断、验收结果、承担责任——一件都省不了。

Scene 1 (0.0–2.0s): 白底；引导句「工具接不走的，其实就四样」per-word reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.0–4.3s): 磁贴一「提需求」、磁贴二「作判断」随 VO 逐个 flash 入位（`kinetic-beat-slam`，每片约 0.9s），一行排开。
Scene 3 (4.3–6.6s): 磁贴三「验收结果」、磁贴四「承担责任」入位；四片共用同一套描边（`#39d377` 描边 + 白底 + 深绿文字），不使用红色；标准章鱼在行尾，每落一片点一次头。
Scene 4 (6.6–8.9s): 四片下方落一行小结「一件都省不了」；四片排齐 hold，subtle jitter。

## Frame 7 — 偷懒的余地被收走了

- scene: 极简留白，一句金句居中，绿点章鱼安静坐在句末
- voiceover: "偷懒的余地被一块块收走，留下的那个位置，正好是思考和责任。"
- duration: 7.04s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-what-cant-be-saved.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「偷懒的余地被一块块收走」
- roles: 句子 = foreground subject · 绿点章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 本章题眼金句落地——省下的是重复劳动，思考和责任永远省不掉。
keyMessage: 省下的是重复劳动，省不掉的是思考和责任。

Scene 1 (0.0–3.4s): 大留白；第一句「偷懒的余地被一块块收走」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态），黑字居中；「余地被一块块收走」下方一道绿线（`#39d377`）。这是 designated breather，低动效。
Scene 2 (3.4–6.9s): 第一句 slide-up crossfade 让位（`discrete-text-sequence`），第二句「留下的那个位置，正好是思考和责任」slide-up 进中心；「正好是思考和责任」用深绿 `#155f33` 加粗 + 下方绿线；标准章鱼安静坐在句末，几乎静止（最多 subtle jitter）。Hold 到结束，无第二发展段。

## Frame 8 — 今天，补回一个动作

- scene: 一个动作居中：挑一件最近交出去的事，补回一个动作——需求说清楚一点、结果核对一遍、责任认下来
- voiceover: "今天，挑一件你最近交出去的事，补回一个动作：需求说清楚一点，结果核对一遍，责任认下来。"
- duration: 10.325s
- transition_in: cut
- status: outline
- src: compositions/frames/08-add-one-action.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 三个补回的动作（需求说清 · 结果核对 · 责任认下）
- roles: 三个条件瓷片 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（右下角点头）
- sfx: pop, tick

narrativeRole: 给一个立即可执行的动作——挑一件最近交出去的事，把那被省掉的一小步补回来，收束全片。
keyMessage: 挑一件最近交出去的事，补回一个动作：需求说清、结果核对、责任认下。

Scene 1 (0.0–2.6s): 白底；引导句「今天，挑一件你最近交出去的事」per-word reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.6–6.2s): 三个条件瓷片「需求说清楚一点 · 结果核对一遍 · 责任认下来」逐个 flash-in 居中（`discrete-text-sequence`，staggered）；标准章鱼在旁边点头。
Scene 3 (6.2–8.4s): 「补回一个动作」落地（`spring-pop-entrance` settle），「补回」绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 4 (8.4–10.6s): 小字「不是工具变了，是你变了」淡入；标准章鱼探出点头（subtle jitter + 轻微 scale）；hold 到帧末。
