export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqSection {
    title: string;
    description?: string;
    faqs: FaqItem[];
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export interface SegmentedFaqList {
    id: string;
    sections: FaqSection[];
}

export const faqLists: Record<string, FaqList> = {
  comprehensive_es: {
    id: 'comprehensive_es',
    faqs: [
      {
        question: "¿Cuánto cuesta el coaching?",
        answer: "Alumnos en México: 500 MXN por hora; Alumnos en USA: 25 USD por hora."
      },
      {
        question: "¿Proporcionas facturas para empresas?",
        answer: "Sí—proporciono facturas profesionales para clientes corporativos. Las empresas se facturan mensualmente al final de cada mes por todas las sesiones completadas."
      },
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
        question: "¿Cuál es tu política de cancelación?",
        answer: "Las cancelaciones o reprogramaciones requieren al menos un día hábil de aviso. El pago es antes de cada sesión (individuos) o facturación mensual para empresas."
      },
      {
        question: "¿Qué tan rápido veré resultados?",
        answer: "La mayoría ve progreso claro en 3–5 sesiones. La mejora depende de la práctica fuera de clase, frecuencia de las lecciones, disciplina y tus objetivos personales."
      },
      {
        question: "¿Cómo agendo o reprogramo una clase?",
        answer: "Solo mándame un mensaje por WhatsApp, escríbeme un correo o llama directamente. Por favor avisa con al menos un día hábil de anticipación."
      },
      {
        question: "¿Ofreces capacitación para líderes senior?",
        answer: "Sí, diseño talleres personalizados y sesiones privadas para altos directivos. Contáctame para una propuesta y precios."
      },
      {
        question: "¿Qué pasa si llego tarde a mi clase?",
        answer: "Espero hasta 15 minutos después de la hora de inicio; después de eso, se considera inasistencia y aplica el cobro completo."
      }
    ]
  },
  main_es: {
    id: 'main_es',
    faqs: [
      {
        question: "¿Cuánto cuesta el coaching?",
        answer: "Alumnos en México: 500 MXN por hora; Alumnos en USA: 25 USD por hora."
      },
      {
        question: "¿Proporcionas facturas para empresas?",
        answer: "Sí—proporciono facturas profesionales para clientes corporativos. Las empresas se facturan mensualmente al final de cada mes por todas las sesiones completadas."
      },
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
        question: "¿Cuál es tu política de cancelación?",
        answer: "Las cancelaciones o reprogramaciones requieren al menos un día hábil de aviso. El pago es antes de cada sesión (individuos) o facturación mensual para empresas."
      }
    ]
  },
    comprehensive: {
        id: 'comprehensive',
        faqs: [
            {
              question: "How much does coaching cost?",
              answer: "Students in Mexico: 500 MXN per hour; Students in the USA: 25 USD per hour."
            },
            {
              question: "Do you provide invoices for companies?",
              answer: "Yes—I provide professional invoices (facturas) for corporate clients. Companies are billed monthly at the end of each month for all sessions completed."
            },
            {
              question: "What levels and backgrounds do you teach?",
              answer: "I work with intermediate and advanced learners—busy professionals in business, law, medicine, logistics, engineering, etc. I don't teach absolute beginners."
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
              question: "What is your cancellation policy?",
              answer: "Cancellations or rescheduling require at least one business day's notice. Payment is due before each session (individuals) or monthly invoicing for companies."
            },
            {
              question: "How fast will I improve?",
              answer: "Most students see clear progress within 3–5 sessions. Improvement depends on practice outside class, lesson frequency, self-discipline, and your personal goals."
            },
            {
              question: "How do I schedule or reschedule a lesson?",
              answer: "Simply send me a message on WhatsApp, email me, or call directly. Please give at least one business day's notice."
            },
            {
              question: "Do you offer training for senior leadership?",
              answer: "Yes—I design custom workshops and private coaching sessions for senior leaders. Contact me for a proposal and pricing."
            },
            {
              question: "What happens if I'm late to my lesson?",
              answer: "I wait up to 15 minutes after the start time; after that the lesson is considered a no-show and the full fee applies."
            }
          ]
    },
    main: {
        id: 'main',
        faqs: [
            {
              question: "How much does coaching cost?",
              answer: "Students in Mexico: 500 MXN per hour; Students in the USA: 25 USD per hour."
            },
            {
              question: "Do you provide invoices for companies?",
              answer: "Yes—I provide professional invoices (facturas) for corporate clients. Companies are billed monthly at the end of each month for all sessions completed."
            },
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
              question: "What is your cancellation policy?",
              answer: "Cancellations or rescheduling require at least one business day's notice. Payment is due before each session (individuals) or monthly invoicing for companies."
            }
          ]
          
    }
};

// Segmented FAQ structure for dedicated FAQ pages
export const segmentedFaqLists: Record<string, SegmentedFaqList> = {
  premium: {
    id: 'premium',
    sections: [
      {
        title: "The Problem & The Solution",
        description: "High-value questions addressing why traditional English training failed you.",
        faqs: [
          {
            question: "How is this different from a traditional ESL course?",
            answer: "Traditional ESL courses focus on grammar rules and vocabulary lists. I focus on real-time performance under pressure—handling Q&A, negotiating in English, and projecting authority in high-stakes meetings. You won't be memorizing verb tenses; you'll be practicing the exact scenarios you face at work."
          },
          {
            question: "Will this help with my accent, or is it just vocabulary?",
            answer: "Both, but the focus is strategic. I help you identify which pronunciation patterns are actually hurting your credibility (most aren't), and we work on clarity and confidence, not erasing your accent. The goal is to be understood and respected, not to sound like a native speaker."
          },
          {
            question: "I know the grammar, but I freeze under pressure. How do you fix that?",
            answer: "This is a performance issue, not a knowledge issue. We use high-pressure simulation drills—rapid-fire Q&A, objection handling, and real-time pivoting—to rewire your brain to think directly in English under stress. It's like athletic training for your communication."
          },
          {
            question: "What kind of results can a C-level executive expect in 90 days?",
            answer: "Most executives see measurable improvement in 3–5 sessions: faster response times in meetings, more confident negotiation, and the ability to 'own the room' without translating in their head. By 90 days, you should be leading high-stakes conversations with the same authority you have in your native language."
          }
        ]
      },
      {
        title: "Program Structure & Outcomes",
        description: "What you'll receive and what commitment is required.",
        faqs: [
          {
            question: "What specific skills do you cover (e.g., Negotiation, Q&A, Presentation)?",
            answer: "We cover the exact scenarios you face: boardroom presentations, investor pitches, client negotiations, rapid-fire Q&A, and high-pressure troubleshooting. Each session is customized to your industry and role."
          },
          {
            question: "Do you work with a specific industry (e.g., Finance, Technology, Consulting)?",
            answer: "I specialize in IT, professional services (law, medicine, consulting), logistics, and executive leadership. I understand the jargon and high-stakes dynamics of these fields, so you're not wasting time explaining your world to me."
          },
          {
            question: "How many sessions per week do you recommend for optimal results?",
            answer: "For rapid improvement, I recommend 2–3 sessions per week. For maintenance or lighter goals, 1 session per week works. The key is consistency and practice outside of our sessions."
          },
          {
            question: "What materials or resources are included in the coaching?",
            answer: "After each session, you receive customized PDF notes with key phrases, pronunciation tips, and practice scenarios tailored to your goals. You also get access to my recommended resources for self-study between sessions."
          }
        ]
      },
      {
        title: "Logistics & Pricing",
        description: "The essential administrative details.",
        faqs: [
          {
            question: "What is the investment for a 3-month coaching package?",
            answer: "Individual sessions: 500 MXN/hour (Mexico) or $25 USD/hour (USA). For a 3-month package (12 sessions), I offer a discounted rate. Contact me for corporate or executive package pricing."
          },
          {
            question: "Do you provide invoices for corporate reimbursement or company expense?",
            answer: "Yes—I provide professional invoices (facturas) for corporate clients. Companies are billed monthly at the end of each month for all sessions completed."
          },
          {
            question: "What is your cancellation or rescheduling policy?",
            answer: "Cancellations or rescheduling require at least one business day's notice. Payment is due before each session (individuals) or monthly invoicing for companies. I wait up to 15 minutes after the start time; after that, the session is considered a no-show and the full fee applies."
          }
        ]
      }
    ]
  },
  premium_es: {
    id: 'premium_es',
    sections: [
      {
        title: "El Problema y La Solución",
        description: "Preguntas de alto valor que abordan por qué el entrenamiento tradicional de inglés te falló.",
        faqs: [
          {
            question: "¿En qué se diferencia esto de un curso de ESL tradicional?",
            answer: "Los cursos de ESL tradicionales se enfocan en reglas gramaticales y listas de vocabulario. Yo me enfoco en el desempeño en tiempo real bajo presión—manejar preguntas y respuestas, negociar en inglés y proyectar autoridad en reuniones de alto riesgo. No memorizarás tiempos verbales; practicarás los escenarios exactos que enfrentas en el trabajo."
          },
          {
            question: "¿Esto ayudará con mi acento, o es solo vocabulario?",
            answer: "Ambos, pero el enfoque es estratégico. Te ayudo a identificar qué patrones de pronunciación realmente están dañando tu credibilidad (la mayoría no lo hacen), y trabajamos en claridad y confianza, no en borrar tu acento. El objetivo es ser entendido y respetado, no sonar como un hablante nativo."
          },
          {
            question: "Conozco la gramática, pero me congelo bajo presión. ¿Cómo arreglas eso?",
            answer: "Este es un problema de desempeño, no de conocimiento. Usamos simulaciones de alta presión—preguntas y respuestas rápidas, manejo de objeciones y pivoteo en tiempo real—para recablear tu cerebro para pensar directamente en inglés bajo estrés. Es como entrenamiento atlético para tu comunicación."
          },
          {
            question: "¿Qué tipo de resultados puede esperar un ejecutivo de nivel C en 90 días?",
            answer: "La mayoría de los ejecutivos ven mejoras medibles en 3–5 sesiones: tiempos de respuesta más rápidos en reuniones, negociación más confiada y la capacidad de 'dominar la sala' sin traducir en su cabeza. A los 90 días, deberías estar liderando conversaciones de alto riesgo con la misma autoridad que tienes en tu idioma nativo."
          }
        ]
      },
      {
        title: "Estructura del Programa y Resultados",
        description: "Lo que recibirás y qué compromiso se requiere.",
        faqs: [
          {
            question: "¿Qué habilidades específicas cubres (por ejemplo, Negociación, Q&A, Presentación)?",
            answer: "Cubrimos los escenarios exactos que enfrentas: presentaciones en sala de juntas, pitches a inversionistas, negociaciones con clientes, preguntas y respuestas rápidas y resolución de problemas de alta presión. Cada sesión se personaliza según tu industria y rol."
          },
          {
            question: "¿Trabajas con una industria específica (por ejemplo, Finanzas, Tecnología, Consultoría)?",
            answer: "Me especializo en TI, servicios profesionales (derecho, medicina, consultoría), logística y liderazgo ejecutivo. Entiendo la jerga y la dinámica de alto riesgo de estos campos, así que no pierdes tiempo explicándome tu mundo."
          },
          {
            question: "¿Cuántas sesiones por semana recomiendas para obtener resultados óptimos?",
            answer: "Para una mejora rápida, recomiendo 2–3 sesiones por semana. Para mantenimiento u objetivos más ligeros, 1 sesión por semana funciona. La clave es la consistencia y la práctica fuera de nuestras sesiones."
          },
          {
            question: "¿Qué materiales o recursos se incluyen en el coaching?",
            answer: "Después de cada sesión, recibes notas PDF personalizadas con frases clave, consejos de pronunciación y escenarios de práctica adaptados a tus objetivos. También obtienes acceso a mis recursos recomendados para el autoestudio entre sesiones."
          }
        ]
      },
      {
        title: "Logística y Precios",
        description: "Los detalles administrativos esenciales.",
        faqs: [
          {
            question: "¿Cuál es la inversión para un paquete de coaching de 3 meses?",
            answer: "Sesiones individuales: 500 MXN/hora (México) o $25 USD/hora (USA). Para un paquete de 3 meses (12 sesiones), ofrezco una tarifa con descuento. Contáctame para precios de paquetes corporativos o ejecutivos."
          },
          {
            question: "¿Proporcionas facturas para reembolso corporativo o gastos de la empresa?",
            answer: "Sí—proporciono facturas profesionales para clientes corporativos. Las empresas se facturan mensualmente al final de cada mes por todas las sesiones completadas."
          },
          {
            question: "¿Cuál es tu política de cancelación o reprogramación?",
            answer: "Las cancelaciones o reprogramaciones requieren al menos un día hábil de aviso. El pago es antes de cada sesión (individuos) o facturación mensual para empresas. Espero hasta 15 minutos después de la hora de inicio; después de eso, se considera inasistencia y aplica el cobro completo."
          }
        ]
      }
    ]
  }
};
