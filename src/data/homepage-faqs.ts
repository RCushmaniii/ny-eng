/**
 * Homepage FAQ Data
 *
 * Single source of truth for FAQs displayed on homepage
 * Curated selection of the most important questions for first-time visitors
 */

export interface HomepageFAQ {
  question: string;
  answer: string;
}

export interface HomepageFAQData {
  en: {
    title: string;
    subtitle: string;
    faqs: HomepageFAQ[];
    ctaText: string;
    ctaLink: string;
  };
  es: {
    title: string;
    subtitle: string;
    faqs: HomepageFAQ[];
    ctaText: string;
    ctaLink: string;
  };
}

export const homepageFAQs: HomepageFAQData = {
  en: {
    title: "Common Questions",
    subtitle: "Everything you need to know before we talk",
    faqs: [
      {
        question: "What is the investment for coaching?",
        answer:
          "The current rate is 500 MXN ($30 USD) per session or 6,000 MXN ($360 USD) for a 12-session executive roadmap. Every session is custom-built around your specific industry, upcoming presentations, and professional goals. This isn't a curriculum you follow — it's a strategy built around your calendar.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "You'll feel a shift in confidence and clarity immediately after your first strategy session. For measurable changes in fluency and executive presence, most clients see significant ROI within the 12-session roadmap. I don't aim for 'perfect grammar' in 5 years — I aim for 'effective leadership communication' in 3 months.",
      },
      {
        question: "Do you work with teams or individuals?",
        answer:
          "Both. Private 1-on-1 coaching is for leaders who need confidentiality and precision — 500 MXN per session, built around your own meetings and presentations. For teams there is a structured 12-week corporate program: individual preparation, a presentation delivered in English in front of the leadership group, an initial and final assessment, written monthly assessments and a consolidated report for HR — 600 MXN per session per participant, invoiced with a Mexican factura. You will find it under Corporate in the menu.",
      },
      {
        question: "How is this different from traditional English classes?",
        answer:
          "Traditional classes focus on textbooks and grammar rules. I focus on your reality — your actual emails, your slide decks, and your upcoming meeting agendas become the learning materials. I simulate your high-pressure scenarios so you can perform when it counts.",
      },
      {
        question: "What's included in the complimentary strategy session?",
        answer:
          "This is a diagnostic call, not a sales pitch. I'll assess your current communication gaps, identify your highest-impact language goals, and outline a 30-day roadmap to address them. You'll leave with a clear plan, whether you decide to work with me or not.",
      },
    ],
    ctaText: "Still have questions?",
    ctaLink: "/en/faqs/",
  },
  es: {
    title: "Preguntas Frecuentes",
    subtitle: "Todo lo que necesitas saber antes de hablar",
    faqs: [
      {
        question: "¿Cuál es la inversión para el coaching?",
        answer:
          "La tarifa actual es de 500 MXN por sesión privada de 60 minutos o 6,000 MXN por un plan ejecutivo de 12 sesiones. Trabajamos con tus juntas, presentaciones, entrevistas, negociaciones y mensajes reales. No sigues un temario genérico: cada sesión se construye alrededor de tu rol, tu industria y tu próximo reto profesional.",
      },
      {
        question: "¿Cuánto tiempo toma ver resultados?",
        answer:
          "Sentirás un cambio en confianza y claridad inmediatamente después de tu primera sesión estratégica. Para cambios medibles en fluidez y presencia ejecutiva, la mayoría de los clientes ven un ROI significativo dentro del plan de 12 sesiones. No apunto a 'gramática perfecta' en 5 años — apunto a 'comunicación de liderazgo efectiva' en 3 meses.",
      },
      {
        question: "¿Trabajas con equipos o individuos?",
        answer:
          "Ambos. El coaching privado 1-a-1 es para líderes que necesitan confidencialidad y precisión — 500 MXN por sesión, construido alrededor de tus propias juntas y presentaciones. Para equipos hay un programa corporativo estructurado de 12 semanas: preparación individual, una presentación en inglés frente al grupo de liderazgo, evaluación inicial y final, evaluaciones mensuales por escrito y un reporte consolidado para RH — 600 MXN por sesión por participante, con factura mexicana. Lo encuentras en el menú, bajo Corporativo.",
      },
      {
        question: "¿En qué se diferencia esto de las clases de inglés tradicionales?",
        answer:
          "Las clases tradicionales se enfocan en libros de texto y reglas gramaticales. Yo me enfoco en tu realidad — tus correos reales, tus presentaciones y tus agendas de reuniones próximas se convierten en los materiales de aprendizaje. Simulo tus escenarios de alta presión para que puedas rendir cuando cuenta.",
      },
      {
        question: "¿Qué incluye el diagnóstico de 30 minutos?",
        answer:
          "Revisaremos la situación profesional en la que más necesitas comunicarte mejor, identificaremos la brecha de mayor impacto y veremos si mi enfoque es adecuado para ti. Es una conversación directa, sin costo y sin compromiso.",
      },
    ],
    ctaText: "¿Aún tienes preguntas?",
    ctaLink: "/es/faqs/",
  },
};
