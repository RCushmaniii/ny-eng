// Final Exam: "Tell Your Story" — Elementary (A2) Comprehensive Assessment
// 20 multiple-choice questions covering all 10 elementary units
// Reuses ExamQuestion / ExamOption / ExamResult types from the beginner exam module

import type { ExamQuestion, ExamResult } from "../course/exam";
import type { ScoreTier } from "../../components/course/CourseExam";

export const examMeta = {
  title: "Final Exam",
  titleEs: "Examen Final",
  subtitle: "Tell Your Story — Comprehensive Assessment",
  subtitleEs: "Cuenta Tu Historia — Evaluación Integral",
  description:
    "20 questions covering past simple, future plans, comparatives, quantifiers, Wh-questions, frequency adverbs, and past continuous from all 10 elementary units.",
  descriptionEs:
    "20 preguntas sobre pasado simple, planes futuros, comparativos, cuantificadores, preguntas Wh-, adverbios de frecuencia y pasado continuo de las 10 unidades elementales.",
  passingScore: 70,
};

export const examQuestions: ExamQuestion[] = [
  // ─── Unit 1: Past Simple — Regular Verbs ───────────────────────────────
  {
    id: 1,
    unit: 1,
    category: "grammar",
    prompt: "Choose the correct past simple form of 'to work':",
    promptEs: "Elige la forma correcta del pasado simple de 'to work':",
    options: [
      { text: "I worked late yesterday.", correct: true },
      { text: "I worken late yesterday.", correct: false },
      { text: "I work late yesterday.", correct: false },
      { text: "I was work late yesterday.", correct: false },
    ],
    explanation:
      "Regular verbs add -ed to form the past simple: work → worked. The same form is used for ALL persons (I, you, he, she, we, they).",
    explanationEs:
      "Los verbos regulares agregan -ed para el pasado simple: work → worked. La misma forma se usa para TODAS las personas (I, you, he, she, we, they).",
  },
  {
    id: 2,
    unit: 1,
    category: "vocabulary",
    prompt: 'Which sentence pronounces the -ed ending as /ɪd/ (extra syllable)?',
    promptEs: '¿Qué oración pronuncia la terminación -ed como /ɪd/ (sílaba extra)?',
    options: [
      { text: "I waited for the bus.", correct: true },
      { text: "I worked all day.", correct: false },
      { text: "I called my mother.", correct: false },
      { text: "I lived there for a year.", correct: false },
    ],
    explanation:
      "Verbs ending in -t or -d (wait, need, decide) pronounce -ed as a separate /ɪd/ syllable: 'wait-ed', 'need-ed'. The other three are pronounced /t/ or /d/ with NO extra syllable.",
    explanationEs:
      "Los verbos que terminan en -t o -d (wait, need, decide) pronuncian -ed como sílaba aparte /ɪd/: 'wait-ed', 'need-ed'. Los otros tres se pronuncian /t/ o /d/ SIN sílaba extra.",
  },

  // ─── Unit 2: Past Simple — Irregular Verbs ─────────────────────────────
  {
    id: 3,
    unit: 2,
    category: "grammar",
    prompt: "Choose the correct past simple form:",
    promptEs: "Elige la forma correcta del pasado simple:",
    options: [
      { text: "She went to the store yesterday.", correct: true },
      { text: "She goed to the store yesterday.", correct: false },
      { text: "She wented to the store yesterday.", correct: false },
      { text: "She was go to the store yesterday.", correct: false },
    ],
    explanation:
      "'Go' is irregular: go → went. There is no '-ed' form. Common irregulars to memorize: go/went, see/saw, do/did, have/had, eat/ate, take/took.",
    explanationEs:
      "'Go' es irregular: go → went. No hay forma '-ed'. Irregulares comunes a memorizar: go/went, see/saw, do/did, have/had, eat/ate, take/took.",
  },
  {
    id: 4,
    unit: 2,
    category: "grammar",
    prompt: "Which is the correct past simple QUESTION?",
    promptEs: "¿Cuál es la PREGUNTA correcta en pasado simple?",
    options: [
      { text: "Where did you go last night?", correct: true },
      { text: "Where did you went last night?", correct: false },
      { text: "Where you went last night?", correct: false },
      { text: "Where you go last night?", correct: false },
    ],
    explanation:
      "Past simple questions use 'did' as the helper, and the main verb goes BACK to base form: 'did you GO' (NOT 'did you went').",
    explanationEs:
      "Las preguntas en pasado simple usan 'did' como ayudante, y el verbo principal REGRESA a forma base: 'did you GO' (NO 'did you went').",
  },

  // ─── Unit 3: Time Markers and Sequencing ───────────────────────────────
  {
    id: 5,
    unit: 3,
    category: "vocabulary",
    prompt: "Which sequencing connector marks the FIRST event in a story?",
    promptEs: "¿Qué conector de secuencia marca el PRIMER evento de una historia?",
    options: [
      { text: "First", correct: true },
      { text: "Finally", correct: false },
      { text: "After that", correct: false },
      { text: "In the end", correct: false },
    ],
    explanation:
      "'First' opens a sequence. The order is: First → Then / After that → Finally / In the end. 'Finally' and 'In the end' mark the LAST event.",
    explanationEs:
      "'First' abre una secuencia. El orden es: First → Then / After that → Finally / In the end. 'Finally' e 'In the end' marcan el ÚLTIMO evento.",
  },
  {
    id: 6,
    unit: 3,
    category: "translation",
    prompt: 'How do you say "hace dos días" in English?',
    promptEs: 'Traduce: "hace dos días"',
    options: [
      { text: "two days ago", correct: true },
      { text: "two days before", correct: false },
      { text: "ago two days", correct: false },
      { text: "since two days", correct: false },
    ],
    explanation:
      "'Ago' goes AFTER the time period in English: 'two days ago', 'a week ago', 'an hour ago'. NEVER 'ago two days'.",
    explanationEs:
      "'Ago' va DESPUÉS del período de tiempo en inglés: 'two days ago', 'a week ago', 'an hour ago'. NUNCA 'ago two days'.",
  },

  // ─── Unit 4: Going to vs. Will ─────────────────────────────────────────
  {
    id: 7,
    unit: 4,
    category: "grammar",
    prompt: "Choose the right future for an ALREADY-MADE plan:",
    promptEs: "Elige el futuro correcto para un plan YA HECHO:",
    options: [
      { text: "I'm going to visit my parents next weekend. I already bought the ticket.", correct: true },
      { text: "I will visit my parents next weekend. I already bought the ticket.", correct: false },
      { text: "I visit my parents next weekend. I already bought the ticket.", correct: false },
      { text: "I going to visit my parents next weekend.", correct: false },
    ],
    explanation:
      "Use 'going to' for plans you've ALREADY decided. Use 'will' for decisions made AT THE MOMENT of speaking. The bought ticket = pre-existing plan.",
    explanationEs:
      "Usa 'going to' para planes que YA decidiste. Usa 'will' para decisiones del MOMENTO de hablar. El boleto comprado = plan preexistente.",
  },
  {
    id: 8,
    unit: 4,
    category: "grammar",
    prompt: "Choose the spontaneous decision (use 'will'):",
    promptEs: "Elige la decisión espontánea (usa 'will'):",
    options: [
      { text: "Your bag looks heavy. I'll carry it for you.", correct: true },
      { text: "Your bag looks heavy. I'm going to carry it for you.", correct: false },
      { text: "Your bag looks heavy. I carry it for you.", correct: false },
      { text: "Your bag looks heavy. I going to carry it.", correct: false },
    ],
    explanation:
      "'I'll carry it' = decision made RIGHT NOW, in response to seeing the heavy bag. 'I'm going to' would imply you planned this earlier — but you just decided.",
    explanationEs:
      "'I'll carry it' = decisión tomada AHORA MISMO, en respuesta a ver la bolsa pesada. 'I'm going to' implicaría que lo planeaste antes — pero acabas de decidir.",
  },

  // ─── Unit 5: Comparatives and Superlatives ─────────────────────────────
  {
    id: 9,
    unit: 5,
    category: "grammar",
    prompt: "Choose the correct comparative form:",
    promptEs: "Elige el comparativo correcto:",
    options: [
      { text: "New York is bigger than Boston.", correct: true },
      { text: "New York is more bigger than Boston.", correct: false },
      { text: "New York is more big than Boston.", correct: false },
      { text: "New York is biggest than Boston.", correct: false },
    ],
    explanation:
      "Short adjectives (one syllable) take -er: big → bigger. NEVER use 'more' with -er. NEVER 'more bigger'. The Spanish-style 'más grande' tempts speakers to add 'more'.",
    explanationEs:
      "Adjetivos cortos (una sílaba) toman -er: big → bigger. NUNCA uses 'more' con -er. NUNCA 'more bigger'. El estilo español 'más grande' tienta a agregar 'more'.",
  },
  {
    id: 10,
    unit: 5,
    category: "grammar",
    prompt: "Choose the correct irregular comparative:",
    promptEs: "Elige el comparativo irregular correcto:",
    options: [
      { text: "This restaurant is better than the one near my house.", correct: true },
      { text: "This restaurant is more better than the one near my house.", correct: false },
      { text: "This restaurant is more good than the one near my house.", correct: false },
      { text: "This restaurant is gooder than the one near my house.", correct: false },
    ],
    explanation:
      "'Good' is irregular: good → better → best. Same for 'bad': bad → worse → worst. NEVER 'more better' or 'gooder'.",
    explanationEs:
      "'Good' es irregular: good → better → best. Igual para 'bad': bad → worse → worst. NUNCA 'more better' o 'gooder'.",
  },

  // ─── Unit 6: Quantifiers ──────────────────────────────────────────────
  {
    id: 11,
    unit: 6,
    category: "grammar",
    prompt: "Choose the correct quantifier:",
    promptEs: "Elige el cuantificador correcto:",
    options: [
      { text: "I don't have much money this month.", correct: true },
      { text: "I don't have many money this month.", correct: false },
      { text: "I don't have a few money this month.", correct: false },
      { text: "I don't have any much money this month.", correct: false },
    ],
    explanation:
      "'Money' is UNCOUNTABLE — use 'much'. 'Many' is for countable plurals (chairs, people). 'A few' is also countable.",
    explanationEs:
      "'Money' es INCONTABLE — usa 'much'. 'Many' es para plurales contables (chairs, people). 'A few' también es contable.",
  },
  {
    id: 12,
    unit: 6,
    category: "vocabulary",
    prompt: "Which English word is ALWAYS uncountable?",
    promptEs: "¿Qué palabra en inglés es SIEMPRE incontable?",
    options: [
      { text: "advice", correct: true },
      { text: "idea", correct: false },
      { text: "question", correct: false },
      { text: "meeting", correct: false },
    ],
    explanation:
      "'Advice' is always uncountable in English — NEVER 'advices'. To pluralize, say 'pieces of advice'. Same for 'information' (NEVER 'informations') and 'furniture'.",
    explanationEs:
      "'Advice' siempre es incontable en inglés — NUNCA 'advices'. Para pluralizar, di 'pieces of advice'. Igual para 'information' (NUNCA 'informations') y 'furniture'.",
  },

  // ─── Unit 7: Wh-Questions ─────────────────────────────────────────────
  {
    id: 13,
    unit: 7,
    category: "grammar",
    prompt: "Choose the correct question word order:",
    promptEs: "Elige el orden correcto de la pregunta:",
    options: [
      { text: "Where do you work?", correct: true },
      { text: "Where you work?", correct: false },
      { text: "Where do you working?", correct: false },
      { text: "Where works you?", correct: false },
    ],
    explanation:
      "Wh-question word order: Wh + auxiliary (do/does) + subject + base verb. 'Where DO YOU WORK?'. The verb stays in BASE form.",
    explanationEs:
      "Orden de pregunta Wh-: Wh + auxiliar (do/does) + sujeto + verbo base. 'Where DO YOU WORK?'. El verbo queda en forma BASE.",
  },
  {
    id: 14,
    unit: 7,
    category: "grammar",
    prompt: "Choose the correct SUBJECT question (no helper verb):",
    promptEs: "Elige la pregunta de SUJETO correcta (sin verbo ayudante):",
    options: [
      { text: "Who called you yesterday?", correct: true },
      { text: "Who did called you yesterday?", correct: false },
      { text: "Who did you call yesterday?", correct: false },
      { text: "Who you called yesterday?", correct: false },
    ],
    explanation:
      "When the Wh-word IS the subject ('Who' = the person who called), DROP 'do/did'. The verb takes its normal past tense ('called'). 'Who did you call?' is different — there 'you' is the subject.",
    explanationEs:
      "Cuando la palabra Wh- ES el sujeto ('Who' = la persona que llamó), QUITA 'do/did'. El verbo toma su pasado normal ('called'). 'Who did you call?' es diferente — ahí 'you' es el sujeto.",
  },

  // ─── Unit 8: Frequency Adverbs ─────────────────────────────────────────
  {
    id: 15,
    unit: 8,
    category: "grammar",
    prompt: "Choose the correct position for the frequency adverb:",
    promptEs: "Elige la posición correcta del adverbio de frecuencia:",
    options: [
      { text: "I always drink coffee in the morning.", correct: true },
      { text: "I drink always coffee in the morning.", correct: false },
      { text: "I drink coffee always in the morning.", correct: false },
      { text: "Always I drink coffee in the morning.", correct: false },
    ],
    explanation:
      "Frequency adverbs (always, usually, often, never) go BEFORE the main verb. NOT at the end like in Spanish, NOT after the verb. 'I always drink' — never 'I drink always'.",
    explanationEs:
      "Los adverbios de frecuencia (always, usually, often, never) van ANTES del verbo principal. NO al final como en español, NO después del verbo. 'I always drink' — nunca 'I drink always'.",
  },
  {
    id: 16,
    unit: 8,
    category: "grammar",
    prompt: "Where does the frequency adverb 'always' go with the verb 'BE'?",
    promptEs: "¿Dónde va el adverbio de frecuencia 'always' con el verbo 'BE'?",
    options: [
      { text: "She is always late for meetings.", correct: true },
      { text: "She always is late for meetings.", correct: false },
      { text: "Always she is late for meetings.", correct: false },
      { text: "She is late always for meetings.", correct: false },
    ],
    explanation:
      "With BE (am/is/are/was/were), the adverb goes AFTER the verb — opposite of the regular rule. 'She IS ALWAYS late', NOT 'She ALWAYS IS late'. 'Always' cannot start a sentence in standard English.",
    explanationEs:
      "Con BE (am/is/are/was/were), el adverbio va DESPUÉS del verbo — opuesto a la regla regular. 'She IS ALWAYS late', NO 'She ALWAYS IS late'. 'Always' no puede iniciar una oración en inglés estándar.",
  },

  // ─── Unit 9: Past Continuous ───────────────────────────────────────────
  {
    id: 17,
    unit: 9,
    category: "grammar",
    prompt: "Choose the correct past continuous form:",
    promptEs: "Elige la forma correcta del pasado continuo:",
    options: [
      { text: "I was reading when she called.", correct: true },
      { text: "I was read when she called.", correct: false },
      { text: "I were reading when she called.", correct: false },
      { text: "I am reading when she called.", correct: false },
    ],
    explanation:
      "Past continuous = subject + was/were + verb-ing. 'Was' goes with I/he/she/it. 'Were' goes with you/we/they. The main verb MUST end in -ing.",
    explanationEs:
      "Pasado continuo = sujeto + was/were + verbo-ing. 'Was' va con I/he/she/it. 'Were' va con you/we/they. El verbo principal DEBE terminar en -ing.",
  },
  {
    id: 18,
    unit: 9,
    category: "grammar",
    prompt: "Choose the correctly-formed past continuous + past simple interruption:",
    promptEs: "Elige la combinación de pasado continuo + pasado simple bien formada:",
    options: [
      { text: "I was eating dinner when the phone rang.", correct: true },
      { text: "I was ate dinner when the phone rang.", correct: false },
      { text: "I were eating dinner when the phone rang.", correct: false },
      { text: "I eating dinner when the phone rang.", correct: false },
    ],
    explanation:
      "The longer/background action goes in past continuous: was/were + verb-ing ('was eating'). The shorter interrupting action goes in past simple ('rang'). Use 'when' before the past simple. 'Was ate' and 'I eating' are not valid forms; 'I were' is wrong because 'I' takes 'was'.",
    explanationEs:
      "La acción más larga / de fondo va en pasado continuo: was/were + verbo-ing ('was eating'). La acción corta que interrumpe va en pasado simple ('rang'). Usa 'when' antes del pasado simple. 'Was ate' e 'I eating' no son formas válidas; 'I were' está mal porque 'I' lleva 'was'.",
  },

  // ─── Unit 10: Capstone — Integrated Storytelling ───────────────────────
  {
    id: 19,
    unit: 10,
    category: "translation",
    prompt: 'Choose the most natural English narrative for: "Ayer estaba caminando cuando vi a un viejo amigo. Vamos a tomar café el sábado."',
    promptEs: 'Elige la narrativa en inglés más natural para: "Ayer estaba caminando cuando vi a un viejo amigo. Vamos a tomar café el sábado."',
    options: [
      {
        text: "Yesterday I was walking when I saw an old friend. We're going to have coffee on Saturday.",
        correct: true,
      },
      {
        text: "Yesterday I walked when I saw an old friend. We will to have coffee on Saturday.",
        correct: false,
      },
      {
        text: "Yesterday I am walking when I see an old friend. We have coffee on Saturday.",
        correct: false,
      },
      {
        text: "Yesterday I walking when I saw old friend. We going have coffee Saturday.",
        correct: false,
      },
    ],
    explanation:
      "The walk was IN PROGRESS (past continuous: 'was walking'). The seeing INTERRUPTED it (past simple: 'saw'). The coffee plan is ALREADY DECIDED (going to: 'we're going to have'). This is the integrated A2 narrative pattern.",
    explanationEs:
      "El paseo estaba EN PROGRESO (pasado continuo: 'was walking'). Ver al amigo lo INTERRUMPIÓ (pasado simple: 'saw'). El plan del café YA ESTÁ DECIDIDO (going to: 'we're going to have'). Este es el patrón narrativo integrado de A2.",
  },
  {
    id: 20,
    unit: 10,
    category: "grammar",
    prompt: "Which sentence correctly mixes A2 grammar across multiple units?",
    promptEs: "¿Qué oración mezcla correctamente la gramática A2 de varias unidades?",
    options: [
      {
        text: "I usually work from home, but yesterday I went to the office because I had a few important meetings.",
        correct: true,
      },
      {
        text: "I usually working from home, but yesterday I go to the office because I had a many important meetings.",
        correct: false,
      },
      {
        text: "I usually work from home, but yesterday I was go to the office because I had much important meetings.",
        correct: false,
      },
      {
        text: "I working usually from home, but yesterday I went to office because I had a few importants meetings.",
        correct: false,
      },
    ],
    explanation:
      "Correct sentence integrates: frequency adverb position ('usually work'), past simple irregular ('went'), quantifier with countable ('a few important meetings'). Adjectives never take -s in English ('importants' is wrong).",
    explanationEs:
      "La oración correcta integra: posición de adverbio de frecuencia ('usually work'), pasado simple irregular ('went'), cuantificador con contable ('a few important meetings'). Los adjetivos nunca llevan -s en inglés ('importants' es incorrecto).",
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
 * Tier definitions for the elementary course exam.
 */
export const examTiers = [
  {
    minPercent: 90,
    tier: "Outstanding",
    tierEs: "Sobresaliente",
    color: "emerald",
    message:
      "Exceptional work. You've truly built A2 storytelling fluency. You're ready to jump into the intermediate course (Building Fluency) and tackle B1-B2 grammar.",
    messageEs:
      "Trabajo excepcional. Realmente has construido fluidez narrativa A2. Estás listo para saltar al curso intermedio (Construyendo Fluidez) y enfrentar la gramática B1-B2.",
  },
  {
    minPercent: 70,
    tier: "Passed",
    tierEs: "Aprobado",
    color: "amber",
    message:
      "Solid performance. You've mastered the core of elementary English. Review the units where you missed questions, then continue with Unit 10 (your story recording) and the intermediate course.",
    messageEs:
      "Desempeño sólido. Has dominado el núcleo del inglés elemental. Repasa las unidades donde fallaste preguntas, luego sigue con la Unidad 10 (tu historia grabada) y el curso intermedio.",
  },
  {
    minPercent: 0,
    tier: "Keep Practicing",
    tierEs: "Sigue Practicando",
    color: "rose",
    message:
      "You're making progress, but key A2 structures need more review. Go back to the units where you struggled — especially past tense, quantifiers, and frequency adverb position — and try again.",
    messageEs:
      "Estás progresando, pero las estructuras clave de A2 necesitan más repaso. Vuelve a las unidades donde tuviste dificultades — especialmente el pasado, los cuantificadores y la posición de los adverbios de frecuencia — e intenta de nuevo.",
  },
] as const;

export function getScoreTier(percentage: number): ScoreTier {
  if (percentage >= 90) {
    return {
      tier: "Outstanding",
      tierEs: "Sobresaliente",
      color: "emerald",
      message:
        "Exceptional work. You've truly built A2 storytelling fluency. You're ready to jump into the intermediate course (Building Fluency) and tackle B1-B2 grammar.",
      messageEs:
        "Trabajo excepcional. Realmente has construido fluidez narrativa A2. Estás listo para saltar al curso intermedio (Construyendo Fluidez) y enfrentar la gramática B1-B2.",
    };
  }
  if (percentage >= 70) {
    return {
      tier: "Passed",
      tierEs: "Aprobado",
      color: "amber",
      message:
        "Solid performance. You've mastered the core of elementary English. Review the units where you missed questions, then continue with Unit 10 (your story recording) and the intermediate course.",
      messageEs:
        "Desempeño sólido. Has dominado el núcleo del inglés elemental. Repasa las unidades donde fallaste preguntas, luego sigue con la Unidad 10 (tu historia grabada) y el curso intermedio.",
    };
  }
  return {
    tier: "Keep Practicing",
    tierEs: "Sigue Practicando",
    color: "rose",
    message:
      "You're making progress, but key A2 structures need more review. Go back to the units where you struggled — especially past tense, quantifiers, and frequency adverb position — and try again.",
    messageEs:
      "Estás progresando, pero las estructuras clave de A2 necesitan más repaso. Vuelve a las unidades donde tuviste dificultades — especialmente el pasado, los cuantificadores y la posición de los adverbios de frecuencia — e intenta de nuevo.",
  };
}
