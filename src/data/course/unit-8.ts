// Unit 8: "Feelings and Curiosity" — Full course content

import type { CognateWord, SentenceBlock, PronunciationDrill, VocabItem } from "./unit-1";

// ─── Section A: Cognate Discovery ────────────────────────────────────────────

export const cognateWaves = {
  wave1: {
    title: "The -ence Pattern",
    titleEs: "El Patrón -ence",
    description:
      "Spanish -encia becomes English -ence. These are powerful abstract nouns — the kind of words that make you sound educated and precise.",
    descriptionEs:
      "El español -encia se convierte en -ence en inglés. Son sustantivos abstractos poderosos — el tipo de palabras que te hacen sonar educado y preciso.",
    words: [
      {
        english: "experience",
        spanish: "experiencia",
        category: "-ence",
        pronunciationNote: "ek-SPEER-ee-ens — stress on SECOND syllable",
        pronunciationNoteEs: "ek-SPEER-ee-ens — acento en la SEGUNDA sílaba",
      },
      { english: "confidence", spanish: "confianza", category: "-ence" },
      { english: "patience", spanish: "paciencia", category: "-ence" },
      { english: "difference", spanish: "diferencia", category: "-ence" },
      { english: "reference", spanish: "referencia", category: "-ence" },
      { english: "preference", spanish: "preferencia", category: "-ence" },
      { english: "existence", spanish: "existencia", category: "-ence" },
      {
        english: "intelligence",
        spanish: "inteligencia",
        category: "-ence",
        pronunciationNote: "in-TEL-ih-jens — the 'g' sounds like 'j'",
        pronunciationNoteEs: "in-TEL-ih-jens — la 'g' suena como 'j'",
      },
      { english: "independence", spanish: "independencia", category: "-ence" },
      { english: "consequence", spanish: "consecuencia", category: "-ence" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The -ance Pattern",
    titleEs: "El Patrón -ance",
    description:
      "Spanish -ancia becomes English -ance. Similar to -ence but with an 'a'. Many of these describe qualities and states.",
    descriptionEs:
      "El español -ancia se convierte en -ance en inglés. Similar a -ence pero con una 'a'. Muchas de estas describen cualidades y estados.",
    words: [
      {
        english: "importance",
        spanish: "importancia",
        category: "-ance",
        pronunciationNote: "im-POR-tns — the final syllable is very quick",
        pronunciationNoteEs: "im-POR-tns — la sílaba final es muy rápida",
      },
      { english: "distance", spanish: "distancia", category: "-ance" },
      { english: "tolerance", spanish: "tolerancia", category: "-ance" },
      { english: "substance", spanish: "sustancia", category: "-ance" },
      { english: "abundance", spanish: "abundancia", category: "-ance" },
      { english: "elegance", spanish: "elegancia", category: "-ance" },
      { english: "ignorance", spanish: "ignorancia", category: "-ance" },
      {
        english: "performance",
        spanish: "rendimiento",
        category: "-ance",
        pronunciationNote: "per-FOR-mens — this one doesn't translate directly but is very common",
        pronunciationNoteEs: "per-FOR-mens — esta no se traduce directamente pero es muy común",
      },
      { english: "resistance", spanish: "resistencia", category: "-ance" },
      { english: "circumstance", spanish: "circunstancia", category: "-ance" },
    ] as CognateWord[],
  },
  wave3: {
    title: "Feelings Words",
    titleEs: "Palabras de Sentimientos",
    description:
      "These aren't cognates — they're essential feeling words you need for this unit. Some are new, some you'll recognize from daily life.",
    descriptionEs:
      "Estas no son cognados — son palabras esenciales de sentimientos que necesitas para esta unidad. Algunas son nuevas, otras las reconocerás de la vida diaria.",
    words: [
      {
        english: "curious",
        spanish: "curioso",
        category: "feelings",
        pronunciationNote: "KYOOR-ee-us — three syllables",
        pronunciationNoteEs: "KYOOR-ee-us — tres sílabas",
      },
      { english: "nervous", spanish: "nervioso", category: "feelings" },
      { english: "furious", spanish: "furioso", category: "feelings" },
      { english: "anxious", spanish: "ansioso", category: "feelings" },
      { english: "generous", spanish: "generoso", category: "feelings" },
      { english: "mysterious", spanish: "misterioso", category: "feelings" },
      { english: "ridiculous", spanish: "ridículo", category: "feelings" },
      {
        english: "obvious",
        spanish: "obvio",
        category: "feelings",
        pronunciationNote: "OB-vee-us — stress on FIRST syllable",
        pronunciationNoteEs: "OB-vee-us — acento en la PRIMERA sílaba",
      },
      { english: "serious", spanish: "serio", category: "feelings" },
      { english: "famous", spanish: "famoso", category: "feelings" },
    ] as CognateWord[],
  },
};

// ─── Section B: I feel like / I don't feel like ────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "I feel like / I don't feel like",
    labelEs: "Tengo ganas de / No tengo ganas de",
    description:
      "'I feel like' expresses a desire or mood — what you're in the mood to do. 'I feel like going out' = tengo ganas de salir. It's more casual than 'I want.'",
    descriptionEs:
      "'I feel like' expresa un deseo o estado de ánimo — lo que tienes ganas de hacer. 'I feel like going out' = tengo ganas de salir. Es más casual que 'I want.'",
    sentences: [
      {
        english: "I feel like going out tonight.",
        spanish: "Tengo ganas de salir esta noche.",
        highlight: "I feel like",
      },
      {
        english: "I feel like having dinner at that restaurant.",
        spanish: "Tengo ganas de cenar en ese restaurante.",
      },
      {
        english: "I don't feel like working today.",
        spanish: "No tengo ganas de trabajar hoy.",
        highlight: "don't feel like",
      },
      {
        english: "I don't know why but I don't feel like speaking with her today.",
        spanish: "No sé por qué pero no tengo ganas de hablar con ella hoy.",
      },
      {
        english: "Do you feel like going to the beach tomorrow?",
        spanish: "¿Tienes ganas de ir a la playa mañana?",
        highlight: "Do you feel like",
      },
    ],
  },
  {
    label: "I wonder / I wonder if",
    labelEs: "Me pregunto / Me pregunto si",
    description:
      "'I wonder' expresses curiosity — you're thinking about something but don't know the answer. 'I wonder if he knows' = me pregunto si él sabe. It's softer than asking directly.",
    descriptionEs:
      "'I wonder' expresa curiosidad — estás pensando en algo pero no sabes la respuesta. 'I wonder if he knows' = me pregunto si él sabe. Es más suave que preguntar directamente.",
    sentences: [
      {
        english: "I wonder if we can have dinner here tonight.",
        spanish: "Me pregunto si podemos cenar aquí esta noche.",
        highlight: "I wonder if",
      },
      {
        english: "I wonder why nobody told me about the problem.",
        spanish: "Me pregunto por qué nadie me dijo del problema.",
        highlight: "I wonder why",
      },
      {
        english: "I wonder where it is.",
        spanish: "Me pregunto dónde está.",
        highlight: "I wonder where",
      },
      {
        english: "I wonder if she feels like going with us.",
        spanish: "Me pregunto si ella tiene ganas de ir con nosotros.",
      },
      {
        english: "I wonder what happened last night because nobody wants to tell me.",
        spanish: "Me pregunto qué pasó anoche porque nadie quiere decirme.",
      },
    ],
  },
  {
    label: "Where is it? / Where are they?",
    labelEs: "¿Dónde está? / ¿Dónde están?",
    description:
      "'Where' asks about location. 'Where is it?' = ¿dónde está? Use 'is' for one thing and 'are' for multiple things or people.",
    descriptionEs:
      "'Where' pregunta por ubicación. 'Where is it?' = ¿dónde está? Usa 'is' para una cosa y 'are' para varias cosas o personas.",
    sentences: [
      {
        english: "Where is it? I don't know where it is.",
        spanish: "¿Dónde está? No sé dónde está.",
        highlight: "Where is it",
      },
      {
        english: "I don't know where it is, so I need to ask someone.",
        spanish: "No sé dónde está, así que necesito preguntarle a alguien.",
        highlight: "ask someone",
      },
      {
        english: "Where are they? Nobody knows where they are.",
        spanish: "¿Dónde están? Nadie sabe dónde están.",
        highlight: "Where are they",
      },
      {
        english: "Can you tell me where the restaurant is?",
        spanish: "¿Puedes decirme dónde está el restaurante?",
        highlight: "Can you tell me",
      },
      {
        english: "I wonder where everyone is because we have to be there at nine.",
        spanish: "Me pregunto dónde están todos porque tenemos que estar allí a las nueve.",
      },
    ],
  },
];

// ─── Section C: They can / They want / They have to ────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "They can / They want",
    labelEs: "Ellos pueden / Ellos quieren",
    description:
      "'They' refers to a group of people. Like 'we', the verbs don't change: 'they can', 'they want', 'they need.' Only 'he/she' adds the S.",
    descriptionEs:
      "'They' se refiere a un grupo de personas. Como 'we', los verbos no cambian: 'they can', 'they want', 'they need.' Solo 'he/she' agrega la S.",
    sentences: [
      {
        english: "They can do it tomorrow.",
        spanish: "Ellos pueden hacerlo mañana.",
        highlight: "They can",
      },
      {
        english: "They want to know where it is.",
        spanish: "Ellos quieren saber dónde está.",
        highlight: "They want",
      },
      {
        english: "They can't go with us because they have to work.",
        spanish: "No pueden ir con nosotros porque tienen que trabajar.",
      },
      {
        english: "They don't want to tell anyone about the problem.",
        spanish: "No quieren decirle a nadie sobre el problema.",
      },
      {
        english: "They want to go to the beach but they can't because it's too far.",
        spanish: "Quieren ir a la playa pero no pueden porque está muy lejos.",
        highlight: "too far",
      },
    ],
  },
  {
    label: "They have to / They should",
    labelEs: "Ellos tienen que / Ellos deberían",
    description:
      "'They have to' = obligation for the group. 'They should' = advice for the group. Same patterns you already know — just a new subject.",
    descriptionEs:
      "'They have to' = obligación para el grupo. 'They should' = consejo para el grupo. Los mismos patrones que ya conoces — solo un sujeto nuevo.",
    sentences: [
      {
        english: "They have to be there at nine.",
        spanish: "Tienen que estar allí a las nueve.",
        highlight: "They have to",
      },
      {
        english: "They should tell us the truth about what happened.",
        spanish: "Deberían decirnos la verdad sobre lo que pasó.",
        highlight: "They should",
      },
      {
        english: "They don't have to wait because we just arrived.",
        spanish: "No tienen que esperar porque acabamos de llegar.",
      },
      {
        english: "They shouldn't go alone because it could be dangerous.",
        spanish: "No deberían ir solos porque podría ser peligroso.",
        highlight: "dangerous",
      },
      {
        english: "They have to ask someone where it is because nobody knows.",
        spanish: "Tienen que preguntarle a alguien dónde está porque nadie sabe.",
      },
    ],
  },
  {
    label: "They just / They feel like / They wonder",
    labelEs: "Ellos acaban de / Ellos tienen ganas de / Ellos se preguntan",
    description:
      "All the new expressions from this unit work with 'they' too. 'They just arrived.' 'They feel like going out.' 'They wonder if it's possible.'",
    descriptionEs:
      "Todas las expresiones nuevas de esta unidad funcionan con 'they' también. 'They just arrived.' 'They feel like going out.' 'They wonder if it's possible.'",
    sentences: [
      {
        english: "They just arrived and they want to have dinner.",
        spanish: "Acaban de llegar y quieren cenar.",
        highlight: "They just",
      },
      {
        english: "They feel like going to the beach tomorrow.",
        spanish: "Tienen ganas de ir a la playa mañana.",
        highlight: "They feel like",
      },
      {
        english: "They wonder if we can go with them.",
        spanish: "Se preguntan si podemos ir con ellos.",
        highlight: "They wonder",
      },
      {
        english: "They don't feel like waiting all day.",
        spanish: "No tienen ganas de esperar todo el día.",
      },
      {
        english: "They just told me that they wonder why nobody explained the problem.",
        spanish: "Me acaban de decir que se preguntan por qué nadie explicó el problema.",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "Feelings and Questions",
  titleEs: "Sentimientos y Preguntas",
  description:
    "Words that express feelings, ask about things, and connect ideas — to the beach, a film, where, to ask, how.",
  descriptionEs:
    "Palabras que expresan sentimientos, preguntan sobre cosas y conectan ideas — a la playa, una película, dónde, preguntar, cómo.",
  connectors: [
    {
      word: "to the beach",
      wordEs: "a la playa",
      example: {
        english: "I feel like going to the beach but I wonder if it's too far.",
        spanish: "Tengo ganas de ir a la playa pero me pregunto si está muy lejos.",
      },
    },
    {
      word: "a film / a movie",
      wordEs: "una película",
      example: {
        english: "They want to see a film tonight but we don't feel like it.",
        spanish: "Quieren ver una película esta noche pero no tenemos ganas.",
      },
    },
    {
      word: "how",
      wordEs: "cómo",
      example: {
        english: "I wonder how they can do it every day.",
        spanish: "Me pregunto cómo pueden hacerlo todos los días.",
      },
    },
    {
      word: "to ask",
      wordEs: "preguntar",
      example: {
        english: "We should ask them where it is because nobody knows.",
        spanish: "Deberíamos preguntarles dónde está porque nadie sabe.",
      },
    },
    {
      word: "far / too far",
      wordEs: "lejos / demasiado lejos",
      example: {
        english: "It's too far so we can't walk there.",
        spanish: "Está demasiado lejos así que no podemos caminar hasta allí.",
      },
    },
  ],
  bossSentence: {
    english:
      "I wonder if they feel like going to the beach tomorrow, because I don't know where it is and it could be too far, so we should ask someone how to get there before we go.",
    spanish:
      "Me pregunto si tienen ganas de ir a la playa mañana, porque no sé dónde está y podría estar demasiado lejos, así que deberíamos preguntarle a alguien cómo llegar antes de ir.",
  },
};

// ─── Section E: Pronunciation Drills — Question Intonation ───────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "Yes/No questions go UP ↑",
    spanishStress: "¿Puedes? ↑",
    englishStress: "Can you? ↑ — voice rises at the end",
    tip: "Questions that can be answered with 'yes' or 'no' have RISING intonation — your voice goes UP at the end. 'Can you GO?' 'Do you WANT to?' 'Is it POSSIBLE?' The last stressed word rises. This is the same in Spanish.",
    tipEs: "Las preguntas que se pueden responder con 'sí' o 'no' tienen entonación ASCENDENTE — tu voz SUBE al final. '¿Can you GO?' '¿Do you WANT to?' '¿Is it POSSIBLE?' La última palabra acentuada sube. Esto es igual en español.",
  },
  {
    word: "WH questions go DOWN ↓",
    spanishStress: "¿Dónde está? ↓",
    englishStress: "Where IS it? ↓ — voice falls at the end",
    tip: "Questions starting with WHERE, WHAT, WHY, WHEN, WHO, or HOW have FALLING intonation — your voice goes DOWN at the end. 'Where IS it?' 'What HAPPENED?' 'Why did they GO?' This signals confidence — you're asking for specific information, not checking yes/no.",
    tipEs: "Las preguntas que empiezan con WHERE, WHAT, WHY, WHEN, WHO o HOW tienen entonación DESCENDENTE — tu voz BAJA al final. '¿Where IS it?' '¿What HAPPENED?' '¿Why did they GO?' Esto señala confianza — estás pidiendo información específica, no verificando sí/no.",
  },
  {
    word: "I wonder if...",
    spanishStress: "Me pregunto si...",
    englishStress: "I WON-der if... — statement intonation (flat/down)",
    tip: "'I wonder if...' is NOT a question — it's a statement about your curiosity. It uses flat or slightly falling intonation, like any statement. 'I wonder if she KNOWS.' Don't raise your voice at the end — you're not asking anyone directly.",
    tipEs: "'I wonder if...' NO es una pregunta — es una declaración sobre tu curiosidad. Usa entonación plana o ligeramente descendente, como cualquier declaración. 'I wonder if she KNOWS.' No subas la voz al final — no le estás preguntando a nadie directamente.",
  },
  {
    word: "Do you feel like...?",
    spanishStress: "¿Tienes ganas de...?",
    englishStress: "Do you FEEL like...? ↑ — yes/no, so it rises",
    tip: "'Do you feel like going out?' is a yes/no question, so your voice rises at the end. But notice the stress pattern: 'Do you FEEL like going OUT?' — FEEL and OUT get the main stress. The small words (do, you, like) are quick and unstressed.",
    tipEs: "'¿Do you feel like going out?' es una pregunta de sí/no, así que tu voz sube al final. Pero nota el patrón de acentuación: '¿Do you FEEL like going OUT?' — FEEL y OUT reciben el acento principal. Las palabras pequeñas (do, you, like) son rápidas y sin acento.",
  },
  {
    word: "Can you tell me where...?",
    spanishStress: "¿Puedes decirme dónde...?",
    englishStress: "Can you TELL me where...? — embedded question, goes DOWN",
    tip: "This is tricky: 'Can you tell me where it IS?' looks like a yes/no question (Can you...?) but the embedded question (where it is) makes the intonation fall at the end. Think of it as a polite request, not a yes/no check. Your voice falls on 'IS.'",
    tipEs: "Esto es complicado: '¿Can you tell me where it IS?' parece una pregunta de sí/no (Can you...?) pero la pregunta incrustada (where it is) hace que la entonación baje al final. Piénsalo como una petición cortés, no una verificación sí/no. Tu voz baja en 'IS.'",
  },
  {
    word: "feel / film / far",
    spanishStress: "fil / film / far",
    englishStress: "FEEL / FILM / FAR",
    tip: "The F sound is the same in Spanish and English — no problems there. But watch the vowels: 'feel' has a LONG 'ee' sound (FEEL), 'film' has a SHORT 'i' (FILM, rhymes with 'him'), and 'far' has an open 'ah' sound (FAR). Three different vowels after the same consonant.",
    tipEs: "El sonido F es igual en español e inglés — sin problemas ahí. Pero ojo con las vocales: 'feel' tiene un sonido largo 'ii' (FEEL), 'film' tiene una 'i' CORTA (FILM, rima con 'him'), y 'far' tiene un sonido abierto 'ah' (FAR). Tres vocales diferentes después de la misma consonante.",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Feel like / wonder
  { english: "I feel like", spanish: "tengo ganas de", type: "modal" },
  { english: "I don't feel like", spanish: "no tengo ganas de", type: "modal" },
  { english: "do you feel like?", spanish: "¿tienes ganas de?", type: "modal" },
  { english: "I wonder", spanish: "me pregunto", type: "modal" },
  { english: "I wonder if", spanish: "me pregunto si", type: "modal" },
  { english: "I wonder why", spanish: "me pregunto por qué", type: "modal" },
  { english: "I wonder where", spanish: "me pregunto dónde", type: "modal" },

  // They forms
  { english: "they can", spanish: "ellos pueden", type: "modal" },
  { english: "they want", spanish: "ellos quieren", type: "modal" },
  { english: "they have to", spanish: "ellos tienen que", type: "modal" },
  { english: "they should", spanish: "ellos deberían", type: "modal" },
  { english: "they just", spanish: "ellos acaban de", type: "modal" },
  { english: "they feel like", spanish: "ellos tienen ganas de", type: "modal" },

  // Key verbs
  { english: "to ask", spanish: "preguntar", type: "verb" },
  { english: "to feel", spanish: "sentir", type: "verb" },
  { english: "to walk", spanish: "caminar", type: "verb" },

  // Key vocabulary
  { english: "where is it?", spanish: "¿dónde está?", type: "phrase" },
  { english: "where are they?", spanish: "¿dónde están?", type: "phrase" },
  { english: "to the beach", spanish: "a la playa", type: "phrase" },
  { english: "a film / a movie", spanish: "una película", type: "word" },
  { english: "how", spanish: "cómo", type: "word" },
  { english: "far / too far", spanish: "lejos / demasiado lejos", type: "word" },
  { english: "dangerous", spanish: "peligroso", type: "word" },
  { english: "with them", spanish: "con ellos", type: "phrase" },

  // Review from previous units
  { english: "together", spanish: "juntos", type: "word" },
  { english: "everyone", spanish: "todos", type: "word" },
  { english: "nobody", spanish: "nadie", type: "word" },
  { english: "someone", spanish: "alguien", type: "word" },
  { english: "the truth", spanish: "la verdad", type: "phrase" },
  { english: "what happened", spanish: "qué pasó", type: "phrase" },
  { english: "all day", spanish: "todo el día", type: "word" },
  { english: "tonight", spanish: "esta noche", type: "word" },
];
