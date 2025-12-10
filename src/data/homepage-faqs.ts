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
        question: "What is the cost of your coaching?",
        answer:
          "Current Rate: 500 MXN ($25 USD) per session. 12-Session Package: 6,000 MXN / $300 USD. Why this is different from standard English classes: Most English classes focus on generic grammar and textbook scenarios. I operate as your strategic communication partner. We work directly on your real-world challenges: your upcoming board presentation, your salary negotiation, or your client emails. Every session is fully customized to your industry and your specific KPIs. You aren't just learning English; you are acquiring the executive presence needed to close deals and advance your career. Because of the high level of customization and preparation required for this level of coaching, I do not offer volume discounts.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Most students see clear progress within 5–8 sessions: faster response times in meetings, more confident negotiation, and the ability to 'own the room' without translating in their head. The speed depends on your practice outside of sessions, lesson frequency, and specific goals.",
      },
      {
        question: "Do you work with teams or individuals?",
        answer:
          "Both. I work with individual professionals who want to advance their careers, and I design custom training programs for teams and companies. Whether it's one-on-one executive coaching or a team workshop, the approach is tailored to your specific needs.",
      },
      {
        question: "How is this different from traditional English classes?",
        answer:
          "Traditional ESL courses focus on grammar rules and vocabulary lists. I focus on real-time performance under pressure—handling Q&A, negotiating in English, and projecting authority in high-stakes meetings. You won't be memorizing verb tenses; you'll be practicing the exact scenarios you face at work.",
      },
      {
        question: "What if my team is in different time zones?",
        answer:
          "I work with clients across North America and Latin America. Sessions are conducted online via Google Meet, making it easy to coordinate across time zones. We'll find a schedule that works for your team.",
      },
      {
        question: "What's included in the free consultation?",
        answer:
          "A 15-minute conversation where we discuss your specific challenges, goals, and timeline. No pitch, no pressure—just an honest assessment of whether this approach is right for you. You'll walk away with clarity on your next steps, whether you work with me or not.",
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
        question: "¿Cuál es el costo de tu coaching?",
        answer:
          "Tarifa Actual: 500 MXN ($25 USD) por sesión. Paquete de 12 Sesiones: 6,000 MXN / $300 USD. Por qué esto es diferente de las clases de inglés estándar: La mayoría de las clases de inglés se enfocan en gramática genérica y escenarios de libros de texto. Yo opero como tu socio estratégico de comunicación. Trabajamos directamente en tus desafíos del mundo real: tu próxima presentación ante la junta, tu negociación salarial o tus correos con clientes. Cada sesión está completamente personalizada para tu industria y tus KPIs específicos. No solo estás aprendiendo inglés; estás adquiriendo la presencia ejecutiva necesaria para cerrar tratos y avanzar en tu carrera. Debido al alto nivel de personalización y preparación requerido para este nivel de coaching, no ofrezco descuentos por volumen.",
      },
      {
        question: "¿Cuánto tiempo toma ver resultados?",
        answer:
          "La mayoría de los estudiantes ven progreso claro en 5–8 sesiones: tiempos de respuesta más rápidos en reuniones, negociación más confiada y la capacidad de 'dominar la sala' sin traducir en su cabeza. La velocidad depende de tu práctica fuera de las sesiones, frecuencia de lecciones y objetivos específicos.",
      },
      {
        question: "¿Trabajas con equipos o individuos?",
        answer:
          "Ambos. Trabajo con profesionales individuales que quieren avanzar en sus carreras, y diseño programas de capacitación personalizados para equipos y empresas. Ya sea coaching ejecutivo uno a uno o un taller de equipo, el enfoque se adapta a tus necesidades específicas.",
      },
      {
        question:
          "¿En qué se diferencia esto de las clases de inglés tradicionales?",
        answer:
          "Los cursos de ESL tradicionales se enfocan en reglas gramaticales y listas de vocabulario. Yo me enfoco en el desempeño en tiempo real bajo presión—manejar preguntas y respuestas, negociar en inglés y proyectar autoridad en reuniones de alto riesgo. No memorizarás tiempos verbales; practicarás los escenarios exactos que enfrentas en el trabajo.",
      },
      {
        question: "¿Qué pasa si mi equipo está en diferentes zonas horarias?",
        answer:
          "Trabajo con clientes en toda Norteamérica y Latinoamérica. Las sesiones se realizan en línea por Google Meet, lo que facilita la coordinación entre zonas horarias. Encontraremos un horario que funcione para tu equipo.",
      },
      {
        question: "¿Qué incluye la consulta gratuita?",
        answer:
          "Una conversación de 15 minutos donde discutimos tus desafíos específicos, objetivos y cronograma. Sin ventas, sin presión—solo una evaluación honesta de si este enfoque es adecuado para ti. Saldrás con claridad sobre tus próximos pasos, trabajes conmigo o no.",
      },
    ],
    ctaText: "¿Aún tienes preguntas?",
    ctaLink: "/es/faqs/",
  },
};
