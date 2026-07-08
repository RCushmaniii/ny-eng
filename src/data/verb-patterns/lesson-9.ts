// Level 3 · Lesson 9 — "Reporting Verbs"
// Reporting what people said. say vs tell, the suggest/recommend trap (never "suggest sb to do"),
// and the report patterns: promise/agree/offer + to, warn/remind + sb + to.

import type { PatternDrillSet } from "./types";
import type { ErrorCorrectionSet } from "@data/intermediate/types";

export const l9Drill: PatternDrillSet = {
  title: "Report it correctly",
  titleEs: "Repórtalo correctamente",
  instruction: "Choose the pattern that reports what was said.",
  instructionEs: "Elige el patrón que reporta lo que se dijo.",
  items: [
    {
      prompt: "He ___ me that the meeting was cancelled.",
      options: [
        { label: "told", correct: true },
        { label: "said", correct: false },
      ],
      answer: "He told me that the meeting was cancelled.",
      diagnosis: "TELL takes a person: tell someone. SAY does not: say (that)… — never “said me”.",
      diagnosisEs: "TELL lleva persona: tell someone. SAY no: say (that)… — nunca “said me”.",
    },
    {
      prompt: "She ___ that she would send the file by noon.",
      options: [
        { label: "said", correct: true },
        { label: "told", correct: false },
      ],
      answer: "She said that she would send the file by noon.",
      diagnosis: "SAY (that)… with no person. If you name the listener, use TELL + person.",
      diagnosisEs: "SAY (that)… sin persona. Si nombras al oyente, usa TELL + persona.",
    },
    {
      prompt: "My manager suggested ___ until the numbers were final.",
      options: [
        { label: "waiting", correct: true },
        { label: "to wait", correct: false },
      ],
      answer: "My manager suggested waiting until the numbers were final.",
      diagnosis: "suggest DOING (or suggest that sb do) — never “suggest to do”.",
      diagnosisEs: "suggest DOING (o suggest that sb do) — nunca “suggest to do”.",
    },
    {
      prompt: "I recommended ___ the contract before signing.",
      options: [
        { label: "reviewing", correct: true },
        { label: "to review", correct: false },
      ],
      answer: "I recommended reviewing the contract before signing.",
      diagnosis: "recommend DOING — same trap as suggest. Never “recommend me to review”.",
      diagnosisEs: "recommend DOING — misma trampa que suggest. Nunca “recommend me to review”.",
    },
    {
      prompt: "The client ___ to pay within thirty days.",
      options: [
        { label: "promised", correct: true },
        { label: "promised us", correct: false },
      ],
      answer: "The client promised to pay within thirty days.",
      diagnosis:
        "promise TO DO (you can add a person: promise someone that…). Here: promise to do.",
      diagnosisEs:
        "promise TO DO (puedes añadir persona: promise someone that…). Aquí: promise to do.",
    },
    {
      prompt: "They ___ us to arrive early for the audit.",
      options: [
        { label: "reminded", correct: true },
        { label: "said", correct: false },
      ],
      answer: "They reminded us to arrive early for the audit.",
      diagnosis: "remind someone TO DO. Also this group: warn, advise, tell + sb + to do.",
      diagnosisEs: "remind someone TO DO. También este grupo: warn, advise, tell + sb + to do.",
    },
    {
      prompt: "He ___ that we should postpone the launch.",
      options: [
        { label: "suggested", correct: true },
        { label: "suggested us", correct: false },
      ],
      answer: "He suggested that we should postpone the launch.",
      diagnosis: "suggest THAT sb (should) do — never “suggested us to postpone”.",
      diagnosisEs: "suggest THAT sb (should) do — nunca “suggested us to postpone”.",
    },
    {
      prompt: "She ___ to help me with the presentation.",
      options: [
        { label: "offered", correct: true },
        { label: "offered me", correct: false },
      ],
      answer: "She offered to help me with the presentation.",
      diagnosis: "offer TO DO something. Same group: agree, refuse, threaten + to do.",
      diagnosisEs: "offer TO DO something. Mismo grupo: agree, refuse, threaten + to do.",
    },
  ],
};

export const l9Corrections: ErrorCorrectionSet = {
  title: "Fix the reporting verb",
  titleEs: "Corrige el verbo de reporte",
  description: "say/tell, suggest/recommend, and the to-do reporters. Tap the error.",
  descriptionEs: "say/tell, suggest/recommend y los reporteros con to-do. Toca el error.",
  items: [
    {
      incorrect: "He said me that the project was approved.",
      correct: "He told me that the project was approved.",
      incorrectHighlight: "said me",
      correctHighlight: "told me",
      explanation: "With a person, use TELL someone. SAY never takes a direct person.",
      explanationEs: "Con una persona, usa TELL someone. SAY nunca lleva persona directa.",
      errorType: "literal-translation",
    },
    {
      incorrect: "She told that she was running late.",
      correct: "She said that she was running late.",
      incorrectHighlight: "told that",
      correctHighlight: "said that",
      explanation: "TELL needs a person (tell me/us). With no listener named, use SAY that…",
      explanationEs: "TELL necesita persona (tell me/us). Sin oyente nombrado, usa SAY that…",
      errorType: "word-order",
    },
    {
      incorrect: "My boss suggested me to take the lead on this.",
      correct: "My boss suggested that I take the lead on this.",
      incorrectHighlight: "suggested me to take",
      correctHighlight: "suggested that I take",
      explanation: "Never “suggest sb to do”. Use suggest DOING or suggest that sb do.",
      explanationEs: "Nunca “suggest sb to do”. Usa suggest DOING o suggest that sb do.",
      errorType: "word-order",
    },
    {
      incorrect: "I recommend to book the venue early.",
      correct: "I recommend booking the venue early.",
      incorrectHighlight: "to book",
      correctHighlight: "booking",
      explanation: "recommend DOING something — same pattern as suggest.",
      explanationEs: "recommend DOING something — mismo patrón que suggest.",
      errorType: "word-order",
    },
    {
      incorrect: "They promised me sending the samples this week.",
      correct: "They promised to send the samples this week.",
      incorrectHighlight: "sending",
      correctHighlight: "to send",
      explanation: "promise TO DO. (You can name a person: promised me that they would send…)",
      explanationEs: "promise TO DO. (Puedes nombrar persona: promised me that they would send…)",
      errorType: "word-order",
    },
    {
      incorrect: "The auditor reminded us arriving at nine.",
      correct: "The auditor reminded us to arrive at nine.",
      incorrectHighlight: "us arriving",
      correctHighlight: "us to arrive",
      explanation: "remind someone TO DO something — the “to” is required.",
      explanationEs: "remind someone TO DO something — el “to” es obligatorio.",
      errorType: "word-order",
    },
  ],
};
