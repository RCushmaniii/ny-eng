// Intermediate course unit metadata — "Building Fluency" (B1-B2)

export interface IntermediateUnit {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  description: string;
  descriptionEs: string;
  grammarFocus: string;
  grammarFocusEs: string;
  pronunciationFocus: string;
  pronunciationFocusEs: string;
  icon: string;
}

export const intermediateInfo = {
  title: "Building Fluency",
  titleEs: "Construyendo Fluidez",
  tagline: "Stop Translating. Start Thinking in English.",
  taglineEs: "Deja de Traducir. Empieza a Pensar en Inglés.",
  description:
    "A free 10-unit course for Spanish speakers at the B1-B2 level. Master phrasal verbs, complex tenses, and natural speech patterns through real-world dialogues and interactive exercises.",
  descriptionEs:
    "Un curso gratuito de 10 unidades para hispanohablantes de nivel B1-B2. Domina los phrasal verbs, tiempos complejos y patrones de habla natural a través de diálogos reales y ejercicios interactivos.",
  basePath: {
    en: "/en/course/intermediate",
    es: "/es/curso/intermedio",
  },
};

export const intermediateUnits: IntermediateUnit[] = [
  {
    id: 1,
    slug: "unit-1",
    slugEs: "unidad-1",
    title: "The Phrasal Verb Problem",
    titleEs: "El Problema de los Phrasal Verbs",
    subtitle: "Why 'give up' doesn't mean 'dar arriba'",
    subtitleEs: "Por qué 'give up' no significa 'dar arriba'",
    description:
      "Phrasal verbs are the #1 blocker for Spanish speakers. This unit teaches you how to decode them by grouping particles with base verbs — and introduces the present perfect tense.",
    descriptionEs:
      "Los phrasal verbs son el obstáculo #1 para hispanohablantes. Esta unidad te enseña a decodificarlos agrupando partículas con verbos base — e introduce el presente perfecto.",
    grammarFocus: "Present perfect vs. simple past",
    grammarFocusEs: "Presente perfecto vs. pasado simple",
    pronunciationFocus: "Stress in phrasal verbs",
    pronunciationFocusEs: "Acentuación en phrasal verbs",
    icon: "Puzzle",
  },
  {
    id: 2,
    slug: "unit-2",
    slugEs: "unidad-2",
    title: "At the Office",
    titleEs: "En la Oficina",
    subtitle: "Meetings, emails, and status updates",
    subtitleEs: "Juntas, correos y reportes de estado",
    description:
      "Master the language of the modern workplace. Learn to give updates, manage tasks, and communicate professionally using phrasal verbs your colleagues actually use.",
    descriptionEs:
      "Domina el lenguaje del lugar de trabajo moderno. Aprende a dar actualizaciones, gestionar tareas y comunicarte profesionalmente con phrasal verbs que tus colegas realmente usan.",
    grammarFocus: "Present perfect continuous",
    grammarFocusEs: "Presente perfecto continuo",
    pronunciationFocus: "Weak forms in function words",
    pronunciationFocusEs: "Formas débiles en palabras funcionales",
    icon: "Briefcase",
  },
  {
    id: 3,
    slug: "unit-3",
    slugEs: "unidad-3",
    title: "Getting Around",
    titleEs: "Moviéndose",
    subtitle: "Airports, hotels, and taxis — with confidence",
    subtitleEs: "Aeropuertos, hoteles y taxis — con confianza",
    description:
      "Travel English that goes beyond tourist phrases. Handle real situations: delayed flights, hotel problems, getting directions. Plus the first conditional for making plans.",
    descriptionEs:
      "Inglés para viajes que va más allá de frases turísticas. Maneja situaciones reales: vuelos retrasados, problemas de hotel, pedir direcciones. Más el primer condicional para hacer planes.",
    grammarFocus: "First conditional",
    grammarFocusEs: "Primer condicional",
    pronunciationFocus: "Contractions in conditionals",
    pronunciationFocusEs: "Contracciones en condicionales",
    icon: "Plane",
  },
  {
    id: 4,
    slug: "unit-4",
    slugEs: "unidad-4",
    title: "Making Plans",
    titleEs: "Haciendo Planes",
    subtitle: "Would you like to join us?",
    subtitleEs: "¿Te gustaría acompañarnos?",
    description:
      "The polite, sophisticated English of invitations and suggestions. Master 'would' and 'could' as the politeness upgrade that separates B1 from B2 speakers — plus the second conditional for hypothetical plans.",
    descriptionEs:
      "El inglés cortés y sofisticado de invitaciones y sugerencias. Domina 'would' y 'could' como la mejora de cortesía que separa a hablantes B1 de B2 — más el segundo condicional para planes hipotéticos.",
    grammarFocus: "Modals (would, could) + second conditional",
    grammarFocusEs: "Modales (would, could) + segundo condicional",
    pronunciationFocus: "Would/could/should reductions",
    pronunciationFocusEs: "Reducciones de would/could/should",
    icon: "CalendarCheck",
  },
  {
    id: 5,
    slug: "unit-5",
    slugEs: "unidad-5",
    title: "Telling People What Happened",
    titleEs: "Contando Lo Que Pasó",
    subtitle: "I had already left when she called",
    subtitleEs: "Ya me había ido cuando ella llamó",
    description:
      "Narrate events like a native speaker. The past perfect lets you order events in time, and reported speech lets you retell what others said — essential skills for workplace storytelling.",
    descriptionEs:
      "Narra eventos como un hablante nativo. El pasado perfecto te permite ordenar eventos en el tiempo, y el discurso indirecto te permite contar lo que otros dijeron.",
    grammarFocus: "Past perfect + reported speech + 'would' (habitual past)",
    grammarFocusEs: "Pasado perfecto + discurso indirecto + 'would' (pasado habitual)",
    pronunciationFocus: "Connected speech in past narratives",
    pronunciationFocusEs: "Habla conectada en narrativas pasadas",
    icon: "MessageSquare",
  },
  {
    id: 6,
    slug: "unit-6",
    slugEs: "unidad-6",
    title: "Expressing Opinions",
    titleEs: "Expresando Opiniones",
    subtitle: "I see your point, but I disagree",
    subtitleEs: "Entiendo tu punto, pero no estoy de acuerdo",
    description:
      "The language of debate, persuasion, and professional disagreement. Complete your conditional system with the third conditional and learn to hold your ground in English.",
    descriptionEs:
      "El lenguaje del debate, la persuasión y el desacuerdo profesional. Completa tu sistema condicional con el tercer condicional y aprende a defender tu posición en inglés.",
    grammarFocus: "Third conditional + softening modals (might, may, could)",
    grammarFocusEs: "Tercer condicional + modales suavizadores (might, may, could)",
    pronunciationFocus: "Agreement/disagreement intonation",
    pronunciationFocusEs: "Entonación de acuerdo/desacuerdo",
    icon: "Scale",
  },
  {
    id: 7,
    slug: "unit-7",
    slugEs: "unidad-7",
    title: "Health and Emergencies",
    titleEs: "Salud y Emergencias",
    subtitle: "I've been feeling sick since yesterday",
    subtitleEs: "Me he sentido mal desde ayer",
    description:
      "High-stakes communication for doctor visits, symptoms, and emergencies. The passive voice unlocks the formal English used in medical and bureaucratic settings.",
    descriptionEs:
      "Comunicación de alto riesgo para visitas al doctor, síntomas y emergencias. La voz pasiva desbloquea el inglés formal usado en contextos médicos y burocráticos.",
    grammarFocus: "Passive voice + advice modals (should, ought to, had better)",
    grammarFocusEs: "Voz pasiva + modales de consejo (should, ought to, had better)",
    pronunciationFocus: "Schwa in passive constructions",
    pronunciationFocusEs: "Schwa en construcciones pasivas",
    icon: "HeartPulse",
  },
  {
    id: 8,
    slug: "unit-8",
    slugEs: "unidad-8",
    title: "Money and Shopping",
    titleEs: "Dinero y Compras",
    subtitle: "The one that I ordered was different",
    subtitleEs: "El que pedí era diferente",
    description:
      "Consumer English for banking, shopping, and complaints. Relative clauses let you describe and specify — the key to making yourself understood when something goes wrong.",
    descriptionEs:
      "Inglés de consumo para bancos, compras y quejas. Las cláusulas relativas te permiten describir y especificar — la clave para hacerte entender cuando algo sale mal.",
    grammarFocus: "Relative clauses + preference modals (would rather, would prefer)",
    grammarFocusEs: "Cláusulas relativas + modales de preferencia (would rather, would prefer)",
    pronunciationFocus: "Sentence stress for emphasis",
    pronunciationFocusEs: "Acento de oración para énfasis",
    icon: "Wallet",
  },
  {
    id: 9,
    slug: "unit-9",
    slugEs: "unidad-9",
    title: "Relationships and Feelings",
    titleEs: "Relaciones y Sentimientos",
    subtitle: "I wish I had told her sooner",
    subtitleEs: "Ojalá le hubiera dicho antes",
    description:
      "The emotional vocabulary that B1 speakers lack. Wish and regret structures let you express the feelings and hypotheticals that make conversations real and human.",
    descriptionEs:
      "El vocabulario emocional que les falta a los hablantes B1. Las estructuras de deseo y arrepentimiento te permiten expresar sentimientos e hipotéticos que hacen las conversaciones reales.",
    grammarFocus: "Wish/regret + 'would' for hypothetical situations",
    grammarFocusEs: "Deseo/arrepentimiento + 'would' para situaciones hipotéticas",
    pronunciationFocus: "Emotional intonation",
    pronunciationFocusEs: "Entonación emocional",
    icon: "Heart",
  },
  {
    id: 10,
    slug: "unit-10",
    slugEs: "unidad-10",
    title: "Sounding Native",
    titleEs: "Sonando como Nativo",
    subtitle: "You must be close to fluent by now",
    subtitleEs: "Ya debes estar cerca de la fluidez",
    description:
      "The capstone unit. Master modals of deduction (must be, can't be, might have been) — the structure that lets you speculate, infer, and reason out loud like a native speaker. Decode native-speed audio and bring everything together.",
    descriptionEs:
      "La unidad final. Domina los modales de deducción (must be, can't be, might have been) — la estructura que te permite especular, inferir y razonar en voz alta como un nativo. Decodifica audio a velocidad nativa y une todo lo aprendido.",
    grammarFocus: "Modals of deduction (must, can't, might have)",
    grammarFocusEs: "Modales de deducción (must, can't, might have)",
    pronunciationFocus: "Thought groups and chunking",
    pronunciationFocusEs: "Grupos de pensamiento y segmentación",
    icon: "Rocket",
  },
];
