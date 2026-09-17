#!/bin/bash
# chapter_assemble.sh <chapter-project-dir> [quality]
# 组装 index → 修掉 CDN 引用 → 注入转场 → 质量门（lint / check / snapshot）
set -eu
PROJ="${1:?用法: chapter_assemble.sh <项目目录> [quality]}"
QUALITY="${2:-high}"
SK="/Users/anyou/.cola/skills/hyperframes-faceless-explainer/scripts"

cd "$PROJ"
export NODE_USE_ENV_PROXY=1 HTTPS_PROXY=http://127.0.0.1:7897 HTTP_PROXY=http://127.0.0.1:7897

echo "▸ 0/5 清理帧 worker 留在项目根的临时校验件（它们会让 lint 报 multiple_root_compositions）"
mkdir -p /tmp/hf-trash
for f in "$PROJ"/.verify-*.html "$PROJ"/.f0*-verify.html "$PROJ"/.dbg.html; do
  [ -e "$f" ] && mv "$f" /tmp/hf-trash/ 2>/dev/null && echo "    挪走 $(basename "$f")"
done
[ -e "$PROJ/.verify" ] && mv "$PROJ/.verify" /tmp/hf-trash/ && echo "    挪走 .verify"
true

echo "▸ 1/5 组装 index.html"
node "$SK/assemble-index.mjs" --hyperframes . --storyboard STORYBOARD.md \
  --audio-meta audio_meta.json --out index.html

echo ""
echo "▸ 2/5 把组装器硬编码的 GSAP CDN 换成本地 vendor/gsap.min.js"
python3 - <<'PY'
import re, pathlib
p = pathlib.Path("index.html")
s = p.read_text(encoding="utf-8")
new = re.sub(
    r'<script src="https?://cdn\.jsdelivr\.net/[^"]*gsap[^"]*"[^>]*></script>',
    '<script src="./vendor/gsap.min.js"></script>',
    s,
)
n = len(re.findall(r'<script src="https?://cdn\.jsdelivr\.net/', s))
if n:
    p.write_text(new, encoding="utf-8")
    print(f"  ✓ 换掉 {n} 处 CDN 引用")
else:
    print("  · 没有 CDN 引用（可能已经是本地）")
leftover = re.findall(r'<script src="https?://[^"]*"', new)
print(f"  剩余外链 script: {leftover if leftover else '无'}")
PY

echo ""
echo "▸ 3/5 注入转场"
node "$SK/transitions.mjs" inject --hyperframes . --storyboard STORYBOARD.md
node "$SK/transitions.mjs" verify --hyperframes . --storyboard STORYBOARD.md

echo ""
echo "▸ 4/5 lint"
npx --yes hyperframes@0.8.33 lint 2>&1 | tail -6

echo ""
echo "▸ 5/5 check（含对比度）"
npx --yes hyperframes@0.8.33 check 2>&1 | tail -8

echo ""
echo "▸ 快照（供人工/视觉核验）"
python3 - <<'PY'
import json, subprocess, sys
m = json.load(open("audio_meta.json"))
t, marks = 0.0, []
for v in m["voices"]:
    d = v["duration_s"]
    marks.append(round(t + d * 0.62, 1))   # 每帧 62% 处取样：场景都落定了
    t += d
print(f"  总时长 {t:.3f}s（{len(marks)} 帧）")
print("  取样点: " + ",".join(str(x) for x in marks))
subprocess.run(
    ["npx", "--yes", "hyperframes@0.8.33", "snapshot", "--at", ",".join(str(x) for x in marks)],
    check=True,
)
open("/tmp/last_snapshot_marks.txt", "w").write(",".join(str(x) for x in marks))
PY

echo ""
echo "▸ 闸门：确认所有帧在组装之后没被再改过（否则渲出来的会是旧版）"
STALE=$(find compositions/frames -name "*.html" -newer index.html 2>/dev/null | head -5)
if [ -n "$STALE" ]; then
  echo "  ✗ 下列帧比 index.html 新，说明它们是在组装之后才定稿的："
  echo "$STALE" | sed 's/^/      /'
  echo "  → 已中止，未渲染。请重新跑一次组装（不要浪费一轮渲染）。"
  exit 3
fi
echo "  ✓ 全部帧都比 index.html 旧，可以渲染"

echo ""
echo "▸ 渲染 $QUALITY 成片"
npx --yes hyperframes@0.8.33 render --quality "$QUALITY" --output renders/final.mp4 2>&1 | tail -4
