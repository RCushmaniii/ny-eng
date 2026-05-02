// Unit 5: "Comparing Things" — Comparatives + superlatives + irregulars
//
// Pedagogical arc:
// Section A — 3 vocabulary waves: short -er adjectives, long 'more' adjectives, irregulars
// Section B — Building comparatives (X is -er/more X than Y)
// Section C — Building superlatives (X is the -est/the most X)
// Section D — Boss Sentence: comparing real things across multiple dimensions
// Section E — Pronunciation: 'than' reduction, schwa-r endings, stress on "the most"
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

// ─── Section A: Comparison Vocabulary (Cognate Discovery format) ─────────────

export const cognateWaves = {
  wave1: {
    title: "Short Adjectives + -er — The Easy Pattern",
    titleEs: "Adjetivos Cortos + -er — El patrón fácil",
    description:
      "For short adjectives (one or two syllables), just add -er for the comparative and -est for the superlative. Cleanest rule in English.",
    descriptionEs:
      "Para adjetivos cortos (una o dos sílabas), solo agrega -er para el comparativo y -est para el superlativo. La regla más limpia del inglés.",
    words: [
      {
        english: "big / bigger / the biggest",
        spanish: "grande / más grande / el más grande",
        category: "Short -er",
        pronunciationNote: "Double the consonant: big → bigGer. Same for hot/hotter.",
        pronunciationNoteEs: "Dobla la consonante: big → bigGer. Igual hot/hotter.",
      },
      { english: "small / smaller / the smallest", spanish: "pequeño / más pequeño / el más pequeño", category: "Short -er" },
      { english: "fast / faster / the fastest", spanish: "rápido / más rápido / el más rápido", category: "Short -er" },
      { english: "slow / slower / the slowest", spanish: "lento / más lento / el más lento", category: "Short -er" },
      { english: "tall / taller / the tallest", spanish: "alto / más alto / el más alto", category: "Short -er" },
      { english: "short / shorter / the shortest", spanish: "bajo / más bajo / el más bajo", category: "Short -er" },
      { english: "old / older / the oldest", spanish: "viejo / más viejo / el más viejo", category: "Short -er" },
      { english: "young / younger / the youngest", spanish: "joven / más joven / el más joven", category: "Short -er" },
      { english: "cheap / cheaper / the cheapest", spanish: "barato / más barato / el más barato", category: "Short -er" },
      {
        english: "easy / easier / the easiest",
        spanish: "fácil / más fácil / el más fácil",
        category: "Short -er",
        pronunciationNote: "Adjectives ending in -y change to -ier: easy → easier, happy → happier.",
        pronunciationNoteEs: "Adjetivos en -y cambian a -ier: easy → easier, happy → happier.",
      },
    ] as CognateWord[],
  },
  wave2: {
    title: "Long Adjectives + 'more' — The Other Pattern",
    titleEs: "Adjetivos Largos + 'more' — El otro patrón",
    description:
      "For longer adjectives (3+ syllables), don't add -er. Use 'more X' for comparatives and 'the most X' for superlatives. NEVER 'more better' — only one or the other.",
    descriptionEs:
      "Para adjetivos más largos (3+ sílabas), no agregues -er. Usa 'more X' para comparativos y 'the most X' para superlativos. NUNCA 'more better' — solo uno u otro.",
    words: [
      { english: "interesting / more interesting / the most interesting", spanish: "interesante / más interesante / el más interesante", category: "Long 'more'" },
      { english: "expensive / more expensive / the most expensive", spanish: "caro / más caro / el más caro", category: "Long 'more'" },
      { english: "important / more important / the most important", spanish: "importante / más importante / el más importante", category: "Long 'more'" },
      { english: "difficult / more difficult / the most difficult", spanish: "difícil / más difícil / el más difícil", category: "Long 'more'" },
      { english: "popular / more popular / the most popular", spanish: "popular / más popular / el más popular", category: "Long 'more'" },
      { english: "intelligent / more intelligent / the most intelligent", spanish: "inteligente / más inteligente / el más inteligente", category: "Long 'more'" },
      { english: "beautiful / more beautiful / the most beautiful", spanish: "hermoso / más hermoso / el más hermoso", category: "Long 'more'" },
      { english: "comfortable / more comfortable / the most comfortable", spanish: "cómodo / más cómodo / el más cómodo", category: "Long 'more'" },
      { english: "dangerous / more dangerous / the most dangerous", spanish: "peligroso / más peligroso / el más peligroso", category: "Long 'more'" },
      { english: "successful / more successful / the most successful", spanish: "exitoso / más exitoso / el más exitoso", category: "Long 'more'" },
    ] as CognateWord[],
  },
  wave3: {
    title: "Irregulars — No Pattern, Just Memorize",
    titleEs: "Irregulares — Sin patrón, solo memoriza",
    description:
      "Five irregular comparisons. There's no pattern — they don't follow either rule. The good news: they're the FIVE most common, so memorizing them solves most of the irregular problem.",
    descriptionEs:
      "Cinco comparaciones irregulares. No tienen patrón — no siguen ninguna regla. La buena noticia: son los CINCO más comunes, así que memorizarlos resuelve la mayor parte del problema irregular.",
    words: [
      {
        english: "good / better / the best",
        spanish: "bueno / mejor / el mejor",
        category: "Irregular",
        pronunciationNote:
          "Most common irregular. NEVER say 'more better' — that's the #1 error among Spanish speakers.",
        pronunciationNoteEs:
          "El irregular más común. NUNCA digas 'more better' — ese es el error #1 entre hispanohablantes.",
      },
      { english: "bad / worse / the worst", spanish: "malo / peor / el peor", category: "Irregular" },
      {
        english: "far / farther / the farthest",
        spanish: "lejos / más lejos / el más lejos",
        category: "Irregular",
        pronunciationNote: "'Further' is also accepted — same meaning. Both are correct.",
        pronunciationNoteEs: "'Further' también se acepta — mismo significado. Ambas son correctas.",
      },
      { english: "little / less / the least", spanish: "poco / menos / el menos", category: "Irregular" },
      { english: "much / more / the most", spanish: "mucho / más / el más", category: "Irregular" },
    ] as CognateWord[],
  },
};

// ─── Section B: Building Comparatives (X is -er/more X than Y) ───────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Step 1: Short adjective + -er + than",
    labelEs: "Paso 1: Adjetivo corto + -er + than",
    description:
      "The basic pattern for short adjectives: 'X is [adjective+er] than Y'. The word 'than' connects the two things being compared.",
    descriptionEs:
      "El patrón básico para adjetivos cortos: 'X is [adjetivo+er] than Y'. La palabra 'than' conecta las dos cosas comparadas.",
    sentences: [
      { english: "My phone is faster than my old one.", spanish: "Mi teléfono es más rápido que mi viejo.", highlight: "faster than" },
      { english: "Mexico City is bigger than Boston.", spanish: "Ciudad de México es más grande que Boston.", highlight: "bigger than" },
      { english: "She's taller than her brother.", spanish: "Ella es más alta que su hermano.", highlight: "taller than" },
      { english: "This restaurant is cheaper than the other one.", spanish: "Este restaurante es más barato que el otro.", highlight: "cheaper than" },
    ],
  },
  {
    label: "Step 2: Long adjective + more + than",
    labelEs: "Paso 2: Adjetivo largo + more + than",
    description:
      "For longer adjectives, 'more X than'. Same comparison structure — different signal word. NEVER combine: not 'more bigger', not 'more interesting-er'.",
    descriptionEs:
      "Para adjetivos más largos, 'more X than'. Misma estructura — palabra de señalización diferente. NUNCA combines: no 'more bigger', no 'more interesting-er'.",
    sentences: [
      { english: "This book is more interesting than the last one.", spanish: "Este libro es más interesante que el anterior.", highlight: "more interesting than" },
      { english: "New York is more expensive than Mexico City.", spanish: "Nueva York es más cara que Ciudad de México.", highlight: "more expensive than" },
      { english: "Her job is more difficult than mine.", spanish: "Su trabajo es más difícil que el mío.", highlight: "more difficult than" },
      { english: "This route is more dangerous than the highway.", spanish: "Esta ruta es más peligrosa que la autopista.", highlight: "more dangerous than" },
    ],
  },
  {
    label: "Step 3: Irregulars — better, worse, more, less",
    labelEs: "Paso 3: Irregulares — better, worse, more, less",
    description:
      "The irregulars need their own block because they're so common. NEVER 'more better' — just 'better'. NEVER 'more worse' — just 'worse'.",
    descriptionEs:
      "Los irregulares necesitan su propio bloque porque son muy comunes. NUNCA 'more better' — solo 'better'. NUNCA 'more worse' — solo 'worse'.",
    sentences: [
      { english: "This coffee is better than the one at home.", spanish: "Este café es mejor que el de casa.", highlight: "better than" },
      { english: "The weather today is worse than yesterday.", spanish: "El clima hoy está peor que ayer.", highlight: "worse than" },
      { english: "I have more time on weekends.", spanish: "Tengo más tiempo los fines de semana.", highlight: "more" },
      { english: "She has less work this week than last week.", spanish: "Ella tiene menos trabajo esta semana que la pasada.", highlight: "less" },
    ],
  },
  {
    label: "Step 4: 'as ... as' — When Two Things Are Equal",
    labelEs: "Paso 4: 'as ... as' — Cuando dos cosas son iguales",
    description:
      "When two things are EQUAL, use 'as X as'. For NEGATIVE comparison (not equal), use 'not as X as' — softer than 'less X than'.",
    descriptionEs:
      "Cuando dos cosas son IGUALES, usa 'as X as'. Para comparación NEGATIVA (no iguales), usa 'not as X as' — más suave que 'less X than'.",
    sentences: [
      { english: "My phone is as fast as yours.", spanish: "Mi teléfono es tan rápido como el tuyo.", highlight: "as fast as" },
      { english: "She's as tall as her sister.", spanish: "Ella es tan alta como su hermana.", highlight: "as tall as" },
      { english: "This restaurant isn't as expensive as I thought.", spanish: "Este restaurante no es tan caro como pensé.", highlight: "isn't as expensive as" },
      { english: "The movie wasn't as good as the book.", spanish: "La película no fue tan buena como el libro.", highlight: "wasn't as good as" },
    ],
  },
];

// ─── Section C: Building Superlatives (the -est / the most X) ────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "The -est — Short Adjectives",
    labelEs: "The -est — Adjetivos cortos",
    description:
      "For short adjectives, add -est and put 'the' in front: 'the biggest', 'the fastest', 'the cheapest'. The 'the' is REQUIRED — it makes it superlative.",
    descriptionEs:
      "Para adjetivos cortos, agrega -est y pon 'the' adelante: 'the biggest', 'the fastest', 'the cheapest'. El 'the' es OBLIGATORIO — eso lo hace superlativo.",
    sentences: [
      { english: "Mexico City is the biggest city in Mexico.", spanish: "Ciudad de México es la ciudad más grande de México.", highlight: "the biggest" },
      { english: "She's the tallest person in our team.", spanish: "Ella es la persona más alta de nuestro equipo.", highlight: "the tallest" },
      { english: "This is the cheapest hotel in the area.", spanish: "Este es el hotel más barato de la zona.", highlight: "the cheapest" },
      { english: "He's the youngest manager at the company.", spanish: "Él es el gerente más joven de la empresa.", highlight: "the youngest" },
    ],
  },
  {
    label: "The most — Long Adjectives",
    labelEs: "The most — Adjetivos largos",
    description:
      "For long adjectives: 'the most X'. Just like 'more' for comparatives, but with 'the most' for superlatives.",
    descriptionEs:
      "Para adjetivos largos: 'the most X'. Igual que 'more' para comparativos, pero con 'the most' para superlativos.",
    sentences: [
      { english: "It's the most interesting book I've read this year.", spanish: "Es el libro más interesante que he leído este año.", highlight: "the most interesting" },
      { english: "She's the most successful person in her family.", spanish: "Ella es la persona más exitosa de su familia.", highlight: "the most successful" },
      { english: "This is the most expensive restaurant in town.", spanish: "Este es el restaurante más caro de la ciudad.", highlight: "the most expensive" },
      { english: "That was the most difficult exam of the year.", spanish: "Ese fue el examen más difícil del año.", highlight: "the most difficult" },
    ],
  },
  {
    label: "The Best, The Worst, The Most — Irregulars",
    labelEs: "The Best, The Worst, The Most — Irregulares",
    description:
      "The irregular superlatives. 'The best' (NOT 'the most good'), 'the worst' (NOT 'the most bad'), 'the most' (NOT 'the muchest'). Memorize, then use freely.",
    descriptionEs:
      "Los superlativos irregulares. 'The best' (NO 'the most good'), 'the worst' (NO 'the most bad'), 'the most' (NO 'the muchest'). Memoriza, después úsalos libremente.",
    sentences: [
      { english: "This is the best coffee in the city.", spanish: "Este es el mejor café de la ciudad.", highlight: "the best" },
      { english: "That was the worst meeting of the year.", spanish: "Esa fue la peor junta del año.", highlight: "the worst" },
      { english: "She has the most experience on the team.", spanish: "Ella tiene la más experiencia del equipo.", highlight: "the most" },
      { english: "I drink the least coffee of anyone here.", spanish: "Yo tomo el menos café de todos aquí.", highlight: "the least" },
    ],
  },
  {
    label: "Real Comparisons — Mixing All Forms",
    labelEs: "Comparaciones reales — Mezclando todas las formas",
    description:
      "In real conversation you mix comparatives and superlatives. This block shows how natives weave both forms into a single thought.",
    descriptionEs:
      "En conversación real mezclas comparativos y superlativos. Este bloque muestra cómo los nativos tejen ambas formas en un solo pensamiento.",
    sentences: [
      {
        english: "This restaurant is more expensive than the other one, but it's the best in the area.",
        spanish: "Este restaurante es más caro que el otro, pero es el mejor de la zona.",
        highlight: "more expensive / the best",
      },
      {
        english: "Her job is harder than mine, but it pays better and the team is the most supportive.",
        spanish: "Su trabajo es más difícil que el mío, pero paga mejor y el equipo es el más solidario.",
        highlight: "harder / better / the most supportive",
      },
      {
        english: "Mexico City is bigger than Monterrey, but Monterrey is the cleanest city in the country.",
        spanish: "Ciudad de México es más grande que Monterrey, pero Monterrey es la ciudad más limpia del país.",
        highlight: "bigger / the cleanest",
      },
      {
        english: "This summer is hotter than last summer, but it's not the hottest one I remember.",
        spanish: "Este verano está más caliente que el verano pasado, pero no es el más caliente que recuerdo.",
        highlight: "hotter / the hottest",
      },
    ],
  },
];

// ─── Section D: Boss Sentence — Comparing Real Things (Connector Challenge) ──

export const connectorSentences = {
  connectors: [
    {
      word: "than",
      wordEs: "que",
      example: "My new phone is faster than my old one.",
      exampleEs: "Mi teléfono nuevo es más rápido que el viejo.",
      use: "The comparison connector. Always pairs with -er or 'more'. Reduced to 'thun' in fast speech.",
      useEs: "El conector de comparación. Siempre va con -er o 'more'. Se reduce a 'thun' en habla rápida.",
    },
    {
      word: "the most",
      wordEs: "el/la más",
      example: "It's the most interesting book in my library.",
      exampleEs: "Es el libro más interesante de mi biblioteca.",
      use: "Superlative for long adjectives. The 'the' is REQUIRED — never just 'most interesting'.",
      useEs: "Superlativo para adjetivos largos. El 'the' es OBLIGATORIO — nunca solo 'most interesting'.",
    },
    {
      word: "as ... as",
      wordEs: "tan ... como",
      example: "My phone is as fast as yours.",
      exampleEs: "Mi teléfono es tan rápido como el tuyo.",
      use: "Equal comparison. Same idea on both sides. Add 'not' in front to negate: 'not as fast as'.",
      useEs: "Comparación de igualdad. Misma idea en ambos lados. Agrega 'not' adelante para negar: 'not as fast as'.",
    },
    {
      word: "much / way more",
      wordEs: "mucho más",
      example: "This route is way more dangerous than the highway.",
      exampleEs: "Esta ruta es mucho más peligrosa que la autopista.",
      use: "Intensifies comparisons. 'Way more' is informal but very common in spoken English.",
      useEs: "Intensifica las comparaciones. 'Way more' es informal pero muy común en inglés hablado.",
    },
    {
      word: "by far",
      wordEs: "por mucho",
      example: "She's by far the best player on the team.",
      exampleEs: "Ella es por mucho la mejor jugadora del equipo.",
      use: "Strengthens superlatives. Signals there's no close second.",
      useEs: "Refuerza superlativos. Señala que no hay un segundo cercano.",
    },
  ],
  bossSentence: {
    english:
      "I just moved into a new apartment, and let me compare. The new one is bigger than my old place and way more comfortable. The kitchen is the most modern I've ever had. It's a little more expensive than my old apartment, but the location is much better — by far the best neighborhood in the city. Honestly, this is the best decision I've made all year.",
    spanish:
      "Acabo de mudarme a un nuevo departamento, y déjame comparar. El nuevo es más grande que mi lugar anterior y mucho más cómodo. La cocina es la más moderna que he tenido. Es un poco más caro que mi viejo departamento, pero la ubicación es mucho mejor — por mucho el mejor vecindario de la ciudad. Honestamente, esta es la mejor decisión que he tomado en todo el año.",
    explanation:
      "Six sentences. Comparatives (bigger, more comfortable, more expensive, better) AND superlatives (the most modern, by far the best, the best). Plus intensifiers (way more, much better, by far). This is what a real comparison sounds like in fast English.",
    explanationEs:
      "Seis oraciones. Comparativos (bigger, more comfortable, more expensive, better) Y superlativos (the most modern, by far the best, the best). Más intensificadores (way more, much better, by far). Así suena una comparación real en inglés rápido.",
  },
};

// ─── Section E: Pronunciation Lab — Comparison Sounds ────────────────────────

export const pronunciationDrills: PronunciationDrillItem[] = [
  {
    word: "than",
    spanishStress: "THAN (full pronunciation, both letters strong)",
    englishStress: "thun (reduced, almost like 'th' + schwa + 'n')",
    tip: "In fast speech, 'than' is reduced. 'Faster than' sounds like 'fasterthun' — almost one word.",
    tipEs: "En habla rápida, 'than' se reduce. 'Faster than' suena como 'fasterthun' — casi una sola palabra.",
  },
  {
    word: "bigger",
    spanishStress: "BI-GER (Spanish G hard)",
    englishStress: "BIG-er (the -er is a schwa-r sound)",
    tip: "The -er at the end is the 'schwa-r' sound: relaxed, not stressed. Like the end of 'teacher' or 'better'.",
    tipEs: "El -er al final es el sonido 'schwa-r': relajado, sin acento. Como el final de 'teacher' o 'better'.",
  },
  {
    word: "the most",
    spanishStress: "the MOST (both words equal)",
    englishStress: "thuh MOST (the 'the' is reduced, MOST is heavily stressed)",
    tip: "Stress on MOST. The 'the' before it is reduced to 'thuh'. 'The most expensive' = 'thuh MOST expensive'.",
    tipEs: "Acento en MOST. El 'the' previo se reduce a 'thuh'. 'The most expensive' = 'thuh MOST expensive'.",
  },
  {
    word: "better",
    spanishStress: "BE-TER (Spanish stress, hard T)",
    englishStress: "BET-er (American T is soft, almost like a quick D)",
    tip: "American 'better' sounds like 'BED-er'. The middle T is soft — almost a quick D sound.",
    tipEs: "El 'better' americano suena como 'BED-er'. La T del medio es suave — casi una D rápida.",
  },
  {
    word: "worse",
    spanishStress: "WOR-SE (two syllables)",
    englishStress: "WURS (one syllable, ends in sharp S)",
    tip: "ONE syllable. Rhymes with 'curse' or 'nurse'. Don't add an extra syllable at the end.",
    tipEs: "UNA sílaba. Rima con 'curse' o 'nurse'. No agregues sílaba extra al final.",
  },
  {
    word: "most",
    spanishStress: "MOST (regular pronunciation)",
    englishStress: "MOHST (long 'oh' sound, sharp 'st')",
    tip: "Long 'oh' sound. Rhymes with 'toast' or 'host'. Sharp 'st' at the end.",
    tipEs: "Sonido 'oh' largo. Rima con 'toast' o 'host'. 'st' agudo al final.",
  },
  {
    word: "easier",
    spanishStress: "e-SI-er (Spanish-style stress)",
    englishStress: "EE-zee-er (three syllables, stress on first, soft Z)",
    tip: "Three syllables: EE-zee-er. The 's' becomes a 'z' sound, and the stress is on the first syllable.",
    tipEs: "Tres sílabas: EE-zee-er. La 's' se vuelve sonido 'z', y el acento está en la primera sílaba.",
  },
  {
    word: "way more",
    spanishStress: "WAY MORE (both words equal)",
    englishStress: "way-MORE (linked, MORE is stressed)",
    tip: "Two words but linked tightly. The stress is on MORE — 'WAY more expensive' becomes 'way-MORE expensive'.",
    tipEs: "Dos palabras pero ligadas. El acento está en MORE — 'WAY more expensive' se vuelve 'way-MORE expensive'.",
  },
];

// ─── Section F: Vocabulary List for Self-Test ────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Short -er adjectives
  { english: "bigger", spanish: "más grande", type: "phrase" },
  { english: "smaller", spanish: "más pequeño", type: "phrase" },
  { english: "faster", spanish: "más rápido", type: "phrase" },
  { english: "slower", spanish: "más lento", type: "phrase" },
  { english: "taller", spanish: "más alto", type: "phrase" },
  { english: "shorter", spanish: "más bajo", type: "phrase" },
  { english: "older", spanish: "más viejo", type: "phrase" },
  { english: "younger", spanish: "más joven", type: "phrase" },
  { english: "cheaper", spanish: "más barato", type: "phrase" },
  { english: "easier", spanish: "más fácil", type: "phrase" },
  // Long 'more' adjectives
  { english: "more interesting", spanish: "más interesante", type: "phrase" },
  { english: "more expensive", spanish: "más caro", type: "phrase" },
  { english: "more important", spanish: "más importante", type: "phrase" },
  { english: "more difficult", spanish: "más difícil", type: "phrase" },
  { english: "more popular", spanish: "más popular", type: "phrase" },
  { english: "more comfortable", spanish: "más cómodo", type: "phrase" },
  // Irregulars (comparative)
  { english: "better", spanish: "mejor", type: "phrase" },
  { english: "worse", spanish: "peor", type: "phrase" },
  { english: "more", spanish: "más", type: "phrase" },
  { english: "less", spanish: "menos", type: "phrase" },
  { english: "farther / further", spanish: "más lejos", type: "phrase" },
  // Superlatives
  { english: "the biggest", spanish: "el más grande", type: "phrase" },
  { english: "the fastest", spanish: "el más rápido", type: "phrase" },
  { english: "the cheapest", spanish: "el más barato", type: "phrase" },
  { english: "the most interesting", spanish: "el más interesante", type: "phrase" },
  { english: "the most expensive", spanish: "el más caro", type: "phrase" },
  { english: "the most important", spanish: "el más importante", type: "phrase" },
  { english: "the best", spanish: "el mejor", type: "phrase" },
  { english: "the worst", spanish: "el peor", type: "phrase" },
  { english: "the most", spanish: "el más", type: "phrase" },
  { english: "the least", spanish: "el menos", type: "phrase" },
  // Connectors
  { english: "than", spanish: "que (en comparación)", type: "marker" },
  { english: "as ... as", spanish: "tan ... como", type: "marker" },
  { english: "not as ... as", spanish: "no tan ... como", type: "marker" },
  { english: "way more", spanish: "mucho más", type: "marker" },
  { english: "much better", spanish: "mucho mejor", type: "marker" },
  { english: "by far", spanish: "por mucho", type: "marker" },
  // Useful phrases
  { english: "It's the best in the city.", spanish: "Es el mejor de la ciudad.", type: "phrase" },
  { english: "Mexico City is bigger than Monterrey.", spanish: "Ciudad de México es más grande que Monterrey.", type: "phrase" },
  { english: "This is way more comfortable.", spanish: "Esto es mucho más cómodo.", type: "phrase" },
];
