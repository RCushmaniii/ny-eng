// Level 1 — Foundations Exam (15 questions across Lessons 1–3)
// Reuses ExamQuestion / ScoreTier types from the shared course/exam + CourseExam modules.
// "unit" = lesson number within the level; the CourseExam is told to label it "Lesson".

import type { ExamQuestion } from "../course/exam";
import type { ScoreTierDefinition } from "../../components/course/CourseExam";

export const foundationsExamMeta = {
  passingScore: 70,
  introSummary: "This exam covers Level 1 — the three foundation lessons on object patterns:",
  introSummaryEs:
    "Este examen cubre el Nivel 1 — las tres lecciones de fundamentos sobre patrones de objeto:",
  completionMessage:
    "You passed the Foundations exam. You've locked in the object patterns — direct vs “to”, remind/ask/tell, and the give/send/explain rules. On to Level 2: verb + preposition.",
  completionMessageEs:
    "Aprobaste el examen de Fundamentos. Dominaste los patrones de objeto — directo vs “to”, remind/ask/tell y las reglas de give/send/explain. Sigue el Nivel 2: verbo + preposición.",
};

export const foundationsExamQuestions: ExamQuestion[] = [
  // ── Lesson 1: direct vs to ──────────────────────────────────────────
  {
    id: 1,
    unit: 1,
    category: "grammar",
    prompt: "Which sentence is correct?",
    promptEs: "¿Cuál oración es correcta?",
    options: [
      { text: "I called my boss.", correct: true },
      { text: "I called to my boss.", correct: false },
      { text: "I called with my boss.", correct: false },
      { text: "I called at my boss.", correct: false },
    ],
    explanation:
      "call someone — direct object, no preposition. The Spanish “a” has no equivalent here.",
    explanationEs:
      "call someone — objeto directo, sin preposición. La “a” del español no tiene equivalente aquí.",
  },
  {
    id: 2,
    unit: 1,
    category: "grammar",
    prompt: "Which sentence is correct?",
    promptEs: "¿Cuál oración es correcta?",
    options: [
      { text: "I spoke to my manager about it.", correct: true },
      { text: "I spoke my manager about it.", correct: false },
      { text: "I spoke with to my manager about it.", correct: false },
      { text: "I spoke at my manager about it.", correct: false },
    ],
    explanation: "speak to someone — this verb requires “to” before the person.",
    explanationEs: "speak to someone — este verbo requiere “to” antes de la persona.",
  },
  {
    id: 3,
    unit: 1,
    category: "translation",
    prompt: 'Translate: "Escuché al cliente con atención."',
    promptEs: 'Traduce: "Escuché al cliente con atención."',
    options: [
      { text: "I listened to the customer carefully.", correct: true },
      { text: "I listened the customer carefully.", correct: false },
      { text: "I listened at the customer carefully.", correct: false },
      { text: "I heared the customer carefully.", correct: false },
    ],
    explanation: "listen to someone — always “to”, even before a person.",
    explanationEs: "listen to someone — siempre “to”, incluso antes de una persona.",
  },
  {
    id: 4,
    unit: 1,
    category: "grammar",
    prompt: "Choose the correct sentence with “contact”.",
    promptEs: "Elige la oración correcta con “contact”.",
    options: [
      { text: "She contacted the supplier yesterday.", correct: true },
      { text: "She contacted to the supplier yesterday.", correct: false },
      { text: "She contacted with the supplier yesterday.", correct: false },
      { text: "She contacted at the supplier yesterday.", correct: false },
    ],
    explanation: "contact someone — direct, like call, email, phone, text.",
    explanationEs: "contact someone — directo, como call, email, phone, text.",
  },
  {
    id: 5,
    unit: 1,
    category: "grammar",
    prompt: "Which sentence is correct?",
    promptEs: "¿Cuál oración es correcta?",
    options: [
      { text: "I apologized to my boss for the delay.", correct: true },
      { text: "I apologized my boss for the delay.", correct: false },
      { text: "I apologized with my boss for the delay.", correct: false },
      { text: "I apologized at my boss for the delay.", correct: false },
    ],
    explanation: "apologize to someone (for something). You apologize TO a person.",
    explanationEs: "apologize to someone (for something). Te disculpas TO (con) una persona.",
  },
  // ── Lesson 2: remind / ask / tell ───────────────────────────────────
  {
    id: 6,
    unit: 2,
    category: "grammar",
    prompt: "Complete: “I reminded my team ___ the deadline.” (a topic)",
    promptEs: "Completa: “I reminded my team ___ the deadline.” (un tema)",
    options: [
      { text: "about", correct: true },
      { text: "to", correct: false },
      { text: "for", correct: false },
      { text: "of to", correct: false },
    ],
    explanation: "remind someone about something — a topic they shouldn’t forget.",
    explanationEs: "remind someone about something — un tema que no deben olvidar.",
  },
  {
    id: 7,
    unit: 2,
    category: "grammar",
    prompt: "Complete: “I reminded my team ___ send the report.” (an action)",
    promptEs: "Completa: “I reminded my team ___ send the report.” (una acción)",
    options: [
      { text: "to", correct: true },
      { text: "about", correct: false },
      { text: "for", correct: false },
      { text: "about to", correct: false },
    ],
    explanation: "remind someone to do something — an action they need to take.",
    explanationEs: "remind someone to do something — una acción que deben realizar.",
  },
  {
    id: 8,
    unit: 2,
    category: "grammar",
    prompt: "Complete: “I asked my manager ___ help.” (you want to receive it)",
    promptEs: "Completa: “I asked my manager ___ help.” (quieres recibirlo)",
    options: [
      { text: "for", correct: true },
      { text: "about", correct: false },
      { text: "to", correct: false },
      { text: "for to", correct: false },
    ],
    explanation: "ask someone for something — you want to receive it.",
    explanationEs: "ask someone for something — quieres recibirlo.",
  },
  {
    id: 9,
    unit: 2,
    category: "translation",
    prompt: 'Translate: "Le dije la verdad."',
    promptEs: 'Traduce: "Le dije la verdad."',
    options: [
      { text: "I told him the truth.", correct: true },
      { text: "I told to him the truth.", correct: false },
      { text: "I said him the truth.", correct: false },
      { text: "I told him about the truth.", correct: false },
    ],
    explanation:
      "tell someone something — direct. “Told to him” copies “le dije”. (And use tell, not say, with a person.)",
    explanationEs:
      "tell someone something — directo. “Told to him” copia “le dije”. (Y usa tell, no say, con una persona.)",
  },
  {
    id: 10,
    unit: 2,
    category: "grammar",
    prompt: "Complete: “I told my team ___ arrive early.” (an instruction)",
    promptEs: "Completa: “I told my team ___ arrive early.” (una instrucción)",
    options: [
      { text: "to", correct: true },
      { text: "about", correct: false },
      { text: "for", correct: false },
      { text: "—", correct: false },
    ],
    explanation: "tell someone to do something — an instruction (an action).",
    explanationEs: "tell someone to do something — una instrucción (una acción).",
  },
  // ── Lesson 3: give / send / explain ─────────────────────────────────
  {
    id: 11,
    unit: 3,
    category: "grammar",
    prompt: "Which sentence is correct?",
    promptEs: "¿Cuál oración es correcta?",
    options: [
      { text: "I gave my daughter a gift.", correct: true },
      { text: "I gave a gift my daughter.", correct: false },
      { text: "I gave to my daughter a gift.", correct: false },
      { text: "I gave my daughter to a gift.", correct: false },
    ],
    explanation:
      "give someone something (person first, no “to”) — or give something TO someone. Both work; “a gift my daughter” doesn’t.",
    explanationEs:
      "give someone something (persona primero, sin “to”) — o give something TO someone. Ambas sirven; “a gift my daughter” no.",
  },
  {
    id: 12,
    unit: 3,
    category: "grammar",
    prompt: "Complete: “Can you ___?”",
    promptEs: "Completa: “Can you ___?”",
    options: [
      { text: "explain this rule to me", correct: true },
      { text: "explain me this rule", correct: false },
      { text: "explain to me this rule", correct: false },
      { text: "me explain this rule", correct: false },
    ],
    explanation:
      "explain something to someone — never “explain me”. The Spanish “explícame” causes this error.",
    explanationEs:
      "explain something to someone — nunca “explain me”. El “explícame” del español causa este error.",
  },
  {
    id: 13,
    unit: 3,
    category: "translation",
    prompt: 'Translate: "Le expliqué el problema a mi gerente."',
    promptEs: 'Traduce: "Le expliqué el problema a mi gerente."',
    options: [
      { text: "I explained the problem to my manager.", correct: true },
      { text: "I explained my manager the problem.", correct: false },
      { text: "I explained to my manager the problem.", correct: false },
      { text: "I explained my manager about the problem.", correct: false },
    ],
    explanation:
      "explain something to someone — thing first, then “to” + person. No double-object order.",
    explanationEs:
      "explain something to someone — cosa primero, luego “to” + persona. Sin orden de doble objeto.",
  },
  {
    id: 14,
    unit: 3,
    category: "grammar",
    prompt: "Which sentence is correct?",
    promptEs: "¿Cuál oración es correcta?",
    options: [
      { text: "I sent an email to my manager.", correct: true },
      { text: "I sent to my manager an email.", correct: false },
      { text: "I sent an email at my manager.", correct: false },
      { text: "I sent to an email my manager.", correct: false },
    ],
    explanation:
      "send something to someone — or send someone something. With the thing first, keep “to” next to the person.",
    explanationEs:
      "send something to someone — o send someone something. Con la cosa primero, mantén “to” junto a la persona.",
  },
  {
    id: 15,
    unit: 3,
    category: "grammar",
    prompt: "Which sentence is correct?",
    promptEs: "¿Cuál oración es correcta?",
    options: [
      { text: "She described the situation to me.", correct: true },
      { text: "She described me the situation.", correct: false },
      { text: "She described to me the situation.", correct: false },
      { text: "She me described the situation.", correct: false },
    ],
    explanation: "describe behaves like explain — thing + to + person only. Never “describe me”.",
    explanationEs:
      "describe se comporta como explain — cosa + to + persona únicamente. Nunca “describe me”.",
  },
];

export const foundationsExamTiers: readonly ScoreTierDefinition[] = [
  {
    minPercent: 90,
    tier: "Pattern Master",
    tierEs: "Maestro de Patrones",
    color: "emerald",
    message:
      "Outstanding. The object patterns are automatic for you now. You're ready for Level 2 — verb + preposition.",
    messageEs:
      "Excelente. Los patrones de objeto ya son automáticos para ti. Estás listo para el Nivel 2 — verbo + preposición.",
  },
  {
    minPercent: 70,
    tier: "Passed",
    tierEs: "Aprobado",
    color: "amber",
    message: "Solid work. Review the lessons where you missed a question, then move on to Level 2.",
    messageEs:
      "Buen trabajo. Repasa las lecciones donde fallaste una pregunta y luego avanza al Nivel 2.",
  },
  {
    minPercent: 0,
    tier: "Keep Practicing",
    tierEs: "Sigue Practicando",
    color: "rose",
    message:
      "These patterns are the foundation for everything else — worth nailing. Redo the Level 1 drills and try again.",
    messageEs:
      "Estos patrones son la base de todo lo demás — vale la pena dominarlos. Repite los ejercicios del Nivel 1 e inténtalo otra vez.",
  },
] as const;
