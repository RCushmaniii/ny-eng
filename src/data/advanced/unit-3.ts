// Unit 3: "Pronouns Done Right" — Full course content
//
// Section 1: Subject vs object pronouns (he/him, she/her, they/them) — WordPairLab
// Section 2: Reflexive pronouns — when they're wrong — ErrorSpotter
// Section 3: Direct vs indirect object pronouns in real sentences — SentenceTransformer

import type { WordPair, ErrorSpotterItem, SentenceTransform } from "./types";

// ─── Section 1: Subject vs Object Pronouns (WordPairLab) ─────────────────────

export const pronounPairs: WordPair[] = [
  {
    weak: "Me and him went to the meeting together.",
    weakEs: "Yo y él fuimos a la junta juntos.",
    strong: "He and I went to the meeting together.",
    strongEs: "Él y yo fuimos a la junta juntos.",
    weakHighlight: "Me and him",
    strongHighlight: "He and I",
    why: "Subject position (before the verb) requires subject pronouns: I, he, she, we, they. Quick test: remove the other person. Would you say 'Me went to the meeting'? No — 'I went.' So it's 'He and I.'",
    whyEs: "La posición de sujeto (antes del verbo) requiere pronombres de sujeto: I, he, she, we, they. Prueba rápida: quita a la otra persona. ¿Dirías 'Me went to the meeting'? No — 'I went.' Entonces es 'He and I.'",
    category: "Subject pronouns",
    categoryEs: "Pronombres de sujeto",
  },
  {
    weak: "The manager spoke to he and I about the project.",
    weakEs: "El gerente habló con él y yo sobre el proyecto.",
    strong: "The manager spoke to him and me about the project.",
    strongEs: "El gerente habló con él y conmigo sobre el proyecto.",
    weakHighlight: "he and I",
    strongHighlight: "him and me",
    why: "After a preposition (to, with, for, about) you need OBJECT pronouns: me, him, her, us, them. 'Spoke to I' sounds wrong — 'spoke to me.' Many people overcorrect to 'I' because they were told 'me' is wrong. It's not — it's just wrong in subject position.",
    whyEs: "Después de una preposición (to, with, for, about) necesitas pronombres de OBJETO: me, him, her, us, them. 'Spoke to I' suena mal — 'spoke to me.' Muchos hipercorrigen a 'I' porque les dijeron que 'me' es incorrecto. No lo es — solo es incorrecto en posición de sujeto.",
    category: "Hypercorrection trap",
    categoryEs: "Trampa de hipercorrección",
  },
  {
    weak: "Between you and I, this project is failing.",
    weakEs: "Entre tú y yo, este proyecto está fallando.",
    strong: "Between you and me, this project is failing.",
    strongEs: "Entre tú y yo, este proyecto está fallando.",
    weakHighlight: "you and I",
    strongHighlight: "you and me",
    why: "'Between' is a preposition, so it takes object pronouns: 'between you and ME.' This is the single most common pronoun error among educated English speakers — even native ones get it wrong because 'you and I' sounds 'more correct.' It's not.",
    whyEs: "'Between' es una preposición, así que lleva pronombres de objeto: 'between you and ME.' Este es el error de pronombres más común entre hablantes educados de inglés — incluso los nativos lo confunden porque 'you and I' suena 'más correcto.' No lo es.",
    category: "The famous trap",
    categoryEs: "La trampa famosa",
  },
  {
    weak: "Her and me finished the report early.",
    weakEs: "Ella y yo terminamos el reporte temprano.",
    strong: "She and I finished the report early.",
    strongEs: "Ella y yo terminamos el reporte temprano.",
    weakHighlight: "Her and me",
    strongHighlight: "She and I",
    why: "Both pronouns are subjects (they did the finishing), so both must be subject pronouns: She, I. Remove one: 'Her finished the report'? No. 'Me finished the report'? No. 'She finished' and 'I finished' — both correct.",
    whyEs: "Ambos pronombres son sujetos (ellos hicieron la acción), así que ambos deben ser pronombres de sujeto: She, I. Quita uno: '¿Her finished the report?' No. '¿Me finished the report?' No. 'She finished' y 'I finished' — ambos correctos.",
    category: "Double subject error",
    categoryEs: "Error de doble sujeto",
  },
  {
    weak: "Give the documents to she and he before the deadline.",
    weakEs: "Dale los documentos a ella y él antes de la fecha límite.",
    strong: "Give the documents to her and him before the deadline.",
    strongEs: "Dale los documentos a ella y él antes de la fecha límite.",
    weakHighlight: "she and he",
    strongHighlight: "her and him",
    why: "'To' is a preposition → object pronouns. 'Give the documents to she'? No. 'Give the documents to her.' Same for 'him.' Both are objects of the preposition 'to.'",
    whyEs: "'To' es una preposición → pronombres de objeto. '¿Give the documents to she?' No. 'Give the documents to her.' Lo mismo para 'him.' Ambos son objetos de la preposición 'to.'",
    category: "Object pronouns",
    categoryEs: "Pronombres de objeto",
  },
  {
    weak: "Us developers need better tools.",
    weakEs: "Nosotros los desarrolladores necesitamos mejores herramientas.",
    strong: "We developers need better tools.",
    strongEs: "Nosotros los desarrolladores necesitamos mejores herramientas.",
    weakHighlight: "Us",
    strongHighlight: "We",
    why: "'Developers' is the subject, and 'us/we' modifies it. Subject position → 'We developers.' The test: drop 'developers.' 'Us need better tools'? No. 'We need better tools.' Yes.",
    whyEs: "'Developers' es el sujeto, y 'us/we' lo modifica. Posición de sujeto → 'We developers.' La prueba: quita 'developers.' '¿Us need better tools?' No. 'We need better tools.' Sí.",
    category: "Subject pronouns",
    categoryEs: "Pronombres de sujeto",
  },
];

// ─── Section 2: Reflexive Pronoun Traps (ErrorSpotter) ───────────────────────

export const reflexiveErrors: ErrorSpotterItem[] = [
  {
    sentence: "If you have any questions, please contact myself or my colleague.",
    errorWord: "myself",
    improved: "If you have any questions, please contact me or my colleague.",
    sentenceEs: "Si tiene alguna pregunta, por favor contácteme a mí o a mi colega.",
    improvedEs: "Si tiene alguna pregunta, por favor contácteme a mí o a mi colega.",
    explanation:
      "'Myself' is a reflexive pronoun — use it only when the subject and object are the SAME person: 'I hurt myself.' Here, 'you' is the subject and 'me' is the object — different people. Use 'me.' The 'myself' habit comes from people thinking it sounds more professional. It doesn't.",
    explanationEs:
      "'Myself' es un pronombre reflexivo — úsalo solo cuando el sujeto y el objeto son la MISMA persona: 'I hurt myself.' Aquí, 'you' es el sujeto y 'me' es el objeto — diferentes personas. Usa 'me.' El hábito de 'myself' viene de personas que creen que suena más profesional. No es así.",
  },
  {
    sentence: "The report was written by John and myself.",
    errorWord: "myself",
    improved: "The report was written by John and me.",
    sentenceEs: "El reporte fue escrito por John y yo mismo.",
    improvedEs: "El reporte fue escrito por John y por mí.",
    explanation:
      "After a preposition ('by'), use the object pronoun: 'me', not 'myself.' Reflexive pronouns ONLY reflect back to the subject. The subject here is 'the report', not 'I', so there's nothing to reflect. 'By me' is correct.",
    explanationEs:
      "Después de una preposición ('by'), usa el pronombre de objeto: 'me', no 'myself.' Los pronombres reflexivos SOLO reflejan de vuelta al sujeto. El sujeto aquí es 'the report', no 'I', así que no hay nada que reflejar. 'By me' es correcto.",
  },
  {
    sentence: "The children can dress theirselves now.",
    errorWord: "theirselves",
    improved: "The children can dress themselves now.",
    sentenceEs: "Los niños pueden vestirse solos ahora.",
    improvedEs: "Los niños pueden vestirse solos ahora.",
    explanation:
      "'Theirselves' is NOT a word — it doesn't exist in standard English. The correct reflexive for 'they' is 'themselves.' Similarly, 'hisself' doesn't exist — it's 'himself.' These are real errors even native speakers make in informal speech.",
    explanationEs:
      "'Theirselves' NO es una palabra — no existe en inglés estándar. El reflexivo correcto para 'they' es 'themselves.' De manera similar, 'hisself' no existe — es 'himself.'",
  },
  {
    sentence: "My wife and myself would like to invite you to dinner.",
    errorWord: "myself",
    improved: "My wife and I would like to invite you to dinner.",
    sentenceEs: "Mi esposa y yo mismo quisiéramos invitarte a cenar.",
    improvedEs: "Mi esposa y yo quisiéramos invitarte a cenar.",
    explanation:
      "Subject position: 'My wife and I' (not 'myself'). The reflexive adds nothing here — it's filler. 'I' is the subject pronoun. Remember: 'myself' appears only when you previously said 'I' in the same clause: 'I did it myself.'",
    explanationEs:
      "Posición de sujeto: 'My wife and I' (no 'myself'). El reflexivo no agrega nada aquí — es relleno. 'I' es el pronombre de sujeto. Recuerda: 'myself' aparece solo cuando previamente dijiste 'I' en la misma cláusula: 'I did it myself.'",
  },
  {
    sentence: "Please send the proposal to yourself at your earliest convenience.",
    errorWord: "yourself",
    improved: "Please review the proposal at your earliest convenience.",
    sentenceEs: "Por favor envíe la propuesta a usted mismo a la brevedad posible.",
    improvedEs: "Por favor revise la propuesta a la brevedad posible.",
    explanation:
      "You can't 'send something to yourself' in a business context — it's nonsensical. The writer probably meant 'please review the proposal.' Reflexive pronouns cause confusion when used as fancy-sounding replacements for simple pronouns.",
    explanationEs:
      "No puedes 'enviar algo a ti mismo' en un contexto de negocios — no tiene sentido. El escritor probablemente quiso decir 'please review the proposal.' Los pronombres reflexivos causan confusión cuando se usan como reemplazos sofisticados de pronombres simples.",
  },
  {
    sentence: "He gave the award to herself during the ceremony.",
    errorWord: "herself",
    improved: "He gave the award to her during the ceremony.",
    sentenceEs: "Él le dio el premio a ella misma durante la ceremonia.",
    improvedEs: "Él le dio el premio a ella durante la ceremonia.",
    explanation:
      "The subject is 'he' and the recipient is a different person (her). Since they're not the same person, no reflexive. 'Herself' would only be correct if she gave something to her OWN self: 'She gave herself a break.'",
    explanationEs:
      "El sujeto es 'he' y la receptora es una persona diferente (her). Como no son la misma persona, no hay reflexivo. 'Herself' solo sería correcto si ella se diera algo a SÍ MISMA: 'She gave herself a break.'",
  },
];

// ─── Section 3: Direct vs Indirect Object Pronouns (SentenceTransformer) ─────

export const objectPronounTransforms: SentenceTransform[] = [
  {
    flat: "I gave to her the book yesterday.",
    flatEs: "Le di a ella el libro ayer.",
    strong: "I gave her the book yesterday.",
    strongEs: "Le di el libro ayer.",
    technique: "indirect object placement",
    techniqueEs: "colocación de objeto indirecto",
    why: "In English, the indirect object (the person receiving) goes DIRECTLY after the verb, with NO preposition: 'gave HER the book.' The 'to' version also works but in a different order: 'gave the book TO her.' Never 'gave to her the book.'",
    whyEs: "En inglés, el objeto indirecto (la persona que recibe) va DIRECTAMENTE después del verbo, SIN preposición: 'gave HER the book.' La versión con 'to' también funciona pero en diferente orden: 'gave the book TO her.' Nunca 'gave to her the book.'",
  },
  {
    flat: "Can you explain me the situation?",
    flatEs: "¿Puedes explicarme la situación?",
    strong: "Can you explain the situation to me?",
    strongEs: "¿Puedes explicarme la situación?",
    technique: "explain + to (no double object)",
    techniqueEs: "explain + to (sin doble objeto)",
    why: "'Explain' is special — it does NOT take a double object pattern. You can 'give me the book' but you cannot 'explain me the situation.' It MUST be 'explain X TO me.' Other verbs like this: suggest, describe, mention, announce.",
    whyEs: "'Explain' es especial — NO toma un patrón de doble objeto. Puedes 'give me the book' pero no puedes 'explain me the situation.' DEBE ser 'explain X TO me.' Otros verbos así: suggest, describe, mention, announce.",
  },
  {
    flat: "She told the news to him and then she told the news to them.",
    flatEs: "Ella le dio las noticias a él y luego les dio las noticias a ellos.",
    strong: "She told him the news, then told them.",
    strongEs: "Le contó la noticia y luego se la contó a ellos.",
    technique: "pronoun efficiency",
    techniqueEs: "eficiencia de pronombres",
    why: "Native speakers avoid repeating nouns when pronouns can carry the meaning. 'Told him the news' (indirect object first) is cleaner than 'told the news to him.' The second clause drops 'the news' entirely because the listener already knows what was told.",
    whyEs: "Los nativos evitan repetir sustantivos cuando los pronombres pueden llevar el significado. 'Told him the news' es más limpio que 'told the news to him.' La segunda cláusula omite 'the news' porque el oyente ya sabe qué se contó.",
  },
  {
    flat: "He bought for his wife a diamond ring for their anniversary.",
    flatEs: "Él compró para su esposa un anillo de diamantes para su aniversario.",
    strong: "He bought his wife a diamond ring for their anniversary.",
    strongEs: "Le compró a su esposa un anillo de diamantes para su aniversario.",
    technique: "double object pattern",
    techniqueEs: "patrón de doble objeto",
    why: "'Buy' takes the double object pattern naturally: 'bought HER a ring.' No 'for' needed when the indirect object comes right after the verb. The 'for' version: 'bought a ring FOR her' — also fine, but the double object version is more natural.",
    whyEs: "'Buy' toma el patrón de doble objeto naturalmente: 'bought HER a ring.' No se necesita 'for' cuando el objeto indirecto va justo después del verbo.",
  },
  {
    flat: "They showed to us the new office and they showed to us the parking area.",
    flatEs: "Nos mostraron a nosotros la nueva oficina y nos mostraron a nosotros el área de estacionamiento.",
    strong: "They showed us the new office and the parking area.",
    strongEs: "Nos mostraron la nueva oficina y el área de estacionamiento.",
    technique: "consolidation + double object",
    techniqueEs: "consolidación + doble objeto",
    why: "Two upgrades. First: 'showed US' (double object) is tighter than 'showed TO us.' Second: don't repeat the whole clause — combine the objects: 'the new office AND the parking area.' One sentence does the work of two.",
    whyEs: "Dos mejoras. Primero: 'showed US' (doble objeto) es más compacto que 'showed TO us.' Segundo: no repitas toda la cláusula — combina los objetos: 'the new office AND the parking area.'",
  },
  {
    flat: "I want to ask to you a question about the schedule.",
    flatEs: "Quiero preguntarte una pregunta sobre el horario.",
    strong: "I want to ask you a question about the schedule.",
    strongEs: "Quiero hacerte una pregunta sobre el horario.",
    technique: "ask + double object (no 'to')",
    techniqueEs: "ask + doble objeto (sin 'to')",
    why: "'Ask' takes the double object pattern with NO preposition: 'ask YOU a question.' Never 'ask TO you.' Spanish 'preguntar a' tempts the 'to' insertion, but English doesn't use it here. Same pattern: 'ask him a favor', 'ask her the time.'",
    whyEs: "'Ask' toma el patrón de doble objeto SIN preposición: 'ask YOU a question.' Nunca 'ask TO you.' El español 'preguntar a' tienta a insertar 'to', pero el inglés no lo usa aquí.",
  },
];
