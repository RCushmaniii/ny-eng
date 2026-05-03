// Unit 7: "Asking Real Questions" — Wh-questions
//
// Pedagogical arc:
// Section A — 3 waves: the 7 Wh-words, the How + X compounds, common topic nouns
// Section B — Question word order (Wh + Be / Wh + aux + subject + verb / past)
// Section C — Subject vs. object questions ("Who called you?" vs. "Who did you call?")
// Section D — Boss Sentence: a real first-meeting conversation
// Section E — Pronunciation: Wh-question falling intonation, "do you" reduction
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

// ─── Section A: Question Words and Topic Vocabulary ──────────────────────────

export const cognateWaves = {
  wave1: {
    title: "The 7 Wh-Words — Your Question Toolkit",
    titleEs: "Las 7 Palabras Wh- — Tu Caja de Herramientas",
    description:
      "Every real question in English starts with one of these. Memorize the meaning, then drill the pronunciation — most start with a 'wh' sound that doesn't exist in Spanish.",
    descriptionEs:
      "Cada pregunta real en inglés empieza con una de estas. Memoriza el significado, luego practica la pronunciación — la mayoría empieza con un sonido 'wh' que no existe en español.",
    words: [
      {
        english: "what",
        spanish: "qué",
        category: "Wh-word",
        pronunciationNote: "Sounds like 'WUT'. The 'wh' is just a 'w' sound — no 'h' breath.",
        pronunciationNoteEs: "Suena como 'WUT'. El 'wh' es solo sonido 'w' — sin aire del 'h'.",
      },
      {
        english: "where",
        spanish: "dónde",
        category: "Wh-word",
        pronunciationNote: "Sounds like 'WAIR'. Rhymes with 'air' or 'hair'.",
        pronunciationNoteEs: "Suena como 'WAIR'. Rima con 'air' o 'hair'.",
      },
      {
        english: "when",
        spanish: "cuándo",
        category: "Wh-word",
        pronunciationNote: "Sounds like 'WEN'. Same vowel as 'pen' or 'ten'.",
        pronunciationNoteEs: "Suena como 'WEN'. Misma vocal que 'pen' o 'ten'.",
      },
      {
        english: "why",
        spanish: "por qué",
        category: "Wh-word",
        pronunciationNote: "Sounds like 'WHY' (rhymes with 'eye'). One syllable.",
        pronunciationNoteEs: "Suena como 'WAI' (rima con 'eye'). Una sílaba.",
      },
      {
        english: "who",
        spanish: "quién",
        category: "Wh-word",
        pronunciationNote: "Sounds like 'HOO'. The 'w' is silent here. Rhymes with 'shoe'.",
        pronunciationNoteEs: "Suena como 'JU' (en inglés). La 'w' es muda. Rima con 'shoe'.",
      },
      {
        english: "which",
        spanish: "cuál",
        category: "Wh-word",
        pronunciationNote: "Sounds like 'WICH'. Use when choosing from a known group.",
        pronunciationNoteEs: "Suena como 'WICH'. Úsalo al elegir entre un grupo conocido.",
      },
      {
        english: "how",
        spanish: "cómo",
        category: "Wh-word",
        pronunciationNote: "Sounds like 'HOW' (rhymes with 'now'). The 'w' is silent here too.",
        pronunciationNoteEs: "Suena como 'HOW' (rima con 'now'). Aquí la 'w' también es muda.",
      },
    ] as CognateWord[],
  },
  wave2: {
    title: "How + X — The Compound Question Words",
    titleEs: "How + X — Las Preguntas Compuestas",
    description:
      "'How' combines with another word to ask about quantity, time length, frequency, or degree. Spanish often uses one word; English uses two — 'how long', 'how often', 'how much'.",
    descriptionEs:
      "'How' se combina con otra palabra para preguntar sobre cantidad, duración, frecuencia o grado. El español a menudo usa una palabra; el inglés usa dos — 'how long', 'how often', 'how much'.",
    words: [
      { english: "how long", spanish: "cuánto tiempo", category: "How+X" },
      { english: "how often", spanish: "con qué frecuencia", category: "How+X" },
      { english: "how much", spanish: "cuánto (incontable)", category: "How+X" },
      { english: "how many", spanish: "cuántos (contable)", category: "How+X" },
      { english: "how old", spanish: "qué edad", category: "How+X" },
      { english: "how far", spanish: "qué tan lejos", category: "How+X" },
      { english: "how big", spanish: "qué tan grande", category: "How+X" },
      { english: "how fast", spanish: "qué tan rápido", category: "How+X" },
      { english: "how come", spanish: "cómo es que (informal por qué)", category: "How+X" },
      {
        english: "how about",
        spanish: "qué tal",
        category: "How+X",
        pronunciationNote: "Used to suggest or check in. 'How about Friday?' = '¿Qué tal el viernes?'",
        pronunciationNoteEs: "Usado para sugerir o consultar. 'How about Friday?' = '¿Qué tal el viernes?'",
      },
    ] as CognateWord[],
  },
  wave3: {
    title: "Topic Vocabulary — What People Actually Ask About",
    titleEs: "Vocabulario Temático — De Qué Habla la Gente",
    description:
      "These are the real topics in first conversations: where you live, what you do, your family, your weekend. Master these nouns and your Wh-questions land naturally.",
    descriptionEs:
      "Estos son los temas reales en primeras conversaciones: dónde vives, qué haces, tu familia, tu fin de semana. Domina estos sustantivos y tus preguntas Wh- caen natural.",
    words: [
      { english: "city", spanish: "ciudad", category: "Topic" },
      { english: "country", spanish: "país", category: "Topic" },
      { english: "neighborhood", spanish: "vecindario", category: "Topic" },
      { english: "job", spanish: "trabajo", category: "Topic" },
      { english: "company", spanish: "empresa", category: "Topic" },
      { english: "family", spanish: "familia", category: "Topic" },
      { english: "weekend", spanish: "fin de semana", category: "Topic" },
      { english: "vacation", spanish: "vacaciones", category: "Topic" },
      { english: "hobby", spanish: "pasatiempo", category: "Topic" },
      { english: "favorite", spanish: "favorito/a", category: "Topic" },
      { english: "free time", spanish: "tiempo libre", category: "Topic" },
      { english: "language", spanish: "idioma", category: "Topic" },
    ] as CognateWord[],
  },
};

// ─── Section B: Question Word Order ──────────────────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Step 1: Wh + Be + subject (present)",
    labelEs: "Paso 1: Wh + Be + sujeto (presente)",
    description:
      "When the verb is BE (am/is/are), it jumps to position 2 — right after the Wh-word. Subject comes third. NO 'do/does'. This is the simplest pattern.",
    descriptionEs:
      "Cuando el verbo es BE (am/is/are), salta a la posición 2 — justo después de la palabra Wh-. El sujeto va tercero. SIN 'do/does'. Este es el patrón más simple.",
    sentences: [
      { english: "Where are you from?", spanish: "¿De dónde eres?", highlight: "are" },
      { english: "What is your name?", spanish: "¿Cuál es tu nombre?", highlight: "is" },
      { english: "How old is your son?", spanish: "¿Qué edad tiene tu hijo?", highlight: "is" },
      { english: "Why are you tired?", spanish: "¿Por qué estás cansado?", highlight: "are" },
    ],
  },
  {
    label: "Step 2: Wh + do/does + subject + verb (present)",
    labelEs: "Paso 2: Wh + do/does + sujeto + verbo (presente)",
    description:
      "For ALL OTHER verbs in present tense, you need 'do' (I/you/we/they) or 'does' (he/she/it) as a helper. The main verb stays in base form. NEVER add -s after 'does'.",
    descriptionEs:
      "Para TODOS los OTROS verbos en presente, necesitas 'do' (I/you/we/they) o 'does' (he/she/it) como ayudante. El verbo principal queda en forma base. NUNCA agregues -s después de 'does'.",
    sentences: [
      { english: "Where do you work?", spanish: "¿Dónde trabajas?", highlight: "do" },
      { english: "What does she do for a living?", spanish: "¿A qué se dedica ella?", highlight: "does" },
      { english: "How often do you exercise?", spanish: "¿Con qué frecuencia haces ejercicio?", highlight: "do" },
      { english: "Why does he speak so fast?", spanish: "¿Por qué habla él tan rápido?", highlight: "does" },
    ],
  },
  {
    label: "Step 3: Wh + did + subject + base verb (past)",
    labelEs: "Paso 3: Wh + did + sujeto + verbo base (pasado)",
    description:
      "For ALL past-tense questions, use 'did' as the helper — and the main verb goes BACK to base form. NEVER 'Where did you went?' Always 'Where did you go?'.",
    descriptionEs:
      "Para TODAS las preguntas en pasado, usa 'did' como ayudante — y el verbo principal REGRESA a forma base. NUNCA 'Where did you went?' Siempre 'Where did you go?'.",
    sentences: [
      { english: "Where did you go last weekend?", spanish: "¿A dónde fuiste el fin de semana pasado?", highlight: "did" },
      { english: "When did she arrive?", spanish: "¿Cuándo llegó ella?", highlight: "did" },
      { english: "What did you eat for lunch?", spanish: "¿Qué comiste de almuerzo?", highlight: "did" },
      { english: "Why did they leave so early?", spanish: "¿Por qué se fueron tan temprano?", highlight: "did" },
    ],
  },
  {
    label: "Step 4: Wh + can/will/should + subject + base verb",
    labelEs: "Paso 4: Wh + can/will/should + sujeto + verbo base",
    description:
      "With modals (can, will, should, could, would), the modal goes in position 2 — like 'be' did. Main verb stays base form. No 'do' needed.",
    descriptionEs:
      "Con modales (can, will, should, could, would), el modal va en posición 2 — como hizo 'be'. El verbo principal queda en forma base. No se necesita 'do'.",
    sentences: [
      { english: "How can I help you?", spanish: "¿Cómo puedo ayudarte?", highlight: "can" },
      { english: "When will you finish the report?", spanish: "¿Cuándo terminarás el reporte?", highlight: "will" },
      { english: "What should I do next?", spanish: "¿Qué debería hacer después?", highlight: "should" },
      { english: "Where would you like to eat?", spanish: "¿Dónde te gustaría comer?", highlight: "would" },
    ],
  },
];

// ─── Section C: Subject Questions vs. Object Questions ───────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "Object Questions — The Normal Pattern",
    labelEs: "Preguntas de Objeto — El Patrón Normal",
    description:
      "When the Wh-word is the OBJECT (what/who you act on), you USE the helper 'do/does/did'. This is the pattern you've been drilling. The subject is still the person doing the action.",
    descriptionEs:
      "Cuando la palabra Wh- es el OBJETO (qué/a quién afectas), USAS el ayudante 'do/does/did'. Este es el patrón que has estado practicando. El sujeto sigue siendo quien hace la acción.",
    sentences: [
      { english: "Who did you call?", spanish: "¿A quién llamaste?", highlight: "did you call" },
      { english: "What do you want?", spanish: "¿Qué quieres?", highlight: "do you want" },
      { english: "Who does she work with?", spanish: "¿Con quién trabaja ella?", highlight: "does she work" },
      { english: "What did they buy?", spanish: "¿Qué compraron ellos?", highlight: "did they buy" },
    ],
  },
  {
    label: "Subject Questions — DROP the helper",
    labelEs: "Preguntas de Sujeto — QUITA el ayudante",
    description:
      "When the Wh-word IS the subject (who/what does the action), DROP 'do/does/did' completely. The verb takes its normal form — present -s for he/she/it, past -ed for past. This trips up almost every Spanish speaker.",
    descriptionEs:
      "Cuando la palabra Wh- ES el sujeto (quién/qué hace la acción), QUITA 'do/does/did' completamente. El verbo toma su forma normal — -s en presente para he/she/it, -ed en pasado. Esto confunde a casi todos los hispanohablantes.",
    sentences: [
      { english: "Who called you?", spanish: "¿Quién te llamó?", highlight: "called (no did)" },
      { english: "What happened?", spanish: "¿Qué pasó?", highlight: "happened (no did)" },
      { english: "Who lives here?", spanish: "¿Quién vive aquí?", highlight: "lives (no does)" },
      { english: "What makes you happy?", spanish: "¿Qué te hace feliz?", highlight: "makes (no does)" },
    ],
  },
  {
    label: "How Long / How Often — Asking About Duration and Frequency",
    labelEs: "How Long / How Often — Preguntas de Duración y Frecuencia",
    description:
      "'How long' asks how much TIME something takes or has lasted. 'How often' asks how FREQUENTLY something happens. Both pair with the helper pattern from Section B.",
    descriptionEs:
      "'How long' pregunta cuánto TIEMPO toma o ha durado algo. 'How often' pregunta con qué FRECUENCIA pasa algo. Ambos van con el patrón de ayudantes de la Sección B.",
    sentences: [
      { english: "How long have you lived here?", spanish: "¿Cuánto tiempo has vivido aquí?", highlight: "How long" },
      { english: "How long does it take to drive?", spanish: "¿Cuánto tiempo toma manejar?", highlight: "How long" },
      { english: "How often do you travel for work?", spanish: "¿Con qué frecuencia viajas por trabajo?", highlight: "How often" },
      { english: "How often does the bus come?", spanish: "¿Con qué frecuencia viene el autobús?", highlight: "How often" },
    ],
  },
  {
    label: "How Much / How Many — From Unit 6, Now in Questions",
    labelEs: "How Much / How Many — De la Unidad 6, Ahora en Preguntas",
    description:
      "'How many' for countables, 'How much' for uncountables — same rule as Unit 6. Now drill them in real question structures with the right helper verb.",
    descriptionEs:
      "'How many' para contables, 'How much' para incontables — misma regla que la Unidad 6. Ahora practícalos en estructuras reales de pregunta con el verbo ayudante correcto.",
    sentences: [
      { english: "How many siblings do you have?", spanish: "¿Cuántos hermanos tienes?", highlight: "How many" },
      { english: "How much does this cost?", spanish: "¿Cuánto cuesta esto?", highlight: "How much" },
      { english: "How many languages does she speak?", spanish: "¿Cuántos idiomas habla ella?", highlight: "How many" },
      { english: "How much time do we have?", spanish: "¿Cuánto tiempo tenemos?", highlight: "How much" },
    ],
  },
];

// ─── Section D: Boss Sentence — A First Conversation (Connector Challenge) ───

export const connectorSentences = {
  connectors: [
    {
      word: "Where are you from?",
      wordEs: "¿De dónde eres?",
      example: "Where are you from originally?",
      exampleEs: "¿De dónde eres originalmente?",
      use: "The classic conversation opener. Wh + Be pattern — no 'do' needed because the verb is 'are'.",
      useEs: "El abre-conversaciones clásico. Patrón Wh + Be — sin 'do' porque el verbo es 'are'.",
    },
    {
      word: "What do you do?",
      wordEs: "¿A qué te dedicas?",
      example: "What do you do for work?",
      exampleEs: "¿A qué te dedicas en el trabajo?",
      use: "Standard 'tell me about your job' question. Use 'do' as helper, second 'do' is the main verb.",
      useEs: "Pregunta estándar de 'háblame de tu trabajo'. Usa 'do' como ayudante, el segundo 'do' es el verbo principal.",
    },
    {
      word: "How long",
      wordEs: "Cuánto tiempo",
      example: "How long have you been there?",
      exampleEs: "¿Cuánto tiempo llevas allí?",
      use: "Asks about duration. Pairs with 'have you been' (present perfect) for ongoing situations.",
      useEs: "Pregunta por duración. Va con 'have you been' (presente perfecto) para situaciones continuas.",
    },
    {
      word: "Why did you",
      wordEs: "Por qué",
      example: "Why did you decide to move?",
      exampleEs: "¿Por qué decidiste mudarte?",
      use: "Past-tense Wh- question. Note: main verb is base form ('decide', not 'decided').",
      useEs: "Pregunta Wh- en pasado. Nota: el verbo principal va en forma base ('decide', no 'decided').",
    },
    {
      word: "How often",
      wordEs: "Con qué frecuencia",
      example: "How often do you visit?",
      exampleEs: "¿Con qué frecuencia visitas?",
      use: "Asks about frequency. Same helper pattern as 'what do you do' — 'do' + base verb.",
      useEs: "Pregunta por frecuencia. Mismo patrón ayudante que 'what do you do' — 'do' + verbo base.",
    },
    {
      word: "What's your favorite",
      wordEs: "Cuál es tu favorito",
      example: "What's your favorite thing about it?",
      exampleEs: "¿Cuál es tu cosa favorita al respecto?",
      use: "Wh + Be (contracted to 'What's'). Natural way to ask for opinions and preferences.",
      useEs: "Wh + Be (contraído a 'What's'). Forma natural de preguntar opiniones y preferencias.",
    },
  ],
  bossSentence: {
    english:
      "So, where are you from originally? And what do you do for work? How long have you been at your company? Why did you decide to move to New York? How often do you go back to visit family? And what's your favorite thing about living here?",
    spanish:
      "Entonces, ¿de dónde eres originalmente? ¿Y a qué te dedicas? ¿Cuánto tiempo llevas en tu empresa? ¿Por qué decidiste mudarte a Nueva York? ¿Con qué frecuencia regresas a visitar a tu familia? ¿Y cuál es tu cosa favorita de vivir aquí?",
    explanation:
      "Six real questions, six different patterns: Wh+Be, Wh+do+verb, How long+present perfect, Why+did+base verb, How often+do+verb, What+Be. This is exactly what a first conversation in English sounds like — and exactly the questions you should be ready to ASK back.",
    explanationEs:
      "Seis preguntas reales, seis patrones diferentes: Wh+Be, Wh+do+verbo, How long+presente perfecto, Why+did+verbo base, How often+do+verbo, What+Be. Así suena una primera conversación en inglés — y exactamente las preguntas que deberías estar listo para HACER tú también.",
  },
};

// ─── Section E: Pronunciation Lab — Question Sounds and Intonation ───────────

export const pronunciationDrills: PronunciationDrillItem[] = [
  {
    word: "what",
    spanishStress: "QUE (Spanish 'que')",
    englishStress: "WUT (one syllable, short 'uh' sound)",
    tip: "The 'wh' is just 'w'. Same vowel as 'cup' or 'much'. NOT 'WAT' with Spanish 'a'.",
    tipEs: "El 'wh' es solo 'w'. Misma vocal que 'cup' o 'much'. NO 'WAT' con 'a' española.",
  },
  {
    word: "where",
    spanishStress: "DON-DE",
    englishStress: "WAIR (rhymes with 'air')",
    tip: "Sounds like 'WAIR'. Same as the word 'where' in 'wear a hat'. One syllable.",
    tipEs: "Suena como 'WAIR'. Igual que la palabra 'wear' en 'wear a hat'. Una sílaba.",
  },
  {
    word: "who",
    spanishStress: "QUIEN",
    englishStress: "HOO (silent 'w', rhymes with 'shoe')",
    tip: "The 'w' is SILENT. Just say 'HOO'. Spanish speakers often add a 'w' sound — don't.",
    tipEs: "La 'w' es MUDA. Solo di 'JU' (en inglés HOO). Los hispanohablantes a menudo agregan sonido 'w' — no lo hagas.",
  },
  {
    word: "how",
    spanishStress: "CO-MO",
    englishStress: "HOW (rhymes with 'now', silent 'w' here too)",
    tip: "The 'w' is SILENT. Sounds like 'HOW' rhyming with 'now', 'cow', 'bow'.",
    tipEs: "La 'w' es MUDA. Suena como 'HOW' rimando con 'now', 'cow', 'bow'.",
  },
  {
    word: "do you",
    spanishStress: "DO YOU (two clear words)",
    englishStress: "duh-YA / d'YA (linked, fast)",
    tip: "In fast speech, 'do you' becomes 'd'YA'. 'Where do you live?' → 'WHERE-d'YA-LIV?'",
    tipEs: "En habla rápida, 'do you' se vuelve 'd'YA'. 'Where do you live?' → 'WHERE-d'YA-LIV?'",
  },
  {
    word: "did you",
    spanishStress: "DID YOU (two clear words)",
    englishStress: "DID-juh / DIH-juh (linked with 'j' sound)",
    tip: "'Did you' merges into 'DID-juh'. The 'd' + 'y' creates a 'j' sound. 'What did you do?' → 'WHAT-DIDJUH-DOO?'",
    tipEs: "'Did you' se junta en 'DID-juh'. La 'd' + 'y' crea sonido 'j' (inglés). 'What did you do?' → 'WHAT-DIDJUH-DOO?'",
  },
  {
    word: "Wh-question intonation",
    spanishStress: "Rising at end (Spanish habit)",
    englishStress: "FALLING at end (English Wh-questions)",
    tip: "English Wh-questions END with FALLING pitch — opposite of Spanish. 'Where are you from?' goes DOWN on 'from'.",
    tipEs: "Las preguntas Wh- en inglés TERMINAN con tono BAJANDO — opuesto al español. 'Where are you from?' BAJA en 'from'.",
  },
  {
    word: "yes/no question intonation",
    spanishStress: "Often flat in Spanish",
    englishStress: "RISING at end (yes/no questions)",
    tip: "Yes/no questions ('Are you ready?', 'Do you like it?') END with RISING pitch — UP on the last word.",
    tipEs: "Las preguntas de sí/no ('Are you ready?', 'Do you like it?') TERMINAN con tono SUBIENDO — ARRIBA en la última palabra.",
  },
];

// ─── Section F: Vocabulary List for Self-Test ────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Wh-words
  { english: "what", spanish: "qué", type: "marker" },
  { english: "where", spanish: "dónde", type: "marker" },
  { english: "when", spanish: "cuándo", type: "marker" },
  { english: "why", spanish: "por qué", type: "marker" },
  { english: "who", spanish: "quién", type: "marker" },
  { english: "which", spanish: "cuál", type: "marker" },
  { english: "how", spanish: "cómo", type: "marker" },
  // How+X compounds
  { english: "how long", spanish: "cuánto tiempo", type: "marker" },
  { english: "how often", spanish: "con qué frecuencia", type: "marker" },
  { english: "how much", spanish: "cuánto (incontable)", type: "marker" },
  { english: "how many", spanish: "cuántos (contable)", type: "marker" },
  { english: "how old", spanish: "qué edad", type: "marker" },
  { english: "how far", spanish: "qué tan lejos", type: "marker" },
  { english: "how about", spanish: "qué tal", type: "marker" },
  // Topic vocabulary
  { english: "city", spanish: "ciudad", type: "phrase" },
  { english: "country", spanish: "país", type: "phrase" },
  { english: "job", spanish: "trabajo", type: "phrase" },
  { english: "company", spanish: "empresa", type: "phrase" },
  { english: "family", spanish: "familia", type: "phrase" },
  { english: "weekend", spanish: "fin de semana", type: "phrase" },
  { english: "vacation", spanish: "vacaciones", type: "phrase" },
  { english: "hobby", spanish: "pasatiempo", type: "phrase" },
  { english: "favorite", spanish: "favorito/a", type: "phrase" },
  { english: "free time", spanish: "tiempo libre", type: "phrase" },
  // Useful question phrases
  { english: "Where are you from?", spanish: "¿De dónde eres?", type: "phrase" },
  { english: "What do you do?", spanish: "¿A qué te dedicas?", type: "phrase" },
  { english: "How long have you been here?", spanish: "¿Cuánto tiempo llevas aquí?", type: "phrase" },
  { english: "Why did you move?", spanish: "¿Por qué te mudaste?", type: "phrase" },
  { english: "How often do you travel?", spanish: "¿Con qué frecuencia viajas?", type: "phrase" },
  { english: "What's your favorite…?", spanish: "¿Cuál es tu favorito…?", type: "phrase" },
  { english: "Who called you?", spanish: "¿Quién te llamó?", type: "phrase" },
  { english: "What happened?", spanish: "¿Qué pasó?", type: "phrase" },
  { english: "How can I help?", spanish: "¿Cómo puedo ayudar?", type: "phrase" },
  { english: "When does it start?", spanish: "¿Cuándo empieza?", type: "phrase" },
  { english: "How much does it cost?", spanish: "¿Cuánto cuesta?", type: "phrase" },
  { english: "How many people came?", spanish: "¿Cuántas personas vinieron?", type: "phrase" },
];
