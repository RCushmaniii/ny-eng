# Off-Site Marketing — operating document

Everything that builds authority or discovery **outside** this website. Owned here,
not in chat, not in a session log, not at the end of a Claude output.

> **How this file works.** Every item has an owner, an effort estimate, a calendar
> slot, and a **closes when** line. Nothing goes on this list without a booked
> 30-minute block on Robert's calendar between **06:00 and 09:00 America/Mexico_City**.
> An item with no calendar slot is not a plan, it is a wish, and it will be
> overlooked — that is the explicit reason this file exists.
>
> Claude books the calendar event at the same time it adds the row. If Claude
> recommends off-site work and does not book it, the recommendation is incomplete.

**Companion files.** `EXTERNAL-FOOTPRINT.md` is the *inventory* — what exists and is
verified. This file is the *plan* — what to do next and when. `GMB-LOG.md` is the
activity log for the Google Business Profile specifically.

---

## The honest read before the task list

Robert's instruction: *"I need to hear what's actually going to work."* So the
uncomfortable part first.

**Citations are not going to move your numbers, and neither are more Google posts.**

The local pack is already won. GSC has the site at **position 1.5** for
`clases de ingles cerca de mi`, **1.0** for `clases de inglés guadalajara`, and **3.3**
for `escuela de ingles`. Directory citations exist to get a business *into* the local
pack. You are in it. Adding Yelp and Sección Amarilla will not take position 1.5 and
make it 1.2, because there is nowhere left to go.

The same is true of Google Business Profile posts. They are not a documented ranking
factor; they influence conversion for someone already looking at the listing. Robert
has been publishing them and has seen nothing, which is consistent with what they do.

**And ranking #1 locally produces almost nothing, because the market is small.**
`clases de inglés guadalajara` at position 1.0 yielded **3 impressions and 1 click in
90 days**. That is a demand ceiling, not an SEO failure. This was already established
on 2026-07-25 and is why neighborhood posts were retired.

So the real constraint is not local visibility. It is that **the audience worth having
— corporate directors and HR decision-makers — does not find an executive coach through
a directory.** They find one through a colleague, a LinkedIn presence, or a byline.

That is what the Tier A items below are for. Tier B is a one-hour hygiene pass that is
worth doing once and never thinking about again.

---

## Status

All slots are 30 minutes, 06:30 America/Mexico_City, booked on Robert's primary
calendar with a popup reminder. Every event body carries the full click-path, the
exact NAP string where relevant, and its own **closes when** line — so the calendar
entry is self-sufficient and this file does not need to be open to act on it.

| # | Item | Tier | Effort | When | Event | Status |
|---|------|------|--------|------|-------|--------|
| 1 | LinkedIn Company Page | A | 30 min | Fri 2026-08-07 | https://www.google.com/calendar/event?eid=ODNrczVrb3N1YnNqZ3Z1ZWE1anJubG9kYjQgcmN1c2htYW5paWlAbQ | Not started |
| 2 | Apple Business Connect | A | 30 min | Mon 2026-08-10 | https://www.google.com/calendar/event?eid=ZjdzamU5cmJtaTd1bm5wZm80bm5pc2tuMjAgcmN1c2htYW5paWlAbQ | Not started |
| 3 | Bing Places for Business | A | 30 min | Mon 2026-08-10 | https://www.google.com/calendar/event?eid=cGlsa3RhOGE2aWJvdmoyYnBnOWFrNWxxdTAgcmN1c2htYW5paWlAbQ | Not started |
| 4 | Featured / HARO — first answer | A | 30 min | Wed 2026-08-12 | https://www.google.com/calendar/event?eid=MXQ5Z29xb3M4NDJvOG5lZnRpcXFxMm1ocGMgcmN1c2htYW5paWlAbQ | Account exists, unused |
| 5 | Mexican citation hygiene pass | B | 30 min | Fri 2026-08-14 | https://www.google.com/calendar/event?eid=Z2thbDB2YXRlcnM4Z2R0ZGNhNDIyNnE1a2cgcmN1c2htYW5paWlAbQ | Not started |
| 6 | AmCham Guadalajara — research only | C | 30 min | Wed 2026-08-19 | https://www.google.com/calendar/event?eid=N2dxdTl0NnFrcDMzZjNmZjUwdWs4MThvdmcgcmN1c2htYW5paWlAbQ | Not researched |
| — | **Weekly:** HARO scan + review requests | A | 30 min | Fridays, from 08-21 | https://www.google.com/calendar/event?eid=a3R0bHJuaTY5YW80aGJ0YWlhM25obHUyOXNfMjAyNjA4MjFUMTIzMDAwWiByY3VzaG1hbmlpaUBt | Copy ready |
| — | **Monthly:** review this file with Claude | — | 30 min | 1st Wed, from 09-02 | https://www.google.com/calendar/event?eid=bzVmbDU2ZGw3bG10ODY1cmluODZlMTNuMDhfMjAyNjA5MDJUMTIzMDAwWiByY3VzaG1hbmlpaUBt | Booked |

The monthly slot is the one that keeps this file honest. Its first occurrence
(2026-09-02) doubles as the GSC redirect-recovery check.

---

## Tier A — worth real effort

### 1. LinkedIn Company Page

**This is the largest off-site gap.** The audience is corporate directors and HR
buyers; LinkedIn is where they are, and the business has no presence there at all.

`linkedin.com/company/new-york-english-teacher` returned **404** when checked
2026-07-25. The site had been asserting it to Google as a verified profile in
schema.org `sameAs` on every blog post — removed in PR #219 because pointing `sameAs`
at a dead URL actively weakens entity trust.

So this is not "add another social account." It is: a claim the site was already making
turned out to be false, and the correct fix is to make it true.

**Why it beats every citation on this page:** a real company page gives a legitimate
`sameAs` target, a destination for the personal-profile posting Robert already does,
and a surface corporate buyers check before contacting a coach. Directories give none
of that.

- **Do:** create the page, complete every field, add the site URL, post once so it is
  not a ghost page, then tell Claude so `src/data/config.ts` `siteConfig.Socials` and
  `EXTERNAL-FOOTPRINT.md` get updated together.
- **Closes when:** the page returns 200, is listed in `EXTERNAL-FOOTPRINT.md` §3 with a
  verification date, and appears in `sameAs`.

### 2. Apple Business Connect

Free. Apple Maps is the default map on every iPhone, and it does **not** source its
data from Google Business Profile. A business can rank #1 on Google Maps and be absent
from Apple Maps entirely.

- **Do:** claim the listing at `businessconnect.apple.com`, match NAP **exactly** to
  the Google Business Profile (`C. Cuautitlan 576, Jardines de Los Arcos, 44500
  Guadalajara, Jal.` / `33 1559 0572`).
- **Closes when:** the listing is claimed, verified, and searching the business name in
  Apple Maps on a phone returns it.

### 3. Bing Places for Business

Free, and Bing Webmaster Tools is already set up for this domain — this is the local
half that is missing. Bing data feeds DuckDuckGo, and increasingly the AI answer
surfaces built on Bing's index.

- **Do:** `bingplaces.com`, import from Google Business Profile (Bing supports direct
  import, so this is genuinely a few minutes), verify NAP matches.
- **Closes when:** listing is live and NAP matches the GBP exactly.

### 4. Featured / HARO — first answer

Account exists (welcome email 2026-03-23) and has received **zero digests in twelve
months**. Free tier is **3 answers per month**, and it is browse-the-platform, not
wait-for-email.

Full kit — credential block, the four angles, answer template, submission log — is at
`content-marketing/haro-featured-pitch-kit.md`.

- **Do:** log in, filter to business/leadership/remote-work/HR, submit one answer.
- **Closes when:** first answer is submitted and logged. Then it becomes a recurring
  20-minute weekly slot, not a project.
- **Honest expectation:** most answers are never used. The payoff is one editorial link
  from a real publication, which is worth more than every directory on this page
  combined. Budget 3–6 months before judging it.

---

## Tier B — one hour, once, then forget it

### 5. Mexican citation hygiene pass

Do these in a single 30-minute block. **Do not expect a ranking change.** The reason to
do them is NAP consistency — search engines cross-check business details across
sources, and *inconsistent* data is a mild negative signal. Absent data is neutral.
This closes the negative, it does not create a positive.

| Directory | Notes |
|---|---|
| Sección Amarilla — `seccionamarilla.com.mx` | The Mexican Yellow Pages. Genuinely used domestically; the most relevant of the group. |
| Waze | Heavily used in Mexico. Free listing. |
| Yelp | Weak in Mexico — mostly restaurants and nightlife in CDMX. Free, harmless, low value. Listed because Robert asked about it specifically. |
| Foursquare | Feeds several downstream apps. |

Use the exact NAP from the Google Business Profile. **Never** paraphrase the address
or reformat the phone number between sites — inconsistency is the only thing that
actually hurts here.

**Do not buy citation packages.** "50 Mexico citations for $10" builds listings on
scraped, unvisited directories. It does not build authority, and a burst of low-quality
listings is a pattern search engines discount.

- **Closes when:** all four are submitted, and recorded in `EXTERNAL-FOOTPRINT.md`.

---

## Tier C — research before committing

### 6. AmCham Guadalajara

The American Chamber of Commerce in Mexico serves exactly the buyer profile: US-linked
companies with Mexican management who need English at an executive level. A membership
directory listing is a contextually relevant link, and the member events are where the
actual buyers are.

**Unverified:** membership cost, whether the directory is public and indexable, and
whether the link is `nofollow`. Robert has said he is not spending on citations —
membership is a different category (business development with an SEO side effect), but
it is still a spend, so it needs the numbers before a decision.

- **Do:** 30 minutes finding cost, directory visibility, and event calendar. Decide after.
- **Closes when:** the numbers are in this file and Robert has said yes or no.

---

## Explicitly not doing, and why

Kept so these do not get re-proposed every few months.

| Rejected | Why |
|---|---|
| More neighborhood/city blog posts | Six exist at position 2.4–4.0, producing 12 impressions in 90 days. Market volume ceiling, not an SEO problem. Retired 2026-07-25. |
| Guadalajara "gratis" post | Site is already position 1.0 for the head term; that yields ~1 click per quarter. Cancelled 2026-07-26. Do not revive without new volume data. |
| Paid citation packages | Scraped directories, no authority, discounted as a pattern. |
| More GBP posts as a growth lever | Not a documented ranking factor. Robert has run them with no observed effect. Keep the listing current; do not treat posting as growth work. |
| Instagram | Handle `@nyenglishteacher` is held by a third party, confirmed 2026-07-25. No capability, no account. |

---

## Ledger

Append-only. Date, what was done, and the result if one is observable.

| Date | Item | Result |
|---|---|---|
| 2026-07-25 | Removed dead LinkedIn + X from schema.org `sameAs`; added Facebook | Stopped asserting two 404s as verified profiles (PR #219) |
| 2026-08-06 | This file created; Tier A/B items booked to calendar | — |
