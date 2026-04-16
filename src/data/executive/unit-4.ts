// Unit 4 — Controlled Tone Under Pressure
// "Defensive → Executive → Strategic. Never defend. Always reframe."
//
// Three sections:
// 4.1 Defensive → Executive Reframing (WeakStrongElite)
// 4.2 Downgrade Emotion, Upgrade Control (WeakStrongElite)
// 4.3 Reframe Language Under Challenge (WeakStrongElite)
//
// Content sourced from Robert's real C1 and C2 executive lessons.

import type {
  WeakStrongEliteItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit4Sections: UnitSection[] = [
  {
    number: 1,
    title: "Defensive → Executive Reframing",
    titleEs: "De Defensivo → Reformulación Ejecutiva",
    why: "When challenged, the instinct is to defend. But defense signals weakness — it tells the room you feel attacked. Executives never defend. They acknowledge, redirect, and reassert direction. The shift from 'That's not our fault' to 'We are addressing the impact' changes your entire positioning.",
    whyEs: "Cuando te desafían, el instinto es defenderse. Pero la defensa señala debilidad — le dice a la sala que te sientes atacado. Los ejecutivos nunca se defienden. Reconocen, redirigen y reafirman la dirección. El cambio de 'That's not our fault' a 'We are addressing the impact' cambia todo tu posicionamiento.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "Never deny. Never deflect. Acknowledge the situation, then pivot immediately to what you are doing about it.",
    techniqueFocusEs: "Nunca niegues. Nunca desvíes. Reconoce la situación, luego pivotea inmediatamente a lo que estás haciendo al respecto.",
    rapidRepeat: [
      { text: "The focus now is…", textEs: "El enfoque ahora es…" },
      { text: "What matters is…", textEs: "Lo que importa es…" },
      { text: "The priority is…", textEs: "La prioridad es…" },
      { text: "We are addressing this by…", textEs: "Estamos abordando esto mediante…" },
    ],
  },
  {
    number: 2,
    title: "Downgrade Emotion, Upgrade Control",
    titleEs: "Reduce la Emoción, Aumenta el Control",
    why: "Emotional language in executive settings signals that you have lost control. 'This is a big problem' tells people you are overwhelmed. 'This is a significant issue' tells people you have assessed the situation. Replace every emotion with its business consequence and you immediately sound like the person who should be managing the situation.",
    whyEs: "El lenguaje emocional en entornos ejecutivos señala que has perdido el control. 'This is a big problem' le dice a la gente que estás abrumado. 'This is a significant issue' les dice que has evaluado la situación. Reemplaza cada emoción con su consecuencia de negocio e inmediatamente suenas como la persona que debería estar gestionando la situación.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "Replace emotion with business consequence. Executives describe impact, not feelings.",
    techniqueFocusEs: "Reemplaza la emoción con la consecuencia de negocio. Los ejecutivos describen impacto, no sentimientos.",
    rapidRepeat: [
      { text: "This creates risk.", textEs: "Esto crea riesgo." },
      { text: "This is not acceptable.", textEs: "Esto no es aceptable." },
      { text: "This requires immediate attention.", textEs: "Esto requiere atención inmediata." },
      { text: "This is impacting performance.", textEs: "Esto está impactando el rendimiento." },
    ],
  },
  {
    number: 3,
    title: "Reframe Language Under Challenge",
    titleEs: "Reformular Bajo Desafío",
    why: "When leadership pushes back with pointed questions — 'Why wasn't this identified earlier?', 'Who is responsible?' — the stakes are highest. These are the moments where executives are tested. Your response must be calm, structured, and forward-looking. Never match the energy of the challenge. Redirect it.",
    whyEs: "Cuando el liderazgo responde con preguntas incisivas — '¿Por qué no se identificó antes?', '¿Quién es responsable?' — las apuestas son las más altas. Estos son los momentos donde los ejecutivos son evaluados. Tu respuesta debe ser calmada, estructurada y orientada al futuro. Nunca iguales la energía del desafío. Redirigela.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "The 'weak' here is the challenge itself — the pressure prompt from leadership. Your job is to respond with the executive reframe, not to match the intensity.",
    techniqueFocusEs: "El 'débil' aquí es el desafío en sí — la pregunta de presión del liderazgo. Tu trabajo es responder con la reformulación ejecutiva, no igualar la intensidad.",
    rapidRepeat: [
      { text: "We have identified the root cause.", textEs: "Hemos identificado la causa raíz." },
      { text: "We are implementing controls.", textEs: "Estamos implementando controles." },
      { text: "This will allow us to detect issues earlier.", textEs: "Esto nos permitirá detectar problemas más temprano." },
      { text: "We have a targeted action plan.", textEs: "Tenemos un plan de acción específico." },
    ],
  },
];

// ─── Section 4.1 — Defensive → Executive Reframing (WeakStrongElite) ──────

export const unit4Section1Drills: WeakStrongEliteItem[] = [
  {
    weak: "That's not our fault.",
    weakEs: "Eso no es culpa nuestra.",
    strong: "The issue originated outside our control, but we are addressing the impact.",
    strongEs: "El problema se originó fuera de nuestro control, pero estamos abordando el impacto.",
    elite: "The issue originated externally, and we are managing the impact proactively.",
    eliteEs: "El problema se originó externamente y estamos gestionando el impacto de manera proactiva.",
  },
  {
    weak: "We did everything we could.",
    weakEs: "Hicimos todo lo que pudimos.",
    strong: "We executed according to plan, and we are now strengthening the approach.",
    strongEs: "Ejecutamos según el plan y ahora estamos fortaleciendo el enfoque.",
    elite: "We executed according to plan and are refining our approach based on new information.",
    eliteEs: "Ejecutamos según el plan y estamos refinando nuestro enfoque basándonos en nueva información.",
  },
  {
    weak: "The team tried their best.",
    weakEs: "El equipo hizo su mejor esfuerzo.",
    strong: "The team executed under constraints, and we are improving conditions to support better performance.",
    strongEs: "El equipo ejecutó bajo restricciones y estamos mejorando las condiciones para apoyar un mejor rendimiento.",
  },
  {
    weak: "We didn't expect this.",
    weakEs: "No esperábamos esto.",
    strong: "This was not anticipated, and we are adjusting accordingly.",
    strongEs: "Esto no fue anticipado y estamos ajustándonos en consecuencia.",
    elite: "This was not anticipated. We are adapting our approach to address the new conditions.",
    eliteEs: "Esto no fue anticipado. Estamos adaptando nuestro enfoque para abordar las nuevas condiciones.",
  },
  {
    weak: "This is a difficult situation.",
    weakEs: "Esta es una situación difícil.",
    strong: "This is a complex situation, and we are managing it with a structured approach.",
    strongEs: "Esta es una situación compleja y la estamos gestionando con un enfoque estructurado.",
  },
  {
    weak: "It wasn't our decision.",
    weakEs: "No fue nuestra decisión.",
    strong: "The decision was made at a different level, and we are executing within those parameters.",
    strongEs: "La decisión se tomó a un nivel diferente y estamos ejecutando dentro de esos parámetros.",
    elite: "The decision was made upstream. We are executing within those parameters and have flagged our recommendations.",
    eliteEs: "La decisión se tomó a un nivel superior. Estamos ejecutando dentro de esos parámetros y hemos señalado nuestras recomendaciones.",
  },
];

// ─── Section 4.2 — Downgrade Emotion, Upgrade Control (WeakStrongElite) ───

export const unit4Section2Drills: WeakStrongEliteItem[] = [
  {
    weak: "This is a big problem.",
    weakEs: "Este es un gran problema.",
    strong: "This is a significant issue.",
    strongEs: "Este es un problema significativo.",
    elite: "This is a significant issue that requires a structured response.",
    eliteEs: "Este es un problema significativo que requiere una respuesta estructurada.",
    note: "Replace emotional scale words ('big', 'huge') with measured executive language.",
    noteEs: "Reemplaza palabras emocionales de escala ('big', 'huge') con lenguaje ejecutivo medido.",
  },
  {
    weak: "This is bad.",
    weakEs: "Esto está mal.",
    strong: "This is not acceptable.",
    strongEs: "Esto no es aceptable.",
    elite: "This is not acceptable and requires immediate correction.",
    eliteEs: "Esto no es aceptable y requiere corrección inmediata.",
    note: "Replace the judgment with a standard and an action requirement.",
    noteEs: "Reemplaza el juicio con un estándar y un requerimiento de acción.",
  },
  {
    weak: "This is frustrating.",
    weakEs: "Esto es frustrante.",
    strong: "This is impacting performance.",
    strongEs: "Esto está impactando el rendimiento.",
    elite: "This is creating measurable impact on performance and needs to be addressed.",
    eliteEs: "Esto está creando un impacto medible en el rendimiento y necesita ser abordado.",
    note: "Replace the emotion with the business consequence. Executives describe impact, not feelings.",
    noteEs: "Reemplaza la emoción con la consecuencia de negocio. Los ejecutivos describen impacto, no sentimientos.",
  },
  {
    weak: "We're in trouble.",
    weakEs: "Estamos en problemas.",
    strong: "We are facing operational risk.",
    strongEs: "Enfrentamos riesgo operacional.",
    elite: "We are facing operational risk that requires immediate attention.",
    eliteEs: "Enfrentamos riesgo operacional que requiere atención inmediata.",
    note: "Replace the panic with a risk category. 'Trouble' is vague; 'operational risk' is actionable.",
    noteEs: "Reemplaza el pánico con una categoría de riesgo. 'Trouble' es vago; 'operational risk' es accionable.",
  },
  {
    weak: "This is urgent.",
    weakEs: "Esto es urgente.",
    strong: "This requires immediate attention.",
    strongEs: "Esto requiere atención inmediata.",
    elite: "This requires immediate attention and a clear action plan.",
    eliteEs: "Esto requiere atención inmediata y un plan de acción claro.",
    note: "Replace the alarm with a directive. 'Urgent' creates anxiety; 'requires immediate attention' creates action.",
    noteEs: "Reemplaza la alarma con una directiva. 'Urgent' crea ansiedad; 'requires immediate attention' crea acción.",
  },
  {
    weak: "I'm worried about this.",
    weakEs: "Me preocupa esto.",
    strong: "This creates concern.",
    strongEs: "Esto genera preocupación.",
    elite: "This creates risk exposure that we need to quantify and address.",
    eliteEs: "Esto crea exposición al riesgo que necesitamos cuantificar y abordar.",
    note: "Replace personal worry with organizational risk language. 'I'm worried' is personal; 'risk exposure' is strategic.",
    noteEs: "Reemplaza la preocupación personal con lenguaje de riesgo organizacional. 'I'm worried' es personal; 'risk exposure' es estratégico.",
  },
];

// ─── Section 4.3 — Reframe Language Under Challenge (WeakStrongElite) ──────

export const unit4Section3Drills: WeakStrongEliteItem[] = [
  {
    weak: "Why wasn't this identified earlier?",
    weakEs: "¿Por qué no se identificó esto antes?",
    strong: "The issue was not fully visible earlier due to gaps in reporting. We have now identified the root cause and are implementing stronger monitoring controls.",
    strongEs: "El problema no fue completamente visible antes debido a brechas en los reportes. Ahora hemos identificado la causa raíz y estamos implementando controles de monitoreo más fuertes.",
    elite: "The issue was not fully visible earlier due to gaps in reporting. We have now identified the root cause and are implementing stronger monitoring controls. This will allow us to detect and address similar issues earlier going forward.",
    eliteEs: "El problema no fue completamente visible antes debido a brechas en los reportes. Ahora hemos identificado la causa raíz y estamos implementando controles de monitoreo más fuertes. Esto nos permitirá detectar y abordar problemas similares más temprano en el futuro.",
    note: "The 'weak' here is the challenging question from leadership — not a weak phrase. Your job is to respond without defensiveness.",
    noteEs: "El 'débil' aquí es la pregunta desafiante del liderazgo — no una frase débil. Tu trabajo es responder sin ponerte a la defensiva.",
  },
  {
    weak: "Who is responsible for this?",
    weakEs: "¿Quién es responsable de esto?",
    strong: "Responsibility sits with the execution team. We are strengthening oversight to prevent recurrence.",
    strongEs: "La responsabilidad recae en el equipo de ejecución. Estamos fortaleciendo la supervisión para prevenir recurrencia.",
    elite: "We have clarified ownership and are implementing controls to prevent recurrence.",
    eliteEs: "Hemos clarificado la responsabilidad y estamos implementando controles para prevenir recurrencia.",
    note: "The 'weak' here is the challenging question from leadership — not a weak phrase. Accept accountability, then pivot to prevention.",
    noteEs: "El 'débil' aquí es la pregunta desafiante del liderazgo — no una frase débil. Acepta la responsabilidad, luego pivotea a la prevención.",
  },
  {
    weak: "This should have been handled differently.",
    weakEs: "Esto debería haberse manejado de otra manera.",
    strong: "We acknowledge the outcome was not ideal. We are applying the lessons learned to strengthen our approach.",
    strongEs: "Reconocemos que el resultado no fue ideal. Estamos aplicando las lecciones aprendidas para fortalecer nuestro enfoque.",
    elite: "The outcome was not ideal. We have documented the learnings and integrated them into our revised process.",
    eliteEs: "El resultado no fue ideal. Hemos documentado las lecciones y las hemos integrado en nuestro proceso revisado.",
    note: "The 'weak' here is the challenging statement from leadership — not a weak phrase. Acknowledge without excusing, then show the corrective action.",
    noteEs: "El 'débil' aquí es la declaración desafiante del liderazgo — no una frase débil. Reconoce sin excusar, luego muestra la acción correctiva.",
  },
  {
    weak: "Are you sure about these numbers?",
    weakEs: "¿Estás seguro de estos números?",
    strong: "We have verified the data through multiple sources. I'm confident in the accuracy of the figures presented.",
    strongEs: "Hemos verificado los datos a través de múltiples fuentes. Confío en la precisión de las cifras presentadas.",
    elite: "The data has been verified, validated, and reconciled across multiple sources.",
    eliteEs: "Los datos han sido verificados, validados y reconciliados a través de múltiples fuentes.",
    note: "The 'weak' here is the challenging question from leadership — not a weak phrase. Respond with methodology, not emotion.",
    noteEs: "El 'débil' aquí es la pregunta desafiante del liderazgo — no una frase débil. Responde con metodología, no con emoción.",
  },
  {
    weak: "This isn't good enough.",
    weakEs: "Esto no es suficiente.",
    strong: "We understand the expectation is higher. We are taking specific steps to close the gap.",
    strongEs: "Entendemos que la expectativa es más alta. Estamos tomando pasos específicos para cerrar la brecha.",
    elite: "We recognize the gap. We have a targeted action plan to reach the expected standard by the agreed timeline.",
    eliteEs: "Reconocemos la brecha. Tenemos un plan de acción específico para alcanzar el estándar esperado dentro del plazo acordado.",
    note: "The 'weak' here is the challenging statement from leadership — not a weak phrase. Accept the standard, then show the path to meeting it.",
    noteEs: "El 'débil' aquí es la declaración desafiante del liderazgo — no una frase débil. Acepta el estándar, luego muestra el camino para cumplirlo.",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit4FinalShift: FinalShift = {
  before: "You responded to pressure with defensiveness — 'That's not our fault', 'We tried our best' — losing credibility with every word.",
  beforeEs: "Respondías a la presión con defensividad — 'That's not our fault', 'We tried our best' — perdiendo credibilidad con cada palabra.",
  after: "You reframe under pressure with calm authority. You never defend. You acknowledge, redirect, and reassert direction.",
  afterEs: "Reformulas bajo presión con autoridad calmada. Nunca te defiendes. Reconoces, rediriges y reafirmas la dirección.",
};
