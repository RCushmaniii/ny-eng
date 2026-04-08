// Unit 3: "Getting Around" — Full course content
// Theme: Travel, transport, airports, hotels, taxis
// Grammar: First conditional
// Pronunciation: Contractions (I'll, won't, it'll)

import type {
  PhrasalVerbGroup,
  Dialogue,
  ErrorCorrectionSet,
  IntermediateVocabItem,
} from "./types";
import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

// ─── Section A: Phrasal Verb Explorer ────────────────────────────────────────

export const phrasalVerbGroups: PhrasalVerbGroup[] = [
  {
    baseVerb: "check",
    baseVerbEs: "revisar / chequear",
    description:
      "'Check in' and 'check out' are the most essential travel verbs in English.",
    descriptionEs:
      "'Check in' y 'check out' son los verbos de viaje más esenciales en inglés.",
    verbs: [
      {
        verb: "check in",
        verbEs: "registrarse",
        particle: "in",
        baseVerb: "check",
        definition:
          "To register your arrival at a hotel, airport, or event",
        definitionEs:
          "Registrar tu llegada a un hotel, aeropuerto o evento",
        example: "We need to check in at the hotel before 3 PM.",
        exampleEs:
          "Tenemos que registrarnos en el hotel antes de las 3 PM.",
        contextNote:
          "Used everywhere: hotels, flights, conferences, even doctor's offices",
        contextNoteEs:
          "Se usa en todas partes: hoteles, vuelos, conferencias, hasta consultorios médicos",
      },
      {
        verb: "check out",
        verbEs: "desocupar / pagar y salir",
        particle: "out",
        baseVerb: "check",
        definition:
          "To leave a hotel after paying, or to leave any place where you registered",
        definitionEs:
          "Salir de un hotel después de pagar, o salir de cualquier lugar donde te registraste",
        example: "What time do we have to check out tomorrow?",
        exampleEs: "¿A qué hora tenemos que desocupar mañana?",
        contextNote:
          "Also means 'to look at / examine': 'Check out this view!'",
        contextNoteEs:
          "También significa 'mirar / examinar': '¡Mira esta vista!'",
      },
    ],
  },
  {
    baseVerb: "drop",
    baseVerbEs: "dejar caer",
    description:
      "'Drop off' is essential for taxis, deliveries, and dropping people at places.",
    descriptionEs:
      "'Drop off' es esencial para taxis, entregas y dejar gente en lugares.",
    verbs: [
      {
        verb: "drop off",
        verbEs: "dejar (en un lugar)",
        particle: "off",
        baseVerb: "drop",
        definition:
          "To take someone or something to a place and leave them there",
        definitionEs:
          "Llevar a alguien o algo a un lugar y dejarlo ahí",
        example: "Can you drop me off at the airport tomorrow morning?",
        exampleEs:
          "¿Me puedes dejar en el aeropuerto mañana en la mañana?",
        contextNote:
          "Standard phrase for asking for a ride somewhere",
        contextNoteEs:
          "Frase estándar para pedir que te lleven a algún lugar",
      },
    ],
  },
  {
    baseVerb: "pick",
    baseVerbEs: "recoger",
    description:
      "'Pick up' (in travel context) means to collect someone — the opposite of 'drop off'.",
    descriptionEs:
      "'Pick up' (en contexto de viaje) significa recoger a alguien — lo opuesto de 'drop off'.",
    verbs: [
      {
        verb: "pick up",
        verbEs: "recoger",
        particle: "up",
        baseVerb: "pick",
        definition:
          "To collect someone or something from a place (in your car, at the airport, etc.)",
        definitionEs:
          "Recoger a alguien o algo de un lugar (en tu coche, en el aeropuerto, etc.)",
        example: "My brother will pick me up from the airport.",
        exampleEs: "Mi hermano me va a recoger del aeropuerto.",
        contextNote:
          "Notice the pair: 'drop off' = leave there, 'pick up' = bring back",
        contextNoteEs:
          "Nota el par: 'drop off' = dejar ahí, 'pick up' = recoger de regreso",
      },
    ],
  },
  {
    baseVerb: "get",
    baseVerbEs: "conseguir / obtener",
    description:
      "'Get' is the verb that makes English transport language work. Master these three.",
    descriptionEs:
      "'Get' es el verbo que hace que el lenguaje de transporte en inglés funcione. Domina estos tres.",
    verbs: [
      {
        verb: "get on",
        verbEs: "subirse a (transporte público)",
        particle: "on",
        baseVerb: "get",
        definition:
          "To board a bus, train, plane, bike, or boat (anything you sit on top of or step up into)",
        definitionEs:
          "Subirse a un autobús, tren, avión, bicicleta o barco (cualquier cosa donde te sientas arriba o subas)",
        example: "We need to get on the next train to Madrid.",
        exampleEs: "Necesitamos subirnos al próximo tren a Madrid.",
        contextNote:
          "For cars and taxis use 'get IN' (you go inside). For buses/trains use 'get ON'.",
        contextNoteEs:
          "Para coches y taxis usa 'get IN' (entras adentro). Para autobuses/trenes usa 'get ON'.",
      },
      {
        verb: "get off",
        verbEs: "bajarse de (transporte público)",
        particle: "off",
        baseVerb: "get",
        definition:
          "To leave a bus, train, plane, or other public transport",
        definitionEs:
          "Salir de un autobús, tren, avión u otro transporte público",
        example: "Get off at the third stop and walk two blocks.",
        exampleEs: "Bájate en la tercera parada y camina dos cuadras.",
        contextNote:
          "Pair: 'get on' / 'get off'. For cars: 'get in' / 'get out'.",
        contextNoteEs:
          "Par: 'get on' / 'get off'. Para coches: 'get in' / 'get out'.",
      },
      {
        verb: "get around",
        verbEs: "moverse / desplazarse",
        particle: "around",
        baseVerb: "get",
        definition:
          "To travel to different places within a city or area",
        definitionEs:
          "Viajar a diferentes lugares dentro de una ciudad o zona",
        example: "It's easy to get around Tokyo by subway.",
        exampleEs:
          "Es fácil moverse en Tokio en metro.",
        contextNote:
          "The go-to verb for talking about urban transportation",
        contextNoteEs:
          "El verbo preferido para hablar de transporte urbano",
      },
    ],
  },
  {
    baseVerb: "set",
    baseVerbEs: "poner",
    description:
      "'Set off' means to begin a journey — perfect for storytelling about trips.",
    descriptionEs:
      "'Set off' significa empezar un viaje — perfecto para contar historias sobre viajes.",
    verbs: [
      {
        verb: "set off",
        verbEs: "salir (de viaje) / partir",
        particle: "off",
        baseVerb: "set",
        definition: "To begin a journey or trip",
        definitionEs: "Empezar un viaje o trayecto",
        example: "We set off at 6 AM to avoid traffic.",
        exampleEs: "Salimos a las 6 AM para evitar el tráfico.",
        contextNote:
          "More natural than 'leave' or 'depart' when telling travel stories",
        contextNoteEs:
          "Más natural que 'leave' o 'depart' cuando cuentas historias de viajes",
      },
    ],
  },
  {
    baseVerb: "stop",
    baseVerbEs: "parar",
    description:
      "'Stop over' is the verb for breaking a journey — essential for international flights.",
    descriptionEs:
      "'Stop over' es el verbo para hacer una pausa en un viaje — esencial para vuelos internacionales.",
    verbs: [
      {
        verb: "stop over",
        verbEs: "hacer escala",
        particle: "over",
        baseVerb: "stop",
        definition:
          "To stay somewhere briefly during a longer journey, especially overnight",
        definitionEs:
          "Quedarse en algún lugar brevemente durante un viaje más largo, especialmente una noche",
        example: "We stopped over in Iceland on our way to New York.",
        exampleEs:
          "Hicimos escala en Islandia en nuestro camino a Nueva York.",
        contextNote:
          "The noun is 'stopover': 'We have a 6-hour stopover in London'",
        contextNoteEs:
          "El sustantivo es 'stopover': 'We have a 6-hour stopover in London'",
      },
    ],
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "Lost at the Airport",
    titleEs: "Perdida en el Aeropuerto",
    setting: "A traveler asks an airport information desk for help",
    settingEs: "Una viajera pide ayuda en el módulo de información del aeropuerto",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Lucia (Traveler)",
        speakerLabelEs: "Lucia (Viajera)",
        english:
          "Excuse me, I just got off the plane from Mexico City. Where do I check in for my connecting flight?",
        spanish:
          "Disculpe, acabo de bajar del avión de Ciudad de México. ¿Dónde me registro para mi vuelo de conexión?",
        highlight: "got off / check in",
      },
      {
        speaker: "B",
        speakerLabel: "Agent",
        speakerLabelEs: "Agente",
        english:
          "If you go straight down this hallway, you'll see the transfer desk on your right.",
        spanish:
          "Si va derecho por este pasillo, verá el módulo de transferencias a su derecha.",
        highlight: "If you go... you'll see",
      },
      {
        speaker: "A",
        speakerLabel: "Lucia (Traveler)",
        speakerLabelEs: "Lucia (Viajera)",
        english:
          "Thanks. And if my flight is delayed, will I miss my hotel check-in?",
        spanish:
          "Gracias. ¿Y si mi vuelo se retrasa, perderé mi registro en el hotel?",
        highlight: "if my flight is delayed",
      },
      {
        speaker: "B",
        speakerLabel: "Agent",
        speakerLabelEs: "Agente",
        english:
          "If you call the hotel ahead of time, they'll usually hold your room. Most hotels won't cancel if you let them know.",
        spanish:
          "Si llama al hotel con anticipación, normalmente le guardarán la habitación. La mayoría de los hoteles no la cancelarán si les avisa.",
        highlight: "If you call... they'll hold",
      },
      {
        speaker: "A",
        speakerLabel: "Lucia (Traveler)",
        speakerLabelEs: "Lucia (Viajera)",
        english:
          "Perfect. One more thing — what's the easiest way to get around the city once I arrive?",
        spanish:
          "Perfecto. Una cosa más — ¿cuál es la forma más fácil de moverse por la ciudad una vez que llegue?",
        highlight: "get around",
      },
      {
        speaker: "B",
        speakerLabel: "Agent",
        speakerLabelEs: "Agente",
        english:
          "If you get a metro card at the airport, you'll save a lot of money on taxis.",
        spanish:
          "Si compra una tarjeta de metro en el aeropuerto, ahorrará mucho dinero en taxis.",
        highlight: "If you get... you'll save",
      },
      {
        speaker: "A",
        speakerLabel: "Lucia (Traveler)",
        speakerLabelEs: "Lucia (Viajera)",
        english: "Great advice. I'll do that. Thanks so much for your help!",
        spanish:
          "Excelente consejo. Lo haré. ¡Muchas gracias por su ayuda!",
        highlight: "I'll do that",
      },
    ],
    keyPhrases: [
      {
        english: "If you go..., you'll see...",
        spanish: "Si va..., verá...",
        note: "Classic first conditional for giving directions",
        noteEs: "Primer condicional clásico para dar direcciones",
      },
      {
        english: "What's the easiest way to get around?",
        spanish: "¿Cuál es la forma más fácil de moverse?",
        note: "Universal travel question — works in any city",
        noteEs:
          "Pregunta universal de viajes — funciona en cualquier ciudad",
      },
      {
        english: "I'll do that.",
        spanish: "Lo haré.",
        note: "Contracted future — natural response to advice",
        noteEs: "Futuro contraído — respuesta natural a un consejo",
      },
    ],
  },
];

// ─── Section C: Structure Builder (First Conditional) ────────────────────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "First Conditional: Form",
    labelEs: "Primer Condicional: Forma",
    description:
      "Structure: If + present simple, will + base verb. Use it for real, possible situations in the future.",
    descriptionEs:
      "Estructura: If + presente simple, will + verbo base. Úsalo para situaciones reales y posibles en el futuro.",
    sentences: [
      {
        english: "If it rains, we will take a taxi.",
        spanish: "Si llueve, tomaremos un taxi.",
        highlight: "If it rains, we will",
      },
      {
        english: "If you miss the train, you'll have to wait an hour.",
        spanish: "Si pierdes el tren, tendrás que esperar una hora.",
        highlight: "If you miss... you'll",
      },
      {
        english: "She will call us if her flight is delayed.",
        spanish: "Ella nos llamará si su vuelo se retrasa.",
        highlight: "will call... if",
      },
      {
        english: "If we don't leave now, we'll be late.",
        spanish: "Si no salimos ahora, llegaremos tarde.",
        highlight: "If we don't... we'll",
      },
    ],
  },
  {
    label: "Order Doesn't Matter",
    labelEs: "El Orden No Importa",
    description:
      "You can put the 'if' clause first or second — the meaning is the same. Use a comma only when 'if' comes first.",
    descriptionEs:
      "Puedes poner la cláusula 'if' primero o segundo — el significado es el mismo. Usa coma solo cuando 'if' va primero.",
    sentences: [
      {
        english: "If you call me, I will pick you up.",
        spanish: "Si me llamas, te recogeré.",
        highlight: "If you call me,",
      },
      {
        english: "I will pick you up if you call me.",
        spanish: "Te recogeré si me llamas.",
        highlight: "if you call me",
      },
      {
        english: "If it's sunny tomorrow, we'll go to the beach.",
        spanish: "Si está soleado mañana, iremos a la playa.",
        highlight: "If it's sunny",
      },
      {
        english: "We'll go to the beach if it's sunny tomorrow.",
        spanish: "Iremos a la playa si está soleado mañana.",
        highlight: "if it's sunny",
      },
    ],
  },
  {
    label: "Common Pitfall: Don't Use 'Will' After 'If'",
    labelEs: "Trampa Común: No Uses 'Will' Después de 'If'",
    description:
      "After 'if', always use the present tense — never 'will'. This is the #1 mistake Spanish speakers make with conditionals.",
    descriptionEs:
      "Después de 'if', siempre usa el presente — nunca 'will'. Este es el error #1 que cometen los hispanohablantes con condicionales.",
    sentences: [
      {
        english: "If I have time, I will call you. ✓",
        spanish: "Si tengo tiempo, te llamaré. ✓",
        highlight: "If I have time",
      },
      {
        english: "If I will have time, I will call you. ✗",
        spanish: "Si tendré tiempo, te llamaré. ✗",
        highlight: "If I will have",
      },
      {
        english: "If she arrives early, we'll go for coffee. ✓",
        spanish: "Si ella llega temprano, iremos por café. ✓",
        highlight: "If she arrives",
      },
      {
        english: "If she will arrive early, we'll go for coffee. ✗",
        spanish: "Si ella llegará temprano, iremos por café. ✗",
        highlight: "If she will arrive",
      },
    ],
  },
  {
    label: "Travel Phrasal Verbs in First Conditional",
    labelEs: "Phrasal Verbs de Viaje en Primer Condicional",
    description:
      "Combine the new tense with the unit's phrasal verbs — exactly how you'll talk to taxi drivers, hotel clerks, and fellow travelers.",
    descriptionEs:
      "Combina el nuevo tiempo con los phrasal verbs de la unidad — exactamente como hablarás con taxistas, recepcionistas y otros viajeros.",
    sentences: [
      {
        english: "If you check in online, you'll save time at the airport.",
        spanish: "Si te registras en línea, ahorrarás tiempo en el aeropuerto.",
        highlight: "If you check in",
      },
      {
        english: "If we set off at 7, we'll get there by noon.",
        spanish: "Si salimos a las 7, llegaremos al mediodía.",
        highlight: "If we set off",
      },
      {
        english: "I'll drop you off at the station if you want.",
        spanish: "Te dejaré en la estación si quieres.",
        highlight: "I'll drop you off",
      },
      {
        english: "If you get on the wrong bus, just get off at the next stop.",
        spanish: "Si te subes al autobús equivocado, solo bájate en la próxima parada.",
        highlight: "get on... get off",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes with Conditionals & Travel English",
  titleEs: "Errores Comunes con Condicionales e Inglés de Viaje",
  description:
    "These are the exact errors Spanish speakers make in travel situations. Spot them before they cost you a connection.",
  descriptionEs:
    "Estos son los errores exactos que cometen los hispanohablantes en situaciones de viaje. Detéctalos antes de que te cuesten una conexión.",
  items: [
    {
      incorrect: "If it will rain, we will stay home.",
      correct: "If it rains, we will stay home.",
      incorrectHighlight: "If it will rain",
      correctHighlight: "If it rains",
      explanation:
        "After 'if' in the first conditional, use the present simple — never 'will'. Spanish 'Si lloverá' is wrong in Spanish too, but the temptation to translate 'lloverá' as 'will rain' trips up many learners.",
      explanationEs:
        "Después de 'if' en el primer condicional, usa el presente simple — nunca 'will'. La tentación de traducir 'lloverá' como 'will rain' confunde a muchos.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "I will get in the bus at 9 AM.",
      correct: "I will get on the bus at 9 AM.",
      incorrectHighlight: "get in the bus",
      correctHighlight: "get on the bus",
      explanation:
        "For buses, trains, planes, boats, and bikes, use 'get ON' (you climb up onto them). Use 'get IN' only for cars, taxis, and small enclosed vehicles. Spanish uses 'subirse a' for both, which causes confusion.",
      explanationEs:
        "Para autobuses, trenes, aviones, barcos y bicicletas, usa 'get ON' (te subes encima). Usa 'get IN' solo para coches, taxis y vehículos pequeños cerrados.",
      errorType: "phrasal-verb",
    },
    {
      incorrect: "Can you drop off me at the hotel?",
      correct: "Can you drop me off at the hotel?",
      incorrectHighlight: "drop off me",
      correctHighlight: "drop me off",
      explanation:
        "'Drop off' is a separable phrasal verb. With pronouns (me, you, him, her, it, us, them), the pronoun MUST go between 'drop' and 'off'. Same rule as Unit 2: 'pick it up', 'put it off', 'drop me off'.",
      explanationEs:
        "'Drop off' es un phrasal verb separable. Con pronombres (me, you, him, her, it, us, them), el pronombre DEBE ir entre 'drop' y 'off'. Misma regla que en la Unidad 2.",
      errorType: "word-order",
    },
    {
      incorrect: "I am going to check-in at the hotel now.",
      correct: "I am going to check in at the hotel now.",
      incorrectHighlight: "check-in (verb)",
      correctHighlight: "check in (verb)",
      explanation:
        "When you use 'check in' as a VERB, write it as two separate words: 'I will check in'. The hyphenated 'check-in' is a NOUN: 'the check-in counter', 'online check-in'. Same rule for 'pick up' / 'pick-up', 'drop off' / 'drop-off'.",
      explanationEs:
        "Cuando usas 'check in' como VERBO, se escribe como dos palabras separadas: 'I will check in'. El 'check-in' con guion es un SUSTANTIVO: 'the check-in counter'.",
      errorType: "phrasal-verb",
    },
    {
      incorrect: "If I will have time, I will visit the museum.",
      correct: "If I have time, I will visit the museum.",
      incorrectHighlight: "If I will have",
      correctHighlight: "If I have",
      explanation:
        "Same rule again — never use 'will' in the 'if' part of a first conditional. Only the result clause uses 'will'. Memorize: 'If + present, ... will + base verb'.",
      explanationEs:
        "Misma regla otra vez — nunca uses 'will' en la parte 'if' de un primer condicional. Solo la cláusula del resultado usa 'will'. Memoriza: 'If + presente, ... will + verbo base'.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "We arrived to the airport at 6 AM.",
      correct: "We arrived at the airport at 6 AM.",
      incorrectHighlight: "arrived to",
      correctHighlight: "arrived at",
      explanation:
        "'Arrive' takes 'at' for specific places (the airport, the station, the hotel) and 'in' for cities/countries (in Paris, in Mexico). It NEVER takes 'to'. Spanish 'llegar a' translates to either 'at' or 'in', never 'to'.",
      explanationEs:
        "'Arrive' lleva 'at' para lugares específicos (the airport, the station, the hotel) e 'in' para ciudades/países (in Paris, in Mexico). NUNCA lleva 'to'. El 'llegar a' del español se traduce como 'at' o 'in', nunca 'to'.",
      errorType: "preposition",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "I'll",
    spanishStress: "I WILL",
    englishStress: "ail (one syllable)",
    tip: "'I'll' is one syllable, pronounced /ail/ — it rhymes with 'mile'. Saying 'I will' as two separate words sounds robotic and unnatural in casual speech.",
    tipEs:
      "'I'll' es una sílaba, se pronuncia /ail/ — rima con 'mile'. Decir 'I will' como dos palabras separadas suena robótico y antinatural en el habla casual.",
  },
  {
    word: "won't",
    spanishStress: "WILL NOT",
    englishStress: "wount (one syllable)",
    tip: "'Won't' rhymes with 'don't'. Don't confuse it with 'want' (different vowel). 'I won't go' = 'I will not go' — natives almost always contract.",
    tipEs:
      "'Won't' rima con 'don't'. No lo confundas con 'want' (vocal diferente). 'I won't go' = 'I will not go' — los nativos casi siempre contraen.",
  },
  {
    word: "it'll",
    spanishStress: "IT WILL",
    englishStress: "it-əl",
    tip: "'It'll' sounds like 'it-əl' — almost like a single word with a quick schwa. 'It'll be fine' flows like 'itəl-be-FINE'.",
    tipEs:
      "'It'll' suena como 'it-əl' — casi como una sola palabra con una schwa rápida. 'It'll be fine' fluye como 'itəl-be-FINE'.",
  },
  {
    word: "you'll",
    spanishStress: "YOU WILL",
    englishStress: "yul (one syllable)",
    tip: "'You'll' rhymes with 'pool' or 'tool'. In fast speech: 'You'll see' = 'yul-SEE'. Two syllables max — never three.",
    tipEs:
      "'You'll' rima con 'pool' o 'tool'. En habla rápida: 'You'll see' = 'yul-SEE'. Máximo dos sílabas — nunca tres.",
  },
  {
    word: "we'll",
    spanishStress: "WE WILL",
    englishStress: "wil (one syllable)",
    tip: "'We'll' sounds exactly like 'wheel' — one syllable. 'We'll go' = 'wheel-GO'. Don't pronounce it as two syllables.",
    tipEs:
      "'We'll' suena exactamente como 'wheel' — una sílaba. 'We'll go' = 'wheel-GO'. No lo pronuncies como dos sílabas.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Phrasal verbs
  { english: "check in", spanish: "registrarse", type: "phrasal-verb" },
  { english: "check out", spanish: "desocupar / pagar y salir", type: "phrasal-verb" },
  { english: "drop off", spanish: "dejar (en un lugar)", type: "phrasal-verb" },
  { english: "pick up", spanish: "recoger", type: "phrasal-verb" },
  { english: "get on", spanish: "subirse a (transporte público)", type: "phrasal-verb" },
  { english: "get off", spanish: "bajarse de (transporte público)", type: "phrasal-verb" },
  { english: "get around", spanish: "moverse / desplazarse", type: "phrasal-verb" },
  { english: "set off", spanish: "salir (de viaje) / partir", type: "phrasal-verb" },
  { english: "stop over", spanish: "hacer escala", type: "phrasal-verb" },
  // First conditional expressions
  { english: "If you go..., you'll see...", spanish: "Si vas..., verás...", type: "expression" },
  { english: "I'll do that.", spanish: "Lo haré.", type: "expression" },
  { english: "If it rains, we'll...", spanish: "Si llueve, vamos a...", type: "expression" },
  { english: "What time do we have to...?", spanish: "¿A qué hora tenemos que...?", type: "expression" },
  // Travel vocabulary
  { english: "flight", spanish: "vuelo", type: "noun" },
  { english: "luggage", spanish: "equipaje", type: "noun" },
  { english: "boarding pass", spanish: "pase de abordar", type: "noun" },
  { english: "gate", spanish: "puerta (de embarque)", type: "noun" },
  { english: "delay", spanish: "retraso", type: "noun" },
  { english: "connection", spanish: "conexión", type: "noun" },
  { english: "round trip", spanish: "viaje redondo", type: "noun" },
  { english: "one-way", spanish: "solo ida", type: "noun" },
  // Useful travel verbs
  { english: "to board", spanish: "abordar", type: "verb" },
  { english: "to depart", spanish: "salir / partir", type: "verb" },
  { english: "to arrive", spanish: "llegar", type: "verb" },
  { english: "to book", spanish: "reservar", type: "verb" },
];
