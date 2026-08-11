export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSection {
  id: string;
  title: string;
  shortTitle: string;
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
    id: "comprehensive_es",
    faqs: [
      {
        question: "¿Cuánto cuesta el coaching?",
        answer:
          "Sesión Individual: 500 MXN / $30 USD. Paquete de 12 Sesiones: 6,000 MXN / $360 USD. Nota: No ofrezco descuentos por volumen. Mi enfoque es entregar el máximo valor y personalización en cada hora que trabajamos juntos.",
      },
      {
        question: "¿Proporcionas facturas para empresas?",
        answer:
          "Sí—proporciono facturas profesionales para clientes corporativos. Las empresas se facturan mensualmente al final de cada mes por todas las sesiones completadas.",
      },
      {
        question: "¿Qué niveles y perfiles atiendes?",
        answer:
          "Trabajo con estudiantes de nivel intermedio y avanzado: profesionales ocupados en negocios, derecho, medicina, logística, ingeniería, etc. No enseño a principiantes absolutos.",
      },
      {
        question: "¿Qué cubren tus clases?",
        answer:
          "Hablar inglés con confianza; escenarios laborales: reuniones, presentaciones, llamadas con clientes; pronunciación, frases y tono profesional; preparación para entrevistas y comunicación empresarial general.",
      },
      {
        question: "¿Cómo funcionan las clases?",
        answer:
          "Sesiones privadas de 60 minutos en línea por Google Meet; calentamiento, práctica dirigida, retroalimentación inmediata y conversación casual; notas PDF personalizadas después de cada clase.",
      },
      {
        question: "¿Cuál es tu política de cancelación e inasistencias?",
        answer:
          "Las cancelaciones y reprogramaciones requieren al menos un día hábil (24 horas) de aviso. Si cancelas o reprogramas con menos de 24 horas de aviso, se aplica el cobro completo de la sesión — igual que si hubieras asistido. Las inasistencias se tratan igual: Robert espera hasta 15 minutos, después de lo cual se considera una sesión perdida y se aplica el cobro completo.",
      },
      {
        question: "¿Qué tan rápido veré resultados?",
        answer:
          "La mayoría ve progreso claro en 5–8 sesiones. La mejora depende de la práctica fuera de clase, frecuencia de las lecciones, disciplina y tus objetivos personales.",
      },
      {
        question: "¿Cómo agendo o reprogramo una clase?",
        answer:
          "Solo mándame un mensaje por WhatsApp o escríbeme un correo. Por favor avisa con al menos un día hábil de anticipación.",
      },
      {
        question: "¿Ofreces capacitación para líderes senior?",
        answer:
          "Sí, diseño talleres personalizados y sesiones privadas para altos directivos. Contáctame para una propuesta y precios.",
      },
    ],
  },
  main_es: {
    id: "main_es",
    faqs: [
      {
        question: "¿Cuánto cuesta el coaching?",
        answer:
          "Sesión Individual: 500 MXN / $30 USD. Paquete de 12 Sesiones: 6,000 MXN / $360 USD. Nota: No ofrezco descuentos por volumen. Mi enfoque es entregar el máximo valor y personalización en cada hora que trabajamos juntos.",
      },
      {
        question: "¿Proporcionas facturas para empresas?",
        answer:
          "Sí—proporciono facturas profesionales para clientes corporativos. Las empresas se facturan mensualmente al final de cada mes por todas las sesiones completadas.",
      },
      {
        question: "¿Qué niveles y perfiles atiendes?",
        answer:
          "Trabajo con estudiantes de nivel intermedio y avanzado: profesionales ocupados en negocios, derecho, medicina, logística, ingeniería, etc. No enseño a principiantes absolutos.",
      },
      {
        question: "¿Qué cubren tus clases?",
        answer:
          "Hablar inglés con confianza; escenarios laborales: reuniones, presentaciones, llamadas con clientes; pronunciación, frases y tono profesional; preparación para entrevistas y comunicación empresarial general.",
      },
      {
        question: "¿Cómo funcionan las clases?",
        answer:
          "Sesiones privadas de 60 minutos en línea por Google Meet; calentamiento, práctica dirigida, retroalimentación inmediata y conversación casual; notas PDF personalizadas después de cada clase.",
      },
      {
        question: "¿Cuál es tu política de cancelación e inasistencias?",
        answer:
          "Las cancelaciones y reprogramaciones requieren al menos un día hábil (24 horas) de aviso. Si cancelas o reprogramas con menos de 24 horas de aviso, se aplica el cobro completo de la sesión — igual que si hubieras asistido. Las inasistencias se tratan igual: Robert espera hasta 15 minutos, después de lo cual se considera una sesión perdida y se aplica el cobro completo.",
      },
    ],
  },
  comprehensive: {
    id: "comprehensive",
    faqs: [
      {
        question: "How much does coaching cost?",
        answer:
          "Single Session: 500 MXN / $30 USD. 12-Session Executive Roadmap: 6,000 MXN / $360 USD. Every session is custom-built around your specific industry, upcoming presentations, and professional goals. This isn't a curriculum you follow — it's a strategy built around your calendar.",
      },
      {
        question: "Do you provide invoices for companies?",
        answer:
          "Yes—I provide professional invoices (facturas) for corporate clients. Companies are billed monthly at the end of each month for all sessions completed.",
      },
      {
        question: "What levels and backgrounds do you teach?",
        answer:
          "I work with intermediate and advanced learners—busy professionals in business, law, medicine, logistics, engineering, etc. I don't teach absolute beginners.",
      },
      {
        question: "What do your lessons cover?",
        answer:
          "Speaking English with confidence; work scenarios: meetings, presentations, client calls; pronunciation, phrasing, and professional tone; interview prep and general business communication.",
      },
      {
        question: "How do classes work?",
        answer:
          "Private 60-minute sessions online via Google Meet; warm-up, targeted practice, on-the-spot feedback, and small talk; customized PDF notes delivered after each class.",
      },
      {
        question: "What is your cancellation and no-show policy?",
        answer:
          "Cancellations and reschedules require at least one business day (24 hours') notice. If you cancel or reschedule with less than 24 hours' notice, the full session fee applies — the same as if you attended. No-shows are treated the same: Robert waits up to 15 minutes, after which it counts as a missed session and the full fee applies.",
      },
      {
        question: "How fast will I improve?",
        answer:
          "Most students see clear progress within 3–5 sessions. Improvement depends on practice outside class, lesson frequency, self-discipline, and your personal goals.",
      },
      {
        question: "How do I schedule or reschedule a lesson?",
        answer:
          "Simply send me a message on WhatsApp or email me. Please give at least one business day's notice.",
      },
      {
        question: "Do you offer training for senior leadership?",
        answer:
          "Yes—I design custom workshops and private coaching sessions for senior leaders. Contact me for a proposal and pricing.",
      },
    ],
  },
  main: {
    id: "main",
    faqs: [
      {
        question: "How much does coaching cost?",
        answer:
          "Single Session: 500 MXN / $30 USD. 12-Session Executive Roadmap: 6,000 MXN / $360 USD. Every session is custom-built around your specific industry, upcoming presentations, and professional goals. This isn't a curriculum you follow — it's a strategy built around your calendar.",
      },
      {
        question: "Do you provide invoices for companies?",
        answer:
          "Yes—I provide professional invoices (facturas) for corporate clients. Companies are billed monthly at the end of each month for all sessions completed.",
      },
      {
        question: "What levels and backgrounds do you teach?",
        answer:
          "I work with intermediate and advanced learners—busy professionals in business, law, medicine, logistics, engineering, etc. I don’t teach absolute beginners.",
      },
      {
        question: "What do your lessons cover?",
        answer:
          "Speaking English with confidence; work scenarios: meetings, presentations, client calls; pronunciation, phrasing, and professional tone; interview prep and general business communication.",
      },
      {
        question: "How do classes work?",
        answer:
          "Private 60-minute sessions online via Google Meet; warm-up, targeted practice, on-the-spot feedback, and small talk; customized PDF notes delivered after each class.",
      },
      {
        question: "What is your cancellation and no-show policy?",
        answer:
          "Cancellations and reschedules require at least one business day (24 hours') notice. If you cancel or reschedule with less than 24 hours' notice, the full session fee applies — the same as if you attended. No-shows are treated the same: Robert waits up to 15 minutes, after which it counts as a missed session and the full fee applies.",
      },
    ],
  },
};

// Segmented FAQ structure for dedicated FAQ pages
export const segmentedFaqLists: Record<string, SegmentedFaqList> = {
  premium: {
    id: "premium",
    sections: [
      {
        id: "most-asked",
        title: "The Questions I Get Most",
        shortTitle: "Quick Answers",
        description: "The short version — full detail is in the sections below.",
        faqs: [
          {
            question:
              "I feel like a different, less confident version of myself in English. Can you help with that?",
            answer:
              "That's exactly what I work on, and it's the most common thing people tell me on the first call. You're not starting from zero — you already think clearly, make good decisions, and know how to hold a conversation in your own language. What we're closing is the gap between that and how you come across in English. Wherever you're starting from, that's the work.",
          },
          {
            question: "I know the grammar, but I freeze under pressure. Can you fix that?",
            answer:
              "Yes — and it's the most common thing I work on. This isn't about knowing more grammar, it's about performing under pressure. We practice the real moments that make you freeze — fast questions, pushback, having to think on your feet — until responding in English starts to feel automatic instead of terrifying. Think of it like training for a sport: you build the reflex by practicing it for real, not by reading about it.",
          },
          {
            question: "How do I get started?",
            answer:
              "Book a free discovery call. In 15-20 minutes I'll ask about your goals, get a read on your current level, and tell you honestly whether coaching is the right fit — no pressure either way.",
          },
          {
            question: "How much does coaching cost?",
            answer:
              "Straight answer, no hidden fees: a single session is 500 MXN ($30 USD). If you want to commit further, the 12-session executive roadmap is 6,000 MXN ($360 USD). Every session is built around your industry, your upcoming moments, and your actual calendar — not a one-size-fits-all course. More on invoicing and packages below.",
          },
        ],
      },
      {
        id: "confidence",
        title: "If You're Nervous About Speaking English With Me",
        shortTitle: "Feeling Embarrassed?",
        description: "The reassurance questions most people are too embarrassed to ask.",
        faqs: [
          {
            question: "I feel embarrassed speaking English in front of you. Is that normal?",
            answer:
              "Completely normal — almost everyone feels it in the first few sessions. You're used to sounding sharp and in control in your own language, and English can make you feel like you're starting over. You're not. My clients range from people just starting to use English at work to CEOs, and every one of them has felt exactly what you're feeling right now. Needing support here isn't a weakness — even elite athletes have coaches.",
          },
          {
            question: "Will you correct every mistake I make?",
            answer:
              'No — and this is one of the things clients tell me they value most. I sort every error into a "small crime" or a "big crime." Small crimes are minor and don\'t hurt how you\'re perceived, so I let most of them go. Big crimes — like mispronouncing past-tense -ed endings — quietly make native speakers question your competence even when the rest of your English is excellent. Those, I flag every time.',
          },
          {
            question: "Can I switch to Spanish when I get stuck?",
            answer:
              "Yes, especially early on — I'd rather you finish a real thought in Spanish than freeze chasing a word in English. The goal is functional, confident English for the moments that matter, not a Spanish-free rule that makes you self-conscious.",
          },
          {
            question: "What if my level turns out to be lower than I expected?",
            answer:
              "We'll find out honestly on the discovery call, not guess. I work with intermediate and advanced learners — I don't teach absolute beginners — so if your level isn't the right fit yet, I'll tell you directly and point you somewhere more useful instead of taking your money for the wrong program.",
          },
          {
            question:
              "Do you understand what Mexican professionals are actually up against with English?",
            answer:
              "Yes — this is my specialty. I live in Guadalajara and work primarily with Mexican and Latin American professionals. I know the false cognates that trip people up (actualmente ≠ actually), the cultural gap between directness and formality, and exactly which pronunciation patterns quietly damage credibility with US counterparts.",
          },
        ],
      },
      {
        id: "getting-started",
        title: "Getting Started",
        shortTitle: "Getting Started",
        description: "Everything you need to know about beginning your coaching journey.",
        faqs: [
          {
            question: "What happens on the discovery call?",
            answer:
              "It's a real conversation, not a sales pitch. We talk through your goals, I assess your current level, and we decide together whether coaching makes sense. No obligation.",
          },
          {
            question: "What happens in the first paid session?",
            answer:
              "The first session is where we figure out exactly what's going on — your specific gaps, your context, what's actually holding you back — and build a plan from there. You'll leave with 2-3 things you can start using that same week.",
          },
          {
            question: "Do I have to commit to a package, or can I try one session first?",
            answer:
              "Start with a single session at 500 MXN / $30 USD — no pressure to commit further. Most clients continue because they feel the value immediately, not because they signed up for a package upfront.",
          },
          {
            question: "What technology do I need for online sessions?",
            answer:
              "A computer or phone with a camera, microphone, and stable internet. Sessions run on Google Meet, no special software. A quiet space where you can speak freely helps more than any tech.",
          },
        ],
      },
      {
        id: "investment",
        title: "Investment, Payment & Invoicing",
        shortTitle: "Investment & Billing",
        description: "What it costs, why, and how billing works.",
        faqs: [
          {
            question: "What does coaching cost, and why?",
            answer:
              "Single session: 500 MXN ($30 USD). 12-session executive roadmap: 6,000 MXN ($360 USD). Every session is built around your real challenges — a big presentation coming up, a negotiation you're dreading, even just the emails that take you three times longer in English — not a generic syllabus. Because of that level of personalization, I don't offer volume discounts, even for teams: the price reflects the depth of preparation each hour gets, not the headcount.",
          },
          {
            question: "How is this different from a traditional ESL course?",
            answer:
              "Traditional ESL courses teach grammar rules and vocabulary lists. I coach real-time performance under pressure — handling tough questions, negotiating, staying clear and confident when the pressure is on. You won't memorize verb tenses; you'll rehearse the exact scenarios you're walking into at work.",
          },
          {
            question: "How fast will I see results?",
            answer:
              "Most clients feel a shift in confidence after the first session. For measurable change in fluency and executive presence, most see clear progress within 5-8 sessions — it depends on practice between sessions, frequency, and your specific goals.",
          },
          {
            question: "Will this help my accent, or is it just vocabulary?",
            answer:
              "Both, but strategically. I help you identify which pronunciation patterns are actually hurting your credibility — most aren't — and we work on clarity and confidence, not erasing your accent. The goal is to be understood and respected, not to sound like someone you're not.",
          },
          {
            question: "Do you provide invoices for my company?",
            answer:
              "Yes — I provide professional invoices (facturas) for corporate clients. Companies are billed monthly at the end of each month for all sessions completed.",
          },
        ],
      },
      {
        id: "logistics",
        title: "Scheduling & Policies",
        shortTitle: "Scheduling",
        description: "How sessions are booked, changed, and cancelled.",
        faqs: [
          {
            question: "How many sessions per week do you recommend?",
            answer:
              "For fast improvement, 2-3 sessions a week. For maintenance or lighter goals, 1 session a week works well. Consistency and practice between sessions matter more than any single number.",
          },
          {
            question: "How do I schedule or reschedule a session?",
            answer:
              "Message me on WhatsApp or by email. Please give at least one business day's notice for reschedules.",
          },
          {
            question: "What's your cancellation and no-show policy?",
            answer:
              "I keep a limited, personalized calendar, and every session is held exclusively for you — that's why the notice window exists. Cancellations and reschedules need at least one business day (24 hours') notice; inside that window, the full session fee applies, the same as if you'd attended. No-shows work the same way: I wait 15 minutes, after which it counts as a missed session at full fee. Real emergencies are reviewed case by case, in good faith.",
          },
        ],
      },
      {
        id: "methodology",
        title: "How the Coaching Works",
        shortTitle: "How I Coach",
        description: "What happens in a session and what makes it effective.",
        faqs: [
          {
            question: "What specific skills do you cover?",
            answer:
              "The exact situations you're facing: important meetings, presentations, client calls, negotiations, and thinking on your feet when someone asks a tough question. Every session is built around your role, whatever that looks like.",
          },
          {
            question: "Do you work with my industry?",
            answer:
              "I specialize in IT, professional services (law, medicine, consulting), logistics, and executive leadership. I already understand the jargon and the stakes in these fields, so you're not spending session time explaining your world to me.",
          },
          {
            question: "What materials or resources do I get?",
            answer:
              "Customized PDF notes after every session — key phrases, pronunciation notes, and practice scenarios built around your goals — plus access to my recommended resources for self-study between sessions.",
          },
          {
            question: "Are sessions with you personally?",
            answer:
              "Always. Every session, every correction, every roadmap — that's me, not a rotating pool of teachers. It's how the \"big crime / small crime\" feedback stays consistent from session one.",
          },
        ],
      },
      {
        id: "teams",
        title: "For Teams & Companies",
        shortTitle: "For Teams & Companies",
        description: "Corporate coaching, billing, and how the evaluation process works.",
        faqs: [
          {
            question:
              "I work for a Mexican company expanding into the US market. Can you help our team?",
            answer:
              "Yes. I offer corporate coaching for teams making that leap — client-facing English, partnership negotiations, and the cultural fluency that builds trust with US business partners.",
          },
          {
            question: "Can you help my team prepare for meetings with US headquarters or clients?",
            answer:
              "Yes. Many clients report to US-based leadership or work directly with US clients. We practice the specific meeting types you face — status updates, escalation calls, quarterly reviews — using the communication style US counterparts actually expect.",
          },
          {
            question: "We want to bring you in for several team members — can we get a discount?",
            answer:
              "No volume discounts, and here's why: each session stays fully personalized to that person's role and upcoming pressure moments, which is what makes it work. Most corporate accounts start the same way — a director sits in on a demo class to evaluate, then extends coaching to the rest of the team once they see it firsthand.",
          },
          {
            question: "Do you accept payment in Mexican pesos?",
            answer:
              "Yes. Pricing is available in both MXN and USD — a single session is 500 MXN ($30 USD), the 12-session executive roadmap is 6,000 MXN ($360 USD).",
          },
        ],
      },
    ],
  },
  premium_es: {
    id: "premium_es",
    sections: [
      {
        id: "most-asked",
        title: "Lo que más me preguntan",
        shortTitle: "Respuestas rápidas",
        description: "La versión corta — el detalle completo está en las secciones de abajo.",
        faqs: [
          {
            question: "Cuando hablo inglés, siento que no soy yo. ¿Me puedes ayudar con eso?",
            answer:
              "Es justo en lo que trabajo, y es lo que más me dicen en la primera llamada. No estás empezando de cero — ya piensas con claridad, tomas buenas decisiones y sabes cómo llevar una conversación en tu idioma. Lo que cerramos es la brecha entre eso y cómo te perciben en inglés. No importa en qué punto estés, ese es el trabajo.",
          },
          {
            question: "Conozco la gramática, pero me congelo bajo presión. ¿Puedes arreglar eso?",
            answer:
              "Sí — y es de lo más común que trabajo. Esto no se trata de saber más gramática, se trata de rendir bien bajo presión. Practicamos los momentos reales que te hacen congelarte — preguntas rápidas, objeciones, tener que pensar rápido — hasta que responder en inglés empieza a sentirse automático en lugar de aterrador. Es como entrenar para un deporte: construyes el reflejo practicándolo de verdad, no leyendo sobre él.",
          },
          {
            question: "¿Cómo empiezo?",
            answer:
              "Agenda una llamada de descubrimiento gratuita. En 15-20 minutos platicamos tus objetivos, evalúo tu nivel actual y te digo con honestidad si el coaching es lo que necesitas — sin presión de ningún lado.",
          },
          {
            question: "¿Cuánto cuesta el coaching?",
            answer:
              "Respuesta directa, sin letra chica: una sesión individual son 500 MXN ($30 USD). Si quieres comprometerte a más, el plan ejecutivo de 12 sesiones son 6,000 MXN ($360 USD). Cada sesión se construye alrededor de tu industria, tus próximos retos y tu agenda real — no es un curso genérico para todos. Más abajo explico cómo funciona la facturación y los paquetes.",
          },
        ],
      },
      {
        id: "confidence",
        title: "Si te da pena hablar inglés conmigo",
        shortTitle: "¿Te da pena?",
        description: "Las preguntas de tranquilidad que a la mayoría le da pena hacer.",
        faqs: [
          {
            question: "Me da pena hablar inglés frente a ti. ¿Es normal?",
            answer:
              "Totalmente normal — casi todos sienten esto en las primeras sesiones. Estás acostumbrado a sonar seguro y en control en tu idioma, y el inglés te puede hacer sentir que estás empezando de cero. No es así. Mis clientes van desde personas que apenas están usando el inglés en el trabajo hasta CEOs, y todos han sentido exactamente lo que tú sientes ahora. Pedir apoyo aquí no es una debilidad — hasta los atletas de élite tienen entrenador.",
          },
          {
            question: "¿Vas a corregir cada error que cometa?",
            answer:
              'No — y esto es de lo que más valoran mis clientes. Clasifico cada error como "crimen menor" o "crimen mayor". Los crímenes menores son pequeños y no afectan cómo te perciben, así que dejo pasar la mayoría. Los crímenes mayores — como pronunciar mal las terminaciones -ed del pasado — hacen que los hablantes nativos duden de tu competencia sin darse cuenta, aunque el resto de tu inglés sea excelente. Esos los marco siempre.',
          },
          {
            question: "¿Puedo cambiar al español cuando me atoro?",
            answer:
              'Sí, sobre todo al principio — prefiero que termines una idea real en español a que te quedes congelado buscando una palabra en inglés. El objetivo es un inglés funcional y con confianza para los momentos que importan, no una regla de "nada de español" que te haga sentir peor.',
          },
          {
            question: "¿Qué pasa si mi nivel resulta más bajo de lo que pensaba?",
            answer:
              "Lo averiguamos con honestidad en la llamada de descubrimiento, no lo adivinamos. Trabajo con estudiantes de nivel intermedio y avanzado — no enseño a principiantes absolutos — así que si tu nivel no encaja todavía, te lo digo directamente y te oriento hacia algo más útil en lugar de cobrarte por un programa que no es para ti.",
          },
          {
            question:
              "¿Entiendes lo que realmente enfrentan los profesionales mexicanos con el inglés?",
            answer:
              "Sí — es mi especialidad. Vivo en Guadalajara y trabajo principalmente con profesionales mexicanos y latinoamericanos. Conozco los falsos cognados que traicionan (actualmente ≠ actually), la diferencia cultural entre franqueza y formalidad, y exactamente qué patrones de pronunciación dañan la credibilidad frente a contrapartes estadounidenses.",
          },
        ],
      },
      {
        id: "getting-started",
        title: "Cómo empezar",
        shortTitle: "Cómo empezar",
        description: "Todo lo que necesitas saber para comenzar tu camino de coaching.",
        faqs: [
          {
            question: "¿Qué pasa en la llamada de descubrimiento?",
            answer:
              "Es una conversación real, no un discurso de ventas. Hablamos de tus objetivos, evalúo tu nivel actual y decidimos juntos si el coaching tiene sentido para ti. Sin ninguna obligación.",
          },
          {
            question: "¿Qué pasa en la primera sesión pagada?",
            answer:
              "La primera sesión es donde averiguamos exactamente qué está pasando — tus brechas específicas, tu contexto, qué te está deteniendo realmente — y armamos un plan a partir de eso. Sales con 2-3 acciones que puedes empezar a usar esa misma semana.",
          },
          {
            question:
              "¿Necesito comprometerme con un paquete, o puedo probar una sola sesión primero?",
            answer:
              "Empieza con una sola sesión a 500 MXN / $30 USD — sin presión de comprometerte a más. La mayoría de mis clientes continúan porque sienten el valor de inmediato, no porque se inscribieron a un paquete desde el principio.",
          },
          {
            question: "¿Qué tecnología necesito para las sesiones en línea?",
            answer:
              "Una computadora o celular con cámara, micrófono y una conexión estable a internet. Las sesiones son por Google Meet, sin software especial. Un espacio tranquilo donde puedas hablar libremente ayuda más que cualquier tecnología.",
          },
        ],
      },
      {
        id: "investment",
        title: "Inversión, pago y facturación",
        shortTitle: "Inversión y facturación",
        description: "Cuánto cuesta, por qué, y cómo funciona la facturación.",
        faqs: [
          {
            question: "¿Cuánto cuesta el coaching, y por qué?",
            answer:
              "Sesión individual: 500 MXN ($30 USD). Plan ejecutivo de 12 sesiones: 6,000 MXN / $360 USD. Cada sesión se construye alrededor de tus retos reales — una presentación importante que se acerca, una negociación que te preocupa, o hasta esos correos que te toman el triple de tiempo en inglés — no de un temario genérico. Por ese nivel de personalización no ofrezco descuentos por volumen, ni siquiera para equipos: el precio refleja la profundidad de preparación de cada hora, no el número de personas.",
          },
          {
            question: "¿En qué se diferencia esto de un curso de ESL tradicional?",
            answer:
              "Los cursos de ESL tradicionales enseñan reglas gramaticales y listas de vocabulario. Yo trabajo el desempeño en tiempo real bajo presión — manejar preguntas difíciles, negociar, mantenerte claro y con confianza cuando la presión aprieta. No vas a memorizar tiempos verbales; vas a ensayar los escenarios exactos que enfrentas en el trabajo.",
          },
          {
            question: "¿Qué tan rápido veré resultados?",
            answer:
              "La mayoría de mis clientes siente un cambio en su confianza desde la primera sesión. Para un cambio medible en fluidez y presencia ejecutiva, la mayoría ve progreso claro en 5-8 sesiones — depende de la práctica entre sesiones, la frecuencia y tus objetivos específicos.",
          },
          {
            question: "¿Esto va a ayudar con mi acento, o es solo vocabulario?",
            answer:
              "Ambos, pero de forma estratégica. Te ayudo a identificar qué patrones de pronunciación realmente dañan tu credibilidad — la mayoría no lo hace — y trabajamos en claridad y confianza, no en borrar tu acento. El objetivo es que te entiendan y te respeten, no que suenes como alguien que no eres.",
          },
          {
            question: "¿Proporcionas facturas para mi empresa?",
            answer:
              "Sí — proporciono facturas profesionales para clientes corporativos. Las empresas se facturan mensualmente al final de cada mes por todas las sesiones completadas.",
          },
        ],
      },
      {
        id: "logistics",
        title: "Programación y políticas",
        shortTitle: "Programación",
        description: "Cómo se agendan, cambian y cancelan las sesiones.",
        faqs: [
          {
            question: "¿Cuántas sesiones por semana recomiendas?",
            answer:
              "Para una mejora rápida, 2-3 sesiones por semana. Para mantenimiento u objetivos más ligeros, 1 sesión por semana funciona bien. La consistencia y la práctica entre sesiones importan más que cualquier número exacto.",
          },
          {
            question: "¿Cómo agendo o reprogramo una sesión?",
            answer:
              "Escríbeme por WhatsApp o correo. Por favor avisa con al menos un día hábil de anticipación si necesitas reprogramar.",
          },
          {
            question: "¿Cuál es tu política de cancelación e inasistencias?",
            answer:
              "Manejo una agenda limitada y personalizada, y cada sesión se reserva exclusivamente para ti — por eso existe el plazo de aviso. Las cancelaciones y reprogramaciones requieren al menos un día hábil (24 horas) de aviso; dentro de ese plazo, se aplica el cobro completo, igual que si hubieras asistido. Las inasistencias funcionan igual: espero 15 minutos, después de lo cual se considera una sesión perdida con cobro completo. Las emergencias reales las reviso caso por caso, de buena fe.",
          },
        ],
      },
      {
        id: "methodology",
        title: "Cómo funciona el coaching",
        shortTitle: "Cómo trabajo",
        description: "Qué pasa en una sesión y qué lo hace efectivo.",
        faqs: [
          {
            question: "¿Qué habilidades específicas cubres?",
            answer:
              "Las situaciones exactas que enfrentas: reuniones importantes, presentaciones, llamadas con clientes, negociaciones y pensar rápido cuando alguien te hace una pregunta difícil. Cada sesión se construye alrededor de tu rol, sea cual sea.",
          },
          {
            question: "¿Trabajas con mi industria?",
            answer:
              "Me especializo en TI, servicios profesionales (derecho, medicina, consultoría), logística y liderazgo ejecutivo. Ya entiendo la jerga y lo que está en juego en estos campos, así que no gastas tiempo de sesión explicándome tu mundo.",
          },
          {
            question: "¿Qué materiales o recursos recibo?",
            answer:
              "Notas en PDF personalizadas después de cada sesión — frases clave, notas de pronunciación y escenarios de práctica hechos para tus objetivos — más acceso a mis recursos recomendados para estudiar por tu cuenta entre sesiones.",
          },
          {
            question: "¿Las sesiones son contigo directamente?",
            answer:
              'Siempre. Cada sesión, cada corrección, cada hoja de ruta — soy yo, no un grupo rotativo de maestros. Así la retroalimentación de "crimen menor / crimen mayor" se mantiene consistente desde la primera sesión.',
          },
        ],
      },
      {
        id: "teams",
        title: "Para equipos y empresas",
        shortTitle: "Para equipos y empresas",
        description: "Coaching corporativo, facturación y cómo funciona la evaluación.",
        faqs: [
          {
            question:
              "Trabajo para una empresa mexicana que se expande al mercado de EE. UU. ¿Pueden ayudar a nuestro equipo?",
            answer:
              "Sí. Ofrezco coaching corporativo para equipos que dan ese salto — inglés para interacción con clientes, negociación de alianzas comerciales y la fluidez cultural que construye confianza con socios de negocio estadounidenses.",
          },
          {
            question:
              "¿Pueden ayudar a mi equipo a prepararse para reuniones con oficinas centrales o clientes en EE. UU.?",
            answer:
              "Sí. Muchos de mis clientes reportan a liderazgo con sede en EE. UU. o trabajan directamente con clientes estadounidenses. Practicamos los tipos de reunión exactos que enfrentas — actualizaciones de estatus, llamadas de escalación, revisiones trimestrales — con el estilo de comunicación que tus contrapartes en EE. UU. realmente esperan.",
          },
          {
            question: "Queremos contratarte para varios miembros del equipo. ¿Hay descuento?",
            answer:
              "No ofrezco descuentos por volumen, y te explico por qué: cada sesión se mantiene completamente personalizada al rol y a los momentos de presión de esa persona, y eso es justo lo que hace que funcione. La mayoría de las cuentas corporativas empiezan igual — un director toma una clase demo para evaluar, y después extiende el coaching al resto del equipo cuando lo ve funcionar de primera mano.",
          },
          {
            question: "¿Aceptan pago en pesos mexicanos?",
            answer:
              "Sí. Los precios están disponibles en MXN y USD — la sesión individual es de 500 MXN ($30 USD), el plan ejecutivo de 12 sesiones es de 6,000 MXN ($360 USD).",
          },
        ],
      },
    ],
  },
};
