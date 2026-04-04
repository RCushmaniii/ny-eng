// Unit 7: "Together" — Full course content

import type { CognateWord, SentenceBlock, PronunciationDrill, VocabItem } from "./unit-1";

// ─── Section A: Cognate Discovery ────────────────────────────────────────────

export const cognateWaves = {
  wave1: {
    title: "The -able Pattern (Part 1)",
    titleEs: "El Patrón -able (Parte 1)",
    description:
      "Spanish -able stays -able in English. This is the BIGGEST cognate category — over 80 words. You already know all of them.",
    descriptionEs:
      "El español -able se mantiene -able en inglés. Esta es la categoría de cognados MAS GRANDE — más de 80 palabras. Ya las conoces todas.",
    words: [
      {
        english: "comfortable",
        spanish: "confortable",
        category: "-able",
        pronunciationNote: "CUMF-ter-bul — only THREE syllables, not four",
        pronunciationNoteEs: "CUMF-ter-bul — solo TRES sílabas, no cuatro",
      },
      { english: "probable", spanish: "probable", category: "-able" },
      { english: "favorable", spanish: "favorable", category: "-able" },
      { english: "adorable", spanish: "adorable", category: "-able" },
      { english: "considerable", spanish: "considerable", category: "-able" },
      { english: "vulnerable", spanish: "vulnerable", category: "-able" },
      {
        english: "reasonable",
        spanish: "razonable",
        category: "-able",
        pronunciationNote: "REE-zun-uh-bul — the 'ea' sounds like 'ee'",
        pronunciationNoteEs: "REE-zun-uh-bul — el 'ea' suena como 'ii'",
      },
      { english: "admirable", spanish: "admirable", category: "-able" },
      { english: "tolerable", spanish: "tolerable", category: "-able" },
      { english: "comparable", spanish: "comparable", category: "-able" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The -able Pattern (Part 2)",
    titleEs: "El Patrón -able (Parte 2)",
    description:
      "More -able words. Notice how the meaning is always obvious from the Spanish. Your vocabulary is exploding.",
    descriptionEs:
      "Más palabras con -able. Nota cómo el significado siempre es obvio desde el español. Tu vocabulario está explotando.",
    words: [
      {
        english: "remarkable",
        spanish: "remarcable",
        category: "-able",
        pronunciationNote: "re-MAR-kuh-bul — stress on SECOND syllable",
        pronunciationNoteEs: "re-MAR-kuh-bul — acento en la SEGUNDA sílaba",
      },
      { english: "lamentable", spanish: "lamentable", category: "-able" },
      { english: "formidable", spanish: "formidable", category: "-able" },
      { english: "inevitable", spanish: "inevitable", category: "-able" },
      { english: "interminable", spanish: "interminable", category: "-able" },
      { english: "impeccable", spanish: "impecable", category: "-able" },
      { english: "applicable", spanish: "aplicable", category: "-able" },
      {
        english: "memorable",
        spanish: "memorable",
        category: "-able",
        pronunciationNote: "MEM-or-uh-bul — stress on FIRST syllable",
        pronunciationNoteEs: "MEM-or-uh-bul — acento en la PRIMERA sílaba",
      },
      { english: "miserable", spanish: "miserable", category: "-able" },
      { english: "respectable", spanish: "respetable", category: "-able" },
    ] as CognateWord[],
  },
  wave3: {
    title: "The -able Pattern (Part 3)",
    titleEs: "El Patrón -able (Parte 3)",
    description:
      "The final wave. After this, you own the biggest cognate family in both languages. Over 80 words — all yours.",
    descriptionEs:
      "La ola final. Después de esto, dominas la familia de cognados más grande en ambos idiomas. Más de 80 palabras — todas tuyas.",
    words: [
      { english: "acceptable", spanish: "aceptable", category: "-able" },
      { english: "adaptable", spanish: "adaptable", category: "-able" },
      {
        english: "available",
        spanish: "disponible",
        category: "-able",
        pronunciationNote: "uh-VAY-luh-bul — this one doesn't translate directly but it's essential",
        pronunciationNoteEs: "uh-VAY-luh-bul — esta no se traduce directamente pero es esencial",
      },
      { english: "capable", spanish: "capaz", category: "-able" },
      { english: "negotiable", spanish: "negociable", category: "-able" },
      { english: "notable", spanish: "notable", category: "-able" },
      { english: "profitable", spanish: "profitable", category: "-able" },
      { english: "stable", spanish: "estable", category: "-able" },
      { english: "variable", spanish: "variable", category: "-able" },
      {
        english: "vegetable",
        spanish: "vegetal",
        category: "-able",
        pronunciationNote: "VEJ-tuh-bul — three syllables, the 'ge' sounds like 'j'",
        pronunciationNoteEs: "VEJ-tuh-bul — tres sílabas, la 'ge' suena como 'j'",
      },
    ] as CognateWord[],
  },
};

// ─── Section B: We can / We want / We have to ──────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "We can / We can't",
    labelEs: "Podemos / No podemos",
    description:
      "'We can' works exactly like 'I can' — just swap the subject. 'We can go' = podemos ir. No conjugation changes needed.",
    descriptionEs:
      "'We can' funciona exactamente como 'I can' — solo cambia el sujeto. 'We can go' = podemos ir. No se necesitan cambios de conjugación.",
    sentences: [
      {
        english: "We can go out tonight.",
        spanish: "Podemos salir esta noche.",
        highlight: "We can",
      },
      {
        english: "We can do it together.",
        spanish: "Podemos hacerlo juntos.",
        highlight: "together",
      },
      {
        english: "We can't go out tonight because we have to study.",
        spanish: "No podemos salir esta noche porque tenemos que estudiar.",
        highlight: "can't",
      },
      {
        english: "We can see the problem but we can't do anything about it.",
        spanish: "Podemos ver el problema pero no podemos hacer nada al respecto.",
      },
      {
        english: "We can go with them if you want.",
        spanish: "Podemos ir con ellos si quieres.",
        highlight: "with them",
      },
    ],
  },
  {
    label: "We want / We don't want",
    labelEs: "Queremos / No queremos",
    description:
      "'We want' = queremos. Notice: 'want' doesn't change for 'we' — only 'he/she wants' adds the S.",
    descriptionEs:
      "'We want' = queremos. Nota: 'want' no cambia para 'we' — solo 'he/she wants' agrega la S.",
    sentences: [
      {
        english: "We want to have dinner here tonight.",
        spanish: "Queremos cenar aquí esta noche.",
        highlight: "We want",
      },
      {
        english: "We want to know what happened last night.",
        spanish: "Queremos saber qué pasó anoche.",
      },
      {
        english: "We don't want to wait because it's already late.",
        spanish: "No queremos esperar porque ya es tarde.",
        highlight: "don't want",
      },
      {
        english: "We want to go but nobody wants to go with us.",
        spanish: "Queremos ir pero nadie quiere ir con nosotros.",
        highlight: "with us",
      },
      {
        english: "We want to tell you something important.",
        spanish: "Queremos decirte algo importante.",
      },
    ],
  },
  {
    label: "We have to / We don't have to",
    labelEs: "Tenemos que / No tenemos que",
    description:
      "'We have to' = tenemos que (obligation). 'We don't have to' = no es necesario — different from 'we can't' (impossible) or 'we shouldn't' (bad idea).",
    descriptionEs:
      "'We have to' = tenemos que (obligación). 'We don't have to' = no es necesario — diferente de 'we can't' (imposible) o 'we shouldn't' (mala idea).",
    sentences: [
      {
        english: "We have to be there at nine.",
        spanish: "Tenemos que estar allí a las nueve.",
        highlight: "We have to",
      },
      {
        english: "We have to work every day.",
        spanish: "Tenemos que trabajar todos los días.",
        highlight: "every day",
      },
      {
        english: "We don't have to go if you don't want to.",
        spanish: "No tenemos que ir si no quieres.",
        highlight: "don't have to",
      },
      {
        english: "We have to tell someone about the problem.",
        spanish: "Tenemos que decirle a alguien sobre el problema.",
      },
      {
        english: "We don't have to wait all day because he should be able to do it now.",
        spanish: "No tenemos que esperar todo el día porque él debería poder hacerlo ahora.",
        highlight: "all day",
      },
    ],
  },
];

// ─── Section C: We should / We would like / We just ────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "We should / We shouldn't",
    labelEs: "Deberíamos / No deberíamos",
    description:
      "'We should' combines advice with 'we'. It suggests what's a good idea for the group. 'We should go' = it would be good if we go.",
    descriptionEs:
      "'We should' combina consejo con 'nosotros'. Sugiere qué es buena idea para el grupo. 'We should go' = sería bueno que vayamos.",
    sentences: [
      {
        english: "We should go out tonight.",
        spanish: "Deberíamos salir esta noche.",
        highlight: "We should",
      },
      {
        english: "We should tell everyone about the problem.",
        spanish: "Deberíamos decirles a todos sobre el problema.",
      },
      {
        english: "We shouldn't wait because it's already too late.",
        spanish: "No deberíamos esperar porque ya es demasiado tarde.",
        highlight: "shouldn't",
      },
      {
        english: "We should be able to do it together.",
        spanish: "Deberíamos poder hacerlo juntos.",
        highlight: "be able to",
      },
      {
        english: "We shouldn't buy it because it's too expensive for us.",
        spanish: "No deberíamos comprarlo porque es demasiado caro para nosotros.",
        highlight: "for us",
      },
    ],
  },
  {
    label: "We would like",
    labelEs: "Nos gustaría",
    description:
      "'We would like' is more polite than 'we want'. Use it in restaurants, meetings, and formal situations. 'We would like to order' = quisiéramos pedir.",
    descriptionEs:
      "'We would like' es más cortés que 'we want'. Úsalo en restaurantes, reuniones y situaciones formales. 'We would like to order' = quisiéramos pedir.",
    sentences: [
      {
        english: "We would like to have dinner here.",
        spanish: "Nos gustaría cenar aquí.",
        highlight: "We would like",
      },
      {
        english: "We would like to know the truth about what happened.",
        spanish: "Nos gustaría saber la verdad sobre lo que pasó.",
      },
      {
        english: "We would like to go with you if it's possible.",
        spanish: "Nos gustaría ir contigo si es posible.",
        highlight: "with you",
      },
      {
        english: "We wouldn't like to wait all day.",
        spanish: "No nos gustaría esperar todo el día.",
        highlight: "wouldn't",
      },
      {
        english: "We would like someone to explain the reason why.",
        spanish: "Nos gustaría que alguien explicara el porqué.",
      },
    ],
  },
  {
    label: "We just (+ verb)",
    labelEs: "Acabamos de (+ verbo)",
    description:
      "'We just' describes what we RECENTLY did — minutes or hours ago. 'We just arrived' = acabamos de llegar. Combine with everything you've learned.",
    descriptionEs:
      "'We just' describe lo que RECIENTEMENTE hicimos — hace minutos u horas. 'We just arrived' = acabamos de llegar. Combínalo con todo lo que has aprendido.",
    sentences: [
      {
        english: "We just arrived.",
        spanish: "Acabamos de llegar.",
        highlight: "We just",
      },
      {
        english: "We just found out the truth about what happened.",
        spanish: "Acabamos de descubrir la verdad sobre lo que pasó.",
      },
      {
        english: "We just had dinner so we don't want to eat again.",
        spanish: "Acabamos de cenar así que no queremos comer de nuevo.",
        highlight: "again",
      },
      {
        english: "We just talked to him and he can't be here tomorrow.",
        spanish: "Acabamos de hablar con él y no puede estar aquí mañana.",
      },
      {
        english: "We just saw her at the party and she told us everything.",
        spanish: "Acabamos de verla en la fiesta y nos contó todo.",
        highlight: "everything",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "Planning Together",
  titleEs: "Planificando Juntos",
  description:
    "Words for making plans, talking about routines, and doing things as a group — together, every day, all day, again, there.",
  descriptionEs:
    "Palabras para hacer planes, hablar de rutinas y hacer cosas en grupo — juntos, todos los días, todo el día, de nuevo, allí.",
  connectors: [
    {
      word: "together",
      wordEs: "juntos",
      example: {
        english: "We should do it together because nobody can do it alone.",
        spanish: "Deberíamos hacerlo juntos porque nadie puede hacerlo solo.",
      },
    },
    {
      word: "every day",
      wordEs: "todos los días",
      example: {
        english: "We have to work every day but we don't have to work all day.",
        spanish: "Tenemos que trabajar todos los días pero no tenemos que trabajar todo el día.",
      },
    },
    {
      word: "all day",
      wordEs: "todo el día",
      example: {
        english: "We can't wait here all day.",
        spanish: "No podemos esperar aquí todo el día.",
      },
    },
    {
      word: "again",
      wordEs: "otra vez / de nuevo",
      example: {
        english: "We should go again because it was remarkable.",
        spanish: "Deberíamos ir de nuevo porque fue notable.",
      },
    },
    {
      word: "there",
      wordEs: "allí / ahí",
      example: {
        english: "We have to be there at nine.",
        spanish: "Tenemos que estar allí a las nueve.",
      },
    },
  ],
  bossSentence: {
    english:
      "We just found out that we have to be there every day, so we should go together, and if we can't do it all day, we should be able to do it again tomorrow because it's not too late.",
    spanish:
      "Acabamos de descubrir que tenemos que estar allí todos los días, así que deberíamos ir juntos, y si no podemos hacerlo todo el día, deberíamos poder hacerlo de nuevo mañana porque no es demasiado tarde.",
  },
};

// ─── Section E: Pronunciation Drills — The W Sound ───────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "we",
    spanishStress: "gui",
    englishStress: "WEE — round your lips first",
    tip: "Spanish doesn't have the W sound. Spanish speakers often say 'gui' instead of 'we.' The trick: round your lips into a tiny O shape BEFORE making the sound. Your lips should look like you're about to whistle.",
    tipEs: "El español no tiene el sonido W. Los hispanohablantes a menudo dicen 'gui' en vez de 'we.' El truco: redondea tus labios en una O pequeña ANTES de hacer el sonido. Tus labios deben verse como si fueras a silbar.",
  },
  {
    word: "want / won't",
    spanishStress: "guant / guont",
    englishStress: "WAHNT / WOHNT — lips round, then open",
    tip: "'Want' and 'won't' start the same way: round lips for W, then open for the vowel. 'Want' rhymes with 'font.' 'Won't' rhymes with 'don't.' These two are essential — practice them until the W is automatic.",
    tipEs: "'Want' y 'won't' empiezan igual: labios redondeados para la W, luego abre para la vocal. 'Want' rima con 'font.' 'Won't' rima con 'don't.' Estas dos son esenciales — practícalas hasta que la W sea automática.",
  },
  {
    word: "would / with",
    spanishStress: "gud / guid",
    englishStress: "WUD / WITH — quick W, then the rest",
    tip: "'Would' is short: WUD (rhymes with 'good'). 'With' has the W + TH combination — two sounds Spanish doesn't have, back to back. Start with the W lip shape, then move to the TH tongue position.",
    tipEs: "'Would' es corto: WUD (rima con 'good'). 'With' tiene la combinación W + TH — dos sonidos que el español no tiene, uno tras otro. Empieza con la forma de labios de la W, luego pasa a la posición de lengua del TH.",
  },
  {
    word: "where / when / what / why",
    spanishStress: "guer / guen / guat / guay",
    englishStress: "WEHR / WEN / WAHT / WAI",
    tip: "The 'WH' question words all start with the same W sound. In some dialects, the H is slightly audible (a tiny breath after the W), but in standard American English, WH = W. The key is always the rounded lips.",
    tipEs: "Las palabras de pregunta con 'WH' todas empiezan con el mismo sonido W. En algunos dialectos, la H es ligeramente audible (un pequeño soplo después de la W), pero en inglés americano estándar, WH = W. La clave siempre son los labios redondeados.",
  },
  {
    word: "work / wait / walk",
    spanishStress: "guork / gueit / guolk",
    englishStress: "WERK / WAYT / WAHK",
    tip: "Three everyday W words. 'Work' — the 'or' sounds like 'er' (WERK). 'Wait' — long A sound (WAYT). 'Walk' — the L is SILENT (WAHK, not WOLK). These are high-frequency words you'll use every day.",
    tipEs: "Tres palabras W de uso diario. 'Work' — el 'or' suena como 'er' (WERK). 'Wait' — sonido largo de A (WAYT). 'Walk' — la L es SILENCIOSA (WAHK, no WOLK). Son palabras de alta frecuencia que usarás todos los días.",
  },
  {
    word: "everyone / everything",
    spanishStress: "EV-ree-wun / EV-ree-thing",
    englishStress: "EV-ree-wun / EV-ree-thing — stress on FIRST",
    tip: "Review from Unit 6: these compound words stress the FIRST syllable. 'Everyone' has a quick W in the middle — don't skip it. 'Everything' = EV-ree-thing (the TH is the soft 'th' from 'the').",
    tipEs: "Repaso de la Unidad 6: estas palabras compuestas acentúan la PRIMERA sílaba. 'Everyone' tiene una W rápida en el medio — no la omitas. 'Everything' = EV-ree-thing (el TH es el 'th' suave de 'the').",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // We forms
  { english: "we can", spanish: "podemos", type: "modal" },
  { english: "we can't", spanish: "no podemos", type: "modal" },
  { english: "we want", spanish: "queremos", type: "modal" },
  { english: "we don't want", spanish: "no queremos", type: "modal" },
  { english: "we have to", spanish: "tenemos que", type: "modal" },
  { english: "we don't have to", spanish: "no tenemos que", type: "modal" },
  { english: "we should", spanish: "deberíamos", type: "modal" },
  { english: "we shouldn't", spanish: "no deberíamos", type: "modal" },
  { english: "we would like", spanish: "nos gustaría", type: "modal" },
  { english: "we just (+ verb)", spanish: "acabamos de (+ verbo)", type: "modal" },

  // Key verbs
  { english: "to have dinner", spanish: "cenar", type: "verb" },
  { english: "to arrive", spanish: "llegar", type: "verb" },
  { english: "to walk", spanish: "caminar", type: "verb" },

  // Key vocabulary
  { english: "together", spanish: "juntos", type: "word" },
  { english: "every day", spanish: "todos los días", type: "word" },
  { english: "all day", spanish: "todo el día", type: "word" },
  { english: "again", spanish: "otra vez / de nuevo", type: "word" },
  { english: "there", spanish: "allí / ahí", type: "word" },
  { english: "with us", spanish: "con nosotros", type: "phrase" },
  { english: "for us", spanish: "para nosotros", type: "phrase" },
  { english: "with them", spanish: "con ellos", type: "phrase" },
  { english: "alone", spanish: "solo/a", type: "word" },
  { english: "everything", spanish: "todo", type: "word" },
  { english: "at nine", spanish: "a las nueve", type: "phrase" },

  // Review from previous units
  { english: "tonight", spanish: "esta noche", type: "word" },
  { english: "tomorrow", spanish: "mañana", type: "word" },
  { english: "the truth", spanish: "la verdad", type: "phrase" },
  { english: "the problem", spanish: "el problema", type: "phrase" },
  { english: "what happened", spanish: "qué pasó", type: "phrase" },
  { english: "the reason why", spanish: "el porqué", type: "phrase" },
  { english: "too late", spanish: "demasiado tarde", type: "phrase" },
];
