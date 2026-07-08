// Level 2 · Lesson 7 — "Someone + Preposition + Something"
// verb + person + preposition + thing. thank/blame FOR, apologize TO...FOR, introduce TO,
// provide WITH, prevent FROM.

import type { PatternDrillSet } from "./types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

export const l7Drill: PatternDrillSet = {
  title: "Person, then which preposition?",
  titleEs: "Persona, ¿y luego cuál preposición?",
  instruction: "Pick the preposition that follows the person.",
  instructionEs: "Elige la preposición que sigue a la persona.",
  items: [
    {
      prompt: "I thanked my coworker ___ her help.",
      options: [
        { label: "for", correct: true },
        { label: "about", correct: false },
        { label: "of", correct: false },
      ],
      answer: "I thanked my coworker for her help.",
      diagnosis: "thank someone FOR something.",
      diagnosisEs: "thank someone FOR something.",
    },
    {
      prompt: "The customer blamed us ___ the delay.",
      options: [
        { label: "for", correct: true },
        { label: "about", correct: false },
        { label: "of", correct: false },
      ],
      answer: "The customer blamed us for the delay.",
      diagnosis: "blame someone FOR something.",
      diagnosisEs: "blame someone FOR something.",
    },
    {
      prompt: "I apologized ___ the client for the mistake.",
      options: [
        { label: "to", correct: true },
        { label: "with", correct: false },
        { label: "at", correct: false },
      ],
      answer: "I apologized to the client for the mistake.",
      diagnosis: "apologize TO a person, FOR a problem. Two prepositions, one sentence.",
      diagnosisEs: "apologize TO una persona, FOR un problema. Dos preposiciones, una oración.",
    },
    {
      prompt: "I introduced the new employee ___ the team.",
      options: [
        { label: "to", correct: true },
        { label: "with", correct: false },
        { label: "at", correct: false },
      ],
      answer: "I introduced the new employee to the team.",
      diagnosis: "introduce someone TO someone — never “introduce with”.",
      diagnosisEs: "introduce someone TO someone — nunca “introduce with”.",
    },
    {
      prompt: "The company provided employees ___ training.",
      options: [
        { label: "with", correct: true },
        { label: "of", correct: false },
        { label: "to", correct: false },
      ],
      answer: "The company provided employees with training.",
      diagnosis: "provide someone WITH something (or provide something TO someone).",
      diagnosisEs: "provide someone WITH something (o provide something TO someone).",
    },
    {
      prompt: "The delay prevented us ___ finishing.",
      options: [
        { label: "from", correct: true },
        { label: "to", correct: false },
        { label: "of", correct: false },
      ],
      answer: "The delay prevented us from finishing.",
      diagnosis: "prevent someone FROM doing something — never “prevent to finish”.",
      diagnosisEs: "prevent someone FROM doing something — nunca “prevent to finish”.",
    },
    {
      prompt: "I apologized to my manager ___ arriving late.",
      options: [
        { label: "for", correct: true },
        { label: "about", correct: false },
        { label: "of", correct: false },
      ],
      answer: "I apologized to my manager for arriving late.",
      diagnosis: "apologize (to someone) FOR something — the thing takes “for”.",
      diagnosisEs: "apologize (to someone) FOR something — la cosa lleva “for”.",
    },
    {
      prompt: "The rain prevented them ___ traveling.",
      options: [
        { label: "from", correct: true },
        { label: "to", correct: false },
        { label: "of", correct: false },
      ],
      answer: "The rain prevented them from traveling.",
      diagnosis: "prevent someone FROM doing — always “from + -ing”.",
      diagnosisEs: "prevent someone FROM doing — siempre “from + -ing”.",
    },
  ],
};

export const l7Corrections: ErrorCorrectionSet = {
  title: "Fix person + preposition",
  titleEs: "Corrige persona + preposición",
  description: "The person comes first, then a fixed preposition. Tap the error.",
  descriptionEs: "La persona va primero, luego una preposición fija. Toca el error.",
  items: [
    {
      incorrect: "I thanked to my coworker for her help.",
      correct: "I thanked my coworker for her help.",
      incorrectHighlight: "thanked to",
      correctHighlight: "thanked",
      explanation: "thank someone (direct) FOR something. No “to” before the person.",
      explanationEs: "thank someone (directo) FOR something. Sin “to” antes de la persona.",
      errorType: "literal-translation",
    },
    {
      incorrect: "The customer blamed us about the delay.",
      correct: "The customer blamed us for the delay.",
      incorrectHighlight: "about",
      correctHighlight: "for",
      explanation: "blame someone FOR something — not “about”.",
      explanationEs: "blame someone FOR something — no “about”.",
      errorType: "preposition",
    },
    {
      incorrect: "I apologized the client for the mistake.",
      correct: "I apologized to the client for the mistake.",
      incorrectHighlight: "apologized the",
      correctHighlight: "apologized to the",
      explanation: "apologize TO a person. The “to” can’t be dropped.",
      explanationEs: "apologize TO una persona. No se puede quitar el “to”.",
      errorType: "preposition",
    },
    {
      incorrect: "She introduced me with her manager.",
      correct: "She introduced me to her manager.",
      incorrectHighlight: "with",
      correctHighlight: "to",
      explanation: "introduce someone TO someone — never “introduce with” (presentar con).",
      explanationEs: "introduce someone TO someone — nunca “introduce with” (presentar con).",
      errorType: "literal-translation",
    },
    {
      incorrect: "The company provided employees training.",
      correct: "The company provided employees with training.",
      incorrectHighlight: "employees training",
      correctHighlight: "employees with training",
      explanation: "provide someone WITH something (or provide something to someone).",
      explanationEs: "provide someone WITH something (o provide something to someone).",
      errorType: "preposition",
    },
    {
      incorrect: "The rain prevented us to travel.",
      correct: "The rain prevented us from traveling.",
      incorrectHighlight: "to travel",
      correctHighlight: "from traveling",
      explanation: "prevent someone FROM doing something — “from + -ing”, never “to + base”.",
      explanationEs: "prevent someone FROM doing something — “from + -ing”, nunca “to + base”.",
      errorType: "word-order",
    },
  ],
};
