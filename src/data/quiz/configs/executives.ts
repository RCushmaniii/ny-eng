import type { QuizConfig } from "../types";

export const executivesConfig: QuizConfig = {
  quizId: "executives",

  en: {
    title: "Executive Communication Confidence Assessment",
    subtitle:
      "Find out how your communication style impacts boardroom trust, deal velocity, and your ability to lead at the highest level.",

    questions: [
      {
        id: 1,
        category: "clarity",
        question:
          "When you present to senior leadership in English, how often do you need to clarify what you meant afterward?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Almost never—my message lands clearly the first time",
          },
          {
            index: 1,
            score: 6,
            label:
              "Occasionally—there are minor clarifications but no confusion",
          },
          {
            index: 2,
            score: 3,
            label:
              "Regularly—people ask follow-up questions because they didn\'t fully get it",
          },
          {
            index: 3,
            score: 0,
            label:
              "Frequently—people leave with different interpretations of the same message",
          },
        ],
      },
      {
        id: 2,
        category: "clarity",
        question:
          "When you present complex data or technical details in English, what usually happens?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "People immediately get it and often reuse my framing when they explain it to others.",
          },
          {
            index: 1,
            score: 6,
            label:
              "People generally understand me, but they rarely reuse my language or framing.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Some audiences follow, while others get lost in the details or stop tracking.",
          },
          {
            index: 3,
            score: 0,
            label:
              "People ask for a “simpler version” or someone else has to reframe it in non-technical terms.",
          },
        ],
      },
      {
        id: 3,
        category: "confidence",
        question:
          "When the pressure mounts during a high-stakes meeting or presentation in English, who is controlling the pace of the conversation?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "I own the room—I remain calm in English, dictate the pace, and pivot easily under pressure.",
          },
          {
            index: 1,
            score: 6,
            label:
              "I hold my ground—I might get interrupted, but I can steer the conversation back to my agenda without language getting in the way.",
          },
          {
            index: 2,
            score: 3,
            label:
              "I get pushed around—aggressive stakeholders hijack the meeting, and I struggle to get a word in because I'm processing in a second language.",
          },
          {
            index: 3,
            score: 0,
            label:
              "I shut down—the language pressure makes me hesitate or over-explain, and my authority evaporates.",
          },
        ],
      },
      {
        id: 4,
        category: "negotiation",
        question:
          "When a strategic partner or enterprise client pushes back on terms, how do you handle the friction in English?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Seamlessly—I can be firm on the numbers while keeping the tone warm and collaborative.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Functionally—I get my point across, but I lack the nuance I have in my native language.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Hesitantly—I often agree to small concessions just to avoid a complex debate in English.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Frustratingly—I know exactly what to say in my head, but I can't find the right words in the moment.",
          },
        ],
      },
      {
        id: 5,
        category: "real-time",
        question:
          'The presentation is over, and the floor is open for Q&A. How do you handle the "off-script" moments in English?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Effortlessly—I actually prefer the Q&A; I can joke, pivot, and build rapport easily.",
          },
          {
            index: 1,
            score: 6,
            label:
              'Competently—I can handle the questions, but I lose a bit of the "polish" I had during the presentation.',
          },
          {
            index: 2,
            score: 3,
            label:
              "Rigidly—I feel exposed without my slides; I try to give short answers or steer back to the data.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Anxiously—I dread the Q&A; I worry I won't understand a question or won't find the right words fast enough.",
          },
        ],
      },
      {
        id: 6,
        category: "cultural",
        question:
          "Do you feel your true personality and charisma translate fully when engaging with North American stakeholders?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Fully—I can joke, use nuance, and build deep connections just as easily as I do in my native language.",
          },
          {
            index: 1,
            score: 6,
            label:
              'Mostly—I can build trust, but I struggle to show my humor or handle "small talk" naturally.',
          },
          {
            index: 2,
            score: 3,
            label:
              'It\'s Muted—I feel like a "boring version" of myself; I stick to business topics to avoid awkwardness.',
          },
          {
            index: 3,
            score: 0,
            label:
              "It's Blocked—I feel like a completely different person in English—stiff, serious, and purely transactional.",
          },
        ],
      },
    ],

    gapDefinitions: {
      clarity: {
        name: "Strategic Clarity",
        lowScoreImpact:
          "If your message is hard to follow, people don't just miss details—they lose confidence in your judgment. Confused stakeholders delay decisions, ask for more decks, and quietly downgrade your influence.",
        recommendation:
          "Build a simple narrative spine for every high‑stakes conversation: context → core recommendation → 2–3 reasons → clear next step. Practice saying it out loud in under 60 seconds.",
        urgency: "high",
      },
      confidence: {
        name: "Executive Presence & Confidence",
        lowScoreImpact:
          "Hesitation, over‑explaining, or shrinking under pressure makes strong ideas look weak. People buy your conviction before they buy your strategy.",
        recommendation:
          "Rehearse short, confident responses to the 5–7 hardest questions you fear most. Record yourself, refine your posture and tone, and focus on sounding decisive even when you're still thinking.",
        urgency: "high",
      },
      "real-time": {
        name: "Real‑Time Fluency",
        lowScoreImpact:
          "If you can't think and speak at the same time in English, you end up reacting instead of leading. Critical moments pass while you search for words instead of shaping the direction.",
        recommendation:
          "Run short daily drills where you explain a decision, risk, or trade‑off out loud with no notes for 60–90 seconds. The goal is flow, not perfection.",
        urgency: "medium",
      },
      negotiation: {
        name: "Strategic Negotiation",
        lowScoreImpact:
          "Weak language in negotiation turns “small concessions” into expensive precedents. Over time, this erodes margins, burns out teams, and trains partners to keep pushing.",
        recommendation:
          "Prepare 2–3 strong boundary phrases in English (for scope, price, and timeline) and practice saying them until they feel natural, not aggressive.",
        urgency: "medium",
      },
      cultural: {
        name: "Cultural Fluency & Executive Rapport",
        lowScoreImpact:
          "If conversations never move beyond the agenda, you stay as “the operator,” not the strategic peer. That limits trust, referrals, and long‑term deals.",
        recommendation:
          "Study how senior North American leaders open and close meetings, handle small talk, and use humor. Pick 1–2 behaviors to intentionally mirror in your next few calls.",
        urgency: "low",
      },
    },

    results: {
      impactTitle: "The Cost to Your Leadership",
      tiers: {
        "Credibility Gap": {
          title: "The Authority Gap",
          description:
            "You command respect in your native language, but in English, you shrink. Colleagues sense hesitation. Senior stakeholders talk over you. The gap between your actual capability and how you're perceived is costing you deals, influence, and the respect you've earned.",
        },
        "Passive Proficiency": {
          title: "The Influence Ceiling",
          description:
            "You can run the meeting, but you're not owning the room. You get your point across, but you're conceding ground you shouldn't—in negotiations and boardroom debates. Your ideas are solid, but they're landing softer than they should because your delivery lacks the executive edge.",
        },
        "Executive Presence": {
          title: "Global Command",
          description:
            "You have the communication foundation to lead globally. The opportunity now is refinement—mastering the subtle art of executive presence that separates respected leaders from legendary ones. Small adjustments in how you handle pressure can unlock significantly higher influence.",
        },
      },
      eliteComparison: {
        title: "The 5 Habits I See in the Top 1% of Leaders",
        items: [
          "They think in English under pressure—no translation delay, no buffering, just immediate, authoritative responses that command respect.",
          "They control the room's energy. When challenged, they don't defend—they redirect. Their calm confidence makes aggressive stakeholders back down.",
          "They negotiate without losing warmth. They can be firm on the numbers while keeping the relationship intact, never sacrificing either.",
          "They turn small talk into strategic advantage. The five minutes before the meeting starts is where trust is built and deals are won.",
          "They sound like themselves in any language. Their personality, humor, and charisma translate fully—they're not a 'muted version' in English.",
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
    title: "Evaluación de Confianza para Ejecutivos",
    subtitle:
      "Descubre cómo tu estilo de comunicación impacta la confianza del consejo, la velocidad de los acuerdos y tu capacidad de liderar al más alto nivel.",

    questions: [
      {
        id: 1,
        category: "clarity",
        question:
          "Cuando presentas ante liderazgo senior en inglés, ¿con qué frecuencia necesitas aclarar lo que quisiste decir después?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Casi nunca—mi mensaje queda claro desde la primera vez",
          },
          {
            index: 1,
            score: 6,
            label: "A veces—hay aclaraciones menores pero no confusión seria",
          },
          {
            index: 2,
            score: 3,
            label:
              "Con regularidad—las personas hacen preguntas de seguimiento porque no lo entendieron del todo",
          },
          {
            index: 3,
            score: 0,
            label:
              "Con frecuencia—las personas salen con interpretaciones distintas del mismo mensaje",
          },
        ],
      },
      {
        id: 2,
        category: "clarity",
        question:
          "¿Qué tan efectivamente traduces detalles complejos (técnicos o financieros) en narrativas simples sobre las que tus stakeholders puedan actuar?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Muy bien—las personas repiten mi marco cuando se lo explican a otros",
          },
          {
            index: 1,
            score: 6,
            label:
              "Generalmente bien—las personas entienden, pero casi nunca reutilizan mi lenguaje",
          },
          {
            index: 2,
            score: 3,
            label:
              "De forma inconsistente—algunas audiencias siguen, otras se pierden en los detalles",
          },
          {
            index: 3,
            score: 0,
            label:
              "Mal—piden una “versión más simple” o alguien más tiene que volver a enmarcarlo",
          },
        ],
      },
      {
        id: 3,
        category: "confidence",
        question:
          "Cuando la presión aumenta durante una reunión de alto nivel o presentación en inglés, ¿quién controla el ritmo de la conversación?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Yo domino la sala—me mantengo calmado en inglés, dicto el ritmo y pivoteo fácilmente bajo presión.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Mantengo mi posición—puedo ser interrumpido, pero puedo dirigir la conversación de vuelta a mi agenda sin que el idioma se interponga.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Me empujan—los stakeholders agresivos secuestran la reunión, y lucho para meter una palabra porque estoy procesando en un segundo idioma.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Me cierro—la presión del idioma me hace dudar o sobre-explicar, y mi autoridad se evapora.",
          },
        ],
      },
      {
        id: 4,
        category: "negotiation",
        question:
          "Cuando un socio estratégico o un cliente enterprise presiona sobre alcance, precio o términos, ¿qué tan efectivamente defiendes tu posición en inglés?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Muy efectivamente—puedo mantenerme firme sin dañar la relación",
          },
          {
            index: 1,
            score: 6,
            label:
              "Razonablemente bien—protejo los temas clave pero cedo más de lo que quisiera",
          },
          {
            index: 2,
            score: 3,
            label:
              "De forma inconsistente—sé lo que quiero decir pero me cuesta expresarlo de forma persuasiva en el momento",
          },
          {
            index: 3,
            score: 0,
            label:
              "Mal—evito la confrontación directa o dependo de que otra persona intervenga",
          },
        ],
      },
      {
        id: 5,
        category: "real-time",
        question:
          "¿Qué tan confiado te sientes liderando discusiones no guionadas en inglés (Q&A, resolución de problemas en vivo, \u201Cuna última pregunta\u201D al final de la reunión)?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Muy confiado—me gustan los momentos no guionados y a menudo los convierto en oportunidades",
          },
          {
            index: 1,
            score: 6,
            label:
              "Moderadamente confiado—prefiero estructura, pero puedo manejar momentos no guionados cuando es necesario",
          },
          {
            index: 2,
            score: 3,
            label:
              "Inseguro—trato de volver a las diapositivas, documentos o puntos preparados",
          },
          {
            index: 3,
            score: 0,
            label:
              "Incómodo—evito situaciones donde puedan ponerme en el spotlight en inglés",
          },
        ],
      },
      {
        id: 6,
        category: "cultural",
        question:
          "¿Qué tan naturalmente construyes rapport con stakeholders senior norteamericanos (liderazgo senior, pares del C‑suite, grandes clientes)?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Muy naturalmente—nos movemos con fluidez entre negocio, estrategia y conversación informal",
          },
          {
            index: 1,
            score: 6,
            label:
              "Algo naturalmente—se genera rapport, pero sigo pensando en “decirlo bien”",
          },
          {
            index: 2,
            score: 3,
            label:
              "Ocasionalmente—tiendo a quedarme en “modo ejecutivo formal” y pierdo pequeños momentos de conexión",
          },
          {
            index: 3,
            score: 0,
            label:
              "Rara vez—las conversaciones se sienten rígidas o puramente transaccionales",
          },
        ],
      },
    ],

    gapDefinitions: {
      clarity: {
        name: "Claridad Estratégica",
        lowScoreImpact:
          "Si tu mensaje es difícil de seguir, las personas no solo pierden detalles—pierden confianza en tu criterio. Los stakeholders demoran decisiones, piden más presentaciones y reducen silenciosamente tu influencia.",
        recommendation:
          "Mi Consejo: Construye una columna vertebral narrativa simple: contexto → recomendación → razones → siguiente paso. Practica decirlo en menos de 60 segundos.",
        urgency: "high",
      },
      confidence: {
        name: "Presencia Ejecutiva y Confianza",
        lowScoreImpact:
          "La vacilación, las explicaciones demasiado largas o reducirte bajo presión hacen que ideas fuertes parezcan débiles. Las personas compran tu convicción antes de comprar tu estrategia.",
        recommendation:
          "Mi Consejo: Ensaya respuestas cortas y seguras para las preguntas difíciles. Enfócate en sonar decisivo incluso mientras sigues pensando.",
        urgency: "high",
      },
      "real-time": {
        name: "Fluidez en Tiempo Real",
        lowScoreImpact:
          "Si no puedes pensar y hablar al mismo tiempo en inglés, terminas reaccionando en lugar de liderar. Los momentos críticos pasan mientras buscas palabras en lugar de marcar la dirección.",
        recommendation:
          "Mi Consejo: Haz ejercicios diarios donde expliques una decisión difícil en voz alta sin notas durante 90 segundos.",
        urgency: "medium",
      },
      negotiation: {
        name: "Negociación Estratégica",
        lowScoreImpact:
          "Un lenguaje débil en negociación convierte “pequeñas concesiones” en precedentes costosos. Con el tiempo, erosiona márgenes, desgasta equipos y entrena a los socios a seguir presionando.",
        recommendation:
          "Mi Consejo: Prepara frases fuertes de límites en inglés (para alcance y precio) y practícalas hasta que se sientan naturales.",
        urgency: "medium",
      },
      cultural: {
        name: "Fluidez Cultural y Rapport Ejecutivo",
        lowScoreImpact:
          "Si las conversaciones nunca van más allá de la agenda, te quedas como “el operador”, no como par estratégico. Eso limita la confianza, las referencias y los acuerdos a largo plazo.",
        recommendation:
          "Mi Consejo: Observa cómo líderes norteamericanos abren reuniones y usan el humor. Elige 1–2 comportamientos para replicar en tus próximas llamadas.",
        urgency: "low",
      },
    },

    results: {
      impactTitle: "El Costo para Tu Liderazgo",
      tiers: {
        "Credibility Gap": {
          title: "La Brecha de Autoridad",
          description:
            "Dominas el respeto en tu idioma, pero en inglés te haces pequeño. Los colegas notan la duda. Los stakeholders senior te interrumpen. Esta brecha entre tu capacidad real y cómo eres percibido te está costando acuerdos, influencia y el respeto que mereces.",
        },
        "Passive Proficiency": {
          title: "El Techo de Influencia",
          description:
            "Puedes llevar la reunión, pero no dominas la sala. Transmites tu punto, pero cedes terreno que no deberías. Tus ideas son sólidas, pero aterrizan más suaves de lo que deberían porque a tu entrega le falta el filo ejecutivo.",
        },
        "Executive Presence": {
          title: "Mando Global",
          description:
            "Tienes la base para liderar globalmente. La oportunidad ahora es el refinamiento: dominar el arte sutil de la presencia ejecutiva. Pequeños ajustes en cómo manejas la presión pueden desbloquear una influencia significativamente mayor.",
        },
      },
      eliteComparison: {
        title: "Los 5 Hábitos que veo en el Top 1% de Líderes",
        items: [
          "Piensan en inglés bajo presión—sin retraso de traducción, respuestas inmediatas y con autoridad.",
          "Controlan la energía de la sala. Cuando son desafiados, no se defienden: redirigen con calma.",
          "Negocian sin perder la calidez. Pueden ser firmes con los números manteniendo la relación intacta.",
          "Convierten el 'Small Talk' en ventaja estratégica. Los cinco minutos antes de la reunión es donde se gana la confianza.",
          "Suenan como ellos mismos. Su personalidad y humor se traducen completamente; no son una 'versión aburrida' en inglés.",
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
