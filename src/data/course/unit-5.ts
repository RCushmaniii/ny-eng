// Unit 5: "What Just Happened" — Full course content

import type { CognateWord, SentenceBlock, PronunciationDrill, VocabItem } from "./unit-1";

// ─── Section A: Cognate Discovery ────────────────────────────────────────────

export const cognateWaves = {
  wave1: {
    title: "The -sion Pattern",
    titleEs: "El Patrón -sion",
    description:
      "Spanish -sión becomes English -sion. You already know dozens of these from news, work, and daily life.",
    descriptionEs:
      "El español -sión se convierte en -sion en inglés. Ya conoces docenas de estas por las noticias, el trabajo y la vida diaria.",
    words: [
      {
        english: "decision",
        spanish: "decisión",
        category: "-sion",
        pronunciationNote: "de-CI-sion — stress on second syllable, 'zh' sound",
        pronunciationNoteEs: "de-CI-sion — acento en la segunda sílaba, sonido 'zh'",
      },
      { english: "version", spanish: "versión", category: "-sion" },
      { english: "occasion", spanish: "ocasión", category: "-sion" },
      { english: "television", spanish: "televisión", category: "-sion" },
      { english: "explosion", spanish: "explosión", category: "-sion" },
      { english: "conclusion", spanish: "conclusión", category: "-sion" },
      { english: "confusion", spanish: "confusión", category: "-sion" },
      {
        english: "permission",
        spanish: "permiso",
        category: "-sion",
        pronunciationNote: "per-MI-ssion — the ending sounds like 'shun'",
        pronunciationNoteEs: "per-MI-ssion — el final suena como 'shun'",
      },
      { english: "profession", spanish: "profesión", category: "-sion" },
      { english: "impression", spanish: "impresión", category: "-sion" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The -ive Pattern",
    titleEs: "El Patrón -ive",
    description:
      "Spanish -ivo/-iva becomes English -ive. These describe qualities and are used constantly in professional English.",
    descriptionEs:
      "El español -ivo/-iva se convierte en -ive en inglés. Describen cualidades y se usan constantemente en el inglés profesional.",
    words: [
      {
        english: "active",
        spanish: "activo",
        category: "-ive",
        pronunciationNote: "AC-tive — stress on FIRST syllable",
        pronunciationNoteEs: "AC-tive — acento en la PRIMERA sílaba",
      },
      { english: "positive", spanish: "positivo", category: "-ive" },
      { english: "negative", spanish: "negativo", category: "-ive" },
      { english: "creative", spanish: "creativo", category: "-ive" },
      { english: "exclusive", spanish: "exclusivo", category: "-ive" },
      { english: "progressive", spanish: "progresivo", category: "-ive" },
      { english: "productive", spanish: "productivo", category: "-ive" },
      { english: "objective", spanish: "objetivo", category: "-ive" },
      { english: "effective", spanish: "efectivo", category: "-ive" },
      { english: "alternative", spanish: "alternativo", category: "-ive" },
    ] as CognateWord[],
  },
  wave3: {
    title: "The -ous Pattern",
    titleEs: "El Patrón -ous",
    description:
      "Spanish -oso/-osa becomes English -ous. Delicious, famous, curious — you use these words every day.",
    descriptionEs:
      "El español -oso/-osa se convierte en -ous en inglés. Delicioso, famoso, curioso — usas estas palabras todos los días.",
    words: [
      { english: "famous", spanish: "famoso", category: "-ous" },
      { english: "delicious", spanish: "delicioso", category: "-ous" },
      { english: "curious", spanish: "curioso", category: "-ous" },
      { english: "generous", spanish: "generoso", category: "-ous" },
      { english: "nervous", spanish: "nervioso", category: "-ous" },
      {
        english: "dangerous",
        spanish: "peligroso",
        category: "-ous",
        pronunciationNote: "DANE-jer-us — three syllables, not four",
        pronunciationNoteEs: "DANE-jer-us — tres sílabas, no cuatro",
      },
      { english: "mysterious", spanish: "misterioso", category: "-ous" },
      { english: "furious", spanish: "furioso", category: "-ous" },
      { english: "religious", spanish: "religioso", category: "-ous" },
      { english: "ambitious", spanish: "ambicioso", category: "-ous" },
    ] as CognateWord[],
  },
};

// ─── Section B: I just / He just / She just ─────────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "I just (+ verb)",
    labelEs: "Acabo de (+ verbo)",
    description:
      "'I just' means something happened very recently — minutes or hours ago. In Spanish: 'acabo de'. This is one of the most useful structures in English.",
    descriptionEs:
      "'I just' significa que algo pasó muy recientemente — hace minutos u horas. En español: 'acabo de'. Es una de las estructuras más útiles en inglés.",
    sentences: [
      {
        english: "I just ate.",
        spanish: "Acabo de comer.",
        highlight: "just",
      },
      {
        english: "I just arrived.",
        spanish: "Acabo de llegar.",
        highlight: "just arrived",
      },
      {
        english: "I just found out.",
        spanish: "Acabo de enterarme.",
        highlight: "found out",
      },
      {
        english: "I just found out the truth today.",
        spanish: "Acabo de descubrir la verdad hoy.",
      },
      {
        english: "I just saw her at the party.",
        spanish: "Acabo de verla en la fiesta.",
        highlight: "saw her",
      },
    ],
  },
  {
    label: "He/She just",
    labelEs: "Él/Ella acaba de",
    description:
      "Same structure for third person. 'He just told me' = 'Él me acaba de decir'. Notice: the verb after 'just' is in past tense.",
    descriptionEs:
      "La misma estructura para tercera persona. 'He just told me' = 'Él me acaba de decir'. Nota: el verbo después de 'just' está en pasado.",
    sentences: [
      {
        english: "He just called me.",
        spanish: "Él me acaba de llamar.",
        highlight: "He just",
      },
      {
        english: "She just told me the truth.",
        spanish: "Ella me acaba de decir la verdad.",
        highlight: "She just",
      },
      {
        english: "He just arrived at the house.",
        spanish: "Él acaba de llegar a la casa.",
        highlight: "at the house",
      },
      {
        english: "She just found out about the problem.",
        spanish: "Ella acaba de enterarse del problema.",
        highlight: "about the problem",
      },
      {
        english: "He just told me he can't be here tomorrow.",
        spanish: "Él me acaba de decir que no puede estar aquí mañana.",
      },
    ],
  },
  {
    label: "Combining 'just' with everything",
    labelEs: "Combinando 'just' con todo",
    description:
      "Now build complex sentences: 'just' + modal verbs + indirect objects + connectors from previous units.",
    descriptionEs:
      "Ahora construye oraciones complejas: 'just' + verbos modales + objetos indirectos + conectores de unidades anteriores.",
    sentences: [
      {
        english: "I just found out that I have to work tonight.",
        spanish: "Acabo de enterarme de que tengo que trabajar esta noche.",
        highlight: "that",
      },
      {
        english: "She just told me she wants to go with him.",
        spanish: "Ella me acaba de decir que quiere ir con él.",
        highlight: "with him",
      },
      {
        english: "He just told me he can't be here tomorrow because he has to work.",
        spanish: "Él me acaba de decir que no puede estar aquí mañana porque tiene que trabajar.",
      },
      {
        english: "I just saw her at the party last night.",
        spanish: "Acabo de verla en la fiesta anoche.",
        highlight: "at the party",
      },
      {
        english: "I would like to go with you but I can't because I just found out I have to be here all day.",
        spanish: "Me gustaría ir contigo pero no puedo porque acabo de enterarme de que tengo que estar aquí todo el día.",
      },
    ],
  },
];

// ─── Section C: Key Verbs in Past Tense ─────────────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "Discover / Find out",
    labelEs: "Descubrir / Enterarse",
    description:
      "'Find out' means to discover information. It's more natural than 'discover' in conversation. Past: 'found out'.",
    descriptionEs:
      "'Find out' significa descubrir información. Es más natural que 'discover' en conversación. Pasado: 'found out'.",
    sentences: [
      {
        english: "I just found out about the problem.",
        spanish: "Acabo de enterarme del problema.",
        highlight: "found out about",
      },
      {
        english: "She just found out the truth about him.",
        spanish: "Ella acaba de descubrir la verdad sobre él.",
        highlight: "about him",
      },
      {
        english: "I found out yesterday that he can't do it.",
        spanish: "Me enteré ayer de que él no puede hacerlo.",
      },
      {
        english: "He found out about the problem at the party last night.",
        spanish: "Él se enteró del problema en la fiesta anoche.",
        highlight: "at the party",
      },
      {
        english: "I just found out that she wants to tell you something important.",
        spanish: "Acabo de descubrir que ella quiere decirte algo importante.",
      },
    ],
  },
  {
    label: "Arrive / See / Leave",
    labelEs: "Llegar / Ver / Salir",
    description:
      "Three essential verbs for narrating events. Past forms: arrived, saw, left.",
    descriptionEs:
      "Tres verbos esenciales para narrar eventos. Formas en pasado: arrived, saw, left.",
    sentences: [
      {
        english: "He just arrived at the house.",
        spanish: "Él acaba de llegar a la casa.",
        highlight: "arrived at",
      },
      {
        english: "I just saw him with her at the party.",
        spanish: "Acabo de verlo con ella en la fiesta.",
        highlight: "saw him",
      },
      {
        english: "She left the house because she was nervous.",
        spanish: "Ella salió de la casa porque estaba nerviosa.",
        highlight: "left",
      },
      {
        english: "I arrived late and she was furious.",
        spanish: "Llegué tarde y ella estaba furiosa.",
        highlight: "furious",
      },
      {
        english: "He just left and I need to talk to him about the problem.",
        spanish: "Él acaba de irse y necesito hablar con él sobre el problema.",
      },
    ],
  },
  {
    label: "Putting it all together",
    labelEs: "Poniendo todo junto",
    description:
      "Complex narratives combining 'just' with past events, indirect objects, and all your vocabulary.",
    descriptionEs:
      "Narrativas complejas combinando 'just' con eventos pasados, objetos indirectos y todo tu vocabulario.",
    sentences: [
      {
        english: "I just found out something very important about him.",
        spanish: "Acabo de descubrir algo muy importante sobre él.",
      },
      {
        english: "She just told me that he arrived at the house last night.",
        spanish: "Ella me acaba de decir que él llegó a la casa anoche.",
      },
      {
        english: "I just saw her and she told me the truth about what happened.",
        spanish: "Acabo de verla y me dijo la verdad sobre qué pasó.",
        highlight: "about what happened",
      },
      {
        english: "He was curious about the problem and he just found out the truth.",
        spanish: "Él tenía curiosidad sobre el problema y acaba de descubrir la verdad.",
        highlight: "curious",
      },
      {
        english: "I can't go with you tonight because I just found out I have to be at the house all day and it's very important.",
        spanish: "No puedo ir contigo esta noche porque acabo de enterarme de que tengo que estar en la casa todo el día y es muy importante.",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "Narrating Recent Events",
  titleEs: "Narrando Eventos Recientes",
  description:
    "Words that let you tell stories about what just happened — about, the problem, at the party, with him/her, all day.",
  descriptionEs:
    "Palabras que te permiten contar historias sobre lo que acaba de pasar — sobre, el problema, en la fiesta, con él/ella, todo el día.",
  connectors: [
    {
      word: "about",
      wordEs: "sobre / acerca de",
      example: {
        english: "I just found out about the problem.",
        spanish: "Acabo de enterarme del problema.",
      },
    },
    {
      word: "the problem",
      wordEs: "el problema",
      example: {
        english: "She told me about the problem last night.",
        spanish: "Ella me contó del problema anoche.",
      },
    },
    {
      word: "the house",
      wordEs: "la casa",
      example: {
        english: "He just arrived at the house.",
        spanish: "Él acaba de llegar a la casa.",
      },
    },
    {
      word: "at the party",
      wordEs: "en la fiesta",
      example: {
        english: "I just saw her at the party.",
        spanish: "Acabo de verla en la fiesta.",
      },
    },
    {
      word: "with him / with her",
      wordEs: "con él / con ella",
      example: {
        english: "I just saw him with her at the party.",
        spanish: "Acabo de verlo con ella en la fiesta.",
      },
    },
    {
      word: "all day",
      wordEs: "todo el día",
      example: {
        english: "I have to be here all day.",
        spanish: "Tengo que estar aquí todo el día.",
      },
    },
  ],
  bossSentence: {
    english:
      "I just found out about the problem at the party last night and she told me the truth about what happened with him, and now I have to be at the house all day because it's very important.",
    spanish:
      "Acabo de enterarme del problema en la fiesta anoche y ella me dijo la verdad sobre qué pasó con él, y ahora tengo que estar en la casa todo el día porque es muy importante.",
  },
};

// ─── Section E: Pronunciation Drills — Past tense -ed endings ───────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "arrived (d)",
    spanishStress: "a-RRAIVD",
    englishStress: "a-RIVED — ends with /d/ sound",
    tip: "When a verb ends in a voiced sound (b, g, v, z, m, n, l, r, or a vowel), the -ed sounds like /d/. 'Arrived' = a-RIVED, NOT 'a-rive-ed'. One quick /d/ at the end.",
    tipEs: "Cuando un verbo termina en un sonido sonoro (b, g, v, z, m, n, l, r, o una vocal), la -ed suena como /d/. 'Arrived' = a-RIVED, NO 'a-rive-ed'. Un /d/ rápido al final.",
  },
  {
    word: "called (d)",
    spanishStress: "COLD",
    englishStress: "CALD — one syllable with /d/",
    tip: "'Called' is one syllable: CALD. Not 'call-ed'. The -ed is just a quick /d/ added to the end. Same pattern: lived, discovered, arrived.",
    tipEs: "'Called' es una sílaba: CALD. No 'call-ed'. La -ed es solo un /d/ rápido al final. Mismo patrón: lived, discovered, arrived.",
  },
  {
    word: "worked (t)",
    spanishStress: "WERKT",
    englishStress: "WERKT — ends with /t/ sound",
    tip: "When a verb ends in a voiceless sound (p, k, f, s, sh, ch), the -ed sounds like /t/. 'Worked' = WERKT. Not 'work-ed'. Same: talked, watched, stopped.",
    tipEs: "Cuando un verbo termina en un sonido sordo (p, k, f, s, sh, ch), la -ed suena como /t/. 'Worked' = WERKT. No 'work-ed'. Igual: talked, watched, stopped.",
  },
  {
    word: "left (irregular)",
    spanishStress: "LEFT",
    englishStress: "LEFT — irregular past, no -ed",
    tip: "'Leave' becomes 'left' in past tense — no -ed needed. Some of the most common verbs are irregular: see→saw, tell→told, find→found, eat→ate, go→went.",
    tipEs: "'Leave' se convierte en 'left' en pasado — no necesita -ed. Algunos de los verbos más comunes son irregulares: see→saw, tell→told, find→found, eat→ate, go→went.",
  },
  {
    word: "wanted (ɪd)",
    spanishStress: "WON-ted",
    englishStress: "WAN-tid — two syllables with /ɪd/",
    tip: "When a verb ends in /t/ or /d/, the -ed becomes a full extra syllable: /ɪd/. 'Wanted' = WAN-tid. 'Needed' = NEE-did. 'Decided' = de-SY-did. This is the ONLY time -ed adds a syllable.",
    tipEs: "Cuando un verbo termina en /t/ o /d/, la -ed se convierte en una sílaba extra: /ɪd/. 'Wanted' = WAN-tid. 'Needed' = NEE-did. 'Decided' = de-SY-did. Esta es la ÚNICA vez que -ed agrega una sílaba.",
  },
  {
    word: "decided (ɪd)",
    spanishStress: "de-SAI-ded",
    englishStress: "de-SY-did — three syllables",
    tip: "Since 'decide' already ends in a /d/ sound, you MUST add the extra syllable: de-SY-did. If you say 'de-SIDED' it sounds wrong. Listen for the three clear syllables.",
    tipEs: "Como 'decide' ya termina en un sonido /d/, DEBES agregar la sílaba extra: de-SY-did. Si dices 'de-SIDED' suena mal. Escucha las tres sílabas claras.",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // "Just" constructions
  { english: "I just (+ past verb)", spanish: "acabo de (+ infinitivo)", type: "modal" },
  { english: "he/she just", spanish: "acaba de", type: "modal" },
  { english: "I just ate", spanish: "acabo de comer", type: "phrase" },
  { english: "I just arrived", spanish: "acabo de llegar", type: "phrase" },
  { english: "I just found out", spanish: "acabo de enterarme", type: "phrase" },

  // Key verbs (past forms)
  { english: "to find out / found out", spanish: "enterarse / descubrir", type: "verb" },
  { english: "to arrive / arrived", spanish: "llegar / llegó", type: "verb" },
  { english: "to see / saw", spanish: "ver / vio", type: "verb" },
  { english: "to leave / left", spanish: "salir / salió", type: "verb" },
  { english: "to discover / discovered", spanish: "descubrir / descubrió", type: "verb" },

  // Key vocabulary
  { english: "about", spanish: "sobre / acerca de", type: "word" },
  { english: "the problem", spanish: "el problema", type: "phrase" },
  { english: "the house", spanish: "la casa", type: "phrase" },
  { english: "at the party", spanish: "en la fiesta", type: "phrase" },
  { english: "with him", spanish: "con él", type: "phrase" },
  { english: "with her", spanish: "con ella", type: "phrase" },
  { english: "that (conjunction)", spanish: "que", type: "word" },
  { english: "all day", spanish: "todo el día", type: "phrase" },

  // Review from previous units
  { english: "the truth", spanish: "la verdad", type: "phrase" },
  { english: "what happened", spanish: "qué pasó", type: "phrase" },
  { english: "last night", spanish: "anoche", type: "word" },
  { english: "because", spanish: "porque", type: "word" },
  { english: "tonight", spanish: "esta noche", type: "word" },
  { english: "I have to", spanish: "tengo que", type: "modal" },
  { english: "he/she has to", spanish: "tiene que", type: "modal" },
  { english: "I would like", spanish: "me gustaría", type: "modal" },
  { english: "for me", spanish: "para mí", type: "phrase" },
];
