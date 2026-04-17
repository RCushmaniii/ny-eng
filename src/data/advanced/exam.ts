// Final Exam: "Speak with Confidence" — Advanced Course Comprehensive Assessment
// 20 multiple-choice questions covering all 10 advanced units (2 per unit)
// Reuses ExamQuestion / ExamOption / ExamResult types

import type { ExamQuestion, ExamResult } from "../course/exam";
import type { ScoreTier, ScoreTierDefinition } from "../../components/course/CourseExam";

export const examMeta = {
  title: "Final Exam",
  titleEs: "Examen Final",
  subtitle: "Speak with Confidence — Comprehensive Assessment",
  subtitleEs: "Habla con Confianza — Evaluación Integral",
  description:
    "20 questions covering strong phrasing, word traps, pronouns, relative clauses, articles, pronunciation, contractions, prefixes & suffixes, sentence flow, and natural collocations — everything across all 10 units.",
  descriptionEs:
    "20 preguntas sobre frases fuertes, trampas de palabras, pronombres, cláusulas relativas, artículos, pronunciación, contracciones, prefijos y sufijos, fluidez de oraciones y colocaciones naturales — todo a lo largo de las 10 unidades.",
  passingScore: 70,
};

export const examQuestions: ExamQuestion[] = [
  // ─── Unit 1: Weak Phrasing → Strong Phrasing ──────────────────────────────
  {
    id: 1,
    unit: 1,
    category: "vocabulary",
    prompt: "Which sentence uses the strongest, most precise verb?",
    promptEs: "¿Qué oración usa el verbo más fuerte y preciso?",
    options: [
      { text: "She got a promotion last quarter.", correct: false },
      { text: "She earned a promotion last quarter.", correct: true },
      { text: "She had a promotion last quarter.", correct: false },
      { text: "She received a promotion last quarter.", correct: false },
    ],
    explanation:
      "'Earned' is the strongest choice — it implies merit and effort, not just luck or process. 'Got' is weak and vague. 'Received' is neutral. 'Had' is the weakest of all. Strong verbs carry meaning that weak verbs borrow from context.",
    explanationEs:
      "'Earned' es la opción más fuerte — implica mérito y esfuerzo, no solo suerte o proceso. 'Got' es débil y vago. 'Received' es neutral. 'Had' es el más débil de todos. Los verbos fuertes llevan significado que los débiles toman prestado del contexto.",
  },
  {
    id: 2,
    unit: 1,
    category: "grammar",
    prompt: "Which sentence removes the weak adverb correctly?",
    promptEs: "¿Qué oración elimina correctamente el adverbio débil?",
    options: [
      { text: "The results were very surprising.", correct: false },
      { text: "The results were really quite surprising.", correct: false },
      { text: "The results were startling.", correct: true },
      { text: "The results were very much surprising.", correct: false },
    ],
    explanation:
      "Replace 'very + adjective' with a single precise adjective that does the same work. 'Startling' means very surprising — but in one word, with more impact. Stacking adverbs like 'really quite' makes writing weaker, not stronger.",
    explanationEs:
      "Reemplaza 'very + adjetivo' con un solo adjetivo preciso que haga el mismo trabajo. 'Startling' significa muy sorprendente — pero en una sola palabra, con más impacto. Apilar adverbios como 'really quite' hace la escritura más débil, no más fuerte.",
  },

  // ─── Unit 2: Word Traps ────────────────────────────────────────────────────
  {
    id: 3,
    unit: 2,
    category: "grammar",
    prompt: "Choose the correct option: 'There are ___ students than last year.'",
    promptEs: "Elige la opción correcta: 'Hay ___ estudiantes que el año pasado.'",
    options: [
      { text: "less", correct: false },
      { text: "fewer", correct: true },
      { text: "lesser", correct: false },
      { text: "little", correct: false },
    ],
    explanation:
      "'Fewer' is used with countable nouns (students, cars, mistakes). 'Less' is used with uncountable nouns (water, time, money). Students are countable, so 'fewer' is correct. This is one of the most persistent word traps at advanced level.",
    explanationEs:
      "'Fewer' se usa con sustantivos contables (students, cars, mistakes). 'Less' se usa con sustantivos incontables (water, time, money). Los estudiantes son contables, así que 'fewer' es correcto.",
  },
  {
    id: 4,
    unit: 2,
    category: "vocabulary",
    prompt: "Which sentence uses 'win' correctly?",
    promptEs: "¿Qué oración usa 'win' correctamente?",
    options: [
      { text: "We won our competitor in the final round.", correct: false },
      { text: "We won the championship in the final round.", correct: true },
      { text: "We won against our competitor the trophy.", correct: false },
      { text: "We won our competitor's trophy.", correct: false },
    ],
    explanation:
      "You WIN a prize, game, or title — never a person. You BEAT a competitor. 'We won the championship' and 'we beat our competitor' are both correct. Mixing the two ('won our competitor') is a common word trap.",
    explanationEs:
      "Ganas un premio, juego o título — nunca una persona. VENCES a un competidor. 'We won the championship' y 'we beat our competitor' son ambos correctos. Mezclarlos ('won our competitor') es una trampa común.",
  },

  // ─── Unit 3: Pronouns Done Right ──────────────────────────────────────────
  {
    id: 5,
    unit: 3,
    category: "grammar",
    prompt: "Which sentence uses the correct pronoun?",
    promptEs: "¿Qué oración usa el pronombre correcto?",
    options: [
      { text: "Between you and I, the project is behind schedule.", correct: false },
      { text: "Between you and me, the project is behind schedule.", correct: true },
      { text: "Between yourself and I, the project is behind schedule.", correct: false },
      { text: "Between you and myself, the project is behind schedule.", correct: false },
    ],
    explanation:
      "After a preposition ('between'), always use object pronouns: me, him, her, us, them. 'Between you and I' is hypercorrection — it sounds formal but it's wrong. 'Between you and me' is correct. 'Myself' is a reflexive pronoun and cannot replace 'me' here.",
    explanationEs:
      "Después de una preposición ('between'), siempre usa pronombres de objeto: me, him, her, us, them. 'Between you and I' es hipercorrección — suena formal pero es incorrecto. 'Between you and me' es correcto.",
  },
  {
    id: 6,
    unit: 3,
    category: "grammar",
    prompt: "Which sentence uses a reflexive pronoun correctly?",
    promptEs: "¿Qué oración usa correctamente un pronombre reflexivo?",
    options: [
      { text: "Please send the report to myself by Friday.", correct: false },
      { text: "Please send the report to me by Friday.", correct: true },
      { text: "Please send the report to I by Friday.", correct: false },
      { text: "Please send the report to oneself by Friday.", correct: false },
    ],
    explanation:
      "Reflexive pronouns (myself, yourself, himself) are used when the subject and object are the same person, or for emphasis. 'Send it to myself' is incorrect because the sender and receiver are different people. The correct form is simply 'to me.'",
    explanationEs:
      "Los pronombres reflexivos (myself, yourself, himself) se usan cuando el sujeto y el objeto son la misma persona, o para énfasis. 'Send it to myself' es incorrecto porque el remitente y el receptor son personas diferentes. La forma correcta es simplemente 'to me.'",
  },

  // ─── Unit 4: Which, That, Who, When ───────────────────────────────────────
  {
    id: 7,
    unit: 4,
    category: "grammar",
    prompt: "Choose the correct relative pronoun: 'The report ___ I submitted yesterday was approved.'",
    promptEs: "Elige el pronombre relativo correcto: 'El informe ___ entregué ayer fue aprobado.'",
    options: [
      { text: "which", correct: false },
      { text: "who", correct: false },
      { text: "that", correct: true },
      { text: "whose", correct: false },
    ],
    explanation:
      "Use 'that' (or 'which') for defining relative clauses — clauses that identify which specific thing you mean. 'The report that I submitted' defines which report. 'Who' is for people only. 'Whose' shows possession.",
    explanationEs:
      "Usa 'that' (o 'which') para cláusulas relativas definitorias — cláusulas que identifican qué cosa específica mencionas. 'The report that I submitted' define cuál informe. 'Who' es solo para personas. 'Whose' muestra posesión.",
  },
  {
    id: 8,
    unit: 4,
    category: "grammar",
    prompt: "Which sentence punctuates a non-defining relative clause correctly?",
    promptEs: "¿Qué oración usa correctamente los signos de puntuación en una cláusula relativa no definitoria?",
    options: [
      { text: "My manager who joined last year approved the budget.", correct: false },
      { text: "My manager, which joined last year, approved the budget.", correct: false },
      { text: "My manager, who joined last year, approved the budget.", correct: true },
      { text: "My manager that joined last year approved the budget.", correct: false },
    ],
    explanation:
      "Non-defining relative clauses (extra information, not needed to identify the noun) use commas and 'which' or 'who' — never 'that.' Since there is only one manager, the clause is non-defining and needs commas.",
    explanationEs:
      "Las cláusulas relativas no definitorias (información extra, no necesaria para identificar el sustantivo) usan comas y 'which' o 'who' — nunca 'that.' Como solo hay un gerente, la cláusula es no definitoria y necesita comas.",
  },

  // ─── Unit 5: Articles ─────────────────────────────────────────────────────
  {
    id: 9,
    unit: 5,
    category: "grammar",
    prompt: "Which sentence uses the article correctly?",
    promptEs: "¿Qué oración usa el artículo correctamente?",
    options: [
      { text: "She plays a piano every evening.", correct: false },
      { text: "She plays piano every evening.", correct: false },
      { text: "She plays the piano every evening.", correct: true },
      { text: "She plays an piano every evening.", correct: false },
    ],
    explanation:
      "Musical instruments use 'the': play the piano, the guitar, the violin. This is a fixed rule — unlike sports (play tennis, play football) which use no article at all.",
    explanationEs:
      "Los instrumentos musicales usan 'the': play the piano, the guitar, the violin. Esta es una regla fija — a diferencia de los deportes (play tennis, play football) que no usan ningún artículo.",
  },
  {
    id: 10,
    unit: 5,
    category: "grammar",
    prompt: "Choose the correct option: '___ Mount Everest is the highest mountain in ___ world.'",
    promptEs: "Elige la opción correcta: '___ Monte Everest es la montaña más alta del ___ mundo.'",
    options: [
      { text: "The / a", correct: false },
      { text: "A / the", correct: false },
      { text: "— / the", correct: true },
      { text: "The / the", correct: false },
    ],
    explanation:
      "Named mountains, lakes, and most proper nouns use no article (zero article): Mount Everest, Lake Titicaca. But superlatives and unique references always use 'the': the highest mountain, the world. This combination — zero article for the name, 'the' for the superlative — is one of the article traps.",
    explanationEs:
      "Las montañas nombradas, lagos y la mayoría de los nombres propios no usan artículo (artículo cero): Mount Everest, Lake Titicaca. Pero los superlativos y referencias únicas siempre usan 'the': the highest mountain, the world.",
  },

  // ─── Unit 6: Pronunciation ────────────────────────────────────────────────
  {
    id: 11,
    unit: 6,
    category: "vocabulary",
    prompt: "How is the 's' pronounced in 'his friends'?",
    promptEs: "¿Cómo se pronuncia la 's' en 'his friends'?",
    options: [
      { text: "/s/ — like 'see'", correct: false },
      { text: "/z/ — like 'zoo'", correct: true },
      { text: "/ɪz/ — like a new syllable", correct: false },
      { text: "Silent — not pronounced", correct: false },
    ],
    explanation:
      "Plural 's' has three pronunciations: /s/ after voiceless sounds (cats, books), /z/ after voiced sounds and vowels (friends, days, his), and /ɪz/ after sibilant sounds (buses, watches). 'Friends' ends in /d/, a voiced sound — so the plural 's' is /z/.",
    explanationEs:
      "La 's' del plural tiene tres pronunciaciones: /s/ después de sonidos sin voz (cats, books), /z/ después de sonidos con voz y vocales (friends, days, his), y /ɪz/ después de sonidos sibilantes (buses, watches). 'Friends' termina en /d/, un sonido con voz — así que la 's' es /z/.",
  },
  {
    id: 12,
    unit: 6,
    category: "vocabulary",
    prompt: "Which word has the stress on the SECOND syllable?",
    promptEs: "¿Qué palabra tiene el acento en la SEGUNDA sílaba?",
    options: [
      { text: "photograph", correct: false },
      { text: "develop", correct: true },
      { text: "quality", correct: false },
      { text: "comfortable", correct: false },
    ],
    explanation:
      "'Develop' = de-VEL-op — stress on the second syllable. 'Photograph' = PHO-to-graph (first). 'Quality' = QUAL-i-ty (first). 'Comfortable' = COMF-ta-ble (first). Knowing which syllable to stress is one of the clearest markers of native-sounding pronunciation.",
    explanationEs:
      "'Develop' = de-VEL-op — acento en la segunda sílaba. 'Photograph' = PHO-to-graph (primera). 'Quality' = QUAL-i-ty (primera). 'Comfortable' = COMF-ta-ble (primera). Saber qué sílaba acentuar es uno de los marcadores más claros de una pronunciación natural.",
  },

  // ─── Unit 7: Contractions ─────────────────────────────────────────────────
  {
    id: 13,
    unit: 7,
    category: "grammar",
    prompt: "Which sentence uses contractions appropriately for a formal business email?",
    promptEs: "¿Qué oración usa contracciones apropiadamente para un correo formal de negocios?",
    options: [
      { text: "I'd've been happy to attend, but I wasn't available.", correct: false },
      { text: "I would have been happy to attend, but I was not available.", correct: true },
      { text: "I woulda been happy to attend but wasn't available.", correct: false },
      { text: "I'd been happy to attend but I'm not available.", correct: false },
    ],
    explanation:
      "In formal business writing, avoid contractions — especially stacked contractions like 'I'd've.' Write out 'would have' and 'was not' in full. Contractions are for spoken English and informal writing. Formal emails, reports, and presentations call for expanded forms.",
    explanationEs:
      "En escritura formal de negocios, evita las contracciones — especialmente las contracciones apiladas como 'I'd've.' Escribe 'would have' y 'was not' completos. Las contracciones son para el inglés hablado y la escritura informal.",
  },
  {
    id: 14,
    unit: 7,
    category: "grammar",
    prompt: "Which is the correct negative contraction?",
    promptEs: "¿Cuál es la contracción negativa correcta?",
    options: [
      { text: "He hasn't never missed a deadline.", correct: false },
      { text: "He has never missed a deadline.", correct: true },
      { text: "He hasn't never not missed a deadline.", correct: false },
      { text: "He don't never miss a deadline.", correct: false },
    ],
    explanation:
      "English uses single negation — never double negatives. 'Hasn't never' creates a double negative, which is grammatically wrong in standard English (two negatives cancel out and create a positive meaning). The correct form is 'has never' (present perfect + never).",
    explanationEs:
      "El inglés usa negación simple — nunca doble negación. 'Hasn't never' crea una doble negación, que es gramaticalmente incorrecta en inglés estándar (dos negativos se cancelan y crean un significado positivo). La forma correcta es 'has never.'",
  },

  // ─── Unit 8: Prefixes & Suffixes ──────────────────────────────────────────
  {
    id: 15,
    unit: 8,
    category: "vocabulary",
    prompt: "What does 'unsubstantiated' mean, based on its parts?",
    promptEs: "¿Qué significa 'unsubstantiated' según sus partes?",
    options: [
      { text: "very well supported by evidence", correct: false },
      { text: "not supported by solid evidence", correct: true },
      { text: "supported again after being challenged", correct: false },
      { text: "wrongly supported by evidence", correct: false },
    ],
    explanation:
      "Break it down: un- (not) + substantiate (to prove with solid evidence, from 'substance') + -ed (past participle). 'Unsubstantiated claims' = claims not backed by solid evidence. This is how to decode unfamiliar words — prefix + root + suffix.",
    explanationEs:
      "Desglosarlo: un- (no) + substantiate (probar con evidencia sólida, de 'substance') + -ed (participio pasado). 'Unsubstantiated claims' = afirmaciones no respaldadas por evidencia sólida. Así se decodifican palabras desconocidas — prefijo + raíz + sufijo.",
  },
  {
    id: 16,
    unit: 8,
    category: "vocabulary",
    prompt: "Which suffix turns an adjective into a noun meaning 'the state of being'?",
    promptEs: "¿Qué sufijo convierte un adjetivo en un sustantivo que significa 'el estado de ser'?",
    options: [
      { text: "-ful", correct: false },
      { text: "-en", correct: false },
      { text: "-ness", correct: true },
      { text: "-tion", correct: false },
    ],
    explanation:
      "'-ness' turns adjectives into nouns meaning the state or quality of: happy → happiness, kind → kindness, weak → weakness. '-ful' makes adjectives (powerful). '-en' makes verbs (strengthen). '-tion' makes nouns from verbs (communication), not adjectives.",
    explanationEs:
      "'-ness' convierte adjetivos en sustantivos que significan el estado o cualidad de: happy → happiness, kind → kindness, weak → weakness. '-ful' crea adjetivos (powerful). '-en' crea verbos (strengthen). '-tion' crea sustantivos de verbos (communication), no de adjetivos.",
  },

  // ─── Unit 9: Sentence Construction & Flow ────────────────────────────────
  {
    id: 17,
    unit: 9,
    category: "grammar",
    prompt: "Which version combines these sentences most professionally? 'She was tired. She finished the report. She sent it.'",
    promptEs: "¿Qué versión combina estas oraciones de manera más profesional? 'Ella estaba cansada. Terminó el informe. Lo envió.'",
    options: [
      { text: "She was tired but she finished the report and she sent it.", correct: false },
      { text: "Tired, she finished the report and sent it.", correct: true },
      { text: "She was tired and finished the report and sent it.", correct: false },
      { text: "Despite tired, she finished and sent the report.", correct: false },
    ],
    explanation:
      "Moving the adjective to the front as an introductory phrase ('Tired, she...') eliminates the repeated subject and creates a sophisticated, compact sentence. Chaining with 'and...and' is a run-on. 'Despite tired' is grammatically wrong — 'despite' requires a noun or gerund.",
    explanationEs:
      "Mover el adjetivo al frente como frase introductoria ('Tired, she...') elimina el sujeto repetido y crea una oración sofisticada y compacta. Encadenar con 'and...and' es una oración larga. 'Despite tired' es gramaticalmente incorrecto — 'despite' requiere un sustantivo o gerundio.",
  },
  {
    id: 18,
    unit: 9,
    category: "grammar",
    prompt: "Which sentence has the adverb in the correct position?",
    promptEs: "¿Qué oración tiene el adverbio en la posición correcta?",
    options: [
      { text: "She explained carefully the new system to her team.", correct: false },
      { text: "She carefully explained the new system to her team.", correct: true },
      { text: "She explained the new carefully system to her team.", correct: false },
      { text: "Carefully she explained new the system to her team.", correct: false },
    ],
    explanation:
      "Never place a manner adverb between the verb and its direct object. 'Carefully' belongs before the main verb ('She carefully explained...') or at the end of the sentence. Placing it between 'explained' and 'the new system' is a word-order error.",
    explanationEs:
      "Nunca coloques un adverbio de manera entre el verbo y su objeto directo. 'Carefully' va antes del verbo principal ('She carefully explained...') o al final de la oración. Colocarlo entre 'explained' y 'the new system' es un error de orden de palabras.",
  },

  // ─── Unit 10: Sounding Natural, Not Translated ───────────────────────────
  {
    id: 19,
    unit: 10,
    category: "vocabulary",
    prompt: "Which collocation is correct?",
    promptEs: "¿Qué colocación es correcta?",
    options: [
      { text: "We had a strong rain during the event.", correct: false },
      { text: "We had a heavy rain during the event.", correct: true },
      { text: "We had an intense rain during the event.", correct: false },
      { text: "We had a powerful rain during the event.", correct: false },
    ],
    explanation:
      "'Heavy rain' is the fixed English collocation — not 'strong,' 'intense,' or 'powerful.' Collocations are fixed word pairings that native speakers use instinctively. You can have strong wind, strong coffee, and strong feelings — but rain is always heavy.",
    explanationEs:
      "'Heavy rain' es la colocación fija en inglés — no 'strong,' 'intense,' ni 'powerful.' Las colocaciones son combinaciones de palabras fijas que los nativos usan instintivamente. Puedes tener strong wind, strong coffee y strong feelings — pero la lluvia siempre es heavy.",
  },
  {
    id: 20,
    unit: 10,
    category: "translation",
    prompt: "Which sentence correctly avoids a direct Spanish-to-English translation error?",
    promptEs: "¿Qué oración evita correctamente un error de traducción directa del español al inglés?",
    options: [
      { text: "How do you call this in English?", correct: false },
      { text: "I have 30 years working in this industry.", correct: false },
      { text: "I've been working in this industry for 30 years.", correct: true },
      { text: "I am working in this industry since 30 years.", correct: false },
    ],
    explanation:
      "Three translation errors to spot: 'How do you call' → 'What do you call' (what, not how). 'I have 30 years' → 'I'm 30' (age uses 'be'). 'Since 30 years' → 'for 30 years' (since = point in time, for = duration). Only 'I've been working...for 30 years' is correct — present perfect continuous + 'for' for ongoing duration.",
    explanationEs:
      "Tres errores de traducción: 'How do you call' → 'What do you call' (what, no how). 'I have 30 years' → 'I'm 30' (la edad usa 'be'). 'Since 30 years' → 'for 30 years' (since = punto en el tiempo, for = duración). Solo 'I've been working...for 30 years' es correcto.",
  },
];

export const examTiers: ScoreTierDefinition[] = [
  {
    minPercent: 90,
    tier: "Outstanding",
    tierEs: "Sobresaliente",
    color: "emerald",
    message:
      "Exceptional. You've genuinely reached C1. Your vocabulary is precise, your grammar is natural, and your instincts are those of a polished English speaker. The gap between you and a native speaker is now mostly accent — and even that is closing.",
    messageEs:
      "Excepcional. Has llegado genuinamente al nivel C1. Tu vocabulario es preciso, tu gramática es natural y tus instintos son los de un hablante de inglés pulido. La brecha entre tú y un nativo es ahora principalmente el acento — y eso también se está cerrando.",
  },
  {
    minPercent: 70,
    tier: "Passed",
    tierEs: "Aprobado",
    color: "amber",
    message:
      "Solid C1 foundation. You've mastered the core of advanced English. Review the units where you missed questions — those are your final edges to sharpen. You're ready for professional-level conversations, interviews, and presentations.",
    messageEs:
      "Base sólida de C1. Has dominado el núcleo del inglés avanzado. Repasa las unidades donde fallaste — esos son tus bordes finales a afinar. Estás listo para conversaciones de nivel profesional, entrevistas y presentaciones.",
  },
  {
    minPercent: 0,
    tier: "Keep Practicing",
    tierEs: "Sigue Practicando",
    color: "rose",
    message:
      "You're close — but some of the advanced distinctions haven't solidified yet. Go back to the units where you missed questions and work through the exercises again. The concepts are there; they just need more repetition to become automatic.",
    messageEs:
      "Estás cerca — pero algunas de las distinciones avanzadas aún no se han consolidado. Vuelve a las unidades donde fallaste y trabaja los ejercicios de nuevo. Los conceptos están ahí; solo necesitan más repetición para volverse automáticos.",
  },
];

export function getScoreTier(percentage: number): ScoreTier {
  return (
    examTiers.find((t) => percentage >= t.minPercent) ??
    examTiers[examTiers.length - 1]
  );
}
