// Unit 5: "Articles: A, An, The, or Nothing" — Full course content
//
// Section 1: When to use "a/an" vs "the" — WordPairLab
// Section 2: When to use no article (zero article) — ErrorSpotter
// Section 3: The traps — institutions, places, abstract nouns — SentenceTransformer

import type { WordPair, ErrorSpotterItem, SentenceTransform } from "./types";

// ─── Section 1: A/An vs The (WordPairLab) ────────────────────────────────────

export const articlePairs: WordPair[] = [
  {
    weak: "I saw the movie last night. It was amazing.",
    weakEs: "Vi la película anoche. Fue increíble.",
    strong: "I saw a movie last night. It was amazing.",
    strongEs: "Vi una película anoche. Fue increíble.",
    weakHighlight: "the",
    strongHighlight: "a",
    why: "First mention of a non-specific movie → 'a movie.' The listener doesn't know which movie yet. If you'd already mentioned it ('Have you seen Oppenheimer?' → 'Yes, I saw THE movie'), then 'the' is correct. First mention = 'a/an.' Already known = 'the.'",
    whyEs: "Primera mención de una película no específica → 'a movie.' El oyente no sabe cuál película todavía. Si ya la hubieras mencionado, entonces 'the' sería correcto. Primera mención = 'a/an.' Ya conocido = 'the.'",
    category: "First mention rule",
    categoryEs: "Regla de primera mención",
  },
  {
    weak: "She is a doctor. A doctor works at General Hospital.",
    weakEs: "Ella es doctora. La doctora trabaja en el Hospital General.",
    strong: "She is a doctor. The doctor works at General Hospital.",
    strongEs: "Ella es doctora. La doctora trabaja en el Hospital General.",
    weakHighlight: "A doctor works",
    strongHighlight: "The doctor works",
    why: "Second mention of the same doctor → 'the.' Once you've introduced a noun with 'a/an,' every subsequent reference uses 'the.' This is the most fundamental article rule in English and the one Spanish speakers get wrong most often.",
    whyEs: "Segunda mención de la misma doctora → 'the.' Una vez que introduces un sustantivo con 'a/an,' cada referencia subsiguiente usa 'the.' Esta es la regla de artículos más fundamental en inglés.",
    category: "Second mention rule",
    categoryEs: "Regla de segunda mención",
  },
  {
    weak: "Can you pass a salt, please?",
    weakEs: "¿Me pasas una sal, por favor?",
    strong: "Can you pass the salt, please?",
    strongEs: "¿Me pasas la sal, por favor?",
    weakHighlight: "a salt",
    strongHighlight: "the salt",
    why: "There's only one salt shaker on the table — both speakers know which one. When the item is UNIQUE in the context (the sun, the moon, the president, the salt on our table), use 'the.' Spanish does this the same way ('la sal'), so this one should feel natural.",
    whyEs: "Solo hay un salero en la mesa — ambos hablantes saben cuál. Cuando el artículo es ÚNICO en el contexto (the sun, the moon, the president), usa 'the.' El español hace lo mismo ('la sal').",
    category: "Unique in context",
    categoryEs: "Único en contexto",
  },
  {
    weak: "I need the new laptop for work.",
    weakEs: "Necesito una laptop nueva para el trabajo.",
    strong: "I need a new laptop for work.",
    strongEs: "Necesito una laptop nueva para el trabajo.",
    weakHighlight: "the",
    strongHighlight: "a",
    why: "No specific laptop has been discussed — you're talking about ANY new laptop. When you mean 'one of many' or 'any,' use 'a/an.' 'The' would mean a specific laptop both speakers already know about: 'the new laptop we discussed yesterday.'",
    whyEs: "No se ha discutido ninguna laptop específica — estás hablando de CUALQUIER laptop nueva. Cuando quieres decir 'una de muchas' o 'cualquiera,' usa 'a/an.'",
    category: "Specific vs general",
    categoryEs: "Específico vs general",
  },
  {
    weak: "He is best manager I've ever had.",
    weakEs: "Él es el mejor gerente que he tenido.",
    strong: "He is the best manager I've ever had.",
    strongEs: "Él es el mejor gerente que he tenido.",
    weakHighlight: "is best",
    strongHighlight: "is the best",
    why: "Superlatives ALWAYS take 'the': the best, the worst, the most important, the first, the last. There's only one 'best' — it's unique by definition. Dropping 'the' before a superlative is one of the most noticeable Spanish-speaker errors.",
    whyEs: "Los superlativos SIEMPRE llevan 'the': the best, the worst, the most important, the first, the last. Solo hay un 'best' — es único por definición. Omitir 'the' antes de un superlativo es uno de los errores más notorios de los hispanohablantes.",
    category: "Superlatives",
    categoryEs: "Superlativos",
  },
  {
    weak: "I have the headache.",
    weakEs: "Tengo un dolor de cabeza.",
    strong: "I have a headache.",
    strongEs: "Tengo un dolor de cabeza.",
    weakHighlight: "the headache",
    strongHighlight: "a headache",
    why: "With symptoms and conditions, English uses 'a': 'a headache,' 'a cold,' 'a fever,' 'a sore throat.' Spanish uses 'dolor de cabeza' (no article) or 'un dolor de cabeza.' The 'the' version would mean a specific headache you've been discussing: 'the headache I had yesterday is back.'",
    whyEs: "Con síntomas y condiciones, el inglés usa 'a': 'a headache,' 'a cold,' 'a fever,' 'a sore throat.' La versión con 'the' significaría un dolor de cabeza específico que estuviste discutiendo.",
    category: "Health expressions",
    categoryEs: "Expresiones de salud",
  },
];

// ─── Section 2: Zero Article — When to Use Nothing (ErrorSpotter) ────────────

export const zeroArticleErrors: ErrorSpotterItem[] = [
  {
    sentence: "The life is beautiful when you have the love.",
    errorWord: "The",
    improved: "Life is beautiful when you have love.",
    sentenceEs: "La vida es hermosa cuando tienes el amor.",
    improvedEs: "La vida es hermosa cuando tienes amor.",
    explanation:
      "Abstract nouns used in a GENERAL sense take NO article: life, love, death, time, freedom, justice. Spanish uses 'la vida,' 'el amor' — English drops the article entirely. 'THE life' would mean a specific life: 'the life of a soldier.'",
    explanationEs:
      "Los sustantivos abstractos usados en sentido GENERAL no llevan artículo: life, love, death, time, freedom, justice. El español usa 'la vida,' 'el amor' — el inglés quita el artículo por completo.",
  },
  {
    sentence: "I like the music, especially the jazz.",
    errorWord: "the",
    improved: "I like music, especially jazz.",
    sentenceEs: "Me gusta la música, especialmente el jazz.",
    improvedEs: "Me gusta la música, especialmente el jazz.",
    explanation:
      "When talking about music/genres IN GENERAL, no article. 'I like music' (all music). 'I like the music' means specific music: 'I like the music at this restaurant.' Same for food: 'I like coffee' (general) vs. 'I like the coffee here' (specific).",
    explanationEs:
      "Cuando hablas de música/géneros EN GENERAL, no hay artículo. 'I like music' (toda la música). 'I like the music' significa música específica: 'I like the music at this restaurant.'",
  },
  {
    sentence: "She goes to the work by the bus every morning.",
    errorWord: "the",
    improved: "She goes to work by bus every morning.",
    sentenceEs: "Ella va al trabajo en el autobús cada mañana.",
    improvedEs: "Ella va al trabajo en autobús cada mañana.",
    explanation:
      "Fixed expressions with 'go to' drop the article: go to work, go to school, go to bed, go to church, go to prison. Transport with 'by' also drops it: by bus, by car, by train, by plane. Spanish keeps the article in both cases, which causes this error.",
    explanationEs:
      "Expresiones fijas con 'go to' eliminan el artículo: go to work, go to school, go to bed, go to church, go to prison. El transporte con 'by' también: by bus, by car, by train, by plane.",
  },
  {
    sentence: "The breakfast is the most important meal of the day.",
    errorWord: "The",
    improved: "Breakfast is the most important meal of the day.",
    sentenceEs: "El desayuno es la comida más importante del día.",
    improvedEs: "El desayuno es la comida más importante del día.",
    explanation:
      "Meals IN GENERAL take no article: breakfast, lunch, dinner. 'I had breakfast at 7.' 'Breakfast is important.' But specific meals DO: 'The breakfast at that hotel was terrible.' Notice: 'the most important meal' keeps 'the' because it's a superlative — only the general noun drops it.",
    explanationEs:
      "Las comidas EN GENERAL no llevan artículo: breakfast, lunch, dinner. 'I had breakfast at 7.' Pero comidas específicas SÍ: 'The breakfast at that hotel was terrible.'",
  },
  {
    sentence: "He is studying the engineering at the MIT.",
    errorWord: "the",
    improved: "He is studying engineering at MIT.",
    sentenceEs: "Él está estudiando la ingeniería en el MIT.",
    improvedEs: "Él está estudiando ingeniería en el MIT.",
    explanation:
      "Two rules at once. Academic subjects take no article: engineering, medicine, mathematics, history. Most university names also take no article: MIT, Harvard, Stanford, Oxford. Exceptions: 'the University of Texas' (with 'of'), 'the Sorbonne' (tradition).",
    explanationEs:
      "Dos reglas a la vez. Las materias académicas no llevan artículo: engineering, medicine, mathematics. La mayoría de universidades tampoco: MIT, Harvard, Stanford. Excepciones: 'the University of Texas' (con 'of').",
  },
  {
    sentence: "The honesty is a quality that I value in the people.",
    errorWord: "The",
    improved: "Honesty is a quality that I value in people.",
    sentenceEs: "La honestidad es una cualidad que valoro en la gente.",
    improvedEs: "La honestidad es una cualidad que valoro en la gente.",
    explanation:
      "Two zero-article nouns: 'honesty' (abstract quality, general) and 'people' (general group). Spanish uses 'la honestidad' and 'la gente' — English uses neither. 'A quality' is correct because it's one of many qualities (countable, first mention).",
    explanationEs:
      "Dos sustantivos sin artículo: 'honesty' (cualidad abstracta, general) y 'people' (grupo general). El español usa 'la honestidad' y 'la gente' — el inglés no usa ninguno.",
  },
];

// ─── Section 3: Article Traps (SentenceTransformer) ──────────────────────────

export const articleTrapTransforms: SentenceTransform[] = [
  {
    flat: "He was taken to the hospital. He went to the school after.",
    flatEs: "Lo llevaron al hospital. Fue a la escuela después.",
    strong: "He was taken to hospital. He went to school after.",
    strongEs: "Lo llevaron al hospital. Fue a la escuela después.",
    technique: "institutions as purpose",
    techniqueEs: "instituciones como propósito",
    why: "When someone goes to an institution FOR ITS PURPOSE, no article: go to hospital (as a patient), go to school (as a student), go to prison (as a prisoner), go to church (to pray). WITH an article means visiting: 'I went to the hospital to visit my friend' (not as a patient). This distinction doesn't exist in Spanish.",
    whyEs: "Cuando alguien va a una institución POR SU PROPÓSITO, sin artículo: go to hospital (como paciente), go to school (como estudiante). CON artículo significa visitar: 'I went to the hospital to visit my friend' (no como paciente).",
  },
  {
    flat: "I play the guitar and she plays the tennis.",
    flatEs: "Yo toco la guitarra y ella juega al tenis.",
    strong: "I play the guitar and she plays tennis.",
    strongEs: "Yo toco la guitarra y ella juega al tenis.",
    technique: "instruments vs sports",
    techniqueEs: "instrumentos vs deportes",
    why: "Musical instruments take 'the': play the guitar, play the piano, play the violin. Sports take NO article: play tennis, play soccer, play chess. Spanish uses 'la guitarra' and 'el tenis' — English splits them. This is pure memorization.",
    whyEs: "Los instrumentos musicales llevan 'the': play the guitar, play the piano. Los deportes NO llevan artículo: play tennis, play soccer. El español usa ambos — el inglés los divide.",
  },
  {
    flat: "The Mount Everest is in the Asia, near the Nepal.",
    flatEs: "El Monte Everest está en Asia, cerca de Nepal.",
    strong: "Mount Everest is in Asia, near Nepal.",
    strongEs: "El Monte Everest está en Asia, cerca de Nepal.",
    technique: "geography rules",
    techniqueEs: "reglas de geografía",
    why: "No article for: continents (Asia, Europe), countries (Nepal, France), individual mountains (Mount Everest), cities (Paris), lakes (Lake Michigan). USE 'the' for: mountain ranges (the Alps), rivers (the Nile), oceans (the Pacific), deserts (the Sahara), countries with 'kingdom/states/republic' (the UK, the US).",
    whyEs: "Sin artículo para: continentes (Asia), países (Nepal), montañas individuales (Mount Everest), ciudades (Paris), lagos (Lake Michigan). USA 'the' para: cordilleras (the Alps), ríos (the Nile), océanos (the Pacific), países con 'kingdom/states' (the UK).",
  },
  {
    flat: "She arrived at the Monday and left at the Friday.",
    flatEs: "Ella llegó el lunes y se fue el viernes.",
    strong: "She arrived on Monday and left on Friday.",
    strongEs: "Ella llegó el lunes y se fue el viernes.",
    technique: "days, months, seasons",
    techniqueEs: "días, meses, estaciones",
    why: "Days of the week and months take NO article: on Monday, in January, in summer. Spanish uses 'el lunes,' 'en enero' — English drops the article. Also note: English uses 'on' for days and 'in' for months/seasons, not 'at.'",
    whyEs: "Los días de la semana y meses NO llevan artículo: on Monday, in January, in summer. El español usa 'el lunes,' 'en enero' — el inglés quita el artículo. También nota: el inglés usa 'on' para días y 'in' para meses.",
  },
  {
    flat: "I had the dinner at the home last the night.",
    flatEs: "Cené en casa la noche pasada.",
    strong: "I had dinner at home last night.",
    strongEs: "Cené en casa anoche.",
    technique: "fixed expressions",
    techniqueEs: "expresiones fijas",
    why: "Three zero-article patterns in one sentence: meals (dinner), 'at home' (fixed expression), and time expressions (last night, last week, next month). Spanish uses articles for all three ('la cena,' 'en la casa,' 'la noche pasada'). In English, they're all bare.",
    whyEs: "Tres patrones sin artículo en una oración: comidas (dinner), 'at home' (expresión fija), y expresiones de tiempo (last night, last week, next month). El español usa artículos para los tres.",
  },
  {
    flat: "The water is essential for the life on the Earth.",
    flatEs: "El agua es esencial para la vida en la Tierra.",
    strong: "Water is essential for life on Earth.",
    strongEs: "El agua es esencial para la vida en la Tierra.",
    technique: "general truths + planet name",
    techniqueEs: "verdades generales + nombre de planeta",
    why: "General truths about substances and concepts drop ALL articles: 'Water is essential' (water in general), 'for life' (life in general), 'on Earth' (Earth as a proper noun/planet). Spanish loads all three with articles. This sentence is the ultimate article test — every 'the' that feels natural in Spanish is wrong in English.",
    whyEs: "Las verdades generales sobre sustancias y conceptos eliminan TODOS los artículos: 'Water is essential' (agua en general), 'for life' (vida en general), 'on Earth' (Tierra como nombre propio). El español carga los tres con artículos. Esta oración es la prueba definitiva de artículos.",
  },
];
