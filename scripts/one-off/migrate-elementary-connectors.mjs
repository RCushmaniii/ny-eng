// One-off: migrate elementary connector data from flat {example, exampleEs, use, useEs}
// to nested {example: {english, spanish}}.
// Drops use/useEs (dead — no component reads them).
// Delete this file after the migration commits.

import { readFileSync, writeFileSync } from "node:fs";
import { glob } from "glob";

const files = await glob("src/data/elementary/unit-*.ts");

// Match a connector entry. Captures the indented prefix to preserve formatting.
// Looks for:
//   {                       (opening)
//     word: "X",
//     wordEs: "Y",
//     example: "ZZZ",
//     exampleEs: "WWW",
//     use: "...",
//     useEs: "...",
//   }
const entryRe =
  /^(\s*\{\s*\n)(\s*)word: ("(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`),\s*\n\s*wordEs: ("(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`),\s*\n\s*example: ("(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`),\s*\n\s*exampleEs: ("(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`),\s*\n\s*use: (?:"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`),\s*\n\s*useEs: (?:"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`),\s*\n(\s*\})/gm;

let totalReplaced = 0;
let filesChanged = 0;

for (const file of files) {
  const src = readFileSync(file, "utf8");
  let count = 0;
  const out = src.replace(
    entryRe,
    (_, open, indent, word, wordEs, example, exampleEs, close) => {
      count++;
      return `${open}${indent}word: ${word},\n${indent}wordEs: ${wordEs},\n${indent}example: {\n${indent}  english: ${example},\n${indent}  spanish: ${exampleEs},\n${indent}},\n${close}`;
    },
  );

  if (count > 0) {
    writeFileSync(file, out, "utf8");
    filesChanged++;
    totalReplaced += count;
    console.log(`${file}: ${count} entries migrated`);
  } else {
    console.log(`${file}: no matches (already migrated or different shape)`);
  }
}

console.log(`\nDone. ${filesChanged} files changed, ${totalReplaced} entries migrated.`);
