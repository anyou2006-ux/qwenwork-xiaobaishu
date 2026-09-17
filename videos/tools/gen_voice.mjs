#!/usr/bin/env node
// gen_voice.mjs <project-dir> [voice] [concurrency]
//
// 直接驱动 `npx hyperframes tts` 逐行合成配音，不经过 faceless 的 audio.mjs wrapper
// （那个 wrapper 会强制 provider=auto + 抓 BGM，在这台机器上会挂住，而且音色只能靠 --voice 传）。
//
// 产出：
//   assets/voice/01.wav … 08.wav
//   audio_meta.json  （格式与第 01 章定稿一致：bgm: null + voices[frame,path,duration_s,words] + sfx）

import { execFileSync, spawn } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from "node:fs";
import { resolve, join } from "node:path";
import { tmpdir } from "node:os";

const [projArg, voiceArg, concArg] = process.argv.slice(2);
const PROJ = resolve(projArg ?? ".");
const VOICE = voiceArg ?? "zf_xiaobei";
const CONC = Number(concArg ?? 2);

const HF = "hyperframes@0.8.33";
const ENV = {
  ...process.env,
  NODE_USE_ENV_PROXY: "1",
  HTTPS_PROXY: process.env.HTTPS_PROXY ?? "http://127.0.0.1:7897",
  HTTP_PROXY: process.env.HTTP_PROXY ?? "http://127.0.0.1:7897",
  HYPERFRAMES_PYTHON: process.env.HYPERFRAMES_PYTHON ?? "/usr/local/bin/python3.11",
};

// ── 解析 SCRIPT.md ────────────────────────────────────────────────────────────
function parseScript(path) {
  const src = readFileSync(path, "utf8");
  const out = [];
  let cur = null;
  for (const raw of src.split("\n")) {
    const h = raw.match(/^##\s+Line\s+(\d+)/i);
    if (h) {
      if (cur) out.push(cur);
      cur = { n: Number(h[1]), text: "" };
      continue;
    }
    if (!cur) continue;
    if (/^\s{4,}\S/.test(raw)) {
      const t = raw.trim();
      if (t && !t.startsWith("**")) cur.text += t;
    }
  }
  if (cur) out.push(cur);
  return out.filter((l) => l.text);
}

function run(args, opts = {}) {
  return new Promise((res, rej) => {
    const p = spawn("npx", ["--yes", HF, ...args], { cwd: PROJ, env: ENV, stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (out += d));
    p.on("close", (code) => (code === 0 ? res(out) : rej(new Error(`exit ${code}\n${out.slice(-600)}`))));
    p.on("error", rej);
  });
}

function probe(file) {
  const o = execFileSync("ffprobe", [
    "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", file,
  ], { encoding: "utf8" });
  return Math.round(Number(o.trim()) * 1000) / 1000;
}

const lines = parseScript(join(PROJ, "SCRIPT.md"));
if (!lines.length) {
  console.error("✗ SCRIPT.md 里没解析到台词");
  process.exit(1);
}
mkdirSync(join(PROJ, "assets", "voice"), { recursive: true });

const chars = lines.reduce((n, l) => n + l.text.replace(/[，。；：、？！「」“”——\s]/g, "").length, 0);
console.log(`▸ ${lines.length} 行 · 净字 ${chars} · 音色 ${VOICE} · 并发 ${CONC}`);
console.log("");

const results = new Array(lines.length);
let done = 0;

async function one(i) {
  const l = lines[i];
  const id = String(l.n).padStart(2, "0");
  const wavRel = `assets/voice/${id}.wav`;
  const wavAbs = join(PROJ, wavRel);
  const txt = join(tmpdir(), `hf-tts-${process.pid}-${id}.txt`);
  writeFileSync(txt, l.text + "\n", "utf8");
  if (existsSync(wavAbs)) unlinkSync(wavAbs);

  const t0 = Date.now();
  await run(["tts", txt, "--voice", VOICE, "--output", wavRel]);
  const dur = probe(wavAbs);
  results[i] = { frame: l.n, path: wavRel, duration_s: dur, words: [] };
  done++;
  console.log(`  ✓ ${id}  ${dur.toFixed(3).padStart(7)}s  （耗时 ${((Date.now() - t0) / 1000).toFixed(0)}s）  ${l.text.slice(0, 26)}…`);
  unlinkSync(txt);
}

const queue = lines.map((_, i) => i);
await Promise.all(
  Array.from({ length: Math.min(CONC, queue.length) }, async () => {
    while (queue.length) {
      const i = queue.shift();
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          await one(i);
          break;
        } catch (e) {
          if (attempt === 1) {
            console.error(`  ✗ ${String(lines[i].n).padStart(2, "0")} 失败: ${e.message}`);
            process.exitCode = 1;
          } else console.log(`  · ${String(lines[i].n).padStart(2, "0")} 重试一次`);
        }
      }
    }
  }),
);

const voices = results.filter(Boolean).sort((a, b) => a.frame - b.frame);
const total = Math.round(voices.reduce((n, v) => n + v.duration_s, 0) * 1000) / 1000;

writeFileSync(
  join(PROJ, "audio_meta.json"),
  JSON.stringify({ bgm: null, voices, sfx: [] }, null, 2) + "\n",
  "utf8",
);

console.log("");
console.log(`✓ audio_meta.json 已写入 · ${voices.length} 条 · 合计 ${total}s（${(total / 60).toFixed(2)} 分钟）`);
