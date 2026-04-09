// Final Exam: "Building Fluency" — Intermediate Course Comprehensive Assessment
// 20 multiple-choice questions covering all 10 intermediate units
// Reuses ExamQuestion / ExamOption / ExamResult types from the beginner exam module

import type { ExamQuestion, ExamResult } from "../course/exam";
import type { ScoreTier } from "../../components/course/CourseExam";

export const examMeta = {
  title: "Final Exam",
  titleEs: "Examen Final",
  subtitle: "Building Fluency — Comprehensive Assessment",
  subtitleEs: "Construyendo Fluidez — Evaluación Integral",
  description:
    "20 questions covering modals, conditionals, narrative tenses, opinions, deductions, and the rest of the intermediate curriculum. Test what you've learned across all 10 units.",
  descriptionEs:
    "20 preguntas sobre modales, condicionales, tiempos narrativos, opiniones, deducciones y el resto del currículo intermedio. Evalúa lo que has aprendido en las 10 unidades.",
  passingScore: 70,
};

export const examQuestions: ExamQuestion[] = [
  // ─── Unit 1: The Phrasal Verb Problem ──────────────────────────────
  {
    id: 1,
    unit: 1,
    category: "vocabulary",
    prompt: 'What does "find out" mean?',
    promptEs: '¿Qué significa "find out"?',
    options: [
      { text: "to discover information", correct: true },
      { text: "to leave a place", correct: false },
      { text: "to make a list", correct: false },
      { text: "to forget something", correct: false },
    ],
    explanation:
      '"Find out" means to discover information, often something new or surprising. It is one of the most useful phrasal verbs in everyday English.',
    explanationEs:
      '"Find out" significa descubrir información, frecuentemente algo nuevo o sorprendente. Es uno de los phrasal verbs más útiles en inglés cotidiano.',
  },
  {
    id: 2,
    unit: 1,
    category: "grammar",
    prompt: "Which sentence uses the present perfect correctly?",
    promptEs: "¿Qué oración usa el presente perfecto correctamente?",
    options: [
      { text: "I have lived here for five years.", correct: true },
      { text: "I have lived here since five years.", correct: false },
      { text: "I am living here for five years.", correct: false },
      { text: "I live here since five years.", correct: false },
    ],
    explanation:
      "Use 'for' with a duration ('for five years') and the present perfect ('have lived') for an ongoing past situation.",
    explanationEs:
      "Usa 'for' con una duración ('for five years') y el presente perfecto ('have lived') para una situación pasada continua.",
  },

  // ─── Unit 2: At the Office ─────────────────────────────────────────
  {
    id: 3,
    unit: 2,
    category: "grammar",
    prompt: "Choose the correct present perfect continuous form:",
    promptEs: "Elige la forma correcta del presente perfecto continuo:",
    options: [
      { text: "She has been working on the project all morning.", correct: true },
      { text: "She has been work on the project all morning.", correct: false },
      { text: "She has working on the project all morning.", correct: false },
      { text: "She is been working on the project all morning.", correct: false },
    ],
    explanation:
      "Present perfect continuous = have/has + been + verb-ing. 'Has been working' is the correct form.",
    explanationEs:
      "El presente perfecto continuo = have/has + been + verbo-ing. 'Has been working' es la forma correcta.",
  },
  {
    id: 4,
    unit: 2,
    category: "vocabulary",
    prompt: "What does 'follow up' most commonly mean in business English?",
    promptEs: "¿Qué significa 'follow up' más comúnmente en inglés de negocios?",
    options: [
      { text: "to check on the progress of something", correct: true },
      { text: "to walk behind someone", correct: false },
      { text: "to obey a command", correct: false },
      { text: "to climb upward", correct: false },
    ],
    explanation:
      "'Follow up' means to check on the progress of something or contact someone again about a previous matter. It is one of the most common verbs in business English.",
    explanationEs:
      "'Follow up' significa verificar el progreso de algo o contactar a alguien de nuevo sobre un asunto previo. Es uno de los verbos más comunes en inglés de negocios.",
  },

  // ─── Unit 3: Getting Around ────────────────────────────────────────
  {
    id: 5,
    unit: 3,
    category: "grammar",
    prompt: "Choose the correct first conditional sentence:",
    promptEs: "Elige la oración correcta del primer condicional:",
    options: [
      { text: "If it rains, we will stay home.", correct: true },
      { text: "If it will rain, we will stay home.", correct: false },
      { text: "If it rains, we stay home.", correct: false },
      { text: "If it would rain, we will stay home.", correct: false },
    ],
    explanation:
      "First conditional = If + present simple, will + base verb. NEVER use 'will' in the if-clause.",
    explanationEs:
      "Primer condicional = If + presente simple, will + verbo base. NUNCA uses 'will' en la cláusula 'if'.",
  },
  {
    id: 6,
    unit: 3,
    category: "vocabulary",
    prompt: "Which sentence uses the correct travel phrasal verb?",
    promptEs: "¿Qué oración usa el phrasal verb de viaje correcto?",
    options: [
      { text: "Hurry — we need to get on the train before it leaves.", correct: true },
      { text: "Hurry — we need to get in the train before it leaves.", correct: false },
      { text: "Hurry — we need to get up the train before it leaves.", correct: false },
      { text: "Hurry — we need to get into the train before it leaves.", correct: false },
    ],
    explanation:
      "For buses, trains, planes and bikes, use 'get ON'. Use 'get IN' only for cars, taxis, and small enclosed vehicles. (Note: 'get off at the next stop' is the natural phrase for leaving a bus or train.)",
    explanationEs:
      "Para autobuses, trenes, aviones y bicicletas, usa 'get ON'. Usa 'get IN' solo para coches, taxis y vehículos pequeños cerrados. (Nota: 'get off at the next stop' es la frase natural para bajarse de un autobús o tren.)",
  },

  // ─── Unit 4: Making Plans ──────────────────────────────────────────
  {
    id: 7,
    unit: 4,
    category: "translation",
    prompt: 'How do you say "¿Te gustaría acompañarnos a cenar?" in polite English?',
    promptEs: 'Traduce al inglés cortés: "¿Te gustaría acompañarnos a cenar?"',
    options: [
      { text: "Would you like to join us for dinner?", correct: true },
      { text: "Do you want to come to dinner with us?", correct: false },
      { text: "You like to come to dinner with us?", correct: false },
      { text: "Are you wanting to come to dinner?", correct: false },
    ],
    explanation:
      "'Would you like to' is the polite, sophisticated form for invitations — the natural translation of '¿Te gustaría?'. 'Do you want' is too direct for social contexts.",
    explanationEs:
      "'Would you like to' es la forma cortés y sofisticada para invitaciones — la traducción natural de '¿Te gustaría?'. 'Do you want' es demasiado directo para contextos sociales.",
  },
  {
    id: 8,
    unit: 4,
    category: "grammar",
    prompt: "Choose the correct second conditional:",
    promptEs: "Elige el segundo condicional correcto:",
    options: [
      { text: "If I were you, I would accept the offer.", correct: true },
      { text: "If I would be you, I would accept the offer.", correct: false },
      { text: "If I am you, I will accept the offer.", correct: false },
      { text: "If I was you, I will accept the offer.", correct: false },
    ],
    explanation:
      "Second conditional with 'be' uses 'were' for ALL persons (I, he, she, it) — this is the subjunctive mood. 'Were' is the educated B2+ choice.",
    explanationEs:
      "El segundo condicional con 'be' usa 'were' para TODAS las personas (I, he, she, it) — este es el modo subjuntivo. 'Were' es la opción educada B2+.",
  },

  // ─── Unit 5: Telling Stories ───────────────────────────────────────
  {
    id: 9,
    unit: 5,
    category: "grammar",
    prompt: "Which sentence correctly uses the past perfect?",
    promptEs: "¿Qué oración usa correctamente el pasado perfecto?",
    options: [
      { text: "When I arrived, the meeting had already started.", correct: true },
      { text: "When I arrived, the meeting already started.", correct: false },
      { text: "When I had arrived, the meeting started.", correct: false },
      { text: "When I arrived, the meeting was already started.", correct: false },
    ],
    explanation:
      "Use past perfect ('had started') for the EARLIER of two past events. The meeting started before you arrived.",
    explanationEs:
      "Usa el pasado perfecto ('had started') para el ANTERIOR de dos eventos pasados. La junta empezó antes de que llegaras.",
  },
  {
    id: 10,
    unit: 5,
    category: "grammar",
    prompt: "How do you correctly report what someone said in the past?",
    promptEs: "¿Cómo reportas correctamente lo que alguien dijo en el pasado?",
    options: [
      { text: "She said she would call me later.", correct: true },
      { text: "She said me she will call me later.", correct: false },
      { text: "She said that she will call me later.", correct: false },
      { text: "She told that she would call me later.", correct: false },
    ],
    explanation:
      "In reported speech, 'will' shifts to 'would' when the reporting verb is in the past. Also, 'tell' takes a direct object ('told me'), but 'said' does not ('said that').",
    explanationEs:
      "En el discurso indirecto, 'will' cambia a 'would' cuando el verbo que reporta está en pasado. Además, 'tell' toma un objeto directo ('told me'), pero 'said' no ('said that').",
  },

  // ─── Unit 6: Expressing Opinions ───────────────────────────────────
  {
    id: 11,
    unit: 6,
    category: "grammar",
    prompt: "Choose the correct third conditional:",
    promptEs: "Elige el tercer condicional correcto:",
    options: [
      { text: "If I had known, I would have called you.", correct: true },
      { text: "If I would have known, I would have called you.", correct: false },
      { text: "If I knew, I would call you.", correct: false },
      { text: "If I had known, I will have called you.", correct: false },
    ],
    explanation:
      "Third conditional = If + had + past participle, would have + past participle. NEVER use 'would have' in the if-clause.",
    explanationEs:
      "Tercer condicional = If + had + participio, would have + participio. NUNCA uses 'would have' en la cláusula 'if'.",
  },
  {
    id: 12,
    unit: 6,
    category: "vocabulary",
    prompt: "Which is the most polite way to disagree with someone?",
    promptEs: "¿Cuál es la forma más cortés de discrepar con alguien?",
    options: [
      { text: "I see your point, but I'm not sure I agree.", correct: true },
      { text: "You are wrong about that.", correct: false },
      { text: "I am not agree with you.", correct: false },
      { text: "No, that is bad idea.", correct: false },
    ],
    explanation:
      "Diplomatic disagreement always acknowledges the other person ('I see your point') before pushing back. Direct contradiction damages relationships in English.",
    explanationEs:
      "El desacuerdo diplomático siempre reconoce a la otra persona ('I see your point') antes de objetar. La contradicción directa daña relaciones en inglés.",
  },

  // ─── Unit 7: Health and Emergencies ────────────────────────────────
  {
    id: 13,
    unit: 7,
    category: "grammar",
    prompt: "Choose the correct passive voice with an advice modal:",
    promptEs: "Elige la voz pasiva correcta con un modal de consejo:",
    options: [
      { text: "This medication should be taken with food.", correct: true },
      { text: "This medication should take with food.", correct: false },
      { text: "This medication should being taken with food.", correct: false },
      { text: "This medication should taken with food.", correct: false },
    ],
    explanation:
      "Passive voice = be + past participle. With a modal: modal + be + past participle. 'Should be taken' is the correct form.",
    explanationEs:
      "Voz pasiva = be + participio. Con un modal: modal + be + participio. 'Should be taken' es la forma correcta.",
  },
  {
    id: 14,
    unit: 7,
    category: "vocabulary",
    prompt: 'Which English term means "efectos secundarios"?',
    promptEs: '¿Qué término en inglés significa "efectos secundarios"?',
    options: [
      { text: "side effects", correct: true },
      { text: "secondary effects", correct: false },
      { text: "second effects", correct: false },
      { text: "after effects", correct: false },
    ],
    explanation:
      "The standard medical term is 'side effects'. 'Secondary effects' is a literal Spanish translation that sounds non-native to doctors and pharmacists.",
    explanationEs:
      "El término médico estándar es 'side effects'. 'Secondary effects' es una traducción literal del español que suena no-nativa a doctores y farmacéuticos.",
  },

  // ─── Unit 8: Money and Shopping ────────────────────────────────────
  {
    id: 15,
    unit: 8,
    category: "grammar",
    prompt: "Choose the correct relative pronoun:",
    promptEs: "Elige el pronombre relativo correcto:",
    options: [
      { text: "The woman who lives next door is a doctor.", correct: true },
      { text: "The woman which lives next door is a doctor.", correct: false },
      { text: "The woman whose lives next door is a doctor.", correct: false },
      { text: "The woman where lives next door is a doctor.", correct: false },
    ],
    explanation:
      "Use 'who' for people, 'that/which' for things, 'whose' for possession, 'where' for places. Spanish 'que' covers all of these, which causes confusion.",
    explanationEs:
      "Usa 'who' para personas, 'that/which' para cosas, 'whose' para posesión, 'where' para lugares. El 'que' del español los cubre todos, lo que causa confusión.",
  },
  {
    id: 16,
    unit: 8,
    category: "grammar",
    prompt: "Which sentence uses 'would rather' correctly?",
    promptEs: "¿Qué oración usa 'would rather' correctamente?",
    options: [
      { text: "I'd rather pay in cash.", correct: true },
      { text: "I'd rather to pay in cash.", correct: false },
      { text: "I'd rather paying in cash.", correct: false },
      { text: "I would rather to pay in cash.", correct: false },
    ],
    explanation:
      "After 'would rather', use the BASE form of the verb — never 'to + verb'. Compare with 'would prefer to pay' (which DOES take 'to').",
    explanationEs:
      "Después de 'would rather', usa la forma BASE del verbo — nunca 'to + verbo'. Compara con 'would prefer to pay' (que SÍ lleva 'to').",
  },

  // ─── Unit 9: Relationships and Feelings ────────────────────────────
  {
    id: 17,
    unit: 9,
    category: "grammar",
    prompt: "Choose the correct wish about the present:",
    promptEs: "Elige el deseo correcto sobre el presente:",
    options: [
      { text: "I wish I had more time.", correct: true },
      { text: "I wish I have more time.", correct: false },
      { text: "I wish I will have more time.", correct: false },
      { text: "I wish I would have more time.", correct: false },
    ],
    explanation:
      "After 'wish' for present situations, use the past simple form ('had'), even though you mean now. The past tense signals the unreality of the wish.",
    explanationEs:
      "Después de 'wish' para situaciones presentes, usa el pasado simple ('had'), aunque te refieras a ahora. El pasado señala la irrealidad del deseo.",
  },
  {
    id: 18,
    unit: 9,
    category: "translation",
    prompt: 'How do you say "Debería haberte llamado antes" in English?',
    promptEs: 'Traduce: "Debería haberte llamado antes"',
    options: [
      { text: "I should have called you sooner.", correct: true },
      { text: "I should called you sooner.", correct: false },
      { text: "I should be called you sooner.", correct: false },
      { text: "I should call you sooner.", correct: false },
    ],
    explanation:
      "For past regrets with 'should', use 'should have + past participle'. In speech this contracts to 'should've called' (NOT 'should of', even though it sounds that way).",
    explanationEs:
      "Para arrepentimientos del pasado con 'should', usa 'should have + participio'. En el habla se contrae a 'should've called' (NO 'should of', aunque suene así).",
  },

  // ─── Unit 10: Sounding Native ──────────────────────────────────────
  {
    id: 19,
    unit: 10,
    category: "grammar",
    prompt: "Choose the correct past deduction:",
    promptEs: "Elige la deducción pasada correcta:",
    options: [
      { text: "She must have left early. Her car isn't here.", correct: true },
      { text: "She must left early. Her car isn't here.", correct: false },
      { text: "She must to have left early. Her car isn't here.", correct: false },
      { text: "She must has left early. Her car isn't here.", correct: false },
    ],
    explanation:
      "For past deductions, use 'must have + past participle'. The structure is always 'modal + have + past participle' for past deductions.",
    explanationEs:
      "Para deducciones del pasado, usa 'must have + participio'. La estructura siempre es 'modal + have + participio' para deducciones pasadas.",
  },
  {
    id: 20,
    unit: 10,
    category: "vocabulary",
    prompt: "Which modal expresses the HIGHEST confidence in a deduction?",
    promptEs: "¿Qué modal expresa la MAYOR confianza en una deducción?",
    options: [
      { text: "must", correct: true },
      { text: "might", correct: false },
      { text: "could", correct: false },
      { text: "may", correct: false },
    ],
    explanation:
      "'Must' = ~95% certain. 'Could/might/may' = ~40-50% certain. The certainty scale: must (highest) > could > might > may. 'Can't' is the highest negative certainty.",
    explanationEs:
      "'Must' = ~95% seguro. 'Could/might/may' = ~40-50% seguro. La escala de certeza: must (la más alta) > could > might > may. 'Can't' es la mayor certeza negativa.",
  },
];

export function calculateExamResult(
  answers: Record<number, number>,
): ExamResult {
  const unitScores: Record<number, { correct: number; total: number }> = {};
  const categoryScores: Record<string, { correct: number; total: number }> = {};
  let totalCorrect = 0;

  for (const q of examQuestions) {
    if (!unitScores[q.unit]) unitScores[q.unit] = { correct: 0, total: 0 };
    if (!categoryScores[q.category])
      categoryScores[q.category] = { correct: 0, total: 0 };

    unitScores[q.unit].total++;
    categoryScores[q.category].total++;

    const selectedIndex = answers[q.id];
    if (selectedIndex !== undefined && q.options[selectedIndex]?.correct) {
      totalCorrect++;
      unitScores[q.unit].correct++;
      categoryScores[q.category].correct++;
    }
  }

  return {
    totalCorrect,
    totalQuestions: examQuestions.length,
    percentage: Math.round((totalCorrect / examQuestions.length) * 100),
    unitScores,
    categoryScores,
  };
}

/**
 * Tier definitions for the intermediate course exam. Pure data so it can be
 * passed across the Astro→React island JSON boundary.
 */
export const examTiers = [
  {
    minPercent: 90,
    tier: "Outstanding",
    tierEs: "Sobresaliente",
    color: "emerald",
    message:
      "Exceptional work. You've truly built fluency. You're ready for advanced English and real-world situations of any kind.",
    messageEs:
      "Trabajo excepcional. Realmente has construido fluidez. Estás listo para inglés avanzado y situaciones del mundo real de cualquier tipo.",
  },
  {
    minPercent: 70,
    tier: "Passed",
    tierEs: "Aprobado",
    color: "amber",
    message:
      "Solid performance. You've mastered the core of intermediate English. Review the units where you missed questions and keep practicing in real conversations.",
    messageEs:
      "Desempeño sólido. Has dominado el núcleo del inglés intermedio. Repasa las unidades donde fallaste preguntas y sigue practicando en conversaciones reales.",
  },
  {
    minPercent: 0,
    tier: "Keep Practicing",
    tierEs: "Sigue Practicando",
    color: "rose",
    message:
      "You're making progress, but key structures need more review. Go back to the units where you struggled — especially modals and conditionals — and try again.",
    messageEs:
      "Estás progresando, pero las estructuras clave necesitan más repaso. Vuelve a las unidades donde tuviste dificultades — especialmente modales y condicionales — e intenta de nuevo.",
  },
] as const;

export function getScoreTier(percentage: number): ScoreTier {
  if (percentage >= 90) {
    return {
      tier: "Outstanding",
      tierEs: "Sobresaliente",
      color: "emerald",
      message:
        "Exceptional work. You've truly built fluency. You're ready for advanced English and real-world situations of any kind.",
      messageEs:
        "Trabajo excepcional. Realmente has construido fluidez. Estás listo para inglés avanzado y situaciones del mundo real de cualquier tipo.",
    };
  }
  if (percentage >= 70) {
    return {
      tier: "Passed",
      tierEs: "Aprobado",
      color: "amber",
      message:
        "Solid performance. You've mastered the core of intermediate English. Review the units where you missed questions and keep practicing in real conversations.",
      messageEs:
        "Desempeño sólido. Has dominado el núcleo del inglés intermedio. Repasa las unidades donde fallaste preguntas y sigue practicando en conversaciones reales.",
    };
  }
  return {
    tier: "Keep Practicing",
    tierEs: "Sigue Practicando",
    color: "rose",
    message:
      "You're making progress, but key structures need more review. Go back to the units where you struggled — especially modals and conditionals — and try again.",
    messageEs:
      "Estás progresando, pero las estructuras clave necesitan más repaso. Vuelve a las unidades donde tuviste dificultades — especialmente modales y condicionales — e intenta de nuevo.",
  };
}
