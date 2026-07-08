// Level 2 · Lesson 6 — "Someone To Do · Make · Let · Help"
// Most verbs: verb + someone + TO do. Causatives make/let: verb + someone + BASE verb (no "to").
// help takes either.

import type { PatternDrillSet } from "./types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

export const l6Drill: PatternDrillSet = {
  title: "To do, or base verb?",
  titleEs: "¿To do, o verbo base?",
  instruction: "After the person: “to do”, or the base verb with no “to”?",
  instructionEs: "Después de la persona: ¿“to do”, o el verbo base sin “to”?",
  items: [
    {
      prompt: "I need my assistant ___ the report.",
      options: [
        { label: "to send", correct: true },
        { label: "send", correct: false },
      ],
      answer: "I need my assistant to send the report.",
      diagnosis: "need someone TO DO something. Same: want, expect, ask, tell, allow, advise.",
      diagnosisEs: "need someone TO DO something. Igual: want, expect, ask, tell, allow, advise.",
    },
    {
      prompt: "My boss made me ___ the email.",
      options: [
        { label: "to rewrite", correct: false },
        { label: "rewrite", correct: true },
      ],
      answer: "My boss made me rewrite the email.",
      diagnosis: "make someone DO something — no “to”. It’s force / oblige.",
      diagnosisEs: "make someone DO something — sin “to”. Es forzar / obligar.",
    },
    {
      prompt: "She let her son ___ the car.",
      options: [
        { label: "to use", correct: false },
        { label: "use", correct: true },
      ],
      answer: "She let her son use the car.",
      diagnosis: "let someone DO something — no “to”. It’s give permission.",
      diagnosisEs: "let someone DO something — sin “to”. Es dar permiso.",
    },
    {
      prompt: "We expect the supplier ___ on time.",
      options: [
        { label: "to deliver", correct: true },
        { label: "deliver", correct: false },
      ],
      answer: "We expect the supplier to deliver on time.",
      diagnosis: "expect someone TO DO something.",
      diagnosisEs: "expect someone TO DO something.",
    },
    {
      prompt: "The company allows employees ___ remotely.",
      options: [
        { label: "to work", correct: true },
        { label: "work", correct: false },
      ],
      answer: "The company allows employees to work remotely.",
      diagnosis: "allow someone TO DO something. (But: let someone work — no “to”.)",
      diagnosisEs: "allow someone TO DO something. (Pero: let someone work — sin “to”.)",
    },
    {
      prompt: "My manager advised me ___.",
      options: [
        { label: "to wait", correct: true },
        { label: "wait", correct: false },
      ],
      answer: "My manager advised me to wait.",
      diagnosis: "advise someone TO DO something.",
      diagnosisEs: "advise someone TO DO something.",
    },
    {
      prompt: "She helped me ___ the problem.",
      options: [
        { label: "understand", correct: true },
        { label: "to understanding", correct: false },
      ],
      answer: "She helped me understand the problem.",
      diagnosis: "help someone DO (or TO do) — both fine. The base verb is most natural.",
      diagnosisEs: "help someone DO (o TO do) — ambas sirven. El verbo base es lo más natural.",
    },
    {
      prompt: "They persuaded us ___ the offer.",
      options: [
        { label: "to accept", correct: true },
        { label: "accept", correct: false },
      ],
      answer: "They persuaded us to accept the offer.",
      diagnosis: "persuade someone TO DO something. Same: warn, require, force, encourage.",
      diagnosisEs: "persuade someone TO DO something. Igual: warn, require, force, encourage.",
    },
  ],
};

export const l6Corrections: ErrorCorrectionSet = {
  title: "Fix someone + action",
  titleEs: "Corrige someone + acción",
  description: "“To do” after most verbs — but base verb after make and let. Tap the error.",
  descriptionEs: "“To do” tras la mayoría — pero verbo base tras make y let. Toca el error.",
  items: [
    {
      incorrect: "I need my assistant send the file.",
      correct: "I need my assistant to send the file.",
      incorrectHighlight: "assistant send",
      correctHighlight: "assistant to send",
      explanation: "need someone TO DO something — the “to” is required.",
      explanationEs: "need someone TO DO something — el “to” es obligatorio.",
      errorType: "word-order",
    },
    {
      incorrect: "My boss made me to repeat the task.",
      correct: "My boss made me repeat the task.",
      incorrectHighlight: "to repeat",
      correctHighlight: "repeat",
      explanation: "make someone DO — no “to”. Same with let.",
      explanationEs: "make someone DO — sin “to”. Igual con let.",
      errorType: "word-order",
    },
    {
      incorrect: "She let her son to drive the car.",
      correct: "She let her son drive the car.",
      incorrectHighlight: "to drive",
      correctHighlight: "drive",
      explanation: "let someone DO — no “to”.",
      explanationEs: "let someone DO — sin “to”.",
      errorType: "word-order",
    },
    {
      incorrect: "The company allows employees work remotely.",
      correct: "The company allows employees to work remotely.",
      incorrectHighlight: "employees work",
      correctHighlight: "employees to work",
      explanation: "allow someone TO DO something — unlike let, allow keeps the “to”.",
      explanationEs: "allow someone TO DO something — a diferencia de let, allow conserva el “to”.",
      errorType: "word-order",
    },
    {
      incorrect: "The teacher advised me study more.",
      correct: "The teacher advised me to study more.",
      incorrectHighlight: "me study",
      correctHighlight: "me to study",
      explanation: "advise someone TO DO something.",
      explanationEs: "advise someone TO DO something.",
      errorType: "word-order",
    },
    {
      incorrect: "They persuaded us accept the offer.",
      correct: "They persuaded us to accept the offer.",
      incorrectHighlight: "us accept",
      correctHighlight: "us to accept",
      explanation: "persuade someone TO DO something.",
      explanationEs: "persuade someone TO DO something.",
      errorType: "word-order",
    },
  ],
};
