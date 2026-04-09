# Intermediate Course — "Building Fluency" — Retrospective

**Status:** ✅ Complete and live in production
**Live at:** [/en/course/intermediate/](https://www.nyenglishteacher.com/en/course/intermediate/) and [/es/curso/intermedio/](https://www.nyenglishteacher.com/es/curso/intermedio/)
**Built:** April 2026, in collaboration with Robert Cushman III

---

## Scope shipped

- **10 units** covering B1-B2 progression from phrasal verb decoding through modal mastery to native-sounding deduction
- **Final exam** — 20 questions covering all 10 units, with category breakdown (grammar / vocabulary / translation) and unit-by-unit scoring
- **Bilingual** — full English + Spanish mirror pages with hreflang
- **6 unique React components** built specifically for this course (PoliteFramesBuilder, NarrativeTimeline, OpinionStems, SurvivalPhrases, SpecifierBuilder, WishTransformer, DeductionLab) plus the original PhrasalVerbExplorer reused for Units 1-3
- **Course progress tracking** via localStorage with separate `courseId="intermediate"` namespace
- **Final exam component** (`CourseExam.tsx`) refactored to be reusable across both beginner and intermediate courses

---

## What we got right

### Modal-driven curriculum
After Units 1-3 used phrasal verbs as the spine, we pivoted Units 4-10 to make **modals** (would, could, should, might, may, must, can't) the through-line of the course. This was the single most important pedagogical decision. Modals are:

- The politeness layer of English
- The structure Spanish speakers struggle with most (no clean Spanish equivalent)
- The thing that separates B1 from B2 in real conversations
- Universally useful — they age well across decades

Every unit from 4 onward introduces a new dimension of modal usage:
- U4: would/could for invitations
- U5: would for habitual past
- U6: might/may/could for softening opinions
- U7: should/ought to/had better for advice
- U8: would rather/would prefer for preferences
- U9: would in wishes and hypotheticals
- U10: must/can't/might for deduction

### Sentence construction over phrasal verbs
Robert's early correction during the build: phrasal verbs are oversold by traditional teaching. Students struggle to memorize them in isolation, and recognition matters more than production. We capped phrasal verbs at 3 per unit after Unit 4 and made `SentenceBuilder` (Section C) the heaviest, most ambitious section in every unit.

### Each unit gets a unique Section A
The "no cookie-cutter feel" rule. Every unit's first interactive section uses a custom-built React component:

| Unit | Section A component | Mechanic |
|---|---|---|
| 1-3 | PhrasalVerbExplorer | Grouped reveal of phrasal verbs by base verb |
| 4 | PoliteFramesBuilder | Casual sentence → polite B2 upgrade with modal highlighted |
| 5 | NarrativeTimeline | Vertical timeline of past events with tense badges |
| 6 | OpinionStems | Tabbed categories (state/soften/agree/disagree/concede) of opinion frames |
| 7 | SurvivalPhrases | Categorized high-stakes medical phrases with urgency badges |
| 8 | SpecifierBuilder | Vague → specific transformation with relative clause highlighting |
| 9 | WishTransformer | Reality → wish/regret transformation with wish-type badges |
| 10 | DeductionLab | Multiple-choice deduction with modal certainty explanations |

### Sections B-F stayed consistent
Dialogue Practice, SentenceBuilder, ErrorCorrection, PronunciationDrill, SelfTest reused the same components across all 10 units. The data inside them is unique per unit, so each unit still feels different — but we didn't waste effort building 60 unique components.

### No slang, no fads
After an early misstep where I drafted social-chunk content like "wanna grab a coffee" and "I'm down for that," Robert killed it. The pivot: timeless, sophisticated English ("Would you like to grab a coffee sometime?"). Slang dates fast and damages credibility with hiring managers and savvy clients. Every unit since has used register-appropriate, ageless English.

### No focus on written English
Students who need polished written English have ChatGPT/Claude. Spoken English is the irreplaceable skill. The course never wastes time teaching email composition.

### Final exam reuse via prop-passing
The `CourseExam` React component was generalized to accept `tiers` (array of tier definitions) as a serializable prop, so both beginner and intermediate exams use the same component with different question sets and tier feedback.

---

## What we got wrong (and learned from)

### 🚨 Functions cannot cross Astro island prop boundaries (P0 bug)

**The mistake:** When refactoring `CourseExam.tsx` to be reusable across courses, the first attempt passed `calculateExamResult` and `getScoreTier` as **function props** to the React island. This worked locally during build because Astro's SSR runs the component server-side once, where functions are valid JavaScript. But on the client, **Astro serializes island props as JSON**, and functions don't serialize. The client received `undefined` and the exam crashed at the moment of result computation:

```
PAGEERROR: calculateExamResult is not a function
```

**Impact:** Both beginner and intermediate exams (EN + ES, all 4 pages) were broken in production for ~24 hours after the merge. Users could answer all 20 questions but the page crashed at "See Results."

**The fix:** Pass *data* across the island boundary, never functions. Refactored to:
1. Compute the result inline inside the component using the `questions` prop already passed
2. Pass tier definitions as a `ScoreTierDefinition[]` array (pure data)
3. Have the component pick the highest matching tier locally

**Lesson for all future work:** **React island props in Astro must be JSON-serializable.** Test for this rule:
- ✅ strings, numbers, booleans, plain objects, arrays of plain objects
- ❌ functions, class instances, Symbols, Maps, Sets, regex objects

This will come up again in the advanced course. Be vigilant.

### My automated test caught the bug, my over-cautious workflow delayed the fix

I found the bug via Playwright testing locally, fixed it, and then **asked permission to merge** instead of merging immediately. A P0 bug where production is broken does not need a confirmation step. The result: production stayed broken for an extra hour while I waited.

**Lesson:** P0 bugs get merged immediately after the fix is verified locally. Confirmation is for high-risk *code*, not high-risk *delay*.

### The exam content audit caught 4 more issues that automated testing couldn't see

After the crash was fixed, Robert manually clicked through the intermediate exam and caught a question with confusing wording (Q6: "I need to get on the bus at the next stop" — "at the next stop" naturally implies you're getting OFF). I then audited every question and found 3 more category mislabels (questions tagged as "translation" that didn't actually translate from Spanish) plus a missing `¿` typo.

**Lesson:** Automated testing verifies the system works. Only a human reading the content can verify the content is *good*. Every future course needs a manual content audit before launch.

---

## Architectural patterns established

### Course data structure
Every unit uses the same data file structure in `src/data/intermediate/unit-N.ts`:

```typescript
export const [sectionAData] = [...]   // unique per unit
export const dialogues = [...]
export const structureBlocks = [...]
export const errorCorrections = {...}
export const pronunciationDrills = [...]
export const vocabularyList = [...]
```

The page file imports these and passes them to the corresponding components. This pattern made the build mechanical and reviewable: each unit is one data file plus one Astro page (×2 for EN/ES).

### CourseProgress component
`courseId` prop allows separate localStorage namespaces per course. When we add the advanced course, it gets `courseId="advanced"` and the user's progress is tracked independently.

### Hub page
`/en/courses/` and `/es/cursos/` show all courses in one place. Adding a new course just means adding a new card to the hub.

---

## Files of record

| File | Purpose |
|---|---|
| `src/lib/i18n.ts` | All TKey routes for the intermediate course (lines 89-100) |
| `src/data/intermediate/types.ts` | Type definitions shared by all unit data files |
| `src/data/intermediate/units.ts` | Unit metadata array (titles, slugs, subtitles, grammar focus) |
| `src/data/intermediate/exam.ts` | Exam questions, examTiers data |
| `src/components/course/CourseExam.tsx` | Reusable exam component (refactored to be course-agnostic) |
| `src/components/course/PoliteFramesBuilder.tsx` etc | Section A components |

---

## What the next two courses should inherit from this build

1. **Modal awareness, but not modal-driven.** Intermediate established the modal foundation. Advanced and Executive should *use* modals correctly without needing dedicated units.
2. **Sentence-level focus.** Construction, precision, register — not vocabulary memorization or theme exploration.
3. **No phrasal verb fixation.** They appear naturally where useful, never as the spine.
4. **No slang or trend language.** Timeless sophisticated English only.
5. **No written English drills.** Spoken English is the only real focus.
6. **Reusable components for the bulk of interactivity, with one or two unique components per course for differentiation.** Advanced will use a smaller component library than intermediate (5 components for ~30 mini-exercises).
7. **JSON-serializable props always.** Never pass functions to React islands. The exam crash bug is a one-time lesson.
8. **Manual content audit before each course launch.** Every question, every translation, every category label. Robert reviews before merge.
