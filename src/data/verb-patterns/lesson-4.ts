// Level 2 · Lesson 4 — "Verb + Preposition"
// The six preposition families. Learn each verb WITH its preposition as one chunk.

import type { PatternDrillSet } from "./types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

export const l4Drill: PatternDrillSet = {
  title: "Which preposition?",
  titleEs: "¿Cuál preposición?",
  instruction: "Each verb is glued to one preposition. Pick it.",
  instructionEs: "Cada verbo está pegado a una preposición. Elígela.",
  items: [
    {
      prompt: "I depend ___ my team.",
      options: [
        { label: "on", correct: true },
        { label: "of", correct: false },
        { label: "in", correct: false },
      ],
      answer: "I depend on my team.",
      diagnosis: "depend ON — never “depend of” (that copies Spanish “depender de”).",
      diagnosisEs: "depend ON — nunca “depend of” (eso copia “depender de”).",
    },
    {
      prompt: "We waited ___ the client.",
      options: [
        { label: "for", correct: true },
        { label: "to", correct: false },
        { label: "on", correct: false },
      ],
      answer: "We waited for the client.",
      diagnosis: "wait FOR someone/something. “Waited the client” is missing the preposition.",
      diagnosisEs: "wait FOR someone/something. “Waited the client” le falta la preposición.",
    },
    {
      prompt: "She applied ___ a new job.",
      options: [
        { label: "for", correct: true },
        { label: "to", correct: false },
        { label: "at", correct: false },
      ],
      answer: "She applied for a new job.",
      diagnosis: "apply FOR a job/position. (You apply TO a company, but FOR a job.)",
      diagnosisEs: "apply FOR a job/position. (Aplicas TO una empresa, pero FOR un puesto.)",
    },
    {
      prompt: "I focus ___ the main problem.",
      options: [
        { label: "on", correct: true },
        { label: "in", correct: false },
        { label: "at", correct: false },
      ],
      answer: "I focus on the main problem.",
      diagnosis: "focus ON — never “focus in”. Same family: work on, rely on, insist on.",
      diagnosisEs: "focus ON — nunca “focus in”. Misma familia: work on, rely on, insist on.",
    },
    {
      prompt: "They worried ___ the deadline.",
      options: [
        { label: "about", correct: true },
        { label: "for", correct: false },
        { label: "with", correct: false },
      ],
      answer: "They worried about the deadline.",
      diagnosis: "worry ABOUT something. Same family: think about, complain about, hear about.",
      diagnosisEs: "worry ABOUT something. Misma familia: think about, complain about, hear about.",
    },
    {
      prompt: "I agree ___ your decision.",
      options: [
        { label: "with", correct: true },
        { label: "to", correct: false },
        { label: "in", correct: false },
      ],
      answer: "I agree with your decision.",
      diagnosis: "agree WITH a person or an idea. Same family: deal with, meet with, work with.",
      diagnosisEs:
        "agree WITH una persona o una idea. Misma familia: deal with, meet with, work with.",
    },
    {
      prompt: "He apologized ___ the mistake.",
      options: [
        { label: "for", correct: true },
        { label: "about", correct: false },
        { label: "of", correct: false },
      ],
      answer: "He apologized for the mistake.",
      diagnosis: "apologize FOR a problem (and TO a person). Same FOR family: pay for, thank for.",
      diagnosisEs:
        "apologize FOR un problema (y TO una persona). Misma familia FOR: pay for, thank for.",
    },
    {
      prompt: "We dealt ___ the problem.",
      options: [
        { label: "with", correct: true },
        { label: "about", correct: false },
        { label: "to", correct: false },
      ],
      answer: "We dealt with the problem.",
      diagnosis: "deal WITH something — handle it. Never “deal about”.",
      diagnosisEs: "deal WITH something — manejarlo. Nunca “deal about”.",
    },
    {
      prompt: "I believe ___ hard work.",
      options: [
        { label: "in", correct: true },
        { label: "on", correct: false },
        { label: "of", correct: false },
      ],
      answer: "I believe in hard work.",
      diagnosis: "believe IN something. Same IN family: participate in, succeed in, invest in.",
      diagnosisEs: "believe IN something. Misma familia IN: participate in, succeed in, invest in.",
    },
    {
      prompt: "She borrowed money ___ her sister.",
      options: [
        { label: "from", correct: true },
        { label: "of", correct: false },
        { label: "to", correct: false },
      ],
      answer: "She borrowed money from her sister.",
      diagnosis: "borrow FROM someone. Same FROM family: hear from, learn from, recover from.",
      diagnosisEs: "borrow FROM someone. Misma familia FROM: hear from, learn from, recover from.",
    },
    {
      prompt: "I love to ___ music while I work.",
      options: [
        { label: "listen to", correct: true },
        { label: "listen", correct: false },
        { label: "listen at", correct: false },
      ],
      answer: "I love to listen to music while I work.",
      diagnosis: "listen TO something — Spanish “escuchar” is direct, but English needs “to”.",
      diagnosisEs:
        "listen TO something — “escuchar” es directo en español, pero el inglés necesita “to”.",
    },
    {
      prompt: "Everyone, please ___ the screen.",
      options: [
        { label: "look at", correct: true },
        { label: "look", correct: false },
        { label: "look to", correct: false },
      ],
      answer: "Everyone, please look at the screen.",
      diagnosis:
        "look AT something you view — “mirar” is direct in Spanish, but English needs “at”. (look FOR = search.)",
      diagnosisEs:
        "look AT algo que ves — “mirar” es directo en español, pero el inglés necesita “at”. (look FOR = buscar.)",
    },
    {
      prompt: "We need to ___ the future, not the past.",
      options: [
        { label: "think about", correct: true },
        { label: "think in", correct: false },
        { label: "think", correct: false },
      ],
      answer: "We need to think about the future, not the past.",
      diagnosis: "think ABOUT something — never “think in” (that copies “pensar en”).",
      diagnosisEs: "think ABOUT something — nunca “think in” (eso copia “pensar en”).",
    },
  ],
};

export const l4Corrections: ErrorCorrectionSet = {
  title: "Fix the preposition",
  titleEs: "Corrige la preposición",
  description: "Each verb is glued to one preposition. Tap the wrong one.",
  descriptionEs: "Cada verbo está pegado a una preposición. Toca la incorrecta.",
  items: [
    {
      incorrect: "I depend of my team.",
      correct: "I depend on my team.",
      incorrectHighlight: "of",
      correctHighlight: "on",
      explanation: "depend ON, not “of”. This is a direct copy of Spanish “depender de”.",
      explanationEs: "depend ON, no “of”. Es copia directa de “depender de”.",
      errorType: "literal-translation",
    },
    {
      incorrect: "We need to focus in the main problem.",
      correct: "We need to focus on the main problem.",
      incorrectHighlight: "focus in",
      correctHighlight: "focus on",
      explanation: "focus ON. The “in” copies “enfocarse en”; English fixes it to “on”.",
      explanationEs: "focus ON. El “in” copia “enfocarse en”; el inglés lo fija en “on”.",
      errorType: "preposition",
    },
    {
      incorrect: "He applied to a new job.",
      correct: "He applied for a new job.",
      incorrectHighlight: "to",
      correctHighlight: "for",
      explanation: "apply FOR a job. (apply TO exists — but for a company, not a job.)",
      explanationEs: "apply FOR a job. (apply TO existe — pero para una empresa, no un puesto.)",
      errorType: "preposition",
    },
    {
      incorrect: "She waited the client for ten minutes.",
      correct: "She waited for the client for ten minutes.",
      incorrectHighlight: "waited the",
      correctHighlight: "waited for the",
      explanation: "wait FOR someone. The preposition can’t be dropped before the person.",
      explanationEs: "wait FOR someone. No se puede quitar la preposición antes de la persona.",
      errorType: "preposition",
    },
    {
      incorrect: "He worried for the price increase.",
      correct: "He worried about the price increase.",
      incorrectHighlight: "for",
      correctHighlight: "about",
      explanation: "worry ABOUT something. “For” is a translation of “preocuparse por”.",
      explanationEs: "worry ABOUT something. “For” es traducción de “preocuparse por”.",
      errorType: "preposition",
    },
    {
      incorrect: "We dealt about the issue yesterday.",
      correct: "We dealt with the issue yesterday.",
      incorrectHighlight: "about",
      correctHighlight: "with",
      explanation: "deal WITH a problem — handle it. Never “deal about”.",
      explanationEs: "deal WITH un problema — manejarlo. Nunca “deal about”.",
      errorType: "preposition",
    },
    {
      incorrect: "I like to listen music in the car.",
      correct: "I like to listen to music in the car.",
      incorrectHighlight: "listen music",
      correctHighlight: "listen to music",
      explanation:
        "listen TO something. Spanish “escuchar” takes a direct object; English needs “to”.",
      explanationEs:
        "listen TO something. “Escuchar” lleva objeto directo; el inglés necesita “to”.",
      errorType: "literal-translation",
    },
    {
      incorrect: "Please look the screen for a moment.",
      correct: "Please look at the screen for a moment.",
      incorrectHighlight: "look the",
      correctHighlight: "look at the",
      explanation:
        "look AT something you’re viewing. “Mirar” is direct in Spanish; English needs “at”.",
      explanationEs:
        "look AT algo que estás viendo. “Mirar” es directo en español; el inglés necesita “at”.",
      errorType: "literal-translation",
    },
    {
      incorrect: "Let’s think in the long-term strategy.",
      correct: "Let’s think about the long-term strategy.",
      incorrectHighlight: "think in",
      correctHighlight: "think about",
      explanation: "think ABOUT something. “In” copies “pensar en”; English fixes it to “about”.",
      explanationEs:
        "think ABOUT something. El “in” copia “pensar en”; el inglés lo fija en “about”.",
      errorType: "preposition",
    },
  ],
};
