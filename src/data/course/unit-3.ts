// Unit 3: "Talking About Others" — Full course content

import type { CognateWord, SentenceBlock, PronunciationDrill, VocabItem } from "./unit-1";

// ─── Section A: Cognate Discovery ────────────────────────────────────────────

export const cognateWaves = {
  wave1: {
    title: "The -ant/-ance Pattern",
    titleEs: "El Patrón -ant/-ance",
    description:
      "Spanish -ante becomes English -ant, and -ancia becomes -ance. People and qualities.",
    descriptionEs:
      "El español -ante se convierte en -ant, y -ancia se convierte en -ance. Personas y cualidades.",
    words: [
      {
        english: "elegant",
        spanish: "elegante",
        category: "-ant",
        pronunciationNote: "Stress on FIRST syllable: EL-e-gant",
        pronunciationNoteEs: "Acento en la PRIMERA sílaba: EL-e-gant",
      },
      { english: "tolerant", spanish: "tolerante", category: "-ant" },
      { english: "important", spanish: "importante", category: "-ant" },
      { english: "ignorant", spanish: "ignorante", category: "-ant" },
      { english: "distant", spanish: "distante", category: "-ant" },
      { english: "vibrant", spanish: "vibrante", category: "-ant" },
      {
        english: "elegance",
        spanish: "elegancia",
        category: "-ance",
        pronunciationNote: "EL-e-gance — same stress as 'elegant'",
        pronunciationNoteEs: "EL-e-gance — mismo acento que 'elegant'",
      },
      { english: "tolerance", spanish: "tolerancia", category: "-ance" },
      { english: "importance", spanish: "importancia", category: "-ance" },
      { english: "distance", spanish: "distancia", category: "-ance" },
      { english: "ignorance", spanish: "ignorancia", category: "-ance" },
      { english: "ambulance", spanish: "ambulancia", category: "-ance" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The -ic Pattern",
    titleEs: "El Patrón -ic",
    description:
      "Spanish -ico/-ica becomes English -ic. These cover music, science, and descriptions.",
    descriptionEs:
      "El español -ico/-ica se convierte en -ic en inglés. Cubren música, ciencia y descripciones.",
    words: [
      { english: "classic", spanish: "clásico", category: "-ic" },
      { english: "electric", spanish: "eléctrico", category: "-ic" },
      { english: "historic", spanish: "histórico", category: "-ic" },
      { english: "fantastic", spanish: "fantástico", category: "-ic" },
      { english: "organic", spanish: "orgánico", category: "-ic" },
      { english: "public", spanish: "público", category: "-ic" },
      { english: "traffic", spanish: "tráfico", category: "-ic" },
      { english: "music", spanish: "música", category: "-ic" },
      {
        english: "political",
        spanish: "político",
        category: "-ical",
        pronunciationNote: "po-LIT-i-cal — stress on second syllable",
        pronunciationNoteEs: "po-LIT-i-cal — acento en la segunda sílaba",
      },
      { english: "practical", spanish: "práctico", category: "-ical" },
      { english: "technical", spanish: "técnico", category: "-ical" },
      { english: "identical", spanish: "idéntico", category: "-ical" },
    ] as CognateWord[],
  },
  wave3: {
    title: "Bonus: -al Words You Missed",
    titleEs: "Bonus: Palabras en -al que Faltaron",
    description:
      "More -al cognates from everyday life. You'll use these constantly.",
    descriptionEs:
      "Más cognados en -al de la vida cotidiana. Los usarás constantemente.",
    words: [
      { english: "emotional", spanish: "emocional", category: "-al" },
      { english: "professional", spanish: "profesional", category: "-al" },
      { english: "personal", spanish: "personal", category: "-al" },
      { english: "original", spanish: "original", category: "-al" },
      { english: "criminal", spanish: "criminal", category: "-al" },
      { english: "animal", spanish: "animal", category: "-al" },
      { english: "general", spanish: "general", category: "-al" },
      { english: "international", spanish: "internacional", category: "-al" },
      { english: "commercial", spanish: "comercial", category: "-al" },
      { english: "individual", spanish: "individual", category: "-al" },
    ] as CognateWord[],
  },
};

// ─── Section B: He/She Can, Wants, Has To ────────────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "He/She can",
    labelEs: "Él/Ella puede",
    description: "In Unit 1 you learned 'I can'. Now add 'he can' and 'she can' — same pattern, third person.",
    descriptionEs: "En la Unidad 1 aprendiste 'I can'. Ahora agrega 'he can' y 'she can' — mismo patrón, tercera persona.",
    sentences: [
      {
        english: "He can be here tomorrow.",
        spanish: "Puede estar aquí mañana.",
        highlight: "He can",
      },
      {
        english: "She can be here later.",
        spanish: "Puede estar aquí más tarde.",
        highlight: "She can",
      },
      {
        english: "He can't be here today.",
        spanish: "No puede estar aquí hoy.",
        highlight: "can't",
      },
      {
        english: "She can't be here tomorrow.",
        spanish: "No puede estar aquí mañana.",
      },
      {
        english: "He can call me later.",
        spanish: "Puede llamarme más tarde.",
        highlight: "call me",
      },
    ],
  },
  {
    label: "He/She wants",
    labelEs: "Él/Ella quiere",
    description: "'He wants' and 'she wants' — notice the 's' at the end. This is key for third person.",
    descriptionEs: "'He wants' y 'she wants' — nota la 's' al final. Esto es clave para la tercera persona.",
    sentences: [
      {
        english: "He wants to be here.",
        spanish: "Quiere estar aquí.",
        highlight: "wants",
      },
      {
        english: "She wants to be here with me today.",
        spanish: "Quiere estar aquí conmigo hoy.",
        highlight: "with me",
      },
      {
        english: "He wants to do it tomorrow.",
        spanish: "Quiere hacerlo mañana.",
      },
      {
        english: "She doesn't want to do it tomorrow.",
        spanish: "No quiere hacerlo mañana.",
        highlight: "doesn't want",
      },
      {
        english: "He doesn't want to be here with me.",
        spanish: "No quiere estar aquí conmigo.",
      },
    ],
  },
  {
    label: "He/She has to",
    labelEs: "Él/Ella tiene que",
    description: "'Has to' (not 'have to') for he/she. Express what someone else must do.",
    descriptionEs: "'Has to' (no 'have to') para él/ella. Expresa lo que otra persona debe hacer.",
    sentences: [
      {
        english: "He has to go out tonight.",
        spanish: "Tiene que salir esta noche.",
        highlight: "has to",
      },
      {
        english: "She has to call me tomorrow.",
        spanish: "Tiene que llamarme mañana.",
      },
      {
        english: "It's urgent and she has to call me tonight.",
        spanish: "Es urgente y tiene que llamarme esta noche.",
        highlight: "urgent",
      },
      {
        english: "He has to wait for me here.",
        spanish: "Tiene que esperarme aquí.",
        highlight: "wait for me",
      },
      {
        english: "She has to wait for me here because today I'm very busy.",
        spanish: "Tiene que esperarme aquí porque hoy estoy muy ocupado.",
        highlight: "busy",
      },
    ],
  },
];

// ─── Section C: Combining + He/She Would Like ───────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "He/She would like",
    labelEs: "Le gustaría",
    description: "The polite form for someone else's preferences. Very useful in professional settings.",
    descriptionEs: "La forma educada para las preferencias de otra persona. Muy útil en entornos profesionales.",
    sentences: [
      {
        english: "He would like to do it tomorrow.",
        spanish: "Le gustaría hacerlo mañana.",
        highlight: "He would like",
      },
      {
        english: "She would like to be here with me.",
        spanish: "Le gustaría estar aquí conmigo.",
      },
      {
        english: "He would like to call me later.",
        spanish: "Le gustaría llamarme más tarde.",
      },
      {
        english: "She would like to know if I can be here tomorrow.",
        spanish: "Le gustaría saber si puedo estar aquí mañana.",
      },
      {
        english: "He wouldn't like it that way.",
        spanish: "No le gustaría así.",
        highlight: "wouldn't like",
      },
    ],
  },
  {
    label: "Asking about others",
    labelEs: "Preguntando sobre otros",
    description: "Questions about what he or she can do, wants, or needs. Same word order trick from Unit 1.",
    descriptionEs: "Preguntas sobre lo que él o ella puede hacer, quiere o necesita. El mismo truco de orden de palabras de la Unidad 1.",
    sentences: [
      {
        english: "Can he call me today?",
        spanish: "¿Puede llamarme hoy?",
        highlight: "Can he",
      },
      {
        english: "Can she do it today?",
        spanish: "¿Puede hacerlo hoy?",
      },
      {
        english: "Does he want to be here?",
        spanish: "¿Quiere estar aquí?",
        highlight: "Does he want",
      },
      {
        english: "Does she want to call me tonight?",
        spanish: "¿Quiere llamarme esta noche?",
      },
      {
        english: "I want to know if he can call me tomorrow because it's important.",
        spanish: "Quiero saber si puede llamarme mañana porque es importante.",
      },
    ],
  },
  {
    label: "Himself / Herself",
    labelEs: "Él mismo / Ella misma",
    description: "Express independence — he can do it himself, she wants to do it herself.",
    descriptionEs: "Expresa independencia — él puede hacerlo él mismo, ella quiere hacerlo ella misma.",
    sentences: [
      {
        english: "He can do it himself.",
        spanish: "Puede hacerlo él mismo.",
        highlight: "himself",
      },
      {
        english: "She wants to call me herself.",
        spanish: "Quiere llamarme ella misma.",
        highlight: "herself",
      },
      {
        english: "He can't do it himself.",
        spanish: "No puede hacerlo él mismo.",
      },
      {
        english: "I need to be here because she cannot do it herself.",
        spanish: "Necesito estar aquí porque no puede hacerlo ella misma.",
      },
      {
        english: "She would like to see me herself.",
        spanish: "Le gustaría verme ella misma.",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "Talking About What Others Need",
  titleEs: "Hablando de Lo que Otros Necesitan",
  description:
    "Combine everything — he/she with your connectors to build real-world sentences about other people.",
  descriptionEs:
    "Combina todo — él/ella con tus conectores para construir oraciones del mundo real sobre otras personas.",
  connectors: [
    {
      word: "with me",
      wordEs: "conmigo",
      example: {
        english: "She wants to be here with me today.",
        spanish: "Quiere estar aquí conmigo hoy.",
      },
    },
    {
      word: "urgent",
      wordEs: "urgente",
      example: {
        english: "It's urgent and he has to do it for me today.",
        spanish: "Es urgente y tiene que hacerlo para mí hoy.",
      },
    },
    {
      word: "busy",
      wordEs: "ocupado/a",
      example: {
        english: "He can't call me today because I'm busy.",
        spanish: "No puede llamarme hoy porque estoy ocupado.",
      },
    },
    {
      word: "himself",
      wordEs: "él mismo",
      example: {
        english: "He wants to do it himself.",
        spanish: "Quiere hacerlo él mismo.",
      },
    },
    {
      word: "herself",
      wordEs: "ella misma",
      example: {
        english: "She can call me herself.",
        spanish: "Puede llamarme ella misma.",
      },
    },
  ],
  bossSentence: {
    english:
      "I would like to know if he can see me today because it's very important, and she would like to know if I can do it later.",
    spanish:
      "Me gustaría saber si puede verme hoy porque es muy importante, y a ella le gustaría saber si puedo hacerlo más tarde.",
  },
};

// ─── Section E: Pronunciation Drills — Ch vs Sh ─────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "she",
    spanishStress: "(no 'sh' in Spanish)",
    englishStress: "SH sound — smooth, like wind",
    tip: "The 'sh' sound doesn't exist in Spanish. It's a smooth, continuous sound — like telling someone to be quiet: 'shhhh'. Don't make it explosive like 'ch'.",
    tipEs: "El sonido 'sh' no existe en español. Es un sonido suave y continuo — como cuando le dices a alguien que se calle: 'shhhh'. No lo hagas explosivo como 'ch'.",
  },
  {
    word: "cheese",
    spanishStress: "CH = explosive",
    englishStress: "CH — tongue hits roof, then releases",
    tip: "'Ch' is explosive — your tongue hits the roof of your mouth and releases air. 'Sh' is smooth — air flows continuously. Cheese (explosive) vs. She's (smooth).",
    tipEs: "'Ch' es explosivo — tu lengua golpea el paladar y libera aire. 'Sh' es suave — el aire fluye continuamente. Cheese (explosivo) vs. She's (suave).",
  },
  {
    word: "ship",
    spanishStress: "SH (smooth)",
    englishStress: "SHIP — not 'chip'!",
    tip: "Ship (smooth 'sh') vs. Chip (explosive 'ch'). If you say 'chip' when you mean 'ship', people hear the wrong word. Practice the smooth airflow.",
    tipEs: "Ship (suave 'sh') vs. Chip (explosivo 'ch'). Si dices 'chip' cuando quieres decir 'ship', la gente escucha la palabra incorrecta.",
  },
  {
    word: "watch",
    spanishStress: "similar to Spanish 'ch'",
    englishStress: "WATCH — ends with CH",
    tip: "Good news — 'ch' at the end of words is similar to Spanish. 'Watch', 'much', 'each' — you already know this sound!",
    tipEs: "Buena noticia — 'ch' al final de las palabras es similar al español. 'Watch', 'much', 'each' — ¡ya conoces este sonido!",
  },
  {
    word: "should",
    spanishStress: "(no 'sh' in Spanish)",
    englishStress: "SHOULD — smooth SH + silent L",
    tip: "'Should' starts with the smooth 'sh' sound and the 'l' is completely silent. It sounds like 'shud', not 'shold'.",
    tipEs: "'Should' empieza con el suave sonido 'sh' y la 'l' es completamente silenciosa. Suena como 'shud', no 'shold'.",
  },
  {
    word: "change",
    spanishStress: "CH = explosive",
    englishStress: "CHANGE — starts explosive CH",
    tip: "'Change' starts with the explosive 'ch' — same as 'cheese' and 'chair'. Your tongue hits the roof and releases.",
    tipEs: "'Change' empieza con 'ch' explosiva — igual que 'cheese' y 'chair'. Tu lengua golpea el paladar y libera aire.",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Third person modals
  { english: "he/she can", spanish: "puede", type: "modal" },
  { english: "he/she can't", spanish: "no puede", type: "modal" },
  { english: "he/she wants", spanish: "quiere", type: "modal" },
  { english: "he/she doesn't want", spanish: "no quiere", type: "modal" },
  { english: "he/she has to", spanish: "tiene que", type: "modal" },
  { english: "he/she would like", spanish: "le gustaría", type: "modal" },
  { english: "he/she wouldn't like", spanish: "no le gustaría", type: "modal" },

  // New vocabulary
  { english: "with me", spanish: "conmigo", type: "phrase" },
  { english: "to call me", spanish: "llamarme", type: "verb" },
  { english: "to wait", spanish: "esperar", type: "verb" },
  { english: "to wait for me", spanish: "esperarme", type: "verb" },
  { english: "to see me", spanish: "verme", type: "verb" },
  { english: "busy", spanish: "ocupado/a", type: "word" },
  { english: "urgent", spanish: "urgente", type: "word" },
  { english: "himself", spanish: "él mismo", type: "word" },
  { english: "herself", spanish: "ella misma", type: "word" },
  { english: "more / anymore", spanish: "más", type: "word" },

  // Review from Units 1-2
  { english: "I would like", spanish: "me gustaría", type: "modal" },
  { english: "I like", spanish: "me gusta", type: "modal" },
  { english: "it was", spanish: "fue", type: "phrase" },
  { english: "tomorrow", spanish: "mañana", type: "word" },
  { english: "tonight", spanish: "esta noche", type: "word" },
  { english: "later", spanish: "más tarde", type: "word" },
  { english: "because", spanish: "porque", type: "word" },
  { english: "if", spanish: "si", type: "word" },
  { english: "for me", spanish: "para mí", type: "phrase" },
  { english: "again", spanish: "otra vez", type: "word" },
];
