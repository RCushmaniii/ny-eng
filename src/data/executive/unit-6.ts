// Unit 6 — The Impromptu Toolkit
// "Four named frameworks for the moments you can't prepare."
//
// Three sections:
// 6.1 Board Updates & Status Reports (ImpromptuScenario)
// 6.2 Handling Tough Questions (ImpromptuScenario)
// 6.3 Driving Decisions (ImpromptuScenario)
//
// Content sourced from Robert's real C1 and C2 executive lessons.

import type {
  ImpromptuScenarioItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit6Sections: UnitSection[] = [
  {
    number: 1,
    title: "Board Updates & Status Reports",
    titleEs: "Actualizaciones de Junta e Informes de Estado",
    why: "When someone says 'give us a quick update,' most people ramble. The executives who command a room deliver a complete picture in under 30 seconds using a repeatable structure. This section gives you that structure.",
    whyEs: "Cuando alguien dice 'danos una actualización rápida,' la mayoría divaga. Los ejecutivos que dominan una sala entregan un panorama completo en menos de 30 segundos usando una estructura repetible. Esta sección te da esa estructura.",
    mechanic: "impromptu",
    techniqueFocus: "State → Issue → Action → Timeline. Four beats, under 30 seconds. Practice until the framework fires automatically.",
    techniqueFocusEs: "Estado → Problema → Acción → Plazo. Cuatro tiempos, menos de 30 segundos. Practica hasta que el marco se active automáticamente.",
    rapidRepeat: [
      { text: "Operations are stable overall.", textEs: "Las operaciones están estables en general." },
      { text: "We are addressing this by…", textEs: "Estamos abordando esto mediante…" },
      { text: "We expect performance to stabilize within…", textEs: "Esperamos que el rendimiento se estabilice en…" },
      { text: "The revised strategy will deliver results in…", textEs: "La estrategia revisada entregará resultados en…" },
    ],
  },
  {
    number: 2,
    title: "Handling Tough Questions",
    titleEs: "Manejar Preguntas Difíciles",
    why: "Tough questions are designed to test your composure, not just your knowledge. If you get defensive or vague, you lose credibility instantly. A framework lets you absorb the question, show ownership, and redirect to solutions — all in one breath.",
    whyEs: "Las preguntas difíciles están diseñadas para probar tu compostura, no solo tu conocimiento. Si te pones a la defensiva o eres vago, pierdes credibilidad al instante. Un marco te permite absorber la pregunta, mostrar responsabilidad y redirigir hacia soluciones — todo en una sola respuesta.",
    mechanic: "impromptu",
    techniqueFocus: "Acknowledge → Explain → Action → Prevention. Never defend. Always redirect to what you're doing and how you'll prevent recurrence.",
    techniqueFocusEs: "Reconocer → Explicar → Acción → Prevención. Nunca te defiendas. Siempre redirige hacia lo que estás haciendo y cómo prevenirás la recurrencia.",
    rapidRepeat: [
      { text: "The issue was not fully visible earlier.", textEs: "El problema no era completamente visible antes." },
      { text: "We have identified the root cause.", textEs: "Hemos identificado la causa raíz." },
      { text: "This will allow us to detect issues earlier.", textEs: "Esto nos permitirá detectar problemas más temprano." },
      { text: "We have contingency plans in place.", textEs: "Tenemos planes de contingencia establecidos." },
    ],
  },
  {
    number: 3,
    title: "Driving Decisions",
    titleEs: "Impulsar Decisiones",
    why: "Most people present information and hope the decision happens. Executives who drive decisions build a logical case that makes 'yes' the only rational response. This framework moves from problem to recommendation in four steps — ending with a clear stance.",
    whyEs: "La mayoría presenta información y espera que la decisión suceda. Los ejecutivos que impulsan decisiones construyen un caso lógico que hace que 'sí' sea la única respuesta racional. Este marco va del problema a la recomendación en cuatro pasos — terminando con una postura clara.",
    mechanic: "impromptu",
    techniqueFocus: "Problem → Impact → Solution → Recommendation. Always end with your recommendation. Leaders respect people who take a stance.",
    techniqueFocusEs: "Problema → Impacto → Solución → Recomendación. Siempre termina con tu recomendación. Los líderes respetan a quienes toman una postura.",
    rapidRepeat: [
      { text: "The current approach is creating inefficiencies.", textEs: "El enfoque actual está creando ineficiencias." },
      { text: "This is limiting our ability to scale.", textEs: "Esto está limitando nuestra capacidad de escalar." },
      { text: "Based on this, I recommend moving forward.", textEs: "Basado en esto, recomiendo avanzar." },
      { text: "The proposed investment would reduce time-to-delivery by…", textEs: "La inversión propuesta reduciría el tiempo de entrega en…" },
    ],
  },
];

// ─── Section 6.1 — Board Updates & Status Reports (ImpromptuScenario) ──────

export const unit6Section1Drills: ImpromptuScenarioItem[] = [
  {
    prompt: "Give us a quick update on operations.",
    promptEs: "Danos una actualización rápida sobre las operaciones.",
    framework: "State → Issue → Action → Timeline",
    frameworkEs: "Estado → Problema → Acción → Plazo",
    frameworkSteps: [
      "State: Current situation",
      "Issue: What's not working",
      "Action: What you're doing",
      "Timeline: When it will be resolved",
    ],
    frameworkStepsEs: [
      "Estado: Situación actual",
      "Problema: Qué no está funcionando",
      "Acción: Qué estás haciendo",
      "Plazo: Cuándo se resolverá",
    ],
    weak: "Things are mostly okay, but we had some issues and we are working on them.",
    weakEs: "Las cosas están más o menos bien, pero tuvimos algunos problemas y estamos trabajando en ellos.",
    modelReply: "Operations are stable overall, but we are seeing delays in fulfillment driven by bottlenecks in the picking process. We are addressing this by reallocating resources and adjusting workflows to improve throughput. We expect performance to stabilize within the next 72 hours.",
    modelReplyEs: "Las operaciones están estables en general, pero estamos viendo retrasos en el despacho causados por cuellos de botella en el proceso de selección. Estamos abordando esto reasignando recursos y ajustando flujos de trabajo para mejorar el rendimiento. Esperamos que el rendimiento se estabilice en las próximas 72 horas.",
    whyItWorks: "Clear structure, no filler, shows control, gives timeline. The listener gets a complete picture in under 30 seconds.",
    whyItWorksEs: "Estructura clara, sin relleno, muestra control, da un plazo. El oyente obtiene un panorama completo en menos de 30 segundos.",
  },
  {
    prompt: "Summarize Q3 performance for the leadership team.",
    promptEs: "Resume el rendimiento del Q3 para el equipo de liderazgo.",
    framework: "State → Issue → Action → Timeline",
    frameworkEs: "Estado → Problema → Acción → Plazo",
    frameworkSteps: [
      "State: Overall performance",
      "Issue: Key challenges",
      "Action: Steps taken",
      "Timeline: What to expect next",
    ],
    frameworkStepsEs: [
      "Estado: Rendimiento general",
      "Problema: Desafíos clave",
      "Acción: Pasos tomados",
      "Plazo: Qué esperar a continuación",
    ],
    weak: "Q3 was okay. We had some highs and lows.",
    weakEs: "El Q3 estuvo bien. Tuvimos altos y bajos.",
    modelReply: "Q3 performance was mixed. Revenue targets were met in two of three regions, but the third underperformed due to execution gaps in the new market. We have restructured the regional team and revised the go-to-market approach. We expect the revised strategy to deliver results in Q4.",
    modelReplyEs: "El rendimiento del Q3 fue mixto. Los objetivos de ingresos se cumplieron en dos de tres regiones, pero la tercera tuvo un rendimiento inferior debido a brechas de ejecución en el nuevo mercado. Hemos reestructurado el equipo regional y revisado el enfoque de salida al mercado. Esperamos que la estrategia revisada entregue resultados en el Q4.",
    whyItWorks: "Specific, not vague. Names the underperforming area, the cause, and the fix — all in 4 sentences.",
    whyItWorksEs: "Específico, no vago. Nombra el área de bajo rendimiento, la causa y la solución — todo en 4 oraciones.",
  },
];

// ─── Section 6.2 — Handling Tough Questions (ImpromptuScenario) ────────────

export const unit6Section2Drills: ImpromptuScenarioItem[] = [
  {
    prompt: "Why wasn't this identified earlier?",
    promptEs: "¿Por qué no se identificó esto antes?",
    framework: "Acknowledge → Explain → Action → Prevention",
    frameworkEs: "Reconocer → Explicar → Acción → Prevención",
    frameworkSteps: [
      "Acknowledge: Accept the question",
      "Explain: Why it happened",
      "Action: What you're doing now",
      "Prevention: How you'll prevent it",
    ],
    frameworkStepsEs: [
      "Reconocer: Acepta la pregunta",
      "Explicar: Por qué sucedió",
      "Acción: Qué estás haciendo ahora",
      "Prevención: Cómo lo prevenirás",
    ],
    weak: "We didn't see it before.",
    weakEs: "No lo vimos antes.",
    modelReply: "The issue was not fully visible earlier due to gaps in reporting. We have now identified the root cause and are implementing stronger monitoring controls. This will allow us to detect and address similar issues earlier going forward.",
    modelReplyEs: "El problema no era completamente visible antes debido a brechas en el reporteo. Ahora hemos identificado la causa raíz y estamos implementando controles de monitoreo más fuertes. Esto nos permitirá detectar y abordar problemas similares más temprano en el futuro.",
    whyItWorks: "No defensiveness, shows ownership, focuses on solution and prevention.",
    whyItWorksEs: "Sin actitud defensiva, muestra responsabilidad, se enfoca en la solución y la prevención.",
  },
  {
    prompt: "Are you confident in these projections?",
    promptEs: "¿Estás seguro de estas proyecciones?",
    framework: "Acknowledge → Explain → Action → Prevention",
    frameworkEs: "Reconocer → Explicar → Acción → Prevención",
    frameworkSteps: [
      "Acknowledge: Take the question seriously",
      "Explain: Your basis for confidence",
      "Action: What you've verified",
      "Prevention: What safeguards are in place",
    ],
    frameworkStepsEs: [
      "Reconocer: Toma la pregunta en serio",
      "Explicar: Tu base de confianza",
      "Acción: Qué has verificado",
      "Prevención: Qué salvaguardas están establecidas",
    ],
    weak: "Yes, I think so.",
    weakEs: "Sí, creo que sí.",
    modelReply: "The projections are based on validated data from three independent sources. We have stress-tested the assumptions against historical variance. If conditions shift beyond our baseline scenario, we have contingency plans in place and will adjust proactively.",
    modelReplyEs: "Las proyecciones están basadas en datos validados de tres fuentes independientes. Hemos sometido los supuestos a pruebas de estrés contra la varianza histórica. Si las condiciones cambian más allá de nuestro escenario base, tenemos planes de contingencia establecidos y ajustaremos de manera proactiva.",
    whyItWorks: "Three layers of confidence: data quality, stress testing, contingency. The listener feels safe.",
    whyItWorksEs: "Tres capas de confianza: calidad de datos, pruebas de estrés, contingencia. El oyente se siente seguro.",
  },
];

// ─── Section 6.3 — Driving Decisions (ImpromptuScenario) ───────────────────

export const unit6Section3Drills: ImpromptuScenarioItem[] = [
  {
    prompt: "Why should we move forward with this change?",
    promptEs: "¿Por qué deberíamos avanzar con este cambio?",
    framework: "Problem → Impact → Solution → Recommendation",
    frameworkEs: "Problema → Impacto → Solución → Recomendación",
    frameworkSteps: [
      "Problem: What's broken",
      "Impact: What it costs",
      "Solution: What you propose",
      "Recommendation: Your clear stance",
    ],
    frameworkStepsEs: [
      "Problema: Qué está roto",
      "Impacto: Qué cuesta",
      "Solución: Qué propones",
      "Recomendación: Tu postura clara",
    ],
    weak: "I think it's a good idea and we should do it.",
    weakEs: "Creo que es una buena idea y deberíamos hacerlo.",
    modelReply: "The current approach is creating inefficiencies that are impacting overall performance. This is limiting our ability to scale effectively. We are proposing a more streamlined model that reduces complexity and improves execution. Based on this, I recommend moving forward with the change.",
    modelReplyEs: "El enfoque actual está creando ineficiencias que están impactando el rendimiento general. Esto está limitando nuestra capacidad de escalar de manera efectiva. Estamos proponiendo un modelo más simplificado que reduce la complejidad y mejora la ejecución. Basado en esto, recomiendo avanzar con el cambio.",
    whyItWorks: "Logical flow from problem to recommendation. Business-focused. Clear recommendation at the end — you take a stance.",
    whyItWorksEs: "Flujo lógico del problema a la recomendación. Enfocado en el negocio. Recomendación clara al final — tomas una postura.",
  },
  {
    prompt: "Why should we approve this budget increase?",
    promptEs: "¿Por qué deberíamos aprobar este aumento de presupuesto?",
    framework: "Problem → Impact → Solution → Recommendation",
    frameworkEs: "Problema → Impacto → Solución → Recomendación",
    frameworkSteps: [
      "Problem: Current constraint",
      "Impact: Business consequence",
      "Solution: What the investment enables",
      "Recommendation: Your ask",
    ],
    frameworkStepsEs: [
      "Problema: Restricción actual",
      "Impacto: Consecuencia de negocio",
      "Solución: Qué permite la inversión",
      "Recomendación: Tu solicitud",
    ],
    weak: "We need more money because things are getting expensive.",
    weakEs: "Necesitamos más dinero porque las cosas se están poniendo caras.",
    modelReply: "Our current resource allocation is not keeping pace with demand growth. This is creating delivery bottlenecks and increasing the risk of missed commitments. The proposed investment would add capacity where it's needed most and reduce time-to-delivery by an estimated 25%. I recommend approving the increase effective next quarter.",
    modelReplyEs: "Nuestra asignación actual de recursos no está al ritmo del crecimiento de la demanda. Esto está creando cuellos de botella en la entrega y aumentando el riesgo de compromisos incumplidos. La inversión propuesta agregaría capacidad donde más se necesita y reduciría el tiempo de entrega en un estimado de 25%. Recomiendo aprobar el aumento con efecto el próximo trimestre.",
    whyItWorks: "Quantifies the benefit ('25%'), anchors to a timeline ('next quarter'), and ends with a clear recommendation.",
    whyItWorksEs: "Cuantifica el beneficio ('25%'), ancla a una línea de tiempo ('próximo trimestre') y termina con una recomendación clara.",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit6FinalShift: FinalShift = {
  before: "When put on the spot, you froze, rambled, or defaulted to 'I think we should probably...' — losing the room in the first sentence.",
  beforeEs: "Cuando te ponían en aprietos, te congelabas, divagabas o recurrías a 'Creo que deberíamos probablemente...' — perdiendo la sala en la primera oración.",
  after: "You deploy a named framework in under 60 seconds. Board update. Tough question. Drive decision. You always have a structure.",
  afterEs: "Despliegas un marco con nombre en menos de 60 segundos. Actualización de junta. Pregunta difícil. Impulsar decisión. Siempre tienes una estructura.",
};
