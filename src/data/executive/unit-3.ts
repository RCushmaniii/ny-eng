// Unit 3 — Structured Responses & Connectors
// "Cause → Action → Outcome. Problem → Impact → Solution → Recommendation."
//
// Three sections:
// 3.1 Cause → Action → Outcome (StructuredResponseBuilder)
// 3.2 Problem → Impact → Solution → Recommendation (StructuredResponseBuilder)
// 3.3 Executive Connectors (ConnectorDrill)
//
// Content sourced from Robert's real C1 and C2 executive lessons.

import type {
  StructuredResponseItem,
  ConnectorDrillItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit3Sections: UnitSection[] = [
  {
    number: 1,
    title: "Cause → Action → Outcome",
    titleEs: "Causa → Acción → Resultado",
    why: "Unstructured speech forces the listener to interpret, organize, and guess your meaning. Structured speech reduces cognitive load, signals leadership control, and accelerates decision-making. This is the simplest and most powerful framework.",
    whyEs: "El discurso no estructurado obliga al oyente a interpretar, organizar y adivinar tu significado. El discurso estructurado reduce la carga cognitiva, señala control de liderazgo y acelera la toma de decisiones. Este es el marco más simple y poderoso.",
    mechanic: "structured-response",
    techniqueFocus: "Always think in 3 moves: Cause → Action → Outcome. This structure works for 90% of executive updates.",
    techniqueFocusEs: "Siempre piensa en 3 movimientos: Causa → Acción → Resultado. Esta estructura funciona para el 90% de las actualizaciones ejecutivas.",
    rapidRepeat: [
      { text: "The delays are driven by bottlenecks in execution.", textEs: "Los retrasos son causados por cuellos de botella en la ejecución." },
      { text: "We are reallocating resources to improve throughput.", textEs: "Estamos reasignando recursos para mejorar el rendimiento." },
      { text: "We expect performance to stabilize within 72 hours.", textEs: "Esperamos que el rendimiento se estabilice en 72 horas." },
    ],
  },
  {
    number: 2,
    title: "Problem → Impact → Solution → Recommendation",
    titleEs: "Problema → Impacto → Solución → Recomendación",
    why: "When you need leadership approval for a change, you need a four-part structure that makes the decision feel necessary, not optional. This framework builds the business case in under 60 seconds.",
    whyEs: "Cuando necesitas aprobación del liderazgo para un cambio, necesitas una estructura de cuatro partes que haga que la decisión se sienta necesaria, no opcional. Este marco construye el caso de negocio en menos de 60 segundos.",
    mechanic: "structured-response",
    techniqueFocus: "End with a clear recommendation. Leaders respect people who don't just present problems — they present solutions with a stance.",
    techniqueFocusEs: "Termina con una recomendación clara. Los líderes respetan a las personas que no solo presentan problemas — presentan soluciones con una postura.",
    rapidRepeat: [
      { text: "The current process is limiting efficiency.", textEs: "El proceso actual está limitando la eficiencia." },
      { text: "This is impacting delivery timelines.", textEs: "Esto está impactando los plazos de entrega." },
      { text: "Based on this, I recommend moving forward.", textEs: "Basado en esto, recomiendo avanzar." },
    ],
  },
  {
    number: 3,
    title: "Executive Connectors",
    titleEs: "Conectores Ejecutivos",
    why: "Ideas without connectors sound like a list. Ideas with connectors sound like a strategy. Executive connectors reveal logical progression and make your thinking visible to the listener in real time.",
    whyEs: "Ideas sin conectores suenan como una lista. Ideas con conectores suenan como una estrategia. Los conectores ejecutivos revelan progresión lógica y hacen visible tu pensamiento al oyente en tiempo real.",
    mechanic: "connector",
    techniqueFocus: "Connect your ideas = sound more intelligent instantly. One connector transforms two fragments into a strategic narrative.",
    techniqueFocusEs: "Conecta tus ideas = suena más inteligente al instante. Un conector transforma dos fragmentos en una narrativa estratégica.",
    rapidRepeat: [
      { text: "As a result, performance improved.", textEs: "Como resultado, el rendimiento mejoró." },
      { text: "In response, we adjusted the approach.", textEs: "En respuesta, ajustamos el enfoque." },
      { text: "Accordingly, we revised the timeline.", textEs: "En consecuencia, revisamos la línea de tiempo." },
      { text: "This indicates a deeper issue.", textEs: "Esto indica un problema más profundo." },
      { text: "From a strategic standpoint, this is the right move.", textEs: "Desde una perspectiva estratégica, este es el movimiento correcto." },
    ],
  },
];

// ─── Section 3.1 — Cause → Action → Outcome (StructuredResponseBuilder) ────

export const unit3Section1Drills: StructuredResponseItem[] = [
  {
    prompt: "We are experiencing delays in fulfillment. Explain why.",
    promptEs: "Estamos experimentando retrasos en los despachos. Explica por qué.",
    weak: "We had some issues in the warehouse and things got slow.",
    weakEs: "Tuvimos algunos problemas en el almacén y las cosas se pusieron lentas.",
    framework: "Cause → Action → Outcome",
    frameworkEs: "Causa → Acción → Resultado",
    parts: [
      { label: "Cause", labelEs: "Causa", sentence: "The delays are driven by bottlenecks in the picking process.", sentenceEs: "Los retrasos son causados por cuellos de botella en el proceso de selección." },
      { label: "Action", labelEs: "Acción", sentence: "We are reallocating staff and adjusting workflows to improve throughput.", sentenceEs: "Estamos reasignando personal y ajustando flujos de trabajo para mejorar el rendimiento." },
      { label: "Outcome", labelEs: "Resultado", sentence: "We expect fulfillment speed to stabilize within the next 72 hours.", sentenceEs: "Esperamos que la velocidad de despacho se estabilice dentro de las próximas 72 horas." },
    ],
    whyItWorks: "Clear cause, clear action, clear timeline. The listener knows exactly what happened, what you're doing, and when it will be fixed.",
    whyItWorksEs: "Causa clara, acción clara, línea de tiempo clara. El oyente sabe exactamente qué pasó, qué estás haciendo y cuándo se arreglará.",
  },
  {
    prompt: "Why are there discrepancies in inventory?",
    promptEs: "¿Por qué hay discrepancias en el inventario?",
    weak: "There were some mistakes and the system wasn't accurate.",
    weakEs: "Hubo algunos errores y el sistema no era preciso.",
    framework: "Cause → Action → Outcome",
    frameworkEs: "Causa → Acción → Resultado",
    parts: [
      { label: "Cause", labelEs: "Causa", sentence: "The discrepancies are the result of inconsistent scanning during receiving.", sentenceEs: "Las discrepancias son el resultado de escaneo inconsistente durante la recepción." },
      { label: "Action", labelEs: "Acción", sentence: "We are reinforcing process controls and retraining the team on standard procedures.", sentenceEs: "Estamos reforzando los controles de proceso y reentrenando al equipo en procedimientos estándar." },
      { label: "Outcome", labelEs: "Resultado", sentence: "This will restore inventory accuracy and reduce future variance.", sentenceEs: "Esto restaurará la precisión del inventario y reducirá la varianza futura." },
    ],
    whyItWorks: "Specific cause (not vague), action that shows control, outcome that shows confidence.",
    whyItWorksEs: "Causa específica (no vaga), acción que muestra control, resultado que muestra confianza.",
  },
  {
    prompt: "Why did operational costs increase this quarter?",
    promptEs: "¿Por qué aumentaron los costos operativos este trimestre?",
    weak: "Costs went up because of demand and some inefficiencies.",
    weakEs: "Los costos subieron por la demanda y algunas ineficiencias.",
    framework: "Cause → Action → Outcome",
    frameworkEs: "Causa → Acción → Resultado",
    parts: [
      { label: "Cause", labelEs: "Causa", sentence: "The increase is driven by higher labor costs and inefficiencies in order processing.", sentenceEs: "El aumento es causado por mayores costos laborales e ineficiencias en el procesamiento de pedidos." },
      { label: "Action", labelEs: "Acción", sentence: "We are optimizing staffing allocation and improving workflow efficiency.", sentenceEs: "Estamos optimizando la asignación de personal y mejorando la eficiencia de los flujos de trabajo." },
      { label: "Outcome", labelEs: "Resultado", sentence: "This will reduce cost pressure over the next cycle.", sentenceEs: "Esto reducirá la presión de costos en el próximo ciclo." },
    ],
    whyItWorks: "Names two specific cost drivers, not a vague 'costs went up'. The listener trusts you understand what happened.",
    whyItWorksEs: "Nombra dos impulsores de costos específicos, no un vago 'los costos subieron'. El oyente confía en que entiendes lo que pasó.",
  },
  {
    prompt: "Why is team performance inconsistent?",
    promptEs: "¿Por qué el rendimiento del equipo es inconsistente?",
    weak: "The team is not fully aligned yet.",
    weakEs: "El equipo aún no está completamente alineado.",
    framework: "Cause → Action → Outcome",
    frameworkEs: "Causa → Acción → Resultado",
    parts: [
      { label: "Cause", labelEs: "Causa", sentence: "The inconsistency is due to unclear process ownership across shifts.", sentenceEs: "La inconsistencia se debe a la falta de claridad en la titularidad de procesos entre turnos." },
      { label: "Action", labelEs: "Acción", sentence: "We are defining roles more clearly and standardizing execution protocols.", sentenceEs: "Estamos definiendo los roles con más claridad y estandarizando los protocolos de ejecución." },
      { label: "Outcome", labelEs: "Resultado", sentence: "This will improve consistency and accountability across the operation.", sentenceEs: "Esto mejorará la consistencia y la rendición de cuentas en toda la operación." },
    ],
    whyItWorks: "The cause is structural (process ownership), not personal (the team is bad). Leaders diagnose systems, not blame people.",
    whyItWorksEs: "La causa es estructural (titularidad de procesos), no personal (el equipo es malo). Los líderes diagnostican sistemas, no culpan personas.",
  },
];

// ─── Section 3.2 — Problem → Impact → Solution → Recommendation ────────────

export const unit3Section2Drills: StructuredResponseItem[] = [
  {
    prompt: "Why should we move forward with this change?",
    promptEs: "¿Por qué deberíamos avanzar con este cambio?",
    weak: "I think it's a good idea and we should do it.",
    weakEs: "Creo que es una buena idea y deberíamos hacerlo.",
    framework: "Problem → Impact → Solution → Recommendation",
    frameworkEs: "Problema → Impacto → Solución → Recomendación",
    parts: [
      { label: "Problem", labelEs: "Problema", sentence: "The current process is limiting efficiency and increasing operational cost.", sentenceEs: "El proceso actual está limitando la eficiencia y aumentando el costo operacional." },
      { label: "Impact", labelEs: "Impacto", sentence: "This is impacting fulfillment speed and overall performance.", sentenceEs: "Esto está impactando la velocidad de despacho y el rendimiento general." },
      { label: "Solution", labelEs: "Solución", sentence: "We are proposing a streamlined workflow that reduces complexity and improves execution.", sentenceEs: "Estamos proponiendo un flujo de trabajo simplificado que reduce la complejidad y mejora la ejecución." },
      { label: "Recommendation", labelEs: "Recomendación", sentence: "Based on this, I recommend moving forward with the change.", sentenceEs: "Basado en esto, recomiendo avanzar con el cambio." },
    ],
    whyItWorks: "Logical flow from problem to recommendation. The decision feels necessary, not optional.",
    whyItWorksEs: "Flujo lógico del problema a la recomendación. La decisión se siente necesaria, no opcional.",
  },
  {
    prompt: "Why are we proposing to restructure the regional team?",
    promptEs: "¿Por qué estamos proponiendo reestructurar el equipo regional?",
    weak: "The team isn't working well and we need to make changes.",
    weakEs: "El equipo no está funcionando bien y necesitamos hacer cambios.",
    framework: "Problem → Impact → Solution → Recommendation",
    frameworkEs: "Problema → Impacto → Solución → Recomendación",
    parts: [
      { label: "Problem", labelEs: "Problema", sentence: "The current structure creates overlapping responsibilities and unclear accountability.", sentenceEs: "La estructura actual crea responsabilidades superpuestas y rendición de cuentas poco clara." },
      { label: "Impact", labelEs: "Impacto", sentence: "This is causing execution delays and inconsistent decision-making across the region.", sentenceEs: "Esto está causando retrasos en la ejecución y toma de decisiones inconsistente en toda la región." },
      { label: "Solution", labelEs: "Solución", sentence: "We are proposing a realignment that consolidates ownership and clarifies reporting lines.", sentenceEs: "Estamos proponiendo una realineación que consolida la titularidad y clarifica las líneas de reporte." },
      { label: "Recommendation", labelEs: "Recomendación", sentence: "I recommend we implement this in Q2 to capture the efficiency gains before the peak period.", sentenceEs: "Recomiendo que implementemos esto en el Q2 para capturar las ganancias de eficiencia antes del período pico." },
    ],
    whyItWorks: "Adds a specific timeline to the recommendation — signals urgency without panic.",
    whyItWorksEs: "Agrega una línea de tiempo específica a la recomendación — señala urgencia sin pánico.",
  },
  {
    prompt: "Should we invest in upgrading our reporting tools?",
    promptEs: "¿Deberíamos invertir en mejorar nuestras herramientas de reporteo?",
    weak: "Yes, our reporting tools are old and we need better ones.",
    weakEs: "Sí, nuestras herramientas de reporteo son viejas y necesitamos mejores.",
    framework: "Problem → Impact → Solution → Recommendation",
    frameworkEs: "Problema → Impacto → Solución → Recomendación",
    parts: [
      { label: "Problem", labelEs: "Problema", sentence: "Our current reporting tools are manual-intensive and produce inconsistent outputs.", sentenceEs: "Nuestras herramientas de reporteo actuales son intensivas en trabajo manual y producen resultados inconsistentes." },
      { label: "Impact", labelEs: "Impacto", sentence: "This is slowing decision-making and increasing the risk of data errors in executive reviews.", sentenceEs: "Esto está desacelerando la toma de decisiones y aumentando el riesgo de errores de datos en las revisiones ejecutivas." },
      { label: "Solution", labelEs: "Solución", sentence: "A platform upgrade would automate reporting, improve consistency, and reduce preparation time by an estimated 40%.", sentenceEs: "Una actualización de plataforma automatizaría el reporteo, mejoraría la consistencia y reduciría el tiempo de preparación en un estimado de 40%." },
      { label: "Recommendation", labelEs: "Recomendación", sentence: "I recommend approving the investment and targeting a Q3 rollout.", sentenceEs: "Recomiendo aprobar la inversión y apuntar a un despliegue en Q3." },
    ],
    whyItWorks: "Quantifies the benefit ('40%') and specifies a timeline ('Q3'). Makes it easy to say yes.",
    whyItWorksEs: "Cuantifica el beneficio ('40%') y especifica una línea de tiempo ('Q3'). Facilita decir que sí.",
  },
];

// ─── Section 3.3 — Executive Connectors (ConnectorDrill) ────────────────────

export const unit3Section3Drills: ConnectorDrillItem[] = [
  {
    weak: "We had delays. We are fixing it.",
    weakEs: "Tuvimos retrasos. Lo estamos arreglando.",
    strong: "We experienced delays. As a result, we are implementing corrective actions.",
    strongEs: "Experimentamos retrasos. Como resultado, estamos implementando acciones correctivas.",
    connector: "As a result",
    connectorEs: "Como resultado",
    elite: "We experienced delays driven by execution bottlenecks. As a result, we are implementing targeted corrective measures to restore delivery timelines.",
    eliteEs: "Experimentamos retrasos causados por cuellos de botella en la ejecución. Como resultado, estamos implementando medidas correctivas específicas para restaurar los plazos de entrega.",
  },
  {
    weak: "There were issues. We changed the process.",
    weakEs: "Hubo problemas. Cambiamos el proceso.",
    strong: "We identified issues. In response, we adjusted the process.",
    strongEs: "Identificamos problemas. En respuesta, ajustamos el proceso.",
    connector: "In response",
    connectorEs: "En respuesta",
  },
  {
    weak: "The team struggled. We added resources.",
    weakEs: "El equipo tuvo dificultades. Agregamos recursos.",
    strong: "The team struggled with capacity constraints. To address this, we added resources.",
    strongEs: "El equipo tuvo dificultades con restricciones de capacidad. Para abordar esto, agregamos recursos.",
    connector: "To address this",
    connectorEs: "Para abordar esto",
  },
  {
    weak: "Costs increased. We are reviewing it.",
    weakEs: "Los costos aumentaron. Lo estamos revisando.",
    strong: "Costs increased beyond plan. As a result, we are reviewing cost drivers and identifying areas for optimization.",
    strongEs: "Los costos aumentaron más allá del plan. Como resultado, estamos revisando los impulsores de costos e identificando áreas de optimización.",
    connector: "As a result",
    connectorEs: "Como resultado",
  },
  {
    weak: "Demand changed. We updated the plan.",
    weakEs: "La demanda cambió. Actualizamos el plan.",
    strong: "Demand shifted significantly. Accordingly, we revised the plan.",
    strongEs: "La demanda cambió significativamente. En consecuencia, revisamos el plan.",
    connector: "Accordingly",
    connectorEs: "En consecuencia",
    elite: "Demand shifted significantly in the second half of the quarter. Accordingly, we revised the plan to prioritize high-impact initiatives and defer lower-priority items.",
    eliteEs: "La demanda cambió significativamente en la segunda mitad del trimestre. En consecuencia, revisamos el plan para priorizar iniciativas de alto impacto y diferir elementos de menor prioridad.",
  },
  {
    weak: "The data showed problems. We need to take action.",
    weakEs: "Los datos mostraron problemas. Necesitamos tomar acción.",
    strong: "The data reveals a downward trend. This indicates that corrective action is needed.",
    strongEs: "Los datos revelan una tendencia a la baja. Esto indica que se necesita acción correctiva.",
    connector: "This indicates",
    connectorEs: "Esto indica",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit3FinalShift: FinalShift = {
  before: "You listed ideas in fragments — the listener had to organize your thinking for you.",
  beforeEs: "Enumerabas ideas en fragmentos — el oyente tenía que organizar tu pensamiento por ti.",
  after: "You structure your thinking in real time using named frameworks. Your speech guides the listener instead of burdening them.",
  afterEs: "Estructuras tu pensamiento en tiempo real usando marcos con nombre. Tu discurso guía al oyente en lugar de cargarlo.",
};
