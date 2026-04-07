// Unit 2: "At the Office" — Full course content
// Theme: Workplace communication, meetings, status updates
// Grammar: Present perfect continuous
// Pronunciation: Weak forms in function words

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
    baseVerb: "bring",
    baseVerbEs: "traer",
    description:
      "'Bring' combines with particles to talk about introducing topics and people.",
    descriptionEs:
      "'Bring' se combina con partículas para hablar de introducir temas y personas.",
    verbs: [
      {
        verb: "bring up",
        verbEs: "mencionar / sacar a colación",
        particle: "up",
        baseVerb: "bring",
        definition: "To introduce a topic in a conversation or meeting",
        definitionEs: "Introducir un tema en una conversación o junta",
        example: "I'd like to bring up the budget issue before we move on.",
        exampleEs:
          "Me gustaría mencionar el tema del presupuesto antes de continuar.",
        contextNote:
          "Essential meeting verb — use it to redirect discussion politely",
        contextNoteEs:
          "Verbo esencial para juntas — úsalo para redirigir la discusión de forma educada",
      },
    ],
  },
  {
    baseVerb: "follow",
    baseVerbEs: "seguir",
    description:
      "'Follow up' is one of the most overused (and most useful) verbs in business English.",
    descriptionEs:
      "'Follow up' es uno de los verbos más usados (y más útiles) en inglés de negocios.",
    verbs: [
      {
        verb: "follow up",
        verbEs: "dar seguimiento",
        particle: "up",
        baseVerb: "follow",
        definition:
          "To check on the progress of something or contact someone again about a previous matter",
        definitionEs:
          "Verificar el progreso de algo o contactar a alguien de nuevo sobre un asunto previo",
        example: "I'll follow up with the client on Monday about the proposal.",
        exampleEs:
          "Voy a dar seguimiento al cliente el lunes sobre la propuesta.",
        contextNote:
          "You'll see this in 100% of professional emails — 'Just following up on...'",
        contextNoteEs:
          "Lo verás en el 100% de correos profesionales — 'Just following up on...'",
      },
    ],
  },
  {
    baseVerb: "set",
    baseVerbEs: "poner / establecer",
    description: "'Set up' is the universal verb for organizing and arranging.",
    descriptionEs:
      "'Set up' es el verbo universal para organizar y arreglar.",
    verbs: [
      {
        verb: "set up",
        verbEs: "organizar / configurar / agendar",
        particle: "up",
        baseVerb: "set",
        definition:
          "To arrange, organize, or prepare something (a meeting, a system, an account)",
        definitionEs:
          "Arreglar, organizar o preparar algo (una junta, un sistema, una cuenta)",
        example: "Can you set up a meeting with the design team for Thursday?",
        exampleEs:
          "¿Puedes agendar una junta con el equipo de diseño para el jueves?",
        contextNote:
          "Works for meetings, accounts, software, equipment — anything that needs organizing",
        contextNoteEs:
          "Funciona para juntas, cuentas, software, equipos — cualquier cosa que necesite organización",
      },
    ],
  },
  {
    baseVerb: "put",
    baseVerbEs: "poner",
    description:
      "'Put off' means to postpone — a critical word for managing deadlines.",
    descriptionEs:
      "'Put off' significa posponer — una palabra crítica para gestionar plazos.",
    verbs: [
      {
        verb: "put off",
        verbEs: "posponer / aplazar",
        particle: "off",
        baseVerb: "put",
        definition: "To delay or postpone something to a later time",
        definitionEs: "Retrasar o posponer algo para un momento posterior",
        example: "We had to put off the launch until next quarter.",
        exampleEs:
          "Tuvimos que posponer el lanzamiento hasta el próximo trimestre.",
        contextNote:
          "Don't confuse with 'postpone' — 'put off' is more conversational and natural",
        contextNoteEs:
          "No lo confundas con 'postpone' — 'put off' es más conversacional y natural",
      },
    ],
  },
  {
    baseVerb: "carry",
    baseVerbEs: "llevar / cargar",
    description:
      "'Carry out' is the formal way to say 'do' or 'execute' in professional contexts.",
    descriptionEs:
      "'Carry out' es la forma formal de decir 'hacer' o 'ejecutar' en contextos profesionales.",
    verbs: [
      {
        verb: "carry out",
        verbEs: "llevar a cabo / ejecutar",
        particle: "out",
        baseVerb: "carry",
        definition: "To perform or complete a task, plan, or experiment",
        definitionEs: "Realizar o completar una tarea, plan o experimento",
        example: "The team carried out the security audit last week.",
        exampleEs: "El equipo llevó a cabo la auditoría de seguridad la semana pasada.",
        contextNote:
          "Common in formal reports: 'carry out research', 'carry out an investigation'",
        contextNoteEs:
          "Común en reportes formales: 'carry out research', 'carry out an investigation'",
      },
    ],
  },
  {
    baseVerb: "take",
    baseVerbEs: "tomar",
    description:
      "'Take over' describes assuming responsibility — a power move in any office.",
    descriptionEs:
      "'Take over' describe asumir responsabilidad — un movimiento de poder en cualquier oficina.",
    verbs: [
      {
        verb: "take over",
        verbEs: "hacerse cargo / asumir",
        particle: "over",
        baseVerb: "take",
        definition:
          "To assume control or responsibility for something (a project, a role, a company)",
        definitionEs:
          "Asumir el control o responsabilidad de algo (un proyecto, un puesto, una empresa)",
        example: "Sarah will take over the project while John is on leave.",
        exampleEs:
          "Sarah se hará cargo del proyecto mientras John está de licencia.",
        contextNote:
          "Also used for company acquisitions: 'Google took over YouTube in 2006'",
        contextNoteEs:
          "También se usa para adquisiciones de empresas: 'Google se quedó con YouTube en 2006'",
      },
    ],
  },
  {
    baseVerb: "hand",
    baseVerbEs: "mano / entregar",
    description:
      "'Hand in' is the verb for submitting work — homework, reports, resignations.",
    descriptionEs:
      "'Hand in' es el verbo para entregar trabajo — tareas, reportes, renuncias.",
    verbs: [
      {
        verb: "hand in",
        verbEs: "entregar",
        particle: "in",
        baseVerb: "hand",
        definition:
          "To submit or deliver something to a person in authority",
        definitionEs: "Entregar o presentar algo a una persona con autoridad",
        example: "Please hand in your reports by Friday afternoon.",
        exampleEs: "Por favor entreguen sus reportes antes del viernes en la tarde.",
        contextNote:
          "Used for physical or digital submission. 'Hand in your notice' = to resign",
        contextNoteEs:
          "Se usa para entrega física o digital. 'Hand in your notice' = renunciar",
      },
    ],
  },
  {
    baseVerb: "come",
    baseVerbEs: "venir",
    description:
      "'Come across' means to encounter something unexpectedly — perfect for sharing discoveries.",
    descriptionEs:
      "'Come across' significa encontrar algo inesperadamente — perfecto para compartir descubrimientos.",
    verbs: [
      {
        verb: "come across",
        verbEs: "encontrarse con / toparse con",
        particle: "across",
        baseVerb: "come",
        definition:
          "To find or meet something/someone by chance, without looking for it",
        definitionEs:
          "Encontrar o conocer algo/a alguien por casualidad, sin buscarlo",
        example: "I came across an interesting article about our competitor.",
        exampleEs:
          "Me topé con un artículo interesante sobre nuestro competidor.",
        contextNote:
          "Also means 'to seem/appear': 'She comes across as confident'",
        contextNoteEs:
          "También significa 'parecer': 'She comes across as confident' (parece segura)",
      },
    ],
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "The Monday Status Meeting",
    titleEs: "La Junta de Estado del Lunes",
    setting: "A weekly team meeting in a conference room",
    settingEs: "Una junta semanal de equipo en una sala de conferencias",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Diana (Manager)",
        speakerLabelEs: "Diana (Gerente)",
        english:
          "Good morning, everyone. Let's get started. Carlos, can you bring us up to speed on the client project?",
        spanish:
          "Buenos días a todos. Empecemos. Carlos, ¿puedes ponernos al día sobre el proyecto del cliente?",
        highlight: "bring us up to speed",
      },
      {
        speaker: "B",
        speakerLabel: "Carlos",
        speakerLabelEs: "Carlos",
        english:
          "Sure. We've been working on the prototype for two weeks now. I've been following up with the client every Friday.",
        spanish:
          "Claro. Hemos estado trabajando en el prototipo durante dos semanas. He estado dando seguimiento con el cliente cada viernes.",
        highlight: "been following up",
      },
      {
        speaker: "A",
        speakerLabel: "Diana (Manager)",
        speakerLabelEs: "Diana (Gerente)",
        english:
          "Great. And the testing phase? We need to carry that out before the demo.",
        spanish:
          "Excelente. ¿Y la fase de pruebas? Necesitamos llevarla a cabo antes de la demostración.",
        highlight: "carry that out",
      },
      {
        speaker: "B",
        speakerLabel: "Carlos",
        speakerLabelEs: "Carlos",
        english:
          "I've set up a testing environment, but we had to put off the security review until next week.",
        spanish:
          "He configurado un entorno de pruebas, pero tuvimos que posponer la revisión de seguridad hasta la próxima semana.",
        highlight: "set up / put off",
      },
      {
        speaker: "A",
        speakerLabel: "Diana (Manager)",
        speakerLabelEs: "Diana (Gerente)",
        english:
          "Understood. By the way, I came across a tool that could help us automate this. I'll send you the link.",
        spanish:
          "Entendido. Por cierto, me topé con una herramienta que podría ayudarnos a automatizar esto. Te enviaré el enlace.",
        highlight: "came across",
      },
      {
        speaker: "B",
        speakerLabel: "Carlos",
        speakerLabelEs: "Carlos",
        english:
          "Perfect. One more thing — Maria has been asking to take over the documentation. Is that okay?",
        spanish:
          "Perfecto. Una cosa más — Maria ha estado pidiendo hacerse cargo de la documentación. ¿Está bien?",
        highlight: "take over",
      },
      {
        speaker: "A",
        speakerLabel: "Diana (Manager)",
        speakerLabelEs: "Diana (Gerente)",
        english:
          "Absolutely. Just make sure she hands in the first draft by next Wednesday.",
        spanish:
          "Por supuesto. Solo asegúrate de que entregue el primer borrador antes del próximo miércoles.",
        highlight: "hands in",
      },
    ],
    keyPhrases: [
      {
        english: "Can you bring us up to speed on...?",
        spanish: "¿Puedes ponernos al día sobre...?",
        note: "Standard meeting opener for asking for a status update",
        noteEs: "Frase estándar de junta para pedir una actualización de estado",
      },
      {
        english: "I've been working on...",
        spanish: "He estado trabajando en...",
        note: "Present perfect continuous — the tense for describing ongoing work",
        noteEs:
          "Presente perfecto continuo — el tiempo para describir trabajo en curso",
      },
      {
        english: "Just following up on...",
        spanish: "Solo dando seguimiento sobre...",
        note: "The most common opening line in business emails",
        noteEs: "La frase de apertura más común en correos de negocios",
      },
    ],
  },
];

// ─── Section C: Structure Builder (Present Perfect Continuous) ───────────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "Present Perfect Continuous: Form",
    labelEs: "Presente Perfecto Continuo: Forma",
    description:
      "Structure: have/has + been + verb-ing. Use it for actions that started in the past and are still happening (or just stopped).",
    descriptionEs:
      "Estructura: have/has + been + verbo-ing. Úsalo para acciones que empezaron en el pasado y siguen sucediendo (o que acaban de terminar).",
    sentences: [
      {
        english: "I have been working here since 2022.",
        spanish: "He estado trabajando aquí desde 2022.",
        highlight: "have been working",
      },
      {
        english: "She has been managing the team for six months.",
        spanish: "Ella ha estado gestionando al equipo durante seis meses.",
        highlight: "has been managing",
      },
      {
        english: "We have been waiting for your reply all week.",
        spanish: "Hemos estado esperando tu respuesta toda la semana.",
        highlight: "have been waiting",
      },
      {
        english: "Have you been following up with the new clients?",
        spanish: "¿Has estado dando seguimiento a los nuevos clientes?",
        highlight: "Have you been following up",
      },
    ],
  },
  {
    label: "Continuous vs. Simple — The Difference",
    labelEs: "Continuo vs. Simple — La Diferencia",
    description:
      "Present perfect simple focuses on the result. Present perfect continuous focuses on the activity/duration itself.",
    descriptionEs:
      "El presente perfecto simple se enfoca en el resultado. El presente perfecto continuo se enfoca en la actividad/duración.",
    sentences: [
      {
        english: "I have written three reports. (Result: 3 reports done)",
        spanish: "He escrito tres reportes. (Resultado: 3 reportes hechos)",
        highlight: "have written",
      },
      {
        english: "I have been writing reports all morning. (Activity: ongoing)",
        spanish: "He estado escribiendo reportes toda la mañana. (Actividad: en curso)",
        highlight: "have been writing",
      },
      {
        english: "She has read 10 emails. (Result: 10 emails)",
        spanish: "Ella ha leído 10 correos. (Resultado: 10 correos)",
        highlight: "has read",
      },
      {
        english: "She has been reading emails since 9 AM. (Duration matters)",
        spanish: "Ella ha estado leyendo correos desde las 9 AM. (La duración importa)",
        highlight: "has been reading",
      },
    ],
  },
  {
    label: "With 'For' and 'Since'",
    labelEs: "Con 'For' y 'Since'",
    description:
      "Use 'for' with a duration (for 2 hours) and 'since' with a starting point (since Monday). Both work with present perfect continuous.",
    descriptionEs:
      "Usa 'for' con una duración (for 2 hours) y 'since' con un punto de inicio (since Monday). Ambos funcionan con el presente perfecto continuo.",
    sentences: [
      {
        english: "He has been waiting for two hours.",
        spanish: "Él ha estado esperando durante dos horas.",
        highlight: "for two hours",
      },
      {
        english: "He has been waiting since 10 AM.",
        spanish: "Él ha estado esperando desde las 10 AM.",
        highlight: "since 10 AM",
      },
      {
        english: "We have been collaborating since the project started.",
        spanish: "Hemos estado colaborando desde que empezó el proyecto.",
        highlight: "since the project started",
      },
      {
        english: "They have been negotiating for weeks.",
        spanish: "Ellos han estado negociando durante semanas.",
        highlight: "for weeks",
      },
    ],
  },
  {
    label: "Office Phrasal Verbs in Present Perfect Continuous",
    labelEs: "Phrasal Verbs de Oficina en Presente Perfecto Continuo",
    description:
      "Combine the new tense with the unit's phrasal verbs — this is exactly how managers and colleagues talk in real meetings.",
    descriptionEs:
      "Combina el nuevo tiempo con los phrasal verbs de la unidad — así es exactamente como hablan los gerentes y colegas en juntas reales.",
    sentences: [
      {
        english: "I've been following up with the client every day.",
        spanish: "He estado dando seguimiento al cliente todos los días.",
        highlight: "been following up",
      },
      {
        english: "We've been setting up the new system since last month.",
        spanish: "Hemos estado configurando el nuevo sistema desde el mes pasado.",
        highlight: "been setting up",
      },
      {
        english: "She's been carrying out user research for the past week.",
        spanish: "Ella ha estado llevando a cabo investigación de usuarios la semana pasada.",
        highlight: "been carrying out",
      },
      {
        english: "They've been putting off the decision for too long.",
        spanish: "Ellos han estado posponiendo la decisión por demasiado tiempo.",
        highlight: "been putting off",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes in Office English",
  titleEs: "Errores Comunes en Inglés de Oficina",
  description:
    "These are the exact errors Spanish speakers make in workplace English. Spot them before they sneak into your next email.",
  descriptionEs:
    "Estos son los errores exactos que cometen los hispanohablantes en inglés de oficina. Detéctalos antes de que se cuelen en tu próximo correo.",
  items: [
    {
      incorrect: "I am working here since two years.",
      correct: "I have been working here for two years.",
      incorrectHighlight: "am working since two years",
      correctHighlight: "have been working for two years",
      explanation:
        "Spanish uses present tense for ongoing situations ('Trabajo aquí desde hace 2 años'). English requires the present perfect continuous for actions started in the past that continue now. Also: 'for' + duration, not 'since'.",
      explanationEs:
        "El español usa el presente para situaciones en curso ('Trabajo aquí desde hace 2 años'). El inglés requiere el presente perfecto continuo para acciones que empezaron en el pasado y continúan. Además: 'for' + duración, no 'since'.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "Can you set up a meeting in Thursday?",
      correct: "Can you set up a meeting on Thursday?",
      incorrectHighlight: "in Thursday",
      correctHighlight: "on Thursday",
      explanation:
        "Days of the week always take 'on' in English: on Monday, on Tuesday, on the weekend. Spanish uses 'en' for everything, but English distinguishes: 'in' for months/years, 'on' for days, 'at' for times.",
      explanationEs:
        "Los días de la semana siempre llevan 'on' en inglés: on Monday, on Tuesday, on the weekend. El español usa 'en' para todo, pero el inglés distingue: 'in' para meses/años, 'on' para días, 'at' para horas.",
      errorType: "preposition",
    },
    {
      incorrect: "I will follow up you next week.",
      correct: "I will follow up with you next week.",
      incorrectHighlight: "follow up you",
      correctHighlight: "follow up with you",
      explanation:
        "'Follow up' needs 'with' before a person: 'follow up with the client', 'follow up with the team'. Without 'with', the sentence sounds unnatural and incomplete.",
      explanationEs:
        "'Follow up' necesita 'with' antes de una persona: 'follow up with the client', 'follow up with the team'. Sin 'with', la oración suena antinatural e incompleta.",
      errorType: "phrasal-verb",
    },
    {
      incorrect: "She has been work on the project all morning.",
      correct: "She has been working on the project all morning.",
      incorrectHighlight: "has been work",
      correctHighlight: "has been working",
      explanation:
        "Present perfect continuous always uses verb + ing after 'been'. The structure is: have/has + been + verb-ing. Forgetting the -ing is one of the most common errors at the B1 level.",
      explanationEs:
        "El presente perfecto continuo siempre usa verbo + ing después de 'been'. La estructura es: have/has + been + verbo-ing. Olvidar el -ing es uno de los errores más comunes en nivel B1.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "We need to put off it until next week.",
      correct: "We need to put it off until next week.",
      incorrectHighlight: "put off it",
      correctHighlight: "put it off",
      explanation:
        "With separable phrasal verbs, pronouns (it, them, him, her) MUST go between the verb and the particle. 'Put it off', 'set it up', 'bring it up', 'hand it in'. Never place the pronoun after the particle.",
      explanationEs:
        "Con phrasal verbs separables, los pronombres (it, them, him, her) DEBEN ir entre el verbo y la partícula. 'Put it off', 'set it up', 'bring it up', 'hand it in'. Nunca pongas el pronombre después de la partícula.",
      errorType: "word-order",
    },
    {
      incorrect: "I have been knowing her for five years.",
      correct: "I have known her for five years.",
      incorrectHighlight: "have been knowing",
      correctHighlight: "have known",
      explanation:
        "Stative verbs (know, believe, love, understand, like, want, need) don't normally use the continuous form, even with present perfect. Use present perfect simple instead: 'I have known her', not 'I have been knowing her'.",
      explanationEs:
        "Los verbos estativos (know, believe, love, understand, like, want, need) normalmente no usan la forma continua, ni siquiera con presente perfecto. Usa el presente perfecto simple: 'I have known her', no 'I have been knowing her'.",
      errorType: "tense-confusion",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "have been",
    spanishStress: "HAVE BEEN",
    englishStress: "həv bin (weak)",
    tip: "In present perfect continuous, 'have been' is almost always reduced to /həv bin/ — both words are unstressed. 'I've been working' sounds like 'aiv-bin-WORK-ing'.",
    tipEs:
      "En presente perfecto continuo, 'have been' casi siempre se reduce a /həv bin/ — ambas palabras sin acento. 'I've been working' suena como 'aiv-bin-WORK-ing'.",
  },
  {
    word: "has he",
    spanishStress: "HAS HE",
    englishStress: "həzi (linked)",
    tip: "In questions, 'has he' links together and the H in 'he' often disappears: 'həzi been working?' Native speakers don't separate these words.",
    tipEs:
      "En preguntas, 'has he' se enlaza y la H de 'he' frecuentemente desaparece: 'həzi been working?' Los nativos no separan estas palabras.",
  },
  {
    word: "for",
    spanishStress: "FOR",
    englishStress: "fər (weak)",
    tip: "In phrases like 'for two years', 'for' is reduced to /fər/. It almost disappears: 'I've been here fər-two-YEARS'. Stressing 'for' sounds robotic.",
    tipEs:
      "En frases como 'for two years', 'for' se reduce a /fər/. Casi desaparece: 'I've been here fər-two-YEARS'. Acentuar 'for' suena robótico.",
  },
  {
    word: "to",
    spanishStress: "TO",
    englishStress: "tə (weak)",
    tip: "In 'I need to follow up', 'to' becomes /tə/ — almost a schwa. It sounds like 'I need-tə-follow-UP'. The infinitive 'to' is rarely stressed.",
    tipEs:
      "En 'I need to follow up', 'to' se vuelve /tə/ — casi una schwa. Suena como 'I need-tə-follow-UP'. El 'to' del infinitivo casi nunca lleva acento.",
  },
  {
    word: "and",
    spanishStress: "AND",
    englishStress: "ən (weak)",
    tip: "Between words, 'and' is reduced to /ən/ or just /n/. 'Bring up and follow up' sounds like 'bring-UP-ən-follow-UP'. Don't say 'AND' as a full word.",
    tipEs:
      "Entre palabras, 'and' se reduce a /ən/ o solo /n/. 'Bring up and follow up' suena como 'bring-UP-ən-follow-UP'. No digas 'AND' como palabra completa.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Phrasal verbs
  { english: "bring up", spanish: "mencionar / sacar a colación", type: "phrasal-verb" },
  { english: "follow up", spanish: "dar seguimiento", type: "phrasal-verb" },
  { english: "set up", spanish: "organizar / configurar", type: "phrasal-verb" },
  { english: "put off", spanish: "posponer / aplazar", type: "phrasal-verb" },
  { english: "carry out", spanish: "llevar a cabo / ejecutar", type: "phrasal-verb" },
  { english: "take over", spanish: "hacerse cargo / asumir", type: "phrasal-verb" },
  { english: "hand in", spanish: "entregar", type: "phrasal-verb" },
  { english: "come across", spanish: "encontrarse con / toparse con", type: "phrasal-verb" },
  // Present perfect continuous expressions
  { english: "I have been working", spanish: "He estado trabajando", type: "expression" },
  { english: "She has been managing", spanish: "Ella ha estado gestionando", type: "expression" },
  { english: "We have been waiting", spanish: "Hemos estado esperando", type: "expression" },
  { english: "How long have you been...?", spanish: "¿Cuánto tiempo has estado...?", type: "expression" },
  { english: "Just following up on...", spanish: "Solo dando seguimiento sobre...", type: "expression" },
  { english: "bring us up to speed", spanish: "ponernos al día", type: "expression" },
  // Office vocabulary
  { english: "meeting", spanish: "junta / reunión", type: "noun" },
  { english: "deadline", spanish: "fecha límite", type: "noun" },
  { english: "report", spanish: "reporte / informe", type: "noun" },
  { english: "client", spanish: "cliente", type: "noun" },
  { english: "colleague", spanish: "colega / compañero de trabajo", type: "noun" },
  { english: "feedback", spanish: "retroalimentación", type: "noun" },
  { english: "agenda", spanish: "agenda / orden del día", type: "noun" },
  // Useful office verbs
  { english: "to schedule", spanish: "agendar / programar", type: "verb" },
  { english: "to delegate", spanish: "delegar", type: "verb" },
  { english: "to approve", spanish: "aprobar", type: "verb" },
  { english: "to submit", spanish: "presentar / entregar", type: "verb" },
];
