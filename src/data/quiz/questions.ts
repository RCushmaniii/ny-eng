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
    question: "How often do misunderstandings with North American clients require follow-up clarification?",
    category: 'clarity',
    options: [
      { text: "Almost never—communication is clear the first time", value: 10 },
      { text: "Once or twice a month—minor issues", value: 7 },
      { text: "Several times a month—it's noticeable", value: 4 },
      { text: "Weekly or more—it's impacting relationships", value: 0 }
    ]
  },
  {
    id: 2,
    question: "When presenting solutions to clients, how well does your team explain technical concepts in business terms?",
    category: 'clarity',
    options: [
      { text: "Excellent—clients grasp it immediately", value: 10 },
      { text: "Good—occasionally needs clarification", value: 7 },
      { text: "Fair—clients regularly ask for simpler explanations", value: 4 },
      { text: "Poor—we often lose them", value: 0 }
    ]
  },
  {
    id: 3,
    question: "During live client calls, how often does your team say 'Let me get back to you' when they actually know the answer?",
    category: 'confidence',
    options: [
      { text: "Never—they respond in real-time", value: 10 },
      { text: "Rarely—only for truly complex details", value: 7 },
      { text: "Sometimes—when under pressure", value: 4 },
      { text: "Frequently—it's a safety net", value: 0 }
    ]
  },
  {
    id: 4,
    question: "When clients push back on scope, timeline, or pricing, how effectively does your team hold the line?",
    category: 'negotiation',
    options: [
      { text: "Very effectively—they defend our position confidently", value: 10 },
      { text: "Moderately—they try but sometimes concede too quickly", value: 6 },
      { text: "Poorly—they struggle to push back", value: 3 },
      { text: "We route these to senior leadership", value: 0 }
    ]
  },
  {
    id: 5,
    question: "How many team members can confidently lead a client meeting (not just attend)?",
    category: 'leadership',
    options: [
      { text: "Multiple people—we have depth", value: 10 },
      { text: "2-3 people—limited but adequate", value: 6 },
      { text: "1-2 people—we're dependent on specific individuals", value: 3 },
      { text: "None—senior leadership must always be present", value: 0 }
    ]
  },
  {
    id: 6,
    question: "How comfortable is your team building rapport with North American clients beyond the technical discussion?",
    category: 'confidence',
    options: [
      { text: "Very comfortable—it happens naturally", value: 10 },
      { text: "Somewhat comfortable—they try but it feels stilted", value: 6 },
      { text: "Uncomfortable—they stick strictly to business", value: 3 },
      { text: "Very uncomfortable—they avoid it entirely", value: 0 }
    ]
  }
];

export const questionsEs: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Con qué frecuencia los malentendidos con clientes norteamericanos requieren aclaración de seguimiento?",
    category: 'clarity',
    options: [
      { text: "Casi nunca—la comunicación es clara desde el principio", value: 10 },
      { text: "Una o dos veces al mes—problemas menores", value: 7 },
      { text: "Varias veces al mes—es notable", value: 4 },
      { text: "Semanalmente o más—está afectando las relaciones", value: 0 }
    ]
  },
  {
    id: 2,
    question: "Al presentar soluciones a clientes, ¿qué tan bien explica tu equipo conceptos técnicos en términos de negocio?",
    category: 'clarity',
    options: [
      { text: "Excelente—los clientes lo comprenden inmediatamente", value: 10 },
      { text: "Bueno—ocasionalmente necesita aclaración", value: 7 },
      { text: "Regular—los clientes piden regularmente explicaciones más simples", value: 4 },
      { text: "Pobre—a menudo los perdemos", value: 0 }
    ]
  },
  {
    id: 3,
    question: "Durante llamadas en vivo con clientes, ¿con qué frecuencia tu equipo dice 'Déjame volver contigo' cuando en realidad saben la respuesta?",
    category: 'confidence',
    options: [
      { text: "Nunca—responden en tiempo real", value: 10 },
      { text: "Rara vez—solo para detalles verdaderamente complejos", value: 7 },
      { text: "A veces—cuando están bajo presión", value: 4 },
      { text: "Frecuentemente—es una red de seguridad", value: 0 }
    ]
  },
  {
    id: 4,
    question: "Cuando los clientes rechazan alcance, cronograma o precios, ¿qué tan efectivamente tu equipo mantiene la posición?",
    category: 'negotiation',
    options: [
      { text: "Muy efectivamente—defienden nuestra posición con confianza", value: 10 },
      { text: "Moderadamente—lo intentan pero a veces ceden demasiado rápido", value: 6 },
      { text: "Pobremente—luchan para rechazar", value: 3 },
      { text: "Redirigimos estos casos al liderazgo senior", value: 0 }
    ]
  },
  {
    id: 5,
    question: "¿Cuántos miembros del equipo pueden liderar con confianza una reunión con clientes (no solo asistir)?",
    category: 'leadership',
    options: [
      { text: "Varias personas—tenemos profundidad", value: 10 },
      { text: "2-3 personas—limitado pero adecuado", value: 6 },
      { text: "1-2 personas—dependemos de individuos específicos", value: 3 },
      { text: "Ninguno—el liderazgo senior siempre debe estar presente", value: 0 }
    ]
  },
  {
    id: 6,
    question: "¿Qué tan cómodo está tu equipo construyendo rapport con clientes norteamericanos más allá de la discusión técnica?",
    category: 'confidence',
    options: [
      { text: "Muy cómodo—sucede naturalmente", value: 10 },
      { text: "Algo cómodo—lo intentan pero se siente forzado", value: 6 },
      { text: "Incómodo—se limitan estrictamente a negocios", value: 3 },
      { text: "Muy incómodo—lo evitan por completo", value: 0 }
    ]
  }
];
