// Type definitions shared across the executive course data files.
//
// Per docs/EXECUTIVE-COURSE-PLAN.md, every unit section follows Robert's
// proven rhythm: Goal → Why this matters → Core drill → Technique focus →
// Rapid Repeat → Final Shift. These types encode each of those drill
// shapes as pure data so the React components stay simple and so content
// survives the Astro→React island JSON serialization boundary.

// ─── VerbUpgradeLab ────────────────────────────────────────────────────────
// The signature Robert drill. A weak sentence, 2-3 stronger options each
// with a usage note, plus an integrated model reply that uses all options
// in one fluent sentence. The optional `elite` tier unlocks the C2 upgrade
// (single sharper phrasing) with a C2 Insight callout describing the
// strategic distinction the elite phrasing enables.
export interface VerbUpgradeOption {
  /** The strong verb or phrase */
  verb: string;
  verbEs: string;
  /** When to use this option (e.g., "broad, neutral, fact-finding") */
  usage: string;
  usageEs: string;
}

export interface VerbUpgradeItem {
  /** The weak / vague sentence to upgrade */
  weak: string;
  weakEs: string;
  /** 2-3 stronger options, each with a usage note */
  options: VerbUpgradeOption[];
  /** Model reply that integrates all options into one fluent sentence */
  modelReply: string;
  modelReplyEs: string;
  /** One-liner explaining why the integrated reply works */
  whyItWorks: string;
  whyItWorksEs: string;
  /** Optional C2 elite tier — a single sharper phrasing */
  elite?: {
    verb: string;
    verbEs: string;
    /** The integrated model reply at C2 */
    modelReply: string;
    modelReplyEs: string;
    /** The strategic distinction the elite phrasing names */
    c2Insight: string;
    c2InsightEs: string;
  };
}

// ─── WeakStrongElite ───────────────────────────────────────────────────────
// Three-tier ladder drill — a single weak sentence upgraded through strong
// (C1) and optional elite (C2) phrasings. Simpler than VerbUpgradeLab;
// used for filler elimination and defensive reframing.
export interface WeakStrongEliteItem {
  weak: string;
  weakEs: string;
  strong: string;
  strongEs: string;
  /** Optional elite tier — reveals the C2 upgrade */
  elite?: string;
  eliteEs?: string;
  /** Optional one-line note on why the upgrade matters */
  note?: string;
  noteEs?: string;
}

// ─── StructuredResponseBuilder ─────────────────────────────────────────────
// Prompt → weak reply → model reply broken into named parts (e.g., Cause /
// Action / Outcome), with a "why it works" reveal. The named framework is
// the memorable product the learner walks away with.
export interface StructuredResponsePart {
  /** Framework label (e.g., "Cause", "Action", "Outcome") */
  label: string;
  labelEs: string;
  /** The sentence for this part of the model reply */
  sentence: string;
  sentenceEs: string;
}

export interface StructuredResponseItem {
  /** The executive prompt or question */
  prompt: string;
  promptEs: string;
  /** Fragmented / weak attempt */
  weak: string;
  weakEs: string;
  /** Named framework driving the response */
  framework: string;
  frameworkEs: string;
  /** The model reply broken into labeled parts */
  parts: StructuredResponsePart[];
  /** Why this structured version works */
  whyItWorks: string;
  whyItWorksEs: string;
}

// ─── ConnectorDrill ────────────────────────────────────────────────────────
// Upgrade a weak two-sentence pair into a connected version using a
// labeled executive connector ("As a result…", "In response…",
// "Accordingly…", etc.).
export interface ConnectorDrillItem {
  weak: string;
  weakEs: string;
  strong: string;
  strongEs: string;
  /** The specific connector used (e.g., "As a result") */
  connector: string;
  connectorEs: string;
  /** Optional elite tier — a second connector layered in */
  elite?: string;
  eliteEs?: string;
}

// ─── StoryBuilder ──────────────────────────────────────────────────────────
// Flat description → 5-step strategic narrative (Context → Tension →
// Insight → Action → Outcome). The learner reveals each step in sequence.
export interface StoryStep {
  label: "Context" | "Tension" | "Insight" | "Action" | "Outcome";
  sentence: string;
  sentenceEs: string;
}

export interface StoryBuilderItem {
  /** The executive prompt that triggers the story */
  prompt: string;
  promptEs: string;
  /** Flat, fact-only attempt */
  flat: string;
  flatEs: string;
  /** The 5-step narrative */
  steps: StoryStep[];
  /** One-liner on why this narrative works */
  whyItWorks: string;
  whyItWorksEs: string;
}

// ─── RapidRepeat ───────────────────────────────────────────────────────────
// 3-5 reusable sentence stems the learner says aloud as memory anchors.
// Appears at the end of every section.
export interface RapidRepeatStem {
  text: string;
  textEs: string;
}

// ─── ImpromptuScenario ─────────────────────────────────────────────────────
// Scenario + named framework + model 60-second reply. Used for U6 (impromptu
// toolkit) and U9 (decision-driving).
export interface ImpromptuScenarioItem {
  /** The impromptu prompt (e.g., "Give us a quick update on operations") */
  prompt: string;
  promptEs: string;
  /** The named framework with its step labels */
  framework: string;
  frameworkEs: string;
  frameworkSteps: string[];
  frameworkStepsEs: string[];
  /** Weak attempt */
  weak: string;
  weakEs: string;
  /** Model 60-second reply */
  modelReply: string;
  modelReplyEs: string;
  /** Why it works */
  whyItWorks: string;
  whyItWorksEs: string;
}

// ─── FinalShiftCard ────────────────────────────────────────────────────────
// Before / After transformation summary that closes every unit.
export interface FinalShift {
  before: string;
  beforeEs: string;
  after: string;
  afterEs: string;
}

// ─── Section & Unit wrappers ───────────────────────────────────────────────
export type DrillMechanic =
  | "verb-upgrade"
  | "weak-strong-elite"
  | "structured-response"
  | "connector"
  | "story"
  | "impromptu";

export interface UnitSection {
  /** Section number — always 1, 2, or 3 */
  number: 1 | 2 | 3;
  /** Section title shown in the page heading */
  title: string;
  titleEs: string;
  /** The stakes / why this section matters (1-3 sentences) */
  why: string;
  whyEs: string;
  /** Which drill type to render */
  mechanic: DrillMechanic;
  /** One-line technique focus shown above the Rapid Repeat block */
  techniqueFocus: string;
  techniqueFocusEs: string;
  /** Rapid Repeat stems — 3 to 5 */
  rapidRepeat: RapidRepeatStem[];
}
