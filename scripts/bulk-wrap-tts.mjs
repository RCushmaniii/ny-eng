// Bulk-wrap English phrases from EN file in their ES sibling, with em-dash tolerance.
// Usage: node scripts/bulk-wrap-tts.mjs <en-slug> <es-slug>
import fs from 'node:fs';

const [, , enSlug, esSlug] = process.argv;
if (!enSlug || !esSlug) {
  console.error('Usage: node scripts/bulk-wrap-tts.mjs <en-slug> <es-slug>');
  process.exit(1);
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Build a regex from EN phrase that matches em-dash variants in ES
function phraseToRegex(phrase) {
  // Tokenize on em-dash variants: ' -- ', ' — ', '—'
  const parts = phrase.split(/( -- |—)/);
  const pattern = parts.map(p => {
    if (p === ' -- ' || p === '—' || p === ' — ') {
      return '(?:[ ]--[ ]|[ ]—[ ]|—)';
    }
    return escapeRegex(p);
  }).join('');
  return new RegExp(pattern);
}

const enPath = `src/content/blog/en/${enSlug}.md`;
const esPath = `src/content/blog/es/${esSlug}.md`;
const enFile = enSlug.endsWith('.mdx') ? enPath : (fs.existsSync(enPath) ? enPath : `src/content/blog/en/${enSlug}.mdx`);

const enContent = fs.readFileSync(enFile, 'utf8');
let esContent = fs.readFileSync(esPath, 'utf8');

const enSpans = [...enContent.matchAll(/<span class="speak-en">([^<]+)<\/span>/g)].map(m => m[1]);
enSpans.sort((a, b) => b.length - a.length);

let wrapped = 0;
const skipped = [];
for (const phrase of enSpans) {
  const regex = phraseToRegex(phrase);
  const match = esContent.match(regex);
  if (!match) {
    skipped.push(phrase.slice(0, 80));
    continue;
  }
  const idx = match.index;
  const len = match[0].length;
  // Skip if already wrapped
  const before = esContent.slice(Math.max(0, idx - 40), idx);
  if (before.includes('class="speak-en">')) continue;
  // Wrap with the actual matched text (preserving em-dash style as found in ES)
  esContent = esContent.slice(0, idx) + '<span class="speak-en">' + esContent.slice(idx, idx + len) + '</span>' + esContent.slice(idx + len);
  wrapped++;
}

fs.writeFileSync(esPath, esContent);
console.log(`${esSlug}: wrapped ${wrapped} / ${enSpans.length} (skipped ${skipped.length})`);
if (skipped.length > 0) {
  console.log('Skipped phrases:');
  for (const s of skipped) console.log('  -', s);
}
