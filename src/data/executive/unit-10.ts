// Unit 10 — Your Executive Voice
// "Integrate everything. Record your capstone. Step into the room as a leader."
//
// This is the capstone unit — it ties together ALL mechanics from Units 1-9.
// Uses a MIX of drill types as an integration exercise:
// 10.1 Integration Review (VerbUpgradeLab) — applying precision verbs to full executive scenarios
// 10.2 Personal Brand in English (WeakStrongElite) — how you want to be heard
// 10.3 Capstone Preparation (StructuredResponse) — full 60-second executive updates
//
// Content sourced from Robert's real C1 and C2 executive lessons.

import type {
  VerbUpgradeItem,
  WeakStrongEliteItem,
  StructuredResponseItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit10Sections: UnitSection[] = [
  {
    number: 1,
    title: "Integration Review",
    titleEs: "Revisión Integradora",
    why: "This is where everything comes together. You've built precision verbs, structured frameworks, executive connectors, and storytelling skills across nine units. Now you apply them all at once — in the kind of complex, high-stakes scenarios where real executive communication happens.",
    whyEs: "Aquí es donde todo se une. Has construido verbos de precisión, marcos estructurados, conectores ejecutivos y habilidades narrativas a lo largo de nueve unidades. Ahora los aplicas todos a la vez — en el tipo de escenarios complejos y de alto impacto donde ocurre la comunicación ejecutiva real.",
    mechanic: "verb-upgrade",
    techniqueFocus: "Integration means using verb precision, structured thinking, and executive connectors — all in the same reply. If you can do that, you own the mechanics.",
    techniqueFocusEs: "Integración significa usar precisión verbal, pensamiento estructurado y conectores ejecutivos — todo en la misma respuesta. Si puedes hacer eso, dominas las mecánicas.",
    rapidRepeat: [
      { text: "We diagnosed the root cause and restructured the approach.", textEs: "Diagnosticamos la causa raíz y reestructuramos el enfoque." },
      { text: "Every verb signals a specific analytical operation.", textEs: "Cada verbo señala una operación analítica específica." },
      { text: "We re-evaluated our assumptions and committed to a revised direction.", textEs: "Re-evaluamos nuestras suposiciones y nos comprometimos con una dirección revisada." },
    ],
  },
  {
    number: 2,
    title: "Personal Brand in English",
    titleEs: "Marca Personal en Inglés",
    why: "How you introduce yourself, describe your role, and position your expertise is the first executive impression you make. A vague self-description signals a vague professional. A precise, confident one signals a leader who knows their value and their domain.",
    whyEs: "Cómo te presentas, describes tu rol y posicionas tu experiencia es la primera impresión ejecutiva que generas. Una autodescripción vaga señala un profesional vago. Una precisa y segura señala a un líder que conoce su valor y su dominio.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "Your self-description IS your executive brand. Vague = forgettable. Precise = credible. Every word in your introduction should earn its place.",
    techniqueFocusEs: "Tu autodescripción ES tu marca ejecutiva. Vago = olvidable. Preciso = creíble. Cada palabra en tu presentación debe ganarse su lugar.",
    rapidRepeat: [
      { text: "I lead operational execution across three regions.", textEs: "Lidero la ejecución operativa en tres regiones." },
      { text: "My mandate is to deliver operational consistency.", textEs: "Mi mandato es entregar consistencia operativa." },
      { text: "I bring 12 years of experience scaling operations.", textEs: "Aporto 12 años de experiencia escalando operaciones." },
    ],
  },
  {
    number: 3,
    title: "Capstone Preparation",
    titleEs: "Preparación para el Proyecto Final",
    why: "This is the dress rehearsal. You'll deliver full 60-second executive updates using the strongest frameworks from the course. If you can do this cleanly — with precision verbs, structured thinking, and confident delivery — you're ready for the capstone recording.",
    whyEs: "Este es el ensayo general. Entregarás actualizaciones ejecutivas completas de 60 segundos usando los marcos más fuertes del curso. Si puedes hacerlo con fluidez — con verbos de precisión, pensamiento estructurado y entrega segura — estás listo para la grabación del proyecto final.",
    mechanic: "structured-response",
    techniqueFocus: "Context → Tension → Insight → Action → Outcome. This is the storytelling framework — the most powerful one for the capstone. Master it, and every executive conversation becomes an opportunity to lead.",
    techniqueFocusEs: "Contexto → Tensión → Perspectiva → Acción → Resultado. Este es el marco narrativo — el más poderoso para el proyecto final. Domínalo, y cada conversación ejecutiva se convierte en una oportunidad para liderar.",
    rapidRepeat: [
      { text: "Operations are stable overall, but we are seeing…", textEs: "Las operaciones están estables en general, pero estamos viendo…" },
      { text: "What this indicates is…", textEs: "Lo que esto indica es…" },
      { text: "Based on this, I recommend…", textEs: "Basado en esto, recomiendo…" },
      { text: "We expect results to materialize within…", textEs: "Esperamos que los resultados se materialicen dentro de…" },
    ],
  },
];

// ─── Section 10.1 — Integration Review (VerbUpgradeLab) ───────────────────

export const unit10Section1Drills: VerbUpgradeItem[] = [
  {
    weak: "We had some problems with the project and worked on fixing them.",
    weakEs: "Tuvimos algunos problemas con el proyecto y trabajamos en resolverlos.",
    options: [
      {
        verb: "Diagnosed",
        verbEs: "Diagnosticamos",
        usage: "Root-cause identification — signals you went beneath the surface",
        usageEs: "Identificación de causa raíz — señala que fuiste más allá de la superficie",
      },
      {
        verb: "Restructured",
        verbEs: "Reestructuramos",
        usage: "Systemic redesign — signals you changed the approach, not just patched",
        usageEs: "Rediseño sistémico — señala que cambiaste el enfoque, no solo parcheaste",
      },
      {
        verb: "Resolved",
        verbEs: "Resolvimos",
        usage: "Definitive closure — signals the issue is handled, not ongoing",
        usageEs: "Cierre definitivo — señala que el problema está manejado, no en curso",
      },
    ],
    modelReply: "We diagnosed a dependency bottleneck in the delivery pipeline, restructured the workstream sequencing to eliminate the constraint, and resolved the backlog within two sprints.",
    modelReplyEs: "Diagnosticamos un cuello de botella de dependencias en el pipeline de entrega, reestructuramos la secuencia de flujos de trabajo para eliminar la restricción y resolvimos el atraso en dos sprints.",
    whyItWorks: "You just used verb precision, structured thinking, and executive connectors — all in one reply.",
    whyItWorksEs: "Acabas de usar precisión verbal, pensamiento estructurado y conectores ejecutivos — todo en una sola respuesta.",
    elite: {
      verb: "Narrative Arc",
      verbEs: "Arco Narrativo",
      modelReply: "The project was tracking on schedule until we hit a dependency bottleneck in Sprint 4. What became clear was that the original workstream sequencing assumed linear progression — which didn't hold under load. We restructured the pipeline to run parallel tracks, resolved the backlog within two sprints, and delivered on the original date.",
      modelReplyEs: "El proyecto estaba en camino según lo programado hasta que encontramos un cuello de botella de dependencias en el Sprint 4. Lo que quedó claro fue que la secuencia original de flujos de trabajo asumía una progresión lineal — lo cual no se sostuvo bajo carga. Reestructuramos el pipeline para ejecutar carriles paralelos, resolvimos el atraso en dos sprints y entregamos en la fecha original.",
      c2Insight: "The narrative arc transforms a problem report into a leadership story — you show the challenge, the insight, the action, and the result.",
      c2InsightEs: "El arco narrativo transforma un reporte de problemas en una historia de liderazgo — muestras el desafío, la perspectiva, la acción y el resultado.",
    },
  },
  {
    weak: "We talked about the numbers and decided to change things.",
    weakEs: "Hablamos de los números y decidimos cambiar cosas.",
    options: [
      {
        verb: "Analyzed",
        verbEs: "Analizamos",
        usage: "Systematic examination — signals methodical, data-driven review",
        usageEs: "Examen sistemático — señala revisión metódica y basada en datos",
      },
      {
        verb: "Reconciled",
        verbEs: "Conciliamos",
        usage: "Resolving discrepancies — signals you found and fixed mismatches",
        usageEs: "Resolución de discrepancias — señala que encontraste y corregiste desajustes",
      },
      {
        verb: "Determined",
        verbEs: "Determinamos",
        usage: "Definitive conclusion — signals you reached a clear, defensible position",
        usageEs: "Conclusión definitiva — señala que llegaste a una posición clara y defendible",
      },
    ],
    modelReply: "We analyzed the quarterly variance, reconciled the discrepancy between projected and actual revenue, and determined that the shortfall was driven by delayed enterprise renewals — not pipeline weakness.",
    modelReplyEs: "Analizamos la variación trimestral, conciliamos la discrepancia entre ingresos proyectados y reales, y determinamos que el déficit fue impulsado por renovaciones empresariales retrasadas — no por debilidad del pipeline.",
    whyItWorks: "Every verb signals a specific analytical operation. The listener trusts your judgment.",
    whyItWorksEs: "Cada verbo señala una operación analítica específica. El oyente confía en tu juicio.",
  },
  {
    weak: "We looked at what happened and told the team to do better.",
    weakEs: "Revisamos lo que pasó y le dijimos al equipo que mejorara.",
    options: [
      {
        verb: "Assessed",
        verbEs: "Evaluamos",
        usage: "Structured evaluation — signals a disciplined review, not casual observation",
        usageEs: "Evaluación estructurada — señala una revisión disciplinada, no observación casual",
      },
      {
        verb: "Reframed",
        verbEs: "Replanteamos",
        usage: "Perspective shift — signals you changed how the team sees the problem",
        usageEs: "Cambio de perspectiva — señala que cambiaste cómo el equipo ve el problema",
      },
      {
        verb: "Operationalized",
        verbEs: "Operacionalizamos",
        usage: "Turning insight into action — signals systematic implementation",
        usageEs: "Convertir perspectiva en acción — señala implementación sistemática",
      },
    ],
    modelReply: "We assessed the root cause of the performance gap, reframed the issue from individual accountability to a process design problem, and operationalized a new quality gate that prevents recurrence.",
    modelReplyEs: "Evaluamos la causa raíz de la brecha de rendimiento, replanteamos el problema de responsabilidad individual a un problema de diseño de procesos, y operacionalizamos una nueva puerta de calidad que previene la recurrencia.",
    whyItWorks: "You showed progressive thinking — assessment, reinterpretation, then systematic action.",
    whyItWorksEs: "Mostraste pensamiento progresivo — evaluación, reinterpretación, y luego acción sistemática.",
    elite: {
      verb: "Accountability Framework",
      verbEs: "Marco de Responsabilidad",
      modelReply: "The team underdelivered on the last sprint — I take responsibility for that. The root cause was a process gap: we didn't have a quality gate between development and release. We've since operationalized a structured review checkpoint, and early indicators show a 40% reduction in defects. The system now prevents the problem, not just detects it.",
      modelReplyEs: "El equipo no cumplió en el último sprint — asumo la responsabilidad. La causa raíz fue una brecha de proceso: no teníamos una puerta de calidad entre desarrollo y lanzamiento. Desde entonces hemos operacionalizado un punto de revisión estructurado, y los indicadores tempranos muestran una reducción del 40% en defectos. El sistema ahora previene el problema, no solo lo detecta.",
      c2Insight: "The Acknowledge → Explain → Action → Prevention framework turns a failure into a leadership moment — you own it, explain it, fix it, and prove it won't recur.",
      c2InsightEs: "El marco Reconocer → Explicar → Acción → Prevención convierte un fracaso en un momento de liderazgo — lo asumes, lo explicas, lo corriges y demuestras que no se repetirá.",
    },
  },
  {
    weak: "Things changed and we had to adjust.",
    weakEs: "Las cosas cambiaron y tuvimos que ajustarnos.",
    options: [
      {
        verb: "Re-evaluated",
        verbEs: "Re-evaluamos",
        usage: "Deliberate reassessment — signals you revisited assumptions with fresh data",
        usageEs: "Reevaluación deliberada — señala que revisitaste suposiciones con datos nuevos",
      },
      {
        verb: "Restructured",
        verbEs: "Reestructuramos",
        usage: "Systemic redesign — signals you changed the architecture, not just the surface",
        usageEs: "Rediseño sistémico — señala que cambiaste la arquitectura, no solo la superficie",
      },
      {
        verb: "Committed",
        verbEs: "Nos comprometimos",
        usage: "Decisive alignment — signals leadership conviction, not passive acceptance",
        usageEs: "Alineación decisiva — señala convicción de liderazgo, no aceptación pasiva",
      },
    ],
    modelReply: "When market conditions shifted, we re-evaluated our assumptions, restructured the go-to-market timeline to reflect the new competitive landscape, and committed to a revised delivery strategy that protected margin while accelerating time-to-value.",
    modelReplyEs: "Cuando las condiciones del mercado cambiaron, re-evaluamos nuestras suposiciones, reestructuramos el cronograma de salida al mercado para reflejar el nuevo panorama competitivo, y nos comprometimos con una estrategia de entrega revisada que protegió el margen mientras aceleraba el tiempo hasta el valor.",
    whyItWorks: "You framed the change as strategic evolution, not reactive scrambling.",
    whyItWorksEs: "Enmarcaste el cambio como evolución estratégica, no como improvisación reactiva.",
  },
];

// ─── Section 10.2 — Personal Brand in English (WeakStrongElite) ───────────

export const unit10Section2Drills: WeakStrongEliteItem[] = [
  {
    weak: "I work in operations.",
    weakEs: "Trabajo en operaciones.",
    strong: "I lead operational execution across three regions.",
    strongEs: "Lidero la ejecución operativa en tres regiones.",
    elite: "I lead operational execution across three regions, with a focus on scaling delivery systems and reducing cost-to-serve.",
    eliteEs: "Lidero la ejecución operativa en tres regiones, con un enfoque en escalar sistemas de entrega y reducir el costo de servicio.",
    note: "Your self-description IS your executive brand. Vague = forgettable. Precise = credible.",
    noteEs: "Tu autodescripción ES tu marca ejecutiva. Vago = olvidable. Preciso = creíble.",
  },
  {
    weak: "I'm in charge of the team.",
    weakEs: "Estoy a cargo del equipo.",
    strong: "I oversee a cross-functional team of 15 focused on client delivery.",
    strongEs: "Superviso un equipo multifuncional de 15 personas enfocado en la entrega al cliente.",
    elite: "I lead a cross-functional team of 15, accountable for client delivery, operational performance, and stakeholder alignment.",
    eliteEs: "Lidero un equipo multifuncional de 15 personas, responsable de la entrega al cliente, el rendimiento operativo y la alineación de stakeholders.",
    note: "Your self-description IS your executive brand. Vague = forgettable. Precise = credible.",
    noteEs: "Tu autodescripción ES tu marca ejecutiva. Vago = olvidable. Preciso = creíble.",
  },
  {
    weak: "I've been doing this for a while.",
    weakEs: "He estado haciendo esto por un tiempo.",
    strong: "I bring 12 years of experience in supply chain optimization.",
    strongEs: "Aporto 12 años de experiencia en optimización de cadena de suministro.",
    elite: "I bring 12 years of experience scaling supply chain operations across Latin America, with particular depth in cross-border logistics.",
    eliteEs: "Aporto 12 años de experiencia escalando operaciones de cadena de suministro en toda América Latina, con particular profundidad en logística transfronteriza.",
    note: "Your self-description IS your executive brand. Vague = forgettable. Precise = credible.",
    noteEs: "Tu autodescripción ES tu marca ejecutiva. Vago = olvidable. Preciso = creíble.",
  },
  {
    weak: "My job is to make sure things run smoothly.",
    weakEs: "Mi trabajo es asegurarme de que las cosas funcionen bien.",
    strong: "My role is to ensure operational consistency and drive continuous improvement.",
    strongEs: "Mi rol es asegurar la consistencia operativa e impulsar la mejora continua.",
    elite: "My mandate is to deliver operational consistency, identify efficiency gains, and build the systems that allow the organization to scale.",
    eliteEs: "Mi mandato es entregar consistencia operativa, identificar ganancias de eficiencia y construir los sistemas que permitan a la organización escalar.",
    note: "Your self-description IS your executive brand. Vague = forgettable. Precise = credible.",
    noteEs: "Tu autodescripción ES tu marca ejecutiva. Vago = olvidable. Preciso = creíble.",
  },
  {
    weak: "I handle problems when they come up.",
    weakEs: "Manejo problemas cuando surgen.",
    strong: "I manage risk and lead operational response when issues arise.",
    strongEs: "Gestiono el riesgo y lidero la respuesta operativa cuando surgen problemas.",
    elite: "I lead the operational risk function — identifying emerging issues, containing impact, and implementing structural fixes to prevent recurrence.",
    eliteEs: "Lidero la función de riesgo operativo — identificando problemas emergentes, conteniendo el impacto e implementando correcciones estructurales para prevenir recurrencia.",
    note: "Your self-description IS your executive brand. Vague = forgettable. Precise = credible.",
    noteEs: "Tu autodescripción ES tu marca ejecutiva. Vago = olvidable. Preciso = creíble.",
  },
];

// ─── Section 10.3 — Capstone Preparation (StructuredResponse) ─────────────

export const unit10Section3Drills: StructuredResponseItem[] = [
  {
    prompt: "Give a 60-second executive update on your area of responsibility.",
    promptEs: "Da una actualización ejecutiva de 60 segundos sobre tu área de responsabilidad.",
    weak: "Things are going okay, we're working on some stuff.",
    weakEs: "Las cosas van bien, estamos trabajando en algunas cosas.",
    framework: "Context → Tension → Insight → Action → Outcome",
    frameworkEs: "Contexto → Tensión → Perspectiva → Acción → Resultado",
    parts: [
      {
        label: "Context",
        labelEs: "Contexto",
        sentence: "Operations are stable overall — we're tracking ahead on two of three KPIs, and team capacity is at 90%.",
        sentenceEs: "Las operaciones están estables en general — estamos por encima en dos de tres KPIs, y la capacidad del equipo está al 90%.",
      },
      {
        label: "Tension",
        labelEs: "Tensión",
        sentence: "However, we're seeing early signs of strain in the fulfillment pipeline — lead times have increased 15% over the last three weeks.",
        sentenceEs: "Sin embargo, estamos viendo señales tempranas de tensión en el pipeline de cumplimiento — los tiempos de entrega han aumentado un 15% en las últimas tres semanas.",
      },
      {
        label: "Insight",
        labelEs: "Perspectiva",
        sentence: "What this indicates is that our current staffing model doesn't scale with the volume increase we're projecting for Q3.",
        sentenceEs: "Lo que esto indica es que nuestro modelo actual de personal no escala con el aumento de volumen que proyectamos para Q3.",
      },
      {
        label: "Action",
        labelEs: "Acción",
        sentence: "In response, we've initiated a capacity review and are evaluating two options — cross-training the existing team or bringing in temporary support for the peak period.",
        sentenceEs: "En respuesta, hemos iniciado una revisión de capacidad y estamos evaluando dos opciones — capacitar al equipo existente o traer apoyo temporal para el período pico.",
      },
      {
        label: "Outcome",
        labelEs: "Resultado",
        sentence: "We expect to have a recommendation finalized by end of next week, with implementation ready before the volume ramp begins.",
        sentenceEs: "Esperamos tener una recomendación finalizada para finales de la próxima semana, con la implementación lista antes de que comience el aumento de volumen.",
      },
    ],
    whyItWorks: "This is exactly what the capstone asks you to do. If you can deliver this cleanly, you're ready.",
    whyItWorksEs: "Esto es exactamente lo que el proyecto final te pide que hagas. Si puedes entregarlo con fluidez, estás listo.",
  },
  {
    prompt: "Brief leadership on a project you're leading.",
    promptEs: "Informa a la directiva sobre un proyecto que estás liderando.",
    weak: "The project is mostly on track with a few issues.",
    weakEs: "El proyecto está mayormente en camino con algunos problemas.",
    framework: "Context → Tension → Insight → Action → Outcome",
    frameworkEs: "Contexto → Tensión → Perspectiva → Acción → Resultado",
    parts: [
      {
        label: "Context",
        labelEs: "Contexto",
        sentence: "The platform migration is in Phase 2 — we've completed the core infrastructure build and are now in the integration testing window.",
        sentenceEs: "La migración de plataforma está en Fase 2 — hemos completado la construcción de infraestructura central y ahora estamos en la ventana de pruebas de integración.",
      },
      {
        label: "Tension",
        labelEs: "Tensión",
        sentence: "We've encountered a compatibility issue between the legacy API and the new authentication layer that's blocking two downstream integrations.",
        sentenceEs: "Hemos encontrado un problema de compatibilidad entre la API heredada y la nueva capa de autenticación que está bloqueando dos integraciones posteriores.",
      },
      {
        label: "Insight",
        labelEs: "Perspectiva",
        sentence: "The root cause is that the legacy system wasn't designed for token-based auth — this was a known risk, and we're now seeing it materialize.",
        sentenceEs: "La causa raíz es que el sistema heredado no fue diseñado para autenticación basada en tokens — este era un riesgo conocido, y ahora lo estamos viendo materializarse.",
      },
      {
        label: "Action",
        labelEs: "Acción",
        sentence: "We've deployed a bridge adapter as a temporary solution and are fast-tracking the permanent fix with the vendor, targeting completion within 10 business days.",
        sentenceEs: "Hemos implementado un adaptador puente como solución temporal y estamos acelerando la corrección permanente con el proveedor, apuntando a completarlo en 10 días hábiles.",
      },
      {
        label: "Outcome",
        labelEs: "Resultado",
        sentence: "This keeps us within the original timeline — the bridge adapter unblocks testing immediately, and the permanent fix will be in place before go-live.",
        sentenceEs: "Esto nos mantiene dentro del cronograma original — el adaptador puente desbloquea las pruebas de inmediato, y la corrección permanente estará lista antes del lanzamiento.",
      },
    ],
    whyItWorks: "You demonstrate all the skills from this course in one integrated response.",
    whyItWorksEs: "Demuestras todas las habilidades de este curso en una respuesta integrada.",
  },
  {
    prompt: "Recommend a change to leadership and justify it.",
    promptEs: "Recomienda un cambio a la directiva y justifícalo.",
    weak: "I think we should change our approach because it's not working well.",
    weakEs: "Creo que deberíamos cambiar nuestro enfoque porque no está funcionando bien.",
    framework: "Problem → Impact → Solution → Recommendation",
    frameworkEs: "Problema → Impacto → Solución → Recomendación",
    parts: [
      {
        label: "Problem",
        labelEs: "Problema",
        sentence: "Our current vendor management model relies on annual contract reviews — which means performance issues go unaddressed for months.",
        sentenceEs: "Nuestro modelo actual de gestión de proveedores depende de revisiones anuales de contrato — lo que significa que los problemas de rendimiento pasan meses sin abordarse.",
      },
      {
        label: "Impact",
        labelEs: "Impacto",
        sentence: "Over the past year, this has resulted in $200K in cost overruns and two missed delivery windows that directly affected client satisfaction scores.",
        sentenceEs: "Durante el último año, esto ha resultado en $200K en sobrecostos y dos ventanas de entrega perdidas que afectaron directamente las puntuaciones de satisfacción del cliente.",
      },
      {
        label: "Solution",
        labelEs: "Solución",
        sentence: "I'm proposing we shift to quarterly performance reviews with embedded SLAs and an escalation trigger at the 60-day mark.",
        sentenceEs: "Propongo que pasemos a revisiones trimestrales de rendimiento con SLAs integrados y un disparador de escalamiento en la marca de 60 días.",
      },
      {
        label: "Recommendation",
        labelEs: "Recomendación",
        sentence: "Based on this, I recommend we pilot the new model with our top three vendors starting next quarter. I'll own the rollout and report back at the 90-day mark with measurable results.",
        sentenceEs: "Basado en esto, recomiendo que piloteemos el nuevo modelo con nuestros tres principales proveedores a partir del próximo trimestre. Yo lideraré la implementación y reportaré en la marca de 90 días con resultados medibles.",
      },
    ],
    whyItWorks: "You close the course the same way you'll close real executive conversations — with a clear recommendation and a confident stance.",
    whyItWorksEs: "Cierras el curso de la misma manera en que cerrarás conversaciones ejecutivas reales — con una recomendación clara y una postura segura.",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit10FinalShift: FinalShift = {
  before: "You communicated competently in English — functional, correct, adequate.",
  beforeEs: "Te comunicabas competentemente en inglés — funcional, correcto, adecuado.",
  after: "You lead in English — with precision, structure, calm authority, and a voice that commands the room. This is your executive voice.",
  afterEs: "Lideras en inglés — con precisión, estructura, autoridad serena y una voz que domina la sala. Esta es tu voz ejecutiva.",
};
