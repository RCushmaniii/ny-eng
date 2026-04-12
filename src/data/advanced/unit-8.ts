// Unit 8: "Prefixes & Suffixes" — Full course content
//
// Section 1: Common prefixes and what they actually mean — WordBuilder
// Section 2: Suffixes that change word class — WordBuilder
// Section 3: Building vocabulary by decoding word parts — SentenceTransformer

import type { WordBreakdown, SentenceTransform } from "./types";

// ─── Section 1: Prefixes (WordBuilder) ──────────────────────────────────────
// The most common English prefixes that Spanish speakers can decode once they
// learn the pattern. Each word is broken into prefix + root (+ optional suffix).

export const prefixWords: WordBreakdown[] = [
  {
    word: "uncomfortable",
    parts: [
      { text: "un-", role: "prefix", meaning: "not / opposite of", meaningEs: "no / lo opuesto de" },
      { text: "comfort", role: "root", meaning: "ease, relief", meaningEs: "comodidad, alivio" },
      { text: "-able", role: "suffix", meaning: "capable of being", meaningEs: "capaz de ser" },
    ],
    fullMeaning: "Not capable of being at ease — the opposite of comfortable.",
    fullMeaningEs: "No capaz de estar cómodo — lo opuesto de comfortable.",
    relatedExample: "un- works the same way in: unhappy, unfair, unlikely, unbelievable, unexpected",
    relatedExampleEs: "un- funciona igual en: unhappy, unfair, unlikely, unbelievable, unexpected",
  },
  {
    word: "disapprove",
    parts: [
      { text: "dis-", role: "prefix", meaning: "opposite of / remove", meaningEs: "opuesto de / quitar" },
      { text: "approve", role: "root", meaning: "to agree, to accept", meaningEs: "aprobar, aceptar" },
    ],
    fullMeaning: "To not approve — to express an unfavorable opinion.",
    fullMeaningEs: "No aprobar — expresar una opinión desfavorable.",
    relatedExample: "dis- reverses the action: disagree, disconnect, disqualify, dishonest, disrespect",
    relatedExampleEs: "dis- revierte la acción: disagree, disconnect, disqualify, dishonest, disrespect",
  },
  {
    word: "misunderstand",
    parts: [
      { text: "mis-", role: "prefix", meaning: "wrongly / badly", meaningEs: "incorrectamente / mal" },
      { text: "understand", role: "root", meaning: "to comprehend", meaningEs: "comprender" },
    ],
    fullMeaning: "To understand wrongly — to get the wrong meaning from something.",
    fullMeaningEs: "Comprender incorrectamente — obtener un significado equivocado de algo.",
    relatedExample: "mis- means 'wrong': mispronounce, mislead, misjudge, misplace, misinform",
    relatedExampleEs: "mis- significa 'mal/incorrecto': mispronounce, mislead, misjudge, misplace, misinform",
  },
  {
    word: "overestimate",
    parts: [
      { text: "over-", role: "prefix", meaning: "too much / excessively", meaningEs: "demasiado / excesivamente" },
      { text: "estimate", role: "root", meaning: "to guess the value/amount", meaningEs: "calcular el valor/cantidad" },
    ],
    fullMeaning: "To estimate too high — to think something is bigger, better, or more than it actually is.",
    fullMeaningEs: "Calcular demasiado alto — pensar que algo es más grande, mejor o más de lo que realmente es.",
    relatedExample: "over- means 'too much': overwork, overthink, overreact, oversimplify, overcook",
    relatedExampleEs: "over- significa 'demasiado': overwork, overthink, overreact, oversimplify, overcook",
  },
  {
    word: "underpaid",
    parts: [
      { text: "under-", role: "prefix", meaning: "too little / below", meaningEs: "demasiado poco / debajo" },
      { text: "paid", role: "root", meaning: "received money for work", meaningEs: "recibió dinero por trabajo" },
    ],
    fullMeaning: "Paid too little — receiving less money than deserved for work done.",
    fullMeaningEs: "Pagado demasiado poco — recibir menos dinero del merecido por el trabajo realizado.",
    relatedExample: "under- is the opposite of over-: undervalue, underperform, underestimate, understaffed",
    relatedExampleEs: "under- es lo opuesto de over-: undervalue, underperform, underestimate, understaffed",
  },
  {
    word: "rewrite",
    parts: [
      { text: "re-", role: "prefix", meaning: "again / back", meaningEs: "de nuevo / otra vez" },
      { text: "write", role: "root", meaning: "to compose text", meaningEs: "componer texto" },
    ],
    fullMeaning: "To write again — to revise or compose a new version of something.",
    fullMeaningEs: "Escribir de nuevo — revisar o componer una nueva versión de algo.",
    relatedExample: "re- means 'again': rebuild, reconsider, redesign, reconnect, reevaluate",
    relatedExampleEs: "re- significa 'de nuevo': rebuild, reconsider, redesign, reconnect, reevaluate",
  },
  {
    word: "preview",
    parts: [
      { text: "pre-", role: "prefix", meaning: "before", meaningEs: "antes" },
      { text: "view", role: "root", meaning: "to see / a look at something", meaningEs: "ver / una mirada a algo" },
    ],
    fullMeaning: "To see before — an advance look at something before it's released or completed.",
    fullMeaningEs: "Ver antes — un vistazo anticipado a algo antes de que se lance o complete.",
    relatedExample: "pre- means 'before': predict, prevent, premature, prerequisite, preschool",
    relatedExampleEs: "pre- significa 'antes': predict, prevent, premature, prerequisite, preschool",
  },
];

// ─── Section 2: Suffixes That Change Word Class (WordBuilder) ───────────────
// These suffixes transform verbs/adjectives into nouns, nouns into adjectives,
// etc. Understanding them lets you generate dozens of words from one root.

export const suffixWords: WordBreakdown[] = [
  {
    word: "communication",
    parts: [
      { text: "communicate", role: "root", meaning: "to exchange information (verb)", meaningEs: "intercambiar información (verbo)" },
      { text: "-tion", role: "suffix", meaning: "turns a verb into a noun (the act of)", meaningEs: "convierte un verbo en sustantivo (el acto de)" },
    ],
    fullMeaning: "The act of communicating — the process of exchanging information.",
    fullMeaningEs: "El acto de comunicar — el proceso de intercambiar información.",
    relatedExample: "-tion/-sion makes nouns from verbs: education, celebration, decision, permission, creation",
    relatedExampleEs: "-tion/-sion crea sustantivos de verbos: education, celebration, decision, permission, creation",
  },
  {
    word: "development",
    parts: [
      { text: "develop", role: "root", meaning: "to grow or create (verb)", meaningEs: "crecer o crear (verbo)" },
      { text: "-ment", role: "suffix", meaning: "the result or process of (noun)", meaningEs: "el resultado o proceso de (sustantivo)" },
    ],
    fullMeaning: "The process or result of developing — growth, progress, or advancement.",
    fullMeaningEs: "El proceso o resultado de desarrollar — crecimiento, progreso o avance.",
    relatedExample: "-ment makes nouns: achievement, management, improvement, environment, investment",
    relatedExampleEs: "-ment crea sustantivos: achievement, management, improvement, environment, investment",
  },
  {
    word: "happiness",
    parts: [
      { text: "happy", role: "root", meaning: "feeling joy (adjective)", meaningEs: "sentir alegría (adjetivo)" },
      { text: "-ness", role: "suffix", meaning: "the state or quality of (noun)", meaningEs: "el estado o cualidad de (sustantivo)" },
    ],
    fullMeaning: "The state of being happy — the quality of feeling joyful.",
    fullMeaningEs: "El estado de estar feliz — la cualidad de sentirse alegre.",
    relatedExample: "-ness makes nouns from adjectives: kindness, darkness, weakness, awareness, sadness",
    relatedExampleEs: "-ness crea sustantivos de adjetivos: kindness, darkness, weakness, awareness, sadness",
  },
  {
    word: "strengthen",
    parts: [
      { text: "strength", role: "root", meaning: "power, force (noun)", meaningEs: "fuerza, poder (sustantivo)" },
      { text: "-en", role: "suffix", meaning: "to make or become (verb)", meaningEs: "hacer o volverse (verbo)" },
    ],
    fullMeaning: "To make stronger — to increase in strength or force.",
    fullMeaningEs: "Hacer más fuerte — aumentar en fuerza o poder.",
    relatedExample: "-en makes verbs: widen, deepen, shorten, brighten, frighten, tighten, loosen",
    relatedExampleEs: "-en crea verbos: widen, deepen, shorten, brighten, frighten, tighten, loosen",
  },
  {
    word: "powerful",
    parts: [
      { text: "power", role: "root", meaning: "strength, control (noun)", meaningEs: "fuerza, control (sustantivo)" },
      { text: "-ful", role: "suffix", meaning: "full of (adjective)", meaningEs: "lleno de (adjetivo)" },
    ],
    fullMeaning: "Full of power — having great strength, influence, or effect.",
    fullMeaningEs: "Lleno de poder — tener gran fuerza, influencia o efecto.",
    relatedExample: "-ful makes adjectives: beautiful, grateful, hopeful, meaningful, resourceful",
    relatedExampleEs: "-ful crea adjetivos: beautiful, grateful, hopeful, meaningful, resourceful",
  },
  {
    word: "careless",
    parts: [
      { text: "care", role: "root", meaning: "attention, concern (noun)", meaningEs: "atención, preocupación (sustantivo)" },
      { text: "-less", role: "suffix", meaning: "without (adjective)", meaningEs: "sin (adjetivo)" },
    ],
    fullMeaning: "Without care — not paying enough attention, leading to mistakes.",
    fullMeaningEs: "Sin cuidado — no prestar suficiente atención, lo que lleva a errores.",
    relatedExample: "-less is the opposite of -ful: hopeless, useless, endless, homeless, reckless",
    relatedExampleEs: "-less es lo opuesto de -ful: hopeless, useless, endless, homeless, reckless",
  },
  {
    word: "basically",
    parts: [
      { text: "basic", role: "root", meaning: "fundamental (adjective)", meaningEs: "fundamental (adjetivo)" },
      { text: "-ally", role: "suffix", meaning: "in the manner of (adverb)", meaningEs: "de la manera de (adverbio)" },
    ],
    fullMeaning: "In a basic manner — fundamentally, at the most essential level.",
    fullMeaningEs: "De manera básica — fundamentalmente, en el nivel más esencial.",
    relatedExample: "-ly/-ally makes adverbs: professionally, personally, dramatically, automatically",
    relatedExampleEs: "-ly/-ally crea adverbios: professionally, personally, dramatically, automatically",
  },
];

// ─── Section 3: Decoding Unknown Words (SentenceTransformer) ────────────────
// Real-world sentences containing complex words that can be decoded by
// recognizing their prefix/root/suffix parts. The "flat" version shows the
// mystery word; the "strong" version decodes it in place.

export const decodingTransforms: SentenceTransform[] = [
  {
    flat: "The CEO's decision was irreversible — we couldn't go back.",
    flatEs: "La decisión del CEO fue irreversible — no podíamos volver atrás.",
    strong: "ir- (not) + reverse (go back) + -ible (capable of) = not capable of being reversed",
    strongEs: "ir- (no) + reverse (volver) + -ible (capaz de) = no capaz de ser revertido",
    technique: "Prefix + Root + Suffix",
    techniqueEs: "Prefijo + Raíz + Sufijo",
    why: "'Irreversible' looks intimidating until you break it down: ir- means 'not' (like un-), reverse means 'go back,' -ible means 'capable of.' Three simple parts = one complex word decoded. The prefix ir- is the negative form used before words starting with R: irregular, irresponsible, irrational.",
    whyEs: "'Irreversible' parece intimidante hasta que lo descompones: ir- significa 'no' (como un-), reverse significa 'volver,' -ible significa 'capaz de.' Tres partes simples = una palabra compleja decodificada. El prefijo ir- es la forma negativa usada antes de palabras que empiezan con R.",
  },
  {
    flat: "The report was full of unsubstantiated claims about the competitor.",
    flatEs: "El informe estaba lleno de afirmaciones infundadas sobre el competidor.",
    strong: "un- (not) + substantiate (prove with evidence) + -ed (past) = not proven with evidence",
    strongEs: "un- (no) + substantiate (probar con evidencia) + -ed (pasado) = no probado con evidencia",
    technique: "Prefix + Root + Suffix",
    techniqueEs: "Prefijo + Raíz + Sufijo",
    why: "You don't need to have memorized 'unsubstantiated.' If you know un- (not) and recognize 'substance' inside the root (something solid/real), you can deduce it means 'not backed by solid evidence.' This is how native speakers handle new words too — they decode, not memorize.",
    whyEs: "No necesitas haber memorizado 'unsubstantiated.' Si sabes que un- (no) y reconoces 'substance' dentro de la raíz (algo sólido/real), puedes deducir que significa 'no respaldado por evidencia sólida.' Así es como los nativos manejan palabras nuevas también — decodifican, no memorizan.",
  },
  {
    flat: "She was promoted for her resourcefulness during the crisis.",
    flatEs: "Fue promovida por su ingeniosidad durante la crisis.",
    strong: "resource (available supply) + -ful (full of) + -ness (state of) = the state of being full of resources",
    strongEs: "resource (recurso disponible) + -ful (lleno de) + -ness (estado de) = el estado de estar lleno de recursos",
    technique: "Root + Suffix + Suffix",
    techniqueEs: "Raíz + Sufijo + Sufijo",
    why: "Double suffixes are common: resource → resourceful (adjective: full of resources) → resourcefulness (noun: the quality of being resourceful). Each suffix changes the word class. Once you see this stacking pattern, you can build and decode hundreds of words.",
    whyEs: "Los sufijos dobles son comunes: resource → resourceful (adjetivo: lleno de recursos) → resourcefulness (sustantivo: la cualidad de ser ingenioso). Cada sufijo cambia la clase de palabra. Una vez que ves este patrón de apilamiento, puedes construir y decodificar cientos de palabras.",
  },
  {
    flat: "The restructuring of the department was overdue and long-awaited.",
    flatEs: "La reestructuración del departamento estaba atrasada y esperada desde hace tiempo.",
    strong: "re- (again) + structure (organize) + -ing (process) / over- (beyond) + due (expected time)",
    strongEs: "re- (de nuevo) + structure (organizar) + -ing (proceso) / over- (más allá) + due (tiempo esperado)",
    technique: "Two decoded words",
    techniqueEs: "Dos palabras decodificadas",
    why: "Two prefix words in one sentence: 'restructuring' = organizing again (re- + structure + -ing). 'Overdue' = past the expected time (over- + due). When you read English with prefix awareness, complex sentences become transparent. You stop looking up words and start decoding them.",
    whyEs: "Dos palabras con prefijo en una oración: 'restructuring' = organizar de nuevo (re- + structure + -ing). 'Overdue' = pasado el tiempo esperado (over- + due). Cuando lees inglés con conciencia de prefijos, las oraciones complejas se vuelven transparentes.",
  },
  {
    flat: "His presentation was disorganized and unconvincing to the board.",
    flatEs: "Su presentación fue desorganizada y poco convincente para la junta.",
    strong: "dis- (not) + organized (arranged) / un- (not) + convince (persuade) + -ing (doing)",
    strongEs: "dis- (no) + organized (organizado) / un- (no) + convince (persuadir) + -ing (haciendo)",
    technique: "Two negative prefixes",
    techniqueEs: "Dos prefijos negativos",
    why: "English has FOUR main negative prefixes: un-, dis-, mis-, in-/im-/ir-/il-. They all mean 'not' but attach to different roots. There's no rule for which one goes with which word — but once you recognize them, you can instantly decode any negative word you've never seen before.",
    whyEs: "El inglés tiene CUATRO prefijos negativos principales: un-, dis-, mis-, in-/im-/ir-/il-. Todos significan 'no' pero se adjuntan a diferentes raíces. No hay una regla para cuál va con cuál — pero una vez que los reconoces, puedes decodificar instantáneamente cualquier palabra negativa que nunca hayas visto.",
  },
];
