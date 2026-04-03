// Unit 9: "Telling Stories" — Full course content

import type { CognateWord, SentenceBlock, PronunciationDrill, VocabItem } from "./unit-1";

// ─── Section A: Cognate Discovery ────────────────────────────────────────────

export const cognateWaves = {
  wave1: {
    title: "Story Adjectives: -ous Expansion",
    titleEs: "Adjetivos para Historias: Expansión -ous",
    description:
      "You met -ous words in Unit 5. Now you get the storytelling set — words that describe dramatic moments, surprising twists, and memorable characters.",
    descriptionEs:
      "Conociste las palabras -ous en la Unidad 5. Ahora recibes el conjunto para contar historias — palabras que describen momentos dramáticos, giros sorprendentes y personajes memorables.",
    words: [
      {
        english: "dangerous",
        spanish: "peligroso",
        category: "-ous",
        pronunciationNote: "DAYN-jer-us — three syllables, stress on FIRST",
        pronunciationNoteEs: "DAYN-jer-us — tres sílabas, acento en la PRIMERA",
      },
      { english: "marvelous", spanish: "maravilloso", category: "-ous" },
      { english: "enormous", spanish: "enorme", category: "-ous" },
      { english: "courageous", spanish: "corajudo/valiente", category: "-ous" },
      { english: "glamorous", spanish: "glamoroso", category: "-ous" },
      { english: "adventurous", spanish: "aventurero", category: "-ous" },
      {
        english: "suspicious",
        spanish: "sospechoso",
        category: "-ous",
        pronunciationNote: "suh-SPISH-us — the 'ci' sounds like 'sh'",
        pronunciationNoteEs: "suh-SPISH-us — el 'ci' suena como 'sh'",
      },
      { english: "humorous", spanish: "humorístico", category: "-ous" },
      { english: "ambitious", spanish: "ambicioso", category: "-ous" },
      { english: "previous", spanish: "previo", category: "-ous" },
    ] as CognateWord[],
  },
  wave2: {
    title: "Past Tense Cognate Verbs",
    titleEs: "Verbos Cognados en Pasado",
    description:
      "These cognate verbs are perfect for storytelling. You already know the base form — now see how simple the past tense is. Just add -ed.",
    descriptionEs:
      "Estos verbos cognados son perfectos para contar historias. Ya conoces la forma base — ahora mira qué simple es el pasado. Solo agrega -ed.",
    words: [
      {
        english: "discovered → discovered",
        spanish: "descubrir → descubrió",
        category: "past verbs",
        pronunciationNote: "dis-CUV-erd — the -ed sounds like 'd'",
        pronunciationNoteEs: "dis-CUV-erd — el -ed suena como 'd'",
      },
      { english: "decided → decided", spanish: "decidir → decidió", category: "past verbs" },
      { english: "arrived → arrived", spanish: "llegar → llegó", category: "past verbs" },
      { english: "explained → explained", spanish: "explicar → explicó", category: "past verbs" },
      { english: "surprised → surprised", spanish: "sorprender → sorprendió", category: "past verbs" },
      { english: "happened → happened", spanish: "pasar/ocurrir → pasó", category: "past verbs" },
      {
        english: "changed → changed",
        spanish: "cambiar → cambió",
        category: "past verbs",
        pronunciationNote: "CHAINJD — one syllable! The -ed is just a 'd' sound",
        pronunciationNoteEs: "CHAINJD — ¡una sílaba! El -ed es solo un sonido 'd'",
      },
      { english: "started → started", spanish: "empezar → empezó", category: "past verbs" },
      { english: "finished → finished", spanish: "terminar → terminó", category: "past verbs" },
      { english: "used → used", spanish: "usar → usó", category: "past verbs" },
    ] as CognateWord[],
  },
  wave3: {
    title: "Time Words for Stories",
    titleEs: "Palabras de Tiempo para Historias",
    description:
      "Every good story needs a timeline. These time expressions set the scene and move the narrative forward.",
    descriptionEs:
      "Toda buena historia necesita una línea de tiempo. Estas expresiones temporales establecen la escena y avanzan la narrativa.",
    words: [
      {
        english: "yesterday",
        spanish: "ayer",
        category: "time",
        pronunciationNote: "YES-ter-day — stress on FIRST syllable",
        pronunciationNoteEs: "YES-ter-day — acento en la PRIMERA sílaba",
      },
      { english: "last week", spanish: "la semana pasada", category: "time" },
      { english: "last year", spanish: "el año pasado", category: "time" },
      { english: "a long time ago", spanish: "hace mucho tiempo", category: "time" },
      { english: "suddenly", spanish: "de repente", category: "time" },
      { english: "finally", spanish: "finalmente", category: "time" },
      {
        english: "at first",
        spanish: "al principio",
        category: "time",
        pronunciationNote: "at FERST — the 'ir' sounds like 'er'",
        pronunciationNoteEs: "at FERST — el 'ir' suena como 'er'",
      },
      { english: "then / after that", spanish: "luego / después de eso", category: "time" },
      { english: "when I was", spanish: "cuando yo era/estaba", category: "time" },
      { english: "before / after", spanish: "antes / después", category: "time" },
    ] as CognateWord[],
  },
};

// ─── Section B: Was / Were / Wasn't / Weren't ──────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "It was / It wasn't",
    labelEs: "Era / Estaba / No era / No estaba",
    description:
      "'Was' is the past of 'is.' 'It was good' = fue bueno / estaba bueno. 'It wasn't' = no fue / no estaba. You already used 'it was' in Unit 2 — now we go deeper.",
    descriptionEs:
      "'Was' es el pasado de 'is.' 'It was good' = fue bueno / estaba bueno. 'It wasn't' = no fue / no estaba. Ya usaste 'it was' en la Unidad 2 — ahora profundizamos.",
    sentences: [
      {
        english: "It was impossible yesterday.",
        spanish: "Era imposible ayer.",
        highlight: "It was",
      },
      {
        english: "It wasn't easy but we did it.",
        spanish: "No fue fácil pero lo hicimos.",
        highlight: "wasn't",
      },
      {
        english: "The restaurant was enormous and the food was marvelous.",
        spanish: "El restaurante era enorme y la comida era maravillosa.",
      },
      {
        english: "It was suspicious because nobody wanted to explain what happened.",
        spanish: "Era sospechoso porque nadie quería explicar qué pasó.",
        highlight: "suspicious",
      },
      {
        english: "It wasn't dangerous but everyone was nervous.",
        spanish: "No era peligroso pero todos estaban nerviosos.",
      },
    ],
  },
  {
    label: "I was / He was / She was / We were / They were",
    labelEs: "Yo era-estaba / Él era / Ella era / Nosotros éramos / Ellos eran",
    description:
      "'Was' goes with I, he, she, it. 'Were' goes with you, we, they. That's the only change. 'I was there' = yo estaba allí. 'We were there' = nosotros estábamos allí.",
    descriptionEs:
      "'Was' va con I, he, she, it. 'Were' va con you, we, they. Ese es el único cambio. 'I was there' = yo estaba allí. 'We were there' = nosotros estábamos allí.",
    sentences: [
      {
        english: "I was at the party last night.",
        spanish: "Yo estaba en la fiesta anoche.",
        highlight: "I was",
      },
      {
        english: "She was surprised when I told her the truth.",
        spanish: "Ella se sorprendió cuando le dije la verdad.",
        highlight: "was surprised",
      },
      {
        english: "We were there every day last week.",
        spanish: "Estábamos allí todos los días la semana pasada.",
        highlight: "We were",
      },
      {
        english: "They were nervous because nobody explained the problem.",
        spanish: "Estaban nerviosos porque nadie explicó el problema.",
        highlight: "They were",
      },
      {
        english: "He was ambitious and she was adventurous — that's why they started the company together.",
        spanish: "Él era ambicioso y ella era aventurera — por eso empezaron la empresa juntos.",
        highlight: "that's why",
      },
    ],
  },
  {
    label: "I used to / I didn't use to",
    labelEs: "Yo solía / Yo no solía",
    description:
      "'I used to' describes something you did regularly in the past but don't do anymore. 'I used to work here' = yo solía trabajar aquí (but I don't now). It always implies change.",
    descriptionEs:
      "'I used to' describe algo que hacías regularmente en el pasado pero ya no haces. 'I used to work here' = yo solía trabajar aquí (pero ya no). Siempre implica cambio.",
    sentences: [
      {
        english: "I used to work here.",
        spanish: "Yo solía trabajar aquí.",
        highlight: "I used to",
      },
      {
        english: "I used to think it was impossible but now I know it's possible.",
        spanish: "Solía pensar que era imposible pero ahora sé que es posible.",
      },
      {
        english: "She used to live here a long time ago.",
        spanish: "Ella solía vivir aquí hace mucho tiempo.",
        highlight: "a long time ago",
      },
      {
        english: "We used to have dinner there every day but the restaurant changed.",
        spanish: "Solíamos cenar allí todos los días pero el restaurante cambió.",
        highlight: "changed",
      },
      {
        english: "They used to be friends but something happened and now nobody knows why.",
        spanish: "Solían ser amigos pero algo pasó y ahora nadie sabe por qué.",
      },
    ],
  },
];

// ─── Section C: Storytelling Structures ────────────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "told me / said (that)",
    labelEs: "me dijo / dijo (que)",
    description:
      "'Told' needs an object: 'She told ME.' 'Said' doesn't: 'She said (that)...' Both report what someone communicated. 'Told' is for direct recipients; 'said' is for quoting.",
    descriptionEs:
      "'Told' necesita un objeto: 'She told ME.' 'Said' no: 'She said (that)...' Ambos reportan lo que alguien comunicó. 'Told' es para destinatarios directos; 'said' es para citar.",
    sentences: [
      {
        english: "She told me what happened.",
        spanish: "Ella me dijo qué pasó.",
        highlight: "told me",
      },
      {
        english: "He said that he was at the party last night.",
        spanish: "Él dijo que estaba en la fiesta anoche.",
        highlight: "said that",
      },
      {
        english: "They told us the truth about the problem.",
        spanish: "Nos dijeron la verdad sobre el problema.",
        highlight: "told us",
      },
      {
        english: "Someone told me that the restaurant used to be famous.",
        spanish: "Alguien me dijo que el restaurante solía ser famoso.",
      },
      {
        english: "She said that nobody wanted to go because it was too dangerous.",
        spanish: "Ella dijo que nadie quería ir porque era muy peligroso.",
      },
    ],
  },
  {
    label: "that's why / because",
    labelEs: "por eso / porque",
    description:
      "'That's why' explains the consequence — it points forward. 'Because' explains the cause — it points backward. 'He was tired — THAT'S WHY he left.' 'He left BECAUSE he was tired.'",
    descriptionEs:
      "'That's why' explica la consecuencia — apunta hacia adelante. 'Because' explica la causa — apunta hacia atrás. 'Estaba cansado — POR ESO se fue.' 'Se fue PORQUE estaba cansado.'",
    sentences: [
      {
        english: "That's why nobody wanted to be there.",
        spanish: "Por eso nadie quería estar allí.",
        highlight: "That's why",
      },
      {
        english: "I was nervous because everyone was looking at me.",
        spanish: "Estaba nervioso porque todos me miraban.",
        highlight: "because",
      },
      {
        english: "The food was terrible — that's why we decided to leave.",
        spanish: "La comida era terrible — por eso decidimos irnos.",
      },
      {
        english: "She didn't tell him because she was afraid of his reaction.",
        spanish: "Ella no le dijo porque tenía miedo de su reacción.",
        highlight: "afraid of",
      },
      {
        english: "He used to be suspicious of everyone and that's why nobody wanted to work with him.",
        spanish: "Solía ser sospechoso de todos y por eso nadie quería trabajar con él.",
      },
    ],
  },
  {
    label: "When I was... / At first... / Finally...",
    labelEs: "Cuando yo era... / Al principio... / Finalmente...",
    description:
      "Story structure: 'When I was' sets the time. 'At first' introduces the starting point. 'Then' moves the story forward. 'Finally' delivers the ending. These are the building blocks of every narrative.",
    descriptionEs:
      "Estructura de historia: 'When I was' establece el tiempo. 'At first' introduce el punto de partida. 'Then' avanza la historia. 'Finally' entrega el final. Estos son los bloques de construcción de toda narrativa.",
    sentences: [
      {
        english: "When I was young, I used to think everything was simple.",
        spanish: "Cuando era joven, solía pensar que todo era simple.",
        highlight: "When I was",
      },
      {
        english: "At first nobody believed him, but then she explained what happened.",
        spanish: "Al principio nadie le creyó, pero luego ella explicó qué pasó.",
        highlight: "At first",
      },
      {
        english: "We waited all day. Finally, someone told us the truth.",
        spanish: "Esperamos todo el día. Finalmente, alguien nos dijo la verdad.",
        highlight: "Finally",
      },
      {
        english: "Suddenly everyone was talking about it.",
        spanish: "De repente todos hablaban de eso.",
        highlight: "Suddenly",
      },
      {
        english: "When I was at the party last week, I discovered something surprising about him — he used to be famous.",
        spanish: "Cuando estaba en la fiesta la semana pasada, descubrí algo sorprendente sobre él — solía ser famoso.",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "Building a Narrative",
  titleEs: "Construyendo una Narrativa",
  description:
    "Story connectors that build suspense, explain causes, and move the plot forward — that's why, at first, suddenly, finally, when I was.",
  descriptionEs:
    "Conectores narrativos que crean suspenso, explican causas y avanzan la trama — por eso, al principio, de repente, finalmente, cuando yo era.",
  connectors: [
    {
      word: "that's why",
      wordEs: "por eso",
      example: {
        english: "It was dangerous — that's why we decided not to go.",
        spanish: "Era peligroso — por eso decidimos no ir.",
      },
    },
    {
      word: "at first... but then",
      wordEs: "al principio... pero luego",
      example: {
        english: "At first I was nervous, but then I discovered that everyone was friendly.",
        spanish: "Al principio estaba nervioso, pero luego descubrí que todos eran amables.",
      },
    },
    {
      word: "suddenly",
      wordEs: "de repente",
      example: {
        english: "Everything was normal. Suddenly, she told us she used to be a famous singer.",
        spanish: "Todo era normal. De repente, nos dijo que solía ser una cantante famosa.",
      },
    },
    {
      word: "finally",
      wordEs: "finalmente",
      example: {
        english: "Nobody wanted to explain. Finally, he told me the truth.",
        spanish: "Nadie quería explicar. Finalmente, me dijo la verdad.",
      },
    },
    {
      word: "a long time ago",
      wordEs: "hace mucho tiempo",
      example: {
        english: "A long time ago, this used to be an enormous and glamorous hotel.",
        spanish: "Hace mucho tiempo, esto solía ser un hotel enorme y glamoroso.",
      },
    },
  ],
  bossSentence: {
    english:
      "When I was at the party last week, at first nobody wanted to talk about what happened, but suddenly someone told me the truth — he used to be famous, and that's why everyone was so nervous. Finally, I understood everything.",
    spanish:
      "Cuando estaba en la fiesta la semana pasada, al principio nadie quería hablar de lo que pasó, pero de repente alguien me dijo la verdad — solía ser famoso, y por eso todos estaban tan nerviosos. Finalmente, entendí todo.",
  },
};

// ─── Section E: Pronunciation Drills — The R Sound ───────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "restaurant / remember",
    spanishStress: "res-tau-RAN-te / re-mem-BRAR",
    englishStress: "RES-tront / re-MEM-ber",
    tip: "The English R is NOT trilled or rolled like the Spanish R. Your tongue should NOT touch the roof of your mouth. Instead, curl your tongue slightly back without touching anything. The tip hovers in mid-air. This is the #1 difference between a Spanish accent and an American accent.",
    tipEs: "La R en inglés NO se pronuncia con vibración como la R española. Tu lengua NO debe tocar el paladar. En cambio, curva tu lengua ligeramente hacia atrás sin tocar nada. La punta queda suspendida en el aire. Esta es la diferencia #1 entre un acento español y un acento americano.",
  },
  {
    word: "were / where / work",
    spanishStress: "guer / guer / guork",
    englishStress: "WER / WEHR / WERK",
    tip: "These combine the W sound (from Unit 7) with the R sound. Start with rounded lips for W, then curl the tongue back for R. 'Were' and 'where' sound almost identical in fast speech — the difference is subtle. 'Work' = WERK (the 'or' sounds like 'er').",
    tipEs: "Estas combinan el sonido W (de la Unidad 7) con el sonido R. Empieza con labios redondeados para la W, luego curva la lengua hacia atrás para la R. 'Were' y 'where' suenan casi idénticos en habla rápida — la diferencia es sutil. 'Work' = WERK (el 'or' suena como 'er').",
  },
  {
    word: "the schwa in 'er' endings",
    spanishStress: "teach-ER / driv-ER / nev-ER",
    englishStress: "TEACH-er / DRIV-er / NEV-er — the 'er' is lazy",
    tip: "The most common sound in English is the schwa — a lazy, relaxed 'uh' sound. In 'er' endings, it combines with R to make a sound that doesn't exist in Spanish: 'er' (like the 'ir' in 'bird'). Don't say a clear 'e' — let it be lazy and blurry.",
    tipEs: "El sonido más común en inglés es el schwa — un sonido 'uh' flojo y relajado. En las terminaciones 'er', se combina con R para hacer un sonido que no existe en español: 'er' (como el 'ir' en 'bird'). No digas una 'e' clara — déjala ser floja y borrosa.",
  },
  {
    word: "surprised / discovered",
    spanishStress: "sur-PRAISD / dis-CUV-erd",
    englishStress: "ser-PRIZED / dis-CUV-erd",
    tip: "Both words have the R + schwa combination. 'Surprised' — the first syllable is 'ser' (not 'sur'), then PRIZED. 'Discovered' — dis-CUV-erd, the 'er' at the end is that lazy schwa-R sound. These are key storytelling words, so get them smooth.",
    tipEs: "Ambas palabras tienen la combinación R + schwa. 'Surprised' — la primera sílaba es 'ser' (no 'sur'), luego PRIZED. 'Discovered' — dis-CUV-erd, el 'er' al final es ese sonido flojo schwa-R. Son palabras clave para contar historias, así que practícalas hasta que fluyan.",
  },
  {
    word: "story / sorry / started",
    spanishStress: "STOR-ee / SOR-ee / STAR-ted",
    englishStress: "STOR-ee / SAR-ee / STAR-ted",
    tip: "'Story' has the long 'or' sound (STOR-ee). 'Sorry' — Americans say SAR-ee (rhymes with 'far'), not SOR-ee. 'Started' — STAR-ted, two syllables with the -ed pronounced as a separate syllable because the base word ends in T.",
    tipEs: "'Story' tiene el sonido largo 'or' (STOR-ee). 'Sorry' — los americanos dicen SAR-ee (rima con 'far'), no SOR-ee. 'Started' — STAR-ted, dos sílabas con el -ed pronunciado como sílaba separada porque la palabra base termina en T.",
  },
  {
    word: "used to / used",
    spanishStress: "YUSD-tu / YUZD",
    englishStress: "YOOS-tuh / YOOZD — different sounds!",
    tip: "Careful: 'used TO' (the habit structure) sounds like 'YOOS-tuh' — the S is unvoiced, and 'to' reduces to 'tuh.' But 'used' as a past tense verb sounds like 'YOOZD' — the S is voiced (buzzing Z). Two different pronunciations for the same spelling.",
    tipEs: "Cuidado: 'used TO' (la estructura de hábito) suena como 'YOOS-tuh' — la S es sorda, y 'to' se reduce a 'tuh.' Pero 'used' como verbo en pasado suena como 'YOOZD' — la S es sonora (Z vibrante). Dos pronunciaciones diferentes para la misma escritura.",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Past tense structures
  { english: "it was / it wasn't", spanish: "era / no era", type: "modal" },
  { english: "I was / he was / she was", spanish: "yo era / él era / ella era", type: "modal" },
  { english: "we were / they were", spanish: "nosotros éramos / ellos eran", type: "modal" },
  { english: "I used to", spanish: "yo solía", type: "modal" },
  { english: "told me / told us", spanish: "me dijo / nos dijo", type: "modal" },
  { english: "said (that)", spanish: "dijo (que)", type: "modal" },

  // Story connectors
  { english: "that's why", spanish: "por eso", type: "phrase" },
  { english: "at first", spanish: "al principio", type: "phrase" },
  { english: "suddenly", spanish: "de repente", type: "word" },
  { english: "finally", spanish: "finalmente", type: "word" },
  { english: "then / after that", spanish: "luego / después de eso", type: "phrase" },
  { english: "a long time ago", spanish: "hace mucho tiempo", type: "phrase" },
  { english: "when I was", spanish: "cuando yo era", type: "phrase" },

  // Time words
  { english: "yesterday", spanish: "ayer", type: "word" },
  { english: "last week", spanish: "la semana pasada", type: "word" },
  { english: "last year", spanish: "el año pasado", type: "word" },
  { english: "before / after", spanish: "antes / después", type: "word" },

  // Key verbs (past)
  { english: "discovered", spanish: "descubrió", type: "verb" },
  { english: "decided", spanish: "decidió", type: "verb" },
  { english: "explained", spanish: "explicó", type: "verb" },
  { english: "changed", spanish: "cambió", type: "verb" },
  { english: "happened", spanish: "pasó", type: "verb" },
  { english: "surprised", spanish: "sorprendió", type: "verb" },
  { english: "started / finished", spanish: "empezó / terminó", type: "verb" },

  // Story adjectives
  { english: "dangerous", spanish: "peligroso", type: "word" },
  { english: "enormous", spanish: "enorme", type: "word" },
  { english: "marvelous", spanish: "maravilloso", type: "word" },
  { english: "suspicious", spanish: "sospechoso", type: "word" },
  { english: "famous", spanish: "famoso", type: "word" },
  { english: "young", spanish: "joven", type: "word" },
  { english: "afraid of", spanish: "con miedo de", type: "phrase" },
];
