// Unit 6: "Expressing Opinions" — Full course content
// Theme: Debate, persuasion, professional disagreement
// Grammar: Third conditional + softening modals (might, may, could)
// Pronunciation: Agreement/disagreement intonation
// Section A: OpinionStems (categorized sentence frames for opinions)

import type {
  Dialogue,
  ErrorCorrectionSet,
  IntermediateVocabItem,
} from "./types";
import type { OpinionCategory } from "../../components/course/OpinionStems";
import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

// ─── Section A: Opinion Stems ────────────────────────────────────────────────

export const opinionCategories: OpinionCategory[] = [
  {
    label: "State your opinion",
    labelEs: "Expresa tu opinión",
    intent: "state",
    description:
      "Sentence starters that introduce your view clearly without sounding aggressive. The first three are everyday-natural; the last two are more formal.",
    descriptionEs:
      "Frases iniciales que introducen tu punto de vista claramente sin sonar agresivo. Las primeras tres son cotidianas y naturales; las últimas dos son más formales.",
    stems: [
      {
        stem: "In my opinion",
        stemEs: "En mi opinión",
        example:
          "In my opinion, remote work has made teams more productive, not less.",
        exampleEs:
          "En mi opinión, el trabajo remoto ha hecho a los equipos más productivos, no menos.",
        register: "neutral",
      },
      {
        stem: "I think",
        stemEs: "Creo que",
        example: "I think we should look at this from a different angle.",
        exampleEs: "Creo que deberíamos ver esto desde un ángulo diferente.",
        register: "neutral",
      },
      {
        stem: "The way I see it",
        stemEs: "La forma en que lo veo",
        example:
          "The way I see it, both options have value — we just need to choose carefully.",
        exampleEs:
          "La forma en que lo veo, ambas opciones tienen valor — solo tenemos que elegir con cuidado.",
        register: "neutral",
      },
      {
        stem: "From my perspective",
        stemEs: "Desde mi perspectiva",
        example:
          "From my perspective, the data clearly supports the second proposal.",
        exampleEs:
          "Desde mi perspectiva, los datos claramente apoyan la segunda propuesta.",
        register: "academic",
      },
      {
        stem: "It seems to me that",
        stemEs: "Me parece que",
        example:
          "It seems to me that we're focusing too much on short-term gains.",
        exampleEs:
          "Me parece que nos estamos enfocando demasiado en ganancias a corto plazo.",
        register: "academic",
      },
    ],
  },
  {
    label: "Soften your opinion",
    labelEs: "Suaviza tu opinión",
    intent: "soften",
    description:
      "These frames let you share strong views without sounding arrogant. The trick: use 'might', 'may', or 'could' to present your opinion as one possibility, not the only truth.",
    descriptionEs:
      "Estas frases te permiten compartir opiniones fuertes sin sonar arrogante. El truco: usa 'might', 'may' o 'could' para presentar tu opinión como una posibilidad, no como la única verdad.",
    stems: [
      {
        stem: "I might be wrong, but",
        stemEs: "Podría estar equivocado, pero",
        example:
          "I might be wrong, but I think we're underestimating the timeline.",
        exampleEs:
          "Podría estar equivocado, pero creo que estamos subestimando el cronograma.",
        register: "soft",
      },
      {
        stem: "It could be argued that",
        stemEs: "Se podría argumentar que",
        example:
          "It could be argued that the original plan was actually more effective.",
        exampleEs:
          "Se podría argumentar que el plan original era de hecho más efectivo.",
        register: "academic",
      },
      {
        stem: "I tend to think that",
        stemEs: "Tiendo a pensar que",
        example:
          "I tend to think that simplicity wins over complexity in most cases.",
        exampleEs:
          "Tiendo a pensar que la simplicidad gana sobre la complejidad en la mayoría de los casos.",
        register: "soft",
      },
      {
        stem: "There may be some truth to",
        stemEs: "Puede haber algo de verdad en",
        example:
          "There may be some truth to what they're saying, but I'd want to see the numbers.",
        exampleEs:
          "Puede haber algo de verdad en lo que dicen, pero querría ver los números.",
        register: "soft",
      },
    ],
  },
  {
    label: "Agree politely",
    labelEs: "Mostrar acuerdo cortésmente",
    intent: "agree",
    description:
      "Don't just say 'yes' — show you've actually thought about what the other person said. These frames acknowledge their point and add to it.",
    descriptionEs:
      "No solo digas 'yes' — muestra que realmente has pensado en lo que la otra persona dijo. Estas frases reconocen su punto y le agregan algo.",
    stems: [
      {
        stem: "That's a good point",
        stemEs: "Ese es un buen punto",
        example:
          "That's a good point. I hadn't considered the impact on the customer side.",
        exampleEs:
          "Ese es un buen punto. No había considerado el impacto en el lado del cliente.",
        register: "neutral",
      },
      {
        stem: "I couldn't agree more",
        stemEs: "No podría estar más de acuerdo",
        example:
          "I couldn't agree more. We've been ignoring this issue for too long.",
        exampleEs:
          "No podría estar más de acuerdo. Hemos estado ignorando este problema por demasiado tiempo.",
        register: "strong",
      },
      {
        stem: "You make a fair point about",
        stemEs: "Haces un buen punto sobre",
        example:
          "You make a fair point about the cost — that's something we'll need to address.",
        exampleEs:
          "Haces un buen punto sobre el costo — eso es algo que necesitaremos abordar.",
        register: "neutral",
      },
      {
        stem: "That's exactly what I was thinking",
        stemEs: "Eso es exactamente lo que estaba pensando",
        example:
          "That's exactly what I was thinking. We're on the same page.",
        exampleEs:
          "Eso es exactamente lo que estaba pensando. Estamos en la misma página.",
        register: "neutral",
      },
    ],
  },
  {
    label: "Disagree without offending",
    labelEs: "Discrepar sin ofender",
    intent: "disagree",
    description:
      "Disagreement is dangerous in English — direct disagreement can damage relationships fast. These frames let you push back while preserving the connection.",
    descriptionEs:
      "El desacuerdo es peligroso en inglés — el desacuerdo directo puede dañar relaciones rápido. Estas frases te permiten objetar sin romper la conexión.",
    stems: [
      {
        stem: "I see your point, but",
        stemEs: "Entiendo tu punto, pero",
        example:
          "I see your point, but I think we should also consider the long-term cost.",
        exampleEs:
          "Entiendo tu punto, pero creo que también deberíamos considerar el costo a largo plazo.",
        register: "neutral",
      },
      {
        stem: "I'm not sure I agree with",
        stemEs: "No estoy seguro de estar de acuerdo con",
        example:
          "I'm not sure I agree with that assessment. The data tells a different story.",
        exampleEs:
          "No estoy seguro de estar de acuerdo con esa evaluación. Los datos cuentan una historia diferente.",
        register: "soft",
      },
      {
        stem: "With respect, I'd have to disagree",
        stemEs: "Con todo respeto, tendría que discrepar",
        example:
          "With respect, I'd have to disagree. The team needs more time, not less.",
        exampleEs:
          "Con todo respeto, tendría que discrepar. El equipo necesita más tiempo, no menos.",
        register: "academic",
      },
      {
        stem: "I'm afraid I see it differently",
        stemEs: "Me temo que lo veo diferente",
        example:
          "I'm afraid I see it differently — I think the original approach was the right one.",
        exampleEs:
          "Me temo que lo veo diferente — creo que el enfoque original era el correcto.",
        register: "soft",
      },
    ],
  },
  {
    label: "Concede a point",
    labelEs: "Conceder un punto",
    intent: "concede",
    description:
      "Strong speakers know how to give ground gracefully. Conceding part of the other person's argument actually makes YOUR position stronger — it shows you're being fair.",
    descriptionEs:
      "Los hablantes fuertes saben cómo ceder con elegancia. Conceder parte del argumento de la otra persona en realidad fortalece TU posición — muestra que estás siendo justo.",
    stems: [
      {
        stem: "You may be right about",
        stemEs: "Puede que tengas razón sobre",
        example:
          "You may be right about the budget, but the timeline still concerns me.",
        exampleEs:
          "Puede que tengas razón sobre el presupuesto, pero el cronograma aún me preocupa.",
        register: "soft",
      },
      {
        stem: "Fair enough, but",
        stemEs: "Es justo, pero",
        example:
          "Fair enough, but I still think we need a backup plan.",
        exampleEs:
          "Es justo, pero todavía creo que necesitamos un plan de respaldo.",
        register: "neutral",
      },
      {
        stem: "I'll grant you that",
        stemEs: "Te concedo eso",
        example:
          "I'll grant you that the launch was successful — but we got lucky with the timing.",
        exampleEs:
          "Te concedo que el lanzamiento fue exitoso — pero tuvimos suerte con el momento.",
        register: "academic",
      },
      {
        stem: "There's something to that, although",
        stemEs: "Hay algo en eso, aunque",
        example:
          "There's something to that, although I'd want to verify with the team first.",
        exampleEs:
          "Hay algo en eso, aunque querría verificarlo con el equipo primero.",
        register: "soft",
      },
    ],
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "A Productive Disagreement",
    titleEs: "Un Desacuerdo Productivo",
    setting: "A planning meeting where two team members disagree about strategy",
    settingEs: "Una junta de planeación donde dos miembros del equipo no están de acuerdo sobre la estrategia",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Ana",
        speakerLabelEs: "Ana",
        english:
          "From my perspective, we should launch the product in March. The market is ready.",
        spanish:
          "Desde mi perspectiva, deberíamos lanzar el producto en marzo. El mercado está listo.",
        highlight: "From my perspective",
      },
      {
        speaker: "B",
        speakerLabel: "Roberto",
        speakerLabelEs: "Roberto",
        english:
          "I see your point, Ana, but I'm not sure I agree with the timing. If we had launched the previous version sooner, we might have lost users to bugs.",
        spanish:
          "Entiendo tu punto, Ana, pero no estoy seguro de estar de acuerdo con el tiempo. Si hubiéramos lanzado la versión anterior antes, podríamos haber perdido usuarios por los errores.",
        highlight: "I see your point... I'm not sure I agree",
      },
      {
        speaker: "A",
        speakerLabel: "Ana",
        speakerLabelEs: "Ana",
        english:
          "That's a fair point. But this version has been tested thoroughly. I might be wrong, but I think waiting longer just gives competitors more room.",
        spanish:
          "Ese es un punto justo. Pero esta versión ha sido probada a fondo. Podría estar equivocada, pero creo que esperar más solo le da más espacio a los competidores.",
        highlight: "That's a fair point / I might be wrong",
      },
      {
        speaker: "B",
        speakerLabel: "Roberto",
        speakerLabelEs: "Roberto",
        english:
          "You may be right about the competitors. Still, if we had a soft launch first, we could catch any remaining issues without risking the whole brand.",
        spanish:
          "Puede que tengas razón sobre los competidores. Aún así, si tuviéramos un lanzamiento suave primero, podríamos detectar cualquier problema restante sin arriesgar toda la marca.",
        highlight: "You may be right / If we had... we could",
      },
      {
        speaker: "A",
        speakerLabel: "Ana",
        speakerLabelEs: "Ana",
        english:
          "Hmm. I hadn't thought of it that way. A soft launch could give us the data we need without the risk.",
        spanish:
          "Hmm. No lo había pensado de esa manera. Un lanzamiento suave podría darnos los datos que necesitamos sin el riesgo.",
        highlight: "I hadn't thought of it that way",
      },
      {
        speaker: "B",
        speakerLabel: "Roberto",
        speakerLabelEs: "Roberto",
        english:
          "Exactly. And if it goes well, we could move to a full launch in April with much more confidence.",
        spanish:
          "Exactamente. Y si va bien, podríamos pasar a un lanzamiento completo en abril con mucha más confianza.",
        highlight: "we could move",
      },
      {
        speaker: "A",
        speakerLabel: "Ana",
        speakerLabelEs: "Ana",
        english:
          "I couldn't agree more. Let's bring this proposal to the team tomorrow.",
        spanish:
          "No podría estar más de acuerdo. Llevemos esta propuesta al equipo mañana.",
        highlight: "I couldn't agree more",
      },
    ],
    keyPhrases: [
      {
        english: "I see your point, but...",
        spanish: "Entiendo tu punto, pero...",
        note: "The diplomatic way to push back. Always acknowledges before disagreeing.",
        noteEs: "La forma diplomática de objetar. Siempre reconoce antes de discrepar.",
      },
      {
        english: "You may be right about X.",
        spanish: "Puede que tengas razón sobre X.",
        note: "Concede a specific point — strengthens your overall position by showing fairness.",
        noteEs: "Concede un punto específico — fortalece tu posición general al mostrar imparcialidad.",
      },
      {
        english: "I hadn't thought of it that way.",
        spanish: "No lo había pensado de esa manera.",
        note: "The most professional way to admit you've been persuaded.",
        noteEs: "La forma más profesional de admitir que has sido persuadido.",
      },
    ],
  },
];

// ─── Section C: Structure Builder ────────────────────────────────────────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "Third conditional: imagining a different past",
    labelEs: "Tercer condicional: imaginando un pasado diferente",
    description:
      "Structure: If + had + past participle, would have + past participle. Use it to talk about past situations that did NOT happen — and imagine the result.",
    descriptionEs:
      "Estructura: If + had + participio, would have + participio. Úsalo para hablar de situaciones pasadas que NO sucedieron — e imaginar el resultado.",
    sentences: [
      {
        english: "If we had launched earlier, we would have caught the bugs sooner.",
        spanish: "Si hubiéramos lanzado antes, habríamos detectado los errores más pronto.",
        highlight: "If we had launched, we would have caught",
      },
      {
        english: "If she had told me, I would have helped.",
        spanish: "Si ella me hubiera dicho, le habría ayudado.",
        highlight: "If she had told, I would have helped",
      },
      {
        english: "We would have won the contract if we had submitted the bid on time.",
        spanish: "Habríamos ganado el contrato si hubiéramos enviado la oferta a tiempo.",
        highlight: "would have won, had submitted",
      },
      {
        english: "I wouldn't have made that mistake if I had known the rules.",
        spanish: "No habría cometido ese error si hubiera conocido las reglas.",
        highlight: "wouldn't have made, had known",
      },
    ],
  },
  {
    label: "Softening modals: might, may, could",
    labelEs: "Modales suavizadores: might, may, could",
    description:
      "These three modals turn strong statements into possibilities. They're how educated speakers share opinions without sounding arrogant or absolute.",
    descriptionEs:
      "Estos tres modales convierten declaraciones fuertes en posibilidades. Son cómo los hablantes educados comparten opiniones sin sonar arrogantes o absolutos.",
    sentences: [
      {
        english: "This might be the wrong approach.",
        spanish: "Este podría ser el enfoque equivocado.",
        highlight: "might be",
      },
      {
        english: "There may be a simpler solution we haven't considered.",
        spanish: "Puede haber una solución más simple que no hemos considerado.",
        highlight: "may be",
      },
      {
        english: "We could be looking at this the wrong way.",
        spanish: "Podríamos estar viendo esto de la manera equivocada.",
        highlight: "could be",
      },
      {
        english: "It might make sense to wait until next quarter.",
        spanish: "Podría tener sentido esperar hasta el próximo trimestre.",
        highlight: "might make sense",
      },
    ],
  },
  {
    label: "Combining third conditional with softening modals",
    labelEs: "Combinando tercer condicional con modales suavizadores",
    description:
      "Replace 'would have' with 'might have' or 'could have' to soften the third conditional. The result is even more diplomatic — you're imagining a possible past, not stating a definite one.",
    descriptionEs:
      "Reemplaza 'would have' con 'might have' o 'could have' para suavizar el tercer condicional. El resultado es aún más diplomático — estás imaginando un pasado posible, no declarando uno definitivo.",
    sentences: [
      {
        english: "If we had acted faster, we might have avoided the issue.",
        spanish: "Si hubiéramos actuado más rápido, podríamos haber evitado el problema.",
        highlight: "might have avoided",
      },
      {
        english: "She could have been promoted if she had spoken up.",
        spanish: "Ella podría haber sido promovida si hubiera hablado.",
        highlight: "could have been",
      },
      {
        english: "We may have missed an important detail in the contract.",
        spanish: "Puede que hayamos pasado por alto un detalle importante en el contrato.",
        highlight: "may have missed",
      },
      {
        english: "Things might have turned out differently if I had known earlier.",
        spanish: "Las cosas podrían haber resultado diferentes si yo hubiera sabido antes.",
        highlight: "might have turned out",
      },
    ],
  },
  {
    label: "Three conditionals — side by side",
    labelEs: "Los tres condicionales — lado a lado",
    description:
      "First = real future. Second = hypothetical present/future. Third = imagined past. Same structure, different time and reality level.",
    descriptionEs:
      "Primero = futuro real. Segundo = presente/futuro hipotético. Tercero = pasado imaginado. Misma estructura, diferente tiempo y nivel de realidad.",
    sentences: [
      {
        english: "If it rains, I will stay home. (1st — real future)",
        spanish: "Si llueve, me quedaré en casa. (1ro — futuro real)",
        highlight: "will stay",
      },
      {
        english: "If it rained more often here, I would buy an umbrella. (2nd — hypothetical)",
        spanish: "Si lloviera más a menudo aquí, compraría un paraguas. (2do — hipotético)",
        highlight: "would buy",
      },
      {
        english: "If it had rained yesterday, we would have stayed home. (3rd — imagined past)",
        spanish: "Si hubiera llovido ayer, nos habríamos quedado en casa. (3ro — pasado imaginado)",
        highlight: "would have stayed",
      },
      {
        english: "If I had studied harder, I might have a better job today. (mixed — past affecting present)",
        spanish: "Si hubiera estudiado más, podría tener un mejor trabajo hoy. (mixto — pasado afectando presente)",
        highlight: "had studied, might have",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes with Conditionals & Opinions",
  titleEs: "Errores Comunes con Condicionales y Opiniones",
  description:
    "These are the errors that make B1 speakers sound either too blunt or grammatically wrong when discussing ideas.",
  descriptionEs:
    "Estos son los errores que hacen que los hablantes B1 suenen demasiado directos o gramaticalmente incorrectos al discutir ideas.",
  items: [
    {
      incorrect: "If I would have known, I would have called you.",
      correct: "If I had known, I would have called you.",
      incorrectHighlight: "If I would have known",
      correctHighlight: "If I had known",
      explanation:
        "Same rule as the second conditional: NEVER use 'would' in the 'if' clause. The third conditional uses 'had + past participle' in the if-clause: 'If I HAD known'. This is the most stubborn error in advanced English.",
      explanationEs:
        "Misma regla que el segundo condicional: NUNCA uses 'would' en la cláusula 'if'. El tercer condicional usa 'had + participio' en la cláusula if: 'If I HAD known'. Este es el error más persistente en inglés avanzado.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "I am not agree with you.",
      correct: "I don't agree with you.",
      incorrectHighlight: "I am not agree",
      correctHighlight: "I don't agree",
      explanation:
        "'Agree' is a regular verb in English, not an adjective. Spanish 'estar de acuerdo' uses 'estar' (to be), which tempts learners to say 'I am agree'. In English, you conjugate it directly: 'I agree', 'I don't agree', 'I agreed'.",
      explanationEs:
        "'Agree' es un verbo regular en inglés, no un adjetivo. 'Estar de acuerdo' usa 'estar', lo que tienta a los estudiantes a decir 'I am agree'. En inglés, lo conjugas directamente: 'I agree', 'I don't agree', 'I agreed'.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I am totally agree with that idea.",
      correct: "I totally agree with that idea.",
      incorrectHighlight: "I am totally agree",
      correctHighlight: "I totally agree",
      explanation:
        "Same root issue. 'Agree' takes adverbs directly: 'I totally agree', 'I completely agree', 'I strongly agree'. Never combine 'I am' with 'agree' — they're different parts of speech.",
      explanationEs:
        "Misma raíz del problema. 'Agree' toma adverbios directamente: 'I totally agree', 'I completely agree', 'I strongly agree'. Nunca combines 'I am' con 'agree' — son diferentes partes del habla.",
      errorType: "literal-translation",
    },
    {
      incorrect: "In my opinion, the project will be finished if we would have more time.",
      correct: "In my opinion, the project would be finished if we had more time.",
      incorrectHighlight: "will be finished... we would have",
      correctHighlight: "would be finished... we had",
      explanation:
        "This sentence mixes two structures incorrectly. It's a hypothetical (we don't have more time), so it needs the second conditional: 'would be finished... if we had more time'. Don't put 'would' in the 'if' clause.",
      explanationEs:
        "Esta oración mezcla dos estructuras incorrectamente. Es hipotético (no tenemos más tiempo), así que necesita el segundo condicional: 'would be finished... if we had more time'. No pongas 'would' en la cláusula 'if'.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "You don't have reason about this.",
      correct: "You're not right about this.",
      incorrectHighlight: "don't have reason",
      correctHighlight: "are not right",
      explanation:
        "Spanish 'tener razón' translates literally as 'to have reason', but in English we say 'to BE right'. The polite negative is 'I'm not sure that's right' or 'I don't think that's quite right' — 'you're wrong' is too direct.",
      explanationEs:
        "'Tener razón' se traduce literalmente como 'to have reason', pero en inglés decimos 'to BE right'. El negativo cortés es 'I'm not sure that's right' o 'I don't think that's quite right' — 'you're wrong' es demasiado directo.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I don't agree because it is bad idea.",
      correct: "I'm not sure I agree — it might not be the best approach.",
      incorrectHighlight: "I don't agree because it is bad idea",
      correctHighlight: "I'm not sure I agree — it might not be the best approach",
      explanation:
        "Two upgrades. First: 'I don't agree because it is bad' is grammatically OK but socially blunt. Educated speakers soften with 'I'm not sure I agree' and use modals like 'might'. Second: 'a bad idea' needs the article 'a' — count nouns always need articles in English.",
      explanationEs:
        "Dos mejoras. Primero: 'I don't agree because it is bad' es gramaticalmente correcto pero socialmente directo. Los hablantes educados suavizan con 'I'm not sure I agree' y usan modales como 'might'. Segundo: 'a bad idea' necesita el artículo 'a' — los sustantivos contables siempre necesitan artículos.",
      errorType: "literal-translation",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "I see your point",
    spanishStress: "I SEE YOUR POINT",
    englishStress: "I see-yer POINT (rising)",
    tip: "When you say 'I see your point', the intonation rises slightly on 'point'. This signals that more is coming — your 'but' is on the way. Flat intonation here sounds dismissive.",
    tipEs:
      "Cuando dices 'I see your point', la entonación sube ligeramente en 'point'. Esto señala que viene más — tu 'but' está en camino. Una entonación plana aquí suena despectiva.",
  },
  {
    word: "you may be right",
    spanishStress: "YOU MAY BE RIGHT",
    englishStress: "yu may-bi RIGHT",
    tip: "'You may be' flows together as one unit: /yu mei bi/. The stress falls on 'right' at the end. This is the rhythm of professional concession — calm, deliberate, never rushed.",
    tipEs:
      "'You may be' fluye junto como una unidad: /yu mei bi/. El acento cae en 'right' al final. Este es el ritmo de la concesión profesional — calmado, deliberado, nunca apresurado.",
  },
  {
    word: "really?",
    spanishStress: "REALLY",
    englishStress: "REE-li (rising = surprise, falling = sarcasm)",
    tip: "Same word, two completely different meanings depending on intonation. Rising 'really?' = genuine surprise. Falling 'really.' = skepticism or sarcasm. Watch native speakers' faces — both are common.",
    tipEs:
      "Misma palabra, dos significados completamente diferentes según la entonación. 'Really?' subiendo = sorpresa genuina. 'Really.' bajando = escepticismo o sarcasmo. Observa las caras de los nativos — ambos son comunes.",
  },
  {
    word: "I'm afraid",
    spanishStress: "I AM AFRAID",
    englishStress: "aim-ə-FRAID (one breath)",
    tip: "'I'm afraid' as a softener (not literal fear) is said quickly, almost as one word: /aim ə FRAID/. It's the warning shot before bad news or disagreement. Slow it down only for emphasis.",
    tipEs:
      "'I'm afraid' como suavizador (no miedo literal) se dice rápidamente, casi como una palabra: /aim ə FRAID/. Es el aviso antes de malas noticias o desacuerdo. Solo se dice despacio para énfasis.",
  },
  {
    word: "I couldn't agree more",
    spanishStress: "I COULDN'T AGREE MORE",
    englishStress: "ai KUDN-ə-gree MORE",
    tip: "Counterintuitively, 'I couldn't agree more' = 'I agree completely'. The stress falls on 'more', and 'couldn't' is reduced to /KUDN/. Native speakers say this fast — it's idiomatic.",
    tipEs:
      "Contraintuitivamente, 'I couldn't agree more' = 'estoy completamente de acuerdo'. El acento cae en 'more', y 'couldn't' se reduce a /KUDN/. Los nativos lo dicen rápido — es idiomático.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Opinion stems (the heart of the unit)
  { english: "In my opinion...", spanish: "En mi opinión...", type: "expression" },
  { english: "From my perspective...", spanish: "Desde mi perspectiva...", type: "expression" },
  { english: "The way I see it...", spanish: "La forma en que lo veo...", type: "expression" },
  { english: "It seems to me that...", spanish: "Me parece que...", type: "expression" },
  { english: "I might be wrong, but...", spanish: "Podría estar equivocado, pero...", type: "expression" },
  { english: "I tend to think that...", spanish: "Tiendo a pensar que...", type: "expression" },
  // Agreement
  { english: "That's a good point.", spanish: "Ese es un buen punto.", type: "expression" },
  { english: "I couldn't agree more.", spanish: "No podría estar más de acuerdo.", type: "expression" },
  { english: "You make a fair point.", spanish: "Haces un buen punto.", type: "expression" },
  // Polite disagreement
  { english: "I see your point, but...", spanish: "Entiendo tu punto, pero...", type: "expression" },
  { english: "I'm not sure I agree.", spanish: "No estoy seguro de estar de acuerdo.", type: "expression" },
  { english: "With respect, I'd have to disagree.", spanish: "Con respeto, tendría que discrepar.", type: "expression" },
  { english: "I'm afraid I see it differently.", spanish: "Me temo que lo veo diferente.", type: "expression" },
  // Conceding
  { english: "You may be right about...", spanish: "Puede que tengas razón sobre...", type: "expression" },
  { english: "Fair enough, but...", spanish: "Es justo, pero...", type: "expression" },
  { english: "I hadn't thought of it that way.", spanish: "No lo había pensado de esa manera.", type: "expression" },
  // Modals for softening
  { english: "It might be...", spanish: "Podría ser...", type: "expression" },
  { english: "There may be...", spanish: "Puede haber...", type: "expression" },
  { english: "We could be...", spanish: "Podríamos estar...", type: "expression" },
  // Discussion verbs
  { english: "to consider", spanish: "considerar", type: "verb" },
  { english: "to argue", spanish: "argumentar", type: "verb" },
  { english: "to challenge", spanish: "cuestionar / desafiar", type: "verb" },
  { english: "to acknowledge", spanish: "reconocer", type: "verb" },
  { english: "to clarify", spanish: "aclarar", type: "verb" },
  { english: "to elaborate", spanish: "elaborar / desarrollar", type: "verb" },
];
