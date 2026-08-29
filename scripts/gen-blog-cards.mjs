/**
 * Blog hero card generator — NY English Teacher.
 *
 * Renders 1200×675 (16:9, the size the newer blog heroes and OG images use)
 * WebP cards from SVG via sharp. No image API, zero cost, fully deterministic,
 * and the copy stays under our control because SVG <text> does not wrap.
 *
 * Palette is NOT typed from memory. It is the navy/gold NY English Teacher
 * theme recorded in context-writing-system/docs/BRAND-KIT.md and implemented
 * as the `nye` theme in cushlabs-messenger-bot/fb-content/2026-07/gen-cards.mjs.
 * That generator renders 1080×1350 portrait cards for the Facebook feed, which
 * is the wrong aspect ratio for a blog hero — this is the same theme at 16:9,
 * not a second palette. If the brand kit and this file ever disagree, the
 * brand kit wins and this file is the bug.
 *
 * Never borrow the CushLabs orange here. Navy and gold is a different brand.
 *
 * Run from the repo root:
 *   node scripts/gen-blog-cards.mjs
 *
 * Regenerating is idempotent — it overwrites the same paths with the same
 * bytes unless a CARDS entry changed.
 */

import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "..");

const W = 1200;
const H = 675;

/** NY English Teacher — navy and gold. Source: BRAND-KIT.md "NY English Teacher". */
const THEME = {
  bg: "#161B3D",
  accent: "#C9A24B",
  head: "#FFFFFF",
  sub: "#AEB4E0",
  foot: "#8891C7",
};

// Matches the reference generator's stack. sharp renders SVG through resvg,
// which resolves these against system fonts; Arial is present on Windows and
// the Vercel build never runs this script (the .webp files are committed).
const FONT = "Arial, Helvetica, sans-serif";

const PAD = 70;
const HEAD_SIZE = 60;
const HEAD_LH = 74;

// Chip row geometry. Chips carry real visual weight so the lower half of the
// card does not read as dead space — the first pass centred nothing and left a
// ~250px gap between the word row and the footer.
const CHIP_H = 50;
const CHIP_FS = 27;
const CHIP_PAD_X = 22;
const CHIP_GAP = 14;
const ICON_W = 46;

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/**
 * Greedy wrap by character budget. Bold Arial at 56px averages ~0.55em per
 * character, so ~1060px of usable width fits about 34 characters. 32 keeps a
 * safety margin for wide glyphs without leaving the line looking short.
 */
function wrap(text, budget = 32) {
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

/** The speaker glyph from SpeakEnglish.astro, so the card signals "this page has audio". */
const SPEAKER_PATH =
  "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";

/** Approximate rendered width of a string. Arial averages ~0.52em per character. */
const textWidth = (s, fontSize) => s.length * fontSize * 0.52;

function svg({ eyebrow, headline, chips, footer }) {
  const lines = wrap(headline);
  const n = lines.length;

  // Centre the eyebrow/headline/rule/chips group in the band between the top
  // rule and the footer, instead of pinning it to a fixed top. Headlines wrap
  // to one, two or three lines depending on language, and a fixed top makes
  // every length look like a mistake except the one it was tuned for.
  const BAND_TOP = 10;
  const BAND_BOTTOM = H - 96;
  const extent = 90 + (n - 1) * HEAD_LH + 46 + 34 + CHIP_H + 26;
  const eyebrowY = (BAND_TOP + BAND_BOTTOM) / 2 - extent / 2 + 26;

  const headTop = eyebrowY + 90;
  const ruleY = headTop + (n - 1) * HEAD_LH + 46;
  const chipTop = ruleY + 34;

  const headText = lines
    .map(
      (l, i) =>
        `<text x="${PAD}" y="${headTop + i * HEAD_LH}" font-family="${FONT}" font-size="${HEAD_SIZE}" font-weight="700" fill="${THEME.head}">${esc(l)}</text>`,
    )
    .join("\n  ");

  // Lay the chips out left to right, starting after the speaker icon.
  let cx = PAD + ICON_W;
  const chipEls = chips
    .map((c) => {
      const w = textWidth(c, CHIP_FS) + CHIP_PAD_X * 2;
      const el = `<rect x="${cx}" y="${chipTop}" width="${w.toFixed(0)}" height="${CHIP_H}" rx="${CHIP_H / 2}" fill="none" stroke="${THEME.accent}" stroke-width="2" stroke-opacity="0.55"/>
  <text x="${(cx + w / 2).toFixed(0)}" y="${chipTop + CHIP_H / 2 + CHIP_FS / 3}" text-anchor="middle" font-family="${FONT}" font-size="${CHIP_FS}" fill="${THEME.sub}">${esc(c)}</text>`;
      cx += w + CHIP_GAP;
      return el;
    })
    .join("\n  ");

  const iconY = chipTop + CHIP_H / 2 - 16;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${THEME.bg}"/>
  <rect x="0" y="0" width="${W}" height="10" fill="${THEME.accent}"/>
  <text x="${PAD}" y="${eyebrowY}" font-family="${FONT}" font-size="26" letter-spacing="4" fill="${THEME.accent}">${esc(eyebrow)}</text>
  ${headText}
  <rect x="${PAD}" y="${ruleY}" width="132" height="5" fill="${THEME.accent}"/>
  <g transform="translate(${PAD}, ${iconY.toFixed(0)}) scale(1.35)" fill="${THEME.accent}">
    <path d="${SPEAKER_PATH}"/>
  </g>
  ${chipEls}
  <text x="${PAD}" y="${H - 52}" font-family="${FONT}" font-size="24" fill="${THEME.foot}">${esc(footer)}</text>
</svg>`;
}

const CARDS = [
  {
    out: "src/content/blog/en/images/english-words-spanish-speakers-should-practice.webp",
    eyebrow: "PRONUNCIATION PRACTICE",
    headline: "English Words Spanish Speakers Should Practice",
    chips: ["TH", "the English R", "-ED", "thirteen / thirty"],
    footer: "nyenglishteacher.com  ·  Click any word to hear it",
  },
  {
    out: "src/content/blog/es/images/palabras-en-ingles-que-los-hispanohablantes-deberian-practicar.webp",
    eyebrow: "PRÁCTICA DE PRONUNCIACIÓN",
    headline: "Palabras en Inglés que Deberían Practicar",
    chips: ["TH", "la R inglesa", "-ED", "thirteen / thirty"],
    footer: "nyenglishteacher.com  ·  Escuche cada palabra",
  },
  {
    out: "src/content/blog/en/images/sales-interview-english-pronunciation.webp",
    eyebrow: "SALES INTERVIEW ENGLISH",
    headline: "English Pronunciation for a Sales Job Interview",
    chips: ["strengths", "revenue", "exceeded", "closed"],
    footer: "nyenglishteacher.com  ·  Click any word to hear it",
  },
  {
    out: "src/content/blog/es/images/pronunciacion-ingles-entrevista-ventas.webp",
    eyebrow: "INGLÉS PARA ENTREVISTAS",
    headline: "Pronunciación en Inglés para una Entrevista de Ventas",
    chips: ["strengths", "revenue", "exceeded", "closed"],
    footer: "nyenglishteacher.com  ·  Escuche cada palabra",
  },
];

for (const card of CARDS) {
  const rowW =
    ICON_W +
    card.chips.reduce((a, c) => a + textWidth(c, CHIP_FS) + CHIP_PAD_X * 2 + CHIP_GAP, 0);
  if (PAD + rowW > W - PAD) {
    throw new Error(
      `Chip row overflows the card for ${card.out}: needs ${(PAD + rowW).toFixed(0)}px of ${W - PAD}px. Shorten a chip.`,
    );
  }

  const abs = resolve(REPO, card.out);
  mkdirSync(dirname(abs), { recursive: true });
  const buf = await sharp(Buffer.from(svg(card)))
    .webp({ quality: 90 })
    .toBuffer();
  await sharp(buf).toFile(abs);
  const meta = await sharp(buf).metadata();
  console.log(`✓ ${card.out}  ${meta.width}×${meta.height}  ${buf.length} bytes`);
}
