// Unit 8: "Money and Shopping" — Full course content
// Theme: Banking, shopping, complaints, returns
// Grammar: Relative clauses + preference modals (would rather, would prefer)
// Pronunciation: Sentence stress for emphasis
// Section A: SpecifierBuilder (relative clauses for precise descriptions)

import type {
  Dialogue,
  ErrorCorrectionSet,
  IntermediateVocabItem,
} from "./types";
import type { SpecifierExample } from "../../components/course/SpecifierBuilder";
import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

// ─── Section A: Specifier Builder ────────────────────────────────────────────

export const specifierExamples: SpecifierExample[] = [
  {
    situation:
      "You're returning a shirt at a store. The clerk asks which one. You need to identify it precisely.",
    situationEs:
      "Estás devolviendo una camisa en una tienda. El empleado pregunta cuál. Necesitas identificarla con precisión.",
    vague: "I want to return the shirt.",
    vagueEs: "Quiero devolver la camisa.",
    specific: "I want to return the shirt that I bought last week — the blue one with the small stain.",
    specificEs: "Quiero devolver la camisa que compré la semana pasada — la azul con la pequeña mancha.",
    relativePronoun: "that",
    clauseHighlight: "that I bought last week",
    whyPronoun:
      "Use 'that' for things (objects, ideas). It connects 'the shirt' to identifying information that lets the clerk know exactly which shirt you mean.",
    whyPronounEs:
      "Usa 'that' para cosas (objetos, ideas). Conecta 'the shirt' con información identificadora que le permite al empleado saber exactamente cuál camisa.",
  },
  {
    situation:
      "You're complaining to a manager about an employee. You need to specify which one without sounding rude.",
    situationEs:
      "Te quejas con un gerente sobre un empleado. Necesitas especificar cuál sin sonar grosero.",
    vague: "The cashier was rude to me.",
    vagueEs: "El cajero fue grosero conmigo.",
    specific: "The cashier who helped me on Tuesday afternoon was rude when I asked for a refund.",
    specificEs: "El cajero que me atendió el martes por la tarde fue grosero cuando pedí un reembolso.",
    relativePronoun: "who",
    clauseHighlight: "who helped me on Tuesday afternoon",
    whyPronoun:
      "Use 'who' for people. This makes your complaint specific and credible — vague complaints get dismissed, specific ones get action.",
    whyPronounEs:
      "Usa 'who' para personas. Esto hace tu queja específica y creíble — las quejas vagas se ignoran, las específicas reciben acción.",
  },
  {
    situation:
      "You want to recommend a restaurant to a friend, but there are several with similar names.",
    situationEs:
      "Quieres recomendarle un restaurante a un amigo, pero hay varios con nombres similares.",
    vague: "There's a great Italian restaurant downtown.",
    vagueEs: "Hay un excelente restaurante italiano en el centro.",
    specific: "There's a great Italian restaurant downtown that has a wood-fired oven and homemade pasta.",
    specificEs: "Hay un excelente restaurante italiano en el centro que tiene un horno de leña y pasta hecha en casa.",
    relativePronoun: "that",
    clauseHighlight: "that has a wood-fired oven and homemade pasta",
    whyPronoun:
      "'That' restricts which restaurant you mean. Without it, your friend would have no way to find the right one. Specificity prevents confusion.",
    whyPronounEs:
      "'That' restringe a qué restaurante te refieres. Sin esto, tu amigo no tendría forma de encontrar el correcto. La especificidad previene confusión.",
  },
  {
    situation:
      "You're asking the bank about a transaction you don't recognize on your statement.",
    situationEs:
      "Le preguntas al banco sobre una transacción que no reconoces en tu estado de cuenta.",
    vague: "There's a charge I don't recognize.",
    vagueEs: "Hay un cargo que no reconozco.",
    specific: "There's a charge from last Saturday for $87.50, which I don't recognize. Could you tell me what it's for?",
    specificEs: "Hay un cargo del sábado pasado por $87.50, el cual no reconozco. ¿Podría decirme para qué es?",
    relativePronoun: "which",
    clauseHighlight: "which I don't recognize",
    whyPronoun:
      "'Which' adds extra information separated by a comma — it doesn't restrict the meaning, just adds context. Note the comma before 'which' — that's the rule.",
    whyPronounEs:
      "'Which' agrega información adicional separada por una coma — no restringe el significado, solo agrega contexto. Nota la coma antes de 'which' — esa es la regla.",
  },
  {
    situation:
      "You're describing the apartment you're looking for to a real estate agent.",
    situationEs:
      "Le describes a un agente inmobiliario el departamento que buscas.",
    vague: "I'm looking for an apartment.",
    vagueEs: "Estoy buscando un departamento.",
    specific: "I'm looking for an apartment whose monthly rent is under $2,000 and that has at least two bedrooms.",
    specificEs: "Estoy buscando un departamento cuya renta mensual sea menos de $2,000 y que tenga al menos dos recámaras.",
    relativePronoun: "whose",
    clauseHighlight: "whose monthly rent is under $2,000",
    whyPronoun:
      "'Whose' shows possession — 'the apartment's rent'. It's the only way to combine these ideas into one sentence. Without 'whose', you'd need two clunky sentences.",
    whyPronounEs:
      "'Whose' muestra posesión — 'la renta del departamento'. Es la única forma de combinar estas ideas en una oración. Sin 'whose', necesitarías dos oraciones torpes.",
  },
  {
    situation:
      "You're trying to remember the name of a coffee shop where you had a great meeting.",
    situationEs:
      "Tratas de recordar el nombre de una cafetería donde tuviste una excelente junta.",
    vague: "We met at a coffee shop.",
    vagueEs: "Nos reunimos en una cafetería.",
    specific: "We met at the coffee shop where they have those huge windows facing the park.",
    specificEs: "Nos reunimos en la cafetería donde tienen esas ventanas enormes que dan al parque.",
    relativePronoun: "where",
    clauseHighlight: "where they have those huge windows",
    whyPronoun:
      "'Where' is the relative pronoun for places. It connects the location to a memorable detail. More natural than 'in which' (technically correct but stiff).",
    whyPronounEs:
      "'Where' es el pronombre relativo para lugares. Conecta la ubicación con un detalle memorable. Más natural que 'in which' (técnicamente correcto pero rígido).",
  },
  {
    situation:
      "You're describing the moment you realized you'd been overcharged at a store.",
    situationEs:
      "Describes el momento en que te diste cuenta de que te habían cobrado de más en una tienda.",
    vague: "I noticed the mistake later.",
    vagueEs: "Noté el error después.",
    specific: "I noticed the mistake the moment when I checked my receipt in the parking lot.",
    specificEs: "Noté el error en el momento en que revisé mi recibo en el estacionamiento.",
    relativePronoun: "when",
    clauseHighlight: "when I checked my receipt",
    whyPronoun:
      "'When' is the relative pronoun for time references. It anchors the moment precisely — much clearer than 'later'.",
    whyPronounEs:
      "'When' es el pronombre relativo para referencias de tiempo. Ancla el momento con precisión — mucho más claro que 'later'.",
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "Returning a Defective Item",
    titleEs: "Devolviendo un Artículo Defectuoso",
    setting: "A customer returns a coffee maker that stopped working after two days",
    settingEs: "Un cliente devuelve una cafetera que dejó de funcionar después de dos días",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Marcos",
        speakerLabelEs: "Marcos",
        english:
          "Hi, I'd like to return this coffee maker that I bought on Saturday. It stopped working after two days.",
        spanish:
          "Hola, me gustaría devolver esta cafetera que compré el sábado. Dejó de funcionar después de dos días.",
        highlight: "that I bought on Saturday",
      },
      {
        speaker: "B",
        speakerLabel: "Clerk",
        speakerLabelEs: "Empleada",
        english: "I'm sorry to hear that. Do you have the receipt?",
        spanish: "Lamento escuchar eso. ¿Tiene el recibo?",
      },
      {
        speaker: "A",
        speakerLabel: "Marcos",
        speakerLabelEs: "Marcos",
        english:
          "Yes, here it is. Would you prefer to give me a refund, or would a replacement be possible?",
        spanish:
          "Sí, aquí está. ¿Preferiría darme un reembolso, o sería posible un reemplazo?",
        highlight: "Would you prefer / would a replacement be possible",
      },
      {
        speaker: "B",
        speakerLabel: "Clerk",
        speakerLabelEs: "Empleada",
        english:
          "It's up to you. Most customers who have this problem prefer a replacement, since the model is popular.",
        spanish:
          "Depende de usted. La mayoría de los clientes que tienen este problema prefieren un reemplazo, ya que el modelo es popular.",
        highlight: "customers who have this problem",
      },
      {
        speaker: "A",
        speakerLabel: "Marcos",
        speakerLabelEs: "Marcos",
        english:
          "Actually, I'd rather have my money back. I'd prefer to try a different brand.",
        spanish:
          "De hecho, preferiría que me devolvieran mi dinero. Preferiría probar una marca diferente.",
        highlight: "I'd rather... I'd prefer",
      },
      {
        speaker: "B",
        speakerLabel: "Clerk",
        speakerLabelEs: "Empleada",
        english:
          "Of course. Is there anything specific that we can do better with this product?",
        spanish:
          "Por supuesto. ¿Hay algo específico que podamos hacer mejor con este producto?",
        highlight: "anything specific that",
      },
      {
        speaker: "A",
        speakerLabel: "Marcos",
        speakerLabelEs: "Marcos",
        english:
          "The instructions, which were translated poorly, were really hard to follow. That's not your fault, of course — it's the manufacturer.",
        spanish:
          "Las instrucciones, que estaban mal traducidas, fueron muy difíciles de seguir. No es su culpa, claro — es del fabricante.",
        highlight: "which were translated poorly",
      },
      {
        speaker: "B",
        speakerLabel: "Clerk",
        speakerLabelEs: "Empleada",
        english:
          "I'll pass that feedback on. Your refund will be credited to the card you used, and it should appear in 3 to 5 business days.",
        spanish:
          "Pasaré ese comentario. Su reembolso se acreditará a la tarjeta que usó, y debería aparecer en 3 a 5 días hábiles.",
        highlight: "the card you used",
      },
    ],
    keyPhrases: [
      {
        english: "I'd like to return this... that I bought...",
        spanish: "Me gustaría devolver este... que compré...",
        note: "The standard return formula. 'Would like' is polite, the relative clause identifies the item.",
        noteEs: "La fórmula estándar de devolución. 'Would like' es cortés, la cláusula relativa identifica el artículo.",
      },
      {
        english: "I'd rather have...",
        spanish: "Preferiría tener...",
        note: "'Would rather' followed by base verb — the polite way to state a preference.",
        noteEs: "'Would rather' seguido de verbo base — la forma cortés de expresar una preferencia.",
      },
      {
        english: "I'd prefer to...",
        spanish: "Preferiría...",
        note: "'Would prefer' followed by 'to + verb'. Slightly more formal than 'would rather'.",
        noteEs: "'Would prefer' seguido de 'to + verbo'. Ligeramente más formal que 'would rather'.",
      },
    ],
  },
];

// ─── Section C: Structure Builder ────────────────────────────────────────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "Defining relative clauses",
    labelEs: "Cláusulas relativas definitorias",
    description:
      "Defining relative clauses tell you WHICH one — they're essential for the meaning. Use 'that', 'who', or 'which' with NO comma.",
    descriptionEs:
      "Las cláusulas relativas definitorias te dicen CUÁL — son esenciales para el significado. Usa 'that', 'who' o 'which' SIN coma.",
    sentences: [
      {
        english: "The book that I borrowed from you was excellent.",
        spanish: "El libro que te pedí prestado fue excelente.",
        highlight: "that I borrowed",
      },
      {
        english: "The woman who lives next door is a doctor.",
        spanish: "La mujer que vive al lado es doctora.",
        highlight: "who lives next door",
      },
      {
        english: "The bank that's on the corner has the best rates.",
        spanish: "El banco que está en la esquina tiene las mejores tasas.",
        highlight: "that's on the corner",
      },
      {
        english: "The store where I bought this is having a sale.",
        spanish: "La tienda donde compré esto tiene una venta.",
        highlight: "where I bought this",
      },
    ],
  },
  {
    label: "Non-defining relative clauses",
    labelEs: "Cláusulas relativas no definitorias",
    description:
      "Non-defining clauses add EXTRA information that isn't essential. Use 'which' or 'who', and ALWAYS use commas. 'That' is not allowed here.",
    descriptionEs:
      "Las cláusulas no definitorias agregan información EXTRA que no es esencial. Usa 'which' o 'who', y SIEMPRE usa comas. 'That' no se permite aquí.",
    sentences: [
      {
        english: "My new phone, which I bought last month, has already broken.",
        spanish: "Mi teléfono nuevo, que compré el mes pasado, ya se rompió.",
        highlight: "which I bought last month",
      },
      {
        english: "Mr. Garcia, who manages the store, is very helpful.",
        spanish: "El Sr. Garcia, quien dirige la tienda, es muy servicial.",
        highlight: "who manages the store",
      },
      {
        english: "This jacket, which was a gift from my sister, is my favorite.",
        spanish: "Esta chaqueta, que fue un regalo de mi hermana, es mi favorita.",
        highlight: "which was a gift",
      },
      {
        english: "Our manager, whose office is upstairs, will see you now.",
        spanish: "Nuestro gerente, cuya oficina está arriba, te atenderá ahora.",
        highlight: "whose office is upstairs",
      },
    ],
  },
  {
    label: "Preference modals: would rather and would prefer",
    labelEs: "Modales de preferencia: would rather y would prefer",
    description:
      "Two ways to politely state what you want — both more elegant than 'I want'. The grammar is slightly different: 'would rather' + base verb, 'would prefer' + 'to' + verb.",
    descriptionEs:
      "Dos formas de expresar cortésmente lo que quieres — ambas más elegantes que 'I want'. La gramática es ligeramente diferente: 'would rather' + verbo base, 'would prefer' + 'to' + verbo.",
    sentences: [
      {
        english: "I'd rather pay in cash, if that's okay.",
        spanish: "Preferiría pagar en efectivo, si está bien.",
        highlight: "I'd rather pay",
      },
      {
        english: "I'd prefer to wait for the manager.",
        spanish: "Preferiría esperar al gerente.",
        highlight: "I'd prefer to wait",
      },
      {
        english: "Would you rather have a refund or store credit?",
        spanish: "¿Preferirías un reembolso o crédito en la tienda?",
        highlight: "Would you rather have",
      },
      {
        english: "We'd prefer not to wait in line if possible.",
        spanish: "Preferiríamos no esperar en la fila si es posible.",
        highlight: "We'd prefer not to wait",
      },
    ],
  },
  {
    label: "Combining relative clauses with preferences",
    labelEs: "Combinando cláusulas relativas con preferencias",
    description:
      "When you're shopping or complaining, you often need to specify exactly what you want AND state a preference at the same time. Here's the combination in action.",
    descriptionEs:
      "Cuando vas de compras o te quejas, frecuentemente necesitas especificar exactamente lo que quieres Y expresar una preferencia al mismo tiempo. Aquí está la combinación en acción.",
    sentences: [
      {
        english: "I'd rather have the model that comes with the longer warranty.",
        spanish: "Preferiría el modelo que viene con la garantía más larga.",
        highlight: "the model that comes with",
      },
      {
        english: "I'd prefer to speak with someone who has more experience.",
        spanish: "Preferiría hablar con alguien que tenga más experiencia.",
        highlight: "someone who has more experience",
      },
      {
        english: "The card that I use for online purchases is the one I'd rather not give out.",
        spanish: "La tarjeta que uso para compras en línea es la que preferiría no dar.",
        highlight: "the one I'd rather not give out",
      },
      {
        english: "Could I have the room that has a view, if there's one available?",
        spanish: "¿Podría tener la habitación que tiene vista, si hay alguna disponible?",
        highlight: "the room that has a view",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes with Relative Clauses & Preferences",
  titleEs: "Errores Comunes con Cláusulas Relativas y Preferencias",
  description:
    "These errors make your descriptions either confusing, ungrammatical, or oddly demanding. Fix them before your next return.",
  descriptionEs:
    "Estos errores hacen que tus descripciones sean confusas, incorrectas o extrañamente demandantes. Corrígelos antes de tu próxima devolución.",
  items: [
    {
      incorrect: "The man which sold me this is gone.",
      correct: "The man who sold me this is gone.",
      incorrectHighlight: "which sold me",
      correctHighlight: "who sold me",
      explanation:
        "Use 'who' for people, not 'which'. 'Which' is for things and 'that' works for both. Spanish uses 'que' for everything, which causes this slip. Quick rule: people = who, things = that or which.",
      explanationEs:
        "Usa 'who' para personas, no 'which'. 'Which' es para cosas y 'that' funciona para ambos. El español usa 'que' para todo, lo que causa este desliz. Regla rápida: personas = who, cosas = that o which.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I'd rather to pay in cash.",
      correct: "I'd rather pay in cash.",
      incorrectHighlight: "rather to pay",
      correctHighlight: "rather pay",
      explanation:
        "After 'would rather', use the BASE form of the verb — never 'to + verb'. This is one of the trickiest modal patterns. Compare: 'I'd rather pay' (correct) vs. 'I'd prefer to pay' (also correct, different structure).",
      explanationEs:
        "Después de 'would rather', usa la forma BASE del verbo — nunca 'to + verbo'. Este es uno de los patrones modales más complicados. Compara: 'I'd rather pay' (correcto) vs. 'I'd prefer to pay' (también correcto, estructura diferente).",
      errorType: "tense-confusion",
    },
    {
      incorrect: "The shirt who I bought has a stain.",
      correct: "The shirt that I bought has a stain.",
      incorrectHighlight: "who I bought",
      correctHighlight: "that I bought",
      explanation:
        "'Who' is for people only. A shirt is not a person — use 'that' or 'which'. The most common version of this error is using 'who' for animals or objects because Spanish makes no distinction.",
      explanationEs:
        "'Who' es solo para personas. Una camisa no es una persona — usa 'that' o 'which'. La versión más común de este error es usar 'who' para animales u objetos porque el español no hace la distinción.",
      errorType: "literal-translation",
    },
    {
      incorrect: "My phone which I bought last month is broken.",
      correct: "My phone, which I bought last month, is broken.",
      incorrectHighlight: "phone which I bought last month is",
      correctHighlight: "phone, which I bought last month, is",
      explanation:
        "When 'which' is used with extra (non-essential) information, you MUST use commas before AND after the clause. Without commas, the meaning becomes unclear. With 'that', no commas are ever used.",
      explanationEs:
        "Cuando 'which' se usa con información adicional (no esencial), DEBES usar comas antes Y después de la cláusula. Sin comas, el significado se vuelve poco claro. Con 'that', nunca se usan comas.",
      errorType: "word-order",
    },
    {
      incorrect: "I want the one is on the second shelf.",
      correct: "I want the one that is on the second shelf.",
      incorrectHighlight: "the one is",
      correctHighlight: "the one that is",
      explanation:
        "You can't drop the relative pronoun 'that' here because it's the subject of the relative clause. You CAN drop 'that' when it's the object: 'the book I bought' (object — drop OK). But not when it's the subject: 'the book that is on the table'.",
      explanationEs:
        "No puedes omitir el pronombre relativo 'that' aquí porque es el sujeto de la cláusula relativa. PUEDES omitir 'that' cuando es el objeto: 'the book I bought' (objeto — OK). Pero no cuando es el sujeto: 'the book that is on the table'.",
      errorType: "word-order",
    },
    {
      incorrect: "I prefer paying with credit card more than cash.",
      correct: "I'd rather pay with a credit card than with cash.",
      incorrectHighlight: "prefer paying with credit card more than",
      correctHighlight: "rather pay with a credit card than with",
      explanation:
        "Two issues. First: 'prefer X more than Y' is a literal translation that sounds non-native. The natural patterns are 'prefer X to Y' or 'would rather X than Y'. Second: count nouns like 'credit card' need an article ('a credit card'), but 'cash' is uncountable and doesn't.",
      explanationEs:
        "Dos problemas. Primero: 'prefer X more than Y' es una traducción literal que suena no-nativa. Los patrones naturales son 'prefer X to Y' o 'would rather X than Y'. Segundo: los sustantivos contables como 'credit card' necesitan un artículo ('a credit card'), pero 'cash' es incontable y no.",
      errorType: "literal-translation",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "I'd RATHER pay cash",
    spanishStress: "I'D RATHER PAY CASH",
    englishStress: "aid-RATH-er-pei-KASH",
    tip: "In 'I'd rather pay cash', stress falls on 'rather' (the choice) and 'cash' (the key noun). 'I'd' and 'pay' are quick. Native speakers compress the unstressed words.",
    tipEs:
      "En 'I'd rather pay cash', el acento cae en 'rather' (la elección) y 'cash' (el sustantivo clave). 'I'd' y 'pay' son rápidos. Los nativos comprimen las palabras sin acento.",
  },
  {
    word: "I bought THIS one",
    spanishStress: "I BOUGHT THIS ONE",
    englishStress: "ai-baut-THIS-wən",
    tip: "Sentence stress changes meaning. 'I bought THIS one' (not that one) puts emphasis on 'this'. 'I BOUGHT this one' (didn't steal it) emphasizes the action. Stress = meaning.",
    tipEs:
      "El acento de oración cambia el significado. 'I bought THIS one' (no esa) pone énfasis en 'this'. 'I BOUGHT this one' (no la robé) enfatiza la acción. Acento = significado.",
  },
  {
    word: "the one THAT broke",
    spanishStress: "THE ONE THAT BROKE",
    englishStress: "thi-wən-thət-BROK",
    tip: "In relative clauses, 'that' is unstressed and reduced to 'thət'. The main stress falls on the action verb at the end. 'The one that broke' = 'thi-wən-thət-BROK'.",
    tipEs:
      "En cláusulas relativas, 'that' no lleva acento y se reduce a 'thət'. El acento principal cae en el verbo de acción al final. 'The one that broke' = 'thi-wən-thət-BROK'.",
  },
  {
    word: "How much DOES it cost?",
    spanishStress: "HOW MUCH DOES IT COST",
    englishStress: "hau-MUCH-dəz-it-KOST",
    tip: "In questions, stress lands on the question word ('much') and the key noun/verb ('cost'). 'Does' and 'it' are weak — almost swallowed. This rhythm signals 'I'm asking for information'.",
    tipEs:
      "En preguntas, el acento va en la palabra interrogativa ('much') y el sustantivo/verbo clave ('cost'). 'Does' y 'it' son débiles — casi se tragan. Este ritmo señala 'estoy pidiendo información'.",
  },
  {
    word: "It's TOO expensive",
    spanishStress: "IT'S TOO EXPENSIVE",
    englishStress: "its-TU-ek-SPEN-siv",
    tip: "'Too' means 'more than acceptable' and gets a clear stress. Don't confuse with 'two' or 'to' in pronunciation. 'It's too expensive' is your polite refusal phrase — practice it.",
    tipEs:
      "'Too' significa 'más de lo aceptable' y lleva un acento claro. No lo confundas con 'two' o 'to' en pronunciación. 'It's too expensive' es tu frase cortés de rechazo — practícala.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Relative clause expressions
  { english: "the one that...", spanish: "el/la que...", type: "expression" },
  { english: "the kind of thing that...", spanish: "el tipo de cosa que...", type: "expression" },
  { english: "the person who...", spanish: "la persona que...", type: "expression" },
  { english: "the place where...", spanish: "el lugar donde...", type: "expression" },
  { english: "the day when...", spanish: "el día en que...", type: "expression" },
  // Preference expressions
  { english: "I'd rather...", spanish: "Preferiría...", type: "expression" },
  { english: "I'd prefer to...", spanish: "Preferiría...", type: "expression" },
  { english: "Would you rather...?", spanish: "¿Preferirías...?", type: "expression" },
  { english: "I'd prefer not to...", spanish: "Preferiría no...", type: "expression" },
  // Shopping/banking expressions
  { english: "I'd like to return this.", spanish: "Me gustaría devolver esto.", type: "expression" },
  { english: "Do you have the receipt?", spanish: "¿Tiene el recibo?", type: "expression" },
  { english: "It's too expensive.", spanish: "Es demasiado caro.", type: "expression" },
  { english: "Is there a cheaper option?", spanish: "¿Hay una opción más barata?", type: "expression" },
  { english: "I'd like a refund.", spanish: "Me gustaría un reembolso.", type: "expression" },
  // Money/shopping vocabulary
  { english: "refund", spanish: "reembolso", type: "noun" },
  { english: "receipt", spanish: "recibo", type: "noun" },
  { english: "warranty", spanish: "garantía", type: "noun" },
  { english: "discount", spanish: "descuento", type: "noun" },
  { english: "tax", spanish: "impuesto", type: "noun" },
  { english: "exchange rate", spanish: "tipo de cambio", type: "noun" },
  { english: "credit card", spanish: "tarjeta de crédito", type: "noun" },
  { english: "checking account", spanish: "cuenta corriente", type: "noun" },
  // Money/shopping verbs
  { english: "to charge", spanish: "cobrar", type: "verb" },
  { english: "to refund", spanish: "reembolsar", type: "verb" },
  { english: "to exchange", spanish: "cambiar", type: "verb" },
  { english: "to deposit", spanish: "depositar", type: "verb" },
  { english: "to withdraw", spanish: "retirar", type: "verb" },
];
