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
          "Both. I provide 1-on-1 Executive Coaching for C-Suite leaders and Directors who need confidentiality and precision. I also lead Corporate Training for IT and Engineering teams who need to bridge the gap between technical code and business communication.",
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
          "La tarifa actual es de 500 MXN ($30 USD) por sesión o 6,000 MXN ($360 USD) por un plan ejecutivo de 12 sesiones. Cada sesión está diseñada a medida en torno a tu industria específica, tus próximas presentaciones y tus objetivos profesionales. Esto no es un plan de estudios que sigues — es una estrategia construida en torno a tu calendario.",
      },
      {
        question: "¿Cuánto tiempo toma ver resultados?",
        answer:
          "Sentirás un cambio en confianza y claridad inmediatamente después de tu primera sesión estratégica. Para cambios medibles en fluidez y presencia ejecutiva, la mayoría de los clientes ven un ROI significativo dentro del plan de 12 sesiones. No apunto a 'gramática perfecta' en 5 años — apunto a 'comunicación de liderazgo efectiva' en 3 meses.",
      },
      {
        question: "¿Trabajas con equipos o individuos?",
        answer:
          "Ambos. Proporciono Coaching Ejecutivo 1-a-1 para líderes de C-Suite y Directores que necesitan confidencialidad y precisión. También dirijo Capacitación Corporativa para equipos de TI e Ingeniería que necesitan cerrar la brecha entre código técnico y comunicación de negocios.",
      },
      {
        question:
          "¿En qué se diferencia esto de las clases de inglés tradicionales?",
        answer:
          "Las clases tradicionales se enfocan en libros de texto y reglas gramaticales. Yo me enfoco en tu realidad — tus correos reales, tus presentaciones y tus agendas de reuniones próximas se convierten en los materiales de aprendizaje. Simulo tus escenarios de alta presión para que puedas rendir cuando cuenta.",
      },
      {
        question: "¿Qué incluye la sesión estratégica de cortesía?",
        answer:
          "Esta es una llamada de diagnóstico, no un discurso de ventas. Evaluaré tus brechas de comunicación actuales, identificaré tus objetivos de lenguaje de mayor impacto y delinearé un plan de 30 días para abordarlos. Saldrás con un plan claro, decidas trabajar conmigo o no.",
      },
    ],
    ctaText: "¿Aún tienes preguntas?",
    ctaLink: "/es/faqs/",
  },
};
