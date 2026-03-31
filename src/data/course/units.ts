// Course unit metadata for the beginner English course

export interface CourseUnit {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  description: string;
  descriptionEs: string;
  pronunciationFocus: string;
  pronunciationFocusEs: string;
  icon: string; // Lucide icon name
}

export const courseInfo = {
  title: "First Steps Into English",
  titleEs: "Primeros Pasos en Inglés",
  tagline: "You Already Speak English. You Just Don't Know It Yet.",
  taglineEs: "Ya Hablas Inglés. Solo No Lo Sabes Todavía.",
  description:
    "A free 10-unit course for Spanish speakers that starts from what you already know — the 1,500+ words English and Spanish share. No grammar textbooks. No boring drills. Just recognition, confidence, and real sentences.",
  descriptionEs:
    "Un curso gratuito de 10 unidades para hispanohablantes que comienza desde lo que ya sabes — las más de 1,500 palabras que el inglés y el español comparten. Sin libros de gramática. Sin ejercicios aburridos. Solo reconocimiento, confianza y oraciones reales.",
  basePath: {
    en: "/en/course/beginners",
    es: "/es/curso/principiantes",
  },
};

export const units: CourseUnit[] = [
  {
    id: 1,
    slug: "unit-1",
    slugEs: "unidad-1",
    title: "You Already Know English",
    titleEs: "Ya Sabes Inglés",
    subtitle: "Discover the 100+ English words hiding in your Spanish",
    subtitleEs:
      "Descubre las más de 100 palabras en inglés escondidas en tu español",
    description:
      "We start by blowing your mind: you already know hundreds of English words. Then we build your first sentences — from 'It is possible' to complex structures with need, want, have to, and can.",
    descriptionEs:
      "Comenzamos sorprendiéndote: ya conoces cientos de palabras en inglés. Luego construimos tus primeras oraciones — desde 'It is possible' hasta estructuras complejas con need, want, have to y can.",
    pronunciationFocus: "Word stress in cognates",
    pronunciationFocusEs: "Acentuación en cognados",
    icon: "Lightbulb",
  },
  {
    id: 2,
    slug: "unit-2",
    slugEs: "unidad-2",
    title: "What You Like",
    titleEs: "Lo Que Te Gusta",
    subtitle: "Express preferences and talk about the past",
    subtitleEs: "Expresa preferencias y habla del pasado",
    description:
      "Learn to say what you like, what you would like, and what happened. Build sentences about food, daily activities, and past experiences.",
    descriptionEs:
      "Aprende a decir lo que te gusta, lo que te gustaría y lo que pasó. Construye oraciones sobre comida, actividades diarias y experiencias pasadas.",
    pronunciationFocus: "B vs. V distinction",
    pronunciationFocusEs: "Distinción entre B y V",
    icon: "Heart",
  },
  {
    id: 3,
    slug: "unit-3",
    slugEs: "unidad-3",
    title: "Talking About Others",
    titleEs: "Hablando de Otros",
    subtitle: "He can, she wants, it has to",
    subtitleEs: "Él puede, ella quiere, tiene que",
    description:
      "Expand to third person: talk about what he, she, or it can do, wants, and has to do. Master indirect actions.",
    descriptionEs:
      "Expande a la tercera persona: habla sobre lo que él, ella o eso puede hacer, quiere y tiene que hacer.",
    pronunciationFocus: "Ch vs. Sh sounds",
    pronunciationFocusEs: "Sonidos Ch vs. Sh",
    icon: "Users",
  },
  {
    id: 4,
    slug: "unit-4",
    slugEs: "unidad-4",
    title: "Talking to Someone",
    titleEs: "Hablando con Alguien",
    subtitle: "You can, you want, tell me, give me",
    subtitleEs: "Tú puedes, tú quieres, dime, dame",
    description:
      "Direct conversation: use 'you' forms and indirect objects. Ask for the truth, explain what happened, tell someone something.",
    descriptionEs:
      "Conversación directa: usa las formas de 'tú' y objetos indirectos. Pide la verdad, explica qué pasó, dile algo a alguien.",
    pronunciationFocus: "TH sounds",
    pronunciationFocusEs: "Sonidos TH",
    icon: "MessageCircle",
  },
  {
    id: 5,
    slug: "unit-5",
    slugEs: "unidad-5",
    title: "What Just Happened",
    titleEs: "Lo Que Acaba de Pasar",
    subtitle: "I just ate, she just told me, he just found out",
    subtitleEs: "Acabo de comer, ella me acaba de decir, él acaba de descubrir",
    description:
      "Talk about recent events using 'just'. Build narratives about discoveries, arrivals, and conversations that just happened.",
    descriptionEs:
      "Habla de eventos recientes usando 'just'. Construye narrativas sobre descubrimientos, llegadas y conversaciones que acaban de pasar.",
    pronunciationFocus: "Past tense -ed endings",
    pronunciationFocusEs: "Terminaciones -ed del pasado",
    icon: "Clock",
  },
  {
    id: 6,
    slug: "unit-6",
    slugEs: "unidad-6",
    title: "Everyone, Someone, No One",
    titleEs: "Todos, Alguien, Nadie",
    subtitle: "Indefinite pronouns + should and shouldn't",
    subtitleEs: "Pronombres indefinidos + debería y no debería",
    description:
      "Talk about everyone, someone, and no one. Add 'should' and 'should be able to' to express advice and expectations.",
    descriptionEs:
      "Habla de todos, alguien y nadie. Agrega 'should' y 'should be able to' para expresar consejos y expectativas.",
    pronunciationFocus: "Initial S (no 'es-' prefix)",
    pronunciationFocusEs: "S inicial (sin prefijo 'es-')",
    icon: "UsersRound",
  },
  {
    id: 7,
    slug: "unit-7",
    slugEs: "unidad-7",
    title: "Together",
    titleEs: "Juntos",
    subtitle: "We can, we want, we have to",
    subtitleEs: "Podemos, queremos, tenemos que",
    description:
      "First person plural: express what we can do, want to do, and have to do together. Plan dinners, trips, and activities.",
    descriptionEs:
      "Primera persona del plural: expresa lo que podemos hacer, queremos hacer y tenemos que hacer juntos.",
    pronunciationFocus: "W sound",
    pronunciationFocusEs: "Sonido W",
    icon: "Handshake",
  },
  {
    id: 8,
    slug: "unit-8",
    slugEs: "unidad-8",
    title: "Feelings and Curiosity",
    titleEs: "Sentimientos y Curiosidad",
    subtitle: "I feel like, I wonder, they can",
    subtitleEs: "Tengo ganas de, me pregunto, ellos pueden",
    description:
      "Express feelings and curiosity. Introduce 'they' forms. Ask where things are and wonder about situations.",
    descriptionEs:
      "Expresa sentimientos y curiosidad. Introduce las formas de 'ellos'. Pregunta dónde están las cosas.",
    pronunciationFocus: "Question intonation",
    pronunciationFocusEs: "Entonación de preguntas",
    icon: "Compass",
  },
  {
    id: 9,
    slug: "unit-9",
    slugEs: "unidad-9",
    title: "Telling Stories",
    titleEs: "Contando Historias",
    subtitle: "Past tense narratives and explanations",
    subtitleEs: "Narrativas en pasado y explicaciones",
    description:
      "Extended past tense for storytelling. Talk about what used to happen, what surprised you, and why things changed.",
    descriptionEs:
      "Pasado extendido para contar historias. Habla de lo que solía pasar, lo que te sorprendió y por qué cambiaron las cosas.",
    pronunciationFocus: "R sound and schwa",
    pronunciationFocusEs: "Sonido R y schwa",
    icon: "BookOpen",
  },
  {
    id: 10,
    slug: "unit-10",
    slugEs: "unidad-10",
    title: "What's Coming Next",
    titleEs: "Lo Que Viene",
    subtitle: "Future tense and your 1,500-word vocabulary explosion",
    subtitleEs: "Tiempo futuro y tu explosión de vocabulario de 1,500 palabras",
    description:
      "Talk about the future with 'going to'. Learn to ask what things mean. Unlock the full cognate system — 1,500+ words you already know.",
    descriptionEs:
      "Habla del futuro con 'going to'. Aprende a preguntar qué significan las cosas. Desbloquea el sistema completo de cognados.",
    pronunciationFocus: "Connected speech and natural rhythm",
    pronunciationFocusEs: "Habla conectada y ritmo natural",
    icon: "Rocket",
  },
];
