// Unit 9: "Relationships and Feelings" — Full course content
// Theme: Family, friends, conflicts, emotions
// Grammar: Wish/regret structures + 'would' for hypothetical situations
// Pronunciation: Emotional intonation
// Section A: WishTransformer (transform realities into wishes/regrets)

import type {
  Dialogue,
  ErrorCorrectionSet,
  IntermediateVocabItem,
} from "./types";
import type { WishTransformation } from "../../components/course/WishTransformer";
import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

// ─── Section A: Wish Transformer ─────────────────────────────────────────────

export const wishTransformations: WishTransformation[] = [
  {
    feeling: "Frustration about a present situation",
    feelingEs: "Frustración sobre una situación presente",
    reality: "I don't speak English fluently.",
    realityEs: "No hablo inglés con fluidez.",
    wish: "I wish I spoke English fluently.",
    wishEs: "Ojalá hablara inglés con fluidez.",
    wishType: "present",
    whyTransform:
      "For wishes about the present, use 'wish' + past simple. The past tense form signals that you're talking about something that ISN'T true right now. The Spanish equivalent uses subjunctive ('hablara'), so the leap is the same.",
    whyTransformEs:
      "Para deseos sobre el presente, usa 'wish' + pasado simple. El pasado señala que estás hablando de algo que NO es cierto ahora mismo. El español usa subjuntivo ('hablara'), así que el salto es el mismo.",
  },
  {
    feeling: "Regret about a past decision",
    feelingEs: "Arrepentimiento sobre una decisión pasada",
    reality: "I didn't study harder for the exam.",
    realityEs: "No estudié más para el examen.",
    wish: "I wish I had studied harder for the exam.",
    wishEs: "Ojalá hubiera estudiado más para el examen.",
    wishType: "past",
    whyTransform:
      "For regrets about the past, use 'wish' + past perfect ('had + past participle'). This is how English expresses the deep regret of 'if only I had done X'. The construction is rare in casual speech but powerful when used.",
    whyTransformEs:
      "Para arrepentimientos sobre el pasado, usa 'wish' + pasado perfecto ('had + participio'). Así es como el inglés expresa el arrepentimiento profundo de 'si tan solo hubiera hecho X'.",
  },
  {
    feeling: "Frustration with someone else's behavior",
    feelingEs: "Frustración con el comportamiento de otra persona",
    reality: "My brother always interrupts me.",
    realityEs: "Mi hermano siempre me interrumpe.",
    wish: "I wish my brother wouldn't interrupt me all the time.",
    wishEs: "Ojalá mi hermano no me interrumpiera todo el tiempo.",
    wishType: "present",
    whyTransform:
      "When you're complaining about someone's annoying behavior, use 'wish' + 'would/wouldn't'. This specifically expresses irritation with a habit. You can't use this form for yourself — only for others.",
    whyTransformEs:
      "Cuando te quejas del comportamiento molesto de alguien, usa 'wish' + 'would/wouldn't'. Esto expresa específicamente irritación con un hábito. No puedes usar esta forma para ti mismo — solo para otros.",
  },
  {
    feeling: "Longing for an impossible past",
    feelingEs: "Anhelo por un pasado imposible",
    reality: "I never met my grandfather.",
    realityEs: "Nunca conocí a mi abuelo.",
    wish: "If only I had met my grandfather.",
    wishEs: "Si tan solo hubiera conocido a mi abuelo.",
    wishType: "regret",
    whyTransform:
      "'If only' is a more dramatic alternative to 'I wish'. Use it for the deepest regrets — things that really matter to you. The grammar is the same as 'I wish' (past perfect for past regrets), but the emotional weight is heavier.",
    whyTransformEs:
      "'If only' es una alternativa más dramática a 'I wish'. Úsalo para los arrepentimientos más profundos. La gramática es la misma que 'I wish' (pasado perfecto para arrepentimientos del pasado), pero el peso emocional es mayor.",
  },
  {
    feeling: "Imagining a better life",
    feelingEs: "Imaginando una vida mejor",
    reality: "I live in a small apartment.",
    realityEs: "Vivo en un apartamento pequeño.",
    wish: "I wish I lived in a bigger place.",
    wishEs: "Ojalá viviera en un lugar más grande.",
    wishType: "present",
    whyTransform:
      "Note the verb form: 'lived', not 'live'. The past tense after 'wish' marks the wish as hypothetical. Spanish does the same thing with the imperfect subjunctive ('viviera').",
    whyTransformEs:
      "Nota la forma verbal: 'lived', no 'live'. El pasado después de 'wish' marca el deseo como hipotético. El español hace lo mismo con el imperfecto del subjuntivo ('viviera').",
  },
  {
    feeling: "Hoping for a better future outcome",
    feelingEs: "Esperando un mejor resultado futuro",
    reality: "It will probably rain on my wedding day.",
    realityEs: "Probablemente lloverá el día de mi boda.",
    wish: "I hope it doesn't rain on my wedding day.",
    wishEs: "Espero que no llueva el día de mi boda.",
    wishType: "future",
    whyTransform:
      "For future wishes, English uses 'hope', not 'wish'. 'Wish' is for things that are unlikely or impossible. 'Hope' is for things that are still possible. Spanish 'esperar' covers both, which causes confusion.",
    whyTransformEs:
      "Para deseos futuros, el inglés usa 'hope', no 'wish'. 'Wish' es para cosas improbables o imposibles. 'Hope' es para cosas todavía posibles. El español 'esperar' cubre ambos, lo que causa confusión.",
  },
  {
    feeling: "Apologizing with regret",
    feelingEs: "Disculpándose con arrepentimiento",
    reality: "I shouted at her in anger.",
    realityEs: "Le grité con enojo.",
    wish: "I wish I hadn't shouted at her. I should have stayed calm.",
    wishEs: "Ojalá no le hubiera gritado. Debería haberme mantenido calmado.",
    wishType: "regret",
    whyTransform:
      "Two structures combined: 'wish I hadn't' (past regret) + 'should have' (the polite way to admit a past mistake). 'Should have' literally means 'the right thing would have been to...' — it's how educated speakers acknowledge wrongdoing.",
    whyTransformEs:
      "Dos estructuras combinadas: 'wish I hadn't' (arrepentimiento del pasado) + 'should have' (la forma cortés de admitir un error pasado). 'Should have' significa literalmente 'lo correcto habría sido...' — es cómo los hablantes educados reconocen errores.",
  },
  {
    feeling: "Quietly wanting more time with someone",
    feelingEs: "Queriendo silenciosamente más tiempo con alguien",
    reality: "We don't see each other often.",
    realityEs: "No nos vemos a menudo.",
    wish: "I wish we saw each other more often. I'd love to spend more time with you.",
    wishEs: "Ojalá nos viéramos más a menudo. Me encantaría pasar más tiempo contigo.",
    wishType: "present",
    whyTransform:
      "This combination — 'wish' for the situation + 'I'd love to' for the desire — is one of the warmest things you can say in English. It expresses real affection without sounding desperate or demanding.",
    whyTransformEs:
      "Esta combinación — 'wish' para la situación + 'I'd love to' para el deseo — es una de las cosas más cálidas que puedes decir en inglés. Expresa afecto real sin sonar desesperado o demandante.",
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "An Honest Conversation",
    titleEs: "Una Conversación Honesta",
    setting: "Two old friends reconnect after a long time apart and share regrets",
    settingEs: "Dos viejos amigos se reconectan después de mucho tiempo y comparten arrepentimientos",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Elena",
        speakerLabelEs: "Elena",
        english:
          "It's been so long. I wish we hadn't lost touch after college.",
        spanish:
          "Ha pasado tanto tiempo. Ojalá no hubiéramos perdido el contacto después de la universidad.",
        highlight: "I wish we hadn't lost touch",
      },
      {
        speaker: "B",
        speakerLabel: "David",
        speakerLabelEs: "David",
        english:
          "I know. I think about that sometimes. If I had reached out more, things would have been different.",
        spanish:
          "Lo sé. Pienso en eso a veces. Si hubiera buscado más contacto, las cosas habrían sido diferentes.",
        highlight: "If I had reached out / would have been different",
      },
      {
        speaker: "A",
        speakerLabel: "Elena",
        speakerLabelEs: "Elena",
        english:
          "It wasn't your fault. I should have called too. I just got caught up in work and life.",
        spanish:
          "No fue tu culpa. Yo también debería haber llamado. Solo me enredé en el trabajo y la vida.",
        highlight: "I should have called",
      },
      {
        speaker: "B",
        speakerLabel: "David",
        speakerLabelEs: "David",
        english:
          "Well, we're here now. I hope we can stay in touch from now on.",
        spanish:
          "Bueno, estamos aquí ahora. Espero que podamos mantenernos en contacto de ahora en adelante.",
        highlight: "I hope we can stay in touch",
      },
      {
        speaker: "A",
        speakerLabel: "Elena",
        speakerLabelEs: "Elena",
        english:
          "I'd really like that. You know, I always wished you had come to visit me in Madrid that summer.",
        spanish:
          "De verdad me gustaría eso. Sabes, siempre deseé que hubieras venido a visitarme a Madrid ese verano.",
        highlight: "wished you had come",
      },
      {
        speaker: "B",
        speakerLabel: "David",
        speakerLabelEs: "David",
        english:
          "I wanted to. If only I'd had the money back then. I was completely broke.",
        spanish:
          "Quería ir. Si tan solo hubiera tenido dinero entonces. Estaba completamente quebrado.",
        highlight: "If only I'd had the money",
      },
      {
        speaker: "A",
        speakerLabel: "Elena",
        speakerLabelEs: "Elena",
        english:
          "Maybe next year? I'd love to show you around. It would mean a lot to me.",
        spanish:
          "¿Quizás el próximo año? Me encantaría mostrarte la ciudad. Significaría mucho para mí.",
        highlight: "I'd love to / It would mean",
      },
      {
        speaker: "B",
        speakerLabel: "David",
        speakerLabelEs: "David",
        english:
          "I'll be there. I promise this time I won't let life get in the way.",
        spanish:
          "Estaré ahí. Prometo que esta vez no dejaré que la vida se interponga.",
        highlight: "I won't let life get in the way",
      },
    ],
    keyPhrases: [
      {
        english: "I wish we hadn't lost touch.",
        spanish: "Ojalá no hubiéramos perdido el contacto.",
        note: "The most common past regret structure in real conversations between old friends.",
        noteEs: "La estructura de arrepentimiento del pasado más común en conversaciones reales entre viejos amigos.",
      },
      {
        english: "I should have called.",
        spanish: "Debería haber llamado.",
        note: "The mature, accountable way to admit a past mistake. Notice 'should have' = 'should've' in speech.",
        noteEs: "La forma madura y responsable de admitir un error pasado. Nota que 'should have' = 'should've' en el habla.",
      },
      {
        english: "It would mean a lot to me.",
        spanish: "Significaría mucho para mí.",
        note: "One of the most emotionally honest phrases in English. Use it sparingly — it's powerful.",
        noteEs: "Una de las frases emocionalmente más honestas en inglés. Úsala con moderación — es poderosa.",
      },
    ],
  },
];

// ─── Section C: Structure Builder ────────────────────────────────────────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "Wishes about the present",
    labelEs: "Deseos sobre el presente",
    description:
      "Structure: wish + past simple. Use it for things that are NOT true right now but you wish were. The past tense signals the unreality.",
    descriptionEs:
      "Estructura: wish + pasado simple. Úsalo para cosas que NO son ciertas ahora mismo pero desearías que lo fueran. El pasado señala la irrealidad.",
    sentences: [
      {
        english: "I wish I had more free time.",
        spanish: "Ojalá tuviera más tiempo libre.",
        highlight: "wish I had",
      },
      {
        english: "She wishes she lived closer to her family.",
        spanish: "Ella desearía vivir más cerca de su familia.",
        highlight: "wishes she lived",
      },
      {
        english: "I wish I were taller.",
        spanish: "Ojalá fuera más alto.",
        highlight: "wish I were",
      },
      {
        english: "We wish you were here with us.",
        spanish: "Desearíamos que estuvieras aquí con nosotros.",
        highlight: "wish you were",
      },
    ],
  },
  {
    label: "Wishes/regrets about the past",
    labelEs: "Deseos/arrepentimientos sobre el pasado",
    description:
      "Structure: wish + past perfect ('had + past participle'). For things that already happened (or didn't happen) and can't be changed.",
    descriptionEs:
      "Estructura: wish + pasado perfecto ('had + participio'). Para cosas que ya sucedieron (o no sucedieron) y no se pueden cambiar.",
    sentences: [
      {
        english: "I wish I had studied medicine.",
        spanish: "Ojalá hubiera estudiado medicina.",
        highlight: "wish I had studied",
      },
      {
        english: "He wishes he hadn't said those words.",
        spanish: "Él desearía no haber dicho esas palabras.",
        highlight: "wishes he hadn't said",
      },
      {
        english: "I wish I had told her how I felt before she left.",
        spanish: "Ojalá le hubiera dicho lo que sentía antes de que se fuera.",
        highlight: "wish I had told",
      },
      {
        english: "We wish we had bought that house when we had the chance.",
        spanish: "Desearíamos haber comprado esa casa cuando tuvimos la oportunidad.",
        highlight: "wish we had bought",
      },
    ],
  },
  {
    label: "'Should have' for regret",
    labelEs: "'Should have' para arrepentimiento",
    description:
      "Structure: should have + past participle. The mature, accountable way to acknowledge a past mistake. Often contracted to 'should've'.",
    descriptionEs:
      "Estructura: should have + participio. La forma madura y responsable de reconocer un error pasado. Frecuentemente contraído a 'should've'.",
    sentences: [
      {
        english: "I should have called you back sooner. I'm sorry.",
        spanish: "Debería haberte devuelto la llamada antes. Lo siento.",
        highlight: "should have called",
      },
      {
        english: "You shouldn't have said that to her.",
        spanish: "No deberías haberle dicho eso.",
        highlight: "shouldn't have said",
      },
      {
        english: "We should have left earlier to avoid the traffic.",
        spanish: "Deberíamos haber salido antes para evitar el tráfico.",
        highlight: "should have left",
      },
      {
        english: "He should have apologized when he had the chance.",
        spanish: "Debería haberse disculpado cuando tuvo la oportunidad.",
        highlight: "should have apologized",
      },
    ],
  },
  {
    label: "'Wish' + would for annoying habits",
    labelEs: "'Wish' + would para hábitos molestos",
    description:
      "Structure: wish + subject + would/wouldn't + base verb. ONLY for complaining about someone else's repeated behavior. You cannot use this for yourself.",
    descriptionEs:
      "Estructura: wish + sujeto + would/wouldn't + verbo base. SOLO para quejarse del comportamiento repetido de otra persona. No puedes usarlo para ti mismo.",
    sentences: [
      {
        english: "I wish my neighbors wouldn't play music so late at night.",
        spanish: "Ojalá mis vecinos no pusieran música tan tarde por la noche.",
        highlight: "wish... wouldn't play",
      },
      {
        english: "She wishes her boss would give her more credit.",
        spanish: "Ella desearía que su jefe le diera más crédito.",
        highlight: "wishes... would give",
      },
      {
        english: "I wish you would listen when I'm trying to explain something.",
        spanish: "Ojalá escucharas cuando estoy tratando de explicar algo.",
        highlight: "wish you would listen",
      },
      {
        english: "We wish the weather would improve before the weekend.",
        spanish: "Desearíamos que el clima mejorara antes del fin de semana.",
        highlight: "wish... would improve",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes with Wishes & Regrets",
  titleEs: "Errores Comunes con Deseos y Arrepentimientos",
  description:
    "Wishes and regrets are emotionally important — getting them wrong can change the meaning of what you want to say. Catch these errors before they slip out.",
  descriptionEs:
    "Los deseos y arrepentimientos son emocionalmente importantes — equivocarse puede cambiar el significado de lo que quieres decir. Detecta estos errores antes de que se te escapen.",
  items: [
    {
      incorrect: "I wish I have more money.",
      correct: "I wish I had more money.",
      incorrectHighlight: "wish I have",
      correctHighlight: "wish I had",
      explanation:
        "After 'wish', use the PAST tense, not the present — even when talking about a present situation. The past form ('had') signals that the wish is hypothetical (you don't actually have more money). This is unintuitive but absolute.",
      explanationEs:
        "Después de 'wish', usa el PASADO, no el presente — incluso cuando hablas de una situación presente. La forma pasada ('had') señala que el deseo es hipotético. Esto es contraintuitivo pero absoluto.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "I wish I would have studied harder.",
      correct: "I wish I had studied harder.",
      incorrectHighlight: "wish I would have studied",
      correctHighlight: "wish I had studied",
      explanation:
        "For past regrets, use 'wish + had + past participle' — never 'would have'. This is a famous mistake even native English speakers make. 'Would have' belongs in conditional sentences ('I would have studied IF...'), not after 'wish'.",
      explanationEs:
        "Para arrepentimientos del pasado, usa 'wish + had + participio' — nunca 'would have'. Este es un error famoso que incluso los hablantes nativos cometen. 'Would have' pertenece a oraciones condicionales, no después de 'wish'.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "I hope I had more time yesterday.",
      correct: "I wish I had had more time yesterday.",
      incorrectHighlight: "I hope I had",
      correctHighlight: "I wish I had had",
      explanation:
        "'Hope' is for things that are STILL POSSIBLE in the future. For things that already happened, use 'wish + had + past participle'. So 'wish I had had' (not a typo — past perfect of 'have' really is 'had had').",
      explanationEs:
        "'Hope' es para cosas que TODAVÍA SON POSIBLES en el futuro. Para cosas que ya sucedieron, usa 'wish + had + participio'. Así que 'wish I had had' (no es un error — el pasado perfecto de 'have' realmente es 'had had').",
      errorType: "literal-translation",
    },
    {
      incorrect: "I wish you to call me more often.",
      correct: "I wish you would call me more often.",
      incorrectHighlight: "wish you to call",
      correctHighlight: "wish you would call",
      explanation:
        "'Wish' doesn't take 'to + verb' like Spanish 'desear' does. For a present complaint about someone's behavior, use 'wish + subject + would'. 'I wish you to' is a literal Spanish translation that sounds wrong in English.",
      explanationEs:
        "'Wish' no toma 'to + verbo' como 'desear' en español. Para una queja presente sobre el comportamiento de alguien, usa 'wish + sujeto + would'. 'I wish you to' es una traducción literal que suena mal.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I should called you yesterday.",
      correct: "I should have called you yesterday.",
      incorrectHighlight: "should called",
      correctHighlight: "should have called",
      explanation:
        "For past regrets with 'should', the structure is 'should HAVE + past participle' — never 'should + past tense'. In speech this is contracted to 'should've called' (NOT 'should of', even though it sounds that way).",
      explanationEs:
        "Para arrepentimientos del pasado con 'should', la estructura es 'should HAVE + participio' — nunca 'should + pasado'. En el habla se contrae a 'should've called' (NO 'should of', aunque suene así).",
      errorType: "tense-confusion",
    },
    {
      incorrect: "I wish I was more patient.",
      correct: "I wish I were more patient.",
      incorrectHighlight: "wish I was",
      correctHighlight: "wish I were",
      explanation:
        "After 'wish' (and after 'if I'), the verb 'be' uses 'were' for ALL persons — 'I were', 'she were', 'it were'. This is the subjunctive mood. 'Was' is heard in casual speech but 'were' is the educated B2+ choice.",
      explanationEs:
        "Después de 'wish' (y después de 'if I'), el verbo 'be' usa 'were' para TODAS las personas — 'I were', 'she were', 'it were'. Este es el modo subjuntivo. 'Was' se escucha en el habla casual pero 'were' es la opción educada B2+.",
      errorType: "tense-confusion",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "I wish",
    spanishStress: "I WISH",
    englishStress: "ai-WISH (rising emotion)",
    tip: "'I wish' carries emotional weight. The pitch rises on 'wish' — it's almost a sigh. Flat 'I wish' sounds robotic. Listen to native speakers express regret: there's always a slight melodic lift.",
    tipEs:
      "'I wish' carga peso emocional. El tono sube en 'wish' — es casi un suspiro. 'I wish' plano suena robótico. Escucha a los nativos expresar arrepentimiento: siempre hay una leve elevación melódica.",
  },
  {
    word: "should've",
    spanishStress: "SHOULD HAVE",
    englishStress: "SHUD-əv",
    tip: "'Should have' = 'should've' = /SHUD-əv/. NOT 'should of' (though it sounds like it). Native speakers say this hundreds of times a day. Master this contraction or you'll sound textbook.",
    tipEs:
      "'Should have' = 'should've' = /SHUD-əv/. NO 'should of' (aunque suene así). Los nativos lo dicen cientos de veces al día. Domina esta contracción o sonarás como libro de texto.",
  },
  {
    word: "If only...",
    spanishStress: "IF ONLY",
    englishStress: "if-ON-li (long, slow)",
    tip: "'If only' is said slowly and with a heavier voice. The whole phrase carries longing. Compare quick 'I wish' (mild regret) to drawn-out 'If only...' (deep regret) — the rhythm tells the listener how much it matters.",
    tipEs:
      "'If only' se dice lentamente y con voz más pesada. Toda la frase carga anhelo. Compara 'I wish' rápido (arrepentimiento leve) con 'If only...' alargado (arrepentimiento profundo) — el ritmo le dice al oyente cuánto importa.",
  },
  {
    word: "would've",
    spanishStress: "WOULD HAVE",
    englishStress: "WUD-əv",
    tip: "Same pattern as 'should've'. 'Would have' = 'would've' = /WUD-əv/. 'I would've come' = 'ai WUD-əv KAM'. The 'have' is always reduced to /əv/ after modals — never fully pronounced.",
    tipEs:
      "Mismo patrón que 'should've'. 'Would have' = 'would've' = /WUD-əv/. 'I would've come' = 'ai WUD-əv KAM'. El 'have' siempre se reduce a /əv/ después de modales — nunca se pronuncia completo.",
  },
  {
    word: "I'm sorry",
    spanishStress: "I AM SORRY",
    englishStress: "aim-SOR-i (falling)",
    tip: "'I'm sorry' has a falling intonation that signals sincerity. Rising intonation makes it sound like a question or sarcasm. The drop on 'sorry' is what makes the apology feel real to the listener.",
    tipEs:
      "'I'm sorry' tiene una entonación descendente que señala sinceridad. La entonación ascendente lo hace sonar como pregunta o sarcasmo. La caída en 'sorry' es lo que hace que la disculpa se sienta real.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Wish/regret expressions
  { english: "I wish I had...", spanish: "Ojalá tuviera...", type: "expression" },
  { english: "I wish I hadn't...", spanish: "Ojalá no hubiera...", type: "expression" },
  { english: "I wish I were...", spanish: "Ojalá fuera...", type: "expression" },
  { english: "If only...", spanish: "Si tan solo...", type: "expression" },
  { english: "I should have...", spanish: "Debería haber...", type: "expression" },
  { english: "I shouldn't have...", spanish: "No debería haber...", type: "expression" },
  { english: "I would have...", spanish: "Habría...", type: "expression" },
  // Hope (for the future)
  { english: "I hope you...", spanish: "Espero que...", type: "expression" },
  { english: "I hope we can...", spanish: "Espero que podamos...", type: "expression" },
  // Emotional/relational expressions
  { english: "I'm sorry.", spanish: "Lo siento.", type: "expression" },
  { english: "It would mean a lot to me.", spanish: "Significaría mucho para mí.", type: "expression" },
  { english: "I'd love to...", spanish: "Me encantaría...", type: "expression" },
  { english: "I miss you.", spanish: "Te extraño.", type: "expression" },
  { english: "It's not your fault.", spanish: "No es tu culpa.", type: "expression" },
  // Relationship vocabulary
  { english: "to lose touch", spanish: "perder el contacto", type: "expression" },
  { english: "to stay in touch", spanish: "mantenerse en contacto", type: "expression" },
  { english: "to make up", spanish: "reconciliarse", type: "phrasal-verb" },
  // Feeling words
  { english: "regret", spanish: "arrepentimiento", type: "noun" },
  { english: "longing", spanish: "anhelo", type: "noun" },
  { english: "loneliness", spanish: "soledad", type: "noun" },
  { english: "gratitude", spanish: "gratitud", type: "noun" },
  // Relationship verbs
  { english: "to forgive", spanish: "perdonar", type: "verb" },
  { english: "to apologize", spanish: "disculparse", type: "verb" },
  { english: "to reconcile", spanish: "reconciliarse", type: "verb" },
  { english: "to confide", spanish: "confiar (en alguien)", type: "verb" },
  { english: "to appreciate", spanish: "apreciar", type: "verb" },
];
