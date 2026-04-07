// Unit 1: "The Phrasal Verb Problem" — Full course content
// Theme: Understanding why phrasal verbs exist and how to decode them
// Grammar: Present perfect vs. simple past
// Pronunciation: Stress in phrasal verbs

import type {
  PhrasalVerbGroup,
  Dialogue,
  ErrorCorrectionSet,
  IntermediateVocabItem,
} from "./types";
import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

// ─── Section A: Phrasal Verb Explorer ────────────────────────────────────────

export const phrasalVerbGroups: PhrasalVerbGroup[] = [
  {
    baseVerb: "find",
    baseVerbEs: "encontrar",
    description:
      "See how 'find' changes meaning completely with different particles.",
    descriptionEs:
      "Mira cómo 'find' cambia completamente de significado con diferentes partículas.",
    verbs: [
      {
        verb: "find out",
        verbEs: "descubrir / enterarse",
        particle: "out",
        baseVerb: "find",
        definition: "To discover information, often something surprising",
        definitionEs: "Descubrir información, frecuentemente algo sorprendente",
        example: "I just found out that we're getting a new manager.",
        exampleEs: "Acabo de enterarme de que vamos a tener un nuevo gerente.",
        contextNote: "Very common in everyday conversation and workplace gossip",
        contextNoteEs:
          "Muy común en conversación diaria y chismes de oficina",
      },
    ],
  },
  {
    baseVerb: "figure",
    baseVerbEs: "figurar",
    description:
      "'Figure' alone is rarely used as a verb — but 'figure out' is everywhere.",
    descriptionEs:
      "'Figure' solo casi no se usa como verbo — pero 'figure out' está en todas partes.",
    verbs: [
      {
        verb: "figure out",
        verbEs: "resolver / entender",
        particle: "out",
        baseVerb: "figure",
        definition:
          "To solve a problem or understand something after thinking about it",
        definitionEs:
          "Resolver un problema o entender algo después de pensarlo",
        example:
          "I can't figure out why the report isn't working.",
        exampleEs:
          "No puedo entender por qué el reporte no funciona.",
        contextNote: "The go-to verb for problem-solving in English",
        contextNoteEs: "El verbo preferido para resolver problemas en inglés",
      },
    ],
  },
  {
    baseVerb: "come",
    baseVerbEs: "venir",
    description:
      "'Come' combines with many particles. Here's one of the most useful.",
    descriptionEs:
      "'Come' se combina con muchas partículas. Aquí está uno de los más útiles.",
    verbs: [
      {
        verb: "come up with",
        verbEs: "idear / inventar / ocurrírsele a uno",
        particle: "up with",
        baseVerb: "come",
        definition: "To think of an idea, plan, or solution",
        definitionEs: "Pensar en una idea, plan o solución",
        example: "She came up with a brilliant solution to the problem.",
        exampleEs: "A ella se le ocurrió una solución brillante al problema.",
        contextNote: "Used in brainstorming, meetings, and creative contexts",
        contextNoteEs:
          "Se usa en lluvias de ideas, juntas y contextos creativos",
      },
    ],
  },
  {
    baseVerb: "look",
    baseVerbEs: "mirar / ver",
    description:
      "'Look' + particles creates some of the most used phrasal verbs in English.",
    descriptionEs:
      "'Look' + partículas crea algunos de los phrasal verbs más usados en inglés.",
    verbs: [
      {
        verb: "look up",
        verbEs: "buscar (información)",
        particle: "up",
        baseVerb: "look",
        definition:
          "To search for information in a reference source or online",
        definitionEs:
          "Buscar información en una fuente de referencia o en línea",
        example: "Let me look up the address on my phone.",
        exampleEs: "Déjame buscar la dirección en mi teléfono.",
      },
    ],
  },
  {
    baseVerb: "turn",
    baseVerbEs: "girar / voltear",
    description:
      "'Turn' is surprisingly versatile with different particles.",
    descriptionEs:
      "'Turn' es sorprendentemente versátil con diferentes partículas.",
    verbs: [
      {
        verb: "turn out",
        verbEs: "resultar",
        particle: "out",
        baseVerb: "turn",
        definition: "The result was different from what was expected",
        definitionEs: "El resultado fue diferente de lo esperado",
        example:
          "The meeting turned out to be more productive than I expected.",
        exampleEs:
          "La junta resultó ser más productiva de lo que esperaba.",
        contextNote: "Often used to express surprise about outcomes",
        contextNoteEs:
          "Se usa frecuentemente para expresar sorpresa sobre resultados",
      },
    ],
  },
  {
    baseVerb: "pick",
    baseVerbEs: "escoger / recoger",
    description:
      "'Pick up' is one of the most versatile phrasal verbs — it has many meanings.",
    descriptionEs:
      "'Pick up' es uno de los phrasal verbs más versátiles — tiene muchos significados.",
    verbs: [
      {
        verb: "pick up",
        verbEs: "recoger / aprender rápidamente",
        particle: "up",
        baseVerb: "pick",
        definition:
          "To collect something/someone, or to learn something quickly and naturally",
        definitionEs:
          "Recoger algo/a alguien, o aprender algo rápido y naturalmente",
        example:
          "I picked up some Spanish just by living in Mexico for a year.",
        exampleEs:
          "Aprendí algo de español solo por vivir en México un año.",
        contextNote:
          "For language learning: 'pick up' means to learn naturally, not in a classroom",
        contextNoteEs:
          "Para aprendizaje de idiomas: 'pick up' significa aprender naturalmente, no en un salón",
      },
    ],
  },
  {
    baseVerb: "go",
    baseVerbEs: "ir",
    description:
      "'Go over' is essential for workplace and study contexts.",
    descriptionEs:
      "'Go over' es esencial para contextos de trabajo y estudio.",
    verbs: [
      {
        verb: "go over",
        verbEs: "repasar / revisar",
        particle: "over",
        baseVerb: "go",
        definition: "To review or examine something carefully",
        definitionEs: "Revisar o examinar algo cuidadosamente",
        example:
          "Can we go over the presentation one more time before the meeting?",
        exampleEs:
          "¿Podemos repasar la presentación una vez más antes de la junta?",
        contextNote:
          "Extremely common in meetings: 'Let's go over the agenda'",
        contextNoteEs:
          "Extremadamente común en juntas: 'Let's go over the agenda'",
      },
    ],
  },
  {
    baseVerb: "end",
    baseVerbEs: "terminar",
    description:
      "'End up' describes an unexpected final result — very natural in storytelling.",
    descriptionEs:
      "'End up' describe un resultado final inesperado — muy natural al contar historias.",
    verbs: [
      {
        verb: "end up",
        verbEs: "terminar (haciendo algo) / acabar",
        particle: "up",
        baseVerb: "end",
        definition:
          "To be in a situation that you didn't plan or expect",
        definitionEs:
          "Estar en una situación que no planeaste o esperabas",
        example:
          "I went to the store for milk and ended up spending $200.",
        exampleEs:
          "Fui a la tienda por leche y terminé gastando $200.",
        contextNote: "Perfect for telling stories about unexpected outcomes",
        contextNoteEs:
          "Perfecto para contar historias sobre resultados inesperados",
      },
    ],
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "The New Project",
    titleEs: "El Proyecto Nuevo",
    setting: "Two colleagues chatting in the office kitchen",
    settingEs: "Dos colegas platicando en la cocina de la oficina",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Maria",
        speakerLabelEs: "María",
        english: "Hey, have you found out who's leading the new project?",
        spanish: "Oye, ¿ya te enteraste quién va a liderar el proyecto nuevo?",
        highlight: "found out",
      },
      {
        speaker: "B",
        speakerLabel: "James",
        speakerLabelEs: "James",
        english:
          "Yeah, it turns out it's going to be Sandra. She came up with the original idea.",
        spanish:
          "Sí, resulta que va a ser Sandra. A ella se le ocurrió la idea original.",
        highlight: "turns out",
      },
      {
        speaker: "A",
        speakerLabel: "Maria",
        speakerLabelEs: "María",
        english:
          "Oh really? I've worked with her before. She's great at figuring out complex problems.",
        spanish:
          "¿En serio? He trabajado con ella antes. Es excelente para resolver problemas complejos.",
        highlight: "figuring out",
      },
      {
        speaker: "B",
        speakerLabel: "James",
        speakerLabelEs: "James",
        english:
          "Same here. I've picked up a lot from her approach to project management.",
        spanish:
          "Igual yo. He aprendido mucho de su enfoque en gestión de proyectos.",
        highlight: "picked up",
      },
      {
        speaker: "A",
        speakerLabel: "Maria",
        speakerLabelEs: "María",
        english:
          "We should go over the project brief together. Are you free after lunch?",
        spanish:
          "Deberíamos repasar el brief del proyecto juntos. ¿Estás libre después de comer?",
        highlight: "go over",
      },
      {
        speaker: "B",
        speakerLabel: "James",
        speakerLabelEs: "James",
        english:
          "Sure. Let me look up the meeting room availability and I'll send you an invite.",
        spanish:
          "Claro. Déjame buscar la disponibilidad de salas y te mando una invitación.",
        highlight: "look up",
      },
    ],
    keyPhrases: [
      {
        english: "Have you found out...?",
        spanish: "¿Ya te enteraste...?",
        note: "Present perfect + phrasal verb — asking about recent discoveries",
        noteEs:
          "Presente perfecto + phrasal verb — preguntando sobre descubrimientos recientes",
      },
      {
        english: "It turns out...",
        spanish: "Resulta que...",
        note: "A natural way to share surprising information",
        noteEs: "Una forma natural de compartir información sorprendente",
      },
      {
        english: "I've picked up a lot from...",
        spanish: "He aprendido mucho de...",
        note: "Present perfect + 'pick up' = learning informally over time",
        noteEs:
          "Presente perfecto + 'pick up' = aprender informalmente con el tiempo",
      },
    ],
  },
];

// ─── Section C: Structure Builder (Present Perfect vs Simple Past) ───────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "Present Perfect: Life Experience",
    labelEs: "Presente Perfecto: Experiencia de Vida",
    description:
      "Use the present perfect to talk about experiences at an unspecified time. The exact time doesn't matter — the experience does.",
    descriptionEs:
      "Usa el presente perfecto para hablar de experiencias en un tiempo no especificado. El momento exacto no importa — la experiencia sí.",
    sentences: [
      {
        english: "I have worked in three different countries.",
        spanish: "He trabajado en tres países diferentes.",
        highlight: "have worked",
      },
      {
        english: "She has managed teams of over 50 people.",
        spanish: "Ella ha gestionado equipos de más de 50 personas.",
        highlight: "has managed",
      },
      {
        english: "We have never had a problem with that client.",
        spanish: "Nunca hemos tenido un problema con ese cliente.",
        highlight: "have never had",
      },
      {
        english: "Have you ever given a presentation in English?",
        spanish: "¿Alguna vez has dado una presentación en inglés?",
        highlight: "Have you ever given",
      },
    ],
  },
  {
    label: "Simple Past: Specific Time",
    labelEs: "Pasado Simple: Tiempo Específico",
    description:
      "Use the simple past when you mention WHEN something happened. The time is specific and finished.",
    descriptionEs:
      "Usa el pasado simple cuando mencionas CUÁNDO algo sucedió. El tiempo es específico y terminado.",
    sentences: [
      {
        english: "I worked in London in 2019.",
        spanish: "Trabajé en Londres en 2019.",
        highlight: "worked",
      },
      {
        english: "She managed the entire project last quarter.",
        spanish: "Ella gestionó todo el proyecto el trimestre pasado.",
        highlight: "managed",
      },
      {
        english: "We didn't have any issues yesterday.",
        spanish: "No tuvimos ningún problema ayer.",
        highlight: "didn't have",
      },
      {
        english: "Did you give the presentation last Monday?",
        spanish: "¿Diste la presentación el lunes pasado?",
        highlight: "Did you give",
      },
    ],
  },
  {
    label: "The Key Difference — Side by Side",
    labelEs: "La Diferencia Clave — Lado a Lado",
    description:
      "Notice: present perfect connects the past to now. Simple past is finished and closed.",
    descriptionEs:
      "Nota: el presente perfecto conecta el pasado con el ahora. El pasado simple está terminado y cerrado.",
    sentences: [
      {
        english: "I have lived in Mexico for 5 years. (I still live here)",
        spanish: "He vivido en México por 5 años. (Todavía vivo aquí)",
        highlight: "have lived",
      },
      {
        english: "I lived in Mexico for 5 years. (I don't anymore)",
        spanish: "Viví en México por 5 años. (Ya no vivo ahí)",
        highlight: "lived",
      },
      {
        english: "She has lost her keys. (They're still missing)",
        spanish: "Ella ha perdido sus llaves. (Todavía están perdidas)",
        highlight: "has lost",
      },
      {
        english: "She lost her keys yesterday. (She found them later)",
        spanish: "Ella perdió sus llaves ayer. (Las encontró después)",
        highlight: "lost",
      },
    ],
  },
  {
    label: "Present Perfect + Phrasal Verbs",
    labelEs: "Presente Perfecto + Phrasal Verbs",
    description:
      "Combine what you learned in Section A with the present perfect — this is how native speakers actually talk.",
    descriptionEs:
      "Combina lo que aprendiste en la Sección A con el presente perfecto — así es como realmente hablan los nativos.",
    sentences: [
      {
        english: "I've figured out the problem with the database.",
        spanish: "He resuelto el problema con la base de datos.",
        highlight: "I've figured out",
      },
      {
        english: "Have you found out who's coming to the meeting?",
        spanish: "¿Ya te enteraste quién viene a la junta?",
        highlight: "Have you found out",
      },
      {
        english:
          "We've come up with a new strategy for the Q3 launch.",
        spanish:
          "Hemos ideado una nueva estrategia para el lanzamiento del Q3.",
        highlight: "We've come up with",
      },
      {
        english: "He's ended up in a completely different role than he expected.",
        spanish:
          "Él terminó en un rol completamente diferente al que esperaba.",
        highlight: "He's ended up",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes with Present Perfect & Phrasal Verbs",
  titleEs: "Errores Comunes con Presente Perfecto y Phrasal Verbs",
  description:
    "Spanish speakers make specific, predictable errors with these structures. Can you spot them?",
  descriptionEs:
    "Los hispanohablantes cometen errores específicos y predecibles con estas estructuras. ¿Puedes detectarlos?",
  items: [
    {
      incorrect: "I have worked here since three years.",
      correct: "I have worked here for three years.",
      incorrectHighlight: "since three years",
      correctHighlight: "for three years",
      explanation:
        "'Since' needs a specific point in time (since 2021, since Monday). 'For' is used with a duration (for 3 years, for 2 months). Spanish uses 'desde hace' for both, which causes this confusion.",
      explanationEs:
        "'Since' necesita un punto específico en el tiempo (since 2021, since Monday). 'For' se usa con una duración (for 3 years, for 2 months). En español usamos 'desde hace' para ambos, lo que causa esta confusión.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I have went to the meeting yesterday.",
      correct: "I went to the meeting yesterday.",
      incorrectHighlight: "have went",
      correctHighlight: "went",
      explanation:
        "When you mention a specific time (yesterday, last week, in 2020), you MUST use simple past, not present perfect. Also, the past participle of 'go' is 'gone', not 'went'.",
      explanationEs:
        "Cuando mencionas un tiempo específico (yesterday, last week, in 2020), DEBES usar pasado simple, no presente perfecto. Además, el participio pasado de 'go' es 'gone', no 'went'.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "She finded out the truth.",
      correct: "She found out the truth.",
      incorrectHighlight: "finded out",
      correctHighlight: "found out",
      explanation:
        "'Find' is an irregular verb: find → found → found. Many Spanish speakers add '-ed' to irregular verbs because regular verbs follow that pattern. 'Find out' keeps the irregular past form.",
      explanationEs:
        "'Find' es un verbo irregular: find → found → found. Muchos hispanohablantes agregan '-ed' a verbos irregulares porque los regulares siguen ese patrón. 'Find out' mantiene la forma irregular.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "I looked it up in the Internet.",
      correct: "I looked it up on the Internet.",
      incorrectHighlight: "in the Internet",
      correctHighlight: "on the Internet",
      explanation:
        "In English, we say 'on the Internet', 'on a website', 'on my phone'. Spanish uses 'en' for all, but English uses 'on' for digital platforms and surfaces. The phrasal verb 'look up' is correct here.",
      explanationEs:
        "En inglés, decimos 'on the Internet', 'on a website', 'on my phone'. En español usamos 'en' para todo, pero en inglés se usa 'on' para plataformas digitales y superficies.",
      errorType: "preposition",
    },
    {
      incorrect: "I have come up a new idea.",
      correct: "I have come up with a new idea.",
      incorrectHighlight: "come up a",
      correctHighlight: "come up with a",
      explanation:
        "'Come up with' is a three-part phrasal verb — you cannot drop the 'with'. The particle combination 'up with' is essential to the meaning. Without 'with', it means something else entirely (to approach/appear).",
      explanationEs:
        "'Come up with' es un phrasal verb de tres partes — no puedes quitar el 'with'. La combinación 'up with' es esencial para el significado. Sin 'with', significa algo completamente diferente (acercarse/aparecer).",
      errorType: "phrasal-verb",
    },
    {
      incorrect: "He has picked up it very quickly.",
      correct: "He has picked it up very quickly.",
      incorrectHighlight: "picked up it",
      correctHighlight: "picked it up",
      explanation:
        "When you use a pronoun (it, them, her, him) with a separable phrasal verb, the pronoun MUST go between the verb and particle: 'pick it up', not 'pick up it'. With nouns, both orders work: 'pick up the book' or 'pick the book up'.",
      explanationEs:
        "Cuando usas un pronombre (it, them, her, him) con un phrasal verb separable, el pronombre DEBE ir entre el verbo y la partícula: 'pick it up', no 'pick up it'. Con sustantivos, ambos órdenes funcionan: 'pick up the book' o 'pick the book up'.",
      errorType: "word-order",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "find OUT",
    spanishStress: "FIND out",
    englishStress: "find OUT",
    tip: "In most phrasal verbs, the PARTICLE (out, up, over) gets the main stress, not the verb. Say: find OUT, not FIND out.",
    tipEs:
      "En la mayoría de phrasal verbs, la PARTÍCULA (out, up, over) lleva el acento principal, no el verbo. Di: find OUT, no FIND out.",
  },
  {
    word: "pick UP",
    spanishStress: "PICK up",
    englishStress: "pick UP",
    tip: "The particle UP is stressed because it carries the meaning. Compare: 'Can you PICK UP the phone?' (phrasal verb) vs. 'PICK-up truck' (compound noun — stress on PICK).",
    tipEs:
      "La partícula UP lleva acento porque transmite el significado. Compara: 'Can you pick UP the phone?' (phrasal verb) vs. 'PICK-up truck' (sustantivo compuesto — acento en PICK).",
  },
  {
    word: "figure OUT",
    spanishStress: "FIG-ure out",
    englishStress: "figure OUT",
    tip: "Even though 'figure' has two syllables, the stress falls on OUT. The whole phrase flows as: FIG-ure-OUT.",
    tipEs:
      "Aunque 'figure' tiene dos sílabas, el acento cae en OUT. Toda la frase fluye como: FIG-ure-OUT.",
  },
  {
    word: "turn OUT",
    spanishStress: "TURN out",
    englishStress: "turn OUT",
    tip: "When telling a story: 'It turned OUT to be...' — the stress on OUT signals that you're about to reveal the result.",
    tipEs:
      "Al contar una historia: 'It turned OUT to be...' — el acento en OUT señala que estás a punto de revelar el resultado.",
  },
  {
    word: "come UP with",
    spanishStress: "COME up with",
    englishStress: "come UP with",
    tip: "In three-part phrasal verbs, the middle particle usually gets stress: come UP with, get ALONG with, look FORWARD to.",
    tipEs:
      "En phrasal verbs de tres partes, la partícula del medio generalmente lleva acento: come UP with, get ALONG with, look FORWARD to.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Phrasal verbs
  {
    english: "find out",
    spanish: "descubrir / enterarse",
    type: "phrasal-verb",
  },
  {
    english: "figure out",
    spanish: "resolver / entender",
    type: "phrasal-verb",
  },
  {
    english: "come up with",
    spanish: "idear / inventar",
    type: "phrasal-verb",
  },
  {
    english: "look up",
    spanish: "buscar (información)",
    type: "phrasal-verb",
  },
  { english: "turn out", spanish: "resultar", type: "phrasal-verb" },
  {
    english: "pick up",
    spanish: "recoger / aprender rápidamente",
    type: "phrasal-verb",
  },
  { english: "go over", spanish: "repasar / revisar", type: "phrasal-verb" },
  {
    english: "end up",
    spanish: "terminar (haciendo algo)",
    type: "phrasal-verb",
  },
  // Present perfect expressions
  {
    english: "I have worked",
    spanish: "He trabajado",
    type: "expression",
  },
  {
    english: "She has managed",
    spanish: "Ella ha gestionado",
    type: "expression",
  },
  {
    english: "Have you ever...?",
    spanish: "¿Alguna vez has...?",
    type: "expression",
  },
  {
    english: "We have never had",
    spanish: "Nunca hemos tenido",
    type: "expression",
  },
  // Key grammar words
  { english: "since", spanish: "desde (punto en tiempo)", type: "word" },
  { english: "for", spanish: "por / durante (duración)", type: "word" },
  { english: "ever", spanish: "alguna vez", type: "word" },
  { english: "never", spanish: "nunca", type: "word" },
  { english: "already", spanish: "ya", type: "word" },
  { english: "yet", spanish: "todavía / aún", type: "word" },
  { english: "just", spanish: "recién / acabar de", type: "word" },
  // Useful verbs from the unit
  { english: "to lead", spanish: "liderar", type: "verb" },
  { english: "to manage", spanish: "gestionar", type: "verb" },
  { english: "to discover", spanish: "descubrir", type: "verb" },
  { english: "to review", spanish: "revisar", type: "verb" },
  { english: "to solve", spanish: "resolver", type: "verb" },
];
