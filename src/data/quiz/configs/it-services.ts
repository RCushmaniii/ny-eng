/**
 * IT Services Quiz Configuration
 * 
 * Communication Confidence Assessment for IT/Tech Teams
 * Target audience: IT service providers, software development teams,
 * technical consultants working with North American clients
 * 
 * NOTE: This will be migrated from existing quiz data in Phase 2
 */

import type { QuizConfig } from '../types';

export const itServicesConfig: QuizConfig = {
  quizId: 'it-services',
  
  en: {
    title: 'IT Communication Confidence Assessment',
    subtitle: 'Discover how English communication gaps affect your technical team\'s credibility and deal momentum',
    
    questions: [
      {
        id: 1,
        category: 'clarity',
        question: 'How often do language or cultural gaps lead to rework or "misaligned expectations" with North American clients?',
        answers: [
          { index: 0, score: 10, label: 'Rarely—our team captures requirements correctly the first time.' },
          { index: 1, score: 6, label: 'Occasionally—we sometimes miss nuance and need a second round of clarification.' },
          { index: 2, score: 3, label: 'Regularly—we often deliver what was asked, not what was needed, creating friction.' },
          { index: 3, score: 0, label: 'Frequently—we spend significant time fixing work because the initial brief wasn\'t fully understood.' }
        ]
      },
      {
        id: 2,
        category: 'clarity',
        question: 'When your developers present demos or solutions, how well do they translate technical complexity into business value?',
        answers: [
          { index: 0, score: 10, label: 'Seamlessly—they explain why it matters to the client\'s business, not just how it works.' },
          { index: 1, score: 6, label: 'Functionally—they get the point across, but it\'s still heavy on technical jargon.' },
          { index: 2, score: 3, label: 'Poorly—clients often get glazed eyes or ask for a non-technical summary.' },
          { index: 3, score: 0, label: 'They don\'t—we don\'t let developers present; a PM or lead must always translate.' }
        ]
      },
      {
        id: 3,
        category: 'confidence',
        question: 'During live troubleshooting, how often does your team use the "Let me get back to you" safety net—even when they likely know the answer?',
        answers: [
          { index: 0, score: 10, label: 'Never—they\'re confident solving problems live on the call.' },
          { index: 1, score: 6, label: 'Rarely—only when the issue is genuinely complex and requires research.' },
          { index: 2, score: 3, label: 'Often—they\'re afraid of saying the wrong thing in English, so they default to email.' },
          { index: 3, score: 0, label: 'Always—they avoid live troubleshooting entirely to avoid being put on the spot.' }
        ]
      },
      {
        id: 4,
        category: 'negotiation',
        question: 'When a client pushes for extra features or aggressive timelines (scope creep), how effectively does your team hold the line?',
        answers: [
          { index: 0, score: 10, label: 'Very effectively—they push back firmly and diplomatically, protecting our margins.' },
          { index: 1, score: 6, label: 'Inconsistently—they try to push back but often cave to avoid awkwardness.' },
          { index: 2, score: 3, label: 'Poorly—they say "yes" in the meeting, then complain about the deadline later.' },
          { index: 3, score: 0, label: 'Escalation only—they can\'t handle pushback; a manager has to step in to protect the scope.' }
        ]
      },
      {
        id: 5,
        category: 'confidence',
        question: 'If your top English-speaking manager is out sick, what happens to your client meetings?',
        answers: [
          { index: 0, score: 10, label: 'Business as usual—multiple team members can step up and lead effectively.' },
          { index: 1, score: 6, label: 'Minor disruption—others can attend, but they can\'t drive the strategy.' },
          { index: 2, score: 3, label: 'High anxiety—the team struggles through the meeting, risking client confidence.' },
          { index: 3, score: 0, label: 'Cancellation—we have to reschedule because no one else can handle the client comms.' }
        ]
      },
      {
        id: 6,
        category: 'cultural',
        question: 'How would you describe your team\'s relationship with North American stakeholders?',
        answers: [
          { index: 0, score: 10, label: 'Trusted advisors—clients ask them for advice and casually chat about life/weekends.' },
          { index: 1, score: 6, label: 'Friendly professionals—the relationship is good but stays strictly work-focused.' },
          { index: 2, score: 3, label: 'Transactional—clients treat them like an execution arm ("code monkeys"), not partners.' },
          { index: 3, score: 0, label: 'Invisible—clients barely know them; they only speak when spoken to.' }
        ]
      }
    ],
    
    gapDefinitions: {
      clarity: {
        name: 'Clear Communication',
        lowScoreImpact: 'Misunderstandings slow projects, damage credibility, and force rework. Clients question your technical expertise not because you lack skills, but because explanations aren\'t landing.',
        recommendation: 'Practice explaining technical concepts using the "executive summary first" framework. Record yourself and refine until jargon-free.',
        urgency: 'high'
      },
      confidence: {
        name: 'Confident Real-Time Response',
        lowScoreImpact: 'Saying "I\'ll get back to you" kills deal momentum. Clients interpret hesitation as incompetence, even when it\'s just language processing time.',
        recommendation: 'Build a mental library of phrases for buying time gracefully: "Let me make sure I answer that precisely..." while formulating your response.',
        urgency: 'high'
      },
      'real-time': {
        name: 'Spontaneous Communication',
        lowScoreImpact: 'Inability to think and speak simultaneously in English creates awkward pauses, makes you seem unprepared, and reduces your professional presence.',
        recommendation: 'Practice "thinking out loud" exercises. Narrate your problem-solving process in English to build real-time fluency.',
        urgency: 'medium'
      },
      negotiation: {
        name: 'Negotiation & Persuasion',
        lowScoreImpact: 'Weak pushback leads to scope creep, lower margins, difficult clients, and team burnout. You leave money on the table because defending your position feels too risky.',
        recommendation: 'Rehearse negotiation scripts until defending your position feels natural. Role-play tough client scenarios with a coach.',
        urgency: 'medium'
      },
      cultural: {
        name: 'Cultural Fluency & Rapport',
        lowScoreImpact: 'Relationships stay transactional. You miss opportunities to build trust, understand client motivations, or become a strategic partner instead of just a vendor.',
        recommendation: 'Study North American business culture norms. Practice casual conversation starters. Learn when small talk is expected vs. optional.',
        urgency: 'low'
      }
    },

    results: {
      impactTitle: "The Cost to Your Career",
      tiers: {
        'Credibility Block': {
          title: "An Artificial 'Seniority Ceiling'",
          description: "Your technical skills say 'Senior Architect,' but your English says 'Junior Dev.' The gap between your actual intelligence and your ability to express it is costing you promotions. You are watching less talented engineers climb the ladder simply because they can navigate the politics and 'sell' their ideas in English, while you stay stuck in execution mode."
        },
        'Million-Dollar Gap': {
          title: "You Are Leaving Potential on the Table",
          description: "The gap between your Technical Intelligence and your English Fluency is acting as a brake on your career. You’re likely being passed over for leadership roles because you’re seen as 'quiet' or 'lacking presence,' or your architectural ideas are ignored because you struggle to sell the 'Why' behind the code."
        },
        'Conversation-Ready': {
          title: "Ready for the Global Stage",
          description: "You have the technical and communication skills to lead international teams. Focus on refining your executive presence to command higher rates and senior roles."
        }
      },
      eliteComparison: {
        title: "What the Top 1% of International Leaders Do Differently",
        items: [
          "They don't just share information; they sell a vision. Whether in an interview or a board meeting, they translate complex details into a compelling strategic narrative that drives decisions.",
          "They navigate friction with nuance. They can push back on a CEO, negotiate a salary, or disagree with a client without sounding aggressive or rude. They master the \"Diplomatic English\" required for high-level conflict.",
          "They think in English, not translation. They handle rapid-fire Q&A and aggressive interviewing without the \"buffering\" pause. Their answers feel immediate and authoritative, not rehearsed.",
          "They own the narrative during a crisis. If a project is failing or an answer is unknown, they pivot the conversation with confidence rather than apologizing or acting defensive.",
          "They leverage personality as a superpower. They don't turn into \"robots\" in English. They use humor, small talk, and storytelling to build the likability and trust needed to win the role."
        ]
      },
      cta: {
        title: "Is Your English the Only Thing Holding You Back?",
        subtext: "You have the technical skills. Now let's build the communication skills to match them. Let's identify your specific \"glitches\" in a short strategy session.",
        buttonText: "Book My Career Strategy Call",
        footerText: "No sales scripts. Just a 15-minute debug session for your communication skills."
      }
    }
  },
  
  es: {
    title: 'Evaluación de Confianza en Comunicación para TI',
    subtitle: 'Descubre cómo las brechas de comunicación en inglés afectan la credibilidad de tu equipo técnico y el impulso de los acuerdos',
    
    questions: [
      {
        id: 1,
        category: 'clarity',
        question: '¿Con qué frecuencia los malentendidos con clientes norteamericanos requieren aclaración de seguimiento?',
        answers: [
          { index: 0, score: 10, label: 'Casi nunca—la comunicación es clara desde el principio' },
          { index: 1, score: 6, label: 'Una o dos veces al mes—problemas menores' },
          { index: 2, score: 3, label: 'Varias veces al mes—es notable' },
          { index: 3, score: 0, label: 'Semanalmente o más—está afectando las relaciones' }
        ]
      },
      {
        id: 2,
        category: 'clarity',
        question: 'Al presentar soluciones a clientes, ¿qué tan bien explica tu equipo conceptos técnicos en términos de negocio?',
        answers: [
          { index: 0, score: 10, label: 'Excelente—los clientes lo comprenden inmediatamente' },
          { index: 1, score: 6, label: 'Bueno—ocasionalmente necesita aclaración' },
          { index: 2, score: 3, label: 'Regular—los clientes piden regularmente explicaciones más simples' },
          { index: 3, score: 0, label: 'Pobre—a menudo los perdemos' }
        ]
      },
      {
        id: 3,
        category: 'confidence',
        question: 'Durante llamadas en vivo con clientes, ¿con qué frecuencia tu equipo dice "Déjame volver contigo" cuando en realidad saben la respuesta?',
        answers: [
          { index: 0, score: 10, label: 'Nunca—responden en tiempo real' },
          { index: 1, score: 6, label: 'Rara vez—solo para detalles verdaderamente complejos' },
          { index: 2, score: 3, label: 'A veces—cuando están bajo presión' },
          { index: 3, score: 0, label: 'Frecuentemente—es una red de seguridad' }
        ]
      },
      {
        id: 4,
        category: 'negotiation',
        question: 'Cuando los clientes rechazan alcance, cronograma o precios, ¿qué tan efectivamente tu equipo mantiene la posición?',
        answers: [
          { index: 0, score: 10, label: 'Muy efectivamente—defienden nuestra posición con confianza' },
          { index: 1, score: 6, label: 'Moderadamente—lo intentan pero a veces ceden demasiado rápido' },
          { index: 2, score: 3, label: 'Pobremente—luchan para rechazar' },
          { index: 3, score: 0, label: 'Redirigimos estos casos al liderazgo senior' }
        ]
      },
      {
        id: 5,
        category: 'confidence',
        question: '¿Cuántos miembros del equipo pueden liderar con confianza una reunión con clientes (no solo asistir)?',
        answers: [
          { index: 0, score: 10, label: 'Varias personas—tenemos profundidad' },
          { index: 1, score: 6, label: '2-3 personas—limitado pero adecuado' },
          { index: 2, score: 3, label: '1-2 personas—dependemos de individuos específicos' },
          { index: 3, score: 0, label: 'Ninguno—el liderazgo senior siempre debe estar presente' }
        ]
      },
      {
        id: 6,
        category: 'cultural',
        question: '¿Qué tan cómodo está tu equipo construyendo rapport con clientes norteamericanos más allá de la discusión técnica?',
        answers: [
          { index: 0, score: 10, label: 'Muy cómodo—sucede naturalmente' },
          { index: 1, score: 6, label: 'Algo cómodo—lo intentan pero se siente forzado' },
          { index: 2, score: 3, label: 'Incómodo—se limitan estrictamente a negocios' },
          { index: 3, score: 0, label: 'Muy incómodo—lo evitan por completo' }
        ]
      }
    ],
    
    gapDefinitions: {
      clarity: {
        name: 'Comunicación Clara',
        lowScoreImpact: 'Los malentendidos ralentizan proyectos, dañan la credibilidad y fuerzan retrabajos. Los clientes cuestionan tu experiencia técnica no porque carezcas de habilidades, sino porque las explicaciones no están llegando.',
        recommendation: 'Practica explicar conceptos técnicos usando el marco "resumen ejecutivo primero". Grábate y refina hasta eliminar la jerga.',
        urgency: 'high'
      },
      confidence: {
        name: 'Respuesta Confiada en Tiempo Real',
        lowScoreImpact: 'Decir "Te respondo después" mata el impulso del acuerdo. Los clientes interpretan la vacilación como incompetencia, incluso cuando es solo tiempo de procesamiento del idioma.',
        recommendation: 'Construye una biblioteca mental de frases para ganar tiempo con gracia: "Déjame asegurarme de responder eso con precisión..." mientras formulas tu respuesta.',
        urgency: 'high'
      },
      'real-time': {
        name: 'Comunicación Espontánea',
        lowScoreImpact: 'La incapacidad de pensar y hablar simultáneamente en inglés crea pausas incómodas, te hace parecer no preparado y reduce tu presencia profesional.',
        recommendation: 'Practica ejercicios de "pensar en voz alta". Narra tu proceso de resolución de problemas en inglés para desarrollar fluidez en tiempo real.',
        urgency: 'medium'
      },
      negotiation: {
        name: 'Negociación y Persuasión',
        lowScoreImpact: 'El rechazo débil lleva a expansión de alcance, márgenes más bajos, clientes difíciles y agotamiento del equipo. Dejas dinero sobre la mesa porque defender tu posición se siente demasiado arriesgado.',
        recommendation: 'Ensaya guiones de negociación hasta que defender tu posición se sienta natural. Practica escenarios difíciles de clientes con un coach.',
        urgency: 'medium'
      },
      cultural: {
        name: 'Fluidez Cultural y Rapport',
        lowScoreImpact: 'Las relaciones permanecen transaccionales. Pierdes oportunidades de construir confianza, entender motivaciones de clientes o convertirte en socio estratégico en lugar de solo un proveedor.',
        recommendation: 'Estudia las normas de la cultura empresarial norteamericana. Practica iniciadores de conversación casual. Aprende cuándo se espera la charla informal vs. opcional.',
        urgency: 'low'
      }
    },

    results: {
      impactTitle: "El Costo para Tu Carrera",
      tiers: {
        'Credibility Block': {
          title: "Un 'Techo de Antigüedad' Artificial",
          description: "Tus habilidades técnicas dicen 'Arquitecto Senior', pero tu inglés dice 'Desarrollador Junior'. La brecha entre tu inteligencia real y tu capacidad de expresarla te está costando promociones. Estás viendo a ingenieros menos talentosos escalar la escalera simplemente porque pueden navegar la política y 'vender' sus ideas en inglés, mientras tú permaneces atascado en modo de ejecución."
        },
        'Million-Dollar Gap': {
          title: "Estás Dejando Potencial Sobre la Mesa",
          description: "La brecha entre tu Inteligencia Técnica y tu Fluidez en Inglés está actuando como un freno en tu carrera. Es probable que te estén pasando por alto para roles de liderazgo porque te ven como 'callado' o 'sin presencia', o tus ideas arquitectónicas son ignoradas porque luchas para vender el 'Por qué' detrás del código."
        },
        'Conversation-Ready': {
          title: "Listo para el Escenario Global",
          description: "Tienes las habilidades técnicas y de comunicación para liderar equipos internacionales. Enfócate en refinar tu presencia ejecutiva para obtener tarifas más altas y roles senior."
        }
      },
      eliteComparison: {
        title: "Lo Que el 1% Superior de Líderes Internacionales Hace Diferente",
        items: [
          "No solo comparten información; venden una visión. Ya sea en una entrevista o en una reunión de directorio, traducen detalles complejos en una narrativa estratégica convincente que impulsa decisiones.",
          "Navegan la fricción con matices. Pueden confrontar a un CEO, negociar un salario o estar en desacuerdo con un cliente sin sonar agresivos o groseros. Dominan el 'Inglés Diplomático' requerido para conflictos de alto nivel.",
          "Piensan en inglés, no en traducción. Manejan sesiones de preguntas y respuestas rápidas y entrevistas agresivas sin la pausa de 'almacenamiento en búfer'. Sus respuestas se sienten inmediatas y autoritativas, no ensayadas.",
          "Son dueños de la narrativa durante una crisis. Si un proyecto está fallando o una respuesta es desconocida, pivotan la conversación con confianza en lugar de disculparse o actuar a la defensiva.",
          "Aprovechan la personalidad como un superpoder. No se convierten en 'robots' en inglés. Usan humor, charla casual y narración de historias para construir la simpatía y confianza necesarias para ganar el rol."
        ]
      },
      cta: {
        title: "¿Es Tu Inglés Lo Único Que Te Está Deteniendo?",
        subtext: "Tienes las habilidades técnicas. Ahora construyamos las habilidades de comunicación para igualarlas. Identifiquemos tus 'fallas' específicas en una breve sesión de estrategia.",
        buttonText: "Reservar Mi Llamada de Estrategia de Carrera",
        footerText: "Sin guiones de ventas. Solo una sesión de depuración de 15 minutos para tus habilidades de comunicación."
      }
    }
  }
};
