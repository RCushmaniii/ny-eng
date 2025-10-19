export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: number; // Points: 0-10
  }[];
  category: 'clarity' | 'confidence' | 'negotiation' | 'leadership';
}

export const questionsEn: QuizQuestion[] = [
  {
    id: 1,
    question: "When your team presents to North American clients, how often do they need to repeat or rephrase their points?",
    category: 'clarity',
    options: [
      { text: "Rarely or never—clients understand immediately", value: 10 },
      { text: "Occasionally—maybe once per meeting", value: 7 },
      { text: "Frequently—several times per meeting", value: 4 },
      { text: "Constantly—it's a recurring problem", value: 0 }
    ]
  },
  {
    id: 2,
    question: "How comfortable is your team defending your pricing or proposals when challenged by clients?",
    category: 'confidence',
    options: [
      { text: "Very comfortable—they articulate value clearly and confidently", value: 10 },
      { text: "Somewhat comfortable—they can do it but show hesitation", value: 6 },
      { text: "Uncomfortable—they often defer to me or senior leadership", value: 3 },
      { text: "Very uncomfortable—they avoid these conversations entirely", value: 0 }
    ]
  },
  {
    id: 3,
    question: "During live client calls, how often does your team say 'Let me follow up via email' when they actually know the answer?",
    category: 'confidence',
    options: [
      { text: "Never—they answer confidently in real-time", value: 10 },
      { text: "Rarely—only for complex technical details", value: 7 },
      { text: "Sometimes—when they feel uncertain about phrasing", value: 4 },
      { text: "Often—it's their default response under pressure", value: 0 }
    ]
  },
  {
    id: 4,
    question: "How well can your team handle unexpected questions or objections from clients in English?",
    category: 'clarity',
    options: [
      { text: "Excellent—they think on their feet and respond clearly", value: 10 },
      { text: "Good—they manage but sometimes need a moment to gather thoughts", value: 7 },
      { text: "Fair—they struggle to articulate responses quickly", value: 4 },
      { text: "Poor—they freeze or give vague answers", value: 0 }
    ]
  },
  {
    id: 5,
    question: "When negotiating contract terms or project scope, how effectively does your team communicate your position?",
    category: 'negotiation',
    options: [
      { text: "Very effectively—they're persuasive and hold firm on key points", value: 10 },
      { text: "Moderately effective—they communicate but sometimes concede too easily", value: 6 },
      { text: "Somewhat ineffective—they struggle to push back professionally", value: 3 },
      { text: "Ineffective—I have to step in to prevent unfavorable terms", value: 0 }
    ]
  },
  {
    id: 6,
    question: "How confident are your team members leading client meetings (not just attending)?",
    category: 'leadership',
    options: [
      { text: "Very confident—they drive the agenda and control the conversation", value: 10 },
      { text: "Somewhat confident—they can lead but prefer support", value: 6 },
      { text: "Not very confident—they need me present to feel secure", value: 3 },
      { text: "Not confident at all—I lead every important meeting", value: 0 }
    ]
  },
  {
    id: 7,
    question: "How often do misunderstandings occur between your team and North American clients due to language barriers?",
    category: 'clarity',
    options: [
      { text: "Never—communication is crystal clear", value: 10 },
      { text: "Rarely—maybe once every few months", value: 7 },
      { text: "Occasionally—a few times per month", value: 4 },
      { text: "Frequently—it's a regular issue", value: 0 }
    ]
  },
  {
    id: 8,
    question: "When presenting technical solutions or proposals, how well does your team explain complex ideas in simple English?",
    category: 'clarity',
    options: [
      { text: "Excellent—clients always understand our value proposition", value: 10 },
      { text: "Good—mostly clear with occasional confusion", value: 7 },
      { text: "Fair—clients often need clarification", value: 4 },
      { text: "Poor—we lose deals because clients don't understand us", value: 0 }
    ]
  },
  {
    id: 9,
    question: "How comfortable is your team with 'small talk' and relationship-building conversations with North American clients?",
    category: 'confidence',
    options: [
      { text: "Very comfortable—they build rapport naturally", value: 10 },
      { text: "Somewhat comfortable—they try but it feels forced", value: 6 },
      { text: "Uncomfortable—they stick to business topics only", value: 3 },
      { text: "Very uncomfortable—they avoid informal conversations", value: 0 }
    ]
  },
  {
    id: 10,
    question: "If a client challenges your team's expertise or questions your approach, how do they respond?",
    category: 'negotiation',
    options: [
      { text: "Confidently—they defend our position with clear reasoning", value: 10 },
      { text: "Adequately—they respond but may sound defensive", value: 6 },
      { text: "Poorly—they become flustered or overly apologetic", value: 3 },
      { text: "Very poorly—they immediately concede or escalate to me", value: 0 }
    ]
  }
];

export const questionsEs: QuizQuestion[] = [
  {
    id: 1,
    question: "Cuando tu equipo presenta a clientes norteamericanos, ¿con qué frecuencia necesitan repetir o reformular sus puntos?",
    category: 'clarity',
    options: [
      { text: "Rara vez o nunca—los clientes entienden inmediatamente", value: 10 },
      { text: "Ocasionalmente—tal vez una vez por reunión", value: 7 },
      { text: "Frecuentemente—varias veces por reunión", value: 4 },
      { text: "Constantemente—es un problema recurrente", value: 0 }
    ]
  },
  {
    id: 2,
    question: "¿Qué tan cómodo está tu equipo defendiendo tus precios o propuestas cuando son cuestionados por clientes?",
    category: 'confidence',
    options: [
      { text: "Muy cómodo—articulan el valor clara y confiadamente", value: 10 },
      { text: "Algo cómodo—pueden hacerlo pero muestran duda", value: 6 },
      { text: "Incómodo—a menudo me lo delegan a mí o al liderazgo senior", value: 3 },
      { text: "Muy incómodo—evitan estas conversaciones por completo", value: 0 }
    ]
  },
  {
    id: 3,
    question: "Durante llamadas en vivo con clientes, ¿con qué frecuencia tu equipo dice 'Déjame dar seguimiento por correo' cuando en realidad saben la respuesta?",
    category: 'confidence',
    options: [
      { text: "Nunca—responden confiadamente en tiempo real", value: 10 },
      { text: "Rara vez—solo para detalles técnicos complejos", value: 7 },
      { text: "A veces—cuando se sienten inseguros sobre la formulación", value: 4 },
      { text: "A menudo—es su respuesta predeterminada bajo presión", value: 0 }
    ]
  },
  {
    id: 4,
    question: "¿Qué tan bien puede tu equipo manejar preguntas u objeciones inesperadas de clientes en inglés?",
    category: 'clarity',
    options: [
      { text: "Excelente—piensan rápido y responden claramente", value: 10 },
      { text: "Bien—se las arreglan pero a veces necesitan un momento para ordenar sus ideas", value: 7 },
      { text: "Regular—luchan para articular respuestas rápidamente", value: 4 },
      { text: "Mal—se congelan o dan respuestas vagas", value: 0 }
    ]
  },
  {
    id: 5,
    question: "Al negociar términos de contrato o alcance de proyecto, ¿qué tan efectivamente comunica tu equipo tu posición?",
    category: 'negotiation',
    options: [
      { text: "Muy efectivamente—son persuasivos y se mantienen firmes en puntos clave", value: 10 },
      { text: "Moderadamente efectivo—comunican pero a veces ceden demasiado fácil", value: 6 },
      { text: "Algo inefectivo—luchan para rechazar profesionalmente", value: 3 },
      { text: "Inefectivo—tengo que intervenir para prevenir términos desfavorables", value: 0 }
    ]
  },
  {
    id: 6,
    question: "¿Qué tan confiados están los miembros de tu equipo liderando reuniones con clientes (no solo asistiendo)?",
    category: 'leadership',
    options: [
      { text: "Muy confiados—dirigen la agenda y controlan la conversación", value: 10 },
      { text: "Algo confiados—pueden liderar pero prefieren apoyo", value: 6 },
      { text: "No muy confiados—me necesitan presente para sentirse seguros", value: 3 },
      { text: "Nada confiados—yo lidero cada reunión importante", value: 0 }
    ]
  },
  {
    id: 7,
    question: "¿Con qué frecuencia ocurren malentendidos entre tu equipo y clientes norteamericanos debido a barreras del idioma?",
    category: 'clarity',
    options: [
      { text: "Nunca—la comunicación es cristalina", value: 10 },
      { text: "Rara vez—tal vez una vez cada pocos meses", value: 7 },
      { text: "Ocasionalmente—algunas veces al mes", value: 4 },
      { text: "Frecuentemente—es un problema regular", value: 0 }
    ]
  },
  {
    id: 8,
    question: "Al presentar soluciones técnicas o propuestas, ¿qué tan bien explica tu equipo ideas complejas en inglés simple?",
    category: 'clarity',
    options: [
      { text: "Excelente—los clientes siempre entienden nuestra propuesta de valor", value: 10 },
      { text: "Bien—mayormente claro con confusión ocasional", value: 7 },
      { text: "Regular—los clientes a menudo necesitan aclaración", value: 4 },
      { text: "Mal—perdemos contratos porque los clientes no nos entienden", value: 0 }
    ]
  },
  {
    id: 9,
    question: "¿Qué tan cómodo está tu equipo con 'small talk' y conversaciones de construcción de relaciones con clientes norteamericanos?",
    category: 'confidence',
    options: [
      { text: "Muy cómodo—construyen rapport naturalmente", value: 10 },
      { text: "Algo cómodo—lo intentan pero se siente forzado", value: 6 },
      { text: "Incómodo—se limitan solo a temas de negocios", value: 3 },
      { text: "Muy incómodo—evitan conversaciones informales", value: 0 }
    ]
  },
  {
    id: 10,
    question: "Si un cliente cuestiona la experiencia de tu equipo o cuestiona tu enfoque, ¿cómo responden?",
    category: 'negotiation',
    options: [
      { text: "Confiadamente—defienden nuestra posición con razonamiento claro", value: 10 },
      { text: "Adecuadamente—responden pero pueden sonar defensivos", value: 6 },
      { text: "Mal—se ponen nerviosos o excesivamente disculpándose", value: 3 },
      { text: "Muy mal—inmediatamente ceden o me escalan el problema", value: 0 }
    ]
  }
];
