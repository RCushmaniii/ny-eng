// Advanced course unit metadata — "Speak with Confidence" (B2-C1)
//
// 10 units, 3 sections each. See docs/ADVANCED-COURSE-PLAN.md for the full
// pedagogical rationale and section pattern.

export interface AdvancedUnit {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  description: string;
  descriptionEs: string;
  /** What learners will be able to do after this unit */
  outcome: string;
  outcomeEs: string;
  /** Lucide icon name for the unit card */
  icon: string;
}

export const advancedInfo = {
  title: "Speak with Confidence",
  titleEs: "Habla con Confianza",
  tagline: "The polish that turns 'fluent' into 'polished'.",
  taglineEs: "El pulido que convierte 'fluido' en 'pulido'.",
  description:
    "A free 10-unit advanced course for high B2 to C1 Spanish speakers. Skill-based drills that fix the granular errors and pronunciation tells that mark a non-native speaker — even at advanced levels. No more themes. No more vocabulary memorization. Just precision.",
  descriptionEs:
    "Un curso avanzado gratuito de 10 unidades para hispanohablantes de nivel B2 alto a C1. Ejercicios basados en habilidades que corrigen los errores granulares y los detalles de pronunciación que delatan a un hablante no nativo — incluso en niveles avanzados. Sin más temas. Sin memorización de vocabulario. Solo precisión.",
  basePath: {
    en: "/en/course/advanced",
    es: "/es/curso/avanzado",
  },
};

export const advancedUnits: AdvancedUnit[] = [
  {
    id: 1,
    slug: "unit-1",
    slugEs: "unidad-1",
    title: "Weak Phrasing → Strong Phrasing",
    titleEs: "Frases Débiles → Frases Fuertes",
    subtitle: "Trade 'got', 'made', and 'did' for 'earned', 'built', and 'delivered'.",
    subtitleEs: "Cambia 'got', 'made' y 'did' por 'earned', 'built' y 'delivered'.",
    description:
      "Advanced learners use a small set of weak verbs and adverbs that signal non-native English. This unit replaces those with the precise, strong language that native professionals reach for.",
    descriptionEs:
      "Los hablantes avanzados usan un conjunto pequeño de verbos y adverbios débiles que delatan al inglés no nativo. Esta unidad los reemplaza con el lenguaje preciso y fuerte al que recurren los profesionales nativos.",
    outcome:
      "You'll spot weak verbs and adverbs in your own speech and replace them with strong, specific language.",
    outcomeEs:
      "Identificarás verbos y adverbios débiles en tu propio discurso y los reemplazarás con un lenguaje fuerte y específico.",
    icon: "Sparkles",
  },
  {
    id: 2,
    slug: "unit-2",
    slugEs: "unidad-2",
    title: "Word Traps That Trip Up Advanced Speakers",
    titleEs: "Trampas de Palabras que Confunden a Hablantes Avanzados",
    subtitle: "Fewer/less, say/tell, make/do — the errors that haunt every advanced learner.",
    subtitleEs: "Fewer/less, say/tell, make/do — los errores que persiguen a cada estudiante avanzado.",
    description:
      "There's a short list of word pairs that even C1 speakers get wrong. This unit forces you to choose correctly under pressure so the right one becomes automatic.",
    descriptionEs:
      "Hay una lista corta de pares de palabras que incluso los hablantes C1 confunden. Esta unidad te obliga a elegir correctamente bajo presión para que la opción correcta se vuelva automática.",
    outcome:
      "You'll never confuse fewer/less, say/tell, or make/do again.",
    outcomeEs:
      "Nunca volverás a confundir fewer/less, say/tell ni make/do.",
    icon: "AlertTriangle",
  },
  {
    id: 3,
    slug: "unit-3",
    slugEs: "unidad-3",
    title: "Pronouns Done Right",
    titleEs: "Pronombres Bien Usados",
    subtitle: "Subject vs object, reflexive traps, direct vs indirect — clean it all up.",
    subtitleEs: "Sujeto vs objeto, trampas reflexivas, directo vs indirecto — limpia todo.",
    description:
      "Pronoun errors are subtle but they're one of the fastest tells. This unit fixes them at the sentence level: he vs him, myself vs me, who vs whom in real contexts.",
    descriptionEs:
      "Los errores de pronombres son sutiles pero son una de las señales más rápidas. Esta unidad los corrige a nivel de oración: he vs him, myself vs me, who vs whom en contextos reales.",
    outcome: "You'll stop misplacing pronouns in fast speech.",
    outcomeEs: "Dejarás de colocar mal los pronombres en el habla rápida.",
    icon: "Users",
  },
  {
    id: 4,
    slug: "unit-4",
    slugEs: "unidad-4",
    title: "Which, That, Who, When",
    titleEs: "Which, That, Who, When",
    subtitle: "Relative clauses without the confusion.",
    subtitleEs: "Cláusulas relativas sin la confusión.",
    description:
      "Defining vs non-defining clauses, who vs whom, when, where, whose. The grammar of relative clauses, drilled until you stop hesitating mid-sentence.",
    descriptionEs:
      "Cláusulas definitorias vs no definitorias, who vs whom, when, where, whose. La gramática de las cláusulas relativas, practicada hasta que dejes de dudar a mitad de una oración.",
    outcome: "You'll choose the right relative pronoun without thinking.",
    outcomeEs: "Elegirás el pronombre relativo correcto sin pensarlo.",
    icon: "Link",
  },
  {
    id: 5,
    slug: "unit-5",
    slugEs: "unidad-5",
    title: "Articles: A, An, The, or Nothing",
    titleEs: "Artículos: A, An, The, o Nada",
    subtitle: "The lifelong Spanish-speaker error, finally fixed.",
    subtitleEs: "El error eterno de los hispanohablantes, finalmente corregido.",
    description:
      "Articles are the single most persistent error for Spanish speakers — they appear in nearly every sentence and even C2 speakers get them wrong. This unit drills the patterns until article use becomes intuitive.",
    descriptionEs:
      "Los artículos son el error más persistente para los hispanohablantes — aparecen en casi cada oración e incluso los hablantes C2 los confunden. Esta unidad practica los patrones hasta que el uso de los artículos se vuelva intuitivo.",
    outcome: "You'll use 'a', 'the', and zero articles correctly in real speech.",
    outcomeEs: "Usarás 'a', 'the' y los artículos cero correctamente en el habla real.",
    icon: "Type",
  },
  {
    id: 6,
    slug: "unit-6",
    slugEs: "unidad-6",
    title: "Pronunciation: Hitting the Hard Sounds",
    titleEs: "Pronunciación: Acertando los Sonidos Difíciles",
    subtitle: "S endings, -en endings, TH, R — the sounds that give you away.",
    subtitleEs: "Terminaciones en S, terminaciones en -en, TH, R — los sonidos que te delatan.",
    description:
      "Even fluent speakers carry pronunciation tells that signal non-native English. This unit targets the specific sounds that mark Spanish-speaker English: the dropped S, the missed -en, the soft TH, and the elusive R.",
    descriptionEs:
      "Incluso los hablantes fluidos llevan detalles de pronunciación que señalan el inglés no nativo. Esta unidad se enfoca en los sonidos específicos que marcan el inglés del hispanohablante.",
    outcome: "You'll hit the sounds that matter most for sounding native.",
    outcomeEs: "Acertarás los sonidos más importantes para sonar nativo.",
    icon: "Mic",
  },
  {
    id: 7,
    slug: "unit-7",
    slugEs: "unidad-7",
    title: "Contractions, Flipped",
    titleEs: "Contracciones, Invertidas",
    subtitle: "I'd've, shouldn't've — and when NOT to contract.",
    subtitleEs: "I'd've, shouldn't've — y cuándo NO contraer.",
    description:
      "Advanced contractions like 'I'd've' and 'shouldn't've' are how natives actually speak. This unit teaches them — plus the equally important question of when contractions sound wrong.",
    descriptionEs:
      "Las contracciones avanzadas como 'I'd've' y 'shouldn't've' son como hablan realmente los nativos. Esta unidad las enseña — además de la pregunta igualmente importante de cuándo las contracciones suenan mal.",
    outcome: "You'll match the contraction level of any conversation.",
    outcomeEs: "Igualarás el nivel de contracción de cualquier conversación.",
    icon: "Zap",
  },
  {
    id: 8,
    slug: "unit-8",
    slugEs: "unidad-8",
    title: "Prefixes & Suffixes",
    titleEs: "Prefijos y Sufijos",
    subtitle: "Decode any English word by its parts.",
    subtitleEs: "Decodifica cualquier palabra en inglés por sus partes.",
    description:
      "Most English words can be decoded if you know what un-, dis-, mis-, over-, -tion, -ment, and -ness actually mean. This unit gives you the toolkit to expand your vocabulary by recognition, not memorization.",
    descriptionEs:
      "La mayoría de las palabras en inglés se pueden decodificar si sabes qué significan realmente un-, dis-, mis-, over-, -tion, -ment y -ness. Esta unidad te da las herramientas para expandir tu vocabulario por reconocimiento, no por memorización.",
    outcome: "You'll understand new words without looking them up.",
    outcomeEs: "Entenderás palabras nuevas sin buscarlas.",
    icon: "Puzzle",
  },
  {
    id: 9,
    slug: "unit-9",
    slugEs: "unidad-9",
    title: "Sentence Construction & Flow",
    titleEs: "Construcción de Oraciones y Flujo",
    subtitle: "Vary your sentences without sounding robotic.",
    subtitleEs: "Varía tus oraciones sin sonar robótico.",
    description:
      "Simple, compound, complex — and how to weave them together so your spoken English flows like a native's. Plus the word-order traps that make non-native sentences sound off.",
    descriptionEs:
      "Simple, compuesto, complejo — y cómo entrelazarlos para que tu inglés hablado fluya como el de un nativo. Además, las trampas de orden de palabras que hacen que las oraciones no nativas suenen mal.",
    outcome: "Your spoken English will flow with native-like rhythm and variety.",
    outcomeEs: "Tu inglés hablado fluirá con el ritmo y la variedad de un nativo.",
    icon: "Layers",
  },
  {
    id: 10,
    slug: "unit-10",
    slugEs: "unidad-10",
    title: "Sounding Natural, Not Translated",
    titleEs: "Sonando Natural, No Traducido",
    subtitle: "Stop translating from Spanish. Start thinking in English.",
    subtitleEs: "Deja de traducir del español. Empieza a pensar en inglés.",
    description:
      "The capstone. Collocations native speakers expect, the rhythm of spoken English, and the mental shift from translating to thinking. The graduation moment of advanced English.",
    descriptionEs:
      "La unidad final. Las colocaciones que esperan los nativos, el ritmo del inglés hablado y el cambio mental de traducir a pensar. El momento de graduación del inglés avanzado.",
    outcome: "You'll think in English instead of translating from Spanish.",
    outcomeEs: "Pensarás en inglés en lugar de traducir del español.",
    icon: "Sparkle",
  },
];
