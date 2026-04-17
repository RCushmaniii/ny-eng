// Intermediate course type definitions
// Reuses SentenceBlock and PronunciationDrill from beginner course

import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

export type { SentenceBlock, PronunciationDrill };

// Extended vocab item supporting phrasal verbs and expressions
export interface IntermediateVocabItem {
  english: string;
  spanish: string;
  type: "word" | "phrase" | "verb" | "modal" | "phrasal-verb" | "expression" | "noun";
}

// Section A: Phrasal Verb Explorer
export interface PhrasalVerb {
  verb: string;
  verbEs: string;
  particle: string;
  baseVerb: string;
  definition: string;
  definitionEs: string;
  example: string;
  exampleEs: string;
  contextNote?: string;
  contextNoteEs?: string;
}

export interface PhrasalVerbGroup {
  baseVerb: string;
  baseVerbEs: string;
  description: string;
  descriptionEs: string;
  verbs: PhrasalVerb[];
}

// Section B: Dialogue Practice
export interface DialogueLine {
  speaker: "A" | "B";
  speakerLabel: string;
  speakerLabelEs: string;
  english: string;
  spanish: string;
  highlight?: string;
}

export interface Dialogue {
  title: string;
  titleEs: string;
  setting: string;
  settingEs: string;
  lines: DialogueLine[];
  keyPhrases: {
    english: string;
    spanish: string;
    note?: string;
    noteEs?: string;
  }[];
}

// Section D: Error Correction
export interface ErrorCorrectionItem {
  incorrect: string;
  correct: string;
  incorrectHighlight: string;
  correctHighlight: string;
  explanation: string;
  explanationEs: string;
  errorType:
    | "literal-translation"
    | "tense-confusion"
    | "phrasal-verb"
    | "word-order"
    | "preposition";
}

export interface ErrorCorrectionSet {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  items: ErrorCorrectionItem[];
}
