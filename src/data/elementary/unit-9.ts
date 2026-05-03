// Unit 9: "I Was Eating When…" — Past Continuous
//
// Pedagogical arc:
// Section A — 3 waves: was/were forms, common -ing verbs, narrative time markers
// Section B — Past continuous structure (was/were + verb-ing)
// Section C — The classic combo: past continuous + past simple (one action interrupts another)
// Section D — Boss Sentence: a real personal narrative
// Section E — Pronunciation: was/were reduction in fast speech
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

// ─── Section A: was/were, -ing verbs, narrative time markers ─────────────────

export const cognateWaves = {
  wave1: {
    title: "Was / Were — The Backbone of Past Continuous",
    titleEs: "Was / Were — La Base del Pasado Continuo",
    description:
      "Past continuous always starts with 'was' or 'were'. 'Was' goes with I/he/she/it. 'Were' goes with you/we/they. Memorize this pairing — it never changes.",
    descriptionEs:
      "El pasado continuo siempre empieza con 'was' o 'were'. 'Was' va con I/he/she/it. 'Were' va con you/we/they. Memoriza este emparejamiento — nunca cambia.",
    words: [
      { english: "I was", spanish: "yo estaba", category: "Subject + was/were" },
      { english: "you were", spanish: "tú estabas", category: "Subject + was/were" },
      { english: "he was", spanish: "él estaba", category: "Subject + was/were" },
      { english: "she was", spanish: "ella estaba", category: "Subject + was/were" },
      { english: "it was", spanish: "estaba (cosa)", category: "Subject + was/were" },
      { english: "we were", spanish: "nosotros estábamos", category: "Subject + was/were" },
      { english: "they were", spanish: "ellos estaban", category: "Subject + was/were" },
      {
        english: "wasn't",
        spanish: "no estaba",
        category: "Subject + was/were",
        pronunciationNote: "Contraction of 'was not'. Sounds like 'WUZ-int'.",
        pronunciationNoteEs: "Contracción de 'was not'. Suena como 'WUZ-int'.",
      },
      {
        english: "weren't",
        spanish: "no estaban",
        category: "Subject + was/were",
        pronunciationNote: "Contraction of 'were not'. Sounds like 'WURNT' (one syllable).",
        pronunciationNoteEs: "Contracción de 'were not'. Suena como 'WURNT' (una sílaba).",
      },
    ] as CognateWord[],
  },
  wave2: {
    title: "Common -ing Verbs in Storytelling",
    titleEs: "Verbos -ing Comunes al Contar Historias",
    description:
      "These twelve verbs cover most past-continuous storytelling. Spelling rule: drop a final 'e' before -ing (write → writing); double a final consonant after a short vowel (run → running).",
    descriptionEs:
      "Estos doce verbos cubren la mayoría del pasado continuo al contar historias. Regla de escritura: quita la 'e' final antes de -ing (write → writing); duplica la consonante final después de vocal corta (run → running).",
    words: [
      { english: "eating", spanish: "comiendo", category: "-ing verb" },
      { english: "drinking", spanish: "tomando", category: "-ing verb" },
      { english: "working", spanish: "trabajando", category: "-ing verb" },
      { english: "talking", spanish: "hablando", category: "-ing verb" },
      {
        english: "writing",
        spanish: "escribiendo",
        category: "-ing verb",
        pronunciationNote: "Drop the 'e': write → writing (NOT 'writeing').",
        pronunciationNoteEs: "Quita la 'e': write → writing (NO 'writeing').",
      },
      { english: "reading", spanish: "leyendo", category: "-ing verb" },
      {
        english: "running",
        spanish: "corriendo",
        category: "-ing verb",
        pronunciationNote: "Double the 'n': run → running (NOT 'runing').",
        pronunciationNoteEs: "Duplica la 'n': run → running (NO 'runing').",
      },
      { english: "driving", spanish: "manejando", category: "-ing verb" },
      { english: "watching", spanish: "viendo", category: "-ing verb" },
      { english: "listening", spanish: "escuchando", category: "-ing verb" },
      { english: "studying", spanish: "estudiando", category: "-ing verb" },
      { english: "sleeping", spanish: "durmiendo", category: "-ing verb" },
    ] as CognateWord[],
  },
  wave3: {
    title: "Narrative Time Markers — When Stories Pivot",
    titleEs: "Marcadores Narrativos — Cuando la Historia Gira",
    description:
      "These connectors move stories from background ('I was eating') to interruption ('when she called'). Master them and your stories suddenly feel native.",
    descriptionEs:
      "Estos conectores mueven historias del fondo ('I was eating') a la interrupción ('when she called'). Domínalos y tus historias se sienten nativas.",
    words: [
      { english: "when", spanish: "cuando", category: "Time marker" },
      { english: "while", spanish: "mientras", category: "Time marker" },
      { english: "as", spanish: "mientras / cuando", category: "Time marker" },
      { english: "suddenly", spanish: "de repente", category: "Time marker" },
      { english: "at that moment", spanish: "en ese momento", category: "Time marker" },
      { english: "just then", spanish: "justo entonces", category: "Time marker" },
      { english: "all of a sudden", spanish: "de pronto", category: "Time marker" },
      { english: "meanwhile", spanish: "mientras tanto", category: "Time marker" },
      { english: "at 8 o'clock", spanish: "a las ocho", category: "Time marker" },
      { english: "yesterday afternoon", spanish: "ayer en la tarde", category: "Time marker" },
      { english: "this morning", spanish: "esta mañana", category: "Time marker" },
      { english: "last night", spanish: "anoche", category: "Time marker" },
    ] as CognateWord[],
  },
};

// ─── Section B: Past Continuous Structure ────────────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Step 1: Affirmative — was/were + verb-ing",
    labelEs: "Paso 1: Afirmativo — was/were + verbo-ing",
    description:
      "Subject + was/were + verb-ing. Use for an action IN PROGRESS at a past moment. NOT for a single quick action — that's past simple.",
    descriptionEs:
      "Sujeto + was/were + verbo-ing. Úsalo para una acción EN PROGRESO en un momento pasado. NO para una acción única y rápida — eso es pasado simple.",
    sentences: [
      { english: "I was reading at 9 p.m. last night.", spanish: "Yo estaba leyendo a las 9 de la noche.", highlight: "was reading" },
      { english: "She was working from home all morning.", spanish: "Ella estaba trabajando desde casa toda la mañana.", highlight: "was working" },
      { english: "We were eating dinner when you called.", spanish: "Estábamos cenando cuando llamaste.", highlight: "were eating" },
      { english: "They were studying for the test.", spanish: "Ellos estaban estudiando para el examen.", highlight: "were studying" },
    ],
  },
  {
    label: "Step 2: Negative — wasn't / weren't + verb-ing",
    labelEs: "Paso 2: Negativo — wasn't / weren't + verbo-ing",
    description:
      "Add 'not' (or contract to wasn't/weren't) right after was/were. The -ing verb stays the same. NEVER 'I no was working' — that's a Spanish-style negation.",
    descriptionEs:
      "Agrega 'not' (o contrae a wasn't/weren't) justo después de was/were. El verbo -ing queda igual. NUNCA 'I no was working' — esa es negación al estilo español.",
    sentences: [
      { english: "I wasn't sleeping when you called.", spanish: "No estaba durmiendo cuando llamaste.", highlight: "wasn't sleeping" },
      { english: "She wasn't listening to the meeting.", spanish: "Ella no estaba escuchando la junta.", highlight: "wasn't listening" },
      { english: "We weren't talking about you.", spanish: "No estábamos hablando de ti.", highlight: "weren't talking" },
      { english: "They weren't paying attention.", spanish: "Ellos no estaban poniendo atención.", highlight: "weren't paying" },
    ],
  },
  {
    label: "Step 3: Question — Was/Were + subject + verb-ing?",
    labelEs: "Paso 3: Pregunta — Was/Were + sujeto + verbo-ing?",
    description:
      "Flip was/were to the front. NO 'do/did' needed (was/were already act as the helper). 'Were you sleeping?' — NOT 'Did you were sleeping?'.",
    descriptionEs:
      "Mueve was/were al frente. NO se necesita 'do/did' (was/were ya son el ayudante). 'Were you sleeping?' — NO 'Did you were sleeping?'.",
    sentences: [
      { english: "Were you working late last night?", spanish: "¿Estabas trabajando tarde anoche?", highlight: "Were you working" },
      { english: "Was she crying when you arrived?", spanish: "¿Estaba ella llorando cuando llegaste?", highlight: "Was she crying" },
      { english: "What were you doing at 7?", spanish: "¿Qué estabas haciendo a las 7?", highlight: "were you doing" },
      { english: "Why was he waiting outside?", spanish: "¿Por qué estaba esperando afuera?", highlight: "was he waiting" },
    ],
  },
  {
    label: "Step 4: Past simple vs. past continuous — when to use which",
    labelEs: "Paso 4: Pasado simple vs. continuo — cuándo usar cuál",
    description:
      "Past SIMPLE = one finished action ('I ate dinner'). Past CONTINUOUS = an action in progress ('I was eating dinner'). The continuous emphasizes that you were IN THE MIDDLE of it.",
    descriptionEs:
      "Pasado SIMPLE = una acción terminada ('I ate dinner'). Pasado CONTINUO = una acción en progreso ('I was eating dinner'). El continuo enfatiza que estabas EN MEDIO de hacerlo.",
    sentences: [
      { english: "I worked yesterday. (the whole day, completed)", spanish: "Trabajé ayer. (todo el día, completado)", highlight: "worked" },
      { english: "I was working at 3 p.m. (in progress at that moment)", spanish: "Estaba trabajando a las 3 p.m. (en progreso en ese momento)", highlight: "was working" },
      { english: "She studied for two hours. (finished)", spanish: "Ella estudió dos horas. (terminado)", highlight: "studied" },
      { english: "She was studying when I arrived. (in progress when I came)", spanish: "Ella estaba estudiando cuando llegué. (en progreso cuando llegué)", highlight: "was studying" },
    ],
  },
];

// ─── Section C: The Interruption Pattern (Past Continuous + Past Simple) ─────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "The Classic Combo — Continuous + Simple with 'when'",
    labelEs: "La Combinación Clásica — Continuo + Simple con 'when'",
    description:
      "PAST CONTINUOUS = the longer, background action. PAST SIMPLE = the shorter action that interrupts it. Use 'when' before the SIMPLE action: 'I was eating WHEN she called'.",
    descriptionEs:
      "PASADO CONTINUO = la acción larga, de fondo. PASADO SIMPLE = la acción corta que interrumpe. Usa 'when' antes de la acción SIMPLE: 'I was eating WHEN she called'.",
    sentences: [
      { english: "I was eating dinner when she called.", spanish: "Estaba cenando cuando ella llamó.", highlight: "was eating / called" },
      { english: "We were watching TV when the lights went out.", spanish: "Estábamos viendo tele cuando se fue la luz.", highlight: "were watching / went out" },
      { english: "He was driving home when it started to rain.", spanish: "Él estaba manejando a casa cuando empezó a llover.", highlight: "was driving / started" },
      { english: "She was reading when her phone rang.", spanish: "Ella estaba leyendo cuando sonó su teléfono.", highlight: "was reading / rang" },
    ],
  },
  {
    label: "'While' — for the longer (continuous) action",
    labelEs: "'While' — para la acción más larga (continua)",
    description:
      "'While' goes with the PAST CONTINUOUS — the longer action. 'When' typically goes with the PAST SIMPLE — the interruption. Both sentences below mean the same thing.",
    descriptionEs:
      "'While' va con el PASADO CONTINUO — la acción más larga. 'When' va típicamente con el PASADO SIMPLE — la interrupción. Ambas oraciones significan lo mismo.",
    sentences: [
      { english: "While I was cooking, the doorbell rang.", spanish: "Mientras cocinaba, sonó el timbre.", highlight: "While + cooking" },
      { english: "The doorbell rang while I was cooking.", spanish: "Sonó el timbre mientras cocinaba.", highlight: "while + cooking" },
      { english: "While she was working, her cat jumped on the keyboard.", spanish: "Mientras ella trabajaba, su gato saltó al teclado.", highlight: "While + working" },
      { english: "I met an old friend while I was waiting for the train.", spanish: "Me encontré con un viejo amigo mientras esperaba el tren.", highlight: "while + waiting" },
    ],
  },
  {
    label: "Two Continuous Actions at the Same Time",
    labelEs: "Dos Acciones Continuas al Mismo Tiempo",
    description:
      "Use TWO past continuous verbs (with 'while' or 'as') when both actions were happening at the same moment, and BOTH are background — neither interrupts the other.",
    descriptionEs:
      "Usa DOS verbos en pasado continuo (con 'while' o 'as') cuando ambas acciones pasaban al mismo tiempo, y AMBAS son de fondo — ninguna interrumpe a la otra.",
    sentences: [
      { english: "While I was cooking, my husband was setting the table.", spanish: "Mientras cocinaba, mi esposo ponía la mesa.", highlight: "was cooking / was setting" },
      { english: "She was working while the kids were playing outside.", spanish: "Ella trabajaba mientras los niños jugaban afuera.", highlight: "was working / were playing" },
      { english: "I was driving as she was telling me the story.", spanish: "Yo manejaba mientras ella me contaba la historia.", highlight: "was driving / was telling" },
      { english: "We were eating while they were arguing.", spanish: "Estábamos comiendo mientras ellos discutían.", highlight: "were eating / were arguing" },
    ],
  },
  {
    label: "'Suddenly' / 'All of a sudden' — Drama Triggers",
    labelEs: "'Suddenly' / 'All of a sudden' — Disparadores de Drama",
    description:
      "Add 'suddenly' before the PAST SIMPLE interruption to make stories pop. This is the same beat that movie directors use: long shot of the background, then BAM — the event.",
    descriptionEs:
      "Agrega 'suddenly' antes de la interrupción en PASADO SIMPLE para que tus historias emocionen. Es el mismo ritmo que usan los directores de cine: plano largo del fondo, y luego ¡BAM! — el evento.",
    sentences: [
      { english: "I was walking home when suddenly I heard a noise.", spanish: "Iba caminando a casa cuando de repente oí un ruido.", highlight: "suddenly heard" },
      { english: "We were laughing when all of a sudden the lights went out.", spanish: "Estábamos riéndonos cuando de pronto se fue la luz.", highlight: "all of a sudden went out" },
      { english: "She was crossing the street when suddenly a dog appeared.", spanish: "Ella estaba cruzando la calle cuando de repente apareció un perro.", highlight: "suddenly appeared" },
      { english: "He was sleeping when suddenly the alarm rang.", spanish: "Él estaba durmiendo cuando de repente sonó la alarma.", highlight: "suddenly rang" },
    ],
  },
];

// ─── Section D: Boss Sentence — A Real Personal Narrative ───────────────────

export const connectorSentences = {
  connectors: [
    {
      word: "was/were + verb-ing",
      wordEs: "was/were + verbo-ing",
      example: "I was walking home from work.",
      exampleEs: "Iba caminando a casa después del trabajo.",
      use: "Past continuous — the longer background action. Sets the scene for the story.",
      useEs: "Pasado continuo — la acción larga de fondo. Pone la escena para la historia.",
    },
    {
      word: "when",
      wordEs: "cuando",
      example: "…when my phone rang.",
      exampleEs: "…cuando sonó mi teléfono.",
      use: "Goes with the past simple — the short interruption. The pivot point of the story.",
      useEs: "Va con el pasado simple — la interrupción corta. El punto de giro de la historia.",
    },
    {
      word: "suddenly",
      wordEs: "de repente",
      example: "Suddenly, it started to rain.",
      exampleEs: "De repente, empezó a llover.",
      use: "Adds drama before a past simple action. Makes the interruption hit harder.",
      useEs: "Agrega drama antes de una acción en pasado simple. Hace que la interrupción pegue más fuerte.",
    },
    {
      word: "while",
      wordEs: "mientras",
      example: "While I was waiting, I called my friend.",
      exampleEs: "Mientras esperaba, llamé a mi amigo.",
      use: "Pairs with past continuous (the longer action). Often interchangeable with 'when' but feels longer.",
      useEs: "Va con el pasado continuo (la acción más larga). A menudo intercambiable con 'when' pero se siente más larga.",
    },
    {
      word: "at that moment",
      wordEs: "en ese momento",
      example: "…and at that moment, I realized something important.",
      exampleEs: "…y en ese momento, me di cuenta de algo importante.",
      use: "A narrative pivot for the inner shift — when something CHANGED in the speaker's understanding.",
      useEs: "Un giro narrativo para el cambio interno — cuando algo CAMBIÓ en la comprensión del narrador.",
    },
    {
      word: "after that",
      wordEs: "después de eso",
      example: "After that, I went home.",
      exampleEs: "Después de eso, me fui a casa.",
      use: "Closes the scene. Returns to past simple for the resolution.",
      useEs: "Cierra la escena. Regresa al pasado simple para la resolución.",
    },
  ],
  bossSentence: {
    english:
      "Last Tuesday, I was walking home from work when suddenly it started to rain. While I was looking for my umbrella, my phone rang. It was my old friend from college — she was visiting New York and wanted to meet for coffee. At that moment, I forgot all about the rain. After that, we spent two hours catching up.",
    spanish:
      "El martes pasado, iba caminando a casa después del trabajo cuando de repente empezó a llover. Mientras buscaba mi paraguas, sonó mi teléfono. Era mi vieja amiga de la universidad — estaba visitando Nueva York y quería tomar café conmigo. En ese momento, me olvidé de la lluvia. Después de eso, pasamos dos horas poniéndonos al día.",
    explanation:
      "Five sentences. Two past continuous verbs ('was walking', 'was looking'), three past simple verbs ('started', 'rang', 'forgot'), plus 'after that' for the resolution. Five different time markers (Last Tuesday, suddenly, While, At that moment, After that). This is exactly how native English speakers narrate a real memory.",
    explanationEs:
      "Cinco oraciones. Dos verbos en pasado continuo ('was walking', 'was looking'), tres verbos en pasado simple ('started', 'rang', 'forgot'), más 'after that' para la resolución. Cinco marcadores de tiempo diferentes (Last Tuesday, suddenly, While, At that moment, After that). Así narran un recuerdo real los hablantes nativos de inglés.",
  },
};

// ─── Section E: Pronunciation Lab — Was/Were Reduction ───────────────────────

export const pronunciationDrills: PronunciationDrillItem[] = [
  {
    word: "was (full)",
    spanishStress: "WAS (Spanish-style)",
    englishStress: "WUZ (full form, stressed)",
    tip: "When 'was' is stressed (in negation, questions, or emphasis), it's pronounced WUZ. 'YES, I WUZ there!'",
    tipEs: "Cuando 'was' va acentuado (en negación, preguntas o énfasis), se pronuncia WUZ. '¡Sí, YO ESTABA allí!'",
  },
  {
    word: "was (reduced)",
    spanishStress: "WAS (Spanish 'a')",
    englishStress: "wuz / wəz (unstressed, almost a schwa)",
    tip: "In normal sentences, 'was' is REDUCED to 'wuz' or even 'wəz'. 'I was working' sounds like 'I-wuz-WORKING'.",
    tipEs: "En oraciones normales, 'was' se REDUCE a 'wuz' o incluso 'wəz'. 'I was working' suena como 'I-wuz-WORKING'.",
  },
  {
    word: "were (full)",
    spanishStress: "WERE (Spanish-style)",
    englishStress: "WUR (rhymes with 'her')",
    tip: "Stressed 'were' rhymes with 'her' or 'fur'. 'YES, we WUR there!'",
    tipEs: "'Were' acentuado rima con 'her' o 'fur'. '¡Sí, NOSOTROS ESTÁBAMOS allí!'",
  },
  {
    word: "were (reduced)",
    spanishStress: "WE-RE (two syllables)",
    englishStress: "wur / wər (one syllable, almost silent)",
    tip: "Unstressed 'were' becomes nearly silent: 'wər'. 'They were eating' sounds like 'They-wər-EATING'.",
    tipEs: "'Were' sin acento se vuelve casi silencioso: 'wər'. 'They were eating' suena como 'They-wər-EATING'.",
  },
  {
    word: "wasn't",
    spanishStress: "WAS NOT (two clear words)",
    englishStress: "WUZ-int (two syllables, contracted)",
    tip: "Always say 'WUZ-int', not 'was not' separated. The contracted form is the natural form.",
    tipEs: "Siempre di 'WUZ-int', no 'was not' separado. La forma contraída es la forma natural.",
  },
  {
    word: "weren't",
    spanishStress: "WE-REN-T (three syllables)",
    englishStress: "WURNT (one syllable)",
    tip: "Just one syllable: WURNT. NOT 'wer-ent'. Sounds like 'aren't' but with a 'w'.",
    tipEs: "Solo una sílaba: WURNT. NO 'wer-ent'. Suena como 'aren't' pero con 'w'.",
  },
  {
    word: "verb + -ing endings",
    spanishStress: "WORK-ING (clear -ing ending)",
    englishStress: "WORK-in / WORK-een (often reduced to 'in')",
    tip: "In casual speech, '-ing' often reduces to '-in': 'I was workin' late'. Both 'workin' and 'working' are accepted in conversation.",
    tipEs: "En habla casual, '-ing' a menudo se reduce a '-in': 'I was workin' late'. Ambos 'workin' y 'working' son aceptados en conversación.",
  },
  {
    word: "when / while linking",
    spanishStress: "WHEN-SHE-CALLED (3 separate words)",
    englishStress: "when-shee-CALLED (linked, stress on verb)",
    tip: "The verb in past simple gets the stress: 'when she CALLED', 'while I was COOKING'. The connector and pronoun reduce.",
    tipEs: "El verbo en pasado simple lleva el acento: 'when she CALLED', 'while I was COOKING'. El conector y el pronombre se reducen.",
  },
];

// ─── Section F: Vocabulary List for Self-Test ────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // was/were forms
  { english: "was", spanish: "estaba (yo, él, ella, eso)", type: "marker" },
  { english: "were", spanish: "estabas / estábamos / estaban", type: "marker" },
  { english: "wasn't", spanish: "no estaba", type: "marker" },
  { english: "weren't", spanish: "no estabas / estaban", type: "marker" },
  // -ing verbs
  { english: "eating", spanish: "comiendo", type: "verb" },
  { english: "drinking", spanish: "tomando", type: "verb" },
  { english: "working", spanish: "trabajando", type: "verb" },
  { english: "talking", spanish: "hablando", type: "verb" },
  { english: "writing", spanish: "escribiendo", type: "verb" },
  { english: "reading", spanish: "leyendo", type: "verb" },
  { english: "running", spanish: "corriendo", type: "verb" },
  { english: "driving", spanish: "manejando", type: "verb" },
  { english: "watching", spanish: "viendo", type: "verb" },
  { english: "listening", spanish: "escuchando", type: "verb" },
  { english: "studying", spanish: "estudiando", type: "verb" },
  { english: "sleeping", spanish: "durmiendo", type: "verb" },
  // Time markers
  { english: "when", spanish: "cuando", type: "marker" },
  { english: "while", spanish: "mientras", type: "marker" },
  { english: "as", spanish: "mientras / cuando", type: "marker" },
  { english: "suddenly", spanish: "de repente", type: "marker" },
  { english: "at that moment", spanish: "en ese momento", type: "marker" },
  { english: "all of a sudden", spanish: "de pronto", type: "marker" },
  { english: "meanwhile", spanish: "mientras tanto", type: "marker" },
  { english: "last night", spanish: "anoche", type: "marker" },
  // Useful phrases
  { english: "I was working when she called.", spanish: "Estaba trabajando cuando ella llamó.", type: "phrase" },
  { english: "We were eating dinner.", spanish: "Estábamos cenando.", type: "phrase" },
  { english: "What were you doing at 7?", spanish: "¿Qué estabas haciendo a las 7?", type: "phrase" },
  { english: "Were you sleeping?", spanish: "¿Estabas durmiendo?", type: "phrase" },
  { english: "She wasn't listening.", spanish: "Ella no estaba escuchando.", type: "phrase" },
  { english: "While I was cooking, the phone rang.", spanish: "Mientras cocinaba, sonó el teléfono.", type: "phrase" },
  { english: "Suddenly, it started to rain.", spanish: "De repente, empezó a llover.", type: "phrase" },
  { english: "I was walking home.", spanish: "Iba caminando a casa.", type: "phrase" },
];
