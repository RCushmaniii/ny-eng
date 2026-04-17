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
    weak: "I'm really frustrated with this team.",
    weakEs: "Estoy muy frustrado con este equipo.",
    strong: "The team's output is not meeting the standard we need.",
    strongEs: "El resultado del equipo no cumple con el estándar que necesitamos.",
    elite: "The team's output is below the standard required for this deliverable. I'm implementing specific corrections.",
    eliteEs: "El resultado del equipo está por debajo del estándar requerido para esta entrega. Estoy implementando correcciones específicas.",
    note: "'Frustrated' tells people you've lost composure. Naming the gap between output and standard tells them you've assessed the situation and are acting on it.",
    noteEs: "'Frustrado' le dice a la gente que perdiste la compostura. Nombrar la brecha entre el resultado y el estándar les dice que has evaluado la situación y estás actuando.",
  },
  {
    weak: "This whole project is a disaster.",
    weakEs: "Todo este proyecto es un desastre.",
    strong: "The project is facing critical challenges that require immediate intervention.",
    strongEs: "El proyecto enfrenta desafíos críticos que requieren intervención inmediata.",
    elite: "The project has deviated significantly from plan. I've initiated a structured recovery to address the three highest-risk areas.",
    eliteEs: "El proyecto se ha desviado significativamente del plan. He iniciado una recuperación estructurada para abordar las tres áreas de mayor riesgo.",
    note: "'Disaster' is a surrender word — it signals you see the situation as beyond control. 'Deviated from plan' plus a recovery action signals you're already managing it.",
    noteEs: "'Desastre' es una palabra de rendición — señala que ves la situación como fuera de control. 'Desviado del plan' más una acción de recuperación señala que ya lo estás gestionando.",
  },
  {
    weak: "I can't believe they did this again.",
    weakEs: "No puedo creer que hicieron esto otra vez.",
    strong: "This is a recurring issue that indicates a systemic gap.",
    strongEs: "Este es un problema recurrente que indica una brecha sistémica.",
    elite: "This pattern has repeated three times. It indicates a structural weakness in our process that needs to be addressed, not just corrected case by case.",
    eliteEs: "Este patrón se ha repetido tres veces. Indica una debilidad estructural en nuestro proceso que necesita ser abordada, no solo corregida caso por caso.",
    note: "'I can't believe' is shock language — it tells the room you were caught off guard. Naming the pattern and diagnosing the root cause tells them you've been tracking it and know the fix.",
    noteEs: "'No puedo creer' es lenguaje de sorpresa — le dice a la sala que te tomaron desprevenido. Nombrar el patrón y diagnosticar la causa raíz les dice que lo has estado rastreando y sabes la solución.",
  },
  {
    weak: "Nobody told me about this!",
    weakEs: "¡Nadie me dijo sobre esto!",
    strong: "I was not included in this communication, which created a coordination gap.",
    strongEs: "No fui incluido en esta comunicación, lo cual creó una brecha de coordinación.",
    elite: "The communication gap created downstream impact. Going forward, I need to be included in decisions that affect my deliverables.",
    eliteEs: "La brecha de comunicación creó impacto en cadena. De ahora en adelante, necesito ser incluido en las decisiones que afecten mis entregables.",
    note: "'Nobody told me' is blame language — it positions you as a victim. Describing the coordination gap and stating your requirement positions you as someone who manages information flow.",
    noteEs: "'Nadie me dijo' es lenguaje de culpa — te posiciona como víctima. Describir la brecha de coordinación y establecer tu requerimiento te posiciona como alguien que gestiona el flujo de información.",
  },
  {
    weak: "This timeline is impossible.",
    weakEs: "Este cronograma es imposible.",
    strong: "The current timeline presents significant execution risk.",
    strongEs: "El cronograma actual presenta un riesgo de ejecución significativo.",
    elite: "The timeline as proposed does not allow sufficient margin for quality assurance. I recommend extending by one week or reducing scope.",
    eliteEs: "El cronograma propuesto no permite margen suficiente para aseguramiento de calidad. Recomiendo extender una semana o reducir el alcance.",
    note: "'Impossible' shuts down the conversation. Naming the specific risk (quality margin) and offering two alternatives keeps you in control of the negotiation.",
    noteEs: "'Imposible' cierra la conversación. Nombrar el riesgo específico (margen de calidad) y ofrecer dos alternativas te mantiene en control de la negociación.",
  },
  {
    weak: "They completely ignored our input.",
    weakEs: "Ignoraron completamente nuestro aporte.",
    strong: "Our input was not reflected in the final decision.",
    strongEs: "Nuestro aporte no se reflejó en la decisión final.",
    elite: "Our recommendations were not incorporated. I'd like to understand the reasoning so we can align on the path forward.",
    eliteEs: "Nuestras recomendaciones no fueron incorporadas. Me gustaría entender el razonamiento para poder alinearnos en el camino a seguir.",
    note: "'Ignored' is an accusation that creates defensiveness in others. 'Not incorporated' is neutral, and asking for reasoning opens a productive dialogue instead of a confrontation.",
    noteEs: "'Ignoraron' es una acusación que genera defensividad en otros. 'No incorporadas' es neutral, y preguntar por el razonamiento abre un diálogo productivo en vez de una confrontación.",
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
