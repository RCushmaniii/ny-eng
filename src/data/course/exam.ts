// Final Exam: "First Steps Into English" — Comprehensive Assessment
// 20 multiple-choice questions covering all 10 units

export interface ExamQuestion {
  id: number;
  unit: number;
  category: "vocabulary" | "grammar" | "translation";
  prompt: string;
  promptEs: string;
  options: ExamOption[];
  explanation: string;
  explanationEs: string;
}

export interface ExamOption {
  text: string;
  correct: boolean;
}

export interface ExamResult {
  totalCorrect: number;
  totalQuestions: number;
  percentage: number;
  unitScores: Record<number, { correct: number; total: number }>;
  categoryScores: Record<string, { correct: number; total: number }>;
}

export const examMeta = {
  title: "Final Exam",
  titleEs: "Examen Final",
  subtitle: "First Steps Into English — Comprehensive Assessment",
  subtitleEs: "Primeros Pasos en Inglés — Evaluación Integral",
  description:
    "20 questions covering vocabulary, grammar, and translation from all 10 units. Test everything you've learned and see how far you've come.",
  descriptionEs:
    "20 preguntas sobre vocabulario, gramática y traducción de las 10 unidades. Pon a prueba todo lo que has aprendido y mira cuánto has avanzado.",
  passingScore: 70,
};

export const examQuestions: ExamQuestion[] = [
  // ─── Unit 1: Cognates & First Sentences ──────────────────────────────
  {
    id: 1,
    unit: 1,
    category: "vocabulary",
    prompt: 'What does "possible" mean in Spanish?',
    promptEs: '¿Qué significa "possible" en español?',
    options: [
      { text: "posible", correct: true },
      { text: "pasible", correct: false },
      { text: "potable", correct: false },
      { text: "portable", correct: false },
    ],
    explanation: '"Possible" = posible. The -ible pattern stays nearly identical.',
    explanationEs: '"Possible" = posible. El patrón -ible se mantiene casi idéntico.',
  },
  {
    id: 2,
    unit: 1,
    category: "grammar",
    prompt: "Which sentence is correct?",
    promptEs: "¿Cuál oración es correcta?",
    options: [
      { text: "I need to know if it is possible.", correct: true },
      { text: "I need know if it is possible.", correct: false },
      { text: "I need to know if it possible.", correct: false },
      { text: "I to need know if it is possible.", correct: false },
    ],
    explanation: '"I need TO know" — after "need," use "to" + verb.',
    explanationEs: '"I need TO know" — después de "need," usa "to" + verbo.',
  },

  // ─── Unit 2: What You Like ───────────────────────────────────────────
  {
    id: 3,
    unit: 2,
    category: "translation",
    prompt: 'How do you say "Me gustaría comer aquí esta noche" in English?',
    promptEs: 'Traduce: "Me gustaría comer aquí esta noche"',
    options: [
      { text: "I would like to eat here tonight.", correct: true },
      { text: "I like to eat here tonight.", correct: false },
      { text: "I want like eat here tonight.", correct: false },
      { text: "I would to like eat here tonight.", correct: false },
    ],
    explanation: '"Would like" = gustaría. "I would like TO eat" — always "to" before the verb.',
    explanationEs: '"Would like" = gustaría. "I would like TO eat" — siempre "to" antes del verbo.',
  },
  {
    id: 4,
    unit: 2,
    category: "vocabulary",
    prompt: 'What does "It was fantastic" mean?',
    promptEs: '¿Qué significa "It was fantastic"?',
    options: [
      { text: "Fue fantástico", correct: true },
      { text: "Es fantástico", correct: false },
      { text: "Será fantástico", correct: false },
      { text: "Sería fantástico", correct: false },
    ],
    explanation: '"Was" is past tense of "is." "It was" = fue/era.',
    explanationEs: '"Was" es el pasado de "is." "It was" = fue/era.',
  },

  // ─── Unit 3: Talking About Others ────────────────────────────────────
  {
    id: 5,
    unit: 3,
    category: "grammar",
    prompt: 'Which is correct for third person?',
    promptEs: '¿Cuál es correcto para la tercera persona?',
    options: [
      { text: "She wants to call me later.", correct: true },
      { text: "She want to call me later.", correct: false },
      { text: "She wanting to call me later.", correct: false },
      { text: "She to wants call me later.", correct: false },
    ],
    explanation: 'He/she/it adds -S to the verb: "wants," "has," "knows."',
    explanationEs: 'He/she/it agrega -S al verbo: "wants," "has," "knows."',
  },

  // ─── Unit 4: Talking to Someone ──────────────────────────────────────
  {
    id: 6,
    unit: 4,
    category: "translation",
    prompt: 'How do you say "Tienes que decirme la verdad" in English?',
    promptEs: 'Traduce: "Tienes que decirme la verdad"',
    options: [
      { text: "You have to tell me the truth.", correct: true },
      { text: "You have tell me the truth.", correct: false },
      { text: "You must to tell me the truth.", correct: false },
      { text: "You have to say me the truth.", correct: false },
    ],
    explanation: '"Have to" = tener que. "Tell me" (not "say me") — "tell" needs a person after it.',
    explanationEs: '"Have to" = tener que. "Tell me" (no "say me") — "tell" necesita una persona después.',
  },
  {
    id: 7,
    unit: 4,
    category: "vocabulary",
    prompt: 'What does "the reason why" mean in Spanish?',
    promptEs: '¿Qué significa "the reason why" en español?',
    options: [
      { text: "el porqué / la razón", correct: true },
      { text: "la razón dónde", correct: false },
      { text: "el porque no", correct: false },
      { text: "la excusa", correct: false },
    ],
    explanation: '"The reason why" = el porqué — explains the cause of something.',
    explanationEs: '"The reason why" = el porqué — explica la causa de algo.',
  },

  // ─── Unit 5: What Just Happened ──────────────────────────────────────
  {
    id: 8,
    unit: 5,
    category: "grammar",
    prompt: 'What does "I just found out" express?',
    promptEs: '¿Qué expresa "I just found out"?',
    options: [
      { text: "Something I discovered very recently", correct: true },
      { text: "Something I will discover tomorrow", correct: false },
      { text: "Something I always knew", correct: false },
      { text: "Something impossible to know", correct: false },
    ],
    explanation: '"Just" = acabar de. It means the action happened moments ago.',
    explanationEs: '"Just" = acabar de. Significa que la acción ocurrió hace momentos.',
  },

  // ─── Unit 6: Everyone, Someone, No One ───────────────────────────────
  {
    id: 9,
    unit: 6,
    category: "grammar",
    prompt: "Which sentence uses correct English (no double negative)?",
    promptEs: "¿Cuál oración usa inglés correcto (sin doble negación)?",
    options: [
      { text: "Nobody wants to go.", correct: true },
      { text: "Nobody doesn't want to go.", correct: false },
      { text: "Nobody never wants to go.", correct: false },
      { text: "Nobody don't want to go.", correct: false },
    ],
    explanation: 'In English, "nobody" already contains the negative. Don\'t add another.',
    explanationEs: 'En inglés, "nobody" ya contiene la negación. No agregues otra.',
  },
  {
    id: 10,
    unit: 6,
    category: "translation",
    prompt: 'How do you say "Deberías poder hacerlo mañana" in English?',
    promptEs: 'Traduce: "Deberías poder hacerlo mañana"',
    options: [
      { text: "You should be able to do it tomorrow.", correct: true },
      { text: "You should can do it tomorrow.", correct: false },
      { text: "You should to be able do it tomorrow.", correct: false },
      { text: "You must be able to do it tomorrow.", correct: false },
    ],
    explanation: '"Should be able to" = debería poder. Never "should can" — don\'t stack modals.',
    explanationEs: '"Should be able to" = debería poder. Nunca "should can" — no apiles modales.',
  },

  // ─── Unit 7: Together ────────────────────────────────────────────────
  {
    id: 11,
    unit: 7,
    category: "grammar",
    prompt: 'What is the difference between "We can\'t go" and "We don\'t have to go"?',
    promptEs: '¿Cuál es la diferencia entre "We can\'t go" y "We don\'t have to go"?',
    options: [
      { text: "Can't = impossible. Don't have to = not necessary (but you can).", correct: true },
      { text: "They mean the same thing.", correct: false },
      { text: "Can't = not necessary. Don't have to = impossible.", correct: false },
      { text: "Can't is formal. Don't have to is informal.", correct: false },
    ],
    explanation: '"Can\'t" means it\'s impossible. "Don\'t have to" means it\'s optional — you have a choice.',
    explanationEs: '"Can\'t" significa que es imposible. "Don\'t have to" significa que es opcional — tienes opción.',
  },
  {
    id: 12,
    unit: 7,
    category: "vocabulary",
    prompt: 'What does "comfortable" mean in Spanish?',
    promptEs: '¿Qué significa "comfortable" en español?',
    options: [
      { text: "cómodo / confortable", correct: true },
      { text: "comparable", correct: false },
      { text: "considerable", correct: false },
      { text: "compacto", correct: false },
    ],
    explanation: '"Comfortable" = cómodo/confortable. Part of the massive -able cognate family.',
    explanationEs: '"Comfortable" = cómodo/confortable. Parte de la enorme familia de cognados -able.',
  },

  // ─── Unit 8: Feelings and Curiosity ──────────────────────────────────
  {
    id: 13,
    unit: 8,
    category: "translation",
    prompt: 'How do you say "Tengo ganas de ir a la playa" in English?',
    promptEs: 'Traduce: "Tengo ganas de ir a la playa"',
    options: [
      { text: "I feel like going to the beach.", correct: true },
      { text: "I feel going to the beach.", correct: false },
      { text: "I have feeling to go to the beach.", correct: false },
      { text: "I am feeling like the beach.", correct: false },
    ],
    explanation: '"I feel like" + -ing verb = tengo ganas de. "I feel like GOING."',
    explanationEs: '"I feel like" + verbo en -ing = tengo ganas de. "I feel like GOING."',
  },
  {
    id: 14,
    unit: 8,
    category: "grammar",
    prompt: 'Which sentence correctly uses "I wonder"?',
    promptEs: '¿Cuál oración usa "I wonder" correctamente?',
    options: [
      { text: "I wonder if they can come tonight.", correct: true },
      { text: "I wonder do they can come tonight.", correct: false },
      { text: "I wonder they can come tonight?", correct: false },
      { text: "I wonder can they come tonight.", correct: false },
    ],
    explanation: '"I wonder IF..." uses statement word order (not question order). It\'s not a direct question.',
    explanationEs: '"I wonder IF..." usa orden de declaración (no de pregunta). No es una pregunta directa.',
  },

  // ─── Unit 9: Telling Stories ─────────────────────────────────────────
  {
    id: 15,
    unit: 9,
    category: "grammar",
    prompt: 'Which sentence correctly uses "used to"?',
    promptEs: '¿Cuál oración usa "used to" correctamente?',
    options: [
      { text: "I used to work here.", correct: true },
      { text: "I used to working here.", correct: false },
      { text: "I use to work here.", correct: false },
      { text: "I used work here.", correct: false },
    ],
    explanation: '"Used to" + base verb (no -ing, no extra "to"). Always past tense: "used," not "use."',
    explanationEs: '"Used to" + verbo base (sin -ing, sin "to" extra). Siempre pasado: "used," no "use."',
  },
  {
    id: 16,
    unit: 9,
    category: "grammar",
    prompt: 'What is the difference between "told" and "said"?',
    promptEs: '¿Cuál es la diferencia entre "told" y "said"?',
    options: [
      { text: '"Told" needs a person (told ME). "Said" doesn\'t (said THAT).', correct: true },
      { text: "They mean exactly the same thing.", correct: false },
      { text: '"Said" is formal. "Told" is informal.', correct: false },
      { text: '"Told" is present tense. "Said" is past tense.', correct: false },
    ],
    explanation: '"She told ME the truth" vs. "She said THAT it was true." Told = direct recipient. Said = quoting.',
    explanationEs: '"She told ME the truth" vs. "She said THAT it was true." Told = destinatario directo. Said = citar.',
  },
  {
    id: 17,
    unit: 9,
    category: "vocabulary",
    prompt: 'What does "suddenly" mean in Spanish?',
    promptEs: '¿Qué significa "suddenly" en español?',
    options: [
      { text: "de repente", correct: true },
      { text: "lentamente", correct: false },
      { text: "finalmente", correct: false },
      { text: "anteriormente", correct: false },
    ],
    explanation: '"Suddenly" = de repente. Used to introduce unexpected events in a story.',
    explanationEs: '"Suddenly" = de repente. Se usa para introducir eventos inesperados en una historia.',
  },

  // ─── Unit 10: What's Coming Next ─────────────────────────────────────
  {
    id: 18,
    unit: 10,
    category: "translation",
    prompt: 'How do you say "Voy a hacerlo mañana" in English?',
    promptEs: 'Traduce: "Voy a hacerlo mañana"',
    options: [
      { text: "I'm going to do it tomorrow.", correct: true },
      { text: "I going to do it tomorrow.", correct: false },
      { text: "I go to do it tomorrow.", correct: false },
      { text: "I'm go to do it tomorrow.", correct: false },
    ],
    explanation: '"Going to" needs "am/is/are" before it. "I AM going to" = voy a.',
    explanationEs: '"Going to" necesita "am/is/are" antes. "I AM going to" = voy a.',
  },
  {
    id: 19,
    unit: 10,
    category: "grammar",
    prompt: 'How do you ask the meaning of a word in English?',
    promptEs: '¿Cómo preguntas el significado de una palabra en inglés?',
    options: [
      { text: "What does it mean?", correct: true },
      { text: "What it means?", correct: false },
      { text: "What does it means?", correct: false },
      { text: "What is it mean?", correct: false },
    ],
    explanation: '"What does it MEAN?" — "does" is the helper verb, so "mean" stays in base form (no -s).',
    explanationEs: '"What does it MEAN?" — "does" es el verbo auxiliar, así que "mean" queda en forma base (sin -s).',
  },
  {
    id: 20,
    unit: 10,
    category: "translation",
    prompt: "Which sentence combines past, present, and future correctly?",
    promptEs: "¿Cuál oración combina pasado, presente y futuro correctamente?",
    options: [
      {
        text: "I used to think it was impossible, but now I know it's possible and I'm going to do it.",
        correct: true,
      },
      {
        text: "I use to think it was impossible, but now I know it's possible and I going to do it.",
        correct: false,
      },
      {
        text: "I used to think it is impossible, but now I knew it's possible and I'm going to do it.",
        correct: false,
      },
      {
        text: "I used to think it was impossible, but now I know it's possible and I will going to do it.",
        correct: false,
      },
    ],
    explanation:
      'Past: "used to" + "was." Present: "know" + "it\'s." Future: "I\'m going to." Three time frames in one sentence.',
    explanationEs:
      'Pasado: "used to" + "was." Presente: "know" + "it\'s." Futuro: "I\'m going to." Tres marcos temporales en una oración.',
  },
];

export function calculateExamResult(answers: Record<number, number>): ExamResult {
  const unitScores: Record<number, { correct: number; total: number }> = {};
  const categoryScores: Record<string, { correct: number; total: number }> = {};
  let totalCorrect = 0;

  for (const q of examQuestions) {
    // Initialize trackers
    if (!unitScores[q.unit]) unitScores[q.unit] = { correct: 0, total: 0 };
    if (!categoryScores[q.category]) categoryScores[q.category] = { correct: 0, total: 0 };

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
 * Tier definitions for the beginner course exam. Pure data so it can be passed
 * across the Astro→React island JSON boundary. The component picks the highest
 * matching tier based on the user's percentage score.
 */
export const examTiers = [
  {
    minPercent: 90,
    tier: "Outstanding",
    tierEs: "Sobresaliente",
    color: "emerald",
    message:
      "Incredible work. You've mastered the foundations of English. You're ready for intermediate-level challenges.",
    messageEs:
      "Trabajo increíble. Has dominado las bases del inglés. Estás listo para desafíos de nivel intermedio.",
  },
  {
    minPercent: 70,
    tier: "Passed",
    tierEs: "Aprobado",
    color: "amber",
    message:
      "Great job! You have a solid foundation. Review the units where you missed questions, then move forward with confidence.",
    messageEs:
      "¡Buen trabajo! Tienes una base sólida. Repasa las unidades donde fallaste preguntas, luego avanza con confianza.",
  },
  {
    minPercent: 0,
    tier: "Keep Practicing",
    tierEs: "Sigue Practicando",
    color: "rose",
    message:
      "You're making progress, but some areas need more review. Go back to the units where you struggled and try the exam again.",
    messageEs:
      "Estás progresando, pero algunas áreas necesitan más repaso. Vuelve a las unidades donde tuviste dificultades e intenta el examen de nuevo.",
  },
] as const;

export function getScoreTier(percentage: number): {
  tier: string;
  tierEs: string;
  color: string;
  message: string;
  messageEs: string;
} {
  if (percentage >= 90) {
    return {
      tier: "Outstanding",
      tierEs: "Sobresaliente",
      color: "emerald",
      message:
        "Incredible work. You've mastered the foundations of English. You're ready for intermediate-level challenges.",
      messageEs:
        "Trabajo increíble. Has dominado las bases del inglés. Estás listo para desafíos de nivel intermedio.",
    };
  }
  if (percentage >= 70) {
    return {
      tier: "Passed",
      tierEs: "Aprobado",
      color: "amber",
      message:
        "Great job! You have a solid foundation. Review the units where you missed questions, then move forward with confidence.",
      messageEs:
        "¡Buen trabajo! Tienes una base sólida. Repasa las unidades donde fallaste preguntas, luego avanza con confianza.",
    };
  }
  return {
    tier: "Keep Practicing",
    tierEs: "Sigue Practicando",
    color: "rose",
    message:
      "You're making progress, but some areas need more review. Go back to the units where you struggled and try the exam again.",
    messageEs:
      "Estás progresando, pero algunas áreas necesitan más repaso. Vuelve a las unidades donde tuviste dificultades e intenta el examen de nuevo.",
  };
}
