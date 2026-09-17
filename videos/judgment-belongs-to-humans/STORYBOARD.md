---
format: 1920x1080
duration: 75s
message: "工具可以参与规则核验、提供建议；重要业务判断必须由人负责，并由有相应权限的人确认"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: minimal calm underscore
---

# STORYBOARD — 智能的核心：判断

第 04 章样板视频 · 60–90 秒概念拆解 · 绿线章鱼视觉（黑线白底 + #39D377 绿强调 + 章鱼 IP）

## Video direction

- **palette system**（源自 frame.md，editorial-forest 已 remix 成绿线）：canvas 白 `#FFFFFF` · ink 黑 `#000000` · accent 绿 `#39D377`（强调、关键词、章鱼绿点）· green-deep/green-lite 作为卡片的深浅绿填充与边框。扁平纸质感：无 box-shadow、无渐变；2px hairline 分隔线；6/8px 圆角；唯一全圆是章鱼 IP 的绿点。
- **motion grammar + reveal model**：长尾缓动 `power3` 默认（平滑优于弹跳，无 back.out/bounce.out/elastic.out）。VO-paced reveal：每块内容只在配音念到它时出现，绝不 front-load——t=0 只放那句话正在说的内容，其余沿时间轴逐块 reveal，重点压在**后 ~50%**。静止优先于坏动效：hold 时最多 subtle jitter（低幅度 `sine-wave-loop`），无呼吸、无后段平移/推拉。
- **rhythm / held-frame allocation**：大部分帧 reveal 到 VO；Frame 7（金句）是 designated breather（titlecard-reveal，近乎静止）。Frame 1（hook）与 Frame 8（cta）节奏稍快、首尾呼应；Frame 3–5（机制三连）用一致的 `push-slide LEFT` 承接，读成一条连续讲解流。
- **negative list**：无阴影渐变、无 AI 紫蓝渐变、无 bokeh、无导航栏/滚动条/真实光标/浏览器 chrome；不出现 slideshow（前 25% 全 dump 再冻结）与 screensaver（各元素独立漂浮）两种失败模式；无 `repeat`/`yoyo`、无 `Math.random`/`Date.now`（确定性渲染）。章鱼 IP 一律配角，不与文字抢戏。

## Frame 1 — 做对了，不等于该做

- scene: 反直觉陈述落在纯白底上，一行字，一个绿点章鱼在角落探出
- voiceover: "一件事被做对了，不等于这件事本身就该做。"
- duration: 3.691s
- transition_in: cut
- status: animated
- src: compositions/frames/01-done-vs-right.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 反直觉句子「做对了 ≠ 该做」
- roles: 句子 = foreground subject · 绿点章鱼 = supporting（右下角，小）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用反直觉陈述打开认知缺口——「正确执行」≠「正确的任务」，为「判断」铺垫。
keyMessage: 任务被做对，不等于任务本身该做。

Scene 1 (0.0–1.2s): 纯白底；句子「一件事被做对了」per-word staggered reveal（`dynamic-content-sequencing`）黑字居中，长尾 settle（power3）；绿点章鱼在右下角 svg self-draw 悄悄探出（`svg-path-draw`）。Centered，~50% 高度。
Scene 2 (1.2–2.2s): 「不等于」三字 hard-cut flash 入句（`discrete-text-sequence`），绿 `#39D377` 高亮——转折点，accent 落在否定词上；轻 whoosh 随转折。
Scene 3 (2.2–3.6s): 「这件事本身就该做」reveal 补全整句；「就该做」下划一道绿线（`css-marker-patterns`）；整句 resolve 后 hold 静止，章鱼 subtle jitter（`sine-wave-loop` 低幅）。

## Frame 2 — 判断，是走哪条路

- scene: 「判断」两个字成为主角，旁边岔路口的线条逐渐画出（一条路分出几支）
- voiceover: "这背后有个词，叫判断。判断，就是面对不同情况，决定接下来走哪条路。"
- duration: 6.016s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-judgment.html
- type: product_intro
- persuasion: Coined term
- beat: clarity + orientation
- blueprint: kinetic-type-beats (Adapt)
- focal: 岔路口线条图（判断的具象）
- roles: 岔路口线条 = foreground subject · 「判断」大词 = supporting（上方标题）· 定义句 = supporting · 章鱼 = supporting（岔路口起点）
- sfx: （无）

narrativeRole: 命名核心概念「判断」，把它从抽象词汇落成「决定走哪条路」的具象动作。
keyMessage: 判断 = 面对不同情况，决定走哪条路。

Adapt: 保留 kinetic-type-beats 的 namedrop（「判断」死中心 flash-in）；把 resolve 从「品牌 logo」换成「岔路口 SVG 自绘」作为命名的具象化。

Scene 1 (0.0–1.9s): 纯白底；「判断」二字 display-hero 级大号、绿 `#39D377` 填充，死中心 hard-cut flash-in（`discrete-text-sequence`）——命名主角。Centered。
Scene 2 (1.9–3.4s): 「判断」平滑缩小上移到上方标题位；下方一条路自绘（`svg-path-draw`）：一条线从左向右，在中点分出三支，三支端点各亮一个绿点。Asymmetric 60/40，上标题下图形。
Scene 3 (3.4–6.0s): 「面对不同情况，决定接下来走哪条路」body 句在图形下方 per-word reveal（`dynamic-content-sequencing`）；章鱼站在岔路口起点，朝支路张望（subtle jitter）；hold。

## Frame 3 — 规则核验 vs 业务判断

- scene: 左右两栏对比：左栏「规则核验」（筛重复、比差异、标缺失）交绿章鱼，右栏「业务判断」（方向、承诺、风险）留给人
- voiceover: "工具能做的判断，规则是清楚的——筛重复、比差异、标缺失。可一旦涉及方向、承诺、风险，答案就不只在材料里了。"
- duration: 11.072s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/03-rule-vs-call.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两卡对比（规则核验 vs 业务判断）
- roles: 左卡 = foreground subject（工具侧）· 右卡 = foreground subject（人侧）· 绿点章鱼 = supporting（左卡内）· 标题 = supporting
- sfx: whoosh-soft, pop

narrativeRole: 把判断拆成两类——规则清楚的交给工具，涉及取舍的由人把关，画出分工边界。
keyMessage: 规则清楚的交给工具，涉及取舍的必须人把关。

Scene 1 (0.0–0.9s): 白底；标题「两类判断」从上 slide-down settle（`gsap-effects` translate + opacity，power3），「判断」绿高亮。Centered 上方。
Scene 2 (0.9–5.4s): 左卡「规则核验」从左侧入，带 mirrored rotateY tilt（`split-tilt-cards`，scale 0.85→1）；卡内「筛重复 · 比差异 · 标缺失」三条随 VO 逐条 reveal（`dynamic-content-sequencing`），配一个绿点章鱼在卡里干活的简笔。卡占左 ~45%，50% 对称轴。
Scene 3 (5.4–8.7s): 右卡「业务判断」从右侧入（tilt 镜像，晚 ~0.2s）；卡内「方向 · 承诺 · 风险」随 VO 逐条 reveal，右侧留白处画一个抽象的人形轮廓（判断由人）。
Scene 4 (8.7–11.1s): 两卡内缘各落一个 pill badge（`spring-pop-entrance`，全片唯一 overshoot）——左「交给工具」、右「由人把关」；hold，左右卡 phase-opposed subtle jitter（`sine-wave-loop`，sin(t) vs sin(t+π)，不 conveyor-belt）。

## Frame 4 — 三道门：事实、建议、决定

- scene: 三句话依次叠出：「A 报价最低」→「A 更适合我们」→「我们决定选 A」，最后一句亮绿框
- voiceover: "从事实到决定，隔着三道门：「A 报价最低」，是事实；「A 更适合我们」，是建议；「我们决定选 A」，是决定。工具能帮前两步跑得快，最后一步，不能因为它做得漂亮就悄悄跳过去。"
- duration: 14.528s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/04-three-gates.html
- type: feature_showcase
- persuasion: Progressive disclosure + Rule of three
- beat: aha + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三句话递进（事实 → 建议 → 决定）
- roles: 三句 = foreground subject · 三道门框 = supporting · 绿 tag（事实/建议/决定）= supporting · 章鱼 = supporting
- sfx: tick, tick, pop

narrativeRole: 展示事实→建议→决定的递进，标出最后一步是资源承诺、不能外包。
keyMessage: 事实、建议、决定是三种不同的话，最后一步不能跳。

Adapt: 保留 kinetic-type-beats 的 multi-beat statement build（每句一个 flash 换场）；resolve 用「三道门框，最后一道亮绿」承接「隔着三道门」的原文意象。

Scene 1 (0.0–2.5s): 白底；引导句「从事实到决定，隔着三道门」per-word reveal（`dynamic-content-sequencing`）居中上方。Triptych 框架预留。
Scene 2 (2.5–5.4s): 第一句「A 报价最低」flash-in 居中（`discrete-text-sequence`），下方绿 tag「事实」落（`spring-pop-entrance` settle）；章鱼在旁边点头。
Scene 3 (5.4–8.3s): 第一句 velocity-matched cut 换（`cut-catalog`），第二句「A 更适合我们」flash-in，tag「建议」——从事实跨到建议。
Scene 4 (8.3–11.3s): 第三句「我们决定选 A」flash-in，tag「决定」，整句套一个绿 selection-box 高亮（`css-marker-patterns`）——最后一步、重点。
Scene 5 (11.3–14.6s): 三句 resolve 成三道并排门框，前两道门灰、最后一道门绿高亮；「最后一步不能跳」的意象落定，hold。

## Frame 5 — 三层验收

- scene: 三张卡片自下而上排开：事实层（数字准不准）· 推理层（有没有跳步）· 决策层（够不够拍板）
- voiceover: "所以验收一份结果，看三层：数字和来源准不准；从事实到结论有没有跳步；这个结论，够不够拍板、谁有权决定。"
- duration: 12.075s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/05-three-layers.html
- type: feature_showcase
- persuasion: Numbered enumeration
- beat: mastery + confidence
- blueprint: grid-card-assemble (Reproduce)
- focal: 三层验收卡组（事实 / 推理 / 决策）
- roles: 三张卡 = foreground subject · 引导句 = supporting · 绿点章鱼 = supporting（角落）
- sfx: soft-tick

narrativeRole: 给出可操作的三层验收法，把「判断」变成能检查、能复用的动作。
keyMessage: 验收看三层：事实、推理、决策。

Scene 1 (0.0–1.6s): 白底；引导句「验收一份结果，看三层」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (1.6–4.8s): 第一卡「事实层 · 数字和来源准不准」short-path slide 入位（`center-outward-expansion` 的 direct-into-slot 形式）；卡含 mono 序号「01」+ 标题 + 一行说明。
Scene 3 (4.8–7.8s): 第二卡「推理层 · 从事实到结论有没有跳步」随 VO 入位（staggered ~0.2s 差）。
Scene 4 (7.8–12.1s): 第三卡「决策层 · 够不够拍板、谁有权决定」入位并绿高亮（绿边框 + accent glow `ambient-glow-bloom`）——决策层是终点；三卡 resolve 成一行后 hold，subtle jitter。

## Frame 6 — 能接走 99%，接不走 1%

- scene: 大量动作（读材料、列提纲、改格式、整理数据）流水般交给章鱼，中间留出一小块「判断·拍板·担责」空位
- voiceover: "工具能接走大量动作——读材料、列提纲、改格式、整理数据。但有一样接不走：判断、拍板，和出问题之后的担责。"
- duration: 10.389s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-ninety-nine-one.html
- type: benefit_highlight
- persuasion: Contrast
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 三个「接不走」的词（判断 / 拍板 / 担责）
- roles: 三词 = foreground subject · 四个动作词 = supporting（前段）· 绿空位 = supporting · 章鱼 = supporting
- sfx: tick, stop

narrativeRole: 收束「能省与不能省」，点明责任不可外包、必须落到人。
keyMessage: 动作能大量交，判断、拍板、责任不能交。

Adapt: 保留 kinetic-type-beats 的节奏反差——前段四个动作词 rapid-fire（staccato），后段三个词放慢逐一落地；转折「但有一样接不走」作 velocity stop。

Scene 1 (0.0–3.7s): 「读材料 · 列提纲 · 改格式 · 整理数据」四个动作词 rapid-fire 逐个 flash（`kinetic-beat-slam` ~0.8s/个），每个词配一个小绿点章鱼接单的简笔，向左流动交给章鱼——这些是「能交的」。
Scene 2 (3.7–5.3s): 四词收拢变淡（`gsap-effects` scale-down + fade），转折句「但有一样接不走」居中 reveal，节奏骤停（velocity stop）。
Scene 3 (5.3–10.4s): 「判断 · 拍板 · 担责」三词逐个 reveal（`dynamic-content-sequencing`），中间留一块绿空位（未被工具接走）；「担责」绿 `#39D377` 高亮 + 轻 pop——责任落到人；hold。

## Frame 7 — 好工具，腾出人去判断

- scene: 极简留白，一句金句居中，绿点章鱼安静坐在句末
- voiceover: "好的工具，不是把人变成不用思考的人；是把人从重复动作里腾出来，去把更重要的判断做好。"
- duration: 7.296s
- transition_in: crossfade
- status: animated
- src: compositions/frames/07-good-tool.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「好工具不是让人不思考」
- roles: 句子 = foreground subject · 绿点章鱼 = supporting（句末，安静）· 留白 = background
- sfx: （无）

narrativeRole: 主题金句落地——工具的正向意义是解放人去做更重要的判断。
keyMessage: 好工具不是让人不思考，而是腾出人去判断。

Scene 1 (0.0–3.2s): 大留白；第一句「好的工具，不是把人变成不用思考的人」fade-in + 微 scale 0.95→1 settle（`scale-swap-transition` restrained 形态），黑字居中。这是 designated breather，低动效。
Scene 2 (3.2–7.3s): 第一句 slide-up crossfade 让位（`discrete-text-sequence`），第二句「是把人从重复动作里腾出来，去把更重要的判断做好」slide-up 进中心；「判断」绿高亮；绿点章鱼安静坐在句末，几乎静止（最多 subtle jitter）。Hold 到结束，无第二发展段。

## Frame 8 — 交之前，先问一句

- scene: 一个问句居中：这一步是规则核验，还是业务判断？绿点落在「先问一句」上
- voiceover: "下次把活交给工具之前，先问一句：这一步，是规则核验，还是业务判断？分清了，才敢放心交。"
- duration: 10.496s
- transition_in: cut
- status: animated
- src: compositions/frames/08-ask-first.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 问句「规则核验，还是业务判断？」
- roles: 问句 = foreground subject · 引导句 = supporting · 绿点章鱼 = supporting
- sfx: pop, tick

narrativeRole: 给一个立即可执行的动作——交之前先分类，收束全片。
keyMessage: 交之前先问：规则核验，还是业务判断。

Scene 1 (0.0–3.1s): 白底；引导句「下次把活交给工具之前，先问一句」reveal（`dynamic-content-sequencing`）居中上方。
Scene 2 (3.1–7.0s): 问句「这一步，是规则核验，还是业务判断？」display 级大号 flash-in 居中（`discrete-text-sequence`）；「规则核验」「业务判断」两个词交替绿高亮一次（in-place token，呼应 Frame 3 的两类）。
Scene 3 (7.0–10.5s): 「分清了，才敢放心交」落地（`spring-pop-entrance` settle），绿点章鱼探出点头（subtle jitter + 轻微 scale）；hold。
