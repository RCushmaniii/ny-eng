// One list of every free course, for sitewide navigation (footer + site index).
// The courses hub pages build their own cards; this file exists so that the footer and
// the site index link to the same set and a new course is added in one place.
//
// The master classes, Conversation Briefings and job-role collocation pages are read from
// their registries, so a new lesson bank appears here without an edit.

import { courses as masterclasses, courseRoute } from "@data/masterclass/index";
import { topics, topicRoute, conversationRoutes } from "@data/conversation/index";
import { roles, roleRoute, collocationsRoutes } from "@data/collocations/index";

export type NavLang = "en" | "es";

export interface CourseLink {
  name: string;
  href: string;
  description: string;
}

type Pair = [en: string, es: string];
interface StaticCourse {
  name: Pair;
  href: Pair;
  description: Pair;
}

const i = (lang: NavLang) => (lang === "es" ? 1 : 0);

const levelCourses: StaticCourse[] = [
  {
    name: ["Beginner Course (A1)", "Curso para Principiantes (A1)"],
    href: ["/en/course/beginners/", "/es/curso/principiantes/"],
    description: [
      "Start from the English words already hiding in your Spanish.",
      "Empieza con las palabras en inglés que ya conoces por el español.",
    ],
  },
  {
    name: ["Elementary Course (A2)", "Curso Elemental (A2)"],
    href: ["/en/course/elementary/", "/es/curso/elemental/"],
    description: [
      "Past tense, future plans and the questions that open a conversation.",
      "El pasado, los planes a futuro y las preguntas que abren una conversación.",
    ],
  },
  {
    name: ["Intermediate Course (B1–B2)", "Curso Intermedio (B1–B2)"],
    href: ["/en/course/intermediate/", "/es/curso/intermedio/"],
    description: [
      "Build longer, more precise sentences with modals and connectors.",
      "Construye oraciones más largas y precisas con modales y conectores.",
    ],
  },
  {
    name: ["Advanced Course (B2–C1)", "Curso Avanzado (B2–C1)"],
    href: ["/en/course/advanced/", "/es/curso/avanzado/"],
    description: [
      "From fluent to polished: nuance, register and natural phrasing.",
      "De fluido a pulido: matices, registro y frases naturales.",
    ],
  },
  {
    name: ["Executive Course (C1–C2)", "Curso Ejecutivo (C1–C2)"],
    href: ["/en/course/executive/", "/es/curso/ejecutivo/"],
    description: [
      "The English of leading: framing, deciding and holding a room.",
      "El inglés de quien dirige: plantear, decidir y sostener una sala.",
    ],
  },
];

const olderMasterclasses: StaticCourse[] = [
  {
    name: ["Executive Pushback & Objection Handling", "Pushback y Objeciones Ejecutivas"],
    href: ["/en/course/executive-pushback/", "/es/curso/pushback-ejecutivo/"],
    description: [
      "Hold your position under pressure from clients and senior leaders.",
      "Sostén tu postura bajo presión de clientes y directivos.",
    ],
  },
  {
    name: ["Drive the Decision", "Dirige la Decisión"],
    href: ["/en/course/drive-the-decision/", "/es/curso/dirige-la-decision/"],
    description: [
      "Boardroom simulations: move a group to a decision in English.",
      "Simulaciones de junta directiva: lleva a un grupo a una decisión en inglés.",
    ],
  },
  {
    name: ["Verb Pattern Mastery", "Dominio de Patrones Verbales"],
    href: ["/en/course/verb-patterns/", "/es/curso/patrones-verbales/"],
    description: [
      "Depend on, explain to, enjoy doing: the patterns that give you away.",
      "Depend on, explain to, enjoy doing: los patrones que te delatan.",
    ],
  },
  {
    name: ["Master the Past Tenses", "Domina los Tiempos del Pasado"],
    href: ["/en/course/past-tenses/", "/es/curso/tiempos-del-pasado/"],
    description: [
      "Tell what happened without freezing on the verb.",
      "Cuenta lo que pasó sin trabarte en el verbo.",
    ],
  },
];

const sentence = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}.`;

const local = (c: StaticCourse, lang: NavLang): CourseLink => ({
  name: c.name[i(lang)],
  href: c.href[i(lang)],
  description: c.description[i(lang)],
});

export const coursesHub = (lang: NavLang): CourseLink => ({
  name: lang === "es" ? "Todos los Cursos Gratuitos" : "All Free Courses",
  href: lang === "es" ? "/es/cursos/" : "/en/courses/",
  description:
    lang === "es"
      ? "El catálogo completo, del nivel principiante al ejecutivo."
      : "The full catalog, from beginner to executive.",
});

export const conversationHub = (lang: NavLang): CourseLink => ({
  name: lang === "es" ? "Guías de Conversación" : "Conversation Briefings",
  href: conversationRoutes[lang].hub,
  description:
    lang === "es"
      ? "Vocabulario para las conversaciones que ningún curso cubre."
      : "Vocabulary for the conversations no course covers.",
});

export const collocationsHub = (lang: NavLang): CourseLink => ({
  name: lang === "es" ? "Colocaciones por Profesión" : "Collocations by Job",
  href: `${collocationsRoutes[lang].reference}#by-job`,
  description:
    lang === "es"
      ? "Las combinaciones de palabras correctas para tu puesto."
      : "The right word combinations for your role.",
});

export const levelCourseLinks = (lang: NavLang): CourseLink[] =>
  levelCourses.map((c) => local(c, lang));

export const masterclassLinks = (lang: NavLang): CourseLink[] => [
  ...masterclasses.map((c) => ({
    name: c.name[i(lang)],
    href: courseRoute(c, lang),
    description: c.tagline[i(lang)],
  })),
  ...olderMasterclasses.map((c) => local(c, lang)),
];

export const briefingLinks = (lang: NavLang): CourseLink[] =>
  topics.map((t) => ({
    name: t.h1[i(lang)],
    href: topicRoute(t, lang),
    description: t.card[i(lang)],
  }));

export const roleLinks = (lang: NavLang): CourseLink[] =>
  roles.map((r) => ({
    name:
      lang === "es" ? `Colocaciones en Inglés: ${r.name[1]}` : `English Collocations: ${r.name[0]}`,
    href: roleRoute(r, lang),
    description: sentence(r.scenes[i(lang)]),
  }));

/** The footer column: the hub first, then the newest master classes and series. */
export const footerCourseLinks = (lang: NavLang): { name: string; href: string }[] =>
  [
    coursesHub(lang),
    ...masterclasses.map((c) => ({ name: c.name[i(lang)], href: courseRoute(c, lang) })),
    conversationHub(lang),
    collocationsHub(lang),
    ...olderMasterclasses.slice(0, 3).map((c) => local(c, lang)),
  ].map(({ name, href }) => ({ name, href }));
