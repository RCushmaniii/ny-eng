export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
  main_es: {
    id: 'main_es',
    faqs: [
      {
        question: "¿Qué niveles y perfiles atiendes?",
        answer: "Trabajo con estudiantes de nivel intermedio y avanzado: profesionales ocupados en negocios, derecho, medicina, logística, ingeniería, etc. No enseño a principiantes absolutos."
      },
      {
        question: "¿Qué cubren tus clases?",
        answer: "Hablar inglés con confianza; escenarios laborales: reuniones, presentaciones, llamadas con clientes; pronunciación, frases y tono profesional; preparación para entrevistas y comunicación empresarial general."
      },
      {
        question: "¿Cómo funcionan las clases?",
        answer: "Sesiones privadas de 60 minutos en línea por Google Meet; calentamiento, práctica dirigida, retroalimentación inmediata y small talk; notas PDF personalizadas después de cada clase."
      },
      {
        question: "¿Cómo agendo o reprogramo una clase?",
        answer: "Solo mándame un mensaje por WhatsApp, escríbeme un correo o llama directamente. Por favor avisa con al menos 24 horas de anticipación para evitar cargos."
      },
      {
        question: "¿Cuánto cuesta el coaching?",
        answer: "Alumnos en México: 500 MXN por hora; Alumnos en USA: 25 USD por hora."
      },
      {
        question: "¿Ofreces capacitación para líderes senior?",
        answer: "Sí, diseño talleres personalizados y sesiones privadas para altos directivos. Contáctame para una propuesta y precios."
      },
      {
        question: "¿Qué tan rápido veré resultados?",
        answer: "La mayoría ve progreso claro en 3–5 sesiones. La mejora depende de la práctica fuera de clase, frecuencia de las lecciones, disciplina y tus objetivos personales."
      },
      {
        question: "¿Cuál es tu política de cancelación y pago?",
        answer: "Espero hasta 15 minutos después de la hora de inicio; después de eso, se considera inasistencia y aplica el cobro. Las cancelaciones requieren 24 horas de aviso. El pago (individual) es antes de cada sesión vía transferencia o Zelle. Para empresas, se puede facturar mensualmente."
      }
    ]
  },
    main: {
        id: 'main',
        faqs: [
            {
              question: "What levels and backgrounds do you teach?",
              answer: "I work with intermediate and advanced learners—busy professionals in business, law, medicine, logistics, engineering, etc. I don’t teach absolute beginners."
            },
            {
              question: "What do your lessons cover?",
              answer: "Speaking English with confidence; work scenarios: meetings, presentations, client calls; pronunciation, phrasing, and professional tone; interview prep and general business communication."
            },
            {
              question: "How do classes work?",
              answer: "Private 60-minute sessions online via Google Meet; warm-up, targeted practice, on-the-spot feedback, and small talk; customized PDF notes delivered after each class."
            },
            {
              question: "How do I schedule or reschedule a lesson?",
              answer: "Simply send me a message on WhatsApp, email me, or call directly. Please give at least 24 hours’ notice to avoid any fees."
            },
            {
              question: "How much does coaching cost?",
              answer: "Students in Mexico: 500 MXN per hour; Students in the USA: 25 USD per hour."
            },
            {
              question: "Do you offer training for senior leadership?",
              answer: "Yes—I design custom workshops and private coaching sessions for senior leaders. Contact me for a proposal and pricing."
            },
            {
              question: "How fast will I improve?",
              answer: "Most students see clear progress within 3–5 sessions. Improvement depends on practice outside class, lesson frequency, self-discipline, and your personal goals."
            },
            {
              question: "What is your cancellation and payment policy?",
              answer: "I wait up to 15 minutes after the start time; after that the lesson is a no-show and the fee applies. Cancellations require 24 hours’ notice. Payment (individuals) is due before each session via Zelle or bank transfer. Monthly invoicing is available for companies."
            }
          ]
          
    }
};
