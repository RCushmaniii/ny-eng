const itServicesConfig = {
  quizId: "it-services",
  en: {
    title: "IT Communication Confidence Assessment",
    subtitle: "Discover how English communication gaps affect your technical team's credibility and deal momentum",
    questions: [
      {
        id: 1,
        category: "clarity",
        question: 'How often does a misinterpretation of English requirements lead to bugs, rework, or "what I said vs. what you heard" issues?',
        answers: [
          { index: 0, score: 10, label: "Rarely—Our team captures the English nuance correctly the first time." },
          { index: 1, score: 6, label: "Occasionally—We sometimes miss the subtle meaning and need a second round of clarification." },
          { index: 2, score: 3, label: "Regularly—We often deliver what was asked, not what was needed, because the brief wasn't fully understood." },
          { index: 3, score: 0, label: "Frequently—We spend significant billable hours fixing work because of language-based misunderstandings." }
        ]
      },
      {
        id: 2,
        category: "clarity",
        question: 'When your developers present demos or solutions in English, how well do they translate "Technical Complexity" into "Business Value"?',
        answers: [
          { index: 0, score: 10, label: "Seamlessly—They have the vocabulary to explain why it matters to the business, not just how it works." },
          { index: 1, score: 6, label: `Functionally—They get the point across, but rely heavily on technical jargon because it's "safer."` },
          { index: 2, score: 3, label: 'Poorly—Clients get glazed eyes or ask for a "non-technical" summary because the explanation is too dense.' },
          { index: 3, score: 0, label: "They Don't—We don't let developers present in English; a PM or Lead must always translate." }
        ]
      },
      {
        id: 3,
        category: "confidence",
        question: 'During live troubleshooting, how often does your team use the "Let me get back to you" safety net—specifically to avoid speaking under pressure?',
        answers: [
          { index: 0, score: 10, label: "Never—They are confident enough to troubleshoot live in English." },
          { index: 1, score: 6, label: "Rarely—Only when the issue is genuinely complex and requires research." },
          { index: 2, score: 3, label: "Often—They are afraid of saying the wrong thing in English, so they default to email." },
          { index: 3, score: 0, label: "Always—They avoid live voice calls entirely to prevent being put on the spot." }
        ]
      },
      {
        id: 4,
        category: "negotiation",
        question: "When a client pushes for scope creep, does your team have the linguistic nuance to push back without sounding rude?",
        answers: [
          { index: 0, score: 10, label: "Yes—They can be firm and diplomatic in English, protecting our margins." },
          { index: 1, score: 6, label: "Inconsistently—They try to push back, but often cave because they can't find the polite words in the moment." },
          { index: 2, score: 3, label: 'No—They say "yes" in the meeting to avoid the awkwardness of arguing in a second language.' },
          { index: 3, score: 0, label: "Escalation Only—They lack the vocabulary to negotiate; a Manager must step in to protect the scope." }
        ]
      },
      {
        id: 5,
        category: "confidence",
        question: "If your top English-speaking manager is out sick, what happens to your client meetings?",
        answers: [
          { index: 0, score: 10, label: "Business as usual—Multiple team members have the fluency to step up and lead." },
          { index: 1, score: 6, label: "Minor disruption—Others can attend, but they can't drive the strategic conversation." },
          { index: 2, score: 3, label: "High anxiety—The team struggles through the meeting, and the client senses the communication gap." },
          { index: 3, score: 0, label: "Cancellation—We have to reschedule because no one else can handle the client comms." }
        ]
      },
      {
        id: 6,
        category: "cultural",
        question: 'How comfortable is your team with "Small Talk" and North American cultural references (sports, holidays, idioms)?',
        answers: [
          { index: 0, score: 10, label: "Very Comfortable—They act as trusted advisors and chat about life/weekends naturally." },
          { index: 1, score: 6, label: "Somewhat Comfortable—They try, but the conversation feels stiff or rehearsed." },
          { index: 2, score: 3, label: 'Uncomfortable—They stick strictly to technical tickets to avoid "social English."' },
          { index: 3, score: 0, label: 'Invisible—Clients treat them like an execution arm ("Code Monkeys") because there is no personal connection.' }
        ]
      }
    ],
    gapDefinitions: {
      clarity: {
        name: "Clear Communication",
        lowScoreImpact: "Misunderstandings slow projects, damage credibility, and force rework. Clients question your technical expertise not because you lack skills, but because explanations aren't landing.",
        recommendation: 'Practice explaining technical concepts using the "executive summary first" framework. Record yourself and refine until jargon-free.',
        urgency: "high"
      },
      confidence: {
        name: "Confident Real-Time Response",
        lowScoreImpact: `Saying "I'll get back to you" kills deal momentum. Clients interpret hesitation as incompetence, even when it's just language processing time.`,
        recommendation: 'Build a mental library of phrases for buying time gracefully: "Let me make sure I answer that precisely..." while formulating your response.',
        urgency: "high"
      },
      "real-time": {
        name: "Spontaneous Communication",
        lowScoreImpact: "Inability to think and speak simultaneously in English creates awkward pauses, makes you seem unprepared, and reduces your professional presence.",
        recommendation: 'Practice "thinking out loud" exercises. Narrate your problem-solving process in English to build real-time fluency.',
        urgency: "medium"
      },
      negotiation: {
        name: "Negotiation & Persuasion",
        lowScoreImpact: "Weak pushback leads to scope creep, lower margins, difficult clients, and team burnout. You leave money on the table because defending your position feels too risky.",
        recommendation: "Rehearse negotiation scripts until defending your position feels natural. Role-play tough client scenarios with a coach.",
        urgency: "medium"
      },
      cultural: {
        name: "Cultural Fluency & Rapport",
        lowScoreImpact: "Relationships stay transactional. You miss opportunities to build trust, understand client motivations, or become a strategic partner instead of just a vendor.",
        recommendation: "Study North American business culture norms. Practice casual conversation starters. Learn when small talk is expected vs. optional.",
        urgency: "low"
      }
    },
    results: {
      impactTitle: "The Cost to Your Career",
      tiers: {
        "Credibility Block": {
          title: "An Artificial 'Seniority Ceiling'",
          description: "Your technical skills say 'Senior Architect,' but your English says 'Junior Dev.' The gap between your actual intelligence and your ability to express it is costing you promotions. You are watching less talented engineers climb the ladder simply because they can navigate the politics and 'sell' their ideas in English, while you stay stuck in execution mode."
        },
        "Million-Dollar Gap": {
          title: "You Are Leaving Potential on the Table",
          description: "The gap between your Technical Intelligence and your English Fluency is acting as a brake on your career. You’re likely being passed over for leadership roles because you’re seen as 'quiet' or 'lacking presence,' or your architectural ideas are ignored because you struggle to sell the 'Why' behind the code."
        },
        "Conversation-Ready": {
          title: "Ready for the Global Stage",
          description: "You have the technical and communication skills to lead international teams. Focus on refining your executive presence to command higher rates and senior roles."
        }
      },
      eliteComparison: {
        title: "What the Top 1% of International Leaders Do Differently",
        items: [
          "They don't just share information; they sell a vision. Whether in an interview or a board meeting, they translate complex details into a compelling strategic narrative that drives decisions.",
          'They navigate friction with nuance. They can push back on a CEO, negotiate a salary, or disagree with a client without sounding aggressive or rude. They master the "Diplomatic English" required for high-level conflict.',
          'They think in English, not translation. They handle rapid-fire Q&A and aggressive interviewing without the "buffering" pause. Their answers feel immediate and authoritative, not rehearsed.',
          "They own the narrative during a crisis. If a project is failing or an answer is unknown, they pivot the conversation with confidence rather than apologizing or acting defensive.",
          `They leverage personality as a superpower. They don't turn into "robots" in English. They use humor, small talk, and storytelling to build the likability and trust needed to win the role.`
        ]
      },
      cta: {
        title: "Is Your English the Only Thing Holding You Back?",
        subtext: `You have the technical skills. Now let's build the communication skills to match them. Let's identify your specific "glitches" in a short strategy session.`,
        buttonText: "Book My Career Strategy Call",
        footerText: "No sales scripts. Just a 15-minute debug session for your communication skills."
      }
    }
  },
  es: {
    title: "Evaluación de Confianza en Comunicación para TI",
    subtitle: "Descubre cómo las brechas de comunicación en inglés afectan la credibilidad de tu equipo técnico y el impulso de los acuerdos",
    questions: [
      {
        id: 1,
        category: "clarity",
        question: '¿Con qué frecuencia una mala interpretación de los requisitos en inglés genera bugs, retrabajo o problemas de "lo que dije vs. lo que escuchaste"?',
        answers: [
          { index: 0, score: 10, label: "Rara vez—Nuestro equipo capta los matices del inglés correctamente la primera vez." },
          { index: 1, score: 6, label: "Ocasionalmente—A veces perdemos el significado sutil y necesitamos una segunda ronda de aclaración." },
          { index: 2, score: 3, label: "Regularmente—A menudo entregamos lo que se pidió, no lo que se necesitaba, porque el brief no se entendió completamente." },
          { index: 3, score: 0, label: "Frecuentemente—Gastamos horas facturables significativas arreglando trabajo debido a malentendidos basados en el idioma." }
        ]
      },
      {
        id: 2,
        category: "clarity",
        question: 'Cuando tus desarrolladores presentan demos o soluciones en inglés, ¿qué tan bien traducen "Complejidad Técnica" en "Valor de Negocio"?',
        answers: [
          { index: 0, score: 10, label: "Sin problemas—Tienen el vocabulario para explicar por qué importa al negocio, no solo cómo funciona." },
          { index: 1, score: 6, label: 'Funcionalmente—Transmiten el punto, pero dependen mucho de la jerga técnica porque es "más seguro".' },
          { index: 2, score: 3, label: 'Pobremente—Los clientes se quedan con la mirada perdida o piden un resumen "no técnico" porque la explicación es demasiado densa.' },
          { index: 3, score: 0, label: "No lo hacen—No dejamos que los desarrolladores presenten en inglés; un PM o Líder siempre debe traducir." }
        ]
      },
      {
        id: 3,
        category: "confidence",
        question: 'Durante la resolución de problemas en vivo, ¿con qué frecuencia tu equipo usa la red de seguridad "Déjame volver contigo"—específicamente para evitar hablar bajo presión?',
        answers: [
          { index: 0, score: 10, label: "Nunca—Tienen la confianza suficiente para resolver problemas en vivo en inglés." },
          { index: 1, score: 6, label: "Rara vez—Solo cuando el problema es genuinamente complejo y requiere investigación." },
          { index: 2, score: 3, label: "A menudo—Tienen miedo de decir algo incorrecto en inglés, así que recurren al correo electrónico." },
          { index: 3, score: 0, label: "Siempre—Evitan las llamadas de voz en vivo por completo para no ser puestos en aprietos." }
        ]
      },
      {
        id: 4,
        category: "negotiation",
        question: "Cuando un cliente presiona por expansión de alcance, ¿tu equipo tiene el matiz lingüístico para rechazar sin sonar grosero?",
        answers: [
          { index: 0, score: 10, label: "Sí—Pueden ser firmes y diplomáticos en inglés, protegiendo nuestros márgenes." },
          { index: 1, score: 6, label: "Inconsistentemente—Intentan rechazar, pero a menudo ceden porque no pueden encontrar las palabras educadas en el momento." },
          { index: 2, score: 3, label: 'No—Dicen "sí" en la reunión para evitar la incomodidad de discutir en un segundo idioma.' },
          { index: 3, score: 0, label: "Solo Escalación—Les falta el vocabulario para negociar; un Gerente debe intervenir para proteger el alcance." }
        ]
      },
      {
        id: 5,
        category: "confidence",
        question: "Si tu gerente con mejor inglés está enfermo, ¿qué pasa con tus reuniones con clientes?",
        answers: [
          { index: 0, score: 10, label: "Todo normal—Múltiples miembros del equipo tienen la fluidez para asumir el liderazgo." },
          { index: 1, score: 6, label: "Interrupción menor—Otros pueden asistir, pero no pueden dirigir la conversación estratégica." },
          { index: 2, score: 3, label: "Alta ansiedad—El equipo lucha durante la reunión, y el cliente percibe la brecha de comunicación." },
          { index: 3, score: 0, label: "Cancelación—Tenemos que reprogramar porque nadie más puede manejar la comunicación con el cliente." }
        ]
      },
      {
        id: 6,
        category: "cultural",
        question: '¿Qué tan cómodo está tu equipo con "Small Talk" y referencias culturales norteamericanas (deportes, días festivos, modismos)?',
        answers: [
          { index: 0, score: 10, label: "Muy cómodo—Actúan como asesores de confianza y charlan sobre vida/fines de semana naturalmente." },
          { index: 1, score: 6, label: "Algo cómodo—Lo intentan, pero la conversación se siente rígida o ensayada." },
          { index: 2, score: 3, label: 'Incómodo—Se limitan estrictamente a tickets técnicos para evitar el "inglés social".' },
          { index: 3, score: 0, label: 'Invisibles—Los clientes los tratan como un brazo de ejecución ("Code Monkeys") porque no hay conexión personal.' }
        ]
      }
    ],
    gapDefinitions: {
      clarity: {
        name: "Comunicación Clara",
        lowScoreImpact: "Los malentendidos ralentizan proyectos, dañan la credibilidad y fuerzan retrabajos. Los clientes cuestionan tu experiencia técnica no porque carezcas de habilidades, sino porque las explicaciones no están llegando.",
        recommendation: 'Practica explicar conceptos técnicos usando el marco "resumen ejecutivo primero". Grábate y refina hasta eliminar la jerga.',
        urgency: "high"
      },
      confidence: {
        name: "Respuesta Confiada en Tiempo Real",
        lowScoreImpact: 'Decir "Te respondo después" mata el impulso del acuerdo. Los clientes interpretan la vacilación como incompetencia, incluso cuando es solo tiempo de procesamiento del idioma.',
        recommendation: 'Construye una biblioteca mental de frases para ganar tiempo con gracia: "Déjame asegurarme de responder eso con precisión..." mientras formulas tu respuesta.',
        urgency: "high"
      },
      "real-time": {
        name: "Comunicación Espontánea",
        lowScoreImpact: "La incapacidad de pensar y hablar simultáneamente en inglés crea pausas incómodas, te hace parecer no preparado y reduce tu presencia profesional.",
        recommendation: 'Practica ejercicios de "pensar en voz alta". Narra tu proceso de resolución de problemas en inglés para desarrollar fluidez en tiempo real.',
        urgency: "medium"
      },
      negotiation: {
        name: "Negociación y Persuasión",
        lowScoreImpact: "El rechazo débil lleva a expansión de alcance, márgenes más bajos, clientes difíciles y agotamiento del equipo. Dejas dinero sobre la mesa porque defender tu posición se siente demasiado arriesgado.",
        recommendation: "Ensaya guiones de negociación hasta que defender tu posición se sienta natural. Practica escenarios difíciles de clientes con un coach.",
        urgency: "medium"
      },
      cultural: {
        name: "Fluidez Cultural y Rapport",
        lowScoreImpact: "Las relaciones permanecen transaccionales. Pierdes oportunidades de construir confianza, entender motivaciones de clientes o convertirte en socio estratégico en lugar de solo un proveedor.",
        recommendation: "Estudia las normas de la cultura empresarial norteamericana. Practica iniciadores de conversación casual. Aprende cuándo se espera la charla informal vs. opcional.",
        urgency: "low"
      }
    },
    results: {
      impactTitle: "El Costo para Tu Carrera",
      tiers: {
        "Credibility Block": {
          title: "Un 'Techo de Antigüedad' Artificial",
          description: "Tus habilidades técnicas dicen 'Arquitecto Senior', pero tu inglés dice 'Desarrollador Junior'. La brecha entre tu inteligencia real y tu capacidad de expresarla te está costando promociones. Estás viendo a ingenieros menos talentosos escalar la escalera simplemente porque pueden navegar la política y 'vender' sus ideas en inglés, mientras tú permaneces atascado en modo de ejecución."
        },
        "Million-Dollar Gap": {
          title: "Estás Dejando Potencial Sobre la Mesa",
          description: "La brecha entre tu Inteligencia Técnica y tu Fluidez en Inglés está actuando como un freno en tu carrera. Es probable que te estén pasando por alto para roles de liderazgo porque te ven como 'callado' o 'sin presencia', o tus ideas arquitectónicas son ignoradas porque luchas para vender el 'Por qué' detrás del código."
        },
        "Conversation-Ready": {
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

const executivesConfig = {
  quizId: "executives",
  en: {
    title: "Executive Communication Confidence Assessment",
    subtitle: "Find out how your communication style impacts boardroom trust, deal velocity, and your ability to lead at the highest level.",
    questions: [
      {
        id: 1,
        category: "clarity",
        question: "When you present a strategic recommendation to your board or investors in English, how often do you need to clarify what you meant afterward?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Almost never—my message lands clearly the first time"
          },
          {
            index: 1,
            score: 6,
            label: "Occasionally—there are minor clarifications but no confusion"
          },
          {
            index: 2,
            score: 3,
            label: "Regularly—people ask follow-up questions because they didn't fully get it"
          },
          {
            index: 3,
            score: 0,
            label: "Frequently—people leave with different interpretations of the same message"
          }
        ]
      },
      {
        id: 2,
        category: "clarity",
        question: "When you present complex data or technical details in English, what usually happens?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "People immediately get it and often reuse my framing when they explain it to others."
          },
          {
            index: 1,
            score: 6,
            label: "People generally understand me, but they rarely reuse my language or framing."
          },
          {
            index: 2,
            score: 3,
            label: "Some audiences follow, while others get lost in the details or stop tracking."
          },
          {
            index: 3,
            score: 0,
            label: "People ask for a “simpler version” or someone else has to reframe it in non-technical terms."
          }
        ]
      },
      {
        id: 3,
        category: "confidence",
        question: "When the pressure mounts during a board review or pitch in English, who is controlling the pace of the conversation?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "I own the room—I remain calm in English, dictate the pace, and pivot easily under pressure."
          },
          {
            index: 1,
            score: 6,
            label: "I hold my ground—I might get interrupted, but I can steer the conversation back to my agenda without language getting in the way."
          },
          {
            index: 2,
            score: 3,
            label: "I get pushed around—aggressive stakeholders hijack the meeting, and I struggle to get a word in because I'm processing in a second language."
          },
          {
            index: 3,
            score: 0,
            label: "I shut down—the language pressure makes me hesitate or over-explain, and my authority evaporates."
          }
        ]
      },
      {
        id: 4,
        category: "negotiation",
        question: "When a strategic partner or enterprise client pushes back on terms, how do you handle the friction in English?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Seamlessly—I can be firm on the numbers while keeping the tone warm and collaborative."
          },
          {
            index: 1,
            score: 6,
            label: "Functionally—I get my point across, but I lack the nuance I have in my native language."
          },
          {
            index: 2,
            score: 3,
            label: "Hesitantly—I often agree to small concessions just to avoid a complex debate in English."
          },
          {
            index: 3,
            score: 0,
            label: "Frustratingly—I know exactly what to say in my head, but I can't find the right words in the moment."
          }
        ]
      },
      {
        id: 5,
        category: "confidence",
        question: 'The presentation is over, and the floor is open for Q&A. How do you handle the "off-script" moments in English?',
        answers: [
          {
            index: 0,
            score: 10,
            label: "Effortlessly—I actually prefer the Q&A; I can joke, pivot, and build rapport easily."
          },
          {
            index: 1,
            score: 6,
            label: 'Competently—I can handle the questions, but I lose a bit of the "polish" I had during the presentation.'
          },
          {
            index: 2,
            score: 3,
            label: "Rigidly—I feel exposed without my slides; I try to give short answers or steer back to the data."
          },
          {
            index: 3,
            score: 0,
            label: "Anxiously—I dread the Q&A; I worry I won't understand a question or won't find the right words fast enough."
          }
        ]
      },
      {
        id: 6,
        category: "cultural",
        question: "Do you feel your true personality and charisma translate fully when engaging with North American stakeholders?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Fully—I can joke, use nuance, and build deep connections just as easily as I do in my native language."
          },
          {
            index: 1,
            score: 6,
            label: 'Mostly—I can build trust, but I struggle to show my humor or handle "small talk" naturally.'
          },
          {
            index: 2,
            score: 3,
            label: `It's Muted—I feel like a "boring version" of myself; I stick to business topics to avoid awkwardness.`
          },
          {
            index: 3,
            score: 0,
            label: "It's Blocked—I feel like a completely different person in English—stiff, serious, and purely transactional."
          }
        ]
      }
    ],
    gapDefinitions: {
      clarity: {
        name: "Strategic Clarity",
        lowScoreImpact: "If your message is hard to follow, people don't just miss details—they lose confidence in your judgment. Confused stakeholders delay decisions, ask for more decks, and quietly downgrade your influence.",
        recommendation: "Build a simple narrative spine for every high‑stakes conversation: context → core recommendation → 2–3 reasons → clear next step. Practice saying it out loud in under 60 seconds.",
        urgency: "high"
      },
      confidence: {
        name: "Executive Presence & Confidence",
        lowScoreImpact: "Hesitation, over‑explaining, or shrinking under pressure makes strong ideas look weak. People buy your conviction before they buy your strategy.",
        recommendation: "Rehearse short, confident responses to the 5–7 hardest questions you fear most. Record yourself, refine your posture and tone, and focus on sounding decisive even when you're still thinking.",
        urgency: "high"
      },
      "real-time": {
        name: "Real‑Time Fluency",
        lowScoreImpact: "If you can't think and speak at the same time in English, you end up reacting instead of leading. Critical moments pass while you search for words instead of shaping the direction.",
        recommendation: "Run short daily drills where you explain a decision, risk, or trade‑off out loud with no notes for 60–90 seconds. The goal is flow, not perfection.",
        urgency: "medium"
      },
      negotiation: {
        name: "Strategic Negotiation",
        lowScoreImpact: "Weak language in negotiation turns “small concessions” into expensive precedents. Over time, this erodes margins, burns out teams, and trains partners to keep pushing.",
        recommendation: "Prepare 2–3 strong boundary phrases in English (for scope, price, and timeline) and practice saying them until they feel natural, not aggressive.",
        urgency: "medium"
      },
      cultural: {
        name: "Cultural Fluency & Executive Rapport",
        lowScoreImpact: "If conversations never move beyond the agenda, you stay as “the operator,” not the strategic peer. That limits trust, referrals, and long‑term deals.",
        recommendation: "Study how senior North American leaders open and close meetings, handle small talk, and use humor. Pick 1–2 behaviors to intentionally mirror in your next few calls.",
        urgency: "low"
      }
    }
  },
  es: {
    title: "Evaluación de Confianza en Comunicación para Ejecutivos",
    subtitle: "Descubre cómo tu estilo de comunicación impacta la confianza del directorio, la velocidad de los acuerdos y tu capacidad de liderar al más alto nivel.",
    questions: [
      {
        id: 1,
        category: "clarity",
        question: "Cuando presentas una recomendación estratégica a tu directorio o inversionistas, ¿con qué frecuencia necesitas aclarar lo que quisiste decir después?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Casi nunca—mi mensaje queda claro desde la primera vez"
          },
          {
            index: 1,
            score: 6,
            label: "A veces—hay aclaraciones menores pero no confusión seria"
          },
          {
            index: 2,
            score: 3,
            label: "Con regularidad—las personas hacen preguntas de seguimiento porque no lo entendieron del todo"
          },
          {
            index: 3,
            score: 0,
            label: "Con frecuencia—las personas salen con interpretaciones distintas del mismo mensaje"
          }
        ]
      },
      {
        id: 2,
        category: "clarity",
        question: "¿Qué tan efectivamente traduces detalles complejos (técnicos o financieros) en narrativas simples sobre las que tus stakeholders puedan actuar?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Muy bien—las personas repiten mi marco cuando se lo explican a otros"
          },
          {
            index: 1,
            score: 6,
            label: "Generalmente bien—las personas entienden, pero casi nunca reutilizan mi lenguaje"
          },
          {
            index: 2,
            score: 3,
            label: "De forma inconsistente—algunas audiencias siguen, otras se pierden en los detalles"
          },
          {
            index: 3,
            score: 0,
            label: "Mal—piden una “versión más simple” o alguien más tiene que volver a enmarcarlo"
          }
        ]
      },
      {
        id: 3,
        category: "confidence",
        question: "Cuando la presión aumenta durante una revisión del directorio o presentación en inglés, ¿quién controla el ritmo de la conversación?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Yo domino la sala—me mantengo calmado en inglés, dicto el ritmo y pivoteo fácilmente bajo presión."
          },
          {
            index: 1,
            score: 6,
            label: "Mantengo mi posición—puedo ser interrumpido, pero puedo dirigir la conversación de vuelta a mi agenda sin que el idioma se interponga."
          },
          {
            index: 2,
            score: 3,
            label: "Me empujan—los stakeholders agresivos secuestran la reunión, y lucho para meter una palabra porque estoy procesando en un segundo idioma."
          },
          {
            index: 3,
            score: 0,
            label: "Me cierro—la presión del idioma me hace dudar o sobre-explicar, y mi autoridad se evapora."
          }
        ]
      },
      {
        id: 4,
        category: "negotiation",
        question: "Cuando un socio estratégico o un cliente enterprise presiona sobre alcance, precio o términos, ¿qué tan efectivamente defiendes tu posición en inglés?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Muy efectivamente—puedo mantenerme firme sin dañar la relación"
          },
          {
            index: 1,
            score: 6,
            label: "Razonablemente bien—protejo los temas clave pero cedo más de lo que quisiera"
          },
          {
            index: 2,
            score: 3,
            label: "De forma inconsistente—sé lo que quiero decir pero me cuesta expresarlo de forma persuasiva en el momento"
          },
          {
            index: 3,
            score: 0,
            label: "Mal—evito la confrontación directa o dependo de que otra persona intervenga"
          }
        ]
      },
      {
        id: 5,
        category: "confidence",
        question: "¿Qué tan confiado te sientes liderando discusiones no guionadas en inglés (Q&A, resolución de problemas en vivo, “una última pregunta” al final de la reunión)?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Muy confiado—me gustan los momentos no guionados y a menudo los convierto en oportunidades"
          },
          {
            index: 1,
            score: 6,
            label: "Moderadamente confiado—prefiero estructura, pero puedo manejar momentos no guionados cuando es necesario"
          },
          {
            index: 2,
            score: 3,
            label: "Inseguro—trato de volver a las diapositivas, documentos o puntos preparados"
          },
          {
            index: 3,
            score: 0,
            label: "Incómodo—evito situaciones donde puedan ponerme en el spotlight en inglés"
          }
        ]
      },
      {
        id: 6,
        category: "cultural",
        question: "¿Qué tan naturalmente construyes rapport con stakeholders senior norteamericanos (miembros del directorio, pares del C‑suite, grandes clientes)?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Muy naturalmente—nos movemos con fluidez entre negocio, estrategia y conversación informal"
          },
          {
            index: 1,
            score: 6,
            label: "Algo naturalmente—se genera rapport, pero sigo pensando en “decirlo bien”"
          },
          {
            index: 2,
            score: 3,
            label: "Ocasionalmente—tiendo a quedarme en “modo ejecutivo formal” y pierdo pequeños momentos de conexión"
          },
          {
            index: 3,
            score: 0,
            label: "Rara vez—las conversaciones se sienten rígidas o puramente transaccionales"
          }
        ]
      }
    ],
    gapDefinitions: {
      clarity: {
        name: "Claridad Estratégica",
        lowScoreImpact: "Si tu mensaje es difícil de seguir, las personas no solo pierden detalles—pierden confianza en tu criterio. Los stakeholders demoran decisiones, piden más presentaciones y reducen silenciosamente tu influencia.",
        recommendation: "Construye una columna vertebral narrativa simple para cada conversación de alto impacto: contexto → recomendación central → 2–3 razones → siguiente paso claro. Practica decirlo en voz alta en menos de 60 segundos.",
        urgency: "high"
      },
      confidence: {
        name: "Presencia Ejecutiva y Confianza",
        lowScoreImpact: "La vacilación, las explicaciones demasiado largas o reducirte bajo presión hacen que ideas fuertes parezcan débiles. Las personas compran tu convicción antes de comprar tu estrategia.",
        recommendation: "Ensaya respuestas cortas y seguras para las 5–7 preguntas más difíciles que más temes. Grábate, refina tu postura y tono, y enfócate en sonar decisivo incluso mientras sigues pensando.",
        urgency: "high"
      },
      "real-time": {
        name: "Fluidez en Tiempo Real",
        lowScoreImpact: "Si no puedes pensar y hablar al mismo tiempo en inglés, terminas reaccionando en lugar de liderar. Los momentos críticos pasan mientras buscas palabras en lugar de marcar la dirección.",
        recommendation: "Haz ejercicios breves diarios donde expliques una decisión, riesgo o trade‑off en voz alta sin notas durante 60–90 segundos. El objetivo es la fluidez, no la perfección.",
        urgency: "medium"
      },
      negotiation: {
        name: "Negociación Estratégica",
        lowScoreImpact: "Un lenguaje débil en negociación convierte “pequeñas concesiones” en precedentes costosos. Con el tiempo, erosiona márgenes, desgasta equipos y entrena a los socios a seguir presionando.",
        recommendation: "Prepara 2–3 frases fuertes de límites en inglés (para alcance, precio y plazos) y practícalas hasta que se sientan naturales, no agresivas.",
        urgency: "medium"
      },
      cultural: {
        name: "Fluidez Cultural y Rapport Ejecutivo",
        lowScoreImpact: "Si las conversaciones nunca van más allá de la agenda, te quedas como “el operador”, no como par estratégico. Eso limita la confianza, las referencias y los acuerdos a largo plazo.",
        recommendation: "Observa cómo líderes senior norteamericanos abren y cierran reuniones, manejan la small talk y usan el humor. Elige 1–2 comportamientos para replicar intencionalmente en tus próximas llamadas.",
        urgency: "low"
      }
    }
  }
};

const professionalServicesConfig = {
  quizId: "professional-services",
  en: {
    title: "Professional Communication Confidence Assessment",
    subtitle: "For doctors, lawyers, and consultants. See how your English impacts liability, trust, and client authority.",
    questions: [
      {
        id: 1,
        category: "clarity",
        question: "When advising on high-stakes matters, how confident are you that your English conveys exactly the nuance you intend?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Fully confident—I control tone, detail, and precision perfectly."
          },
          {
            index: 1,
            score: 6,
            label: "Mostly confident—I get facts right but worry I lose subtle nuance."
          },
          {
            index: 2,
            score: 3,
            label: "Anxious—I second-guess words, fearing misunderstandings creates liability."
          },
          {
            index: 3,
            score: 0,
            label: "Unsure—I stick to written reports to be safe."
          }
        ]
      },
      {
        id: 2,
        category: "clarity",
        question: "How effectively do you translate complex professional jargon into clear, reassuring English for laypeople?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Seamlessly—I make the complex feel simple and build trust instantly."
          },
          {
            index: 1,
            score: 6,
            label: "Functionally—They understand facts, but I struggle to sound warm."
          },
          {
            index: 2,
            score: 3,
            label: 'Poorly—Clients look confused or ask for a "simpler version."'
          },
          {
            index: 3,
            score: 0,
            label: "I don't—I rely on written summaries or translators for heavy details."
          }
        ]
      },
      {
        id: 3,
        category: "confidence",
        question: "When challenged in a live meeting in English, how effectively do you defend your position?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "It holds firm—I defend my position calmly and persuasively in English."
          },
          {
            index: 1,
            score: 6,
            label: "It wavers—I sound defensive or hesitant while searching for the right English words."
          },
          {
            index: 2,
            score: 3,
            label: "It drops—I struggle to push back politely in a second language, so I stay silent."
          },
          {
            index: 3,
            score: 0,
            label: "It breaks—I defer to email to avoid saying the wrong thing in English."
          }
        ]
      },
      {
        id: 4,
        category: "negotiation",
        question: "How comfortable are you delivering difficult news or discussing fees/billables in English?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Very comfortable—I can be direct yet empathetic."
          },
          {
            index: 1,
            score: 6,
            label: "Somewhat comfortable—I get the message across, but sound blunter than I intend."
          },
          {
            index: 2,
            score: 3,
            label: "Uncomfortable—I over-apologize or soften the message too much."
          },
          {
            index: 3,
            score: 0,
            label: "Avoidant—I hide behind email to avoid the live conversation entirely."
          }
        ]
      },
      {
        id: 5,
        category: "real-time",
        question: "During high-pressure questioning (courtroom, boardroom, or consult), how do you handle unexpected, rapid-fire questions?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Effortlessly—I pivot, reframe, and answer without missing a beat."
          },
          {
            index: 1,
            score: 6,
            label: "Competently—I answer correctly, but speak slower than usual."
          },
          {
            index: 2,
            score: 3,
            label: "Rigidly—I need a moment to translate, creating awkward silences."
          },
          {
            index: 3,
            score: 0,
            label: "Anxiously—I freeze up or give short answers to end the pressure."
          }
        ]
      },
      {
        id: 6,
        category: "cultural",
        question: 'How effectively does your professional empathy (your "bedside manner") translate into English?',
        answers: [
          {
            index: 0,
            score: 10,
            label: "Fully—I build deep trust and connection just as easily as in my native language."
          },
          {
            index: 1,
            score: 6,
            label: "Mostly—I am professional and polite, but feel slightly more distant."
          },
          {
            index: 2,
            score: 3,
            label: `It's muted—I feel "clinical" because I'm focused on grammar.`
          },
          {
            index: 3,
            score: 0,
            label: "It's blocked—I feel stiff, robotic, and unable to connect."
          }
        ]
      }
    ],
    gapDefinitions: {
      clarity: {
        name: "Precision & Liability",
        lowScoreImpact: "Imprecise language creates liability exposure. Clients may misunderstand critical advice, leading to poor decisions or legal disputes.",
        recommendation: 'Practice explaining complex concepts using "signposting" language (e.g., "There are three key risks here...").',
        urgency: "high"
      },
      confidence: {
        name: "Authority & Presence",
        lowScoreImpact: "When you can't defend your recommendations persuasively, clients question your expertise—even when you're right.",
        recommendation: 'Rehearse "pushback phrases" that allow you to stand your ground politely but firmly.',
        urgency: "high"
      },
      "real-time": {
        name: "Rapid-Fire Response",
        lowScoreImpact: "Hesitation under pressure signals uncertainty. In adversarial situations, opponents exploit this to undermine your credibility.",
        recommendation: `Use "buying time" phrases ("That's a crucial point, let me address it specifically...") to gain seconds to think.`,
        urgency: "medium"
      },
      negotiation: {
        name: "Friction Management",
        lowScoreImpact: "Avoiding difficult conversations erodes trust. Clients sense your discomfort and may question your candor.",
        recommendation: "Role-play delivering bad news or fee increases until the language feels neutral and factual, not emotional.",
        urgency: "medium"
      },
      cultural: {
        name: "Rapport & Trust",
        lowScoreImpact: "Without rapport, relationships stay transactional. Clients won't refer you or stick with you through difficult outcomes.",
        recommendation: 'Focus on "active listening" cues and small talk openers to humanize the interaction before diving into business.',
        urgency: "low"
      }
    }
  },
  es: {
    title: "Evaluación de Comunicación Profesional",
    subtitle: "Para médicos, abogados y consultores. Descubre cómo tu inglés impacta tu autoridad, confianza y riesgo profesional.",
    questions: [
      {
        id: 1,
        category: "clarity",
        question: "Al asesorar sobre temas delicados, ¿qué tan seguro estás de que tu inglés transmite exactamente el matiz que intentas?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Totalmente seguro—controlo el tono, detalle y precisión perfectamente."
          },
          {
            index: 1,
            score: 6,
            label: "Mayormente seguro—acierto en los hechos pero temo perder matices."
          },
          {
            index: 2,
            score: 3,
            label: "Ansioso—dudo de mis palabras, temiendo que un malentendido cree responsabilidad."
          },
          {
            index: 3,
            score: 0,
            label: "Inseguro—me limito a informes escritos para estar seguro."
          }
        ]
      },
      {
        id: 2,
        category: "clarity",
        question: "¿Qué tan efectivamente traduces la jerga profesional compleja a un inglés claro y tranquilizador para clientes no expertos?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Perfectamente—hago que lo complejo parezca simple y genero confianza."
          },
          {
            index: 1,
            score: 6,
            label: "Funcionalmente—entienden los hechos, pero me cuesta sonar cálido."
          },
          {
            index: 2,
            score: 3,
            label: 'Pobremente—los clientes parecen confundidos o piden una "versión más simple".'
          },
          {
            index: 3,
            score: 0,
            label: "No lo hago—dependo de resúmenes escritos o traductores para los detalles."
          }
        ]
      },
      {
        id: 3,
        category: "confidence",
        question: "Cuando te desafían en una reunión en vivo en inglés, ¿qué tan efectivamente defiendes tu posición?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Se mantiene firme—defiendo mi postura con calma y persuasión en inglés."
          },
          {
            index: 1,
            score: 6,
            label: "Vacila—sueno defensivo o dudoso mientras busco las palabras correctas en inglés."
          },
          {
            index: 2,
            score: 3,
            label: "Cae—me cuesta contradecir educadamente en un segundo idioma, así que guardo silencio."
          },
          {
            index: 3,
            score: 0,
            label: "Se rompe—prefiero responder por email para no equivocarme en inglés."
          }
        ]
      },
      {
        id: 4,
        category: "negotiation",
        question: "¿Qué tan cómodo te sientes dando noticias difíciles o discutiendo honorarios en inglés?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Muy cómodo—puedo ser directo pero empático."
          },
          {
            index: 1,
            score: 6,
            label: "Algo cómodo—transmito el mensaje, pero sueno más brusco de lo que quisiera."
          },
          {
            index: 2,
            score: 3,
            label: "Incómodo—me disculpo demasiado o suavizo tanto el mensaje que se pierde."
          },
          {
            index: 3,
            score: 0,
            label: "Evitativo—me escondo detrás del email para evitar la charla en vivo."
          }
        ]
      },
      {
        id: 5,
        category: "real-time",
        question: "Durante un interrogatorio o consulta bajo presión, ¿cómo manejas preguntas rápidas e inesperadas?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Sin esfuerzo—pivoteo, reencuadro y respondo sin perder el ritmo."
          },
          {
            index: 1,
            score: 6,
            label: "Competentemente—respondo bien, pero hablo más lento de lo habitual."
          },
          {
            index: 2,
            score: 3,
            label: "Rígidamente—necesito traducir mentalmente, creando silencios incómodos."
          },
          {
            index: 3,
            score: 0,
            label: "Ansiosamente—me bloqueo o doy respuestas cortas para acabar la presión."
          }
        ]
      },
      {
        id: 6,
        category: "cultural",
        question: '¿Qué tan efectivamente se traduce tu empatía profesional ("trato humano") al inglés?',
        answers: [
          {
            index: 0,
            score: 10,
            label: "Totalmente—genero confianza y conexión tan fácil como en mi idioma."
          },
          {
            index: 1,
            score: 6,
            label: "Mayormente—soy profesional, pero me siento un poco más distante."
          },
          {
            index: 2,
            score: 3,
            label: 'Apagado—me siento "clínico" porque me enfoco en la gramática.'
          },
          {
            index: 3,
            score: 0,
            label: "Bloqueado—me siento rígido, robótico e incapaz de conectar."
          }
        ]
      }
    ],
    gapDefinitions: {
      clarity: {
        name: "Precisión y Responsabilidad",
        lowScoreImpact: "El lenguaje impreciso crea riesgo legal. Los clientes pueden malinterpretar consejos críticos, llevando a malas decisiones.",
        recommendation: 'Practica explicar conceptos complejos usando lenguaje de "señalización" (ej. "Hay tres riesgos clave aquí...").',
        urgency: "high"
      },
      confidence: {
        name: "Autoridad y Presencia",
        lowScoreImpact: "Cuando no puedes defender tus recomendaciones persuasivamente, los clientes cuestionan tu experiencia, aunque tengas razón.",
        recommendation: 'Ensaya frases de "rechazo cortés" que te permitan mantener tu postura con firmeza pero educación.',
        urgency: "high"
      },
      "real-time": {
        name: "Respuesta Rápida",
        lowScoreImpact: "La vacilación bajo presión señala incertidumbre. En situaciones adversas, los oponentes explotan esto para minar tu credibilidad.",
        recommendation: 'Usa frases para "ganar tiempo" ("Ese es un punto crucial, permíteme abordarlo específicamente...") para pensar.',
        urgency: "medium"
      },
      negotiation: {
        name: "Manejo de Fricción",
        lowScoreImpact: "Evitar conversaciones difíciles erosiona la confianza. Los clientes notan tu incomodidad y pueden cuestionar tu franqueza.",
        recommendation: "Haz role-play dando malas noticias hasta que el lenguaje se sienta neutral y factual, no emocional.",
        urgency: "medium"
      },
      cultural: {
        name: "Rapport y Confianza",
        lowScoreImpact: "Sin rapport, las relaciones son transaccionales. Los clientes no te referirán ni se quedarán contigo en momentos difíciles.",
        recommendation: 'Enfócate en señales de "escucha activa" y frases de apertura para humanizar la interacción.',
        urgency: "low"
      }
    }
  }
};

const highStakesConfig = {
  quizId: "high-stakes",
  en: {
    title: "High-Stakes Communication Confidence Assessment",
    subtitle: "Discover if your English is bridging the gap between your expertise and your impact.",
    questions: [
      {
        id: 1,
        category: "cultural",
        // Mapping "Identity/Presence" to cultural/soft skills bucket
        question: "Compare how you feel presenting in your native language versus presenting in English. What is the difference?",
        answers: [
          { index: 0, score: 10, label: "No difference. I feel equally powerful, witty, and authoritative in both languages." },
          { index: 1, score: 6, label: "Slight Friction. I am confident in English, but I have to focus harder to find the right tone." },
          { index: 2, score: 3, label: `The "Junior" Effect. I feel less senior in English because I can't express myself with the same nuance and speed.` },
          { index: 3, score: 0, label: "Imposter Syndrome. In my native language, I own the room. In English, I feel lucky just to survive the meeting." }
        ]
      },
      {
        id: 2,
        category: "real-time",
        question: "During an interview or Q&A, someone asks a complex, unexpected question. What happens in your brain?",
        answers: [
          { index: 0, score: 10, label: "Direct Thought. I think and answer in English instantly without translating." },
          { index: 1, score: 6, label: "Buffering. I pause for a split second to organize my thoughts in English, then answer." },
          { index: 2, score: 3, label: "Translating. I formulate the answer in my native language first, then mentally translate it, which makes me slow to respond." },
          { index: 3, score: 0, label: "The Blank Stare. The stress of the language barrier makes my mind go blank, even if I know the answer." }
        ]
      },
      {
        id: 3,
        category: "clarity",
        question: "You need to explain a complex strategy or tell a story to a North American audience. How do you choose your words?",
        answers: [
          { index: 0, score: 10, label: "Precision. I use the exact right words to paint a picture, using idioms and metaphors naturally." },
          { index: 1, score: 6, label: 'Simplicity. I stick to "safe" business vocabulary that I know I can pronounce correctly.' },
          { index: 2, score: 3, label: "Dumbing it Down. I simplify my ideas so much to fit my vocabulary that I sound less intelligent than I actually am." },
          { index: 3, score: 0, label: "Avoidance. I cut the story short because I'm afraid of getting stuck in a sentence I can't finish." }
        ]
      },
      {
        id: 4,
        category: "confidence",
        question: "You notice a stakeholder frowning or looking confused while you are speaking. What is your first thought?",
        answers: [
          { index: 0, score: 10, label: '"They disagree." I assume they are questioning my logic, so I clarify my argument.' },
          { index: 1, score: 6, label: '"Is it me?" I briefly wonder if I mispronounced something, but I keep going.' },
          { index: 2, score: 3, label: `"My Accent." I immediately panic that my accent is too heavy or they can't understand my English.` },
          { index: 3, score: 0, label: `"I'm Failing." I assume I've lost them completely because of my language skills, and I want to stop talking.` }
        ]
      },
      {
        id: 5,
        category: "cultural",
        question: "Does your true personality—your humor, warmth, and charisma—come through when you interview or present in English?",
        answers: [
          { index: 0, score: 10, label: "100%. I am the same person in English as I am in my native language." },
          { index: 1, score: 6, label: "Mostly. I can be friendly, but I’m less likely to make jokes or use sarcasm." },
          { index: 2, score: 3, label: 'It’s Muted. I feel "boring" or "robotic" in English because I have to focus so much on grammar.' },
          { index: 3, score: 0, label: "I'm a Different Person. I feel stiff, serious, and purely transactional because I lack the linguistic range to be myself." }
        ]
      },
      {
        id: 6,
        category: "real-time",
        question: "You realize mid-sentence that you used the wrong verb tense or mispronounced a word. How do you react?",
        answers: [
          { index: 0, score: 10, label: "Ignore it. Native speakers make mistakes too. I keep my flow and focus on the message." },
          { index: 1, score: 6, label: "Quick Fix. I quickly rephrase it and move on without losing much rhythm." },
          { index: 2, score: 3, label: 'The Apology. I stop to say "Sorry, my English..." which draws attention to the mistake and lowers my status.' },
          { index: 3, score: 0, label: "The Spiral. I get stuck on the mistake, lose my train of thought, and struggle to finish the point." }
        ]
      }
    ],
    gapDefinitions: {
      cultural: {
        name: "Professional Identity & Presence",
        lowScoreImpact: `The "Junior Effect." Your expertise is lost because you can't express nuance, humor, or authority. You feel like a different, less capable person in English.`,
        recommendation: 'Stop focusing on "perfect grammar" and start focusing on "emotional impact." Practice storytelling and authoritative phrasing to regain your executive voice.',
        urgency: "high"
      },
      "real-time": {
        name: "Mental Processing Speed",
        lowScoreImpact: 'The "Translation Lag." Translating in your head makes you slow to respond, killing the momentum of Q&A sessions and high-stakes negotiations.',
        recommendation: 'You need to break the translation habit. Practice "thinking out loud" drills to wire your brain to formulate thoughts directly in English.',
        urgency: "high"
      },
      clarity: {
        name: "Strategic Vocabulary",
        lowScoreImpact: 'The "Dumbing Down" Trap. You simplify your brilliant ideas to fit your limited vocabulary, making you sound less intelligent than you actually are.',
        recommendation: `Build a "Power Phrase" library. Don't just learn words; learn full strategic phrases for pivoting, clarifying, and emphasizing points.`,
        urgency: "medium"
      },
      confidence: {
        name: "Psychological Resilience",
        lowScoreImpact: "Accent Anxiety. You interpret neutral reactions as negative judgment of your English. This insecurity becomes a self-fulfilling prophecy, making you nervous and shaky.",
        recommendation: 'Shift focus from "How do I sound?" to "What do they need?" When you obsess over value, your accent becomes secondary.',
        urgency: "high"
      },
      // Fallback/Unused categories (required by type but not primary focus here)
      negotiation: {
        name: "Persuasion & Defense",
        lowScoreImpact: "Difficulty handling pushback leads to weak positioning.",
        recommendation: "Practice diplomatic pushback scripts.",
        urgency: "medium"
      }
    }
  },
  // Placeholder for Spanish (using English content for now until translated)
  es: {
    title: "Evaluación de Comunicación de Alto Nivel",
    subtitle: "Descubre si tu inglés está creando una brecha entre tu experiencia y tu impacto.",
    questions: [
      {
        id: 1,
        category: "cultural",
        question: "Compara cómo te sientes al presentar en tu idioma nativo versus en inglés. ¿Cuál es la diferencia?",
        answers: [
          { index: 0, score: 10, label: "Sin diferencia. Me siento igual de poderoso, ingenioso y autoritario." },
          { index: 1, score: 6, label: "Ligera fricción. Tengo confianza, pero debo concentrarme más para encontrar el tono correcto." },
          { index: 2, score: 3, label: 'El efecto "Junior". Me siento menos senior en inglés porque no puedo expresarme con los mismos matices.' },
          { index: 3, score: 0, label: "Síndrome del impostor. En mi idioma domino la sala. En inglés, siento suerte si sobrevivo la reunión." }
        ]
      },
      {
        id: 2,
        category: "real-time",
        question: "Durante una entrevista o Q&A, alguien hace una pregunta compleja e inesperada. ¿Qué pasa en tu cerebro?",
        answers: [
          { index: 0, score: 10, label: "Pensamiento directo. Pienso y respondo en inglés al instante sin traducir." },
          { index: 1, score: 6, label: "Buffering. Hago una pausa de un segundo para organizar mis ideas en inglés." },
          { index: 2, score: 3, label: "Traduciendo. Formulo la respuesta en mi idioma primero, luego traduzco mentalmente." },
          { index: 3, score: 0, label: "La mente en blanco. El estrés de la barrera del idioma hace que mi mente se bloquee." }
        ]
      },
      {
        id: 3,
        category: "clarity",
        question: "Necesitas explicar una estrategia compleja o contar una historia. ¿Cómo eliges tus palabras?",
        answers: [
          { index: 0, score: 10, label: "Precisión. Uso las palabras exactas para pintar una imagen, usando modismos naturalmente." },
          { index: 1, score: 6, label: 'Simplicidad. Me apego al vocabulario de negocios "seguro" que sé pronunciar bien.' },
          { index: 2, score: 3, label: "Simplificando demasiado. Simplifico tanto mis ideas que sueno menos inteligente de lo que soy." },
          { index: 3, score: 0, label: "Evasión. Corto la historia porque tengo miedo de quedarme atascado en una frase." }
        ]
      },
      {
        id: 4,
        category: "confidence",
        question: "Notas que alguien frunce el ceño o parece confundido mientras hablas. ¿Cuál es tu primer pensamiento?",
        answers: [
          { index: 0, score: 10, label: '"No están de acuerdo". Asumo que cuestionan mi lógica, así que aclaro mi argumento.' },
          { index: 1, score: 6, label: '"¿Soy yo?". Me pregunto brevemente si pronuncié mal algo, pero sigo adelante.' },
          { index: 2, score: 3, label: '"Mi acento". Entro en pánico pensando que mi acento es muy fuerte o no me entienden.' },
          { index: 3, score: 0, label: '"Estoy fallando". Asumo que los he perdido por completo debido a mi inglés.' }
        ]
      },
      {
        id: 5,
        category: "cultural",
        question: "¿Tu verdadera personalidad—tu humor, calidez y carisma—se transmite cuando presentas en inglés?",
        answers: [
          { index: 0, score: 10, label: "100%. Soy la misma persona en inglés que en mi idioma nativo." },
          { index: 1, score: 6, label: "Mayormente. Puedo ser amigable, pero es menos probable que haga bromas o use sarcasmo." },
          { index: 2, score: 3, label: 'Está silenciada. Me siento "aburrido" o "robótico" porque me concentro mucho en la gramática.' },
          { index: 3, score: 0, label: "Soy otra persona. Me siento rígido y puramente transaccional por falta de rango lingüístico." }
        ]
      },
      {
        id: 6,
        category: "real-time",
        question: "Te das cuenta a mitad de una frase que usaste el tiempo verbal incorrecto. ¿Cómo reaccionas?",
        answers: [
          { index: 0, score: 10, label: "Lo ignoro. Los nativos también cometen errores. Mantengo mi flujo." },
          { index: 1, score: 6, label: "Arreglo rápido. Lo reformulo rápidamente y sigo sin perder el ritmo." },
          { index: 2, score: 3, label: 'La disculpa. Me detengo para decir "Sorry, my English...", lo cual baja mi estatus.' },
          { index: 3, score: 0, label: "La espiral. Me quedo atascado en el error, pierdo el hilo y lucho por terminar." }
        ]
      }
    ],
    gapDefinitions: {
      cultural: {
        name: "Identidad y Presencia Profesional",
        lowScoreImpact: 'El "Efecto Junior". Tu experiencia se pierde porque no puedes expresar matices, humor o autoridad. Te sientes como una persona diferente y menos capaz en inglés.',
        recommendation: 'Deja de concentrarte en la "gramática perfecta" y comienza a enfocarte en el "impacto emocional". Practica la narración para recuperar tu voz ejecutiva.',
        urgency: "high"
      },
      "real-time": {
        name: "Velocidad de Procesamiento Mental",
        lowScoreImpact: 'El "Retraso de Traducción". Traducir en tu cabeza te hace lento para responder, matando el impulso de las sesiones de preguntas y respuestas.',
        recommendation: 'Necesitas romper el hábito de traducción. Practica ejercicios de "pensar en voz alta" para conectar tu cerebro directamente al inglés.',
        urgency: "high"
      },
      clarity: {
        name: "Vocabulario Estratégico",
        lowScoreImpact: 'La trampa de "Simplificar Demasiado". Simplificas tus ideas brillantes para ajustarlas a tu vocabulario limitado, sonando menos inteligente de lo que eres.',
        recommendation: 'Construye una biblioteca de "Frases de Poder". No solo aprendas palabras; aprende frases estratégicas completas para pivotar y enfatizar puntos.',
        urgency: "medium"
      },
      confidence: {
        name: "Resiliencia Psicológica",
        lowScoreImpact: "Ansiedad por el Acento. Interpretas reacciones neutrales como juicios negativos de tu inglés. Esta inseguridad se convierte en una profecía autocumplida.",
        recommendation: 'Cambia el enfoque de "¿Cómo sueno?" a "¿Qué necesitan?". Cuando te obsesionas con el valor, tu acento se vuelve secundario.',
        urgency: "high"
      },
      negotiation: {
        name: "Persuasión y Defensa",
        lowScoreImpact: "Dificultad para manejar el rechazo conduce a un posicionamiento débil.",
        recommendation: "Practica guiones de rechazo diplomático.",
        urgency: "medium"
      }
    }
  }
};

const quizConfigs = {
  "it-services": itServicesConfig,
  "professional-services": professionalServicesConfig,
  // 'sales-marketing': salesMarketingConfig,
  "executives": executivesConfig,
  "high-stakes": highStakesConfig
  // 'interview-coaching': interviewCoachingConfig
};
function getQuizConfig(quizType, language) {
  const config = quizConfigs[quizType];
  if (!config) {
    throw new Error(`Quiz config not found for type: ${quizType}`);
  }
  return config[language];
}
function isQuizTypeAvailable(quizType) {
  return quizType in quizConfigs;
}

export { getQuizConfig as g, isQuizTypeAvailable as i };
