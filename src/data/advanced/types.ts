// Type definitions shared across the advanced course data files.
//
// Per docs/ADVANCED-COURSE-PLAN.md, the advanced course is structured as
// 10 units × 3 sections each, using 5 reusable React components. Each unit
// data file imports types from here so the React components can rely on a
// stable shape.
//
// The types are intentionally pure data — no functions — so they survive
// the Astro→React island JSON serialization boundary. (See the
// INTERMEDIATE-COURSE-RETROSPECTIVE.md for the post-mortem on why this
// matters.)

// ─── WordPairLab ───────────────────────────────────────────────────────────
// Compares a "weak" version of a phrase with a "strong" upgrade. Used for:
// U1 (weak verbs vs strong verbs), U2 (word traps), U3 (pronoun corrections),
// U10 (collocations).
export interface WordPair {
  /** The weaker / less precise version */
  weak: string;
  weakEs: string;
  /** The stronger / more precise version */
  strong: string;
  strongEs: string;
  /** The exact substring inside `weak` to highlight (must appear verbatim) */
  weakHighlight: string;
  /** The exact substring inside `strong` to highlight */
  strongHighlight: string;
  /** Why the strong version is better */
  why: string;
  whyEs: string;
  /** Optional category label shown as a small badge */
  category?: string;
  categoryEs?: string;
}

// ─── ErrorSpotter ──────────────────────────────────────────────────────────
// A sentence with a single weak/wrong word. The learner clicks the offending
// word, then sees the upgraded version. Used for adverb removal, misused
// pronouns, wrong relative pronouns, missing/wrong articles, etc.
export interface ErrorSpotterItem {
  /** The full sentence with the problem word inside it */
  sentence: string;
  /** The exact word/phrase the learner is supposed to identify */
  errorWord: string;
  /** The improved sentence after fixing the error */
  improved: string;
  /** Spanish translation of the original (or closest equivalent) */
  sentenceEs: string;
  /** Spanish translation of the improved version */
  improvedEs: string;
  /** Why the original was wrong / weak */
  explanation: string;
  explanationEs: string;
}

// ─── SentenceTransformer ───────────────────────────────────────────────────
// Given a flat / weak / verbose sentence, the learner reveals the strong
// upgraded version. Used for sentence-level rewrites in U1, U7, U9, U10.
export interface SentenceTransform {
  /** The original flat / weak sentence */
  flat: string;
  flatEs: string;
  /** The strong upgraded version */
  strong: string;
  strongEs: string;
  /** Short label for the technique used (verb upgrade, consolidation, etc.) */
  technique: string;
  techniqueEs: string;
  /** Longer explanation of why the upgrade works */
  why: string;
  whyEs: string;
}

// ─── MinimalPairDrill (Unit 6 only) ────────────────────────────────────────
// Two words that differ by a single sound (ship/sheep, walk/work). The
// learner sees both and uses TTS to compare. Built later when we get to U6.
export interface MinimalPair {
  wordA: string;
  wordB: string;
  /** What sound distinction this pair illustrates */
  distinction: string;
  distinctionEs: string;
  /** A short example sentence using each word */
  exampleA: string;
  exampleAEs: string;
  exampleB: string;
  exampleBEs: string;
  /** Pronunciation tip for the distinction */
  tip: string;
  tipEs: string;
}

// ─── WordBuilder (Unit 8 only) ─────────────────────────────────────────────
// Decompose a word into prefix + root + suffix and explain each part. Used
// only in Unit 8 for prefix/suffix decoding.
export interface WordBreakdown {
  /** The whole word */
  word: string;
  /** Each meaningful piece in order */
  parts: Array<{
    text: string;
    role: "prefix" | "root" | "suffix";
    meaning: string;
    meaningEs: string;
  }>;
  /** What the assembled word means */
  fullMeaning: string;
  fullMeaningEs: string;
  /** A second example using a different word that shares one of the parts */
  relatedExample?: string;
  relatedExampleEs?: string;
}

// ─── Section header ────────────────────────────────────────────────────────
// Every unit has 3 sections. Each section has a title, a short hint, and
// some content (one of the types above). The page file decides which
// component to render based on the section's `mechanic` field.
export type SectionMechanic =
  | "word-pair"
  | "error-spotter"
  | "sentence-transformer"
  | "minimal-pair"
  | "word-builder";

export interface UnitSection {
  /** Section number — always 1, 2, or 3 */
  number: 1 | 2 | 3;
  /** Section title shown in the page heading */
  title: string;
  titleEs: string;
  /** Short hint shown under the title */
  hint: string;
  hintEs: string;
  /** Which component to render */
  mechanic: SectionMechanic;
}
