---
format: 1920x1080
duration: 75s
message: "递归就是拿上一轮的结果当下一轮的输入，让结果一轮比一轮好；但每轮都要有人把关——反馈、标准、方向、责任，一样省不掉"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: none
---

# STORYBOARD — 进化的核心：递归


## Video direction

- **Palette:** 白底 + 深绿文字 #155f33 / #114a28；亮绿 #39d377 只做块面、描边、圆点、图标，不做白底正文字色；警示语义统一用深琥珀 #a0611a，且不作为正文小字色。
- **Type:** LXGW WenKai（霞鹜文楷）；标题 Bold，正文 Regular。
- **Motion:** 单时间轴、seek-safe；主体 0.4s 内入场，场景切换 0.5s 左右。
- **Rhythm:** hook 停 → 命名砸词 → 对比展开 → 三步收窄 → 标准三卡 → 四件事点射 → 金句放慢 → CTA 收。
- **Topbar:** 全片统一「一轮比一轮好 · NN — 08」。
- **章鱼:** 一律用 `assets/octopus.html` 标准件（细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手 + 头顶实心 #39d377 圆点）；禁止整只涂成实心绿。
- **Voice:** Kokoro `zf_xiaobei`，75 秒单口，speed 1.0 零提速。


## Frame 1 — 稳定，却停在原地

- scene: 反直觉陈述落在纯白底上：同一份清单跑十遍，结果可能十遍都一样——不算差，却一直停在原地
- voiceover: "照着同一份清单跑十遍，结果可能十遍都一样：不算差，却也一直停在原地。"
- duration: 9.173s
- transition_in: cut
- status: outline
- src: compositions/frames/01-stuck-in-place.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「十遍都一样」↔「一直停在原地」的对照
- roles: 两句话 = foreground subject · 一排相同的清单缩略块 = supporting（后方浮现）· 标准章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用「照着清单跑十遍却停在原地」这个反直觉事实打开认知缺口——稳定不等于变强，为「递归」铺垫。
keyMessage: 稳定地重复，并不等于越做越好。

Scene 1 (0.0–2.6s): 纯白底；「照着同一份清单跑十遍」per-word staggered reveal（`dynamic-content-sequencing`）黑字居中，长尾 settle（power3）。
Scene 2 (2.6–5.2s): 一排 10 个相同的小清单缩略块自左向右依次亮起（每块约 0.2s 差），补齐「结果可能十遍都一样」；标准章鱼在右下角 svg self-draw 探出（`svg-path-draw`）。
Scene 3 (5.2–8.6s): 转折——缩略块整排定格，「不算差，却也一直停在原地」reveal，「一直停在原地」落在绿 `#39d377` 圆角色块上（块内文字用 `#114a28`）；整句 resolve 后 hold，章鱼 subtle jitter。

## Frame 2 — 关键词，是递归

- scene: 「递归」两个字成为主角，随后缩到标题位；下方一条线把「上一轮的结果」送回「下一轮」
- voiceover: "真正让一件工作越做越强的，是另一件事：拿上一轮的结果，喂给下一轮，这叫做递归。"
- duration: 9.707s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-name-it-recursion.html
- type: naming
- persuasion: Reframing
- beat: clarity + orientation
- blueprint: oversized-statement (Reproduce)
- focal: 「递归」大词 + 「上一轮 → 下一轮」的回环传递图
- roles: 「递归」大词 = foreground subject · 回环传递图 = foreground subject（下方）· 定义句 = supporting · 标准章鱼 = supporting（回环起点）
- sfx: （无）

narrativeRole: 命名本章核心概念「递归」，把它从一个像数学的词落成「上一轮的结果喂给下一轮」这个看得见的动作。
keyMessage: 递归，就是把上一轮的结果当作下一轮的输入。

Scene 1 (0.0–3.0s): 纯白底；「递归」二字 display-hero 级大号、**深绿 `#155f33` 填充**（不要用 `#39d377` 做字色），死中心 scale-settle 砸进（`scale-settle`），字号约画面 1/6 高——命名主角。
Scene 2 (3.0–6.4s): 「递归」平滑缩小上移到标题位；下方一条回环线自绘（`svg-path-draw`）：左端一个「上一轮的结果」方块，向右流动，绕回右端变成「下一轮」方块，中间用绿点标出「喂回去」的方向。上半标题下半图形，Asymmetric 60/40。
Scene 3 (6.4–9.7s): 「真正让一件工作越做越强」与「拿上一轮的结果，喂给下一轮」在图形下方 per-word reveal（`dynamic-content-sequencing`）；标准章鱼站在回环起点张望（subtle jitter）；hold。

## Frame 3 — 从头再来，还是原地踏步

- scene: 左右两栏对比：左边「流程」解决从头再来，右边「递归」解决原地踏步，两张卡下缘各落一枚徽章
- voiceover: "流程解决的是从头再来，递归解决的是原地踏步；一个保证及格，一个让你越做越好。"
- duration: 9.472s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-process-vs-recursion.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两卡对比（流程 / 递归）
- roles: 左卡 = foreground subject（流程）· 右卡 = foreground subject（递归）· 标准章鱼 = supporting（右卡内）· 标题 = supporting
- sfx: whoosh-soft, pop

narrativeRole: 把「流程」和「递归」摆成两栏，画出各自解决的问题，说清递归补的是流程补不上的那块。
keyMessage: 流程治从头再来，递归治原地踏步。

Scene 1 (0.0–2.0s): 白底；标题「两种解法」从上 slide-down settle（`gsap-effects` translate + opacity，power3），「解法」两字绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 2 (2.0–5.4s): 左卡「流程」从左侧入，带 mirrored rotateY tilt（`split-tilt-cards`，scale 0.85→1）；卡内随 VO 逐条 reveal：「把步骤写下来」「照着就能跑」「保证做到及格」——配一条直线步骤简笔。卡占左 ~45%。
Scene 3 (5.4–7.8s): 右卡「递归」从右侧入（tilt 镜像，晚 ~0.2s）；卡内随 VO 逐条 reveal：「拿上一轮的果」「当下一轮的因」「越做越好」——配一个首尾相接的圆环箭头简笔 + 绿点章鱼在卡里干活。
Scene 4 (7.8–9.7s): 两卡内缘各落一个 pill badge（`spring-pop-entrance`，全片唯一 overshoot）——左「保证及格」、右「越做越好」；hold，左右卡 phase-opposed subtle jitter（`sine-wave-loop`，sin(t) vs sin(t+π)）。

## Frame 4 — 三步往复，越滚越高

- scene: 三句话依次叠出：先要初稿 → 说清哪里不对 → 基于上一版改，最后一句点出「不是重写」
- voiceover: "递归就三步：先要一个能看的初稿，再说清哪里不对，然后基于上一版改，而不是推倒重写。"
- duration: 9.685s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-three-steps.html
- type: feature_showcase
- persuasion: Rule of three
- beat: clarity + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三步递进，第三步「基于上一版改」最重
- roles: 三句话 = foreground subject · 三步序号块 = supporting · 绿 tag = supporting · 标准章鱼 = supporting（第三步旁）
- sfx: tick, tick, pop

narrativeRole: 把「递归」落到千问办公上，拆成可以反复转的三步，并强调第三步是「基于上一版改」而非重写。
keyMessage: 先要初稿、说清哪里不对、基于上一版改，而不是重写。

Scene 1 (0.0–2.2s): 白底；引导句「递归就三步」per-word reveal（`dynamic-content-sequencing`）居中上方，三步框架预留。
Scene 2 (2.2–4.8s): 第一步「先要一个能看的初稿」flash-in 居中（`discrete-text-sequence`），左侧绿序号块「一」落位（`spring-pop-entrance` settle）；轻 tick。
Scene 3 (4.8–7.4s): velocity-matched cut 换，第二步「说清哪里不对」flash-in，序号块「二」落位；轻 tick。
Scene 4 (7.4–10.3s): 第三步「基于上一版改，而不是推倒重写」flash-in，序号块「三」落位，整句套一个绿 selection-box 高亮（`css-marker-patterns`）——最重的一句；「上一版」加粗深绿 `#114a28`；标准章鱼在第三步旁点头，resolve 后 hold。

## Frame 5 — 改到什么样，就算好

- scene: 三张卡片自下而上排开：报告 · 方案 · 汇报，每张一行停手标准，右下角一枚「达标就停」
- voiceover: "改到什么样就算好，得有把尺子：报告结论靠前，方案说清怎么做，汇报每页一个重点。"
- duration: 9.899s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-stop-condition.html
- type: feature_showcase
- persuasion: Progressive disclosure
- beat: mastery + caution
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张卡（报告 / 方案 / 汇报）+ 尾巴上的「达标就停」
- roles: 三张卡 = foreground subject · 引导句 = supporting · 绿点章鱼 = supporting（角落）
- sfx: soft-tick

narrativeRole: 给递归配一把「刹车」——用三类常见交付物说清「改到什么程度算好」，让递归从凭感觉改变成对着尺子改。
keyMessage: 有标准，递归才停得下来；没有标准，改到哪儿都是感觉。

Scene 1 (0.0–1.8s): 白底；引导句「改到什么样，就算好」reveal（`dynamic-content-sequencing`）居中上方，右下角先留一枚浅绿「尺子」图标位。
Scene 2 (1.8–4.4s): 第一卡「报告 · 结论靠前、数据有出处」short-path slide 入位（`center-outward-expansion` 的 direct-into-slot 形式）；卡含 mono 序号「01」+ 标题 + 一行标准。
Scene 3 (4.4–7.0s): 第二卡「方案 · 说清怎么做」随 VO 入位（staggered ~0.2s 差）。
Scene 4 (7.0–9.7s): 第三卡「汇报 · 每页一个重点」入位；三卡排齐后，右下角那枚「尺子」图标旁落出小字「达标就停」，绿描边；标准章鱼在角落轻点头后 hold。

## Frame 6 — 省不掉的四件事

- scene: 四块磁贴依次点出：给反馈 · 定标准 · 把方向 · 担责任，四块共用同一套绿描边
- voiceover: "递归能省下大量事，但有四件省不掉：给反馈、定标准、把方向、担责任，样样都要人来做。"
- duration: 9.813s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-what-you-cant-outsource.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四块磁贴（给反馈 / 定标准 / 把方向 / 担责任）
- roles: 四磁贴 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（行尾）
- sfx: tick, tick, pop

narrativeRole: 明确画出递归的交界——能交给工具的是「一轮接一轮地改」，不能交的是反馈、标准、方向、责任，这是本章的落脚点。
keyMessage: 给反馈、定标准、把方向、担责任——这四件省不掉。

Scene 1 (0.0–2.0s): 白底；引导句「递归能省下大量事，但有四件省不掉」per-word reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.0–4.0s): 磁贴一「给反馈」随 VO flash 入位（`kinetic-beat-slam`，约 0.8s），一行排开；章鱼在行尾，每落一片点一次头。
Scene 3 (4.0–6.0s): 磁贴二「定标准」入位。
Scene 4 (6.0–7.8s): 磁贴三「把方向」入位。
Scene 5 (7.8–9.7s): 磁贴四「担责任」入位并单独一亮（另外三片短暂压暗）；四片共用同一套描边（`#39d377` 描边 + 白底 + 深绿文字），不使用红色；底部一行小结「样样都要人来做」；subtle jitter。

## Frame 7 — 没有标准，就是消耗

- scene: 极简留白，一句金句居中，第二条短句接上，绿点章鱼安静坐在句末
- voiceover: "没有标准的递归，不是进化，是消耗——改得越多，偏得越远。"
- duration: 6.101s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-not-evolution-but-drain.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「不是进化，是消耗」
- roles: 句子 = foreground subject · 标准章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 全片题眼——把「递归必须有停止条件」压成一句狠话，让「标准」这件事在观众心里落地。
keyMessage: 没有标准的递归，不是进化，是消耗。

Scene 1 (0.0–3.2s): 大留白；第一句「没有标准的递归，不是进化，是消耗」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态），黑字居中；「不是进化，是消耗」用深绿 `#155f33` + 下方一道绿线。这是 designated breather，低动效。
Scene 2 (3.2–6.3s): 第一句 slide-up crossfade 让位（`discrete-text-sequence`），第二句「改得越多，偏得越远」slide-up 进中心；「偏得越远」绿高亮（`#39d377` 块 + `#114a28` 字）；绿点章鱼安静坐在句末，几乎静止（最多 subtle jitter）。Hold 到帧末，无第二发展段。

## Frame 8 — 挑一件，改三轮

- scene: 一个动作居中：挑一件最近要交的东西，刻意改三轮——先交初稿 · 挑三处改 · 拿标准量一遍
- voiceover: "挑一件最近要交的东西，刻意改三轮：先交初稿，挑三处最不满意的改，最后拿标准量一遍。"
- duration: 10.027s
- transition_in: cut
- status: outline
- src: compositions/frames/08-revise-three-rounds.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 三个动作（先交初稿 · 挑三处改 · 拿标准量）
- roles: 三个动作瓷片 = foreground subject · 引导句 = supporting · 绿点章鱼 = supporting（右下角点头）
- sfx: pop, tick

narrativeRole: 给一个立即可执行的动作——挑一件东西刻意改三轮，把「递归」当成可以马上试一次的方法，收束全片。
keyMessage: 挑一件最近要交的东西，先交初稿、挑三处改、拿标准量一遍。

Scene 1 (0.0–2.4s): 白底；引导句「挑一件最近要交的东西」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (2.4–5.6s): 三个动作瓷片「先交初稿 · 挑三处最不满意的改 · 拿标准量一遍」逐个 flash-in 居中（`discrete-text-sequence`，staggered）；章鱼在旁边点头。
Scene 3 (5.6–8.4s): 「刻意改三轮」落地（`spring-pop-entrance` settle），「三轮」绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 4 (8.4–10.3s): 绿点章鱼探出点头（subtle jitter + 轻微 scale）；三个瓷片排齐 hold。
