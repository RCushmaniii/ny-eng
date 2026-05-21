// Drive the Decision — Master Class on Executive Decision Communication
// 10 boardroom scenarios + 12-item reflex drill bonus.
//
// Audience: C1-C2 Mexican executives who already speak fluent English but
// freeze under pressure, default to explaining instead of deciding, and
// hedge when they should commit. Sits parallel to the Executive course
// (Communicate Like a Leader) — applied scenarios, not framework theory.

export interface ScenarioMeta {
  id: number;
  slug: string;
  slugEs: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  setting: string;
  settingEs: string;
  icon: string;
  available: boolean;
}

export interface ScenarioContent extends ScenarioMeta {
  /** Context and stakes */
  setup: string;
  setupEs: string;
  /** Exactly what's asked — verbatim quote */
  challenge: string;
  challengeEs: string;
  /** Who is asking — for the dialogue label */
  challenger: string;
  challengerEs: string;
  /** The default-trap response (no audio — learner shouldn't drill the wrong pattern) */
  weakResponse: string;
  weakResponseEs: string;
  /** The model response — what they should say */
  modelResponse: string;
  modelResponseEs: string;
  /** 3-4 bullet points: why the model response works */
  whyItWorks: { en: string; es: string }[];
  /** A variation the learner builds — your-turn prompt */
  yourTurnPrompt: string;
  yourTurnPromptEs: string;
  /** A short hint or starter phrase they can use */
  yourTurnStarter: string;
  yourTurnStarterEs: string;
}

export interface DrillItem {
  id: number;
  category: string;
  categoryEs: string;
  prompt: string;
  promptEs: string;
  weakResponse: string;
  weakResponseEs: string;
  modelResponse: string;
  modelResponseEs: string;
}

export interface DriveBonus {
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

export const driveInfo = {
  title: "Drive the Decision",
  titleEs: "Dirige la Decisión",
  tagline: "Executive Communication That Moves the Room",
  taglineEs: "Comunicación ejecutiva que mueve la sala",
  shortTagline: "Stop explaining. Start deciding.",
  shortTaglineEs: "Deja de explicar. Empieza a decidir.",
  description:
    "Ten boardroom scenarios with worked model replies. The applied capstone for senior leaders who have already studied the Executive frameworks and need to stress-test them against the conversations they actually face — investor pushback, missed quarters, layoffs, declining a $2M deal, and the five other moments where the room is waiting for a decision.",
  descriptionEs:
    "Diez escenarios de junta directiva con respuestas modelo trabajadas. La aplicación práctica para líderes senior que ya estudiaron los marcos del curso Ejecutivo y necesitan probarlos contra las conversaciones que realmente enfrentan — pushback de inversionistas, trimestres perdidos, recortes, rechazar un trato de $2M y los otros cinco momentos donde la sala espera una decisión.",
  basePath: {
    en: "/en/course/drive-the-decision",
    es: "/es/curso/dirige-la-decision",
  },
  drillSlug: {
    en: "reflex-drill",
    es: "drill-reflejo",
  },
};

export const scenarios: ScenarioContent[] = [
  {
    id: 1,
    slug: "series-a-cac-pushback",
    slugEs: "pushback-cac-serie-a",
    title: "Series A — CAC Pushback",
    titleEs: "Serie A — Pushback sobre CAC",
    subtitle: "Your customer acquisition cost is double the benchmark.",
    subtitleEs: "Tu costo de adquisición de cliente es el doble del benchmark.",
    setting: "Investor Pitch · Series A",
    settingEs: "Pitch a inversionistas · Serie A",
    icon: "TrendingUp",
    available: true,
    setup:
      "You're 15 minutes into your Series A pitch. The slides are flowing. Numbers are landing. Then the lead investor leans forward — and the temperature in the room changes.",
    setupEs:
      "Llevas 15 minutos en tu pitch de Serie A. Las diapositivas fluyen. Los números aterrizan. Entonces el inversionista líder se inclina hacia adelante — y la temperatura en la sala cambia.",
    challenge: "Your CAC is double the industry benchmark. Why should we believe this scales?",
    challengeEs:
      "Tu CAC es el doble del benchmark de la industria. ¿Por qué deberíamos creer que esto escala?",
    challenger: "Lead Investor",
    challengerEs: "Inversionista líder",
    weakResponse:
      "Well, our CAC is high right now but we believe over time as we scale we'll see efficiencies and the LTV-to-CAC ratio will improve and we have a few initiatives that we think will bring the number down…",
    weakResponseEs:
      "Bueno, nuestro CAC es alto ahora mismo pero creemos que con el tiempo a medida que escalemos veremos eficiencias y la relación LTV-a-CAC mejorará y tenemos algunas iniciativas que pensamos traerán el número abajo…",
    modelResponse:
      "Our CAC is high because we're targeting enterprise from day one. That's a deliberate trade-off. Two things support the scale case. First, our LTV is 6x industry — we're acquiring expensive but keeping them long. Second, our payback period is 14 months, not 36. So the CAC isn't a scale problem — it's a capital efficiency choice we're making to dominate a high-value segment.",
    modelResponseEs:
      "Our CAC is high because we're targeting enterprise from day one. That's a deliberate trade-off. Two things support the scale case. First, our LTV is 6x industry — we're acquiring expensive but keeping them long. Second, our payback period is 14 months, not 36. So the CAC isn't a scale problem — it's a capital efficiency choice we're making to dominate a high-value segment.",
    whyItWorks: [
      {
        en: "Owns the data — no deflection, no apology. The number is what it is.",
        es: "Se apropia del dato — sin deflexión, sin disculpa. El número es lo que es.",
      },
      {
        en: '"Deliberate trade-off" reframes a weakness into a strategy.',
        es: '"Deliberate trade-off" reencuadra una debilidad como estrategia.',
      },
      {
        en: "Specific numbers — 6x LTV, 14-month payback — not vague claims.",
        es: "Números específicos — 6x LTV, payback de 14 meses — no afirmaciones vagas.",
      },
      {
        en: 'Lands on positioning, not metrics: "capital efficiency choice."',
        es: 'Aterriza en posicionamiento, no en métricas: "capital efficiency choice."',
      },
    ],
    yourTurnPrompt:
      "An investor challenges a single metric in your business — gross margin, burn rate, retention. Build a 4-sentence model response that owns the number, names the deliberate choice behind it, and lands on positioning.",
    yourTurnPromptEs:
      "Un inversionista cuestiona una sola métrica de tu negocio — margen bruto, burn rate, retención. Construye una respuesta modelo de 4 oraciones que se apropie del número, nombre la decisión deliberada detrás de él, y aterrice en posicionamiento.",
    yourTurnStarter:
      "Try opening with: \"Our [metric] is [number] because we're [deliberate choice]. That's a trade-off…\"",
    yourTurnStarterEs:
      "Intenta abrir con: \"Our [metric] is [number] because we're [deliberate choice]. That's a trade-off…\"",
  },
  {
    id: 2,
    slug: "board-meeting-burn-rate",
    slugEs: "junta-directiva-burn-rate",
    title: "Board Meeting — Burn Rate Concern",
    titleEs: "Junta Directiva — Preocupación por Burn Rate",
    subtitle: "Nine months of runway. The board is watching.",
    subtitleEs: "Nueve meses de runway. La junta está observando.",
    setting: "Quarterly Board Meeting · Q3 Review",
    settingEs: "Junta Directiva Trimestral · Revisión Q3",
    icon: "Clock",
    available: true,
    setup:
      "Q3 board meeting. The deck shows cash is tighter than projected — operating expenses overshot the plan by 12%. A board member you respect cuts in before you finish the slide.",
    setupEs:
      "Junta directiva del Q3. La presentación muestra que el efectivo está más ajustado de lo proyectado — los gastos operativos rebasaron el plan en un 12%. Un miembro de la junta a quien respetas te interrumpe antes de que termines la diapositiva.",
    challenge: "At current burn, you have 9 months of runway. How do you respond?",
    challengeEs: "Al ritmo actual de burn, tienes 9 meses de runway. ¿Cómo respondes?",
    challenger: "Board Member",
    challengerEs: "Miembro de la junta",
    weakResponse:
      "Yeah, the burn has been higher than we expected and we're looking at different ways to extend runway, we have some ideas around cost reduction and there are a few customer conversations that might help…",
    weakResponseEs:
      "Sí, el burn ha sido más alto de lo que esperábamos y estamos viendo diferentes maneras de extender el runway, tenemos algunas ideas alrededor de reducción de costos y hay algunas conversaciones con clientes que podrían ayudar…",
    modelResponse:
      "Nine months is the floor, not the plan. We have three levers active right now. First, we're closing two enterprise deals in November that extend runway by four months. Second, we've identified $80,000 monthly in non-critical spend we can cut without touching growth. Third, we have a bridge conversation already initiated with two existing investors. The plan is 18 months of runway by end of Q4.",
    modelResponseEs:
      "Nine months is the floor, not the plan. We have three levers active right now. First, we're closing two enterprise deals in November that extend runway by four months. Second, we've identified $80,000 monthly in non-critical spend we can cut without touching growth. Third, we have a bridge conversation already initiated with two existing investors. The plan is 18 months of runway by end of Q4.",
    whyItWorks: [
      {
        en: 'Reframes the question immediately — "floor, not the plan" — refuses the premise.',
        es: 'Reencuadra la pregunta de inmediato — "floor, not the plan" — rechaza la premisa.',
      },
      {
        en: "Numbered three-lever structure signals control under pressure.",
        es: "Estructura numerada de tres palancas señala control bajo presión.",
      },
      {
        en: "Specific actions already in motion — not promises, ongoing execution.",
        es: "Acciones específicas ya en movimiento — no promesas, ejecución en curso.",
      },
      {
        en: 'Closes with a target: "18 months by Q4" — gives the board something to hold you to.',
        es: 'Cierra con una meta: "18 months by Q4" — le da a la junta algo a lo cual responsabilizarte.',
      },
    ],
    yourTurnPrompt:
      "A board member challenges a number that looks bad on the surface. Build a 5-sentence model response: reframe the number, lay out three concrete levers already in motion, and close with a specific target.",
    yourTurnPromptEs:
      "Un miembro de la junta cuestiona un número que se ve mal en la superficie. Construye una respuesta modelo de 5 oraciones: reencuadra el número, expón tres palancas concretas ya en movimiento y cierra con una meta específica.",
    yourTurnStarter:
      'Open with the reframe before the levers: "That\'s the floor, not the plan. We have three levers active…"',
    yourTurnStarterEs:
      'Abre con el reencuadre antes de las palancas: "That\'s the floor, not the plan. We have three levers active…"',
  },
  {
    id: 3,
    slug: "all-hands-pivot",
    slugEs: "all-hands-pivot",
    title: "All-Hands — Announcing a Pivot",
    titleEs: "All-Hands — Anunciar un Pivot",
    subtitle: "Eighteen months of work. The market said no. Now what?",
    subtitleEs: "Dieciocho meses de trabajo. El mercado dijo no. ¿Ahora qué?",
    setting: "Company All-Hands · Strategic Shift",
    settingEs: "All-Hands de la empresa · Cambio estratégico",
    icon: "Compass",
    available: true,
    setup:
      "Your team has spent 18 months building toward a market that isn't responding. You're announcing a strategic shift. Someone in the second row raises their hand before you finish.",
    setupEs:
      "Tu equipo ha pasado 18 meses construyendo hacia un mercado que no está respondiendo. Estás anunciando un cambio estratégico. Alguien en la segunda fila levanta la mano antes de que termines.",
    challenge: "We've worked on this for 18 months. Why are we changing direction?",
    challengeEs:
      "Hemos trabajado en esto durante 18 meses. ¿Por qué estamos cambiando de dirección?",
    challenger: "Team Member",
    challengerEs: "Miembro del equipo",
    weakResponse:
      "I know this is hard and I appreciate everyone's work, but we've been seeing some signals that suggest we need to consider new directions, and after a lot of discussion we think this is the right move even though it's difficult…",
    weakResponseEs:
      "Sé que esto es difícil y aprecio el trabajo de todos, pero hemos estado viendo algunas señales que sugieren que necesitamos considerar nuevas direcciones, y después de mucha discusión pensamos que este es el movimiento correcto aunque sea difícil…",
    modelResponse:
      "Because the market told us we built the wrong thing. That's not a failure — it's information we couldn't have had 18 months ago. What we built is still valuable. What we learned is more valuable. The pivot uses both: same core technology, applied to a market that's already showing demand. We're not starting over. We're finally starting in the right place.",
    modelResponseEs:
      "Because the market told us we built the wrong thing. That's not a failure — it's information we couldn't have had 18 months ago. What we built is still valuable. What we learned is more valuable. The pivot uses both: same core technology, applied to a market that's already showing demand. We're not starting over. We're finally starting in the right place.",
    whyItWorks: [
      {
        en: 'Owns it directly — "we built the wrong thing" — no euphemism.',
        es: 'Se apropia directamente — "we built the wrong thing" — sin eufemismo.',
      },
      {
        en: "Reframes failure as data — protects team morale without softening the honesty.",
        es: "Reencuadra el fracaso como datos — protege la moral del equipo sin suavizar la honestidad.",
      },
      {
        en: 'Preserves identity — "same core technology, finally in the right place."',
        es: 'Preserva la identidad — "same core technology, finally in the right place."',
      },
      {
        en: "No apology, no retreat — leadership posture intact through the hard news.",
        es: "Sin disculpa, sin retroceso — la postura de liderazgo se mantiene a través de la noticia difícil.",
      },
    ],
    yourTurnPrompt:
      "You're announcing a change that asks your team to abandon work they care about. Build a 5-sentence model response that owns the decision, reframes the past work as valuable, and lands on identity preservation.",
    yourTurnPromptEs:
      "Estás anunciando un cambio que le pide a tu equipo abandonar trabajo que les importa. Construye una respuesta modelo de 5 oraciones que se apropie de la decisión, reencuadre el trabajo pasado como valioso y aterrice en preservación de identidad.",
    yourTurnStarter:
      "Open with the direct ownership before the reframe: \"Because [direct truth]. That's not [feared interpretation] — it's [reframe]…\"",
    yourTurnStarterEs:
      "Abre con la apropiación directa antes del reencuadre: \"Because [direct truth]. That's not [feared interpretation] — it's [reframe]…\"",
  },
  {
    id: 4,
    slug: "ceo-technical-debt",
    slugEs: "ceo-deuda-tecnica",
    title: "CEO Challenge — Defending Technical Debt Work",
    titleEs: "Desafío del CEO — Defender el Trabajo de Deuda Técnica",
    subtitle: "Two sprints of refactoring. Engineering velocity is down.",
    subtitleEs: "Dos sprints de refactor. La velocidad de ingeniería bajó.",
    setting: "Engineering Review · 1-on-1 with CEO",
    settingEs: "Revisión de Ingeniería · 1-a-1 con el CEO",
    icon: "Wrench",
    available: true,
    setup:
      "Engineering velocity has slowed because you've prioritized two sprints of refactoring instead of new features. The CEO has questions — and not the curious kind.",
    setupEs:
      "La velocidad de ingeniería se ha desacelerado porque priorizaste dos sprints de refactor en lugar de nuevas funcionalidades. El CEO tiene preguntas — y no del tipo curioso.",
    challenge: "We're behind on features. Why are you slowing us down to refactor?",
    challengeEs:
      "Estamos atrasados en funcionalidades. ¿Por qué nos estás frenando para refactorizar?",
    challenger: "CEO",
    challengerEs: "CEO",
    weakResponse:
      "I understand the pressure on features but we really need to address some technical debt before we can keep moving forward at the pace we need, and I think this will actually help us in the long run even though it's painful right now…",
    weakResponseEs:
      "Entiendo la presión sobre las funcionalidades pero realmente necesitamos abordar algo de deuda técnica antes de poder seguir avanzando al ritmo que necesitamos, y creo que esto realmente nos ayudará a largo plazo aunque sea doloroso ahora…",
    modelResponse:
      "Because shipping more features on the current foundation will cost us more than it earns. We're seeing two compounding problems: deploy times have tripled, and our last three bugs took 4x longer to isolate. Two sprints of refactoring buys us six months of faster shipping. The slowdown is now or later — I'm choosing now, when we can afford it.",
    modelResponseEs:
      "Because shipping more features on the current foundation will cost us more than it earns. We're seeing two compounding problems: deploy times have tripled, and our last three bugs took 4x longer to isolate. Two sprints of refactoring buys us six months of faster shipping. The slowdown is now or later — I'm choosing now, when we can afford it.",
    whyItWorks: [
      {
        en: 'Direct cost framing — "cost more than it earns" speaks the CEO\'s language.',
        es: 'Encuadre directo de costo — "cost more than it earns" habla el idioma del CEO.',
      },
      {
        en: "Evidence, not opinion — two specific data points (deploy time, bug isolation).",
        es: "Evidencia, no opinión — dos datos específicos (tiempo de deploy, aislamiento de bugs).",
      },
      {
        en: 'Quantified trade-off — "2 sprints buys 6 months" makes the math obvious.',
        es: 'Trade-off cuantificado — "2 sprints buys 6 months" hace obvia la matemática.',
      },
      {
        en: 'Owns the choice — "I\'m choosing now" — leadership, not deflection.',
        es: 'Se apropia de la decisión — "I\'m choosing now" — liderazgo, no deflexión.',
      },
    ],
    yourTurnPrompt:
      "You've made an unpopular technical or operational decision that slows visible progress. Defend it in 4 sentences: cost framing, two pieces of evidence, quantified trade-off, owned choice.",
    yourTurnPromptEs:
      "Tomaste una decisión técnica u operativa impopular que desacelera el progreso visible. Defiéndela en 4 oraciones: encuadre de costo, dos piezas de evidencia, trade-off cuantificado, decisión apropiada.",
    yourTurnStarter:
      'Open with the inverted cost: "Because [the alternative] will cost us more than it earns…"',
    yourTurnStarterEs:
      'Abre con el costo invertido: "Because [the alternative] will cost us more than it earns…"',
  },
  {
    id: 5,
    slug: "enterprise-outage",
    slugEs: "outage-enterprise",
    title: "Enterprise Customer — 6-Hour Outage",
    titleEs: "Cliente Enterprise — Outage de 6 Horas",
    subtitle: "$400K in lost revenue. Their CTO is on the call.",
    subtitleEs: "$400,000 en ingresos perdidos. Su CTO está en la llamada.",
    setting: "Customer Escalation Call · Post-Incident",
    settingEs: "Llamada de escalación con cliente · Post-incidente",
    icon: "AlertOctagon",
    available: true,
    setup:
      "Your largest enterprise customer experienced a six-hour outage. Their CTO is on the call. Their CFO is on the call. Their procurement lead is silently taking notes. You have one opening.",
    setupEs:
      "Tu cliente enterprise más grande experimentó un outage de seis horas. Su CTO está en la llamada. Su CFO está en la llamada. Su líder de procurement está tomando notas en silencio. Tienes una sola apertura.",
    challenge: "We lost $400,000 in revenue during your outage. What's your plan?",
    challengeEs: "Perdimos $400,000 en ingresos durante su outage. ¿Cuál es tu plan?",
    challenger: "Customer CTO",
    challengerEs: "CTO del cliente",
    weakResponse:
      "We're really sorry about the outage and we're committed to making sure this doesn't happen again, we're already looking at the root cause and we'll have a full report out for you as soon as we can…",
    weakResponseEs:
      "Realmente lamentamos el outage y estamos comprometidos a asegurarnos de que esto no vuelva a pasar, ya estamos viendo la causa raíz y tendremos un reporte completo para ustedes tan pronto como podamos…",
    modelResponse:
      "First, you'll see a service credit for the full quarter in your next invoice — that's automatic. Second, here's what happened technically: a database failover didn't trigger the way our runbook specified. We've already deployed the fix and rebuilt the runbook. Third, we're giving you direct access to our SRE lead and a private status channel — so the next time something looks off, you know before we do. The $400,000 we can't undo. The next $400,000 we can prevent.",
    modelResponseEs:
      "First, you'll see a service credit for the full quarter in your next invoice — that's automatic. Second, here's what happened technically: a database failover didn't trigger the way our runbook specified. We've already deployed the fix and rebuilt the runbook. Third, we're giving you direct access to our SRE lead and a private status channel — so the next time something looks off, you know before we do. The $400,000 we can't undo. The next $400,000 we can prevent.",
    whyItWorks: [
      {
        en: "Action before apology — money back first signals seriousness, not contrition.",
        es: "Acción antes que disculpa — devolver el dinero primero señala seriedad, no contrición.",
      },
      {
        en: "Specific technical cause, not vague — names the failure honestly.",
        es: "Causa técnica específica, no vaga — nombra el fallo honestamente.",
      },
      {
        en: "Three concrete commitments — credit, fix, access — not promises, deliverables.",
        es: "Tres compromisos concretos — crédito, fix, acceso — no promesas, entregables.",
      },
      {
        en: "Closing line carries both emotional resolution and business commitment.",
        es: "La línea final lleva tanto resolución emocional como compromiso de negocio.",
      },
    ],
    yourTurnPrompt:
      "A customer is escalating a serious failure on your side. Build a 5-sentence response: lead with the action they get, name the failure specifically, lay out three commitments, close with the emotional + business line.",
    yourTurnPromptEs:
      "Un cliente está escalando un fallo serio de tu lado. Construye una respuesta de 5 oraciones: lidera con la acción que recibirán, nombra el fallo específicamente, expón tres compromisos, cierra con la línea emocional + de negocio.",
    yourTurnStarter:
      "Open with what they receive, not what you feel: \"First, you'll see [concrete action] — that's automatic…\"",
    yourTurnStarterEs:
      "Abre con lo que reciben, no con lo que sientes: \"First, you'll see [concrete action] — that's automatic…\"",
  },
  {
    id: 6,
    slug: "sales-product-conflict",
    slugEs: "conflicto-ventas-producto",
    title: "Sales vs Product — Roadmap Conflict",
    titleEs: "Ventas vs Producto — Conflicto de Roadmap",
    subtitle: "A custom integration. A major deal. A roadmap line.",
    subtitleEs: "Una integración custom. Un trato importante. Una línea en el roadmap.",
    setting: "Cross-functional Sync · Sales vs Product",
    settingEs: "Sync interfuncional · Ventas vs Producto",
    icon: "Split",
    available: true,
    setup:
      "Sales is pushing for a custom integration to close a major deal. Product wants to maintain roadmap discipline. The VP of Sales corners you after the executive sync.",
    setupEs:
      "Ventas está empujando por una integración custom para cerrar un trato importante. Producto quiere mantener disciplina de roadmap. El VP de Ventas te aborda después del sync ejecutivo.",
    challenge: "Product won't ship what the deal needs. We're losing the contract.",
    challengeEs: "Producto no va a enviar lo que el trato necesita. Estamos perdiendo el contrato.",
    challenger: "VP of Sales",
    challengerEs: "VP de Ventas",
    weakResponse:
      "I hear you on the urgency but the roadmap is locked and we can't just shift things around without disrupting everything else, and I'm not sure we can really build what they need in time anyway…",
    weakResponseEs:
      "Te escucho sobre la urgencia pero el roadmap está fijo y no podemos simplemente cambiar las cosas sin disrumpir todo lo demás, y de cualquier forma no estoy seguro de que podamos construir lo que necesitan a tiempo…",
    modelResponse:
      "We're not losing the contract — we're testing whether it's the right contract. If a single-customer integration is what stands between us and the deal, that deal is the wrong shape for our product. We have two options: I can give you a roadmap commitment for Q2 that they can build against, or I can write a custom integration as a paid services engagement at full cost. What I won't do is fork the product for one customer.",
    modelResponseEs:
      "We're not losing the contract — we're testing whether it's the right contract. If a single-customer integration is what stands between us and the deal, that deal is the wrong shape for our product. We have two options: I can give you a roadmap commitment for Q2 that they can build against, or I can write a custom integration as a paid services engagement at full cost. What I won't do is fork the product for one customer.",
    whyItWorks: [
      {
        en: 'Refuses the premise — "right contract" reframes the question entirely.',
        es: 'Rechaza la premisa — "right contract" reencuadra la pregunta completamente.',
      },
      {
        en: "Two clear options — gives Sales something concrete to work with.",
        es: "Dos opciones claras — le da a Ventas algo concreto con lo cual trabajar.",
      },
      {
        en: "One clear no — \"I won't fork the product\" — names the line that doesn't move.",
        es: 'Un no claro — "I won\'t fork the product" — nombra la línea que no se mueve.',
      },
      {
        en: "Strategic, not personal — protects the relationship while holding the call.",
        es: "Estratégico, no personal — protege la relación mientras sostiene la decisión.",
      },
    ],
    yourTurnPrompt:
      "A peer is pressuring you to break a policy for a single high-value exception. Build a 5-sentence response: reframe the question, offer two real alternatives, name the line you won't cross.",
    yourTurnPromptEs:
      "Un par te está presionando para romper una política por una sola excepción de alto valor. Construye una respuesta de 5 oraciones: reencuadra la pregunta, ofrece dos alternativas reales, nombra la línea que no cruzarás.",
    yourTurnStarter:
      "Open with the reframe before the options: \"We're not [their framing] — we're [your framing]…\"",
    yourTurnStarterEs:
      "Abre con el reencuadre antes de las opciones: \"We're not [their framing] — we're [your framing]…\"",
  },
  {
    id: 7,
    slug: "series-b-competitor",
    slugEs: "serie-b-competidor",
    title: "Series B — Competitor Threat",
    titleEs: "Serie B — Amenaza de Competidor",
    subtitle: "Big Tech just announced a product in your space.",
    subtitleEs: "Big Tech acaba de anunciar un producto en tu espacio.",
    setting: "Investor Update · Series B Conversations",
    settingEs: "Actualización a inversionistas · Conversaciones Serie B",
    icon: "Shield",
    available: true,
    setup:
      "You're 30 minutes into a Series B conversation when the news breaks: a major tech company has just announced a product in your space. The investor across the table refreshes their phone.",
    setupEs:
      "Llevas 30 minutos en una conversación de Serie B cuando estalla la noticia: una compañía tecnológica importante acaba de anunciar un producto en tu espacio. El inversionista al otro lado de la mesa actualiza su teléfono.",
    challenge: "Big Tech just announced they're entering your space. What's your moat?",
    challengeEs: "Big Tech acaba de anunciar que entran a tu espacio. ¿Cuál es tu moat?",
    challenger: "Investor",
    challengerEs: "Inversionista",
    weakResponse:
      "Yeah we've been watching them and we think we have some advantages because we're more focused and we have better customer relationships and we move faster…",
    weakResponseEs:
      "Sí, los hemos estado observando y pensamos que tenemos algunas ventajas porque estamos más enfocados y tenemos mejores relaciones con clientes y nos movemos más rápido…",
    modelResponse:
      "Their announcement is good news, not bad news. It validates the market — which is why you're here. Our moat isn't technical, it's positional. We've spent three years building integrations with the 47 systems our customers actually run. They'd need to rebuild that stack to compete on our terms. They're competing on features. We're competing on switching cost. Different game.",
    modelResponseEs:
      "Their announcement is good news, not bad news. It validates the market — which is why you're here. Our moat isn't technical, it's positional. We've spent three years building integrations with the 47 systems our customers actually run. They'd need to rebuild that stack to compete on our terms. They're competing on features. We're competing on switching cost. Different game.",
    whyItWorks: [
      {
        en: 'Reframes the threat — "good news, not bad news" — inverts the panic.',
        es: 'Reencuadra la amenaza — "good news, not bad news" — invierte el pánico.',
      },
      {
        en: "Specific moat — names the actual defensibility (47 systems, switching cost).",
        es: "Moat específico — nombra la defensibilidad real (47 sistemas, switching cost).",
      },
      {
        en: 'Drops the false comparison — "different game" refuses head-to-head framing.',
        es: 'Suelta la comparación falsa — "different game" rechaza el encuadre cara-a-cara.',
      },
      {
        en: 'Investor language — "switching cost" is what investors actually want to hear.',
        es: 'Lenguaje de inversionista — "switching cost" es lo que los inversionistas realmente quieren oír.',
      },
    ],
    yourTurnPrompt:
      "A larger competitor enters your market. Build a 5-sentence response: reframe the threat, name the specific positional moat, refuse the feature-by-feature comparison, land on the language investors use.",
    yourTurnPromptEs:
      "Un competidor más grande entra a tu mercado. Construye una respuesta de 5 oraciones: reencuadra la amenaza, nombra el moat posicional específico, rechaza la comparación funcionalidad-por-funcionalidad, aterriza en el lenguaje que usan los inversionistas.",
    yourTurnStarter:
      'Open with the inversion: "Their announcement is good news, not bad news. It [validates / proves / confirms]…"',
    yourTurnStarterEs:
      'Abre con la inversión: "Their announcement is good news, not bad news. It [validates / proves / confirms]…"',
  },
  {
    id: 8,
    slug: "layoff-communication",
    slugEs: "comunicacion-recorte",
    title: "Org Restructure — Communicating Layoffs",
    titleEs: "Restructura — Comunicar Recortes",
    subtitle: "Fifteen percent reduction. Trust on the line.",
    subtitleEs: "Reducción del quince por ciento. Confianza en juego.",
    setting: "Leadership Pre-Brief · Before All-Hands",
    settingEs: "Pre-brief a líderes · Antes del All-Hands",
    icon: "Users",
    available: true,
    setup:
      "You're announcing a 15% reduction to your leadership team an hour before the company all-hands. They have to lead the message to their teams — and they don't know how to frame it without losing trust.",
    setupEs:
      "Estás anunciando una reducción del 15% a tu equipo de liderazgo una hora antes del all-hands de la empresa. Ellos tienen que llevar el mensaje a sus equipos — y no saben cómo encuadrarlo sin perder confianza.",
    challenge: "How do we explain this to our teams without losing trust?",
    challengeEs: "¿Cómo explicamos esto a nuestros equipos sin perder confianza?",
    challenger: "Leadership Team",
    challengerEs: "Equipo de liderazgo",
    weakResponse:
      "We need to be honest about the business situation but also reassuring, and we want people to know that we care and that this was a really difficult decision and we're going to support everyone through it…",
    weakResponseEs:
      "Necesitamos ser honestos sobre la situación del negocio pero también tranquilizadores, y queremos que la gente sepa que nos importa y que esta fue una decisión realmente difícil y vamos a apoyar a todos a través de ello…",
    modelResponse:
      "By telling them the truth, in this order. First: what we decided and why — not 'a difficult decision' but the actual business logic. Second: how it affects them specifically — not corporate language, real impact on their work and team. Third: what we're not doing — we're not pausing investment in their priorities, and here's the evidence. The trust comes from specificity, not reassurance. Vague optimism is what breaks trust right now.",
    modelResponseEs:
      "By telling them the truth, in this order. First: what we decided and why — not 'a difficult decision' but the actual business logic. Second: how it affects them specifically — not corporate language, real impact on their work and team. Third: what we're not doing — we're not pausing investment in their priorities, and here's the evidence. The trust comes from specificity, not reassurance. Vague optimism is what breaks trust right now.",
    whyItWorks: [
      {
        en: "Structured response under emotional weight — three numbered steps anchor the listener.",
        es: "Respuesta estructurada bajo peso emocional — tres pasos numerados anclan al oyente.",
      },
      {
        en: 'Names the trap — "vague optimism is what breaks trust" — calls out the failure mode.',
        es: 'Nombra la trampa — "vague optimism is what breaks trust" — señala el modo de fallo.',
      },
      {
        en: "Operational, not philosophical — gives leaders something to actually do.",
        es: "Operativo, no filosófico — le da a los líderes algo que realmente hacer.",
      },
      {
        en: 'Lands on a principle — "trust comes from specificity" — quotable, transferable.',
        es: 'Aterriza en un principio — "trust comes from specificity" — citable, transferible.',
      },
    ],
    yourTurnPrompt:
      "You're coaching another leader through a hard message they have to deliver. Build a 5-sentence response: name the three-step structure, list what to include in each, and close with a principle they can carry.",
    yourTurnPromptEs:
      "Estás coacheando a otro líder a través de un mensaje difícil que tiene que entregar. Construye una respuesta de 5 oraciones: nombra la estructura de tres pasos, lista qué incluir en cada uno, y cierra con un principio que puedan llevarse.",
    yourTurnStarter:
      'Open with the method, not the comfort: "By telling them the truth, in this order…"',
    yourTurnStarterEs:
      'Abre con el método, no con el consuelo: "By telling them the truth, in this order…"',
  },
  {
    id: 9,
    slug: "missed-quarter",
    slugEs: "trimestre-perdido",
    title: "Missed Quarter at Board Meeting",
    titleEs: "Trimestre Perdido en Junta Directiva",
    subtitle: "Twenty-two percent below target. The room wants answers.",
    subtitleEs: "Veintidós por ciento bajo la meta. La sala quiere respuestas.",
    setting: "Board Meeting · Q-End Review",
    settingEs: "Junta Directiva · Revisión de fin de trimestre",
    icon: "BarChart3",
    available: true,
    setup:
      "You missed the quarterly revenue target by 22%. The board chair opens the call by holding the number up to the room. There's no preamble. There's no warm-up.",
    setupEs:
      "Perdiste la meta trimestral de ingresos por 22%. El presidente de la junta abre la llamada sosteniendo el número frente a la sala. No hay preámbulo. No hay calentamiento.",
    challenge: "You missed the quarter by 22%. What are you doing differently?",
    challengeEs: "Perdiste el trimestre por 22%. ¿Qué estás haciendo diferente?",
    challenger: "Board Chair",
    challengerEs: "Presidente de la junta",
    weakResponse:
      "Yeah we missed and we're already implementing changes to address the issues we saw, we have a lot of learnings from this quarter and we're confident we can get back on track…",
    weakResponseEs:
      "Sí, perdimos y ya estamos implementando cambios para abordar los problemas que vimos, tenemos muchos aprendizajes de este trimestre y estamos confiados en que podemos volver al camino…",
    modelResponse:
      "Three things. First, the miss came from one segment — mid-market — where our sales cycle assumption was wrong by 40 days. We've corrected the model. Second, our enterprise pipeline is up 60% — that's the segment we now know is our actual market. Third, I've moved two AEs from mid-market to enterprise this week. The 22% miss isn't a sales problem — it was a targeting problem. That's already fixed.",
    modelResponseEs:
      "Three things. First, the miss came from one segment — mid-market — where our sales cycle assumption was wrong by 40 days. We've corrected the model. Second, our enterprise pipeline is up 60% — that's the segment we now know is our actual market. Third, I've moved two AEs from mid-market to enterprise this week. The 22% miss isn't a sales problem — it was a targeting problem. That's already fixed.",
    whyItWorks: [
      {
        en: 'Diagnoses the miss — not "we missed," but "here\'s exactly why."',
        es: 'Diagnostica la pérdida — no "we missed," sino "here\'s exactly why."',
      },
      {
        en: "Already-taken action — past tense, not future promise.",
        es: "Acción ya tomada — tiempo pasado, no promesa futura.",
      },
      {
        en: 'Reframes the problem — "targeting, not sales" changes what gets fixed.',
        es: 'Reencuadra el problema — "targeting, not sales" cambia qué se arregla.',
      },
      {
        en: "Confidence without arrogance — owns the data, owns the fix, owns the next quarter.",
        es: "Confianza sin arrogancia — se apropia del dato, del fix, del próximo trimestre.",
      },
    ],
    yourTurnPrompt:
      "You missed a major target. The board wants the diagnosis, not the apology. Build a 5-sentence response: three numbered points, each containing diagnosis + already-completed action, and a closing reframe.",
    yourTurnPromptEs:
      "Perdiste una meta importante. La junta quiere el diagnóstico, no la disculpa. Construye una respuesta de 5 oraciones: tres puntos numerados, cada uno con diagnóstico + acción ya completada, y un reencuadre final.",
    yourTurnStarter:
      'Open with the structure, not the apology: "Three things. First, [diagnosis]. We\'ve [action]…"',
    yourTurnStarterEs:
      'Abre con la estructura, no con la disculpa: "Three things. First, [diagnosis]. We\'ve [action]…"',
  },
  {
    id: 10,
    slug: "declining-major-deal",
    slugEs: "rechazar-trato-importante",
    title: "Declining a $2M Strategic Deal",
    titleEs: "Rechazar un Trato Estratégico de $2M",
    subtitle: "A custom integration that breaks your model.",
    subtitleEs: "Una integración custom que rompe tu modelo.",
    setting: "Partnership Conversation · CEO-to-CEO",
    settingEs: "Conversación de partnership · CEO-a-CEO",
    icon: "XCircle",
    available: true,
    setup:
      "A potential partner wants a custom integration that doesn't align with your strategy. Their CEO is on the call and just put the number on the table. The pressure to say yes is real — and it would be a mistake.",
    setupEs:
      "Un socio potencial quiere una integración custom que no se alinea con tu estrategia. Su CEO está en la llamada y acaba de poner el número sobre la mesa. La presión para decir sí es real — y sería un error.",
    challenge: "Why won't you do this integration? It's a $2 million opportunity.",
    challengeEs: "¿Por qué no harán esta integración? Es una oportunidad de $2 millones.",
    challenger: "Prospect CEO",
    challengerEs: "CEO del prospecto",
    weakResponse:
      "We'd love to work with you but the integration would require resources we don't currently have, and we're really focused on a few core priorities right now that we can't move off of…",
    weakResponseEs:
      "Nos encantaría trabajar con ustedes pero la integración requeriría recursos que actualmente no tenemos, y estamos muy enfocados en algunas prioridades clave en este momento que no podemos mover…",
    modelResponse:
      "Because $2 million today costs us $20 million next year. The integration you're describing would require us to maintain a custom version of our product for one customer. That's a model we've deliberately avoided — and the customers who've made us successful are the ones who fit our standard product. We'd rather partner with you on a path that doesn't break that model. Here's what that could look like.",
    modelResponseEs:
      "Because $2 million today costs us $20 million next year. The integration you're describing would require us to maintain a custom version of our product for one customer. That's a model we've deliberately avoided — and the customers who've made us successful are the ones who fit our standard product. We'd rather partner with you on a path that doesn't break that model. Here's what that could look like.",
    whyItWorks: [
      {
        en: 'Quantifies the cost — "$2M today costs us $20M next year" — math beats opinion.',
        es: 'Cuantifica el costo — "$2M today costs us $20M next year" — la matemática vence la opinión.',
      },
      {
        en: 'Names the principle — "deliberately avoided" — turns the no into discipline.',
        es: 'Nombra el principio — "deliberately avoided" — convierte el no en disciplina.',
      },
      {
        en: "Owns the no, then offers a yes — closes the door, opens a window.",
        es: "Se apropia del no, luego ofrece un sí — cierra la puerta, abre una ventana.",
      },
      {
        en: "Respect, not apology — peer-to-peer language preserves the relationship.",
        es: "Respeto, no disculpa — lenguaje par-a-par preserva la relación.",
      },
    ],
    yourTurnPrompt:
      "Someone offers you a high-value opportunity that violates a strategic principle. Build a 5-sentence response: quantify the hidden cost, name the principle you've held, refuse without apologizing, offer the alternative.",
    yourTurnPromptEs:
      "Alguien te ofrece una oportunidad de alto valor que viola un principio estratégico. Construye una respuesta de 5 oraciones: cuantifica el costo oculto, nombra el principio que has mantenido, rechaza sin disculparte, ofrece la alternativa.",
    yourTurnStarter:
      'Open with the hidden math: "Because [their offer] today costs us [larger cost] next year…"',
    yourTurnStarterEs:
      'Abre con la matemática oculta: "Because [their offer] today costs us [larger cost] next year…"',
  },
];

export const scenarioMeta: ScenarioMeta[] = scenarios.map((s) => ({
  id: s.id,
  slug: s.slug,
  slugEs: s.slugEs,
  title: s.title,
  titleEs: s.titleEs,
  subtitle: s.subtitle,
  subtitleEs: s.subtitleEs,
  setting: s.setting,
  settingEs: s.settingEs,
  icon: s.icon,
  available: s.available,
}));

export const drillItems: DrillItem[] = [
  {
    id: 1,
    category: "Strategic Alignment",
    categoryEs: "Alineación Estratégica",
    prompt: "Are we aligned on the current operating model?",
    promptEs: "Are we aligned on the current operating model?",
    weakResponse: "Well, I think overall we are aligned but there are some areas where…",
    weakResponseEs: "Well, I think overall we are aligned but there are some areas where…",
    modelResponse:
      "We are not fully aligned — there are inconsistencies across regions. That's what's limiting speed and decision clarity.",
    modelResponseEs:
      "We are not fully aligned — there are inconsistencies across regions. That's what's limiting speed and decision clarity.",
  },
  {
    id: 2,
    category: "Problem Framing",
    categoryEs: "Encuadre del Problema",
    prompt: "What is the core issue we're solving?",
    promptEs: "What is the core issue we're solving?",
    weakResponse: "So there are several things happening across the organization…",
    weakResponseEs: "So there are several things happening across the organization…",
    modelResponse:
      "The issue is fragmentation in how the model operates. Ownership and decision-making are not consistent.",
    modelResponseEs:
      "The issue is fragmentation in how the model operates. Ownership and decision-making are not consistent.",
  },
  {
    id: 3,
    category: "Why Change",
    categoryEs: "Por Qué Cambiar",
    prompt: "Why do we need to change now?",
    promptEs: "Why do we need to change now?",
    weakResponse: "Well, over time things have evolved and we've seen…",
    weakResponseEs: "Well, over time things have evolved and we've seen…",
    modelResponse:
      "Because the current model is already limiting performance. We're losing scale and slowing decisions.",
    modelResponseEs:
      "Because the current model is already limiting performance. We're losing scale and slowing decisions.",
  },
  {
    id: 4,
    category: "Decision Clarity",
    categoryEs: "Claridad de Decisión",
    prompt: "What are you proposing?",
    promptEs: "What are you proposing?",
    weakResponse: "So what we're looking at is potentially moving toward…",
    weakResponseEs: "So what we're looking at is potentially moving toward…",
    modelResponse:
      "We are moving to a hybrid, center-led model. This centralizes strategy while keeping strong local execution.",
    modelResponseEs:
      "We are moving to a hybrid, center-led model. This centralizes strategy while keeping strong local execution.",
  },
  {
    id: 5,
    category: "Value Statement",
    categoryEs: "Declaración de Valor",
    prompt: "What do we gain from this?",
    promptEs: "What do we gain from this?",
    weakResponse: "This could potentially help improve different areas…",
    weakResponseEs: "This could potentially help improve different areas…",
    modelResponse:
      "We gain scale, speed, and clear accountability. That translates into better decisions and stronger business impact.",
    modelResponseEs:
      "We gain scale, speed, and clear accountability. That translates into better decisions and stronger business impact.",
  },
  {
    id: 6,
    category: "Risk Handling",
    categoryEs: "Manejo de Riesgo",
    prompt: "What is the main risk?",
    promptEs: "What is the main risk?",
    weakResponse: "There are a few risks we should consider…",
    weakResponseEs: "There are a few risks we should consider…",
    modelResponse:
      "The main risk is poor execution, not the model itself. If roles and decision rights are unclear, performance will suffer.",
    modelResponseEs:
      "The main risk is poor execution, not the model itself. If roles and decision rights are unclear, performance will suffer.",
  },
  {
    id: 7,
    category: "Pushback — Local Resistance",
    categoryEs: "Pushback — Resistencia Local",
    prompt: "This will reduce flexibility at the local level.",
    promptEs: "This will reduce flexibility at the local level.",
    weakResponse: "I understand the concern and we can try to…",
    weakResponseEs: "I understand the concern and we can try to…",
    modelResponse:
      "It doesn't reduce flexibility — it clarifies it. Local teams keep business ownership while strategy is centralized.",
    modelResponseEs:
      "It doesn't reduce flexibility — it clarifies it. Local teams keep business ownership while strategy is centralized.",
  },
  {
    id: 8,
    category: "Prioritization",
    categoryEs: "Priorización",
    prompt: "What should we focus on first?",
    promptEs: "What should we focus on first?",
    weakResponse: "There are several areas we could potentially start with…",
    weakResponseEs: "There are several areas we could potentially start with…",
    modelResponse:
      "We start with role clarity and decision rights. Without that, the model won't function.",
    modelResponseEs:
      "We start with role clarity and decision rights. Without that, the model won't function.",
  },
  {
    id: 9,
    category: "Simplification",
    categoryEs: "Simplificación",
    prompt: "This sounds complex.",
    promptEs: "This sounds complex.",
    weakResponse: "It is complex but we've tried to simplify…",
    weakResponseEs: "It is complex but we've tried to simplify…",
    modelResponse:
      "The design is simple — the execution requires discipline. Three levels, clear roles, structured decisions.",
    modelResponseEs:
      "The design is simple — the execution requires discipline. Three levels, clear roles, structured decisions.",
  },
  {
    id: 10,
    category: "Accountability",
    categoryEs: "Rendición de Cuentas",
    prompt: "Who owns this?",
    promptEs: "Who owns this?",
    weakResponse: "So ownership will depend on different levels…",
    weakResponseEs: "So ownership will depend on different levels…",
    modelResponse:
      "Global owns strategy, regions own execution, local owns business partnership. Ownership is clearly defined by level.",
    modelResponseEs:
      "Global owns strategy, regions own execution, local owns business partnership. Ownership is clearly defined by level.",
  },
  {
    id: 11,
    category: "Timing",
    categoryEs: "Tiempos",
    prompt: "How fast can we implement?",
    promptEs: "How fast can we implement?",
    weakResponse: "It depends on multiple factors and we need to…",
    weakResponseEs: "It depends on multiple factors and we need to…",
    modelResponse:
      "We can begin immediately after alignment. Full deployment will follow a phased approach.",
    modelResponseEs:
      "We can begin immediately after alignment. Full deployment will follow a phased approach.",
  },
  {
    id: 12,
    category: "Closing for Decision",
    categoryEs: "Cierre para Decisión",
    prompt: "What do you need from us today?",
    promptEs: "What do you need from us today?",
    weakResponse: "We'd like to get your thoughts and feedback…",
    weakResponseEs: "We'd like to get your thoughts and feedback…",
    modelResponse:
      "We need alignment on the model direction. That allows us to move into detailed design and execution.",
    modelResponseEs:
      "We need alignment on the model direction. That allows us to move into detailed design and execution.",
  },
];

export const driveBonuses: DriveBonus[] = [
  {
    id: 1,
    slug: "reflex-drill",
    slugEs: "drill-reflejo",
    title: "The 12-Item Reflex Drill",
    titleEs: "El Drill de Reflejo de 12 Items",
    description:
      "The 30-day daily practice that rewires your default response under pressure. Twelve prompts, three rounds, one habit installed.",
    descriptionEs:
      "La práctica diaria de 30 días que reescribe tu respuesta por defecto bajo presión. Doce prompts, tres rondas, un hábito instalado.",
    icon: "Zap",
    available: true,
  },
];
