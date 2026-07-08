// Level 3 · Lesson 10 — "Sounding Natural Under Pressure"
// The capstone. A 3-question diagnosis method applied live, mixing every pattern from the course:
// (1) Does the verb need a preposition? (2) Direct object, or "to" before the person?
// (3) to-do or -ing? Mixed drill + mixed de-fossilization corrections.

import type { PatternDrillSet } from "./types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

export const l10Drill: PatternDrillSet = {
  title: "Diagnose it live",
  titleEs: "Diagnostícalo en vivo",
  instruction: "Every pattern is mixed together now. Run the diagnosis and choose.",
  instructionEs: "Ahora todos los patrones están mezclados. Aplica el diagnóstico y elige.",
  items: [
    {
      prompt: "I need to call my boss / I need to call ___ my boss?",
      options: [
        { label: "call my boss", correct: true },
        { label: "call to my boss", correct: false },
      ],
      answer: "I need to call my boss.",
      diagnosis: "call is a direct-object verb — no preposition before the person.",
      diagnosisEs: "call es verbo de objeto directo — sin preposición antes de la persona.",
    },
    {
      prompt: "The whole team depends ___ this deadline.",
      options: [
        { label: "on", correct: true },
        { label: "of", correct: false },
      ],
      answer: "The whole team depends on this deadline.",
      diagnosis: "depend ON — the classic “depender de” trap.",
      diagnosisEs: "depend ON — la clásica trampa de “depender de”.",
    },
    {
      prompt: "Could you explain ___ the process?",
      options: [
        { label: "me", correct: false },
        { label: "the process to me", correct: true },
      ],
      answer: "Could you explain the process to me?",
      diagnosis: "explain STH TO SB — never “explain me”. The thing comes first.",
      diagnosisEs: "explain STH TO SB — nunca “explain me”. La cosa va primero.",
    },
    {
      prompt: "We finally managed ___ the client.",
      options: [
        { label: "to convince", correct: true },
        { label: "convincing", correct: false },
      ],
      answer: "We finally managed to convince the client.",
      diagnosis: "manage TO DO — succeed in doing it.",
      diagnosisEs: "manage TO DO — lograr hacerlo.",
    },
    {
      prompt: "My manager made me ___ the whole report.",
      options: [
        { label: "redo", correct: true },
        { label: "to redo", correct: false },
      ],
      answer: "My manager made me redo the whole report.",
      diagnosis: "make someone DO — no “to” (causative).",
      diagnosisEs: "make someone DO — sin “to” (causativo).",
    },
    {
      prompt: "She apologized ___ the delay.",
      options: [
        { label: "for", correct: true },
        { label: "about", correct: false },
      ],
      answer: "She apologized for the delay.",
      diagnosis: "apologize FOR a problem (and TO a person).",
      diagnosisEs: "apologize FOR un problema (y TO una persona).",
    },
    {
      prompt: "He suggested ___ the meeting to Friday.",
      options: [
        { label: "moving", correct: true },
        { label: "to move", correct: false },
      ],
      answer: "He suggested moving the meeting to Friday.",
      diagnosis: "suggest DOING — never “suggest to move”.",
      diagnosisEs: "suggest DOING — nunca “suggest to move”.",
    },
    {
      prompt: "Please remember ___ the invoice before you go.",
      options: [
        { label: "to attach", correct: true },
        { label: "attaching", correct: false },
      ],
      answer: "Please remember to attach the invoice before you go.",
      diagnosis: "remember TO DO — a future task, not a past memory.",
      diagnosisEs: "remember TO DO — una tarea futura, no un recuerdo pasado.",
    },
    {
      prompt: "The new policy prevents us ___ working from home.",
      options: [
        { label: "from", correct: true },
        { label: "to", correct: false },
      ],
      answer: "The new policy prevents us from working from home.",
      diagnosis: "prevent someone FROM doing something — always “from + -ing”.",
      diagnosisEs: "prevent someone FROM doing something — siempre “from + -ing”.",
    },
    {
      prompt: "I told my assistant ___ the meeting.",
      options: [
        { label: "to schedule", correct: true },
        { label: "schedule", correct: false },
      ],
      answer: "I told my assistant to schedule the meeting.",
      diagnosis: "tell someone TO DO. (But: say — no person; make/let — no “to”.)",
      diagnosisEs: "tell someone TO DO. (Pero: say — sin persona; make/let — sin “to”.)",
    },
  ],
};

export const l10Corrections: ErrorCorrectionSet = {
  title: "De-fossilize it",
  titleEs: "Elimina el error fosilizado",
  description: "The most common fossilized errors, all mixed. Tap the one thing that's wrong.",
  descriptionEs:
    "Los errores fosilizados más comunes, todos mezclados. Toca lo único que está mal.",
  items: [
    {
      incorrect: "I called to my client to confirm the order.",
      correct: "I called my client to confirm the order.",
      incorrectHighlight: "called to",
      correctHighlight: "called",
      explanation: "call someone — direct object, no “to” before the person.",
      explanationEs: "call someone — objeto directo, sin “to” antes de la persona.",
      errorType: "literal-translation",
    },
    {
      incorrect: "Our success depends of the whole team.",
      correct: "Our success depends on the whole team.",
      incorrectHighlight: "of",
      correctHighlight: "on",
      explanation: "depend ON — a direct copy of “depender de”.",
      explanationEs: "depend ON — copia directa de “depender de”.",
      errorType: "preposition",
    },
    {
      incorrect: "Let me explain you the new workflow.",
      correct: "Let me explain the new workflow to you.",
      incorrectHighlight: "explain you",
      correctHighlight: "explain the new workflow to you",
      explanation: "explain STH TO SB — never “explain you”. Same with describe, mention, suggest.",
      explanationEs:
        "explain STH TO SB — nunca “explain you”. Igual con describe, mention, suggest.",
      errorType: "word-order",
    },
    {
      incorrect: "I really enjoy to work with international clients.",
      correct: "I really enjoy working with international clients.",
      incorrectHighlight: "to work",
      correctHighlight: "working",
      explanation: "enjoy DOING — one of the most common fossilized -ing errors.",
      explanationEs: "enjoy DOING — uno de los errores fosilizados con -ing más comunes.",
      errorType: "word-order",
    },
    {
      incorrect: "My director made me to present to the board.",
      correct: "My director made me present to the board.",
      incorrectHighlight: "to present",
      correctHighlight: "present",
      explanation: "make someone DO — no “to”. Same with let.",
      explanationEs: "make someone DO — sin “to”. Igual con let.",
      errorType: "word-order",
    },
    {
      incorrect: "She suggested me to review the numbers again.",
      correct: "She suggested that I review the numbers again.",
      incorrectHighlight: "suggested me to review",
      correctHighlight: "suggested that I review",
      explanation: "Never “suggest sb to do”. Use suggest DOING or suggest that sb do.",
      explanationEs: "Nunca “suggest sb to do”. Usa suggest DOING o suggest that sb do.",
      errorType: "word-order",
    },
    {
      incorrect: "We need to focus in the most profitable accounts.",
      correct: "We need to focus on the most profitable accounts.",
      incorrectHighlight: "focus in",
      correctHighlight: "focus on",
      explanation: "focus ON — the “in” copies “enfocarse en”.",
      explanationEs: "focus ON — el “in” copia “enfocarse en”.",
      errorType: "preposition",
    },
    {
      incorrect: "The manager told that the results were excellent.",
      correct: "The manager said that the results were excellent.",
      incorrectHighlight: "told that",
      correctHighlight: "said that",
      explanation: "TELL needs a person; with none named, use SAY that…",
      explanationEs: "TELL necesita persona; sin nombrar a nadie, usa SAY that…",
      errorType: "word-order",
    },
  ],
};
