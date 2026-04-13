# Advanced Course Plan — "Speak with Confidence" (B2 → C1)

**Status:** ✅ Complete — shipped 2026-04-13
**Target audience:** High B2 to C1 Spanish speakers — professionals who can already hold conversations comfortably but plateau on the precision and naturalness that separates "fluent" from "polished"
**Tagline:** *Speak with Confidence*
**Pricing:** **Free** (no email gate). Strong "Book a Strategy Session" CTA at end of every unit and after the final exam.

---

## The thesis

After the beginner ("First Steps Into English") and intermediate ("Building Fluency") courses, the learner can:
- Recognize the 1,500 cognates Spanish and English share
- Hold a conversation in present, past, future, and conditionals
- Use modals correctly for politeness, hypotheticals, and deduction
- Navigate workplace, travel, social, and emotional contexts

What they CANNOT yet do:
- Choose **strong** words over weak ones (got/made/did → earned/built/delivered)
- Avoid the word traps that haunt advanced learners forever (fewer/less, say/tell, who/whom)
- Use articles like a native (the single most lifelong Spanish-speaker error)
- Sound natural instead of translated
- Decode their own pronunciation tells (S endings, -en endings, TH, R)

**Advanced is not "more themes."** It's a skill-based bootcamp that fixes the exact issues that mark a non-native speaker even at C1.

---

## What's CUT from this course (deliberate)

Per Robert's pedagogical direction:

| Cut | Why |
|---|---|
| **Writing drills** | Anyone who needs polished writing has Claude/ChatGPT in 2026. Spoken English is the irreplaceable skill. |
| **Verb tense drills** | Intermediate covered all the major tenses. Advanced learners don't need more tense exercises. |
| **Phrasal verbs as a unit** | Same reasoning as intermediate — phrasal verbs are oversold. They appear naturally in dialogues but never get a unit. |
| **Modals as a unit** | Intermediate made modals the spine. Advanced uses them correctly without re-teaching them. |

---

## 10-unit outline (3 sections per unit)

| # | Title | Section 1 | Section 2 | Section 3 |
|---|---|---|---|---|
| 1 | **Weak Phrasing → Strong Phrasing** | Weak verbs vs strong verbs (got, made, did → earned, built, delivered) | Killing weak adverbs (very, really, quite, just) | Rewriting flat sentences into sentences with impact |
| 2 | **Word Traps That Trip Up Advanced Speakers** | Much vs many, few vs little, fewer vs less | Loan vs borrow, bring vs take, lend vs let | Say vs tell, make vs do, win vs earn vs beat |
| 3 | **Pronouns Done Right** | Subject vs object pronouns (he/him, she/her, they/them) | Reflexive pronouns (myself, yourself, themselves) — when they're wrong | Direct vs indirect object pronouns in real sentences |
| 4 | **Which, That, Who, When** | Which vs that — defining vs non-defining | Who vs whom (and why nobody says "whom" anymore) | When, where, whose — relative clauses without the confusion |
| 5 | **Articles: A, An, The, or Nothing** | When to use "a/an" vs "the" | When to use no article (zero article) | The traps — institutions, places, abstract nouns |
| 6 | **Pronunciation: Hitting the Hard Sounds** | The S sound — plurals, possessives, third-person verbs | -en endings — strengthen, tighten, written, spoken, frighten | TH, R, and the vowels that give you away |
| 7 | **Contractions, Flipped** | Advanced contractions in declaratives (I'd've, shouldn't've) | Negative contractions and double negatives to avoid | When NOT to use contractions — register and emphasis |
| 8 | **Prefixes & Suffixes** | Common prefixes and what they actually mean (un-, dis-, mis-, over-) | Suffixes that change word class (-tion, -ment, -ness, -en) | Building vocabulary by decoding word parts |
| 9 | **Sentence Construction & Flow** | Sentence variety — simple, compound, complex | Word order traps (adverb placement, adjective stacking) | Linking ideas without sounding robotic |
| 10 | **Sounding Natural, Not Translated** | Collocations native speakers expect (strong coffee, heavy rain) | The rhythm of spoken English — stress and pause | Thinking in English instead of translating |

**Final exam:** Comprehensive assessment covering all 10 units. Multiple-choice format like beginner/intermediate. No real-time speaking task in v1 — see "Recorded speaking task" below.

---

## Section pattern: teach → recognize → produce

Every unit's 3 sections follow the same cognitive progression:

| Section | Cognitive load | Purpose | What it looks like |
|---|---|---|---|
| **1: Concept** | Receive | Introduce the rule with clear examples | Read + side-by-side comparisons + audio + reveals |
| **2: Recognition** | Detect | Spot the issue in real sentences | Multiple-choice or "find the error" |
| **3: Production** | Create | Build the right version yourself | Sentence transformation, fill-in, pick the upgrade |

This is the **teach → recognize → produce** progression that drives long-term retention. Recognition before production. Concept before recognition.

The 3 sections will FEEL different from beginner/intermediate (which had 6 sections per unit). This is intentional: advanced learners want efficiency, not 20-minute units. Each unit should be ~10 minutes of focused drilling.

---

## Component library (5 reusable components)

Building 30 unique React components for 30 mini-exercises is unrealistic and wasteful. Instead, build 5 reusable components that get reused across units with different content. Each unit feels distinct because the **content** is different, not the widget.

| Component | Purpose | Used in units |
|---|---|---|
| **`WordPairLab`** | Compare 2 words/phrases side by side, reveal which is right and why | U1 (weak/strong), U2 (word traps), U3 (pronouns), U10 (collocations) |
| **`ErrorSpotter`** | Show a sentence, click the error or pick the wrong one from 4 sentences | U2, U3, U4, U5, U9 |
| **`SentenceTransformer`** | Given a flat/wrong sentence, build the upgraded version (multi-step or pick-the-upgrade) | U1, U7, U9, U10 |
| **`MinimalPairDrill`** | Audio-driven pronunciation pairs (ship/sheep, walk/work, then/than) | U6 |
| **`WordBuilder`** | Combine prefix + root + suffix to build/decode words; click parts to see their meaning | U8 |

**Trade-off acknowledged:** This is less varied than intermediate's "unique component per unit" approach. The justification: 30 sections is too many to give each its own widget, AND the skill-based nature of advanced (vs the theme-based nature of intermediate) means the same widget mechanic genuinely fits multiple units. The course feels distinct because the content is sharp and different.

---

## Final exam — and the speaking task strategy

**v1 (now):** 20 multiple-choice questions covering all 10 units, using the existing `CourseExam` React component (the one we just refactored after the prop-passing crash). The exam will:

- Use the same `examQuestions` / `examTiers` data pattern as intermediate
- Have its own scoring tiers tuned for advanced ("Outstanding" / "Passed" / "Keep Practicing" with C1-appropriate feedback)
- Cover roughly 2 questions per unit
- Use the same 3 categories (vocabulary, grammar, translation) for the score breakdown

**Recorded speaking task:** Robert's outline mentions "a recorded speaking task — graded with feedback." We do not yet have audio recording infrastructure on the site, and building it (browser MediaRecorder + Vercel Blob storage + grading flow) is a separate ~1-3 day project.

**v1 strategy: stub it as a coaching funnel.** After the multiple-choice exam, show:

> *"Want a real speaking evaluation? The most reliable way to know if your spoken English has reached C1 is to be heard. Book a free 30-minute strategy session with Robert and submit a 60-second recording. He'll listen personally and give you honest, actionable feedback."*
> *[Book Strategy Session →]*

This turns a feature limitation into the **most powerful conversion CTA in the entire course**. Don't build the speaking task as a tool — build it as a coaching trial.

**v2 (later):** If demand justifies it, build the in-browser recording flow with manual or AI-assisted grading. Until then, the strategy session IS the speaking task.

---

## Files to be created (estimated)

### React components (5)
- `src/components/course/WordPairLab.tsx`
- `src/components/course/ErrorSpotter.tsx`
- `src/components/course/SentenceTransformer.tsx`
- `src/components/course/MinimalPairDrill.tsx`
- `src/components/course/WordBuilder.tsx`

### Data files (12)
- `src/data/advanced/types.ts`
- `src/data/advanced/units.ts` (course metadata + 10-unit array)
- `src/data/advanced/unit-1.ts` through `unit-10.ts`
- `src/data/advanced/exam.ts`

### Page files (24)
- `src/pages/en/course/advanced/index.astro` + 10 unit pages + exam page (12 EN)
- `src/pages/es/curso/avanzado/index.astro` + 10 unit pages + exam page (12 ES)

### Modified files
- `src/lib/i18n.ts` — add 12 new TKey entries (course/advanced + 10 units + exam) + EN/ES routes
- `src/pages/en/courses/index.astro` and `src/pages/es/cursos/index.astro` — add Advanced course card
- `docs/BEGINNER-COURSE-PLAN.md` — update future-phases section to point here

**Total: 41 new files, 4 modified.** Roughly the same scope as intermediate.

---

## Build order (recommended PR cadence)

To keep PRs reviewable, ship in chunks:

| PR | Contents |
|---|---|
| **PR 1** | Foundation — i18n routes, types, units metadata, landing page (EN+ES), all 5 React components built as empty/stub forms |
| **PR 2** | Units 1, 2, 3 — full data files + EN/ES pages + activate components |
| **PR 3** | Units 4, 5, 6 |
| **PR 4** | Units 7, 8, 9 |
| **PR 5** | Unit 10 + final exam + speaking task funnel CTA + courses hub card |

5 PRs is the same cadence we used for intermediate. Each PR builds on the last, none ships broken intermediate states, and Robert can review/correct content as we go.

---

## URL structure

- EN landing: `/en/course/advanced/`
- EN unit: `/en/course/advanced/unit-1/` through `/unit-10/`
- EN exam: `/en/course/advanced/exam/`
- ES landing: `/es/curso/avanzado/`
- ES unit: `/es/curso/avanzado/unidad-1/` through `/unidad-10/`
- ES exam: `/es/curso/avanzado/examen/`

These will be added to `src/lib/i18n.ts` as 12 new TKey entries with EN/ES routes for hreflang.

---

## Key principles inherited from intermediate

1. **JSON-serializable props always** when passing data to React islands. Functions never. (See [INTERMEDIATE-COURSE-RETROSPECTIVE.md](./INTERMEDIATE-COURSE-RETROSPECTIVE.md) for the post-mortem on the exam crash bug.)
2. **No slang, no fads.** Sophisticated, timeless English only.
3. **No focus on writing.** Spoken-fluency first.
4. **Manual content audit before launch.** Robert reviews every question, every translation, every category label.
5. **Strong CTAs to coaching at strategic points.** End of every unit page + after final exam.
6. **Bilingual mirror pages with hreflang on day one.** Never ship monolingual.

---

## Open questions / decisions for later

- Whether to add a "completion certificate" download (beginner doesn't have one, intermediate doesn't either). May be worth doing for advanced as a CTA-magnet — a downloadable PDF the learner can put on LinkedIn could drive shares and SEO.
- Whether to record native-speaker audio for Unit 6 (Pronunciation) instead of relying on TTS. Robert's voice would dramatically increase the pedagogical value of the minimal pair drills, but requires his time.
- Whether to add a "Review Mode" for previously-completed units (not in scope for v1).
