# 系列"写台账"通用 Brief（SCRIPT.md + STORYBOARD.md）

> 派发"为第 NN 章写台词与分镜"任务时，把本文件路径 + 该章正文路径 + 目标目录一起给子代理。
> 只写 markdown 台账，**不要写 HTML、不要建帧**。

---

## 输入

- 本章正文：`<项目根>/第NN章-<章名>-vN.md`（内容唯一来源，必须忠实；正文里没有的数字、案例、专家观点一个都不许写）
- 格式范本（**逐字段照抄结构**）：`videos/01-what-is-qwenwork/` 下的 `BRIEF.md`、`SCRIPT.md`、`STORYBOARD.md`

## 产出

写进目标章节目录：`BRIEF.md`、`SCRIPT.md`、`STORYBOARD.md`。

---

## SCRIPT.md

- 格式与 01 章范本完全一致：`## Line 1` … `## Line 8`，每段有 `**Time:**`、`**Delivery:**`，正文是 **4 空格缩进的单行**。
- **恰好 8 行**，8 行正文的**净字数合计 250–265 字**。净字 = 去掉所有标点（，。；：、？！——「」""）与空白后剩下的汉字数。这个总量直接决定成片时长（01 章 257 净字 = 73.7 秒，02 章 256 净字）。
- 单行不超过 45 净字。
- 大白话口语，能顺口念出来；不要书面腔、不要排比堆砌。
- 最后一行收尾要克制，**不许升华**（不写"未来已来""拥抱变化""开启新篇章"）。
- 第 7 行是全片题眼金句，取自本章正文最有劲的那句。

## STORYBOARD.md（结构必须严格照范本）

1. **文件开头是 frontmatter**：
   ```
   ---
   format: 1920x1080
   duration: 75s
   message: "<本章主旨一句话>"
   arc: concept-explainer
   audience: 办公白领
   mode: collaborative
   music: none
   ---
   ```
2. `# STORYBOARD — <章名>`
3. `## Video direction`：bullet 写 Palette / Type / Motion / Rhythm / Topbar / 章鱼 / Voice 七条。Voice 固定写 `Kokoro zf_xiaobei，75 秒单口，speed 1.0 零提速`。Topbar 固定写 `<本章主旨短句> · NN — 08`。
4. **8 个帧区块**，标题 `## Frame N — <标题>`，区块内的顺序必须是：

```
- scene: <一句话画面描述>
- voiceover: "<该帧台词，与 SCRIPT.md 逐字一致，双引号包住>"
- duration: <秒>s
- transition_in: <第 1 帧 cut；第 2–5 帧 push-slide LEFT；第 6–7 帧 crossfade；第 8 帧 cut>
- status: outline
- src: compositions/frames/0N-<英文短横线名>.html
- type: <见下表>
- persuasion: <见下表>
- beat: <见下表>
- blueprint: <见下表>
- focal: <视觉焦点，一句话>
- roles: <前景 / 背景 / 章鱼各扮演什么，用 · 分隔>
- sfx: <见下表>

narrativeRole: <这一帧在全片里的作用>
keyMessage: <这一帧要人记住的一句话>

Scene 1 (0.0–2.6s): <画面说明：什么东西、怎么动>
Scene 2 (...): ...
```

- `duration:` 先用估算法：该帧净字 ÷ 3.5，保留一位小数；8 帧合计要落在 **73–77 秒**。真实时长稍后由配音实测回写，**不要手改回写后的值**。
- 每帧 3–5 个 Scene，时间码加起来等于该帧 duration。
- 画面说明要具体到"什么在动、怎么动"，但**不要写死产品按钮名或入口**。

### 8 帧固定原型

| 帧 | 原型 | type | persuasion | beat | blueprint | sfx |
|---|---|---|---|---|---|---|
| 1 | 钩子：一个反差或反直觉 | hook | Counterintuitive claim | surprise + recognition | kinetic-type-beats (Reproduce) | whoosh-soft |
| 2 | 命名：把本章那个词砸出来 | naming | Reframing | clarity + orientation | oversized-statement (Reproduce) | （无） |
| 3 | 两栏对比 | feature_showcase | Comparison of two options | comprehension | comparison-split (Reproduce) | whoosh-soft, pop |
| 4 | 递进三句 / 三条 | feature_showcase | Rule of three | clarity + caution | kinetic-type-beats (Adapt) | tick, tick, pop |
| 5 | 三张卡 | feature_showcase | Progressive disclosure | mastery + caution | grid-card-assemble (Reproduce) | soft-tick |
| 6 | 四块磁贴 | benefit_highlight | Checklist | conviction | kinetic-type-beats (Adapt) | tick, tick, pop |
| 7 | 金句（放慢） | branding | Distillation | clarity + satisfaction | titlecard-reveal (Reproduce) | （无） |
| 8 | 收尾行动项 + 章鱼点头 | cta | Question→answer pairing | resolve | kinetic-type-beats (Reproduce) | pop, tick |

---

## 视觉与内容红线

- 配色：白底 + 深绿文字 `#155f33` / `#114a28`；亮绿 `#39d377` **只做块面、描边、圆点、图标，不做白底正文字色**（1.95:1，达不到 WCAG AA）；警示语义统一用深琥珀 `#a0611a`，且不作为正文小字色。
- 章鱼一律写"标准章鱼"，指向 `assets/octopus.html`：细黑线轮廓 + 白眼球黑眼珠 + 短眉 + 微笑 + 4 条触手（底部 3 短 + 左侧 1 长上扬）+ 头顶一枚实心 `#39d377` 圆点。**明确禁止整只涂成实心绿。**
- 内容红线：① 不把"AI 会不会思考"说死 ② 不编造任何数据/调研/专家观点 ③ 价值预设标立场 ④ 不写死产品按钮与入口 ⑤ 交付不等于甩锅 ⑥ 不拉踩同类产品 ⑦ 组织规则优先于个人判断 ⑧ 责任落到明确且有相应权限的人。

## 汇报

回复 12 行以内：三个文件路径 + 8 行台词逐行（带净字数）+ 净字合计 + 8 帧时长合计 + 不确定点。不要贴文件全文。
