// Unit 6: "Everyone, Someone, No One" — Full course content

import type { CognateWord, SentenceBlock, PronunciationDrill, VocabItem } from "./unit-1";

// ─── Section A: Cognate Discovery ────────────────────────────────────────────

export const cognateWaves = {
  wave1: {
    title: "The -al Pattern",
    titleEs: "El Patrón -al",
    description:
      "Spanish -al stays -al in English. This is the easiest pattern — the words are nearly identical. And there are hundreds of them.",
    descriptionEs:
      "El español -al se mantiene -al en inglés. Es el patrón más fácil — las palabras son casi idénticas. Y hay cientos de ellas.",
    words: [
      {
        english: "personal",
        spanish: "personal",
        category: "-al",
        pronunciationNote: "PER-son-al — stress on FIRST syllable in English",
        pronunciationNoteEs: "PER-son-al — acento en la PRIMERA sílaba en inglés",
      },
      { english: "professional", spanish: "profesional", category: "-al" },
      { english: "original", spanish: "original", category: "-al" },
      { english: "general", spanish: "general", category: "-al" },
      { english: "normal", spanish: "normal", category: "-al" },
      { english: "final", spanish: "final", category: "-al" },
      { english: "total", spanish: "total", category: "-al" },
      { english: "special", spanish: "especial", category: "-al" },
      {
        english: "essential",
        spanish: "esencial",
        category: "-al",
        pronunciationNote: "e-SEN-shul — the 'tial' sounds like 'shul'",
        pronunciationNoteEs: "e-SEN-shul — el 'tial' suena como 'shul'",
      },
      { english: "individual", spanish: "individual", category: "-al" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The -id Pattern",
    titleEs: "El Patrón -id",
    description:
      "Spanish -ido becomes English -id. Short, punchy words that describe speed, strength, and clarity.",
    descriptionEs:
      "El español -ido se convierte en -id en inglés. Palabras cortas y contundentes que describen velocidad, fuerza y claridad.",
    words: [
      {
        english: "rapid",
        spanish: "rápido",
        category: "-id",
        pronunciationNote: "RA-pid — stress on first syllable, short and quick",
        pronunciationNoteEs: "RA-pid — acento en la primera sílaba, corto y rápido",
      },
      { english: "solid", spanish: "sólido", category: "-id" },
      { english: "valid", spanish: "válido", category: "-id" },
      { english: "timid", spanish: "tímido", category: "-id" },
      { english: "rigid", spanish: "rígido", category: "-id" },
      { english: "liquid", spanish: "líquido", category: "-id" },
      { english: "stupid", spanish: "estúpido", category: "-id" },
      { english: "vivid", spanish: "vívido", category: "-id" },
      { english: "hybrid", spanish: "híbrido", category: "-id" },
      { english: "lucid", spanish: "lúcido", category: "-id" },
    ] as CognateWord[],
  },
  wave3: {
    title: "The -ct Pattern",
    titleEs: "El Patrón -ct",
    description:
      "Spanish -cto becomes English -ct. The ending is sharper in English — a clean stop with no vowel after it.",
    descriptionEs:
      "El español -cto se convierte en -ct en inglés. El final es más corto en inglés — un corte limpio sin vocal después.",
    words: [
      { english: "correct", spanish: "correcto", category: "-ct" },
      { english: "direct", spanish: "directo", category: "-ct" },
      { english: "perfect", spanish: "perfecto", category: "-ct" },
      { english: "exact", spanish: "exacto", category: "-ct" },
      { english: "abstract", spanish: "abstracto", category: "-ct" },
      { english: "compact", spanish: "compacto", category: "-ct" },
      { english: "distinct", spanish: "distinto", category: "-ct" },
      {
        english: "product",
        spanish: "producto",
        category: "-ct",
        pronunciationNote: "PRO-duct — no vowel after the final T",
        pronunciationNoteEs: "PRO-duct — sin vocal después de la T final",
      },
      { english: "impact", spanish: "impacto", category: "-ct" },
      { english: "contact", spanish: "contacto", category: "-ct" },
    ] as CognateWord[],
  },
};

// ─── Section B: Everyone / Someone / No one ─────────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Everyone / Everybody",
    labelEs: "Todos / Todo el mundo",
    description:
      "'Everyone' means all people. It uses singular verbs: 'everyone WANTS' (not 'everyone want'). Same as 'everybody' — completely interchangeable.",
    descriptionEs:
      "'Everyone' significa todas las personas. Usa verbos en singular: 'everyone WANTS' (no 'everyone want'). Es igual que 'everybody' — completamente intercambiables.",
    sentences: [
      {
        english: "Everyone wants to go.",
        spanish: "Todos quieren ir.",
        highlight: "Everyone",
      },
      {
        english: "Everyone wants to see you.",
        spanish: "Todos quieren verte.",
      },
      {
        english: "Everyone knows about the problem.",
        spanish: "Todos saben del problema.",
        highlight: "knows about",
      },
      {
        english: "Everybody wants to be here tonight.",
        spanish: "Todo el mundo quiere estar aquí esta noche.",
        highlight: "Everybody",
      },
      {
        english: "I just found out that everyone knows the truth.",
        spanish: "Acabo de enterarme de que todos saben la verdad.",
      },
    ],
  },
  {
    label: "Someone / Somebody",
    labelEs: "Alguien",
    description:
      "'Someone' means an unspecified person. 'Someone told me' — you don't know who, or you don't want to say.",
    descriptionEs:
      "'Someone' significa una persona no especificada. 'Someone told me' — no sabes quién, o no quieres decirlo.",
    sentences: [
      {
        english: "Someone called me last night.",
        spanish: "Alguien me llamó anoche.",
        highlight: "Someone",
      },
      {
        english: "Someone has to explain the reason why.",
        spanish: "Alguien tiene que explicar el porqué.",
      },
      {
        english: "I need to talk to someone about the problem.",
        spanish: "Necesito hablar con alguien sobre el problema.",
        highlight: "to someone",
      },
      {
        english: "Someone just told me that he can't be here tomorrow.",
        spanish: "Alguien me acaba de decir que él no puede estar aquí mañana.",
      },
      {
        english: "I want to buy something special for someone.",
        spanish: "Quiero comprar algo especial para alguien.",
        highlight: "something",
      },
    ],
  },
  {
    label: "No one / Nobody",
    labelEs: "Nadie",
    description:
      "'No one' and 'nobody' mean zero people. Important: DON'T use double negatives in English. 'Nobody wants' (NOT 'nobody doesn't want').",
    descriptionEs:
      "'No one' y 'nobody' significan cero personas. Importante: NO uses doble negación en inglés. 'Nobody wants' (NO 'nobody doesn't want').",
    sentences: [
      {
        english: "Nobody wants to work today.",
        spanish: "Nadie quiere trabajar hoy.",
        highlight: "Nobody",
      },
      {
        english: "No one knows what happened.",
        spanish: "Nadie sabe qué pasó.",
        highlight: "No one",
      },
      {
        english: "Nobody told me about the problem.",
        spanish: "Nadie me dijo del problema.",
      },
      {
        english: "No one wants to tell him the truth.",
        spanish: "Nadie quiere decirle la verdad.",
      },
      {
        english: "Nobody can do it because it's too expensive.",
        spanish: "Nadie puede hacerlo porque es muy caro.",
        highlight: "too expensive",
      },
    ],
  },
];

// ─── Section C: Should / Shouldn't / Should be able to ──────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "Should",
    labelEs: "Debería",
    description:
      "'Should' gives advice or expresses what's right to do. It's softer than 'have to' — a suggestion, not an order.",
    descriptionEs:
      "'Should' da consejos o expresa lo que es correcto hacer. Es más suave que 'have to' — una sugerencia, no una orden.",
    sentences: [
      {
        english: "You should tell him the truth.",
        spanish: "Deberías decirle la verdad.",
        highlight: "should",
      },
      {
        english: "Someone should explain what happened.",
        spanish: "Alguien debería explicar qué pasó.",
      },
      {
        english: "I should call her tonight.",
        spanish: "Debería llamarla esta noche.",
      },
      {
        english: "Everyone should know about this.",
        spanish: "Todos deberían saber sobre esto.",
        highlight: "about this",
      },
      {
        english: "You should wait because he just arrived.",
        spanish: "Deberías esperar porque él acaba de llegar.",
        highlight: "wait",
      },
    ],
  },
  {
    label: "Shouldn't",
    labelEs: "No debería",
    description:
      "'Shouldn't' advises against something. 'You shouldn't go' = it's not a good idea for you to go.",
    descriptionEs:
      "'Shouldn't' aconseja en contra de algo. 'You shouldn't go' = no es buena idea que vayas.",
    sentences: [
      {
        english: "You shouldn't go out with him tonight.",
        spanish: "No deberías salir con él esta noche.",
        highlight: "shouldn't",
      },
      {
        english: "She shouldn't buy it because it's too expensive.",
        spanish: "Ella no debería comprarlo porque es muy caro.",
        highlight: "buy",
      },
      {
        english: "Nobody should have to explain the reason why.",
        spanish: "Nadie debería tener que explicar el porqué.",
      },
      {
        english: "You shouldn't tell anyone about this.",
        spanish: "No deberías decirle a nadie sobre esto.",
        highlight: "anyone",
      },
      {
        english: "I shouldn't wait because it's already late.",
        spanish: "No debería esperar porque ya es tarde.",
        highlight: "already",
      },
    ],
  },
  {
    label: "Should be able to",
    labelEs: "Debería poder",
    description:
      "'Should be able to' combines advice with ability. 'I should be able to do it' = I expect I can do it.",
    descriptionEs:
      "'Should be able to' combina consejo con habilidad. 'I should be able to do it' = espero poder hacerlo.",
    sentences: [
      {
        english: "I should be able to do it tomorrow.",
        spanish: "Debería poder hacerlo mañana.",
        highlight: "should be able to",
      },
      {
        english: "She should be able to call you tonight.",
        spanish: "Ella debería poder llamarte esta noche.",
      },
      {
        english: "Everyone should be able to see the problem.",
        spanish: "Todos deberían poder ver el problema.",
      },
      {
        english: "He should be able to explain what happened.",
        spanish: "Él debería poder explicar qué pasó.",
      },
      {
        english: "Someone should be able to tell me the truth about what happened at the party last night.",
        spanish: "Alguien debería poder decirme la verdad sobre lo que pasó en la fiesta anoche.",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "Advice and Expectations",
  titleEs: "Consejos y Expectativas",
  description:
    "Words that connect advice, opinions, and expectations — so, therefore, too, already, anyone.",
  descriptionEs:
    "Palabras que conectan consejos, opiniones y expectativas — entonces, por lo tanto, demasiado, ya, cualquiera.",
  connectors: [
    {
      word: "so / therefore",
      wordEs: "entonces / por lo tanto",
      example: {
        english: "It's expensive, so nobody wants to buy it.",
        spanish: "Es caro, entonces nadie quiere comprarlo.",
      },
    },
    {
      word: "too (excessive)",
      wordEs: "demasiado",
      example: {
        english: "It's too expensive for me.",
        spanish: "Es demasiado caro para mí.",
      },
    },
    {
      word: "already",
      wordEs: "ya",
      example: {
        english: "Everyone already knows the truth.",
        spanish: "Todos ya saben la verdad.",
      },
    },
    {
      word: "anyone / anybody",
      wordEs: "cualquiera / alguien (en preguntas/negaciones)",
      example: {
        english: "You shouldn't tell anyone about this.",
        spanish: "No deberías decirle a nadie sobre esto.",
      },
    },
    {
      word: "something",
      wordEs: "algo",
      example: {
        english: "Someone should do something about the problem.",
        spanish: "Alguien debería hacer algo sobre el problema.",
      },
    },
  ],
  bossSentence: {
    english:
      "Everyone already knows the truth about what happened, so someone should explain the reason why, because it's too important and nobody should have to wait.",
    spanish:
      "Todos ya saben la verdad sobre lo que pasó, entonces alguien debería explicar el porqué, porque es demasiado importante y nadie debería tener que esperar.",
  },
};

// ─── Section E: Pronunciation Drills — Initial S (no "es-" prefix) ──────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "special",
    spanishStress: "es-pe-CIAL",
    englishStress: "SPE-shul — NO 'e' before the S",
    tip: "In Spanish, words starting with S + consonant always add an 'e' sound: 'especial.' In English, go straight to the S: 'SPECIAL', not 'e-special.' This is one of the biggest giveaways of a Spanish accent.",
    tipEs: "En español, las palabras que empiezan con S + consonante siempre añaden un sonido 'e': 'especial.' En inglés, ve directo a la S: 'SPECIAL', no 'e-special.' Este es uno de los mayores indicadores de acento en español.",
  },
  {
    word: "stop / start",
    spanishStress: "es-TOP / es-TART",
    englishStress: "STOP / START — lips go straight to S",
    tip: "Train yourself: put your tongue on your teeth for the S sound FIRST. Don't let your mouth open for an 'e' before it. Practice: 'sssss-top', 'sssss-tart.' The S is the very first sound.",
    tipEs: "Entrénate: pon tu lengua en los dientes para el sonido S PRIMERO. No dejes que tu boca se abra para una 'e' antes. Practica: 'sssss-top', 'sssss-tart.' La S es el primer sonido.",
  },
  {
    word: "student / study",
    spanishStress: "es-STOO-dent / es-STUH-dee",
    englishStress: "STOO-dent / STUH-dee — clean S start",
    tip: "'Student' starts with ST, not EST. Same with 'study', 'stupid', 'strong', 'street.' Every S + consonant word in English starts clean — no vowel helper.",
    tipEs: "'Student' empieza con ST, no EST. Lo mismo con 'study', 'stupid', 'strong', 'street.' Cada palabra con S + consonante en inglés empieza limpia — sin vocal de apoyo.",
  },
  {
    word: "someone / something",
    spanishStress: "SUM-wun / SUM-thing",
    englishStress: "SUM-wun / SUM-thing — stress on FIRST",
    tip: "These compound words get stress on the FIRST part: SUM-wun, SUM-thing. The second part is reduced — 'one' becomes 'wun' and 'thing' stays clear. Never add 'e' before the S.",
    tipEs: "Estas palabras compuestas llevan el acento en la PRIMERA parte: SUM-wun, SUM-thing. La segunda parte se reduce — 'one' se vuelve 'wun' y 'thing' se mantiene claro. Nunca agregues 'e' antes de la S.",
  },
  {
    word: "should / shouldn't",
    spanishStress: "SHOOD / SHOOD-nt",
    englishStress: "SHUD / SHUD-nt — short and quick",
    tip: "'Should' rhymes with 'good' and 'would.' It's short: SHUD. 'Shouldn't' adds a quick 'nt' at the end — the 't' is almost silent. Don't say 'SHOOD' with a long vowel.",
    tipEs: "'Should' rima con 'good' y 'would.' Es corto: SHUD. 'Shouldn't' agrega un rápido 'nt' al final — la 't' es casi silenciosa. No digas 'SHOOD' con una vocal larga.",
  },
  {
    word: "expensive",
    spanishStress: "ex-PEN-siv",
    englishStress: "ek-SPEN-siv — three syllables",
    tip: "Don't add a syllable: it's ek-SPEN-siv (three syllables), not 'ex-pen-SI-ve' (four). The final 'e' is silent. Stress lands on the middle: SPEN.",
    tipEs: "No agregues una sílaba: es ek-SPEN-siv (tres sílabas), no 'ex-pen-SI-ve' (cuatro). La 'e' final es silenciosa. El acento cae en el medio: SPEN.",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Indefinite pronouns
  { english: "everyone / everybody", spanish: "todos / todo el mundo", type: "word" },
  { english: "someone / somebody", spanish: "alguien", type: "word" },
  { english: "no one / nobody", spanish: "nadie", type: "word" },
  { english: "anyone / anybody", spanish: "cualquiera / alguien", type: "word" },
  { english: "something", spanish: "algo", type: "word" },

  // Should constructions
  { english: "should", spanish: "debería", type: "modal" },
  { english: "shouldn't", spanish: "no debería", type: "modal" },
  { english: "should be able to", spanish: "debería poder", type: "modal" },

  // Key verbs
  { english: "to buy", spanish: "comprar", type: "verb" },
  { english: "to wait", spanish: "esperar", type: "verb" },
  { english: "to explain", spanish: "explicar", type: "verb" },

  // Key vocabulary
  { english: "expensive", spanish: "caro", type: "word" },
  { english: "too (excessive)", spanish: "demasiado", type: "word" },
  { english: "so / therefore", spanish: "entonces / por lo tanto", type: "word" },
  { english: "already", spanish: "ya", type: "word" },
  { english: "about this", spanish: "sobre esto", type: "phrase" },

  // Review from previous units
  { english: "I just found out", spanish: "acabo de enterarme", type: "phrase" },
  { english: "the truth", spanish: "la verdad", type: "phrase" },
  { english: "the reason why", spanish: "el porqué", type: "phrase" },
  { english: "what happened", spanish: "qué pasó", type: "phrase" },
  { english: "the problem", spanish: "el problema", type: "phrase" },
  { english: "at the party", spanish: "en la fiesta", type: "phrase" },
  { english: "last night", spanish: "anoche", type: "word" },
  { english: "tonight", spanish: "esta noche", type: "word" },
  { english: "for me", spanish: "para mí", type: "phrase" },
  { english: "tell him/her", spanish: "decirle", type: "verb" },
];
