// Unit 2: "Yesterday I Went" — Past simple, irregular verbs
//
// Pedagogical arc:
// Section A — 30 most common irregular verbs, grouped into 3 memorable waves
// Section B — Was/were (the irregular past of "to be")
// Section C — Did/didn't questions and negatives
// Section D — Time markers + sequencing with irregulars in the Boss Sentence
// Section E — Pronunciation drill: ought/aught, was/were, no extra syllables
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

// ─── Section A: Three Waves of Irregular Verbs (Cognate Discovery format) ────

export const cognateWaves = {
  wave1: {
    title: "The Daily 10 — Verbs You Use Every Day",
    titleEs: "Los 10 Diarios — Verbos que usas todos los días",
    description:
      "These ten irregular verbs cover most of what you say in past tense. Don't try to memorize them all at once — the sentences in Section B will drill them in.",
    descriptionEs:
      "Estos diez verbos irregulares cubren la mayoría de lo que dices en pasado. No intentes memorizarlos todos de una vez — las oraciones en la Sección B los van a fijar.",
    words: [
      {
        english: "went (go)",
        spanish: "fui (ir)",
        category: "Daily 10",
        pronunciationNote: "One syllable: 'WENT'. Don't say 'goed'.",
        pronunciationNoteEs: "Una sílaba: 'WENT'. No digas 'goed'.",
      },
      {
        english: "did (do)",
        spanish: "hice (hacer)",
        category: "Daily 10",
        pronunciationNote: "One syllable: 'DID'. Don't say 'doed'.",
        pronunciationNoteEs: "Una sílaba: 'DID'. No digas 'doed'.",
      },
      { english: "had (have)", spanish: "tuve (tener)", category: "Daily 10" },
      { english: "got (get)", spanish: "obtuve / conseguí (get)", category: "Daily 10" },
      { english: "made (make)", spanish: "hice (hacer/crear)", category: "Daily 10" },
      {
        english: "said (say)",
        spanish: "dije (decir)",
        category: "Daily 10",
        pronunciationNote: "Pronounced 'SED', not 'SAYD'. Common error.",
        pronunciationNoteEs: "Se pronuncia 'SED', no 'SAYD'. Error común.",
      },
      { english: "saw (see)", spanish: "vi (ver)", category: "Daily 10" },
      { english: "came (come)", spanish: "vine (venir)", category: "Daily 10" },
      { english: "took (take)", spanish: "tomé (tomar)", category: "Daily 10" },
      { english: "gave (give)", spanish: "di (dar)", category: "Daily 10" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The Story Verbs — For Telling Stories",
    titleEs: "Los Verbos de Historia — Para contar historias",
    description:
      "These ten unlock the language of storytelling: what someone said, what you thought, what you found. Story verbs are how memories become sentences.",
    descriptionEs:
      "Estos diez desbloquean el lenguaje de la narración: qué dijo alguien, qué pensaste, qué encontraste. Los verbos de historia son cómo los recuerdos se vuelven oraciones.",
    words: [
      { english: "told (tell)", spanish: "dije / conté (contar)", category: "Story Verbs" },
      {
        english: "thought (think)",
        spanish: "pensé (pensar)",
        category: "Story Verbs",
        pronunciationNote: "Sounds like 'THOT'. Silent 'gh'.",
        pronunciationNoteEs: "Suena como 'THOT'. La 'gh' es muda.",
      },
      { english: "knew (know)", spanish: "supe / conocí", category: "Story Verbs" },
      { english: "found (find)", spanish: "encontré", category: "Story Verbs" },
      { english: "left (leave)", spanish: "dejé / me fui", category: "Story Verbs" },
      { english: "felt (feel)", spanish: "sentí (sentir)", category: "Story Verbs" },
      { english: "became (become)", spanish: "me volví / llegué a ser", category: "Story Verbs" },
      {
        english: "brought (bring)",
        spanish: "traje (traer)",
        category: "Story Verbs",
        pronunciationNote: "Sounds like 'BRAWT'. Same vowel as 'thought'.",
        pronunciationNoteEs: "Suena como 'BRAWT'. Misma vocal que 'thought'.",
      },
      { english: "wrote (write)", spanish: "escribí", category: "Story Verbs" },
      {
        english: "read (read)",
        spanish: "leí",
        category: "Story Verbs",
        pronunciationNote:
          "Spelling unchanged but PRONOUNCED differently: present 'REED', past 'RED'.",
        pronunciationNoteEs:
          "Misma escritura pero PRONUNCIACIÓN diferente: presente 'REED', pasado 'RED'.",
      },
    ] as CognateWord[],
  },
  wave3: {
    title: "The Same-Form 10 — Look Unchanged",
    titleEs: "Los 10 Inalterados — Se ven iguales",
    description:
      "These verbs don't change spelling at all in past tense. The good news: you already know the past tense form — it's the same word.",
    descriptionEs:
      "Estos verbos no cambian de ortografía en pasado. La buena noticia: ya conoces la forma del pasado — es la misma palabra.",
    words: [
      {
        english: "put",
        spanish: "puse / puso",
        category: "Same-Form 10",
        pronunciationNote: "Same word, same sound. Context tells you it's past.",
        pronunciationNoteEs: "Misma palabra, mismo sonido. El contexto te dice que es pasado.",
      },
      { english: "cut", spanish: "corté", category: "Same-Form 10" },
      { english: "hit", spanish: "golpeé / pegué", category: "Same-Form 10" },
      { english: "let", spanish: "dejé / permití", category: "Same-Form 10" },
      { english: "set", spanish: "puse / fijé", category: "Same-Form 10" },
      { english: "shut", spanish: "cerré", category: "Same-Form 10" },
      { english: "cost", spanish: "costó", category: "Same-Form 10" },
      { english: "hurt", spanish: "dolió / lastimé", category: "Same-Form 10" },
      { english: "fit", spanish: "quedó / me quedó (talla)", category: "Same-Form 10" },
      { english: "spread", spanish: "esparcí / extendí", category: "Same-Form 10" },
    ] as CognateWord[],
  },
};

// ─── Section B: Was / Were (the irregular past of "to be") ───────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Step 1: I / He / She / It was",
    labelEs: "Paso 1: I / He / She / It was",
    description:
      "'Was' is the past form for ONE person or thing. I, he, she, it — all use 'was'.",
    descriptionEs:
      "'Was' es la forma del pasado para UNA persona o cosa. I, he, she, it — todos usan 'was'.",
    sentences: [
      { english: "I was tired yesterday.", spanish: "Estaba cansado ayer.", highlight: "was" },
      { english: "She was at the office.", spanish: "Ella estaba en la oficina.", highlight: "was" },
      { english: "He was happy with the result.", spanish: "Él estaba contento con el resultado.", highlight: "was" },
      { english: "It was a long meeting.", spanish: "Fue una junta larga.", highlight: "was" },
    ],
  },
  {
    label: "Step 2: We / You / They were",
    labelEs: "Paso 2: We / You / They were",
    description:
      "'Were' is the past form for plural subjects — and for 'you' (singular OR plural). Two simple rules cover all cases.",
    descriptionEs:
      "'Were' es la forma del pasado para sujetos plurales — y para 'you' (singular O plural). Dos reglas simples cubren todos los casos.",
    sentences: [
      { english: "We were busy last week.", spanish: "Estuvimos ocupados la semana pasada.", highlight: "were" },
      { english: "You were right about that.", spanish: "Tenías razón sobre eso.", highlight: "were" },
      { english: "They were at the conference.", spanish: "Ellos estaban en la conferencia.", highlight: "were" },
      { english: "We were tired but happy.", spanish: "Estábamos cansados pero contentos.", highlight: "were" },
    ],
  },
  {
    label: "Step 3: Negatives — wasn't / weren't",
    labelEs: "Paso 3: Negativos — wasn't / weren't",
    description:
      "Add 'not' to make a negative. The contractions are very common: wasn't = was not, weren't = were not.",
    descriptionEs:
      "Agrega 'not' para hacer un negativo. Las contracciones son muy comunes: wasn't = was not, weren't = were not.",
    sentences: [
      { english: "I wasn't ready.", spanish: "No estaba listo.", highlight: "wasn't" },
      { english: "She wasn't at home.", spanish: "Ella no estaba en casa.", highlight: "wasn't" },
      { english: "They weren't invited.", spanish: "No fueron invitados.", highlight: "weren't" },
      { english: "We weren't sure about the plan.", spanish: "No estábamos seguros del plan.", highlight: "weren't" },
    ],
  },
  {
    label: "Step 4: Questions — Was / Were + subject?",
    labelEs: "Paso 4: Preguntas — Was / Were + sujeto?",
    description:
      "To ask a question, just flip the order: 'Was/Were' comes BEFORE the subject. No extra word needed.",
    descriptionEs:
      "Para hacer una pregunta, solo invierte el orden: 'Was/Were' va ANTES del sujeto. No se necesita palabra extra.",
    sentences: [
      { english: "Was she at the meeting?", spanish: "¿Estuvo ella en la junta?", highlight: "Was she" },
      { english: "Were you tired?", spanish: "¿Estabas cansado?", highlight: "Were you" },
      { english: "Was it expensive?", spanish: "¿Fue caro?", highlight: "Was it" },
      { english: "Were they happy with the result?", spanish: "¿Estuvieron contentos con el resultado?", highlight: "Were they" },
    ],
  },
];

// ─── Section C: Did / Didn't (questions and negatives for ALL other verbs) ───

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "Question: Did + subject + BASE verb?",
    labelEs: "Pregunta: Did + sujeto + verbo BASE?",
    description:
      "Critical rule: after 'Did', use the BASE form (go, see, do) — NOT the past form. 'Did' already carries the past meaning.",
    descriptionEs:
      "Regla crítica: después de 'Did', usa la forma BASE (go, see, do) — NO la forma pasada. 'Did' ya carga el significado del pasado.",
    sentences: [
      { english: "Did you go to the meeting?", spanish: "¿Fuiste a la junta?", highlight: "go" },
      { english: "Did she see the report?", spanish: "¿Vio ella el reporte?", highlight: "see" },
      { english: "Did they have lunch together?", spanish: "¿Almorzaron juntos?", highlight: "have" },
      { english: "Did he come to the office?", spanish: "¿Vino él a la oficina?", highlight: "come" },
    ],
  },
  {
    label: "Negative: subject + didn't + BASE verb",
    labelEs: "Negativo: sujeto + didn't + verbo BASE",
    description:
      "Same rule: after 'didn't', use the BASE form. 'I didn't go' — NEVER 'I didn't went.' This is the #1 error to avoid.",
    descriptionEs:
      "Misma regla: después de 'didn't', usa la forma BASE. 'I didn't go' — NUNCA 'I didn't went.' Este es el error #1 a evitar.",
    sentences: [
      { english: "I didn't go yesterday.", spanish: "No fui ayer.", highlight: "go" },
      { english: "She didn't see the email.", spanish: "Ella no vio el correo.", highlight: "see" },
      { english: "We didn't have time.", spanish: "No tuvimos tiempo.", highlight: "have" },
      { english: "They didn't come to the party.", spanish: "No vinieron a la fiesta.", highlight: "come" },
    ],
  },
  {
    label: "Wh-Questions: What/Where/When + did + subject + BASE?",
    labelEs: "Preguntas Wh-: What/Where/When + did + sujeto + BASE?",
    description:
      "Add a question word in front. The rest of the structure stays the same — 'did + subject + BASE verb'.",
    descriptionEs:
      "Agrega una palabra de pregunta al inicio. El resto de la estructura es igual — 'did + sujeto + verbo BASE'.",
    sentences: [
      { english: "What did you do yesterday?", spanish: "¿Qué hiciste ayer?", highlight: "What did" },
      { english: "Where did she go?", spanish: "¿A dónde fue ella?", highlight: "Where did" },
      { english: "When did they arrive?", spanish: "¿Cuándo llegaron?", highlight: "When did" },
      { english: "Why did he leave early?", spanish: "¿Por qué se fue temprano?", highlight: "Why did" },
    ],
  },
  {
    label: "Short answers: Yes, I did. / No, I didn't.",
    labelEs: "Respuestas cortas: Yes, I did. / No, I didn't.",
    description:
      "Native speakers rarely answer with the full verb. Just 'did' or 'didn't' is enough. This sounds natural; full answers can sound rehearsed.",
    descriptionEs:
      "Los nativos rara vez responden con el verbo completo. Solo 'did' o 'didn't' es suficiente. Esto suena natural; las respuestas completas pueden sonar ensayadas.",
    sentences: [
      { english: "Did you go? — Yes, I did.", spanish: "¿Fuiste? — Sí, fui.", highlight: "Yes, I did" },
      { english: "Did she call? — No, she didn't.", spanish: "¿Llamó ella? — No, no llamó.", highlight: "No, she didn't" },
      { english: "Did they finish? — Yes, they did.", spanish: "¿Terminaron? — Sí, terminaron.", highlight: "Yes, they did" },
      { english: "Did he see it? — No, he didn't.", spanish: "¿Lo vio? — No, no lo vio.", highlight: "No, he didn't" },
    ],
  },
];

// ─── Section D: Time Markers + Sequencing (Connector Challenge) ──────────────

export const connectorSentences = {
  connectors: [
    {
      word: "Yesterday morning",
      wordEs: "Ayer en la mañana",
      example: "Yesterday morning, I went to a meeting.",
      exampleEs: "Ayer en la mañana, fui a una junta.",
      use: "More precise than just 'yesterday' — narrows the time of day.",
      useEs: "Más preciso que solo 'yesterday' — acota la hora del día.",
    },
    {
      word: "After that",
      wordEs: "Después de eso",
      example: "After that, I had lunch with a colleague.",
      exampleEs: "Después de eso, almorcé con un colega.",
      use: "Connects one past event to the next. The story-telling connector.",
      useEs: "Conecta un evento pasado con el siguiente. El conector narrativo.",
    },
    {
      word: "Later",
      wordEs: "Más tarde",
      example: "Later, she sent me an email.",
      exampleEs: "Más tarde, ella me mandó un correo.",
      use: "An unspecified time after another past event. Looser than 'after that'.",
      useEs: "Un tiempo no especificado después de otro evento pasado. Más amplio que 'after that'.",
    },
    {
      word: "Then",
      wordEs: "Entonces / Luego",
      example: "Then I went home.",
      exampleEs: "Luego me fui a casa.",
      use: "The most common sequencing word. Use it freely.",
      useEs: "La palabra de secuencia más común. Úsala libremente.",
    },
    {
      word: "Finally",
      wordEs: "Finalmente",
      example: "Finally, I got the answer I needed.",
      exampleEs: "Finalmente, obtuve la respuesta que necesitaba.",
      use: "Marks the LAST event in a sequence. Strong story closer.",
      useEs: "Marca el ÚLTIMO evento en una secuencia. Fuerte cerrador de historia.",
    },
  ],
  bossSentence: {
    english:
      "Yesterday morning, I went to Boston. There, I saw an old friend. After that, we had lunch together. Then I took the train home. Finally, I wrote about the trip in my journal.",
    spanish:
      "Ayer en la mañana, fui a Boston. Allí, vi a un viejo amigo. Después de eso, almorzamos juntos. Luego tomé el tren a casa. Finalmente, escribí sobre el viaje en mi diario.",
    explanation:
      "Five sentences. Five irregular verbs (went, saw, had, took, wrote). Five connectors. This is what telling a real story sounds like.",
    explanationEs:
      "Cinco oraciones. Cinco verbos irregulares (went, saw, had, took, wrote). Cinco conectores. Así suena contar una historia real.",
  },
};

// ─── Section E: Pronunciation Lab — Trickiest Irregular Verb Sounds ──────────

export const pronunciationDrills: PronunciationDrillItem[] = [
  {
    word: "went",
    spanishStress: "wen-ted (common Spanish-speaker error)",
    englishStress: "WENT (one syllable)",
    tip: "'Went' is ONE syllable. Don't add -ed. The verb already IS the past.",
    tipEs: "'Went' es UNA sílaba. No agregues -ed. El verbo YA ES el pasado.",
  },
  {
    word: "said",
    spanishStress: "SAYD (sounds like 'paid' — wrong)",
    englishStress: "SED (rhymes with 'red')",
    tip: "'Said' is pronounced 'SED', not 'SAYD'. The most common pronunciation trap in English.",
    tipEs: "'Said' se pronuncia 'SED', no 'SAYD'. La trampa de pronunciación más común del inglés.",
  },
  {
    word: "thought",
    spanishStress: "thoht / thoog (silent letters confuse Spanish speakers)",
    englishStress: "THOT (silent 'gh', short vowel)",
    tip: "Silent 'gh'. Sounds exactly like 'THOT'. Same pattern in 'bought', 'brought', 'caught', 'taught'.",
    tipEs: "'gh' muda. Suena exactamente como 'THOT'. Mismo patrón en 'bought', 'brought', 'caught', 'taught'.",
  },
  {
    word: "brought",
    spanishStress: "broh-gat",
    englishStress: "BRAWT (one syllable, silent 'gh')",
    tip: "Same vowel as 'thought'. The 'aw' sound — like a doctor saying 'open up'.",
    tipEs: "Misma vocal que 'thought'. El sonido 'aw' — como un doctor diciendo 'open up'.",
  },
  {
    word: "was",
    spanishStress: "WAS (full pronunciation, stressed)",
    englishStress: "wuz (reduced in fast speech, sounds like 'wuz')",
    tip: "In fast speech, 'was' is reduced to 'wuz'. 'I was there' sounds like 'I wuz there'.",
    tipEs: "En habla rápida, 'was' se reduce a 'wuz'. 'I was there' suena como 'I wuz there'.",
  },
  {
    word: "were",
    spanishStress: "WERE (with the Spanish 'r')",
    englishStress: "wur (reduced, with the English R)",
    tip: "In fast speech, 'were' is reduced to 'wur'. The English R curls back; doesn't roll.",
    tipEs: "En habla rápida, 'were' se reduce a 'wur'. La R del inglés se curva; no vibra.",
  },
  {
    word: "read (past)",
    spanishStress: "REED (same as the present tense)",
    englishStress: "RED (rhymes with 'bed')",
    tip: "Spelled the same. Past tense is pronounced 'RED', not 'REED'. Context tells listeners which one you mean.",
    tipEs: "Se escribe igual. El pasado se pronuncia 'RED', no 'REED'. El contexto le dice al oyente cuál.",
  },
  {
    word: "didn't",
    spanishStress: "did-uhnt (over-pronounced)",
    englishStress: "DIDN'T (one syllable, contracted hard)",
    tip: "The 't' at the end is sharp. The whole contraction is fast — like one beat: 'DIDN'T'.",
    tipEs: "La 't' al final es aguda. Toda la contracción es rápida — como un solo golpe: 'DIDN'T'.",
  },
];

// ─── Section F: Vocabulary List for Self-Test ────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Daily 10
  { english: "went", spanish: "fui (ir)", type: "verb" },
  { english: "did", spanish: "hice (hacer)", type: "verb" },
  { english: "had", spanish: "tuve (tener)", type: "verb" },
  { english: "got", spanish: "obtuve (get)", type: "verb" },
  { english: "made", spanish: "hice/creé (make)", type: "verb" },
  { english: "said", spanish: "dije (decir)", type: "verb" },
  { english: "saw", spanish: "vi (ver)", type: "verb" },
  { english: "came", spanish: "vine (venir)", type: "verb" },
  { english: "took", spanish: "tomé (tomar)", type: "verb" },
  { english: "gave", spanish: "di (dar)", type: "verb" },
  // Story Verbs
  { english: "told", spanish: "dije/conté (tell)", type: "verb" },
  { english: "thought", spanish: "pensé", type: "verb" },
  { english: "knew", spanish: "supe/conocí", type: "verb" },
  { english: "found", spanish: "encontré", type: "verb" },
  { english: "left", spanish: "dejé/me fui", type: "verb" },
  { english: "felt", spanish: "sentí", type: "verb" },
  { english: "became", spanish: "me volví", type: "verb" },
  { english: "brought", spanish: "traje", type: "verb" },
  { english: "wrote", spanish: "escribí", type: "verb" },
  { english: "read (past)", spanish: "leí", type: "verb" },
  // Same-Form 10
  { english: "put", spanish: "puse", type: "verb" },
  { english: "cut", spanish: "corté", type: "verb" },
  { english: "hit", spanish: "golpeé", type: "verb" },
  { english: "let", spanish: "dejé/permití", type: "verb" },
  { english: "shut", spanish: "cerré", type: "verb" },
  { english: "cost", spanish: "costó", type: "verb" },
  { english: "hurt", spanish: "dolió/lastimé", type: "verb" },
  // Was/were forms
  { english: "I was", spanish: "yo era/estaba/fui", type: "phrase" },
  { english: "she was", spanish: "ella era/estaba/fue", type: "phrase" },
  { english: "we were", spanish: "estábamos/éramos", type: "phrase" },
  { english: "they were", spanish: "ellos estaban/eran", type: "phrase" },
  { english: "wasn't", spanish: "no era/estaba", type: "phrase" },
  { english: "weren't", spanish: "no éramos/eran", type: "phrase" },
  // Did/didn't structures
  { english: "Did you go?", spanish: "¿Fuiste?", type: "phrase" },
  { english: "I didn't go.", spanish: "No fui.", type: "phrase" },
  { english: "Yes, I did.", spanish: "Sí, fui.", type: "phrase" },
  { english: "No, I didn't.", spanish: "No, no fui.", type: "phrase" },
  // Time markers + sequencing
  { english: "yesterday morning", spanish: "ayer en la mañana", type: "marker" },
  { english: "after that", spanish: "después de eso", type: "marker" },
  { english: "then", spanish: "luego/entonces", type: "marker" },
  { english: "finally", spanish: "finalmente", type: "marker" },
];
