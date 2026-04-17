// Unit 8 — Feedback and Difficult Conversations
// "Give feedback without offending. Receive it with poise."
//
// Three sections:
// 8.1 Giving Feedback (StructuredResponse — Observation → Impact → Expectation)
// 8.2 Receiving Feedback with Poise (WeakStrongElite)
// 8.3 Conflict, Apology, and Repair (StructuredResponse — Acknowledge → Own → Action → Commitment)
//
// Content sourced from Robert's real C1 and C2 executive lessons.

import type {
  StructuredResponseItem,
  WeakStrongEliteItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit8Sections: UnitSection[] = [
  {
    number: 1,
    title: "Giving Feedback",
    titleEs: "Dar Retroalimentación",
    why: "Most people either avoid feedback or deliver it so bluntly it damages the relationship. The executives who develop talent give feedback that is specific, impact-driven, and forward-looking. This framework — Observation, Impact, Expectation — removes the personal attack and replaces it with a professional standard.",
    whyEs: "La mayoría de las personas evita dar retroalimentación o la entrega tan bruscamente que daña la relación. Los ejecutivos que desarrollan talento dan retroalimentación que es específica, orientada al impacto y con visión de futuro. Este marco — Observación, Impacto, Expectativa — elimina el ataque personal y lo reemplaza con un estándar profesional.",
    mechanic: "structured-response",
    techniqueFocus: "Observation → Impact → Expectation. Name what happened, describe the consequence, state the standard going forward. No generalities, no personal attacks.",
    techniqueFocusEs: "Observación → Impacto → Expectativa. Nombra lo que sucedió, describe la consecuencia, establece el estándar a futuro. Sin generalidades, sin ataques personales.",
    rapidRepeat: [
      { text: "I've noticed a pattern that I want to address.", textEs: "He notado un patrón que quiero abordar." },
      { text: "This created a downstream impact.", textEs: "Esto creó un impacto en cadena." },
      { text: "Going forward, I need you to…", textEs: "De ahora en adelante, necesito que…" },
    ],
  },
  {
    number: 2,
    title: "Receiving Feedback with Poise",
    titleEs: "Recibir Retroalimentación con Compostura",
    why: "How you receive feedback defines your leadership brand. Getting defensive, dismissive, or passive-aggressive tells people you cannot be coached — and leaders who cannot be coached get sidelined. Executive poise means taking the feedback seriously, even when it stings.",
    whyEs: "Cómo recibes retroalimentación define tu marca de liderazgo. Ponerse a la defensiva, ser despectivo o pasivo-agresivo le dice a la gente que no puedes ser guiado — y los líderes que no pueden ser guiados quedan marginados. La compostura ejecutiva significa tomar la retroalimentación en serio, incluso cuando duele.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "Executive poise means taking the feedback seriously, even when it stings. Acknowledge, seek specificity, and commit to action — never defend, dismiss, or deflect.",
    techniqueFocusEs: "La compostura ejecutiva significa tomar la retroalimentación en serio, incluso cuando duele. Reconoce, busca especificidad y comprométete a actuar — nunca te defiendas, desestimes o desvíes.",
    rapidRepeat: [
      { text: "I appreciate you raising this.", textEs: "Agradezco que lo plantees." },
      { text: "I'd like to understand the specific concern.", textEs: "Me gustaría entender la preocupación específica." },
      { text: "I hear you — here's what I'm adjusting.", textEs: "Te escucho — esto es lo que estoy ajustando." },
    ],
  },
  {
    number: 3,
    title: "Conflict, Apology, and Repair",
    titleEs: "Conflicto, Disculpa y Reparación",
    why: "Mistakes happen. Relationships strain. What separates executives from everyone else is how they repair. A vague 'sorry about that' signals you either don't understand the damage or don't care enough to fix it. The Acknowledge → Own → Action → Commitment framework turns an apology into a credibility-building moment.",
    whyEs: "Los errores suceden. Las relaciones se tensan. Lo que separa a los ejecutivos de todos los demás es cómo reparan. Un vago 'disculpa por eso' señala que no entiendes el daño o no te importa lo suficiente como para arreglarlo. El marco Reconocer → Asumir → Acción → Compromiso convierte una disculpa en un momento de construcción de credibilidad.",
    mechanic: "structured-response",
    techniqueFocus: "Acknowledge → Own → Action → Commitment. Name the damage, take ownership without hedging, describe the fix, and commit to follow-through.",
    techniqueFocusEs: "Reconocer → Asumir → Acción → Compromiso. Nombra el daño, asume la responsabilidad sin evasivas, describe la solución y comprométete al seguimiento.",
    rapidRepeat: [
      { text: "I take that seriously.", textEs: "Me lo tomo en serio." },
      { text: "The issue was on our side.", textEs: "El problema fue de nuestro lado." },
      { text: "I'll personally follow up to confirm.", textEs: "Personalmente daré seguimiento para confirmar." },
    ],
  },
];

// ─── Section 8.1 — Giving Feedback (StructuredResponse) ───────────────────

export const unit8Section1Drills: StructuredResponseItem[] = [
  {
    prompt: "A direct report missed a critical deadline. Give feedback.",
    promptEs: "Un subordinado directo no cumplió un plazo crítico. Da retroalimentación.",
    weak: "You were late on this. That's not okay.",
    weakEs: "Llegaste tarde con esto. Eso no está bien.",
    framework: "Observation → Impact → Expectation",
    frameworkEs: "Observación → Impacto → Expectativa",
    parts: [
      {
        label: "Observation",
        labelEs: "Observación",
        sentence: "The deliverable was due Friday, and it arrived on Tuesday of the following week.",
        sentenceEs: "La entrega estaba prevista para el viernes y llegó el martes de la semana siguiente.",
      },
      {
        label: "Impact",
        labelEs: "Impacto",
        sentence: "This created a downstream delay that affected the client timeline and put the team under additional pressure.",
        sentenceEs: "Esto creó un retraso en cadena que afectó el cronograma del cliente y puso al equipo bajo presión adicional.",
      },
      {
        label: "Expectation",
        labelEs: "Expectativa",
        sentence: "Going forward, I need you to flag risks to the timeline at least 48 hours before the deadline — not after it passes.",
        sentenceEs: "De ahora en adelante, necesito que señales los riesgos del cronograma al menos 48 horas antes del plazo — no después de que pase.",
      },
    ],
    whyItWorks: "Specific dates, specific consequences, specific ask. No generalities, no personal attack.",
    whyItWorksEs: "Fechas específicas, consecuencias específicas, solicitud específica. Sin generalidades, sin ataques personales.",
  },
  {
    prompt: "A team member's work quality has been declining. Address it.",
    promptEs: "La calidad del trabajo de un miembro del equipo ha estado disminuyendo. Abórdalo.",
    weak: "Your work hasn't been great lately.",
    weakEs: "Tu trabajo no ha estado muy bien últimamente.",
    framework: "Observation → Impact → Expectation",
    frameworkEs: "Observación → Impacto → Expectativa",
    parts: [
      {
        label: "Observation",
        labelEs: "Observación",
        sentence: "Over the last three weeks, I've noticed errors in two deliverables that were previously reliable.",
        sentenceEs: "Durante las últimas tres semanas, he notado errores en dos entregas que antes eran confiables.",
      },
      {
        label: "Impact",
        labelEs: "Impacto",
        sentence: "This required rework that consumed capacity we didn't have, and it raised questions from the client about our reliability.",
        sentenceEs: "Esto requirió retrabajo que consumió capacidad que no teníamos, y generó preguntas del cliente sobre nuestra confiabilidad.",
      },
      {
        label: "Expectation",
        labelEs: "Expectativa",
        sentence: "I'd like us to set up a brief review checkpoint before final submission to catch these issues earlier.",
        sentenceEs: "Me gustaría que establezcamos un breve punto de revisión antes de la entrega final para detectar estos problemas antes.",
      },
    ],
    whyItWorks: "You name the pattern ('three weeks, two deliverables'), not a vague feeling. The ask is a process fix, not a character judgment.",
    whyItWorksEs: "Nombras el patrón ('tres semanas, dos entregas'), no una sensación vaga. La solicitud es una mejora de proceso, no un juicio de carácter.",
  },
  {
    prompt: "A peer didn't keep you informed on a project that affects your team. Address it.",
    promptEs: "Un colega no te mantuvo informado sobre un proyecto que afecta a tu equipo. Abórdalo.",
    weak: "You should have told me about this.",
    weakEs: "Deberías haberme informado sobre esto.",
    framework: "Observation → Impact → Expectation",
    frameworkEs: "Observación → Impacto → Expectativa",
    parts: [
      {
        label: "Observation",
        labelEs: "Observación",
        sentence: "I learned about the scope change after it was already in execution — I wasn't included in the discussion.",
        sentenceEs: "Me enteré del cambio de alcance después de que ya estaba en ejecución — no me incluyeron en la discusión.",
      },
      {
        label: "Impact",
        labelEs: "Impacto",
        sentence: "This created a misalignment between our teams that took several days to resolve.",
        sentenceEs: "Esto creó una desalineación entre nuestros equipos que tomó varios días resolver.",
      },
      {
        label: "Expectation",
        labelEs: "Expectativa",
        sentence: "Going forward, I'd appreciate being looped in when scope changes affect shared deliverables, even if it's just a quick heads-up.",
        sentenceEs: "De ahora en adelante, agradecería que me incluyan cuando los cambios de alcance afecten entregas compartidas, aunque sea solo un aviso rápido.",
      },
    ],
    whyItWorks: "You describe the gap without blaming. The ask ('loop me in') is small and reasonable.",
    whyItWorksEs: "Describes la brecha sin culpar. La solicitud ('inclúyeme') es pequeña y razonable.",
  },
  {
    prompt: "A direct report is too passive in leadership meetings. Coach them.",
    promptEs: "Un subordinado directo es demasiado pasivo en las reuniones de liderazgo. Entrénalo.",
    weak: "You need to speak up more in meetings.",
    weakEs: "Necesitas hablar más en las reuniones.",
    framework: "Observation → Impact → Expectation",
    frameworkEs: "Observación → Impacto → Expectativa",
    parts: [
      {
        label: "Observation",
        labelEs: "Observación",
        sentence: "In the last three leadership meetings, you presented your updates but didn't weigh in on the discussion — even when the topics directly affected your area.",
        sentenceEs: "En las últimas tres reuniones de liderazgo, presentaste tus actualizaciones pero no participaste en la discusión — incluso cuando los temas afectaban directamente tu área.",
      },
      {
        label: "Impact",
        labelEs: "Impacto",
        sentence: "The risk is that leadership starts making decisions about your domain without your input, which creates problems downstream.",
        sentenceEs: "El riesgo es que el liderazgo comience a tomar decisiones sobre tu área sin tu aporte, lo que crea problemas en cadena.",
      },
      {
        label: "Expectation",
        labelEs: "Expectativa",
        sentence: "In the next meeting, I'd like you to come prepared with one specific recommendation on the agenda item that most affects your team.",
        sentenceEs: "En la próxima reunión, me gustaría que vengas preparado con una recomendación específica sobre el punto de agenda que más afecte a tu equipo.",
      },
    ],
    whyItWorks: "You give them a specific, achievable action ('one recommendation on one item') — not a vague 'speak up more'.",
    whyItWorksEs: "Les das una acción específica y alcanzable ('una recomendación sobre un punto') — no un vago 'habla más'.",
  },
];

// ─── Section 8.2 — Receiving Feedback with Poise (WeakStrongElite) ────────

export const unit8Section2Drills: WeakStrongEliteItem[] = [
  {
    weak: "That's not fair.",
    weakEs: "Eso no es justo.",
    strong: "I appreciate you raising this. Can you help me understand the specific concern?",
    strongEs: "Agradezco que lo plantees. ¿Puedes ayudarme a entender la preocupación específica?",
    elite: "Thank you for the directness. I'd like to understand the specific behavior or outcome you're referring to so I can address it.",
    eliteEs: "Gracias por la franqueza. Me gustaría entender el comportamiento o resultado específico al que te refieres para poder abordarlo.",
    note: "Executive poise means taking the feedback seriously, even when it stings.",
    noteEs: "La compostura ejecutiva significa tomar la retroalimentación en serio, incluso cuando duele.",
  },
  {
    weak: "I disagree.",
    weakEs: "No estoy de acuerdo.",
    strong: "I see this differently, but I want to understand your perspective first.",
    strongEs: "Lo veo de manera diferente, pero quiero entender tu perspectiva primero.",
    elite: "I have a different reading of the situation, but I'd like to hear your full assessment before I respond.",
    eliteEs: "Tengo una lectura diferente de la situación, pero me gustaría escuchar tu evaluación completa antes de responder.",
    note: "Executive poise means taking the feedback seriously, even when it stings.",
    noteEs: "La compostura ejecutiva significa tomar la retroalimentación en serio, incluso cuando duele.",
  },
  {
    weak: "But I had a reason for that.",
    weakEs: "Pero tenía una razón para eso.",
    strong: "There was context behind that decision that may not have been visible. Let me share it.",
    strongEs: "Hubo un contexto detrás de esa decisión que puede no haber sido visible. Déjame compartirlo.",
    elite: "There were factors driving that decision that I should have communicated more clearly. Let me walk you through the reasoning.",
    eliteEs: "Hubo factores que impulsaron esa decisión que debí haber comunicado con más claridad. Déjame explicarte el razonamiento.",
    note: "Executive poise means taking the feedback seriously, even when it stings.",
    noteEs: "La compostura ejecutiva significa tomar la retroalimentación en serio, incluso cuando duele.",
  },
  {
    weak: "I already know that.",
    weakEs: "Ya lo sé.",
    strong: "That's a fair point. I've been aware of it but haven't addressed it effectively yet.",
    strongEs: "Es un punto válido. He sido consciente de ello pero no lo he abordado de manera efectiva aún.",
    elite: "You're right to flag it. I've been tracking this but haven't made enough progress — here's what I'm adjusting.",
    eliteEs: "Tienes razón en señalarlo. He estado dando seguimiento pero no he avanzado lo suficiente — esto es lo que estoy ajustando.",
    note: "Executive poise means taking the feedback seriously, even when it stings.",
    noteEs: "La compostura ejecutiva significa tomar la retroalimentación en serio, incluso cuando duele.",
  },
  {
    weak: "It's not my fault.",
    weakEs: "No es mi culpa.",
    strong: "I understand the concern. Let me clarify what was within my control and what I'm doing about it.",
    strongEs: "Entiendo la preocupación. Déjame aclarar qué estuvo dentro de mi control y qué estoy haciendo al respecto.",
    elite: "I want to be clear about where ownership sits. Here's what was within my control, and here's what I'm doing to address it.",
    eliteEs: "Quiero ser claro sobre dónde está la responsabilidad. Esto es lo que estuvo dentro de mi control, y esto es lo que estoy haciendo para abordarlo.",
    note: "Executive poise means taking the feedback seriously, even when it stings.",
    noteEs: "La compostura ejecutiva significa tomar la retroalimentación en serio, incluso cuando duele.",
  },
  {
    weak: "Fine, whatever.",
    weakEs: "Bueno, como sea.",
    strong: "Understood. I'll take this into account and adjust my approach.",
    strongEs: "Entendido. Tomaré esto en cuenta y ajustaré mi enfoque.",
    elite: "I hear you. I'll reflect on this and come back with a specific plan to address it.",
    eliteEs: "Te escucho. Reflexionaré sobre esto y volveré con un plan específico para abordarlo.",
    note: "Executive poise means taking the feedback seriously, even when it stings.",
    noteEs: "La compostura ejecutiva significa tomar la retroalimentación en serio, incluso cuando duele.",
  },
];

// ─── Section 8.3 — Conflict, Apology, and Repair (StructuredResponse) ─────

export const unit8Section3Drills: StructuredResponseItem[] = [
  {
    prompt: "Your team made a mistake that affected another department. How do you address it?",
    promptEs: "Tu equipo cometió un error que afectó a otro departamento. ¿Cómo lo abordas?",
    weak: "Sorry about that. We'll try to do better.",
    weakEs: "Disculpa por eso. Intentaremos hacerlo mejor.",
    framework: "Acknowledge → Own → Action → Commitment",
    frameworkEs: "Reconocer → Asumir → Acción → Compromiso",
    parts: [
      {
        label: "Acknowledge",
        labelEs: "Reconocer",
        sentence: "I'm aware that the error in our deliverable created problems for your team, and I take that seriously.",
        sentenceEs: "Soy consciente de que el error en nuestra entrega creó problemas para tu equipo, y me lo tomo en serio.",
      },
      {
        label: "Own",
        labelEs: "Asumir",
        sentence: "The issue was on our side — specifically, a gap in our review process that I should have caught.",
        sentenceEs: "El problema fue de nuestro lado — específicamente, una brecha en nuestro proceso de revisión que debí haber detectado.",
      },
      {
        label: "Action",
        labelEs: "Acción",
        sentence: "We've already implemented an additional checkpoint to prevent this from recurring.",
        sentenceEs: "Ya hemos implementado un punto de control adicional para evitar que esto se repita.",
      },
      {
        label: "Commitment",
        labelEs: "Compromiso",
        sentence: "I'll personally follow up with you at the end of the week to confirm the fix is holding.",
        sentenceEs: "Personalmente daré seguimiento contigo al final de la semana para confirmar que la solución se mantiene.",
      },
    ],
    whyItWorks: "You name the specific cause, own it without hedging, describe the fix, and commit to follow-up. This is repair, not just apology.",
    whyItWorksEs: "Nombras la causa específica, la asumes sin evasivas, describes la solución y te comprometes al seguimiento. Esto es reparación, no solo disculpa.",
  },
  {
    prompt: "You and a peer have had tension after a disagreement. How do you repair it?",
    promptEs: "Tú y un colega han tenido tensión después de un desacuerdo. ¿Cómo lo reparas?",
    weak: "I guess we just see things differently.",
    weakEs: "Supongo que simplemente vemos las cosas diferente.",
    framework: "Acknowledge → Own → Action → Commitment",
    frameworkEs: "Reconocer → Asumir → Acción → Compromiso",
    parts: [
      {
        label: "Acknowledge",
        labelEs: "Reconocer",
        sentence: "I realize the way I handled the discussion in last week's meeting wasn't productive, and I want to address that directly.",
        sentenceEs: "Me doy cuenta de que la forma en que manejé la discusión en la reunión de la semana pasada no fue productiva, y quiero abordarlo directamente.",
      },
      {
        label: "Own",
        labelEs: "Asumir",
        sentence: "I should have engaged with your perspective before pushing back — that's on me.",
        sentenceEs: "Debí haber considerado tu perspectiva antes de responder — eso es mi responsabilidad.",
      },
      {
        label: "Action",
        labelEs: "Acción",
        sentence: "I'd like to schedule 30 minutes to hear your thinking in full and find common ground.",
        sentenceEs: "Me gustaría agendar 30 minutos para escuchar tu razonamiento completo y encontrar puntos en común.",
      },
      {
        label: "Commitment",
        labelEs: "Compromiso",
        sentence: "Going forward, I'll make a point of understanding your position before I take a stance in front of the group.",
        sentenceEs: "De ahora en adelante, me aseguraré de entender tu posición antes de tomar una postura frente al grupo.",
      },
    ],
    whyItWorks: "You name the specific incident, own your part, and propose a concrete repair action. No vague 'let's move on'.",
    whyItWorksEs: "Nombras el incidente específico, asumes tu parte y propones una acción de reparación concreta. Sin un vago 'sigamos adelante'.",
  },
  {
    prompt: "Your team delivered late to an important client. How do you address it?",
    promptEs: "Tu equipo entregó tarde a un cliente importante. ¿Cómo lo abordas?",
    weak: "Sorry, things got a bit behind. It won't happen again.",
    weakEs: "Disculpa, las cosas se atrasaron un poco. No volverá a pasar.",
    framework: "Acknowledge → Own → Action → Commitment",
    frameworkEs: "Reconocer → Asumir → Acción → Compromiso",
    parts: [
      {
        label: "Acknowledge",
        labelEs: "Reconocer",
        sentence: "I want to address the delivery delay directly — it fell below the standard we committed to.",
        sentenceEs: "Quiero abordar el retraso en la entrega directamente — estuvo por debajo del estándar al que nos comprometimos.",
      },
      {
        label: "Own",
        labelEs: "Asumir",
        sentence: "The delay was caused by an internal coordination gap that we should have anticipated.",
        sentenceEs: "El retraso fue causado por una brecha de coordinación interna que debimos haber anticipado.",
      },
      {
        label: "Action",
        labelEs: "Acción",
        sentence: "We've restructured the handoff process to prevent this specific failure mode.",
        sentenceEs: "Hemos reestructurado el proceso de traspaso para prevenir este modo de fallo específico.",
      },
      {
        label: "Commitment",
        labelEs: "Compromiso",
        sentence: "For the next deliverable, I'll provide you with a progress update mid-cycle so you have full visibility.",
        sentenceEs: "Para la próxima entrega, te proporcionaré una actualización de progreso a mitad de ciclo para que tengas visibilidad completa.",
      },
    ],
    whyItWorks: "Client-facing repair requires specificity and a tangible process change — not just 'sorry, won't happen again'.",
    whyItWorksEs: "La reparación con clientes requiere especificidad y un cambio de proceso tangible — no solo 'disculpa, no volverá a pasar'.",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit8FinalShift: FinalShift = {
  before: "You avoided difficult conversations or blundered through them — vague feedback, defensive reactions, hollow apologies.",
  beforeEs: "Evitabas las conversaciones difíciles o las manejabas torpemente — retroalimentación vaga, reacciones defensivas, disculpas vacías.",
  after: "You give feedback that lands without offending, receive it with poise, and repair relationships with specificity and follow-through.",
  afterEs: "Das retroalimentación que impacta sin ofender, la recibes con compostura y reparas relaciones con especificidad y seguimiento.",
};
