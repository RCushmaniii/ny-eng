// Shared lesson format for the data-driven master classes (EN + ES).
//
// A course is a list of lessons; a lesson is a list of blocks. One Astro component
// renders every block type, so a new course is content only.
//
// Language rule: the page explains in the reader's language, but the English being
// taught is never translated. So:
//   - L = [English, Mexican Professional Spanish (tú)] for every explanatory string.
//   - Plain `string` fields are the English being taught (model sentences, phrases,
//     scripts) and render identically on both language versions.
// Strings may contain inline HTML: <b>, <em>, <span class='x'>✗</span>, <span class='ok'>✓</span>.

export type L = [en: string, es: string];

/** A paragraph of explanation. */
export interface PBlock {
  t: "p";
  html: L;
}

/** A sub-heading inside a lesson. */
export interface HBlock {
  t: "h";
  text: L;
}

/** The one idea the lesson turns on, in a highlighted box. Use once or twice per lesson. */
export interface IdeaBlock {
  t: "idea";
  title: L;
  html: L;
}

/** A named framework: numbered steps, each with a label, an explanation and a model line. */
export interface FrameworkBlock {
  t: "framework";
  title: L;
  /** One sentence on when to reach for it. */
  lead?: L;
  steps: {
    label: L;
    html: L;
    /** A model English sentence for this step. */
    say?: string;
  }[];
}

/** Weak → strong pairs of English, each with the reason the strong one works. */
export interface CompareBlock {
  t: "compare";
  title: L;
  /** Column labels; default is Weak / Strong. */
  labels?: [weak: L, strong: L];
  rows: {
    weak: string;
    strong: string;
    why: L;
  }[];
}

/** A bank of ready-to-say English phrases, grouped under one purpose. */
export interface PhrasesBlock {
  t: "phrases";
  title: L;
  items: {
    /** The English phrase. */
    en: string;
    /** When to use it, or what it does. */
    use: L;
  }[];
}

/** A model: a short speech, dialogue, email or paragraph in English, with commentary. */
export interface ModelBlock {
  t: "model";
  title: L;
  /** Sets the scene. */
  context?: L;
  lines: {
    /** Speaker label for dialogues ("You", "Dana"); omit for a monologue or a document. */
    who?: string;
    /** The English text. */
    en: string;
    /** Margin note explaining the move this line makes. */
    note?: L;
  }[];
}

/** A warning about an error Spanish speakers make, or a cultural misread. */
export interface TrapBlock {
  t: "trap";
  title?: L;
  html: L;
}

/** Scenario questions: read the situation, choose the best English response, see why. */
export interface ChoiceBlock {
  t: "choice";
  title: L;
  items: {
    /** The situation. */
    prompt: L;
    /** Three or four English responses; exactly one has ok: true. */
    options: {
      en: string;
      ok: boolean;
      /** Why this option works or backfires. */
      why: L;
    }[];
  }[];
}

/** Try it yourself, then reveal: the learner rewrites a weak English text and compares. */
export interface RewriteBlock {
  t: "rewrite";
  title: L;
  items: {
    /** What to fix, without giving the answer away. */
    task: L;
    /** The weak English original. */
    before: string;
    /** One strong English version. */
    after: string;
    /** What changed and why. */
    why: L;
  }[];
}

/** A timed out-loud exercise with a self-check list. */
export interface SpeakBlock {
  t: "speak";
  title: L;
  /** What to do. */
  prompt: L;
  /** Optional picture to speak about: a path under /images/. */
  image?: { src: string; alt: L };
  /** Seconds to think before speaking. */
  think: number;
  /** Seconds to speak. */
  speak: number;
  /** An English sentence frame to lean on. */
  frame?: string;
  /** What to check yourself against afterward. */
  checklist: L[];
  /** A model answer in English, revealed after the attempt. */
  model?: string;
}

/** A plain list. */
export interface ListBlock {
  t: "list";
  ordered?: boolean;
  items: L[];
}

/** The lesson's closing summary: three to five lines. */
export interface TakeawaysBlock {
  t: "takeaways";
  items: L[];
}

export type Block =
  | PBlock
  | HBlock
  | IdeaBlock
  | FrameworkBlock
  | CompareBlock
  | PhrasesBlock
  | ModelBlock
  | TrapBlock
  | ChoiceBlock
  | RewriteBlock
  | SpeakBlock
  | ListBlock
  | TakeawaysBlock;

export interface Lesson {
  /** Also the English URL leaf. Lowercase, hyphenated. */
  id: string;
  slugEs: string;
  title: L;
  /** One sentence for the course page and the meta description stem. */
  summary: L;
  /** Meta description, 120–160 characters in each language. */
  description: L;
  /** Honest reading-and-practice time. */
  minutes: number;
  blocks: Block[];
}
