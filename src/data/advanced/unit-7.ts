// Unit 7: "Contractions, Flipped" — Full course content
//
// Section 1: Advanced contractions in declaratives — WordPairLab
//   (expanded form vs natural contracted form)
// Section 2: Negative contractions and double negatives to avoid — ErrorSpotter
// Section 3: When NOT to use contractions — register and emphasis — SentenceTransformer

import type { WordPair, ErrorSpotterItem, SentenceTransform } from "./types";

// ─── Section 1: Advanced Contractions (WordPairLab) ─────────────────────────
// These go BEYOND basic contractions (I'm, he's, we'll) into the multi-level
// contractions that native speakers use in everyday speech but that advanced
// learners rarely attempt.

export const advancedContractions: WordPair[] = [
  {
    weak: "I would have called you if I had known.",
    weakEs: "Te habría llamado si hubiera sabido.",
    strong: "I'd've called you if I'd known.",
    strongEs: "Te habría llamado si hubiera sabido.",
    weakHighlight: "would have",
    strongHighlight: "I'd've",
    why: "'I'd've' = I would have. This double contraction is how native speakers actually talk. It sounds like 'I-duv.' If you say 'I would have' in casual conversation, you sound like a textbook — correct, but stiff.",
    whyEs: "'I'd've' = I would have. Esta doble contracción es como realmente hablan los nativos. Suena como 'I-duv.' Si dices 'I would have' en conversación casual, suenas como un libro de texto — correcto, pero rígido.",
    category: "Double contraction",
    categoryEs: "Contracción doble",
  },
  {
    weak: "She should not have said that in the meeting.",
    weakEs: "Ella no debería haber dicho eso en la reunión.",
    strong: "She shouldn't've said that in the meeting.",
    strongEs: "Ella no debería haber dicho eso en la reunión.",
    weakHighlight: "should not have",
    strongHighlight: "shouldn't've",
    why: "'Shouldn't've' = should not have. Three words compressed into one beat: 'SHOOD-n-tuv.' This is natural in spoken English. You'll almost never see it written formally, but you'll hear it constantly.",
    whyEs: "'Shouldn't've' = should not have. Tres palabras comprimidas en un golpe: 'SHOOD-n-tuv.' Esto es natural en el inglés hablado. Casi nunca lo verás escrito formalmente, pero lo escucharás constantemente.",
    category: "Double contraction",
    categoryEs: "Contracción doble",
  },
  {
    weak: "They could not have finished it without your help.",
    weakEs: "No podrían haberlo terminado sin tu ayuda.",
    strong: "They couldn't've finished it without your help.",
    strongEs: "No podrían haberlo terminado sin tu ayuda.",
    weakHighlight: "could not have",
    strongHighlight: "couldn't've",
    why: "'Couldn't've' = could not have. Sounds like 'COOD-n-tuv.' The pattern is always the same: modal + n't + 've. Once you hear it, you can't unhear it — and once you start using it, you sound dramatically more natural.",
    whyEs: "'Couldn't've' = could not have. Suena como 'COOD-n-tuv.' El patrón siempre es el mismo: modal + n't + 've. Una vez que lo escuchas, no puedes dejar de escucharlo — y una vez que empiezas a usarlo, suenas dramáticamente más natural.",
    category: "Double contraction",
    categoryEs: "Contracción doble",
  },
  {
    weak: "It would have been better to ask first.",
    weakEs: "Habría sido mejor preguntar primero.",
    strong: "It'd've been better to ask first.",
    strongEs: "Habría sido mejor preguntar primero.",
    weakHighlight: "would have",
    strongHighlight: "It'd've",
    why: "'It'd've' = it would have. This one is almost never written, but in speech it flows naturally: 'it-duv.' Native speakers don't think about it — the compression happens automatically. That's your goal: stop expanding, start compressing.",
    whyEs: "'It'd've' = it would have. Esta casi nunca se escribe, pero en el habla fluye naturalmente: 'it-duv.' Los nativos no lo piensan — la compresión pasa automáticamente. Esa es tu meta: deja de expandir, empieza a comprimir.",
    category: "Double contraction",
    categoryEs: "Contracción doble",
  },
  {
    weak: "Who would have thought that would happen?",
    weakEs: "¿Quién habría pensado que eso pasaría?",
    strong: "Who'd've thought that'd happen?",
    strongEs: "¿Quién habría pensado que eso pasaría?",
    weakHighlight: "would have",
    strongHighlight: "Who'd've",
    why: "Two double contractions in one sentence: 'Who'd've' (who would have) and 'that'd' (that would). In fast speech this becomes 'hoo-duv THOT thad HAP-n.' This is peak native compression — and it's 100% grammatically correct.",
    whyEs: "Dos contracciones dobles en una oración: 'Who'd've' (who would have) y 'that'd' (that would). En el habla rápida esto se vuelve 'hoo-duv THOT thad HAP-n.' Esta es la máxima compresión nativa — y es 100% gramaticalmente correcta.",
    category: "Double contraction",
    categoryEs: "Contracción doble",
  },
  {
    weak: "You will have finished by then, right?",
    weakEs: "Ya habrás terminado para entonces, ¿verdad?",
    strong: "You'll've finished by then, right?",
    strongEs: "Ya habrás terminado para entonces, ¿verdad?",
    weakHighlight: "will have",
    strongHighlight: "You'll've",
    why: "'You'll've' = you will have. Sounds like 'yool-uv.' Future perfect in spoken English almost always contracts. Saying 'you will have' in conversation sounds overly deliberate — like you're reading aloud from a grammar book.",
    whyEs: "'You'll've' = you will have. Suena como 'yool-uv.' El futuro perfecto en el inglés hablado casi siempre se contrae. Decir 'you will have' en conversación suena demasiado deliberado — como si leyeras en voz alta de un libro de gramática.",
    category: "Double contraction",
    categoryEs: "Contracción doble",
  },
  {
    weak: "That is not going to work.",
    weakEs: "Eso no va a funcionar.",
    strong: "That's not gonna work.",
    strongEs: "Eso no va a funcionar.",
    weakHighlight: "is not going to",
    strongHighlight: "not gonna",
    why: "'Gonna' = going to. It's not slang — it's standard spoken English in all but the most formal contexts. News anchors, CEOs, and professors all say 'gonna.' If you avoid it, you sound like you're trying too hard.",
    whyEs: "'Gonna' = going to. No es jerga — es inglés hablado estándar en todos los contextos excepto los más formales. Presentadores de noticias, CEOs y profesores dicen 'gonna.' Si lo evitas, suenas como si te esforzaras demasiado.",
    category: "Informal contraction",
    categoryEs: "Contracción informal",
  },
  {
    weak: "I want to try the new restaurant downtown.",
    weakEs: "Quiero probar el nuevo restaurante en el centro.",
    strong: "I wanna try the new restaurant downtown.",
    strongEs: "Quiero probar el nuevo restaurante en el centro.",
    weakHighlight: "want to",
    strongHighlight: "wanna",
    why: "'Wanna' = want to. Like 'gonna,' it's standard casual spoken English. Saying 'want to' in casual speech creates a rhythmic mismatch — like wearing a suit to a barbecue. The words are correct but the register is wrong.",
    whyEs: "'Wanna' = want to. Como 'gonna,' es inglés hablado casual estándar. Decir 'want to' en el habla casual crea un desajuste rítmico — como usar traje en una parrillada. Las palabras son correctas pero el registro está mal.",
    category: "Informal contraction",
    categoryEs: "Contracción informal",
  },
];

// ─── Section 2: Negative Contractions & Double Negatives (ErrorSpotter) ──────
// Common errors advanced Spanish speakers make with negative contractions,
// influenced by Spanish grammar where double negatives are correct.

export const negativeErrors: ErrorSpotterItem[] = [
  {
    sentence: "I don't know nothing about the new policy.",
    errorWord: "nothing",
    improved: "I don't know anything about the new policy.",
    sentenceEs: "No sé nada sobre la nueva política.",
    improvedEs: "No sé nada sobre la nueva política.",
    explanation:
      "In Spanish, 'no sé nada' (double negative) is correct. In English, two negatives cancel out: 'I don't know nothing' literally means 'I know something.' Use 'anything' with 'don't': 'I don't know anything.' Or use 'nothing' without 'don't': 'I know nothing.'",
    explanationEs:
      "En español, 'no sé nada' (doble negación) es correcto. En inglés, dos negativos se cancelan: 'I don't know nothing' literalmente significa 'sé algo.' Usa 'anything' con 'don't': 'I don't know anything.' O usa 'nothing' sin 'don't': 'I know nothing.'",
  },
  {
    sentence: "She can't find her keys nowhere.",
    errorWord: "nowhere",
    improved: "She can't find her keys anywhere.",
    sentenceEs: "No puede encontrar sus llaves en ningún lado.",
    improvedEs: "No puede encontrar sus llaves en ningún lado.",
    explanation:
      "'Can't' + 'nowhere' = double negative. In standard English, this means she CAN find them somewhere. Use 'anywhere' with 'can't': 'She can't find her keys anywhere.' Or: 'She can find her keys nowhere' (correct but formal/literary).",
    explanationEs:
      "'Can't' + 'nowhere' = doble negación. En inglés estándar, esto significa que SÍ puede encontrarlas en algún lugar. Usa 'anywhere' con 'can't': 'She can't find her keys anywhere.'",
  },
  {
    sentence: "We didn't see nobody at the office yesterday.",
    errorWord: "nobody",
    improved: "We didn't see anybody at the office yesterday.",
    sentenceEs: "No vimos a nadie en la oficina ayer.",
    improvedEs: "No vimos a nadie en la oficina ayer.",
    explanation:
      "'Didn't' + 'nobody' = double negative. Pattern: 'don't/didn't/can't/won't' + 'anybody/anything/anywhere/anyone.' NEVER pair a contracted negative with another negative word. Spanish does this naturally — English doesn't.",
    explanationEs:
      "'Didn't' + 'nobody' = doble negación. Patrón: 'don't/didn't/can't/won't' + 'anybody/anything/anywhere/anyone.' NUNCA combines un negativo contraído con otra palabra negativa. El español lo hace naturalmente — el inglés no.",
  },
  {
    sentence: "He told me that he won't never do that again.",
    errorWord: "never",
    improved: "He told me that he'll never do that again.",
    sentenceEs: "Me dijo que nunca volverá a hacer eso.",
    improvedEs: "Me dijo que nunca volverá a hacer eso.",
    explanation:
      "'Won't' + 'never' = double negative. Fix: drop one. 'He'll never do that again' or 'He won't ever do that again.' Both are correct — pick one negative. This is the most common double-negative error for Spanish speakers because 'no... nunca' is perfectly natural in Spanish.",
    explanationEs:
      "'Won't' + 'never' = doble negación. Solución: elimina uno. 'He'll never do that again' o 'He won't ever do that again.' Ambos son correctos — elige un negativo. Este es el error de doble negación más común para hispanohablantes porque 'no... nunca' es perfectamente natural en español.",
  },
  {
    sentence: "They haven't told me nothing about the deadline.",
    errorWord: "nothing",
    improved: "They haven't told me anything about the deadline.",
    sentenceEs: "No me han dicho nada sobre la fecha límite.",
    improvedEs: "No me han dicho nada sobre la fecha límite.",
    explanation:
      "'Haven't' + 'nothing' = double negative. By now you see the pattern: whenever you use a negative contraction (don't, didn't, can't, won't, haven't, hasn't, isn't, aren't), every other word in the sentence must be the positive version: anything, anyone, anywhere, ever — never the negative.",
    explanationEs:
      "'Haven't' + 'nothing' = doble negación. Ya ves el patrón: siempre que uses una contracción negativa (don't, didn't, can't, won't, haven't, hasn't, isn't, aren't), cada otra palabra en la oración debe ser la versión positiva: anything, anyone, anywhere, ever — nunca la negativa.",
  },
];

// ─── Section 3: When NOT to Contract (SentenceTransformer) ──────────────────
// Contractions are natural in casual speech, but in certain contexts they
// sound wrong, weaken your message, or change the meaning. This section
// teaches register awareness: when to expand for power.

export const noContractTransforms: SentenceTransform[] = [
  {
    flat: "We aren't going to accept those terms.",
    flatEs: "No vamos a aceptar esos términos.",
    strong: "We are NOT going to accept those terms.",
    strongEs: "No vamos a aceptar esos términos.",
    technique: "Emphasis",
    techniqueEs: "Énfasis",
    why: "When you want to stress a negative, expand and emphasize the 'not.' 'We aren't' is neutral. 'We are NOT' carries weight and authority. In negotiations, presentations, and high-stakes conversations, expanding the negative signals conviction.",
    whyEs: "Cuando quieres enfatizar un negativo, expande y enfatiza el 'not.' 'We aren't' es neutral. 'We are NOT' lleva peso y autoridad. En negociaciones, presentaciones y conversaciones de alto riesgo, expandir el negativo señala convicción.",
  },
  {
    flat: "I can't believe they approved the budget.",
    flatEs: "No puedo creer que aprobaron el presupuesto.",
    strong: "I cannot believe they approved the budget.",
    strongEs: "No puedo creer que aprobaron el presupuesto.",
    technique: "Emphasis",
    techniqueEs: "Énfasis",
    why: "'Cannot' is one word — not 'can not.' When you write or say 'cannot,' it hits harder than 'can't.' 'Can't' is everyday. 'Cannot' is deliberate. Use it when disbelief, refusal, or formal emphasis is the goal.",
    whyEs: "'Cannot' es una sola palabra — no 'can not.' Cuando escribes o dices 'cannot,' tiene más impacto que 'can't.' 'Can't' es cotidiano. 'Cannot' es deliberado. Úsalo cuando la incredulidad, rechazo o énfasis formal es la meta.",
  },
  {
    flat: "It's important that we're transparent with stakeholders.",
    flatEs: "Es importante que seamos transparentes con las partes interesadas.",
    strong: "It is important that we are transparent with stakeholders.",
    strongEs: "Es importante que seamos transparentes con las partes interesadas.",
    technique: "Formal register",
    techniqueEs: "Registro formal",
    why: "In board meetings, client presentations, and written reports, expanding contractions signals seriousness. 'It's important' is casual. 'It is important' is boardroom English. The formality isn't stuffy — it's strategic.",
    whyEs: "En juntas directivas, presentaciones a clientes e informes escritos, expandir las contracciones señala seriedad. 'It's important' es casual. 'It is important' es inglés de sala de juntas. La formalidad no es rígida — es estratégica.",
  },
  {
    flat: "I'm honored to be here today and I'd like to thank the committee.",
    flatEs: "Me siento honrado de estar aquí hoy y me gustaría agradecer al comité.",
    strong: "I am honored to be here today, and I would like to thank the committee.",
    strongEs: "Me siento honrado de estar aquí hoy, y me gustaría agradecer al comité.",
    technique: "Formal register",
    techniqueEs: "Registro formal",
    why: "Speeches, award acceptances, and formal openings demand expanded forms. 'I'm honored' sounds like a text message. 'I am honored' sounds like a leader. When the moment calls for gravity, give every word its full weight.",
    whyEs: "Discursos, aceptaciones de premios y aperturas formales exigen formas expandidas. 'I'm honored' suena como un mensaje de texto. 'I am honored' suena como un líder. Cuando el momento pide gravedad, dale a cada palabra su peso completo.",
  },
  {
    flat: "That's not what I said. I didn't say we should cancel.",
    flatEs: "Eso no es lo que dije. No dije que debemos cancelar.",
    strong: "That is not what I said. I did not say we should cancel.",
    strongEs: "Eso no es lo que dije. No dije que debemos cancelar.",
    technique: "Clarification / defense",
    techniqueEs: "Aclaración / defensa",
    why: "When correcting a misquote or defending your position, expanding contractions slows the listener down and forces them to hear each word. 'I didn't say' is casual and dismissable. 'I did NOT say' is precise and undeniable. Lawyers do this instinctively.",
    whyEs: "Al corregir una cita errónea o defender tu posición, expandir contracciones desacelera al oyente y lo obliga a escuchar cada palabra. 'I didn't say' es casual y descartable. 'I did NOT say' es preciso e innegable. Los abogados hacen esto instintivamente.",
  },
];
