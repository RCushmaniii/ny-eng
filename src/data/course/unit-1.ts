// Unit 1: "You Already Know English" — Full course content

export interface CognateWord {
  english: string;
  spanish: string;
  category: string;
  pronunciationNote?: string;
  pronunciationNoteEs?: string;
}

export interface SentenceBlock {
  label: string;
  labelEs: string;
  description: string;
  descriptionEs: string;
  sentences: {
    english: string;
    spanish: string;
    highlight?: string; // The new element being introduced
  }[];
}

export interface PronunciationDrill {
  word: string;
  spanishStress: string;
  englishStress: string;
  tip: string;
  tipEs: string;
}

export interface VocabItem {
  english: string;
  spanish: string;
  type: "word" | "phrase" | "verb" | "modal";
}

// ─── Section A: Cognate Discovery ────────────────────────────────────────────

export const cognateWaves = {
  wave1: {
    title: "Identical Twins",
    titleEs: "Gemelos Idénticos",
    description: "These words are spelled almost the same in both languages.",
    descriptionEs:
      "Estas palabras se escriben casi igual en ambos idiomas.",
    words: [
      {
        english: "possible",
        spanish: "posible",
        category: "-ible",
        pronunciationNote:
          "Stress on FIRST syllable: POSS-ible, not pos-SI-ble",
        pronunciationNoteEs:
          "Acento en la PRIMERA sílaba: POSS-ible, no pos-SI-ble",
      },
      { english: "horrible", spanish: "horrible", category: "-ible" },
      { english: "terrible", spanish: "terrible", category: "-ible" },
      { english: "invisible", spanish: "invisible", category: "-ible" },
      { english: "flexible", spanish: "flexible", category: "-ible" },
      {
        english: "impossible",
        spanish: "imposible",
        category: "-ible",
        pronunciationNote:
          "Stress on SECOND syllable: im-POSS-ible",
        pronunciationNoteEs:
          "Acento en la SEGUNDA sílaba: im-POSS-ible",
      },
      { english: "compatible", spanish: "compatible", category: "-ible" },
      { english: "reversible", spanish: "reversible", category: "-ible" },
      { english: "convertible", spanish: "convertible", category: "-ible" },
      { english: "inflexible", spanish: "inflexible", category: "-ible" },
    ] as CognateWord[],
  },
  wave2: {
    title: "Close Cousins",
    titleEs: "Primos Cercanos",
    description:
      "Small, predictable spelling changes — once you see the pattern, you can guess hundreds more.",
    descriptionEs:
      "Pequeños cambios de ortografía predecibles — una vez que ves el patrón, puedes adivinar cientos más.",
    words: [
      {
        english: "important",
        spanish: "importante",
        category: "-ant → -ante",
        pronunciationNote:
          "Stress on SECOND syllable: im-POR-tant",
        pronunciationNoteEs:
          "Acento en la SEGUNDA sílaba: im-POR-tant",
      },
      { english: "elegant", spanish: "elegante", category: "-ant → -ante" },
      { english: "tolerant", spanish: "tolerante", category: "-ant → -ante" },
      {
        english: "normal",
        spanish: "normal",
        category: "-al",
        pronunciationNote: "Stress on FIRST syllable: NOR-mal",
        pronunciationNoteEs: "Acento en la PRIMERA sílaba: NOR-mal",
      },
      { english: "total", spanish: "total", category: "-al" },
      { english: "central", spanish: "central", category: "-al" },
      { english: "hospital", spanish: "hospital", category: "-al" },
      { english: "federal", spanish: "federal", category: "-al" },
      {
        english: "information",
        spanish: "información",
        category: "-tion → -ción",
        pronunciationNote:
          "Stress on THIRD syllable: in-for-MA-tion",
        pronunciationNoteEs:
          "Acento en la TERCERA sílaba: in-for-MA-tion",
      },
      {
        english: "tradition",
        spanish: "tradición",
        category: "-tion → -ción",
      },
      { english: "nation", spanish: "nación", category: "-tion → -ción" },
      { english: "action", spanish: "acción", category: "-tion → -ción" },
      {
        english: "solution",
        spanish: "solución",
        category: "-tion → -ción",
      },
    ] as CognateWord[],
  },
  wave3: {
    title: "Sound-Alikes",
    titleEs: "Suenan Parecido",
    description:
      "Different spelling but you'll recognize them when you hear them.",
    descriptionEs:
      "Diferente ortografía pero los reconocerás cuando los escuches.",
    words: [
      { english: "fantastic", spanish: "fantástico", category: "-ic → -ico" },
      { english: "classic", spanish: "clásico", category: "-ic → -ico" },
      { english: "electric", spanish: "eléctrico", category: "-ic → -ico" },
      { english: "music", spanish: "música", category: "-ic → -ica" },
      {
        english: "university",
        spanish: "universidad",
        category: "-ity → -idad",
        pronunciationNote:
          "Stress on THIRD syllable: u-ni-VER-si-ty",
        pronunciationNoteEs:
          "Acento en la TERCERA sílaba: u-ni-VER-si-ty",
      },
      {
        english: "identity",
        spanish: "identidad",
        category: "-ity → -idad",
      },
      { english: "quality", spanish: "calidad", category: "-ity → -idad" },
      { english: "active", spanish: "activo", category: "-ive → -ivo" },
      { english: "negative", spanish: "negativo", category: "-ive → -ivo" },
      {
        english: "exclusive",
        spanish: "exclusivo",
        category: "-ive → -ivo",
      },
    ] as CognateWord[],
  },
};

// ─── Section B: Sentence Builder ─────────────────────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "It is",
    labelEs: "Es",
    description: "Your first two words. This is how everything starts.",
    descriptionEs: "Tus primeras dos palabras. Así empieza todo.",
    sentences: [
      {
        english: "It is possible.",
        spanish: "Es posible.",
        highlight: "It is",
      },
      { english: "It is important.", spanish: "Es importante." },
      { english: "It is normal.", spanish: "Es normal." },
      { english: "It is fantastic.", spanish: "Es fantástico." },
      { english: "It is perfect.", spanish: "Es perfecto." },
    ],
  },
  {
    label: "It is not",
    labelEs: "No es",
    description: "Add 'not' and you can disagree with anything.",
    descriptionEs: "Agrega 'not' y puedes negar cualquier cosa.",
    sentences: [
      {
        english: "It is not possible.",
        spanish: "No es posible.",
        highlight: "not",
      },
      { english: "It is not important.", spanish: "No es importante." },
      { english: "It isn't normal.", spanish: "No es normal." },
      { english: "It is not impossible.", spanish: "No es imposible." },
      {
        english: "Nothing is impossible.",
        spanish: "Nada es imposible.",
        highlight: "Nothing",
      },
    ],
  },
  {
    label: "For me",
    labelEs: "Para mí",
    description: "Make it personal.",
    descriptionEs: "Hazlo personal.",
    sentences: [
      {
        english: "It is important for me.",
        spanish: "Es importante para mí.",
        highlight: "for me",
      },
      {
        english: "It is not possible for me.",
        spanish: "No es posible para mí.",
      },
      {
        english: "It is something important for me.",
        spanish: "Es algo importante para mí.",
        highlight: "something",
      },
      {
        english: "Today is important for me.",
        spanish: "Hoy es importante para mí.",
        highlight: "Today",
      },
    ],
  },
  {
    label: "Very + Here",
    labelEs: "Muy + Aquí",
    description: "Add intensity and location.",
    descriptionEs: "Agrega intensidad y ubicación.",
    sentences: [
      {
        english: "It is very important.",
        spanish: "Es muy importante.",
        highlight: "very",
      },
      {
        english: "It is very good.",
        spanish: "Es muy bueno.",
        highlight: "good",
      },
      {
        english: "It is fantastic here.",
        spanish: "Es fantástico aquí.",
        highlight: "here",
      },
      {
        english: "It is perfect like this.",
        spanish: "Es perfecto así.",
        highlight: "like this",
      },
      {
        english: "It is very good here.",
        spanish: "Es muy bueno aquí.",
      },
    ],
  },
  {
    label: "Questions",
    labelEs: "Preguntas",
    description:
      "To ask a question in English, just change the word order slightly. Listen to how the voice goes up at the end.",
    descriptionEs:
      "Para hacer una pregunta en inglés, solo cambia ligeramente el orden de las palabras. Escucha cómo la voz sube al final.",
    sentences: [
      {
        english: "Is it important?",
        spanish: "¿Es importante?",
        highlight: "Is it",
      },
      { english: "Is it for me?", spanish: "¿Es para mí?" },
      {
        english: "Is it normal like this?",
        spanish: "¿Es normal así?",
      },
      {
        english: "Is it something important?",
        spanish: "¿Es algo importante?",
      },
    ],
  },
];

// ─── Section C: Power Verbs ──────────────────────────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "I need",
    labelEs: "Necesito",
    description:
      "'I need' + 'to' + any verb = express necessity. Simple and powerful.",
    descriptionEs:
      "'I need' + 'to' + cualquier verbo = expresar necesidad. Simple y poderoso.",
    sentences: [
      {
        english: "I need to know.",
        spanish: "Necesito saber.",
        highlight: "I need to",
      },
      {
        english: "I need to be here.",
        spanish: "Necesito estar aquí.",
      },
      {
        english: "I need to do it now.",
        spanish: "Necesito hacerlo ahora.",
        highlight: "to do it",
      },
      {
        english: "I need to be here today because it is important.",
        spanish: "Necesito estar aquí hoy porque es importante.",
        highlight: "because",
      },
      {
        english: "I need to know if it is possible.",
        spanish: "Necesito saber si es posible.",
        highlight: "if",
      },
    ],
  },
  {
    label: "I want",
    labelEs: "Quiero",
    description: "Express desires. Same pattern: 'I want' + 'to' + verb.",
    descriptionEs:
      "Expresa deseos. Mismo patrón: 'I want' + 'to' + verbo.",
    sentences: [
      {
        english: "I want to do it today.",
        spanish: "Quiero hacerlo hoy.",
        highlight: "I want to",
      },
      {
        english: "I want to know if it is possible.",
        spanish: "Quiero saber si es posible.",
      },
      {
        english: "I don't want to do it like this.",
        spanish: "No quiero hacerlo así.",
        highlight: "I don't want",
      },
      {
        english: "I want to know if it is possible to do it today.",
        spanish: "Quiero saber si es posible hacerlo hoy.",
      },
    ],
  },
  {
    label: "I have to",
    labelEs: "Tengo que",
    description:
      "Express obligation. 'I have to' = something you must do.",
    descriptionEs:
      "Expresa obligación. 'I have to' = algo que debes hacer.",
    sentences: [
      {
        english: "I have to go out tonight.",
        spanish: "Tengo que salir esta noche.",
        highlight: "I have to",
      },
      {
        english: "I have to be here.",
        spanish: "Tengo que estar aquí.",
      },
      {
        english:
          "I have to be here tonight because it is very important.",
        spanish:
          "Tengo que estar aquí esta noche porque es muy importante.",
      },
      {
        english: "I don't have to study.",
        spanish: "No tengo que estudiar.",
        highlight: "I don't have to",
      },
    ],
  },
  {
    label: "I can",
    labelEs: "Puedo",
    description: "Express ability. 'I can' + verb (no 'to' needed!).",
    descriptionEs:
      "Expresa capacidad. 'I can' + verbo (¡sin 'to'!).",
    sentences: [
      {
        english: "I can do it later.",
        spanish: "Puedo hacerlo más tarde.",
        highlight: "I can",
      },
      {
        english: "I can be here tomorrow.",
        spanish: "Puedo estar aquí mañana.",
      },
      {
        english: "I can't be here tonight.",
        spanish: "No puedo estar aquí esta noche.",
        highlight: "I can't",
      },
      {
        english: "I can do it today or tomorrow.",
        spanish: "Puedo hacerlo hoy o mañana.",
        highlight: "or",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "Connect Your Ideas",
  titleEs: "Conecta Tus Ideas",
  description:
    "These small words transform simple sentences into complex, natural speech.",
  descriptionEs:
    "Estas pequeñas palabras transforman oraciones simples en habla compleja y natural.",
  connectors: [
    {
      word: "because",
      wordEs: "porque",
      example: {
        english:
          "I have to be here because it is important.",
        spanish:
          "Tengo que estar aquí porque es importante.",
      },
    },
    {
      word: "if",
      wordEs: "si",
      example: {
        english: "I need to know if it is possible.",
        spanish: "Necesito saber si es posible.",
      },
    },
    {
      word: "but",
      wordEs: "pero",
      example: {
        english: "I want to do it but it is impossible.",
        spanish: "Quiero hacerlo pero es imposible.",
      },
    },
    {
      word: "and",
      wordEs: "y",
      example: {
        english: "It is important and I need to know.",
        spanish: "Es importante y necesito saber.",
      },
    },
    {
      word: "or",
      wordEs: "o",
      example: {
        english: "I can do it today or tomorrow.",
        spanish: "Puedo hacerlo hoy o mañana.",
      },
    },
  ],
  bossSentence: {
    english:
      "I need to know if it is possible to do it now because it is very important for me.",
    spanish:
      "Necesito saber si es posible hacerlo ahora porque es muy importante para mí.",
  },
};

// ─── Section E: Pronunciation Drills ─────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "possible",
    spanishStress: "po-SI-ble",
    englishStress: "POSS-ible",
    tip: "In English, stress the FIRST syllable. Say POSS like 'boss' with a P.",
    tipEs: "En inglés, acentúa la PRIMERA sílaba. Di POSS como 'boss' con P.",
  },
  {
    word: "important",
    spanishStress: "im-por-TAN-te",
    englishStress: "im-POR-tant",
    tip: "Stress the SECOND syllable. And it ends with '-tant', not '-tante'.",
    tipEs: "Acentúa la SEGUNDA sílaba. Y termina con '-tant', no '-tante'.",
  },
  {
    word: "impossible",
    spanishStress: "im-po-SI-ble",
    englishStress: "im-POSS-ible",
    tip: "Same as 'possible' — stress falls on POSS.",
    tipEs: "Igual que 'possible' — el acento cae en POSS.",
  },
  {
    word: "fantastic",
    spanishStress: "fan-TAS-ti-co",
    englishStress: "fan-TAS-tic",
    tip: "Good news — the stress is in the same place! Just drop the '-o' at the end.",
    tipEs: "¡Buena noticia — el acento está en el mismo lugar! Solo quita la '-o' al final.",
  },
  {
    word: "information",
    spanishStress: "in-for-ma-CION",
    englishStress: "in-for-MA-tion",
    tip: "Stress the THIRD syllable 'MA', not the last one.",
    tipEs: "Acentúa la TERCERA sílaba 'MA', no la última.",
  },
  {
    word: "normal",
    spanishStress: "nor-MAL",
    englishStress: "NOR-mal",
    tip: "Stress the FIRST syllable in English.",
    tipEs: "Acentúa la PRIMERA sílaba en inglés.",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Core phrases
  { english: "it is", spanish: "es", type: "phrase" },
  { english: "it isn't / it is not", spanish: "no es", type: "phrase" },
  { english: "for me", spanish: "para mí", type: "phrase" },
  { english: "like this / like that", spanish: "así", type: "phrase" },

  // Time & place
  { english: "now", spanish: "ahora", type: "word" },
  { english: "today", spanish: "hoy", type: "word" },
  { english: "tonight", spanish: "esta noche", type: "word" },
  { english: "tomorrow", spanish: "mañana", type: "word" },
  { english: "later", spanish: "más tarde", type: "word" },
  { english: "here", spanish: "aquí", type: "word" },

  // Describers
  { english: "something", spanish: "algo", type: "word" },
  { english: "nothing", spanish: "nada", type: "word" },
  { english: "everything", spanish: "todo", type: "word" },
  { english: "very", spanish: "muy", type: "word" },
  { english: "good", spanish: "bueno", type: "word" },
  { english: "perfect", spanish: "perfecto", type: "word" },

  // Connectors
  { english: "because", spanish: "porque", type: "word" },
  { english: "if", spanish: "si", type: "word" },
  { english: "and", spanish: "y", type: "word" },
  { english: "but", spanish: "pero", type: "word" },
  { english: "or", spanish: "o", type: "word" },

  // Verbs
  { english: "to be (here)", spanish: "estar (aquí)", type: "verb" },
  { english: "to do / to do it", spanish: "hacer / hacerlo", type: "verb" },
  { english: "to know", spanish: "saber", type: "verb" },
  { english: "to go out", spanish: "salir", type: "verb" },
  { english: "to study", spanish: "estudiar", type: "verb" },

  // Modal verbs
  { english: "I need", spanish: "necesito", type: "modal" },
  { english: "I don't need", spanish: "no necesito", type: "modal" },
  { english: "I want", spanish: "quiero", type: "modal" },
  { english: "I don't want", spanish: "no quiero", type: "modal" },
  { english: "I have to", spanish: "tengo que", type: "modal" },
  { english: "I don't have to", spanish: "no tengo que", type: "modal" },
  { english: "I can", spanish: "puedo", type: "modal" },
  { english: "I can't", spanish: "no puedo", type: "modal" },
];
