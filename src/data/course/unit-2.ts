// Unit 2: "What You Like" — Full course content

import type { CognateWord, SentenceBlock, PronunciationDrill, VocabItem } from "./unit-1";

// ─── Section A: Cognate Discovery ────────────────────────────────────────────

export const cognateWaves = {
  wave1: {
    title: "The -tion Pattern",
    titleEs: "El Patrón -tion",
    description:
      "Every Spanish word ending in -ción becomes -tion in English. You already know hundreds of these.",
    descriptionEs:
      "Cada palabra en español que termina en -ción se convierte en -tion en inglés. Ya conoces cientos de estas.",
    words: [
      {
        english: "information",
        spanish: "información",
        category: "-tion",
        pronunciationNote: "Stress on third syllable: in-for-MA-tion",
        pronunciationNoteEs: "Acento en la tercera sílaba: in-for-MA-tion",
      },
      { english: "tradition", spanish: "tradición", category: "-tion" },
      { english: "action", spanish: "acción", category: "-tion" },
      { english: "solution", spanish: "solución", category: "-tion" },
      { english: "nation", spanish: "nación", category: "-tion" },
      { english: "option", spanish: "opción", category: "-tion" },
      { english: "prediction", spanish: "predicción", category: "-tion" },
      { english: "vibration", spanish: "vibración", category: "-tion" },
      {
        english: "transformation",
        spanish: "transformación",
        category: "-tion",
        pronunciationNote: "Stress: trans-for-MA-tion",
        pronunciationNoteEs: "Acento: trans-for-MA-tion",
      },
      { english: "repetition", spanish: "repetición", category: "-tion" },
      { english: "limitation", spanish: "limitación", category: "-tion" },
      { english: "activation", spanish: "activación", category: "-tion" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The -ist Pattern",
    titleEs: "El Patrón -ist",
    description:
      "People and professions: Spanish -ista becomes English -ist. Drop the 'a' and you're done.",
    descriptionEs:
      "Personas y profesiones: el español -ista se convierte en -ist en inglés. Quita la 'a' y listo.",
    words: [
      { english: "dentist", spanish: "dentista", category: "-ist" },
      { english: "artist", spanish: "artista", category: "-ist" },
      { english: "tourist", spanish: "turista", category: "-ist" },
      { english: "optimist", spanish: "optimista", category: "-ist" },
      { english: "pessimist", spanish: "pesimista", category: "-ist" },
      {
        english: "capitalist",
        spanish: "capitalista",
        category: "-ist",
        pronunciationNote: "Stress on first syllable: CAP-i-ta-list",
        pronunciationNoteEs: "Acento en la primera sílaba: CAP-i-ta-list",
      },
      { english: "communist", spanish: "comunista", category: "-ist" },
      { english: "vocalist", spanish: "vocalista", category: "-ist" },
      { english: "pacifist", spanish: "pacifista", category: "-ist" },
      { english: "racist", spanish: "racista", category: "-ist" },
    ] as CognateWord[],
  },
  wave3: {
    title: "The -ary Pattern",
    titleEs: "El Patrón -ary",
    description:
      "Spanish -ario becomes English -ary. These are everywhere in daily English.",
    descriptionEs:
      "El español -ario se convierte en -ary en inglés. Están en todas partes del inglés cotidiano.",
    words: [
      {
        english: "vocabulary",
        spanish: "vocabulario",
        category: "-ary",
        pronunciationNote: "Stress on second syllable: vo-CAB-u-la-ry",
        pronunciationNoteEs: "Acento en la segunda sílaba: vo-CAB-u-la-ry",
      },
      { english: "necessary", spanish: "necesario", category: "-ary" },
      { english: "temporary", spanish: "temporario", category: "-ary" },
      { english: "ordinary", spanish: "ordinario", category: "-ary" },
      { english: "primary", spanish: "primario", category: "-ary" },
      { english: "secretary", spanish: "secretario", category: "-ary" },
      { english: "anniversary", spanish: "aniversario", category: "-ary" },
      { english: "solitary", spanish: "solitario", category: "-ary" },
    ] as CognateWord[],
  },
};

// ─── Section B: Sentence Builder — I like / I don't like ─────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "I like",
    labelEs: "Me gusta",
    description: "'I like' is one of the most useful phrases in English. Use it with nouns or with 'to' + verb.",
    descriptionEs: "'I like' es una de las frases más útiles en inglés. Úsala con sustantivos o con 'to' + verbo.",
    sentences: [
      {
        english: "I like it.",
        spanish: "Me gusta.",
        highlight: "I like",
      },
      {
        english: "I like it a lot.",
        spanish: "Me gusta mucho.",
        highlight: "a lot",
      },
      {
        english: "I like it here.",
        spanish: "Me gusta aquí.",
        highlight: "here",
      },
      {
        english: "I like the food here.",
        spanish: "Me gusta la comida aquí.",
        highlight: "the food",
      },
      {
        english: "I like to read every day.",
        spanish: "Me gusta leer cada día.",
        highlight: "to read",
      },
    ],
  },
  {
    label: "I don't like",
    labelEs: "No me gusta",
    description: "Add 'don't' before 'like' to express what you don't enjoy.",
    descriptionEs: "Agrega 'don't' antes de 'like' para expresar lo que no te gusta.",
    sentences: [
      {
        english: "I don't like it.",
        spanish: "No me gusta.",
        highlight: "don't",
      },
      {
        english: "I don't like it here.",
        spanish: "No me gusta aquí.",
      },
      {
        english: "I don't like the food here.",
        spanish: "No me gusta la comida aquí.",
      },
      {
        english: "I don't like to eat here.",
        spanish: "No me gusta comer aquí.",
        highlight: "to eat",
      },
      {
        english: "I don't like it very much.",
        spanish: "No me gusta mucho.",
        highlight: "very much",
      },
    ],
  },
  {
    label: "I like to...",
    labelEs: "Me gusta...",
    description: "'I like to' + verb lets you talk about activities you enjoy. This is your daily life in English.",
    descriptionEs: "'I like to' + verbo te permite hablar de actividades que disfrutas. Esta es tu vida diaria en inglés.",
    sentences: [
      {
        english: "I like to eat here.",
        spanish: "Me gusta comer aquí.",
      },
      {
        english: "I like to read every day.",
        spanish: "Me gusta leer cada día.",
        highlight: "every day",
      },
      {
        english: "I like to swim.",
        spanish: "Me gusta nadar.",
        highlight: "to swim",
      },
      {
        english: "I like to swim here every day.",
        spanish: "Me gusta nadar aquí cada día.",
      },
      {
        english: "I don't like to read.",
        spanish: "No me gusta leer.",
      },
    ],
  },
];

// ─── Section C: Power Verbs — I would like ───────────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "I would like",
    labelEs: "Me gustaría",
    description:
      "'I would like' is the polite way to say what you want. It's softer than 'I want'. Use it everywhere.",
    descriptionEs:
      "'I would like' es la forma educada de decir lo que quieres. Es más suave que 'I want'. Úsalo en todas partes.",
    sentences: [
      {
        english: "I would like to eat.",
        spanish: "Me gustaría comer.",
        highlight: "I would like",
      },
      {
        english: "I would like to eat here tonight.",
        spanish: "Me gustaría comer aquí esta noche.",
        highlight: "tonight",
      },
      {
        english: "I would like to read the book.",
        spanish: "Me gustaría leer el libro.",
        highlight: "the book",
      },
      {
        english: "I would like to speak with you.",
        spanish: "Me gustaría hablar contigo.",
        highlight: "with you",
      },
      {
        english: "I would like to know if it's possible.",
        spanish: "Me gustaría saber si es posible.",
      },
    ],
  },
  {
    label: "Combining with Unit 1",
    labelEs: "Combinando con Unidad 1",
    description:
      "Now let's mix 'I would like' with everything you learned in Unit 1. Watch how powerful this gets.",
    descriptionEs:
      "Ahora mezclemos 'I would like' con todo lo que aprendiste en la Unidad 1. Mira lo poderoso que se vuelve.",
    sentences: [
      {
        english: "I would like to know if it's possible to do it tomorrow.",
        spanish: "Me gustaría saber si es posible hacerlo mañana.",
      },
      {
        english: "I would like to be here but I can't.",
        spanish: "Me gustaría estar aquí pero no puedo.",
        highlight: "but I can't",
      },
      {
        english: "I would like to be here but I can't because I have to work.",
        spanish:
          "Me gustaría estar aquí pero no puedo porque tengo que trabajar.",
        highlight: "to work",
      },
      {
        english:
          "I would like to speak with you later.",
        spanish:
          "Me gustaría hablar contigo más tarde.",
      },
      {
        english:
          "Now I have to go out but I would like to speak with you later.",
        spanish:
          "Ahora tengo que salir pero me gustaría hablar contigo más tarde.",
      },
    ],
  },
  {
    label: "It was / It wasn't",
    labelEs: "Fue / No fue",
    description:
      "'It was' takes you into the past. Just two words and you can talk about yesterday.",
    descriptionEs:
      "'It was' te lleva al pasado. Solo dos palabras y puedes hablar de ayer.",
    sentences: [
      {
        english: "It was good.",
        spanish: "Fue bueno.",
        highlight: "It was",
      },
      {
        english: "It was good for me.",
        spanish: "Fue bueno para mí.",
      },
      {
        english: "It wasn't good for me.",
        spanish: "No fue bueno para mí.",
        highlight: "wasn't",
      },
      {
        english: "It was impossible for me to do it.",
        spanish: "Fue imposible para mí hacerlo.",
      },
      {
        english: "Yesterday it was impossible to go out.",
        spanish: "Ayer fue imposible salir.",
        highlight: "Yesterday",
      },
    ],
  },
  {
    label: "Myself / Again / Soon",
    labelEs: "Yo mismo / Otra vez / Pronto",
    description:
      "Three words that add independence and time to your sentences.",
    descriptionEs:
      "Tres palabras que agregan independencia y tiempo a tus oraciones.",
    sentences: [
      {
        english: "I like to do it myself.",
        spanish: "Me gusta hacerlo yo mismo.",
        highlight: "myself",
      },
      {
        english: "I would like to do it myself.",
        spanish: "Me gustaría hacerlo yo mismo.",
      },
      {
        english: "It was good to see you yesterday and I would like to do it again.",
        spanish: "Fue un gusto verte ayer y me gustaría hacerlo otra vez.",
        highlight: "again",
      },
      {
        english: "It was good to work with you and I would like to do it again soon.",
        spanish: "Fue un gusto trabajar contigo y me gustaría hacerlo otra vez pronto.",
        highlight: "soon",
      },
      {
        english: "I can do it myself because it's good for me.",
        spanish: "Puedo hacerlo yo mismo porque es bueno para mí.",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "Building Longer Sentences",
  titleEs: "Construyendo Oraciones Más Largas",
  description:
    "Review the connectors from Unit 1 and add new time words to build more complex sentences.",
  descriptionEs:
    "Repasa los conectores de la Unidad 1 y agrega nuevas palabras de tiempo para construir oraciones más complejas.",
  connectors: [
    {
      word: "every day",
      wordEs: "cada día",
      example: {
        english: "I like to swim every day.",
        spanish: "Me gusta nadar cada día.",
      },
    },
    {
      word: "yesterday",
      wordEs: "ayer",
      example: {
        english: "Yesterday it was impossible to do it.",
        spanish: "Ayer fue imposible hacerlo.",
      },
    },
    {
      word: "again",
      wordEs: "otra vez",
      example: {
        english: "I would like to do it again.",
        spanish: "Me gustaría hacerlo otra vez.",
      },
    },
    {
      word: "soon",
      wordEs: "pronto",
      example: {
        english: "I would like to see you again soon.",
        spanish: "Me gustaría verte otra vez pronto.",
      },
    },
    {
      word: "with you",
      wordEs: "contigo",
      example: {
        english: "I would like to speak with you tonight.",
        spanish: "Me gustaría hablar contigo esta noche.",
      },
    },
  ],
  bossSentence: {
    english:
      "It was good to see you yesterday and I would like to do it again soon because I like to spend time with you.",
    spanish:
      "Fue un gusto verte ayer y me gustaría hacerlo otra vez pronto porque me gusta pasar tiempo contigo.",
  },
};

// ─── Section E: Pronunciation Drills — B vs V ────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "very",
    spanishStress: "same as B",
    englishStress: "V sound — top teeth on lower lip",
    tip: "In English, B and V are DIFFERENT sounds. For V, touch your top teeth to your lower lip and vibrate. 'Very' is NOT 'berry'.",
    tipEs: "En inglés, B y V son sonidos DIFERENTES. Para V, toca tus dientes superiores con tu labio inferior y vibra. 'Very' NO es 'berry'.",
  },
  {
    word: "vocabulary",
    spanishStress: "vo-ca-bu-LA-rio",
    englishStress: "vo-CAB-u-la-ry",
    tip: "Stress the SECOND syllable 'CAB'. Also starts with a V sound, not B.",
    tipEs: "Acentúa la SEGUNDA sílaba 'CAB'. También empieza con sonido V, no B.",
  },
  {
    word: "visit",
    spanishStress: "vi-si-TAR",
    englishStress: "VIS-it",
    tip: "Stress the FIRST syllable. Both V sounds — top teeth on lower lip.",
    tipEs: "Acentúa la PRIMERA sílaba. Ambos sonidos V — dientes superiores en labio inferior.",
  },
  {
    word: "every",
    spanishStress: "(no equivalent)",
    englishStress: "EV-ry (2 syllables!)",
    tip: "This word has only 2 syllables in natural speech: EV-ry, not E-ve-ry. The middle vowel disappears.",
    tipEs: "Esta palabra tiene solo 2 sílabas en el habla natural: EV-ry, no E-ve-ry. La vocal del medio desaparece.",
  },
  {
    word: "believe",
    spanishStress: "(no equivalent)",
    englishStress: "be-LIEVE",
    tip: "Stress the SECOND syllable. The 'ie' sounds like 'ee' in 'see'. Ends with a V sound.",
    tipEs: "Acentúa la SEGUNDA sílaba. La 'ie' suena como 'ee' en 'see'. Termina con sonido V.",
  },
  {
    word: "food",
    spanishStress: "(no equivalent)",
    englishStress: "FOOD (long 'oo')",
    tip: "The 'oo' is a long sound — push your lips forward like you're blowing out a candle. Don't confuse with 'foot' (short sound).",
    tipEs: "La 'oo' es un sonido largo — empuja tus labios hacia adelante como si apagaras una vela. No confundir con 'foot' (sonido corto).",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Core expressions
  { english: "I like / I like it", spanish: "me gusta", type: "phrase" },
  { english: "I don't like", spanish: "no me gusta", type: "phrase" },
  { english: "I would like", spanish: "me gustaría", type: "phrase" },
  { english: "it was", spanish: "fue", type: "phrase" },
  { english: "it wasn't", spanish: "no fue", type: "phrase" },

  // New vocabulary
  { english: "yes", spanish: "sí", type: "word" },
  { english: "a lot / very much", spanish: "mucho", type: "word" },
  { english: "food", spanish: "comida", type: "word" },
  { english: "the book", spanish: "el libro", type: "word" },
  { english: "every day", spanish: "cada día", type: "word" },
  { english: "yesterday", spanish: "ayer", type: "word" },
  { english: "again", spanish: "otra vez", type: "word" },
  { english: "soon", spanish: "pronto", type: "word" },
  { english: "myself", spanish: "yo mismo/a", type: "word" },
  { english: "with you", spanish: "contigo", type: "word" },

  // Verbs
  { english: "to eat", spanish: "comer", type: "verb" },
  { english: "to read", spanish: "leer", type: "verb" },
  { english: "to swim", spanish: "nadar", type: "verb" },
  { english: "to speak / to talk", spanish: "hablar", type: "verb" },
  { english: "to work", spanish: "trabajar", type: "verb" },
  { english: "to see", spanish: "ver", type: "verb" },
  { english: "to see you", spanish: "verte", type: "verb" },

  // Review from Unit 1
  { english: "tonight", spanish: "esta noche", type: "word" },
  { english: "tomorrow", spanish: "mañana", type: "word" },
  { english: "later", spanish: "más tarde", type: "word" },
  { english: "here", spanish: "aquí", type: "word" },
  { english: "because", spanish: "porque", type: "word" },
  { english: "but", spanish: "pero", type: "word" },
  { english: "I can", spanish: "puedo", type: "modal" },
  { english: "I can't", spanish: "no puedo", type: "modal" },
  { english: "I have to", spanish: "tengo que", type: "modal" },
  { english: "I want", spanish: "quiero", type: "modal" },
];
