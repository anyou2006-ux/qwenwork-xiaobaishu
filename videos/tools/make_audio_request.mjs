#!/usr/bin/env node
// make_audio_request.mjs <SCRIPT.md> <out audio_request.json> [speed]
// 解析 SCRIPT.md 的 "## Line N" 段落（取 **Time:** 之后的缩进正文），生成 audio_request.json
import { readFileSync, writeFileSync } from "node:fs";

const [scriptPath, outPath, speedArg] = process.argv.slice(2);
const speed = speedArg ? Number(speedArg) : 1.0;
const src = readFileSync(scriptPath, "utf8");

const lines = [];
let cur = null;
for (const raw of src.split("\n")) {
  const h = raw.match(/^##\s+Line\s+(\d+)/i);
  if (h) {
    if (cur && cur.text) lines.push(cur);
    cur = { id: String(h[1]).padStart(2, "0"), text: "" };
    continue;
  }
  if (!cur) continue;
  // 只收 **Time:** 之后的 4 空格缩进正文行（跳过 Time/Delivery 行与空行）
  if (/^\s{4,}\S/.test(raw) && !/^\s{4,}(Time|Delivery|\*\*)/.test(raw.trimStart())) {
    const t = raw.trim();
    if (t && !t.startsWith("**")) cur.text += (cur.text ? "" : "") + t;
  }
}
if (cur && cur.text) lines.push(cur);

const req = {
  provider: "kokoro",
  lang: "zh",
  speed,
  lines: lines.map((l) => ({ id: l.id, text: l.text })),
};

writeFileSync(outPath, JSON.stringify(req, null, 2) + "\n");

const chars = lines.reduce((n, l) => n + l.text.replace(/[，。；：、？！「」——\s]/g, "").length, 0);
console.log(`${lines.length} 行，净字 ${chars}，speed ${speed}`);
for (const l of lines) console.log(`  ${l.id}  ${l.text.length.toString().padStart(3)} 字  ${l.text.slice(0, 34)}${l.text.length > 34 ? "…" : ""}`);
