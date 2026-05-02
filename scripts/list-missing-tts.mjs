import fs from 'node:fs';

const [, , enSlug, esSlug] = process.argv;
function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function phraseToRegex(phrase) {
  const parts = phrase.split(/( -- |—)/);
  return new RegExp(parts.map(p => (p === ' -- ' || p === '—') ? '(?:[ ]--[ ]|[ ]—[ ]|—)' : escapeRegex(p)).join(''));
}

const enContent = fs.readFileSync(`src/content/blog/en/${enSlug}.md`, 'utf8');
const esContent = fs.readFileSync(`src/content/blog/es/${esSlug}.md`, 'utf8');
const enSpans = [...enContent.matchAll(/<span class="speak-en">([^<]+)<\/span>/g)].map(m => m[1]);

let i = 0;
for (const phrase of enSpans) {
  if (!phraseToRegex(phrase).test(esContent)) {
    i++;
    console.log(`${i}. ${phrase.length > 100 ? phrase.slice(0, 95) + '...' : phrase}`);
  }
}
console.log(`\nTotal missing: ${i}`);
