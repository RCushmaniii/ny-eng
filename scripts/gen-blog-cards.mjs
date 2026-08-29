/**
 * Blog hero card generator — NY English Teacher.
 *
 * Renders 1200×900 WebP cards from SVG via sharp. No image API, zero cost,
 * deterministic, and the copy stays under our control because SVG <text>
 * does not wrap.
 *
 * READ THIS BEFORE CHANGING THE CANVAS SIZE.
 *
 * There is no single "correct" aspect ratio for a blog image on this site, and
 * assuming there was is what produced a hero with its headline sliced off both
 * edges on 2026-08-28. The article hero in src/pages/{en,es}/blog/[slug].astro
 * is:
 *
 *   class="w-full object-cover h-[300px] md:h-[450px] lg:h-[675px]"
 *
 * Fixed HEIGHT, fluid WIDTH, object-cover. So the box the image is cropped into
 * changes at every breakpoint — roughly 1.14:1 on mobile, 1.56:1 at md, and
 * 1.34:1 at lg (a ~904px container against a 675px height). The SAME file is
 * then cropped to 16:9 by the list card in BlogPost.astro, and to about 1.91:1
 * when a social platform renders it as the OG image.
 *
 * The only thing that survives all of those is a SAFE ZONE. The canvas is 4:3
 * so it fills the lg hero almost exactly, and every piece of text lives inside
 * a centred 1000×628 region. The navy above and below that region is deliberate
 * bleed for the crop to eat — it is not wasted space, and "tightening" it is
 * how this breaks again.
 *
 *   SAFE_X  130 .. 1070   (clears the ~1.14:1 mobile hero crop with margin)
 *   SAFE_Y  136 ..  764   (survives the 16:9 card crop and the 1.91:1 OG crop)
 *
 * Verify against the component, never against the dimensions of whatever images
 * happen to already be in the images/ dir — those are inconsistent (1200×675,
 * 1000×750, 1600×900, 1536×1024) and copying one is how the wrong size gets
 * chosen with false confidence.
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
const H = 900;

// Safe zone — see the header. Nothing readable may fall outside this.
const SAFE_TOP = 136;
const SAFE_BOTTOM = 764;

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

// 130, not 100. The mobile hero crop removes 86px from each side, so PAD must
// clear that AND still leave a comfortable margin — at PAD 100 the headline sat
// 14px off the left edge on a phone. Usable text width is therefore 940px.
const PAD = 130;
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
 * character, so the 940px safe width fits about 30 characters. 28 keeps a
 * margin for wide glyphs without leaving the line looking short.
 */
function wrap(text, budget = 28) {
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

  // Centre the whole group inside the SAFE ZONE, not inside the canvas. The
  // canvas has deliberate bleed top and bottom for the crop to eat, so
  // centring on the canvas would push the footer out of the 16:9 card crop.
  // The footer is part of this group for the same reason — pinned to the
  // bottom edge it would be the first thing a crop removes.
  const FOOTER_GAP = 56;
  const FOOTER_FS = 24;
  const extent =
    90 + (n - 1) * HEAD_LH + 46 + 34 + CHIP_H + FOOTER_GAP + FOOTER_FS + 26;
  const eyebrowY = (SAFE_TOP + SAFE_BOTTOM) / 2 - extent / 2 + 26;

  const headTop = eyebrowY + 90;
  const ruleY = headTop + (n - 1) * HEAD_LH + 46;
  const chipTop = ruleY + 34;
  const footerY = chipTop + CHIP_H + FOOTER_GAP;

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
  <text x="${PAD}" y="${footerY.toFixed(0)}" font-family="${FONT}" font-size="${FOOTER_FS}" fill="${THEME.foot}">${esc(footer)}</text>
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
      `Chip row overflows the card for ${card.out}: needs ${(PAD + rowW).toFixed(0)}px of the ${W - PAD}px safe width. Shorten a chip.`,
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
