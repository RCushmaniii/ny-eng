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
        question: 'How often do misunderstandings with North American clients require follow-up clarification?',
        answers: [
          { index: 0, score: 10, label: 'Almost never—communication is clear the first time' },
          { index: 1, score: 7, label: 'Once or twice a month—minor issues' },
          { index: 2, score: 4, label: 'Several times a month—it\'s noticeable' },
          { index: 3, score: 0, label: 'Weekly or more—it\'s impacting relationships' }
        ]
      },
      {
        id: 2,
        category: 'clarity',
        question: 'When presenting solutions to clients, how well does your team explain technical concepts in business terms?',
        answers: [
          { index: 0, score: 10, label: 'Excellent—clients grasp it immediately' },
          { index: 1, score: 7, label: 'Good—occasionally needs clarification' },
          { index: 2, score: 4, label: 'Fair—clients regularly ask for simpler explanations' },
          { index: 3, score: 0, label: 'Poor—we often lose them' }
        ]
      },
      {
        id: 3,
        category: 'confidence',
        question: 'During live client calls, how often does your team say "Let me get back to you" when they actually know the answer?',
        answers: [
          { index: 0, score: 10, label: 'Never—they respond in real-time' },
          { index: 1, score: 7, label: 'Rarely—only for truly complex details' },
          { index: 2, score: 4, label: 'Sometimes—when under pressure' },
          { index: 3, score: 0, label: 'Frequently—it\'s a safety net' }
        ]
      },
      {
        id: 4,
        category: 'negotiation',
        question: 'When clients push back on scope, timeline, or pricing, how effectively does your team hold the line?',
        answers: [
          { index: 0, score: 10, label: 'Very effectively—they defend our position confidently' },
          { index: 1, score: 6, label: 'Moderately—they try but sometimes concede too quickly' },
          { index: 2, score: 3, label: 'Poorly—they struggle to push back' },
          { index: 3, score: 0, label: 'We route these to senior leadership' }
        ]
      },
      {
        id: 5,
        category: 'confidence',
        question: 'How many team members can confidently lead a client meeting (not just attend)?',
        answers: [
          { index: 0, score: 10, label: 'Multiple people—we have depth' },
          { index: 1, score: 6, label: '2-3 people—limited but adequate' },
          { index: 2, score: 3, label: '1-2 people—we\'re dependent on specific individuals' },
          { index: 3, score: 0, label: 'None—senior leadership must always be present' }
        ]
      },
      {
        id: 6,
        category: 'cultural',
        question: 'How comfortable is your team building rapport with North American clients beyond the technical discussion?',
        answers: [
          { index: 0, score: 10, label: 'Very comfortable—it happens naturally' },
          { index: 1, score: 6, label: 'Somewhat comfortable—they try but it feels stilted' },
          { index: 2, score: 3, label: 'Uncomfortable—they stick strictly to business' },
          { index: 3, score: 0, label: 'Very uncomfortable—they avoid it entirely' }
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
          { index: 1, score: 7, label: 'Una o dos veces al mes—problemas menores' },
          { index: 2, score: 4, label: 'Varias veces al mes—es notable' },
          { index: 3, score: 0, label: 'Semanalmente o más—está afectando las relaciones' }
        ]
      },
      {
        id: 2,
        category: 'clarity',
        question: 'Al presentar soluciones a clientes, ¿qué tan bien explica tu equipo conceptos técnicos en términos de negocio?',
        answers: [
          { index: 0, score: 10, label: 'Excelente—los clientes lo comprenden inmediatamente' },
          { index: 1, score: 7, label: 'Bueno—ocasionalmente necesita aclaración' },
          { index: 2, score: 4, label: 'Regular—los clientes piden regularmente explicaciones más simples' },
          { index: 3, score: 0, label: 'Pobre—a menudo los perdemos' }
        ]
      },
      {
        id: 3,
        category: 'confidence',
        question: 'Durante llamadas en vivo con clientes, ¿con qué frecuencia tu equipo dice "Déjame volver contigo" cuando en realidad saben la respuesta?',
        answers: [
          { index: 0, score: 10, label: 'Nunca—responden en tiempo real' },
          { index: 1, score: 7, label: 'Rara vez—solo para detalles verdaderamente complejos' },
          { index: 2, score: 4, label: 'A veces—cuando están bajo presión' },
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
    }
  }
};
