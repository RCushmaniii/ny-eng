// Unit 4: "Talking to Someone" — Full course content

import type { CognateWord, SentenceBlock, PronunciationDrill, VocabItem } from "./unit-1";

// ─── Section A: Cognate Discovery ────────────────────────────────────────────

export const cognateWaves = {
  wave1: {
    title: "The -ment Pattern",
    titleEs: "El Patrón -ment",
    description:
      "Spanish -mento becomes English -ment. These are common in everyday conversation and business.",
    descriptionEs:
      "El español -mento se convierte en -ment en inglés. Son comunes en la conversación diaria y los negocios.",
    words: [
      {
        english: "document",
        spanish: "documento",
        category: "-ment",
        pronunciationNote: "Stress on FIRST syllable: DOC-u-ment",
        pronunciationNoteEs: "Acento en la PRIMERA sílaba: DOC-u-ment",
      },
      { english: "moment", spanish: "momento", category: "-ment" },
      { english: "element", spanish: "elemento", category: "-ment" },
      { english: "instrument", spanish: "instrumento", category: "-ment" },
      { english: "monument", spanish: "monumento", category: "-ment" },
      { english: "fragment", spanish: "fragmento", category: "-ment" },
      { english: "cement", spanish: "cemento", category: "-ment" },
      {
        english: "experiment",
        spanish: "experimento",
        category: "-ment",
        pronunciationNote: "ex-PER-i-ment — stress on second syllable",
        pronunciationNoteEs: "ex-PER-i-ment — acento en la segunda sílaba",
      },
      { english: "apartment", spanish: "departamento", category: "-ment" },
      { english: "complement", spanish: "complemento", category: "-ment" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The -ity Pattern",
    titleEs: "El Patrón -ity",
    description:
      "Spanish -idad becomes English -ity. All of these are feminine in Spanish — and they're everywhere in English.",
    descriptionEs:
      "El español -idad se convierte en -ity en inglés. Todas son femeninas en español — y están en todas partes en inglés.",
    words: [
      {
        english: "university",
        spanish: "universidad",
        category: "-ity",
        pronunciationNote: "u-ni-VER-si-ty — stress on third syllable",
        pronunciationNoteEs: "u-ni-VER-si-ty — acento en la tercera sílaba",
      },
      { english: "identity", spanish: "identidad", category: "-ity" },
      { english: "possibility", spanish: "posibilidad", category: "-ity" },
      { english: "community", spanish: "comunidad", category: "-ity" },
      { english: "reality", spanish: "realidad", category: "-ity" },
      { english: "quality", spanish: "calidad", category: "-ity" },
      { english: "activity", spanish: "actividad", category: "-ity" },
      { english: "electricity", spanish: "electricidad", category: "-ity" },
      { english: "curiosity", spanish: "curiosidad", category: "-ity" },
      { english: "clarity", spanish: "claridad", category: "-ity" },
    ] as CognateWord[],
  },
  wave3: {
    title: "The -ent Pattern",
    titleEs: "El Patrón -ent",
    description:
      "Spanish -ente becomes English -ent. People, descriptions, and things — a versatile pattern.",
    descriptionEs:
      "El español -ente se convierte en -ent en inglés. Personas, descripciones y cosas — un patrón versátil.",
    words: [
      { english: "innocent", spanish: "inocente", category: "-ent" },
      { english: "excellent", spanish: "excelente", category: "-ent" },
      { english: "different", spanish: "diferente", category: "-ent" },
      { english: "frequent", spanish: "frecuente", category: "-ent" },
      { english: "present", spanish: "presente", category: "-ent" },
      { english: "president", spanish: "presidente", category: "-ent" },
      { english: "resident", spanish: "residente", category: "-ent" },
      { english: "competent", spanish: "competente", category: "-ent" },
      { english: "client", spanish: "cliente", category: "-ent" },
      { english: "incident", spanish: "incidente", category: "-ent" },
    ] as CognateWord[],
  },
};

// ─── Section B: You can / You want / You have to ─────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "You can / You want",
    labelEs: "Tú puedes / Tú quieres",
    description: "Direct conversation: address someone with 'you'. Same verbs you already know — just swap 'I' for 'you'.",
    descriptionEs: "Conversación directa: dirígete a alguien con 'you'. Los mismos verbos que ya conoces — solo cambia 'I' por 'you'.",
    sentences: [
      {
        english: "You can explain tomorrow.",
        spanish: "Puedes explicar mañana.",
        highlight: "You can",
      },
      {
        english: "You can tell me tonight if you want.",
        spanish: "Puedes decirme esta noche si quieres.",
        highlight: "tell me",
      },
      {
        english: "Can you tell me now?",
        spanish: "¿Puedes decirme ahora?",
        highlight: "Can you",
      },
      {
        english: "Do you want to explain?",
        spanish: "¿Quieres explicar?",
        highlight: "Do you want",
      },
      {
        english: "Why can't you tell me now?",
        spanish: "¿Por qué no puedes decirme ahora?",
        highlight: "Why",
      },
    ],
  },
  {
    label: "You have to",
    labelEs: "Tú tienes que",
    description: "'You have to' expresses obligation. It's direct — use it when something must be done.",
    descriptionEs: "'You have to' expresa obligación. Es directo — úsalo cuando algo debe hacerse.",
    sentences: [
      {
        english: "You have to tell me the truth.",
        spanish: "Tienes que decirme la verdad.",
        highlight: "the truth",
      },
      {
        english: "You have to tell me the truth now.",
        spanish: "Tienes que decirme la verdad ahora.",
      },
      {
        english: "You don't have to explain.",
        spanish: "No tienes que explicar.",
        highlight: "don't have to",
      },
      {
        english: "You don't have to explain the reason why.",
        spanish: "No tienes que explicar el porqué.",
        highlight: "the reason why",
      },
      {
        english: "Do you have to go out tonight?",
        spanish: "¿Tienes que salir esta noche?",
      },
    ],
  },
  {
    label: "Tell me / Tell you / Tell him/her",
    labelEs: "Decirme / Decirte / Decirle",
    description: "Indirect objects let you say WHO receives the action. Tell ME, tell YOU, tell HIM, tell HER.",
    descriptionEs: "Los objetos indirectos te permiten decir QUIÉN recibe la acción. Decir-ME, decir-TE, decir-LE.",
    sentences: [
      {
        english: "I want to tell you something important.",
        spanish: "Quiero decirte algo importante.",
        highlight: "tell you",
      },
      {
        english: "I need to tell you the truth.",
        spanish: "Necesito decirte la verdad.",
      },
      {
        english: "I don't want to tell her now.",
        spanish: "No quiero decirle ahora.",
        highlight: "tell her",
      },
      {
        english: "Can you tell him tomorrow?",
        spanish: "¿Puedes decirle mañana?",
        highlight: "tell him",
      },
      {
        english: "You have to tell him the truth tonight.",
        spanish: "Tienes que decirle la verdad esta noche.",
      },
    ],
  },
];

// ─── Section C: Call / Give + What Happened ──────────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "Call me / Call you",
    labelEs: "Llamarme / Llamarte",
    description: "Same indirect object pattern with 'call' and 'give'. These patterns repeat everywhere.",
    descriptionEs: "El mismo patrón de objeto indirecto con 'call' y 'give'. Estos patrones se repiten en todas partes.",
    sentences: [
      {
        english: "You have to call me because it's important.",
        spanish: "Tienes que llamarme porque es importante.",
        highlight: "call me",
      },
      {
        english: "I need to call you tonight.",
        spanish: "Necesito llamarte esta noche.",
        highlight: "call you",
      },
      {
        english: "I can't call you now because I'm busy.",
        spanish: "No puedo llamarte ahora porque estoy ocupado.",
      },
      {
        english: "I want to give you the book.",
        spanish: "Quiero darte el libro.",
        highlight: "give you",
      },
      {
        english: "He wants to give me the book.",
        spanish: "Quiere darme el libro.",
        highlight: "give me",
      },
    ],
  },
  {
    label: "What happened",
    labelEs: "Qué pasó",
    description: "'What happened' opens the door to stories and explanations. Combine it with everything.",
    descriptionEs: "'What happened' abre la puerta a historias y explicaciones. Combínalo con todo.",
    sentences: [
      {
        english: "I want to explain what happened.",
        spanish: "Quiero explicar qué pasó.",
        highlight: "what happened",
      },
      {
        english: "I want to explain what happened yesterday.",
        spanish: "Quiero explicar qué pasó ayer.",
      },
      {
        english: "She doesn't want to tell me what happened yesterday.",
        spanish: "No quiere decirme qué pasó ayer.",
      },
      {
        english: "You have to tell me what happened last night.",
        spanish: "Tienes que decirme qué pasó anoche.",
        highlight: "last night",
      },
      {
        english: "You have to tell me what happened last night and I want the truth.",
        spanish: "Tienes que decirme qué pasó anoche y quiero la verdad.",
      },
    ],
  },
  {
    label: "Putting it all together",
    labelEs: "Poniendo todo junto",
    description: "Complex sentences combining you-forms, indirect objects, and past events.",
    descriptionEs: "Oraciones complejas combinando formas de 'you', objetos indirectos y eventos pasados.",
    sentences: [
      {
        english: "I know what happened and it's fine.",
        spanish: "Sé qué pasó y está bien.",
        highlight: "I know",
      },
      {
        english: "It's fine if you can't do it for me today.",
        spanish: "Está bien si no puedes hacerlo para mí hoy.",
        highlight: "It's fine",
      },
      {
        english: "You can explain later if you want.",
        spanish: "Puedes explicar más tarde si quieres.",
      },
      {
        english: "You don't have to tell me now, you can do it tonight.",
        spanish: "No tienes que decirme ahora, puedes hacerlo esta noche.",
      },
      {
        english: "What happened yesterday was very important.",
        spanish: "Lo que pasó ayer fue muy importante.",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "Direct Conversation",
  titleEs: "Conversación Directa",
  description:
    "Words that power direct conversation — asking why, demanding truth, referencing the past.",
  descriptionEs:
    "Palabras que impulsan la conversación directa — preguntar por qué, pedir la verdad, referenciar el pasado.",
  connectors: [
    {
      word: "why",
      wordEs: "por qué",
      example: {
        english: "Why can't you tell me now?",
        spanish: "¿Por qué no puedes decirme ahora?",
      },
    },
    {
      word: "the truth",
      wordEs: "la verdad",
      example: {
        english: "You have to tell me the truth.",
        spanish: "Tienes que decirme la verdad.",
      },
    },
    {
      word: "the reason why",
      wordEs: "el porqué",
      example: {
        english: "I want to tell you the reason why.",
        spanish: "Quiero decirte el porqué.",
      },
    },
    {
      word: "what happened",
      wordEs: "qué pasó",
      example: {
        english: "Do you want to tell me what happened?",
        spanish: "¿Quieres decirme qué pasó?",
      },
    },
    {
      word: "last night",
      wordEs: "anoche",
      example: {
        english: "You have to tell me what happened last night.",
        spanish: "Tienes que decirme qué pasó anoche.",
      },
    },
  ],
  bossSentence: {
    english:
      "You have to tell me what happened last night and I want the truth, because I know the reason why and it's very important for me.",
    spanish:
      "Tienes que decirme qué pasó anoche y quiero la verdad, porque sé el porqué y es muy importante para mí.",
  },
};

// ─── Section E: Pronunciation Drills — TH sounds ────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "the",
    spanishStress: "(no equivalent)",
    englishStress: "TH — voiced, tongue between teeth",
    tip: "Put the tip of your tongue between your teeth and vibrate. It's like a 'D' but with your tongue sticking out slightly. This is the most common word in English — practice it!",
    tipEs: "Pon la punta de tu lengua entre los dientes y vibra. Es como una 'D' pero con la lengua saliendo ligeramente. Es la palabra más común en inglés — ¡practícala!",
  },
  {
    word: "truth",
    spanishStress: "(no equivalent)",
    englishStress: "TRUTH — voiceless TH",
    tip: "This TH is voiceless — air flows over your tongue between your teeth, but your vocal cords don't vibrate. Like blowing air through your teeth. 'Truth' not 'troof'.",
    tipEs: "Esta TH es sorda — el aire fluye sobre tu lengua entre tus dientes, pero las cuerdas vocales no vibran. Como soplar aire entre los dientes. 'Truth' no 'troof'.",
  },
  {
    word: "this / that",
    spanishStress: "like D in Spanish",
    englishStress: "TH — voiced (tongue out!)",
    tip: "'This' and 'that' use the VOICED TH (same as 'the'). Spanish speakers often say 'dis' and 'dat'. The fix: put your tongue between your teeth!",
    tipEs: "'This' y 'that' usan la TH SONORA (igual que 'the'). Los hispanohablantes a menudo dicen 'dis' y 'dat'. La solución: ¡pon tu lengua entre los dientes!",
  },
  {
    word: "think / thing",
    spanishStress: "(like Spanish Z in Spain)",
    englishStress: "TH — voiceless (air only)",
    tip: "Same tongue position as 'truth' — tongue between teeth, air flows, no vibration. If you speak Castilian Spanish, this is close to your 'Z' sound.",
    tipEs: "Misma posición de la lengua que 'truth' — lengua entre dientes, aire fluye, sin vibración. Si hablas español castellano, es similar a tu sonido 'Z'.",
  },
  {
    word: "with",
    spanishStress: "(often said as 'wit')",
    englishStress: "WITH — ends with voiced TH",
    tip: "Don't drop the TH at the end! 'With' is not 'wit' or 'wif'. Let your tongue touch your teeth on the final sound.",
    tipEs: "¡No elimines la TH al final! 'With' no es 'wit' ni 'wif'. Deja que tu lengua toque tus dientes en el sonido final.",
  },
  {
    word: "three / through",
    spanishStress: "(often said as 'tree' / 'true')",
    englishStress: "THR — voiceless TH + R",
    tip: "Start with voiceless TH (tongue between teeth), then quickly move to R. 'Three' is NOT 'tree'. 'Through' is NOT 'true'. The TH changes everything.",
    tipEs: "Empieza con TH sorda (lengua entre dientes), luego mueve rápido a R. 'Three' NO es 'tree'. 'Through' NO es 'true'. La TH cambia todo.",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // You-forms
  { english: "you can", spanish: "puedes", type: "modal" },
  { english: "you can't", spanish: "no puedes", type: "modal" },
  { english: "you want", spanish: "quieres", type: "modal" },
  { english: "you don't want", spanish: "no quieres", type: "modal" },
  { english: "you have to", spanish: "tienes que", type: "modal" },
  { english: "you don't have to", spanish: "no tienes que", type: "modal" },

  // Indirect objects
  { english: "to tell me", spanish: "decirme", type: "verb" },
  { english: "to tell you", spanish: "decirte", type: "verb" },
  { english: "to tell him/her", spanish: "decirle", type: "verb" },
  { english: "to call me", spanish: "llamarme", type: "verb" },
  { english: "to call you", spanish: "llamarte", type: "verb" },
  { english: "to call him/her", spanish: "llamarle", type: "verb" },
  { english: "to give me", spanish: "darme", type: "verb" },
  { english: "to give you", spanish: "darte", type: "verb" },
  { english: "to give him/her", spanish: "darle", type: "verb" },
  { english: "to explain", spanish: "explicar", type: "verb" },

  // Key vocabulary
  { english: "why", spanish: "por qué", type: "word" },
  { english: "the reason why", spanish: "el porqué", type: "phrase" },
  { english: "the truth", spanish: "la verdad", type: "phrase" },
  { english: "what happened", spanish: "qué pasó", type: "phrase" },
  { english: "last night", spanish: "anoche", type: "word" },
  { english: "the book", spanish: "el libro", type: "phrase" },
  { english: "I know", spanish: "sé", type: "phrase" },
  { english: "it's fine / it's O.K.", spanish: "está bien", type: "phrase" },

  // Review
  { english: "he/she wants", spanish: "quiere", type: "modal" },
  { english: "he/she has to", spanish: "tiene que", type: "modal" },
  { english: "because", spanish: "porque", type: "word" },
  { english: "tonight", spanish: "esta noche", type: "word" },
  { english: "yesterday", spanish: "ayer", type: "word" },
  { english: "for me", spanish: "para mí", type: "phrase" },
];
