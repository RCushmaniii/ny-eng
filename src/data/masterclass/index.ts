// Registry of the data-driven master classes, their routes and the shared UI strings.

import type { L, Lesson } from "./types";

import { lesson as ps01 } from "./persuasive-speaking/start-here";
import { lesson as ps02 } from "./persuasive-speaking/observe";
import { lesson as ps03 } from "./persuasive-speaking/infer";
import { lesson as ps04 } from "./persuasive-speaking/narrate";
import { lesson as ps05 } from "./persuasive-speaking/ethos";
import { lesson as ps06 } from "./persuasive-speaking/logos";
import { lesson as ps07 } from "./persuasive-speaking/pathos";
import { lesson as ps08 } from "./persuasive-speaking/delivery";
import { lesson as ps09 } from "./persuasive-speaking/the-three-minute-talk";
import { lesson as ps10 } from "./persuasive-speaking/practice-plan";

import { lesson as pc01 } from "./productive-conflict/conflict-is-information";
import { lesson as pc02 } from "./productive-conflict/lower-the-temperature";
import { lesson as pc03 } from "./productive-conflict/disagree-with-the-idea";
import { lesson as pc04 } from "./productive-conflict/listen-first";
import { lesson as pc05 } from "./productive-conflict/questions-not-accusations";
import { lesson as pc06 } from "./productive-conflict/find-the-shared-goal";
import { lesson as pc07 } from "./productive-conflict/debate-well";
import { lesson as pc08 } from "./productive-conflict/when-it-gets-heated";
import { lesson as pc09 } from "./productive-conflict/repair-and-follow-up";
import { lesson as pc10 } from "./productive-conflict/cheat-sheet";

import { lesson as bw01 } from "./business-writing/start-with-the-point";
import { lesson as bw02 } from "./business-writing/sentence-boundaries";
import { lesson as bw03 } from "./business-writing/grammar-that-costs-credibility";
import { lesson as bw04 } from "./business-writing/cut-the-clutter";
import { lesson as bw05 } from "./business-writing/strong-verbs-precise-words";
import { lesson as bw06 } from "./business-writing/paragraphs-that-flow";
import { lesson as bw07 } from "./business-writing/tone-and-register";
import { lesson as bw08 } from "./business-writing/rhythm-and-emphasis";
import { lesson as bw09 } from "./business-writing/emails-and-reports";
import { lesson as bw10 } from "./business-writing/the-revision-passes";

export type MasterclassLang = "en" | "es";
export type CourseId = "persuasive-speaking" | "productive-conflict" | "business-writing";
export type CourseIcon = "Mic" | "Scale" | "PenLine";

export interface Course {
  /** Also the English URL leaf. */
  id: CourseId;
  slugEs: string;
  icon: CourseIcon;
  level: L;
  /** The course name, shown as the H1. */
  name: L;
  tagline: L;
  /** <title>, 60 characters or fewer. */
  metaTitle: L;
  /** Meta description, 120–160 characters. */
  description: L;
  /** Hero paragraph on the course page. */
  sub: L;
  /** "By the end you can…" */
  outcomes: L[];
  /** How the practice works in this course. */
  method: L;
  /** ISO 8601 duration for the Course schema. */
  workload: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: "persuasive-speaking",
    slugEs: "hablar-para-persuadir",
    icon: "Mic",
    level: ["Master Class — B2 to C1", "Clase Magistral — B2 a C1"],
    name: ["Speak to Persuade", "Habla para Persuadir"],
    tagline: [
      "From dreading the presentation to owning the room.",
      "De temerle a la presentación a dominar la sala.",
    ],
    metaTitle: [
      "Speak to Persuade: Public Speaking in English",
      "Habla para Persuadir: Hablar en Público en Inglés",
    ],
    description: [
      "A free public speaking master class in English built on Aristotle's triangle: ethos, logos and pathos. Ten lessons with timed speaking practice.",
      "Clase magistral gratuita para hablar en público en inglés con el triángulo de Aristóteles: ethos, logos y pathos. Diez lecciones con práctica en voz alta.",
    ],
    sub: [
      "Most people are told to give a presentation and left to work out the rest. This course breaks speaking into three small jobs you can practice sitting down — observe, infer, narrate — and then builds them into Aristotle's triangle: credibility, logic and feeling. Every lesson has you speaking out loud against a timer.",
      "A casi todo mundo le piden dar una presentación y lo dejan resolver lo demás por su cuenta. Este curso divide el hablar en público en tres tareas pequeñas que puedes practicar sentado — observar, inferir, narrar — y después las convierte en el triángulo de Aristóteles: credibilidad, lógica y emoción. En cada lección hablas en voz alta contra el reloj.",
    ],
    outcomes: [
      [
        "Describe what is in front of you clearly, without drifting into opinion.",
        "Describir con claridad lo que tienes enfrente, sin irte a la opinión.",
      ],
      [
        "Make a claim and back it with evidence in one sentence.",
        "Hacer una afirmación y respaldarla con evidencia en una sola oración.",
      ],
      [
        "Tell a short story that makes an audience care.",
        "Contar una historia breve que haga que al público le importe.",
      ],
      [
        "Earn credibility in your first thirty seconds — in your second language.",
        "Ganarte la credibilidad en tus primeros treinta segundos — en tu segundo idioma.",
      ],
      [
        "Deliver a three-minute persuasive talk with a clear ask.",
        "Dar una charla persuasiva de tres minutos con una petición clara.",
      ],
    ],
    method: [
      "Think first, then speak. Each exercise gives you a short silent think time and a short timed turn. Record yourself, then name one strength and one thing to try next.",
      "Primero piensa, luego habla. Cada ejercicio te da un tiempo breve para pensar en silencio y un turno corto con cronómetro. Grábate y después nombra una fortaleza y una cosa por probar la próxima vez.",
    ],
    workload: "PT5H",
    lessons: [ps01, ps02, ps03, ps04, ps05, ps06, ps07, ps08, ps09, ps10],
  },
  {
    id: "productive-conflict",
    slugEs: "conflicto-productivo",
    icon: "Scale",
    level: ["Master Class — B2 to C1", "Clase Magistral — B2 a C1"],
    name: ["Disagree Without Damage", "Discrepa sin Dañar la Relación"],
    tagline: [
      "Handle conflict in English with a cool head, and turn it into persuasion.",
      "Maneja el conflicto en inglés con la cabeza fría y conviértelo en persuasión.",
    ],
    metaTitle: [
      "Disagree Without Damage: Conflict in Business English",
      "Conflicto en Inglés de Negocios: Discrepa sin Dañar",
    ],
    description: [
      "A free master class on handling conflict in professional English: de-escalate, disagree clearly, debate well and turn a tense moment into persuasion.",
      "Clase magistral gratuita para manejar el conflicto en inglés profesional: baja la tensión, discrepa con claridad, debate bien y persuade.",
    ],
    sub: [
      "A disagreement in your second language is two problems at once: the conflict, and finding the words while your pulse is up. This course gives you the words. You will learn to cool a conversation down, disagree with an idea without attacking the person, listen so the other side feels heard, and use the tension as an opening to persuade.",
      "Un desacuerdo en tu segundo idioma son dos problemas a la vez: el conflicto y encontrar las palabras con el pulso acelerado. Este curso te da las palabras. Vas a aprender a bajarle la temperatura a una conversación, a discrepar de una idea sin atacar a la persona, a escuchar de modo que la otra parte se sienta escuchada y a usar la tensión como una oportunidad para persuadir.",
    ],
    outcomes: [
      [
        "Lower the temperature of a tense conversation with specific language.",
        "Bajarle la temperatura a una conversación tensa con lenguaje específico.",
      ],
      [
        "Say a clear no to a peer without bluntness and without disappearing.",
        "Decirle un no claro a un colega sin brusquedad y sin que el no desaparezca.",
      ],
      [
        "Reflect back what you heard so the other person stops repeating it.",
        "Devolver lo que escuchaste para que la otra persona deje de repetirlo.",
      ],
      [
        "Argue a point with evidence and concede one gracefully.",
        "Defender un punto con evidencia y conceder otro con elegancia.",
      ],
      [
        "Repair the relationship afterward and lock in what was agreed.",
        "Reparar la relación después y dejar por escrito lo acordado.",
      ],
    ],
    method: [
      "Tone cannot be learned silently. Each lesson gives you scenarios to choose from and responses to say out loud against a timer, so the words are ready when you need them.",
      "El tono no se aprende en silencio. Cada lección te da escenarios para elegir y respuestas para decir en voz alta contra el reloj, para que las palabras estén listas cuando las necesites.",
    ],
    workload: "PT5H",
    lessons: [pc01, pc02, pc03, pc04, pc05, pc06, pc07, pc08, pc09, pc10],
  },
  {
    id: "business-writing",
    slugEs: "escritura-profesional",
    icon: "PenLine",
    level: ["Master Class — B2 to C1", "Clase Magistral — B2 a C1"],
    name: ["Writing Better", "Escribe Mejor"],
    tagline: ["From correct to compelling.", "De correcto a convincente."],
    metaTitle: [
      "Writing Better: Business English Writing Course",
      "Escribe Mejor: Curso de Redacción en Inglés de Negocios",
    ],
    description: [
      "A free business English writing course: fix the technical errors first, then build style. Ten lessons of before-and-after examples and rewrite practice.",
      "Curso gratuito de redacción en inglés de negocios: primero corrige los errores técnicos y después construye tu estilo. Diez lecciones con ejemplos y práctica.",
    ],
    sub: [
      "Correct English is the starting line. This course takes your writing from there in two halves: first the technical layer — sentences built right, grammar that does not cost you credibility — then the style layer: concision, word choice, flow, tone and rhythm. Every skill is taught the way writing is actually learned: by seeing a weak sentence repaired, then repairing one yourself.",
      "El inglés correcto es la línea de salida. Este curso lleva tu escritura desde ahí en dos mitades: primero la capa técnica — oraciones bien construidas y una gramática que no te cueste credibilidad — y después la capa de estilo: concisión, elección de palabras, fluidez, tono y ritmo. Cada habilidad se enseña como de verdad se aprende a escribir: viendo cómo se repara una oración débil y luego reparando una tú.",
    ],
    outcomes: [
      [
        "Put the point in the first line, where an American reader looks for it.",
        "Poner el punto en la primera línea, que es donde lo busca un lector estadounidense.",
      ],
      [
        "Fix the run-ons and comma splices that Spanish sentence habits produce.",
        "Corregir las oraciones unidas con comas que producen los hábitos del español.",
      ],
      [
        "Cut a paragraph by a third without losing anything.",
        "Recortar un párrafo en un tercio sin perder nada.",
      ],
      [
        "Sound direct and warm instead of stiff and formal.",
        "Sonar directo y cálido en lugar de rígido y formal.",
      ],
      [
        "Revise any draft in five ordered passes.",
        "Revisar cualquier borrador en cinco pasadas ordenadas.",
      ],
    ],
    method: [
      "Before and after. Each lesson shows weak sentences repaired, then hands you a weak one. Type your version first; only then reveal a strong one and compare.",
      "Antes y después. Cada lección te muestra oraciones débiles ya reparadas y luego te entrega una débil. Escribe primero tu versión; solo entonces revela una versión sólida y compara.",
    ],
    workload: "PT5H",
    lessons: [bw01, bw02, bw03, bw04, bw05, bw06, bw07, bw08, bw09, bw10],
  },
];

const li = (lang: MasterclassLang) => (lang === "es" ? 1 : 0);
export const pick = (pair: L, lang: MasterclassLang) => pair[li(lang)];

export const courseRoute = (course: Course, lang: MasterclassLang) =>
  lang === "es" ? `/es/curso/${course.slugEs}/` : `/en/course/${course.id}/`;

export const lessonRoute = (course: Course, lesson: Lesson, lang: MasterclassLang) =>
  `${courseRoute(course, lang)}${lang === "es" ? lesson.slugEs : lesson.id}/`;

export const courseTKey = (course: Course) => `course/${course.id}` as const;
export const lessonTKey = (course: Course, lesson: Lesson) =>
  `course/${course.id}/${lesson.id}` as const;

export const masterclassUi = {
  en: {
    free: "Free Master Class",
    lesson: "Lesson",
    of: "of",
    minutes: "{n} min",
    lessonsTitle: "The lessons",
    lessonsCount: "{n} lessons",
    outcomesTitle: "By the end, you can",
    methodTitle: "How the practice works",
    start: "Start with lesson 1",
    resume: "Continue where you left off",
    done: "Done",
    progress: "{done} of {total} lessons completed",
    backCourse: "Course overview",
    allCourses: "All free courses",
    prev: "Previous",
    next: "Next lesson",
    finish: "Back to the course overview",
    markDone: "Mark this lesson complete",
    markedDone: "Lesson complete",
    weak: "Weak",
    strong: "Strong",
    why: "Why it works",
    say: "Say",
    trap: "Watch out",
    idea: "The idea",
    choose: "Choose the best response",
    correct: "Best choice",
    notBest: "Not the best choice",
    yourVersion: "Your version",
    yourVersionPlaceholder: "Type your rewrite here before you look…",
    showStrong: "Show a strong version",
    strongVersion: "A strong version",
    whatChanged: "What changed",
    before: "Before",
    think: "Think",
    speak: "Speak",
    startTimer: "Start",
    restart: "Start again",
    thinking: "Think — silently",
    speaking: "Speak — out loud",
    timeUp: "Time. Now check yourself against the list.",
    frame: "Frame to lean on",
    checklist: "Check yourself",
    showModel: "Show a model answer",
    takeaways: "Take this with you",
    coachTitle: "Want feedback on how you actually sound?",
    coachText:
      "A course can give you the method. A coach can hear you use it and tell you the one thing to change. That is what a 1-on-1 session is for.",
    coachCta: "Work 1-on-1 with Robert",
    coachHref: "/en/services/",
    seconds: "s",
  },
  es: {
    free: "Clase Magistral Gratuita",
    lesson: "Lección",
    of: "de",
    minutes: "{n} min",
    lessonsTitle: "Las lecciones",
    lessonsCount: "{n} lecciones",
    outcomesTitle: "Al terminar, vas a poder",
    methodTitle: "Cómo funciona la práctica",
    start: "Empezar con la lección 1",
    resume: "Continuar donde te quedaste",
    done: "Lista",
    progress: "{done} de {total} lecciones completadas",
    backCourse: "Resumen del curso",
    allCourses: "Todos los cursos gratuitos",
    prev: "Anterior",
    next: "Siguiente lección",
    finish: "Volver al resumen del curso",
    markDone: "Marcar esta lección como completada",
    markedDone: "Lección completada",
    weak: "Débil",
    strong: "Sólida",
    why: "Por qué funciona",
    say: "Di",
    trap: "Cuidado",
    idea: "La idea",
    choose: "Elige la mejor respuesta",
    correct: "La mejor opción",
    notBest: "No es la mejor opción",
    yourVersion: "Tu versión",
    yourVersionPlaceholder: "Escribe aquí tu versión antes de ver la respuesta…",
    showStrong: "Ver una versión sólida",
    strongVersion: "Una versión sólida",
    whatChanged: "Qué cambió",
    before: "Antes",
    think: "Piensa",
    speak: "Habla",
    startTimer: "Empezar",
    restart: "Empezar de nuevo",
    thinking: "Piensa — en silencio",
    speaking: "Habla — en voz alta",
    timeUp: "Tiempo. Ahora revísate con la lista.",
    frame: "Estructura de apoyo",
    checklist: "Revísate",
    showModel: "Ver una respuesta modelo",
    takeaways: "Llévate esto",
    coachTitle: "¿Quieres retroalimentación sobre cómo suenas en realidad?",
    coachText:
      "Un curso te da el método. Un coach te escucha usarlo y te dice la única cosa que hay que cambiar. Para eso es una sesión 1 a 1.",
    coachCta: "Trabaja 1 a 1 con Robert",
    coachHref: "/es/servicios/",
    seconds: "s",
  },
} as const;

export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ""));
