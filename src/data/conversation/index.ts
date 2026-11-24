// Conversation Briefings — registry, localized view and UI strings (EN + ES).
// Each topic is one vocabulary bank rendered by TopicReference.astro.

import type { L, TermTag, TopicBank } from "./types";
import { bank as americanPolitics } from "./american-politics";
import { bank as catholicism } from "./catholicism";
import { bank as protestantism } from "./protestantism";
import { bank as americanSuburbs } from "./american-suburbs";
import { bank as professionalNetworking } from "./professional-networking";
import { bank as workplaceConflict } from "./workplace-conflict";
import { bank as impromptuSpeaking } from "./impromptu-speaking";
import { bank as winningPeopleOver } from "./winning-people-over";

export type ConversationLang = "en" | "es";

export type TopicId =
  | "american-politics"
  | "catholicism"
  | "protestantism"
  | "american-suburbs"
  | "professional-networking"
  | "workplace-conflict"
  | "impromptu-speaking"
  | "winning-people-over";

type Icon =
  | "Landmark"
  | "Church"
  | "BookOpen"
  | "Home"
  | "Handshake"
  | "Scale"
  | "Mic"
  | "HeartHandshake";

export interface Topic {
  id: TopicId;
  /** URL leaf per language. The English slug is the topic id. */
  slug: Record<ConversationLang, string>;
  icon: Icon;
  eyebrow: L;
  h1: L;
  /** <title>, 60 characters or fewer. */
  title: L;
  /** Meta description, 120–160 characters. `{total}` is replaced with the term count. */
  description: L;
  /** Hero paragraph. */
  sub: L;
  /** Card text on the series hub. */
  card: L;
  /** "What this is and isn't" box. HTML allowed. */
  frame: L;
  cheatTitle: L;
  /** Three example search terms for the search placeholder. */
  searchExamples: string;
  bank: TopicBank;
}

export const topics: Topic[] = [
  {
    id: "american-politics",
    slug: { en: "american-politics", es: "politica-estadounidense" },
    icon: "Landmark",
    eyebrow: [
      "Conversation Briefings · American Civics",
      "Guías de conversación · Civismo estadounidense",
    ],
    h1: ["Talking American Politics", "Cómo Hablar de Política Estadounidense"],
    title: [
      "Talking American Politics: Vocabulary for Professionals",
      "Política Estadounidense en Inglés: Vocabulario Clave",
    ],
    description: [
      "{total} terms for following US politics in English: Congress, how a bill becomes law, elections, the Electoral College and the false friends to avoid.",
      "{total} términos para seguir la política de Estados Unidos en inglés: el Congreso, las elecciones, el Colegio Electoral y los falsos amigos que debes evitar.",
    ],
    sub: [
      "The vocabulary senior professionals need to follow a political conversation with US counterparts — how Congress works, how a bill becomes law, how elections and the Electoral College actually operate, and the false friends that trip up Spanish speakers.",
      "El vocabulario que necesitas para seguir una conversación de política con tus contrapartes en Estados Unidos: cómo funciona el Congreso, cómo una iniciativa se convierte en ley, cómo operan en realidad las elecciones y el Colegio Electoral, y los falsos amigos que hacen tropezar a quienes hablamos español.",
    ],
    card: [
      "Congress, elections, the Electoral College — and how to stay in the conversation without taking a side.",
      "El Congreso, las elecciones, el Colegio Electoral — y cómo seguir la conversación sin tomar partido.",
    ],
    frame: [
      "<b>What this is and isn't.</b> This explains what the terms mean and how the machinery works. It does not argue that either party or any position is correct — where something is genuinely contested, it says so and leaves the judgment to you. The last group covers something just as useful: how to take part in these conversations without being drawn into taking a side.",
      "<b>Qué es y qué no es.</b> Aquí se explica qué significan los términos y cómo funciona el sistema. No se argumenta que algún partido o postura tenga la razón: cuando algo de verdad está en disputa, se dice y el juicio queda en tus manos. El último grupo cubre algo igual de útil: cómo participar en estas conversaciones sin que te lleven a tomar partido.",
    ],
    cheatTitle: ["Eight things that explain most of it", "Ocho ideas que explican casi todo"],
    searchExamples: "filibuster, primary, liberal",
    bank: americanPolitics,
  },
  {
    id: "catholicism",
    slug: { en: "catholicism", es: "catolicismo" },
    icon: "Church",
    eyebrow: ["Conversation Briefings · Religion", "Guías de conversación · Religión"],
    h1: ["Talking About Catholicism in English", "Cómo Hablar del Catolicismo en Inglés"],
    title: [
      "Talking About Catholicism in English: Key Vocabulary",
      "Catolicismo en Inglés: Vocabulario y Falsos Amigos",
    ],
    description: [
      "{total} English terms for talking about Catholic life with US colleagues: Mass, the sacraments, the calendar, and the false friends Spanish speakers fall into.",
      "{total} términos en inglés para hablar de la vida católica con colegas de Estados Unidos: la misa, los sacramentos, el calendario y los falsos amigos más comunes.",
    ],
    sub: [
      "You may know all of this in Spanish. This is the English for it — the Church, Mass, the sacraments, the calendar and everyday parish life — plus the false friends that make a fluent speaker say the wrong word at a wedding, a baptism or a funeral.",
      "Es probable que todo esto ya lo sepas en español. Aquí está cómo se dice en inglés — la Iglesia, la misa, los sacramentos, el calendario y la vida diaria de una parroquia — además de los falsos amigos que hacen que alguien con inglés fluido diga la palabra equivocada en una boda, un bautizo o un funeral.",
    ],
    card: [
      "Mass, the sacraments, the calendar and parish life — the English words for what you already know in Spanish.",
      "La misa, los sacramentos, el calendario y la vida parroquial — las palabras en inglés para lo que ya conoces en español.",
    ],
    frame: [
      "<b>What this is and isn't.</b> This is a vocabulary briefing, not a statement of belief. It describes what the terms mean and how they are used in American English, with respect for the people who hold them and without arguing for or against any faith. The last group covers how to talk about religion at work gracefully — including how to step out of the conversation.",
      "<b>Qué es y qué no es.</b> Esta es una guía de vocabulario, no una declaración de fe. Describe qué significan los términos y cómo se usan en el inglés de Estados Unidos, con respeto por quienes creen en ellos y sin argumentar a favor ni en contra de ninguna religión. El último grupo cubre cómo hablar de religión en el trabajo con tacto — incluido cómo salir de la conversación.",
    ],
    cheatTitle: ["If you remember nothing else", "Si solo te quedas con esto"],
    searchExamples: "Mass, parish, godfather",
    bank: catholicism,
  },
  {
    id: "protestantism",
    slug: { en: "protestantism", es: "protestantismo" },
    icon: "BookOpen",
    eyebrow: ["Conversation Briefings · Religion", "Guías de conversación · Religión"],
    h1: [
      "Talking About Protestant Christianity in English",
      "Cómo Hablar del Protestantismo en Inglés",
    ],
    title: [
      "Protestant Christianity in English: Key Vocabulary",
      "Protestantismo en Inglés: Vocabulario para Profesionales",
    ],
    description: [
      "{total} English terms for understanding Protestant church life in the US: denominations, services, pastors and the words colleagues use about their faith.",
      "{total} términos en inglés para entender la vida de las iglesias protestantes en Estados Unidos: denominaciones, servicios, pastores y expresiones de fe.",
    ],
    sub: [
      "Many of your US colleagues grew up Protestant, and the vocabulary is not the one you learned around Catholicism: a service instead of Mass, a pastor instead of a priest, a denomination instead of an order. This briefing gives you the terms, the main church families and the everyday phrases you will hear.",
      "Muchos de tus colegas en Estados Unidos crecieron en iglesias protestantes, y el vocabulario no es el que aprendiste alrededor del catolicismo: <em>service</em> en lugar de misa, <em>pastor</em> en lugar de sacerdote, <em>denomination</em> en lugar de orden. Esta guía te da los términos, las principales familias de iglesias y las frases cotidianas que vas a escuchar.",
    ],
    card: [
      "Denominations, services, pastors and the everyday faith phrases you will hear from US colleagues.",
      "Denominaciones, servicios, pastores y las frases de fe que vas a escuchar de tus colegas en Estados Unidos.",
    ],
    frame: [
      "<b>What this is and isn't.</b> This is a vocabulary briefing, not a statement of belief. It describes what the terms mean and how churches differ, in parallel and without ranking them, and it does not argue for or against any faith. The last group covers how to talk about religion at work gracefully — including how to step out of the conversation.",
      "<b>Qué es y qué no es.</b> Esta es una guía de vocabulario, no una declaración de fe. Describe qué significan los términos y en qué se distinguen las iglesias, en paralelo y sin jerarquizarlas, y no argumenta a favor ni en contra de ninguna religión. El último grupo cubre cómo hablar de religión en el trabajo con tacto — incluido cómo salir de la conversación.",
    ],
    cheatTitle: ["If you remember nothing else", "Si solo te quedas con esto"],
    searchExamples: "pastor, denomination, born again",
    bank: protestantism,
  },
  {
    id: "american-suburbs",
    slug: { en: "american-suburbs", es: "suburbios-de-estados-unidos" },
    icon: "Home",
    eyebrow: [
      "Conversation Briefings · Everyday America",
      "Guías de conversación · La vida diaria en EE. UU.",
    ],
    h1: [
      "Talking About Life in the American Suburbs",
      "Cómo Hablar de la Vida en los Suburbios de Estados Unidos",
    ],
    title: [
      "Life in the American Suburbs: Small-Talk Vocabulary",
      "Suburbios de Estados Unidos: Vocabulario en Inglés",
    ],
    description: [
      "{total} English terms for the small talk US colleagues actually make: the commute, the HOA, the school district, the yard and weekend life in the suburbs.",
      "{total} términos en inglés para la plática diaria de tus colegas de Estados Unidos: el traslado, la HOA, el distrito escolar, el jardín y los fines de semana.",
    ],
    sub: [
      "Most of the small talk before a meeting with US colleagues is about where they live: the commute, the school district, the homeowners association, the yard, the kids' weekend games. This is the vocabulary for following it — and for joining in.",
      "Casi toda la plática antes de una junta con colegas de Estados Unidos gira en torno a dónde viven: el traslado, el distrito escolar, la asociación de colonos, el jardín, los partidos de los hijos el fin de semana. Este es el vocabulario para seguirla — y para participar.",
    ],
    card: [
      "The commute, the HOA, the school district and the yard — the vocabulary of American small talk.",
      "El traslado, la HOA, el distrito escolar y el jardín — el vocabulario de la plática cotidiana en Estados Unidos.",
    ],
    frame: [
      "<b>Why this matters.</b> Small talk is where working relationships get built, and in the US it draws on a way of living that has no exact equivalent in Mexico. The word <em>suburb</em> itself is a false friend. You do not need to have lived it — you need the words to ask a good follow-up question.",
      "<b>Por qué importa.</b> En la plática informal es donde se construyen las relaciones de trabajo, y en Estados Unidos esa plática parte de una forma de vivir que no tiene un equivalente exacto en México. La palabra <em>suburb</em> ya es un falso amigo. No necesitas haberlo vivido: necesitas las palabras para hacer una buena pregunta de seguimiento.",
    ],
    cheatTitle: ["If you remember nothing else", "Si solo te quedas con esto"],
    searchExamples: "commute, HOA, yard",
    bank: americanSuburbs,
  },
  {
    id: "professional-networking",
    slug: { en: "professional-networking", es: "networking-profesional" },
    icon: "Handshake",
    eyebrow: [
      "Conversation Briefings · Professional Life",
      "Guías de conversación · Vida profesional",
    ],
    h1: ["Networking as a Professional in English", "Networking Profesional en Inglés"],
    title: [
      "Networking in English: Phrases for Professionals",
      "Networking en Inglés: Frases para Profesionales",
    ],
    description: [
      "{total} terms and ready-to-say phrases for networking in English: opening a conversation, introducing yourself, asking for an introduction and following up.",
      "{total} términos y frases listas para usar en inglés: cómo abrir una conversación, presentarte, pedir que te presenten con alguien y dar seguimiento.",
    ],
    sub: [
      "The words and ready-to-say phrases for the part of professional life nobody teaches: walking up to a stranger at an event, saying what you do in one clear sentence, asking for an introduction, following up, and leaving a conversation without it feeling abrupt.",
      "Las palabras y las frases listas para usar en la parte de la vida profesional que nadie enseña: acercarte a alguien que no conoces en un evento, decir a qué te dedicas en una sola oración clara, pedir que te presenten, dar seguimiento y salir de una conversación sin que se sienta brusco.",
    ],
    card: [
      "Open a conversation, say what you do, ask for an introduction, follow up — in natural American English.",
      "Abre una conversación, di a qué te dedicas, pide que te presenten y da seguimiento — en inglés natural de Estados Unidos.",
    ],
    frame: [
      "<b>How to use this.</b> Read the phrase, say it out loud in your own voice, then tap to see when it works and when it does not. American networking is more direct than most Mexican professionals expect: saying plainly what you do and what you are looking for is read as respect for the other person's time.",
      "<b>Cómo usarla.</b> Lee la frase, dila en voz alta con tu propia voz y después toca para ver cuándo funciona y cuándo no. El networking en Estados Unidos es más directo de lo que solemos esperar en México: decir con claridad a qué te dedicas y qué buscas se interpreta como respeto por el tiempo de la otra persona.",
    ],
    cheatTitle: ["If you remember nothing else", "Si solo te quedas con esto"],
    searchExamples: "follow up, introduction, reach out",
    bank: professionalNetworking,
  },
  {
    id: "workplace-conflict",
    slug: { en: "workplace-conflict", es: "conflicto-en-el-trabajo" },
    icon: "Scale",
    eyebrow: [
      "Conversation Briefings · Professional Life",
      "Guías de conversación · Vida profesional",
    ],
    h1: [
      "Handling Conflict and Friction at Work in English",
      "Cómo Manejar el Conflicto en el Trabajo en Inglés",
    ],
    title: [
      "Workplace Conflict in English: Phrases That Keep Control",
      "Conflicto en el Trabajo en Inglés: Frases Clave",
    ],
    description: [
      "{total} terms and ready-to-say phrases for conflict at work in English: stay calm, disagree without heat, steer toward the outcome you want and repair it.",
      "{total} términos y frases en inglés para el conflicto en el trabajo: mantén la calma, difiere sin fricción, lleva la plática al resultado que buscas y repara.",
    ],
    sub: [
      "Friction at work is harder in a second language: you either go quiet or come out more blunt than you meant. These are the words and ready-to-say phrases for staying in control of yourself, disagreeing without heat, steering the conversation toward the outcome you came for, and repairing things afterward.",
      "La fricción en el trabajo es más difícil en un segundo idioma: o te quedas callado o suenas más brusco de lo que querías. Estas son las palabras y las frases listas para usar con las que mantienes el control de ti mismo, difieres sin subir el tono, llevas la conversación al resultado que buscas y reparas la relación después.",
    ],
    card: [
      "Stay calm, disagree without heat, steer toward the outcome you want — and repair it afterward.",
      "Mantén la calma, difiere sin subir el tono, llega al resultado que buscas — y repara después.",
    ],
    frame: [
      "<b>How to use this.</b> Read the phrase, say it out loud, then tap to see what it does and when it backfires. Control here means control of yourself and of the direction of the conversation — never of the other person. For the full method, lesson by lesson, take the free course <a href='/en/course/productive-conflict/'>Disagree Without Damage</a>.",
      "<b>Cómo usarla.</b> Lee la frase, dila en voz alta y después toca para ver qué logra y cuándo resulta contraproducente. Aquí, control quiere decir control de ti mismo y del rumbo de la conversación — nunca de la otra persona. Para el método completo, lección por lección, toma el curso gratuito <a href='/es/curso/conflicto-productivo/'>Disagree Without Damage</a>.",
    ],
    cheatTitle: ["If you remember nothing else", "Si solo te quedas con esto"],
    searchExamples: "pushback, compromise, escalate",
    bank: workplaceConflict,
  },
  {
    id: "impromptu-speaking",
    slug: { en: "impromptu-speaking", es: "hablar-sin-preparacion" },
    icon: "Mic",
    eyebrow: ["Conversation Briefings · Speaking", "Guías de conversación · Hablar en público"],
    h1: [
      "Impromptu Speaking in English: Think on Your Feet",
      "Cómo Hablar sin Preparación en Inglés",
    ],
    title: [
      "Impromptu Speaking in English: Think on Your Feet",
      "Hablar sin Preparación en Inglés: Frases y Estructuras",
    ],
    description: [
      "{total} terms, phrases and instant structures for speaking English without notice: buy time, organize your answer in seconds, sound dynamic and close well.",
      "{total} términos, frases y estructuras para hablar inglés sin aviso: gana tiempo, ordena tu respuesta en segundos, suena con energía y cierra con fuerza.",
    ],
    sub: [
      "Someone turns to you in the meeting and says, “What do you think?” You know the answer — and your English leaves the room. This briefing gives you the phrases that buy three seconds, the structures that organize an answer on the spot, the vocabulary of dynamic delivery, and the lines that get you back on track when you lose your thread.",
      "Alguien voltea contigo en la junta y dice: “What do you think?”. Sabes la respuesta — y tu inglés se va de la sala. Esta guía te da las frases que te compran tres segundos, las estructuras que ordenan una respuesta en el momento, el vocabulario para hablar con energía y las líneas con las que retomas el hilo cuando lo pierdes.",
    ],
    card: [
      "Buy time, organize an answer in seconds, sound dynamic — when you are put on the spot.",
      "Gana tiempo, ordena tu respuesta en segundos y suena con energía cuando te toca hablar sin aviso.",
    ],
    frame: [
      "<b>How to use this.</b> Good impromptu speakers are not improvising from nothing; they carry a few structures and a few opening lines, and reach for them under pressure. Say each phrase out loud until it is yours. To build the full skill, take the free course <a href='/en/course/persuasive-speaking/'>Speak to Persuade</a>.",
      "<b>Cómo usarla.</b> Quien habla bien sin preparación no improvisa de la nada: trae consigo unas cuantas estructuras y unas cuantas frases de arranque, y recurre a ellas bajo presión. Di cada frase en voz alta hasta que sea tuya. Para desarrollar la habilidad completa, toma el curso gratuito <a href='/es/curso/hablar-para-persuadir/'>Speak to Persuade</a>.",
    ],
    cheatTitle: ["If you remember nothing else", "Si solo te quedas con esto"],
    searchExamples: "off the cuff, PREP, ramble",
    bank: impromptuSpeaking,
  },
  {
    id: "winning-people-over",
    slug: { en: "winning-people-over", es: "como-ganarte-a-la-gente" },
    icon: "HeartHandshake",
    eyebrow: [
      "Conversation Briefings · Professional Life",
      "Guías de conversación · Vida profesional",
    ],
    h1: [
      "Winning People Over in English: Rapport and Influence",
      "Cómo Ganarte a la Gente en Inglés",
    ],
    title: [
      "Win People Over in English: Rapport and Influence",
      "Cómo Ganarte a la Gente en Inglés: Rapport e Influencia",
    ],
    description: [
      "{total} terms and phrases for winning friends and influencing people in English: show real interest, listen, give credit, let people save face, get to yes.",
      "{total} términos y frases en inglés para ganarte a la gente e influir: muestra interés genuino, escucha, da crédito, cuida la imagen del otro y llega al sí.",
    ],
    sub: [
      "Being right is not what gets a yes. People say yes to someone they like and trust. This is the English for winning friends and influencing people the honest way: showing real interest, listening so the other person feels heard, giving credit, disagreeing in a way that lets people save face, and asking without pushing.",
      "Tener la razón no es lo que consigue un sí. La gente le dice que sí a quien le cae bien y a quien le tiene confianza. Este es el inglés para ganarte a la gente e influir de manera honesta: mostrar interés genuino, escuchar de modo que la otra persona se sienta escuchada, dar crédito, diferir sin exhibir a nadie y pedir sin presionar.",
    ],
    card: [
      "Show real interest, listen, give credit, let people save face — the English of being someone people say yes to.",
      "Muestra interés genuino, escucha, da crédito y cuida la imagen del otro — el inglés de alguien a quien le dicen que sí.",
    ],
    frame: [
      "<b>What this is and isn't.</b> None of this is a technique for getting around people. Every phrase here works only when the interest behind it is real — and people can tell when it is not. Read the phrase, say it out loud, then tap to see when it lands and when it sounds hollow.",
      "<b>Qué es y qué no es.</b> Nada de esto es una técnica para manipular a nadie. Cada frase funciona solo cuando el interés que hay detrás es real — y la gente nota cuando no lo es. Lee la frase, dila en voz alta y después toca para ver cuándo funciona y cuándo suena hueca.",
    ],
    cheatTitle: ["If you remember nothing else", "Si solo te quedas con esto"],
    searchExamples: "rapport, buy-in, save face",
    bank: winningPeopleOver,
  },
];

export const conversationRoutes = {
  en: { hub: "/en/course/conversation/", courses: "/en/courses/" },
  es: { hub: "/es/curso/conversacion/", courses: "/es/cursos/" },
} as const;

export const topicRoute = (topic: Topic, lang: ConversationLang) =>
  `${conversationRoutes[lang].hub}${topic.slug[lang]}/`;

export const topicTKey = (topic: Topic) => `course/conversation/${topic.id}` as const;

const li = (lang: ConversationLang) => (lang === "es" ? 1 : 0);
export const pick = (pair: L, lang: ConversationLang) => pair[li(lang)];

export interface LocalItem {
  id: string;
  q: string;
  hint?: string;
  a: string;
  ex: string;
  note?: string;
  trap?: string;
  tags: TermTag[];
}
export interface LocalGroup {
  title: string;
  rule: string;
  items: LocalItem[];
}

export function getTopicGroups(topic: Topic, lang: ConversationLang): LocalGroup[] {
  const i = li(lang);
  const seen = new Set<string>();
  return topic.bank.groups.map((g, gi) => ({
    title: g.title[i],
    rule: g.rule[i],
    items: g.items.map((it, ii): LocalItem => {
      if (seen.has(it.q)) throw new Error(`[conversation/${topic.id}] Duplicate term "${it.q}"`);
      seen.add(it.q);
      const tags = [...it.tags];
      if (it.trap && !tags.includes("error")) tags.push("error");
      return {
        id: `${gi}-${ii}`,
        q: it.q,
        hint: it.hint?.[i],
        a: it.a[i],
        ex: it.ex,
        note: it.note?.[i],
        trap: it.trap?.[i],
        tags,
      };
    }),
  }));
}

export const getTopicCheat = (topic: Topic, lang: ConversationLang): [string, string][] =>
  topic.bank.cheat.map(([label, text]) => [label[li(lang)], text[li(lang)]]);

export const topicTotal = (topic: Topic) =>
  topic.bank.groups.reduce((n, g) => n + g.items.length, 0);

/** Filter chips, in display order. A chip is shown only when the topic has terms carrying its tag. */
export const tagOrder: TermTag[] = ["core", "falsefriend", "error", "idiom", "process", "acronym"];

export const conversationUi = {
  en: {
    series: "Conversation Briefings",
    hub: {
      eyebrow: "Free Master Class · B2 to C1",
      h1: "Conversation Briefings",
      title: "Conversation Briefings: English for Real Small Talk",
      description:
        "Free vocabulary briefings for the conversations no course covers: US politics, religion, networking, workplace conflict, impromptu speaking and influence.",
      sub: "Your English holds up in the meeting. Then the talk turns to the election, a colleague's church, the school district or who you should meet — or someone pushes back, or asks what you think with no warning — and the vocabulary is suddenly unfamiliar. Each briefing gives you the terms, the false friends and the phrases for one of those conversations.",
      pick: "Pick a briefing",
      terms: "{n} terms",
      open: "Open briefing",
      how: "How a briefing works",
      howItems: [
        "<b>Guess first.</b> Read the term, say what you think it means, then tap to check.",
        "<b>Watch the false friends.</b> Every briefing flags the words that look like Spanish and mean something else.",
        "<b>Test yourself.</b> A ten-question check at the bottom of each page tells you what stuck.",
      ],
      back: "All free courses",
    },
    eyebrowSeries: "Conversation Briefings",
    jump: "Jump to a group",
    accordion: "One at a time",
    accordionTitle: "Keep only one entry open at a time",
    revealAll: "Reveal all",
    hideAll: "Hide all",
    searchPlaceholder: "Search a term… (e.g. {examples})",
    searchLabel: "Search terms",
    filterLabel: "Filter terms",
    chips: {
      all: "All",
      core: "Must-know",
      falsefriend: "False friends",
      error: "Common errors",
      idiom: "Idioms & phrases",
      process: "How a bill moves",
      acronym: "Acronyms",
    },
    cheatLead: "The handful of ideas that make the rest fall into place.",
    group: "Group",
    tap: "Tap to reveal",
    badgeTrap: "Common error",
    badgeFf: "False friend",
    countAll: "{total} terms",
    countSome: "{shown} of {total} terms shown",
    empty: "No terms match that. Try a different word, or choose All to clear the filter.",
    quiz: {
      title: "Quick check",
      lead: "Ten definitions, four choices each. Pick the term that matches.",
      start: "Start the check",
      question: "Question",
      of: "of",
      correct: "Correct",
      prompt: "Which term matches this definition?",
      next: "Next question",
      results: "See results",
      vOk: "Correct",
      vNo: "Not quite",
      scoreSub: "{pct}% correct. {verdict}",
      verdicts: [
        "Excellent — this vocabulary is yours.",
        "Solid. Review the ones below and you are there.",
        "Good start. Read through the groups again, then retake the check.",
        "Take another pass through the groups before the next round — guessing first, then tapping.",
      ],
      again: "New round",
      review: "Review these",
    },
    more: "More briefings",
    backHub: "All Conversation Briefings",
    coach: {
      title: "Want to practice this out loud?",
      text: "Knowing the word is half of it. Using it under pressure, with a US counterpart across the table, is what 1-on-1 coaching is for.",
      cta: "Work 1-on-1 with Robert",
      href: "/en/services/",
    },
  },
  es: {
    series: "Guías de Conversación",
    hub: {
      eyebrow: "Clase magistral gratuita · B2 a C1",
      h1: "Guías de Conversación",
      title: "Guías de Conversación: Inglés para la Plática Real",
      description:
        "Guías de vocabulario gratuitas para las conversaciones que ningún curso cubre: política de EE. UU., religión, networking, conflicto, improvisar e influir.",
      sub: "Tu inglés aguanta la junta. Luego la plática se va a las elecciones, a la iglesia de un colega, al distrito escolar o a quién deberías conocer — o alguien te lleva la contraria, o te preguntan qué opinas sin aviso — y de pronto el vocabulario ya no te suena. Cada guía te da los términos, los falsos amigos y las frases para una de esas conversaciones.",
      pick: "Elige una guía",
      terms: "{n} términos",
      open: "Abrir guía",
      how: "Cómo funciona una guía",
      howItems: [
        "<b>Primero intenta.</b> Lee el término, di lo que crees que significa y después toca para revisar.",
        "<b>Cuidado con los falsos amigos.</b> Cada guía marca las palabras que se parecen al español y significan otra cosa.",
        "<b>Ponte a prueba.</b> Al final de cada página hay una prueba de diez preguntas que te dice qué se te quedó.",
      ],
      back: "Todos los cursos gratuitos",
    },
    eyebrowSeries: "Guías de Conversación",
    jump: "Ir a un grupo",
    accordion: "Una a la vez",
    accordionTitle: "Mantener abierta solo una entrada a la vez",
    revealAll: "Mostrar todas",
    hideAll: "Ocultar todas",
    searchPlaceholder: "Busca un término… (p. ej. {examples})",
    searchLabel: "Buscar términos",
    filterLabel: "Filtrar términos",
    chips: {
      all: "Todos",
      core: "Imprescindibles",
      falsefriend: "Falsos amigos",
      error: "Errores comunes",
      idiom: "Modismos y frases",
      process: "Cómo avanza una iniciativa",
      acronym: "Siglas",
    },
    cheatLead: "Las pocas ideas que hacen que todo lo demás tenga sentido.",
    group: "Grupo",
    tap: "Toca para ver",
    badgeTrap: "Error común",
    badgeFf: "Falso amigo",
    countAll: "{total} términos",
    countSome: "{shown} de {total} términos visibles",
    empty: "Ningún término coincide. Prueba con otra palabra o elige Todos para quitar el filtro.",
    quiz: {
      title: "Prueba rápida",
      lead: "Diez definiciones, cuatro opciones cada una. Elige el término que corresponde.",
      start: "Empezar la prueba",
      question: "Pregunta",
      of: "de",
      correct: "Correctas",
      prompt: "¿Qué término corresponde a esta definición?",
      next: "Siguiente pregunta",
      results: "Ver resultados",
      vOk: "Correcto",
      vNo: "Casi",
      scoreSub: "{pct}% de aciertos. {verdict}",
      verdicts: [
        "Excelente — este vocabulario ya es tuyo.",
        "Bien. Repasa las de abajo y lo tienes.",
        "Buen comienzo. Vuelve a leer los grupos y repite la prueba.",
        "Dale otra pasada a los grupos antes de la siguiente ronda: primero intenta y después toca.",
      ],
      again: "Nueva ronda",
      review: "Repasa estas",
    },
    more: "Más guías",
    backHub: "Todas las Guías de Conversación",
    coach: {
      title: "¿Quieres practicarlo en voz alta?",
      text: "Conocer la palabra es la mitad. Usarla bajo presión, con tu contraparte de Estados Unidos enfrente, es para lo que sirve el coaching 1 a 1.",
      cta: "Trabaja 1 a 1 con Robert",
      href: "/es/servicios/",
    },
  },
} as const;

export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ""));
