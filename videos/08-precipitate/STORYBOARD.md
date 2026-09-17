---
format: 1920x1080
duration: 75s
message: "沉淀是把这一次做对的事，变成下一次的起点；技能打包做法、记忆记住你、定时任务把重复交给时间，但决定和责任始终留在人手里"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: none
---

# STORYBOARD — 把活沉淀下来

第 08 章 · 60–90 秒概念拆解 · 绿线章鱼视觉（黑线白底 + #39D377 绿强调 + 章鱼 IP）


## Video direction

- **Palette:** 白底 + 深绿文字 #155f33 / #114a28；亮绿 #39d377 只做块面、描边、圆点、图标，不做白底正文字色；警示语义统一用深琥珀 #a0611a，且不作为正文小字色。
- **Type:** LXGW WenKai（霞鹜文楷）；标题 Bold，正文 Regular。
- **Motion:** 单时间轴、seek-safe；主体 0.4s 内入场，场景切换 0.5s 左右。
- **Rhythm:** hook 快 → 命名停 → 对比展开 → 递进加重 → 卡片扫描 → 瓷片点射 → 金句放慢 → CTA 收。
- **Topbar:** 全片统一「把做对的沉淀下来 · NN — 08」。
- **章鱼:** 一律用 `assets/octopus.html` 标准件（细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手 + 头顶实心 #39d377 圆点）；禁止整只涂成实心绿。
- **Voice:** Kokoro `zf_xiaobei`，75 秒单口，speed 1.0 零提速。


## Frame 1 — 做对过的事，别让它白做

- scene: 反直觉陈述落在纯白底上：上周调顺的那份周报，这周还得从头交代一遍——做对过的事，等于白做了
- voiceover: "上周你花一下午调顺的那份周报，这周你还得从头交代一遍。做对过的事，等于白做了。"
- duration: 9.685s
- transition_in: cut
- status: outline
- src: compositions/frames/01-weekly-report-again.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「做对过的事，等于白做了」的对照
- roles: 两组字 = foreground subject · 文件缩略块 = supporting（后方浮现）· 标准章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用一个具体经历打开认知缺口——做对过的事如果不沉淀，下一次等于白做，为「沉淀」铺垫。
keyMessage: 做对一次不难，难的是让它下次不用重来。

Scene 1 (0.0–2.8s): 纯白底；「上周你花一下午」per-word staggered reveal（`dynamic-content-sequencing`）黑字居中，长尾 settle（power3）；标准章鱼在右下角 svg self-draw 悄悄探出（`svg-path-draw`）。
Scene 2 (2.8–5.8s): 「调顺的那份周报」补全；「那份周报」用深绿 `#155f33` 加粗 + 下方一道绿线（`css-marker-patterns`，线用 `#39d377`）。
Scene 3 (5.8–7.4s): 转折切到「这周你还得从头交代一遍」，hard-cut flash 换场（`discrete-text-sequence`），轻 whoosh。
Scene 4 (7.4–10.0s): 「做对过的事，等于白做了」reveal；「白做了」落在绿 `#39d377` 圆角色块上（块内文字用 `#114a28`）；settle 后 hold，章鱼 subtle jitter。

## Frame 2 — 关键词是沉淀

- scene: 「沉淀」两个字成为主角，随后缩到标题位；下方一条线把「这一次做对的」送到「下一次的起点」
- voiceover: "真正让工具越用越顺的，不是多用，是沉淀——把这次做对的，留成下次的起点。"
- duration: 8.917s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-the-word-precipitate.html
- type: naming
- persuasion: Reframing
- beat: clarity + orientation
- blueprint: oversized-statement (Reproduce)
- focal: 「沉淀」大词 + 「这一次 → 下一次」的传递图
- roles: 「沉淀」大词 = foreground subject · 传递线（这一次→下一次） = foreground subject（下方）· 定义句 = supporting · 标准章鱼 = supporting（起点）
- sfx: （无）

narrativeRole: 命名本章核心概念「沉淀」，把它从抽象词落成「这次做对的 → 下次的起点」。
keyMessage: 越用越顺靠的不是多用，是沉淀。

Scene 1 (0.0–2.4s): 纯白底；「沉淀」二字 display-hero 级大号、**深绿 `#155f33` 填充**（不要用 `#39d377` 做字色），死中心 hard-cut flash-in（`discrete-text-sequence`）——命名主角。
Scene 2 (2.4–4.6s): 「沉淀」平滑缩小上移到标题位；下方一条线自绘（`svg-path-draw`）：左端一个「这一次做对的」小方块，向右流动，右端变成一个「下一次的起点」方块，中间用绿点标出「留成起点」的方向。
Scene 3 (4.6–8.6s): 「真正让工具越用越顺的，不是多用」与「把这次做对的，留成下次的起点」在图形下方 per-word reveal（`dynamic-content-sequencing`）；章鱼站在传递线起点张望（subtle jitter）；hold。

## Frame 3 — 用完就扔，和越用越值

- scene: 左右两栏对比：左栏「用完就扔」每次从零开始，右栏「越用越值」每用一次工具就多懂你一点
- voiceover: "不会沉淀的人，每次都得从零开始；会沉淀的人，每用一次，工具就多懂他一点。"
- duration: 8.853s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-keep-vs-accumulate.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两卡对比（用完就扔 / 越用越值）
- roles: 左卡 = foreground subject（用完就扔）· 右卡 = foreground subject（越用越值）· pill badge = supporting · 标准章鱼 = supporting（右卡内）
- sfx: whoosh-soft, pop

narrativeRole: 把「用完就扔」和「沉淀」拆成两种用法，画出差距会越拉越大。
keyMessage: 会沉淀的人，每用一次工具就多懂他一点。

Scene 1 (0.0–0.9s): 白底；标题「两种用法」从上 slide-down settle（`gsap-effects` translate + opacity，power3），「用法」两字绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 2 (0.9–4.4s): 左卡「用完就扔」从左侧入（带 mirrored rotateY tilt，`split-tilt-cards`，scale 0.85→1）；卡内三条随 VO 逐条 reveal：「从零开始」「交代、试错、返工」——配一个一次性纸杯简笔。卡占左 ~45%。
Scene 3 (4.4–7.4s): 右卡「越用越值」从右侧入（tilt 镜像，晚 ~0.2s）；卡内三条随 VO 逐条 reveal：「每用一次多懂你一点」「记住习惯」「存下方法」——配一个越叠越厚的文件夹简笔 + 绿点章鱼在卡里点头。
Scene 4 (7.4–8.9s): 两卡内缘各落一个 pill badge（`spring-pop-entrance`，全片唯一 overshoot）——左「从头再来」、右「越用越顺」；hold，左右卡 phase-opposed subtle jitter（`sine-wave-loop`，sin(t) vs sin(t+π)）。

## Frame 4 — 沉淀三样

- scene: 三条依次落定：技能把一套做法打包成一个名字，记忆让它记住你，定时任务把重复的活交给时间
- voiceover: "沉淀三样：技能，把一套做法打包成一个名字；记忆，让它记住你；定时任务，把重复的活交给时间。"
- duration: 10.325s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-three-ways-to-save.html
- type: feature_showcase
- persuasion: Rule of three
- beat: clarity + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三条沉淀方式（技能 / 记忆 / 定时任务）
- roles: 三条 = foreground subject · 每条副行 = supporting · 标准章鱼 = supporting（第三条旁）
- sfx: tick, tick, pop

narrativeRole: 给出本章主干——沉淀的三样：技能、记忆、定时任务，后面几帧都是它的展开。
keyMessage: 技能打包做法、记忆记住你、定时任务把重复交给时间。

Scene 1 (0.0–1.8s): 白底；引导句「沉淀三样」reveal（`dynamic-content-sequencing`，深绿 `#155f33`）居中上方，三条框架预留。
Scene 2 (1.8–4.6s): 第一条「技能」大字落下 + 副行「把一套做法打包成一个名字」；落定时轻 tick。
Scene 3 (4.6–7.4s): 第二条「记忆」落下 + 副行「让它记住你，不用每次重新交代」。
Scene 4 (7.4–10.9s): 第三条「定时任务」落下 + 副行「把重复的活交给时间」；标准章鱼守在第三条旁，头顶绿点亮起后 hold。

## Frame 5 — 但不是什么都能存

- scene: 三张卡依次展开三条边界：隐私和敏感不存、会变的口径随时更新、决定和责任不存
- voiceover: "但不是什么都能存：隐私和敏感信息不存，会变的口径随时更新，决定和责任不能存。"
- duration: 9.451s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-three-limits.html
- type: feature_showcase
- persuasion: Progressive disclosure
- beat: mastery + caution
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张边界卡（隐私敏感 / 会变的口径 / 决定和责任）
- roles: 三张卡 = foreground subject · 引导句 = supporting · 递进箭头 = supporting · 标准章鱼 = supporting（右下角）
- sfx: soft-tick

narrativeRole: 主动划出三条边界，避免「什么都往里存」——尤其是决定和责任这一条。
keyMessage: 隐私敏感不存，会变的口径常更新，决定和责任不能存。

Scene 1 (0.0–1.8s): 白底；引导句「但不是什么都能存」reveal（`dynamic-content-sequencing`，深绿 `#155f33`）。
Scene 2 (1.8–4.4s): 卡片一「隐私和敏感」入场，副行「不该存的不存，按任务需要来」（卡内文字 `#114a28`）。
Scene 3 (4.4–6.8s): 卡片二「会变的口径」入场，副行「随时更新，不能存死了」。
Scene 4 (6.8–9.7s): 卡片三「决定和责任」入场，副行「不能存，最后还得人拍板」；三张卡左侧一条向下的递进箭头，箭头旁小字「越往下越不能替代人」；标准章鱼在右下角轻点头。

## Frame 6 — 它最该记住的四样

- scene: 四块磁贴依次点出记忆该记住的四类：你是谁、你的习惯、你的口径、你做到哪了
- voiceover: "它最该先记住的，其实就这四样：你是谁，你的习惯，你的口径，你做到哪了。"
- duration: 8.384s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-what-to-remember.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四块磁贴（你是谁 / 习惯 / 口径 / 进度）
- roles: 四磁贴 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（右下角）
- sfx: tick, tick, pop

narrativeRole: 把「记忆」落成一份可以照着交代的清单，让「记住你」变成具体动作。
keyMessage: 记住你是谁、你的习惯、你的口径、你做到哪了。

Scene 1 (0.0–1.6s): 白底；引导句「它最该先记住的，其实就这四样」per-word reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (1.6–3.4s): 磁贴一「你是谁」——角色、部门、给谁汇报。
Scene 3 (3.4–5.0s): 磁贴二「你的习惯」——结论先行还是过程先行、语气。
Scene 4 (5.0–6.4s): 磁贴三「你的口径」——时间范围、金额单位、禁用词。
Scene 5 (6.4–8.3s): 磁贴四「你做到哪了」——上次停在哪、下一步做什么；四块磁贴共用同一套描边（`#39d377` 描边 + 白底 + 深绿文字），不使用红色；标准章鱼在右下角停住。

## Frame 7 — 沉淀的是方法和流程

- scene: 极简留白，一句金句居中，绿点章鱼安静坐在句末
- voiceover: "沉淀下来的，是方法和流程，不是决定和责任——最后一步，永远留在人手里。"
- duration: 8.512s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-method-not-decision.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「沉淀的是方法和流程」
- roles: 句子 = foreground subject · 标准章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 本章题眼金句落地——能沉淀的是方法和流程，决定和责任始终在人手上。
keyMessage: 沉淀的是方法和流程，不是决定和责任。

Scene 1 (0.0–2.6s): 大留白；第一句「沉淀下来的，是方法和流程」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态），深绿 `#155f33` 居中；「方法和流程」下方一道绿线。这是 designated breather，低动效。
Scene 2 (2.6–5.6s): 第一句 slide-up crossfade 让位（`discrete-text-sequence`），第二句「不是决定和责任」进中心；「决定和责任」用深琥珀 `#a0611a` 描边框起（警示语义，不作正文小字色）。
Scene 3 (5.6–8.3s): 末句「最后一步，永远留在人手里」slide-up 进中心；标准章鱼安静坐在句末，几乎静止（最多 subtle jitter）。Hold 到结束，无第二发展段。

## Frame 8 — 先挑一件最烦的重复活

- scene: 一个动作居中：先挑一件最烦、又躲不掉的重复活，把它写成一个技能
- voiceover: "先挑一件你最烦、又躲不掉的重复活，把它写成一个技能——下周你就能少交代一遍。"
- duration: 9.451s
- transition_in: cut
- status: outline
- src: compositions/frames/08-start-with-one.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 三个筛选条件（最烦 · 躲不掉 · 常要做）
- roles: 三个条件瓷片 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（右下角点头）
- sfx: pop, tick

narrativeRole: 给一个立即可执行的动作——先挑一件最烦、躲不掉的重复活，把它存成一个技能，收束全片。
keyMessage: 先挑一件最烦的重复活，把它写成一个技能。

Scene 1 (0.0–2.2s): 白底；引导句「先挑一件最烦、又躲不掉的重复活」per-word reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.2–5.2s): 三个条件瓷片「最烦 · 躲不掉 · 每周或每天都要做」逐个 flash-in 居中（`discrete-text-sequence`，staggered）；章鱼在旁边点头。
Scene 3 (5.2–7.4s): 「把它写成一个技能」落地（`spring-pop-entrance` settle），「技能」绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 4 (7.4–9.4s): 「下周你就能少交代一遍」落地；标准章鱼探出点头（subtle jitter + 轻微 scale）；hold。
