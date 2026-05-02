// Unit 4: "What's Coming Next" — Going to vs. will
//
// Pedagogical arc (pivot from past to future):
// Section A — Future vocabulary in 3 waves: time markers, going-to verbs, will phrases
// Section B — Building "going to" sentences for plans you've already decided
// Section C — Building "will" sentences for promises, predictions, in-the-moment decisions
// Section D — Boss Sentence: a real tomorrow plan combining both forms naturally
// Section E — Pronunciation: gonna reduction, 'll contractions, won't sound
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

// ─── Section A: Future Vocabulary (Cognate Discovery format) ─────────────────

export const cognateWaves = {
  wave1: {
    title: "Future Time Markers — When It's Going to Happen",
    titleEs: "Marcadores de Tiempo Futuro — Cuándo va a pasar",
    description:
      "These markers anchor a sentence in a precise future moment. The more specific your time marker, the clearer your plan.",
    descriptionEs:
      "Estos marcadores anclan una oración en un momento futuro preciso. Mientras más específico el marcador, más claro el plan.",
    words: [
      { english: "tomorrow", spanish: "mañana", category: "Future time" },
      { english: "tomorrow morning", spanish: "mañana en la mañana", category: "Future time" },
      { english: "tonight", spanish: "esta noche", category: "Future time" },
      { english: "this weekend", spanish: "este fin de semana", category: "Future time" },
      { english: "next week", spanish: "la próxima semana", category: "Future time" },
      { english: "next month", spanish: "el próximo mes", category: "Future time" },
      { english: "next year", spanish: "el próximo año", category: "Future time" },
      { english: "in an hour", spanish: "en una hora", category: "Future time" },
      { english: "in a few days", spanish: "en unos días", category: "Future time" },
      {
        english: "soon",
        spanish: "pronto",
        category: "Future time",
        pronunciationNote: "Long 'oo': SOON. One syllable.",
        pronunciationNoteEs: "'oo' larga: SOON. Una sílaba.",
      },
      { english: "later today", spanish: "más tarde hoy", category: "Future time" },
      { english: "the day after tomorrow", spanish: "pasado mañana", category: "Future time" },
    ] as CognateWord[],
  },
  wave2: {
    title: "Going-To Verbs — Plans You've Already Decided",
    titleEs: "Verbos con Going-To — Planes que ya decidiste",
    description:
      "Use 'going to' when you've ALREADY DECIDED something before speaking. These ten verbs cover most plans you'll talk about.",
    descriptionEs:
      "Usa 'going to' cuando YA DECIDISTE algo antes de hablar. Estos diez verbos cubren la mayoría de los planes de los que hablarás.",
    words: [
      { english: "going to start", spanish: "voy a empezar", category: "Going-to verb" },
      { english: "going to finish", spanish: "voy a terminar", category: "Going-to verb" },
      { english: "going to visit", spanish: "voy a visitar", category: "Going-to verb" },
      { english: "going to study", spanish: "voy a estudiar", category: "Going-to verb" },
      { english: "going to work", spanish: "voy a trabajar", category: "Going-to verb" },
      { english: "going to travel", spanish: "voy a viajar", category: "Going-to verb" },
      { english: "going to meet", spanish: "voy a reunirme", category: "Going-to verb" },
      { english: "going to call", spanish: "voy a llamar", category: "Going-to verb" },
      { english: "going to send", spanish: "voy a mandar", category: "Going-to verb" },
      { english: "going to try", spanish: "voy a intentar", category: "Going-to verb" },
    ] as CognateWord[],
  },
  wave3: {
    title: "Will Phrases — Decisions, Promises, Predictions",
    titleEs: "Frases con Will — Decisiones, promesas, predicciones",
    description:
      "Use 'will' for things you decide IN THE MOMENT — a promise, a prediction, an offer. Native speakers contract it: 'I'll', 'we'll', 'won't'.",
    descriptionEs:
      "Usa 'will' para cosas que decides EN EL MOMENTO — una promesa, una predicción, un ofrecimiento. Los nativos lo contraen: 'I'll', 'we'll', 'won't'.",
    words: [
      {
        english: "I'll help",
        spanish: "yo ayudo",
        category: "Will phrase",
        pronunciationNote: "'I'll' rhymes with 'aisle'. One syllable.",
        pronunciationNoteEs: "'I'll' rima con 'aisle'. Una sílaba.",
      },
      { english: "I'll call", spanish: "yo llamo", category: "Will phrase" },
      { english: "I'll see", spanish: "yo veré", category: "Will phrase" },
      { english: "we'll see", spanish: "veremos", category: "Will phrase" },
      { english: "we'll talk", spanish: "hablaremos", category: "Will phrase" },
      { english: "you'll like it", spanish: "te va a gustar", category: "Will phrase" },
      { english: "they'll come", spanish: "ellos vendrán", category: "Will phrase" },
      { english: "that'll work", spanish: "eso va a funcionar", category: "Will phrase" },
      {
        english: "I won't",
        spanish: "yo no",
        category: "Will phrase",
        pronunciationNote: "'won't' rhymes with 'don't'. NOT pronounced like 'wont'.",
        pronunciationNoteEs: "'won't' rima con 'don't'. NO se pronuncia como 'wont'.",
      },
      { english: "I won't be late", spanish: "no llegaré tarde", category: "Will phrase" },
    ] as CognateWord[],
  },
};

// ─── Section B: Building "Going To" Sentences (planned future) ───────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Step 1: I'm going to + base verb",
    labelEs: "Paso 1: I'm going to + verbo base",
    description:
      "The pattern: 'I AM going to' + the base form of any verb. Use 'I'm' (the contraction) — natives almost always do.",
    descriptionEs:
      "El patrón: 'I AM going to' + la forma base de cualquier verbo. Usa 'I'm' (la contracción) — los nativos casi siempre lo hacen.",
    sentences: [
      { english: "I'm going to work tomorrow.", spanish: "Voy a trabajar mañana.", highlight: "I'm going to" },
      { english: "I'm going to visit my family next week.", spanish: "Voy a visitar a mi familia la próxima semana.", highlight: "I'm going to" },
      { english: "I'm going to call her tonight.", spanish: "La voy a llamar esta noche.", highlight: "I'm going to" },
      { english: "I'm going to start a new project.", spanish: "Voy a empezar un proyecto nuevo.", highlight: "I'm going to" },
    ],
  },
  {
    label: "Step 2: She's / He's / It's going to + base verb",
    labelEs: "Paso 2: She's / He's / It's going to + verbo base",
    description:
      "For singular subjects (he, she, it), use 'is' — usually contracted to 's. So: 'She's going to', 'He's going to', 'It's going to'.",
    descriptionEs:
      "Para sujetos singulares (he, she, it), usa 'is' — usualmente contraído a 's. Entonces: 'She's going to', 'He's going to', 'It's going to'.",
    sentences: [
      { english: "She's going to study tonight.", spanish: "Ella va a estudiar esta noche.", highlight: "She's going to" },
      { english: "He's going to send the email tomorrow.", spanish: "Él va a mandar el correo mañana.", highlight: "He's going to" },
      { english: "It's going to rain this afternoon.", spanish: "Va a llover esta tarde.", highlight: "It's going to" },
      { english: "She's going to travel to Mexico next month.", spanish: "Ella va a viajar a México el próximo mes.", highlight: "She's going to" },
    ],
  },
  {
    label: "Step 3: We're / You're / They're going to + base verb",
    labelEs: "Paso 3: We're / You're / They're going to + verbo base",
    description:
      "For plural subjects (we, you, they), use 'are' — usually contracted to 're. So: 'We're going to', 'You're going to', 'They're going to'.",
    descriptionEs:
      "Para sujetos plurales (we, you, they), usa 'are' — usualmente contraído a 're. Entonces: 'We're going to', 'You're going to', 'They're going to'.",
    sentences: [
      { english: "We're going to meet at the office.", spanish: "Nos vamos a reunir en la oficina.", highlight: "We're going to" },
      { english: "You're going to love this restaurant.", spanish: "Te va a encantar este restaurante.", highlight: "You're going to" },
      { english: "They're going to finish the project this week.", spanish: "Ellos van a terminar el proyecto esta semana.", highlight: "They're going to" },
      { english: "We're going to try a new approach.", spanish: "Vamos a intentar un nuevo enfoque.", highlight: "We're going to" },
    ],
  },
  {
    label: "Step 4: Negatives and Questions",
    labelEs: "Paso 4: Negativos y preguntas",
    description:
      "Negative: add 'not' after 'am/is/are'. Question: flip the order — 'Am/Is/Are' comes before the subject.",
    descriptionEs:
      "Negativo: agrega 'not' después de 'am/is/are'. Pregunta: invierte el orden — 'Am/Is/Are' va antes del sujeto.",
    sentences: [
      { english: "I'm not going to work tomorrow.", spanish: "No voy a trabajar mañana.", highlight: "I'm not going to" },
      { english: "She isn't going to call.", spanish: "Ella no va a llamar.", highlight: "isn't going to" },
      { english: "Are you going to come tonight?", spanish: "¿Vas a venir esta noche?", highlight: "Are you going to" },
      { english: "Is he going to finish on time?", spanish: "¿Va a terminar a tiempo?", highlight: "Is he going to" },
    ],
  },
];

// ─── Section C: Building "Will" Sentences (decisions in the moment) ──────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "Promises and Offers — I'll + base verb",
    labelEs: "Promesas y Ofrecimientos — I'll + verbo base",
    description:
      "When you OFFER to do something or make a PROMISE, use 'will' — almost always contracted to 'I'll', 'we'll', 'they'll'.",
    descriptionEs:
      "Cuando OFRECES hacer algo o haces una PROMESA, usa 'will' — casi siempre contraído a 'I'll', 'we'll', 'they'll'.",
    sentences: [
      { english: "I'll call you back in five minutes.", spanish: "Te llamo en cinco minutos.", highlight: "I'll" },
      { english: "I'll help you with the report.", spanish: "Te ayudo con el reporte.", highlight: "I'll" },
      { english: "We'll send it by Friday.", spanish: "Lo mandamos para el viernes.", highlight: "We'll" },
      { english: "I'll be there at three.", spanish: "Estaré ahí a las tres.", highlight: "I'll" },
    ],
  },
  {
    label: "Decisions in the Moment — I'll have / I'll take",
    labelEs: "Decisiones del Momento — I'll have / I'll take",
    description:
      "Decisions you make AS YOU SPEAK use 'will' — not 'going to'. The classic example: ordering at a restaurant.",
    descriptionEs:
      "Decisiones que tomas AL MOMENTO DE HABLAR usan 'will' — no 'going to'. El ejemplo clásico: ordenar en un restaurante.",
    sentences: [
      { english: "I'll have the chicken, please.", spanish: "Quiero el pollo, por favor.", highlight: "I'll have" },
      { english: "I'll take this one.", spanish: "Me llevo este.", highlight: "I'll take" },
      { english: "I'll get the check.", spanish: "Yo pago la cuenta.", highlight: "I'll get" },
      { english: "I'll think about it.", spanish: "Lo pienso.", highlight: "I'll think" },
    ],
  },
  {
    label: "Predictions — It'll, They'll, You'll",
    labelEs: "Predicciones — It'll, They'll, You'll",
    description:
      "When you predict what someone or something WILL DO based on what you believe, use 'will' — contracted naturally.",
    descriptionEs:
      "Cuando predices lo que alguien o algo HARÁ basado en lo que crees, usa 'will' — contraído naturalmente.",
    sentences: [
      { english: "It'll rain later — bring an umbrella.", spanish: "Va a llover después — trae un paraguas.", highlight: "It'll" },
      { english: "They'll love the new design.", spanish: "Les va a encantar el diseño nuevo.", highlight: "They'll" },
      { english: "You'll see — it works perfectly.", spanish: "Ya verás — funciona perfecto.", highlight: "You'll" },
      { english: "That'll work for the meeting.", spanish: "Eso va a funcionar para la junta.", highlight: "That'll" },
    ],
  },
  {
    label: "Going-To vs. Will — Choosing the Right One",
    labelEs: "Going-To vs. Will — Eligiendo el correcto",
    description:
      "The rule: 'going to' = decision made BEFORE speaking. 'will' = decision made AS you speak. The same situation often uses BOTH — for different parts.",
    descriptionEs:
      "La regla: 'going to' = decisión tomada ANTES de hablar. 'will' = decisión tomada AL hablar. La misma situación a menudo usa AMBOS — para partes diferentes.",
    sentences: [
      {
        english: "I'm going to the store. — Oh, I'll come with you.",
        spanish: "Voy a la tienda. — Ah, voy contigo.",
        highlight: "going to / I'll",
      },
      {
        english: "She's going to call him tomorrow. I think he'll be happy.",
        spanish: "Ella le va a llamar mañana. Creo que él va a estar contento.",
        highlight: "going to / he'll",
      },
      {
        english: "We're going to start the project. It'll take about a month.",
        spanish: "Vamos a empezar el proyecto. Va a tomar como un mes.",
        highlight: "going to / It'll",
      },
      {
        english: "I'm going to send the email. I'll let you know when it's done.",
        spanish: "Voy a mandar el correo. Te aviso cuando esté listo.",
        highlight: "going to / I'll",
      },
    ],
  },
];

// ─── Section D: Boss Sentence — A Tomorrow Plan (Connector Challenge) ────────

export const connectorSentences = {
  connectors: [
    {
      word: "Tomorrow",
      wordEs: "Mañana",
      example: "Tomorrow, I'm going to visit my parents.",
      exampleEs: "Mañana, voy a visitar a mis padres.",
      use: "The most common future opener. Pair with 'going to' for planned events.",
      useEs: "El inicio de futuro más común. Combina con 'going to' para eventos planeados.",
    },
    {
      word: "Next",
      wordEs: "Después",
      example: "Next, we're going to have lunch together.",
      exampleEs: "Después, vamos a almorzar juntos.",
      use: "Sequences future events. Same role as 'then', but slightly more formal.",
      useEs: "Secuencia eventos futuros. Mismo rol que 'then', pero ligeramente más formal.",
    },
    {
      word: "After that",
      wordEs: "Después de eso",
      example: "After that, I'll probably take a walk in the park.",
      exampleEs: "Después de eso, probablemente daré un paseo en el parque.",
      use: "Same connector you used in past tense — works identically in future.",
      useEs: "El mismo conector que usaste en pasado — funciona igual en futuro.",
    },
    {
      word: "Later",
      wordEs: "Más tarde",
      example: "Later, we're going to watch a movie.",
      exampleEs: "Más tarde, vamos a ver una película.",
      use: "Some time after the previous event — looser than 'after that'.",
      useEs: "Algo de tiempo después del evento anterior — más amplio que 'after that'.",
    },
    {
      word: "Finally",
      wordEs: "Finalmente",
      example: "Finally, I'll drive home around nine.",
      exampleEs: "Finalmente, manejaré a casa cerca de las nueve.",
      use: "Marks the LAST event in your plan. Strong story closer.",
      useEs: "Marca el ÚLTIMO evento en tu plan. Cierre fuerte de historia.",
    },
  ],
  bossSentence: {
    english:
      "Tomorrow is going to be a good day. First, I'm going to visit my parents in the morning. Next, we're going to have lunch together at their favorite restaurant. After that, I'll probably take a walk in the park. Later, we're going to watch a movie at their house. Finally, I'll drive home around nine.",
    spanish:
      "Mañana va a ser un buen día. Primero, voy a visitar a mis padres en la mañana. Después, vamos a almorzar juntos en su restaurante favorito. Después de eso, probablemente daré un paseo en el parque. Más tarde, vamos a ver una película en su casa. Finalmente, manejaré a casa cerca de las nueve.",
    explanation:
      "Six sentences. A real tomorrow plan. Notice the natural mix: planned events use 'going to' (visit, have lunch, watch). In-the-moment decisions use 'I'll' (probably take a walk, drive home). Both forms, used the way natives use them.",
    explanationEs:
      "Seis oraciones. Un plan real de mañana. Nota la mezcla natural: eventos planeados usan 'going to' (visit, have lunch, watch). Decisiones del momento usan 'I'll' (probably take a walk, drive home). Ambas formas, usadas como las usan los nativos.",
  },
};

// ─── Section E: Pronunciation Lab — Future Reductions and Contractions ───────

export const pronunciationDrills: PronunciationDrillItem[] = [
  {
    word: "going to",
    spanishStress: "GO-ing TO (full pronunciation, both words stressed)",
    englishStress: "gonna (one word, two syllables: GUH-nuh)",
    tip: "In fast spoken English, 'going to' becomes 'gonna'. NEVER write it that way — but say it that way.",
    tipEs: "En inglés hablado rápido, 'going to' se convierte en 'gonna'. NUNCA lo escribas así — pero dilo así.",
  },
  {
    word: "I'll",
    spanishStress: "I-WILL (full pronunciation, two syllables)",
    englishStress: "I'LL (one syllable, rhymes with 'aisle')",
    tip: "'I'll' is ONE syllable. Sounds exactly like 'aisle' or 'isle'. Don't say 'I will' unless you're emphasizing it.",
    tipEs: "'I'll' es UNA sílaba. Suena exactamente como 'aisle' o 'isle'. No digas 'I will' a menos que lo enfatices.",
  },
  {
    word: "we'll",
    spanishStress: "WE-WILL (two syllables)",
    englishStress: "WE'LL (one syllable, sounds like 'wheel')",
    tip: "'We'll' rhymes with 'wheel'. Same single-syllable rule as 'I'll'.",
    tipEs: "'We'll' rima con 'wheel'. Misma regla de una sílaba que 'I'll'.",
  },
  {
    word: "won't",
    spanishStress: "WONT (rhymes with 'wont' or 'want' — wrong)",
    englishStress: "WOHNT (rhymes with 'don't', long 'oh' sound)",
    tip: "'Won't' rhymes with 'don't'. Long 'oh' sound — NOT short 'ah' like 'wont'.",
    tipEs: "'Won't' rima con 'don't'. Sonido 'oh' largo — NO corto 'ah' como 'wont'.",
  },
  {
    word: "that'll",
    spanishStress: "THAT-WILL (full pronunciation)",
    englishStress: "THAT-uhl (one quick syllable, 'l' barely sounds)",
    tip: "'That'll' is one fast syllable. The 'l' almost disappears — sounds like 'THAT-uhl'.",
    tipEs: "'That'll' es una sílaba rápida. La 'l' casi desaparece — suena como 'THAT-uhl'.",
  },
  {
    word: "tomorrow",
    spanishStress: "to-MOR-row (Spanish R rolled)",
    englishStress: "tuh-MAR-row (curled R, schwa first syllable)",
    tip: "Stress on the MIDDLE syllable: tuh-MAR-row. The first 'o' is a quick 'uh' sound.",
    tipEs: "Acento en la sílaba del MEDIO: tuh-MAR-row. La primera 'o' es un sonido 'uh' rápido.",
  },
  {
    word: "tonight",
    spanishStress: "TO-NIGHT (both syllables full)",
    englishStress: "tuh-NITE (stress on second, first reduced to 'uh')",
    tip: "Stress on the SECOND syllable: tuh-NITE. The first 'o' becomes 'uh'.",
    tipEs: "Acento en la SEGUNDA sílaba: tuh-NITE. La primera 'o' se vuelve 'uh'.",
  },
  {
    word: "soon",
    spanishStress: "SU-ON (two syllables, Spanish-style)",
    englishStress: "SOON (one syllable, long 'oo')",
    tip: "ONE syllable. The 'oo' is long, like in 'moon' or 'food'. Don't add an extra syllable.",
    tipEs: "UNA sílaba. El 'oo' es largo, como en 'moon' o 'food'. No agregues sílaba extra.",
  },
];

// ─── Section F: Vocabulary List for Self-Test ────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Future time markers
  { english: "tomorrow", spanish: "mañana", type: "marker" },
  { english: "tomorrow morning", spanish: "mañana en la mañana", type: "marker" },
  { english: "tonight", spanish: "esta noche", type: "marker" },
  { english: "this weekend", spanish: "este fin de semana", type: "marker" },
  { english: "next week", spanish: "la próxima semana", type: "marker" },
  { english: "next month", spanish: "el próximo mes", type: "marker" },
  { english: "next year", spanish: "el próximo año", type: "marker" },
  { english: "in an hour", spanish: "en una hora", type: "marker" },
  { english: "in a few days", spanish: "en unos días", type: "marker" },
  { english: "soon", spanish: "pronto", type: "marker" },
  { english: "later today", spanish: "más tarde hoy", type: "marker" },
  { english: "the day after tomorrow", spanish: "pasado mañana", type: "marker" },
  // Going-to verbs
  { english: "going to start", spanish: "voy a empezar", type: "verb" },
  { english: "going to finish", spanish: "voy a terminar", type: "verb" },
  { english: "going to visit", spanish: "voy a visitar", type: "verb" },
  { english: "going to study", spanish: "voy a estudiar", type: "verb" },
  { english: "going to work", spanish: "voy a trabajar", type: "verb" },
  { english: "going to travel", spanish: "voy a viajar", type: "verb" },
  { english: "going to meet", spanish: "voy a reunirme", type: "verb" },
  { english: "going to call", spanish: "voy a llamar", type: "verb" },
  { english: "going to send", spanish: "voy a mandar", type: "verb" },
  { english: "going to try", spanish: "voy a intentar", type: "verb" },
  // Will phrases
  { english: "I'll help", spanish: "yo ayudo", type: "phrase" },
  { english: "I'll call", spanish: "yo llamo", type: "phrase" },
  { english: "I'll see", spanish: "yo veré", type: "phrase" },
  { english: "we'll see", spanish: "veremos", type: "phrase" },
  { english: "you'll like it", spanish: "te va a gustar", type: "phrase" },
  { english: "they'll come", spanish: "ellos vendrán", type: "phrase" },
  { english: "that'll work", spanish: "eso va a funcionar", type: "phrase" },
  { english: "I won't", spanish: "yo no", type: "phrase" },
  { english: "I won't be late", spanish: "no llegaré tarde", type: "phrase" },
  // Useful phrases
  { english: "I'm going to work tomorrow.", spanish: "Voy a trabajar mañana.", type: "phrase" },
  { english: "She's going to study tonight.", spanish: "Ella va a estudiar esta noche.", type: "phrase" },
  { english: "We're going to meet at the office.", spanish: "Nos vamos a reunir en la oficina.", type: "phrase" },
  { english: "I'll have the chicken, please.", spanish: "Quiero el pollo, por favor.", type: "phrase" },
  { english: "I'll call you back in five minutes.", spanish: "Te llamo en cinco minutos.", type: "phrase" },
  { english: "It'll rain later — bring an umbrella.", spanish: "Va a llover después — trae un paraguas.", type: "phrase" },
];
