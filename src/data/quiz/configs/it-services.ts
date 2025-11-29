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
    subtitle: 'Discover how English communication gaps affect your technical team\'s credibility, deal momentum, and ability to win North American clients.',
    
    questions: [
      {
        id: 1,
        category: 'clarity',
        question: 'How often does a misinterpretation of English requirements lead to bugs, rework, or "what I said vs. what you heard" issues?',
        answers: [
          { index: 0, score: 10, label: 'Rarely—Our team captures the English nuance correctly the first time.' },
          { index: 1, score: 6, label: 'Occasionally—We sometimes miss the subtle meaning and need a second round of clarification.' },
          { index: 2, score: 3, label: 'Regularly—We often deliver what was asked, not what was needed, because the brief wasn\'t fully understood.' },
          { index: 3, score: 0, label: 'Frequently—We spend significant billable hours fixing work because of language-based misunderstandings.' }
        ]
      },
      {
        id: 2,
        category: 'clarity',
        question: 'When your developers present demos or solutions in English, how well do they translate "Technical Complexity" into "Business Value"?',
        answers: [
          { index: 0, score: 10, label: 'Seamlessly—They have the vocabulary to explain why it matters to the business, not just how it works.' },
          { index: 1, score: 6, label: 'Functionally—They get the point across, but rely heavily on technical jargon because it\'s "safer."' },
          { index: 2, score: 3, label: 'Poorly—Clients get glazed eyes or ask for a "non-technical" summary because the explanation is too dense.' },
          { index: 3, score: 0, label: 'They Don\'t—We don\'t let developers present in English; a PM or Lead must always translate.' }
        ]
      },
      {
        id: 3,
        category: 'confidence',
        question: 'During live troubleshooting, how often does your team use the "Let me get back to you" safety net—specifically to avoid speaking under pressure?',
        answers: [
          { index: 0, score: 10, label: 'Never—They are confident enough to troubleshoot live in English.' },
          { index: 1, score: 6, label: 'Rarely—Only when the issue is genuinely complex and requires research.' },
          { index: 2, score: 3, label: 'Often—They are afraid of saying the wrong thing in English, so they default to email.' },
          { index: 3, score: 0, label: 'Always—They avoid live voice calls entirely to prevent being put on the spot.' }
        ]
      },
      {
        id: 4,
        category: 'negotiation',
        question: 'When a client pushes for scope creep, does your team have the linguistic nuance to push back without sounding rude?',
        answers: [
          { index: 0, score: 10, label: 'Yes—They can be firm and diplomatic in English, protecting our margins.' },
          { index: 1, score: 6, label: 'Inconsistently—They try to push back, but often cave because they can\'t find the polite words in the moment.' },
          { index: 2, score: 3, label: 'No—They say "yes" in the meeting to avoid the awkwardness of arguing in a second language.' },
          { index: 3, score: 0, label: 'Escalation Only—They lack the vocabulary to negotiate; a Manager must step in to protect the scope.' }
        ]
      },
      {
        id: 5,
        category: 'confidence',
        question: 'If your top English-speaking manager is out sick, what happens to your client meetings?',
        answers: [
          { index: 0, score: 10, label: 'Business as usual—Multiple team members have the fluency to step up and lead.' },
          { index: 1, score: 6, label: 'Minor disruption—Others can attend, but they can\'t drive the strategic conversation.' },
          { index: 2, score: 3, label: 'High anxiety—The team struggles through the meeting, and the client senses the communication gap.' },
          { index: 3, score: 0, label: 'Cancellation—We have to reschedule because no one else can handle the client comms.' }
        ]
      },
      {
        id: 6,
        category: 'cultural',
        question: 'How comfortable is your team with "Small Talk" and North American cultural references (sports, holidays, idioms)?',
        answers: [
          { index: 0, score: 10, label: 'Very Comfortable—They act as trusted advisors and chat about life/weekends naturally.' },
          { index: 1, score: 6, label: 'Somewhat Comfortable—They try, but the conversation feels stiff or rehearsed.' },
          { index: 2, score: 3, label: 'Uncomfortable—They stick strictly to technical tickets to avoid "social English."' },
          { index: 3, score: 0, label: 'Invisible—Clients treat them like an execution arm ("Code Monkeys") because there is no personal connection.' }
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
    title: 'Evaluación de Confianza para TI',
    subtitle: 'Descubre cómo las brechas de comunicación en inglés afectan la credibilidad de tu equipo técnico, el impulso de acuerdos y la capacidad de ganar clientes norteamericanos.',
    
    questions: [
      {
        id: 1,
        category: 'clarity',
        question: '¿Con qué frecuencia una mala interpretación de los requisitos en inglés genera bugs, retrabajo o problemas de "lo que dije vs. lo que escuchaste"?',
        answers: [
          { index: 0, score: 10, label: 'Rara vez—Nuestro equipo capta los matices del inglés correctamente la primera vez.' },
          { index: 1, score: 6, label: 'Ocasionalmente—A veces perdemos el significado sutil y necesitamos una segunda ronda de aclaración.' },
          { index: 2, score: 3, label: 'Regularmente—A menudo entregamos lo que se pidió, no lo que se necesitaba, porque el brief no se entendió completamente.' },
          { index: 3, score: 0, label: 'Frecuentemente—Gastamos horas facturables significativas arreglando trabajo debido a malentendidos basados en el idioma.' }
        ]
      },
      {
        id: 2,
        category: 'clarity',
        question: 'Cuando tus desarrolladores presentan demos o soluciones en inglés, ¿qué tan bien traducen "Complejidad Técnica" en "Valor de Negocio"?',
        answers: [
          { index: 0, score: 10, label: 'Sin problemas—Tienen el vocabulario para explicar por qué importa al negocio, no solo cómo funciona.' },
          { index: 1, score: 6, label: 'Funcionalmente—Transmiten el punto, pero dependen mucho de la jerga técnica porque es "más seguro".' },
          { index: 2, score: 3, label: 'Pobremente—Los clientes se quedan con la mirada perdida o piden un resumen "no técnico" porque la explicación es demasiado densa.' },
          { index: 3, score: 0, label: 'No lo hacen—No dejamos que los desarrolladores presenten en inglés; un PM o Líder siempre debe traducir.' }
        ]
      },
      {
        id: 3,
        category: 'confidence',
        question: 'Durante la resolución de problemas en vivo, ¿con qué frecuencia tu equipo usa la red de seguridad "Déjame volver contigo"—específicamente para evitar hablar bajo presión?',
        answers: [
          { index: 0, score: 10, label: 'Nunca—Tienen la confianza suficiente para resolver problemas en vivo en inglés.' },
          { index: 1, score: 6, label: 'Rara vez—Solo cuando el problema es genuinamente complejo y requiere investigación.' },
          { index: 2, score: 3, label: 'A menudo—Tienen miedo de decir algo incorrecto en inglés, así que recurren al correo electrónico.' },
          { index: 3, score: 0, label: 'Siempre—Evitan las llamadas de voz en vivo por completo para no ser puestos en aprietos.' }
        ]
      },
      {
        id: 4,
        category: 'negotiation',
        question: 'Cuando un cliente presiona por expansión de alcance, ¿tu equipo tiene el matiz lingüístico para rechazar sin sonar grosero?',
        answers: [
          { index: 0, score: 10, label: 'Sí—Pueden ser firmes y diplomáticos en inglés, protegiendo nuestros márgenes.' },
          { index: 1, score: 6, label: 'Inconsistentemente—Intentan rechazar, pero a menudo ceden porque no pueden encontrar las palabras educadas en el momento.' },
          { index: 2, score: 3, label: 'No—Dicen "sí" en la reunión para evitar la incomodidad de discutir en un segundo idioma.' },
          { index: 3, score: 0, label: 'Solo Escalación—Les falta el vocabulario para negociar; un Gerente debe intervenir para proteger el alcance.' }
        ]
      },
      {
        id: 5,
        category: 'confidence',
        question: 'Si tu gerente con mejor inglés está enfermo, ¿qué pasa con tus reuniones con clientes?',
        answers: [
          { index: 0, score: 10, label: 'Todo normal—Múltiples miembros del equipo tienen la fluidez para asumir el liderazgo.' },
          { index: 1, score: 6, label: 'Interrupción menor—Otros pueden asistir, pero no pueden dirigir la conversación estratégica.' },
          { index: 2, score: 3, label: 'Alta ansiedad—El equipo lucha durante la reunión, y el cliente percibe la brecha de comunicación.' },
          { index: 3, score: 0, label: 'Cancelación—Tenemos que reprogramar porque nadie más puede manejar la comunicación con el cliente.' }
        ]
      },
      {
        id: 6,
        category: 'cultural',
        question: '¿Qué tan cómodo está tu equipo con "Small Talk" y referencias culturales norteamericanas (deportes, días festivos, modismos)?',
        answers: [
          { index: 0, score: 10, label: 'Muy cómodo—Actúan como asesores de confianza y charlan sobre vida/fines de semana naturalmente.' },
          { index: 1, score: 6, label: 'Algo cómodo—Lo intentan, pero la conversación se siente rígida o ensayada.' },
          { index: 2, score: 3, label: 'Incómodo—Se limitan estrictamente a tickets técnicos para evitar el "inglés social".' },
          { index: 3, score: 0, label: 'Invisibles—Los clientes los tratan como un brazo de ejecución ("Code Monkeys") porque no hay conexión personal.' }
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
