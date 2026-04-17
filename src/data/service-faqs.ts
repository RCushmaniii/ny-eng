export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceFaqSet {
  en: ServiceFaq[];
  es: ServiceFaq[];
}

export const serviceFaqs: Record<string, ServiceFaqSet> = {
  "executive-english": {
    en: [
      {
        question: "How is executive English coaching different from regular English classes?",
        answer: "Executive coaching focuses on high-stakes communication — boardroom presentations, investor pitches, and cross-cultural negotiations. We don't teach grammar rules. We train you to perform under pressure in the situations that actually determine your career trajectory."
      },
      {
        question: "What level of English do I need to start executive coaching?",
        answer: "You need at least intermediate English (B1+). Our executive clients can already hold conversations but struggle to command authority, persuade stakeholders, or communicate strategic vision with the precision their role demands."
      },
      {
        question: "How quickly will I see improvement in my executive communication?",
        answer: "Most executives notice measurable improvement within 3-5 sessions. We focus on your highest-impact scenarios first — the specific meetings, presentations, or negotiations where better English will drive immediate business results."
      },
      {
        question: "Can you help me prepare for a specific board presentation or investor meeting?",
        answer: "Absolutely. Many clients come to us with a high-stakes event 2-4 weeks away. We do intensive preparation — refining your script, practicing Q&A responses, and building the vocal authority that makes your message land with impact."
      },
      {
        question: "Do you offer corporate packages for executive teams?",
        answer: "Yes. We offer group coaching for C-suite teams and senior leadership. Corporate packages include team assessments, customized training plans, and progress tracking. We can also issue Mexican corporate invoices (facturas)."
      }
    ],
    es: [
      {
        question: "¿En qué se diferencia el coaching de inglés ejecutivo de las clases regulares?",
        answer: "El coaching ejecutivo se enfoca en comunicación de alto impacto — presentaciones en sala de juntas, pitches a inversionistas y negociaciones interculturales. No enseñamos reglas gramaticales. Te entrenamos para actuar bajo presión en las situaciones que realmente determinan tu trayectoria profesional."
      },
      {
        question: "¿Qué nivel de inglés necesito para iniciar el coaching ejecutivo?",
        answer: "Necesitas al menos inglés intermedio (B1+). Nuestros clientes ejecutivos ya pueden sostener conversaciones pero les cuesta proyectar autoridad, persuadir a stakeholders o comunicar su visión estratégica con la precisión que su puesto exige."
      },
      {
        question: "¿Qué tan rápido veré mejoras en mi comunicación ejecutiva?",
        answer: "La mayoría de los ejecutivos notan una mejora medible en 3-5 sesiones. Nos enfocamos primero en tus escenarios de mayor impacto — las reuniones, presentaciones o negociaciones específicas donde un mejor inglés generará resultados de negocio inmediatos."
      },
      {
        question: "¿Pueden ayudarme a prepararme para una presentación o reunión con inversionistas?",
        answer: "Por supuesto. Muchos clientes llegan con un evento importante a 2-4 semanas de distancia. Hacemos preparación intensiva — refinamos tu guión, practicamos respuestas a preguntas, y desarrollamos la autoridad vocal que hace que tu mensaje impacte."
      },
      {
        question: "¿Ofrecen paquetes corporativos para equipos ejecutivos?",
        answer: "Sí. Ofrecemos coaching grupal para equipos de alta dirección y liderazgo. Los paquetes corporativos incluyen evaluaciones de equipo, planes de capacitación personalizados y seguimiento de progreso. También podemos emitir facturas corporativas mexicanas."
      }
    ]
  },
  "tech-english": {
    en: [
      {
        question: "Why do developers need specialized English coaching instead of general English?",
        answer: "General English won't teach you how to explain technical architecture to non-technical stakeholders, run sprint retrospectives, or write clear PR descriptions. Tech English coaching focuses on the communication patterns that determine whether you stay a coder or become a tech leader."
      },
      {
        question: "I have a B2 English certificate. Why do I still struggle in meetings with US clients?",
        answer: "B2 certifies conversational ability, not professional performance. Most developers with B2 struggle with async communication tone on Slack, real-time technical debates, and the subtle cultural signals that US teams expect. We bridge that gap."
      },
      {
        question: "Can you help nearshore developers communicate better with US teams?",
        answer: "This is one of our core specialties. We train nearshore developers on sprint ceremony English, code review communication, client demo delivery, and the async communication skills that US companies specifically look for when hiring LATAM talent."
      },
      {
        question: "Do you work with engineering managers or just individual developers?",
        answer: "Both. Engineering managers have unique needs — running 1:1s in English, delivering performance feedback, presenting technical roadmaps to leadership. We tailor coaching to your specific role and the communication challenges it brings."
      },
      {
        question: "How are tech English sessions structured?",
        answer: "60-minute Google Meet sessions focused on your real work scenarios. We might practice a client demo you have coming up, refine your standup delivery, or workshop how to push back on scope in a sprint planning meeting — always using your actual context."
      }
    ],
    es: [
      {
        question: "¿Por qué los desarrolladores necesitan coaching de inglés especializado en lugar de inglés general?",
        answer: "El inglés general no te enseñará cómo explicar arquitectura técnica a stakeholders no técnicos, dirigir retrospectivas de sprint, o escribir descripciones claras de PR. El coaching de inglés para tech se enfoca en los patrones de comunicación que determinan si te quedas como programador o te conviertes en líder técnico."
      },
      {
        question: "Tengo un certificado B2 de inglés. ¿Por qué sigo batallando en reuniones con clientes de EE.UU.?",
        answer: "El B2 certifica habilidad conversacional, no desempeño profesional. La mayoría de los desarrolladores con B2 batallan con el tono de comunicación asíncrona en Slack, debates técnicos en tiempo real, y las señales culturales sutiles que los equipos de EE.UU. esperan. Nosotros cerramos esa brecha."
      },
      {
        question: "¿Pueden ayudar a desarrolladores nearshore a comunicarse mejor con equipos de EE.UU.?",
        answer: "Esta es una de nuestras especialidades principales. Entrenamos a desarrolladores nearshore en inglés para ceremonias de sprint, comunicación en code reviews, presentaciones de demos a clientes, y las habilidades de comunicación asíncrona que las empresas de EE.UU. buscan específicamente al contratar talento de LATAM."
      },
      {
        question: "¿Trabajan con engineering managers o solo con desarrolladores individuales?",
        answer: "Con ambos. Los engineering managers tienen necesidades únicas — dirigir 1:1s en inglés, dar retroalimentación de desempeño, presentar roadmaps técnicos al liderazgo. Personalizamos el coaching a tu rol específico y los retos de comunicación que implica."
      },
      {
        question: "¿Cómo se estructuran las sesiones de inglés para tech?",
        answer: "Sesiones de 60 minutos por Google Meet enfocadas en tus escenarios laborales reales. Podemos practicar un demo de cliente que tengas próximo, refinar tu presentación de standup, o trabajar cómo rechazar scope en un sprint planning — siempre usando tu contexto real."
      }
    ]
  },
  "startup-founders": {
    en: [
      {
        question: "Can English coaching help me raise capital from US investors?",
        answer: "Yes. We've worked with founders preparing for investor meetings, demo days, and board presentations. We focus on the specific language patterns that build investor confidence — concise storytelling, data-driven narratives, and handling tough questions with poise."
      },
      {
        question: "How is coaching for startup founders different from executive coaching?",
        answer: "Startup founders need pitch-specific skills — 60-second elevator pitches, investor Q&A navigation, board update delivery, and the informal-yet-authoritative communication style that US startup culture demands. It's faster-paced and more improvisational than corporate executive coaching."
      },
      {
        question: "I'm launching in the US market. Can you help with my market entry communication?",
        answer: "Absolutely. Beyond pitch coaching, we help founders craft their US market positioning, customer discovery conversations, partnership outreach, and the cultural communication nuances that determine whether American clients trust your brand."
      },
      {
        question: "How many sessions do founders typically need before a big pitch?",
        answer: "For a specific high-stakes pitch, most founders need 4-6 intensive sessions over 2-3 weeks. For ongoing communication improvement, we recommend weekly sessions for 2-3 months to build lasting confidence across all founder scenarios."
      }
    ],
    es: [
      {
        question: "¿El coaching de inglés puede ayudarme a levantar capital de inversionistas de EE.UU.?",
        answer: "Sí. Hemos trabajado con fundadores preparándose para reuniones con inversionistas, demo days y presentaciones de board. Nos enfocamos en los patrones de lenguaje específicos que construyen confianza del inversionista — storytelling conciso, narrativas basadas en datos, y manejo de preguntas difíciles con seguridad."
      },
      {
        question: "¿En qué se diferencia el coaching para fundadores del coaching ejecutivo?",
        answer: "Los fundadores necesitan habilidades específicas de pitch — elevator pitches de 60 segundos, navegación de Q&A con inversionistas, actualizaciones de board, y el estilo de comunicación informal pero autoritativo que demanda la cultura startup de EE.UU. Es más rápido e improvisacional que el coaching ejecutivo corporativo."
      },
      {
        question: "Estoy lanzando en el mercado de EE.UU. ¿Pueden ayudar con mi comunicación de entrada al mercado?",
        answer: "Por supuesto. Más allá del coaching de pitch, ayudamos a los fundadores a construir su posicionamiento en el mercado de EE.UU., conversaciones de descubrimiento de clientes, alcance de partnerships, y los matices de comunicación cultural que determinan si los clientes americanos confían en tu marca."
      },
      {
        question: "¿Cuántas sesiones típicamente necesitan los fundadores antes de un pitch importante?",
        answer: "Para un pitch específico de alto impacto, la mayoría de los fundadores necesitan 4-6 sesiones intensivas durante 2-3 semanas. Para mejora continua de comunicación, recomendamos sesiones semanales por 2-3 meses para construir confianza duradera en todos los escenarios de fundador."
      }
    ]
  },
  "logistics-english": {
    en: [
      {
        question: "What specific English skills do logistics professionals need?",
        answer: "Supply chain communication requires precise vocabulary — freight terms, customs documentation, compliance language, and the ability to negotiate with international vendors clearly and confidently. One miscommunication in logistics can cost thousands in delays and penalties."
      },
      {
        question: "Can you help our logistics team communicate better with US warehouses and carriers?",
        answer: "Yes. We train logistics teams on vendor negotiation, issue escalation, shipment status communication, and the professional tone that builds trust with US supply chain partners. We use your actual shipping scenarios and documentation in training."
      },
      {
        question: "Do you offer group training for logistics departments?",
        answer: "Absolutely. We offer team training packages that include shared vocabulary building, role-play scenarios based on your supply chain operations, and individual coaching for team leads who need to manage cross-border communication."
      },
      {
        question: "How do you handle the technical vocabulary specific to logistics?",
        answer: "We research your specific industry segment — whether it's freight forwarding, customs brokerage, 3PL management, or last-mile delivery — and build training around the exact terminology and communication patterns you encounter daily."
      }
    ],
    es: [
      {
        question: "¿Qué habilidades específicas de inglés necesitan los profesionales de logística?",
        answer: "La comunicación en la cadena de suministro requiere vocabulario preciso — términos de flete, documentación aduanera, lenguaje de cumplimiento, y la capacidad de negociar con proveedores internacionales de manera clara y segura. Una mala comunicación en logística puede costar miles en retrasos y penalizaciones."
      },
      {
        question: "¿Pueden ayudar a nuestro equipo de logística a comunicarse mejor con almacenes y transportistas de EE.UU.?",
        answer: "Sí. Entrenamos a equipos de logística en negociación con proveedores, escalación de problemas, comunicación de estatus de envíos, y el tono profesional que construye confianza con socios de cadena de suministro de EE.UU. Usamos sus escenarios reales de envío y documentación en el entrenamiento."
      },
      {
        question: "¿Ofrecen capacitación grupal para departamentos de logística?",
        answer: "Por supuesto. Ofrecemos paquetes de capacitación para equipos que incluyen construcción de vocabulario compartido, escenarios de role-play basados en sus operaciones de cadena de suministro, y coaching individual para líderes de equipo que necesitan gestionar comunicación transfronteriza."
      },
      {
        question: "¿Cómo manejan el vocabulario técnico específico de logística?",
        answer: "Investigamos su segmento específico de la industria — ya sea freight forwarding, agencia aduanal, gestión de 3PL o última milla — y construimos el entrenamiento alrededor de la terminología exacta y los patrones de comunicación que encuentran diariamente."
      }
    ]
  },
  "professional-english": {
    en: [
      {
        question: "What types of professionals do you work with?",
        answer: "We work with doctors, lawyers, engineers, architects, accountants, and other licensed professionals who need English for international practice, conferences, publications, patient/client communication, or career advancement into English-speaking markets."
      },
      {
        question: "Can you help me prepare for a medical or legal conference presentation?",
        answer: "Yes. Conference presentations in specialized fields require both technical precision and audience engagement. We help you structure your talk, practice Q&A handling, and develop the confidence to present complex material clearly to international audiences."
      },
      {
        question: "I need to communicate with patients/clients in English. Can you help?",
        answer: "Absolutely. We practice the specific consultation scenarios you face — intake conversations, explaining procedures or legal processes, delivering complex information with empathy, and handling sensitive discussions in your professional context."
      },
      {
        question: "How do you handle the technical vocabulary for my specific profession?",
        answer: "We research your field's specific terminology and build sessions around your real communication needs. Whether it's medical case presentations, legal briefs, or engineering specifications, we focus on the language patterns that matter in your daily practice."
      }
    ],
    es: [
      {
        question: "¿Con qué tipos de profesionales trabajan?",
        answer: "Trabajamos con médicos, abogados, ingenieros, arquitectos, contadores y otros profesionistas que necesitan inglés para práctica internacional, conferencias, publicaciones, comunicación con pacientes/clientes, o avance profesional en mercados de habla inglesa."
      },
      {
        question: "¿Pueden ayudarme a prepararme para una presentación en un congreso médico o legal?",
        answer: "Sí. Las presentaciones en congresos de campos especializados requieren tanto precisión técnica como engagement de la audiencia. Te ayudamos a estructurar tu ponencia, practicar el manejo de preguntas, y desarrollar la confianza para presentar material complejo de manera clara a audiencias internacionales."
      },
      {
        question: "Necesito comunicarme con pacientes/clientes en inglés. ¿Pueden ayudar?",
        answer: "Por supuesto. Practicamos los escenarios específicos de consulta que enfrentas — conversaciones de primera vez, explicación de procedimientos o procesos legales, comunicar información compleja con empatía, y manejar discusiones sensibles en tu contexto profesional."
      },
      {
        question: "¿Cómo manejan el vocabulario técnico de mi profesión específica?",
        answer: "Investigamos la terminología específica de tu campo y construimos las sesiones alrededor de tus necesidades reales de comunicación. Ya sean presentaciones de casos médicos, escritos legales o especificaciones de ingeniería, nos enfocamos en los patrones de lenguaje que importan en tu práctica diaria."
      }
    ]
  },
  "medical-english": {
    en: [
      {
        question: "Is medical English coaching different from general professional English?",
        answer: "Yes. Medical English requires precise clinical terminology, empathetic patient communication, and the ability to discuss diagnoses, treatments, and outcomes clearly. We focus on the specific language patterns used in clinical settings, conferences, and medical publications."
      },
      {
        question: "Can you help me prepare for a medical residency interview in the US?",
        answer: "Absolutely. We help physicians prepare for residency interviews, including behavioral questions, case presentations, and the communication style that US program directors look for. Many of our medical clients have secured positions at top programs."
      },
      {
        question: "Do you help with medical publication writing in English?",
        answer: "We focus on spoken communication rather than writing, but we can help you practice presenting your research findings, discussing methodology with reviewers, and communicating your published work at international conferences."
      },
      {
        question: "I'm a doctor in Mexico who sees English-speaking patients. Can you help?",
        answer: "Yes. We practice patient intake conversations, explaining diagnoses and treatment options, discussing risks and consent, and handling the emotional aspects of clinical communication — all in English, using scenarios from your actual practice."
      }
    ],
    es: [
      {
        question: "¿El coaching de inglés médico es diferente del inglés profesional general?",
        answer: "Sí. El inglés médico requiere terminología clínica precisa, comunicación empática con pacientes, y la capacidad de discutir diagnósticos, tratamientos y resultados de manera clara. Nos enfocamos en los patrones de lenguaje específicos usados en entornos clínicos, congresos y publicaciones médicas."
      },
      {
        question: "¿Pueden ayudarme a prepararme para una entrevista de residencia médica en EE.UU.?",
        answer: "Por supuesto. Ayudamos a médicos a prepararse para entrevistas de residencia, incluyendo preguntas conductuales, presentaciones de casos, y el estilo de comunicación que buscan los directores de programas de EE.UU. Muchos de nuestros clientes médicos han asegurado posiciones en programas de primer nivel."
      },
      {
        question: "¿Ayudan con la redacción de publicaciones médicas en inglés?",
        answer: "Nos enfocamos en comunicación oral más que escrita, pero podemos ayudarte a practicar la presentación de tus hallazgos de investigación, discutir metodología con revisores, y comunicar tu trabajo publicado en congresos internacionales."
      },
      {
        question: "Soy médico en México y atiendo pacientes de habla inglesa. ¿Pueden ayudar?",
        answer: "Sí. Practicamos conversaciones de consulta, explicación de diagnósticos y opciones de tratamiento, discusión de riesgos y consentimiento, y manejo de los aspectos emocionales de la comunicación clínica — todo en inglés, usando escenarios de tu práctica real."
      }
    ]
  },
  "high-stakes-english": {
    en: [
      {
        question: "What counts as a 'high-stakes' English situation?",
        answer: "Any moment where your English performance directly impacts your career or business — keynote presentations, media interviews, investor pitches, salary negotiations, job interviews at international companies, or critical client meetings where deals are won or lost."
      },
      {
        question: "How far in advance should I start preparing for a high-stakes event?",
        answer: "Ideally 2-4 weeks before the event. This gives us time for 4-6 focused sessions to prepare your content, practice delivery, rehearse Q&A scenarios, and build the confidence that comes from genuine preparation rather than just hoping for the best."
      },
      {
        question: "Can you help with presentation anxiety, not just language skills?",
        answer: "Yes. Performance anxiety and language anxiety compound each other. Our coaching addresses both — we build confidence through preparation, teach vocal techniques that project authority, and practice until the high-stakes moment feels familiar rather than terrifying."
      },
      {
        question: "Do you provide coaching for job interviews at international companies?",
        answer: "Absolutely. We help you prepare for behavioral interviews, case interviews, and technical interviews conducted in English. We practice common frameworks (STAR method), work on your personal narrative, and prepare you for the cultural expectations of US, UK, or Canadian interviewers."
      }
    ],
    es: [
      {
        question: "¿Qué cuenta como una situación de inglés de 'alto impacto'?",
        answer: "Cualquier momento donde tu desempeño en inglés impacta directamente tu carrera o negocio — presentaciones keynote, entrevistas con medios, pitches a inversionistas, negociaciones salariales, entrevistas de trabajo en empresas internacionales, o reuniones críticas con clientes donde se ganan o pierden negocios."
      },
      {
        question: "¿Con cuánta anticipación debo empezar a prepararme para un evento de alto impacto?",
        answer: "Idealmente 2-4 semanas antes del evento. Esto nos da tiempo para 4-6 sesiones enfocadas para preparar tu contenido, practicar entrega, ensayar escenarios de Q&A, y construir la confianza que viene de preparación genuina en lugar de solo esperar lo mejor."
      },
      {
        question: "¿Pueden ayudar con la ansiedad de presentación, no solo con habilidades de idioma?",
        answer: "Sí. La ansiedad de desempeño y la ansiedad por el idioma se multiplican entre sí. Nuestro coaching aborda ambas — construimos confianza a través de la preparación, enseñamos técnicas vocales que proyectan autoridad, y practicamos hasta que el momento de alto impacto se sienta familiar en lugar de aterrador."
      },
      {
        question: "¿Ofrecen coaching para entrevistas de trabajo en empresas internacionales?",
        answer: "Por supuesto. Te ayudamos a prepararte para entrevistas conductuales, de caso y técnicas en inglés. Practicamos frameworks comunes (método STAR), trabajamos en tu narrativa personal, y te preparamos para las expectativas culturales de entrevistadores de EE.UU., UK o Canadá."
      }
    ]
  },
  "interview-prep": {
    en: [
      {
        question: "How many sessions do I need for interview preparation?",
        answer: "For a specific interview, most clients do 3-5 intensive sessions over 1-2 weeks. We cover your personal story, STAR-method responses for behavioral questions, mock interviews with feedback, and the cultural nuances that US hiring managers expect."
      },
      {
        question: "Can you help me negotiate salary in English?",
        answer: "Yes. Salary negotiation requires specific language patterns — anchoring, counter-offering, justifying your value, and the assertive-but-collaborative tone that works in North American business culture. We practice until you're confident with numbers and objections."
      },
      {
        question: "I have an interview at a FAANG company. Can you prepare me?",
        answer: "Absolutely. Big tech interviews have specific communication patterns — structured answers, concise problem-solving narration, and behavioral questions that test leadership and collaboration. We practice the full interview loop format these companies use."
      },
      {
        question: "Do you help with interviews for remote positions at US companies?",
        answer: "Yes. Remote interviews have their own challenges — video presence, audio clarity, screen-sharing explanations, and the communication skills that convince a US hiring manager you can work effectively across borders and time zones."
      }
    ],
    es: [
      {
        question: "¿Cuántas sesiones necesito para preparación de entrevistas?",
        answer: "Para una entrevista específica, la mayoría de los clientes hacen 3-5 sesiones intensivas en 1-2 semanas. Cubrimos tu historia personal, respuestas con método STAR para preguntas conductuales, entrevistas simuladas con retroalimentación, y los matices culturales que esperan los hiring managers de EE.UU."
      },
      {
        question: "¿Pueden ayudarme a negociar salario en inglés?",
        answer: "Sí. La negociación salarial requiere patrones de lenguaje específicos — anclaje, contraofertas, justificación de tu valor, y el tono asertivo-pero-colaborativo que funciona en la cultura de negocios norteamericana. Practicamos hasta que estés seguro con números y objeciones."
      },
      {
        question: "Tengo una entrevista en una empresa FAANG. ¿Pueden prepararme?",
        answer: "Por supuesto. Las entrevistas en big tech tienen patrones de comunicación específicos — respuestas estructuradas, narración concisa de resolución de problemas, y preguntas conductuales que evalúan liderazgo y colaboración. Practicamos el formato completo de interview loop que usan estas empresas."
      },
      {
        question: "¿Ayudan con entrevistas para posiciones remotas en empresas de EE.UU.?",
        answer: "Sí. Las entrevistas remotas tienen sus propios retos — presencia en video, claridad de audio, explicaciones compartiendo pantalla, y las habilidades de comunicación que convencen a un hiring manager de EE.UU. de que puedes trabajar efectivamente a través de fronteras y zonas horarias."
      }
    ]
  },
  "public-speaking-english": {
    en: [
      {
        question: "Can you help me deliver a keynote speech in English?",
        answer: "Yes. We work on every aspect — opening hooks that grab attention, storytelling that holds it, transitions between sections, audience interaction, handling Q&A, and the vocal delivery and body language that distinguish a memorable speaker from a forgettable one."
      },
      {
        question: "I get nervous speaking English in front of groups. Can coaching help?",
        answer: "Absolutely. Public speaking anxiety multiplies when you're speaking in a second language. Our coaching builds confidence through progressive practice — starting with comfortable scenarios and building to increasingly challenging audiences until presenting feels natural."
      },
      {
        question: "Do you coach for virtual presentations too, not just in-person?",
        answer: "Yes. Virtual presentations require different skills — camera presence, slide pacing, voice modulation without physical cues, and engaging an audience you can't see. We practice the specific techniques that make virtual delivery compelling and authoritative."
      },
      {
        question: "Can I bring my actual presentation to practice in our sessions?",
        answer: "That's exactly how we work. Every session uses your real content — your slides, your script, your audience context. We refine your delivery until you can present your material with confidence, clarity, and the impact your message deserves."
      }
    ],
    es: [
      {
        question: "¿Pueden ayudarme a dar un keynote en inglés?",
        answer: "Sí. Trabajamos en cada aspecto — ganchos de apertura que capturan atención, storytelling que la mantiene, transiciones entre secciones, interacción con la audiencia, manejo de Q&A, y la entrega vocal y lenguaje corporal que distinguen a un orador memorable de uno olvidable."
      },
      {
        question: "Me pongo nervioso hablando inglés frente a grupos. ¿El coaching puede ayudar?",
        answer: "Por supuesto. La ansiedad de hablar en público se multiplica cuando hablas en un segundo idioma. Nuestro coaching construye confianza a través de práctica progresiva — comenzando con escenarios cómodos y avanzando a audiencias cada vez más retadoras hasta que presentar se sienta natural."
      },
      {
        question: "¿Dan coaching para presentaciones virtuales también, no solo presenciales?",
        answer: "Sí. Las presentaciones virtuales requieren habilidades diferentes — presencia ante cámara, ritmo de slides, modulación de voz sin señales físicas, y captar una audiencia que no puedes ver. Practicamos las técnicas específicas que hacen que la entrega virtual sea convincente y con autoridad."
      },
      {
        question: "¿Puedo traer mi presentación real para practicar en las sesiones?",
        answer: "Así es exactamente como trabajamos. Cada sesión usa tu contenido real — tus slides, tu guión, el contexto de tu audiencia. Refinamos tu entrega hasta que puedas presentar tu material con confianza, claridad y el impacto que tu mensaje merece."
      }
    ]
  },
  "technical-sales-english": {
    en: [
      {
        question: "How is technical sales English different from regular sales training?",
        answer: "Technical sales requires bridging two worlds — explaining complex products to non-technical buyers and building trust with technical evaluators. We train you on discovery calls, product demos, objection handling, and the consultative selling style that closes enterprise deals."
      },
      {
        question: "Can you help me run product demos in English for US clients?",
        answer: "Yes. Product demos are where deals are won or lost. We practice your demo flow, teach you to read audience signals, handle live questions mid-demo, and recover gracefully when something doesn't work as planned — all in confident, clear English."
      },
      {
        question: "I need to present technical solutions to C-level buyers. Can you help?",
        answer: "Absolutely. Selling to executives requires a different communication style than selling to technical teams. We help you translate features into business value, create urgency without pressure, and speak the ROI language that C-level decision-makers respond to."
      },
      {
        question: "Do you help with written communication like proposals and follow-up emails?",
        answer: "Our primary focus is spoken communication — calls, demos, and meetings. However, we can help you craft and practice verbal versions of your proposals, elevator pitches, and the persuasive language patterns that carry over into your written follow-ups."
      }
    ],
    es: [
      {
        question: "¿En qué se diferencia el inglés de ventas técnicas del entrenamiento de ventas regular?",
        answer: "Las ventas técnicas requieren conectar dos mundos — explicar productos complejos a compradores no técnicos y construir confianza con evaluadores técnicos. Te entrenamos en llamadas de descubrimiento, demos de producto, manejo de objeciones, y el estilo de venta consultiva que cierra deals enterprise."
      },
      {
        question: "¿Pueden ayudarme a hacer demos de producto en inglés para clientes de EE.UU.?",
        answer: "Sí. Los demos de producto son donde se ganan o pierden los deals. Practicamos tu flujo de demo, te enseñamos a leer señales de la audiencia, manejar preguntas en vivo a medio demo, y recuperarte con gracia cuando algo no funciona como planeaste — todo en inglés claro y seguro."
      },
      {
        question: "Necesito presentar soluciones técnicas a compradores C-level. ¿Pueden ayudar?",
        answer: "Por supuesto. Vender a ejecutivos requiere un estilo de comunicación diferente que vender a equipos técnicos. Te ayudamos a traducir features en valor de negocio, crear urgencia sin presión, y hablar el lenguaje de ROI al que responden los tomadores de decisiones C-level."
      },
      {
        question: "¿Ayudan con comunicación escrita como propuestas y emails de seguimiento?",
        answer: "Nuestro enfoque principal es comunicación oral — llamadas, demos y reuniones. Sin embargo, podemos ayudarte a crear y practicar versiones verbales de tus propuestas, elevator pitches, y los patrones de lenguaje persuasivo que se trasladan a tus seguimientos escritos."
      }
    ]
  },
  "ongoing-coaching": {
    en: [
      {
        question: "How is this different from the Executive Communication Program?",
        answer: "The Executive Communication Program is a structured, performance-based sprint — formal assessments, a defined timeline, and a group presentation designed to surface gaps under pressure. This ongoing coaching format is more flexible and open-ended: no fixed structure, no performance milestones, and built around steady improvement in everyday professional communication."
      },
      {
        question: "What level of English do participants need?",
        answer: "Participants should be at intermediate level (B1) or above. The coaching is conducted entirely in English and is built around real professional communication — it's not a foundational language program. If someone is still building basic vocabulary and grammar, they aren't the right fit."
      },
      {
        question: "Why is small talk included? That sounds informal.",
        answer: "Small talk is a professional skill. It's how you open a business relationship before the agenda starts, build rapport with a client or colleague you've never met, and signal cultural fluency to the people around you. Professionals who can't engage naturally in informal English in a business setting often struggle to close deals, build trust, or be seen as full participants in meetings. We treat it as a real communication skill, not a social nicety."
      },
      {
        question: "How are sessions scheduled?",
        answer: "Scheduling is flexible and designed to work around professional calendars. Sessions are primarily conducted online via Google Meet. We'll coordinate timing based on your team's availability — there's no fixed weekly schedule that has to be adhered to rigidly."
      },
      {
        question: "Can I mix 1:1 and group sessions for my team?",
        answer: "Yes. Most teams benefit from a combination of both. Individual sessions address each person's specific gaps in a direct, private setting. Group sessions create the kind of dynamic, real-time communication pressure that individual sessions alone can't replicate. Robert will recommend a balance based on your team's size and goals."
      }
    ],
    es: [
      {
        question: "¿En qué se diferencia del Programa de Comunicación Ejecutiva?",
        answer: "El Programa de Comunicación Ejecutiva es un sprint estructurado y basado en desempeño — evaluaciones formales, una línea de tiempo definida y una presentación grupal diseñada para exponer brechas bajo presión. Este formato de coaching continuo es más flexible y abierto: sin estructura fija, sin hitos de desempeño, enfocado en la mejora constante de la comunicación profesional cotidiana."
      },
      {
        question: "¿Qué nivel de inglés necesitan los participantes?",
        answer: "Los participantes deben tener nivel intermedio (B1) o superior. El coaching se realiza íntegramente en inglés y está construido alrededor de la comunicación profesional real — no es un programa de inglés desde cero. Si alguien todavía está construyendo vocabulario y gramática básicos, no es el candidato adecuado."
      },
      {
        question: "¿Por qué incluyen small talk? Eso suena informal.",
        answer: "El small talk es una habilidad profesional. Es cómo se abre una relación de negocios antes de que empiece la agenda, cómo se construye rapport con un cliente o colega nuevo, y cómo se muestra fluidez cultural a quienes te rodean. Los profesionales que no pueden desenvolverse naturalmente en inglés informal en contextos de negocios con frecuencia tienen dificultades para cerrar tratos, generar confianza o ser percibidos como participantes plenos en reuniones. Lo tratamos como una habilidad de comunicación real, no como un detalle social."
      },
      {
        question: "¿Cómo se programan las sesiones?",
        answer: "La programación es flexible y está diseñada para adaptarse a las agendas profesionales. Las sesiones se realizan principalmente en línea por Google Meet. Coordinamos los horarios según la disponibilidad de tu equipo — no hay un horario semanal fijo que deba seguirse de manera rígida."
      },
      {
        question: "¿Puedo combinar sesiones individuales y grupales para mi equipo?",
        answer: "Sí. La mayoría de los equipos se benefician de una combinación de ambas. Las sesiones individuales abordan las brechas específicas de cada persona en un entorno directo y privado. Las sesiones grupales crean el tipo de presión dinámica de comunicación en tiempo real que las sesiones individuales por sí solas no pueden replicar. Robert recomendará un equilibrio basado en el tamaño y los objetivos de tu equipo."
      }
    ]
  },
  "corporate-package": {
    en: [
      {
        question: "How is this different from sending employees to a regular English course?",
        answer: "A standard English course teaches grammar and vocabulary to a generic syllabus. This program builds around each participant's actual role, their real presentations, and their specific communication gaps — then uses peer pressure in the group session to surface the gap between private preparation and public performance. That's a different problem and a different solution."
      },
      {
        question: "What level of English do participants need to join this program?",
        answer: "Participants should be able to hold a professional English conversation — at least intermediate level (B1+). This is not a beginner program. The work in Phase 1 is preparation for performance, not foundational language learning."
      },
      {
        question: "What happens if a participant has a bad group presentation session?",
        answer: "A difficult group session is part of the design, not a failure. It produces precise data about exactly where that person's gap is — which is more valuable than a comfortable session that masks the real problem. Robert uses Phase 3 to debrief directly, honestly, and constructively with each participant."
      },
      {
        question: "How is pricing structured for a team?",
        answer: "The program is priced at 600 MXN per session per participant. Total investment per participant typically ranges from 7,200 to 10,200 MXN across all three phases, depending on session frequency and schedule. Mexican facturas are issued monthly and a consolidated invoice is available for the company."
      },
      {
        question: "Can we run this program in Spanish?",
        answer: "The program is conducted in English — that's the point. Robert understands Spanish and can provide context or clarification in Spanish when needed, but the coaching sessions and group presentation are in English. The pressure of speaking English in front of peers is the core mechanism of the program."
      }
    ],
    es: [
      {
        question: "¿En qué se diferencia esto de enviar empleados a un curso de inglés regular?",
        answer: "Un curso de inglés estándar enseña gramática y vocabulario con un temario genérico. Este programa está construido alrededor del rol real de cada participante, sus presentaciones reales y sus brechas de comunicación específicas — y luego usa la presión de pares en la sesión grupal para sacar a la luz la brecha entre la preparación privada y el desempeño público. Es un problema diferente y requiere una solución diferente."
      },
      {
        question: "¿Qué nivel de inglés necesitan tener los participantes para unirse a este programa?",
        answer: "Los participantes deben poder sostener una conversación profesional en inglés — al menos nivel intermedio (B1+). Este no es un programa para principiantes. El trabajo en la Fase 1 es preparación para el desempeño, no aprendizaje del idioma desde cero."
      },
      {
        question: "¿Qué pasa si un participante tiene una mala sesión de presentación grupal?",
        answer: "Una sesión grupal difícil es parte del diseño, no un fracaso. Produce datos precisos sobre exactamente dónde está la brecha de esa persona — lo cual es más valioso que una sesión cómoda que oculta el problema real. Robert usa la Fase 3 para debriefar directa, honesta y constructivamente con cada participante."
      },
      {
        question: "¿Cómo se estructura el precio para un equipo?",
        answer: "El programa tiene un precio de 600 MXN por sesión por participante. La inversión total por participante típicamente oscila entre 7,200 y 10,200 MXN a lo largo de las tres fases, según la frecuencia de sesiones y la agenda. Las facturas mexicanas se emiten mensualmente y hay una factura consolidada disponible para la empresa."
      },
      {
        question: "¿Podemos hacer este programa en español?",
        answer: "El programa se realiza en inglés — ese es el punto. Robert entiende español y puede proporcionar contexto o aclaraciones en español cuando sea necesario, pero las sesiones de coaching y la presentación grupal son en inglés. La presión de hablar inglés frente a los pares es el mecanismo central del programa."
      }
    ]
  }
};
