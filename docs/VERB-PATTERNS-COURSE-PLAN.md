# Verb Pattern Mastery — Course Plan

> **Project**: NY English Teacher — Verb Pattern Mastery (focused grammar master class)
> **Author**: Robert Cushman III / Claude (CushLabs AI)
> **Created**: 2026-07-07
> **Status**: In build — foundation + Level 1 first
> **Hub URL (EN)**: `nyenglishteacher.com/en/course/verb-patterns/`
> **Hub URL (ES)**: `nyenglishteacher.com/es/curso/patrones-verbales/`
> **Source material**: `ENGLISH VERB PATTERN MASTERY — PART 1.pdf` + `PART 2.pdf` (Brandon's class notes)

---

## 1. Why this course exists

Grammar is the named weakness of Robert's B1–B2 students. The single highest-frequency,
most credibility-damaging error class for Spanish speakers is **verb complementation** —
what structure a verb demands after it. Learners know the verb; they get the *pattern*
wrong because they translate the Spanish preposition:

| Spanish habit | Wrong English | Correct English |
|---|---|---|
| *llamé **a** mi jefe* | I called **to** my boss | I called my boss |
| *depender **de*** | I depend **of** my team | I depend **on** my team |
| *le expliqué el problema* | I explained **him** the problem | I explained the problem **to** him |
| *disfruto aprender* | I enjoy **to learn** | I enjoy **learning** |
| *me impidió terminar* | it prevented me **to finish** | it prevented me **from finishing** |

The course's thesis (straight from the source): **"You cannot choose the pattern by meaning.
You have to know the verb."** We teach verbs as *chunks* (`depend on someone`, `remind
someone to do something`), not as isolated words.

**Strategic fit:** This is a focused **master class** in the mold of `past-tenses` /
`drive-the-decision` — one skill, done thoroughly — NOT a new CEFR ladder (the site already
has Beginners → Elementary → Intermediate → Advanced → Executive). It's business-English
framed (manager, client, supplier, report, invoice), which feeds the executive funnel.

---

## 2. Product shape (decided 2026-07-07)

- **One hub, three progressive levels** — a single authoritative SEO hub with three
  difficulty tiers, plus bonus reference pages. (Not three separately-marketed courses.)
- **Interactive drills** — a new `PatternDrill` component (pick-the-pattern), plus reuse of
  the existing `ErrorCorrection` (tap-the-error) and `SentenceTransformer` (rewrite) drills,
  and `CourseExam` for the per-level exams.
- **Level 3 extends beyond the two PDFs** with genuine B2–C1 material (meaning-changing
  gerund/infinitive pairs, reporting verbs).

---

## 3. Architecture (mirrors `past-tenses`)

```
src/pages/en/course/verb-patterns/          src/pages/es/curso/patrones-verbales/
  index.astro          (hub)                  index.astro
  # Level 1 — Foundations
  direct-vs-to.astro                          objeto-directo-vs-to.astro
  remind-ask-tell.astro                       remind-ask-tell.astro
  give-send-explain.astro                     give-send-explain.astro
  foundations-exam.astro                      examen-fundamentos.astro
  # Level 2 — Patterns
  verb-preposition.astro                      verbo-preposicion.astro
  to-do-vs-doing.astro                        to-do-vs-doing.astro
  someone-to-do.astro                         alguien-to-do.astro
  someone-preposition.astro                   alguien-preposicion.astro
  patterns-exam.astro                         examen-patrones.astro
  # Level 3 — Mastery
  meaning-changers.astro                      cambios-de-significado.astro
  reporting-verbs.astro                       verbos-de-reporte.astro
  sounding-natural.astro                      sonar-natural.astro
  mastery-exam.astro                          examen-maestria.astro
  # Bonus reference
  diagnosis-table.astro                       tabla-de-diagnostico.astro
  gerund-or-infinitive.astro                  gerundio-o-infinitivo.astro
  top-traps.astro                             errores-mas-comunes.astro
```

- **i18n**: every page registers a `TKey` in `src/lib/i18n.ts` (union type + `routeFor.en` +
  `routeFor.es` + the ordered `tkeys` array). Hreflang is generated automatically from
  `routeFor` via `Base.astro` — no `astro.config.mjs` change needed (that's blog-only).
- **Data**: `src/data/verb-patterns/` — `types.ts`, `levels.ts` (level + lesson metadata),
  `drills.ts` (PatternDrill datasets), `corrections.ts` (ErrorCorrection datasets),
  `exams.ts` (CourseExam questions + tiers per level).
- **Components**: new `PatternDrill.tsx`; reuse `ErrorCorrection`, `SentenceTransformer`,
  `CourseExam`, `CourseProgress`, `AudioButton`.
- **Design language**: match `past-tenses` — emerald/slate hero, numbered sections,
  AudioButton on every model sentence, red-✗/green-✓ trap cards, `details` reveal Q&A.

---

## 4. Curriculum

### Level 1 — Foundations *(B1) — Part 1 PDF*
The core object-pattern decision: does the verb take the person **directly**, or need a
**preposition/particle**?

- **L1 · The Verb Decides** — `call/contact/help/email/text/visit/answer someone` (direct)
  vs `speak/talk/listen/reply/respond/apologize to someone`. Kills *"I called to my boss."*
- **L2 · Remind, Ask, Tell** — meaning-driven choice: `remind sb about/to`;
  `ask sb sth / for / about / to do`; `tell sb sth / about / to do`. The `about` vs `to do`
  contrast (topic vs action).
- **L3 · Give, Send, Show & the Explain Trap** — dative alternation (`give sb sth` = `give
  sth to sb`, both correct) vs the **explain/describe trap** (`explain sth to sb` only —
  never *"explain me this"*).
- **Foundations Exam** — 15 Q multiple choice across L1–L3.

### Level 2 — Patterns *(B1–B2) — Part 2 PDF*
- **L4 · Verb + Preposition** — the six families as chunks: `on` (depend/rely/focus/work/
  insist/agree), `for` (wait/look/apply/pay/prepare), `with` (agree/deal/meet), `about`
  (think/worry/complain/hear), `in` (believe/participate/succeed), `from` (hear/borrow/
  suffer/recover). Kills *"depend of," "focus in," "apply to a job."*
- **L5 · To Do vs Doing** — the gerund/infinitive split: `decide/plan/hope/promise/refuse/
  manage/fail/learn to do` vs `enjoy/avoid/finish/keep/consider/suggest/recommend/practice
  doing`. Kills *"I enjoy to learn," "I decided calling."*
- **L6 · Someone + To Do / make·let·help** — `want/need/expect/allow/advise/persuade/warn/
  require sb to do`; the causatives `make/let sb do` (no *to*) and `help sb (to) do`. Plus
  the `I need to` vs `I need you to` responsibility shift.
- **L7 · Someone + Preposition + Something** — `thank/blame sb for`, `apologize to sb for`,
  `introduce sb to sb`, `provide sb with sth / sth to sb`, `prevent sb from doing`.
- **Patterns Exam** — 20 Q.

### Level 3 — Mastery *(B2–C1) — extends beyond the PDFs*
- **L8 · When the Pattern Changes the Meaning** — verbs where gerund vs infinitive flips
  meaning: `stop to do` vs `stop doing`, `remember/forget to do` vs `doing`, `try to` vs
  `try doing`, `regret to say` vs `regret doing`, `go on`, `mean`. (New material.)
- **L9 · Reporting Verbs** — `say` vs `tell`, and `advise/suggest/recommend/insist/promise/
  warn/remind/admit/deny` in reported speech; the `suggest` trap (`suggest doing` /
  `suggest that sb do` — never *"suggest me to"* / *"suggest to do"*). (New material.)
- **L10 · Sounding Natural** — the full diagnosis method, register, and de-fossilizing the
  Spanish-interference errors under real business pressure (mixed high-stakes scenarios).
- **Mastery Exam** — 20 Q mixed, hardest tier; funnels to a strategy session.

### Bonus reference pages
- **The Pattern Diagnosis Table** — the master one-page cheat sheet (both PDFs' diagnosis
  tables merged). The killer linkable/SEO reference asset.
- **Gerund or Infinitive?** — quick-reference guide with the meaning-changing pairs.
- **Top Traps for Spanish Speakers** — the fossilized errors + the fix, in one place.

---

## 5. Drill design

- **PatternDrill (new)** — the signature interactive drill. A prompt (`ask / my boss / help`
  or a gap `I depend ___ my team`) with 3–4 pattern options; learner picks; instant
  ✓/✗ + the one-line diagnosis (*"want a thing → for; want an action → to do"*). Bilingual,
  AudioButton on the model answer. This trains the "know the verb, not the meaning" instinct.
- **ErrorCorrection (reuse)** — the PDFs' "Error Correction Challenge" verbatim source pool;
  `errorType: "literal-translation" | "preposition"` already exist.
- **SentenceTransformer (reuse)** — the give/send/show "rewrite the other way" alternation.
- **CourseExam (reuse)** — per-level multiple-choice with tiered scoring + funnel CTA.

---

## 6. SEO

- **Target keywords**: english verb patterns, verb + preposition list, gerund or infinitive,
  "explain to someone", "depend on not depend of", verb patterns for Spanish speakers,
  *patrones verbales en inglés*, *gerundio o infinitivo*, *preposiciones con verbos inglés*.
- **Schema**: `Course` + `FAQPage` on the hub; `LearningResource` + `BreadcrumbList` per
  lesson (via Base). The Diagnosis Table page is the primary link-magnet.
- **After publish** (per CLAUDE.md SEO automation): resubmit sitemap (GSC), Bing API submit,
  IndexNow submit, generate social content per new page batch.

---

## 7. Build order & status

1. ✅ Plan doc (this file)
2. ⏳ Data layer + i18n keys + `PatternDrill` component
3. ⏳ Hub landing (EN + ES)
4. ⏳ Level 1 (3 lessons + exam) — merge, then continue
5. ⏳ Level 2 (4 lessons + exam)
6. ⏳ Level 3 (3 lessons + exam)
7. ⏳ Bonus pages + SEO submission + social content

**Merge cadence**: merge per completed level (squash PR), don't pause between lessons.

## 8. Known tech debt to flag
- `CourseExam.tsx` hardcodes a "First Steps Into English" pass-celebration message (line
  ~312) regardless of course. Intermediate already inherits this wrong copy. Should be
  parameterized before this course's exams ship, or the message will be off-brand.

---

## 9. Spanish standard
All ES copy is **Mexican Professional Spanish** (`es-MX`). Grammar *terms* stay in English
(the students are learning English) but explanations are MX Spanish. No `vosotros`, no
`vale`, no `coger`; use `ustedes`, `celular`, `computadora`, etc. Audit before publish.
