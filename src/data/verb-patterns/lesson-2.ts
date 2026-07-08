// Level 1 · Lesson 2 — "Remind, Ask, Tell"
// The follower (about / for / to-do / direct) changes the meaning. Choose by meaning here —
// but first you must know which followers each verb even allows.

import type { PatternDrillSet } from "./types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

export const l2Drill: PatternDrillSet = {
  title: "About, for, to-do, or direct?",
  titleEs: "¿About, for, to-do o directo?",
  instruction: "Pick the follower that matches the meaning.",
  instructionEs: "Elige el conector que corresponde al significado.",
  items: [
    {
      prompt: "I reminded my team ___ the deadline.",
      options: [
        { label: "about", correct: true },
        { label: "to", correct: false },
        { label: "for", correct: false },
      ],
      answer: "I reminded my team about the deadline.",
      diagnosis: "remind someone about something — a topic they shouldn’t forget.",
      diagnosisEs: "remind someone about something — un tema que no deben olvidar.",
    },
    {
      prompt: "I reminded my team ___ send the report.",
      options: [
        { label: "about", correct: false },
        { label: "to", correct: true },
        { label: "for", correct: false },
      ],
      answer: "I reminded my team to send the report.",
      diagnosis: "remind someone to do something — an action they need to take.",
      diagnosisEs: "remind someone to do something — una acción que deben realizar.",
    },
    {
      prompt: "I asked my manager ___ help.",
      options: [
        { label: "for", correct: true },
        { label: "about", correct: false },
        { label: "to", correct: false },
      ],
      answer: "I asked my manager for help.",
      diagnosis: "ask someone for something — you want to receive it.",
      diagnosisEs: "ask someone for something — quieres recibirlo.",
    },
    {
      prompt: "I asked my manager ___ the schedule.",
      options: [
        { label: "for", correct: false },
        { label: "about", correct: true },
        { label: "to", correct: false },
      ],
      answer: "I asked my manager about the schedule.",
      diagnosis: "ask someone about something — you want information on a topic.",
      diagnosisEs: "ask someone about something — quieres información sobre un tema.",
    },
    {
      prompt: "I asked my manager ___ review the file.",
      options: [
        { label: "for", correct: false },
        { label: "about", correct: false },
        { label: "to", correct: true },
      ],
      answer: "I asked my manager to review the file.",
      diagnosis: "ask someone to do something — you want them to take an action.",
      diagnosisEs: "ask someone to do something — quieres que realicen una acción.",
    },
    {
      prompt: "I told the client ___ the truth.",
      options: [
        { label: "—", correct: true },
        { label: "about", correct: false },
        { label: "to", correct: false },
      ],
      answer: "I told the client the truth.",
      diagnosis: "tell someone something — direct information, no preposition.",
      diagnosisEs: "tell someone something — información directa, sin preposición.",
    },
    {
      prompt: "I told my team ___ arrive early.",
      options: [
        { label: "—", correct: false },
        { label: "about", correct: false },
        { label: "to", correct: true },
      ],
      answer: "I told my team to arrive early.",
      diagnosis: "tell someone to do something — an instruction.",
      diagnosisEs: "tell someone to do something — una instrucción.",
    },
    {
      prompt: "I told my boss ___ the problem.",
      options: [
        { label: "—", correct: false },
        { label: "about", correct: true },
        { label: "to", correct: false },
      ],
      answer: "I told my boss about the problem.",
      diagnosis: "tell someone about something — you discuss or explain a topic.",
      diagnosisEs: "tell someone about something — comentas o explicas un tema.",
    },
  ],
};

export const l2Corrections: ErrorCorrectionSet = {
  title: "Fix remind, ask & tell",
  titleEs: "Corrige remind, ask y tell",
  description:
    "These three verbs take the person directly — then change meaning with the follower. Tap the error.",
  descriptionEs:
    "Estos tres verbos llevan la persona directamente — luego cambian de significado con el conector. Toca el error.",
  items: [
    {
      incorrect: "I reminded to my boss about the meeting.",
      correct: "I reminded my boss about the meeting.",
      incorrectHighlight: "reminded to",
      correctHighlight: "reminded",
      explanation:
        "remind someone — direct. The person never takes “to”. (The topic takes “about”.)",
      explanationEs:
        "remind someone — directo. La persona nunca lleva “to”. (El tema lleva “about”.)",
      errorType: "literal-translation",
    },
    {
      incorrect: "She reminded me about send the file.",
      correct: "She reminded me to send the file.",
      incorrectHighlight: "about send",
      correctHighlight: "to send",
      explanation:
        "An action = remind someone TO DO something. “About” is only for a topic (a noun).",
      explanationEs:
        "Una acción = remind someone TO DO something. “About” es solo para un tema (un sustantivo).",
      errorType: "preposition",
    },
    {
      incorrect: "I asked to my teacher a question.",
      correct: "I asked my teacher a question.",
      incorrectHighlight: "asked to",
      correctHighlight: "asked",
      explanation: "ask someone something — direct. No “to” before the person.",
      explanationEs: "ask someone something — directo. Sin “to” antes de la persona.",
      errorType: "literal-translation",
    },
    {
      incorrect: "We asked the client the documents.",
      correct: "We asked the client for the documents.",
      incorrectHighlight: "client the documents",
      correctHighlight: "client for the documents",
      explanation: "You want to receive something → ask someone FOR something.",
      explanationEs: "Quieres recibir algo → ask someone FOR something.",
      errorType: "preposition",
    },
    {
      incorrect: "I told to him the truth.",
      correct: "I told him the truth.",
      incorrectHighlight: "told to",
      correctHighlight: "told",
      explanation: "tell someone something — direct. “Told to him” is a translation of “le dije”.",
      explanationEs: "tell someone something — directo. “Told to him” es traducción de “le dije”.",
      errorType: "literal-translation",
    },
    {
      incorrect: "He told his team about arrive early.",
      correct: "He told his team to arrive early.",
      incorrectHighlight: "about arrive",
      correctHighlight: "to arrive",
      explanation: "An instruction (an action) = tell someone TO DO something, not “about”.",
      explanationEs: "Una instrucción (una acción) = tell someone TO DO something, no “about”.",
      errorType: "preposition",
    },
  ],
};
