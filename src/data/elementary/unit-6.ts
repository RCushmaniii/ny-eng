// Unit 6: "How Much, How Many" — Quantifiers
//
// Pedagogical arc:
// Section A — 3 waves: countable nouns, uncountable nouns, the quantifiers themselves
// Section B — Much vs. many + a lot of + a few/a little
// Section C — Some / any / no — the affirmative/negative/question pattern
// Section D — Boss Sentence: a real meeting recap using all the quantifiers
// Section E — Pronunciation: 'a lot of' linking, 'any' vowel, 'some' reduction
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

// ─── Section A: Countable, Uncountable, and Quantifiers ──────────────────────

export const cognateWaves = {
  wave1: {
    title: "Countable Nouns — Things You Can Count",
    titleEs: "Sustantivos Contables — Cosas que puedes contar",
    description:
      "If you can put a NUMBER in front (one chair, two chairs), the noun is countable. Plural form ends in -s. These take 'many' and 'a few'.",
    descriptionEs:
      "Si puedes poner un NÚMERO adelante (one chair, two chairs), el sustantivo es contable. La forma plural termina en -s. Llevan 'many' y 'a few'.",
    words: [
      { english: "chairs", spanish: "sillas", category: "Countable" },
      { english: "people", spanish: "personas", category: "Countable" },
      {
        english: "books",
        spanish: "libros",
        category: "Countable",
        pronunciationNote: "Plural -s sounds like /s/ after voiceless k.",
        pronunciationNoteEs: "El -s plural suena /s/ después de k sorda.",
      },
      { english: "meetings", spanish: "juntas", category: "Countable" },
      { english: "emails", spanish: "correos", category: "Countable" },
      { english: "ideas", spanish: "ideas", category: "Countable" },
      { english: "friends", spanish: "amigos", category: "Countable" },
      { english: "hours", spanish: "horas", category: "Countable" },
      { english: "questions", spanish: "preguntas", category: "Countable" },
      { english: "problems", spanish: "problemas", category: "Countable" },
      { english: "minutes", spanish: "minutos", category: "Countable" },
      { english: "days", spanish: "días", category: "Countable" },
    ] as CognateWord[],
  },
  wave2: {
    title: "Uncountable Nouns — Mass / Abstract Things",
    titleEs: "Sustantivos Incontables — Cosas masa / abstractas",
    description:
      "If you CAN'T put a number directly in front (NOT 'two waters', NOT 'three advices'), it's uncountable. No plural -s. These take 'much' and 'a little'.",
    descriptionEs:
      "Si NO puedes poner un número directamente adelante (NO 'two waters', NO 'three advices'), es incontable. Sin -s plural. Llevan 'much' y 'a little'.",
    words: [
      {
        english: "water",
        spanish: "agua",
        category: "Uncountable",
        pronunciationNote: "Never plural in English (unlike Spanish 'aguas'). Always 'water'.",
        pronunciationNoteEs: "Nunca plural en inglés (distinto a 'aguas' en español). Siempre 'water'.",
      },
      { english: "time", spanish: "tiempo", category: "Uncountable" },
      { english: "money", spanish: "dinero", category: "Uncountable" },
      {
        english: "advice",
        spanish: "consejo",
        category: "Uncountable",
        pronunciationNote: "ALWAYS uncountable. NEVER 'advices'. The #1 Spanish-speaker error.",
        pronunciationNoteEs: "SIEMPRE incontable. NUNCA 'advices'. El error #1 de los hispanohablantes.",
      },
      { english: "work", spanish: "trabajo", category: "Uncountable" },
      {
        english: "information",
        spanish: "información",
        category: "Uncountable",
        pronunciationNote: "Always uncountable. NEVER 'informations'.",
        pronunciationNoteEs: "Siempre incontable. NUNCA 'informations'.",
      },
      { english: "traffic", spanish: "tráfico", category: "Uncountable" },
      {
        english: "news",
        spanish: "noticias",
        category: "Uncountable",
        pronunciationNote: "Looks plural, but is uncountable. 'The news IS good' (NOT 'are').",
        pronunciationNoteEs: "Parece plural, pero es incontable. 'The news IS good' (NO 'are').",
      },
      { english: "music", spanish: "música", category: "Uncountable" },
      { english: "homework", spanish: "tarea", category: "Uncountable" },
      {
        english: "furniture",
        spanish: "muebles",
        category: "Uncountable",
        pronunciationNote: "NEVER 'furnitures'. Use 'pieces of furniture' if you need to count.",
        pronunciationNoteEs: "NUNCA 'furnitures'. Usa 'pieces of furniture' si necesitas contar.",
      },
      { english: "feedback", spanish: "retroalimentación", category: "Uncountable" },
    ] as CognateWord[],
  },
  wave3: {
    title: "The Quantifiers — Words That Tell You How Much",
    titleEs: "Los Cuantificadores — Palabras que dicen cuánto",
    description:
      "Each quantifier pairs with a SPECIFIC type of noun. 'Many' takes countable. 'Much' takes uncountable. 'A lot of' is the safe choice — it works with both.",
    descriptionEs:
      "Cada cuantificador va con un tipo ESPECÍFICO de sustantivo. 'Many' va con contables. 'Much' con incontables. 'A lot of' es la opción segura — funciona con ambos.",
    words: [
      { english: "many (+ countable)", spanish: "muchos/as (con contables)", category: "Quantifier" },
      { english: "much (+ uncountable)", spanish: "mucho/a (con incontables)", category: "Quantifier" },
      { english: "a lot of (+ both)", spanish: "muchos/as (con ambos)", category: "Quantifier" },
      { english: "lots of (+ both)", spanish: "muchos/as (informal, ambos)", category: "Quantifier" },
      { english: "a few (+ countable)", spanish: "algunos pocos (contables)", category: "Quantifier" },
      { english: "a little (+ uncountable)", spanish: "un poco de (incontables)", category: "Quantifier" },
      { english: "some (+ both)", spanish: "algunos / un poco (ambos)", category: "Quantifier" },
      { english: "any (+ both, neg/quest)", spanish: "ninguno / algún (negativos/preguntas)", category: "Quantifier" },
      { english: "no (+ both)", spanish: "ningún / nada de", category: "Quantifier" },
      { english: "plenty of (+ both)", spanish: "bastante/s", category: "Quantifier" },
    ] as CognateWord[],
  },
};

// ─── Section B: Much vs. Many + a lot of + a few / a little ──────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Step 1: Many + countable plural",
    labelEs: "Paso 1: Many + plural contable",
    description:
      "Use 'many' when the noun is COUNTABLE and PLURAL. Common in questions and negatives. In affirmatives, 'a lot of' often sounds more natural than 'many'.",
    descriptionEs:
      "Usa 'many' cuando el sustantivo es CONTABLE y PLURAL. Común en preguntas y negativos. En afirmativos, 'a lot of' suele sonar más natural que 'many'.",
    sentences: [
      { english: "How many people came to the meeting?", spanish: "¿Cuántas personas vinieron a la junta?", highlight: "many" },
      { english: "I don't have many friends in this city.", spanish: "No tengo muchos amigos en esta ciudad.", highlight: "many" },
      { english: "She sent many emails today.", spanish: "Ella mandó muchos correos hoy.", highlight: "many" },
      { english: "There aren't many chairs in the room.", spanish: "No hay muchas sillas en el cuarto.", highlight: "many" },
    ],
  },
  {
    label: "Step 2: Much + uncountable",
    labelEs: "Paso 2: Much + incontable",
    description:
      "Use 'much' when the noun is UNCOUNTABLE. Almost always in questions and negatives. In affirmatives, switch to 'a lot of' — 'much' sounds formal/old-fashioned.",
    descriptionEs:
      "Usa 'much' cuando el sustantivo es INCONTABLE. Casi siempre en preguntas y negativos. En afirmativos, cambia a 'a lot of' — 'much' suena formal/anticuado.",
    sentences: [
      { english: "How much time do we have?", spanish: "¿Cuánto tiempo tenemos?", highlight: "much" },
      { english: "I don't have much money this month.", spanish: "No tengo mucho dinero este mes.", highlight: "much" },
      { english: "There isn't much traffic today.", spanish: "No hay mucho tráfico hoy.", highlight: "much" },
      { english: "She doesn't drink much coffee.", spanish: "Ella no toma mucho café.", highlight: "much" },
    ],
  },
  {
    label: "Step 3: A lot of + both — the safe choice",
    labelEs: "Paso 3: A lot of + ambos — la opción segura",
    description:
      "'A lot of' works with countable AND uncountable. When in doubt, use it. 'Lots of' is the same — slightly more informal.",
    descriptionEs:
      "'A lot of' funciona con contables E incontables. Cuando dudes, úsalo. 'Lots of' es lo mismo — ligeramente más informal.",
    sentences: [
      { english: "I have a lot of work this week.", spanish: "Tengo mucho trabajo esta semana.", highlight: "a lot of" },
      { english: "She drinks a lot of coffee.", spanish: "Ella toma mucho café.", highlight: "a lot of" },
      { english: "There are a lot of people here.", spanish: "Hay mucha gente aquí.", highlight: "a lot of" },
      { english: "We had lots of fun at the party.", spanish: "Nos divertimos mucho en la fiesta.", highlight: "lots of" },
    ],
  },
  {
    label: "Step 4: A few (countable) vs. a little (uncountable)",
    labelEs: "Paso 4: A few (contable) vs. a little (incontable)",
    description:
      "'A few' = a small POSITIVE amount of countable things ('a few friends'). 'A little' = a small POSITIVE amount of uncountable ('a little time'). Both mean 'some, but not many/much'.",
    descriptionEs:
      "'A few' = una pequeña cantidad POSITIVA de cosas contables ('a few friends'). 'A little' = una pequeña cantidad POSITIVA de incontable ('a little time'). Ambos significan 'algunos, pero no muchos'.",
    sentences: [
      { english: "I have a few questions about the report.", spanish: "Tengo algunas preguntas sobre el reporte.", highlight: "a few" },
      { english: "She has a little time before the meeting.", spanish: "Ella tiene un poco de tiempo antes de la junta.", highlight: "a little" },
      { english: "We met a few interesting people.", spanish: "Conocimos a algunas personas interesantes.", highlight: "a few" },
      { english: "I need a little help with this.", spanish: "Necesito un poco de ayuda con esto.", highlight: "a little" },
    ],
  },
];

// ─── Section C: Some / Any / No ──────────────────────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "Some — Affirmative Sentences",
    labelEs: "Some — Oraciones afirmativas",
    description:
      "Use 'some' in AFFIRMATIVE sentences. Works with both countable plurals and uncountable nouns. Translates roughly to 'algunos' or 'un poco de'.",
    descriptionEs:
      "Usa 'some' en oraciones AFIRMATIVAS. Funciona con plurales contables e incontables. Se traduce como 'algunos' o 'un poco de'.",
    sentences: [
      { english: "I have some questions for you.", spanish: "Tengo algunas preguntas para ti.", highlight: "some" },
      { english: "She bought some new books.", spanish: "Ella compró algunos libros nuevos.", highlight: "some" },
      { english: "There's some milk in the fridge.", spanish: "Hay un poco de leche en el refri.", highlight: "some" },
      { english: "We need some advice on this project.", spanish: "Necesitamos un poco de consejo en este proyecto.", highlight: "some" },
    ],
  },
  {
    label: "Any — Negatives and Questions",
    labelEs: "Any — Negativos y preguntas",
    description:
      "Use 'any' in NEGATIVES and QUESTIONS. Same rule as 'some' (works with both types of nouns), but switches WHERE you use it.",
    descriptionEs:
      "Usa 'any' en NEGATIVOS y PREGUNTAS. Misma regla que 'some' (funciona con ambos tipos), pero cambia DÓNDE lo usas.",
    sentences: [
      { english: "Do you have any questions?", spanish: "¿Tienes alguna pregunta?", highlight: "any" },
      { english: "I don't have any time today.", spanish: "No tengo tiempo hoy.", highlight: "any" },
      { english: "Are there any chairs in that room?", spanish: "¿Hay sillas en ese cuarto?", highlight: "any" },
      { english: "She doesn't speak any French.", spanish: "Ella no habla francés (nada).", highlight: "any" },
    ],
  },
  {
    label: "No — Strong Negation",
    labelEs: "No — Negación fuerte",
    description:
      "'No + noun' is stronger and shorter than 'not any + noun'. Both mean the same. Use 'no' for emphasis: 'I have NO time' is stronger than 'I don't have any time'.",
    descriptionEs:
      "'No + sustantivo' es más fuerte y corto que 'not any + sustantivo'. Ambos significan lo mismo. Usa 'no' para énfasis: 'I have NO time' es más fuerte que 'I don't have any time'.",
    sentences: [
      { english: "I have no time for that.", spanish: "No tengo tiempo para eso.", highlight: "no" },
      { english: "There are no chairs in this room.", spanish: "No hay sillas en este cuarto.", highlight: "no" },
      { english: "She has no patience for excuses.", spanish: "Ella no tiene paciencia para excusas.", highlight: "no" },
      { english: "There's no problem at all.", spanish: "No hay ningún problema.", highlight: "no" },
    ],
  },
  {
    label: "The Some/Any Exception — Offers and Requests",
    labelEs: "La excepción de Some/Any — Ofrecimientos y peticiones",
    description:
      "When you OFFER or REQUEST something — even in question form — use 'some'. Why? Because you're not really asking; you're EXPECTING yes.",
    descriptionEs:
      "Cuando OFRECES o PIDES algo — incluso en forma de pregunta — usa 'some'. ¿Por qué? Porque no estás realmente preguntando; ESPERAS un sí.",
    sentences: [
      { english: "Would you like some coffee?", spanish: "¿Te gustaría un poco de café?", highlight: "some (offer)" },
      { english: "Can I have some water, please?", spanish: "¿Me das un poco de agua, por favor?", highlight: "some (request)" },
      { english: "Could I borrow some money?", spanish: "¿Me prestas un poco de dinero?", highlight: "some (request)" },
      { english: "Do you want some help with that?", spanish: "¿Quieres ayuda con eso?", highlight: "some (offer)" },
    ],
  },
];

// ─── Section D: Boss Sentence — A Real Meeting Recap (Connector Challenge) ───

export const connectorSentences = {
  connectors: [
    {
      word: "many",
      wordEs: "muchos",
      example: "There were many people at the meeting.",
      exampleEs: "Había muchas personas en la junta.",
      use: "Use with COUNTABLE nouns. In affirmatives, 'a lot of' is more natural than 'many'.",
      useEs: "Usa con sustantivos CONTABLES. En afirmativas, 'a lot of' es más natural que 'many'.",
    },
    {
      word: "much",
      wordEs: "mucho",
      example: "We didn't have much time.",
      exampleEs: "No tuvimos mucho tiempo.",
      use: "Use with UNCOUNTABLE nouns. Almost always in negatives and questions.",
      useEs: "Usa con sustantivos INCONTABLES. Casi siempre en negativos y preguntas.",
    },
    {
      word: "a few",
      wordEs: "algunos pocos",
      example: "We had a few good ideas.",
      exampleEs: "Tuvimos algunas buenas ideas.",
      use: "A small POSITIVE amount of countable things — 'some, but not many'.",
      useEs: "Una pequeña cantidad POSITIVA de cosas contables — 'algunos, pero no muchos'.",
    },
    {
      word: "some",
      wordEs: "algunos / un poco",
      example: "There were some questions about the budget.",
      exampleEs: "Hubo algunas preguntas sobre el presupuesto.",
      use: "Use in affirmative sentences. Works with both countable and uncountable.",
      useEs: "Usa en oraciones afirmativas. Funciona con contables e incontables.",
    },
    {
      word: "no",
      wordEs: "ningún / nada de",
      example: "There were no major concerns.",
      exampleEs: "No hubo preocupaciones mayores.",
      use: "Strong negation. Shorter and more emphatic than 'not any'.",
      useEs: "Negación fuerte. Más corta y enfática que 'not any'.",
    },
    {
      word: "a lot of",
      wordEs: "mucho / muchos",
      example: "Honestly, we have a lot of work to do.",
      exampleEs: "Honestamente, tenemos mucho trabajo por hacer.",
      use: "Works with EVERYTHING — countable or uncountable. The safe choice.",
      useEs: "Funciona con TODO — contable o incontable. La opción segura.",
    },
  ],
  bossSentence: {
    english:
      "There were many people at the meeting today. We had a few good ideas, but we didn't have much time. There were some questions about the budget, but no major concerns. The team has plenty of energy, but I think we have a lot of work to do before next month.",
    spanish:
      "Hubo muchas personas en la junta hoy. Tuvimos algunas buenas ideas, pero no tuvimos mucho tiempo. Hubo algunas preguntas sobre el presupuesto, pero no hubo preocupaciones mayores. El equipo tiene mucha energía, pero creo que tenemos mucho trabajo por hacer antes del próximo mes.",
    explanation:
      "Five sentences. Six different quantifiers (many, a few, much, some, no, plenty of, a lot of). Mixing countable (people, ideas, questions, concerns) and uncountable (time, energy, work). This is what natural quantification sounds like in real meetings.",
    explanationEs:
      "Cinco oraciones. Seis cuantificadores diferentes (many, a few, much, some, no, plenty of, a lot of). Mezclando contables (people, ideas, questions, concerns) e incontables (time, energy, work). Así suena la cuantificación natural en juntas reales.",
  },
};

// ─── Section E: Pronunciation Lab — Quantifier Sounds ────────────────────────

export const pronunciationDrills: PronunciationDrillItem[] = [
  {
    word: "many",
    spanishStress: "MA-NY (Spanish 'a' sound)",
    englishStress: "MEN-ee (short 'e' sound)",
    tip: "Sounds like 'MEN-ee', NOT 'MA-nee'. Same vowel as 'pen' or 'ten'.",
    tipEs: "Suena como 'MEN-ee', NO 'MA-nee'. Misma vocal que 'pen' o 'ten'.",
  },
  {
    word: "much",
    spanishStress: "MUCH (Spanish 'u' sound)",
    englishStress: "MUHCH (short 'uh' sound, like 'cup')",
    tip: "The 'u' is short — like the 'u' in 'cup' or 'duck', not Spanish 'u'.",
    tipEs: "La 'u' es corta — como la 'u' en 'cup' o 'duck', no como la 'u' en español.",
  },
  {
    word: "any",
    spanishStress: "A-NEE (Spanish-style 'a')",
    englishStress: "EN-ee (short 'e' sound, same as 'many')",
    tip: "Sounds like 'EN-ee'. Same vowel as 'many'. NOT 'AY-nee'.",
    tipEs: "Suena como 'EN-ee'. Misma vocal que 'many'. NO 'AY-nee'.",
  },
  {
    word: "a lot of",
    spanishStress: "A LOT OF (three separate words)",
    englishStress: "uh-LOT-uh (linked, sounds like one word)",
    tip: "In fast speech, 'a lot of' merges into 'uh-LOT-uh'. The 'f' almost disappears before the next noun.",
    tipEs: "En habla rápida, 'a lot of' se junta en 'uh-LOT-uh'. La 'f' casi desaparece antes del siguiente sustantivo.",
  },
  {
    word: "some",
    spanishStress: "SOME (full pronunciation)",
    englishStress: "SUM (rhymes with 'come' or 'thumb')",
    tip: "Sounds exactly like the math word 'sum'. NOT 'soh-mey'. ONE syllable.",
    tipEs: "Suena exactamente como la palabra matemática 'sum'. NO 'soh-mey'. UNA sílaba.",
  },
  {
    word: "no (negation)",
    spanishStress: "NO (Spanish 'o')",
    englishStress: "NOH (long English 'oh' sound)",
    tip: "The 'o' is long, like in 'go' or 'toe'. Slightly more drawn out than the Spanish 'no'.",
    tipEs: "La 'o' es larga, como en 'go' o 'toe'. Un poco más estirada que el 'no' español.",
  },
  {
    word: "plenty of",
    spanishStress: "PLEN-TI OF (Spanish 'i')",
    englishStress: "PLEN-tee-uh (linked, soft T)",
    tip: "Three syllables linked: PLEN-tee-uh. The 't' is soft (American T). The 'of' becomes 'uh'.",
    tipEs: "Tres sílabas ligadas: PLEN-tee-uh. La 't' es suave (T americana). El 'of' se vuelve 'uh'.",
  },
  {
    word: "a few",
    spanishStress: "A FEW (full pronunciation)",
    englishStress: "uh-FYOO (the 'a' is reduced, FEW is stressed)",
    tip: "The 'a' is reduced to 'uh'. 'FEW' has a 'y' sound at the start: FYOO. Like 'view' or 'cue'.",
    tipEs: "La 'a' se reduce a 'uh'. 'FEW' tiene un sonido 'y' al inicio: FYOO. Como 'view' o 'cue'.",
  },
];

// ─── Section F: Vocabulary List for Self-Test ────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Countable nouns
  { english: "people", spanish: "personas", type: "phrase" },
  { english: "books", spanish: "libros", type: "phrase" },
  { english: "meetings", spanish: "juntas", type: "phrase" },
  { english: "questions", spanish: "preguntas", type: "phrase" },
  { english: "ideas", spanish: "ideas", type: "phrase" },
  { english: "friends", spanish: "amigos", type: "phrase" },
  // Uncountable nouns
  { english: "water", spanish: "agua", type: "phrase" },
  { english: "time", spanish: "tiempo", type: "phrase" },
  { english: "money", spanish: "dinero", type: "phrase" },
  { english: "advice (uncountable!)", spanish: "consejo (¡incontable!)", type: "phrase" },
  { english: "work", spanish: "trabajo", type: "phrase" },
  { english: "information (uncountable!)", spanish: "información (¡incontable!)", type: "phrase" },
  { english: "traffic", spanish: "tráfico", type: "phrase" },
  { english: "news (uncountable!)", spanish: "noticias (¡incontable!)", type: "phrase" },
  { english: "homework", spanish: "tarea", type: "phrase" },
  { english: "feedback", spanish: "retroalimentación", type: "phrase" },
  // Quantifiers
  { english: "many", spanish: "muchos (contable)", type: "marker" },
  { english: "much", spanish: "mucho (incontable)", type: "marker" },
  { english: "a lot of", spanish: "muchos / mucho (ambos)", type: "marker" },
  { english: "lots of", spanish: "muchos (informal)", type: "marker" },
  { english: "a few", spanish: "algunos pocos (contable)", type: "marker" },
  { english: "a little", spanish: "un poco (incontable)", type: "marker" },
  { english: "some", spanish: "algunos / un poco (afirmativos)", type: "marker" },
  { english: "any", spanish: "algunos (negativos/preguntas)", type: "marker" },
  { english: "no", spanish: "ningún / nada de", type: "marker" },
  { english: "plenty of", spanish: "bastante/s", type: "marker" },
  // Useful phrases
  { english: "How many people?", spanish: "¿Cuántas personas?", type: "phrase" },
  { english: "How much time?", spanish: "¿Cuánto tiempo?", type: "phrase" },
  { english: "I don't have much money.", spanish: "No tengo mucho dinero.", type: "phrase" },
  { english: "There aren't many chairs.", spanish: "No hay muchas sillas.", type: "phrase" },
  { english: "I have a few questions.", spanish: "Tengo algunas preguntas.", type: "phrase" },
  { english: "We need a little help.", spanish: "Necesitamos un poco de ayuda.", type: "phrase" },
  { english: "Do you have any questions?", spanish: "¿Tienes alguna pregunta?", type: "phrase" },
  { english: "There's no time.", spanish: "No hay tiempo.", type: "phrase" },
  { english: "Would you like some coffee?", spanish: "¿Te gustaría un poco de café?", type: "phrase" },
  { english: "We have a lot of work.", spanish: "Tenemos mucho trabajo.", type: "phrase" },
];
