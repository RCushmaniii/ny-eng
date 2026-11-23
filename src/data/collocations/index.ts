// Localized view of the collocations bank, the drill answer key, and the UI strings.
// Used at build time by the Astro components and in the browser by the drill.

import { DATA, CHEAT, type CollocationGroup, type CollocationItem } from "./data";
import { DATA_ES, CHEAT_ES } from "./es";

export type CollocationsLang = "en" | "es";

export interface DrillItem extends CollocationItem {
  /** Stable across languages: `${groupIndex}-${itemIndex}`. Progress is stored against it. */
  id: string;
  /** Accepted answers, most common first. "none" means the verb takes no preposition. */
  key: string[];
  isTrap: boolean;
  isMulti: boolean;
}

export interface DrillGroup {
  title: string;
  rule: string;
  items: DrillItem[];
}

const PREPS = [
  "about",
  "against",
  "at",
  "by",
  "for",
  "from",
  "in",
  "into",
  "of",
  "on",
  "over",
  "than",
  "through",
  "to",
  "toward",
  "towards",
  "upon",
  "with",
  "without",
];

/** Derives the accepted prepositions from the English answer line and the variants list. */
export function keyFor(it: CollocationItem): string[] {
  const set = new Set<string>();
  const a = (it.a || "").toLowerCase();
  if (a.includes("no preposition")) set.add("none");
  const head = it.q
    .toLowerCase()
    .replace(/______.*/, "")
    .replace(/^\(?be\)?\s+/, "")
    .replace(/[()]/g, "")
    .trim();
  a.split("·").forEach((seg) => {
    let s = seg.replace(/\([^)]*\)/g, " ").trim();
    if (head && s.startsWith(head)) s = s.slice(head.length);
    s.split(/[\s/+]+/).forEach((w) => {
      const word = w.replace(/[^a-z]/g, "");
      if (PREPS.includes(word)) set.add(word);
    });
  });
  (it.v || []).forEach((pair) => {
    const t = String(pair[0]).toLowerCase().replace(/[()]/g, "").trim();
    if (t === "none") set.add("none");
    else
      t.split(/\s+/).forEach((w) => {
        if (PREPS.includes(w)) set.add(w);
      });
  });
  if (!set.size) set.add("none");
  return [...set];
}

const itemKey = (it: CollocationItem) => (it.hint ? `${it.q} ${it.hint}` : it.q);

function localize(group: CollocationGroup, gi: number, lang: CollocationsLang): DrillGroup {
  const es = lang === "es" ? DATA_ES[gi] : undefined;
  if (lang === "es" && !es) throw new Error(`[collocations] No Spanish group at index ${gi}`);

  if (es) {
    const known = new Set(group.items.map(itemKey));
    for (const k of Object.keys(es.items)) {
      if (!known.has(k)) {
        throw new Error(`[collocations] Spanish key "${k}" matches no item in "${group.title}"`);
      }
    }
  }

  const items = group.items.map((it, ii): DrillItem => {
    // The answer key always comes from the English source, before any translation.
    const key = keyFor(it);
    const tags = [...it.tags];
    if (it.trap) tags.push("trap");
    if (it.v && it.v.length > 1) tags.push("multi");

    let out: CollocationItem = { ...it, tags };
    const o = es?.items[itemKey(it)];
    if (es) {
      // Formulas stay in English; only the fixed connective phrases are translated.
      out.a = it.a.replace("— no preposition", "— sin preposición").replace(/ · or · /g, " · o · ");
    }
    if (o) {
      if (o.v && (!it.v || o.v.length !== it.v.length)) {
        throw new Error(`[collocations] Spanish variants for "${itemKey(it)}" do not match`);
      }
      out = {
        ...out,
        hint: o.hint ?? out.hint,
        a: o.a ?? out.a,
        note: o.note ?? out.note,
        trap: o.trap ?? out.trap,
        v: it.v && o.v ? it.v.map((row, vi) => [row[0], row[1], o.v![vi]]) : out.v,
      };
    }
    return {
      ...out,
      id: `${gi}-${ii}`,
      key,
      isTrap: Boolean(it.trap),
      isMulti: Boolean(it.v && it.v.length > 1),
    };
  });

  return { title: es?.title ?? group.title, rule: es?.rule ?? group.rule, items };
}

export function getGroups(lang: CollocationsLang): DrillGroup[] {
  return DATA.map((g, gi) => localize(g, gi, lang));
}

export function getCheat(lang: CollocationsLang): [string, string][] {
  return lang === "es" ? CHEAT_ES : CHEAT;
}

export const collocationsRoutes = {
  en: {
    reference: "/en/course/verb-patterns/collocations/",
    drill: "/en/course/verb-patterns/collocations-drill/",
    course: "/en/course/verb-patterns/",
  },
  es: {
    reference: "/es/curso/patrones-verbales/colocaciones/",
    drill: "/es/curso/patrones-verbales/colocaciones-practica/",
    course: "/es/curso/patrones-verbales/",
  },
} as const;

export const collocationsUi = {
  en: {
    noPrep: "no preposition",
    noPrepUpper: "NO PREPOSITION",
    rank: { 1: "most common", 2: "also common", 3: "less common" },
    ref: {
      eyebrow: "Business English · Collocations",
      h1: "The Right Words for the Job",
      sub: "Verb + preposition, adjective + preposition, the verbs that take no preposition at all, and the two-object verbs that trip up even fluent senior speakers — grouped by meaning, so you can predict the pattern instead of memorizing a list.",
      howto:
        "<b>How to use this:</b> read the expression, say the full phrase out loud with your own example, <b>then</b> tap to check. Guessing first is what makes it stick. Where a verb takes more than one preposition, the answer shows which one is most common.",
      formulas:
        "<b>Reading the formulas:</b> <i>someone</i> always means a person, <i>something</i> always means a thing. Where a verb accepts either, the formula says so.",
      startDrill: "Start a drill",
      jump: "Jump to a group",
      accordion: "One at a time",
      accordionTitle: "Keep only one answer open at a time",
      revealAll: "Reveal all",
      hideAll: "Hide all",
      reset: "Clear drill history",
      resetConfirm: "Clear your drill history? The expressions stay; only your scores are erased.",
      searchPlaceholder: "Search an expression… (e.g. responsible, remind, discuss)",
      searchLabel: "Search expressions",
      filterLabel: "Filter expressions",
      chips: { all: "All", weak: "Needs work", trap: "Common errors", multi: "2+ options" },
      cheatTitle: "The prepositions that do most of the work",
      cheatLead: "Learn the logic first. Almost everything below follows one of these.",
      group: "Group",
      tap: "Tap to reveal answer",
      badgeTrap: "Common error",
      badgeMulti: "{n} options",
      countNone: "{total} expressions · no drill attempts yet",
      countSolid: "<b class='ok'>{solid}</b> answered correctly in a drill",
      countWeak: " · <b class='warn'>{weak}</b> still shaky",
      countOf: " · of {total}",
      empty: "Nothing matches that search. Clear it, or pick another filter.",
      back: "Back to Course Overview",
    },
    drill: {
      back: "Back to the reference",
      eyebrow: "Business English · Drill",
      h1: "Fill in the Preposition",
      sub: "Type what goes in the blank. If the verb takes no preposition, type <b>—</b> or <b>none</b>. Press Enter to check, Enter again for the next one.",
      sub2: "Anything you miss here is marked <b class='warn'>needs work</b> and comes back in your next drill — and shows an amber dot on the reference page until you get it right.",
      scope: "What to practice",
      len: "Questions",
      lenAll: "All of them",
      start: "Start drill",
      scopeWeak: "My weak items ({n}) — the ones I missed last time",
      scopeAll: "Everything ({n} expressions)",
      scopeTrap: "Common errors only ({n})",
      scopeMulti: "Verbs with 2+ options ({n})",
      scopeGroup: "Group {i} — {title} ({n})",
      question: "Question",
      of: "of",
      correct: "Correct",
      streak: "Streak",
      placeholder: "Type the preposition…",
      answerLabel: "Your answer",
      tip: "No preposition needed? Type <b>—</b>, <b>none</b> or just a dash.",
      check: "Check",
      show: "Show answer",
      end: "End drill",
      next: "Next question",
      results: "See results",
      vOk: "✓ Correct",
      vNo: "✗ Not quite",
      vShown: "Answer",
      acceptedBut: "Accepted — though the most common choice here is <b>{p}</b>.",
      alsoCorrect: "Also correct: {list}.",
      scoreSub: "{pct}% · longest streak {best}. {verdict}",
      verdicts: [
        "Excellent — these are locked in.",
        "Solid. The misses below are the ones to review.",
        "Good start. Work through the misses, then run the same scope again.",
        "Worth slowing down — read the group rule on the reference page before the next round.",
      ],
      again: "New round",
      retry: "Retry the {n} missed",
      change: "Change scope",
      review: "Review these",
      youTyped: "you typed:",
      noneWords: [] as string[],
    },
  },
  es: {
    noPrep: "sin preposición",
    noPrepUpper: "SIN PREPOSICIÓN",
    rank: { 1: "la más común", 2: "también común", 3: "menos común" },
    ref: {
      eyebrow: "Inglés de negocios · Colocaciones",
      h1: "Las Palabras Correctas para el Trabajo",
      sub: "Verbo + preposición, adjetivo + preposición, los verbos que no llevan ninguna preposición y los verbos de dos objetos que hacen tropezar incluso a directivos con inglés fluido — agrupados por significado, para que puedas predecir el patrón en lugar de memorizar una lista.",
      howto:
        "<b>Cómo usarla:</b> lee la expresión, di la frase completa en voz alta con tu propio ejemplo y <b>después</b> toca para revisar. Intentarlo primero es lo que hace que se te quede. Cuando un verbo acepta más de una preposición, la respuesta te muestra cuál es la más común.",
      formulas:
        "<b>Cómo leer las fórmulas:</b> <i>someone</i> siempre es una persona y <i>something</i> siempre es una cosa. Cuando un verbo acepta cualquiera de los dos, la fórmula lo indica.",
      startDrill: "Empezar una práctica",
      jump: "Ir a un grupo",
      accordion: "Una a la vez",
      accordionTitle: "Mantener abierta solo una respuesta a la vez",
      revealAll: "Mostrar todas",
      hideAll: "Ocultar todas",
      reset: "Borrar mi historial",
      resetConfirm:
        "¿Borrar tu historial de práctica? Las expresiones se quedan; solo se borran tus resultados.",
      searchPlaceholder: "Busca una expresión… (p. ej. responsible, remind, discuss)",
      searchLabel: "Buscar expresiones",
      filterLabel: "Filtrar expresiones",
      chips: { all: "Todas", weak: "Por reforzar", trap: "Errores comunes", multi: "2+ opciones" },
      cheatTitle: "Las preposiciones que hacen casi todo el trabajo",
      cheatLead: "Primero aprende la lógica. Casi todo lo de abajo sigue una de estas.",
      group: "Grupo",
      tap: "Toca para ver la respuesta",
      badgeTrap: "Error común",
      badgeMulti: "{n} opciones",
      countNone: "{total} expresiones · todavía no has hecho ninguna práctica",
      countSolid: "<b class='ok'>{solid}</b> correctas en una práctica",
      countWeak: " · <b class='warn'>{weak}</b> por reforzar",
      countOf: " · de {total}",
      empty: "Nada coincide con esa búsqueda. Bórrala o elige otro filtro.",
      back: "Volver al resumen del curso",
    },
    drill: {
      back: "Volver a la referencia",
      eyebrow: "Inglés de negocios · Práctica",
      h1: "Completa la Preposición",
      sub: "Escribe lo que va en el espacio. Si el verbo no lleva preposición, escribe <b>—</b> o <b>none</b>. Presiona Enter para revisar y Enter otra vez para pasar a la siguiente.",
      sub2: "Lo que falles aquí queda marcado como <b class='warn'>por reforzar</b> y regresa en tu siguiente práctica — además aparece con un punto ámbar en la página de referencia hasta que lo contestes bien.",
      scope: "Qué practicar",
      len: "Preguntas",
      lenAll: "Todas",
      start: "Empezar práctica",
      scopeWeak: "Mis puntos débiles ({n}) — los que fallé la última vez",
      scopeAll: "Todo ({n} expresiones)",
      scopeTrap: "Solo errores comunes ({n})",
      scopeMulti: "Verbos con 2+ opciones ({n})",
      scopeGroup: "Grupo {i} — {title} ({n})",
      question: "Pregunta",
      of: "de",
      correct: "Correctas",
      streak: "Racha",
      placeholder: "Escribe la preposición…",
      answerLabel: "Tu respuesta",
      tip: "¿No lleva preposición? Escribe <b>—</b>, <b>none</b> o solo un guion.",
      check: "Revisar",
      show: "Ver respuesta",
      end: "Terminar práctica",
      next: "Siguiente pregunta",
      results: "Ver resultados",
      vOk: "✓ Correcto",
      vNo: "✗ Casi",
      vShown: "Respuesta",
      acceptedBut: "Aceptada — aunque aquí la opción más común es <b>{p}</b>.",
      alsoCorrect: "También es correcto: {list}.",
      scoreSub: "{pct}% · racha más larga: {best}. {verdict}",
      verdicts: [
        "Excelente — estas ya las dominas.",
        "Bien. Las que fallaste abajo son las que hay que repasar.",
        "Buen comienzo. Repasa las que fallaste y repite la misma selección.",
        "Conviene ir más despacio — lee la regla del grupo en la página de referencia antes de la siguiente ronda.",
      ],
      again: "Nueva ronda",
      retry: "Repetir las {n} falladas",
      change: "Cambiar selección",
      review: "Repasa estas",
      youTyped: "escribiste:",
      noneWords: ["ninguna", "nada", "sin preposición", "sin preposicion"],
    },
  },
} as const;

export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ""));
