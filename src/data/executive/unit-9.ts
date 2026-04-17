// Unit 9 — Negotiation and Driving Decisions
// "Anchoring, concessions, diplomatic 'no', closing."
//
// Three sections:
// 9.1 Anchoring and Positioning (WeakStrongElite)
// 9.2 Diplomatic 'No' (WeakStrongElite)
// 9.3 Closing and Securing Commitment (StructuredResponse)
//
// Content sourced from Robert's real C1 and C2 executive lessons.

import type {
  WeakStrongEliteItem,
  StructuredResponseItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit9Sections: UnitSection[] = [
  {
    number: 1,
    title: "Anchoring and Positioning",
    titleEs: "Anclaje y Posicionamiento",
    why: "Most professionals open a negotiation by underselling their position or revealing flexibility too early. The language you use to anchor — your first number, your first frame — sets the ceiling for the entire conversation. If you anchor weak, you negotiate from weakness.",
    whyEs: "La mayoría de los profesionales abren una negociación subvalorando su posición o revelando flexibilidad demasiado pronto. El lenguaje que usas para anclar — tu primer número, tu primer marco — establece el techo de toda la conversación. Si anclas débil, negocías desde la debilidad.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "Anchor with specificity and justification. Never float a number without framing the value behind it. The stronger your anchor language, the less the other side pushes back.",
    techniqueFocusEs: "Ancla con especificidad y justificación. Nunca lances un número sin enmarcar el valor detrás de él. Cuanto más fuerte sea tu lenguaje de anclaje, menos resistencia genera el otro lado.",
    rapidRepeat: [
      { text: "Based on the scope, the investment is…", textEs: "Basado en el alcance, la inversión es…" },
      { text: "There's flexibility in how we structure this.", textEs: "Hay flexibilidad en cómo estructuramos esto." },
      { text: "This reflects the value and the resources required.", textEs: "Esto refleja el valor y los recursos requeridos." },
    ],
  },
  {
    number: 2,
    title: "Diplomatic 'No'",
    titleEs: "'No' Diplomático",
    why: "Saying no is a negotiation skill, not a personality trait. A blunt refusal damages the relationship. A vague deflection invites pressure. The diplomatic 'no' is precise, respectful, and redirects toward an alternative — preserving the relationship and your credibility.",
    whyEs: "Decir no es una habilidad de negociación, no un rasgo de personalidad. Un rechazo brusco daña la relación. Una evasión vaga invita presión. El 'no' diplomático es preciso, respetuoso y redirige hacia una alternativa — preservando la relación y tu credibilidad.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "Name the constraint, acknowledge the ask, and offer an alternative. The structure is: validate → decline with reason → redirect. Never leave a 'no' hanging without a path forward.",
    techniqueFocusEs: "Nombra la restricción, reconoce la solicitud y ofrece una alternativa. La estructura es: validar → declinar con razón → redirigir. Nunca dejes un 'no' colgando sin un camino hacia adelante.",
    rapidRepeat: [
      { text: "Given the current constraints, that's not feasible.", textEs: "Dadas las restricciones actuales, eso no es viable." },
      { text: "Here's what I can offer as an alternative.", textEs: "Esto es lo que puedo ofrecer como alternativa." },
      { text: "I want to be direct — the proposed timeline creates risk.", textEs: "Quiero ser directo — el plazo propuesto crea riesgo." },
    ],
  },
  {
    number: 3,
    title: "Closing and Securing Commitment",
    titleEs: "Cierre y Asegurar Compromiso",
    why: "Most negotiations end with vague agreement — 'sounds good, let's move forward.' Then nothing happens. The close is where you convert conversation into commitment. A structured close summarizes terms, confirms alignment, and locks in the next step with a date.",
    whyEs: "La mayoría de las negociaciones terminan con un acuerdo vago — 'suena bien, avancemos.' Luego no pasa nada. El cierre es donde conviertes conversación en compromiso. Un cierre estructurado resume los términos, confirma la alineación y fija el siguiente paso con una fecha.",
    mechanic: "structured-response",
    techniqueFocus: "Summary → Confirmation → Next Step → Timeline. Every close must include all four. If you skip the timeline, you lose momentum. If you skip the confirmation, you risk misalignment.",
    techniqueFocusEs: "Resumen → Confirmación → Siguiente Paso → Plazo. Cada cierre debe incluir los cuatro. Si omites el plazo, pierdes impulso. Si omites la confirmación, arriesgas desalineación.",
    rapidRepeat: [
      { text: "To confirm — we've agreed on…", textEs: "Para confirmar — hemos acordado…" },
      { text: "Does that accurately reflect what we've discussed?", textEs: "¿Eso refleja con precisión lo que hemos discutido?" },
      { text: "The next step is… by [date].", textEs: "El siguiente paso es… para [fecha]." },
    ],
  },
];

// ─── Section 9.1 — Anchoring and Positioning (WeakStrongElite) ─────────────

export const unit9Section1Drills: WeakStrongEliteItem[] = [
  {
    weak: "We'd like to do this for about $50K.",
    weakEs: "Nos gustaría hacer esto por unos $50K.",
    strong: "Based on the scope and timeline, we're looking at an investment of $50,000.",
    strongEs: "Basado en el alcance y el plazo, estamos hablando de una inversión de $50,000.",
    elite: "Based on the scope, timeline, and the level of customization required, the investment is $50,000. This reflects the value of dedicated senior resources and a guaranteed delivery window.",
    eliteEs: "Basado en el alcance, el plazo y el nivel de personalización requerido, la inversión es de $50,000. Esto refleja el valor de recursos senior dedicados y una ventana de entrega garantizada.",
  },
  {
    weak: "What's your budget?",
    weakEs: "¿Cuál es tu presupuesto?",
    strong: "To ensure we scope this appropriately, what range of investment are you working within?",
    strongEs: "Para asegurarnos de dimensionar esto adecuadamente, ¿en qué rango de inversión estás trabajando?",
    elite: "To design the right solution, I'd like to understand two things: your investment range and your priority — speed, cost, or scope.",
    eliteEs: "Para diseñar la solución correcta, me gustaría entender dos cosas: tu rango de inversión y tu prioridad — velocidad, costo o alcance.",
  },
  {
    weak: "We can probably be flexible on price.",
    weakEs: "Probablemente podemos ser flexibles en el precio.",
    strong: "There's flexibility in how we structure this, depending on your priorities.",
    strongEs: "Hay flexibilidad en cómo estructuramos esto, dependiendo de tus prioridades.",
    elite: "We can adjust the structure — for example, phasing the engagement over two quarters to distribute the investment, or reducing scope to hit a specific budget target.",
    eliteEs: "Podemos ajustar la estructura — por ejemplo, escalonar el compromiso en dos trimestres para distribuir la inversión, o reducir el alcance para cumplir un objetivo presupuestario específico.",
  },
  {
    weak: "This is our best offer.",
    weakEs: "Esta es nuestra mejor oferta.",
    strong: "This reflects our best assessment of the value and the resources required.",
    strongEs: "Esto refleja nuestra mejor evaluación del valor y los recursos requeridos.",
    elite: "This pricing reflects the dedicated resources, the accelerated timeline, and the guarantee of senior-level involvement throughout. I'm confident it represents strong value.",
    eliteEs: "Este precio refleja los recursos dedicados, el plazo acelerado y la garantía de participación de nivel senior durante todo el proceso. Estoy seguro de que representa un valor sólido.",
  },
  {
    weak: "We really want to work with you.",
    weakEs: "Realmente queremos trabajar contigo.",
    strong: "We see strong alignment between your objectives and what we deliver best.",
    strongEs: "Vemos una fuerte alineación entre tus objetivos y lo que mejor entregamos.",
    elite: "Based on what you've described, this is squarely in our area of strength. The fit is strong, and we're positioned to deliver results quickly.",
    eliteEs: "Basado en lo que has descrito, esto está exactamente en nuestra área de fortaleza. El ajuste es fuerte y estamos posicionados para entregar resultados rápidamente.",
  },
  {
    weak: "Can you give us a discount?",
    weakEs: "¿Puedes darnos un descuento?",
    strong: "We don't discount, but we can restructure the engagement to match your budget.",
    strongEs: "No hacemos descuentos, pero podemos reestructurar el compromiso para ajustarnos a tu presupuesto.",
    elite: "The pricing reflects the quality and commitment we bring. What I can do is adjust the scope or phasing so the investment works within your current cycle.",
    eliteEs: "El precio refleja la calidad y el compromiso que aportamos. Lo que puedo hacer es ajustar el alcance o el escalonamiento para que la inversión funcione dentro de tu ciclo actual.",
  },
];

// ─── Section 9.2 — Diplomatic 'No' (WeakStrongElite) ───────────────────────

export const unit9Section2Drills: WeakStrongEliteItem[] = [
  {
    weak: "No, we can't do that.",
    weakEs: "No, no podemos hacer eso.",
    strong: "That's not something we're able to accommodate within the current scope.",
    strongEs: "Eso no es algo que podamos acomodar dentro del alcance actual.",
    elite: "Given the current constraints, that's not feasible. Here's what I can offer as an alternative.",
    eliteEs: "Dadas las restricciones actuales, eso no es viable. Esto es lo que puedo ofrecer como alternativa.",
  },
  {
    weak: "That won't work for us.",
    weakEs: "Eso no nos funciona.",
    strong: "I understand the ask. The challenge is that it would compromise the quality of the deliverable.",
    strongEs: "Entiendo la solicitud. El desafío es que comprometería la calidad del entregable.",
    elite: "I understand the ask, and I take it seriously. The risk is that accommodating it would compromise the outcome we've both committed to. Here's what I'd recommend instead.",
    eliteEs: "Entiendo la solicitud y la tomo en serio. El riesgo es que acomodarla comprometería el resultado al que ambos nos hemos comprometido. Esto es lo que recomendaría en su lugar.",
  },
  {
    weak: "I can't agree to that timeline.",
    weakEs: "No puedo aceptar ese plazo.",
    strong: "The timeline as proposed creates significant execution risk. I'd recommend an alternative.",
    strongEs: "El plazo tal como se propone crea un riesgo de ejecución significativo. Recomendaría una alternativa.",
    elite: "I want to be direct: the proposed timeline creates risk that I'm not comfortable accepting. Here's a revised timeline that protects the deliverable and still meets the core objective.",
    eliteEs: "Quiero ser directo: el plazo propuesto crea un riesgo que no me siento cómodo aceptando. Aquí hay un plazo revisado que protege el entregable y aún cumple el objetivo principal.",
  },
  {
    weak: "We don't have the resources for that.",
    weakEs: "No tenemos los recursos para eso.",
    strong: "Our current capacity doesn't allow us to take this on without impacting existing commitments.",
    strongEs: "Nuestra capacidad actual no nos permite asumir esto sin impactar los compromisos existentes.",
    elite: "Taking this on at the current resource level would put existing commitments at risk. I'd recommend either adjusting the timeline or reallocating from a lower-priority initiative.",
    eliteEs: "Asumir esto con el nivel actual de recursos pondría en riesgo los compromisos existentes. Recomendaría ajustar el plazo o reasignar desde una iniciativa de menor prioridad.",
  },
  {
    weak: "I don't think that's a good idea.",
    weakEs: "No creo que sea una buena idea.",
    strong: "I have a concern about that approach that I'd like to share.",
    strongEs: "Tengo una preocupación sobre ese enfoque que me gustaría compartir.",
    elite: "I see a risk in that approach. Specifically, it assumes stable demand — and our data doesn't support that assumption right now.",
    eliteEs: "Veo un riesgo en ese enfoque. Específicamente, asume demanda estable — y nuestros datos no respaldan esa suposición en este momento.",
  },
  {
    weak: "That's too expensive.",
    weakEs: "Eso es demasiado caro.",
    strong: "The investment is beyond what we can justify against the expected return.",
    strongEs: "La inversión está más allá de lo que podemos justificar frente al retorno esperado.",
    elite: "Based on the projected return, the investment doesn't clear our threshold. I'd be open to discussing a phased approach that reduces the upfront commitment.",
    eliteEs: "Basado en el retorno proyectado, la inversión no supera nuestro umbral. Estaría abierto a discutir un enfoque escalonado que reduzca el compromiso inicial.",
  },
];

// ─── Section 9.3 — Closing and Securing Commitment (StructuredResponse) ────

export const unit9Section3Drills: StructuredResponseItem[] = [
  {
    prompt: "You've reached agreement in principle. Close the deal.",
    promptEs: "Has llegado a un acuerdo en principio. Cierra el trato.",
    weak: "So, are we good? Should we move forward?",
    weakEs: "Entonces, ¿estamos bien? ¿Deberíamos avanzar?",
    framework: "Summary → Confirmation → Next Step → Timeline",
    frameworkEs: "Resumen → Confirmación → Siguiente Paso → Plazo",
    parts: [
      {
        label: "Summary",
        labelEs: "Resumen",
        sentence: "To confirm — we've agreed on a 12-week engagement with dedicated senior resources, a mid-point review, and a final deliverable by end of Q2.",
        sentenceEs: "Para confirmar — hemos acordado un compromiso de 12 semanas con recursos senior dedicados, una revisión a mitad de camino y un entregable final para fin del Q2.",
      },
      {
        label: "Confirmation",
        labelEs: "Confirmación",
        sentence: "Does that accurately reflect what we've discussed?",
        sentenceEs: "¿Eso refleja con precisión lo que hemos discutido?",
      },
      {
        label: "Next Step",
        labelEs: "Siguiente Paso",
        sentence: "The next step on our side is to send the formal proposal and statement of work by end of day Thursday.",
        sentenceEs: "El siguiente paso de nuestro lado es enviar la propuesta formal y el documento de trabajo para el final del día jueves.",
      },
      {
        label: "Timeline",
        labelEs: "Plazo",
        sentence: "Once approved, we can begin onboarding the following Monday.",
        sentenceEs: "Una vez aprobado, podemos comenzar la incorporación el lunes siguiente.",
      },
    ],
    whyItWorks: "You summarize, confirm, and set the next step with a date. There's no ambiguity about what happens next.",
    whyItWorksEs: "Resumes, confirmas y estableces el siguiente paso con una fecha. No hay ambigüedad sobre qué pasa después.",
  },
  {
    prompt: "You need your VP to approve a budget increase. Close the ask.",
    promptEs: "Necesitas que tu VP apruebe un aumento de presupuesto. Cierra la solicitud.",
    weak: "So, can we get the budget approved?",
    weakEs: "Entonces, ¿podemos conseguir la aprobación del presupuesto?",
    framework: "Summary → Confirmation → Next Step → Timeline",
    frameworkEs: "Resumen → Confirmación → Siguiente Paso → Plazo",
    parts: [
      {
        label: "Summary",
        labelEs: "Resumen",
        sentence: "To summarize: the current allocation is insufficient to meet our Q4 commitments. The proposed increase of $30K would add the capacity needed to deliver on time.",
        sentenceEs: "Para resumir: la asignación actual es insuficiente para cumplir nuestros compromisos del Q4. El aumento propuesto de $30K agregaría la capacidad necesaria para entregar a tiempo.",
      },
      {
        label: "Confirmation",
        labelEs: "Confirmación",
        sentence: "Are we aligned on the need and the amount?",
        sentenceEs: "¿Estamos alineados en la necesidad y el monto?",
      },
      {
        label: "Next Step",
        labelEs: "Siguiente Paso",
        sentence: "I'll prepare the formal request with supporting data and have it on your desk by Wednesday.",
        sentenceEs: "Prepararé la solicitud formal con datos de respaldo y la tendré en tu escritorio para el miércoles.",
      },
      {
        label: "Timeline",
        labelEs: "Plazo",
        sentence: "If approved by Friday, we can begin onboarding the additional resource the following week.",
        sentenceEs: "Si se aprueba para el viernes, podemos comenzar la incorporación del recurso adicional la semana siguiente.",
      },
    ],
    whyItWorks: "You make it easy for the VP to say yes — the ask is clear, the number is specific, and you've removed the work of figuring out next steps.",
    whyItWorksEs: "Haces que sea fácil para el VP decir que sí — la solicitud es clara, el número es específico y has eliminado el trabajo de descifrar los siguientes pasos.",
  },
  {
    prompt: "You've agreed to a concession in a negotiation. Lock it in.",
    promptEs: "Has aceptado una concesión en una negociación. Fíjala.",
    weak: "Okay, we can do that. So we're all set?",
    weakEs: "Está bien, podemos hacer eso. ¿Entonces estamos listos?",
    framework: "Summary → Confirmation → Next Step → Timeline",
    frameworkEs: "Resumen → Confirmación → Siguiente Paso → Plazo",
    parts: [
      {
        label: "Summary",
        labelEs: "Resumen",
        sentence: "We've agreed to extend the delivery window by two weeks in exchange for maintaining the original scope and pricing.",
        sentenceEs: "Hemos acordado extender la ventana de entrega por dos semanas a cambio de mantener el alcance y el precio originales.",
      },
      {
        label: "Confirmation",
        labelEs: "Confirmación",
        sentence: "I want to make sure we're both clear on what we've agreed to.",
        sentenceEs: "Quiero asegurarme de que ambos estemos claros sobre lo que hemos acordado.",
      },
      {
        label: "Next Step",
        labelEs: "Siguiente Paso",
        sentence: "I'll update the contract to reflect the revised timeline and send it for signature by end of day.",
        sentenceEs: "Actualizaré el contrato para reflejar el plazo revisado y lo enviaré para firma antes del final del día.",
      },
      {
        label: "Timeline",
        labelEs: "Plazo",
        sentence: "With signatures in place, execution begins as planned on the first of the month.",
        sentenceEs: "Con las firmas en su lugar, la ejecución comienza según lo planeado el primero del mes.",
      },
    ],
    whyItWorks: "You restate the terms of the concession explicitly — what you gave AND what you kept. No room for later reinterpretation.",
    whyItWorksEs: "Reafirmas los términos de la concesión explícitamente — lo que diste Y lo que mantuviste. Sin espacio para reinterpretaciones posteriores.",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit9FinalShift: FinalShift = {
  before: "You entered negotiations hoping for the best, conceded too early, and left money, terms, or credibility on the table.",
  beforeEs: "Entrabas a las negociaciones esperando lo mejor, cedías demasiado pronto y dejabas dinero, términos o credibilidad sobre la mesa.",
  after: "You anchor with confidence, say no without burning bridges, and close with a summary that locks in terms. Every conversation moves toward a decision.",
  afterEs: "Anclas con confianza, dices no sin quemar puentes y cierras con un resumen que fija los términos. Cada conversación avanza hacia una decisión.",
};
