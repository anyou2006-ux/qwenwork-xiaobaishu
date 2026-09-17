---
format: 1920x1080
duration: 75s
message: "办公智能体不只会回答，还会动；所以每项任务先守三条底线——保密、最小权限、关键动作确认"
arc: concept-explainer
audience: 办公白领
mode: collaborative
music: none
---

# STORYBOARD — 安全永远第一


## Video direction

- **Palette:** 白底 + 深绿文字 #155f33 / #114a28；亮绿 #39d377 只做块面、描边、圆点、图标，不做白底正文字色；警示语义统一用深琥珀 #a0611a，且不作为正文小字色。
- **Type:** LXGW WenKai（霞鹜文楷）；标题 Bold，正文 Regular。
- **Motion:** 单时间轴、seek-safe；主体 0.4s 内入场，场景切换 0.5s 左右。
- **Rhythm:** hook 快 → 命名停 → 对比展开 → 递进加重 → 卡片扫描 → 瓷片点射 → 金句放慢 → CTA 收。
- **Topbar:** 全片统一「安全是使用的一部分 · NN — 08」。
- **章鱼:** 一律用 `assets/octopus.html` 标准件（细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手 + 头顶实心 #39d377 圆点）；禁止整只涂成实心绿。
- **Voice:** Kokoro `zf_xiaobei`，75 秒单口，speed 1.0 零提速。


## Frame 1 — 它不只会「说」，还会「动」

- scene: 反直觉陈述落在纯白底上：对话工具答错可以换问法，办公智能体一动错，错误就落进真实工作
- voiceover: "对话工具答错，你换个问法就行；办公智能体一动错，错误就可能落进真实工作里。"
- duration: 9.856s
- transition_in: cut
- status: outline
- src: compositions/frames/01-say-vs-act.html
- type: hook
- persuasion: Counterintuitive claim
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Reproduce)
- focal: 「答错了」↔「动错了」的对照
- roles: 两组字 = foreground subject · 文件缩略块 = supporting（后方浮现）· 标准章鱼 = supporting（角落探出）· 白底 = background
- sfx: whoosh-soft

narrativeRole: 用「说」和「动」这个差别打开认知缺口——它离真实后果更近，为三条底线铺垫。
keyMessage: 答错只是白问一句，动错可能落进真实工作。

Scene 1 (0.0–2.6s): 纯白底；「答错了」三个字从下方推入（`dynamic-content-sequencing`），长尾 settle（power3）。
Scene 2 (2.6–5.4s): 切到「动错了」，字重加粗、色用深绿 `#155f33`；背景浮出一排浅灰文件缩略形块（`css-marker-patterns` 不用在此处，改用纯 CSS 浮层）。
Scene 3 (5.4–9.1s): 缩略块落进一个描边为 `#a0611a` 的「对外汇报」框里；标准章鱼在右下角 svg self-draw 探出（`svg-path-draw`），略点头后 hold。

## Frame 2 — 错误会停在哪里

- scene: 把提问本身换掉——不问他会不会犯错，问错误会停在哪里、谁能先发现
- voiceover: "真正要问的不是它会不会犯错，而是：错误会停在哪里，谁能先发现它。"
- duration: 8.021s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-where-does-it-stop.html
- type: naming
- persuasion: Reframing
- beat: clarity + orientation
- blueprint: oversized-statement (Reproduce)
- focal: 「错误会停在哪里」这行大字
- roles: 大字 = foreground subject · 被划掉的旧问句 = supporting · 标准章鱼 = supporting（句末）
- sfx: （无）

narrativeRole: 把"它会不会出错"这个无解的问题，换成"错误会停在哪里"这个可以设计的问题。
keyMessage: 要问的不是会不会错，是错在哪里停、谁能发现。

Scene 1 (0.0–2.2s): 「会不会犯错」以灰色小字出现，随后一道深绿横线划掉它（`css-marker-patterns`，划线用 `#155f33`）。
Scene 2 (2.2–5.0s): 主句「错误会停在哪里」以 oversized 大字砸进画面（`scale-settle`，深绿 `#114a28`），字号约画面的 1/6 高。
Scene 3 (5.0–8.0s): 第二问「谁能先发现它」在下方并列 reveal；标准章鱼举起一条触手，头顶绿点亮起后 hold。

## Frame 3 — 「说」和「动」的两种错

- scene: 左右两栏对照：左边答错只是换问法，右边动错会带进对外汇报
- voiceover: "说，答错了你换个问法；动，一段没核对的总结就可能被带进对外汇报。"
- duration: 8.277s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-two-kinds-of-error.html
- type: feature_showcase
- persuasion: Comparison of two options
- beat: comprehension
- blueprint: comparison-split (Reproduce)
- focal: 两栏对比（说 / 动）
- roles: 左栏 = foreground subject（说）· 右栏 = foreground subject（动）· 「对外汇报」框 = supporting · 标准章鱼 = supporting（右栏内）
- sfx: whoosh-soft, pop

narrativeRole: 把抽象的"错误离后果更近"落成一张两栏对照图。
keyMessage: 说的错停在对话里，动的错会走出去。

Scene 1 (0.0–2.4s): 左栏亮起，标题「说」+ 副行「答错了，换个问法就行」（深绿 `#155f33`）。
Scene 2 (2.4–4.8s): 右栏亮起，标题「动」+ 副行「一段没核对的总结」（深绿 `#114a28`）。
Scene 3 (4.8–8.0s): 右栏底部一条箭头指向「对外汇报」框（`css-marker-patterns`，箭头用 `#a0611a` 描边、不用填充红）；标准章鱼在右栏角落停住不动。

## Frame 4 — 三条底线

- scene: 三条底线依次落定：保密、权限、确认
- voiceover: "守三条底线就够了：保密——不该传的不传；权限——只给必需的；确认——关键动作留一道人工门。"
- duration: 10.176s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-three-lines.html
- type: feature_showcase
- persuasion: Rule of three
- beat: clarity + caution
- blueprint: kinetic-type-beats (Adapt)
- focal: 三条底线逐条落定
- roles: 三条 = foreground subject · 每条的解释 = supporting · 标准章鱼 = supporting（第三条旁）
- sfx: tick, tick, pop

narrativeRole: 给出本章的主干框架——三条底线，后面两帧都是它的展开。
keyMessage: 保密、最小权限、关键动作确认。

Scene 1 (0.0–2.0s): 引导句「守三条底线就够了」reveal（深绿 `#155f33`）。
Scene 2 (2.0–4.8s): 第一条「保密」大字落下 + 副行「不该传的，不传」；落定时轻 tick。
Scene 3 (4.8–7.2s): 第二条「权限」落下 + 副行「只给必需的」。
Scene 4 (7.2–10.0s): 第三条「确认」落下 + 副行「关键动作留一道人工门」；标准章鱼守在第三条旁，头顶绿点亮起后 hold。

## Frame 5 — 权限要最小

- scene: 三张卡依次展开：看、改、发 / 执行，越往下离真实后果越近
- voiceover: "权限要最小：看，读指定的材料；改，动指定的内容；发和执行，向外同步、提交、删除。"
- duration: 9.472s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-three-layers.html
- type: feature_showcase
- persuasion: Progressive disclosure + Numbered enumeration
- beat: mastery + caution
- blueprint: grid-card-assemble (Reproduce)
- focal: 三张卡（看 / 改 / 发·执行）+ 递进箭头
- roles: 三张卡 = foreground subject · 引导句 = supporting · 递进箭头 = supporting · 标准章鱼 = supporting（角落）
- sfx: soft-tick

narrativeRole: 把"最小权限"这句抽象话，拆成可以逐个决定的三个层级。
keyMessage: 看、改、发与执行——越靠近真实后果，越要收窄。

Scene 1 (0.0–1.6s): 引导句「权限要最小」reveal（深绿 `#155f33`）。
Scene 2 (1.6–4.2s): 卡片一「看」入场，副行「读指定的材料」（卡内文字 `#114a28`）。
Scene 3 (4.2–6.6s): 卡片二「改」入场，副行「动指定的内容」。
Scene 4 (6.6–9.7s): 卡片三「发 / 执行」入场，副行「向外同步、提交、删除」；三张卡左侧一条向下的递进箭头，箭头旁小字「越往下越接近真实后果」；标准章鱼在右下角轻点头。

## Frame 6 — 隐蔽的小错

- scene: 四块磁贴依次点出四类隐蔽小错
- voiceover: "最麻烦的不是大错，是隐蔽的小错：时间范围混着比，推测写成结论，漏掉限制条件，来源核不了。"
- duration: 10.816s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-hidden-mistakes.html
- type: benefit_highlight
- persuasion: Checklist
- beat: conviction
- blueprint: kinetic-type-beats (Adapt)
- focal: 四块磁贴
- roles: 四磁贴 = foreground subject · 引导句 = supporting · 标准章鱼 = supporting
- sfx: tick, tick, pop

narrativeRole: 指出真正麻烦的不是荒唐大错，而是"看起来没错"的小错——这是验收要盯的地方。
keyMessage: 越像成品，越要回到依据上。

Scene 1 (0.0–2.2s): 引导句「最麻烦的不是大错，是隐蔽的小错」reveal（深绿 `#155f33`）。
Scene 2 (2.2–4.4s): 磁贴一「时间范围混着比」。
Scene 3 (4.4–6.4s): 磁贴二「推测写成结论」。
Scene 4 (6.4–8.4s): 磁贴三「漏掉限制条件」。
Scene 5 (8.4–10.9s): 磁贴四「来源核不了」；四块磁贴共用同一套描边（`#39d377` 描边 + 白底 + 深绿文字），不使用红色；标准章鱼在右下角停住。

## Frame 7 — 门该开到哪里

- scene: 一扇简笔门，门是开的——安全不是关门，是知道门开到哪、钥匙给谁、谁关门
- voiceover: "安全不是把工具关在门外，是你知道门该开到哪里，钥匙该交给谁，最后谁来关门。"
- duration: 9.152s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-who-closes-the-door.html
- type: branding
- persuasion: Distillation
- beat: clarity + satisfaction
- blueprint: titlecard-reveal (Reproduce)
- focal: 金句「门该开到哪里」
- roles: 句子 = foreground subject · 简笔门 = supporting（左侧，线条自绘）· 标准章鱼 = supporting（门边）· 留白 = background
- sfx: （无）

narrativeRole: 本章的题眼——把"安全"从"别用"里救出来，变成"边界怎么定"。
keyMessage: 安全不是关上门，是知道门该开到哪。

Scene 1 (0.0–2.6s): 一扇简笔门的线条自绘出现（`svg-path-draw`，门是开的），只用细黑线 + 门框。
Scene 2 (2.6–5.6s): 主句「安全不是把工具关在门外」淡入（深绿 `#155f33`）。
Scene 3 (5.6–9.4s): 换成「是知道门该开到哪里，钥匙该交给谁，最后谁来关门」，三个短句逐个放慢落定；标准章鱼站在门边，头顶绿点点亮后 hold 到帧末。

## Frame 8 — 三把锁

- scene: 收尾给三个可以立刻用的动作：材料锁、权限锁、结果锁
- voiceover: "三把锁：先看材料能不能给，再看权限该给多少，最后看结果能不能放出去。"
- duration: 8.469s
- transition_in: cut
- status: outline
- src: compositions/frames/08-three-locks.html
- type: cta
- persuasion: Question→answer pairing
- beat: resolve
- blueprint: kinetic-type-beats (Reproduce)
- focal: 三把锁（材料 / 权限 / 结果）
- roles: 三张卡 = foreground subject · 标题 = supporting · 标准章鱼 = supporting（右下角点头）
- sfx: pop, tick

narrativeRole: 把三条底线翻译成人人今天就能执行的三句话。
keyMessage: 先看材料能不能给，再看权限该给多少，最后看结果能不能放出去。

Scene 1 (0.0–1.6s): 标题「三把锁」reveal（深绿 `#114a28`）。
Scene 2 (1.6–4.0s): 卡片一「材料锁」：先看材料能不能给。
Scene 3 (4.0–6.2s): 卡片二「权限锁」：再看权限该给多少。
Scene 4 (6.2–8.6s): 卡片三「结果锁」：最后看结果能不能放出去；标准章鱼在右下角点头，收回后 hold 到帧末。
