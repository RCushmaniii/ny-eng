/**
 * Blog hero card generator — PHOTO variant, NY English Teacher.
 *
 * Companion to gen-blog-cards.mjs, which draws flat navy cards from scratch.
 * This one lays a scrim and a headline over a real photograph.
 *
 * ---------------------------------------------------------------------------
 * THE CROP RULES ARE THE SAME, AND THEY STILL BIND. Read the header of
 * gen-blog-cards.mjs before changing anything here. In short:
 *
 *   STAGE 1  Astro re-encodes the hero to exactly 1200x675, centre-cropping to
 *            get there. Emitting 1200x675 makes that a no-op.
 *   STAGE 2  CSS gives the element a fixed HEIGHT and fluid WIDTH, so
 *            object-cover eats the SIDES. On mobile only ~720px of the 1200
 *            survives, centred: x 240 .. 960.
 *
 * Consequences for a photo card specifically:
 *
 *   - The SUBJECT must sit near the centre, or a phone beheads them. Check the
 *     source before using it, do not assume.
 *   - Text stays inside CONTENT_W 640 centred on x=600 (x 280 .. 920), which
 *     clears the mobile band with margin on both sides.
 *   - Text sits at the BOTTOM over a scrim. A photo has no guaranteed contrast,
 *     so the scrim is what makes the headline legible, not the font weight.
 *
 * Sources live in src/assets/blog-sources/ as 1200x675 webp, committed, so a
 * card can be regenerated from the repo alone without hunting for the original
 * download. Keep the clean plate there and let this script own the text.
 * ---------------------------------------------------------------------------
 *
 * Run from the repo root:
 *   node scripts/gen-blog-photo-cards.mjs
 *
 * Idempotent — same bytes unless a CARDS entry or a source plate changed.
 */

import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "..");

const W = 1200;
const H = 675;
const CX = W / 2;

/** The column every readable element must stay inside. See the header. */
const CONTENT_W = 640;

/** NY English Teacher — navy and gold. Source: BRAND-KIT.md. */
const NAVY = "#161B3D";
const GOLD = "#C9A24B";

const FONT = "Arial, Helvetica, sans-serif";
const HEAD_FS = 46;
const HEAD_LH = 56;
const FOOT_FS = 20;

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/**
 * Bold Arial at 46px averages ~0.53em per character, so 640px fits about 26
 * characters. The budget is deliberately set BELOW that, at 24: at 26 the EN
 * headline packed "Logistics Job Interview in" onto line one and orphaned
 * "English" alone on line two, which fits the column but reads badly. Breaking
 * a little early buys balanced lines.
 */
function wrap(text, budget = 24) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > budget && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const CARDS = [
  {
    src: "src/assets/blog-sources/logistics-interview.webp",
    out: "src/content/blog/en/images/logistics-job-interview-english.webp",
    headline: "Logistics Job Interview in English",
    footer: "nyenglishteacher.com  ·  Click any answer to hear it",
  },
  {
    src: "src/assets/blog-sources/logistics-interview.webp",
    out: "src/content/blog/es/images/entrevista-trabajo-logistica-ingles.webp",
    headline: "Entrevista de Logística en Inglés",
    footer: "nyenglishteacher.com  ·  Escucha cada respuesta",
  },
  {
    src: "src/assets/blog-sources/british-english-listening.webp",
    out: "src/content/blog/en/images/british-english-pronunciation-practice.webp",
    headline: "British English Pronunciation Practice",
    footer: "nyenglishteacher.com  ·  Click any word to hear it",
  },
  {
    src: "src/assets/blog-sources/british-english-listening.webp",
    out: "src/content/blog/es/images/practica-pronunciacion-ingles-britanico.webp",
    headline: "Pronunciación Británica",
    footer: "nyenglishteacher.com  ·  Escucha cada palabra",
  },
];

for (const card of CARDS) {
  const lines = wrap(card.headline);
  if (lines.length > 2) {
    console.error(`REFUSING ${card.out}: headline wraps to ${lines.length} lines, max 2.`);
    process.exitCode = 1;
    continue;
  }

  // Headline block sits low, above the footer, inside the scrim.
  const footY = 636;
  const ruleY = footY - 30 - lines.length * HEAD_LH - 26;
  const firstBaseline = ruleY + 26 + HEAD_FS;

  const headSvg = lines
    .map(
      (l, i) =>
        `<text x="${CX}" y="${firstBaseline + i * HEAD_LH}" text-anchor="middle" ` +
        `font-family="${FONT}" font-size="${HEAD_FS}" font-weight="700" fill="#FFFFFF">${esc(l)}</text>`,
    )
    .join("\n    ");

  const overlay = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="${NAVY}" stop-opacity="0"/>
      <stop offset="45%"  stop-color="${NAVY}" stop-opacity="0.62"/>
      <stop offset="100%" stop-color="${NAVY}" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect x="0" y="${Math.round(H * 0.36)}" width="${W}" height="${H - Math.round(H * 0.36)}" fill="url(#scrim)"/>
  <rect x="${CX - 40}" y="${ruleY}" width="80" height="4" fill="${GOLD}"/>
  ${headSvg}
  <text x="${CX}" y="${footY}" text-anchor="middle" font-family="${FONT}" font-size="${FOOT_FS}" fill="${GOLD}">${esc(card.footer)}</text>
</svg>`,
  );

  const outPath = resolve(REPO, card.out);
  mkdirSync(dirname(outPath), { recursive: true });

  const info = await sharp(resolve(REPO, card.src))
    .resize(W, H, { fit: "cover", position: "centre" })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .webp({ quality: 88 })
    .toFile(outPath);

  console.log(`✓ ${card.out}  ${info.width}×${info.height}  ${info.size} bytes`);
}
