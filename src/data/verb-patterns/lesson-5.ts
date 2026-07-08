// Level 2 · Lesson 5 — "To Do vs Doing"
// The gerund / infinitive split. Some verbs take "to + base"; others take "-ing". Learn the list.

import type { PatternDrillSet } from "./types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

export const l5Drill: PatternDrillSet = {
  title: "To do or doing?",
  titleEs: "¿To do o doing?",
  instruction: "Does this verb take “to + base” or “-ing”?",
  instructionEs: "¿Este verbo toma “to + base” o “-ing”?",
  items: [
    {
      prompt: "I decided ___ the client.",
      options: [
        { label: "to call", correct: true },
        { label: "calling", correct: false },
      ],
      answer: "I decided to call the client.",
      diagnosis: "decide TO DO something. Same group: plan, hope, promise, refuse, manage, fail.",
      diagnosisEs:
        "decide TO DO something. Mismo grupo: plan, hope, promise, refuse, manage, fail.",
    },
    {
      prompt: "I enjoy ___ with clients.",
      options: [
        { label: "to work", correct: false },
        { label: "working", correct: true },
      ],
      answer: "I enjoy working with clients.",
      diagnosis: "enjoy DOING something. Same group: avoid, finish, keep, consider, practice.",
      diagnosisEs: "enjoy DOING something. Mismo grupo: avoid, finish, keep, consider, practice.",
    },
    {
      prompt: "She avoided ___ the question.",
      options: [
        { label: "to answer", correct: false },
        { label: "answering", correct: true },
      ],
      answer: "She avoided answering the question.",
      diagnosis: "avoid DOING something — never “avoid to answer”.",
      diagnosisEs: "avoid DOING something — nunca “avoid to answer”.",
    },
    {
      prompt: "We plan ___ the project.",
      options: [
        { label: "to start", correct: true },
        { label: "starting", correct: false },
      ],
      answer: "We plan to start the project.",
      diagnosis: "plan TO DO something. A future intention → infinitive.",
      diagnosisEs: "plan TO DO something. Una intención futura → infinitivo.",
    },
    {
      prompt: "He refused ___ the contract.",
      options: [
        { label: "to sign", correct: true },
        { label: "signing", correct: false },
      ],
      answer: "He refused to sign the contract.",
      diagnosis: "refuse TO DO something.",
      diagnosisEs: "refuse TO DO something.",
    },
    {
      prompt: "They considered ___ the price.",
      options: [
        { label: "to reduce", correct: false },
        { label: "reducing", correct: true },
      ],
      answer: "They considered reducing the price.",
      diagnosis: "consider DOING something — thinking about it.",
      diagnosisEs: "consider DOING something — pensarlo.",
    },
    {
      prompt: "I recommend ___ the details.",
      options: [
        { label: "to check", correct: false },
        { label: "checking", correct: true },
      ],
      answer: "I recommend checking the details.",
      diagnosis: "recommend DOING something. Same as suggest doing.",
      diagnosisEs: "recommend DOING something. Igual que suggest doing.",
    },
    {
      prompt: "We managed ___ the problem.",
      options: [
        { label: "to solve", correct: true },
        { label: "solving", correct: false },
      ],
      answer: "We managed to solve the problem.",
      diagnosis: "manage TO DO something — succeed in doing it.",
      diagnosisEs: "manage TO DO something — lograr hacerlo.",
    },
    {
      prompt: "She suggested ___ until Friday.",
      options: [
        { label: "to wait", correct: false },
        { label: "waiting", correct: true },
      ],
      answer: "She suggested waiting until Friday.",
      diagnosis: "suggest DOING — never “suggest to wait”. (More on suggest in Level 3.)",
      diagnosisEs: "suggest DOING — nunca “suggest to wait”. (Más sobre suggest en el Nivel 3.)",
    },
    {
      prompt: "I hope ___ more confidently.",
      options: [
        { label: "to speak", correct: true },
        { label: "speaking", correct: false },
      ],
      answer: "I hope to speak more confidently.",
      diagnosis: "hope TO DO something.",
      diagnosisEs: "hope TO DO something.",
    },
  ],
};

export const l5Corrections: ErrorCorrectionSet = {
  title: "Fix to-do vs doing",
  titleEs: "Corrige to-do vs doing",
  description: "The verb decides: infinitive or -ing. Tap the wrong form.",
  descriptionEs: "El verbo decide: infinitivo o -ing. Toca la forma incorrecta.",
  items: [
    {
      incorrect: "I decided calling my manager.",
      correct: "I decided to call my manager.",
      incorrectHighlight: "calling",
      correctHighlight: "to call",
      explanation: "decide TO DO something. “Deciding + -ing” is a very common error.",
      explanationEs: "decide TO DO something. “Decide + -ing” es un error muy común.",
      errorType: "word-order",
    },
    {
      incorrect: "She enjoys to work with customers.",
      correct: "She enjoys working with customers.",
      incorrectHighlight: "to work",
      correctHighlight: "working",
      explanation: "enjoy DOING something — never “enjoy to work”.",
      explanationEs: "enjoy DOING something — nunca “enjoy to work”.",
      errorType: "word-order",
    },
    {
      incorrect: "We suggested to wait until tomorrow.",
      correct: "We suggested waiting until tomorrow.",
      incorrectHighlight: "to wait",
      correctHighlight: "waiting",
      explanation: "suggest DOING something. Never “suggest to do”.",
      explanationEs: "suggest DOING something. Nunca “suggest to do”.",
      errorType: "word-order",
    },
    {
      incorrect: "He refused signing the document.",
      correct: "He refused to sign the document.",
      incorrectHighlight: "signing",
      correctHighlight: "to sign",
      explanation: "refuse TO DO something.",
      explanationEs: "refuse TO DO something.",
      errorType: "word-order",
    },
    {
      incorrect: "They considered to change the supplier.",
      correct: "They considered changing the supplier.",
      incorrectHighlight: "to change",
      correctHighlight: "changing",
      explanation: "consider DOING something.",
      explanationEs: "consider DOING something.",
      errorType: "word-order",
    },
    {
      incorrect: "I hope improving my English this year.",
      correct: "I hope to improve my English this year.",
      incorrectHighlight: "improving",
      correctHighlight: "to improve",
      explanation: "hope TO DO something.",
      explanationEs: "hope TO DO something.",
      errorType: "word-order",
    },
  ],
};
