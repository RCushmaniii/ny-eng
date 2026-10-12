/**
 * The Corporate English Training Audit — single source of content.
 *
 * Feeds three surfaces, so the guide can never drift between them:
 *   - the ungated HTML guide  /en/guide/corporate-english-training-audit/
 *                             /es/guia/auditoria-ingles-corporativo/
 *   - the print layout        /print/corporate-audit/{en,es}/  (noindex)
 *   - the PDF in public/downloads/, generated FROM the print layout by
 *     scripts/build-audit-pdf.mjs. Edit here, then re-run that script.
 *
 * Replaces the NotebookLM slide export (13 image-only pages, zero extractable
 * text, watermark on every page) that held this content until 2026-10-12.
 */

export type AuditLang = "en" | "es";

export interface AuditQuestion {
  /** Stable anchor id, same in both languages so deep links survive a language switch. */
  id: string;
  question: string;
  /** One-line framing under the heading. */
  lede: string;
  body: string[];
  /** Optional labelled comparison (trap vs standard, formats, ...). */
  points?: Array<{ label: string; text: string }>;
  /** The question to ask the provider. Becomes the FAQPage answer. */
  checkpoint: string;
}

export interface AuditContent {
  title: string;
  subtitle: string;
  audience: string;
  seoTitle: string;
  seoDescription: string;
  checkpointLabel: string;
  introHeading: string;
  intro: string[];
  pullQuote: string;
  stakesHeading: string;
  stakes: string[];
  questions: AuditQuestion[];
  progressHeading: string;
  progress: string[];
  progressBefore: string;
  progressAfter: string;
  beforeLabel: string;
  afterLabel: string;
  flagsHeading: string;
  redFlagsLabel: string;
  redFlags: string[];
  greenFlagsLabel: string;
  greenFlags: string[];
  closingHeading: string;
  closing: string;
  callPoints: string[];
  bookLabel: string;
  bookUrl: string;
  pdfHeading: string;
  pdfBody: string;
  pdfLink: string;
  pdfUrl: string;
  tocLabel: string;
  author: string;
}

const en: AuditContent = {
  title: "The Corporate English Training Audit",
  subtitle: "7 questions to ask before you invest",
  audience:
    "A practical guide for HR leaders, Learning & Development managers, and executives evaluating English training programs.",
  seoTitle: "Corporate English Training Audit: 7 Questions to Ask",
  seoDescription:
    "Seven questions HR leaders should ask any corporate English provider before signing: customization, measurement, timelines, format, and accountability.",
  checkpointLabel: "Ask the provider",
  introHeading: "The illusion of progress",
  intro: [
    "The usual pattern looks like success on paper. Employees complete their sessions, attendance is recorded, and the budget is approved again next year, because nobody measured anything that would say otherwise.",
    "Meanwhile the manager sees no change in how those people perform in English. Communication stays unclear, decisions get delayed, client relationships take damage, and professional opportunities go to someone else.",
  ],
  pullQuote:
    "Most corporate English programs do not fail because employees are not trying. They fail because the program was never designed to produce business results.",
  stakesHeading: "What is actually at stake",
  stakes: [
    "For companies with international teams or global clients, English communication is not a soft skill. It is operational infrastructure. Unclear communication in an international team turns into slower decisions, then more errors, then more rework, and finally weaker client relationships.",
    "The right investment shows visible results within months. The wrong one produces completed attendance records and nothing else. These seven questions tell the two apart before you sign.",
  ],
  questions: [
    {
      id: "q1-built-for-your-team",
      question: "Is the program built for your team, or is it generic?",
      lede: "“Business English” is a category, not a program.",
      body: [
        "A software engineer and a sales director both need “business English,” and almost nothing else about their needs overlaps. The engineer has to write clear technical documentation, and failure there means system errors and delayed sprints. The director has to lead high-stakes client calls, and failure there means lost revenue and damaged trust.",
      ],
      points: [
        {
          label: "Software engineer",
          text: "Core task: clear technical documentation. Format: technical discussions and asynchronous text. Cost of failure: system errors, delayed sprints.",
        },
        {
          label: "Sales director",
          text: "Core task: high-stakes client calls. Format: live negotiation and persuasive presentation. Cost of failure: lost revenue, damaged trust.",
        },
      ],
      checkpoint:
        "Ask: “How would you structure sessions differently for a developer versus a director?” If the provider gives the same answer for every role, the program is generic, and generic programs produce generic results.",
    },
    {
      id: "q2-measuring-progress",
      question: "How does the program measure progress?",
      lede: "Grammar test scores are not business outcomes.",
      body: [
        "The trap is a program that reports grammar test scores, which lets a provider sell sessions without ever committing to an outcome. The standard is a program that starts from a baseline assessment and measures execution quality until business risk visibly drops.",
      ],
      points: [
        { label: "The trap", text: "Grammar test scores. Sessions sold without outcomes." },
        {
          label: "The standard",
          text: "Demonstrated business outcomes: baseline assessment, then execution quality, then reduced business risk.",
        },
      ],
      checkpoint:
        "Ask for outcomes stated as observable behavior: “This manager can lead a client call independently by week 8.” “This engineer can explain technical issues live without follow-up clarification.” “This director can present quarterly results without preparation anxiety.” Demonstrated capability in real situations is the measure.",
    },
    {
      id: "q3-time-to-results",
      question: "How long until we see results in real business situations?",
      lede: "Realistic timelines come with a method attached.",
      body: [
        "Be cautious of programs that promise fast results without explaining how. Higher-level communication, such as executive presence and negotiation, takes two to four months of focused work.",
      ],
      points: [
        {
          label: "Weeks 1–4",
          text: "Cleaner communication, more confident meeting participation, fewer daily misunderstandings.",
        },
        {
          label: "Weeks 5–8",
          text: "More structured responses, less hesitation, greater control in discussions.",
        },
        {
          label: "Weeks 8–12+",
          text: "Leading conversations, handling pressure effectively, clarity that holds up.",
        },
      ],
      checkpoint:
        "Ask what changes by week 4, by week 8 and by week 12, and how each change will be observed. A provider who cannot name the stages has not planned them.",
    },
    {
      id: "q4-instruction-format",
      question: "What is the instruction format, and why does it matter?",
      lede: "Format should follow the person, not the provider’s scheduling.",
      body: ["Each format has a job. The mistake is a provider that only offers one of them."],
      points: [
        {
          label: "Large group classes",
          text: "Move at the pace of the group and cannot address individual weaknesses.",
        },
        {
          label: "Small group (3–4 people)",
          text: "Highly effective when peers share the same role, the same gaps, and the same goals.",
        },
        {
          label: "One-on-one",
          text: "The fastest path to improvement for high-priority roles.",
        },
      ],
      checkpoint:
        "Ask how they determine the format for each employee. A provider offering only one format is not personalizing the program. They are simplifying their own operations.",
    },
    {
      id: "q5-instructor-business-experience",
      question: "Does the instructor understand business, not just language?",
      lede: "Teaching skill and professional experience are two different qualifications.",
      body: [
        "A certified language teacher brings training in linguistics and teaching methods. Someone with professional experience knows the operational cost when a message is unclear at the wrong moment. A business communication coach has both: strong teaching skills and direct experience in professional contexts.",
      ],
      checkpoint:
        "Ask about the instructor’s background outside the classroom. Have they coached the specific type of professional your team needs?",
    },
    {
      id: "q6-real-work",
      question: "Does the program use real work, or simulated exercises?",
      lede: "Practice has to happen on the job, not next to it.",
      body: [
        "Fictional business situations and generic exercises produce classroom improvement that does not transfer to the job at speed or in depth. Real emails from last week, the presentation currently in preparation, and specific client scenarios produce on-the-job improvement that transfers immediately.",
        "Building sessions from the learner’s actual work materials decides whether the training sits beside the job or connects directly to it.",
      ],
      checkpoint:
        "Ask what material a typical session is built on. If the answer is a textbook unit rather than the participant’s own documents and meetings, expect skills that stay in the classroom.",
    },
    {
      id: "q7-success-and-responsibility",
      question: "What does success look like, and who is responsible?",
      lede: "Results come from three parties, not one.",
      body: [
        "Success is shared. If any one of the three parties does not hold up its part, results stall regardless of the other two.",
      ],
      points: [
        {
          label: "The learner",
          text: "Practices consistently and applies corrections in real conversations.",
        },
        {
          label: "The instructor",
          text: "Diagnoses gaps and corrects in real time, under pressure.",
        },
        {
          label: "The organization",
          text: "Protects training time and aligns training with job demands.",
        },
      ],
      checkpoint:
        "Agree up front how success is measured on three dimensions: execution quality (clarity, structure, faster responses), risk reduction (fewer misunderstandings, faster decision cycles) and support reduction (less prompting, fewer corrections).",
    },
  ],
  progressHeading: "The true measure of progress: from dependency to autonomy",
  progress: [
    "Progress is not a fixed level. It is a steady reduction in dependency. At the start, people need help finding words, need someone else to correct them, and need time to organize what they want to say. That gap between the support required and the capability available is operational business risk.",
    "As training works, the support curve falls and autonomy rises: faster responses and independent handling of conversations.",
  ],
  beforeLabel: "Before",
  afterLabel: "After",
  progressBefore: "“I think maybe the issue is… something with the system.”",
  progressAfter: "“The issue is in the integration layer.”",
  flagsHeading: "The final standard: efficiency vs. effectiveness",
  redFlagsLabel: "Warning signs of an efficiency-driven program",
  redFlags: [
    "“All levels welcome,” with no segmentation by role.",
    "No baseline assessment tied to real job demands.",
    "Price is the only differentiator.",
    "A fixed, generic curriculum for every student regardless of industry.",
  ],
  greenFlagsLabel: "Signs of an outcome-driven program",
  greenFlags: [
    "Content built around each person’s level, role and professional goals.",
    "Progress tracked by execution quality, not just language proficiency.",
    "Format and intensity that adjust as the learner develops.",
    "Performance measured under real business conditions.",
  ],
  closingHeading: "You now have the right questions",
  closing:
    "Most organizations evaluate English training using the wrong criteria. If you want a direct, honest conversation about where communication is breaking down in your team, let’s talk.",
  callPoints: [
    "Evaluate your team’s communication gaps.",
    "Determine realistic, measurable outcomes.",
    "No sales presentation. No pressure to commit.",
  ],
  bookLabel: "Book a 30-minute discovery call",
  bookUrl: "https://www.nyenglishteacher.com/en/book/",
  pdfHeading: "Need to share this with your director?",
  pdfBody:
    "The same guide as a printable PDF, ready to forward internally or attach to a vendor evaluation.",
  pdfLink: "Download the PDF",
  pdfUrl: "/downloads/Corporate_English_Audit_EN.pdf",
  tocLabel: "The seven questions",
  author: "Robert Cushman · NY English Teacher",
};

const es: AuditContent = {
  title: "Auditoría de Capacitación en Inglés Corporativo",
  subtitle: "7 preguntas antes de invertir",
  audience:
    "Una guía práctica para líderes de Recursos Humanos, responsables de Capacitación y Desarrollo, y ejecutivos que evalúan programas de inglés.",
  seoTitle: "Auditoría de Inglés Corporativo: 7 Preguntas Clave",
  seoDescription:
    "Siete preguntas que RH y Capacitación deben hacer a cualquier proveedor de inglés corporativo antes de firmar: personalización, medición, tiempos y formato.",
  checkpointLabel: "Pregúntale al proveedor",
  introHeading: "La ilusión del progreso",
  intro: [
    "El patrón habitual se ve como un éxito en el papel. Los colaboradores completan sus sesiones, se registra la asistencia y el presupuesto se aprueba de nuevo el año siguiente, porque nadie midió nada que dijera lo contrario.",
    "Mientras tanto, el gerente no ve ningún cambio en cómo esas personas se desempeñan en inglés. La comunicación sigue siendo poco clara, las decisiones se retrasan, las relaciones con clientes se desgastan y las oportunidades profesionales se las lleva alguien más.",
  ],
  pullQuote:
    "La mayoría de los programas de inglés corporativo no fracasan porque los colaboradores no se esfuercen. Fracasan porque el programa nunca se diseñó para producir resultados de negocio.",
  stakesHeading: "Lo que realmente está en juego",
  stakes: [
    "Para empresas con equipos internacionales o clientes globales, la comunicación en inglés no es una habilidad blanda. Es infraestructura operativa. La comunicación poco clara en un equipo internacional se convierte en decisiones más lentas, luego en más errores, luego en más retrabajo y, al final, en relaciones más débiles con los clientes.",
    "La inversión correcta muestra resultados visibles en cuestión de meses. La equivocada produce listas de asistencia completas y nada más. Estas siete preguntas te permiten distinguirlas antes de firmar.",
  ],
  questions: [
    {
      id: "q1-built-for-your-team",
      question: "¿El programa está diseñado para tu equipo o es genérico?",
      lede: "“Inglés de negocios” es una categoría, no un programa.",
      body: [
        "Un ingeniero de software y un director comercial necesitan “inglés de negocios”, y casi nada más de lo que necesitan coincide. El ingeniero tiene que escribir documentación técnica clara, y fallar ahí significa errores en el sistema y sprints retrasados. El director tiene que liderar llamadas con clientes donde hay mucho en juego, y fallar ahí significa ingresos perdidos y confianza dañada.",
      ],
      points: [
        {
          label: "Ingeniero de software",
          text: "Tarea principal: documentación técnica clara. Formato: discusiones técnicas y texto asíncrono. Costo de fallar: errores en el sistema, sprints retrasados.",
        },
        {
          label: "Director comercial",
          text: "Tarea principal: llamadas con clientes de alto impacto. Formato: negociación en vivo y presentación persuasiva. Costo de fallar: ingresos perdidos, confianza dañada.",
        },
      ],
      checkpoint:
        "Pregunta: “¿Cómo estructurarías las sesiones de forma distinta para un desarrollador y para un director?” Si el proveedor da la misma respuesta para todos los puestos, el programa es genérico, y los programas genéricos producen resultados genéricos.",
    },
    {
      id: "q2-measuring-progress",
      question: "¿Cómo mide el programa el progreso?",
      lede: "Las calificaciones de gramática no son resultados de negocio.",
      body: [
        "La trampa es un programa que reporta calificaciones de exámenes de gramática, lo que le permite al proveedor vender sesiones sin comprometerse nunca con un resultado. El estándar es un programa que parte de una evaluación inicial y mide la calidad de ejecución hasta que el riesgo de negocio baja de forma visible.",
      ],
      points: [
        {
          label: "La trampa",
          text: "Calificaciones de gramática. Sesiones vendidas sin resultados.",
        },
        {
          label: "El estándar",
          text: "Resultados de negocio demostrados: evaluación inicial, luego calidad de ejecución, luego menor riesgo de negocio.",
        },
      ],
      checkpoint:
        "Pide resultados expresados como comportamiento observable: “Este gerente puede liderar una llamada con un cliente de forma independiente para la semana 8.” “Este ingeniero puede explicar problemas técnicos en vivo sin aclaraciones posteriores.” “Este director puede presentar los resultados trimestrales sin la ansiedad de la preparación.” La medida es la capacidad demostrada en situaciones reales.",
    },
    {
      id: "q3-time-to-results",
      question: "¿Cuánto tiempo pasa antes de ver resultados en situaciones reales de negocio?",
      lede: "Un plazo realista viene acompañado de un método.",
      body: [
        "Desconfía de los programas que prometen resultados rápidos sin explicar cómo. La comunicación de alto nivel, como la presencia ejecutiva y la negociación, requiere de dos a cuatro meses de trabajo enfocado.",
      ],
      points: [
        {
          label: "Semanas 1–4",
          text: "Comunicación más limpia, participación más segura en juntas, menos malentendidos en el día a día.",
        },
        {
          label: "Semanas 5–8",
          text: "Respuestas más estructuradas, menos titubeo, mayor control en las discusiones.",
        },
        {
          label: "Semanas 8–12+",
          text: "Liderar conversaciones, manejar la presión con eficacia, una claridad que se sostiene.",
        },
      ],
      checkpoint:
        "Pregunta qué cambia para la semana 4, para la semana 8 y para la semana 12, y cómo se va a observar cada cambio. Un proveedor que no puede nombrar las etapas no las ha planeado.",
    },
    {
      id: "q4-instruction-format",
      question: "¿Cuál es el formato de enseñanza y por qué importa?",
      lede: "El formato debe responder a la persona, no a la agenda del proveedor.",
      body: ["Cada formato tiene su función. El error es un proveedor que solo ofrece uno."],
      points: [
        {
          label: "Grupos grandes",
          text: "Avanzan al ritmo del grupo y no pueden atender las debilidades individuales.",
        },
        {
          label: "Grupos pequeños (3–4 personas)",
          text: "Muy eficaces cuando los participantes comparten el mismo puesto, las mismas áreas de oportunidad y los mismos objetivos.",
        },
        {
          label: "Uno a uno",
          text: "El camino más rápido para mejorar en los puestos prioritarios.",
        },
      ],
      checkpoint:
        "Pregunta cómo determinan el formato para cada colaborador. Un proveedor que solo ofrece un formato no está personalizando el programa. Está simplificando su propia operación.",
    },
    {
      id: "q5-instructor-business-experience",
      question: "¿El instructor entiende de negocios, no solo de idiomas?",
      lede: "Saber enseñar y tener experiencia profesional son dos credenciales distintas.",
      body: [
        "Un maestro de idiomas certificado aporta formación en lingüística y métodos de enseñanza. Alguien con experiencia profesional conoce el costo operativo de un mensaje poco claro en el momento equivocado. Un coach de comunicación de negocios tiene ambas cosas: buenas habilidades de enseñanza y experiencia directa en entornos profesionales.",
      ],
      checkpoint:
        "Pregunta por la trayectoria del instructor fuera del salón de clases. ¿Ha trabajado con el tipo específico de profesional que tu equipo necesita?",
    },
    {
      id: "q6-real-work",
      question: "¿El programa usa trabajo real o ejercicios simulados?",
      lede: "La práctica tiene que suceder en el trabajo, no a un lado de él.",
      body: [
        "Las situaciones de negocio ficticias y los ejercicios genéricos producen una mejora de salón de clases que no se traslada al trabajo con la velocidad ni la profundidad necesarias. Los correos reales de la semana pasada, la presentación que se está preparando y escenarios concretos con clientes producen una mejora en el trabajo que se aplica de inmediato.",
        "Construir las sesiones a partir de los materiales de trabajo reales de cada participante decide si la capacitación queda a un lado del trabajo o se conecta directamente con él.",
      ],
      checkpoint:
        "Pregunta con qué material se construye una sesión típica. Si la respuesta es una unidad de libro y no los documentos y juntas del propio participante, espera habilidades que se quedan en el salón.",
    },
    {
      id: "q7-success-and-responsibility",
      question: "¿Cómo se ve el éxito y quién es responsable?",
      lede: "Los resultados dependen de tres partes, no de una.",
      body: [
        "El éxito es compartido. Si cualquiera de las tres partes no cumple con lo suyo, los resultados se estancan sin importar lo que hagan las otras dos.",
      ],
      points: [
        {
          label: "El participante",
          text: "Practica con constancia y aplica las correcciones en conversaciones reales.",
        },
        {
          label: "El instructor",
          text: "Diagnostica áreas de oportunidad y corrige en tiempo real, bajo presión.",
        },
        {
          label: "La organización",
          text: "Protege el tiempo de capacitación y la alinea con las exigencias del puesto.",
        },
      ],
      checkpoint:
        "Acuerden desde el inicio cómo se va a medir el éxito en tres dimensiones: calidad de ejecución (claridad, estructura, respuestas más rápidas), reducción de riesgo (menos malentendidos, ciclos de decisión más rápidos) y reducción de apoyo (menos indicaciones, menos correcciones).",
    },
  ],
  progressHeading: "La verdadera medida del progreso: de la dependencia a la autonomía",
  progress: [
    "El progreso no es un nivel fijo. Es una reducción constante de la dependencia. Al principio, las personas necesitan ayuda para encontrar las palabras, necesitan que alguien más las corrija y necesitan tiempo para organizar lo que quieren decir. Esa brecha entre el apoyo que requieren y la capacidad que tienen es riesgo operativo para el negocio.",
    "Cuando la capacitación funciona, la necesidad de apoyo baja y la autonomía sube: respuestas más rápidas y manejo independiente de las conversaciones.",
  ],
  beforeLabel: "Antes",
  afterLabel: "Después",
  progressBefore: "“I think maybe the issue is… something with the system.”",
  progressAfter: "“The issue is in the integration layer.”",
  flagsHeading: "El estándar final: eficiencia vs. efectividad",
  redFlagsLabel: "Señales de alerta de un programa orientado a la eficiencia",
  redFlags: [
    "“Todos los niveles son bienvenidos”, sin segmentar por puesto.",
    "Sin evaluación inicial vinculada a las exigencias reales del puesto.",
    "El precio es lo único que lo diferencia.",
    "Un temario fijo y genérico para todos, sin importar la industria.",
  ],
  greenFlagsLabel: "Señales de un programa orientado a resultados",
  greenFlags: [
    "Contenido construido según el nivel, el puesto y los objetivos profesionales de cada persona.",
    "Progreso medido por la calidad de ejecución, no solo por el dominio del idioma.",
    "Formato e intensidad que se ajustan conforme avanza el participante.",
    "Desempeño medido en condiciones reales de negocio.",
  ],
  closingHeading: "Ya tienes las preguntas correctas",
  closing:
    "La mayoría de las organizaciones evalúa la capacitación en inglés con los criterios equivocados. Si quieres una conversación directa y honesta sobre dónde se está rompiendo la comunicación en tu equipo, platiquemos.",
  callPoints: [
    "Evaluamos las áreas de oportunidad de comunicación de tu equipo.",
    "Definimos resultados realistas y medibles.",
    "Sin presentación de ventas. Sin presión para comprometerte.",
  ],
  bookLabel: "Agenda una llamada de 30 minutos",
  bookUrl: "https://www.nyenglishteacher.com/es/reservar/",
  pdfHeading: "¿Necesitas compartir esto con tu director?",
  pdfBody:
    "La misma guía en PDF, lista para reenviar internamente o adjuntar a una evaluación de proveedores.",
  pdfLink: "Descargar el PDF",
  pdfUrl: "/downloads/Corporate_English_Audit_ES.pdf",
  tocLabel: "Las siete preguntas",
  author: "Robert Cushman · NY English Teacher",
};

export const corporateAudit: Record<AuditLang, AuditContent> = { en, es };
