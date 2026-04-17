// Unit 5 — Strategic Storytelling
// "Context → Tension → Insight → Action → Outcome. Facts inform. Stories influence."
//
// Three sections:
// 5.1 Build the Story (Guided) — full 5-step narrative construction (StoryBuilder)
// 5.2 Story Upgrade (Flat → Strategic) — transform flat reports into narratives (StoryBuilder)
// 5.3 Reusable Executive Story Patterns — complex board-level scenarios (StoryBuilder)
//
// Content sourced from Robert's real C1 and C2 executive lessons.

import type {
  StoryBuilderItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit5Sections: UnitSection[] = [
  {
    number: 1,
    title: "Build the Story (Guided)",
    titleEs: "Construye la Historia (Guiado)",
    why: "Most professionals report facts — what happened, then what they did. But executives who influence decisions tell stories with structure. In this section, you learn the five-step narrative arc that transforms flat updates into strategic communication.",
    whyEs: "La mayoría de los profesionales reportan hechos — qué pasó, luego qué hicieron. Pero los ejecutivos que influyen en decisiones cuentan historias con estructura. En esta sección, aprendes el arco narrativo de cinco pasos que transforma actualizaciones planas en comunicación estratégica.",
    mechanic: "story",
    techniqueFocus: "Each step builds on the previous one. Context sets the stage, Tension creates urgency, Insight shows understanding, Action demonstrates control, Outcome projects confidence.",
    techniqueFocusEs: "Cada paso se construye sobre el anterior. Contexto establece el escenario, Tensión crea urgencia, Perspectiva muestra comprensión, Acción demuestra control, Resultado proyecta confianza.",
    rapidRepeat: [
      { text: "We are currently seeing…", textEs: "Actualmente estamos viendo…" },
      { text: "This is driven by…", textEs: "Esto es impulsado por…" },
      { text: "What this indicates is…", textEs: "Lo que esto indica es…" },
      { text: "In response, we are…", textEs: "En respuesta, estamos…" },
      { text: "As a result, we expect…", textEs: "Como resultado, esperamos…" },
    ],
  },
  {
    number: 2,
    title: "Story Upgrade (Flat → Strategic)",
    titleEs: "Mejora de Historia (Plana → Estratégica)",
    why: "Flat communication kills credibility. When you say 'we had delays and fixed them,' the listener fills in the gaps with their own assumptions — usually worse than reality. A structured story controls the narrative and builds trust.",
    whyEs: "La comunicación plana mata la credibilidad. Cuando dices 'tuvimos retrasos y los arreglamos,' el oyente llena los vacíos con sus propias suposiciones — generalmente peores que la realidad. Una historia estructurada controla la narrativa y construye confianza.",
    mechanic: "story",
    techniqueFocus: "Compare the flat version to the structured version. Notice how the same information becomes dramatically more persuasive when organized into five steps.",
    techniqueFocusEs: "Compara la versión plana con la versión estructurada. Observa cómo la misma información se vuelve dramáticamente más persuasiva cuando se organiza en cinco pasos.",
    rapidRepeat: [
      { text: "What this shows is…", textEs: "Lo que esto muestra es…" },
      { text: "This highlights a gap in…", textEs: "Esto resalta una brecha en…" },
      { text: "We addressed this by…", textEs: "Abordamos esto al…" },
      { text: "As a result, performance is improving.", textEs: "Como resultado, el rendimiento está mejorando." },
    ],
  },
  {
    number: 3,
    title: "Reusable Executive Story Patterns",
    titleEs: "Patrones de Historia Ejecutiva Reutilizables",
    why: "Board rooms and leadership meetings demand narratives that blend structure, diagnosis, and direction. These patterns are reusable frameworks you can adapt to any high-stakes situation — from operational issues to market shifts.",
    whyEs: "Las salas de juntas y reuniones de liderazgo demandan narrativas que combinan estructura, diagnóstico y dirección. Estos patrones son marcos reutilizables que puedes adaptar a cualquier situación de alto riesgo — desde problemas operativos hasta cambios de mercado.",
    mechanic: "story",
    techniqueFocus: "These are complete executive narratives. Practice delivering them end-to-end as if you were standing in front of the board. Fluency comes from repetition.",
    techniqueFocusEs: "Estas son narrativas ejecutivas completas. Practica entregarlas de principio a fin como si estuvieras frente a la junta directiva. La fluidez viene de la repetición.",
    rapidRepeat: [
      { text: "This indicates a deeper issue.", textEs: "Esto indica un problema más profundo." },
      { text: "What this means is…", textEs: "Lo que esto significa es…" },
      { text: "We are proposing a revised approach.", textEs: "Estamos proponiendo un enfoque revisado." },
      { text: "As a result, we expect to maintain positioning.", textEs: "Como resultado, esperamos mantener el posicionamiento." },
    ],
  },
];

// ─── Section 5.1 — Build the Story (Guided) (StoryBuilder) ────────────────

export const unit5Section1Drills: StoryBuilderItem[] = [
  {
    prompt: "Performance has declined over the last month. Explain what's happening.",
    promptEs: "El rendimiento ha disminuido durante el último mes. Explica qué está pasando.",
    flat: "Performance dropped because there were some issues and we're working on it.",
    flatEs: "El rendimiento cayó porque hubo algunos problemas y estamos trabajando en ello.",
    steps: [
      {
        label: "Context",
        sentence: "Over the past month, we've seen a noticeable decline in performance across key metrics.",
        sentenceEs: "Durante el último mes, hemos visto una disminución notable en el rendimiento en métricas clave.",
      },
      {
        label: "Tension",
        sentence: "This is primarily driven by changes in demand patterns and gaps in execution consistency.",
        sentenceEs: "Esto es impulsado principalmente por cambios en los patrones de demanda y brechas en la consistencia de ejecución.",
      },
      {
        label: "Insight",
        sentence: "What this tells us is that our current operating model is not adapting quickly enough to shifting conditions.",
        sentenceEs: "Lo que esto nos dice es que nuestro modelo operativo actual no se está adaptando lo suficientemente rápido a las condiciones cambiantes.",
      },
      {
        label: "Action",
        sentence: "In response, we are tightening execution standards and adjusting our approach to better match demand variability.",
        sentenceEs: "En respuesta, estamos ajustando los estándares de ejecución y modificando nuestro enfoque para adaptarnos mejor a la variabilidad de la demanda.",
      },
      {
        label: "Outcome",
        sentence: "As a result, we expect to stabilize performance in the short term and improve consistency going forward.",
        sentenceEs: "Como resultado, esperamos estabilizar el rendimiento a corto plazo y mejorar la consistencia en el futuro.",
      },
    ],
    whyItWorks: "You don't just report — you interpret. You create a narrative arc. You sound in control of the situation.",
    whyItWorksEs: "No solo reportas — interpretas. Creas un arco narrativo. Suenas en control de la situación.",
  },
  {
    prompt: "Why did we miss the quarterly target?",
    promptEs: "¿Por qué no alcanzamos el objetivo trimestral?",
    flat: "We didn't hit the numbers because things didn't go as planned.",
    flatEs: "No alcanzamos los números porque las cosas no salieron como se planeó.",
    steps: [
      {
        label: "Context",
        sentence: "We entered the quarter with strong momentum, but performance slowed in the final phase.",
        sentenceEs: "Entramos al trimestre con un fuerte impulso, pero el rendimiento se desaceleró en la fase final.",
      },
      {
        label: "Tension",
        sentence: "The primary issue was a misalignment between our forecast assumptions and actual demand behavior.",
        sentenceEs: "El problema principal fue una desalineación entre nuestros supuestos de pronóstico y el comportamiento real de la demanda.",
      },
      {
        label: "Insight",
        sentence: "This highlights a gap in how we translate market signals into execution decisions.",
        sentenceEs: "Esto resalta una brecha en cómo traducimos las señales del mercado en decisiones de ejecución.",
      },
      {
        label: "Action",
        sentence: "We are now refining our forecasting approach and strengthening coordination between planning and execution teams.",
        sentenceEs: "Ahora estamos refinando nuestro enfoque de pronóstico y fortaleciendo la coordinación entre los equipos de planificación y ejecución.",
      },
      {
        label: "Outcome",
        sentence: "This will allow us to improve accuracy and deliver more consistent results in the next cycle.",
        sentenceEs: "Esto nos permitirá mejorar la precisión y entregar resultados más consistentes en el próximo ciclo.",
      },
    ],
    whyItWorks: "You elevate from excuse to diagnosis. You show learning, not failure. You move the conversation forward.",
    whyItWorksEs: "Elevas de excusa a diagnóstico. Muestras aprendizaje, no fracaso. Mueves la conversación hacia adelante.",
  },
  {
    prompt: "Explain why this new initiative matters.",
    promptEs: "Explica por qué esta nueva iniciativa importa.",
    flat: "It's a good opportunity and it will help us improve.",
    flatEs: "Es una buena oportunidad y nos ayudará a mejorar.",
    steps: [
      {
        label: "Context",
        sentence: "Currently, our process is creating inefficiencies that limit both speed and scalability.",
        sentenceEs: "Actualmente, nuestro proceso está creando ineficiencias que limitan tanto la velocidad como la escalabilidad.",
      },
      {
        label: "Tension",
        sentence: "As demand increases, those limitations become more visible and more costly.",
        sentenceEs: "A medida que aumenta la demanda, esas limitaciones se vuelven más visibles y más costosas.",
      },
      {
        label: "Insight",
        sentence: "What this means is that without change, we will struggle to maintain performance at scale.",
        sentenceEs: "Lo que esto significa es que sin cambio, tendremos dificultades para mantener el rendimiento a escala.",
      },
      {
        label: "Action",
        sentence: "This initiative addresses that by simplifying workflows and improving execution efficiency.",
        sentenceEs: "Esta iniciativa aborda eso simplificando los flujos de trabajo y mejorando la eficiencia de ejecución.",
      },
      {
        label: "Outcome",
        sentence: "As a result, we expect faster delivery, lower operational friction, and stronger overall performance.",
        sentenceEs: "Como resultado, esperamos una entrega más rápida, menor fricción operativa y un rendimiento general más fuerte.",
      },
    ],
    whyItWorks: "You connect problem → impact → solution. You make the decision feel necessary, not optional.",
    whyItWorksEs: "Conectas problema → impacto → solución. Haces que la decisión se sienta necesaria, no opcional.",
  },
];

// ─── Section 5.2 — Story Upgrade (Flat → Strategic) (StoryBuilder) ────────

export const unit5Section2Drills: StoryBuilderItem[] = [
  {
    prompt: "Your team experienced delays. Explain what happened.",
    promptEs: "Tu equipo experimentó retrasos. Explica qué pasó.",
    flat: "We had delays and fixed them.",
    flatEs: "Tuvimos retrasos y los arreglamos.",
    steps: [
      {
        label: "Context",
        sentence: "We began experiencing delays due to bottlenecks in execution.",
        sentenceEs: "Comenzamos a experimentar retrasos debido a cuellos de botella en la ejecución.",
      },
      {
        label: "Tension",
        sentence: "These delays started to impact overall performance and delivery timelines.",
        sentenceEs: "Estos retrasos comenzaron a impactar el rendimiento general y los plazos de entrega.",
      },
      {
        label: "Insight",
        sentence: "This made it clear that our current process lacked the flexibility needed under pressure.",
        sentenceEs: "Esto dejó claro que nuestro proceso actual carecía de la flexibilidad necesaria bajo presión.",
      },
      {
        label: "Action",
        sentence: "We addressed this by restructuring workflows and reallocating resources.",
        sentenceEs: "Abordamos esto reestructurando los flujos de trabajo y reasignando recursos.",
      },
      {
        label: "Outcome",
        sentence: "As a result, delivery speed has improved and the operation is now more stable.",
        sentenceEs: "Como resultado, la velocidad de entrega ha mejorado y la operación ahora es más estable.",
      },
    ],
    whyItWorks: "Every sentence connects to the next. The listener follows your logic without effort.",
    whyItWorksEs: "Cada oración se conecta con la siguiente. El oyente sigue tu lógica sin esfuerzo.",
  },
  {
    prompt: "The team had a rough quarter. Explain to leadership.",
    promptEs: "El equipo tuvo un trimestre difícil. Explica al liderazgo.",
    flat: "The team had problems but it's better now.",
    flatEs: "El equipo tuvo problemas pero ya está mejor.",
    steps: [
      {
        label: "Context",
        sentence: "The team initially faced challenges due to unclear priorities and coordination gaps.",
        sentenceEs: "El equipo inicialmente enfrentó desafíos debido a prioridades poco claras y brechas de coordinación.",
      },
      {
        label: "Tension",
        sentence: "This created inconsistency in execution and impacted overall performance.",
        sentenceEs: "Esto creó inconsistencia en la ejecución e impactó el rendimiento general.",
      },
      {
        label: "Insight",
        sentence: "What this showed us is that alignment was not strong enough at the operational level.",
        sentenceEs: "Lo que esto nos mostró es que la alineación no era lo suficientemente fuerte a nivel operativo.",
      },
      {
        label: "Action",
        sentence: "We responded by clarifying priorities and strengthening communication across teams.",
        sentenceEs: "Respondimos clarificando prioridades y fortaleciendo la comunicación entre equipos.",
      },
      {
        label: "Outcome",
        sentence: "As a result, execution is now more consistent and performance is improving.",
        sentenceEs: "Como resultado, la ejecución ahora es más consistente y el rendimiento está mejorando.",
      },
    ],
    whyItWorks: "You name the systemic issue ('alignment was not strong enough'), not just the symptom.",
    whyItWorksEs: "Nombras el problema sistémico ('la alineación no era lo suficientemente fuerte'), no solo el síntoma.",
  },
  {
    prompt: "You changed the plan mid-quarter. Justify the change.",
    promptEs: "Cambiaste el plan a mitad del trimestre. Justifica el cambio.",
    flat: "We changed the plan and things improved.",
    flatEs: "Cambiamos el plan y las cosas mejoraron.",
    steps: [
      {
        label: "Context",
        sentence: "We started with a plan based on initial assumptions that no longer held true.",
        sentenceEs: "Comenzamos con un plan basado en supuestos iniciales que ya no eran válidos.",
      },
      {
        label: "Tension",
        sentence: "As conditions changed, performance began to decline.",
        sentenceEs: "A medida que las condiciones cambiaron, el rendimiento comenzó a disminuir.",
      },
      {
        label: "Insight",
        sentence: "This indicated that the strategy needed to evolve to remain effective.",
        sentenceEs: "Esto indicó que la estrategia necesitaba evolucionar para seguir siendo efectiva.",
      },
      {
        label: "Action",
        sentence: "We revised the plan to better align with current conditions and priorities.",
        sentenceEs: "Revisamos el plan para alinearlo mejor con las condiciones y prioridades actuales.",
      },
      {
        label: "Outcome",
        sentence: "As a result, we are now seeing improved outcomes and stronger alignment.",
        sentenceEs: "Como resultado, ahora estamos viendo resultados mejorados y una alineación más fuerte.",
      },
    ],
    whyItWorks: "You frame the change as strategic adaptation, not reactive scrambling.",
    whyItWorksEs: "Enmarcas el cambio como adaptación estratégica, no como reacción desordenada.",
  },
];

// ─── Section 5.3 — Reusable Executive Story Patterns (StoryBuilder) ───────

export const unit5Section3Drills: StoryBuilderItem[] = [
  {
    prompt: "Explain a recent operational issue to the board.",
    promptEs: "Explica un problema operativo reciente a la junta directiva.",
    flat: "We had issues and worked on them.",
    flatEs: "Tuvimos problemas y trabajamos en ellos.",
    steps: [
      {
        label: "Context",
        sentence: "We began seeing inconsistencies in execution across key areas.",
        sentenceEs: "Comenzamos a ver inconsistencias en la ejecución en áreas clave.",
      },
      {
        label: "Tension",
        sentence: "This was driven by misalignment in priorities and a lack of clarity in ownership.",
        sentenceEs: "Esto fue impulsado por una desalineación en prioridades y una falta de claridad en la responsabilidad.",
      },
      {
        label: "Insight",
        sentence: "What this indicated was a structural gap in coordination, not just isolated performance issues.",
        sentenceEs: "Lo que esto indicó fue una brecha estructural en la coordinación, no solo problemas de rendimiento aislados.",
      },
      {
        label: "Action",
        sentence: "In response, we clarified accountability and standardized execution protocols.",
        sentenceEs: "En respuesta, clarificamos la responsabilidad y estandarizamos los protocolos de ejecución.",
      },
      {
        label: "Outcome",
        sentence: "As a result, performance is stabilizing and consistency is improving.",
        sentenceEs: "Como resultado, el rendimiento se está estabilizando y la consistencia está mejorando.",
      },
    ],
    whyItWorks: "It blends structure, diagnosis, storytelling, and direction into one cohesive narrative.",
    whyItWorksEs: "Combina estructura, diagnóstico, narrativa y dirección en una narrativa cohesiva.",
  },
  {
    prompt: "The market shifted and your strategy needs to change. Brief leadership.",
    promptEs: "El mercado cambió y tu estrategia necesita cambiar. Informa al liderazgo.",
    flat: "The market changed so we need to do something different.",
    flatEs: "El mercado cambió así que necesitamos hacer algo diferente.",
    steps: [
      {
        label: "Context",
        sentence: "Over the past quarter, we've observed a significant shift in market conditions.",
        sentenceEs: "Durante el último trimestre, hemos observado un cambio significativo en las condiciones del mercado.",
      },
      {
        label: "Tension",
        sentence: "This shift has created a gap between our current strategy and the emerging reality.",
        sentenceEs: "Este cambio ha creado una brecha entre nuestra estrategia actual y la realidad emergente.",
      },
      {
        label: "Insight",
        sentence: "What this means is that our original approach, while sound at the time, no longer addresses the current environment.",
        sentenceEs: "Lo que esto significa es que nuestro enfoque original, aunque sólido en su momento, ya no aborda el entorno actual.",
      },
      {
        label: "Action",
        sentence: "We are proposing a revised strategy that accounts for the new conditions and positions us for the next phase.",
        sentenceEs: "Estamos proponiendo una estrategia revisada que tiene en cuenta las nuevas condiciones y nos posiciona para la próxima fase.",
      },
      {
        label: "Outcome",
        sentence: "As a result, we expect to maintain competitive positioning and capture emerging opportunities.",
        sentenceEs: "Como resultado, esperamos mantener el posicionamiento competitivo y capturar oportunidades emergentes.",
      },
    ],
    whyItWorks: "You show that the strategy change is proactive, not reactive — you saw it coming and you're ahead of it.",
    whyItWorksEs: "Muestras que el cambio de estrategia es proactivo, no reactivo — lo viste venir y estás adelante.",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit5FinalShift: FinalShift = {
  before: "You reported facts — what happened, then what you did. The listener had to figure out what it meant.",
  beforeEs: "Reportabas hechos — qué pasó, luego qué hiciste. El oyente tenía que descifrar qué significaba.",
  after: "You tell strategic stories — context, tension, insight, action, outcome. You control how others understand what happened.",
  afterEs: "Cuentas historias estratégicas — contexto, tensión, perspectiva, acción, resultado. Controlas cómo otros entienden lo que pasó.",
};
