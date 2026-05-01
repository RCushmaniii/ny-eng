// Unit 3: "Telling Your Day" — Time markers + sequencing connectors
//
// Pedagogical arc (this is the integration unit for past simple):
// Section A — Time + sequence vocabulary in 3 waves
// Section B — Time markers in sentences (placement: start vs. end)
// Section C — Sequencing mini-stories (first / then / after that / finally)
// Section D — Boss Sentence: a full 5-event day, end to end
// Section E — Pronunciation drill: reductions in fast storytelling
// Section F — Self-test of unit vocabulary

export interface CognateWord {
  english: string;
  spanish: string;
  category: string;
  pronunciationNote?: string;
  pronunciationNoteEs?: string;
}

export interface SentenceBlock {
  label: string;
  labelEs: string;
  description: string;
  descriptionEs: string;
  sentences: {
    english: string;
    spanish: string;
    highlight?: string;
  }[];
}

export interface PronunciationDrillItem {
  word: string;
  spanishStress: string;
  englishStress: string;
  tip: string;
  tipEs: string;
}

export interface VocabItem {
  english: string;
  spanish: string;
  type: "verb" | "phrase" | "marker";
}

// ─── Section A: Time & Sequence Vocabulary (Cognate Discovery format) ────────

export const cognateWaves = {
  wave1: {
    title: "Specific Past Times — When It Happened",
    titleEs: "Tiempos Específicos del Pasado — Cuándo pasó",
    description:
      "These markers anchor a sentence in a precise past moment. The more specific your time marker, the more vivid your story.",
    descriptionEs:
      "Estos marcadores anclan una oración en un momento preciso del pasado. Mientras más específico el marcador, más vívida tu historia.",
    words: [
      {
        english: "yesterday",
        spanish: "ayer",
        category: "Specific past",
      },
      {
        english: "yesterday morning",
        spanish: "ayer en la mañana",
        category: "Specific past",
      },
      { english: "last night", spanish: "anoche", category: "Specific past" },
      { english: "this morning", spanish: "esta mañana", category: "Specific past" },
      { english: "last weekend", spanish: "el fin de semana pasado", category: "Specific past" },
      { english: "last week", spanish: "la semana pasada", category: "Specific past" },
      { english: "last month", spanish: "el mes pasado", category: "Specific past" },
      { english: "last year", spanish: "el año pasado", category: "Specific past" },
      {
        english: "two days ago",
        spanish: "hace dos días",
        category: "Specific past",
        pronunciationNote: "'Ago' is reduced to 'uh-go' in fast speech.",
        pronunciationNoteEs: "'Ago' se reduce a 'uh-go' en habla rápida.",
      },
      { english: "an hour ago", spanish: "hace una hora", category: "Specific past" },
      { english: "a few minutes ago", spanish: "hace unos minutos", category: "Specific past" },
      { english: "earlier today", spanish: "más temprano hoy", category: "Specific past" },
    ] as CognateWord[],
  },
  wave2: {
    title: "Sequencing Connectors — Story Structure",
    titleEs: "Conectores de Secuencia — Estructura narrativa",
    description:
      "These connectors organize events in time order. They turn a list of facts into a story your listener can follow.",
    descriptionEs:
      "Estos conectores organizan los eventos en orden cronológico. Convierten una lista de hechos en una historia que tu oyente puede seguir.",
    words: [
      {
        english: "first",
        spanish: "primero",
        category: "Sequence",
        pronunciationNote: "Strong R, single syllable: 'FURST'.",
        pronunciationNoteEs: "R fuerte, una sílaba: 'FURST'.",
      },
      { english: "then", spanish: "luego / entonces", category: "Sequence" },
      { english: "next", spanish: "después", category: "Sequence" },
      { english: "after that", spanish: "después de eso", category: "Sequence" },
      { english: "later", spanish: "más tarde", category: "Sequence" },
      { english: "soon after", spanish: "poco después", category: "Sequence" },
      { english: "an hour later", spanish: "una hora después", category: "Sequence" },
      {
        english: "eventually",
        spanish: "eventualmente / con el tiempo",
        category: "Sequence",
        pronunciationNote: "Five syllables: e-VEN-chu-al-ly. Stress on 'VEN'.",
        pronunciationNoteEs: "Cinco sílabas: e-VEN-chu-al-ly. Acento en 'VEN'.",
      },
      { english: "finally", spanish: "finalmente", category: "Sequence" },
      { english: "in the end", spanish: "al final", category: "Sequence" },
    ] as CognateWord[],
  },
  wave3: {
    title: "Time Relations — How Events Connect",
    titleEs: "Relaciones de Tiempo — Cómo se conectan los eventos",
    description:
      "These connect ONE event to ANOTHER in time. They're how you signal that something happened during, before, or after something else.",
    descriptionEs:
      "Estos conectan UN evento con OTRO en el tiempo. Son cómo señalas que algo pasó durante, antes, o después de otra cosa.",
    words: [
      { english: "before", spanish: "antes (de)", category: "Time relations" },
      { english: "after", spanish: "después (de)", category: "Time relations" },
      {
        english: "while",
        spanish: "mientras",
        category: "Time relations",
        pronunciationNote: "Sounds like 'WHYL'. Silent 'h' in modern English.",
        pronunciationNoteEs: "Suena como 'WHYL'. La 'h' es muda en inglés moderno.",
      },
      { english: "when", spanish: "cuando", category: "Time relations" },
      { english: "until", spanish: "hasta", category: "Time relations" },
      { english: "as soon as", spanish: "tan pronto como", category: "Time relations" },
      { english: "right after", spanish: "justo después", category: "Time relations" },
      { english: "just before", spanish: "justo antes", category: "Time relations" },
      { english: "during", spanish: "durante", category: "Time relations" },
      { english: "between", spanish: "entre", category: "Time relations" },
    ] as CognateWord[],
  },
};

// ─── Section B: Time Markers in Sentences (Placement) ────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Step 1: Time marker at the START",
    labelEs: "Paso 1: Marcador de tiempo al INICIO",
    description:
      "Putting the time first signals the moment immediately. Add a comma after the time marker. This is the most common storytelling opener.",
    descriptionEs:
      "Poner el tiempo al inicio señala el momento inmediatamente. Agrega una coma después del marcador. Este es el inicio de historia más común.",
    sentences: [
      {
        english: "Yesterday, I worked from home.",
        spanish: "Ayer, trabajé desde casa.",
        highlight: "Yesterday",
      },
      {
        english: "Last weekend, we visited my parents.",
        spanish: "El fin de semana pasado, visitamos a mis padres.",
        highlight: "Last weekend",
      },
      {
        english: "This morning, I went for a run.",
        spanish: "Esta mañana, salí a correr.",
        highlight: "This morning",
      },
      {
        english: "Two days ago, she called me.",
        spanish: "Hace dos días, ella me llamó.",
        highlight: "Two days ago",
      },
    ],
  },
  {
    label: "Step 2: Time marker at the END",
    labelEs: "Paso 2: Marcador de tiempo al FINAL",
    description:
      "Same meaning, different rhythm. Putting the time at the end emphasizes the action first, the time second. No comma needed.",
    descriptionEs:
      "Mismo significado, ritmo diferente. Poner el tiempo al final enfatiza la acción primero, el tiempo después. No necesita coma.",
    sentences: [
      {
        english: "I worked from home yesterday.",
        spanish: "Trabajé desde casa ayer.",
        highlight: "yesterday",
      },
      {
        english: "We visited my parents last weekend.",
        spanish: "Visitamos a mis padres el fin de semana pasado.",
        highlight: "last weekend",
      },
      {
        english: "She called me two days ago.",
        spanish: "Ella me llamó hace dos días.",
        highlight: "two days ago",
      },
      {
        english: "I sent the email an hour ago.",
        spanish: "Mandé el correo hace una hora.",
        highlight: "an hour ago",
      },
    ],
  },
  {
    label: "Step 3: Two time markers — when AND duration",
    labelEs: "Paso 3: Dos marcadores — cuándo Y duración",
    description:
      "Stack two time markers for richer stories: when something started + how long it lasted. Common, natural, native-sounding.",
    descriptionEs:
      "Apila dos marcadores para historias más ricas: cuándo empezó algo + cuánto duró. Común, natural, suena nativo.",
    sentences: [
      {
        english: "Yesterday morning, I worked from home until lunch.",
        spanish: "Ayer en la mañana, trabajé desde casa hasta el almuerzo.",
        highlight: "until lunch",
      },
      {
        english: "Last night, we talked for two hours.",
        spanish: "Anoche, hablamos por dos horas.",
        highlight: "for two hours",
      },
      {
        english: "On Monday, I studied from 9 to 5.",
        spanish: "El lunes, estudié de 9 a 5.",
        highlight: "from 9 to 5",
      },
      {
        english: "Last weekend, they stayed with us until Sunday.",
        spanish: "El fin de semana pasado, se quedaron con nosotros hasta el domingo.",
        highlight: "until Sunday",
      },
    ],
  },
  {
    label: "Step 4: Time + sequence in two-sentence stories",
    labelEs: "Paso 4: Tiempo + secuencia en historias de dos oraciones",
    description:
      "Now combine: time marker for sentence 1, sequence connector for sentence 2. This is the smallest unit of a real story.",
    descriptionEs:
      "Ahora combina: marcador de tiempo para la oración 1, conector de secuencia para la oración 2. Esta es la unidad más pequeña de una historia real.",
    sentences: [
      {
        english: "Yesterday, I checked my email. Then I had a long meeting.",
        spanish: "Ayer, revisé mi correo. Luego tuve una junta larga.",
        highlight: "Then",
      },
      {
        english: "Last week, I started a new project. After that, everything got busy.",
        spanish: "La semana pasada, empecé un proyecto nuevo. Después de eso, todo se puso ocupado.",
        highlight: "After that",
      },
      {
        english: "This morning, I made coffee. Later, I went for a walk.",
        spanish: "Esta mañana, hice café. Más tarde, salí a caminar.",
        highlight: "Later",
      },
      {
        english: "Two days ago, she sent me a question. I answered it eventually.",
        spanish: "Hace dos días, ella me envió una pregunta. La respondí eventualmente.",
        highlight: "eventually",
      },
    ],
  },
];

// ─── Section C: Building a Story with Sequencing Connectors ──────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "First / Then — The Two-Step Story",
    labelEs: "First / Then — La historia de dos pasos",
    description:
      "The simplest narrative pattern: one event, then the next. 'First' opens it; 'then' continues it.",
    descriptionEs:
      "El patrón narrativo más simple: un evento, luego el siguiente. 'First' lo abre; 'then' lo continúa.",
    sentences: [
      {
        english: "First, I went to the gym. Then I came home.",
        spanish: "Primero, fui al gimnasio. Luego volví a casa.",
        highlight: "First / Then",
      },
      {
        english: "First, she read the report. Then she called the team.",
        spanish: "Primero, ella leyó el reporte. Luego llamó al equipo.",
        highlight: "First / Then",
      },
      {
        english: "First, we ordered food. Then we watched a movie.",
        spanish: "Primero, ordenamos comida. Luego vimos una película.",
        highlight: "First / Then",
      },
      {
        english: "First, he finished the slides. Then he sent them to me.",
        spanish: "Primero, él terminó las diapositivas. Luego me las mandó.",
        highlight: "First / Then",
      },
    ],
  },
  {
    label: "First / Then / Finally — Three Events",
    labelEs: "First / Then / Finally — Tres eventos",
    description:
      "Three connectors, three events. 'Finally' marks the LAST event — it tells the listener your story is ending.",
    descriptionEs:
      "Tres conectores, tres eventos. 'Finally' marca el ÚLTIMO evento — le dice al oyente que tu historia está terminando.",
    sentences: [
      {
        english:
          "First, I made breakfast. Then I read the news. Finally, I started working.",
        spanish:
          "Primero, hice el desayuno. Luego leí las noticias. Finalmente, empecé a trabajar.",
        highlight: "Finally",
      },
      {
        english:
          "First, we drove to the airport. Then we waited in the lobby. Finally, the plane took off.",
        spanish:
          "Primero, manejamos al aeropuerto. Luego esperamos en el lobby. Finalmente, el avión despegó.",
        highlight: "Finally",
      },
      {
        english:
          "First, he wrote the proposal. Then he reviewed it. Finally, he sent it.",
        spanish:
          "Primero, él escribió la propuesta. Luego la revisó. Finalmente, la envió.",
        highlight: "Finally",
      },
      {
        english:
          "First, she called the client. Then she explained the issue. Finally, they agreed on a solution.",
        spanish:
          "Primero, ella llamó al cliente. Luego explicó el problema. Finalmente, acordaron una solución.",
        highlight: "Finally",
      },
    ],
  },
  {
    label: "Adding 'After that' and 'Later'",
    labelEs: "Agregando 'After that' y 'Later'",
    description:
      "Stack more connectors for richer stories. 'After that' = right after. 'Later' = some time later. They're not interchangeable — choose based on how much time passed.",
    descriptionEs:
      "Apila más conectores para historias más ricas. 'After that' = justo después. 'Later' = un tiempo después. No son intercambiables — elige según cuánto tiempo pasó.",
    sentences: [
      {
        english:
          "Yesterday morning, I had a meeting. After that, I worked on the proposal. Later, I sent it to my boss.",
        spanish:
          "Ayer en la mañana, tuve una junta. Después de eso, trabajé en la propuesta. Más tarde, se la mandé a mi jefe.",
        highlight: "After that / Later",
      },
      {
        english:
          "We arrived at the hotel. After that, we unpacked. Later, we went out for dinner.",
        spanish:
          "Llegamos al hotel. Después de eso, desempacamos. Más tarde, salimos a cenar.",
        highlight: "After that / Later",
      },
      {
        english:
          "She started her run at 7. After that, she had breakfast. Later, she got to the office.",
        spanish:
          "Empezó a correr a las 7. Después de eso, desayunó. Más tarde, llegó a la oficina.",
        highlight: "After that / Later",
      },
      {
        english:
          "First, the team brainstormed ideas. After that, they picked the best one. Later, they built the prototype.",
        spanish:
          "Primero, el equipo lluvia de ideas. Después de eso, eligieron la mejor. Más tarde, construyeron el prototipo.",
        highlight: "After that / Later",
      },
    ],
  },
  {
    label: "A Real Weekend Story — Four Events",
    labelEs: "Una historia real de fin de semana — Cuatro eventos",
    description:
      "Now you build a real story. Four events with four connectors. This is the kind of story you'd tell a friend on Monday morning.",
    descriptionEs:
      "Ahora construyes una historia real. Cuatro eventos con cuatro conectores. Es la clase de historia que le contarías a un amigo el lunes en la mañana.",
    sentences: [
      {
        english:
          "Last weekend, I drove to the coast on Saturday morning. First, we walked on the beach. Then we had lunch at a small restaurant. Finally, we drove home in the evening.",
        spanish:
          "El fin de semana pasado, manejé a la costa el sábado en la mañana. Primero, caminamos en la playa. Luego almorzamos en un restaurante pequeño. Finalmente, manejamos a casa por la tarde.",
        highlight: "Last weekend / First / Then / Finally",
      },
      {
        english:
          "Last Saturday, my friends came over. First, we cooked dinner together. After that, we watched a movie. Eventually, everyone went home.",
        spanish:
          "El sábado pasado, mis amigos vinieron a casa. Primero, cocinamos la cena juntos. Después de eso, vimos una película. Eventualmente, todos se fueron a casa.",
        highlight: "First / After that / Eventually",
      },
      {
        english:
          "Last Sunday morning, I woke up early. First, I made coffee. Then I read for an hour. Later, I called my parents.",
        spanish:
          "El domingo pasado en la mañana, me desperté temprano. Primero, hice café. Luego leí por una hora. Más tarde, llamé a mis padres.",
        highlight: "First / Then / Later",
      },
    ],
  },
];

// ─── Section D: Boss Sentence — A Full 5-Event Day (Connector Challenge) ─────

export const connectorSentences = {
  connectors: [
    {
      word: "First",
      wordEs: "Primero",
      example: "First, I made coffee.",
      exampleEs: "Primero, hice café.",
      use: "Opens a sequence. Tells the listener 'here's where the story starts'.",
      useEs: "Abre una secuencia. Le dice al oyente 'aquí empieza la historia'.",
    },
    {
      word: "Then",
      wordEs: "Luego / Entonces",
      example: "Then I checked my email.",
      exampleEs: "Luego revisé mi correo.",
      use: "The most common middle connector. Use it freely between events.",
      useEs: "El conector intermedio más común. Úsalo libremente entre eventos.",
    },
    {
      word: "After that",
      wordEs: "Después de eso",
      example: "After that, I had a video call.",
      exampleEs: "Después de eso, tuve una videollamada.",
      use: "Stronger than 'then'. Signals the next event was directly caused by the previous one.",
      useEs: "Más fuerte que 'then'. Señala que el siguiente evento fue causado directamente por el anterior.",
    },
    {
      word: "Later",
      wordEs: "Más tarde",
      example: "Later, I went out for lunch.",
      exampleEs: "Más tarde, salí a almorzar.",
      use: "Some time has passed — minutes, hours, even days. Looser than 'after that'.",
      useEs: "Pasó algo de tiempo — minutos, horas, incluso días. Más amplio que 'after that'.",
    },
    {
      word: "Finally",
      wordEs: "Finalmente",
      example: "Finally, I went to bed.",
      exampleEs: "Finalmente, me fui a dormir.",
      use: "Marks the LAST event. Strong story closer — your listener knows you're done.",
      useEs: "Marca el ÚLTIMO evento. Cierre fuerte de historia — tu oyente sabe que terminaste.",
    },
  ],
  bossSentence: {
    english:
      "Yesterday was a long day. First, I woke up at six and went for a run. Then I made breakfast and started working. After that, I had three back-to-back meetings until lunch. Later, I finished a report and sent it to my boss. Finally, I went out for dinner with a friend and got home around ten.",
    spanish:
      "Ayer fue un día largo. Primero, me desperté a las seis y salí a correr. Luego hice el desayuno y empecé a trabajar. Después de eso, tuve tres juntas seguidas hasta el almuerzo. Más tarde, terminé un reporte y se lo mandé a mi jefe. Finalmente, salí a cenar con un amigo y llegué a casa cerca de las diez.",
    explanation:
      "Six sentences. Five connectors (First / Then / After that / Later / Finally). Past simple verbs (woke up, went, made, started, had, finished, sent, got home). This is what 'telling your day' sounds like in real English.",
    explanationEs:
      "Seis oraciones. Cinco conectores (First / Then / After that / Later / Finally). Verbos en pasado simple (woke up, went, made, started, had, finished, sent, got home). Así suena 'contar tu día' en inglés real.",
  },
};

// ─── Section E: Pronunciation Lab — Reductions in Storytelling ───────────────

export const pronunciationDrills: PronunciationDrillItem[] = [
  {
    word: "ago",
    spanishStress: "A-go (full pronunciation, both syllables stressed)",
    englishStress: "uh-GO (reduced first syllable)",
    tip: "The first 'a' is reduced to 'uh'. 'Two days ago' = 'two days uh-GO'.",
    tipEs: "La primera 'a' se reduce a 'uh'. 'Two days ago' = 'two days uh-GO'.",
  },
  {
    word: "last night",
    spanishStress: "LAST NIGHT (both fully pronounced)",
    englishStress: "lasNIGHT (the 't' of 'last' merges into 'night')",
    tip: "Native speakers drop or soften the 't' in 'last' before another word. Sounds like one word: 'lasNIGHT'.",
    tipEs: "Los nativos suavizan o eliminan la 't' de 'last' antes de otra palabra. Suena como una sola palabra: 'lasNIGHT'.",
  },
  {
    word: "yesterday morning",
    spanishStress: "yes-ter-DAY mor-ning (each word separate)",
    englishStress: "YES-ter-day MOR-ning (linked, smooth)",
    tip: "Don't pause between the two words. The 'y' of 'yesterday' flows into the rest of the phrase like a single beat.",
    tipEs: "No pauses entre las dos palabras. La 'y' de 'yesterday' fluye al resto de la frase como un solo golpe.",
  },
  {
    word: "an hour ago",
    spanishStress: "an HOUR a-go (with 'h' pronounced)",
    englishStress: "uh-NOUR uh-go (silent h, all linked)",
    tip: "The 'h' in 'hour' is SILENT. So 'an hour' sounds like 'uh-NOUR'. That's why we say 'AN hour', not 'A hour'.",
    tipEs: "La 'h' en 'hour' es MUDA. Entonces 'an hour' suena como 'uh-NOUR'. Por eso decimos 'AN hour', no 'A hour'.",
  },
  {
    word: "after that",
    spanishStress: "AF-ter THAT (full pronunciation)",
    englishStress: "AF-ter-that (linked, the 'r' of 'after' connects)",
    tip: "The R of 'after' links straight into 'that'. Sounds like one word in fast speech.",
    tipEs: "La R de 'after' conecta directo con 'that'. Suena como una sola palabra en habla rápida.",
  },
  {
    word: "first",
    spanishStress: "FUR-st (two syllables, rolled R)",
    englishStress: "FURST (one syllable, curled R, sharp -st)",
    tip: "ONE syllable. The English R doesn't roll — it curls back. The 'st' at the end is sharp.",
    tipEs: "UNA sílaba. La R inglesa no vibra — se curva hacia atrás. La 'st' al final es aguda.",
  },
  {
    word: "finally",
    spanishStress: "fi-NAL-ly (Spanish stress)",
    englishStress: "FI-nuh-ly (English stress on first syllable)",
    tip: "Stress on the FIRST syllable: FI-nuh-ly. Three syllables, not four.",
    tipEs: "Acento en la PRIMERA sílaba: FI-nuh-ly. Tres sílabas, no cuatro.",
  },
  {
    word: "eventually",
    spanishStress: "e-ven-tu-AL-ly (Spanish stress on -al)",
    englishStress: "e-VEN-chu-al-ly (stress on 'VEN', 'tu' becomes 'chu')",
    tip: "Five syllables. Stress on the SECOND. The 'tu' sound becomes 'chu' in fast speech.",
    tipEs: "Cinco sílabas. Acento en la SEGUNDA. El sonido 'tu' se convierte en 'chu' en habla rápida.",
  },
];

// ─── Section F: Vocabulary List for Self-Test ────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Specific past times
  { english: "yesterday", spanish: "ayer", type: "marker" },
  { english: "yesterday morning", spanish: "ayer en la mañana", type: "marker" },
  { english: "last night", spanish: "anoche", type: "marker" },
  { english: "this morning", spanish: "esta mañana", type: "marker" },
  { english: "last weekend", spanish: "el fin de semana pasado", type: "marker" },
  { english: "last week", spanish: "la semana pasada", type: "marker" },
  { english: "last month", spanish: "el mes pasado", type: "marker" },
  { english: "last year", spanish: "el año pasado", type: "marker" },
  { english: "two days ago", spanish: "hace dos días", type: "marker" },
  { english: "an hour ago", spanish: "hace una hora", type: "marker" },
  { english: "earlier today", spanish: "más temprano hoy", type: "marker" },
  // Sequence connectors
  { english: "first", spanish: "primero", type: "marker" },
  { english: "then", spanish: "luego/entonces", type: "marker" },
  { english: "next", spanish: "después", type: "marker" },
  { english: "after that", spanish: "después de eso", type: "marker" },
  { english: "later", spanish: "más tarde", type: "marker" },
  { english: "an hour later", spanish: "una hora después", type: "marker" },
  { english: "eventually", spanish: "eventualmente", type: "marker" },
  { english: "finally", spanish: "finalmente", type: "marker" },
  { english: "in the end", spanish: "al final", type: "marker" },
  // Time relations
  { english: "before", spanish: "antes (de)", type: "marker" },
  { english: "after", spanish: "después (de)", type: "marker" },
  { english: "while", spanish: "mientras", type: "marker" },
  { english: "when", spanish: "cuando", type: "marker" },
  { english: "until", spanish: "hasta", type: "marker" },
  { english: "as soon as", spanish: "tan pronto como", type: "marker" },
  { english: "during", spanish: "durante", type: "marker" },
  // Story phrases
  { english: "I woke up at six.", spanish: "Me desperté a las seis.", type: "phrase" },
  { english: "I went for a run.", spanish: "Salí a correr.", type: "phrase" },
  { english: "I made breakfast.", spanish: "Hice el desayuno.", type: "phrase" },
  { english: "I had a meeting.", spanish: "Tuve una junta.", type: "phrase" },
  { english: "I sent a report.", spanish: "Mandé un reporte.", type: "phrase" },
  { english: "I went out for dinner.", spanish: "Salí a cenar.", type: "phrase" },
  { english: "I got home around ten.", spanish: "Llegué a casa cerca de las diez.", type: "phrase" },
  { english: "Yesterday was a long day.", spanish: "Ayer fue un día largo.", type: "phrase" },
];
