---
format: 1920x1080
duration: 75s
message: "流程是把会做的事变成能照着做的事：确定的部分交给流程，不确定的部分留给判断，而判断和责任永远留给人"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: none
---

# STORYBOARD — 方法的核心：流程

第 05 章 · 60–90 秒概念拆解 · 绿线章鱼视觉（黑线白底 + #39D377 绿强调 + 章鱼 IP）

## Video direction

- **Palette:** 白底 + 深绿文字 #155f33 / #114a28；亮绿 #39d377 只做块面、描边、圆点、图标，不做白底正文字色；警示语义统一用深琥珀 #a0611a，且不作为正文小字色。
- **Type:** LXGW WenKai（霞鹜文楷）；标题 Bold，正文 Regular。
- **Motion:** 单时间轴、seek-safe；主体 0.4s 内入场，场景切换 0.5s 左右。
- **Rhythm:** hook 快 → 命名停 → 对比展开 → 递进加重 → 卡片扫描 → 瓷片点射 → 金句放慢 → CTA 收。
- **Topbar:** 全片统一「确定走流程，不确定留判断 · NN — 08」。
- **章鱼:** 一律用 `assets/octopus.html` 标准件（细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手 + 头顶实心 #39d377 圆点）；禁止整只涂成实心绿。
- **Voice:** Kokoro `zf_xiaobei`，75 秒单口，speed 1.0 零提速。

## Frame 1 — 凭手感，还是写下步骤

- scene: 反直觉陈述落在纯白底上：同样是每月都要做的一件事，一个凭手感、一个写下步骤，时间一长就分成两种命
- voiceover: "同样一件每月都做的事，有人凭手感，有人写下了步骤。手感只存在一个人脑子里，别人学不会。"
- duration: 10.475s
- transition_in: cut
- status: outline
- src: compositions/frames/01-feel-vs-checklist.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「凭手感」↔「写下步骤」的对照
- roles: 两组字 = foreground subject · 两个人物剪影 = supporting（后方浮现）· 标准章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用一个日常反差打开认知缺口——同样一件事，凭手感和写下步骤，是两种命运，为「流程」铺垫。
keyMessage: 手感只存在一个人脑子里，别人学不会。

Scene 1 (0.0–3.0s): 纯白底；「同样一件每月都做的事」per-word staggered reveal（`dynamic-content-sequencing`）黑字居中上方，长尾 settle（power3）。
Scene 2 (3.0–6.0s): 左右各浮现一个简笔人物剪影（`svg-path-draw`）：左边一人凭记忆动手（无纸），右边一人桌前摊着一页写满步骤的清单；「凭手感」「写下了步骤」分别落在两人下方，右侧「写下了步骤」用深绿 `#155f33` 加粗 + 下方一道绿线（`css-marker-patterns`，线用 `#39d377`）。
Scene 3 (6.0–8.5s): 左侧人物随时间轴做一次 state-swap——今天做得好、明天做得差，用同一句结论上下抖动表示不稳定（`discrete-text-sequence`）；右侧清单始终稳定不动。
Scene 4 (8.5–10.9s): 画面收拢到一行结论「手感只存在一个人脑子里」reveal，「别人学不会」落在绿 `#39d377` 圆角色块上（块内文字用 `#114a28`，对比达标）；标准章鱼在右下角探出点头（subtle jitter），hold。

## Frame 2 — 关键词，是流程

- scene: 「流程」两个字成为主角，随后缩到标题位；下方一条线把「会做的事」送到「能照着做的事」
- voiceover: "把会做的事，写成能照着做的事，这就是流程——让方法可复现，也能被检查。"
- duration: 8.597s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/02-the-word-process.html
- type: naming
- persuasion: Reframing
- beat: clarity + orientation
- blueprint: oversized-statement (Reproduce)
- focal: 「流程」大词 + 「会做的事 → 能照着做的事」的传递图
- roles: 「流程」大词 = foreground subject · 传递图 = foreground subject（下方）· 定义句 = supporting · 标准章鱼 = supporting（起点）
- sfx: （无）

narrativeRole: 命名核心概念「流程」，把它从抽象词落成「一份可以照着做、也能被检查的方法」这个具象结果。
keyMessage: 流程，是把会做的事写成能照着做的事。

Scene 1 (0.0–2.4s): 纯白底；「流程」二字 display-hero 级大号、**深绿 `#155f33` 填充**（不要用 `#39d377` 做字色），死中心 hard-cut flash-in（`discrete-text-sequence`）——命名主角。Centered。
Scene 2 (2.4–4.6s): 「流程」平滑缩小上移到标题位；下方一条线自绘（`svg-path-draw`）：左端一个「会做的事」方块（模糊云状轮廓），向右流动，右端变成一个「能照着做的事」方块（方格清单），中间用绿点标出方向。Asymmetric 60/40，上标题下图形。
Scene 3 (4.6–8.3s): 「让方法可复现」与「也能被检查」在图形下方 per-word reveal（`dynamic-content-sequencing`）；标准章鱼站在传递线起点张望（subtle jitter）；hold。

## Frame 3 — 固定的，交给流程

- scene: 左右两栏对比：左栏「固定的步骤」交给流程，右栏「会变的部分」留给判断
- voiceover: "固定的步骤交给流程，会变的部分用判断决定走哪条路。"
- duration: 6.421s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-fixed-vs-changing.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两卡对比（固定的步骤 / 会变的部分）
- roles: 左卡 = foreground subject（交给流程）· 右卡 = foreground subject（留给判断）· 标准章鱼 = supporting（右卡内）· 标题 = supporting
- sfx: whoosh-soft, pop

narrativeRole: 把「固定」和「会变」拆成两类内容并画出边界，说明流程不是束缚，而是把确定的部分固定下来、给判断腾地方。
keyMessage: 固定的交给流程，会变的部分留判断。

Scene 1 (0.0–0.8s): 白底；标题「哪部分交给谁」从上 slide-down settle（`gsap-effects` translate + opacity，power3），「交给谁」三字绿高亮（`#39d377` 块 + `#114a28` 字）。
Scene 2 (0.8–3.6s): 左卡「固定的步骤」从左侧入，带 mirrored rotateY tilt（`split-tilt-cards`，scale 0.85→1）；卡内随 VO 逐条 reveal：「先取数」「核对口径」「按顺序写结论」——配一个带序号的清单简笔，卡内标注「交给流程」。卡占左 ~45%。
Scene 3 (3.6–6.6s): 右卡「会变的部分」从右侧入（tilt 镜像，晚 ~0.2s）；卡内 reveal：「情况不同怎么转」「异常怎么处理」——配一个分岔路口的简笔 + 标注「留判断」；标准章鱼在卡里点着分岔处思考。两卡内缘各落一个 pill badge（`spring-pop-entrance`，全片唯一 overshoot）——左「照着做」、右「来拍板」；hold，两卡 phase-opposed subtle jitter（`sine-wave-loop`）。

## Frame 4 — 三个零件

- scene: 三句话依次叠出：「顺序」先排先后→「分支」遇情况分岔走→「循环」反复做到达标，最后一行落定
- voiceover: "流程拆到底只有三个零件：顺序、分支、循环。先把先后排好，遇上情况分岔走，反复做到达标。"
- duration: 10.56s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-three-parts.html
- type: feature_showcase
- persuasion: Rule of three
- beat: clarity + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三个零件递进（顺序 / 分支 / 循环）
- roles: 三个零件名与释义 = foreground subject · 三枚 mono 序号 = supporting · 标准章鱼 = supporting（并在旁边点头）
- sfx: tick, tick, pop

narrativeRole: 把「任何流程」剥到最底层的三种零件，让读者知道复杂工作都能用这三样讲清楚——而讲清楚是交给工具的前提。
keyMessage: 顺序、分支、循环——任何流程都只是这三样拼起来的。

Scene 1 (0.0–1.8s): 白底；引导句「流程拆到底只有三个零件」per-word reveal（`dynamic-content-sequencing`）居中上方，下方三行位置预留。
Scene 2 (1.8–4.4s): 第一行「顺序」flash-in（`discrete-text-sequence`），右侧小字「先把先后排好」；配一条从左到右的三段线（`svg-path-draw`），带 mono 序号「01」。标准章鱼在行尾。
Scene 3 (4.4–7.0s): velocity-matched cut 换，第二行「分支」flash-in，右侧小字「遇上情况分岔走」；配一个 Y 形分岔简笔（两条线用深绿 `#155f33`，一条走绿 `#39d377`），序号「02」。
Scene 4 (7.0–10.3s): 第三行「循环」flash-in，右侧小字「反复做到达标」；配一个首尾相接的环形箭头（`svg-path-draw` 闭合，`#39d377` 描边），序号「03」——最后一行套一个绿 selection-box 高亮（`css-marker-patterns`）；三行 resolve 成竖排清单后 hold，标准章鱼点头。

## Frame 5 — 从一页清单开始

- scene: 三张卡片自下而上排开：第一步写顺利路径 · 第二步补分支和异常 · 第三步标出只能人做的步骤
- voiceover: "先写一页清单：第一步写顺利路径，第二步补分支和异常，第三步标出只能人做的步骤。"
- duration: 9.131s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-write-the-checklist.html
- type: feature_showcase
- persuasion: Progressive disclosure
- beat: mastery + caution
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张卡（写顺利路径 / 补分支和异常 / 标出只能人做）
- roles: 三张卡 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（角落，手里拿着笔）
- sfx: soft-tick

narrativeRole: 给出把脑子里「其实我是这么做的」摆到桌面上的最小起点——一页清单，三步就够，不是一上来就做系统。
keyMessage: 别急着做系统，先从写一页清单开始。

Scene 1 (0.0–1.6s): 白底；引导句「先写一页清单」reveal（`dynamic-content-sequencing`）居中上方，一只简笔笔尖落在一页清单顶上（`svg-path-draw`）。
Scene 2 (1.6–4.4s): 第一卡「写顺利路径 · 只写正常情况下怎么做，不超过十步」short-path slide 入位（`center-outward-expansion` 的 direct-into-slot 形式）；卡含 mono 序号「01」+ 标题 + 一行说明。
Scene 3 (4.4–7.2s): 第二卡「补分支和异常 · 每一步都问一句『不是这样怎么办』」随 VO 入位（staggered ~0.2s 差）；卡内一角用深琥珀 `#a0611a` 的圆点标出「异常」语义（只做标记，不做正文小字色）。
Scene 4 (7.2–10.0s): 第三卡「标出只能人做的步骤 · 判断、确认、拍板」入位并绿高亮（绿边框 + `#39d377` 描边），卡内那几行用深绿 `#155f33` 加粗——责任落点；三卡 resolve 成一行后 hold，标准章鱼在未高亮两卡旁扫过、在第三卡前停住点头。

## Frame 6 — 别忘了异常清单

- scene: 四个条目排成一行瓷片：缺材料 · 结果可疑 · 涉及对外 · 负责人缺席
- voiceover: "还要写异常清单：缺材料去哪补，结果可疑要复核，对外要人确认，负责人不在谁代拍板。"
- duration: 9.749s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-exception-checklist.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四个异常瓷片
- roles: 四瓷片 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（行尾，逐片点头）
- sfx: tick, tick, pop

narrativeRole: 把「事情不按预期发生怎么办」写成四条可自查的清单，说明异常不是例外，而是流程的一部分、也是流程最值钱的部分。
keyMessage: 出问题怎么办，也要提前写进流程。

Scene 1 (0.0–2.0s): 白底；引导句「还要写异常清单」per-word reveal（`dynamic-content-sequencing`）居中上方；四周用深琥珀 `#a0611a` 的 hairline 框一圈，点出「这里是翻车区」。
Scene 2 (2.0–5.0s): 四个瓷片「缺材料 · 去哪补」「结果可疑 · 要复核」「涉及对外 · 要人确认」「负责人缺席 · 谁代拍板」随 VO 逐片 flash 入位（`kinetic-beat-slam`，每片约 0.75s），一行排开；标准章鱼在行尾，每落一片点一次头。
Scene 3 (5.0–7.4s): 「涉及对外 · 要人确认」与「负责人缺席 · 谁代拍板」两片一起单独一亮（另外两片短暂压暗）——对应「关键动作回到人手里」，这两条最常被漏。
Scene 4 (7.4–10.0s): 四片排齐 hold，底部一行小结「异常不是例外，是流程的一部分」；subtle jitter。

## Frame 7 — 省不下的是判断和责任

- scene: 极简留白，一句金句居中，标准章鱼安静坐在句末
- voiceover: "确定的部分走流程，不确定的部分留判断；流程省得下重复动作，却省不掉判断和责任。"
- duration: 10.133s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-what-process-cant-save.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「省得下重复动作，省不掉判断和责任」
- roles: 句子 = foreground subject · 标准章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 主题金句落地——流程把重复动作接走，却接不走判断和责任；这两样永远留给人。
keyMessage: 流程省得下重复动作，省不掉判断和责任。

Scene 1 (0.0–4.0s): 大留白；第一句「确定的部分走流程，不确定的部分留判断」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态），黑字居中；「不确定的部分留判断」用深绿 `#155f33` + 下方一道绿线。这是 designated breather，低动效。
Scene 2 (4.0–10.0s): 第一句 slide-up crossfade 让位（`discrete-text-sequence`），第二句「流程省得下重复动作，却省不掉判断和责任」slide-up 进中心；「省不掉判断和责任」绿高亮（`#39d377` 块 + `#114a28` 字）；标准章鱼安静坐在句末，几乎静止（最多 subtle jitter）。Hold 到结束，无第二发展段。

## Frame 8 — 挑一件工作，写成一页流程

- scene: 一个动作居中：挑一件每周都要做、却每次都要重新想一遍的工作，把它写成一页流程，照着跑一遍
- voiceover: "挑一件你每周都要做、每次却要重新想一遍的工作，写成一页流程，照着跑一遍。"
- duration: 9.515s
- transition_in: cut
- status: outline
- src: compositions/frames/08-write-one-page.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 三个动作要点（挑一件常做的 · 写成一页流程 · 照着跑一遍）
- roles: 三个要点 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting（旁边点头）
- sfx: pop, tick

narrativeRole: 给一个立即可执行的动作——挑最常做的一件工作写成一页流程并跑一遍，收束全片。
keyMessage: 挑一件常做的工作，写成一页流程，照着跑一遍。

Scene 1 (0.0–2.4s): 白底；引导句「挑一件你每周都要做的工作」reveal（`dynamic-content-sequencing`）居中上方，一个「每周」的环形小图标轻转半圈（`svg-path-draw`）。
Scene 2 (2.4–5.6s): 两个要点瓷片「每次却要重新想一遍」「写成一页流程」逐个 flash-in 居中（`discrete-text-sequence`，staggered）；一页清单简笔从空白到写满（`svg-path-draw`），标准章鱼在旁边点头。
Scene 3 (5.6–9.1s): 「照着跑一遍」落地（`spring-pop-entrance` settle），「跑一遍」绿高亮（`#39d377` 块 + `#114a28` 字）；一页清单被轻轻放到桌面上（`gsap-effects` translate + opacity，power3）；标准章鱼探出点头（subtle jitter + 轻微 scale）；hold。
