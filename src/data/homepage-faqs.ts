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
          "The current rate is 500 MXN ($25 USD) per session or 6,000 MXN ($300 USD) for a 12-session executive roadmap. Why no volume discounts? Unlike standard English tutors who follow a generic script, I operate as your strategic communication partner. Every session is custom-built around your specific industry KPIs, upcoming board presentations, and negotiation targets. You aren't just paying for 'classes'; you are investing in the executive presence needed to close deals.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "You will feel a shift in confidence and clarity immediately after our first strategy session. For measurable changes in fluency and executive presence, most clients see significant ROI within the 12-session roadmap. We don't aim for 'perfect grammar' in 5 years; we aim for 'effective leadership communication' in 3 months.",
      },
      {
        question: "Do you work with teams or individuals?",
        answer:
          "Both. I provide 1-on-1 Executive Coaching for C-Suite leaders and Directors who need confidentiality and precision. I also lead Corporate Training for IT and Engineering teams who need to bridge the gap between technical code and business communication.",
      },
      {
        question: "How is this different from traditional English classes?",
        answer:
          "Traditional classes focus on textbooks and grammar rules. We focus on your reality. We use your actual emails, your slide decks, and your upcoming meeting agendas as our learning materials. We simulate your high-pressure scenarios so you can perform when it counts.",
      },
      {
        question: "What's included in the complimentary strategy session?",
        answer:
          "This is a diagnostic call, not a sales pitch. We will assess your current communication gaps, identify your 'money-making' language goals, and outline a 30-day roadmap to fix them. You will leave with a clear plan, whether you decide to hire me or not.",
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
          "La tarifa actual es de 500 MXN ($25 USD) por sesión o 6,000 MXN ($300 USD) por un plan ejecutivo de 12 sesiones. ¿Por qué no hay descuentos por volumen? A diferencia de los tutores de inglés estándar que siguen un guion genérico, yo opero como tu socio estratégico de comunicación. Cada sesión está construida a medida en torno a tus KPIs específicos de la industria, tus próximas presentaciones ante la junta y tus objetivos de negociación. No solo estás pagando por 'clases'; estás invirtiendo en la presencia ejecutiva necesaria para cerrar tratos.",
      },
      {
        question: "¿Cuánto tiempo toma ver resultados?",
        answer:
          "Sentirás un cambio en confianza y claridad inmediatamente después de nuestra primera sesión estratégica. Para cambios medibles en fluidez y presencia ejecutiva, la mayoría de los clientes ven un ROI significativo dentro del plan de 12 sesiones. No apuntamos a 'gramática perfecta' en 5 años; apuntamos a 'comunicación de liderazgo efectiva' en 3 meses.",
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
          "Las clases tradicionales se enfocan en libros de texto y reglas gramaticales. Nosotros nos enfocamos en tu realidad. Usamos tus correos reales, tus presentaciones y tus agendas de reuniones próximas como materiales de aprendizaje. Simulamos tus escenarios de alta presión para que puedas rendir cuando cuenta.",
      },
      {
        question: "¿Qué incluye la sesión estratégica de cortesía?",
        answer:
          "Esta es una llamada de diagnóstico, no un discurso de ventas. Evaluaremos tus brechas de comunicación actuales, identificaremos tus objetivos de lenguaje 'generadores de dinero' y delinearemos un plan de 30 días para solucionarlos. Saldrás con un plan claro, decidas contratarme o no.",
      },
    ],
    ctaText: "¿Aún tienes preguntas?",
    ctaLink: "/es/faqs/",
  },
};
