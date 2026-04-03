# First Steps Into English — Beginner Course Plan

> **Project**: NY English Teacher — Beginner English Course for Spanish Speakers
> **Author**: Robert Cushman III / Claude (CushLabs AI)
> **Created**: 2026-03-31
> **Status**: All 10 Units Complete
> **Target URL**: `nyenglishteacher.com/en/course/beginners/`

---

## Table of Contents

1. [Strategic Vision](#strategic-vision)
2. [Source Material Analysis](#source-material-analysis)
3. [Pedagogical Method: Reverse-Engineered](#pedagogical-method-reverse-engineered)
4. [Course Curriculum — 10 Units](#course-curriculum--10-units)
5. [Unit 1 Deep Dive — "You Already Know English"](#unit-1-deep-dive--you-already-know-english)
6. [Azure TTS Integration](#azure-tts-integration)
7. [Pronunciation Lab Module](#pronunciation-lab-module)
8. [Technical Architecture](#technical-architecture)
9. [The Funnel — From Beginner to Executive Client](#the-funnel--from-beginner-to-executive-client)
10. [Marketing Angles & Copy](#marketing-angles--copy)
11. [SEO Strategy](#seo-strategy)
12. [Future Phases](#future-phases)

---

## Progress Report

### Completed
- **Unit 1**: "You Already Know English" — cognates, first sentences, 4 modal verbs, pronunciation (word stress) ✅
- **Unit 2**: "What You Like" — I like/don't like/would like, past tense (it was), myself/again/soon, pronunciation (B vs V) ✅
- **Unit 3**: "Talking About Others" — he/she can/wants/has to/would like, questions, himself/herself, pronunciation (Ch vs Sh) ✅
- **Course landing page** — EN + ES with unit roadmap ✅
- **Site navigation** — "Courses" added to main header nav (EN + ES) ✅
- **AudioButton voice preloading** — fixes first-click robotic voice ✅
- **Unit 4**: "Talking to Someone" — you forms, indirect objects, tell/give me/you/him/her, TH pronunciation ✅
- **Unit 5**: "What Just Happened" — recent past (I just + verb), cognates (-sion, -ive, -ous), -ed pronunciation ✅
- **Full bilingual** — all pages have EN + ES versions ✅

- **Unit 6**: "Everyone, Someone, No One" — indefinite pronouns, should/shouldn't, cognates (-al, -id, -ct), initial S pronunciation ✅
- **Unit 7**: "Together" — we can/want/have to/should/would like/just, cognates (-able x3 waves, 30 words), W pronunciation ✅
- **Unit 8**: "Feelings and Curiosity" — I feel like, I wonder, they forms, where questions, cognates (-ence, -ance, feelings), question intonation ✅

- **Unit 9**: "Telling Stories" — was/were, used to, told/said, that's why, story connectors (at first/suddenly/finally), cognates (-ous expansion, past verbs, time words), R sound pronunciation ✅
- **Unit 10**: "What's Coming Next" — going to (future), what does it mean?, full modal verb review, real-world scenarios, grand cognate review (1,500+ words), connected speech (gonna/wanna/hafta) ✅

### COURSE COMPLETE

### Technical Debt
- Azure TTS integration planned (currently using browser SpeechSynthesis)
- Progress tracking uses localStorage (no user accounts yet)
- Pronunciation lab standalone page not yet built

### Stats
- **Pages generated**: ~357 (22 new course pages: 10 EN + 10 ES units + 2 landing pages)
- **React components**: 7 (CognateDiscovery, SentenceBuilder, PronunciationDrill, ConnectorChallenge, SelfTest, AudioButton, CourseProgress)
- **Cognate words taught**: ~280 across 18+ pattern categories
- **Date**: 2026-04-03

---

## Strategic Vision

### Why Build a Beginner Course?

Robert Cushman III — NY English Teacher — is known for executive English coaching and high-stakes communication training for senior professionals. A beginner course seems like a departure. It's actually the opposite: **it's a strategic expansion of the top of the funnel.**

**The case for this course:**

- **Backlink engine**: Free, high-quality beginner content attracts links from ESL directories, education blogs, language learning communities, and social shares. Every backlink strengthens domain authority for the executive coaching pages too.
- **Search volume**: Keywords like "learn English for Spanish speakers", "free English course", "English for beginners" have massive search volume with surprisingly low competition from quality interactive content.
- **Brand credibility**: Showing you can teach at ALL levels — from zero to the boardroom — signals depth and expertise that competitors with narrow positioning can't match.
- **Funnel breadth**: Someone who starts as a beginner today could be an executive coaching client in 2-5 years. Even if they never convert to premium services, they generate traffic, social proof, and authority signals.
- **Showcases innovation**: The Azure TTS integration creates a genuine differentiator. Nobody else is doing interactive pronunciation drilling with neural text-to-speech specifically designed for Spanish speakers learning English.
- **Content asset**: Each unit is a standalone, linkable, shareable piece of content that lives on your domain permanently.

### What Makes This Different

This isn't another "learn English" course. This is a **method** — reverse-engineered from a proven system ("Spanish With Paul") that has helped thousands of learners — adapted specifically for **Spanish speakers learning English**, with a **neural TTS pronunciation layer** that no competitor offers.

The method works because it starts from **what the learner already knows** (cognates — words that are nearly identical in Spanish and English), builds confidence from minute one, and uses a progressive sentence-building approach that makes grammar invisible.

---

## Source Material Analysis

### Spanish With Paul — What We Studied

The source material consists of:

| File | Contents | Key Insights |
|------|----------|-------------|
| `first-steps-wordlist.pdf` | 1,500+ cognates across 18 categories | The vocabulary foundation — words like possible/posible, information/información, university/universidad |
| `mini-course-1.pdf` through `mini-course-10.pdf` | 10 progressive lesson PDFs | The sentence-building methodology — each lesson adds complexity on top of the last |
| `superglue-pdf.pdf` | Connector words (so, therefore, however, already, even though) | The "glue" that lets learners connect simple sentences into complex ones |
| `Pronunciation Problems For Spanish.docx` | Academic analysis of Spanish-speaker pronunciation pitfalls | Ship/sheep, b/v, "Espain", th sounds, word stress, sentence rhythm — the exact problems Azure TTS can solve |
| `Spanish with Paul funnel page.pdf` | Sales/landing page screenshot | Marketing and positioning reference |

### The 18 Cognate Categories (From Wordlist)

These are the backbone of the vocabulary system. Each category groups words by their shared ending pattern:

| Category | Pattern | Example (EN → ES) | Word Count |
|----------|---------|-------------------|------------|
| 1 | -ible | possible → posible | 39 |
| 2 | -able | probable → probable | 87 |
| 3 | -al | dental → dental | 264 |
| 4 | -tion / -ción | information → información | 323 |
| 5 | -ist / -ista | dentist → dentista | 55 |
| 6 | -ant / -ante | elegant → elegante | 66 |
| 7 | -ic / -ico | classic → clásico | 246 |
| 8 | -ary / -ario | vocabulary → vocabulario | 57 |
| 9 | -ment / -mento | document → documento | 38 |
| 10 | -ity / -idad | identity → identidad | 223 |
| 11 | -sion / -sión | confession → confesión | 80 |
| 12 | -ent / -ente | innocent → inocente | 106 |
| 13 | -ive / -ivo | active → activo | 161 |
| 14 | -id / -ido | rapid → rápido | 29 |
| 15 | -ct / -cto | correct → correcto | 45 |
| 16-17 | -ence/-ance / -encia/-ancia | difference → diferencia | 114 |
| 18 | -ous / -oso | delicious → delicioso | 69 |

**Total: ~1,500+ words that Spanish speakers essentially already "know"**

### The 5 Core Principles of Paul's Method

1. **Cognate Explosion** — Start with what the learner already knows. Build immediate confidence through recognition.
2. **Progressive Sentence Assembly** — Stack building blocks. Start with "it is" and end the first lesson constructing complex sentences with multiple clauses.
3. **Modal Verb Backbone** — Six modal structures (can, want, need, have to, should, would like) carry 90% of conversational needs.
4. **Super Glue Connectors** — Small words (so, therefore, however, but, because) transform simple sentences into sophisticated speech.
5. **Constant Spiral Review** — Every lesson re-incorporates vocabulary and structures from all previous lessons. Nothing is learned and forgotten.

### How Each Mini-Course Builds on the Last

| Course | Subject Focus | Grammar (Hidden) | New Modal Verbs |
|--------|--------------|-------------------|-----------------|
| MC1 | "It is / It isn't" + basic descriptions | Negation, adjectives, infinitives | need, want, have to, can |
| MC2 | "I like / I would like" + past tense | Conditional, simple past | would like (me gusta/gustaría) |
| MC3 | "He/She can, wants, has to" | Third person conjugation | — (3rd person forms) |
| MC4 | "You can, want, have to" + indirect objects | Second person, object pronouns | — (2nd person forms) |
| MC5 | "I just did X" (recent past) | Recent past tense | "just" (acabo de) |
| MC6 | Everyone/Someone/No one + should | Indefinite pronouns, should | should, should be able to |
| MC7 | "We can, want, have to" | First person plural | — (1st person plural) |
| MC8 | "I feel like" + "I wonder" + they | Expressions, 3rd person plural | feel like, wonder |
| MC9 | Past stories + narrative | Extended past tense | — (past tense expansion) |
| MC10 | "Going to" future + "What does it mean?" | Future tense, meaning queries | going to |

---

## Pedagogical Method: Reverse-Engineered

### Why This Works Even Better for English Learners

Paul's method teaches Spanish to English speakers by exploiting cognates — words that look and sound nearly the same in both languages. The genius is that **this works identically in reverse**.

A Spanish speaker looking at these word pairs has the EXACT same "aha!" moment:

- `posible` → `possible` ✓
- `información` → `information` ✓
- `universidad` → `university` ✓
- `elegante` → `elegant` ✓

**But our version is actually MORE powerful because:**

1. **The pronunciation gap is bigger (and solvable)**: Spanish speakers reading English cognates will recognize the words visually but may not know how to pronounce them. Azure TTS solves this instantly — they can hear the correct American English pronunciation modeled at natural speed.

2. **The pronunciation document is our secret weapon**: We have an academic analysis of every single pronunciation pitfall Spanish speakers face. We can build targeted drills into each unit.

3. **Spanish speakers need listening practice most**: The pronunciation research states explicitly: *"Spanish speakers often have listening comprehension far below their other skills."* An audio-first course with TTS is exactly what they need.

4. **Sentence rhythm is the hidden game-changer**: English is stress-timed (important words get emphasized, others get squished). Spanish is syllable-timed (every syllable gets equal time). TTS can model this rhythm difference in every single example sentence.

### Our Method: "The Recognition Method"

We're naming this approach. It deserves a name because it's genuinely different:

**The Recognition Method** — Start from what you already know. Recognize the English you already carry inside your Spanish. Build confidence before grammar. Let your ears learn before your eyes.

Core tenets:
1. **Recognition before production** — See the word, hear the word, recognize the word, THEN say the word
2. **Sentences before rules** — Build sentences from day one. Grammar rules emerge from patterns, not textbooks
3. **Audio-first learning** — Every word and sentence has TTS audio. Listen, absorb, repeat
4. **Pronunciation coaching built-in** — Spanish-specific pronunciation alerts woven into every lesson
5. **Progressive complexity** — Start with "It is possible" and end with "I need to know if it's possible to do it tomorrow because it's very important"

---

## Course Curriculum — 10 Units

### Unit 1: "You Already Know English"
**Goal**: Blow the student's mind with how much English they already know. Build first sentences.

**Cognate categories introduced**: 1 (-ible), 2 (-able), 3 (-al)
**Filler words**: it is, it isn't, for me, and, but, now, very
**Modal verbs**: I need, I want, I have to, I can
**Key verbs**: to be (here), to do (it), to know, to go out, to study

**Sentence progression**:
- `It is possible.`
- `It is not possible.`
- `It is important for me.`
- `It is something important.`
- `Now it is very important for me.`
- `I need to know if it is possible.`
- `I want to do it today because it is very important.`
- `I need to know if it is possible to do it now because it is very important.`

**Pronunciation focus**: Short vs. long vowels (bit/beat), the schwa sound, word stress in cognates

---

### Unit 2: "What You Like"
**Goal**: Express preferences, introduce conditional, basic past tense.

**Cognate categories introduced**: 4 (-tion), 5 (-ist)
**New vocabulary**: food, every day, tonight, with you, the book, yesterday, again, soon
**Modal verbs**: I like, I don't like, I would like
**Key verbs**: to eat, to read, to swim, to speak, to work, to see

**Sentence progression**:
- `I like it here.`
- `I like the food here.`
- `I would like to eat here tonight.`
- `I would like to know if it's possible.`
- `It was good for me.`
- `It was fantastic to see you yesterday and I would like to do it again.`

**Pronunciation focus**: B vs. V distinction, "food" vowel sound

---

### Unit 3: "Talking About Others"
**Goal**: Third person (he/she/it) with all modal verbs learned so far.

**Cognate categories introduced**: 6 (-ant), 7 (-ic)
**New vocabulary**: with me, to call me, busy, himself/herself, urgent
**Modal verbs**: he/she can, wants, has to, would like
**Key verbs**: to call, to wait

**Sentence progression**:
- `He can be here tomorrow.`
- `She wants to call me later.`
- `It's urgent and she has to call me tonight.`
- `He would like to know if she can be here today.`
- `She can do it herself.`
- `I need to be here because she cannot do it herself.`

**Pronunciation focus**: "Ch" vs. "Sh" sounds (cheese/she's), TH sounds (thing/bathe)

---

### Unit 4: "Talking to Someone"
**Goal**: Second person (you) forms, indirect objects, what happened.

**Cognate categories introduced**: 8 (-ary), 9 (-ment)
**New vocabulary**: why, the reason why, the truth, what happened, last night, to tell/give me/you/him/her
**Modal verbs**: you can, you want, you have to, you should
**Key verbs**: to explain, to tell, to give

**Sentence progression**:
- `You have to tell me the truth.`
- `Can you tell me tonight if you want?`
- `I want to tell you something important.`
- `You have to tell me what happened last night and I want the truth.`

**Pronunciation focus**: "Y" vs. "J" sounds (yacht/jot), final consonant clusters

---

### Unit 5: "What Just Happened"
**Goal**: Recent past tense, narrative about events.

**Cognate categories introduced**: 10 (-ity), 11 (-sion)
**New vocabulary**: about, the problem, the house, at the party, with him/her, that
**Modal verbs**: I just (+ verb), he/she just (+ verb)
**Key verbs**: to discover, to arrive, to see him/her

**Sentence progression**:
- `I just ate.`
- `I just found out the truth today.`
- `He just told me he can't be here tomorrow because he has to work.`
- `I just saw her at the party last night.`
- `I would like to go with you but I can't because I just found out I have to be here all day.`

**Pronunciation focus**: Past tense "-ed" endings (three pronunciations: /t/, /d/, /ɪd/)

---

### Unit 6: "Everyone, Someone, No One"
**Goal**: Indefinite pronouns + should/shouldn't.

**Cognate categories introduced**: 12 (-ent), 13 (-ive)
**New vocabulary**: everyone, someone, no one, to buy, expensive, so/therefore
**Modal verbs**: should, should be able to, shouldn't
**Key verbs**: to buy, to explain, to wait

**Sentence progression**:
- `Nobody wants to work today.`
- `Everyone wants to see you.`
- `Someone should explain the reason why.`
- `I should be able to do it tomorrow.`
- `You shouldn't go out with him tonight.`

**Pronunciation focus**: "S" at the start of words (no "es-" prefix), unstressed syllables

---

### Unit 7: "Together"
**Goal**: First person plural (we) with all modal verbs.

**Cognate categories introduced**: 14 (-id), 15 (-ct)
**New vocabulary**: to have dinner, there, again, every day, all day
**Modal verbs**: we can, we want, we have to, we don't have to
**Key verbs**: to go, to have dinner

**Sentence progression**:
- `We can go out tonight.`
- `We can't go out tonight because we have to study.`
- `We want to have dinner here tonight.`
- `We want to know what happened last night.`
- `It's not urgent so we can do it tomorrow.`

**Pronunciation focus**: "W" sound (not "gw"), linking words together in natural speech

---

### Unit 8: "Feelings and Curiosity"
**Goal**: Express feelings, wonder about things, introduce "they".

**Cognate categories introduced**: 16-17 (-ence/-ance)
**New vocabulary**: to the beach, a film, where is it, to ask
**Modal verbs**: I feel like, I wonder, they can/want/have to
**Key verbs**: to ask, to feel

**Sentence progression**:
- `I feel like going out tonight.`
- `I don't know why but I don't feel like speaking with her today.`
- `I wonder if we can have dinner here tonight.`
- `I don't know where it is so I need to ask.`
- `They want to know where it is.`

**Pronunciation focus**: Sentence intonation (questions vs. statements), polite tone

---

### Unit 9: "Telling Stories"
**Goal**: Extended past tense, narrative structures.

**Cognate categories introduced**: 18 (-ous)
**New vocabulary**: last week, what he/she said, that's why, a long time ago
**Key structures**: was/were, used to, when I was...

**Sentence progression**:
- `It was impossible yesterday.`
- `I used to work here.`
- `She told me what happened and I was surprised.`
- `That's why nobody wanted to be there.`
- `I used to think it was impossible but now I know it's possible.`

**Pronunciation focus**: "R" sound (not trilled), "er" schwa sound in unstressed syllables

---

### Unit 10: "What's Coming Next"
**Goal**: Future tense, asking for meaning, vocabulary explosion.

**All remaining cognate categories reviewed**
**New vocabulary**: on time, expensive, to help, to happen, to arrive
**Modal verbs**: I'm going to, he/she's going to
**Key structures**: What does it mean?, to arrive, to happen

**Sentence progression**:
- `I'm going to do it tomorrow.`
- `She's going to call me tonight.`
- `No one is going to buy it because it's too expensive.`
- `Everyone is going to arrive soon.`
- `I don't know what it means.`
- `Can you tell me what it means please?`

**Pronunciation focus**: Connected speech, natural rhythm, stress-timed patterns

---

## Unit 1 Deep Dive — "You Already Know English"

### Learning Objectives
By the end of Unit 1, the student will be able to:
1. Recognize 100+ English words they already know from Spanish
2. Construct simple affirmative and negative sentences
3. Use 4 modal verbs (need, want, have to, can) with infinitives
4. Form basic questions using intonation
5. Pronounce cognates with correct English stress patterns

### Section-by-Section Breakdown

#### Section A: The Cognate Discovery (5-10 minutes)
**Purpose**: Confidence explosion. "You already know more English than you think."

Present cognates in 3 waves:
1. **Identical twins** (words that are spelled almost the same):
   - possible / posible
   - horrible / horrible
   - invisible / invisible
   - flexible / flexible
   - terrible / terrible

2. **Close cousins** (small spelling changes with predictable patterns):
   - important / importante → (-ant → -ante)
   - elegant / elegante
   - information / información → (-tion → -ción)
   - university / universidad → (-ity → -idad)

3. **Sound-alikes** (different spelling, similar pronunciation):
   - classic / clásico
   - electric / eléctrico
   - music / música

Each word has:
- Written form (EN and ES side by side)
- Azure TTS audio button (hear it in American English)
- Pronunciation alert where applicable (e.g., "In English, 'possible' is stressed on the FIRST syllable: POSS-ible, not pos-SI-ble")

#### Section B: Your First Sentences (10-15 minutes)
**Purpose**: From words to sentences. The building-block method.

Progressive build:
```
Block 1: It is
→ It is possible.
→ It is important.
→ It is normal.

Block 2: It is not
→ It is not possible.
→ It is not important.
→ It isn't normal.

Block 3: For me
→ It is important for me.
→ It isn't possible for me.
→ It is something important for me.

Block 4: Describing more
→ It is very important.
→ It is very good.
→ It is fantastic here.
→ It is perfect like this.

Block 5: Questions (just change your voice!)
→ Is it important? ↗
→ Is it for me? ↗
→ Is it normal like this? ↗
```

Each block includes:
- TTS audio for every sentence (natural speed + slow speed)
- Spanish translation shown (can be toggled on/off)
- Listen → Read → Repeat flow

#### Section C: Power Verbs (15-20 minutes)
**Purpose**: Unlock the ability to express needs, desires, obligations, and abilities.

```
I need → necesito
I need to know. → Necesito saber.
I need to be here. → Necesito estar aquí.

I want → quiero
I want to do it. → Quiero hacerlo.
I want to know if it is possible. → Quiero saber si es posible.

I have to → tengo que
I have to be here today. → Tengo que estar aquí hoy.
I have to do it now. → Tengo que hacerlo ahora.

I can → puedo
I can do it later. → Puedo hacerlo más tarde.
I can be here tomorrow. → Puedo estar aquí mañana.
```

Then combine with earlier material:
```
I need to know if it is possible to do it today.
I want to do it but it is impossible.
I have to be here tonight because it is very important.
I can do it tomorrow or later.
```

#### Section D: Connector Challenge (5-10 minutes)
**Purpose**: Glue simple sentences into complex ones.

Introduce: **because, if, and, but, or**

```
I want to do it → but it is impossible.
I have to be here → because it is important.
I need to know → if it is possible.
I can do it today → or tomorrow.
It is important → and I need to know.
```

Build to the Unit 1 "boss sentence":
> *"I need to know if it is possible to do it now because it is very important for me."*

(Student hears it in TTS, sees the Spanish equivalent, then tries to produce it)

#### Section E: Pronunciation Lab — Unit 1 (5 minutes)
**Focus**: Word stress in cognates

Spanish speakers tend to stress cognates the Spanish way. This section drills the correct English stress:

| Word | Spanish Stress | English Stress | Audio |
|------|---------------|----------------|-------|
| possible | po-SI-ble | POSS-ible | 🔊 |
| important | im-por-TAN-te | im-POR-tant | 🔊 |
| impossible | im-po-SI-ble | im-POSS-ible | 🔊 |
| fantastic | fan-TAS-ti-co | fan-TAS-tic | 🔊 |
| information | in-for-ma-CION | in-for-MA-tion | 🔊 |

Include a "stress challenge" — hear two pronunciations, which one is correct English?

#### Section F: Self-Test (5 minutes)
**Purpose**: Reinforce learning through recall.

Two modes:
1. **English → Spanish**: See the English sentence, produce the Spanish (confirms comprehension)
2. **Spanish → English**: See the Spanish sentence, produce the English (builds production)

All with TTS support and instant reveal.

#### Section G: Unit Summary & Vocabulary List
Complete word list from the unit with TTS audio for each:

**Words learned**: it is, it isn't, for me, now, today, something, nothing, very, good, perfect, fantastic, here, because, if, possible, impossible, important, normal, and, but, or, everything, later, tomorrow, tonight, for

**Verbs learned**: to be (here), to do (it), to know, to go out, to study

**Modal verbs**: I need, I want, I have to, I can

**Cognates recognized**: 50+ from categories 1-3

---

## Azure TTS Integration

### Why Azure Neural Voices

- **Natural prosody**: Azure neural TTS voices sound like real humans, not robots. Critical for modeling correct intonation and rhythm.
- **Multiple voice options**: Male and female American English voices give variety.
- **Adjustable speed**: Can slow down for learning without sounding distorted (SSML `<prosody rate>` tag).
- **Stress and emphasis**: SSML allows us to emphasize specific syllables for pronunciation drilling.
- **Cost-effective**: Pay per character synthesized. Pre-generate audio files for static content; real-time TTS only for dynamic/user-input features.

### Implementation Options

**Option A: Pre-generated Audio Files (Recommended for V1)**
- Generate all audio clips at build time using Azure TTS API
- Store as MP3/OGG files in the assets directory
- Zero runtime cost, instant playback, works offline
- Estimated: ~2,000 audio clips for all 10 units

**Option B: Client-side Real-time TTS**
- Use Azure Speech SDK in the browser
- Allows dynamic content (user-typed sentences read aloud)
- Requires API key management and has per-request costs
- Better for Phase 2 (interactive exercises)

**Option C: Hybrid (Best long-term)**
- Pre-generated for all course content (sentences, vocabulary)
- Real-time TTS for the pronunciation lab exercises and user input
- Progressive enhancement — course works with pre-gen, real-time adds interactivity

### Recommended Azure Voices

| Voice | ID | Use Case |
|-------|-----|----------|
| Jenny (Female) | `en-US-JennyNeural` | Primary course voice — clear, friendly |
| Guy (Male) | `en-US-GuyNeural` | Alternate voice for variety |
| Aria (Female) | `en-US-AriaNeural` | Pronunciation lab — more deliberate |

### SSML Examples

**Normal sentence:**
```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/Math/MathML" xml:lang="en-US">
  <voice name="en-US-JennyNeural">
    It is very important for me.
  </voice>
</speak>
```

**Slow speed for learning:**
```xml
<speak version="1.0" xml:lang="en-US">
  <voice name="en-US-JennyNeural">
    <prosody rate="-30%">
      I need to know if it is possible.
    </prosody>
  </voice>
</speak>
```

**Stress emphasis for pronunciation:**
```xml
<speak version="1.0" xml:lang="en-US">
  <voice name="en-US-AriaNeural">
    <prosody rate="-20%">
      <emphasis level="strong">POSS</emphasis>-ible, not po-<emphasis level="strong">SI</emphasis>-ble.
    </prosody>
  </voice>
</speak>
```

---

## Pronunciation Lab Module

### Spanish-Speaker Pronunciation Pitfalls (From Research)

Based on the academic pronunciation analysis we studied, here are the key areas to address, prioritized by impact on comprehension:

#### Tier 1: Causes Misunderstanding (Must Fix)

| Problem | Example | Drill Type |
|---------|---------|-----------|
| Short/long vowel pairs | ship/sheep, bit/beat, pull/pool | Minimal pair listening + TTS |
| Initial "s" (no "es-") | "school" not "eschool", "Spain" not "Espain" | Hissing exercise + TTS |
| B/V distinction | "berry" vs "very" | Minimal pair + mouth position |
| Ch/Sh confusion | "cheese" vs "she's" | Explosive vs smooth sound |
| Word stress on cognates | POSS-ible not pos-SI-ble | Stress pattern drills |
| Sentence rhythm | Stress-timed vs syllable-timed | Full sentence TTS at natural speed |

#### Tier 2: Causes Strain for Listener (Should Fix)

| Problem | Example | Drill Type |
|---------|---------|-----------|
| TH sounds | "thing" vs "sing", "bathe" vs "bade" | Tongue position + TTS |
| Schwa sound | The "er" in "computer", "teacher" | Recognition + production |
| Y/J confusion | "yacht" vs "jot" | Minimal pair |
| Final consonant clusters | "advanced" (3 syllables? 2?) | Syllable counting + TTS |
| Cat/cut vowels | The subtle difference | Minimal pair |

#### Tier 3: Accent Reduction (Nice to Have)

| Problem | Example | Drill Type |
|---------|---------|-----------|
| H sound | "hope" — like breathing on glasses | Physical technique |
| R as W perception | English R sounds soft to Spanish ears | Awareness |
| Z sound | "zoo" — Spanish has no Z sound | Production drill |

### Integration Into Units

Each unit includes a 5-minute pronunciation lab focused on sounds relevant to that unit's vocabulary:

| Unit | Pronunciation Focus | Why This Unit |
|------|-------------------|---------------|
| 1 | Word stress in cognates | First exposure to cognate pronunciation |
| 2 | B/V distinction | "very" and "vocabulary" appear |
| 3 | Ch/Sh sounds | "she" introduced heavily |
| 4 | TH sounds | "the truth", "that" |
| 5 | Past tense -ed endings | "discovered", "arrived", "happened" |
| 6 | Initial S (no "es-") | "someone", "should", "study" |
| 7 | W sound | "we", "want", "with", "work" |
| 8 | Sentence intonation | Questions vs. statements focus |
| 9 | Schwa/unstressed syllables | Narrative requires natural rhythm |
| 10 | Connected speech | Full fluency focus |

---

## Technical Architecture

### URL Structure

```
/en/course/beginners/                  → Course landing page (overview + start)
/en/course/beginners/unit-1/           → Unit 1: You Already Know English
/en/course/beginners/unit-2/           → Unit 2: What You Like
...
/en/course/beginners/unit-10/          → Unit 10: What's Coming Next
/en/course/beginners/pronunciation/    → Standalone pronunciation lab

/es/curso/principiantes/               → Spanish mirror (UI in Spanish)
/es/curso/principiantes/unidad-1/      → Unit 1 in Spanish UI
...
```

### i18n Integration

New TKeys to add to `src/lib/i18n.ts`:

```typescript
| "course/beginners"
| "course/beginners/unit-1"
| "course/beginners/unit-2"
| "course/beginners/unit-3"
| "course/beginners/unit-4"
| "course/beginners/unit-5"
| "course/beginners/unit-6"
| "course/beginners/unit-7"
| "course/beginners/unit-8"
| "course/beginners/unit-9"
| "course/beginners/unit-10"
| "course/beginners/pronunciation"
```

### File Structure

```
src/
├── pages/
│   ├── en/course/beginners/
│   │   ├── index.astro              → Course landing/overview
│   │   ├── unit-1.astro             → Unit 1 page
│   │   └── ...
│   └── es/curso/principiantes/
│       ├── index.astro
│       ├── unidad-1.astro
│       └── ...
├── components/
│   └── course/
│       ├── CourseNav.astro           → Course-specific navigation (progress bar, prev/next)
│       ├── CognateCard.tsx           → Interactive cognate display with TTS (React)
│       ├── SentenceBuilder.tsx       → Progressive sentence builder with TTS (React)
│       ├── PronunciationDrill.tsx    → Listen/compare pronunciation exercise (React)
│       ├── SelfTest.tsx              → Flashcard-style self-testing (React)
│       ├── AudioButton.tsx           → Reusable TTS play button (React)
│       ├── VocabList.tsx             → Unit vocabulary reference with audio (React)
│       ├── ProgressTracker.tsx       → Unit completion tracking (React)
│       └── UnitLayout.astro          → Shared layout for unit pages
├── data/
│   └── course/
│       ├── units.ts                  → Unit metadata (titles, descriptions, order)
│       ├── unit-1.ts                 → Unit 1 content (cognates, sentences, vocab)
│       ├── unit-2.ts                 → ...
│       └── pronunciation.ts          → Pronunciation drill data
├── lib/
│   └── tts.ts                        → Azure TTS helper (API calls or audio file mapping)
└── assets/
    └── audio/
        └── course/
            ├── unit-1/               → Pre-generated audio files for Unit 1
            ├── unit-2/
            └── ...
```

### Key React Components

#### `CognateCard.tsx`
- Shows English word, Spanish word, category badge
- Play button for TTS audio
- Pronunciation alert tooltip (when applicable)
- Hover/tap to reveal translation
- Animations for "discovery" effect

#### `SentenceBuilder.tsx`
- Left column: Building blocks appearing one at a time
- Right column: Growing sentence
- Each addition highlights the new element
- TTS plays the full sentence after each addition
- Spanish translation toggle
- "Try it yourself" mode — hide English, show Spanish

#### `PronunciationDrill.tsx`
- Minimal pair display (ship/sheep)
- Two audio buttons — listen to both
- "Which one did you hear?" quiz mode
- TTS at multiple speeds
- Visual mouth/tongue position hints

#### `SelfTest.tsx`
- Flashcard interface
- Spanish → English and English → Spanish modes
- Spaced repetition tracking (localStorage)
- Score display
- "Reveal" animation

### Course Navigation Component

The `CourseNav` component provides:
- **Progress bar**: Visual progress through 10 units
- **Current unit indicator**: Which unit you're on
- **Previous/Next buttons**: Navigate between units
- **Unit list dropdown**: Jump to any unit
- **Completion badges**: Checkmarks for completed units
- **Back to course overview**: Link to landing page

This sits at the TOP of each unit page (below the main site header) and at the BOTTOM as a fixed footer navigation.

### State Management

- **Progress tracking**: localStorage (no login required)
  - `course_beginners_progress`: `{ completedUnits: [1, 2, 3], currentUnit: 4, lastVisited: "2026-04-01" }`
- **Self-test scores**: localStorage
  - `course_beginners_scores`: `{ unit1: { attempts: 3, bestScore: 85 }, ... }`
- **No database required for V1** — if we add user accounts later, migrate to Neon

---

## The Funnel — From Beginner to Executive Client

### The Four-Level Course Path

```
Level 1: BEGINNER (Free)           ← We're building this
"First Steps Into English"
Target: A1-A2 (CEFR)
10 units + pronunciation lab
100% free, no login required

         ↓ CTA: "Ready for more?"

Level 2: INTERMEDIATE (Free/Gated)  ← Future phase
"Building Fluency"
Target: B1-B2 (CEFR)
Topics: Travel, work basics, social situations
Might gate with email capture

         ↓ CTA: "Take your English to work"

Level 3: ADVANCED (Gated/Paid)       ← Future phase
"Professional English"
Target: B2-C1 (CEFR)
Topics: Meetings, presentations, email, phone calls
Email capture required, possibly paid

         ↓ CTA: "Lead in English"

Level 4: EXECUTIVE (Paid/Coaching)    ← Existing business
"Executive Communication"
Target: C1-C2 (CEFR)
1-on-1 coaching with Robert
The premium offering
```

### Conversion Points Within the Beginner Course

- **Unit 5 completion**: Soft CTA — "You've come this far! Want personalized feedback? Book a free 15-minute assessment."
- **Unit 10 completion**: Strong CTA — "You've finished First Steps! Ready for the next level? Here's what intermediate looks like."
- **Every unit**: Sidebar/footer CTA to the main NY English Teacher services for anyone who's clearly beyond beginner level
- **Pronunciation lab**: "For personalized pronunciation coaching, book a session with Robert."

---

## Marketing Angles & Copy

### Headline Options for the Landing Page

**Primary (recommended):**
> **You Already Speak English. You Just Don't Know It Yet.**

**Alternates:**
> **1,500 English Words You Already Know — Let's Unlock Them.**
>
> **From Zero to Conversation in 10 Lessons. Free.**
>
> **The English Course That Starts With What You Already Know.**
>
> **Stop Studying Grammar. Start Speaking English.**

### Value Proposition Copy

**For the course landing page:**

> Most English courses start by making you feel like you know nothing. We start by showing you how much you already know.
>
> If you speak Spanish, you already carry over 1,500 English words inside you — words like *possible*, *information*, *university*, *elegant*, *fantastic*. You recognize them because they come from the same Latin roots.
>
> **First Steps Into English** uses these words as your launchpad. In the first lesson alone, you'll go from single words to complex sentences like *"I need to know if it's possible to do it today because it's very important."*
>
> No grammar textbooks. No boring drills. No feeling lost.
>
> Just recognition, confidence, and real sentences you can use today.

**For the TTS differentiator:**

> Every word and every sentence in this course comes with **professional American English audio** powered by neural voice technology. You don't just read English — you hear exactly how it should sound.
>
> And because we know the specific pronunciation challenges Spanish speakers face (like the difference between "ship" and "sheep"), we've built targeted pronunciation coaching into every single lesson.

### Social Proof / Authority Angles

> **Built by Robert Cushman III**, a professional English coach based in Mexico who has trained executives at Fortune 500 companies, startup founders, and senior professionals. This beginner course uses the same proven methodology — adapted for learners just starting their English journey.

> **The Recognition Method** — a research-backed approach that leverages the 1,500+ cognates between Spanish and English to build confidence before grammar. Based on proven techniques used by language educators worldwide, enhanced with cutting-edge speech technology.

### Blog Post Ideas for Promotion

1. "The 1,500 English Words You Already Know (If You Speak Spanish)"
2. "Why Most English Courses Fail Spanish Speakers — And What Actually Works"
3. "Ship vs. Sheep: The Pronunciation Guide Every Spanish Speaker Needs"
4. "From 'Impossible' to 'Posible': How Cognates Unlock English Faster"
5. "Why Your Listening Comprehension Lags Behind (And How to Fix It)"
6. "The Grammar Myth: Why You Don't Need Rules to Start Speaking English"
7. "How Neural Voice Technology Is Changing Language Learning"
8. "10 English Sounds That Don't Exist in Spanish (And How to Master Them)"

### Email Sequence (When We Gate Later Levels)

1. **Welcome**: "You just unlocked 1,500 English words" (link to Unit 1)
2. **Day 3**: "Did you try the pronunciation lab?" (link to Pronunciation Lab)
3. **Day 7**: "You're further than you think" (progress encouragement + Unit 2 push)
4. **Day 14**: "Most people quit here. Don't." (motivation + Unit 3-5 push)
5. **Day 30**: "Ready for the next step?" (intermediate course or coaching CTA)

---

## SEO Strategy

### Target Keywords

**Primary keywords (high volume, medium competition):**
- learn english for spanish speakers
- english course for beginners
- free english course online
- english for spanish speakers free
- aprende inglés gratis (for ES version)
- curso de inglés para principiantes

**Long-tail keywords (lower volume, lower competition):**
- english words similar to spanish
- cognates english spanish list
- pronunciation problems spanish speakers english
- how to learn english if you speak spanish
- free english lessons for spanish speakers online
- english pronunciation practice for spanish speakers

**Branded/unique keywords (we can own these):**
- recognition method english
- ny english teacher beginner course
- first steps into english

### Page-Level SEO

Each unit page targets specific long-tail keywords:
- Unit 1: "english words similar to spanish", "cognates english spanish"
- Unit 2: "basic english phrases for spanish speakers"
- Pronunciation Lab: "english pronunciation for spanish speakers"
- Landing page: "free english course for spanish speakers"

### Structured Data

- **Course schema** (JSON-LD) on landing page
- **LearningResource schema** on each unit
- **BreadcrumbList** on all pages
- **FAQ schema** on landing page (common questions about the course)

### Internal Linking Strategy

- Blog posts about cognates, pronunciation, etc. → link to relevant course units
- Course units → link to relevant blog posts for deeper reading
- Course completion → link to intermediate resources and coaching services
- Resources hub → add course as a featured resource

---

## Future Phases

### Phase 2: Intermediate Course — "Building Fluency"
- Past tenses in depth
- Phrasal verbs (the Spanish speaker's nemesis)
- Conditional structures
- Travel, shopping, social English
- More complex pronunciation (connected speech, weak forms)

### Phase 3: Advanced Course — "Professional English"
- Business vocabulary beyond cognates
- Meeting participation
- Email writing
- Phone and video calls
- Presentation basics
- Cultural communication differences

### Phase 4: Executive Communication Course
- High-stakes presentations
- Negotiation in English
- Leadership communication
- Boardroom English
- C-suite language and register
- This is essentially a gateway to Robert's 1-on-1 coaching

### Platform Enhancements (Any Phase)
- **User accounts** — save progress across devices
- **Spaced repetition engine** — intelligent review scheduling
- **Speech recognition** — student records themselves, AI compares to TTS model
- **Community features** — comment sections, progress sharing
- **Mobile app** — PWA or native wrapper
- **Certification** — completion certificates for LinkedIn

---

## Appendix: Super Glue Words (Connector Reference)

From the source material, these connectors are taught as a cross-cutting toolkit:

| English | Spanish | Category |
|---------|---------|----------|
| so | así que | Result |
| therefore | por lo tanto | Result (formal) |
| anymore | más | Continuation |
| ever again | nunca más | Continuation (negative) |
| in order to | para | Purpose |
| even though | aunque | Concession |
| yet | todavía | Time/Contrast |
| already | ya | Time |
| about | sobre | Topic |
| nothing, anything | nada | Quantity |
| however | sin embargo | Contrast |
| also, too | también | Addition |
| either, neither | tampoco | Addition (negative) |
| everywhere | en todos lados | Place |
| nowhere, anywhere | en ningún lado | Place (negative) |
| somewhere | en algún lado | Place (indefinite) |
| no one, anyone | nadie | Person (negative) |
| someone | alguien | Person (indefinite) |

---

*This document serves as the master plan for the NY English Teacher Beginner Course project. It should be updated as decisions are made and work progresses.*
