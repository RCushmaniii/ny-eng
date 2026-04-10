// Unit 1: "Weak Phrasing → Strong Phrasing" — Full course content
//
// Section 1: Weak verbs vs strong verbs (WordPairLab)
// Section 2: Killing weak adverbs (ErrorSpotter)
// Section 3: Rewriting flat sentences into sentences with impact (SentenceTransformer)

import type { WordPair, ErrorSpotterItem, SentenceTransform } from "./types";

// ─── Section 1: Weak Verbs → Strong Verbs (WordPairLab) ─────────────────────

export const verbPairs: WordPair[] = [
  {
    weak: "I got the promotion after working there for three years.",
    weakEs: "Obtuve la promoción después de trabajar ahí por tres años.",
    strong: "I earned the promotion after three years of consistent results.",
    strongEs: "Me gané la promoción después de tres años de resultados consistentes.",
    weakHighlight: "got",
    strongHighlight: "earned",
    why: "'Got' is passive and vague — it sounds like it happened to you. 'Earned' implies effort, skill, and merit. Hiring managers notice this word choice.",
    whyEs: "'Got' es pasivo y vago — suena como que te pasó. 'Earned' implica esfuerzo, habilidad y mérito. Los reclutadores notan esta elección de palabras.",
    category: "Verb upgrade",
    categoryEs: "Mejora de verbo",
  },
  {
    weak: "We made a new strategy for next quarter.",
    weakEs: "Hicimos una nueva estrategia para el próximo trimestre.",
    strong: "We developed a new strategy for next quarter.",
    strongEs: "Desarrollamos una nueva estrategia para el próximo trimestre.",
    weakHighlight: "made",
    strongHighlight: "developed",
    why: "'Made' is the laziest verb in English — it works for almost anything but says almost nothing. 'Developed' signals thought, process, and expertise.",
    whyEs: "'Made' es el verbo más perezoso del inglés — funciona para casi todo pero no dice casi nada. 'Developed' señala pensamiento, proceso y experticia.",
    category: "Verb upgrade",
    categoryEs: "Mejora de verbo",
  },
  {
    weak: "She did a great presentation yesterday.",
    weakEs: "Ella hizo una gran presentación ayer.",
    strong: "She delivered a compelling presentation yesterday.",
    strongEs: "Ella ofreció una presentación convincente ayer.",
    weakHighlight: "did",
    strongHighlight: "delivered",
    why: "'Did a presentation' is how beginners talk. 'Delivered a presentation' is what professionals say. The verb 'deliver' carries authority and intentionality. 'Compelling' is a bonus — it replaces the overused 'great'.",
    whyEs: "'Did a presentation' es cómo hablan los principiantes. 'Delivered a presentation' es lo que dicen los profesionales. El verbo 'deliver' lleva autoridad e intencionalidad.",
    category: "Verb upgrade",
    categoryEs: "Mejora de verbo",
  },
  {
    weak: "He had a meeting with the client this morning.",
    weakEs: "Él tuvo una reunión con el cliente esta mañana.",
    strong: "He met with the client this morning.",
    strongEs: "Se reunió con el cliente esta mañana.",
    weakHighlight: "had a meeting with",
    strongHighlight: "met with",
    why: "'Had a meeting with' is 4 words. 'Met with' is 2 words and says the same thing. Strong English is shorter. Cut the filler and use the verb directly.",
    whyEs: "'Had a meeting with' son 4 palabras. 'Met with' son 2 y dicen lo mismo. El inglés fuerte es más corto. Corta el relleno y usa el verbo directamente.",
    category: "Verb consolidation",
    categoryEs: "Consolidación de verbo",
  },
  {
    weak: "They got a lot of feedback from the users.",
    weakEs: "Obtuvieron muchos comentarios de los usuarios.",
    strong: "They received extensive feedback from the users.",
    strongEs: "Recibieron retroalimentación extensa de los usuarios.",
    weakHighlight: "got a lot of",
    strongHighlight: "received extensive",
    why: "'Got a lot of' is vague. 'Received extensive' is precise. 'Received' is a clean verb. 'Extensive' tells the listener the volume without resorting to the weak 'a lot of'.",
    whyEs: "'Got a lot of' es vago. 'Received extensive' es preciso. 'Received' es un verbo limpio. 'Extensive' indica el volumen sin recurrir al débil 'a lot of'.",
    category: "Verb + adjective upgrade",
    categoryEs: "Mejora de verbo + adjetivo",
  },
  {
    weak: "I made a decision to leave the company.",
    weakEs: "Tomé una decisión de dejar la empresa.",
    strong: "I decided to leave the company.",
    strongEs: "Decidí dejar la empresa.",
    weakHighlight: "made a decision to",
    strongHighlight: "decided to",
    why: "When a noun hides a perfectly good verb, use the verb. 'Made a decision' = 'decided'. 'Gave an explanation' = 'explained'. 'Did an analysis' = 'analyzed'. Always choose the verb over the noun form.",
    whyEs: "Cuando un sustantivo esconde un verbo perfectamente bueno, usa el verbo. 'Made a decision' = 'decided'. 'Gave an explanation' = 'explained'. Siempre elige el verbo sobre la forma sustantiva.",
    category: "Nominalization → verb",
    categoryEs: "Nominalización → verbo",
  },
  {
    weak: "The team got more efficient over the last year.",
    weakEs: "El equipo se volvió más eficiente en el último año.",
    strong: "The team became significantly more efficient over the last year.",
    strongEs: "El equipo se volvió significativamente más eficiente durante el último año.",
    weakHighlight: "got",
    strongHighlight: "became significantly",
    why: "'Got' is invisible — your ear slides past it. 'Became' is intentional and formal. Adding 'significantly' quantifies the change instead of leaving it vague.",
    whyEs: "'Got' es invisible — tu oído lo pasa de largo. 'Became' es intencional y formal. Agregar 'significantly' cuantifica el cambio en lugar de dejarlo vago.",
    category: "Verb + adverb upgrade",
    categoryEs: "Mejora de verbo + adverbio",
  },
  {
    weak: "We did a study on customer behavior last quarter.",
    weakEs: "Hicimos un estudio sobre el comportamiento del cliente el trimestre pasado.",
    strong: "We conducted a study on customer behavior last quarter.",
    strongEs: "Llevamos a cabo un estudio sobre el comportamiento del cliente el trimestre pasado.",
    weakHighlight: "did",
    strongHighlight: "conducted",
    why: "'Conducted a study' is the standard professional phrasing — it carries scientific weight. 'Did a study' sounds casual and undermines the seriousness of the work.",
    whyEs: "'Conducted a study' es la frase profesional estándar — lleva peso científico. 'Did a study' suena casual y socava la seriedad del trabajo.",
    category: "Verb upgrade",
    categoryEs: "Mejora de verbo",
  },
];

// ─── Section 2: Killing Weak Adverbs (ErrorSpotter) ──────────────────────────

export const weakAdverbs: ErrorSpotterItem[] = [
  {
    sentence: "The presentation was very important for the team.",
    errorWord: "very",
    improved: "The presentation was critical for the team.",
    sentenceEs: "La presentación fue muy importante para el equipo.",
    improvedEs: "La presentación fue crítica para el equipo.",
    explanation:
      "'Very important' is weak because 'very' is an empty amplifier — it adds no real information. Replace the whole phrase with a single strong adjective: 'critical', 'essential', 'vital'.",
    explanationEs:
      "'Very important' es débil porque 'very' es un amplificador vacío — no agrega información real. Reemplaza toda la frase con un solo adjetivo fuerte: 'critical', 'essential', 'vital'.",
  },
  {
    sentence: "She is really good at solving complex problems.",
    errorWord: "really",
    improved: "She excels at solving complex problems.",
    sentenceEs: "Ella es realmente buena resolviendo problemas complejos.",
    improvedEs: "Ella sobresale en resolver problemas complejos.",
    explanation:
      "'Really good' is what children say. Replace the adverb + adjective with a single strong verb: 'excels'. One precise word beats two vague ones.",
    explanationEs:
      "'Really good' es lo que dicen los niños. Reemplaza el adverbio + adjetivo con un solo verbo fuerte: 'excels'. Una palabra precisa le gana a dos vagas.",
  },
  {
    sentence: "I am quite concerned about the project timeline.",
    errorWord: "quite",
    improved: "I am concerned about the project timeline.",
    sentenceEs: "Estoy bastante preocupado por el cronograma del proyecto.",
    improvedEs: "Estoy preocupado por el cronograma del proyecto.",
    explanation:
      "'Quite' adds nothing — you're either concerned or you're not. Hedging with 'quite' weakens your statement. Drop it entirely and your sentence is stronger by subtraction.",
    explanationEs:
      "'Quite' no agrega nada — estás preocupado o no lo estás. Hedging con 'quite' debilita tu declaración. Elimínalo por completo y tu oración será más fuerte por sustracción.",
  },
  {
    sentence: "The report is just a draft at this point.",
    errorWord: "just",
    improved: "The report is a draft at this point.",
    sentenceEs: "El reporte es solo un borrador en este momento.",
    improvedEs: "El reporte es un borrador en este momento.",
    explanation:
      "'Just' is the most common minimizer in English. Here it apologizes for the draft being a draft. Cut it. The fact that it's a draft IS the information. No apology needed.",
    explanationEs:
      "'Just' es el minimizador más común en inglés. Aquí se disculpa porque el borrador es un borrador. Elimínalo. El hecho de que sea un borrador ES la información. No se necesita disculpa.",
  },
  {
    sentence: "He totally understood the problem from the beginning.",
    errorWord: "totally",
    improved: "He understood the problem from the beginning.",
    sentenceEs: "Él totalmente entendió el problema desde el principio.",
    improvedEs: "Él entendió el problema desde el principio.",
    explanation:
      "'Totally' is casual filler that sounds like a teenager texting. In professional English, 'understood' is already complete — it doesn't need amplification. If you need emphasis, say 'fully understood'.",
    explanationEs:
      "'Totally' es relleno casual que suena como un adolescente enviando mensajes. En inglés profesional, 'understood' ya está completo — no necesita amplificación. Si necesitas énfasis, di 'fully understood'.",
  },
  {
    sentence: "It was actually a great meeting, to be honest.",
    errorWord: "actually",
    improved: "It was a productive meeting.",
    sentenceEs: "Realmente fue una gran reunión, para ser honesto.",
    improvedEs: "Fue una reunión productiva.",
    explanation:
      "'Actually' signals surprise — it implies you expected it to be bad. Unless you genuinely mean to express surprise, drop it. Also, 'great' is vague: was it productive? Informative? Decisive? Choose the specific word.",
    explanationEs:
      "'Actually' señala sorpresa — implica que esperabas que fuera mala. A menos que genuinamente quieras expresar sorpresa, elimínalo. Además, 'great' es vago: ¿fue productiva? ¿Informativa? ¿Decisiva? Elige la palabra específica.",
  },
  {
    sentence: "We definitely need to address this issue before Friday.",
    errorWord: "definitely",
    improved: "We need to address this issue before Friday.",
    sentenceEs: "Definitivamente necesitamos abordar este problema antes del viernes.",
    improvedEs: "Necesitamos abordar este problema antes del viernes.",
    explanation:
      "'Definitely' tries to add certainty, but 'need to' already carries urgency. Stacking 'definitely' on top sounds nervous, not confident. Cut the adverb and let the verb do the work.",
    explanationEs:
      "'Definitely' intenta agregar certeza, pero 'need to' ya lleva urgencia. Apilar 'definitely' encima suena nervioso, no confiado. Elimina el adverbio y deja que el verbo haga el trabajo.",
  },
  {
    sentence: "I basically rebuilt the entire system over the weekend.",
    errorWord: "basically",
    improved: "I rebuilt the entire system over the weekend.",
    sentenceEs: "Básicamente reconstruí todo el sistema el fin de semana.",
    improvedEs: "Reconstruí todo el sistema el fin de semana.",
    explanation:
      "'Basically' is a verbal tic. It minimizes your own accomplishment — you REBUILT an entire system, and 'basically' says 'eh, not really.' Own your work. Drop the minimizer.",
    explanationEs:
      "'Basically' es un tic verbal. Minimiza tu propio logro — RECONSTRUISTE todo un sistema, y 'basically' dice 'eh, no realmente.' Adueñate de tu trabajo. Elimina el minimizador.",
  },
];

// ─── Section 3: Rewriting Flat Sentences (SentenceTransformer) ───────────────

export const sentenceTransforms: SentenceTransform[] = [
  {
    flat: "We had a meeting and we talked about the project and we made some decisions.",
    flatEs: "Tuvimos una reunión y hablamos sobre el proyecto y tomamos algunas decisiones.",
    strong: "In our project meeting, we reached several key decisions.",
    strongEs: "En nuestra reunión de proyecto, llegamos a varias decisiones clave.",
    technique: "consolidation",
    techniqueEs: "consolidación",
    why: "Three separate clauses connected by 'and' is the weakest sentence structure in English. Consolidate by making one clause carry the weight. 'Reached decisions' is tighter than 'talked about and made decisions'.",
    whyEs: "Tres cláusulas separadas conectadas por 'and' es la estructura de oración más débil en inglés. Consolida haciendo que una sola cláusula lleve el peso.",
  },
  {
    flat: "I did a lot of work on this and I think it's really good now.",
    flatEs: "Trabajé mucho en esto y creo que ya está muy bueno.",
    strong: "I've refined this thoroughly — I'm confident it's ready.",
    strongEs: "He refinado esto a fondo — estoy seguro de que está listo.",
    technique: "verb upgrade + hedging removal",
    techniqueEs: "mejora de verbo + eliminación de cobertura",
    why: "'Did a lot of work' is vague. 'Refined thoroughly' is specific. 'I think it's really good' is triple-hedged — drop 'think', 'really', and 'good' for 'I'm confident it's ready.' One decisive statement.",
    whyEs: "'Did a lot of work' es vago. 'Refined thoroughly' es específico. 'I think it's really good' tiene triple cobertura — elimina 'think', 'really' y 'good' por 'I'm confident it's ready.'",
  },
  {
    flat: "The team got a lot of stuff done last week and I think we can keep going.",
    flatEs: "El equipo hizo muchas cosas la semana pasada y creo que podemos seguir.",
    strong: "The team delivered significant results last week and is well-positioned to maintain momentum.",
    strongEs: "El equipo entregó resultados significativos la semana pasada y está bien posicionado para mantener el impulso.",
    technique: "precision + formality upgrade",
    techniqueEs: "precisión + mejora de formalidad",
    why: "'Got a lot of stuff done' says nothing a manager can measure. 'Delivered significant results' is professional and concrete. 'Keep going' is casual; 'maintain momentum' is boardroom language.",
    whyEs: "'Got a lot of stuff done' no dice nada que un gerente pueda medir. 'Delivered significant results' es profesional y concreto. 'Keep going' es casual; 'maintain momentum' es lenguaje de sala de juntas.",
  },
  {
    flat: "I'm sorry but I don't think I can do that because I'm too busy right now.",
    flatEs: "Lo siento pero no creo que pueda hacer eso porque estoy muy ocupado ahorita.",
    strong: "I appreciate you thinking of me, but my current commitments won't allow me to take this on.",
    strongEs: "Agradezco que pienses en mí, pero mis compromisos actuales no me permiten tomar esto.",
    technique: "reframe + gratitude opening",
    techniqueEs: "reencuadre + apertura de gratitud",
    why: "Opening with 'I'm sorry but' is defensive. Opening with 'I appreciate...' shows confidence and gratitude. 'Too busy' sounds overwhelmed; 'current commitments' sounds in control. The message is the same — the impact is completely different.",
    whyEs: "Abrir con 'I'm sorry but' es defensivo. Abrir con 'I appreciate...' muestra confianza y gratitud. 'Too busy' suena abrumado; 'current commitments' suena en control.",
  },
  {
    flat: "It's a really nice place and the people there are very friendly and the food is great.",
    flatEs: "Es un lugar muy bonito y la gente ahí es muy amigable y la comida es excelente.",
    strong: "The restaurant has a warm atmosphere, genuinely welcoming staff, and outstanding food.",
    strongEs: "El restaurante tiene un ambiente cálido, personal genuinamente acogedor y comida sobresaliente.",
    technique: "list structure + adjective precision",
    techniqueEs: "estructura de lista + precisión de adjetivos",
    why: "Three 'and' chains with generic adjectives (nice, friendly, great) = flat. Convert to a list-of-three with SPECIFIC adjectives (warm, welcoming, outstanding). Lists of three are the most persuasive structure in English.",
    whyEs: "Tres cadenas con 'and' y adjetivos genéricos (nice, friendly, great) = plano. Convierte en una lista de tres con adjetivos ESPECÍFICOS. Las listas de tres son la estructura más persuasiva en inglés.",
  },
  {
    flat: "The problem is that there are many different issues that need to be fixed as soon as possible.",
    flatEs: "El problema es que hay muchos problemas diferentes que necesitan ser arreglados lo antes posible.",
    strong: "We're facing several interconnected issues that require immediate attention.",
    strongEs: "Enfrentamos varios problemas interconectados que requieren atención inmediata.",
    technique: "active voice + specificity",
    techniqueEs: "voz activa + especificidad",
    why: "'The problem is that there are' is a throat-clearing opener — it says nothing. Start with the subject doing something: 'We're facing.' 'Many different issues' is vague; 'several interconnected issues' is precise. 'As soon as possible' is overused; 'immediate attention' is sharper.",
    whyEs: "'The problem is that there are' es una frase de relleno — no dice nada. Empieza con el sujeto haciendo algo: 'We're facing.' 'Immediate attention' es más afilado que 'as soon as possible'.",
  },
];
