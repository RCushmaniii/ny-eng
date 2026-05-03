// Unit 8: "Daily Life" — Frequency Adverbs and Routines
//
// Pedagogical arc:
// Section A — 3 waves: frequency adverbs, daily routine verbs, time/period expressions
// Section B — Position rules: before main verb, after BE, between aux and main
// Section C — Frequency phrases (every day, once a week, on Mondays)
// Section D — Boss Sentence: a real typical week
// Section E — Pronunciation: 'usually' (3 syllables), silent t in 'often', 'always'
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

// ─── Section A: Frequency Adverbs, Routine Verbs, Time Expressions ───────────

export const cognateWaves = {
  wave1: {
    title: "The Frequency Adverbs — From Always to Never",
    titleEs: "Los Adverbios de Frecuencia — De Always a Never",
    description:
      "These seven adverbs cover the full scale: 100% always → 0% never. Each one has a position rule that almost every Spanish speaker gets wrong. Memorize the meaning first, then drill the position in Section B.",
    descriptionEs:
      "Estos siete adverbios cubren toda la escala: 100% always → 0% never. Cada uno tiene una regla de posición que casi todos los hispanohablantes equivocan. Memoriza el significado primero, luego practica la posición en la Sección B.",
    words: [
      { english: "always (100%)", spanish: "siempre", category: "Frequency" },
      { english: "usually (~90%)", spanish: "usualmente / por lo general", category: "Frequency" },
      { english: "often (~70%)", spanish: "a menudo", category: "Frequency",
        pronunciationNote: "The 't' is often SILENT — sounds like 'OFF-en'. Both 'OFF-en' and 'OFF-ten' are accepted.",
        pronunciationNoteEs: "La 't' suele ser MUDA — suena como 'OFF-en'. Ambas 'OFF-en' y 'OFF-ten' son aceptadas.",
      },
      { english: "sometimes (~50%)", spanish: "a veces", category: "Frequency" },
      { english: "rarely (~10%)", spanish: "raramente / casi nunca", category: "Frequency" },
      { english: "hardly ever (~5%)", spanish: "casi nunca", category: "Frequency" },
      {
        english: "never (0%)",
        spanish: "nunca",
        category: "Frequency",
        pronunciationNote: "Sounds like 'NEH-vur'. The first 'e' is short, like 'pen'.",
        pronunciationNoteEs: "Suena como 'NEH-vur'. La primera 'e' es corta, como 'pen'.",
      },
    ] as CognateWord[],
  },
  wave2: {
    title: "Daily Routine Verbs — What People Actually Do",
    titleEs: "Verbos de Rutina Diaria — Lo Que la Gente Realmente Hace",
    description:
      "The verbs that describe a real day: from waking up to going to bed. Learn these as a sequence and you can describe any day of your life.",
    descriptionEs:
      "Los verbos que describen un día real: de despertar a acostarte. Apréndelos en secuencia y puedes describir cualquier día de tu vida.",
    words: [
      { english: "wake up", spanish: "despertarse", category: "Routine" },
      {
        english: "get up",
        spanish: "levantarse",
        category: "Routine",
        pronunciationNote: "Different from 'wake up'. 'Wake up' = open eyes. 'Get up' = leave the bed.",
        pronunciationNoteEs: "Diferente de 'wake up'. 'Wake up' = abrir los ojos. 'Get up' = salir de la cama.",
      },
      { english: "take a shower", spanish: "ducharse", category: "Routine" },
      { english: "have breakfast", spanish: "desayunar", category: "Routine" },
      {
        english: "commute",
        spanish: "trasladarse al trabajo",
        category: "Routine",
        pronunciationNote: "Both noun and verb. 'My commute is long' / 'I commute by train'.",
        pronunciationNoteEs: "Sustantivo y verbo. 'My commute is long' / 'I commute by train'.",
      },
      { english: "start work", spanish: "empezar a trabajar", category: "Routine" },
      { english: "have lunch", spanish: "almorzar", category: "Routine" },
      { english: "finish work", spanish: "terminar de trabajar", category: "Routine" },
      { english: "exercise", spanish: "hacer ejercicio", category: "Routine" },
      { english: "have dinner", spanish: "cenar", category: "Routine" },
      { english: "relax", spanish: "relajarse", category: "Routine" },
      { english: "go to bed", spanish: "acostarse", category: "Routine" },
    ] as CognateWord[],
  },
  wave3: {
    title: "Time Period Expressions — When and How Often",
    titleEs: "Expresiones de Período — Cuándo y Con Qué Frecuencia",
    description:
      "While frequency adverbs (always, usually) go BEFORE the verb, these phrases go at the END or BEGINNING of the sentence. They tell you the period: every day, on Mondays, twice a week.",
    descriptionEs:
      "Mientras los adverbios de frecuencia (always, usually) van ANTES del verbo, estas frases van al FINAL o INICIO de la oración. Te dicen el período: every day, on Mondays, twice a week.",
    words: [
      { english: "every day", spanish: "todos los días", category: "Period" },
      { english: "every week", spanish: "cada semana", category: "Period" },
      { english: "every weekend", spanish: "cada fin de semana", category: "Period" },
      { english: "once a week", spanish: "una vez a la semana", category: "Period" },
      { english: "twice a month", spanish: "dos veces al mes", category: "Period" },
      { english: "three times a year", spanish: "tres veces al año", category: "Period" },
      { english: "on Mondays", spanish: "los lunes", category: "Period" },
      { english: "on weekends", spanish: "los fines de semana", category: "Period" },
      { english: "in the morning", spanish: "en la mañana", category: "Period" },
      { english: "at night", spanish: "en la noche", category: "Period" },
      { english: "after work", spanish: "después del trabajo", category: "Period" },
      { english: "before bed", spanish: "antes de dormir", category: "Period" },
    ] as CognateWord[],
  },
};

// ─── Section B: Position Rules for Frequency Adverbs ─────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "Step 1: BEFORE the main verb (the most common rule)",
    labelEs: "Paso 1: ANTES del verbo principal (la regla más común)",
    description:
      "With ALL regular verbs (work, eat, drink, go, etc.), the frequency adverb goes BETWEEN the subject and the verb. NOT at the end like in Spanish. 'I always work' — never 'I work always'.",
    descriptionEs:
      "Con TODOS los verbos regulares (work, eat, drink, go, etc.), el adverbio de frecuencia va ENTRE el sujeto y el verbo. NO al final como en español. 'I always work' — nunca 'I work always'.",
    sentences: [
      { english: "I always drink coffee in the morning.", spanish: "Siempre tomo café en la mañana.", highlight: "always" },
      { english: "She usually takes the subway to work.", spanish: "Ella usualmente toma el metro al trabajo.", highlight: "usually" },
      { english: "We often have dinner together.", spanish: "A menudo cenamos juntos.", highlight: "often" },
      { english: "He never eats breakfast.", spanish: "Él nunca desayuna.", highlight: "never" },
    ],
  },
  {
    label: "Step 2: AFTER the verb 'BE' (am, is, are, was, were)",
    labelEs: "Paso 2: DESPUÉS del verbo 'BE' (am, is, are, was, were)",
    description:
      "When the verb is BE, the rule FLIPS — adverb goes AFTER. 'She is always late' — NOT 'She always is late'. This is the #1 trap for Spanish speakers.",
    descriptionEs:
      "Cuando el verbo es BE, la regla SE INVIERTE — el adverbio va DESPUÉS. 'She is always late' — NO 'She always is late'. Este es el error #1 de los hispanohablantes.",
    sentences: [
      { english: "She is usually late for meetings.", spanish: "Ella usualmente llega tarde a las juntas.", highlight: "is usually" },
      { english: "I am always tired on Mondays.", spanish: "Siempre estoy cansado los lunes.", highlight: "am always" },
      { english: "They are never on time.", spanish: "Ellos nunca llegan a tiempo.", highlight: "are never" },
      { english: "He was often confused.", spanish: "Él a menudo estaba confundido.", highlight: "was often" },
    ],
  },
  {
    label: "Step 3: BETWEEN auxiliary and main verb",
    labelEs: "Paso 3: ENTRE el auxiliar y el verbo principal",
    description:
      "With auxiliary verbs (have, can, will, should, would, do/does/did), the adverb goes BETWEEN the auxiliary and the main verb. 'I have never been there' — NOT 'I never have been there'.",
    descriptionEs:
      "Con verbos auxiliares (have, can, will, should, would, do/does/did), el adverbio va ENTRE el auxiliar y el verbo principal. 'I have never been there' — NO 'I never have been there'.",
    sentences: [
      { english: "I have never been to Paris.", spanish: "Nunca he ido a París.", highlight: "have never been" },
      { english: "She can usually speak in meetings.", spanish: "Ella usualmente puede hablar en juntas.", highlight: "can usually speak" },
      { english: "We will always remember this day.", spanish: "Siempre recordaremos este día.", highlight: "will always remember" },
      { english: "He doesn't often call his parents.", spanish: "Él no llama a sus padres a menudo.", highlight: "doesn't often call" },
    ],
  },
  {
    label: "Step 4: 'Sometimes' and 'usually' — the flexible ones",
    labelEs: "Paso 4: 'Sometimes' y 'usually' — los flexibles",
    description:
      "'Sometimes' and 'usually' can ALSO start the sentence for emphasis or variety. 'Always' and 'never' CAN'T do this in normal speech. 'Sometimes I work late' is natural; 'Always I work' is wrong.",
    descriptionEs:
      "'Sometimes' y 'usually' TAMBIÉN pueden iniciar la oración para énfasis o variedad. 'Always' y 'never' NO pueden hacer esto en habla normal. 'Sometimes I work late' es natural; 'Always I work' es incorrecto.",
    sentences: [
      { english: "Sometimes I work late on Fridays.", spanish: "A veces trabajo tarde los viernes.", highlight: "Sometimes (start)" },
      { english: "Usually we eat at home, but tonight we're going out.", spanish: "Usualmente comemos en casa, pero esta noche salimos.", highlight: "Usually (start)" },
      { english: "I sometimes work from a coffee shop.", spanish: "A veces trabajo desde una cafetería.", highlight: "sometimes (middle)" },
      { english: "We usually have lunch at noon.", spanish: "Usualmente almorzamos al mediodía.", highlight: "usually (middle)" },
    ],
  },
];

// ─── Section C: Frequency Phrases — Time Periods ─────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "'Every X' — Every day, every week, every Monday",
    labelEs: "'Every X' — Every day, every week, every Monday",
    description:
      "'Every + period' is the simplest way to say 100% frequency. Goes at the END of the sentence (or sometimes the start). NEVER use 'all the days' — say 'every day'.",
    descriptionEs:
      "'Every + período' es la forma más simple de decir frecuencia 100%. Va al FINAL de la oración (o a veces al inicio). NUNCA digas 'all the days' — di 'every day'.",
    sentences: [
      { english: "I drink coffee every morning.", spanish: "Tomo café cada mañana.", highlight: "every morning" },
      { english: "She goes to the gym every other day.", spanish: "Ella va al gimnasio día de por medio.", highlight: "every other day" },
      { english: "We have a team meeting every Tuesday.", spanish: "Tenemos junta de equipo cada martes.", highlight: "every Tuesday" },
      { english: "He calls his mother every week.", spanish: "Él llama a su mamá cada semana.", highlight: "every week" },
    ],
  },
  {
    label: "'Once / twice / three times a [period]'",
    labelEs: "'Once / twice / three times a [período]'",
    description:
      "Numerical frequency. 'Once' = one time. 'Twice' = two times. After two, switch to 'X times': three times, four times. End of sentence.",
    descriptionEs:
      "Frecuencia numérica. 'Once' = una vez. 'Twice' = dos veces. Después de dos, cambia a 'X times': three times, four times. Al final de la oración.",
    sentences: [
      { english: "I exercise three times a week.", spanish: "Hago ejercicio tres veces a la semana.", highlight: "three times a week" },
      { english: "We meet once a month.", spanish: "Nos reunimos una vez al mes.", highlight: "once a month" },
      { english: "She travels for work twice a year.", spanish: "Ella viaja por trabajo dos veces al año.", highlight: "twice a year" },
      { english: "I check my email about ten times a day.", spanish: "Reviso mi correo unas diez veces al día.", highlight: "ten times a day" },
    ],
  },
  {
    label: "'On + day' / 'In + part of day'",
    labelEs: "'On + día' / 'In + parte del día'",
    description:
      "'ON' for days: on Monday, on weekends, on weekdays. 'IN' for parts of the day: in the morning, in the afternoon. EXCEPTION: 'AT night', 'AT lunch'.",
    descriptionEs:
      "'ON' para días: on Monday, on weekends, on weekdays. 'IN' para partes del día: in the morning, in the afternoon. EXCEPCIÓN: 'AT night', 'AT lunch'.",
    sentences: [
      { english: "I usually go running in the morning.", spanish: "Usualmente salgo a correr en la mañana.", highlight: "in the morning" },
      { english: "We don't work on weekends.", spanish: "No trabajamos los fines de semana.", highlight: "on weekends" },
      { english: "She studies English at night.", spanish: "Ella estudia inglés en la noche.", highlight: "at night" },
      { english: "Our team meets on Tuesdays and Thursdays.", spanish: "Nuestro equipo se reúne los martes y jueves.", highlight: "on Tuesdays" },
    ],
  },
  {
    label: "'How often' — Asking and Answering",
    labelEs: "'How often' — Preguntar y Responder",
    description:
      "'How often do you…?' is the question. The answer can be a frequency adverb (usually, sometimes) OR a phrase (every day, twice a week). Both are correct.",
    descriptionEs:
      "'How often do you…?' es la pregunta. La respuesta puede ser un adverbio de frecuencia (usually, sometimes) O una frase (every day, twice a week). Ambas son correctas.",
    sentences: [
      { english: "How often do you exercise? — I usually exercise three times a week.", spanish: "¿Con qué frecuencia haces ejercicio? — Usualmente hago ejercicio tres veces a la semana.", highlight: "How often" },
      { english: "How often does she travel? — She rarely travels.", spanish: "¿Con qué frecuencia viaja ella? — Ella casi nunca viaja.", highlight: "How often" },
      { english: "How often do you check email? — Every hour.", spanish: "¿Con qué frecuencia revisas el correo? — Cada hora.", highlight: "How often" },
      { english: "How often do you eat out? — About twice a month.", spanish: "¿Con qué frecuencia comes fuera? — Unas dos veces al mes.", highlight: "How often" },
    ],
  },
];

// ─── Section D: Boss Sentence — A Typical Week (Connector Challenge) ─────────

export const connectorSentences = {
  connectors: [
    {
      word: "usually",
      wordEs: "usualmente",
      example: "I usually wake up at 6:30.",
      exampleEs: "Usualmente me despierto a las 6:30.",
      use: "Goes BEFORE main verbs ('I usually wake up'). Means roughly 90% — your default behavior.",
      useEs: "Va ANTES de verbos principales ('I usually wake up'). Significa ~90% — tu comportamiento por defecto.",
    },
    {
      word: "always",
      wordEs: "siempre",
      example: "I always drink coffee first.",
      exampleEs: "Siempre tomo café primero.",
      use: "100%. Goes BEFORE main verbs, AFTER 'be'. NEVER at the end of the sentence.",
      useEs: "100%. Va ANTES de verbos principales, DESPUÉS de 'be'. NUNCA al final de la oración.",
    },
    {
      word: "every day",
      wordEs: "cada día",
      example: "I check my email every day.",
      exampleEs: "Reviso mi correo cada día.",
      use: "End-of-sentence frequency phrase. Same meaning as 'always' for repeated actions.",
      useEs: "Frase de frecuencia al final de la oración. Mismo significado que 'always' para acciones repetidas.",
    },
    {
      word: "three times a week",
      wordEs: "tres veces a la semana",
      example: "I exercise three times a week.",
      exampleEs: "Hago ejercicio tres veces a la semana.",
      use: "Numerical frequency. Goes at the end. After 'twice', switch to 'X times'.",
      useEs: "Frecuencia numérica. Va al final. Después de 'twice', cambia a 'X times'.",
    },
    {
      word: "sometimes",
      wordEs: "a veces",
      example: "Sometimes I work from a coffee shop.",
      exampleEs: "A veces trabajo desde una cafetería.",
      use: "~50%. The most flexible — can start the sentence OR go before the verb.",
      useEs: "~50%. El más flexible — puede iniciar la oración O ir antes del verbo.",
    },
    {
      word: "rarely",
      wordEs: "casi nunca",
      example: "I rarely watch TV.",
      exampleEs: "Casi nunca veo televisión.",
      use: "~10%. Goes BEFORE the main verb. Stronger than 'sometimes', weaker than 'never'.",
      useEs: "~10%. Va ANTES del verbo principal. Más fuerte que 'sometimes', más débil que 'never'.",
    },
  ],
  bossSentence: {
    english:
      "I usually wake up at 6:30, and I always drink coffee first. I check my email every day before work, and I exercise three times a week. Sometimes I work from a coffee shop, but I rarely work on weekends. My team has a meeting every Monday morning, and we never start late.",
    spanish:
      "Usualmente me despierto a las 6:30, y siempre tomo café primero. Reviso mi correo cada día antes del trabajo, y hago ejercicio tres veces a la semana. A veces trabajo desde una cafetería, pero casi nunca trabajo los fines de semana. Mi equipo tiene una junta cada lunes en la mañana, y nunca empezamos tarde.",
    explanation:
      "Six frequency expressions, six different positions: 'usually' before main verb, 'always' before main verb, 'every day' at end, 'three times a week' at end, 'sometimes' at start, 'rarely' before main verb, 'every Monday morning' at end, 'never' before main verb. This is what natural daily-life talk sounds like.",
    explanationEs:
      "Seis expresiones de frecuencia, seis posiciones diferentes: 'usually' antes del verbo principal, 'always' antes del verbo principal, 'every day' al final, 'three times a week' al final, 'sometimes' al inicio, 'rarely' antes del verbo principal, 'every Monday morning' al final, 'never' antes del verbo principal. Así suena hablar de la vida diaria de forma natural.",
  },
};

// ─── Section E: Pronunciation Lab — Frequency Adverb Sounds ──────────────────

export const pronunciationDrills: PronunciationDrillItem[] = [
  {
    word: "always",
    spanishStress: "AL-WAYS (Spanish vowels)",
    englishStress: "ALL-wayz (the 'a' is the 'aw' sound, like 'ball')",
    tip: "First syllable sounds like 'ALL'. Second syllable rhymes with 'ways'. The final 's' sounds like 'z'.",
    tipEs: "La primera sílaba suena como 'ALL'. La segunda rima con 'ways'. La 's' final suena como 'z'.",
  },
  {
    word: "usually",
    spanishStress: "U-SUAL-LY (3 syllables, Spanish vowels)",
    englishStress: "YOO-zhuh-lee (3 syllables, soft 'zh' middle)",
    tip: "Three syllables: YOO-zhuh-lee. The middle is a soft 'zh' (like the French 'j' in 'bonjour'). NOT 'oo-soo-AL-ly'.",
    tipEs: "Tres sílabas: YOO-zhuh-lee. La parte media es 'zh' suave (como 'j' francesa en 'bonjour'). NO 'oo-soo-AL-ly'.",
  },
  {
    word: "often",
    spanishStress: "OF-TEN (Spanish 'o' and clear 't')",
    englishStress: "OFF-en (silent 't' for most speakers)",
    tip: "Most Americans drop the 't': 'OFF-en'. Both 'OFF-en' and 'OFF-ten' are correct. The 'o' sounds like 'aw' or 'ah'.",
    tipEs: "La mayoría de americanos quita la 't': 'OFF-en'. Tanto 'OFF-en' como 'OFF-ten' son correctos. La 'o' suena como 'aw' o 'ah'.",
  },
  {
    word: "sometimes",
    spanishStress: "SOME-TIMES (Spanish vowels)",
    englishStress: "SUM-tymez (rhymes with 'sum' + 'times')",
    tip: "First part rhymes with the math word 'sum'. Second part is 'times' with a 'z' sound at the end.",
    tipEs: "La primera parte rima con 'sum' (matemática). La segunda es 'times' con sonido 'z' al final.",
  },
  {
    word: "rarely",
    spanishStress: "RA-RE-LY (Spanish 'a' and rolled 'r')",
    englishStress: "RAIR-lee (American 'r', 2 syllables)",
    tip: "First syllable rhymes with 'air'. American 'r' — pulled back, NOT rolled. Two syllables only.",
    tipEs: "La primera sílaba rima con 'air'. 'r' americana — se retrae, NO se rueda. Solo dos sílabas.",
  },
  {
    word: "never",
    spanishStress: "NE-VER (Spanish 'e' and rolled 'r')",
    englishStress: "NEH-vur (short 'e', soft American 'r')",
    tip: "Short 'e' like 'pen'. Final 'r' is soft American 'r'. Two syllables: NEH-vur.",
    tipEs: "'e' corta como 'pen'. La 'r' final es 'r' americana suave. Dos sílabas: NEH-vur.",
  },
  {
    word: "hardly ever",
    spanishStress: "HARD-LY E-VER (4 distinct syllables)",
    englishStress: "HARD-lee-EV-ur (linked, almost 3 beats)",
    tip: "The 'y' of 'hardly' links to the 'e' of 'ever' — sounds like one phrase: 'HARD-lee-EV-ur'.",
    tipEs: "La 'y' de 'hardly' se enlaza con la 'e' de 'ever' — suena como una frase: 'HARD-lee-EV-ur'.",
  },
  {
    word: "every day",
    spanishStress: "E-VE-RY DAY (4 syllables)",
    englishStress: "EV-ree-DAY (3 syllables, middle 'e' drops)",
    tip: "The middle 'e' often DROPS in fast speech: 'EV-ree' instead of 'EV-er-ee'. Then 'DAY' is stressed.",
    tipEs: "La 'e' del medio a menudo DESAPARECE en habla rápida: 'EV-ree' en vez de 'EV-er-ee'. Luego 'DAY' acentuado.",
  },
];

// ─── Section F: Vocabulary List for Self-Test ────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Frequency adverbs
  { english: "always", spanish: "siempre", type: "marker" },
  { english: "usually", spanish: "usualmente", type: "marker" },
  { english: "often", spanish: "a menudo", type: "marker" },
  { english: "sometimes", spanish: "a veces", type: "marker" },
  { english: "rarely", spanish: "casi nunca", type: "marker" },
  { english: "hardly ever", spanish: "casi nunca", type: "marker" },
  { english: "never", spanish: "nunca", type: "marker" },
  // Routine verbs
  { english: "wake up", spanish: "despertarse", type: "verb" },
  { english: "get up", spanish: "levantarse", type: "verb" },
  { english: "take a shower", spanish: "ducharse", type: "verb" },
  { english: "have breakfast", spanish: "desayunar", type: "verb" },
  { english: "commute", spanish: "trasladarse al trabajo", type: "verb" },
  { english: "have lunch", spanish: "almorzar", type: "verb" },
  { english: "finish work", spanish: "terminar de trabajar", type: "verb" },
  { english: "exercise", spanish: "hacer ejercicio", type: "verb" },
  { english: "have dinner", spanish: "cenar", type: "verb" },
  { english: "go to bed", spanish: "acostarse", type: "verb" },
  // Time period expressions
  { english: "every day", spanish: "todos los días", type: "marker" },
  { english: "every weekend", spanish: "cada fin de semana", type: "marker" },
  { english: "once a week", spanish: "una vez a la semana", type: "marker" },
  { english: "twice a month", spanish: "dos veces al mes", type: "marker" },
  { english: "three times a year", spanish: "tres veces al año", type: "marker" },
  { english: "on Mondays", spanish: "los lunes", type: "marker" },
  { english: "on weekends", spanish: "los fines de semana", type: "marker" },
  { english: "in the morning", spanish: "en la mañana", type: "marker" },
  { english: "at night", spanish: "en la noche", type: "marker" },
  { english: "after work", spanish: "después del trabajo", type: "marker" },
  // Useful phrases
  { english: "I always drink coffee.", spanish: "Siempre tomo café.", type: "phrase" },
  { english: "She is usually late.", spanish: "Ella usualmente llega tarde.", type: "phrase" },
  { english: "We often have dinner together.", spanish: "A menudo cenamos juntos.", type: "phrase" },
  { english: "He never eats breakfast.", spanish: "Él nunca desayuna.", type: "phrase" },
  { english: "I have never been to Paris.", spanish: "Nunca he ido a París.", type: "phrase" },
  { english: "I exercise three times a week.", spanish: "Hago ejercicio tres veces a la semana.", type: "phrase" },
  { english: "How often do you travel?", spanish: "¿Con qué frecuencia viajas?", type: "phrase" },
  { english: "Sometimes I work late.", spanish: "A veces trabajo tarde.", type: "phrase" },
];
