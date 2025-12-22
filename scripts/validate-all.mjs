#!/usr/bin/env node
/**
 * Run all validators in sequence with nice output and CI-friendly exit codes.
 * Usage examples:
 *   node validate-all.mjs
 *   SITE_URL=http://localhost:4321 VERBOSE=1 node validate-all.mjs
 */

import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Keep the list ordered (fast → slow; local-only → network)
const tasks = [
  { name: "Performance", file: "validate-performance.mjs" },
  { name: "URL Structure", file: "validate-url-structure.mjs" },
  { name: "Internal Links", file: "validate-internal-links.mjs" },
  { name: "URL Pattern Audit", file: "validate-url-pattern-audit.mjs" },
  { name: "Bilingual System", file: "validate-bilingual-system.mjs" },
  { name: "Hreflang (parser-based)", file: "validate-hreflang.mjs" },
  { name: "Hreflang (static-map)", file: "validate-hreflang-old.mjs" },
  { name: "404s / Redirects", file: "validate-404s.mjs" },
  { name: "Canonical URLs", file: "validate-canonical-urls.mjs" },
  { name: "Hreflang Redirect Chains", file: "validate-hreflang-redirects.mjs" },
];

function runTask({ name, file }) {
  return new Promise((resolve) => {
    const abs = join(process.cwd(), "scripts", file);
    const child = spawn(process.execPath, [abs], {
      stdio: "inherit",
      env: process.env, // passes SITE_URL/VERBOSE if set
    });

    child.on("close", (code) => {
      resolve({ name, file, code: code ?? 1 });
    });

    child.on("error", (err) => {
      console.error(`\n❌ Failed to start ${name} (${file}): ${err.message}`);
      resolve({ name, file, code: 1 });
    });
  });
}

(async () => {
  console.log("\n💡 validate-all: starting full validation suite...\n");

  let failures = 0;
  for (const t of tasks) {
    console.log(
      `\n${"=".repeat(70)}\n▶ ${t.name}  (${t.file})\n${"=".repeat(70)}\n`,
    );
    const res = await runTask(t);
    if (res.code !== 0) {
      failures++;
      console.log(`\n🔴 ${t.name} FAILED (exit ${res.code})`);
    } else {
      console.log(`\n🟢 ${t.name} PASSED`);
    }
  }

  console.log(
    `\n${"-".repeat(70)}\n✅ Completed. ${tasks.length - failures} passed, ${failures} failed.\n`,
  );

  // Non-zero exit if any failed (ideal for CI)
  process.exit(failures === 0 ? 0 : 1);
})();
