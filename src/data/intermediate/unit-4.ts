// Unit 4: "Making Plans" — Full course content
// Theme: Social plans, invitations, suggestions
// Grammar: Modals (would, could) + second conditional
// Pronunciation: Would/could/should reductions
// Section A pivot: PoliteFramesBuilder (replaces PhrasalVerbExplorer)

import type {
  Dialogue,
  ErrorCorrectionSet,
  IntermediateVocabItem,
} from "./types";
import type { PoliteFrame } from "../../components/course/PoliteFramesBuilder";
import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

// ─── Section A: Polite Frames Builder ────────────────────────────────────────

export const politeFrames: PoliteFrame[] = [
  {
    situation: "Inviting someone for coffee",
    situationEs: "Invitar a alguien por un café",
    casual: "Do you want to get coffee?",
    casualEs: "¿Quieres tomar un café?",
    polite: "Would you like to grab a coffee sometime?",
    politeEs: "¿Te gustaría tomar un café algún día?",
    modal: "would",
    why: "'Would you like' is the polite, indirect form. It softens the invitation and gives the other person space to decline. Adding 'sometime' makes it open-ended and low-pressure.",
    whyEs: "'Would you like' es la forma cortés e indirecta. Suaviza la invitación y le da espacio a la otra persona para rechazar. Agregar 'sometime' lo hace abierto y sin presión.",
  },
  {
    situation: "Suggesting an activity",
    situationEs: "Sugerir una actividad",
    casual: "Let's go to the museum on Saturday.",
    casualEs: "Vamos al museo el sábado.",
    polite: "We could go to the museum on Saturday, if you're free.",
    politeEs: "Podríamos ir al museo el sábado, si estás libre.",
    modal: "could",
    why: "'We could' is a soft suggestion — it presents the idea without forcing it. 'Let's' is a command. 'If you're free' acknowledges the other person has their own schedule.",
    whyEs: "'We could' es una sugerencia suave — presenta la idea sin forzarla. 'Let's' es una orden. 'If you're free' reconoce que la otra persona tiene su propia agenda.",
  },
  {
    situation: "Asking a small favor",
    situationEs: "Pedir un pequeño favor",
    casual: "Can you help me move on Sunday?",
    casualEs: "¿Me puedes ayudar a mudarme el domingo?",
    polite: "Would you mind helping me move on Sunday?",
    politeEs: "¿Te importaría ayudarme a mudarme el domingo?",
    modal: "would",
    why: "'Would you mind' is the gold standard for polite requests. It literally asks 'is this an inconvenience?', which acknowledges the favor's cost. Note: the answer 'No, I don't mind' actually means YES.",
    whyEs: "'Would you mind' es el estándar de oro para peticiones corteses. Literalmente pregunta '¿es esto una molestia?', lo que reconoce el costo del favor. Nota: la respuesta 'No, I don't mind' en realidad significa SÍ.",
  },
  {
    situation: "Making a hypothetical plan",
    situationEs: "Hacer un plan hipotético",
    casual: "If I have time tomorrow, I'll come.",
    casualEs: "Si tengo tiempo mañana, voy.",
    polite: "If I had more time, I would love to come along.",
    politeEs: "Si tuviera más tiempo, me encantaría acompañarlos.",
    modal: "would",
    why: "This is the second conditional in action. The shift from 'have/will' to 'had/would' moves the sentence from real possibility to polite hypothetical — useful when you want to express interest without committing.",
    whyEs: "Este es el segundo condicional en acción. El cambio de 'have/will' a 'had/would' lleva la oración de una posibilidad real a un hipotético cortés — útil cuando quieres expresar interés sin comprometerte.",
  },
  {
    situation: "Politely declining",
    situationEs: "Rechazar cortésmente",
    casual: "I can't go. I'm busy.",
    casualEs: "No puedo ir. Estoy ocupado.",
    polite: "I'd love to, but I'm afraid I won't be able to make it.",
    politeEs: "Me encantaría, pero me temo que no podré asistir.",
    modal: "would",
    why: "Native speakers almost never say 'I can't' to decline an invitation — it sounds blunt. The formula is: express interest ('I'd love to') + soften the no ('I'm afraid') + give a vague reason. This preserves the relationship.",
    whyEs: "Los hablantes nativos casi nunca dicen 'I can't' para rechazar una invitación — suena cortante. La fórmula es: expresa interés ('I'd love to') + suaviza el no ('I'm afraid') + da una razón vaga. Esto preserva la relación.",
  },
  {
    situation: "Suggesting a change of plans",
    situationEs: "Sugerir un cambio de planes",
    casual: "Let's not go on Saturday. Let's go on Sunday.",
    casualEs: "No vayamos el sábado. Vayamos el domingo.",
    polite: "Would it be possible to push it to Sunday instead?",
    politeEs: "¿Sería posible cambiarlo al domingo?",
    modal: "would",
    why: "'Would it be possible' is the most diplomatic way to request a change. It presents the change as a question of feasibility rather than a demand. 'Push it to' is natural conversational English for rescheduling.",
    whyEs: "'Would it be possible' es la forma más diplomática de pedir un cambio. Presenta el cambio como una pregunta de viabilidad en lugar de una demanda. 'Push it to' es inglés conversacional natural para reagendar.",
  },
  {
    situation: "Offering to help",
    situationEs: "Ofrecer ayuda",
    casual: "I'll help you carry that.",
    casualEs: "Te ayudo a cargar eso.",
    polite: "Would you like me to give you a hand with that?",
    politeEs: "¿Te gustaría que te diera una mano con eso?",
    modal: "would",
    why: "'Would you like me to' is the polite offer formula. It checks if the person wants help before assuming. 'Give you a hand' is a warm, idiomatic phrase that softens the offer further.",
    whyEs: "'Would you like me to' es la fórmula cortés de ofrecimiento. Verifica si la persona quiere ayuda antes de asumir. 'Give you a hand' es una frase cálida e idiomática que suaviza aún más el ofrecimiento.",
  },
  {
    situation: "Making a recommendation",
    situationEs: "Hacer una recomendación",
    casual: "Try the seafood. It's good.",
    casualEs: "Prueba los mariscos. Están buenos.",
    polite: "If you like seafood, you might want to try the salmon — I've heard it's excellent.",
    politeEs: "Si te gustan los mariscos, podrías probar el salmón — he escuchado que es excelente.",
    modal: "might",
    why: "'You might want to' is the softest possible recommendation — it presents the idea as a thought, not advice. 'I've heard' lets you recommend without taking responsibility for the claim. Both make you sound thoughtful, not pushy.",
    whyEs: "'You might want to' es la recomendación más suave posible — presenta la idea como un pensamiento, no como un consejo. 'I've heard' te permite recomendar sin tomar responsabilidad por la afirmación. Ambos te hacen sonar reflexivo, no insistente.",
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "An Invitation to Dinner",
    titleEs: "Una Invitación a Cenar",
    setting: "A casual conversation between two coworkers in the office break room",
    settingEs: "Una conversación casual entre dos compañeros en la sala de descanso",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Elena",
        speakerLabelEs: "Elena",
        english:
          "Hey Mark — a few of us are getting together for dinner on Friday. Would you like to come along?",
        spanish:
          "Hola Mark — algunos vamos a cenar el viernes. ¿Te gustaría acompañarnos?",
        highlight: "Would you like to come along?",
      },
      {
        speaker: "B",
        speakerLabel: "Mark",
        speakerLabelEs: "Mark",
        english:
          "Oh, that sounds lovely! I'd really like to. Where were you thinking of going?",
        spanish:
          "Oh, ¡suena encantador! Me gustaría mucho. ¿Dónde estaban pensando ir?",
        highlight: "I'd really like to",
      },
      {
        speaker: "A",
        speakerLabel: "Elena",
        speakerLabelEs: "Elena",
        english:
          "We were thinking the new Italian place on 5th Street. If you wanted, you could meet us there at 7.",
        spanish:
          "Estábamos pensando en el nuevo lugar italiano en la calle 5. Si quisieras, podrías encontrarnos ahí a las 7.",
        highlight: "If you wanted, you could",
      },
      {
        speaker: "B",
        speakerLabel: "Mark",
        speakerLabelEs: "Mark",
        english:
          "That would be perfect. Would you mind if I brought my partner along?",
        spanish:
          "Eso sería perfecto. ¿Te importaría si llevo a mi pareja?",
        highlight: "Would you mind if",
      },
      {
        speaker: "A",
        speakerLabel: "Elena",
        speakerLabelEs: "Elena",
        english:
          "Not at all — we'd love to meet them! I should mention, though, the place can get crowded. We might want to make a reservation.",
        spanish:
          "Para nada — ¡nos encantaría conocerlos! Debo mencionar, sin embargo, que el lugar puede llenarse. Podríamos querer hacer una reservación.",
        highlight: "we'd love / we might want to",
      },
      {
        speaker: "B",
        speakerLabel: "Mark",
        speakerLabelEs: "Mark",
        english:
          "Good thinking. Would you like me to call and book it? I could do it on my lunch break.",
        spanish:
          "Buena idea. ¿Te gustaría que llamara y la hiciera? Podría hacerlo en mi hora de comida.",
        highlight: "Would you like me to / I could",
      },
      {
        speaker: "A",
        speakerLabel: "Elena",
        speakerLabelEs: "Elena",
        english:
          "That would be amazing. Thank you, Mark — I really appreciate it.",
        spanish:
          "Eso sería increíble. Gracias, Mark — de verdad lo aprecio.",
        highlight: "That would be amazing",
      },
    ],
    keyPhrases: [
      {
        english: "Would you like to come along?",
        spanish: "¿Te gustaría acompañarnos?",
        note: "The standard polite invitation. Always sounds warm, never pushy.",
        noteEs: "La invitación cortés estándar. Siempre suena cálida, nunca insistente.",
      },
      {
        english: "I'd really like to.",
        spanish: "Me gustaría mucho.",
        note: "Enthusiastic acceptance using the contracted 'would'. Warmer than 'yes'.",
        noteEs: "Aceptación entusiasta usando 'would' contraído. Más cálido que 'yes'.",
      },
      {
        english: "Would you mind if I...?",
        spanish: "¿Te importaría si...?",
        note: "The most polite way to ask permission. Use it for any small request.",
        noteEs: "La forma más cortés de pedir permiso. Úsalo para cualquier pequeña petición.",
      },
      {
        english: "Would you like me to...?",
        spanish: "¿Te gustaría que yo...?",
        note: "The polite way to offer help. Always lets the other person say no gracefully.",
        noteEs: "La forma cortés de ofrecer ayuda. Siempre permite que la otra persona diga no con elegancia.",
      },
    ],
  },
];

// ─── Section C: Structure Builder ────────────────────────────────────────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "Modal 'would' for politeness",
    labelEs: "Modal 'would' para la cortesía",
    description:
      "'Would' is the single most powerful word for sounding polite and professional in English. It softens almost any sentence.",
    descriptionEs:
      "'Would' es la palabra más poderosa para sonar cortés y profesional en inglés. Suaviza casi cualquier oración.",
    sentences: [
      {
        english: "Would you like a glass of water?",
        spanish: "¿Te gustaría un vaso de agua?",
        highlight: "Would you like",
      },
      {
        english: "I would prefer to leave early, if possible.",
        spanish: "Preferiría irme temprano, si es posible.",
        highlight: "I would prefer",
      },
      {
        english: "We would appreciate your help with this.",
        spanish: "Apreciaríamos tu ayuda con esto.",
        highlight: "We would appreciate",
      },
      {
        english: "It would be wonderful to see you again.",
        spanish: "Sería maravilloso verte de nuevo.",
        highlight: "It would be",
      },
    ],
  },
  {
    label: "Modal 'could' for soft suggestions",
    labelEs: "Modal 'could' para sugerencias suaves",
    description:
      "'Could' presents an option without forcing it. Native speakers use it constantly to make suggestions sound like ideas, not commands.",
    descriptionEs:
      "'Could' presenta una opción sin forzarla. Los nativos lo usan constantemente para que las sugerencias suenen como ideas, no como órdenes.",
    sentences: [
      {
        english: "We could try the new restaurant on Main Street.",
        spanish: "Podríamos probar el restaurante nuevo en Main Street.",
        highlight: "We could try",
      },
      {
        english: "You could call ahead to see if they're open.",
        spanish: "Podrías llamar antes para ver si están abiertos.",
        highlight: "You could call",
      },
      {
        english: "I could pick you up on the way, if that helps.",
        spanish: "Podría recogerte en el camino, si eso ayuda.",
        highlight: "I could pick",
      },
      {
        english: "Couldn't we just postpone it until next week?",
        spanish: "¿No podríamos simplemente posponerlo hasta la próxima semana?",
        highlight: "Couldn't we",
      },
    ],
  },
  {
    label: "Second conditional: hypothetical plans",
    labelEs: "Segundo condicional: planes hipotéticos",
    description:
      "Structure: If + past simple, would + base verb. Use it for unreal, hypothetical, or polite situations — not real future plans.",
    descriptionEs:
      "Estructura: If + pasado simple, would + verbo base. Úsalo para situaciones irreales, hipotéticas o corteses — no para planes futuros reales.",
    sentences: [
      {
        english: "If I had more time, I would travel more.",
        spanish: "Si tuviera más tiempo, viajaría más.",
        highlight: "If I had... I would",
      },
      {
        english: "If she were here, she would know what to do.",
        spanish: "Si ella estuviera aquí, sabría qué hacer.",
        highlight: "If she were... she would",
      },
      {
        english: "What would you do if you won the lottery?",
        spanish: "¿Qué harías si ganaras la lotería?",
        highlight: "What would you do",
      },
      {
        english: "If I were you, I would accept the offer.",
        spanish: "Si yo fuera tú, aceptaría la oferta.",
        highlight: "If I were you, I would",
      },
    ],
  },
  {
    label: "First vs. Second Conditional — The Difference",
    labelEs: "Primer vs. Segundo Condicional — La Diferencia",
    description:
      "First conditional = real future possibility. Second conditional = unreal, hypothetical, or polite. Same situation, very different feeling.",
    descriptionEs:
      "Primer condicional = posibilidad real en el futuro. Segundo condicional = irreal, hipotético o cortés. Misma situación, sensación muy diferente.",
    sentences: [
      {
        english: "If it rains, we'll stay home. (Real possibility)",
        spanish: "Si llueve, nos quedaremos en casa. (Posibilidad real)",
        highlight: "If it rains... we'll",
      },
      {
        english: "If it rained, we would stay home. (Hypothetical)",
        spanish: "Si lloviera, nos quedaríamos en casa. (Hipotético)",
        highlight: "If it rained... we would",
      },
      {
        english: "If you have time, will you call me? (Direct request)",
        spanish: "Si tienes tiempo, ¿me llamarás? (Petición directa)",
        highlight: "If you have... will you",
      },
      {
        english: "If you had time, would you call me? (Polite request)",
        spanish: "Si tuvieras tiempo, ¿me llamarías? (Petición cortés)",
        highlight: "If you had... would you",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes with Modals & Conditionals",
  titleEs: "Errores Comunes con Modales y Condicionales",
  description:
    "These are the exact errors that make B1 Spanish speakers sound less polished than they are. Catch them, fix them.",
  descriptionEs:
    "Estos son los errores exactos que hacen que los hispanohablantes B1 suenen menos pulidos de lo que son. Detéctalos, corrígelos.",
  items: [
    {
      incorrect: "Do you want come to dinner with us?",
      correct: "Would you like to come to dinner with us?",
      incorrectHighlight: "Do you want come",
      correctHighlight: "Would you like to come",
      explanation:
        "Two issues: 'Do you want' is too direct for an invitation — it sounds demanding. The polite form is 'Would you like'. Also, 'want' needs 'to' before another verb: 'want TO come'. Native speakers use 'Would you like to' for almost all invitations.",
      explanationEs:
        "Dos problemas: 'Do you want' es demasiado directo para una invitación — suena demandante. La forma cortés es 'Would you like'. Además, 'want' necesita 'to' antes de otro verbo: 'want TO come'. Los nativos usan 'Would you like to' para casi todas las invitaciones.",
      errorType: "literal-translation",
    },
    {
      incorrect: "If I would have time, I would call you.",
      correct: "If I had time, I would call you.",
      incorrectHighlight: "If I would have",
      correctHighlight: "If I had",
      explanation:
        "In the second conditional, NEVER use 'would' in the 'if' clause. Use the past simple: 'If I had time'. This is one of the most stubborn mistakes Spanish speakers make because Spanish 'tendría' tempts them to translate it as 'would have'. Don't.",
      explanationEs:
        "En el segundo condicional, NUNCA uses 'would' en la cláusula 'if'. Usa el pasado simple: 'If I had time'. Este es uno de los errores más persistentes de los hispanohablantes porque 'tendría' los tienta a traducirlo como 'would have'. No lo hagas.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "I would to like a coffee, please.",
      correct: "I would like a coffee, please.",
      incorrectHighlight: "would to like",
      correctHighlight: "would like",
      explanation:
        "After modal verbs (would, could, should, must, might, may), use the BASE form of the next verb — never 'to + verb'. Say 'would like', 'could go', 'should call'. Spanish speakers add 'to' because 'me gustaría' translates roughly as 'it would please me to', but English doesn't need it.",
      explanationEs:
        "Después de verbos modales (would, could, should, must, might, may), usa la forma BASE del siguiente verbo — nunca 'to + verbo'. Di 'would like', 'could go', 'should call'. Los hispanohablantes agregan 'to' porque 'me gustaría' se traduce aproximadamente como 'it would please me to', pero el inglés no lo necesita.",
      errorType: "literal-translation",
    },
    {
      incorrect: "If I was you, I would take the job.",
      correct: "If I were you, I would take the job.",
      incorrectHighlight: "If I was you",
      correctHighlight: "If I were you",
      explanation:
        "In second conditional sentences, the verb 'be' uses 'were' for ALL persons — not 'was'. 'If I were you', 'If she were here', 'If it were possible'. This is the subjunctive form. 'Was' is technically heard in casual speech, but 'were' is the educated, B2+ choice.",
      explanationEs:
        "En oraciones del segundo condicional, el verbo 'be' usa 'were' para TODAS las personas — no 'was'. 'If I were you', 'If she were here', 'If it were possible'. Esta es la forma subjuntiva. 'Was' se escucha técnicamente en el habla casual, pero 'were' es la opción educada B2+.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "Can you to help me with this?",
      correct: "Could you help me with this?",
      incorrectHighlight: "Can you to help",
      correctHighlight: "Could you help",
      explanation:
        "Two upgrades: First, never put 'to' after a modal — it's 'help', not 'to help'. Second, 'could you' is the polite version of 'can you'. Use 'could' for any request to someone you don't know well, or anyone in a professional context.",
      explanationEs:
        "Dos mejoras: Primero, nunca pongas 'to' después de un modal — es 'help', no 'to help'. Segundo, 'could you' es la versión cortés de 'can you'. Usa 'could' para cualquier petición a alguien que no conoces bien, o a alguien en contexto profesional.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I no can go to the party.",
      correct: "I'm afraid I won't be able to make it to the party.",
      incorrectHighlight: "I no can go",
      correctHighlight: "I'm afraid I won't be able to make it",
      explanation:
        "Two layers: 'I no can' is a literal Spanish translation of 'no puedo' — never use 'no' before a verb in English. The negative is 'can't' or 'cannot'. But more importantly, native speakers RARELY decline an invitation by saying 'I can't go'. The polite formula is 'I'm afraid I won't be able to make it' — it preserves the relationship.",
      explanationEs:
        "Dos capas: 'I no can' es una traducción literal de 'no puedo' — nunca uses 'no' antes de un verbo en inglés. El negativo es 'can't' o 'cannot'. Pero más importante, los nativos RARAMENTE rechazan una invitación diciendo 'I can't go'. La fórmula cortés es 'I'm afraid I won't be able to make it' — preserva la relación.",
      errorType: "literal-translation",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "would you",
    spanishStress: "WOULD YOU",
    englishStress: "wʊdʒə (linked)",
    tip: "'Would you' links into one sound: /wʊdʒə/. The 'd' and 'y' merge into a 'j' sound. 'Would you like' = 'wʊdʒə-LIKE'. This linking is what makes natives sound fast.",
    tipEs:
      "'Would you' se enlaza en un solo sonido: /wʊdʒə/. La 'd' y la 'y' se fusionan en un sonido 'j'. 'Would you like' = 'wʊdʒə-LIKE'. Este enlace es lo que hace que los nativos suenen rápidos.",
  },
  {
    word: "could you",
    spanishStress: "COULD YOU",
    englishStress: "kʊdʒə (linked)",
    tip: "Same pattern as 'would you': 'could you' becomes /kʊdʒə/. 'Could you help me?' = 'kʊdʒə-HELP-mi?' Practice the 'dʒə' sound — it's the same one in 'just' or 'jam'.",
    tipEs:
      "Mismo patrón que 'would you': 'could you' se vuelve /kʊdʒə/. 'Could you help me?' = 'kʊdʒə-HELP-mi?' Practica el sonido 'dʒə' — es el mismo de 'just' o 'jam'.",
  },
  {
    word: "I'd",
    spanishStress: "I WOULD",
    englishStress: "aid (one syllable)",
    tip: "'I'd' contracts 'I would' into one syllable. It rhymes with 'side' or 'wide'. 'I'd like to come' = 'aid-LIKE-tu-KAM'. Saying 'I would' fully sounds formal and slow.",
    tipEs:
      "'I'd' contrae 'I would' en una sílaba. Rima con 'side' o 'wide'. 'I'd like to come' = 'aid-LIKE-tu-KAM'. Decir 'I would' completo suena formal y lento.",
  },
  {
    word: "wouldn't",
    spanishStress: "WOULD NOT",
    englishStress: "WUDNT (one syllable)",
    tip: "'Wouldn't' is one syllable: /wʊdnt/. The 't' is barely pronounced — almost silent. 'I wouldn't do that' = 'ai-WUDN-du-DAT'. Don't say 'would not' as two words in normal speech.",
    tipEs:
      "'Wouldn't' es una sílaba: /wʊdnt/. La 't' apenas se pronuncia — casi silenciosa. 'I wouldn't do that' = 'ai-WUDN-du-DAT'. No digas 'would not' como dos palabras en el habla normal.",
  },
  {
    word: "should've",
    spanishStress: "SHOULD HAVE",
    englishStress: "ʃʊdəv (one word)",
    tip: "'Should've' = 'should have'. The 'have' becomes /əv/ — never pronounced 'OF' even though it sometimes looks that way in writing. Same for 'would've', 'could've', 'might've'.",
    tipEs:
      "'Should've' = 'should have'. El 'have' se vuelve /əv/ — nunca se pronuncia 'OF' aunque a veces se vea así en escritura. Lo mismo para 'would've', 'could've', 'might've'.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Polite frame expressions (the heart of the unit)
  { english: "Would you like to...?", spanish: "¿Te gustaría...?", type: "expression" },
  { english: "Would you mind...?", spanish: "¿Te importaría...?", type: "expression" },
  { english: "Would you like me to...?", spanish: "¿Te gustaría que yo...?", type: "expression" },
  { english: "I'd love to.", spanish: "Me encantaría.", type: "expression" },
  { english: "I'd really like to.", spanish: "Me gustaría mucho.", type: "expression" },
  { english: "I'm afraid I won't be able to make it.", spanish: "Me temo que no podré asistir.", type: "expression" },
  { english: "Would it be possible to...?", spanish: "¿Sería posible...?", type: "expression" },
  { english: "If you wanted, you could...", spanish: "Si quisieras, podrías...", type: "expression" },
  { english: "We could try...", spanish: "Podríamos probar...", type: "expression" },
  { english: "You might want to...", spanish: "Podrías querer...", type: "expression" },
  { english: "If I were you, I would...", spanish: "Si yo fuera tú, yo...", type: "expression" },
  { english: "That would be perfect.", spanish: "Eso sería perfecto.", type: "expression" },
  // Phrasal verbs (only the truly useful ones, embedded contextually)
  { english: "come along", spanish: "acompañar", type: "phrasal-verb" },
  { english: "look forward to", spanish: "tener ganas de / estar ansioso por", type: "phrasal-verb" },
  { english: "call off", spanish: "cancelar", type: "phrasal-verb" },
  // Social/plans vocabulary
  { english: "to invite", spanish: "invitar", type: "verb" },
  { english: "to accept", spanish: "aceptar", type: "verb" },
  { english: "to decline", spanish: "rechazar", type: "verb" },
  { english: "to postpone", spanish: "posponer", type: "verb" },
  { english: "to reschedule", spanish: "reagendar", type: "verb" },
  { english: "to suggest", spanish: "sugerir", type: "verb" },
  { english: "an invitation", spanish: "una invitación", type: "noun" },
  { english: "a reservation", spanish: "una reservación", type: "noun" },
  { english: "a get-together", spanish: "una reunión informal", type: "noun" },
  { english: "a favor", spanish: "un favor", type: "noun" },
];
