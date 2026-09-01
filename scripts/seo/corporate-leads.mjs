/**
 * Corporate lead report — which pages actually produce corporate enquiries.
 *
 * The open-items register carried "measure corporate conversions separately"
 * with nothing implemented. It turned out nothing NEW was needed: every
 * corporate-guide download already writes `source_page` into
 * `corporate_guide_leads` in Neon. What was missing was (a) the corporate
 * category pages being wired into that form at all, and (b) any way to read
 * the column back. This is (b).
 *
 * Pageviews are the wrong denominator for corporate. A student reading a
 * pronunciation post and an HR director downloading the vendor guide both
 * count as one visit; only one of them is a pipeline event. This counts the
 * second kind and attributes it to the page that produced it.
 *
 * Run from the repo root:
 *   node --env-file=.env.local scripts/seo/corporate-leads.mjs
 *   node --env-file=.env.local scripts/seo/corporate-leads.mjs --days 90
 *
 * Reads POSTGRES_URL. Prints no secret, and prints no lead email addresses -
 * only counts, companies and source pages. Use the Neon console if an
 * individual lead's contact details are needed.
 */

import { neon } from "@neondatabase/serverless";

const url = process.env.POSTGRES_URL;
if (!url) {
  console.error(
    "POSTGRES_URL not found. Run with: node --env-file=.env.local scripts/seo/corporate-leads.mjs",
  );
  process.exit(1);
}

const arg = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};
const days = Number(arg("--days", "180"));

const sql = neon(url);

const rows = await sql`
  SELECT
    COALESCE(source_page, '(not recorded)') AS source_page,
    language,
    COUNT(*)::int AS leads,
    COUNT(DISTINCT company)::int AS companies,
    MAX(created_at) AS most_recent
  FROM corporate_guide_leads
  WHERE created_at > NOW() - (${days} || ' days')::interval
  GROUP BY source_page, language
  ORDER BY leads DESC
`;

console.log(`corporate guide leads, last ${days} days\n`);

if (!rows.length) {
  console.log("  No corporate leads in this window.");
  console.log("  That is a finding, not an error - it means the corporate funnel");
  console.log("  has produced nothing yet, and any claim that it works is unsupported.");
  process.exit(0);
}

console.log("leads  cos  lang  most recent   source page");
console.log("-".repeat(88));
for (const r of rows) {
  const when = r.most_recent ? new Date(r.most_recent).toISOString().slice(0, 10) : "-";
  console.log(
    String(r.leads).padStart(5),
    String(r.companies).padStart(4),
    String(r.language || "-").padStart(5),
    " " + when.padEnd(12),
    r.source_page,
  );
}

const total = rows.reduce((s, r) => s + r.leads, 0);
console.log("-".repeat(88));
console.log(
  `${total} corporate lead${total === 1 ? "" : "s"} across ${rows.length} source page(s)`,
);
