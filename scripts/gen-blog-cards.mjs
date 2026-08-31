/**
 * Blog hero card generator — NY English Teacher.
 *
 * Renders 1200×675 WebP cards from SVG via sharp. No image API, zero cost,
 * deterministic, and the copy stays under our control because SVG <text> does
 * not wrap.
 *
 * ---------------------------------------------------------------------------
 * READ THIS BEFORE CHANGING THE CANVAS OR THE LAYOUT.
 *
 * A blog image on this site is cropped TWICE before a visitor sees it, and
 * ignoring the first stage is what shipped two broken heroes on 2026-08-28.
 *
 * STAGE 1 — Astro re-encodes it. The hero in src/pages/{en,es}/blog/[slug].astro
 * passes explicit dimensions:
 *
 *     <Image src={featuredObj} width={1200} height={675} ... />
 *
 * so Astro emits a 1200×675 asset REGARDLESS of the source size, centre-cropping
 * to get there. A 1200×900 source silently loses 112px off the top and bottom
 * here. That is why this canvas is 1200×675: it makes stage 1 a no-op.
 *
 * Note the page references TWO derivatives of the same file — the full-size one
 * in the og:image tag and the 1200×675 hero in the body. Measuring the first
 * match in the HTML gets you the og:image and tells you nothing about the hero.
 *
 * STAGE 2 — CSS crops the width. The same element carries:
 *
 *     class="w-full object-cover h-[300px] md:h-[450px] lg:h-[675px]"
 *
 * Fixed HEIGHT, fluid WIDTH. So the box is never 16:9 and object-cover always
 * eats the sides. Against a 1200×675 asset:
 *
 *     lg      ~904×675 box  ->  ~907px of width visible   (x 146 .. 1053)
 *     md      ~700×450 box  -> ~1050px of width visible   (x  75 .. 1125)
 *     mobile  ~320×300 box  ->  ~720px of width visible   (x 240 ..  960)
 *
 * Mobile is the binding constraint: barely 60% of the width survives.
 *
 * THE CONSEQUENCE: the layout is CENTRED, not left-aligned. Both crops are
 * symmetric about the middle, so centred content is the only arrangement that
 * cannot be beheaded — and every element is kept inside a 640px column so it
 * clears even the mobile band with margin.
 *
 *     CONTENT_W  640, centred on x=600  ->  x 280 .. 920
 *     SAFE_Y      23 .. 652   (the 1.91:1 og:image crop is the only vertical one)
 *
 * Verify against the component and against the RENDERED derivative. Never
 * against the dimensions of images already in the images/ dir — they are
 * inconsistent (1200×675, 1000×750, 1600×900, 1536×1024) and copying one is how
 * a wrong size gets picked with false confidence.
 * ---------------------------------------------------------------------------
 *
 * Run from the repo root:
 *   node scripts/gen-blog-cards.mjs
 *
 * Regenerating is idempotent — same bytes unless a CARDS entry changed.
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

/** NY English Teacher — navy and gold. Source: BRAND-KIT.md "NY English Teacher". */
const THEME = {
  bg: "#161B3D",
  accent: "#C9A24B",
  head: "#FFFFFF",
  sub: "#AEB4E0",
  foot: "#8891C7",
};

// sharp renders SVG through resvg, which resolves this against system fonts.
// The Vercel build never runs this script — the .webp files are committed.
const FONT = "Arial, Helvetica, sans-serif";

const HEAD_SIZE = 48;
const HEAD_LH = 60;
const EYEBROW_FS = 22;
const CHIP_H = 42;
const CHIP_FS = 22;
const CHIP_PAD_X = 18;
const CHIP_GAP = 12;
const ICON_W = 36;
const FOOTER_FS = 21;

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** Approximate rendered width. Arial averages ~0.52em per character. */
const textWidth = (s, fontSize) => s.length * fontSize * 0.52;

/**
 * Greedy wrap by character budget. Bold Arial at 48px averages ~0.52em per
 * character, so the 640px column fits about 25 characters.
 */
function wrap(text, budget = 25) {
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

/** The speaker glyph from SpeakEnglish.astro, so the card signals the page has audio. */
const SPEAKER_PATH =
  "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";

function svg({ eyebrow, headline, chips, footer }) {
  const lines = wrap(headline);
  const n = lines.length;

  const EYEBROW_GAP = 78;
  const RULE_GAP = 40;
  const CHIP_GAP_Y = 34;
  const FOOTER_GAP = 44;

  // Height of the stacked group, then centre it on the canvas. Vertical
  // cropping is limited to the og:image, so canvas-centring is safe here.
  const extent =
    EYEBROW_FS +
    EYEBROW_GAP +
    (n - 1) * HEAD_LH +
    RULE_GAP +
    5 +
    CHIP_GAP_Y +
    CHIP_H +
    FOOTER_GAP +
    FOOTER_FS;
  const top = (H - extent) / 2;

  const eyebrowY = top + EYEBROW_FS;
  const headTop = eyebrowY + EYEBROW_GAP;
  const ruleY = headTop + (n - 1) * HEAD_LH + RULE_GAP;
  const chipTop = ruleY + CHIP_GAP_Y;
  const footerY = chipTop + CHIP_H + FOOTER_GAP;

  const headText = lines
    .map(
      (l, i) =>
        `<text x="${CX}" y="${(headTop + i * HEAD_LH).toFixed(0)}" text-anchor="middle" font-family="${FONT}" font-size="${HEAD_SIZE}" font-weight="700" fill="${THEME.head}">${esc(l)}</text>`,
    )
    .join("\n  ");

  // Centre the icon and chip row as one unit.
  const chipWidths = chips.map((c) => textWidth(c, CHIP_FS) + CHIP_PAD_X * 2);
  const rowW = ICON_W + chipWidths.reduce((a, w) => a + w, 0) + CHIP_GAP * chips.length;
  const iconX = CX - rowW / 2;
  let cx = iconX + ICON_W + CHIP_GAP;

  const chipEls = chips
    .map((c, i) => {
      const w = chipWidths[i];
      const el = `<rect x="${cx.toFixed(0)}" y="${chipTop.toFixed(0)}" width="${w.toFixed(0)}" height="${CHIP_H}" rx="${CHIP_H / 2}" fill="none" stroke="${THEME.accent}" stroke-width="2" stroke-opacity="0.55"/>
  <text x="${(cx + w / 2).toFixed(0)}" y="${(chipTop + CHIP_H / 2 + CHIP_FS / 3).toFixed(0)}" text-anchor="middle" font-family="${FONT}" font-size="${CHIP_FS}" fill="${THEME.sub}">${esc(c)}</text>`;
      cx += w + CHIP_GAP;
      return el;
    })
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${THEME.bg}"/>
  <text x="${CX}" y="${eyebrowY.toFixed(0)}" text-anchor="middle" font-family="${FONT}" font-size="${EYEBROW_FS}" letter-spacing="4" fill="${THEME.accent}">${esc(eyebrow)}</text>
  ${headText}
  <rect x="${CX - 60}" y="${ruleY.toFixed(0)}" width="120" height="5" fill="${THEME.accent}"/>
  <g transform="translate(${iconX.toFixed(0)}, ${(chipTop + CHIP_H / 2 - 14).toFixed(0)}) scale(1.15)" fill="${THEME.accent}">
    <path d="${SPEAKER_PATH}"/>
  </g>
  ${chipEls}
  <text x="${CX}" y="${footerY.toFixed(0)}" text-anchor="middle" font-family="${FONT}" font-size="${FOOTER_FS}" fill="${THEME.foot}">${esc(footer)}</text>
</svg>`;
}

// NOTE: the two British-English cards used to live here and now live in
// gen-blog-photo-cards.mjs, which lays text over a photograph. Two generators
// must never write the same output path — whichever ran last would silently win,
// and a re-run of this script would quietly replace a photo hero with a flat one.
const CARDS = [
  {
    out: "src/content/blog/en/images/logistics-job-interview-english.webp",
    eyebrow: "LOGISTICS INTERVIEW ENGLISH",
    headline: "Logistics Job Interview in English",
    chips: ["OTIF", "dwell time", "own the number"],
    footer: "nyenglishteacher.com  ·  Click any answer to hear it",
  },
  {
    out: "src/content/blog/es/images/entrevista-trabajo-logistica-ingles.webp",
    eyebrow: "INGLÉS PARA ENTREVISTAS",
    headline: "Entrevista de Logística en Inglés",
    chips: ["OTIF", "dwell time", "tu número"],
    footer: "nyenglishteacher.com  ·  Escucha cada respuesta",
  },
  {
    out: "src/content/blog/en/images/english-words-spanish-speakers-should-practice.webp",
    eyebrow: "PRONUNCIATION PRACTICE",
    headline: "English Words Spanish Speakers Should Practice",
    chips: ["TH", "the English R", "-ED"],
    footer: "nyenglishteacher.com  ·  Click any word to hear it",
  },
  {
    out: "src/content/blog/es/images/palabras-en-ingles-que-los-hispanohablantes-deberian-practicar.webp",
    eyebrow: "PRÁCTICA DE PRONUNCIACIÓN",
    headline: "Palabras en Inglés que Deberían Practicar",
    chips: ["TH", "la R inglesa", "-ED"],
    footer: "nyenglishteacher.com  ·  Escucha cada palabra",
  },
  {
    out: "src/content/blog/en/images/sales-interview-english-pronunciation.webp",
    eyebrow: "SALES INTERVIEW ENGLISH",
    headline: "English Pronunciation for a Sales Job Interview",
    chips: ["strengths", "revenue", "exceeded"],
    footer: "nyenglishteacher.com  ·  Click any word to hear it",
  },
  {
    out: "src/content/blog/es/images/pronunciacion-ingles-entrevista-ventas.webp",
    eyebrow: "INGLÉS PARA ENTREVISTAS",
    headline: "Pronunciación en Inglés para una Entrevista de Ventas",
    chips: ["strengths", "revenue", "exceeded"],
    footer: "nyenglishteacher.com  ·  Escucha cada palabra",
  },
];

for (const card of CARDS) {
  // Fail loudly rather than let anything drift outside the safe column.
  const rowW =
    ICON_W + card.chips.reduce((a, c) => a + textWidth(c, CHIP_FS) + CHIP_PAD_X * 2 + CHIP_GAP, 0);
  if (rowW > CONTENT_W) {
    throw new Error(
      `Chip row is ${rowW.toFixed(0)}px, over the ${CONTENT_W}px safe column, for ${card.out}. Drop or shorten a chip.`,
    );
  }
  for (const line of wrap(card.headline)) {
    const lw = textWidth(line, HEAD_SIZE);
    if (lw > CONTENT_W) {
      throw new Error(
        `Headline line "${line}" is ${lw.toFixed(0)}px, over the ${CONTENT_W}px safe column, for ${card.out}.`,
      );
    }
  }
  const fw = textWidth(card.footer, FOOTER_FS);
  if (fw > CONTENT_W) {
    throw new Error(
      `Footer is ${fw.toFixed(0)}px, over the ${CONTENT_W}px safe column, for ${card.out}.`,
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
