// Unit 2 — Eliminating Weak Language
// "Decisive without aggressive. Calibrated certainty."
//
// Three sections:
// 2.1 Filler Elimination — remove hedging (WeakStrongElite)
// 2.2 Controlled Assertion — declarative sentence stems (WeakStrongElite)
// 2.3 Calibrated Certainty — direct without tense (WeakStrongElite)
//
// Content sourced from Robert's real C1 and C2 executive lessons.

import type {
  WeakStrongEliteItem,
  UnitSection,
  FinalShift,
} from "./types";

// ─── Section metadata ──────────────────────────────────────────────────────

export const unit2Sections: UnitSection[] = [
  {
    number: 1,
    title: "Filler Elimination",
    titleEs: "Eliminación de Rellenos",
    why: "At lower levels, people hedge because they lack confidence. At senior level, over-hedging signals lack of control. Fillers like 'I think', 'maybe', 'kind of', and 'sort of' drain authority from every sentence they touch.",
    whyEs: "En niveles más bajos, las personas atenúan porque les falta confianza. En el nivel senior, atenuar demasiado señala falta de control. Los rellenos como 'I think', 'maybe', 'kind of' y 'sort of' drenan autoridad de cada oración que tocan.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "When you remove filler, your tone must still sound measured. Senior leaders sound direct, but not tense.",
    techniqueFocusEs: "Cuando eliminas los rellenos, tu tono debe seguir sonando medido. Los líderes senior suenan directos, pero no tensos.",
    rapidRepeat: [
      { text: "The issue is the timeline.", textEs: "El problema es la línea de tiempo." },
      { text: "The data shows a clear pattern.", textEs: "Los datos muestran un patrón claro." },
      { text: "We need to move faster.", textEs: "Necesitamos movernos más rápido." },
      { text: "This creates risk.", textEs: "Esto crea riesgo." },
      { text: "The priority is execution.", textEs: "La prioridad es la ejecución." },
    ],
  },
  {
    number: 2,
    title: "Controlled Assertion",
    titleEs: "Afirmación Controlada",
    why: "Once you remove filler, you need replacement patterns — sentence structures that sound authoritative by default. These stems become your executive foundation: deploy them under pressure and your speech immediately sounds more controlled.",
    whyEs: "Una vez que eliminas los rellenos, necesitas patrones de reemplazo — estructuras de oración que suenen autoritativas por defecto. Estas bases se convierten en tu fundamento ejecutivo: despliégalas bajo presión y tu discurso inmediatamente suena más controlado.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "Each pair shows the same meaning with and without filler. The difference is pure authority.",
    techniqueFocusEs: "Cada par muestra el mismo significado con y sin relleno. La diferencia es pura autoridad.",
    rapidRepeat: [
      { text: "The data indicates a shift.", textEs: "Los datos indican un cambio." },
      { text: "This creates a constraint.", textEs: "Esto crea una restricción." },
      { text: "We need to address this immediately.", textEs: "Necesitamos abordar esto inmediatamente." },
      { text: "This is not aligned with our objectives.", textEs: "Esto no está alineado con nuestros objetivos." },
    ],
  },
  {
    number: 3,
    title: "Calibrated Certainty",
    titleEs: "Certeza Calibrada",
    why: "The final distinction: too much filler sounds uncertain, but too much directness sounds aggressive. C2 language lives in the calibrated middle — measured, not emotional. This is where 'appears to be' and 'not defensible' replace both 'kind of' and the blunt hammer.",
    whyEs: "La distinción final: demasiado relleno suena incierto, pero demasiada directividad suena agresiva. El lenguaje C2 vive en el medio calibrado — medido, no emocional. Aquí es donde 'appears to be' y 'not defensible' reemplazan tanto 'kind of' como el martillo directo.",
    mechanic: "weak-strong-elite",
    techniqueFocus: "The Elite tier is not louder — it is more analytically precise. 'Demand appears to be slowing' becomes 'Demand is showing early signs of contraction.'",
    techniqueFocusEs: "El nivel Elite no es más fuerte — es más analíticamente preciso. 'Demand appears to be slowing' se convierte en 'Demand is showing early signs of contraction.'",
    rapidRepeat: [
      { text: "Demand is showing early signs of contraction.", textEs: "La demanda muestra señales tempranas de contracción." },
      { text: "This is not defensible under current conditions.", textEs: "Esto no es defendible bajo las condiciones actuales." },
      { text: "We are operating behind the planned timeline.", textEs: "Estamos operando por detrás de la línea de tiempo planeada." },
    ],
  },
];

// ─── Section 2.1 — Filler Elimination (WeakStrongElite) ────────────────────

export const unit2Section1Drills: WeakStrongEliteItem[] = [
  {
    weak: "I think we should probably change direction.",
    weakEs: "Creo que probablemente deberíamos cambiar de dirección.",
    strong: "We should change direction.",
    strongEs: "Deberíamos cambiar de dirección.",
    elite: "We need to change direction.",
    eliteEs: "Necesitamos cambiar de dirección.",
  },
  {
    weak: "Maybe we can try another option.",
    weakEs: "Tal vez podamos probar otra opción.",
    strong: "We should pursue an alternative.",
    strongEs: "Deberíamos buscar una alternativa.",
    elite: "We will pursue an alternative approach.",
    eliteEs: "Buscaremos un enfoque alternativo.",
  },
  {
    weak: "It kind of looks like demand is slowing.",
    weakEs: "Parece que la demanda está bajando.",
    strong: "Demand appears to be slowing.",
    strongEs: "La demanda parece estar desacelerándose.",
    elite: "Demand is showing early signs of contraction.",
    eliteEs: "La demanda muestra señales tempranas de contracción.",
    note: "The Elite version is not louder — it is more analytically precise.",
    noteEs: "La versión Elite no es más fuerte — es más analíticamente precisa.",
  },
  {
    weak: "I guess the issue is the timeline.",
    weakEs: "Supongo que el problema es la línea de tiempo.",
    strong: "The issue is the timeline.",
    strongEs: "El problema es la línea de tiempo.",
  },
  {
    weak: "We're sort of running behind.",
    weakEs: "Estamos como que retrasados.",
    strong: "We are behind schedule.",
    strongEs: "Estamos atrasados en el calendario.",
    elite: "We are operating behind the planned timeline.",
    eliteEs: "Estamos operando por detrás de la línea de tiempo planeada.",
  },
  {
    weak: "It seems like the team is a little confused.",
    weakEs: "Parece que el equipo está un poco confundido.",
    strong: "The team lacks clarity.",
    strongEs: "Al equipo le falta claridad.",
  },
  {
    weak: "I feel like this might create risk.",
    weakEs: "Siento que esto podría crear riesgo.",
    strong: "This creates risk.",
    strongEs: "Esto crea riesgo.",
  },
  {
    weak: "It's a bit difficult to justify.",
    weakEs: "Es un poco difícil de justificar.",
    strong: "It is difficult to justify.",
    strongEs: "Es difícil de justificar.",
    elite: "This is not defensible under current conditions.",
    eliteEs: "Esto no es defendible bajo las condiciones actuales.",
  },
];

// ─── Section 2.2 — Controlled Assertion (WeakStrongElite) ──────────────────

export const unit2Section2Drills: WeakStrongEliteItem[] = [
  {
    weak: "I think we're not aligned yet.",
    weakEs: "Creo que aún no estamos alineados.",
    strong: "We are not aligned yet.",
    strongEs: "Aún no estamos alineados.",
  },
  {
    weak: "It sort of became a bigger issue than expected.",
    weakEs: "Se convirtió como que en un problema más grande de lo esperado.",
    strong: "It became a larger issue than expected.",
    strongEs: "Se convirtió en un problema más grande de lo esperado.",
  },
  {
    weak: "I guess we underestimated the complexity.",
    weakEs: "Supongo que subestimamos la complejidad.",
    strong: "We underestimated the complexity.",
    strongEs: "Subestimamos la complejidad.",
  },
  {
    weak: "We were kind of hoping for better results.",
    weakEs: "Estábamos como que esperando mejores resultados.",
    strong: "We expected stronger results.",
    strongEs: "Esperábamos resultados más fuertes.",
  },
  {
    weak: "It seems like execution has been uneven.",
    weakEs: "Parece que la ejecución ha sido irregular.",
    strong: "Execution has been inconsistent.",
    strongEs: "La ejecución ha sido inconsistente.",
  },
  {
    weak: "Maybe this isn't the best timing.",
    weakEs: "Tal vez este no sea el mejor momento.",
    strong: "This is not the right timing.",
    strongEs: "Este no es el momento correcto.",
  },
  {
    weak: "I think we probably moved too quickly.",
    weakEs: "Creo que probablemente nos movimos demasiado rápido.",
    strong: "We moved too quickly.",
    strongEs: "Nos movimos demasiado rápido.",
  },
];

// ─── Section 2.3 — Calibrated Certainty (WeakStrongElite) ──────────────────

export const unit2Section3Drills: WeakStrongEliteItem[] = [
  {
    weak: "This is a big problem.",
    weakEs: "Este es un gran problema.",
    strong: "This is a significant issue.",
    strongEs: "Este es un problema significativo.",
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
  },
  {
    weak: "This is frustrating.",
    weakEs: "Esto es frustrante.",
    strong: "This is impacting performance.",
    strongEs: "Esto está impactando el rendimiento.",
    note: "Replace the emotion with the business consequence. Executives describe impact, not feelings.",
    noteEs: "Reemplaza la emoción con la consecuencia de negocio. Los ejecutivos describen impacto, no sentimientos.",
  },
  {
    weak: "We're in trouble.",
    weakEs: "Estamos en problemas.",
    strong: "We are facing operational risk.",
    strongEs: "Enfrentamos riesgo operacional.",
  },
  {
    weak: "This is urgent.",
    weakEs: "Esto es urgente.",
    strong: "This requires immediate attention.",
    strongEs: "Esto requiere atención inmediata.",
  },
  {
    weak: "It's a little more serious now.",
    weakEs: "Ahora es un poco más serio.",
    strong: "The situation is more serious now.",
    strongEs: "La situación es más seria ahora.",
    elite: "The situation has escalated and requires a revised approach.",
    eliteEs: "La situación se ha escalado y requiere un enfoque revisado.",
  },
];

// ─── Final Shift ────────────────────────────────────────────────────────────

export const unit2FinalShift: FinalShift = {
  before: "You hedged with filler — 'I think', 'maybe', 'kind of' — diluting your authority with every sentence.",
  beforeEs: "Atenuabas con rellenos — 'I think', 'maybe', 'kind of' — diluyendo tu autoridad con cada oración.",
  after: "You speak with calibrated certainty — direct without aggressive, measured without uncertain.",
  afterEs: "Hablas con certeza calibrada — directo sin ser agresivo, medido sin ser incierto.",
};
