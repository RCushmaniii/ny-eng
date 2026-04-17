// Unit 7 — High-Stakes Meetings
// "Opening. Holding the floor. Diplomatic disagreement."
//
// Three sections:
// 7.1 Opening and Closing a Meeting (WeakStrongElite)
// 7.2 Holding the Floor and Interrupting (WeakStrongElite)
// 7.3 Diplomatic Disagreement (StructuredResponseBuilder)
//
// This unit applies the mechanics from Units 1-6 to meeting-specific language.

import type {
  WeakStrongEliteItem,
  StructuredResponseItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit7Sections: UnitSection[] = [
  {
    number: 1,
    title: "Opening and Closing a Meeting",
    titleEs: "Abrir y Cerrar una Reunión",
    why: "How you open a meeting sets the tone. How you close it determines whether anything actually happens. Vague openings signal a lack of preparation. Weak closings let decisions evaporate. This section trains you to bookend every meeting with executive-grade precision.",
    whyEs: "Cómo abres una reunión establece el tono. Cómo la cierras determina si algo realmente sucede. Aperturas vagas señalan falta de preparación. Cierres débiles dejan que las decisiones se evaporen. Esta sección te entrena para enmarcar cada reunión con precisión de nivel ejecutivo.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "Open with purpose, close with ownership. Every meeting should start with a clear objective and end with named owners and deadlines.",
    techniqueFocusEs: "Abre con propósito, cierra con responsabilidad. Cada reunión debe comenzar con un objetivo claro y terminar con responsables y plazos definidos.",
    rapidRepeat: [
      { text: "The purpose of today's meeting is…", textEs: "El propósito de la reunión de hoy es…" },
      { text: "Before we close, are there open items?", textEs: "Antes de cerrar, ¿hay temas pendientes?" },
      { text: "I'll circulate a summary within the hour.", textEs: "Circularé un resumen dentro de la hora." },
    ],
  },
  {
    number: 2,
    title: "Holding the Floor and Interrupting",
    titleEs: "Mantener la Palabra e Interrumpir",
    why: "In high-stakes meetings, the ability to hold the floor — and to interrupt diplomatically — separates leaders from participants. If you lose control of your own point, you lose influence. This section trains you to command airtime without creating friction.",
    whyEs: "En reuniones de alto riesgo, la capacidad de mantener la palabra — e interrumpir diplomáticamente — separa a los líderes de los participantes. Si pierdes el control de tu propio punto, pierdes influencia. Esta sección te entrena para dominar el tiempo de intervención sin crear fricción.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "Control the room — don't ask permission to speak. Assert your point with confidence, then justify it with relevance.",
    techniqueFocusEs: "Controla la sala — no pidas permiso para hablar. Afirma tu punto con confianza, luego justifícalo con relevancia.",
    rapidRepeat: [
      { text: "I'd like to add a point before we move on.", textEs: "Me gustaría agregar un punto antes de continuar." },
      { text: "Let me finish this point — it's relevant to the decision.", textEs: "Déjame terminar este punto — es relevante para la decisión." },
      { text: "Before we finalize — I need to flag a risk.", textEs: "Antes de finalizar — necesito señalar un riesgo." },
    ],
  },
  {
    number: 3,
    title: "Diplomatic Disagreement",
    titleEs: "Desacuerdo Diplomático",
    why: "Disagreeing badly creates enemies. Avoiding disagreement creates bad decisions. The executive skill is to challenge ideas without attacking people. This section gives you a repeatable framework — Acknowledge → Reframe → Redirect — that lets you push back with precision and respect.",
    whyEs: "Desacordar mal crea enemigos. Evitar el desacuerdo crea malas decisiones. La habilidad ejecutiva es desafiar ideas sin atacar personas. Esta sección te da un marco repetible — Reconocer → Reencuadrar → Redirigir — que te permite contradecir con precisión y respeto.",
    mechanic: "structured-response",
    techniqueFocus: "Acknowledge their logic before challenging their conclusion. Data beats opinion. Redirect toward a better path, don't just say no.",
    techniqueFocusEs: "Reconoce su lógica antes de desafiar su conclusión. Los datos vencen a la opinión. Redirige hacia un mejor camino, no solo digas que no.",
    rapidRepeat: [
      { text: "I understand the urgency behind this.", textEs: "Entiendo la urgencia detrás de esto." },
      { text: "My concern is…", textEs: "Mi preocupación es…" },
      { text: "I'd recommend we…", textEs: "Recomendaría que…" },
    ],
  },
];

// ─── Section 7.1 — Opening and Closing a Meeting (WeakStrongElite) ─────────

export const unit7Section1Drills: WeakStrongEliteItem[] = [
  {
    weak: "So, let's get started.",
    weakEs: "Bueno, empecemos.",
    strong: "Let's begin. The purpose of today's meeting is to align on next steps for the Q4 rollout.",
    strongEs: "Comencemos. El propósito de la reunión de hoy es alinearnos en los próximos pasos para el lanzamiento del Q4.",
    elite: "I want to accomplish three things today: align on the Q4 timeline, resolve the resource question, and confirm ownership of the client deliverable.",
    eliteEs: "Quiero lograr tres cosas hoy: alinear el cronograma del Q4, resolver la cuestión de recursos y confirmar la responsabilidad de la entrega al cliente.",
    note: "State the purpose immediately — don't ease into it.",
    noteEs: "Declara el propósito inmediatamente — no entres poco a poco.",
  },
  {
    weak: "Does anyone have anything to add?",
    weakEs: "¿Alguien tiene algo que agregar?",
    strong: "Before we close, are there any unresolved items that need to be addressed today?",
    strongEs: "Antes de cerrar, ¿hay algún tema pendiente que necesite ser abordado hoy?",
    elite: "Before we close — any open items that would prevent us from executing on what we've agreed?",
    eliteEs: "Antes de cerrar — ¿algún tema pendiente que nos impida ejecutar lo que hemos acordado?",
    note: "Frame the close around execution, not open-ended discussion.",
    noteEs: "Enmarca el cierre en torno a la ejecución, no a una discusión abierta.",
  },
  {
    weak: "I guess we're done here.",
    weakEs: "Supongo que terminamos.",
    strong: "We've covered the agenda. Let me summarize the decisions and next steps.",
    strongEs: "Hemos cubierto la agenda. Permítanme resumir las decisiones y próximos pasos.",
    elite: "We've covered the agenda. I'll circulate a summary of decisions, owners, and deadlines within the hour.",
    eliteEs: "Hemos cubierto la agenda. Circularé un resumen de decisiones, responsables y plazos dentro de la hora.",
    note: "Own the follow-up — don't leave it to chance.",
    noteEs: "Asume el seguimiento — no lo dejes al azar.",
  },
  {
    weak: "Thanks everyone, talk soon.",
    weakEs: "Gracias a todos, hablamos pronto.",
    strong: "Thank you. The next step is clear: each team lead will confirm their deliverables by end of week.",
    strongEs: "Gracias. El próximo paso es claro: cada líder de equipo confirmará sus entregables para el final de la semana.",
    elite: "Thank you. To confirm: Maria owns the client proposal by Thursday, and James will finalize the resource allocation by Friday. I'll follow up if anything is unclear.",
    eliteEs: "Gracias. Para confirmar: María es responsable de la propuesta al cliente para el jueves, y James finalizará la asignación de recursos para el viernes. Haré seguimiento si algo no queda claro.",
    note: "Name people, name deadlines. Vague closings produce vague results.",
    noteEs: "Nombra personas, nombra plazos. Cierres vagos producen resultados vagos.",
  },
  {
    weak: "Let's go around the room.",
    weakEs: "Hagamos una ronda.",
    strong: "I'd like to hear from each lead on their current status. Start with the area that has the most open risk.",
    strongEs: "Me gustaría escuchar a cada líder sobre su estado actual. Empiecen por el área que tiene más riesgo abierto.",
    elite: "I'd like to hear from each lead on their current status. Start with the area that has the most open risk.",
    eliteEs: "Me gustaría escuchar a cada líder sobre su estado actual. Empiecen por el área que tiene más riesgo abierto.",
    note: "Direct the flow — don't let it meander.",
    noteEs: "Dirige el flujo — no dejes que divague.",
  },
  {
    weak: "So, what do you think?",
    weakEs: "Entonces, ¿qué opinan?",
    strong: "I'd like your perspective on whether this timeline is achievable given current constraints.",
    strongEs: "Me gustaría su perspectiva sobre si este cronograma es alcanzable dadas las restricciones actuales.",
    elite: "Given the constraints we've discussed, what is your assessment of the risk to the timeline?",
    eliteEs: "Dadas las restricciones que hemos discutido, ¿cuál es su evaluación del riesgo para el cronograma?",
    note: "Ask a specific question — vague prompts produce vague answers.",
    noteEs: "Haz una pregunta específica — preguntas vagas producen respuestas vagas.",
  },
];

// ─── Section 7.2 — Holding the Floor and Interrupting (WeakStrongElite) ────

export const unit7Section2Drills: WeakStrongEliteItem[] = [
  {
    weak: "Sorry, can I say something?",
    weakEs: "Perdón, ¿puedo decir algo?",
    strong: "I'd like to add a point before we move on.",
    strongEs: "Me gustaría agregar un punto antes de continuar.",
    elite: "Before we move on — there's a factor we haven't discussed that changes the risk profile.",
    eliteEs: "Antes de continuar — hay un factor que no hemos discutido que cambia el perfil de riesgo.",
    note: "Don't apologize for contributing. State your intent, then deliver.",
    noteEs: "No te disculpes por contribuir. Declara tu intención y luego entrega.",
  },
  {
    weak: "Wait, hold on.",
    weakEs: "Espera, un momento.",
    strong: "I want to come back to the point about timeline.",
    strongEs: "Quiero volver al punto sobre el cronograma.",
    elite: "I want to revisit the timeline point, because the assumption behind it has changed since our last discussion.",
    eliteEs: "Quiero revisitar el punto del cronograma, porque la suposición detrás de él ha cambiado desde nuestra última discusión.",
    note: "Justify the interruption with new information — not just your desire to speak.",
    noteEs: "Justifica la interrupción con información nueva — no solo tu deseo de hablar.",
  },
  {
    weak: "…um, anyway…",
    weakEs: "…eh, en fin…",
    strong: "Let me finish this point — it's relevant to the decision we need to make.",
    strongEs: "Déjame terminar este punto — es relevante para la decisión que necesitamos tomar.",
    elite: "I need to finish this point, because it directly impacts the recommendation.",
    eliteEs: "Necesito terminar este punto, porque impacta directamente la recomendación.",
    note: "When interrupted, reclaim the floor by linking your point to the outcome.",
    noteEs: "Cuando te interrumpan, recupera la palabra vinculando tu punto al resultado.",
  },
  {
    weak: "I think maybe we should…",
    weakEs: "Creo que tal vez deberíamos…",
    strong: "I recommend we take a different approach.",
    strongEs: "Recomiendo que tomemos un enfoque diferente.",
    elite: "Based on what we've discussed, I recommend a different approach. Here's why.",
    eliteEs: "Basado en lo que hemos discutido, recomiendo un enfoque diferente. Esto es por qué.",
    note: "Drop the hedging. 'I think maybe' signals uncertainty. 'I recommend' signals leadership.",
    noteEs: "Elimina las coberturas. 'Creo que tal vez' señala incertidumbre. 'Recomiendo' señala liderazgo.",
  },
  {
    weak: "Can I just…",
    weakEs: "¿Puedo solo…?",
    strong: "There's a point I need to raise before this decision is finalized.",
    strongEs: "Hay un punto que necesito plantear antes de que se finalice esta decisión.",
    elite: "Before we finalize — I need to flag a risk that hasn't been addressed.",
    eliteEs: "Antes de finalizar — necesito señalar un riesgo que no se ha abordado.",
    note: "Control the room — don't ask permission to speak.",
    noteEs: "Controla la sala — no pidas permiso para hablar.",
  },
];

// ─── Section 7.3 — Diplomatic Disagreement (StructuredResponseBuilder) ─────

export const unit7Section3Drills: StructuredResponseItem[] = [
  {
    prompt: "I don't agree with the proposed timeline. How do you push back?",
    promptEs: "No estoy de acuerdo con el cronograma propuesto. ¿Cómo expresas tu desacuerdo?",
    weak: "I don't think that'll work.",
    weakEs: "No creo que eso funcione.",
    framework: "Acknowledge → Reframe → Redirect",
    frameworkEs: "Reconocer → Reencuadrar → Redirigir",
    parts: [
      { label: "Acknowledge", labelEs: "Reconocer", sentence: "I understand the urgency behind this timeline.", sentenceEs: "Entiendo la urgencia detrás de este cronograma." },
      { label: "Reframe", labelEs: "Reencuadrar", sentence: "My concern is that compressing execution increases the risk of quality issues.", sentenceEs: "Mi preocupación es que comprimir la ejecución aumenta el riesgo de problemas de calidad." },
      { label: "Redirect", labelEs: "Redirigir", sentence: "I'd recommend we build in a one-week buffer to protect the deliverable.", sentenceEs: "Recomendaría que incluyamos un margen de una semana para proteger la entrega." },
    ],
    whyItWorks: "You validate their urgency before challenging their timeline. No defensiveness, no confrontation.",
    whyItWorksEs: "Validas su urgencia antes de desafiar su cronograma. Sin actitud defensiva, sin confrontación.",
  },
  {
    prompt: "Leadership wants to cut your budget. How do you respond?",
    promptEs: "La dirección quiere recortar tu presupuesto. ¿Cómo respondes?",
    weak: "That's not fair, we need that money.",
    weakEs: "Eso no es justo, necesitamos ese dinero.",
    framework: "Acknowledge → Reframe → Redirect",
    frameworkEs: "Reconocer → Reencuadrar → Redirigir",
    parts: [
      { label: "Acknowledge", labelEs: "Reconocer", sentence: "I understand the need to manage overall costs.", sentenceEs: "Entiendo la necesidad de gestionar los costos generales." },
      { label: "Reframe", labelEs: "Reencuadrar", sentence: "The challenge is that the proposed cut would directly impact our ability to deliver on the Q4 commitments we've already agreed to.", sentenceEs: "El desafío es que el recorte propuesto impactaría directamente nuestra capacidad de cumplir con los compromisos del Q4 que ya hemos acordado." },
      { label: "Redirect", labelEs: "Redirigir", sentence: "I'd suggest we identify lower-impact areas to absorb the reduction rather than cutting this line.", sentenceEs: "Sugeriría que identifiquemos áreas de menor impacto para absorber la reducción en lugar de recortar esta línea." },
    ],
    whyItWorks: "You connect the budget cut to a business consequence they care about (Q4 commitments), not your feelings.",
    whyItWorksEs: "Conectas el recorte de presupuesto con una consecuencia de negocio que les importa (compromisos del Q4), no con tus sentimientos.",
  },
  {
    prompt: "A colleague proposes a strategy you think is wrong. How do you disagree?",
    promptEs: "Un colega propone una estrategia que crees que es incorrecta. ¿Cómo expresas tu desacuerdo?",
    weak: "I don't think that's a good idea.",
    weakEs: "No creo que esa sea una buena idea.",
    framework: "Acknowledge → Reframe → Redirect",
    frameworkEs: "Reconocer → Reencuadrar → Redirigir",
    parts: [
      { label: "Acknowledge", labelEs: "Reconocer", sentence: "There's a sound logic behind that approach, and I can see why it's appealing.", sentenceEs: "Hay una lógica sólida detrás de ese enfoque, y puedo ver por qué es atractivo." },
      { label: "Reframe", labelEs: "Reencuadrar", sentence: "Where I have a concern is the assumption that demand will hold steady — our data suggests otherwise.", sentenceEs: "Donde tengo una preocupación es en la suposición de que la demanda se mantendrá estable — nuestros datos sugieren lo contrario." },
      { label: "Redirect", labelEs: "Redirigir", sentence: "I'd propose we stress-test both scenarios before committing, so we can make a data-driven decision.", sentenceEs: "Propondría que sometamos ambos escenarios a pruebas de estrés antes de comprometernos, para poder tomar una decisión basada en datos." },
    ],
    whyItWorks: "You respect their reasoning before challenging a specific assumption. Data, not opinion.",
    whyItWorksEs: "Respetas su razonamiento antes de desafiar una suposición específica. Datos, no opinión.",
  },
  {
    prompt: "Your manager assigns you a project you think is misguided. How do you push back?",
    promptEs: "Tu gerente te asigna un proyecto que crees que está mal enfocado. ¿Cómo expresas tu desacuerdo?",
    weak: "I don't think this project makes sense.",
    weakEs: "No creo que este proyecto tenga sentido.",
    framework: "Acknowledge → Reframe → Redirect",
    frameworkEs: "Reconocer → Reencuadrar → Redirigir",
    parts: [
      { label: "Acknowledge", labelEs: "Reconocer", sentence: "I appreciate being brought into this — it's clearly a priority.", sentenceEs: "Agradezco que me incluyan en esto — claramente es una prioridad." },
      { label: "Reframe", labelEs: "Reencuadrar", sentence: "My concern is that the current scope may not produce the outcome we're targeting, based on what I'm seeing in the data.", sentenceEs: "Mi preocupación es que el alcance actual puede no producir el resultado que buscamos, basándome en lo que estoy viendo en los datos." },
      { label: "Redirect", labelEs: "Redirigir", sentence: "I'd recommend we adjust the scope to focus on the highest-impact elements and revisit the rest once we have initial results.", sentenceEs: "Recomendaría que ajustemos el alcance para enfocarnos en los elementos de mayor impacto y revisemos el resto una vez que tengamos resultados iniciales." },
    ],
    whyItWorks: "You show you're invested ('appreciate being brought in'), then redirect with a scope suggestion — not a blanket rejection.",
    whyItWorksEs: "Muestras que estás comprometido ('agradezco que me incluyan'), luego rediriges con una sugerencia de alcance — no un rechazo general.",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit7FinalShift: FinalShift = {
  before: "You showed up to meetings and participated. But you didn't control the room — you reacted to it.",
  beforeEs: "Asistías a reuniones y participabas. Pero no controlabas la sala — reaccionabas a ella.",
  after: "You open with purpose, hold the floor with authority, and disagree without creating enemies. The room follows your structure.",
  afterEs: "Abres con propósito, mantienes la palabra con autoridad y desacuerdas sin crear enemigos. La sala sigue tu estructura.",
};
