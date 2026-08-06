#!/usr/bin/env node
/**
 * Fetches every redirect declared in vercel.json and proves it actually redirects.
 *
 * This exists because PRs #218 and #220 shipped redirects that were verified in
 * production and were still dead. Vercel matches a redirect `source` LITERALLY,
 * so a rule written as `/foo` fires on `/foo` and returns a hard 404 on `/foo/`.
 * Google had indexed the slashed form for 19 of the top 25 legacy URLs. The
 * verification step at the time used the same wrong assumption as the code, so
 * it confirmed the bug instead of catching it.
 *
 * The rule this encodes: a redirect is not verified until BOTH slash forms have
 * been fetched and both have landed on a 200.
 *
 * Usage:
 *   node scripts/seo/redirect-audit.mjs                          # against production
 *   node scripts/seo/redirect-audit.mjs --base https://...       # against a preview
 *   node scripts/seo/redirect-audit.mjs --concurrency 8
 *   node scripts/seo/redirect-audit.mjs --json                   # machine-readable
 *
 * Exits non-zero if any redirect fails, so it can gate a deploy.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");

const args = process.argv.slice(2);
const getArg = (flag, def) => (args.includes(flag) ? args[args.indexOf(flag) + 1] : def);

const BASE = getArg("--base", "https://www.nyenglishteacher.com").replace(/\/+$/, "");
const CONCURRENCY = parseInt(getArg("--concurrency", "6"), 10);
const AS_JSON = args.includes("--json");
const MAX_HOPS = 5;

// A preview deployment that is still BUILDING answers 200 to EVERY path, including
// redirect sources. Trusting that page is how a green run means nothing. Prove the
// origin 404s an unknown path before believing any other result.
const SENTINEL = "/__redirect-audit-sentinel-should-404/";

/** `:slug` sources need a concrete segment to be testable. */
const SLUG_SAMPLES = {
  "/eng-lesson/:slug": "practice-ed-verbs-p3",
  "/blog/:slug": "executive-english-coaching",
  "/toefl/:slug": "prep",
  "/es/services/:slug": "coaching-ejecutivo",
  // Real lesson slugs. An invented one (`lesson-1`) makes this audit report a
  // failure that is its own fault, which trains you to ignore the audit.
  "/en/course/diagnose-before-defend/:slug": "diagnostic-pause",
  "/es/curso/diagnostica-antes-de-defender/:slug": "pausa-diagnostica",
};

/**
 * `/` carries a deliberate accept-language 307 to `/es/`. It is correct as a
 * TEMPORARY redirect because the destination varies per visitor, and it is not
 * a retirement rule, so it is out of scope here rather than a gap.
 */
const INTENTIONALLY_UNTESTED = new Set(["/"]);

function loadRedirects() {
  const cfg = JSON.parse(readFileSync(join(ROOT, "vercel.json"), "utf8"));
  return cfg.redirects || [];
}

/** Expand a declared rule into the concrete paths a crawler could actually request. */
function expand(rule) {
  let src = rule.source;

  if (src.includes(":")) {
    const stem = src.replace(/\/$/, "");
    const sample = SLUG_SAMPLES[stem] ?? SLUG_SAMPLES[src];
    if (!sample) return []; // unknown pattern — reported separately, never silently skipped
    src = src.replace(/:[A-Za-z0-9_]+/, sample);
  }
  if (/[*(){}?[\]+]/.test(src)) return [];

  const bare = src.replace(/\/+$/, "");
  if (bare === "") return [];
  return [bare, bare + "/"];
}

async function follow(path) {
  const chain = [];
  let url = BASE + path;
  for (let hop = 0; hop < MAX_HOPS; hop++) {
    let res;
    try {
      res = await fetch(url, {
        redirect: "manual",
        headers: { "user-agent": "ny-eng-redirect-audit" },
      });
    } catch (err) {
      return { ok: false, reason: `network: ${err.message}`, chain };
    }
    const status = res.status;
    if (status >= 300 && status < 400) {
      const loc = res.headers.get("location");
      if (!loc) return { ok: false, reason: `${status} with no Location`, chain };
      chain.push({ status, to: loc });
      url = loc.startsWith("http") ? loc : BASE + (loc.startsWith("/") ? loc : "/" + loc);
      continue;
    }
    return {
      ok: status === 200,
      status,
      reason: status === 200 ? null : `landed ${status}`,
      chain,
    };
  }
  return { ok: false, reason: `more than ${MAX_HOPS} hops`, chain };
}

async function pool(items, worker, size) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(size, items.length) }, async () => {
      while (true) {
        const i = next++;
        if (i >= items.length) return;
        out[i] = await worker(items[i], i);
      }
    }),
  );
  return out;
}

async function main() {
  const rules = loadRedirects();

  // Gate: the origin must 404 an unknown path, or every result below is meaningless.
  const sentinel = await fetch(BASE + SENTINEL, { redirect: "manual" }).catch(() => null);
  if (!sentinel) {
    console.error(`[FAIL] cannot reach ${BASE}`);
    process.exit(1);
  }
  if (sentinel.status === 200) {
    console.error(
      `[FAIL] ${BASE} answered 200 to ${SENTINEL}\n` +
        `       That is Vercel's build-in-progress placeholder, which answers 200 to every\n` +
        `       path including redirect sources. Wait for the deployment to finish and re-run.\n` +
        `       Auditing against it would report a false green.`,
    );
    process.exit(1);
  }

  const cases = [];
  const unexpandable = [];
  for (const rule of rules) {
    if (INTENTIONALLY_UNTESTED.has(rule.source)) continue;
    const paths = expand(rule);
    if (!paths.length) {
      unexpandable.push(rule.source);
      continue;
    }
    for (const p of paths) cases.push({ path: p, rule });
  }

  // Both slash forms of the same path collapse to one test each; dedupe.
  const seen = new Set();
  const unique = cases.filter((c) => (seen.has(c.path) ? false : (seen.add(c.path), true)));

  if (!AS_JSON) {
    console.log(`\nRedirect audit -> ${BASE}`);
    console.log(`  ${rules.length} rules declared, ${unique.length} concrete paths to fetch`);
    console.log(`  origin sentinel: ${sentinel.status} (not a build placeholder)\n`);
  }

  const results = await pool(
    unique,
    async (c) => ({ ...c, result: await follow(c.path) }),
    CONCURRENCY,
  );

  const failures = results.filter((r) => !r.result.ok);
  const noRedirect = results.filter((r) => r.result.ok && r.result.chain.length === 0);
  const longChains = results.filter((r) => r.result.ok && r.result.chain.length > 1);

  if (AS_JSON) {
    console.log(
      JSON.stringify(
        { base: BASE, tested: results.length, failures, noRedirect, longChains },
        null,
        2,
      ),
    );
  } else {
    for (const f of failures) {
      console.log(`  [FAIL] ${f.path}`);
      console.log(`         ${f.result.reason}`);
      if (f.result.chain.length)
        console.log(
          `         chain: ${f.result.chain.map((h) => `${h.status}->${h.to}`).join("  ")}`,
        );
    }
    if (noRedirect.length) {
      console.log(
        `\n  [WARN] ${noRedirect.length} source(s) returned 200 directly instead of redirecting.`,
      );
      console.log(`         A live page is shadowing a rule that was meant to retire it.`);
      for (const n of noRedirect.slice(0, 15)) console.log(`         ${n.path}`);
    }
    if (longChains.length) {
      console.log(
        `\n  [WARN] ${longChains.length} redirect chain(s) longer than one hop (equity leaks per hop):`,
      );
      for (const c of longChains.slice(0, 15))
        console.log(
          `         ${c.path}  ${c.result.chain.map((h) => `${h.status}->${h.to}`).join("  ")}`,
        );
    }
    if (unexpandable.length) {
      console.log(
        `\n  [WARN] ${unexpandable.length} rule(s) could not be expanded into a testable path.`,
      );
      console.log(
        `         Add a sample to SLUG_SAMPLES so they stop being invisible to this audit:`,
      );
      for (const u of unexpandable) console.log(`         ${u}`);
    }
    console.log(
      `\n  ${results.length - failures.length}/${results.length} redirects land 200` +
        (failures.length ? `  —  ${failures.length} FAILING` : `  —  clean`),
    );
  }

  process.exit(failures.length ? 1 : 0);
}

main();
