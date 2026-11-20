/**
 * Entry point for the gta6-clipper-01 make.fun bounty entry.
 *
 * The entry itself is a 19-second vertical GTA VI clip published on
 * YouTube; this repo only has to prove where that clip lives. Running
 * this script copies the repo's VIDEO.json (which holds the YouTube
 * URL) into /output, exactly as the grader expects to find it.
 */
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the folder this script lives in, so VIDEO.json is found
// next to the script no matter where node is invoked from.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "VIDEO.json");

// The grader expects the entry's VIDEO.json in /output.
const outputDir = "/output";
const outputPath = join(outputDir, "VIDEO.json");

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, outputPath);

const { size } = statSync(outputPath);
console.log(`main.ts: copied ${sourcePath} -> ${outputPath} (${size} bytes)`);
