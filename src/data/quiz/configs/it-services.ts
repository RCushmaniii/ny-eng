import type { QuizConfig } from "../types";

export const itServicesConfig: QuizConfig = {
  quizId: "it-services",

  en: {
    title: "IT Communication Confidence Assessment",
    subtitle:
      "Discover if your English is the bottleneck between your current role and the Senior Leadership positions you deserve.",

    questions: [
      {
        id: 1,
        category: "clarity",
        question:
          'How often does a misinterpretation of English requirements lead to bugs, rework, or "what I said vs. what you heard" issues?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Rarely—I capture the English nuance correctly the first time.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Occasionally—I sometimes miss the subtle meaning and need a second round of clarification.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Regularly—I often deliver what was asked, not what was needed, because the brief wasn't fully understood.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Frequently—I spend significant time fixing work because of language-based misunderstandings.",
          },
        ],
      },
      {
        id: 2,
        category: "clarity",
        question:
          'When you present demos or solutions in English, how well do you translate "Technical Complexity" into "Business Value"?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Seamlessly—I have the vocabulary to explain why it matters to the business, not just how it works.",
          },
          {
            index: 1,
            score: 6,
            label:
              'Functionally—I get the point across, but I rely heavily on technical jargon because it\'s "safer."',
          },
          {
            index: 2,
            score: 3,
            label:
              'Poorly—Clients get glazed eyes or ask for a "non-technical" summary because my explanation is too dense.',
          },
          {
            index: 3,
            score: 0,
            label:
              "I Don't—I avoid presenting in English; I let a PM or Lead translate for me.",
          },
        ],
      },
      {
        id: 3,
        category: "confidence",
        question:
          'During live troubleshooting, how often do you use the "Let me get back to you" safety net—specifically to avoid speaking under pressure?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Never—I am confident enough to troubleshoot live in English.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Rarely—Only when the issue is genuinely complex and requires research.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Often—I am afraid of saying the wrong thing in English, so I default to email.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Always—I avoid live voice calls entirely to prevent being put on the spot.",
          },
        ],
      },
      {
        id: 4,
        category: "negotiation",
        question:
          "When a client pushes for scope creep, do you have the linguistic nuance to push back without sounding rude?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Yes—I can be firm and diplomatic in English, protecting my boundaries.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Inconsistently—I try to push back, but often cave because I can't find the polite words in the moment.",
          },
          {
            index: 2,
            score: 3,
            label:
              'No—I say "yes" in the meeting to avoid the awkwardness of arguing in a second language.',
          },
          {
            index: 3,
            score: 0,
            label:
              "Escalation Only—I lack the vocabulary to negotiate; I need a Manager to step in.",
          },
        ],
      },
      {
        id: 5,
        category: "confidence",
        question:
          "If you are forced to lead a high-stakes client meeting alone, how do you feel?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Confident—I can drive the strategic conversation and handle curveballs.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Nervous but Capable—I can handle the agenda, but I dread the Q&A session.",
          },
          {
            index: 2,
            score: 3,
            label:
              "High Anxiety—I struggle through it, and I know the client senses my hesitation.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Panic—I would try to reschedule to avoid handling the comms alone.",
          },
        ],
      },
      {
        id: 6,
        category: "cultural",
        question:
          'How comfortable are you with "Small Talk" and North American cultural references (sports, holidays, idioms)?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Very Comfortable—I act as a trusted advisor and chat about life/weekends naturally.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Somewhat Comfortable—I try, but my conversation feels stiff or rehearsed.",
          },
          {
            index: 2,
            score: 3,
            label:
              'Uncomfortable—I stick strictly to technical tickets to avoid "social English."',
          },
          {
            index: 3,
            score: 0,
            label:
              "Invisible—Clients treat me like an execution arm because I haven't built a personal connection.",
          },
        ],
      },
    ],

    gapDefinitions: {
      clarity: {
        name: "Clear Communication",
        lowScoreImpact:
          "Misunderstandings slow projects and damage your reputation. Clients question your technical expertise not because you lack skills, but because your explanations aren't landing.",
        recommendation:
          'My Advice: Practice explaining technical concepts using the "executive summary first" framework. Record yourself and refine until jargon-free.',
        urgency: "high",
      },
      confidence: {
        name: "Confident Real-Time Response",
        lowScoreImpact:
          "Saying \"I'll get back to you\" kills your authority. Clients interpret hesitation as incompetence, even when it's just language processing time.",
        recommendation:
          'My Advice: Build a mental library of phrases for buying time gracefully: "Let me make sure I answer that precisely..." while formulating your response.',
        urgency: "high",
      },
      "real-time": {
        name: "Spontaneous Communication",
        lowScoreImpact:
          "Inability to think and speak simultaneously in English creates awkward pauses, makes you seem unprepared, and reduces your professional presence.",
        recommendation:
          'My Advice: Practice "thinking out loud" exercises. Narrate your problem-solving process in English to build real-time fluency.',
        urgency: "medium",
      },
      negotiation: {
        name: "Negotiation & Persuasion",
        lowScoreImpact:
          "Weak pushback leads to burnout. You accept impossible deadlines because defending your position in English feels too risky.",
        recommendation:
          "My Advice: Rehearse negotiation scripts until defending your position feels natural. Role-play tough client scenarios with a coach.",
        urgency: "medium",
      },
      cultural: {
        name: "Cultural Fluency & Rapport",
        lowScoreImpact:
          "Relationships stay transactional. You miss opportunities to build trust, understand client motivations, or become a strategic partner.",
        recommendation:
          "My Advice: Study North American business culture norms. Practice casual conversation starters. Learn when small talk is expected vs. optional.",
        urgency: "low",
      },
    },

    results: {
      impactTitle: "The Cost to Your Career",
      tiers: {
        "Credibility Gap": {
          title: "The Technician Trap",
          description:
            "Your technical skills say 'Senior Architect,' but your English says 'Junior Dev.' The gap between your actual intelligence and your ability to express it is costing you promotions. You are watching less talented engineers climb the ladder simply because they can navigate the politics and 'sell' their ideas in English, while you stay stuck in execution mode.",
        },
        "Passive Proficiency": {
          title: "The Invisible Ceiling",
          description:
            "You understand almost everything, but you struggle to be heard. You have great ideas, but in meetings, you stay quiet because you can't find the words fast enough. You are reliable, but not 'visible' enough for leadership.",
        },
        "Executive Presence": {
          title: "Ready for the Global Stage",
          description:
            "You have the technical and communication skills to lead international teams. Focus on refining your executive presence to command higher rates and senior roles.",
        },
      },
      eliteComparison: {
        title: "The 5 Habits I See in the Top 1% of Leaders",
        items: [
          "They don't just share information; they sell a vision. Whether in an interview or a board meeting, they translate complex details into a compelling strategic narrative.",
          "They navigate friction with nuance. They can push back on a CEO or disagree with a client without sounding aggressive. They master 'Diplomatic English'.",
          "They think in English, not translation. They handle rapid-fire Q&A without the 'buffering' pause. Their answers feel immediate and authoritative.",
          "They own the narrative during a crisis. If a project is failing, they pivot the conversation with confidence rather than apologizing.",
          "They leverage personality as a superpower. They don't turn into 'robots' in English. They use humor and storytelling to build trust.",
        ],
      },
      cta: {
        title: "Ready to Improve Your English Fast?",
        subtext: "Quick discussion. Personal. No pressure.",
        buttonText: "👉 Book a Session with Me",
        footerText: "",
      },
    },
  },

  es: {
    title: "Evaluación de Confianza para TI",
    subtitle:
      "Descubre si tu inglés es el cuello de botella entre tu rol actual y los puestos de liderazgo que mereces.",

    questions: [
      {
        id: 1,
        category: "clarity",
        question:
          '¿Con qué frecuencia una mala interpretación de los requisitos en inglés te genera bugs, retrabajo o problemas de "lo que dije vs. lo que escuchaste"?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Rara vez—Capto los matices del inglés correctamente a la primera.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Ocasionalmente—A veces pierdo el significado sutil y necesito una segunda ronda de aclaración.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Regularmente—A menudo entrego lo que se pidió, no lo que se necesitaba, porque no entendí bien el brief.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Frecuentemente—Gasto mucho tiempo arreglando trabajo debido a malentendidos de idioma.",
          },
        ],
      },
      {
        id: 2,
        category: "clarity",
        question:
          'Cuando presentas demos o soluciones en inglés, ¿qué tan bien traduces "Complejidad Técnica" en "Valor de Negocio"?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Sin problemas—Tengo el vocabulario para explicar por qué importa al negocio, no solo cómo funciona.",
          },
          {
            index: 1,
            score: 6,
            label:
              'Funcionalmente—Transmito el punto, pero dependo mucho de la jerga técnica porque es "más seguro".',
          },
          {
            index: 2,
            score: 3,
            label:
              'Pobremente—Los clientes se pierden o piden un resumen "no técnico" porque mi explicación es demasiado densa.',
          },
          {
            index: 3,
            score: 0,
            label:
              "No lo hago—Evito presentar en inglés; dejo que un PM o Líder traduzca por mí.",
          },
        ],
      },
      {
        id: 3,
        category: "confidence",
        question:
          'Durante la resolución de problemas en vivo, ¿con qué frecuencia usas la frase "Déjame volver contigo" para evitar hablar bajo presión?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Nunca—Tengo la confianza suficiente para resolver problemas en vivo en inglés.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Rara vez—Solo cuando el problema es genuinamente complejo y requiere investigación.",
          },
          {
            index: 2,
            score: 3,
            label:
              "A menudo—Tengo miedo de decir algo incorrecto, así que prefiero enviar un correo.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Siempre—Evito las llamadas de voz para no ser puesto en aprietos.",
          },
        ],
      },
      {
        id: 4,
        category: "negotiation",
        question:
          'Cuando un cliente presiona por cambios en el alcance (scope creep), ¿tienes el matiz lingüístico para decir "no" sin sonar grosero?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Sí—Puedo ser firme y diplomático en inglés, protegiendo mis límites.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Inconsistentemente—Intento rechazar, pero a menudo cedo porque no encuentro las palabras educadas en el momento.",
          },
          {
            index: 2,
            score: 3,
            label:
              'No—Digo "sí" en la reunión para evitar la incomodidad de discutir en un segundo idioma.',
          },
          {
            index: 3,
            score: 0,
            label:
              "Solo Escalación—Me falta vocabulario para negociar; necesito que mi gerente intervenga.",
          },
        ],
      },
      {
        id: 5,
        category: "confidence",
        question:
          "Si te ves obligado a liderar una reunión importante con un cliente tú solo, ¿cómo te sientes?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Seguro—Puedo dirigir la conversación estratégica y manejar imprevistos.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Nervioso pero Capaz—Puedo con la agenda, pero me aterra la sesión de preguntas y respuestas.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Mucha Ansiedad—Sufro durante la reunión, y sé que el cliente nota mi duda.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Pánico—Intentaría reprogramar para evitar hablar solo con el cliente.",
          },
        ],
      },
      {
        id: 6,
        category: "cultural",
        question:
          '¿Qué tan cómodo te sientes con el "Small Talk" y las referencias culturales (deportes, días festivos)?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Muy cómodo—Actúo como un asesor de confianza y platico sobre la vida naturalmente.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Algo cómodo—Lo intento, pero mi conversación se siente rígida o ensayada.",
          },
          {
            index: 2,
            score: 3,
            label:
              'Incómodo—Me limito estrictamente a lo técnico para evitar el "inglés social".',
          },
          {
            index: 3,
            score: 0,
            label:
              "Invisible—Los clientes me tratan solo como un ejecutor porque no he creado una conexión personal.",
          },
        ],
      },
    ],

    gapDefinitions: {
      clarity: {
        name: "Comunicación Clara",
        lowScoreImpact:
          "Los malentendidos frenan proyectos y dañan tu reputación. Los clientes cuestionan tu experiencia técnica no porque te falten habilidades, sino porque tus explicaciones no llegan.",
        recommendation:
          'Mi consejo: Practica explicar conceptos técnicos empezando por el "resumen ejecutivo". Grábate y refina hasta eliminar la jerga.',
        urgency: "high",
      },
      confidence: {
        name: "Seguridad en Tiempo Real",
        lowScoreImpact:
          'Decir "Te respondo después" mata tu autoridad. Los clientes interpretan la duda como incompetencia, aunque solo estés procesando el idioma.',
        recommendation:
          "Mi consejo: Construye una biblioteca mental de frases para ganar tiempo con elegancia mientras formulas tu respuesta.",
        urgency: "high",
      },
      "real-time": {
        name: "Comunicación Espontánea",
        lowScoreImpact:
          "No poder pensar y hablar a la vez crea pausas incómodas y reduce tu presencia profesional. Te ves inseguro aunque sepas la respuesta.",
        recommendation:
          'Mi consejo: Practica ejercicios de "pensar en voz alta". Narra tu proceso de solución de problemas en inglés para ganar fluidez.',
        urgency: "medium",
      },
      negotiation: {
        name: "Negociación y Persuasión",
        lowScoreImpact:
          'Si no sabes defender tu postura, terminas con "burnout". Aceptas fechas imposibles porque discutir en inglés se siente demasiado arriesgado.',
        recommendation:
          "Mi consejo: Ensaya guiones de negociación hasta que defender tus límites se sienta natural. Practica escenarios difíciles.",
        urgency: "medium",
      },
      cultural: {
        name: "Fluidez Cultural y Rapport",
        lowScoreImpact:
          "Las relaciones se quedan frías. Pierdes la oportunidad de generar confianza o de convertirte en un socio estratégico.",
        recommendation:
          "Mi consejo: Estudia las normas de la cultura de negocios de EE.UU. Practica cómo iniciar una charla casual sin miedo.",
        urgency: "low",
      },
    },

    results: {
      impactTitle: "El Costo para Tu Carrera",
      tiers: {
        "Credibility Gap": {
          title: "La Trampa del Técnico",
          description:
            "Tus habilidades técnicas dicen 'Arquitecto Senior', pero tu inglés dice 'Desarrollador Junior'. Esta brecha te está costando ascensos. Ves a ingenieros menos talentosos subir de puesto solo porque saben 'vender' sus ideas en inglés, mientras tú te quedas estancado en la ejecución.",
        },
        "Passive Proficiency": {
          title: "El Techo Invisible",
          description:
            "Entiendes casi todo, pero te cuesta que te escuchen. Tienes grandes ideas, pero en las reuniones te quedas callado porque no encuentras las palabras rápido. Eres confiable, pero no tienes la 'visibilidad' para ser líder.",
        },
        "Executive Presence": {
          title: "Listo para el Escenario Global",
          description:
            "Tienes el nivel técnico y de comunicación para liderar equipos internacionales. Enfócate en pulir tu presencia ejecutiva para comandar mejores tarifas y roles senior.",
        },
      },
      eliteComparison: {
        title: "Los 5 Hábitos que veo en el Top 1% de Líderes",
        items: [
          "No solo informan; venden una visión. Traducen detalles complejos en una narrativa estratégica que impulsa decisiones.",
          "Navegan la fricción con tacto. Pueden decir 'no' a un CEO o estar en desacuerdo con un cliente sin sonar agresivos. Dominan el 'Inglés Diplomático'.",
          "Piensan en inglés, no traducen. Manejan preguntas rápidas sin esa pausa de 'cargando...'. Sus respuestas se sienten inmediatas y con autoridad.",
          "Controlan la narrativa en crisis. Si un proyecto falla, giran la conversación con seguridad en lugar de solo disculparse.",
          "Usan su personalidad como superpoder. No se vuelven 'robots' en inglés. Usan el humor y la empatía para generar confianza.",
        ],
      },
      cta: {
        title: "¿Listo para mejorar tu inglés rápido?",
        subtext: "Plática breve. Personal. Sin presión.",
        buttonText: "👉 Agendar una sesión conmigo",
        footerText: "",
      },
    },
  },
};
