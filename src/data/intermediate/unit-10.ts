// Unit 10: "Sounding Native" — Final unit content
// Theme: Capstone — modals of deduction, reasoning out loud
// Grammar: Modals of deduction (must, can't, might, could / must have, can't have, might have)
// Pronunciation: Thought groups and chunking
// Section A: DeductionLab (multiple-choice deduction practice)

import type {
  Dialogue,
  ErrorCorrectionSet,
  IntermediateVocabItem,
} from "./types";
import type { DeductionScenario } from "../../components/course/DeductionLab";
import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

// ─── Section A: Deduction Lab ────────────────────────────────────────────────

export const deductionScenarios: DeductionScenario[] = [
  {
    clue: "You see your colleague's car in the parking lot at 10 PM. The office building is dark.",
    clueEs: "Ves el coche de tu colega en el estacionamiento a las 10 PM. El edificio de oficinas está oscuro.",
    deductions: [
      {
        text: "He must be working late tonight.",
        textEs: "Debe estar trabajando hasta tarde esta noche.",
        modal: "must",
        isMostLikely: false,
        why: "'Must' is too certain here — the dark building is evidence AGAINST him being inside. The car alone isn't proof he's working.",
        whyEs: "'Must' es demasiado seguro aquí — el edificio oscuro es evidencia EN CONTRA de que esté adentro. El coche solo no es prueba de que esté trabajando.",
      },
      {
        text: "He might have left his car overnight.",
        textEs: "Podría haber dejado su coche toda la noche.",
        modal: "might have",
        isMostLikely: true,
        why: "'Might have' expresses uncertain possibility about the past — a perfect fit for this evidence. The dark building suggests he's not inside, so leaving the car is the most likely explanation.",
        whyEs: "'Might have' expresa una posibilidad incierta sobre el pasado — un ajuste perfecto para esta evidencia. El edificio oscuro sugiere que no está adentro, así que dejar el coche es la explicación más probable.",
      },
      {
        text: "He can't be at the office.",
        textEs: "No puede estar en la oficina.",
        modal: "can't",
        isMostLikely: false,
        why: "'Can't' is too certain in the negative direction. He COULD be in there with the lights off. We don't have enough evidence to be certain he's NOT there.",
        whyEs: "'Can't' es demasiado seguro en dirección negativa. PODRÍA estar adentro con las luces apagadas. No tenemos suficiente evidencia para estar seguros de que NO está ahí.",
      },
    ],
  },
  {
    clue: "Your friend has been quiet all evening, isn't eating much, and keeps checking her phone.",
    clueEs: "Tu amiga ha estado callada toda la tarde, no come mucho y sigue revisando su teléfono.",
    deductions: [
      {
        text: "Something must be bothering her.",
        textEs: "Algo debe estar molestándola.",
        modal: "must",
        isMostLikely: true,
        why: "'Must' is the right level of certainty here. The combination of three behaviors (quiet, not eating, checking phone) is strong enough evidence to draw a confident conclusion.",
        whyEs: "'Must' es el nivel correcto de certeza aquí. La combinación de tres comportamientos (callada, no comiendo, revisando el teléfono) es evidencia suficientemente fuerte para sacar una conclusión confiada.",
      },
      {
        text: "She might just be tired.",
        textEs: "Quizás solo está cansada.",
        modal: "might",
        isMostLikely: false,
        why: "'Might' is too weak — tiredness doesn't usually explain checking your phone constantly. The phone-checking is the key clue. 'Might' would be valid if she were just quiet.",
        whyEs: "'Might' es demasiado débil — el cansancio normalmente no explica revisar el teléfono constantemente. El revisar el teléfono es la pista clave. 'Might' sería válido si solo estuviera callada.",
      },
      {
        text: "She can't be enjoying herself.",
        textEs: "No puede estar disfrutando.",
        modal: "can't",
        isMostLikely: false,
        why: "'Can't' is technically possible here, but it's a negative deduction that doesn't really explain the situation. 'Must be bothered' is more useful — it's positive AND it gives a reason.",
        whyEs: "'Can't' es técnicamente posible aquí, pero es una deducción negativa que no explica realmente la situación. 'Must be bothered' es más útil — es positiva Y da una razón.",
      },
    ],
  },
  {
    clue: "You arrive home and find the front door unlocked, but you remember locking it before leaving.",
    clueEs: "Llegas a casa y encuentras la puerta principal sin cerrar, pero recuerdas haberla cerrado antes de irte.",
    deductions: [
      {
        text: "Someone must have come in.",
        textEs: "Alguien debe haber entrado.",
        modal: "must have",
        isMostLikely: true,
        why: "'Must have' is the right structure for confident deduction about the past. Two facts (door now open, you locked it before) lead logically to one conclusion. The past form is critical here.",
        whyEs: "'Must have' es la estructura correcta para una deducción confiada sobre el pasado. Dos hechos (puerta ahora abierta, tú la cerraste antes) llevan lógicamente a una conclusión. La forma pasada es crítica aquí.",
      },
      {
        text: "I might have forgotten to lock it.",
        textEs: "Podría haber olvidado cerrarla.",
        modal: "might have",
        isMostLikely: false,
        why: "'Might have' is possible but the clue says you REMEMBER locking it. The clue itself rules out forgetting. 'Might have' would be correct if you were uncertain.",
        whyEs: "'Might have' es posible pero la pista dice que RECUERDAS haberla cerrado. La pista misma descarta el olvido. 'Might have' sería correcto si no estuvieras seguro.",
      },
      {
        text: "It can't have been the wind.",
        textEs: "No puede haber sido el viento.",
        modal: "can't have",
        isMostLikely: false,
        why: "True, but this is a NEGATIVE deduction — it tells us what didn't happen, not what did. In real life, you'd want a positive deduction about who came in. 'Can't have' is correct grammar but unhelpful here.",
        whyEs: "Cierto, pero esta es una deducción NEGATIVA — nos dice qué no pasó, no qué sí pasó. En la vida real, querrías una deducción positiva sobre quién entró. 'Can't have' es gramática correcta pero poco útil aquí.",
      },
    ],
  },
  {
    clue: "You're trying to call your sister but it goes straight to voicemail every time. She always answers.",
    clueEs: "Estás tratando de llamar a tu hermana pero va directo al buzón de voz cada vez. Ella siempre contesta.",
    deductions: [
      {
        text: "Her phone could be off.",
        textEs: "Su teléfono podría estar apagado.",
        modal: "could",
        isMostLikely: true,
        why: "'Could' offers a reasonable possibility without claiming certainty. Going straight to voicemail is the classic sign of a phone being off or out of battery. 'Could' is the right tentative deduction.",
        whyEs: "'Could' ofrece una posibilidad razonable sin reclamar certeza. Ir directo al buzón de voz es la señal clásica de un teléfono apagado o sin batería. 'Could' es la deducción tentativa correcta.",
      },
      {
        text: "She must be ignoring me.",
        textEs: "Debe estar ignorándome.",
        modal: "must",
        isMostLikely: false,
        why: "Too strong a conclusion. The clue mentions she 'always answers' — that's normal behavior, not evidence of ignoring. 'Must' would be appropriate if you had reason to believe she was upset.",
        whyEs: "Conclusión demasiado fuerte. La pista menciona que 'siempre contesta' — eso es comportamiento normal, no evidencia de estar ignorándote. 'Must' sería apropiado si tuvieras razón para creer que está molesta.",
      },
      {
        text: "She can't be home.",
        textEs: "No puede estar en casa.",
        modal: "can't",
        isMostLikely: false,
        why: "Whether she's home or not isn't connected to her phone going to voicemail. People answer their phones from anywhere. This deduction doesn't follow logically from the clue.",
        whyEs: "Si está en casa o no, no está conectado con que su teléfono vaya al buzón de voz. La gente contesta su teléfono desde cualquier lugar. Esta deducción no se sigue lógicamente de la pista.",
      },
    ],
  },
  {
    clue: "You see a man wearing a heavy winter coat and gloves walking down the street. It's 80°F (27°C) outside.",
    clueEs: "Ves a un hombre con un abrigo de invierno pesado y guantes caminando por la calle. Hace 27°C afuera.",
    deductions: [
      {
        text: "He must not be feeling well.",
        textEs: "Debe no sentirse bien.",
        modal: "must",
        isMostLikely: true,
        why: "Strong contradiction between dress and weather usually indicates illness — fever can cause chills even in heat. 'Must' captures the high confidence of this deduction. Note: 'must not' (negative) is rare in deduction; we'd usually say 'must be sick' or 'must not be feeling well'.",
        whyEs: "Una contradicción fuerte entre la ropa y el clima usualmente indica enfermedad — la fiebre puede causar escalofríos incluso en el calor. 'Must' captura la alta confianza de esta deducción.",
      },
      {
        text: "He might be coming from a cold place.",
        textEs: "Podría venir de un lugar frío.",
        modal: "might",
        isMostLikely: false,
        why: "Possible but unusual — most people change clothes when arriving somewhere warm. 'Might' is too tentative for a deduction with such clear evidence (the visible illness signal).",
        whyEs: "Posible pero inusual — la mayoría de la gente se cambia de ropa al llegar a un lugar cálido. 'Might' es demasiado tentativo para una deducción con evidencia tan clara.",
      },
      {
        text: "He can't be a tourist.",
        textEs: "No puede ser turista.",
        modal: "can't",
        isMostLikely: false,
        why: "Tourism is unrelated to the clue. The clothing-vs-weather mismatch is the key fact. This deduction misses the point entirely — it's logically valid but not what a native speaker would conclude first.",
        whyEs: "El turismo no está relacionado con la pista. El desajuste ropa-vs-clima es el hecho clave. Esta deducción pierde el punto completamente.",
      },
    ],
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "Solving a Mystery at Work",
    titleEs: "Resolviendo un Misterio en el Trabajo",
    setting: "Two coworkers are trying to figure out why their boss canceled an important meeting at the last minute",
    settingEs: "Dos compañeros tratan de averiguar por qué su jefe canceló una junta importante en el último momento",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Pablo",
        speakerLabelEs: "Pablo",
        english:
          "Did you hear? The CEO canceled the all-hands meeting twenty minutes before it started.",
        spanish:
          "¿Te enteraste? El CEO canceló la junta general veinte minutos antes de que empezara.",
      },
      {
        speaker: "B",
        speakerLabel: "Linda",
        speakerLabelEs: "Linda",
        english:
          "That's strange. He never cancels things last minute. Something must have come up.",
        spanish:
          "Qué raro. Él nunca cancela cosas en el último momento. Algo debe haber surgido.",
        highlight: "Something must have come up",
      },
      {
        speaker: "A",
        speakerLabel: "Pablo",
        speakerLabelEs: "Pablo",
        english:
          "I noticed he was on a long phone call this morning. It might have been with the board.",
        spanish:
          "Noté que estuvo en una llamada larga esta mañana. Podría haber sido con la junta directiva.",
        highlight: "It might have been",
      },
      {
        speaker: "B",
        speakerLabel: "Linda",
        speakerLabelEs: "Linda",
        english:
          "Could be. Or it could have been with a major client. The timing suggests it was urgent.",
        spanish:
          "Podría ser. O podría haber sido con un cliente importante. El momento sugiere que era urgente.",
        highlight: "Could be / could have been",
      },
      {
        speaker: "A",
        speakerLabel: "Pablo",
        speakerLabelEs: "Pablo",
        english:
          "It can't have been good news. He looked stressed when he walked past my desk.",
        spanish:
          "No pueden haber sido buenas noticias. Se veía estresado cuando pasó por mi escritorio.",
        highlight: "It can't have been good news",
      },
      {
        speaker: "B",
        speakerLabel: "Linda",
        speakerLabelEs: "Linda",
        english:
          "Hmm. Whatever it is, we'll probably hear about it soon. He must be planning to update us tomorrow.",
        spanish:
          "Hmm. Sea lo que sea, probablemente lo escucharemos pronto. Debe estar planeando actualizarnos mañana.",
        highlight: "He must be planning",
      },
      {
        speaker: "A",
        speakerLabel: "Pablo",
        speakerLabelEs: "Pablo",
        english:
          "Yeah. Anyway — we should get back to work. We don't want him to think we're gossiping.",
        spanish:
          "Sí. En fin — deberíamos regresar al trabajo. No queremos que piense que estamos chismeando.",
        highlight: "we should get back to work",
      },
    ],
    keyPhrases: [
      {
        english: "Something must have come up.",
        spanish: "Algo debe haber surgido.",
        note: "The classic phrase for assuming an unexpected event interrupted plans. Uses past deduction with 'must have'.",
        noteEs: "La frase clásica para asumir que un evento inesperado interrumpió planes. Usa deducción del pasado con 'must have'.",
      },
      {
        english: "It can't have been...",
        spanish: "No puede haber sido...",
        note: "Negative deduction about the past. Use it when something is logically impossible based on the evidence.",
        noteEs: "Deducción negativa sobre el pasado. Úsalo cuando algo es lógicamente imposible según la evidencia.",
      },
      {
        english: "He must be planning to...",
        spanish: "Debe estar planeando...",
        note: "Present deduction about ongoing activity. Combines 'must' with the continuous form 'be planning'.",
        noteEs: "Deducción presente sobre actividad en curso. Combina 'must' con la forma continua 'be planning'.",
      },
    ],
  },
];

// ─── Section C: Structure Builder ────────────────────────────────────────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "Modals of deduction: present",
    labelEs: "Modales de deducción: presente",
    description:
      "Use 'must', 'can't', 'might', and 'could' to deduce things happening NOW. The modal you choose shows how confident you are.",
    descriptionEs:
      "Usa 'must', 'can't', 'might' y 'could' para deducir cosas que pasan AHORA. El modal que elijas muestra qué tan seguro estás.",
    sentences: [
      {
        english: "She must be exhausted after that flight.",
        spanish: "Debe estar agotada después de ese vuelo.",
        highlight: "must be exhausted",
      },
      {
        english: "He can't be telling the truth — the story doesn't add up.",
        spanish: "No puede estar diciendo la verdad — la historia no cuadra.",
        highlight: "can't be telling",
      },
      {
        english: "They might be at the restaurant already.",
        spanish: "Podrían ya estar en el restaurante.",
        highlight: "might be",
      },
      {
        english: "It could be raining where they are.",
        spanish: "Podría estar lloviendo donde están.",
        highlight: "could be raining",
      },
    ],
  },
  {
    label: "Modals of deduction: past",
    labelEs: "Modales de deducción: pasado",
    description:
      "For deductions about past events, use 'must have', 'can't have', 'might have', or 'could have' + past participle.",
    descriptionEs:
      "Para deducciones sobre eventos pasados, usa 'must have', 'can't have', 'might have' o 'could have' + participio.",
    sentences: [
      {
        english: "She must have left early. Her car isn't in the lot.",
        spanish: "Debe haberse ido temprano. Su coche no está en el estacionamiento.",
        highlight: "must have left",
      },
      {
        english: "They can't have arrived yet — the train was delayed.",
        spanish: "No pueden haber llegado todavía — el tren se retrasó.",
        highlight: "can't have arrived",
      },
      {
        english: "He might have forgotten about our meeting.",
        spanish: "Podría haber olvidado nuestra reunión.",
        highlight: "might have forgotten",
      },
      {
        english: "Someone could have stolen it from your desk.",
        spanish: "Alguien podría habérselo robado de tu escritorio.",
        highlight: "could have stolen",
      },
    ],
  },
  {
    label: "The certainty scale",
    labelEs: "La escala de certeza",
    description:
      "These modals form a scale from certain to uncertain. Pick the right one for how much evidence you have.",
    descriptionEs:
      "Estos modales forman una escala de certeza a incertidumbre. Elige el correcto según cuánta evidencia tienes.",
    sentences: [
      {
        english: "It MUST be him. (95% certain)",
        spanish: "DEBE ser él. (95% seguro)",
        highlight: "MUST be",
      },
      {
        english: "It COULD be him. (50% certain)",
        spanish: "PODRÍA ser él. (50% seguro)",
        highlight: "COULD be",
      },
      {
        english: "It MIGHT be him. (40% certain)",
        spanish: "TAL VEZ es él. (40% seguro)",
        highlight: "MIGHT be",
      },
      {
        english: "It CAN'T be him. (95% certain it's NOT)",
        spanish: "NO PUEDE ser él. (95% seguro que NO)",
        highlight: "CAN'T be",
      },
    ],
  },
  {
    label: "Combining everything you've learned",
    labelEs: "Combinando todo lo que has aprendido",
    description:
      "These sentences combine modals of deduction with the structures from earlier units — present perfect, conditionals, relative clauses. This is what advanced English really looks like.",
    descriptionEs:
      "Estas oraciones combinan modales de deducción con estructuras de unidades anteriores — presente perfecto, condicionales, cláusulas relativas. Así se ve realmente el inglés avanzado.",
    sentences: [
      {
        english: "If she had told me, I would have known the truth — but she must have had a reason for staying quiet.",
        spanish: "Si me hubiera dicho, habría sabido la verdad — pero debe haber tenido una razón para quedarse callada.",
        highlight: "must have had",
      },
      {
        english: "The person who called earlier might have been the one I've been trying to reach all week.",
        spanish: "La persona que llamó antes podría haber sido la que he estado tratando de localizar toda la semana.",
        highlight: "might have been",
      },
      {
        english: "If you can't find your wallet, you must have left it at the restaurant where we had dinner.",
        spanish: "Si no puedes encontrar tu cartera, debes haberla dejado en el restaurante donde cenamos.",
        highlight: "must have left",
      },
      {
        english: "I wish I had asked her directly — by now, she might have moved on.",
        spanish: "Ojalá le hubiera preguntado directamente — para ahora, podría haber seguido adelante.",
        highlight: "might have moved on",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes with Modals of Deduction",
  titleEs: "Errores Comunes con Modales de Deducción",
  description:
    "These errors mix up confidence levels and time frames — they make your reasoning sound less precise than it is.",
  descriptionEs:
    "Estos errores confunden niveles de certeza y marcos temporales — hacen que tu razonamiento suene menos preciso de lo que es.",
  items: [
    {
      incorrect: "He must to be tired. He worked all night.",
      correct: "He must be tired. He worked all night.",
      incorrectHighlight: "must to be",
      correctHighlight: "must be",
      explanation:
        "Modal verbs (must, can, might, could, should) NEVER take 'to' before the next verb. The structure is always 'modal + base verb'. 'Must be', 'might go', 'could see' — never 'must to be' or 'might to go'.",
      explanationEs:
        "Los verbos modales (must, can, might, could, should) NUNCA toman 'to' antes del siguiente verbo. La estructura siempre es 'modal + verbo base'. Nunca 'must to be' o 'might to go'.",
      errorType: "literal-translation",
    },
    {
      incorrect: "She must left already. The lights are off.",
      correct: "She must have left already. The lights are off.",
      incorrectHighlight: "must left",
      correctHighlight: "must have left",
      explanation:
        "For PAST deductions, use 'must have + past participle' — never just 'must + past tense'. 'Must left' is grammatically impossible. The structure is 'modal + have + past participle': must have left, might have known, can't have seen.",
      explanationEs:
        "Para deducciones del PASADO, usa 'must have + participio' — nunca solo 'must + pasado'. 'Must left' es gramaticalmente imposible. La estructura es 'modal + have + participio'.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "He must be sick — but I'm not sure.",
      correct: "He might be sick — I'm not sure.",
      incorrectHighlight: "must be sick — but I'm not sure",
      correctHighlight: "might be sick — I'm not sure",
      explanation:
        "'Must' means you're highly confident. If you're 'not sure', you can't use 'must' — that's a contradiction. Use 'might' or 'could' for uncertainty. Match the modal to your actual confidence level.",
      explanationEs:
        "'Must' significa que estás muy seguro. Si 'no estás seguro', no puedes usar 'must' — es una contradicción. Usa 'might' o 'could' para incertidumbre. Combina el modal con tu nivel real de confianza.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "It can be true — I saw it with my own eyes.",
      correct: "It must be true — I saw it with my own eyes.",
      incorrectHighlight: "can be true",
      correctHighlight: "must be true",
      explanation:
        "'Can' is for ability or general possibility, NOT for deduction. For confident conclusions, use 'must'. 'It can be true' sounds like 'this is possible in general'. 'It must be true' means 'I'm confident based on evidence'.",
      explanationEs:
        "'Can' es para habilidad o posibilidad general, NO para deducción. Para conclusiones seguras, usa 'must'. 'It can be true' suena a 'esto es posible en general'. 'It must be true' significa 'estoy seguro según la evidencia'.",
      errorType: "literal-translation",
    },
    {
      incorrect: "They mustn't have heard the news yet.",
      correct: "They can't have heard the news yet.",
      incorrectHighlight: "mustn't have heard",
      correctHighlight: "can't have heard",
      explanation:
        "'Mustn't' means 'it's forbidden' (a rule), NOT 'I'm sure it didn't happen'. For negative deductions, use 'can't' (present) or 'can't have' (past). 'They can't have heard' = 'I'm sure they haven't heard'. 'They mustn't have heard' is wrong.",
      explanationEs:
        "'Mustn't' significa 'está prohibido' (una regla), NO 'estoy seguro de que no pasó'. Para deducciones negativas, usa 'can't' (presente) o 'can't have' (pasado). 'They mustn't have heard' es incorrecto.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "He could have went without us.",
      correct: "He could have gone without us.",
      incorrectHighlight: "could have went",
      correctHighlight: "could have gone",
      explanation:
        "After 'have' you ALWAYS use the past participle, not the simple past. 'Go' → past simple 'went' / past participle 'gone'. 'Could have gone', 'must have eaten', 'might have seen'. This is the same rule as the present perfect — the participle is needed.",
      explanationEs:
        "Después de 'have' SIEMPRE usas el participio pasado, no el pasado simple. 'Go' → pasado simple 'went' / participio 'gone'. 'Could have gone', 'must have eaten', 'might have seen'. Es la misma regla que el presente perfecto.",
      errorType: "tense-confusion",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "must've been",
    spanishStress: "MUST HAVE BEEN",
    englishStress: "MUST-əv-bin",
    tip: "'Must have been' contracts to 'must've been' = /MUST-əv-bin/. Three syllables, all flowing together. Native speakers ALWAYS contract this. Saying 'must have been' as three full words sounds painfully formal.",
    tipEs:
      "'Must have been' se contrae a 'must've been' = /MUST-əv-bin/. Tres sílabas, todas fluyendo juntas. Los nativos SIEMPRE contraen esto. Decir 'must have been' como tres palabras completas suena dolorosamente formal.",
  },
  {
    word: "thought groups",
    spanishStress: "THOUGHT GROUPS",
    englishStress: "chunks separated by tiny pauses",
    tip: "Native speakers don't speak word-by-word — they speak in CHUNKS of 3-7 words with tiny pauses between. 'It must have been / a misunderstanding / because she's not / the kind of person / who would lie.' The slashes are the natural pauses.",
    tipEs:
      "Los nativos no hablan palabra por palabra — hablan en CHUNKS de 3-7 palabras con pausas mínimas entre ellas. Las pausas naturales son la clave del ritmo nativo.",
  },
  {
    word: "I think...",
    spanishStress: "I THINK",
    englishStress: "ai-THINK (then pause)",
    tip: "When you start a deduction with 'I think...' or 'I guess...', native speakers pause briefly afterward. This pause signals 'I'm processing' — it gives you time to think AND sounds natural. Don't rush past it.",
    tipEs:
      "Cuando empiezas una deducción con 'I think...' o 'I guess...', los nativos hacen una pausa breve después. Esta pausa señala 'estoy procesando' — te da tiempo para pensar Y suena natural.",
  },
  {
    word: "you know",
    spanishStress: "YOU KNOW",
    englishStress: "yə-NO (filler)",
    tip: "'You know' is the most common English filler. Reduced to /yə-NO/ in fast speech, it gives you thinking time without breaking the flow. Used moderately, it sounds native; overused, it sounds uncertain.",
    tipEs:
      "'You know' es el filler más común en inglés. Reducido a /yə-NO/ en habla rápida, te da tiempo para pensar sin romper el flujo. Usado con moderación, suena nativo; en exceso, suena inseguro.",
  },
  {
    word: "I mean...",
    spanishStress: "I MEAN",
    englishStress: "ai-MIN (correction filler)",
    tip: "'I mean' is what you say when you're about to clarify or correct yourself. It's more elegant than 'sorry, what I wanted to say is'. Native speakers use it constantly when reasoning out loud.",
    tipEs:
      "'I mean' es lo que dices cuando vas a aclarar o corregirte. Es más elegante que 'sorry, what I wanted to say is'. Los nativos lo usan constantemente al razonar en voz alta.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Modal deduction expressions
  { english: "It must be...", spanish: "Debe ser...", type: "expression" },
  { english: "It can't be...", spanish: "No puede ser...", type: "expression" },
  { english: "It might be...", spanish: "Podría ser...", type: "expression" },
  { english: "It could be...", spanish: "Podría ser...", type: "expression" },
  { english: "It must have been...", spanish: "Debe haber sido...", type: "expression" },
  { english: "It can't have been...", spanish: "No puede haber sido...", type: "expression" },
  { english: "It might have been...", spanish: "Podría haber sido...", type: "expression" },
  // Reasoning fillers
  { english: "I think...", spanish: "Creo que...", type: "expression" },
  { english: "I guess...", spanish: "Supongo que...", type: "expression" },
  { english: "I mean...", spanish: "Quiero decir...", type: "expression" },
  { english: "you know...", spanish: "sabes...", type: "expression" },
  { english: "I suppose...", spanish: "Supongo...", type: "expression" },
  // Connecting/reasoning phrases
  { english: "Something must have come up.", spanish: "Algo debe haber surgido.", type: "expression" },
  { english: "Whatever it is...", spanish: "Sea lo que sea...", type: "expression" },
  { english: "By now...", spanish: "Para ahora...", type: "expression" },
  { english: "It doesn't add up.", spanish: "No cuadra.", type: "expression" },
  { english: "That makes sense.", spanish: "Eso tiene sentido.", type: "expression" },
  // Reasoning verbs
  { english: "to assume", spanish: "asumir", type: "verb" },
  { english: "to suspect", spanish: "sospechar", type: "verb" },
  { english: "to conclude", spanish: "concluir", type: "verb" },
  { english: "to figure out", spanish: "deducir / averiguar", type: "phrasal-verb" },
  { english: "to wonder", spanish: "preguntarse", type: "verb" },
  // Self-assessment vocabulary (course wrap-up)
  { english: "fluent", spanish: "fluido", type: "expression" },
  { english: "confident", spanish: "seguro / con confianza", type: "expression" },
  { english: "to make progress", spanish: "progresar", type: "expression" },
  { english: "to keep going", spanish: "seguir adelante", type: "phrasal-verb" },
];
