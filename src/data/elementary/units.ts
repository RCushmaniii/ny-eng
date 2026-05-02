// Elementary course unit metadata — "Tell Your Story" (A2)
//
// 10 units. The pedagogical thesis: A2 is the storytelling unlock. After
// Beginner, learners can speak in present tense fragments. After this course,
// they can tell their story — past, future, comparing, asking real questions.
//
// See docs/A2-COURSE-PLAN.md for the full plan.

import type { ElementaryUnit } from "./types";

export const elementaryInfo = {
  title: "Tell Your Story",
  titleEs: "Cuenta Tu Historia",
  tagline: "From fragments to full stories — past, present, and future of your real life.",
  taglineEs: "De fragmentos a historias completas — pasado, presente y futuro de tu vida real.",
  description:
    "A free 10-unit elementary English course for Spanish speakers at the A2 level. Master past simple, future plans, comparatives, and real Wh-questions — the building blocks that turn 'I can speak English' into 'I can tell my story.'",
  descriptionEs:
    "Un curso elemental gratuito de inglés de 10 unidades para hispanohablantes de nivel A2. Domina el pasado simple, planes futuros, comparativos y preguntas reales — los bloques que convierten 'puedo hablar inglés' en 'puedo contar mi historia.'",
  basePath: {
    en: "/en/course/elementary",
    es: "/es/curso/elemental",
  },
};

export const elementaryUnits: ElementaryUnit[] = [
  {
    id: 1,
    slug: "unit-1",
    slugEs: "unidad-1",
    title: "Yesterday I Worked",
    titleEs: "Ayer Trabajé",
    subtitle: "Past simple — regular verbs and the three sounds of -ed.",
    subtitleEs: "Pasado simple — verbos regulares y los tres sonidos de -ed.",
    description:
      "The first big leap past beginner: talking about yesterday. Regular -ed verbs, the three pronunciations of -ed, and your first real past sentences.",
    descriptionEs:
      "El primer gran salto más allá del nivel principiante: hablar de ayer. Verbos regulares con -ed, las tres pronunciaciones de -ed, y tus primeras oraciones reales en pasado.",
    grammarFocus: "Past simple — regular verbs",
    grammarFocusEs: "Pasado simple — verbos regulares",
    pronunciationFocus: "The three -ed sounds: /t/, /d/, /ɪd/",
    pronunciationFocusEs: "Los tres sonidos de -ed: /t/, /d/, /ɪd/",
    icon: "Clock",
    published: true,
  },
  {
    id: 2,
    slug: "unit-2",
    slugEs: "unidad-2",
    title: "Yesterday I Went",
    titleEs: "Ayer Fui",
    subtitle: "Past simple — irregular verbs (the 50 most common).",
    subtitleEs: "Pasado simple — verbos irregulares (los 50 más comunes).",
    description:
      "The verbs that don't follow the rules — but follow patterns. Go/went, see/saw, do/did, was/were, plus past simple questions and negatives.",
    descriptionEs:
      "Los verbos que no siguen las reglas — pero siguen patrones. Go/went, see/saw, do/did, was/were, más preguntas y negativos en pasado simple.",
    grammarFocus: "Irregular past tense + did/didn't questions",
    grammarFocusEs: "Pasado irregular + preguntas con did/didn't",
    pronunciationFocus: "Was vs. were stress patterns",
    pronunciationFocusEs: "Patrones de acento en was vs. were",
    icon: "BookOpen",
    published: true,
  },
  {
    id: 3,
    slug: "unit-3",
    slugEs: "unidad-3",
    title: "Telling Your Day",
    titleEs: "Contando Tu Día",
    subtitle: "Time markers, sequencing, and your first 5-sentence story.",
    subtitleEs: "Marcadores de tiempo, secuenciación, y tu primera historia de 5 oraciones.",
    description:
      "Yesterday, last week, two days ago. First, then, after that, finally. The connective tissue that turns isolated past sentences into a real story about your day.",
    descriptionEs:
      "Yesterday, last week, two days ago. First, then, after that, finally. El tejido conectivo que convierte oraciones sueltas en pasado en una historia real sobre tu día.",
    grammarFocus: "Time expressions + sequence connectors",
    grammarFocusEs: "Expresiones de tiempo + conectores de secuencia",
    pronunciationFocus: "Reduced 'ago' and 'last' in fast speech",
    pronunciationFocusEs: "Reducción de 'ago' y 'last' en habla rápida",
    icon: "Calendar",
    published: true,
  },
  {
    id: 4,
    slug: "unit-4",
    slugEs: "unidad-4",
    title: "What's Coming Next",
    titleEs: "Lo Que Viene Después",
    subtitle: "Going to and will — making plans and predictions.",
    subtitleEs: "Going to y will — haciendo planes y predicciones.",
    description:
      "Tomorrow I'm going to… vs. I will… The difference between a plan you've already made and a decision in the moment — drilled until the right one comes out automatically.",
    descriptionEs:
      "Tomorrow I'm going to… vs. I will… La diferencia entre un plan que ya hiciste y una decisión del momento — practicada hasta que la opción correcta salga automática.",
    grammarFocus: "Going to vs. will",
    grammarFocusEs: "Going to vs. will",
    pronunciationFocus: "Reduced 'gonna' and contractions ('I'll', 'we'll')",
    pronunciationFocusEs: "Reducción de 'gonna' y contracciones ('I'll', 'we'll')",
    icon: "Rocket",
    published: true,
  },
  {
    id: 5,
    slug: "unit-5",
    slugEs: "unidad-5",
    title: "Comparing Things",
    titleEs: "Comparando Cosas",
    subtitle: "Bigger than. The most expensive. Better, worse, best.",
    subtitleEs: "Bigger than. The most expensive. Better, worse, best.",
    description:
      "The day-to-day language of comparison: comparatives (-er than, more X than), superlatives (the -est, the most X), and the irregulars everyone gets wrong (good/better/best, bad/worse/worst).",
    descriptionEs:
      "El lenguaje cotidiano de la comparación: comparativos (-er than, more X than), superlativos (the -est, the most X), y los irregulares que todos confunden (good/better/best, bad/worse/worst).",
    grammarFocus: "Comparatives + superlatives + irregulars",
    grammarFocusEs: "Comparativos + superlativos + irregulares",
    pronunciationFocus: "-er and -est endings + 'than' reduction",
    pronunciationFocusEs: "Terminaciones -er y -est + reducción de 'than'",
    icon: "Scale",
    published: false,
  },
  {
    id: 6,
    slug: "unit-6",
    slugEs: "unidad-6",
    title: "How Much, How Many",
    titleEs: "Cuánto, Cuántos",
    subtitle: "Quantifiers — much, many, some, any, a lot of, a few.",
    subtitleEs: "Cuantificadores — much, many, some, any, a lot of, a few.",
    description:
      "The quiet grammar that exposes Spanish speakers in seconds. Much vs. many. Some vs. any. The difference between 'a few friends' and 'a little time.'",
    descriptionEs:
      "La gramática silenciosa que delata a los hispanohablantes en segundos. Much vs. many. Some vs. any. La diferencia entre 'a few friends' y 'a little time.'",
    grammarFocus: "Quantifiers + countable/uncountable",
    grammarFocusEs: "Cuantificadores + contables/incontables",
    pronunciationFocus: "Stress on quantifiers in negation ('NOT many', 'NOT much')",
    pronunciationFocusEs: "Acento en cuantificadores en negación ('NOT many', 'NOT much')",
    icon: "Hash",
    published: false,
  },
  {
    id: 7,
    slug: "unit-7",
    slugEs: "unidad-7",
    title: "Asking Real Questions",
    titleEs: "Haciendo Preguntas Reales",
    subtitle: "Wh-questions that go beyond yes and no.",
    subtitleEs: "Preguntas con Wh- que van más allá del sí y no.",
    description:
      "Where, When, Why, How, How long, How often. The questions that turn small talk into real conversation — plus the word order that trips up every Spanish speaker.",
    descriptionEs:
      "Where, When, Why, How, How long, How often. Las preguntas que convierten la charla en conversación real — más el orden de palabras que confunde a todos los hispanohablantes.",
    grammarFocus: "Wh-questions + question word order",
    grammarFocusEs: "Preguntas Wh- + orden de palabras",
    pronunciationFocus: "Question intonation patterns",
    pronunciationFocusEs: "Patrones de entonación en preguntas",
    icon: "MessageCircleQuestion",
    published: false,
  },
  {
    id: 8,
    slug: "unit-8",
    slugEs: "unidad-8",
    title: "Daily Life",
    titleEs: "La Vida Diaria",
    subtitle: "Frequency adverbs and routines — always, usually, never.",
    subtitleEs: "Adverbios de frecuencia y rutinas — always, usually, never.",
    description:
      "Always, usually, often, sometimes, never. Where they go in the sentence (Spanish speakers always get this wrong) and how to describe a real daily routine — yours.",
    descriptionEs:
      "Always, usually, often, sometimes, never. Dónde van en la oración (los hispanohablantes siempre lo confunden) y cómo describir una rutina diaria real — la tuya.",
    grammarFocus: "Frequency adverbs + word order",
    grammarFocusEs: "Adverbios de frecuencia + orden de palabras",
    pronunciationFocus: "Stress on frequency adverbs",
    pronunciationFocusEs: "Acento en adverbios de frecuencia",
    icon: "Repeat",
    published: false,
  },
  {
    id: 9,
    slug: "unit-9",
    slugEs: "unidad-9",
    title: "I Was Eating When…",
    titleEs: "Estaba Comiendo Cuando…",
    subtitle: "Past continuous — backgrounding past actions.",
    subtitleEs: "Pasado continuo — acciones de fondo en el pasado.",
    description:
      "Was/were + -ing. The tense that lets you say 'I was eating when she called' — backgrounding one past action while another interrupts. The narrative power tool.",
    descriptionEs:
      "Was/were + -ing. El tiempo que te permite decir 'I was eating when she called' — poner una acción pasada de fondo mientras otra la interrumpe. La herramienta narrativa.",
    grammarFocus: "Past continuous vs. past simple",
    grammarFocusEs: "Pasado continuo vs. pasado simple",
    pronunciationFocus: "Reduced 'was' and 'were' in fast speech",
    pronunciationFocusEs: "Reducción de 'was' y 'were' en habla rápida",
    icon: "Pause",
    published: false,
  },
  {
    id: 10,
    slug: "unit-10",
    slugEs: "unidad-10",
    title: "Tell Your Story",
    titleEs: "Cuenta Tu Historia",
    subtitle: "Capstone — record a 60-second story about your real life.",
    subtitleEs: "Reto final — graba una historia de 60 segundos sobre tu vida real.",
    description:
      "The capstone. Combine past simple, past continuous, going to, and comparatives into a 60-second autobiographical story. Submit a recording for personal feedback from Robert.",
    descriptionEs:
      "El reto final. Combina pasado simple, pasado continuo, going to y comparativos en una historia autobiográfica de 60 segundos. Envía una grabación para recibir retroalimentación personal de Robert.",
    grammarFocus: "Integrated review of all 10 units",
    grammarFocusEs: "Repaso integrado de las 10 unidades",
    pronunciationFocus: "Natural rhythm and pacing in story telling",
    pronunciationFocusEs: "Ritmo natural y pausas al contar historias",
    icon: "Sparkles",
    published: false,
  },
];
