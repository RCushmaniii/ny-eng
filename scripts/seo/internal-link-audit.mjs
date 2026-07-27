/**
 * Internal link audit.
 *
 * Counts inbound internal links for every built page, EXCLUDING links that come
 * from site-wide chrome (header nav, footer). A page linked only from the footer
 * is effectively an orphan for PageRank purposes — the link appears on every
 * page and carries almost no discriminating signal.
 *
 * Usage:
 *   node scripts/seo/internal-link-audit.mjs            # summary + orphans
 *   node scripts/seo/internal-link-audit.mjs --all      # every page, sorted
 */
import fs from "node:fs";
import path from "node:path";

const DIST = "dist";
const showAll = process.argv.includes("--all");

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name === "index.html") acc.push(p);
  }
  return acc;
}

const files = walk(DIST);
if (files.length === 0) {
  console.error("No built pages found in dist/. Run `npm run build` first.");
  process.exit(1);
}

const toRoute = (f) => "/" + path.relative(DIST, path.dirname(f)).split(path.sep).join("/") + "/";
const routes = new Set(files.map(toRoute));

// Strip <header> and <footer> so site-wide chrome links don't mask real orphans.
function stripChrome(html) {
  return html
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "");
}

const inbound = new Map(); // route -> Set of source routes (body links only)
const inboundAny = new Map(); // route -> count including chrome
for (const r of routes) {
  inbound.set(r, new Set());
  inboundAny.set(r, 0);
}

for (const f of files) {
  const src = toRoute(f);
  const raw = fs.readFileSync(f, "utf8");
  const body = stripChrome(raw);

  const collect = (html, cb) => {
    for (const m of html.matchAll(/href="(\/[^"#?]*?)"/g)) {
      let target = m[1];
      if (!target.endsWith("/")) target += "/";
      if (!routes.has(target)) continue;
      if (target === src) continue; // ignore self-links
      cb(target);
    }
  };

  collect(raw, (t) => inboundAny.set(t, inboundAny.get(t) + 1));
  collect(body, (t) => inbound.get(t).add(src));
}

const rows = [...routes]
  .map((r) => ({
    route: r,
    body: inbound.get(r).size,
    any: inboundAny.get(r),
  }))
  .sort((a, b) => a.body - b.body || a.route.localeCompare(b.route));

const orphans = rows.filter((r) => r.body === 0);
const weak = rows.filter((r) => r.body >= 1 && r.body <= 2);

console.log(`\nInternal link audit — ${rows.length} built pages`);
console.log('"body" = inbound links excluding header/nav/footer chrome\n');
console.log(`  true orphans (0 body links):   ${orphans.length}`);
console.log(`  weak (1-2 body links):         ${weak.length}`);
console.log(`  healthy (3+ body links):       ${rows.length - orphans.length - weak.length}\n`);

const print = (list, label) => {
  if (!list.length) return;
  console.log(`--- ${label} ---`);
  for (const r of list) {
    console.log(
      `  body ${String(r.body).padStart(3)}  all ${String(r.any).padStart(4)}  ${r.route}`,
    );
  }
  console.log();
};

if (showAll) {
  print(rows, "ALL PAGES (fewest body links first)");
} else {
  print(
    orphans.slice(0, 60),
    `TRUE ORPHANS (showing ${Math.min(60, orphans.length)} of ${orphans.length})`,
  );
  print(weak.slice(0, 40), `WEAK (showing ${Math.min(40, weak.length)} of ${weak.length})`);
}
