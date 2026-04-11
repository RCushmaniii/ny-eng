// Unit 2: "Word Traps That Trip Up Advanced Speakers" — Full course content
//
// Section 1: Much vs many, few vs little, fewer vs less (WordPairLab)
// Section 2: Loan vs borrow, bring vs take, lend vs let (ErrorSpotter)
// Section 3: Say vs tell, make vs do, win vs earn vs beat (SentenceTransformer)

import type { WordPair, ErrorSpotterItem, SentenceTransform } from "./types";

// ─── Section 1: Countable vs Uncountable Traps (WordPairLab) ─────────────────

export const countablePairs: WordPair[] = [
  {
    weak: "There are less people here today than yesterday.",
    weakEs: "Hay menos personas aquí hoy que ayer.",
    strong: "There are fewer people here today than yesterday.",
    strongEs: "Hay menos personas aquí hoy que ayer.",
    weakHighlight: "less",
    strongHighlight: "fewer",
    why: "'Fewer' for things you can COUNT (people, books, meetings). 'Less' for things you can't count (time, money, water). 'Less people' is the single most common grammar error among advanced speakers.",
    whyEs: "'Fewer' para cosas que puedes CONTAR (personas, libros, juntas). 'Less' para cosas que no puedes contar (tiempo, dinero, agua). 'Less people' es el error gramatical más común entre hablantes avanzados.",
    category: "fewer vs less",
    categoryEs: "fewer vs less",
  },
  {
    weak: "We need to spend less hours on this project.",
    weakEs: "Necesitamos gastar menos horas en este proyecto.",
    strong: "We need to spend fewer hours on this project.",
    strongEs: "Necesitamos dedicar menos horas a este proyecto.",
    weakHighlight: "less",
    strongHighlight: "fewer",
    why: "Hours are countable (one hour, two hours, three hours), so it's 'fewer hours', not 'less hours'. Quick test: if you can put a NUMBER before it, use 'fewer'.",
    whyEs: "Las horas son contables (una hora, dos horas, tres horas), así que es 'fewer hours', no 'less hours'. Prueba rápida: si puedes poner un NÚMERO antes, usa 'fewer'.",
    category: "fewer vs less",
    categoryEs: "fewer vs less",
  },
  {
    weak: "How many time do we have before the deadline?",
    weakEs: "¿Cuánto tiempo tenemos antes de la fecha límite?",
    strong: "How much time do we have before the deadline?",
    strongEs: "¿Cuánto tiempo tenemos antes de la fecha límite?",
    weakHighlight: "many",
    strongHighlight: "much",
    why: "'Time' (as a general concept) is uncountable, so it takes 'much', not 'many'. But 'times' (as in occasions) IS countable: 'How many times have you been to London?' Both are correct in their own context.",
    whyEs: "'Time' (como concepto general) es incontable, así que lleva 'much', no 'many'. Pero 'times' (como ocasiones) SÍ es contable: 'How many times have you been to London?' Ambos son correctos en su contexto.",
    category: "much vs many",
    categoryEs: "much vs many",
  },
  {
    weak: "We have few information about the new policy.",
    weakEs: "Tenemos poca información sobre la nueva política.",
    strong: "We have little information about the new policy.",
    strongEs: "Tenemos poca información sobre la nueva política.",
    weakHighlight: "few",
    strongHighlight: "little",
    why: "'Information' is uncountable in English (no 'informations'!), so use 'little' (small amount of uncountable things). 'Few' is for countable nouns: 'few details', 'few facts'.",
    whyEs: "'Information' es incontable en inglés (¡no existe 'informations'!), así que usa 'little' (cantidad pequeña de cosas incontables). 'Few' es para sustantivos contables: 'few details', 'few facts'.",
    category: "few vs little",
    categoryEs: "few vs little",
  },
  {
    weak: "There's much traffic today so we'll be late.",
    weakEs: "Hay mucho tráfico hoy así que llegaremos tarde.",
    strong: "There's a lot of traffic today, so we'll be late.",
    strongEs: "Hay mucho tráfico hoy, así que llegaremos tarde.",
    weakHighlight: "much",
    strongHighlight: "a lot of",
    why: "'Much' is technically correct but sounds stiff in positive statements. In modern spoken English, 'a lot of' or 'plenty of' is the natural choice for affirmative sentences. Save 'much' for questions and negatives: 'How much?' / 'not much'.",
    whyEs: "'Much' es técnicamente correcto pero suena rígido en oraciones positivas. En inglés hablado moderno, 'a lot of' o 'plenty of' es la elección natural. Guarda 'much' para preguntas y negativos: 'How much?' / 'not much'.",
    category: "much in affirmatives",
    categoryEs: "much en afirmaciones",
  },
  {
    weak: "She has less experience than the other candidate.",
    weakEs: "Ella tiene menos experiencia que el otro candidato.",
    strong: "She has less experience than the other candidate.",
    strongEs: "Ella tiene menos experiencia que el otro candidato.",
    weakHighlight: "less",
    strongHighlight: "less",
    why: "This one is CORRECT! 'Experience' (as a general concept) is uncountable, so 'less' is right. Compare: 'fewer experiences' (countable: individual life events). Not every 'less' is wrong — the mistake is thinking you must ALWAYS change it to 'fewer'.",
    whyEs: "¡Esta SÍ es correcta! 'Experience' (como concepto general) es incontable, así que 'less' está bien. Compara: 'fewer experiences' (contable: eventos individuales). No todo 'less' es incorrecto — el error es pensar que SIEMPRE debes cambiarlo a 'fewer'.",
    category: "trick question",
    categoryEs: "pregunta trampa",
  },
];

// ─── Section 2: Confusable Verb Pairs (ErrorSpotter) ─────────────────────────

export const confusableVerbs: ErrorSpotterItem[] = [
  {
    sentence: "Can I loan your pen for a minute?",
    errorWord: "loan",
    improved: "Can I borrow your pen for a minute?",
    sentenceEs: "¿Puedo prestarte tu pluma por un minuto?",
    improvedEs: "¿Me puedes prestar tu pluma por un minuto?",
    explanation:
      "'Borrow' = to receive temporarily (you take something). 'Lend' or 'loan' = to give temporarily (you give something). If YOU want it, you BORROW it. If someone GIVES it to you, they LEND it. Spanish 'prestar' covers both directions, which causes this confusion.",
    explanationEs:
      "'Borrow' = recibir temporalmente (tú tomas algo). 'Lend' o 'loan' = dar temporalmente (tú das algo). Si TÚ lo quieres, lo BORROWS. Si alguien te lo DA, ellos lo LEND. 'Prestar' en español cubre ambas direcciones, lo que causa esta confusión.",
  },
  {
    sentence: "Don't forget to bring an umbrella when you go to the office.",
    errorWord: "bring",
    improved: "Don't forget to take an umbrella when you go to the office.",
    sentenceEs: "No olvides traer un paraguas cuando vayas a la oficina.",
    improvedEs: "No olvides llevar un paraguas cuando vayas a la oficina.",
    explanation:
      "'Bring' = move something TOWARD the speaker/listener ('Bring it here'). 'Take' = move something AWAY from the current location ('Take it there'). Going TO the office = moving away, so 'take'. Spanish 'traer' and 'llevar' map more cleanly, but English 'bring' is overused.",
    explanationEs:
      "'Bring' = mover algo HACIA el hablante/oyente ('Tráelo aquí'). 'Take' = mover algo LEJOS de la ubicación actual ('Llévalo allá'). Ir A la oficina = alejarse, así que 'take'.",
  },
  {
    sentence: "My bank lent me a lot of money, so now I have to pay it back.",
    errorWord: "lent",
    improved: "My bank loaned me a lot of money, so now I have to pay it back.",
    sentenceEs: "Mi banco me prestó mucho dinero, así que ahora tengo que devolverlo.",
    improvedEs: "Mi banco me hizo un préstamo, así que ahora tengo que pagarlo.",
    explanation:
      "Both 'lent' and 'loaned' are technically acceptable for money. BUT in financial contexts, 'loan' is the standard term ('bank loan', 'loan officer', 'loaned me money'). 'Lend' sounds more informal and personal ('Can you lend me $20?'). For banks: 'loan'. For friends: 'lend'.",
    explanationEs:
      "Tanto 'lent' como 'loaned' son técnicamente aceptables para dinero. PERO en contextos financieros, 'loan' es el término estándar ('bank loan', 'loan officer'). 'Lend' suena más informal y personal ('Can you lend me $20?'). Para bancos: 'loan'. Para amigos: 'lend'.",
  },
  {
    sentence: "She didn't let me to use the conference room.",
    errorWord: "to",
    improved: "She didn't let me use the conference room.",
    sentenceEs: "Ella no me dejó usar la sala de conferencias.",
    improvedEs: "Ella no me dejó usar la sala de conferencias.",
    explanation:
      "'Let' is NEVER followed by 'to'. It's 'let me USE' (bare infinitive), not 'let me TO use'. This is one of the most stubborn errors because every other similar verb ('allow me to', 'permit me to') DOES take 'to'. 'Let' is the exception.",
    explanationEs:
      "'Let' NUNCA va seguido de 'to'. Es 'let me USE' (infinitivo sin 'to'), no 'let me TO use'. Este es uno de los errores más persistentes porque todos los verbos similares ('allow me to', 'permit me to') SÍ llevan 'to'. 'Let' es la excepción.",
  },
  {
    sentence: "I always bring my laptop home to work on weekends.",
    errorWord: "bring",
    improved: "I always take my laptop home to work on weekends.",
    sentenceEs: "Siempre traigo mi laptop a casa para trabajar los fines de semana.",
    improvedEs: "Siempre llevo mi laptop a casa para trabajar los fines de semana.",
    explanation:
      "You're speaking from the office (the current location). Home is AWAY from you. So you 'take' your laptop home, not 'bring' it. If your partner said from home: 'Can you bring your laptop home?' — that would be correct because home is where THEY are.",
    explanationEs:
      "Estás hablando desde la oficina (tu ubicación actual). La casa está LEJOS de ti. Así que 'tomas' tu laptop a casa, no la 'traes'. Si tu pareja dijera desde casa: 'Can you bring your laptop home?' — eso sería correcto porque la casa es donde ELLOS están.",
  },
  {
    sentence: "The company borrowed us the equipment for the event.",
    errorWord: "borrowed",
    improved: "The company lent us the equipment for the event.",
    sentenceEs: "La empresa nos prestó el equipo para el evento.",
    improvedEs: "La empresa nos prestó el equipo para el evento.",
    explanation:
      "The company GAVE you something temporarily → they 'lent' it. YOU received it → you 'borrowed' it. The direction matters. Spanish 'prestar' doesn't distinguish, so think: WHO is giving? They lend. WHO is receiving? They borrow.",
    explanationEs:
      "La empresa te DIO algo temporalmente → ellos lo 'lent'. TÚ lo recibiste → tú lo 'borrowed'. La dirección importa. 'Prestar' no distingue, así que piensa: ¿QUIÉN da? Ellos lend. ¿QUIÉN recibe? Ellos borrow.",
  },
];

// ─── Section 3: Say/Tell, Make/Do, Win/Earn/Beat (SentenceTransformer) ───────

export const verbChoiceTransforms: SentenceTransform[] = [
  {
    flat: "He said me that the meeting was cancelled.",
    flatEs: "Él me dijo que la junta fue cancelada.",
    strong: "He told me that the meeting had been cancelled.",
    strongEs: "Él me dijo que la junta había sido cancelada.",
    technique: "said vs told",
    techniqueEs: "said vs told",
    why: "'Tell' takes a direct object (told ME, told HER). 'Say' does not (said THAT, said TO me — never 'said me'). Also notice the tense upgrade: 'was cancelled' → 'had been cancelled' (reported speech backshift).",
    whyEs: "'Tell' toma un objeto directo (told ME, told HER). 'Say' no (said THAT, said TO me — nunca 'said me'). También nota la mejora de tiempo: 'was cancelled' → 'had been cancelled' (retroceso del discurso indirecto).",
  },
  {
    flat: "I need to make my homework before dinner.",
    flatEs: "Necesito hacer mi tarea antes de la cena.",
    strong: "I need to do my homework before dinner.",
    strongEs: "Necesito hacer mi tarea antes de la cena.",
    technique: "make vs do",
    techniqueEs: "make vs do",
    why: "'Do' is for tasks, routines, and activities (do homework, do the dishes, do a favor). 'Make' is for creating or producing something new (make dinner, make a decision, make a mistake). Spanish 'hacer' covers both, which is the root of this confusion.",
    whyEs: "'Do' es para tareas, rutinas y actividades (do homework, do the dishes, do a favor). 'Make' es para crear o producir algo nuevo (make dinner, make a decision, make a mistake). 'Hacer' en español cubre ambos, lo que causa la confusión.",
  },
  {
    flat: "Our team won the contract from the competitor.",
    flatEs: "Nuestro equipo ganó el contrato del competidor.",
    strong: "Our team won the contract over the competitor.",
    strongEs: "Nuestro equipo ganó el contrato sobre el competidor.",
    technique: "win vs beat (prepositions)",
    techniqueEs: "win vs beat (preposiciones)",
    why: "You WIN a thing (prize, game, contract, award). You BEAT a person or team (beat the competitor, beat the champion). You EARN something through effort (earn money, earn respect). Here it's 'won the contract' (correct) but the preposition is 'over', not 'from'.",
    whyEs: "GANAS una cosa (premio, juego, contrato). VENCES a una persona o equipo (beat the competitor). OBTIENES algo por esfuerzo (earn money, earn respect). Aquí es 'won the contract' (correcto) pero la preposición es 'over', no 'from'.",
  },
  {
    flat: "She makes a lot of money but she doesn't do any investments.",
    flatEs: "Ella gana mucho dinero pero no hace ninguna inversión.",
    strong: "She earns a lot of money but she doesn't make any investments.",
    strongEs: "Ella gana mucho dinero pero no hace inversiones.",
    technique: "earn + make vs do",
    techniqueEs: "earn + make vs do",
    why: "Two fixes. First: you EARN money (through work/effort), not 'make' money (which implies printing or manufacturing it — though 'make money' IS acceptable in casual speech). Second: you MAKE investments (creating something new), not 'do' investments.",
    whyEs: "Dos correcciones. Primero: GANAS dinero (por trabajo/esfuerzo), no 'haces' dinero (que implica imprimirlo). Segundo: HACES inversiones ('make investments' — creando algo nuevo), no 'do investments'.",
  },
  {
    flat: "The doctor said me to take the medicine twice a day.",
    flatEs: "El doctor me dijo que tomara la medicina dos veces al día.",
    strong: "The doctor told me to take the medicine twice a day.",
    strongEs: "El doctor me dijo que tomara la medicina dos veces al día.",
    technique: "said vs told + infinitive",
    techniqueEs: "said vs told + infinitivo",
    why: "When giving instructions or orders, the structure is 'TOLD + person + to + verb'. NEVER 'said me to'. 'The doctor told me to rest.' 'She told him to leave.' 'He said that I should rest' (also correct — different structure).",
    whyEs: "Cuando se dan instrucciones u órdenes, la estructura es 'TOLD + persona + to + verbo'. NUNCA 'said me to'. 'The doctor told me to rest.' 'She told him to leave.'",
  },
  {
    flat: "We won them 3-1 in the final game.",
    flatEs: "Les ganamos 3-1 en el juego final.",
    strong: "We beat them 3-1 in the final game.",
    strongEs: "Les ganamos 3-1 en el juego final.",
    technique: "win vs beat",
    techniqueEs: "win vs beat",
    why: "You WIN a competition, game, or prize. You BEAT an opponent. 'We won the game' ✓. 'We beat them' ✓. 'We won them' ✗ — you can't 'win' a person. This is one of the clearest rules in English and one of the most violated by Spanish speakers.",
    whyEs: "GANAS una competencia, juego o premio. VENCES a un oponente. 'We won the game' ✓. 'We beat them' ✓. 'We won them' ✗ — no puedes 'ganar' a una persona. Esta es una de las reglas más claras en inglés y una de las más violadas por hispanohablantes.",
  },
];
