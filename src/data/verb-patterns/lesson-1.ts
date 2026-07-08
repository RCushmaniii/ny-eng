// Level 1 · Lesson 1 — "The Verb Decides"
// Direct-object verbs (call someone) vs verbs that need "to" before the person (speak to someone).

import type { PatternDrillSet } from "./types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

export const l1Drill: PatternDrillSet = {
  title: "Direct or “to”?",
  titleEs: "¿Directo o “to”?",
  instruction: "Does this verb take the person directly, or need “to” first?",
  instructionEs: "¿Este verbo lleva la persona directamente, o necesita “to” primero?",
  items: [
    {
      prompt: "I called ___ my boss.",
      options: [
        { label: "—", correct: true },
        { label: "to", correct: false },
      ],
      answer: "I called my boss.",
      diagnosis:
        "call someone — direct, no “to”. Spanish “llamé a mi jefe” tricks you into adding it.",
      diagnosisEs:
        "call someone — directo, sin “to”. El español “llamé a mi jefe” te hace agregarlo.",
    },
    {
      prompt: "I spoke ___ my manager.",
      options: [
        { label: "—", correct: false },
        { label: "to", correct: true },
      ],
      answer: "I spoke to my manager.",
      diagnosis: "speak to someone — this verb always needs “to” before the person.",
      diagnosisEs: "speak to someone — este verbo siempre necesita “to” antes de la persona.",
    },
    {
      prompt: "I contacted ___ the supplier.",
      options: [
        { label: "—", correct: true },
        { label: "to", correct: false },
      ],
      answer: "I contacted the supplier.",
      diagnosis: "contact someone — direct. Like call, email, phone, text: no preposition.",
      diagnosisEs: "contact someone — directo. Como call, email, phone, text: sin preposición.",
    },
    {
      prompt: "She listened ___ the customer.",
      options: [
        { label: "—", correct: false },
        { label: "to", correct: true },
      ],
      answer: "She listened to the customer.",
      diagnosis: "listen to someone — always “to”. You never “listen someone”.",
      diagnosisEs: "listen to someone — siempre “to”. Nunca se dice “listen someone”.",
    },
    {
      prompt: "We helped ___ the client.",
      options: [
        { label: "—", correct: true },
        { label: "to", correct: false },
      ],
      answer: "We helped the client.",
      diagnosis: "help someone — direct. “Help to the client” is a translation error.",
      diagnosisEs: "help someone — directo. “Help to the client” es un error de traducción.",
    },
    {
      prompt: "I replied ___ the email.",
      options: [
        { label: "—", correct: false },
        { label: "to", correct: true },
      ],
      answer: "I replied to the email.",
      diagnosis:
        "reply to someone/something — always “to”. (But: “I answered the email” — no “to”.)",
      diagnosisEs:
        "reply to someone/something — siempre “to”. (Pero: “I answered the email” — sin “to”.)",
    },
    {
      prompt: "He answered ___ the customer.",
      options: [
        { label: "—", correct: true },
        { label: "to", correct: false },
      ],
      answer: "He answered the customer.",
      diagnosis:
        "answer someone — direct, even though reply needs “to”. Same meaning, different pattern.",
      diagnosisEs:
        "answer someone — directo, aunque reply necesite “to”. Mismo significado, distinto patrón.",
    },
    {
      prompt: "I apologized ___ my boss.",
      options: [
        { label: "—", correct: false },
        { label: "to", correct: true },
      ],
      answer: "I apologized to my boss.",
      diagnosis: "apologize to someone — always “to”. You apologize TO a person (FOR a problem).",
      diagnosisEs:
        "apologize to someone — siempre “to”. Te disculpas TO (con) una persona (FOR un problema).",
    },
  ],
};

export const l1Corrections: ErrorCorrectionSet = {
  title: "Fix the pattern",
  titleEs: "Corrige el patrón",
  description:
    "Each sentence has a verb-pattern error from translating Spanish. Tap the wrong part.",
  descriptionEs:
    "Cada oración tiene un error de patrón por traducir del español. Toca la parte incorrecta.",
  items: [
    {
      incorrect: "I called to my wife after work.",
      correct: "I called my wife after work.",
      incorrectHighlight: "to",
      correctHighlight: "called",
      explanation:
        "call someone — no “to”. The Spanish “a” (llamé a mi esposa) has no equivalent here.",
      explanationEs:
        "call someone — sin “to”. La “a” del español (llamé a mi esposa) no tiene equivalente aquí.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I spoke my manager about the schedule.",
      correct: "I spoke to my manager about the schedule.",
      incorrectHighlight: "spoke my",
      correctHighlight: "spoke to",
      explanation:
        "speak to someone — the “to” is required. Meaning alone won’t tell you; you must know the verb.",
      explanationEs:
        "speak to someone — el “to” es obligatorio. El significado no te lo dice; hay que conocer el verbo.",
      errorType: "preposition",
    },
    {
      incorrect: "She contacted to the supplier yesterday.",
      correct: "She contacted the supplier yesterday.",
      incorrectHighlight: "to",
      correctHighlight: "contacted",
      explanation: "contact someone — direct. Same family as call, email, phone, text.",
      explanationEs: "contact someone — directo. Misma familia que call, email, phone, text.",
      errorType: "literal-translation",
    },
    {
      incorrect: "We listened the customer’s complaint.",
      correct: "We listened to the customer’s complaint.",
      incorrectHighlight: "listened the",
      correctHighlight: "listened to",
      explanation: "listen to someone/something — always “to”, even before a thing.",
      explanationEs: "listen to someone/something — siempre “to”, incluso antes de una cosa.",
      errorType: "preposition",
    },
    {
      incorrect: "He helped to his coworker with the report.",
      correct: "He helped his coworker with the report.",
      incorrectHighlight: "to",
      correctHighlight: "helped",
      explanation:
        "help someone — direct. “Help to someone” is a classic Spanish-interference error.",
      explanationEs:
        "help someone — directo. “Help to someone” es un error clásico de interferencia del español.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I apologized my boss for the delay.",
      correct: "I apologized to my boss for the delay.",
      incorrectHighlight: "apologized my",
      correctHighlight: "apologized to",
      explanation: "apologize to someone (for something). You apologize TO a person.",
      explanationEs: "apologize to someone (for something). Te disculpas TO (con) una persona.",
      errorType: "preposition",
    },
  ],
};
