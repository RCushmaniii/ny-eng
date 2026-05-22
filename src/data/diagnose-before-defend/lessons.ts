// Diagnose Before You Defend — Master Class on Executive Pushback Handling
//
// Audience: directors, ops leaders, sales professionals, procurement,
// technical managers, and mid-managers who push back on others and get
// pushed back on themselves. C1-C2 register. Distinct from Drive the
// Decision (which targets founders / C-suite presenting to boards) —
// this course is about the diagnostic and posture work that happens
// BEFORE the model reply. Six lessons + one recovery-script bonus.

export interface DiagnoseLesson {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  /** One-line angle used on the index card */
  angle: string;
  angleEs: string;
  icon: string;
  available: boolean;
}

export interface DiagnoseBonus {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  available: boolean;
}

export const diagnoseInfo = {
  title: "Diagnose Before You Defend",
  titleEs: "Diagnostica Antes de Defender",
  tagline: "Read the pressure. Hold your ground. Influence the outcome.",
  taglineEs: "Lee la presión. Mantén tu posición. Influye el resultado.",
  shortTagline: "The diagnostic before the defense.",
  shortTaglineEs: "El diagnóstico antes de la defensa.",
  description:
    "A focused master class on handling pushback like an executive — without becoming defensive, without overexplaining, and without sounding emotional under pressure. Built for directors, ops leaders, sales professionals, procurement managers, and mid-managers who push back on others and get pushed back on themselves. Where Drive the Decision teaches what to say in the moment, this course teaches what to read, what to feel, and how to hold yourself BEFORE you open your mouth.",
  descriptionEs:
    "Una master class enfocada en manejar el pushback como un ejecutivo — sin ponerte a la defensiva, sin sobreexplicar y sin sonar emocional bajo presión. Hecha para directores, líderes de operaciones, profesionales de ventas, gerentes de compras y mandos medios que dan pushback a otros y reciben pushback a su vez. Donde Dirige la Decisión enseña qué decir en el momento, este curso enseña qué leer, qué sentir y cómo sostenerte ANTES de abrir la boca.",
  basePath: {
    en: "/en/course/diagnose-before-defend",
    es: "/es/curso/diagnostica-antes-de-defender",
  },
  bonusSlug: {
    en: "pressure-recovery-script",
    es: "guion-de-recuperacion",
  },
};

export const diagnoseLessons: DiagnoseLesson[] = [
  {
    id: 1,
    slug: "six-hidden-drivers",
    slugEs: "seis-impulsores-ocultos",
    title: "The Six Hidden Drivers of Pushback",
    titleEs: "Los Seis Impulsores Ocultos del Pushback",
    subtitle: "Pushback is almost never about what people say it's about.",
    subtitleEs: "El pushback casi nunca se trata de lo que la gente dice que se trata.",
    angle:
      "Diagnose the real concern under the stated one — risk, ego, status, trust, workload, accountability.",
    angleEs:
      "Diagnostica la preocupación real debajo de la declarada — riesgo, ego, estatus, confianza, carga de trabajo, rendición de cuentas.",
    icon: "Search",
    available: true,
  },
  {
    id: 2,
    slug: "diagnostic-pause",
    slugEs: "pausa-diagnostica",
    title: "The Diagnostic Pause",
    titleEs: "La Pausa Diagnóstica",
    subtitle: "The 2-second move that buys you everything.",
    subtitleEs: "El movimiento de 2 segundos que te compra todo.",
    angle:
      "Three questions you ask in the pause before you respond — and why silence is your most underused executive tool.",
    angleEs:
      "Tres preguntas que te haces en la pausa antes de responder — y por qué el silencio es tu herramienta ejecutiva más subutilizada.",
    icon: "Pause",
    available: true,
  },
  {
    id: 3,
    slug: "executive-calm-is-power",
    slugEs: "calma-ejecutiva-es-poder",
    title: "Executive Calm Is Power",
    titleEs: "La Calma Ejecutiva es Poder",
    subtitle: "Presence as authority. Defensive energy is the cardinal sin.",
    subtitleEs: "Presencia como autoridad. La energía defensiva es el pecado capital.",
    angle:
      "Body, voice, and word patterns that signal calibrated authority — and the defensive tells that quietly cost you the room.",
    angleEs:
      "Patrones de cuerpo, voz y palabra que señalan autoridad calibrada — y las señales defensivas que silenciosamente te cuestan la sala.",
    icon: "Shield",
    available: true,
  },
  {
    id: 4,
    slug: "acknowledge-clarify-redirect",
    slugEs: "reconoce-clarifica-redirige",
    title: "Acknowledge → Clarify → Redirect",
    titleEs: "Reconoce → Clarifica → Redirige",
    subtitle: "The one named framework worth installing.",
    subtitleEs: "El único marco con nombre que vale la pena instalar.",
    angle:
      "Validate the concern, identify the operational reality, redirect to the strategic decision — without surrendering authority.",
    angleEs:
      "Valida la preocupación, identifica la realidad operativa, redirige a la decisión estratégica — sin rendir autoridad.",
    icon: "Compass",
    available: true,
  },
  {
    id: 5,
    slug: "commercial-pushback",
    slugEs: "pushback-comercial",
    title: "Commercial Pushback",
    titleEs: "Pushback Comercial",
    subtitle: "Pricing, procurement, discount pressure, client hesitation.",
    subtitleEs: "Precios, compras, presión de descuento, dudas del cliente.",
    angle:
      "Handle commercial objections without sounding needy or defensive. Diagnose the hesitation before defending the offer.",
    angleEs:
      "Maneja objeciones comerciales sin sonar necesitado ni defensivo. Diagnostica la duda antes de defender la oferta.",
    icon: "DollarSign",
    available: true,
  },
  {
    id: 6,
    slug: "bad-news-steady-voice",
    slugEs: "malas-noticias-voz-firme",
    title: "Bad News, Steady Voice",
    titleEs: "Malas Noticias, Voz Firme",
    subtitle: "Communicate instability without becoming it.",
    subtitleEs: "Comunica inestabilidad sin convertirte en ella.",
    angle:
      "Transfer emotional stability when delivering bad news, missed targets, layoffs, or crisis updates. Containment, not contagion.",
    angleEs:
      "Transfiere estabilidad emocional al dar malas noticias, metas perdidas, recortes o actualizaciones de crisis. Contención, no contagio.",
    icon: "AlertTriangle",
    available: true,
  },
];

export const diagnoseBonuses: DiagnoseBonus[] = [
  {
    id: 1,
    slug: "pressure-recovery-script",
    slugEs: "guion-de-recuperacion",
    title: "The Pressure Recovery Script",
    titleEs: "El Guion de Recuperación bajo Presión",
    description:
      "What to do when you've already lost composure mid-conversation. Three sentences that buy you space, restart the room, and recover authority without an apology.",
    descriptionEs:
      "Qué hacer cuando ya perdiste la compostura a mitad de la conversación. Tres oraciones que te compran espacio, reinician la sala y recuperan autoridad sin disculpa.",
    icon: "RefreshCw",
    available: true,
  },
];
