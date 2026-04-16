# Executive Communication Course Plan — "Communicate Like a Leader" (C1 → C2)

**Status:** Plan finalized 2026-04-16 after analysis of two of Robert's real executive lessons (one C1, one C2, same student). Ready to build.
**Target audience:** Founders, executives, senior professionals — people who already communicate competently in English but want to **lead** in English
**Tagline:** *Communicate Like a Leader*
**Level:** C1 core with optional C2 "Elite" upgrades throughout
**Pricing:** Free during launch (Phase 1). Stripe paywall Phase 2. Strongest funnel into Robert's 1-on-1 coaching.

---

## The thesis

This course is fundamentally different from the first three. It is **a productized version of Robert's 1-on-1 executive coaching**, modeled directly on his proven drill-based pedagogy — the same teaching pattern he uses successfully with senior Fortune 500 clients.

**The conversion play:**
1. The course gets executives in the door — free now, paid later
2. The course makes 1-on-1 coaching feel inevitable — every unit reminds the learner that a real coach accelerates them further
3. Strong, well-placed CTAs convert course completers into coaching clients

Robert IS the differentiator. His Bronx-born delivery, his Fortune 500 client roster, his voice — none of it can be copied by AI or generic course platforms. The course should feel like an extended drill session with Robert, not a textbook.

---

## Pedagogy (derived from Robert's real lessons)

Every unit section follows a very specific rhythm:

1. **Goal** — what the learner will be able to do after this section
2. **Why this matters** — the stakes at senior level
3. **Core drill** — weak version → stronger options → integrated model reply
4. **Technique focus / "Why this works"** — one-line strategic principle
5. **Rapid Repeat** — 3-5 reusable sentence stems, say aloud
6. **Final Shift** — Before: X / After: Y

### The core drill pattern: Weak → Strong → Elite

- **Weak:** Vague, hedging, generic. *"We looked into the issue."*
- **Strong (C1):** Decisive, specific. *"We investigated the issue."*
- **Elite (C2):** Analytically sharper. *"We diagnosed the root cause."*

Most drills present **2-3 strong options** with a **usage guide** (when to use each) and an **integrated model reply** that uses all options in one fluent sentence. The goal is not to memorize synonyms — it's to train the ear to hear the strategic distinction.

### Speaking-first, not reading-first

Every drill has a "say aloud" prompt. Audio playback via Azure Neural TTS is critical — learners hear the model reply, then repeat it. The `AudioButton` shared component from the Advanced course handles this.

### Named frameworks are memorizable products

Executives walk away with specific, named mental models they can deploy under pressure:
- **Cause → Action → Outcome** (simple status/update)
- **Problem → Impact → Solution → Recommendation** (driving decisions)
- **Context → Tension → Insight → Action → Outcome** (strategic storytelling)
- **Acknowledge → Explain → Action → Prevention** (tough questions)
- **State → Issue → Action → Timeline** (board updates)
- **Defensive → Executive → Strategic** (reframing under pressure)

---

## What is CUT from this course (deliberate)

| Cut | Why |
|---|---|
| Written email unit | Executive writing needs = Claude/ChatGPT. Spoken command under pressure is the irreplaceable skill. |
| Verb tense drills | Assumed mastered by C1+. |
| Phrasal verbs, modals, vocabulary memorization | C1 learners build vocabulary by reading and listening — not by memorizing lists. |
| Case study analysis | Originally planned, but Robert's real lessons are pure drill, not analysis. Cut. |
| Small talk, networking, cross-cultural as standalone units | Too "MBA textbook." Dilute the linguistic-authority positioning. Integrated into application units where relevant. |

---

## 10-unit outline (rebuilt on Robert's proven pedagogy)

**Units 1-6 = Mechanics.** Teach the linguistic habits of executive speech.
**Units 7-9 = Applications.** Apply the mechanics to specific senior-level situations.
**Unit 10 = Integration + Capstone.**

| # | Title | Core focus | Frameworks taught |
|---|---|---|---|
| 1 | **Executive Word Choice** | Verb precision drills (the core Robert drill). Weak→Strong→Elite ladder. "We didn't just X, we Y" rapid drill. | Usage-guide system |
| 2 | **Eliminating Weak Language** | Filler and hedging elimination. Calibrated certainty — direct without aggressive. Controlled assertion. | — |
| 3 | **Structured Responses & Connectors** | Organizing thinking in real time. Executive connectors. | Cause→Action→Outcome. Problem→Impact→Solution→Recommendation. |
| 4 | **Controlled Tone Under Pressure** | Defensive→Executive→Strategic reframing. Downgrade emotion, upgrade control. | 3-tier reframe ladder |
| 5 | **Strategic Storytelling** | Fact → meaning → direction. Turning updates into influence. | Context→Tension→Insight→Action→Outcome |
| 6 | **The Impromptu Toolkit** | 60-second replies under pressure. Three flagship scenarios. | Board Update, Tough Question, Drive Decision |
| 7 | **High-Stakes Meetings** | Applying mechanics to meetings. Opening/closing. Holding the floor. Diplomatic disagreement. | — |
| 8 | **Feedback and Difficult Conversations** | Giving feedback without offending. Receiving with poise. Conflict, apology, repair. | — |
| 9 | **Negotiation and Driving Decisions** | Anchoring, concessions, diplomatic "no". Closing language. | Problem→Impact→Solution→Recommendation applied |
| 10 | **Your Executive Voice + Capstone** | Integration. Personal brand in English. Long-term practice. **Capstone recording submission.** | All |

### Section structure within each unit

Each unit has **3 sections**. Each section follows Robert's rhythm (Goal → Why → Drill → Technique Focus → Rapid Repeat → Final Shift).

Example — Unit 1 sections:
- **1.1** Verb Precision — core "weak → 3 strong options" drill
- **1.2** Progressive Discovery — "identified → isolated → exposed" depth language
- **1.3** Integrated Executive Phrasing — putting it into model replies

---

## C1 vs C2 progression (how one course serves both levels)

Rather than build two separate courses, each drill surfaces **progressive tiers**:

- **Default view:** C1 — Weak → Strong
- **Optional C2 expansion:** Reveals the "Elite" upgrade with a **C2 Insight** callout (e.g., *"Differentiates reactive vs strategic delay"* or *"Moves from communication → alignment → influence"*)

**Benefits:**
- C1 learner gets a focused, achievable course
- C2 learner can push into the Elite tier for real stretch
- Robert uses the same course to coach both levels of client

**Technical note:** The `VerbUpgradeLab` component must support 2-tier (C1 only) or 3-tier (C1+C2) modes via the data file.

---

## Components

### Reused from Advanced course (no new build)
- `AudioButton` — Azure Neural TTS playback on all model replies (`en-US-AvaNeural` / `es-MX-DaliaNeural`)
- `SentenceTransformer` — backup/general transformation drill where appropriate

### New components for this course

| Component | Purpose | Primary units |
|---|---|---|
| `VerbUpgradeLab` | Weak verb sentence → 2-3 stronger options with usage guide → "C2 Insight" callout → integrated model reply with audio | U1 (core), U3, U9 |
| `WeakStrongElite` | 3-tier ladder drill (weak → strong → elite). Simpler than VerbUpgradeLab — single-line progression | U2, U4 |
| `StructuredResponseBuilder` | Prompt → weak reply → model reply in named parts → expandable "why it works" reveal | U3, U6, U8, U9 |
| `ConnectorDrill` | Transition upgrade — raw sentence pair → connected version with labeled connector | U3 |
| `StoryBuilder` | Flat description → 5-step strategic narrative (Context→Tension→Insight→Action→Outcome) | U5 |
| `RapidRepeat` | 3-5 reusable sentence stems with AudioButton, "say aloud" affordance | Every unit (section footer) |
| `ImpromptuScenario` | Scenario + framework + 60-second timer + model answer with audio | U6, U9 |
| `FinalShiftCard` | Display-only: "Before: X. After: Y." transformation summary | Every unit ending |

**Total: 8 new, 2 reused = 10 components.** Most new components are small and share similar structure (data-in, audio-out, reveal affordance).

---

## The capstone strategy

Unit 10 ends with a recorded executive presentation with Robert's personal feedback. **This is the single most important conversion moment in the entire course.**

We will NOT build in-browser audio recording for v1 (same reasoning as Advanced — 1-3 days of side work that distracts from shipping content). Instead:

1. **A clear prompt** — *"Record a 90-second executive update on a project you're leading. Use the Context → Tension → Insight → Action → Outcome framework. Submit it via email or book a strategy session."*
2. **Two submission paths:**
    - **Path A:** Email the recording to a dedicated address (`capstone@nyenglishteacher.com`). Robert listens and replies personally within 48 hours.
    - **Path B:** Book a free 30-minute strategy session and present it live to Robert.
3. **The funnel hook** — Either path puts the executive into direct contact with Robert. Path B converts at the highest rate. Path A nurtures the email list with a personalized touch.

**The capstone IS the conversion event.** Everything leads here.

---

## Pricing & Phase 1 vs Phase 2

### Phase 1 (build now)
**Free during launch.** Frame as *"Early Access — free for the first wave of executives."* Removes friction while we learn what content lands, builds testimonials, aligns with the real conversion (coaching).

### Phase 2 (after content validates)
Add Stripe paywall. Recommended: **Course + strategy session bundle at $299.** The session is the real value driver. Course alone at $149 as a secondary option.

Deferred because Stripe checkout, access gating, and refund handling is ~2-3 days of work that shouldn't block shipping.

---

## Files to be created

### React components (8 new)
- `src/components/course/VerbUpgradeLab.tsx`
- `src/components/course/WeakStrongElite.tsx`
- `src/components/course/StructuredResponseBuilder.tsx`
- `src/components/course/ConnectorDrill.tsx`
- `src/components/course/StoryBuilder.tsx`
- `src/components/course/RapidRepeat.tsx`
- `src/components/course/ImpromptuScenario.tsx`
- `src/components/course/FinalShiftCard.tsx`

### Data files (12)
- `src/data/executive/types.ts`
- `src/data/executive/units.ts`
- `src/data/executive/unit-1.ts` through `unit-10.ts`
- `src/data/executive/capstone.ts`

### Page files (24)
- `src/pages/en/course/executive/index.astro` + 10 unit pages + capstone page
- `src/pages/es/curso/ejecutivo/index.astro` + 10 unit pages + capstone page

### Modified files
- `src/lib/i18n.ts` — add 12 new TKey entries + routes
- `src/pages/en/courses/index.astro` and `src/pages/es/cursos/index.astro` — add Executive course card

**Total: ~44 new files, 3 modified.**

---

## Build order (5 PRs)

| PR | Contents |
|---|---|
| **PR 1** | Foundation: i18n routes, types, units metadata, landing pages (EN+ES), `VerbUpgradeLab`, `RapidRepeat`, `FinalShiftCard`, courses hub card |
| **PR 2** | Units 1, 2, 3 + `WeakStrongElite`, `StructuredResponseBuilder`, `ConnectorDrill` |
| **PR 3** | Units 4, 5, 6 + `StoryBuilder`, `ImpromptuScenario` |
| **PR 4** | Units 7, 8, 9 |
| **PR 5** | Unit 10 + Capstone funnel + capstone email handler + capstone landing page |

PR 1 is heavier (3 components) because we front-load the foundational drill component (`VerbUpgradeLab`) and the display utilities (`RapidRepeat`, `FinalShiftCard`) that appear in every unit. PRs 4-5 are lighter — no new components, just content authoring.

---

## URL structure

- EN landing: `/en/course/executive/`
- EN units: `/en/course/executive/unit-1/` through `/unit-10/`
- EN capstone: `/en/course/executive/capstone/`
- ES landing: `/es/curso/ejecutivo/`
- ES units: `/es/curso/ejecutivo/unidad-1/` through `/unidad-10/`
- ES capstone: `/es/curso/ejecutivo/reto-final/`

---

## Content authoring strategy

The two reference lessons Robert has shared are the **canonical style guide**. Claude drafts drills matching that voice; Robert reviews and corrects.

**Voice rules (from analyzing real lessons):**
- Direct, specific, no fluff
- Every drill has a concrete scenario (operations, strategy, team, client, performance)
- Weak examples are relatable — things real executives actually say
- Strong examples sound like Robert would say them
- "Why this works" reveals are **one-liners**, not paragraphs
- "C2 Insight" callouts name the **strategic distinction**, not the grammar
- "Final Shift" cards use exact Before/After contrast

**Quality bar:** Production-grade, client-facing. This course represents Robert's business. Each drill should feel like it came from the same coach who delivered the two reference lessons.

---

## What this course does NOT try to be

- A grammar refresher (Intermediate handled that)
- A cultural exchange or networking program
- A soft-skills or leadership course with English as a wrapper
- A self-paced certification program
- A replacement for 1-on-1 coaching

It is **a focused, premium-positioned series of linguistic command drills designed to convert qualified executives into Robert's coaching clients.** Every unit serves that goal.

---

## Open questions / decisions for later

- **Robert recording video intros per unit** — flagged originally, Robert declined for Phase 1. If revisited after launch, 2-3 minute intros would dramatically increase perceived value and conversion.
- **Spanish adaptation** — most executive phrasing is English-specific. The Spanish course should teach Spanish speakers how to handle *English* executive situations — not translate word-for-word. Handle during content authoring, unit by unit.
- **Bundling with Cushlabs executive offerings** — worth strategic conversation at Phase 2 paywall.
- **Private community** (Slack/Discord for enrollees) — high-value add but creates ongoing moderation overhead. Defer to post-launch.

---

## Success metrics

**Phase 1 (free launch):**
- 50+ course completions in first 90 days
- 10+ capstone submissions (email or strategy session)
- 5+ strategy sessions booked from capstone path
- 2+ coaching clients converted from strategy sessions

**Phase 2 (paywall):**
- $10K+ revenue in first 90 days post-paywall
- Landing page → purchase conversion > 2%
- Course-to-coaching funnel: 10%+ of course buyers convert to coaching package
