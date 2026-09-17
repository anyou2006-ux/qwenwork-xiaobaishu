#!/bin/bash
# chapter_audio.sh <chapter-project-dir> [speed]
# 一步到位：解析 SCRIPT.md → 合成配音 → 回写 STORYBOARD 时长 → 生成帧 packet
set -eu
PROJ="${1:?用法: chapter_audio.sh <项目目录> [speed]}"
SPEED="${2:-1.0}"
TOOLS="$(cd "$(dirname "$0")" && pwd)"
SK="/Users/anyou/.cola/skills/hyperframes-faceless-explainer/scripts"

cd "$PROJ"

echo "▸ 1/4 解析 SCRIPT.md"
node "$TOOLS/make_audio_request.mjs" SCRIPT.md audio_request.json "$SPEED"

echo ""
echo "▸ 2/4 合成配音（Kokoro，8 行）"
HYPERFRAMES_PYTHON=/usr/local/bin/python3.11 \
  node "$SK/audio.mjs" --request ./audio_request.json --hyperframes . --out ./audio_meta.json --only tts

echo ""
echo "▸ 3/4 把实测时长回写进 STORYBOARD.md"
node "$SK/audio.mjs" sync-durations --audio-meta ./audio_meta.json --storyboard ./STORYBOARD.md

echo ""
echo "▸ 4/4 生成帧 packet"
node "$SK/frame-packets.mjs" --project . --storyboard STORYBOARD.md --out-dir .hyperframes/frame-packets

echo ""
echo "=== 时长总览 ==="
python3 - <<'PY'
import json
m = json.load(open("audio_meta.json"))
t = 0.0
for v in m["voices"]:
    d = v["duration_s"]; t += d
    print(f"  {v.get('id','?'):>3}  {d:>7.3f}s  {v['path']}")
print(f"  ── 合计 {t:.3f}s  ({t/60:.2f} 分钟)")
PY
