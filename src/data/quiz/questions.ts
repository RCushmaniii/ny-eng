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
      { text: "Rarely—communication is clear the first time", value: 10 },
      { text: "Occasionally—maybe once per meeting", value: 7 },
      { text: "Frequently—several times per meeting", value: 4 },
      { text: "Constantly—it's a recurring issue", value: 0 }
    ]
  },
  {
    id: 2,
    question: "How comfortable is your team defending pricing or proposals when challenged by clients?",
    category: 'confidence',
    options: [
      { text: "Very comfortable—they articulate value confidently", value: 10 },
      { text: "Somewhat comfortable—they defend it but not persuasively", value: 6 },
      { text: "Uncomfortable—they often defer to senior leadership", value: 3 },
      { text: "Very uncomfortable—they avoid these conversations", value: 0 }
    ]
  },
  {
    id: 3,
    question: "During live client calls, how often does your team say 'Let me follow up via email' when they actually know the answer?",
    category: 'confidence',
    options: [
      { text: "Never—answers come in real-time", value: 10 },
      { text: "Rarely—only for complex technical details", value: 7 },
      { text: "Sometimes—when they need time to think", value: 4 },
      { text: "Often—it's a common deflection", value: 0 }
    ]
  },
  {
    id: 4,
    question: "How well can your team handle unexpected questions or objections from clients in English?",
    category: 'clarity',
    options: [
      { text: "Very well—they respond clearly and confidently", value: 10 },
      { text: "Fairly well—they manage but take time to articulate", value: 7 },
      { text: "Struggle somewhat—responses are hesitant or unclear", value: 4 },
      { text: "Struggle significantly—they freeze or defer", value: 0 }
    ]
  },
  {
    id: 5,
    question: "When negotiating contract terms or project scope, how effectively does the team communicate your company's position?",
    category: 'negotiation',
    options: [
      { text: "Very effectively—they hold the line confidently", value: 10 },
      { text: "Moderately effective—they communicate but sometimes concede too easily", value: 6 },
      { text: "Ineffective—they struggle to push back", value: 3 },
      { text: "We avoid these negotiations in real-time", value: 0 }
    ]
  },
  {
    id: 6,
    question: "How confident are your team members leading client meetings (not just attending)?",
    category: 'leadership',
    options: [
      { text: "Very confident—multiple people can lead effectively", value: 10 },
      { text: "Somewhat confident—a few people can lead, others need support", value: 6 },
      { text: "Not very confident—most need senior leadership present", value: 3 },
      { text: "Not confident—meetings require specific people to lead", value: 0 }
    ]
  },
  {
    id: 7,
    question: "How often do misunderstandings occur between your team and North American clients due to language barriers?",
    category: 'clarity',
    options: [
      { text: "Rarely—maybe once every few months", value: 10 },
      { text: "Occasionally—once or twice a month", value: 7 },
      { text: "Frequently—several times per month", value: 4 },
      { text: "Very frequently—it's a regular issue", value: 0 }
    ]
  },
  {
    id: 8,
    question: "When presenting technical solutions or proposals, how well does your team explain complex ideas in simple English?",
    category: 'clarity',
    options: [
      { text: "Very well—clients understand immediately", value: 10 },
      { text: "Fairly well—clients sometimes need clarification", value: 7 },
      { text: "Not well—clients often need clarification", value: 4 },
      { text: "Poorly—explanations consistently need rework", value: 0 }
    ]
  },
  {
    id: 9,
    question: "How comfortable is your team with 'small talk' and relationship-building conversations with North American clients?",
    category: 'confidence',
    options: [
      { text: "Very comfortable—it happens naturally", value: 10 },
      { text: "Somewhat comfortable—they try but it feels forced", value: 6 },
      { text: "Uncomfortable—they stick to business only", value: 3 },
      { text: "Very uncomfortable—they avoid it entirely", value: 0 }
    ]
  },
  {
    id: 10,
    question: "If a client challenges your team's expertise or questions your approach, how do they typically respond?",
    category: 'negotiation',
    options: [
      { text: "Confidently—they defend their position with clear reasoning", value: 10 },
      { text: "Adequately—they respond but may sound defensive", value: 6 },
      { text: "Hesitantly—they struggle to articulate a strong defense", value: 3 },
      { text: "Poorly—they defer or become flustered", value: 0 }
    ]
  }
];

export const questionsEs: QuizQuestion[] = [
  {
    id: 1,
    question: "Cuando tu equipo presenta a clientes norteamericanos, ¿con qué frecuencia necesitan repetir o reformular sus puntos?",
    category: 'clarity',
    options: [
      { text: "Rara vez—la comunicación es clara desde el principio", value: 10 },
      { text: "Ocasionalmente—tal vez una vez por reunión", value: 7 },
      { text: "Frecuentemente—varias veces por reunión", value: 4 },
      { text: "Constantemente—es un problema recurrente", value: 0 }
    ]
  },
  {
    id: 2,
    question: "¿Qué tan cómodo está tu equipo defendiendo precios o propuestas cuando son cuestionados por clientes?",
    category: 'confidence',
    options: [
      { text: "Muy cómodo—articulan el valor con confianza", value: 10 },
      { text: "Algo cómodo—lo defienden pero no persuasivamente", value: 6 },
      { text: "Incómodo—a menudo lo delegan al liderazgo senior", value: 3 },
      { text: "Muy incómodo—evitan estas conversaciones", value: 0 }
    ]
  },
  {
    id: 3,
    question: "Durante llamadas en vivo con clientes, ¿con qué frecuencia tu equipo dice 'Déjame dar seguimiento por correo' cuando en realidad saben la respuesta?",
    category: 'confidence',
    options: [
      { text: "Nunca—las respuestas vienen en tiempo real", value: 10 },
      { text: "Rara vez—solo para detalles técnicos complejos", value: 7 },
      { text: "A veces—cuando necesitan tiempo para pensar", value: 4 },
      { text: "A menudo—es una excusa común", value: 0 }
    ]
  },
  {
    id: 4,
    question: "¿Qué tan bien puede tu equipo manejar preguntas u objeciones inesperadas de clientes en inglés?",
    category: 'clarity',
    options: [
      { text: "Muy bien—responden clara y confiadamente", value: 10 },
      { text: "Bastante bien—se las arreglan pero toman tiempo para articular", value: 7 },
      { text: "Luchan un poco—las respuestas son vacilantes o poco claras", value: 4 },
      { text: "Luchan significativamente—se congelan o delegan", value: 0 }
    ]
  },
  {
    id: 5,
    question: "Al negociar términos de contrato o alcance de proyecto, ¿qué tan efectivamente comunica el equipo la posición de tu empresa?",
    category: 'negotiation',
    options: [
      { text: "Muy efectivamente—mantienen la línea con confianza", value: 10 },
      { text: "Moderadamente efectivo—comunican pero a veces ceden demasiado fácil", value: 6 },
      { text: "Inefectivo—luchan para rechazar", value: 3 },
      { text: "Evitamos estas negociaciones en tiempo real", value: 0 }
    ]
  },
  {
    id: 6,
    question: "¿Qué tan confiados están los miembros de tu equipo liderando reuniones con clientes (no solo asistiendo)?",
    category: 'leadership',
    options: [
      { text: "Muy confiados—varias personas pueden liderar efectivamente", value: 10 },
      { text: "Algo confiados—algunas personas pueden liderar, otras necesitan apoyo", value: 6 },
      { text: "No muy confiados—la mayoría necesita liderazgo senior presente", value: 3 },
      { text: "Nada confiados—las reuniones requieren personas específicas para liderar", value: 0 }
    ]
  },
  {
    id: 7,
    question: "¿Con qué frecuencia ocurren malentendidos entre tu equipo y clientes norteamericanos debido a barreras del idioma?",
    category: 'clarity',
    options: [
      { text: "Rara vez—tal vez una vez cada pocos meses", value: 10 },
      { text: "Ocasionalmente—una o dos veces al mes", value: 7 },
      { text: "Frecuentemente—varias veces al mes", value: 4 },
      { text: "Muy frecuentemente—es un problema regular", value: 0 }
    ]
  },
  {
    id: 8,
    question: "Al presentar soluciones técnicas o propuestas, ¿qué tan bien explica tu equipo ideas complejas en inglés simple?",
    category: 'clarity',
    options: [
      { text: "Muy bien—los clientes entienden inmediatamente", value: 10 },
      { text: "Bastante bien—los clientes a veces necesitan aclaración", value: 7 },
      { text: "No muy bien—los clientes a menudo necesitan aclaración", value: 4 },
      { text: "Mal—las explicaciones consistentemente necesitan reelaboración", value: 0 }
    ]
  },
  {
    id: 9,
    question: "¿Qué tan cómodo está tu equipo con 'small talk' y conversaciones de construcción de relaciones con clientes norteamericanos?",
    category: 'confidence',
    options: [
      { text: "Muy cómodo—sucede naturalmente", value: 10 },
      { text: "Algo cómodo—lo intentan pero se siente forzado", value: 6 },
      { text: "Incómodo—se limitan solo a negocios", value: 3 },
      { text: "Muy incómodo—lo evitan por completo", value: 0 }
    ]
  },
  {
    id: 10,
    question: "Si un cliente cuestiona la experiencia de tu equipo o cuestiona tu enfoque, ¿cómo responden típicamente?",
    category: 'negotiation',
    options: [
      { text: "Confiadamente—defienden su posición con razonamiento claro", value: 10 },
      { text: "Adecuadamente—responden pero pueden sonar defensivos", value: 6 },
      { text: "Vacilantemente—luchan para articular una defensa sólida", value: 3 },
      { text: "Mal—delegan o se ponen nerviosos", value: 0 }
    ]
  }
];
