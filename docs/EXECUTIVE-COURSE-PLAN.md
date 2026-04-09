# Executive Communication Course Plan — "Communicate Like a Leader" (C1 → C2)

**Status:** Planned, build deferred until Advanced course ships
**Target audience:** Founders, executives, senior professionals — people who already communicate competently in English but want to **lead** in English
**Tagline:** *Communicate Like a Leader*
**Pricing:** **Paid** (with free preview units, paywall added in Phase 2). Strong funnel into Robert's 1-on-1 coaching.

---

## The thesis

This course is fundamentally different from the first three. **It is essentially a productized version of Robert's 1-on-1 executive coaching.** The conversion play is:

1. **The course gets executives in the door** — they pay a small amount or commit an email for premium content
2. **The course makes 1-on-1 coaching feel inevitable** — every unit reminds the learner that personalized coaching will accelerate them faster
3. **Strong, well-placed CTAs convert course completers into coaching clients**

Robert IS the differentiator. His Bronx-born background, his Fortune 500 client roster, his personality — none of that can be copied by AI or generic course platforms. The course should feel like an extended seminar with Robert, not a textbook.

---

## What's CUT from this course (deliberate)

| Cut | Why |
|---|---|
| **The written email unit** | Same reasoning as advanced — anyone who needs polished writing has Claude/ChatGPT. Spoken executive communication is the irreplaceable skill. |
| **Verb tense drills** | Assumed mastered by C1+. |
| **Phrasal verbs** | Same as before. |
| **Modal drills** | Same as before. |
| **Vocabulary memorization** | C1 learners build vocabulary by reading and listening, not by memorizing flashcards. |

---

## 10-unit outline (3 sections per unit)

| # | Title | Section 1 | Section 2 | Section 3 |
|---|---|---|---|---|
| 1 | **Executive Presence in English** | How leaders speak — pace, pause, and presence | Eliminating filler and hedging language | Sounding decisive without sounding aggressive |
| 2 | **Meetings That Move Forward** | Opening, steering, and closing a meeting | Interrupting politely and holding the floor | Disagreeing professionally — the diplomatic toolkit |
| 3 | **Presentations & Public Speaking** | Structuring a talk for English-speaking audiences | Signposting language that keeps listeners engaged | Handling Q&A, including hostile questions |
| 4 | **Negotiation Language** | Positioning, anchoring, and concession language | Diplomatic "no" — refusing without damaging the relationship | Closing the deal in English |
| 5 | **Small Talk & Relationship Building** | Opening conversations with clients and colleagues | Networking events — what to say beyond "what do you do?" | Building rapport across the meeting, the meal, and the follow-up |
| 6 | **Difficult Conversations** | Giving feedback without offending | Receiving feedback with poise | Conflict, apology, and repair language |
| 7 | **Storytelling for Business** | The narrative arc in pitches and proposals | Data storytelling — making numbers memorable | Personal anecdotes that build credibility |
| 8 | **Cross-Cultural Communication** | American business culture — directness, small talk, hierarchy | Meeting and call norms across cultures | Avoiding misunderstandings with international teams |
| 9 | **Leadership Vocabulary & Register** | The language of strategy, vision, and execution | Business idioms that signal seniority | Avoiding jargon that makes you sound junior |
| 10 | **Your Executive Voice** | Personal brand in English — how you want to be heard | Building a long-term communication practice | **Capstone: a recorded executive presentation with coaching feedback** |

**Final Assessment:** Different from the multiple-choice exams in the other courses. See "The capstone strategy" below.

---

## Component reuse from advanced

The 5 reusable components built for advanced will work here too:
- `WordPairLab` for U9 (vocabulary register comparisons)
- `SentenceTransformer` for U1 (eliminating hedging) and U7 (data storytelling)
- `ErrorSpotter` for U6 (feedback phrasing pitfalls)

Most executive sections will use **less interactivity, more analysis**. Each unit will lean on:
- **Case studies** — real examples of executive communication (public-domain speeches, leaked memos, famous interviews) with analytical reveals
- **Frameworks** — SCQA, BLUF, Pyramid Principle, Aristotle's ethos/pathos/logos
- **Robert's voice** in the prose — opinionated, specific, premium-feeling

This means the executive course will need at most **1-2 new components**:

| Component | Purpose |
|---|---|
| `CaseStudyLab` | Show an executive example (text + context), analytical reveal explaining why it worked |
| `RhetoricalPatternLab` (optional) | Show a rhetorical pattern (rule of three, contrast pair, callback), give examples, learner identifies the pattern in new examples |

---

## The capstone strategy — Unit 10 + Final Assessment

Robert's outline says Unit 10 ends with "a recorded executive presentation with coaching feedback." This is the **single most important conversion moment in the entire course**.

We will NOT build in-browser audio recording for v1 (same reason as advanced — it's a 1-3 day side project that distracts from shipping content). Instead, the capstone will be:

1. **A clear prompt** — "Record a 90-second executive update on a project you're leading. Use the SCQA framework. Submit it via email or book a strategy session."
2. **A submission CTA** — Two paths:
    - **Path A:** Email the recording to a dedicated address (e.g., `capstone@nyenglishteacher.com`). Robert listens and replies personally with feedback within 48 hours.
    - **Path B:** Book a free 30-minute strategy session and present it live to Robert.
3. **The funnel hook** — Either path puts the executive into direct contact with Robert. The strategy session converts at a high rate. Path A nurtures the email list and creates a personalized touch point.

This is **the entire point of the executive course.** The capstone IS the conversion event.

---

## Pricing & Phase 1 vs Phase 2

### Phase 1 (build now, ship after Advanced)

**Free during launch.** Frame it as "Early Access — free for the first wave of executives." This:
- Removes friction during the period when we're still learning what content lands
- Builds testimonials and case studies before charging
- Lets us gather feedback before locking in a price point
- Aligns with "free with strategy session booking" — the real conversion is the coaching

### Phase 2 (after we know the content works)

Add a Stripe paywall. Three pricing options to consider when we get there:

| Option | Price | Notes |
|---|---|---|
| **A) Standalone course** | $99–$149 one-time | Self-serve, lower commitment |
| **B) Course + strategy session** | $299 bundle | Includes one 30-minute session with Robert. The session is the value driver. |
| **C) Course free, coaching paid** | Free / $499 per coaching package | Course as lead magnet only. Highest funnel volume, lowest course revenue. |

**Recommendation when we get to Phase 2:** Option B. Bundles the course with a touch point with Robert, captures actual revenue, and the strategy session anchors the value perception.

**Why we're deferring this:** Building Stripe checkout, payment tracking, course access gating (per-user paid status), and refund handling is a substantial system — probably 2-3 days on its own. We don't want to spend that time before we know the product is good. Free during launch reduces risk.

---

## Files to be created (estimated)

### React components (1-2 new)
- `src/components/course/CaseStudyLab.tsx`
- `src/components/course/RhetoricalPatternLab.tsx` (optional)

### Data files (12)
- `src/data/executive/types.ts`
- `src/data/executive/units.ts`
- `src/data/executive/unit-1.ts` through `unit-10.ts`
- `src/data/executive/assessment.ts` (smaller than a full exam — capstone-focused)

### Page files (24)
- `src/pages/en/course/executive/index.astro` + 10 unit pages + assessment page (12 EN)
- `src/pages/es/curso/ejecutivo/index.astro` + 10 unit pages + assessment page (12 ES)

### Modified files
- `src/lib/i18n.ts` — add 12 new TKey entries + routes
- `src/pages/en/courses/index.astro` and `src/pages/es/cursos/index.astro` — add Executive course card

**Total: ~38 new files, 3 modified.** Slightly less than advanced because the components are mostly reused.

---

## Build order (recommended PR cadence)

| PR | Contents |
|---|---|
| **PR 1** | Foundation — i18n routes, types, units metadata, landing page (EN+ES), CaseStudyLab component |
| **PR 2** | Units 1, 2, 3 |
| **PR 3** | Units 4, 5, 6 |
| **PR 4** | Units 7, 8, 9 |
| **PR 5** | Unit 10 + Capstone funnel + courses hub card |

Same cadence as advanced. Defer the Stripe paywall to a Phase 2 PR after we ship and validate.

---

## URL structure

- EN landing: `/en/course/executive/`
- EN unit: `/en/course/executive/unit-1/` through `/unit-10/`
- EN assessment: `/en/course/executive/assessment/`
- ES landing: `/es/curso/ejecutivo/`
- ES unit: `/es/curso/ejecutivo/unidad-1/` through `/unidad-10/`
- ES assessment: `/es/curso/ejecutivo/evaluacion/`

---

## What this course does NOT try to be

- A grammar refresher (intermediate handled that)
- A cultural exchange program
- A networking platform
- A self-paced certification program
- A replacement for 1-on-1 coaching

It is **a focused, premium-positioned series of leadership communication lessons designed to convert qualified executives into Robert's coaching clients.** Every unit serves that goal.

---

## Open questions / decisions for later

- **Robert recording video intros for each unit** — flagged in the original alignment discussion. Robert declined for now ("not ready to record a video right now"). If/when he changes his mind, even 2-3 minute video intros per unit would dramatically increase perceived value and conversion. Worth revisiting after Phase 1 ships.
- **Whether to write a separate Spanish version of the case studies** — most executive content references American business culture and English-language sources. Translation may be straightforward, but some cultural context will need adaptation.
- **Whether to bundle the course with Robert's existing executive training products** (the Cushlabs offerings, etc.). Worth a strategic conversation when we get to Phase 2 paywall.
- **Whether to create a private Slack/Discord community for executive course enrollees** — could be a high-value add but creates ongoing moderation work.
