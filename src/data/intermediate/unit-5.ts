// Unit 5: "Telling Stories" — Full course content
// Theme: Narrating events, retelling what people said
// Grammar: Past perfect + reported speech + 'would' (habitual past)
// Pronunciation: Connected speech in past narratives
// Section A: NarrativeTimeline (visual past-tense relationships)

import type {
  Dialogue,
  ErrorCorrectionSet,
  IntermediateVocabItem,
} from "./types";
import type { NarrativeStory } from "../../components/course/NarrativeTimeline";
import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

// ─── Section A: Narrative Timeline ───────────────────────────────────────────

export const stories: NarrativeStory[] = [
  {
    title: "The Job Interview",
    titleEs: "La Entrevista de Trabajo",
    intro:
      "A story about Carlos's interview that didn't go as planned. Notice how past simple, past perfect, and 'would' (for habits) work together to build a clear timeline.",
    introEs:
      "Una historia sobre la entrevista de Carlos que no salió como planeado. Nota cómo el pasado simple, el pasado perfecto y 'would' (para hábitos) trabajan juntos para construir una línea de tiempo clara.",
    events: [
      {
        order: 1,
        timeMarker: "Months earlier",
        timeMarkerEs: "Meses antes",
        english: "Carlos would spend every weekend studying English.",
        spanish: "Carlos pasaba cada fin de semana estudiando inglés.",
        tense: "would-habitual",
        whyTense:
          "'Would' here describes a repeated past habit — exactly like 'used to'. It's more elegant than 'always studied' and very common in storytelling.",
        whyTenseEs:
          "'Would' aquí describe un hábito repetido del pasado — exactamente como 'used to'. Es más elegante que 'always studied' y muy común al contar historias.",
      },
      {
        order: 2,
        timeMarker: "The week before",
        timeMarkerEs: "La semana anterior",
        english: "He had prepared answers for every question he could think of.",
        spanish: "Había preparado respuestas para cada pregunta que se le ocurría.",
        tense: "past-perfect",
        whyTense:
          "Past perfect ('had prepared') because this action was COMPLETED before the main story event (the interview). It sets up what was already done.",
        whyTenseEs:
          "Pasado perfecto ('had prepared') porque esta acción YA HABÍA TERMINADO antes del evento principal (la entrevista). Establece lo que ya estaba hecho.",
      },
      {
        order: 3,
        timeMarker: "On the morning of",
        timeMarkerEs: "La mañana del día",
        english: "He woke up early, put on his best suit, and left the house.",
        spanish: "Se levantó temprano, se puso su mejor traje y salió de la casa.",
        tense: "past-simple",
        whyTense:
          "Past simple — these are sequential actions in the main story timeline. No 'before' relationship to anything else, just one thing after another.",
        whyTenseEs:
          "Pasado simple — estas son acciones secuenciales en la línea de tiempo principal. Sin relación de 'antes' con nada, solo una cosa tras otra.",
      },
      {
        order: 4,
        timeMarker: "At the office",
        timeMarkerEs: "En la oficina",
        english: "When he arrived, the receptionist told him the interview had been moved to the next day.",
        spanish: "Cuando llegó, la recepcionista le dijo que la entrevista se había movido al día siguiente.",
        tense: "past-perfect",
        whyTense:
          "Two pasts in one sentence: 'arrived' and 'told' are simple past, but 'had been moved' is past perfect because the rescheduling happened EARLIER than the moment she told him.",
        whyTenseEs:
          "Dos pasados en una oración: 'arrived' y 'told' son pasado simple, pero 'had been moved' es pasado perfecto porque el cambio sucedió ANTES del momento en que ella le dijo.",
      },
      {
        order: 5,
        timeMarker: "Her exact words",
        timeMarkerEs: "Sus palabras exactas",
        english: "She said that no one had called him because the system was down.",
        spanish: "Dijo que nadie lo había llamado porque el sistema estaba caído.",
        tense: "reported-speech",
        whyTense:
          "This is reported speech: when 'said' is in the past, the verbs that follow shift back one tense. Direct speech 'no one has called' becomes 'no one had called'.",
        whyTenseEs:
          "Esto es discurso indirecto: cuando 'said' está en pasado, los verbos que siguen retroceden un tiempo. El discurso directo 'no one has called' se vuelve 'no one had called'.",
      },
      {
        order: 6,
        timeMarker: "The next day",
        timeMarkerEs: "Al día siguiente",
        english: "The interview went well, and he got the job.",
        spanish: "La entrevista salió bien, y consiguió el trabajo.",
        tense: "past-simple",
        whyTense:
          "Back to past simple for the main timeline — straightforward sequential events. Notice how the story flows naturally between tenses.",
        whyTenseEs:
          "De vuelta al pasado simple para la línea de tiempo principal — eventos secuenciales directos. Nota cómo la historia fluye naturalmente entre tiempos.",
      },
    ],
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "Telling a Friend What Happened",
    titleEs: "Contándole a un Amigo lo que Pasó",
    setting: "Two friends meeting for coffee — one shares a story about a recent trip",
    settingEs: "Dos amigos se encuentran para tomar café — uno comparte una historia sobre un viaje reciente",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Sofia",
        speakerLabelEs: "Sofía",
        english: "You won't believe what happened to me last weekend.",
        spanish: "No vas a creer lo que me pasó el fin de semana pasado.",
        highlight: "what happened",
      },
      {
        speaker: "B",
        speakerLabel: "Daniel",
        speakerLabelEs: "Daniel",
        english: "Oh? Tell me everything.",
        spanish: "¿Ah sí? Cuéntame todo.",
      },
      {
        speaker: "A",
        speakerLabel: "Sofia",
        speakerLabelEs: "Sofía",
        english: "So I had booked a hotel in Boston weeks ago. When I arrived, they told me my reservation had been cancelled.",
        spanish: "Reservé un hotel en Boston hace semanas. Cuando llegué, me dijeron que mi reservación había sido cancelada.",
        highlight: "had booked / had been cancelled",
      },
      {
        speaker: "B",
        speakerLabel: "Daniel",
        speakerLabelEs: "Daniel",
        english: "What? Did they say why?",
        spanish: "¿Qué? ¿Te dijeron por qué?",
      },
      {
        speaker: "A",
        speakerLabel: "Sofia",
        speakerLabelEs: "Sofía",
        english: "They said the system had made a mistake and that they would refund me.",
        spanish: "Dijeron que el sistema había cometido un error y que me reembolsarían.",
        highlight: "said... had made... would refund",
      },
      {
        speaker: "B",
        speakerLabel: "Daniel",
        speakerLabelEs: "Daniel",
        english: "Wow. So where did you stay?",
        spanish: "Wow. ¿Y dónde te quedaste?",
      },
      {
        speaker: "A",
        speakerLabel: "Sofia",
        speakerLabelEs: "Sofía",
        english: "Luckily, my cousin lives nearby. When I was in college, I would visit her every summer, so she insisted I stay with her.",
        spanish: "Por suerte, mi prima vive cerca. Cuando estaba en la universidad, la visitaba cada verano, así que insistió en que me quedara con ella.",
        highlight: "I would visit her",
      },
      {
        speaker: "B",
        speakerLabel: "Daniel",
        speakerLabelEs: "Daniel",
        english: "That's actually a pretty happy ending. Did the hotel ever refund you?",
        spanish: "Eso es un final bastante feliz. ¿El hotel te devolvió el dinero?",
      },
      {
        speaker: "A",
        speakerLabel: "Sofia",
        speakerLabelEs: "Sofía",
        english: "Yes — they said they would credit my account within 48 hours, and they actually did.",
        spanish: "Sí — dijeron que abonarían a mi cuenta dentro de 48 horas, y de hecho lo hicieron.",
        highlight: "they would credit",
      },
    ],
    keyPhrases: [
      {
        english: "You won't believe what happened.",
        spanish: "No vas a creer lo que pasó.",
        note: "The classic story-opener. Hooks the listener immediately.",
        noteEs: "El clásico inicio de historia. Engancha al oyente inmediatamente.",
      },
      {
        english: "They said that... had been...",
        spanish: "Dijeron que... había sido...",
        note: "Reported speech with past perfect — the formula for retelling what people told you.",
        noteEs: "Discurso indirecto con pasado perfecto — la fórmula para contar lo que la gente te dijo.",
      },
      {
        english: "I would visit her every summer.",
        spanish: "La visitaba cada verano.",
        note: "'Would' for past habits — more elegant than 'I always visited' or 'I used to visit'.",
        noteEs: "'Would' para hábitos pasados — más elegante que 'I always visited' o 'I used to visit'.",
      },
    ],
  },
];

// ─── Section C: Structure Builder ────────────────────────────────────────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "Past perfect: the past before the past",
    labelEs: "Pasado perfecto: el pasado antes del pasado",
    description:
      "Structure: had + past participle. Use it when you need to show one past event happened BEFORE another past event.",
    descriptionEs:
      "Estructura: had + participio pasado. Úsalo cuando necesitas mostrar que un evento pasado sucedió ANTES de otro evento pasado.",
    sentences: [
      {
        english: "By the time I arrived, the meeting had already started.",
        spanish: "Para cuando llegué, la junta ya había empezado.",
        highlight: "had already started",
      },
      {
        english: "She had never seen the ocean before that trip.",
        spanish: "Ella nunca había visto el océano antes de ese viaje.",
        highlight: "had never seen",
      },
      {
        english: "We had finished dinner when they finally arrived.",
        spanish: "Habíamos terminado de cenar cuando por fin llegaron.",
        highlight: "had finished",
      },
      {
        english: "He realized he had left his keys at home.",
        spanish: "Se dio cuenta de que había dejado las llaves en casa.",
        highlight: "had left",
      },
    ],
  },
  {
    label: "Reported speech: tense shifts",
    labelEs: "Discurso indirecto: cambios de tiempo",
    description:
      "When the reporting verb (said, told) is in the past, the verbs that follow shift back one tense: present → past, past → past perfect, will → would.",
    descriptionEs:
      "Cuando el verbo que reporta (said, told) está en pasado, los verbos que siguen retroceden un tiempo: presente → pasado, pasado → pasado perfecto, will → would.",
    sentences: [
      {
        english: 'Direct: She said, "I am tired." → She said she was tired.',
        spanish: 'Directo: Ella dijo, "Estoy cansada." → Ella dijo que estaba cansada.',
        highlight: "was tired",
      },
      {
        english: 'Direct: He said, "I will help you." → He said he would help me.',
        spanish: 'Directo: Él dijo, "Te ayudaré." → Él dijo que me ayudaría.',
        highlight: "would help",
      },
      {
        english: 'Direct: They said, "We have finished." → They said they had finished.',
        spanish: 'Directo: Ellos dijeron, "Hemos terminado." → Dijeron que habían terminado.',
        highlight: "had finished",
      },
      {
        english: 'Direct: She said, "I went to Paris." → She said she had gone to Paris.',
        spanish: 'Directo: Ella dijo, "Fui a París." → Dijo que había ido a París.',
        highlight: "had gone",
      },
    ],
  },
  {
    label: "'Would' for past habits",
    labelEs: "'Would' para hábitos pasados",
    description:
      "Use 'would' to describe repeated past habits — actions that happened many times in the past but don't happen anymore. It's the elegant alternative to 'used to'.",
    descriptionEs:
      "Usa 'would' para describir hábitos pasados repetidos — acciones que sucedieron muchas veces en el pasado pero ya no suceden. Es la alternativa elegante a 'used to'.",
    sentences: [
      {
        english: "When I was young, my grandfather would tell me stories every night.",
        spanish: "Cuando era joven, mi abuelo me contaba historias cada noche.",
        highlight: "would tell",
      },
      {
        english: "Every summer we would visit the lake and stay for a week.",
        spanish: "Cada verano visitábamos el lago y nos quedábamos una semana.",
        highlight: "would visit",
      },
      {
        english: "She would always wake up at 5 AM to go running.",
        spanish: "Ella siempre se levantaba a las 5 AM para ir a correr.",
        highlight: "would always wake up",
      },
      {
        english: "On Sundays, my father would cook breakfast for the whole family.",
        spanish: "Los domingos, mi padre hacía el desayuno para toda la familia.",
        highlight: "would cook",
      },
    ],
  },
  {
    label: "Putting it all together",
    labelEs: "Uniéndolo todo",
    description:
      "Real narratives mix all three: past simple for the main timeline, past perfect for what came before, 'would' for habits, reported speech for what people said.",
    descriptionEs:
      "Las narrativas reales mezclan los tres: pasado simple para la línea principal, pasado perfecto para lo que vino antes, 'would' para hábitos, discurso indirecto para lo que la gente dijo.",
    sentences: [
      {
        english: "I told her I had already eaten.",
        spanish: "Le dije que ya había comido.",
        highlight: "told... had already eaten",
      },
      {
        english: "When we were kids, we would play in that park every day, but it had been demolished by the time I returned.",
        spanish: "Cuando éramos niños, jugábamos en ese parque todos los días, pero había sido demolido para cuando regresé.",
        highlight: "would play... had been demolished",
      },
      {
        english: "He explained that he had lost the file but that he would send it the next day.",
        spanish: "Explicó que había perdido el archivo pero que lo enviaría al día siguiente.",
        highlight: "had lost... would send",
      },
      {
        english: "She mentioned she had been working there for years before she finally quit.",
        spanish: "Mencionó que había estado trabajando allí durante años antes de finalmente renunciar.",
        highlight: "had been working",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes with Past Narratives",
  titleEs: "Errores Comunes con Narrativas Pasadas",
  description:
    "These are the exact errors that make B1 storytelling sound flat or confusing. Spot them, fix them.",
  descriptionEs:
    "Estos son los errores exactos que hacen que las historias B1 suenen planas o confusas. Detéctalos, corrígelos.",
  items: [
    {
      incorrect: "When I arrived, the meeting already started.",
      correct: "When I arrived, the meeting had already started.",
      incorrectHighlight: "already started",
      correctHighlight: "had already started",
      explanation:
        "When two past events happen, use past perfect ('had started') for the EARLIER one. The meeting started BEFORE you arrived, so it needs the past perfect form to make the time relationship clear.",
      explanationEs:
        "Cuando suceden dos eventos pasados, usa el pasado perfecto ('had started') para el ANTERIOR. La junta empezó ANTES de que llegaras, así que necesita la forma del pasado perfecto.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "She told me she will call me later.",
      correct: "She told me she would call me later.",
      incorrectHighlight: "she will call",
      correctHighlight: "she would call",
      explanation:
        "In reported speech, when the reporting verb ('told') is in the past, 'will' shifts to 'would'. Direct: 'I will call you' → Reported: 'She said she would call me'. The whole sentence shifts back in time.",
      explanationEs:
        "En el discurso indirecto, cuando el verbo que reporta ('told') está en pasado, 'will' cambia a 'would'. Directo: 'I will call you' → Indirecto: 'She said she would call me'.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "He said me that he was tired.",
      correct: "He told me that he was tired.",
      incorrectHighlight: "said me",
      correctHighlight: "told me",
      explanation:
        "'Said' and 'told' are not interchangeable. 'Tell' takes a direct object (tell ME, tell HIM). 'Say' does not — you can't 'say someone' something. Use 'said TO me' or just 'told me'.",
      explanationEs:
        "'Said' y 'told' no son intercambiables. 'Tell' toma un objeto directo (tell ME, tell HIM). 'Say' no — no puedes 'say someone' algo. Usa 'said TO me' o simplemente 'told me'.",
      errorType: "literal-translation",
    },
    {
      incorrect: "When I was a child, I was playing soccer every weekend.",
      correct: "When I was a child, I would play soccer every weekend.",
      incorrectHighlight: "I was playing",
      correctHighlight: "I would play",
      explanation:
        "Past continuous ('was playing') describes an action in progress at a SPECIFIC moment. For repeated past habits, use 'would + base verb' or 'used to + base verb'. Spanish imperfect ('jugaba') maps to BOTH, which causes confusion.",
      explanationEs:
        "El pasado continuo ('was playing') describe una acción en progreso en un momento ESPECÍFICO. Para hábitos pasados repetidos, usa 'would + verbo base' o 'used to + verbo base'. El imperfecto en español ('jugaba') corresponde a AMBOS, lo que causa confusión.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "After I had finished my work, I had gone home.",
      correct: "After I had finished my work, I went home.",
      incorrectHighlight: "I had gone home",
      correctHighlight: "I went home",
      explanation:
        "You only need ONE past perfect to establish the time order. Once 'had finished' tells the listener which event came first, the second event uses simple past. Don't double up on past perfects — it's redundant.",
      explanationEs:
        "Solo necesitas UN pasado perfecto para establecer el orden temporal. Una vez que 'had finished' le dice al oyente cuál evento fue primero, el segundo evento usa pasado simple. No dupliques los pasados perfectos — es redundante.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "He asked me where do I live.",
      correct: "He asked me where I lived.",
      incorrectHighlight: "where do I live",
      correctHighlight: "where I lived",
      explanation:
        "Two errors. First: in reported questions, use STATEMENT order (subject + verb), not question order. Second: 'asked' is past, so 'live' shifts to 'lived'. Reported questions never have 'do/does/did' as auxiliaries.",
      explanationEs:
        "Dos errores. Primero: en preguntas indirectas, usa el orden de DECLARACIÓN (sujeto + verbo), no el de pregunta. Segundo: 'asked' es pasado, así que 'live' cambia a 'lived'. Las preguntas indirectas nunca tienen 'do/does/did' como auxiliares.",
      errorType: "tense-confusion",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "had been",
    spanishStress: "HAD BEEN",
    englishStress: "həd bin (weak)",
    tip: "In past perfect, 'had been' is reduced to /həd bin/ — both words unstressed. 'I had been waiting' = 'aid-bin-WAY-ting' (with 'I had' contracted to 'I'd').",
    tipEs:
      "En pasado perfecto, 'had been' se reduce a /həd bin/ — ambas palabras sin acento. 'I had been waiting' = 'aid-bin-WAY-ting' (con 'I had' contraído a 'I'd').",
  },
  {
    word: "I'd",
    spanishStress: "I HAD",
    englishStress: "aid (one syllable)",
    tip: "'I'd' contracts BOTH 'I would' and 'I had'. Context tells you which. 'I'd already eaten' = 'I had already eaten'. 'I'd love to' = 'I would love to'. Same sound, different meanings.",
    tipEs:
      "'I'd' contrae TANTO 'I would' como 'I had'. El contexto te dice cuál. 'I'd already eaten' = 'I had already eaten'. 'I'd love to' = 'I would love to'. Mismo sonido, significados diferentes.",
  },
  {
    word: "she'd",
    spanishStress: "SHE HAD",
    englishStress: "shid (one syllable)",
    tip: "'She'd' rhymes with 'need'. 'She'd told me' = 'shid-told-mi' — fast and connected. Same contraction works for 'she would' and 'she had'.",
    tipEs:
      "'She'd' rima con 'need'. 'She'd told me' = 'shid-told-mi' — rápido y conectado. La misma contracción funciona para 'she would' y 'she had'.",
  },
  {
    word: "would've",
    spanishStress: "WOULD HAVE",
    englishStress: "wʊdəv",
    tip: "'Would've' = 'would have'. The 'have' becomes /əv/ — never 'OF', even though some people misspell it that way. 'I would've told you' = 'aid-əv-TOLD-yu'.",
    tipEs:
      "'Would've' = 'would have'. El 'have' se vuelve /əv/ — nunca 'OF', aunque algunos lo escriben mal así. 'I would've told you' = 'aid-əv-TOLD-yu'.",
  },
  {
    word: "told you",
    spanishStress: "TOLD YOU",
    englishStress: "TOLD-jə (linked)",
    tip: "'Told you' links into 'TOLD-jə'. The 'd' + 'y' merges into a 'j' sound, just like 'would you'. 'I told you so' = 'ai-TOLD-jə-so'.",
    tipEs:
      "'Told you' se enlaza en 'TOLD-jə'. La 'd' + 'y' se fusiona en un sonido 'j', igual que 'would you'. 'I told you so' = 'ai-TOLD-jə-so'.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Narrative connectors
  { english: "by the time", spanish: "para cuando", type: "expression" },
  { english: "as soon as", spanish: "tan pronto como", type: "expression" },
  { english: "before that", spanish: "antes de eso", type: "expression" },
  { english: "after that", spanish: "después de eso", type: "expression" },
  { english: "earlier that day", spanish: "más temprano ese día", type: "expression" },
  // Reported speech verbs
  { english: "She said that...", spanish: "Ella dijo que...", type: "expression" },
  { english: "He told me that...", spanish: "Él me dijo que...", type: "expression" },
  { english: "They mentioned that...", spanish: "Mencionaron que...", type: "expression" },
  { english: "He explained that...", spanish: "Explicó que...", type: "expression" },
  { english: "She admitted that...", spanish: "Ella admitió que...", type: "expression" },
  // Past perfect chunks
  { english: "had already...", spanish: "ya había...", type: "expression" },
  { english: "had never... before", spanish: "nunca había... antes", type: "expression" },
  { english: "had just...", spanish: "acababa de...", type: "expression" },
  // 'Would' for habits
  { english: "I would always...", spanish: "Yo siempre...", type: "expression" },
  { english: "We would often...", spanish: "Frecuentemente...", type: "expression" },
  // Story-opener phrases
  { english: "You won't believe what happened.", spanish: "No vas a creer lo que pasó.", type: "expression" },
  { english: "Let me tell you what happened.", spanish: "Déjame contarte lo que pasó.", type: "expression" },
  { english: "It all started when...", spanish: "Todo empezó cuando...", type: "expression" },
  // Storytelling verbs
  { english: "to mention", spanish: "mencionar", type: "verb" },
  { english: "to admit", spanish: "admitir", type: "verb" },
  { english: "to explain", spanish: "explicar", type: "verb" },
  { english: "to insist", spanish: "insistir", type: "verb" },
  { english: "to realize", spanish: "darse cuenta", type: "verb" },
  { english: "to notice", spanish: "notar", type: "verb" },
  { english: "to remind", spanish: "recordar (a alguien)", type: "verb" },
];
