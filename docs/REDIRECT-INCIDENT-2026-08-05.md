# Redirect incident — 85 of 90 rules were dead for 11 days

**Found:** 2026-08-05 · **Closed:** 2026-08-05 (PRs #231, #232)
**Reference doc.** Not loaded into context automatically. The one-paragraph rule
lives in `CLAUDE.md`; this is the reasoning behind it.

---

## What happened

Vercel matches a redirect `source` **literally**. A rule written as `/foo` fires on
`/foo` and returns a **hard 404** on `/foo/`.

85 of the 90 rules in `vercel.json` were written without a trailing slash. This site
is trailing-slash canonical — `build.format: "directory"` in `astro.config.mjs`, and
every `<link rel="canonical">` carries the slash. Measured against 480 days of GSC
data, Google held the **slashed** form for 19 of the top 25 legacy URLs.

So the redirects fired on a form nobody requests, and 404'd the form everybody does.

## What it cost

| URL | Impressions | State |
|---|---|---|
| `/en/blog/free-english-courses-spanish-speakers/` | 493 lifetime, 167 in 28d | hard 404 since 2026-07-25 |
| `/eng-lesson/practice-ed-verbs-p3/` | 217 | never recovered |
| `/eng-lesson/pronounce-ed-verbs/` | 205 | never recovered |
| `/blog/executive-english-coaching/` | 131 | never recovered |

The first is the single highest-impression URL on the site — roughly **21% of all
site impressions** — serving an error page to every visitor who clicked it, for
eleven days, as a direct result of PR #220 "retiring" it.

PR #218's legacy recovery (23 rules, the entire point of that session) had been inert
since 2026-07-25 for the same reason.

## Why the verification missed it

**The verification step shared the code's wrong assumption.** PR #218 tested 11
redirects in production and reported "308 → land 200." That was true — of the
unslashed form. Nobody tested the form Google actually had, because the same mental
model produced both the rules and the test.

A check derived from the thing it is checking is not a check.

## Second trap, found the same day

A Vercel deployment in `BUILDING` state answers **200 to every path**, including
redirect sources. The first preview verification this session passed against that
placeholder and produced meaningless results — caught only because the output was
self-contradictory (`/blog/master-business-english` returned 200 when it should have
redirected).

`scripts/seo/redirect-audit.mjs` now proves the origin 404s an unknown path before
trusting any other result, and exits 1 with an explanation if it does not.

## The guardrail

`npm run validate:redirects` — `scripts/seo/redirect-audit.mjs`:

- expands every rule into the paths a crawler could request, **both slash forms**,
  including the six `:slug` catch-alls
- follows each chain to its landing page, fails on anything not 200
- warns on chains longer than one hop, and on a source returning 200 directly (a live
  page shadowing a rule meant to retire it)
- lists any rule it could not expand, so a pattern cannot go silently untested
- refuses to run against a build placeholder

Post-deploy only — it hits a live origin, so it is deliberately **not** in
`validate:all`, which checks the local build.

**Result after the fix: 170/170 land 200 in production.**

## Transferable lesson

When a fix targets something an external system holds a record of (a search index, a
cache, a partner's config), verify against **that record's form**, not the form the
code is written in. Pull the actual indexed URLs and test those.
