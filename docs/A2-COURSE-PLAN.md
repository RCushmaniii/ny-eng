# A2 Course Plan — "Tell Your Story" (A2 Elementary)

**Status:** 🚧 Planning — drafted 2026-04-30
**Target audience:** A2 / Elementary Spanish speakers — learners who finished Beginner ("First Steps Into English") or arrive already knowing present tense and basic vocabulary, but can't yet talk about the past, compare things, or answer beyond yes/no
**Tagline:** *Tell Your Story*
**Subtagline:** *From fragments to full stories — past, present, and future of your real life.*
**Pricing:** **Free** (no email gate). Strong "Continue to Building Fluency" CTA at end of every unit and after the final exam.
**URL:** `/en/course/elementary/` and `/es/curso/elemental/`

---

## The thesis

The CEFR ladder has a real gap between Beginner (A1) and Intermediate (B1-B2). After "First Steps Into English," the learner can:

- Recognize 1,500+ cognates and form first sentences (`It is possible`, `I want to learn`)
- Use 4 modal verbs in present (can, want to, need to, have to)
- Talk about likes, recent past (just + verb), and basic feelings
- Ask simple yes/no questions

What they **CANNOT** yet do:

- Talk about **yesterday** — past simple regular and irregular verbs are completely missing
- Make plans for **tomorrow** — `going to` and `will` aren't drilled
- **Compare** anything — "bigger than", "the most interesting", comparatives + superlatives
- **Quantify** — much/many, some/any, a lot of, a few
- Answer **anything beyond yes/no** — Wh-questions and detailed responses
- Use **frequency** language — always, usually, often, sometimes, never with daily routines
- Background past actions — past continuous (`I was eating when…`)

These are the building blocks of telling your own story. Without them, the learner is stuck in present-tense fragments. With them, they can describe their day, their week, their plans, their childhood — the foundation every B1-B2 course assumes.

**A2 is the storytelling unlock.** Past + comparatives + future plans + Wh-questions = the skill set that turns "speaking English" into "having a real conversation about real life."

---

## What's CUT from this course (deliberate)

| Cut | Why |
|---|---|
| **Conditionals** | Saved for B1-B2 ("Building Fluency"). A2 introduces *if + present + will* only as a passing pattern, never as a unit. |
| **Phrasal verbs as a unit** | Same reasoning as Advanced — phrasal verbs appear naturally in dialogues but never get their own unit. |
| **Present perfect deep dive** | A2 mentions `have you ever` lightly; the full present perfect drill is intermediate territory. |
| **Modal verbs review** | Beginner already drilled the core 4. A2 adds `should` + `would like` lightly but doesn't re-teach. |
| **Writing drills** | Spoken English is the irreplaceable skill. Anyone who needs polished writing has Claude/ChatGPT in 2026. |

---

## 10-unit outline

| # | Title | Section A | Section B | Section C |
|---|---|---|---|---|
| 1 | **Yesterday I Worked** — Past Simple, Regular Verbs | Regular -ed verbs (worked, walked, played, watched) | The 3 sounds of -ed (/t/, /d/, /ɪd/) | Building first past sentences |
| 2 | **Yesterday I Went** — Past Simple, Irregular Verbs | The 50 most common irregular verbs (go/went, see/saw, do/did, have/had) | Was/were — the irregular past of "to be" | Past simple questions + negatives (Did you…? I didn't…) |
| 3 | **Telling Your Day** | Time markers (yesterday, last week, two days ago, this morning) | Sequencing your day (first, then, after that, finally) | Building a 5-sentence story about your yesterday |
| 4 | **What's Coming Next** — Going To and Will | `Going to` for plans (Tomorrow I'm going to…) | `Will` for promises and predictions | Choosing between `going to` and `will` |
| 5 | **Comparing Things** — Comparatives & Superlatives | Comparatives (-er than, more interesting than) | Superlatives (the biggest, the most expensive) | The traps — good/better/best, bad/worse/worst |
| 6 | **How Much, How Many** — Quantifiers | Much vs many (countable vs uncountable) | Some, any, no — and when each one fits | A lot of, a few, a little — the friendly quantifiers |
| 7 | **Asking Real Questions** | Wh-questions (Where, When, Why, How, How long, How often) | Question word order (Did you go? vs Where did you go?) | Asking follow-ups in real conversations |
| 8 | **Daily Life** — Frequency & Routines | Frequency adverbs (always, usually, often, sometimes, never) | Word order with frequency (I always wake up at 7) | Building a routine description (your real daily life) |
| 9 | **I Was Eating When…** — Past Continuous | Was/were + -ing (I was working) | Past continuous vs past simple (I was eating WHEN she called) | Backgrounding stories with past continuous |
| 10 | **Tell Your Story** (capstone) | Combining past simple + past continuous | Adding `going to` for what's next | Building a 60-second story about your real life |

**Final exam:** 20 multiple-choice questions, 2 per unit, using the existing `CourseExam` component. Tiered scoring: "Storyteller" / "Almost There" / "Keep Practicing" with A2-appropriate feedback. Strong CTA after exam: "Ready for Building Fluency?" → links to Intermediate course.

---

## Section pattern: hear → recognize → produce

Following the Advanced-course pattern, every unit's 3 sections follow the same cognitive progression. A2 adds an **audio-first** layer because pronunciation of -ed endings, -er comparatives, and irregular past verbs is critical:

| Section | Cognitive load | Purpose | What it looks like |
|---|---|---|---|
| **A: Hear & See** | Receive | Introduce the rule with audio + text + Spanish parallel | Read + audio + side-by-side EN/ES |
| **B: Recognize** | Detect | Spot the pattern in real sentences | Pick the right form, find the error |
| **C: Produce** | Create | Build the right version yourself | Sentence builder, fill-in, story sequencing |

---

## Component reuse strategy (no new components)

A2 ships with **zero new React components**. Every drill type is covered by the existing library:

| Component | Purpose in A2 | Used in units |
|---|---|---|
| `CognateDiscovery` | Past tense verb pairs (work/worked, go/went) | U1, U2 |
| `SentenceBuilder` | Build past, future, comparative sentences | U1, U2, U4, U5, U9, U10 |
| `PronunciationDrill` | -ed endings (/t/, /d/, /ɪd/), comparative -er | U1, U5 |
| `ConnectorChallenge` | Time markers + sequencing words | U3, U10 |
| `WordPairLab` | Much/many, some/any, good/better, fewer/less previews | U5, U6 |
| `ErrorSpotter` / `ErrorCorrection` | Spot the wrong past tense, wrong question word order | U2, U7 |
| `StoryBuilder` / `NarrativeTimeline` | Sequence the day, build the capstone story | U3, U10 |
| `DialoguePractice` | Asking and answering Wh-questions | U7 |
| `SelfTest` | End-of-unit review | U1-U10 |
| `CourseExam` | Final exam | exam page |
| `CourseProgress` | Unit nav | every page |

This keeps build velocity high and matches the established quality bar.

---

## Files to be created

### Data files (12)
- `src/data/elementary/types.ts` — TypeScript interfaces (mirror intermediate/advanced)
- `src/data/elementary/units.ts` — Course metadata + 10-unit `elementaryUnits` array
- `src/data/elementary/unit-1.ts` through `unit-10.ts` — Drill content per unit
- `src/data/elementary/exam.ts` — 20 exam questions + tiered feedback

### Pages (24)
- `src/pages/en/course/elementary/index.astro` — Course landing
- `src/pages/en/course/elementary/unit-1.astro` through `unit-10.astro`
- `src/pages/en/course/elementary/exam.astro`
- `src/pages/es/curso/elemental/index.astro` — Spanish landing
- `src/pages/es/curso/elemental/unidad-1.astro` through `unidad-10.astro`
- `src/pages/es/curso/elemental/examen.astro`

### Wiring updates (4)
- `src/lib/i18n.ts` — Add `course/elementary` and 10 unit `tkey` entries to the type + `routeFor`
- `src/pages/en/courses/index.astro` — Add Elementary card (5 cards total now: A1, A2, B1-B2, B2-C1, C1-C2)
- `src/pages/es/cursos/index.astro` — Mirror
- `astro.config.mjs` — Verify sitemap picks up new pages (priority 0.7, weekly)

---

## SEO targets

| Slug | Target keyword | Search intent |
|---|---|---|
| `/en/course/elementary/` | "free elementary English course for Spanish speakers" | After-beginner learners shopping for next step |
| `/en/course/elementary/unit-1/` | "past simple regular verbs Spanish speakers" | Specific grammar query |
| `/en/course/elementary/unit-5/` | "English comparatives and superlatives free" | Self-study learners |
| `/es/curso/elemental/` | "curso de inglés A2 gratis para hispanohablantes" | Spanish-language search |

Each unit page gets:
- Unique title (≤60 chars) and meta description (120-160 chars)
- BreadcrumbList JSON-LD
- Course JSON-LD on the index page
- EN ↔ ES `hreflang` via the existing `tkey` mechanism

---

## Funnel position

```
A1 First Steps Into English  →  A2 Tell Your Story  →  B1-B2 Building Fluency  →  B2-C1 Speak with Confidence  →  C1-C2 Communicate Like a Leader  →  1-on-1 Coaching with Robert
```

A2 plugs the single biggest dropoff in the funnel: learners who finish A1 but stall before B1 because B1-B2 jumps straight to phrasal verbs and conditionals. With A2 in place, the ladder becomes continuous.

---

## Build order (recommended)

1. **Phase 0 — Foundation** (1 PR): Plan doc + i18n routes + course landing pages (EN + ES) + courses-page tile, all with placeholder unit links. Lets the navigation and SEO scaffold deploy independently.
2. **Phase 1 — Units 1-3** (1 PR): Past simple foundation (regular, irregular, telling your day). Highest learner pain.
3. **Phase 2 — Units 4-6** (1 PR): Future + comparing + quantifying. Different mechanic from past tense.
4. **Phase 3 — Units 7-9** (1 PR): Questions, routines, past continuous.
5. **Phase 4 — Unit 10 + Exam** (1 PR): Capstone + final exam + funnel CTAs.

5 PRs total. Each PR = 1 production deploy on Vercel (matches Hobby plan budget).
