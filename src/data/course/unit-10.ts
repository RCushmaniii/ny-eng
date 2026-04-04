// Unit 10: "What's Coming Next" — Full course content (COURSE FINALE)

import type { CognateWord, SentenceBlock, PronunciationDrill, VocabItem } from "./unit-1";

// ─── Section A: Cognate Discovery — The Grand Review ─────────────────────────

export const cognateWaves = {
  wave1: {
    title: "The Grand Cognate Review (Part 1)",
    titleEs: "El Gran Repaso de Cognados (Parte 1)",
    description:
      "This is it — the vocabulary explosion. You've learned patterns across 10 units. Now see how far you've come. Recognize these words instantly.",
    descriptionEs:
      "Esto es todo — la explosión de vocabulario. Has aprendido patrones a lo largo de 10 unidades. Ahora mira cuánto has avanzado. Reconoce estas palabras al instante.",
    words: [
      {
        english: "communication",
        spanish: "comunicación",
        category: "-tion",
        pronunciationNote: "kuh-myoo-nih-KAY-shun — stress on the fourth syllable",
        pronunciationNoteEs: "kuh-myoo-nih-KAY-shun — acento en la cuarta sílaba",
      },
      { english: "international", spanish: "internacional", category: "-al" },
      { english: "responsible", spanish: "responsable", category: "-ible" },
      { english: "professional", spanish: "profesional", category: "-al" },
      { english: "opportunity", spanish: "oportunidad", category: "-ity" },
      { english: "incredible", spanish: "increíble", category: "-ible" },
      { english: "conversation", spanish: "conversación", category: "-tion" },
      {
        english: "immediately",
        spanish: "inmediatamente",
        category: "-ly",
        pronunciationNote: "ih-MEE-dee-ut-lee — five syllables, stress on SECOND",
        pronunciationNoteEs: "ih-MEE-dee-ut-lee — cinco sílabas, acento en la SEGUNDA",
      },
      { english: "comfortable", spanish: "confortable", category: "-able" },
      { english: "experience", spanish: "experiencia", category: "-ence" },
    ] as CognateWord[],
  },
  wave2: {
    title: "The Grand Cognate Review (Part 2)",
    titleEs: "El Gran Repaso de Cognados (Parte 2)",
    description:
      "More words from across every pattern. Each one you recognize is proof that the Recognition Method works. You're not learning these words — you're remembering them.",
    descriptionEs:
      "Más palabras de todos los patrones. Cada una que reconoces es prueba de que el Método de Reconocimiento funciona. No estás aprendiendo estas palabras — las estás recordando.",
    words: [
      { english: "absolutely", spanish: "absolutamente", category: "-ly" },
      { english: "intelligent", spanish: "inteligente", category: "-ent" },
      { english: "independent", spanish: "independiente", category: "-ent" },
      { english: "acceptable", spanish: "aceptable", category: "-able" },
      { english: "productive", spanish: "productivo", category: "-ive" },
      {
        english: "consequently",
        spanish: "consecuentemente",
        category: "-ly",
        pronunciationNote: "CON-seh-kwent-lee — stress on FIRST syllable",
        pronunciationNoteEs: "CON-seh-kwent-lee — acento en la PRIMERA sílaba",
      },
      { english: "traditional", spanish: "tradicional", category: "-al" },
      { english: "perspective", spanish: "perspectiva", category: "-ive" },
      { english: "enthusiasm", spanish: "entusiasmo", category: "-ism" },
      { english: "competitive", spanish: "competitivo", category: "-ive" },
    ] as CognateWord[],
  },
  wave3: {
    title: "Your 1,500-Word Unlock",
    titleEs: "Tu Desbloqueo de 1,500 Palabras",
    description:
      "You now own the full cognate system: -ible, -able, -al, -tion, -ist, -ant, -ic, -ary, -ment, -ity, -sion, -ent, -ive, -id, -ct, -ence, -ance, -ous. That's 1,500+ words you carry from Spanish into English. You were never a beginner — you just didn't know it yet.",
    descriptionEs:
      "Ahora dominas el sistema completo de cognados: -ible, -able, -al, -tion, -ist, -ant, -ic, -ary, -ment, -ity, -sion, -ent, -ive, -id, -ct, -ence, -ance, -ous. Son más de 1,500 palabras que llevas del español al inglés. Nunca fuiste principiante — solo no lo sabías.",
    words: [
      {
        english: "university",
        spanish: "universidad",
        category: "-ity",
        pronunciationNote: "yoo-nih-VER-sih-tee — five syllables, stress on THIRD",
        pronunciationNoteEs: "yoo-nih-VER-sih-tee — cinco sílabas, acento en la TERCERA",
      },
      { english: "spectacular", spanish: "espectacular", category: "-ar" },
      { english: "determination", spanish: "determinación", category: "-tion" },
      { english: "extraordinary", spanish: "extraordinario", category: "-ary" },
      { english: "impossible", spanish: "imposible", category: "-ible" },
      { english: "magnificent", spanish: "magnífico", category: "-ent" },
      { english: "revolution", spanish: "revolución", category: "-tion" },
      { english: "circumstance", spanish: "circunstancia", category: "-ance" },
      { english: "evolution", spanish: "evolución", category: "-tion" },
      {
        english: "congratulations",
        spanish: "felicitaciones",
        category: "-tion",
        pronunciationNote: "kun-GRATCH-oo-LAY-shunz — you've earned this word!",
        pronunciationNoteEs: "kun-GRATCH-oo-LAY-shunz — ¡te has ganado esta palabra!",
      },
    ] as CognateWord[],
  },
};

// ─── Section B: Going to (Future) ──────────────────────────────────────────

export const sentenceBlocks: SentenceBlock[] = [
  {
    label: "I'm going to / I'm not going to",
    labelEs: "Voy a / No voy a",
    description:
      "'Going to' is the simplest way to talk about the future. 'I'm going to do it' = voy a hacerlo. In fast speech, it often becomes 'gonna' — but always write 'going to.'",
    descriptionEs:
      "'Going to' es la forma más simple de hablar del futuro. 'I'm going to do it' = voy a hacerlo. En habla rápida, a menudo se convierte en 'gonna' — pero siempre escribe 'going to.'",
    sentences: [
      {
        english: "I'm going to do it tomorrow.",
        spanish: "Voy a hacerlo mañana.",
        highlight: "I'm going to",
      },
      {
        english: "I'm going to tell her the truth tonight.",
        spanish: "Voy a decirle la verdad esta noche.",
      },
      {
        english: "I'm not going to wait all day.",
        spanish: "No voy a esperar todo el día.",
        highlight: "not going to",
      },
      {
        english: "I'm going to ask someone where it is.",
        spanish: "Voy a preguntarle a alguien dónde está.",
      },
      {
        english: "I'm going to start a new project because I feel like it's time for a change.",
        spanish: "Voy a empezar un nuevo proyecto porque siento que es hora de un cambio.",
        highlight: "a change",
      },
    ],
  },
  {
    label: "He's / She's / We're / They're going to",
    labelEs: "Él va a / Ella va a / Vamos a / Ellos van a",
    description:
      "'Going to' works with every subject — just change the 'be' verb. I'm, you're, he's, she's, we're, they're going to. The 'going to' part never changes.",
    descriptionEs:
      "'Going to' funciona con cada sujeto — solo cambia el verbo 'be'. I'm, you're, he's, she's, we're, they're going to. La parte 'going to' nunca cambia.",
    sentences: [
      {
        english: "She's going to call me tonight.",
        spanish: "Ella me va a llamar esta noche.",
        highlight: "She's going to",
      },
      {
        english: "We're going to have dinner at the new restaurant.",
        spanish: "Vamos a cenar en el nuevo restaurante.",
        highlight: "We're going to",
      },
      {
        english: "They're going to arrive soon.",
        spanish: "Van a llegar pronto.",
        highlight: "They're going to",
      },
      {
        english: "No one is going to buy it because it's too expensive.",
        spanish: "Nadie lo va a comprar porque es demasiado caro.",
      },
      {
        english: "Everyone is going to be surprised when they find out the truth.",
        spanish: "Todos se van a sorprender cuando descubran la verdad.",
        highlight: "Everyone is going to",
      },
    ],
  },
  {
    label: "What does it mean? / What does ... mean?",
    labelEs: "¿Qué significa? / ¿Qué significa...?",
    description:
      "The most powerful question a learner can ask: 'What does it mean?' Use it everywhere. 'What does this word mean?' 'What does that mean?' Never be afraid to ask.",
    descriptionEs:
      "La pregunta más poderosa que un estudiante puede hacer: '¿What does it mean?' Úsala en todas partes. '¿What does this word mean?' '¿What does that mean?' Nunca tengas miedo de preguntar.",
    sentences: [
      {
        english: "What does it mean?",
        spanish: "¿Qué significa?",
        highlight: "What does it mean",
      },
      {
        english: "I don't know what it means.",
        spanish: "No sé qué significa.",
        highlight: "what it means",
      },
      {
        english: "Can you tell me what this word means, please?",
        spanish: "¿Puedes decirme qué significa esta palabra, por favor?",
        highlight: "please",
      },
      {
        english: "What does 'extraordinary' mean? It means 'fuera de lo común.'",
        spanish: "¿Qué significa 'extraordinary'? Significa 'fuera de lo común.'",
      },
      {
        english: "I wonder what it means because nobody explained it to me.",
        spanish: "Me pregunto qué significa porque nadie me lo explicó.",
      },
    ],
  },
];

// ─── Section C: Putting It All Together ────────────────────────────────────

export const powerVerbBlocks: SentenceBlock[] = [
  {
    label: "Combining Past + Present + Future",
    labelEs: "Combinando Pasado + Presente + Futuro",
    description:
      "You now have all three time frames: was/used to (past), can/want/have to (present), and going to (future). The most sophisticated speakers move fluidly between all three.",
    descriptionEs:
      "Ahora tienes los tres marcos temporales: was/used to (pasado), can/want/have to (presente), y going to (futuro). Los hablantes más sofisticados se mueven fluidamente entre los tres.",
    sentences: [
      {
        english: "I used to work here, but now I'm going to start something new.",
        spanish: "Solía trabajar aquí, pero ahora voy a empezar algo nuevo.",
        highlight: "used to → going to",
      },
      {
        english: "She was nervous yesterday, but she feels comfortable now and she's going to do it.",
        spanish: "Estaba nerviosa ayer, pero se siente cómoda ahora y lo va a hacer.",
      },
      {
        english: "We were there last week and we want to go again — we're going to call them tomorrow.",
        spanish: "Estuvimos allí la semana pasada y queremos ir de nuevo — los vamos a llamar mañana.",
      },
      {
        english: "That's why I decided to change — I used to be afraid, but now I'm going to be different.",
        spanish: "Por eso decidí cambiar — solía tener miedo, pero ahora voy a ser diferente.",
      },
      {
        english: "Nobody told me what happened, but I'm going to find out the truth because everyone should know.",
        spanish: "Nadie me dijo qué pasó, pero voy a descubrir la verdad porque todos deberían saber.",
      },
    ],
  },
  {
    label: "The Full Toolkit: All Modal Verbs",
    labelEs: "El Kit Completo: Todos los Verbos Modales",
    description:
      "Here's everything in your toolkit: can, want, need, have to, should, would like, feel like, wonder, just, used to, and going to. That's 11 structures — enough for any conversation.",
    descriptionEs:
      "Aquí está todo en tu kit: can, want, need, have to, should, would like, feel like, wonder, just, used to, y going to. Son 11 estructuras — suficientes para cualquier conversación.",
    sentences: [
      {
        english: "I can do it, I want to do it, and I'm going to do it.",
        spanish: "Puedo hacerlo, quiero hacerlo, y voy a hacerlo.",
        highlight: "can → want → going to",
      },
      {
        english: "She should tell him because he has to know before everyone finds out.",
        spanish: "Debería decirle porque tiene que saber antes de que todos se enteren.",
      },
      {
        english: "I wonder if they feel like going to the beach — we would like to go together.",
        spanish: "Me pregunto si tienen ganas de ir a la playa — nos gustaría ir juntos.",
      },
      {
        english: "He just told me that he used to work there, and now he's going to start again.",
        spanish: "Me acaba de decir que solía trabajar allí, y ahora va a empezar de nuevo.",
      },
      {
        english: "We don't have to wait because someone should be able to help us immediately.",
        spanish: "No tenemos que esperar porque alguien debería poder ayudarnos inmediatamente.",
        highlight: "help us",
      },
    ],
  },
  {
    label: "Real-World Scenarios",
    labelEs: "Escenarios del Mundo Real",
    description:
      "These are the kinds of things you'll actually say in English. Every sentence uses structures from multiple units. This is what fluency looks like.",
    descriptionEs:
      "Estas son las cosas que realmente dirás en inglés. Cada oración usa estructuras de múltiples unidades. Así se ve la fluidez.",
    sentences: [
      {
        english: "Excuse me, can you tell me where the restaurant is? We're going to have dinner there tonight.",
        spanish: "Disculpe, ¿puede decirme dónde está el restaurante? Vamos a cenar allí esta noche.",
        highlight: "Excuse me",
      },
      {
        english: "I feel like something changed. She used to be confident, but now she seems nervous about the presentation.",
        spanish: "Siento que algo cambió. Ella solía ser segura, pero ahora parece nerviosa por la presentación.",
      },
      {
        english: "I'm going to call the hotel because I wonder if they have a room available for us this weekend.",
        spanish: "Voy a llamar al hotel porque me pregunto si tienen una habitación disponible para nosotros este fin de semana.",
        highlight: "available",
      },
      {
        english: "Nobody told me that the meeting was yesterday — that's why I wasn't there. I'm going to talk to my manager about it.",
        spanish: "Nadie me dijo que la reunión fue ayer — por eso no estuve allí. Voy a hablar con mi jefe al respecto.",
      },
      {
        english: "At first I used to think English was impossible, but now I know I already had 1,500 words inside me. I just didn't know it yet.",
        spanish: "Al principio solía pensar que el inglés era imposible, pero ahora sé que ya tenía 1,500 palabras dentro de mí. Solo no lo sabía todavía.",
      },
    ],
  },
];

// ─── Section D: Connector Challenge ──────────────────────────────────────────

export const connectorSentences = {
  title: "The Full Picture",
  titleEs: "El Panorama Completo",
  description:
    "The final connector set: words for asking meaning, arriving, happening, helping, and being on time. Your conversational toolkit is now complete.",
  descriptionEs:
    "El último conjunto de conectores: palabras para preguntar significado, llegar, pasar, ayudar y ser puntual. Tu kit conversacional ahora está completo.",
  connectors: [
    {
      word: "What does ... mean?",
      wordEs: "¿Qué significa...?",
      example: {
        english: "What does 'spectacular' mean? It means something incredibly impressive.",
        spanish: "¿Qué significa 'spectacular'? Significa algo increíblemente impresionante.",
      },
    },
    {
      word: "on time",
      wordEs: "a tiempo / puntual",
      example: {
        english: "Everyone is going to arrive on time because the meeting is important.",
        spanish: "Todos van a llegar a tiempo porque la reunión es importante.",
      },
    },
    {
      word: "to help",
      wordEs: "ayudar",
      example: {
        english: "I'm going to help them because nobody else can do it.",
        spanish: "Voy a ayudarlos porque nadie más puede hacerlo.",
      },
    },
    {
      word: "to happen",
      wordEs: "pasar / ocurrir",
      example: {
        english: "I wonder what's going to happen tomorrow.",
        spanish: "Me pregunto qué va a pasar mañana.",
      },
    },
    {
      word: "soon",
      wordEs: "pronto",
      example: {
        english: "They're going to arrive soon, so we should be ready.",
        spanish: "Van a llegar pronto, así que deberíamos estar listos.",
      },
    },
  ],
  bossSentence: {
    english:
      "I used to think I couldn't speak English, but after ten units I know that's not true — I already had 1,500 words, I can build sentences about the past, present, and future, and I'm going to keep going because this is just the beginning.",
    spanish:
      "Solía pensar que no podía hablar inglés, pero después de diez unidades sé que eso no es verdad — ya tenía 1,500 palabras, puedo construir oraciones sobre el pasado, presente y futuro, y voy a seguir adelante porque esto es solo el comienzo.",
  },
};

// ─── Section E: Pronunciation Drills — Connected Speech ──────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "going to → gonna",
    spanishStress: "GO-ing tu",
    englishStress: "GUN-uh — in fast speech, two syllables",
    tip: "In casual speech, 'going to' becomes 'gonna.' 'I'm gonna do it.' 'She's gonna call.' This is NOT slang — it's standard spoken English. Write 'going to' but say 'gonna.' If you always say the full form, you'll sound robotic.",
    tipEs: "En habla casual, 'going to' se convierte en 'gonna.' 'I'm gonna do it.' 'She's gonna call.' Esto NO es jerga — es inglés hablado estándar. Escribe 'going to' pero di 'gonna.' Si siempre dices la forma completa, sonarás robótico.",
  },
  {
    word: "want to → wanna",
    spanishStress: "GUANT tu",
    englishStress: "WAH-nuh — lips round for W, then open",
    tip: "Just like 'gonna,' 'want to' reduces to 'wanna' in natural speech. 'I wanna go.' 'Do you wanna eat?' Again: write 'want to,' say 'wanna.' These reductions are what make English sound natural and fluent.",
    tipEs: "Igual que 'gonna,' 'want to' se reduce a 'wanna' en habla natural. 'I wanna go.' '¿Do you wanna eat?' De nuevo: escribe 'want to,' di 'wanna.' Estas reducciones son lo que hace que el inglés suene natural y fluido.",
  },
  {
    word: "have to → hafta",
    spanishStress: "JAV tu",
    englishStress: "HAF-tuh — the 'v' becomes 'f'",
    tip: "In connected speech, 'have to' becomes 'hafta.' The voiced V turns into an unvoiced F before the T. 'I hafta go.' 'We hafta be there.' This is another standard reduction that native speakers use automatically.",
    tipEs: "En habla conectada, 'have to' se convierte en 'hafta.' La V sonora se convierte en F sorda antes de la T. 'I hafta go.' 'We hafta be there.' Esta es otra reducción estándar que los hablantes nativos usan automáticamente.",
  },
  {
    word: "Stress-timed rhythm",
    spanishStress: "Ca-da sí-la-ba i-gual",
    englishStress: "STRESSED words POP — small words shrink",
    tip: "English is STRESS-TIMED: important words (nouns, verbs, adjectives) get stressed, while small words (a, the, to, of, is) shrink and speed up. 'I'm GOing to CALL her toNIGHT' — only three words get real stress. Spanish gives every syllable equal time. English doesn't. This is the secret to sounding natural.",
    tipEs: "El inglés es ACENTUAL: las palabras importantes (sustantivos, verbos, adjetivos) se acentúan, mientras las palabras pequeñas (a, the, to, of, is) se encogen y aceleran. 'I'm GOing to CALL her toNIGHT' — solo tres palabras reciben acento real. El español le da a cada sílaba tiempo igual. El inglés no. Este es el secreto para sonar natural.",
  },
  {
    word: "Linking: 'used_to' / 'going_to'",
    spanishStress: "used . to / going . to",
    englishStress: "YOOS-tuh / GO-nuh — words blend together",
    tip: "In English, words don't stop and start cleanly. They LINK. The end of one word flows into the beginning of the next. 'Used to' = YOOS-tuh (one sound). 'Want to' = WAH-nuh. 'Tell him' = TEL-im. Practice letting words melt into each other.",
    tipEs: "En inglés, las palabras no se detienen y comienzan limpiamente. Se ENLAZAN. El final de una palabra fluye hacia el comienzo de la siguiente. 'Used to' = YOOS-tuh (un sonido). 'Want to' = WAH-nuh. 'Tell him' = TEL-im. Practica dejando que las palabras se derritan unas en otras.",
  },
  {
    word: "The sentence: I'm gonna call her tonight",
    spanishStress: "AIM GO-na COL jer tu-NAIT",
    englishStress: "ahm-guh-nuh-CALL-er-tuh-NITE — one flowing phrase",
    tip: "Say this sentence as ONE flowing phrase, not seven separate words. 'Ahm-guh-nuh-CALL-er-tuh-NITE.' Only CALL and NIGHT get real stress. Everything else is fast and connected. THIS is how native English sounds. Record yourself and compare.",
    tipEs: "Di esta oración como UNA frase fluida, no siete palabras separadas. 'Ahm-guh-nuh-CALL-er-tuh-NITE.' Solo CALL y NIGHT reciben acento real. Todo lo demás es rápido y conectado. ASÍ es como suena el inglés nativo. Grábate y compara.",
  },
];

// ─── Section G: Vocabulary List ──────────────────────────────────────────────

export const vocabularyList: VocabItem[] = [
  // Future tense
  { english: "I'm going to", spanish: "voy a", type: "modal" },
  { english: "he's/she's going to", spanish: "él/ella va a", type: "modal" },
  { english: "we're going to", spanish: "vamos a", type: "modal" },
  { english: "they're going to", spanish: "ellos van a", type: "modal" },

  // What does it mean
  { english: "What does it mean?", spanish: "¿Qué significa?", type: "phrase" },
  { english: "What does ... mean?", spanish: "¿Qué significa...?", type: "phrase" },
  { english: "I don't know what it means", spanish: "no sé qué significa", type: "phrase" },

  // Key new vocabulary
  { english: "on time", spanish: "a tiempo / puntual", type: "phrase" },
  { english: "to help", spanish: "ayudar", type: "verb" },
  { english: "to happen", spanish: "pasar / ocurrir", type: "verb" },
  { english: "to arrive", spanish: "llegar", type: "verb" },
  { english: "soon", spanish: "pronto", type: "word" },
  { english: "a change", spanish: "un cambio", type: "word" },
  { english: "a meeting", spanish: "una reunión", type: "word" },
  { english: "a room", spanish: "una habitación", type: "word" },
  { english: "this weekend", spanish: "este fin de semana", type: "phrase" },
  { english: "ready", spanish: "listo", type: "word" },
  { english: "excuse me", spanish: "disculpe", type: "phrase" },
  { english: "please", spanish: "por favor", type: "word" },

  // Connected speech
  { english: "gonna (= going to)", spanish: "voy a (forma hablada)", type: "phrase" },
  { english: "wanna (= want to)", spanish: "quiero (forma hablada)", type: "phrase" },
  { english: "hafta (= have to)", spanish: "tengo que (forma hablada)", type: "phrase" },

  // Grand review
  { english: "the past / the present / the future", spanish: "el pasado / el presente / el futuro", type: "phrase" },
  { english: "the beginning", spanish: "el comienzo", type: "word" },
  { english: "congratulations", spanish: "felicitaciones", type: "word" },
];
