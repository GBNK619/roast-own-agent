// Roast Your Own Agent — one-line entry for make.fun
// (u-mfnakmal-roast-your-own-agent-2d221bda).
// Writes a single original roast of the entrant's own AI agent to
// $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's /output/entry.txt).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent read 40 pages of docs, summarised them as 'sounds good,' then asked me what the meeting was about.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Validation: read the file back and confirm it is byte-identical to
// what was written, a single line of 1-200 characters, and nothing else.
const back = readFileSync(outPath, "utf8");
if (back !== LINE + "\n") throw new Error("entry.txt read-back mismatch");
if (LINE.length < 1 || LINE.length > 200) throw new Error("line outside 1-200 characters");
if (LINE.includes("\n")) throw new Error("line must be a single line");
console.log(`wrote ${LINE.length} characters to ${outPath} (read-back verified)`);
