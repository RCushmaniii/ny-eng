// Unit 1 — Executive Word Choice
// "Trade vague verbs for surgical precision."
//
// Three sections:
// 1.1 Verb Precision — the core Robert drill (VerbUpgradeLab)
// 1.2 Progressive Discovery — layered analytical depth (VerbUpgradeLab)
// 1.3 Integrated Executive Phrasing — full sentences (WeakStrongElite)
//
// Content sourced from Robert's real C1 and C2 executive lessons.

import type {
  VerbUpgradeItem,
  WeakStrongEliteItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit1Sections: UnitSection[] = [
  {
    number: 1,
    title: "Verb Precision",
    titleEs: "Precisión Verbal",
    why: "At senior level, weak verbs signal shallow thinking. If your verbs are generic, your meaning becomes soft. In this section, you train your ear and your mouth to produce verbs that communicate precision, control, and analytical depth.",
    whyEs: "En el nivel senior, los verbos débiles señalan pensamiento superficial. Si tus verbos son genéricos, tu significado se vuelve suave. En esta sección, entrenas tu oído y tu boca para producir verbos que comunican precisión, control y profundidad analítica.",
    mechanic: "verb-upgrade",
    techniqueFocus: "Each strong option serves a different strategic purpose. Learn when to use each — don't just memorize synonyms.",
    techniqueFocusEs: "Cada opción fuerte sirve un propósito estratégico diferente. Aprende cuándo usar cada una — no solo memorices sinónimos.",
    rapidRepeat: [
      { text: "We investigated the issue.", textEs: "Investigamos el problema." },
      { text: "We contained the impact.", textEs: "Contuvimos el impacto." },
      { text: "We restructured the approach.", textEs: "Reestructuramos el enfoque." },
      { text: "We validated the assumptions.", textEs: "Validamos los supuestos." },
      { text: "We unblocked execution.", textEs: "Desbloqueamos la ejecución." },
    ],
  },
  {
    number: 2,
    title: "Progressive Discovery",
    titleEs: "Descubrimiento Progresivo",
    why: "Strong executives don't just name what happened — they show depth of analysis. Progressive verbs move from surface observation to root cause. This signals that you understand the layers of a problem, not just the headline.",
    whyEs: "Los ejecutivos fuertes no solo nombran lo que pasó — muestran profundidad de análisis. Los verbos progresivos van de la observación superficial a la causa raíz. Esto señala que entiendes las capas de un problema, no solo el titular.",
    mechanic: "verb-upgrade",
    techniqueFocus: "Each set of three verbs moves from surface → system → cause. Use all three in sequence to signal layered thinking.",
    techniqueFocusEs: "Cada conjunto de tres verbos va de superficie → sistema → causa. Usa los tres en secuencia para señalar pensamiento en capas.",
    rapidRepeat: [
      { text: "We identified the issue early.", textEs: "Identificamos el problema temprano." },
      { text: "We isolated its impact.", textEs: "Aislamos su impacto." },
      { text: "We exposed a deeper structural weakness.", textEs: "Expusimos una debilidad estructural más profunda." },
      { text: "We operationalized the initiative.", textEs: "Operacionalizamos la iniciativa." },
    ],
  },
  {
    number: 3,
    title: "Integrated Executive Phrasing",
    titleEs: "Fraseo Ejecutivo Integrado",
    why: "Now that you know the individual verbs, this section puts them into the kind of full sentences a senior leader would actually say. The goal is fluency — not just knowing the right word, but deploying it in real executive speech.",
    whyEs: "Ahora que conoces los verbos individuales, esta sección los pone en el tipo de oraciones completas que un líder senior realmente diría. La meta es fluidez — no solo saber la palabra correcta, sino desplegarla en el discurso ejecutivo real.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "The contrast pattern 'We didn't just X — we Y' is a powerful rhetorical device. It makes your upgrade visible to the listener.",
    techniqueFocusEs: "El patrón de contraste 'No solo hicimos X — hicimos Y' es un recurso retórico poderoso. Hace que tu mejora sea visible para el oyente.",
    rapidRepeat: [
      { text: "We didn't just identify the issue — we diagnosed the underlying cause.", textEs: "No solo identificamos el problema — diagnosticamos la causa subyacente." },
      { text: "We didn't just delay execution — we re-sequenced priorities.", textEs: "No solo retrasamos la ejecución — re-secuenciamos las prioridades." },
      { text: "We didn't just communicate — we aligned and influenced.", textEs: "No solo comunicamos — alineamos e influimos." },
    ],
  },
];

// ─── Section 1.1 — Verb Precision (VerbUpgradeLab) ─────────────────────────

export const unit1Section1Drills: VerbUpgradeItem[] = [
  {
    weak: "We looked into the issue.",
    weakEs: "Revisamos el problema.",
    options: [
      { verb: "Investigated", verbEs: "Investigamos", usage: "Broad, neutral, fact-finding", usageEs: "Amplio, neutral, búsqueda de hechos" },
      { verb: "Audited", verbEs: "Auditamos", usage: "Compliance, controls, process review", usageEs: "Cumplimiento, controles, revisión de procesos" },
      { verb: "Diagnosed", verbEs: "Diagnosticamos", usage: "Root cause, technical or structural problem", usageEs: "Causa raíz, problema técnico o estructural" },
    ],
    modelReply: "We investigated the issue to understand the timeline, audited the process to identify control failures, and diagnosed the root cause as a breakdown in cross-functional coordination.",
    modelReplyEs: "Investigamos el problema para entender la línea de tiempo, auditamos el proceso para identificar fallas de control y diagnosticamos la causa raíz como una falla en la coordinación interfuncional.",
    whyItWorks: "Moves from surface → system → cause. Signals layered thinking.",
    whyItWorksEs: "Va de superficie → sistema → causa. Señala pensamiento en capas.",
    elite: {
      verb: "Diagnosed",
      verbEs: "Diagnosticamos",
      modelReply: "We initially investigated the issue to establish a factual baseline, then analyzed the contributing variables to understand emerging patterns, and ultimately diagnosed the root cause as a structural breakdown in cross-functional coordination.",
      modelReplyEs: "Inicialmente investigamos el problema para establecer una base factual, luego analizamos las variables contribuyentes para entender los patrones emergentes, y finalmente diagnosticamos la causa raíz como una falla estructural en la coordinación interfuncional.",
      c2Insight: "Replaces 'audited' with 'analyzed' — shifts from compliance to strategic interpretation.",
      c2InsightEs: "Reemplaza 'audited' con 'analyzed' — cambia de cumplimiento a interpretación estratégica.",
    },
  },
  {
    weak: "We fixed the problem.",
    weakEs: "Arreglamos el problema.",
    options: [
      { verb: "Contained", verbEs: "Contuvimos", usage: "Stopped spread — immediate", usageEs: "Detuvo la propagación — inmediato" },
      { verb: "Mitigated", verbEs: "Mitigamos", usage: "Reduced the severity", usageEs: "Redujo la gravedad" },
      { verb: "Resolved", verbEs: "Resolvimos", usage: "Eliminated the cause", usageEs: "Eliminó la causa" },
    ],
    modelReply: "We contained the issue immediately to prevent further escalation, mitigated the operational impact in the short term, and subsequently resolved the root cause through targeted process changes.",
    modelReplyEs: "Contuvimos el problema inmediatamente para prevenir mayor escalación, mitigamos el impacto operacional a corto plazo y posteriormente resolvimos la causa raíz a través de cambios de proceso específicos.",
    whyItWorks: "Separates time horizons: immediate → short-term → structural. Shows you control the full lifecycle.",
    whyItWorksEs: "Separa horizontes de tiempo: inmediato → corto plazo → estructural. Muestra que controlas todo el ciclo.",
    elite: {
      verb: "Resolved",
      verbEs: "Resolvimos",
      modelReply: "We contained the issue immediately, mitigated the operational impact within the first 24 hours, and fully resolved the problem by end of week.",
      modelReplyEs: "Contuvimos el problema inmediatamente, mitigamos el impacto operacional dentro de las primeras 24 horas y resolvimos completamente el problema para fin de semana.",
      c2Insight: "Adding specific time markers ('within 24 hours', 'by end of week') transforms vague reassurance into executive credibility.",
      c2InsightEs: "Agregar marcadores de tiempo específicos ('dentro de 24 horas', 'para fin de semana') transforma la vaga tranquilidad en credibilidad ejecutiva.",
    },
  },
  {
    weak: "We changed the plan.",
    weakEs: "Cambiamos el plan.",
    options: [
      { verb: "Adjusted", verbEs: "Ajustamos", usage: "Small modification", usageEs: "Modificación pequeña" },
      { verb: "Revised", verbEs: "Revisamos", usage: "Meaningful correction", usageEs: "Corrección significativa" },
      { verb: "Restructured", verbEs: "Reestructuramos", usage: "Fundamental redesign", usageEs: "Rediseño fundamental" },
    ],
    modelReply: "We initially adjusted the plan to stabilize execution, then revised key assumptions as conditions evolved, and ultimately restructured the approach to better align with long-term objectives.",
    modelReplyEs: "Inicialmente ajustamos el plan para estabilizar la ejecución, luego revisamos supuestos clave conforme evolucionaron las condiciones y finalmente reestructuramos el enfoque para alinearlo mejor con los objetivos a largo plazo.",
    whyItWorks: "Shows escalation awareness — you matched the size of the change to the size of the problem.",
    whyItWorksEs: "Muestra conciencia de escalación — igualaste el tamaño del cambio al tamaño del problema.",
  },
  {
    weak: "We checked the data.",
    weakEs: "Revisamos los datos.",
    options: [
      { verb: "Verified", verbEs: "Verificamos", usage: "Checked if it is true or correct", usageEs: "Comprobó si es verdadero o correcto" },
      { verb: "Validated", verbEs: "Validamos", usage: "Confirmed reliability or soundness", usageEs: "Confirmó confiabilidad o solidez" },
      { verb: "Cross-checked", verbEs: "Cotejamos", usage: "Compared across multiple sources", usageEs: "Comparó entre múltiples fuentes" },
    ],
    modelReply: "We verified the reported figures, validated the underlying assumptions, and cross-checked the data against our internal dashboard.",
    modelReplyEs: "Verificamos las cifras reportadas, validamos los supuestos subyacentes y cotejamos los datos contra nuestro tablero interno.",
    whyItWorks: "Three levels of data confidence: accuracy → reliability → consistency.",
    whyItWorksEs: "Tres niveles de confianza en datos: exactitud → confiabilidad → consistencia.",
    elite: {
      verb: "Reconciled",
      verbEs: "Conciliamos",
      modelReply: "We verified the reported figures, validated the underlying assumptions, and reconciled discrepancies across multiple data sources.",
      modelReplyEs: "Verificamos las cifras reportadas, validamos los supuestos subyacentes y conciliamos discrepancias entre múltiples fuentes de datos.",
      c2Insight: "'Reconciled' replaces 'cross-checked' — moves from comparison to resolution of differences.",
      c2InsightEs: "'Reconciled' reemplaza 'cross-checked' — pasa de comparación a resolución de diferencias.",
    },
  },
  {
    weak: "We helped the team.",
    weakEs: "Ayudamos al equipo.",
    options: [
      { verb: "Supported", verbEs: "Apoyamos", usage: "General assistance", usageEs: "Asistencia general" },
      { verb: "Enabled", verbEs: "Habilitamos", usage: "Gave capability or resources", usageEs: "Dio capacidad o recursos" },
      { verb: "Unblocked", verbEs: "Desbloqueamos", usage: "Removed barriers", usageEs: "Eliminó barreras" },
    ],
    modelReply: "We supported the team with additional guidance, enabled faster execution by assigning new resources, and unblocked delivery by resolving the legal dependency.",
    modelReplyEs: "Apoyamos al equipo con orientación adicional, habilitamos una ejecución más rápida asignando nuevos recursos y desbloqueamos la entrega al resolver la dependencia legal.",
    whyItWorks: "Shows three different kinds of help — guidance, capability, barrier removal — not just generic 'assistance'.",
    whyItWorksEs: "Muestra tres tipos diferentes de ayuda — orientación, capacidad, eliminación de barreras — no solo 'asistencia' genérica.",
  },
  {
    weak: "We talked to the client.",
    weakEs: "Hablamos con el cliente.",
    options: [
      { verb: "Briefed", verbEs: "Informamos", usage: "Delivered a structured update", usageEs: "Entregó una actualización estructurada" },
      { verb: "Aligned with", verbEs: "Nos alineamos con", usage: "Achieved shared understanding", usageEs: "Logró entendimiento compartido" },
      { verb: "Consulted with", verbEs: "Consultamos con", usage: "Sought input or perspective", usageEs: "Buscó aportaciones o perspectiva" },
    ],
    modelReply: "We briefed the client on the current situation, aligned on revised expectations, and consulted with them on priority sequencing.",
    modelReplyEs: "Informamos al cliente sobre la situación actual, nos alineamos en expectativas revisadas y los consultamos sobre la secuenciación de prioridades.",
    whyItWorks: "Moves from communication → alignment → influence. Three verbs, three levels of engagement.",
    whyItWorksEs: "Va de comunicación → alineación → influencia. Tres verbos, tres niveles de engagement.",
    elite: {
      verb: "Negotiated",
      verbEs: "Negociamos",
      modelReply: "We briefed the client on the current situation, aligned on revised expectations, and negotiated key priorities to ensure a feasible path forward.",
      modelReplyEs: "Informamos al cliente sobre la situación actual, nos alineamos en expectativas revisadas y negociamos las prioridades clave para asegurar un camino viable hacia adelante.",
      c2Insight: "Replaces 'consulted' with 'negotiated' — shifts from seeking input to influencing the outcome.",
      c2InsightEs: "Reemplaza 'consulted' con 'negotiated' — cambia de buscar aportes a influir en el resultado.",
    },
  },
];

// ─── Section 1.2 — Progressive Discovery (VerbUpgradeLab) ──────────────────

export const unit1Section2Drills: VerbUpgradeItem[] = [
  {
    weak: "We found a problem.",
    weakEs: "Encontramos un problema.",
    options: [
      { verb: "Identified", verbEs: "Identificamos", usage: "Recognized its presence", usageEs: "Reconoció su presencia" },
      { verb: "Isolated", verbEs: "Aislamos", usage: "Narrowed the scope", usageEs: "Redujo el alcance" },
      { verb: "Exposed", verbEs: "Expusimos", usage: "Revealed a hidden issue", usageEs: "Reveló un problema oculto" },
    ],
    modelReply: "We identified the issue early in the process, isolated its impact to a specific segment, and ultimately exposed a deeper structural weakness in the system.",
    modelReplyEs: "Identificamos el problema temprano en el proceso, aislamos su impacto a un segmento específico y finalmente expusimos una debilidad estructural más profunda en el sistema.",
    whyItWorks: "Shows progressive discovery depth — you went deeper than the surface.",
    whyItWorksEs: "Muestra profundidad de descubrimiento progresivo — fuiste más allá de la superficie.",
  },
  {
    weak: "We made a decision.",
    weakEs: "Tomamos una decisión.",
    options: [
      { verb: "Determined", verbEs: "Determinamos", usage: "Concluded based on analysis", usageEs: "Concluyó basándose en análisis" },
      { verb: "Prioritized", verbEs: "Priorizamos", usage: "Ranked against alternatives", usageEs: "Clasificó contra alternativas" },
      { verb: "Committed", verbEs: "Nos comprometimos", usage: "Locked direction", usageEs: "Fijó la dirección" },
    ],
    modelReply: "We determined the most viable course of action based on available data, prioritized it against competing initiatives, and committed to execution with full alignment.",
    modelReplyEs: "Determinamos el curso de acción más viable basándonos en los datos disponibles, lo priorizamos contra iniciativas competidoras y nos comprometimos a la ejecución con alineación completa.",
    whyItWorks: "Shows decision maturity and finality — analysis → ranking → commitment.",
    whyItWorksEs: "Muestra madurez y finalidad en la decisión — análisis → clasificación → compromiso.",
  },
  {
    weak: "We reviewed the situation.",
    weakEs: "Revisamos la situación.",
    options: [
      { verb: "Assessed", verbEs: "Evaluamos", usage: "Evaluated current state", usageEs: "Evaluó el estado actual" },
      { verb: "Re-evaluated", verbEs: "Re-evaluamos", usage: "Challenged prior assumptions", usageEs: "Cuestionó supuestos previos" },
      { verb: "Reframed", verbEs: "Reencuadramos", usage: "Changed the interpretation", usageEs: "Cambió la interpretación" },
    ],
    modelReply: "We assessed the current situation, re-evaluated our initial assumptions, and ultimately reframed the challenge to better align with strategic priorities.",
    modelReplyEs: "Evaluamos la situación actual, re-evaluamos nuestros supuestos iniciales y finalmente reencuadramos el desafío para alinearlo mejor con las prioridades estratégicas.",
    whyItWorks: "Shows intellectual flexibility and leadership thinking — you changed HOW you see the problem.",
    whyItWorksEs: "Muestra flexibilidad intelectual y pensamiento de liderazgo — cambiaste CÓMO ves el problema.",
  },
  {
    weak: "We managed the risk.",
    weakEs: "Gestionamos el riesgo.",
    options: [
      { verb: "Assessed", verbEs: "Evaluamos", usage: "Evaluated exposure", usageEs: "Evaluó la exposición" },
      { verb: "Mitigated", verbEs: "Mitigamos", usage: "Reduced impact", usageEs: "Redujo el impacto" },
      { verb: "Controlled", verbEs: "Controlamos", usage: "Actively governed ongoing risk", usageEs: "Gobernó activamente el riesgo continuo" },
    ],
    modelReply: "We assessed the level of exposure early, mitigated the most critical risks, and established controls to manage ongoing uncertainty.",
    modelReplyEs: "Evaluamos el nivel de exposición temprano, mitigamos los riesgos más críticos y establecimos controles para gestionar la incertidumbre continua.",
    whyItWorks: "Shows full lifecycle risk thinking — evaluate → reduce → govern.",
    whyItWorksEs: "Muestra pensamiento de riesgo de ciclo completo — evaluar → reducir → gobernar.",
  },
  {
    weak: "We started the initiative.",
    weakEs: "Iniciamos la iniciativa.",
    options: [
      { verb: "Initiated", verbEs: "Iniciamos", usage: "Formal beginning", usageEs: "Inicio formal" },
      { verb: "Launched", verbEs: "Lanzamos", usage: "Visible rollout", usageEs: "Despliegue visible" },
      { verb: "Operationalized", verbEs: "Operacionalizamos", usage: "Embedded into execution", usageEs: "Incorporado a la ejecución" },
    ],
    modelReply: "We initiated the initiative at a strategic level, launched it across key stakeholders, and operationalized it to ensure consistent execution.",
    modelReplyEs: "Iniciamos la iniciativa a nivel estratégico, la lanzamos entre los stakeholders clave y la operacionalizamos para asegurar una ejecución consistente.",
    whyItWorks: "Differentiates idea from execution reality — concept → visibility → embedded operation.",
    whyItWorksEs: "Diferencia la idea de la realidad de ejecución — concepto → visibilidad → operación incorporada.",
  },
];

// ─── Section 1.3 — Integrated Executive Phrasing (WeakStrongElite) ──────────

export const unit1Section3Drills: WeakStrongEliteItem[] = [
  {
    weak: "We looked at Q3 and figured out some issues.",
    weakEs: "Revisamos el Q3 y encontramos algunos problemas.",
    strong: "We analyzed Q3 performance and identified several operational inefficiencies.",
    strongEs: "Analizamos el rendimiento del Q3 e identificamos varias ineficiencias operativas.",
    elite: "We analyzed Q3 performance, isolated the key drivers of underperformance, and exposed a systemic gap in execution consistency.",
    eliteEs: "Analizamos el rendimiento del Q3, aislamos los principales impulsores del bajo rendimiento y expusimos una brecha sistémica en la consistencia de ejecución.",
  },
  {
    weak: "We had delays and worked on them.",
    weakEs: "Tuvimos retrasos y trabajamos en ellos.",
    strong: "We experienced delays. In response, we are implementing corrective actions.",
    strongEs: "Experimentamos retrasos. En respuesta, estamos implementando acciones correctivas.",
    elite: "We experienced delays driven by bottlenecks in execution. In response, we restructured workflows and reallocated resources to stabilize delivery.",
    eliteEs: "Experimentamos retrasos causados por cuellos de botella en la ejecución. En respuesta, reestructuramos los flujos de trabajo y reasignamos recursos para estabilizar la entrega.",
  },
  {
    weak: "We're not sure what happened but we'll look into it.",
    weakEs: "No estamos seguros de qué pasó pero lo revisaremos.",
    strong: "The root cause is not yet confirmed. We are investigating and will report findings by end of day.",
    strongEs: "La causa raíz aún no está confirmada. Estamos investigando y reportaremos hallazgos para el final del día.",
    elite: "The root cause is not yet confirmed. We have contained the impact and are conducting a structured investigation. We will report findings and a corrective action plan by end of day.",
    eliteEs: "La causa raíz aún no está confirmada. Hemos contenido el impacto y estamos realizando una investigación estructurada. Reportaremos hallazgos y un plan de acción correctiva para el final del día.",
  },
  {
    weak: "The team did good work and we got better results.",
    weakEs: "El equipo hizo un buen trabajo y obtuvimos mejores resultados.",
    strong: "The team strengthened execution consistency, and performance improved as a result.",
    strongEs: "El equipo fortaleció la consistencia de ejecución y el rendimiento mejoró como resultado.",
    elite: "The team strengthened execution consistency, optimized resource allocation, and accelerated delivery timelines — resulting in measurable performance gains.",
    eliteEs: "El equipo fortaleció la consistencia de ejecución, optimizó la asignación de recursos y aceleró los plazos de entrega — resultando en ganancias de rendimiento medibles.",
  },
  {
    weak: "We changed some things and the client was okay with it.",
    weakEs: "Cambiamos algunas cosas y al cliente le pareció bien.",
    strong: "We revised the scope, briefed the client on the changes, and aligned on revised expectations.",
    strongEs: "Revisamos el alcance, informamos al cliente sobre los cambios y nos alineamos en expectativas revisadas.",
    elite: "We revised the scope to reflect current priorities, briefed the client on the rationale, and negotiated revised timelines to maintain delivery confidence.",
    eliteEs: "Revisamos el alcance para reflejar las prioridades actuales, informamos al cliente sobre la justificación y negociamos plazos revisados para mantener la confianza en la entrega.",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit1FinalShift: FinalShift = {
  before: "You used generic verbs that blurred your meaning and reduced confidence in your judgment.",
  beforeEs: "Usabas verbos genéricos que difuminaban tu significado y reducían la confianza en tu juicio.",
  after: "You choose verbs with surgical precision — each one signals a specific level of analysis, action, or commitment.",
  afterEs: "Eliges verbos con precisión quirúrgica — cada uno señala un nivel específico de análisis, acción o compromiso.",
};
