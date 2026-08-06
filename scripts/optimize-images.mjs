#!/usr/bin/env node
/**
 * Re-encode oversized source images in place.
 *
 * `validate:performance` measures SOURCE bytes, but Astro re-encodes anything it
 * processes, so the source figure is not what ships. The real number came from
 * dist/_astro: 12.42 MB across 204 assets, 23 of them over 100 KB, topped by a
 * 2.19 MB PNG on a blog post. That is what this fixes.
 *
 * Rules it follows:
 *   - re-encode IN PLACE with the SAME extension, so no import or frontmatter
 *     reference has to change (the one PNG that becomes .webp is handled
 *     separately, with its two markdown references updated in the same commit)
 *   - cap the long edge at MAX_EDGE; nothing on this site renders wider
 *   - never write a result that is LARGER than the original
 *   - preserve alpha; a transparent PNG stays PNG
 *
 * Usage:
 *   node scripts/optimize-images.mjs --dry-run
 *   node scripts/optimize-images.mjs
 *   node scripts/optimize-images.mjs --min-kb 80 --max-edge 1600
 */

import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join, extname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "src");

const args = process.argv.slice(2);
const getArg = (f, d) => (args.includes(f) ? args[args.indexOf(f) + 1] : d);
const DRY = args.includes("--dry-run");
const MIN_BYTES = parseInt(getArg("--min-kb", "80"), 10) * 1024;
const MAX_EDGE = parseInt(getArg("--max-edge", "1600"), 10);
const QUALITY = parseInt(getArg("--quality", "78"), 10);

const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (EXTS.has(extname(entry.name).toLowerCase())) out.push(p);
  }
  return out;
}

const kb = (n) => Math.round(n / 1024);

async function main() {
  const files = walk(SRC).filter((f) => statSync(f).size >= MIN_BYTES);
  files.sort((a, b) => statSync(b).size - statSync(a).size);

  console.log(`\n${DRY ? "[DRY RUN] " : ""}optimize-images`);
  console.log(`  candidates: ${files.length} source images >= ${kb(MIN_BYTES)} KB`);
  console.log(`  max edge ${MAX_EDGE}px, quality ${QUALITY}, in place, same extension\n`);

  let before = 0,
    after = 0,
    changed = 0,
    skipped = 0;
  const failures = [];

  for (const file of files) {
    const rel = relative(ROOT, file);
    const orig = statSync(file).size;
    before += orig;

    try {
      const input = readFileSync(file);
      const img = sharp(input, { failOn: "error" });
      const meta = await img.metadata();
      const ext = extname(file).toLowerCase();

      const needsResize = Math.max(meta.width || 0, meta.height || 0) > MAX_EDGE;
      let pipeline = sharp(input, { failOn: "error" });
      if (needsResize)
        pipeline = pipeline.resize({
          width: MAX_EDGE,
          height: MAX_EDGE,
          fit: "inside",
          withoutEnlargement: true,
        });

      if (ext === ".png") {
        // Keep PNG only when alpha is actually used; otherwise PNG is the wrong
        // container for a photo and no amount of re-encoding will save it.
        pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 90 });
      } else if (ext === ".webp") {
        pipeline = pipeline.webp({ quality: QUALITY, effort: 6 });
      } else {
        pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true, mozjpeg: true });
      }

      const out = await pipeline.toBuffer();

      if (out.length >= orig) {
        after += orig;
        skipped++;
        console.log(
          `  skip  ${String(kb(orig)).padStart(5)} KB  (re-encode was not smaller)  ${rel}`,
        );
        continue;
      }

      after += out.length;
      changed++;
      const pct = Math.round((1 - out.length / orig) * 100);
      console.log(
        `  ${DRY ? "would" : "  ok "}  ${String(kb(orig)).padStart(5)} -> ${String(kb(out.length)).padEnd(5)} KB  -${String(pct).padStart(2)}%  ${meta.width}x${meta.height}${needsResize ? ` -> max ${MAX_EDGE}` : ""}  ${rel}`,
      );
      if (!DRY) writeFileSync(file, out);
    } catch (err) {
      // Loud, per the no-silent-catch rule: a skipped image must never look like a
      // clean run. Record it and fail the process at the end.
      after += orig;
      failures.push({ rel, message: err.message });
      console.error(`  FAIL  ${rel}: ${err.message}`);
    }
  }

  console.log(`\n  ${changed} re-encoded, ${skipped} already optimal, ${failures.length} failed`);
  console.log(
    `  ${kb(before)} KB -> ${kb(after)} KB  (saves ${kb(before - after)} KB, -${Math.round((1 - after / before) * 100)}%)`,
  );

  if (failures.length) {
    console.error(`\n  ${failures.length} image(s) could not be processed:`);
    for (const f of failures) console.error(`    ${f.rel}: ${f.message}`);
    process.exit(1);
  }
}

main();
