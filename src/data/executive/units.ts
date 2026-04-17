// Executive course unit metadata — "Communicate Like a Leader" (C1-C2)
//
// 10 units, 3 sections each, plus a recorded capstone presentation.
// Units 1-6 teach mechanics, 7-9 apply them to situations, 10 integrates
// and funnels the learner to the capstone. See
// docs/EXECUTIVE-COURSE-PLAN.md for the full pedagogy and section rhythm.

export interface ExecutiveUnit {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  description: string;
  descriptionEs: string;
  /** What learners will be able to do after this unit */
  outcome: string;
  outcomeEs: string;
  /** Lucide icon name for the unit card */
  icon: string;
  /** Whether this unit is published yet (false during rolling build) */
  published: boolean;
}

export const executiveInfo = {
  title: "Communicate Like a Leader",
  titleEs: "Comunica Como un Líder",
  tagline: "Executive command language under pressure.",
  taglineEs: "Lenguaje de mando ejecutivo bajo presión.",
  description:
    "The productized version of Robert's 1-on-1 executive coaching. Ten units of drill-based training that replace vague, hedging English with the precision, structure, and calm authority senior leaders demand. Not a grammar course — a linguistic command course for C1-C2 speakers who already communicate competently but want to lead in English.",
  descriptionEs:
    "La versión productizada del coaching ejecutivo 1-a-1 de Robert. Diez unidades de entrenamiento basado en drills que reemplazan el inglés vago y titubeante con la precisión, estructura y autoridad tranquila que exigen los líderes senior. No es un curso de gramática — es un curso de dominio lingüístico para hablantes C1-C2 que ya se comunican con competencia pero quieren liderar en inglés.",
  level: "C1 → C2",
  basePath: {
    en: "/en/course/executive",
    es: "/es/curso/ejecutivo",
  },
  capstoneSlug: {
    en: "capstone",
    es: "reto-final",
  },
};

export const executiveUnits: ExecutiveUnit[] = [
  {
    id: 1,
    slug: "unit-1",
    slugEs: "unidad-1",
    title: "Executive Word Choice",
    titleEs: "Elección Ejecutiva de Palabras",
    subtitle: "Trade vague verbs for surgical precision.",
    subtitleEs: "Cambia verbos vagos por precisión quirúrgica.",
    description:
      "Senior leaders don't 'look into' issues — they investigate, analyze, and diagnose. This unit trains your ear to hear the strategic distinction between similar verbs and rebuilds your speech around the verbs that signal analytical depth.",
    descriptionEs:
      "Los líderes senior no 'revisan' los problemas — investigan, analizan y diagnostican. Esta unidad entrena tu oído para escuchar la distinción estratégica entre verbos similares y reconstruye tu discurso alrededor de los verbos que señalan profundidad analítica.",
    outcome:
      "You'll replace generic verbs with the precise, strategic language executives expect.",
    outcomeEs:
      "Reemplazarás los verbos genéricos con el lenguaje preciso y estratégico que los ejecutivos esperan.",
    icon: "Target",
    published: true,
  },
  {
    id: 2,
    slug: "unit-2",
    slugEs: "unidad-2",
    title: "Eliminating Weak Language",
    titleEs: "Eliminando el Lenguaje Débil",
    subtitle: "Decisive without aggressive. Calibrated certainty.",
    subtitleEs: "Decisivo sin ser agresivo. Certeza calibrada.",
    description:
      "Over-hedging at senior level signals lack of control — but over-directness reads as aggression. This unit drills the middle path: measured authority. You remove 'I think', 'maybe', 'kind of', and 'sort of' while keeping your tone calm and senior.",
    descriptionEs:
      "El exceso de atenuación en el nivel senior señala falta de control — pero el exceso de directividad se percibe como agresión. Esta unidad practica el camino medio: autoridad medida. Eliminas 'I think', 'maybe', 'kind of' y 'sort of' mientras mantienes un tono calmado y senior.",
    outcome:
      "You'll speak with calibrated certainty — direct, but never tense.",
    outcomeEs:
      "Hablarás con certeza calibrada — directo, pero nunca tenso.",
    icon: "Zap",
    published: true,
  },
  {
    id: 3,
    slug: "unit-3",
    slugEs: "unidad-3",
    title: "Structured Responses & Connectors",
    titleEs: "Respuestas Estructuradas y Conectores",
    subtitle: "Cause → Action → Outcome. Problem → Impact → Solution → Recommendation.",
    subtitleEs: "Causa → Acción → Resultado. Problema → Impacto → Solución → Recomendación.",
    description:
      "Unstructured speech forces the listener to guess your meaning. Structured speech signals leadership control. This unit gives you two named frameworks plus the executive connectors that reveal your logic in real time.",
    descriptionEs:
      "El discurso no estructurado obliga al oyente a adivinar tu significado. El discurso estructurado señala control de liderazgo. Esta unidad te da dos marcos con nombre más los conectores ejecutivos que revelan tu lógica en tiempo real.",
    outcome:
      "You'll organize your thinking out loud using named frameworks, under pressure.",
    outcomeEs:
      "Organizarás tu pensamiento en voz alta usando marcos con nombre, bajo presión.",
    icon: "Layers",
    published: true,
  },
  {
    id: 4,
    slug: "unit-4",
    slugEs: "unidad-4",
    title: "Controlled Tone Under Pressure",
    titleEs: "Tono Controlado Bajo Presión",
    subtitle: "Defensive → Executive → Strategic. Never defend. Always reframe.",
    subtitleEs: "Defensivo → Ejecutivo → Estratégico. Nunca defiendas. Siempre reencuadra.",
    description:
      "When leadership challenges you, defensive language signals loss of control. This unit drills the three-tier reframe — taking a defensive line and upgrading it through executive and strategic phrasing — plus the downgrade-emotion / upgrade-control pattern that keeps you measured.",
    descriptionEs:
      "Cuando el liderazgo te desafía, el lenguaje defensivo señala pérdida de control. Esta unidad practica el reencuadre de tres niveles — tomar una línea defensiva y elevarla con fraseo ejecutivo y estratégico — además del patrón reducir-emoción / elevar-control que te mantiene medido.",
    outcome:
      "You'll respond to pressure with authority, not emotion.",
    outcomeEs:
      "Responderás a la presión con autoridad, no con emoción.",
    icon: "Shield",
    published: true,
  },
  {
    id: 5,
    slug: "unit-5",
    slugEs: "unidad-5",
    title: "Strategic Storytelling",
    titleEs: "Narrativa Estratégica",
    subtitle: "Context → Tension → Insight → Action → Outcome. Facts inform. Stories influence.",
    subtitleEs: "Contexto → Tensión → Perspectiva → Acción → Resultado. Los hechos informan. Las historias influyen.",
    description:
      "At senior level, facts alone are not enough — everyone has access to the data. What executives don't have is clear interpretation. This unit turns flat reporting into strategic narrative using a single five-step structure.",
    descriptionEs:
      "En el nivel senior, los hechos solos no son suficientes — todos tienen acceso a los datos. Lo que los ejecutivos no tienen es una interpretación clara. Esta unidad convierte los reportes planos en narrativa estratégica usando una sola estructura de cinco pasos.",
    outcome:
      "You'll transform updates into decision-shaping narratives.",
    outcomeEs:
      "Transformarás las actualizaciones en narrativas que moldean decisiones.",
    icon: "BookOpen",
    published: true,
  },
  {
    id: 6,
    slug: "unit-6",
    slugEs: "unidad-6",
    title: "The Impromptu Toolkit",
    titleEs: "El Kit de Respuesta Impromptu",
    subtitle: "Four named frameworks for the moments you can't prepare.",
    subtitleEs: "Cuatro marcos con nombre para los momentos que no puedes preparar.",
    description:
      "Board update. Tough question. Drive decision. Acknowledge and prevent. Four named frameworks — each a 60-second structure — that you can deploy the moment leadership turns to you and says 'what do you think?' The drills here are the closest thing to a script you'll ever have.",
    descriptionEs:
      "Actualización de junta directiva. Pregunta difícil. Impulsar decisión. Reconocer y prevenir. Cuatro marcos con nombre — cada uno una estructura de 60 segundos — que puedes desplegar el momento en que el liderazgo te mire y diga '¿qué piensas?' Los drills aquí son lo más cercano a un guion que tendrás jamás.",
    outcome:
      "You'll respond to any impromptu question with a named framework.",
    outcomeEs:
      "Responderás a cualquier pregunta improvisada con un marco con nombre.",
    icon: "Clock",
    published: true,
  },
  {
    id: 7,
    slug: "unit-7",
    slugEs: "unidad-7",
    title: "High-Stakes Meetings",
    titleEs: "Reuniones de Alto Impacto",
    subtitle: "Opening. Holding the floor. Diplomatic disagreement.",
    subtitleEs: "Apertura. Mantener el turno. Desacuerdo diplomático.",
    description:
      "Meetings are where executive English either holds up or breaks down. This unit applies the mechanics from Units 1-6 to the specific meeting language you need: opening and closing phrases, interrupting politely, holding the floor when pressed, and disagreeing without damaging the relationship.",
    descriptionEs:
      "Las reuniones son donde el inglés ejecutivo se mantiene o se desmorona. Esta unidad aplica las mecánicas de las Unidades 1-6 al lenguaje específico de reuniones que necesitas: frases de apertura y cierre, interrumpir educadamente, mantener el turno bajo presión y discrepar sin dañar la relación.",
    outcome:
      "You'll steer meetings in English with the same control you have in Spanish.",
    outcomeEs:
      "Dirigirás reuniones en inglés con el mismo control que tienes en español.",
    icon: "Users",
    published: true,
  },
  {
    id: 8,
    slug: "unit-8",
    slugEs: "unidad-8",
    title: "Feedback and Difficult Conversations",
    titleEs: "Retroalimentación y Conversaciones Difíciles",
    subtitle: "Give feedback without offending. Receive it with poise.",
    subtitleEs: "Da retroalimentación sin ofender. Recíbela con serenidad.",
    description:
      "The hardest conversations at senior level happen in English with people who outrank you, report to you, or partner with you. This unit drills the phrasing for giving tough feedback, receiving it without defensiveness, and navigating conflict, apology, and repair.",
    descriptionEs:
      "Las conversaciones más difíciles en el nivel senior ocurren en inglés con personas que te superan, te reportan o se asocian contigo. Esta unidad practica el fraseo para dar retroalimentación difícil, recibirla sin ponerte a la defensiva y navegar conflicto, disculpa y reparación.",
    outcome:
      "You'll handle feedback — up, down, or sideways — with senior-grade language.",
    outcomeEs:
      "Manejarás la retroalimentación — hacia arriba, hacia abajo o lateral — con lenguaje de nivel senior.",
    icon: "MessageSquare",
    published: true,
  },
  {
    id: 9,
    slug: "unit-9",
    slugEs: "unidad-9",
    title: "Negotiation and Driving Decisions",
    titleEs: "Negociación y Toma de Decisiones",
    subtitle: "Anchoring, concessions, diplomatic 'no', closing.",
    subtitleEs: "Anclaje, concesiones, 'no' diplomático, cierre.",
    description:
      "Negotiation language and decision-driving are where executive English pays off in hard numbers. This unit drills the positioning, anchoring, and concession language that moves a negotiation forward — plus the Problem → Impact → Solution → Recommendation framework applied to the moment you need leadership approval.",
    descriptionEs:
      "El lenguaje de negociación y la toma de decisiones es donde el inglés ejecutivo se traduce en números reales. Esta unidad practica el posicionamiento, anclaje y lenguaje de concesión que avanza una negociación — más el marco Problema → Impacto → Solución → Recomendación aplicado al momento en que necesitas aprobación del liderazgo.",
    outcome:
      "You'll lead negotiations and drive decisions in English with measurable outcomes.",
    outcomeEs:
      "Liderarás negociaciones e impulsarás decisiones en inglés con resultados medibles.",
    icon: "TrendingUp",
    published: true,
  },
  {
    id: 10,
    slug: "unit-10",
    slugEs: "unidad-10",
    title: "Your Executive Voice",
    titleEs: "Tu Voz Ejecutiva",
    subtitle: "Integrate everything. Record your capstone. Step into the room as a leader.",
    subtitleEs: "Integra todo. Graba tu reto final. Entra a la sala como líder.",
    description:
      "The capstone unit. A final integration of everything from Units 1-9, plus the prompt that launches your recorded executive presentation. This is the graduation moment — and the bridge into 1-on-1 coaching with Robert.",
    descriptionEs:
      "La unidad final. Una integración final de todo desde las Unidades 1-9, más la consigna que lanza tu presentación ejecutiva grabada. Este es el momento de graduación — y el puente al coaching 1-a-1 con Robert.",
    outcome:
      "You'll submit a recorded 90-second executive presentation to Robert for personal feedback.",
    outcomeEs:
      "Enviarás una presentación ejecutiva grabada de 90 segundos a Robert para recibir retroalimentación personal.",
    icon: "Crown",
    published: true,
  },
];
