// Unit 4: "Which, That, Who, When" — Full course content
//
// Section 1: Which vs that — defining vs non-defining — WordPairLab
// Section 2: Who vs whom (and why nobody says "whom" anymore) — ErrorSpotter
// Section 3: When, where, whose — relative clauses without the confusion — SentenceTransformer

import type { WordPair, ErrorSpotterItem, SentenceTransform } from "./types";

// ─── Section 1: Which vs That (WordPairLab) ──────────────────────────────────

export const whichThatPairs: WordPair[] = [
  {
    weak: "The laptop which I bought last week is already broken.",
    weakEs: "La laptop que compré la semana pasada ya está rota.",
    strong: "The laptop that I bought last week is already broken.",
    strongEs: "La laptop que compré la semana pasada ya está rota.",
    weakHighlight: "which",
    strongHighlight: "that",
    why: "This is a DEFINING clause — it tells you WHICH laptop. Use 'that' with no comma. 'Which' is for non-defining clauses (extra info, with commas). Rule: if removing the clause changes the meaning, use 'that'. If you could delete it and the sentence still works, use 'which' with commas.",
    whyEs: "Esta es una cláusula DEFINITORIA — te dice CUÁL laptop. Usa 'that' sin coma. 'Which' es para cláusulas no definitorias (información extra, con comas). Regla: si quitar la cláusula cambia el significado, usa 'that'. Si pudieras eliminarla y la oración sigue funcionando, usa 'which' con comas.",
    category: "Defining clause",
    categoryEs: "Cláusula definitoria",
  },
  {
    weak: "The policy that was updated last month, is now in effect.",
    weakEs: "La política que fue actualizada el mes pasado, ahora está en efecto.",
    strong: "The policy that was updated last month is now in effect.",
    strongEs: "La política que fue actualizada el mes pasado ahora está en efecto.",
    weakHighlight: "month,",
    strongHighlight: "month",
    why: "When you use 'that', NEVER add a comma before or after the clause. The comma signals non-defining information — and 'that' clauses are always defining. The comma here is a common error that muddles the sentence structure.",
    whyEs: "Cuando usas 'that', NUNCA agregues una coma antes o después de la cláusula. La coma señala información no definitoria — y las cláusulas con 'that' siempre son definitorias. La coma aquí es un error común que confunde la estructura.",
    category: "Comma rule",
    categoryEs: "Regla de la coma",
  },
  {
    weak: "My car that is a 2020 model needs new tires.",
    weakEs: "Mi coche que es modelo 2020 necesita llantas nuevas.",
    strong: "My car, which is a 2020 model, needs new tires.",
    strongEs: "Mi coche, que es modelo 2020, necesita llantas nuevas.",
    weakHighlight: "that",
    strongHighlight: ", which",
    why: "You only have ONE car — so 'that is a 2020 model' isn't telling the listener WHICH car. It's adding EXTRA info. Extra info = 'which' + commas. If you had multiple cars and needed to specify which one, 'that' would be correct: 'The car that is a 2020 model' (not the other one).",
    whyEs: "Solo tienes UN coche — así que 'that is a 2020 model' no le dice al oyente CUÁL coche. Agrega información EXTRA. Información extra = 'which' + comas. Si tuvieras múltiples coches, 'that' sería correcto: 'The car that is a 2020 model' (no el otro).",
    category: "Non-defining clause",
    categoryEs: "Cláusula no definitoria",
  },
  {
    weak: "The book, that she recommended, was excellent.",
    weakEs: "El libro, que ella recomendó, fue excelente.",
    strong: "The book that she recommended was excellent.",
    strongEs: "El libro que ella recomendó fue excelente.",
    weakHighlight: ", that",
    strongHighlight: "that",
    why: "If you're using commas, you MUST use 'which', not 'that'. But here, the clause IS defining — it tells you which book. So drop the commas and keep 'that'. Alternatively: 'The book, which she recommended, was excellent' (non-defining — extra info about a book already identified).",
    whyEs: "Si usas comas, DEBES usar 'which', no 'that'. Pero aquí, la cláusula SÍ es definitoria — te dice cuál libro. Así que quita las comas y conserva 'that'.",
    category: "Comma conflict",
    categoryEs: "Conflicto de coma",
  },
  {
    weak: "The meeting that was very productive lasted three hours.",
    weakEs: "La junta que fue muy productiva duró tres horas.",
    strong: "The meeting, which was very productive, lasted three hours.",
    strongEs: "La junta, que fue muy productiva, duró tres horas.",
    weakHighlight: "that",
    strongHighlight: ", which",
    why: "Ask: does the clause identify WHICH meeting? If there was only one meeting that day, 'very productive' is extra info → 'which' + commas. If there were several meetings and you need to specify which one was productive → 'that' with no commas.",
    whyEs: "Pregunta: ¿la cláusula identifica CUÁL junta? Si solo hubo una junta ese día, 'very productive' es información extra → 'which' + comas. Si hubo varias juntas y necesitas especificar cuál fue productiva → 'that' sin comas.",
    category: "Context determines choice",
    categoryEs: "El contexto determina la elección",
  },
  {
    weak: "Everything which happened today was unexpected.",
    weakEs: "Todo lo que pasó hoy fue inesperado.",
    strong: "Everything that happened today was unexpected.",
    strongEs: "Todo lo que pasó hoy fue inesperado.",
    weakHighlight: "which",
    strongHighlight: "that",
    why: "After indefinite pronouns (everything, something, anything, nothing, all), ALWAYS use 'that', never 'which'. This is a hard rule with no exceptions. 'Something that matters.' 'Anything that works.' 'Nothing that we can do.'",
    whyEs: "Después de pronombres indefinidos (everything, something, anything, nothing, all), SIEMPRE usa 'that', nunca 'which'. Esta es una regla dura sin excepciones. 'Something that matters.' 'Anything that works.'",
    category: "Hard rule",
    categoryEs: "Regla absoluta",
  },
];

// ─── Section 2: Who vs Whom (ErrorSpotter) ───────────────────────────────────

export const whoWhomErrors: ErrorSpotterItem[] = [
  {
    sentence: "The candidate whom arrived late was not considered for the position.",
    errorWord: "whom",
    improved: "The candidate who arrived late was not considered for the position.",
    sentenceEs: "El candidato quien llegó tarde no fue considerado para el puesto.",
    improvedEs: "El candidato que llegó tarde no fue considerado para el puesto.",
    explanation:
      "'Who' is the SUBJECT form (like he/she). 'Whom' is the OBJECT form (like him/her). Here, the candidate ARRIVED (subject) → 'who'. Quick test: replace with he/him. 'He arrived late' works. 'Him arrived late' doesn't. So: 'who.'",
    explanationEs:
      "'Who' es la forma de SUJETO (como he/she). 'Whom' es la forma de OBJETO (como him/her). Aquí, el candidato LLEGÓ (sujeto) → 'who'. Prueba rápida: reemplaza con he/him. 'He arrived late' funciona. 'Him arrived late' no. Entonces: 'who.'",
  },
  {
    sentence: "I need to know who the package was sent to.",
    errorWord: "who",
    improved: "I need to know whom the package was sent to.",
    sentenceEs: "Necesito saber a quién se envió el paquete.",
    improvedEs: "Necesito saber a quién se envió el paquete.",
    explanation:
      "The package was sent TO someone — that someone is the OBJECT of the preposition 'to.' Object position → 'whom.' Test: 'The package was sent to HIM' (works). 'The package was sent to HE' (doesn't). So: 'whom.' In practice, most speakers say 'who' here and nobody blinks — but 'whom' is technically correct.",
    explanationEs:
      "El paquete fue enviado A alguien — ese alguien es el OBJETO de la preposición 'to.' Posición de objeto → 'whom.' Prueba: 'The package was sent to HIM' (funciona). En la práctica, la mayoría dice 'who' aquí y nadie reacciona — pero 'whom' es técnicamente correcto.",
  },
  {
    sentence: "She is the manager whom I believe is the most qualified.",
    errorWord: "whom",
    improved: "She is the manager who I believe is the most qualified.",
    sentenceEs: "Ella es la gerente quien yo creo que es la más calificada.",
    improvedEs: "Ella es la gerente que yo creo que es la más calificada.",
    explanation:
      "This is a TRAP. 'I believe' is a parenthetical — remove it and the sentence is 'the manager IS the most qualified.' The manager is the SUBJECT of 'is', so use 'who.' The insertion of 'I believe' tricks people into thinking 'whom' is correct because it LOOKS like an object. It's not.",
    explanationEs:
      "Esta es una TRAMPA. 'I believe' es un paréntesis — quítalo y la oración es 'the manager IS the most qualified.' La gerente es el SUJETO de 'is', así que usa 'who.' La inserción de 'I believe' engaña a la gente.",
  },
  {
    sentence: "Whom is responsible for this mistake?",
    errorWord: "Whom",
    improved: "Who is responsible for this mistake?",
    sentenceEs: "¿Quién es responsable de este error?",
    improvedEs: "¿Quién es responsable de este error?",
    explanation:
      "'Is responsible' needs a SUBJECT. 'Whom' is never a subject — only 'who' can be. 'Whom' is reserved for objects. Using 'whom' in subject position is a common overcorrection by people trying to sound formal.",
    explanationEs:
      "'Is responsible' necesita un SUJETO. 'Whom' nunca es sujeto — solo 'who' puede serlo. 'Whom' está reservado para objetos. Usar 'whom' en posición de sujeto es una hipercorrección común de personas tratando de sonar formales.",
  },
  {
    sentence: "The people who we interviewed yesterday were all very strong candidates.",
    errorWord: "who",
    improved: "The people whom we interviewed yesterday were all very strong candidates.",
    sentenceEs: "Las personas a quienes entrevistamos ayer fueron candidatos muy fuertes.",
    improvedEs: "Las personas a quienes entrevistamos ayer fueron candidatos muy fuertes.",
    explanation:
      "WE interviewed THEM — 'them' is the object of 'interviewed.' Object → 'whom.' But here's the reality: in 2026 spoken English, 'who we interviewed' is universally accepted. 'Whom' is technically correct but increasingly rare outside legal and academic writing. Know the rule, then choose your register.",
    explanationEs:
      "NOSOTROS los entrevistamos — 'them' es el objeto de 'interviewed.' Objeto → 'whom.' Pero la realidad: en inglés hablado 2026, 'who we interviewed' es universalmente aceptado. 'Whom' es técnicamente correcto pero cada vez más raro fuera de escritura legal y académica.",
  },
  {
    sentence: "The person which called you is waiting in the lobby.",
    errorWord: "which",
    improved: "The person who called you is waiting in the lobby.",
    sentenceEs: "La persona que te llamó está esperando en el lobby.",
    improvedEs: "La persona que te llamó está esperando en el lobby.",
    explanation:
      "'Which' is NEVER used for people — only 'who' or 'that.' This is a hard rule with no exceptions. Spanish 'que' covers both people and things, which causes this error. People = 'who.' Things = 'which' or 'that.'",
    explanationEs:
      "'Which' NUNCA se usa para personas — solo 'who' o 'that.' Esta es una regla dura sin excepciones. El 'que' del español cubre tanto personas como cosas, lo que causa este error. Personas = 'who.' Cosas = 'which' o 'that.'",
  },
];

// ─── Section 3: When, Where, Whose (SentenceTransformer) ─────────────────────

export const relativeClauseTransforms: SentenceTransform[] = [
  {
    flat: "I remember the day. I started this job on that day.",
    flatEs: "Recuerdo el día. Empecé este trabajo en ese día.",
    strong: "I remember the day when I started this job.",
    strongEs: "Recuerdo el día en que empecé este trabajo.",
    technique: "when (time reference)",
    techniqueEs: "when (referencia de tiempo)",
    why: "'When' replaces 'on that day' / 'at that time' / 'in that year.' It joins two sentences about the same time point into one fluid sentence. 'The day when', 'the moment when', 'the year when' — all standard patterns.",
    whyEs: "'When' reemplaza 'on that day' / 'at that time' / 'in that year.' Une dos oraciones sobre el mismo punto en el tiempo en una sola oración fluida.",
  },
  {
    flat: "This is the restaurant. We had our first meeting there.",
    flatEs: "Este es el restaurante. Tuvimos nuestra primera junta ahí.",
    strong: "This is the restaurant where we had our first meeting.",
    strongEs: "Este es el restaurante donde tuvimos nuestra primera junta.",
    technique: "where (place reference)",
    techniqueEs: "where (referencia de lugar)",
    why: "'Where' replaces 'there' / 'at that place' / 'in that building.' It's the relative pronoun for locations. Never use 'which' for places when 'where' fits — 'the office where I work' is more natural than 'the office in which I work.'",
    whyEs: "'Where' reemplaza 'there' / 'at that place' / 'in that building.' Es el pronombre relativo para lugares. Nunca uses 'which' para lugares cuando 'where' funciona — 'the office where I work' es más natural que 'the office in which I work.'",
  },
  {
    flat: "The manager has a reputation. His leadership style is very collaborative.",
    flatEs: "El gerente tiene una reputación. Su estilo de liderazgo es muy colaborativo.",
    strong: "The manager, whose leadership style is very collaborative, has an excellent reputation.",
    strongEs: "El gerente, cuyo estilo de liderazgo es muy colaborativo, tiene una excelente reputación.",
    technique: "whose (possession)",
    techniqueEs: "whose (posesión)",
    why: "'Whose' shows that something BELONGS to the person or thing mentioned. It replaces 'his/her/its/their.' 'The manager whose style...' = 'the manager — his style...' It's the only way to combine these two ideas cleanly.",
    whyEs: "'Whose' muestra que algo PERTENECE a la persona o cosa mencionada. Reemplaza 'his/her/its/their.' 'The manager whose style...' = 'the manager — his style...' Es la única forma de combinar estas dos ideas limpiamente.",
  },
  {
    flat: "The client called us. His contract expires next month.",
    flatEs: "El cliente nos llamó. Su contrato expira el próximo mes.",
    strong: "The client whose contract expires next month called us.",
    strongEs: "El cliente cuyo contrato expira el próximo mes nos llamó.",
    technique: "whose (mid-sentence placement)",
    techniqueEs: "whose (colocación a mitad de oración)",
    why: "Notice the 'whose' clause sits between the subject ('the client') and the verb ('called'). This mid-sentence placement is natural in English and avoids the need for two choppy sentences. Spanish speakers often avoid 'whose' because 'cuyo' is also rarely used in spoken Spanish.",
    whyEs: "Nota que la cláusula con 'whose' se sitúa entre el sujeto ('the client') y el verbo ('called'). Esta colocación a mitad de oración es natural en inglés. Los hispanohablantes frecuentemente evitan 'whose' porque 'cuyo' también se usa poco en español hablado.",
  },
  {
    flat: "I grew up in a small town. There wasn't much to do in that town. The town had only one school.",
    flatEs: "Crecí en un pueblo pequeño. No había mucho que hacer en ese pueblo. El pueblo tenía solo una escuela.",
    strong: "I grew up in a small town where there wasn't much to do and whose only school closed years ago.",
    strongEs: "Crecí en un pueblo pequeño donde no había mucho que hacer y cuya única escuela cerró hace años.",
    technique: "where + whose (combined)",
    techniqueEs: "where + whose (combinados)",
    why: "Advanced writers chain relative clauses using different pronouns in the same sentence. 'Where' for the location fact, 'whose' for the possession fact. Three choppy sentences become one fluid, sophisticated sentence. This is C1-level construction.",
    whyEs: "Los escritores avanzados encadenan cláusulas relativas usando diferentes pronombres en la misma oración. 'Where' para el dato de ubicación, 'whose' para el dato de posesión. Tres oraciones cortas se vuelven una oración fluida y sofisticada. Esta es construcción nivel C1.",
  },
  {
    flat: "There was a time. People wrote letters to communicate at that time.",
    flatEs: "Hubo un tiempo. La gente escribía cartas para comunicarse en ese tiempo.",
    strong: "There was a time when people wrote letters to communicate.",
    strongEs: "Hubo un tiempo en que la gente escribía cartas para comunicarse.",
    technique: "when (nostalgic reference)",
    techniqueEs: "when (referencia nostálgica)",
    why: "'There was a time when...' is one of the most powerful storytelling openings in English. It immediately signals nostalgia or reflection. The 'when' clause completes the thought in a single breath.",
    whyEs: "'There was a time when...' es una de las aperturas narrativas más poderosas en inglés. Señala inmediatamente nostalgia o reflexión. La cláusula con 'when' completa el pensamiento en un solo respiro.",
  },
];
