// Past Tenses Master Class — "Feel the Story" method for Mexican English learners
// MVP scope: 5 lessons + 5 bonuses planned; only Lesson 1 is built and available in the MVP.

export interface PastTenseLesson {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  tense: string;
  tenseEs: string;
  subtitle: string;
  subtitleEs: string;
  icon: string;
  available: boolean;
}

export interface PastTenseBonus {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  available: boolean;
}

export const pastTensesInfo = {
  title: "Master English Past Tenses",
  titleEs: "Domina los Tiempos del Pasado en Inglés",
  tagline: "Feel the Story. Don't Think the Rules.",
  taglineEs: "Siente la historia. No pienses en las reglas.",
  description:
    "A focused master class for Mexican professionals who know the rules but freeze in conversation. Learn to visualize the scene — and the right past tense becomes obvious.",
  descriptionEs:
    "Una clase magistral enfocada para profesionales mexicanos que conocen las reglas pero se congelan al hablar. Aprende a visualizar la escena — y el tiempo correcto del pasado se vuelve obvio.",
  basePath: {
    en: "/en/course/past-tenses",
    es: "/es/curso/tiempos-del-pasado",
  },
};

export const pastTenseLessons: PastTenseLesson[] = [
  {
    id: 1,
    slug: "lesson-1",
    slugEs: "leccion-1",
    title: "Past Simple",
    titleEs: "Pasado Simple",
    tense: "It happened. It's done.",
    tenseEs: "Sucedió. Está terminado.",
    subtitle: "Single moments, completed actions, finished time",
    subtitleEs: "Momentos únicos, acciones completas, tiempo terminado",
    icon: "Clock",
    available: true,
  },
  {
    id: 2,
    slug: "lesson-2",
    slugEs: "leccion-2",
    title: "Past Continuous",
    titleEs: "Pasado Continuo",
    tense: "It was happening when…",
    tenseEs: "Estaba sucediendo cuando…",
    subtitle: "Background scenes, actions in progress, interruptions",
    subtitleEs: "Escenas de fondo, acciones en progreso, interrupciones",
    icon: "Film",
    available: false,
  },
  {
    id: 3,
    slug: "lesson-3",
    slugEs: "leccion-3",
    title: "Present Perfect",
    titleEs: "Presente Perfecto",
    tense: "It happened — but it still matters now.",
    tenseEs: "Sucedió — pero todavía importa ahora.",
    subtitle: "The tense Mexicans miss most. A thread from past to now.",
    subtitleEs: "El tiempo que los mexicanos más omiten. Un hilo del pasado al presente.",
    icon: "Link",
    available: false,
  },
  {
    id: 4,
    slug: "lesson-4",
    slugEs: "leccion-4",
    title: "Past Perfect",
    titleEs: "Pasado Perfecto",
    tense: "It happened before that other thing.",
    tenseEs: "Sucedió antes que esa otra cosa.",
    subtitle: "Two past events, one earlier than the other",
    subtitleEs: "Dos eventos pasados, uno antes que el otro",
    icon: "Layers",
    available: false,
  },
  {
    id: 5,
    slug: "lesson-5",
    slugEs: "leccion-5",
    title: "The Story Flow Map",
    titleEs: "El Mapa del Flujo de la Historia",
    tense: "Putting all four together — like a native.",
    tenseEs: "Combinando los cuatro — como un nativo.",
    subtitle: "Choose the right tense in real time, mid-sentence",
    subtitleEs: "Elige el tiempo correcto en tiempo real, a mitad de frase",
    icon: "Map",
    available: false,
  },
];

export const pastTenseBonuses: PastTenseBonus[] = [
  {
    id: 1,
    slug: "cheat-sheet",
    slugEs: "guia-rapida",
    title: "The One-Page Cheat Sheet",
    titleEs: "La Guía Rápida de Una Página",
    description: "Every past tense, every trigger, every story-flow rule — on one printable page.",
    descriptionEs: "Cada tiempo del pasado, cada disparador, cada regla del flujo de historia — en una página imprimible.",
    icon: "FileText",
    available: false,
  },
  {
    id: 2,
    slug: "top-10-confused-pairs",
    slugEs: "top-10-pares-confundidos",
    title: "Top 10 Most Confused Verb Pairs",
    titleEs: "Top 10 Pares de Verbos Más Confundidos",
    description: "say/tell, do/make, lay/lie, rise/raise, and the seven others that trip up intermediate Mexican speakers.",
    descriptionEs: "say/tell, do/make, lay/lie, rise/raise y los otros siete que confunden a hispanohablantes intermedios.",
    icon: "AlertCircle",
    available: false,
  },
  {
    id: 3,
    slug: "knew-vs-found-out",
    slugEs: "knew-vs-found-out",
    title: '"Knew" vs "Found Out"',
    titleEs: '"Knew" vs "Found Out"',
    description: "The English equivalent of sabía vs supe. Same trap, same solution.",
    descriptionEs: 'El equivalente en inglés de "sabía vs supe". La misma trampa, la misma solución.',
    icon: "Lightbulb",
    available: false,
  },
  {
    id: 4,
    slug: "story-openers",
    slugEs: "frases-iniciales",
    title: "30 Story Openers in English",
    titleEs: "30 Frases para Empezar una Historia en Inglés",
    description: '"Back when I was at…", "I remember when…", "The other day…" — ready-made launchpads native speakers actually use.',
    descriptionEs: '"Back when I was at…", "I remember when…", "The other day…" — frases iniciales reales que usan los nativos.',
    icon: "Mic",
    available: false,
  },
  {
    id: 5,
    slug: "there-was-vs-there-has-been",
    slugEs: "there-was-vs-there-has-been",
    title: '"There Was" vs "There Has Been"',
    titleEs: '"There Was" vs "There Has Been"',
    description: "The English equivalent of hubo vs había. Why one closes the story and the other keeps it open.",
    descriptionEs: 'El equivalente en inglés de "hubo vs había". Por qué uno cierra la historia y el otro la deja abierta.',
    icon: "MessageSquare",
    available: false,
  },
];
