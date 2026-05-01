// Unit 1: "Yesterday I Worked" — Past simple, regular verbs
//
// Pedagogical arc:
// Section A — Discover the 3 sounds of -ed (cognate-style waves grouped by sound)
// Section B — Build past tense sentences (subject + past verb + object + time)
// Section C — Cognate verbs in past tense (visited, decided, completed)
// Section D — Time markers + sequencing
// Section E — Pronunciation drill for the 3 -ed sounds
// Section F — Self-test of unit vocabulary

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
    highlight?: string;
  }[];
}

export interface PronunciationDrillItem {
  word: string;
  spanishStress: string;
  englishStress: string;
  tip: string;
  tipEs: string;
}

export interface VocabItem {
  english: string;
  spanish: string;
  type: "verb" | "phrase" | "marker";
}

// ─── Section A: The 3 Sounds of -ed (Cognate Discovery format) ───────────────

export const cognateWaves = {
  wave1: {
    title: "The /t/ Sound — After Voiceless Consonants",
    titleEs: "El sonido /t/ — después de consonantes sordas",
    description:
      "When a verb ends in a voiceless sound (k, p, s, ch, sh, f, x), the -ed sounds like a quick 't'. Listen carefully: it's NOT 'ed'.",
    descriptionEs:
      "Cuando un verbo termina en un sonido sordo (k, p, s, ch, sh, f, x), el -ed suena como una 't' rápida. Escucha con atención: NO suena 'ed'.",
    words: [
      {
        english: "worked",
        spanish: "trabajé",
        category: "/t/ sound",
        pronunciationNote: "Sounds like 'workt'. Quick /t/ at the end.",
        pronunciationNoteEs: "Suena como 'workt'. /t/ rápida al final.",
      },
      { english: "walked", spanish: "caminé", category: "/t/ sound" },
      { english: "talked", spanish: "hablé", category: "/t/ sound" },
      { english: "watched", spanish: "miré / vi", category: "/t/ sound" },
      { english: "looked", spanish: "miré", category: "/t/ sound" },
      { english: "asked", spanish: "pregunté", category: "/t/ sound" },
      { english: "stopped", spanish: "paré / detuve", category: "/t/ sound" },
      { english: "helped", spanish: "ayudé", category: "/t/ sound" },
      { english: "finished", spanish: "terminé", category: "/t/ sound" },
      { english: "missed", spanish: "extrañé / perdí", category: "/t/ sound" },
      { english: "cooked", spanish: "cociné", category: "/t/ sound" },
      { english: "washed", spanish: "lavé", category: "/t/ sound" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The /d/ Sound — After Voiced Sounds and Vowels",
    titleEs: "El sonido /d/ — después de sonidos sonoros y vocales",
    description:
      "When a verb ends in a voiced sound (b, g, v, z, l, m, n, r) or a vowel, the -ed sounds like a quick 'd'.",
    descriptionEs:
      "Cuando un verbo termina en un sonido sonoro (b, g, v, z, l, m, n, r) o una vocal, el -ed suena como una 'd' rápida.",
    words: [
      {
        english: "played",
        spanish: "jugué / toqué",
        category: "/d/ sound",
        pronunciationNote: "Sounds like 'playd'. Quick /d/ at the end.",
        pronunciationNoteEs: "Suena como 'playd'. /d/ rápida al final.",
      },
      { english: "studied", spanish: "estudié", category: "/d/ sound" },
      { english: "listened", spanish: "escuché", category: "/d/ sound" },
      { english: "learned", spanish: "aprendí", category: "/d/ sound" },
      { english: "called", spanish: "llamé", category: "/d/ sound" },
      { english: "lived", spanish: "viví", category: "/d/ sound" },
      { english: "loved", spanish: "amé / quise", category: "/d/ sound" },
      { english: "opened", spanish: "abrí", category: "/d/ sound" },
      { english: "cleaned", spanish: "limpié", category: "/d/ sound" },
      { english: "smiled", spanish: "sonreí", category: "/d/ sound" },
      { english: "stayed", spanish: "me quedé", category: "/d/ sound" },
      { english: "remembered", spanish: "recordé", category: "/d/ sound" },
    ] as CognateWord[],
  },
  wave3: {
    title: "The /ɪd/ Sound — Only After 't' and 'd'",
    titleEs: "El sonido /ɪd/ — solo después de 't' y 'd'",
    description:
      "When a verb already ends in 't' or 'd', you need an extra syllable to say it. Only this group becomes truly two-syllable in the past.",
    descriptionEs:
      "Cuando un verbo ya termina en 't' o 'd', necesitas una sílaba extra para pronunciarlo. Solo este grupo se vuelve realmente bisílabo en pasado.",
    words: [
      {
        english: "wanted",
        spanish: "quise",
        category: "/ɪd/ sound",
        pronunciationNote: "Two syllables: WAN-ted. The 'ed' IS pronounced.",
        pronunciationNoteEs: "Dos sílabas: WAN-ted. El 'ed' SÍ se pronuncia.",
      },
      { english: "needed", spanish: "necesité", category: "/ɪd/ sound" },
      { english: "visited", spanish: "visité", category: "/ɪd/ sound" },
      { english: "decided", spanish: "decidí", category: "/ɪd/ sound" },
      { english: "waited", spanish: "esperé", category: "/ɪd/ sound" },
      { english: "started", spanish: "empecé", category: "/ɪd/ sound" },
      { english: "ended", spanish: "terminé", category: "/ɪd/ sound" },
      { english: "invited", spanish: "invité", category: "/ɪd/ sound" },
      { english: "completed", spanish: "completé", category: "/ɪd/ sound" },
      { english: "expected", spanish: "esperé / esperaba", category: "/ɪd/ sound" },
      { english: "rented", spanish: "renté / alquilé", category: "/ɪd/ sound" },
      { english: "voted", spanish: "voté", category: "/ɪd/ sound" },
    ] as CognateWord[],
  },
};

// ─── Section B: Building Past Tense Sentences ────────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Step 1: I + past verb",
    labelEs: "Paso 1: I + verbo en pasado",
    description: "The simplest past-tense sentence: subject + verb. Add -ed and you're done.",
    descriptionEs: "La oración más simple en pasado: sujeto + verbo. Agrega -ed y listo.",
    sentences: [
      { english: "I worked.", spanish: "Trabajé.", highlight: "worked" },
      { english: "I studied.", spanish: "Estudié.", highlight: "studied" },
      { english: "I waited.", spanish: "Esperé.", highlight: "waited" },
      { english: "I played.", spanish: "Jugué.", highlight: "played" },
    ],
  },
  {
    label: "Step 2: She / He / We / They",
    labelEs: "Paso 2: She / He / We / They",
    description:
      "Good news: in past tense, the verb is the SAME for every subject. No conjugation tricks. 'Worked' for I, you, he, she, we, they.",
    descriptionEs:
      "Buenas noticias: en pasado, el verbo es IGUAL para todos los sujetos. Sin trucos de conjugación. 'Worked' para I, you, he, she, we, they.",
    sentences: [
      { english: "She worked.", spanish: "Ella trabajó.", highlight: "She" },
      { english: "He studied.", spanish: "Él estudió.", highlight: "He" },
      { english: "We waited.", spanish: "Esperamos.", highlight: "We" },
      { english: "They played.", spanish: "Ellos jugaron.", highlight: "They" },
    ],
  },
  {
    label: "Step 3: Add an Object",
    labelEs: "Paso 3: Agregar un objeto",
    description: "Add WHAT or WHO after the verb. The sentence gets richer.",
    descriptionEs: "Agrega QUÉ o A QUIÉN después del verbo. La oración se vuelve más rica.",
    sentences: [
      { english: "I watched the movie.", spanish: "Vi la película.", highlight: "the movie" },
      { english: "She studied English.", spanish: "Ella estudió inglés.", highlight: "English" },
      { english: "We called Maria.", spanish: "Llamamos a Maria.", highlight: "Maria" },
      { english: "He cleaned the kitchen.", spanish: "Él limpió la cocina.", highlight: "the kitchen" },
    ],
  },
  {
    label: "Step 4: Add a Time Marker",
    labelEs: "Paso 4: Agregar un marcador de tiempo",
    description:
      "WHEN did it happen? Add 'yesterday', 'last night', 'two days ago' to anchor the sentence in the past.",
    descriptionEs:
      "¿CUÁNDO pasó? Agrega 'yesterday', 'last night', 'two days ago' para anclar la oración en el pasado.",
    sentences: [
      {
        english: "I watched the movie yesterday.",
        spanish: "Vi la película ayer.",
        highlight: "yesterday",
      },
      {
        english: "She studied English last night.",
        spanish: "Ella estudió inglés anoche.",
        highlight: "last night",
      },
      {
        english: "We called Maria two days ago.",
        spanish: "Llamamos a Maria hace dos días.",
        highlight: "two days ago",
      },
      {
        english: "He cleaned the kitchen this morning.",
        spanish: "Él limpió la cocina esta mañana.",
        highlight: "this morning",
      },
    ],
  },
];

// ─── Section C: Cognate Verbs in Past Tense ──────────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "Visited / Decided / Completed",
    labelEs: "Visited / Decided / Completed",
    description:
      "Three powerful cognate verbs you can use immediately. They sound almost the same in Spanish.",
    descriptionEs:
      "Tres verbos cognados poderosos que puedes usar inmediatamente. Suenan casi igual en español.",
    sentences: [
      {
        english: "I visited my grandmother last weekend.",
        spanish: "Visité a mi abuela el fin de semana pasado.",
        highlight: "visited",
      },
      {
        english: "She decided to study English.",
        spanish: "Ella decidió estudiar inglés.",
        highlight: "decided",
      },
      {
        english: "We completed the project on time.",
        spanish: "Completamos el proyecto a tiempo.",
        highlight: "completed",
      },
      {
        english: "They visited New York in March.",
        spanish: "Visitaron Nueva York en marzo.",
        highlight: "visited",
      },
    ],
  },
  {
    label: "Prepared / Organized / Presented",
    labelEs: "Prepared / Organized / Presented",
    description:
      "The vocabulary of professional life — and you already know all three roots from Spanish.",
    descriptionEs:
      "El vocabulario de la vida profesional — y ya conoces las tres raíces del español.",
    sentences: [
      {
        english: "I prepared the report yesterday.",
        spanish: "Preparé el reporte ayer.",
        highlight: "prepared",
      },
      {
        english: "She organized the meeting.",
        spanish: "Ella organizó la junta.",
        highlight: "organized",
      },
      {
        english: "He presented the new plan.",
        spanish: "Él presentó el plan nuevo.",
        highlight: "presented",
      },
      {
        english: "We organized everything last week.",
        spanish: "Organizamos todo la semana pasada.",
        highlight: "organized",
      },
    ],
  },
  {
    label: "Accepted / Recommended / Invited",
    labelEs: "Accepted / Recommended / Invited",
    description: "Verbs of agreement and connection. All three patterns: cognate + -ed.",
    descriptionEs: "Verbos de acuerdo y conexión. Los tres patrones: cognado + -ed.",
    sentences: [
      {
        english: "I accepted the job offer.",
        spanish: "Acepté la oferta de trabajo.",
        highlight: "accepted",
      },
      {
        english: "She recommended a great restaurant.",
        spanish: "Ella recomendó un restaurante excelente.",
        highlight: "recommended",
      },
      {
        english: "We invited everyone to the party.",
        spanish: "Invitamos a todos a la fiesta.",
        highlight: "invited",
      },
      {
        english: "He accepted the invitation immediately.",
        spanish: "Él aceptó la invitación inmediatamente.",
        highlight: "accepted",
      },
    ],
  },
];

// ─── Section D: Time Markers + Sequencing (Connector Challenge) ──────────────

export const connectorSentences = {
  connectors: [
    {
      word: "Yesterday",
      wordEs: "Ayer",
      example: "Yesterday, I worked from home.",
      exampleEs: "Ayer, trabajé desde casa.",
      use: "The day before today. Most common past time marker.",
      useEs: "El día antes de hoy. El marcador de pasado más común.",
    },
    {
      word: "Last night",
      wordEs: "Anoche",
      example: "Last night, I watched a great movie.",
      exampleEs: "Anoche, vi una película excelente.",
      use: "Refers specifically to the evening/night before today.",
      useEs: "Se refiere específicamente a la tarde/noche antes de hoy.",
    },
    {
      word: "Two days ago",
      wordEs: "Hace dos días",
      example: "Two days ago, I called my friend.",
      exampleEs: "Hace dos días, llamé a mi amigo.",
      use: "Use 'X days ago' for any number of days back.",
      useEs: "Usa 'X days ago' para cualquier número de días atrás.",
    },
    {
      word: "Last week",
      wordEs: "La semana pasada",
      example: "Last week, we visited the museum.",
      exampleEs: "La semana pasada, visitamos el museo.",
      use: "Anywhere in the previous 7-day period.",
      useEs: "En cualquier momento de la semana anterior.",
    },
    {
      word: "This morning",
      wordEs: "Esta mañana",
      example: "This morning, she cooked breakfast.",
      exampleEs: "Esta mañana, ella cocinó el desayuno.",
      use: "Earlier today. Past, but very recent.",
      useEs: "Más temprano hoy. Pasado, pero muy reciente.",
    },
  ],
  bossSentence: {
    english:
      "Last week, I visited my grandmother. Yesterday, she called me. Two days ago, I sent her flowers. This morning, she thanked me.",
    spanish:
      "La semana pasada, visité a mi abuela. Ayer, ella me llamó. Hace dos días, le mandé flores. Esta mañana, ella me agradeció.",
    explanation:
      "Four time markers, four past-tense verbs, one mini-story. This is what 'telling your story' looks like.",
    explanationEs:
      "Cuatro marcadores de tiempo, cuatro verbos en pasado, una mini historia. Así se ve 'contar tu historia'.",
  },
};

// ─── Section E: Pronunciation Lab — The 3 -ed Sounds ─────────────────────────

export const pronunciationDrills: PronunciationDrillItem[] = [
  {
    word: "worked",
    spanishStress: "wor-ked (two syllables, common Spanish-speaker error)",
    englishStress: "WORKT (one syllable, /t/ at the end)",
    tip: "Voiceless k → /t/ sound. Don't add an extra syllable.",
    tipEs: "k sorda → sonido /t/. No agregues una sílaba extra.",
  },
  {
    word: "stopped",
    spanishStress: "stop-ped",
    englishStress: "STOPT (one syllable)",
    tip: "Voiceless p → /t/ sound. Sounds like 'stopt'.",
    tipEs: "p sorda → sonido /t/. Suena como 'stopt'.",
  },
  {
    word: "watched",
    spanishStress: "wat-ched",
    englishStress: "WACHT (one syllable)",
    tip: "Voiceless 'ch' → /t/ sound. One syllable only.",
    tipEs: "'ch' sorda → sonido /t/. Solo una sílaba.",
  },
  {
    word: "played",
    spanishStress: "pla-yed",
    englishStress: "PLAYD (one syllable, /d/ at the end)",
    tip: "Vowel ending → /d/ sound. Like 'playd', not 'pla-yed'.",
    tipEs: "Termina en vocal → sonido /d/. Como 'playd', no 'pla-yed'.",
  },
  {
    word: "called",
    spanishStress: "ca-lled",
    englishStress: "KAWLD (one syllable)",
    tip: "Voiced l → /d/ sound. One syllable.",
    tipEs: "l sonora → sonido /d/. Una sílaba.",
  },
  {
    word: "wanted",
    spanishStress: "wanted (often correct, but wrong sound)",
    englishStress: "WAN-ted (TWO syllables, /ɪd/ at the end)",
    tip: "Verbs ending in 't' get the /ɪd/ sound. TWO syllables.",
    tipEs: "Verbos terminados en 't' llevan el sonido /ɪd/. DOS sílabas.",
  },
  {
    word: "decided",
    spanishStress: "de-ci-ded",
    englishStress: "de-CI-ded (THREE syllables — extra one for the 'ed')",
    tip: "Verbs ending in 'd' get the /ɪd/ sound. Extra syllable.",
    tipEs: "Verbos terminados en 'd' llevan el sonido /ɪd/. Sílaba extra.",
  },
  {
    word: "needed",
    spanishStress: "nee-ded",
    englishStress: "NEE-ded (two syllables, /ɪd/ at the end)",
    tip: "Ends in 'd' → /ɪd/. The 'ed' becomes its own syllable.",
    tipEs: "Termina en 'd' → /ɪd/. El 'ed' se convierte en su propia sílaba.",
  },
];

// ─── Section F: Vocabulary List for Self-Test ────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // /t/ sound verbs
  { english: "worked", spanish: "trabajé", type: "verb" },
  { english: "walked", spanish: "caminé", type: "verb" },
  { english: "talked", spanish: "hablé", type: "verb" },
  { english: "watched", spanish: "vi / miré", type: "verb" },
  { english: "looked", spanish: "miré", type: "verb" },
  { english: "asked", spanish: "pregunté", type: "verb" },
  { english: "stopped", spanish: "paré", type: "verb" },
  { english: "helped", spanish: "ayudé", type: "verb" },
  { english: "finished", spanish: "terminé", type: "verb" },
  { english: "cooked", spanish: "cociné", type: "verb" },
  // /d/ sound verbs
  { english: "played", spanish: "jugué", type: "verb" },
  { english: "studied", spanish: "estudié", type: "verb" },
  { english: "listened", spanish: "escuché", type: "verb" },
  { english: "learned", spanish: "aprendí", type: "verb" },
  { english: "called", spanish: "llamé", type: "verb" },
  { english: "lived", spanish: "viví", type: "verb" },
  { english: "loved", spanish: "amé", type: "verb" },
  { english: "opened", spanish: "abrí", type: "verb" },
  { english: "cleaned", spanish: "limpié", type: "verb" },
  { english: "stayed", spanish: "me quedé", type: "verb" },
  // /ɪd/ sound verbs
  { english: "wanted", spanish: "quise", type: "verb" },
  { english: "needed", spanish: "necesité", type: "verb" },
  { english: "visited", spanish: "visité", type: "verb" },
  { english: "decided", spanish: "decidí", type: "verb" },
  { english: "waited", spanish: "esperé", type: "verb" },
  { english: "started", spanish: "empecé", type: "verb" },
  { english: "invited", spanish: "invité", type: "verb" },
  { english: "completed", spanish: "completé", type: "verb" },
  // Time markers
  { english: "yesterday", spanish: "ayer", type: "marker" },
  { english: "last night", spanish: "anoche", type: "marker" },
  { english: "last week", spanish: "la semana pasada", type: "marker" },
  { english: "two days ago", spanish: "hace dos días", type: "marker" },
  { english: "this morning", spanish: "esta mañana", type: "marker" },
  // Useful phrases
  { english: "I worked from home.", spanish: "Trabajé desde casa.", type: "phrase" },
  { english: "She visited her family.", spanish: "Ella visitó a su familia.", type: "phrase" },
  { english: "We watched a movie last night.", spanish: "Vimos una película anoche.", type: "phrase" },
];
