// Verb Pattern Mastery — shared type definitions.
// Reuses ExamQuestion / ScoreTierDefinition from the shared course/exam + CourseExam modules.

// ─── Level & lesson metadata (drives the hub roadmap) ───────────────────

export type CourseLevelId = 1 | 2 | 3;

export interface VerbLesson {
  id: number; // global lesson number, 1-based
  level: CourseLevelId;
  slug: string; // EN slug (also the astro filename)
  slugEs: string; // ES slug
  title: string;
  titleEs: string;
  pattern: string; // the one-line "what you'll master" hook (EN)
  patternEs: string;
  subtitle: string;
  subtitleEs: string;
  icon: string; // lucide-astro icon name resolved by the hub's iconMap
  available: boolean;
}

export interface VerbLevel {
  id: CourseLevelId;
  slug: string; // for anchors on the hub
  title: string;
  titleEs: string;
  cefr: string; // e.g. "B1"
  tagline: string;
  taglineEs: string;
  examSlug: string;
  examSlugEs: string;
  examTitle: string;
  examTitleEs: string;
}

export interface VerbBonus {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  available: boolean;
}

// ─── PatternDrill (the signature interactive drill) ─────────────────────

export interface PatternDrillOption {
  label: string; // the pattern choice, e.g. "to", "for", "about", "—"
  correct: boolean;
}

export interface PatternDrillItem {
  prompt: string; // slash-prompt ("ask / my boss / help") or gap sentence ("I depend ___ my team")
  options: PatternDrillOption[];
  answer: string; // full correct sentence (used for display + AudioButton)
  diagnosis: string; // one-line "why this pattern" (EN)
  diagnosisEs: string; // one-line "why this pattern" (es-MX)
}

export interface PatternDrillSet {
  title: string;
  titleEs: string;
  instruction: string;
  instructionEs: string;
  items: PatternDrillItem[];
}
