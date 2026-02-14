import type { MemeEntry } from "./types";

/**
 * All 40 Tier 1 meme entries — 8 scenarios per role category.
 *
 * Each entry captures a workplace communication moment with:
 * - A humorous title + caption (bilingual)
 * - A "before" phrase (weak/reactive) and "after" phrase (executive/confident)
 * - An image generation prompt (creative brief for ChatGPT/Midjourney)
 *
 * Status starts as "planned" and is auto-detected at build time
 * based on whether image files exist in public/images/memes/{roleCategory}/
 */
export const allMemeEntries: MemeEntry[] = [
  // ========================================================================
  // SOFTWARE ENGINEER (se-01 through se-08)
  // ========================================================================
  {
    id: "se-01",
    roleCategory: "software-engineer",
    sortOrder: 1,
    titleEn: "When Someone Questions Your Architecture",
    titleEs: "Cuando Cuestionan Tu Arquitectura",
    captionEn:
      "You spent 3 days designing it. They spent 3 seconds reading the PR description.",
    captionEs:
      "Pasaste 3 dias disenandolo. Ellos pasaron 3 segundos leyendo la descripcion del PR.",
    beforePhraseEn: "I don't agree with this approach.",
    beforePhraseEs: "No estoy de acuerdo con este enfoque.",
    afterPhraseEn:
      "I'd like to explore an alternative pattern that might scale better for our projected load.",
    afterPhraseEs:
      "Me gustaria explorar un patron alternativo que pueda escalar mejor para nuestra carga proyectada.",
    imagePrompt:
      "Split panel meme: Left side shows an engineer confidently presenting a whiteboard diagram. Right side shows the same engineer with a frozen smile as a colleague points at the diagram and says 'but have you considered...' Office setting, modern tech company vibe. Clean, professional meme style.",
    altTextEn:
      "Meme about an engineer's reaction when their code architecture is questioned during review",
    altTextEs:
      "Meme sobre la reaccion de un ingeniero cuando cuestionan su arquitectura de codigo en revision",
    tags: ["code-review", "architecture", "pushback"],
    status: "planned",
  },
  {
    id: "se-02",
    roleCategory: "software-engineer",
    sortOrder: 2,
    titleEn: "Off-Script at the Daily Standup",
    titleEs: "Fuera del Guion en el Standup Diario",
    captionEn:
      "You rehearsed your update perfectly... then someone asks a follow-up question.",
    captionEs:
      "Ensayaste tu update perfectamente... y luego alguien hace una pregunta de seguimiento.",
    beforePhraseEn: "Uh... I'm working on it. It's... complicated.",
    beforePhraseEs: "Eh... estoy trabajando en eso. Es... complicado.",
    afterPhraseEn:
      "We identified an edge case in the payment flow -- the fix is in progress and I'll update the team by end of day.",
    afterPhraseEs:
      "Identificamos un caso borde en el flujo de pagos -- la correccion esta en progreso y actualizare al equipo al final del dia.",
    imagePrompt:
      "Two-panel meme: Top panel shows a person confidently standing in a meeting with a rehearsed smile. Bottom panel shows the same person sweating with wide eyes when someone says 'Can you elaborate on that?' Modern office with a diverse team visible in the background.",
    altTextEn:
      "Meme about struggling with unexpected follow-up questions during a tech standup meeting",
    altTextEs:
      "Meme sobre lidiar con preguntas inesperadas de seguimiento durante un standup de tecnologia",
    tags: ["standup", "improvisation", "confidence"],
    status: "planned",
  },
  {
    id: "se-03",
    roleCategory: "software-engineer",
    sortOrder: 3,
    titleEn: "Explaining Technical Debt to Non-Technical Stakeholders",
    titleEs: "Explicando la Deuda Tecnica a Stakeholders No Tecnicos",
    captionEn:
      "When the VP asks 'Why does this simple feature take 3 sprints?' and you have to explain 5 years of architectural choices.",
    captionEs:
      "Cuando el VP pregunta 'Por que esta funcion simple toma 3 sprints?' y tienes que explicar 5 anos de decisiones arquitectonicas.",
    beforePhraseEn: "The code is a mess. Someone built it wrong.",
    beforePhraseEs: "El codigo es un desastre. Alguien lo construyo mal.",
    afterPhraseEn:
      "We've accumulated strategic technical debt that's now impacting delivery speed. I've prepared a remediation roadmap that balances new features with stability improvements.",
    afterPhraseEs:
      "Hemos acumulado deuda tecnica estrategica que ahora impacta la velocidad de entrega. Prepare un plan de remediacion que equilibra nuevas funcionalidades con mejoras de estabilidad.",
    imagePrompt:
      "Engineer at a whiteboard drawing a simple box diagram for stakeholders in the foreground. Behind them (visible to the viewer but not the audience) is a wall covered in tangled string, Post-its, and chaos. The engineer smiles confidently while blocking the messy wall. Split reality humor, office setting.",
    altTextEn:
      "Meme about the hidden complexity behind simple feature requests and technical debt",
    altTextEs:
      "Meme sobre la complejidad oculta detras de solicitudes de funcionalidades simples y deuda tecnica",
    tags: ["technical-debt", "stakeholder-communication", "framing"],
    status: "planned",
  },
  {
    id: "se-04",
    roleCategory: "software-engineer",
    sortOrder: 4,
    titleEn: "The Blameless Postmortem That Feels Very Blameful",
    titleEs: "El Postmortem Sin Culpa Que Se Siente Muy Culpable",
    captionEn:
      "It's 'blameless' but somehow everyone is looking at you.",
    captionEs:
      "Es 'sin culpa' pero de alguna manera todos te estan mirando.",
    beforePhraseEn:
      "It wasn't my fault -- the deployment pipeline was broken.",
    beforePhraseEs:
      "No fue mi culpa -- el pipeline de despliegue estaba roto.",
    afterPhraseEn:
      "Let me walk you through the sequence of events and our root cause analysis. I've already drafted prevention measures for the team's review.",
    afterPhraseEs:
      "Permitanme explicar la secuencia de eventos y nuestro analisis de causa raiz. Ya redacte medidas preventivas para revision del equipo.",
    imagePrompt:
      "Meeting room scene: A 'BLAMELESS POSTMORTEM' banner hangs on the wall. Everyone around the conference table subtly points at one person who sits with a calm, professional expression while visibly sweating. Humorous contrast between the blameless sign and the body language. Modern tech office.",
    altTextEn:
      "Meme about the tension between blameless postmortem culture and feeling personally responsible",
    altTextEs:
      "Meme sobre la tension entre la cultura de postmortem sin culpa y sentirse personalmente responsable",
    tags: ["incident-response", "postmortem", "accountability"],
    status: "planned",
  },
  {
    id: "se-05",
    roleCategory: "software-engineer",
    sortOrder: 5,
    titleEn: "When They Ask 'Can't You Just...?'",
    titleEs: "Cuando Preguntan 'No Puedes Simplemente...?'",
    captionEn: "Every 'quick fix' is a 3-sprint refactor in disguise.",
    captionEs:
      "Cada 'arreglo rapido' es un refactor de 3 sprints disfrazado.",
    beforePhraseEn: "That's too much work for one sprint.",
    beforePhraseEs: "Es demasiado trabajo para un sprint.",
    afterPhraseEn:
      "Based on our velocity data, I'd recommend we scope this across two sprints to maintain quality. Here's how I'd break down the deliverables.",
    afterPhraseEs:
      "Basandonos en nuestros datos de velocidad, recomendaria dividir esto en dos sprints para mantener la calidad. Asi es como desglosaria los entregables.",
    imagePrompt:
      "Classic iceberg meme format: A product manager cheerfully points at a single checkbox on a feature list above water. Below the waterline, an engineer stares at a massive iceberg where that checkbox connects to 47 dependencies, legacy code, and system integrations. The hidden complexity of 'simple' requests.",
    altTextEn:
      "Iceberg meme showing the hidden complexity behind simple feature requests in software development",
    altTextEs:
      "Meme del iceberg mostrando la complejidad oculta detras de solicitudes de funcionalidades simples en desarrollo de software",
    tags: ["estimation", "scope", "sprint-planning"],
    status: "planned",
  },
  {
    id: "se-06",
    roleCategory: "software-engineer",
    sortOrder: 6,
    titleEn: "Waiting on Another Team's API",
    titleEs: "Esperando el API de Otro Equipo",
    captionEn:
      "Their 'end of sprint' and your 'end of sprint' are apparently different calendar systems.",
    captionEs:
      "Su 'fin de sprint' y tu 'fin de sprint' aparentemente son sistemas de calendario diferentes.",
    beforePhraseEn:
      "Your team is blocking us. We can't make progress.",
    beforePhraseEs:
      "Su equipo nos esta bloqueando. No podemos avanzar.",
    afterPhraseEn:
      "I'd like to align on the dependency timeline to unblock parallel workstreams. Could we set up a brief sync to map out the integration milestones?",
    afterPhraseEs:
      "Me gustaria alinear el cronograma de dependencias para desbloquear los flujos de trabajo paralelos. Podriamos coordinar una reunion breve para mapear los hitos de integracion?",
    imagePrompt:
      "A skeleton sitting at a desk covered in cobwebs, still smiling patiently at a monitor. A Slack notification on screen reads 'We'll have the API ready by EOD!' — but a calendar on the wall shows that message was sent 3 months ago. Modern office setting, humorous patience metaphor.",
    altTextEn:
      "Skeleton at desk meme about waiting indefinitely for another team's API delivery",
    altTextEs:
      "Meme del esqueleto en el escritorio sobre esperar indefinidamente la entrega del API de otro equipo",
    tags: ["cross-team", "dependencies", "collaboration"],
    status: "planned",
  },
  {
    id: "se-07",
    roleCategory: "software-engineer",
    sortOrder: 7,
    titleEn: "Asking for What You're Worth",
    titleEs: "Pidiendo lo que Vales",
    captionEn:
      "You can debug a distributed system in production but asking for a raise makes you forget English.",
    captionEs:
      "Puedes debuggear un sistema distribuido en produccion pero pedir un aumento te hace olvidar el ingles.",
    beforePhraseEn: "I think I deserve a raise because I work hard.",
    beforePhraseEs:
      "Creo que merezco un aumento porque trabajo duro.",
    afterPhraseEn:
      "Based on my contributions to the platform migration and the 40% reduction in incident response time, I'd like to discuss my trajectory toward senior engineer level.",
    afterPhraseEs:
      "Basandome en mis contribuciones a la migracion de plataforma y la reduccion del 40% en tiempo de respuesta a incidentes, me gustaria discutir mi trayectoria hacia el nivel de ingeniero senior.",
    imagePrompt:
      "Split panel: Top shows an engineer confidently typing complex code on multiple monitors in a dark room at 2 AM, looking like a hero. Bottom shows the same engineer nervously fidgeting in a well-lit office chair across from their manager, struggling to find words. The contrast between technical confidence and communication anxiety.",
    altTextEn:
      "Meme contrasting an engineer's confidence debugging code versus nervousness asking for a raise",
    altTextEs:
      "Meme contrastando la confianza de un ingeniero debuggeando codigo versus el nerviosismo pidiendo un aumento",
    tags: ["career-growth", "negotiation", "self-advocacy"],
    status: "planned",
  },
  {
    id: "se-08",
    roleCategory: "software-engineer",
    sortOrder: 8,
    titleEn: "When the CEO Asks 'What Does Your Team Actually Do?'",
    titleEs: "Cuando el CEO Pregunta 'Que Hace Tu Equipo Realmente?'",
    captionEn:
      "You built the entire microservices architecture but can't explain it without saying 'Kubernetes' twelve times.",
    captionEs:
      "Construiste toda la arquitectura de microservicios pero no puedes explicarla sin decir 'Kubernetes' doce veces.",
    beforePhraseEn:
      "We're migrating to a containerized orchestration platform with service mesh capabilities.",
    beforePhraseEs:
      "Estamos migrando a una plataforma de orquestacion containerizada con capacidades de service mesh.",
    afterPhraseEn:
      "We're modernizing our infrastructure so new features ship twice as fast and system outages drop by 60%. The investment pays for itself in Q3.",
    afterPhraseEs:
      "Estamos modernizando nuestra infraestructura para que las nuevas funcionalidades se lancen el doble de rapido y las caidas del sistema disminuyan un 60%. La inversion se paga sola en Q3.",
    imagePrompt:
      "Engineer at a podium with a slide full of architecture diagrams, boxes, arrows, and acronyms behind them. The audience of executives looks confused with question marks floating above their heads. A speech bubble from the engineer highlights the word 'Kubernetes' for the 12th time. Corporate presentation room, comedic tech-to-business gap.",
    altTextEn:
      "Meme about engineers struggling to explain technical work to non-technical executives",
    altTextEs:
      "Meme sobre ingenieros luchando por explicar trabajo tecnico a ejecutivos no tecnicos",
    tags: ["executive-communication", "simplification", "leadership"],
    status: "planned",
  },

  // ========================================================================
  // PROJECT MANAGER (pm-01 through pm-08)
  // ========================================================================
  {
    id: "pm-01",
    roleCategory: "project-manager",
    sortOrder: 1,
    titleEn: "Just One More Feature",
    titleEs: "Solo Una Funcion Mas",
    captionEn:
      "The stakeholder says 'small change.' The Gantt chart screams.",
    captionEs:
      "El stakeholder dice 'cambio pequeno.' El diagrama de Gantt grita.",
    beforePhraseEn: "That's not in the scope.",
    beforePhraseEs: "Eso no esta en el alcance.",
    afterPhraseEn:
      "Great idea -- let me capture it for phase 2 so we can protect the current timeline and deliver what we've committed.",
    afterPhraseEs:
      "Gran idea -- permiteme capturarla para la fase 2 para proteger el cronograma actual y entregar lo comprometido.",
    imagePrompt:
      "A clean project timeline on the left side. On the right, the same timeline after 'one small feature request' -- chaotic mess of arrows, dependencies, red flags, and pushed deadlines. A PM stands in the middle looking at both versions in disbelief. Whiteboard humor, before-and-after format.",
    altTextEn:
      "Meme showing how one small scope change destroys an entire project timeline",
    altTextEs:
      "Meme mostrando como un pequeno cambio de alcance destruye todo un cronograma de proyecto",
    tags: ["scope-creep", "stakeholder-management", "prioritization"],
    status: "planned",
  },
  {
    id: "pm-02",
    roleCategory: "project-manager",
    sortOrder: 2,
    titleEn: "The Status Update Nobody Wants to Give",
    titleEs: "La Actualizacion de Estado Que Nadie Quiere Dar",
    captionEn:
      "When the project is 'on track' the way a plane with one engine is 'still flying.'",
    captionEs:
      "Cuando el proyecto va 'en camino' de la misma forma que un avion con un motor 'todavia vuela.'",
    beforePhraseEn: "We're behind schedule and there are problems.",
    beforePhraseEs: "Estamos atrasados y hay problemas.",
    afterPhraseEn:
      "We've adjusted the timeline to account for the API integration complexity. Here's our recovery plan with three milestones you'll see progress against weekly.",
    afterPhraseEs:
      "Ajustamos el cronograma para tener en cuenta la complejidad de la integracion del API. Aqui esta nuestro plan de recuperacion con tres hitos contra los que veran avances semanalmente.",
    imagePrompt:
      "A PM standing in front of a traffic light project status dashboard. The light is clearly red, but they've stuck a green Post-it note over it. An executive walks up behind them about to tap their shoulder. Comedic office scene, project management humor.",
    altTextEn:
      "Meme about disguising a red project status as green during stakeholder updates",
    altTextEs:
      "Meme sobre disfrazar un estatus de proyecto rojo como verde durante actualizaciones a stakeholders",
    tags: ["status-reporting", "transparency", "escalation"],
    status: "planned",
  },
  {
    id: "pm-03",
    roleCategory: "project-manager",
    sortOrder: 3,
    titleEn: "Please Sir, May I Have Another Developer?",
    titleEs: "Por Favor Senor, Puedo Tener Otro Desarrollador?",
    captionEn:
      "When your 'team of five' is actually 2.5 FTE after shared resources and PTO.",
    captionEs:
      "Cuando tu 'equipo de cinco' en realidad es 2.5 FTE despues de recursos compartidos y vacaciones.",
    beforePhraseEn: "We need more people on this project.",
    beforePhraseEs: "Necesitamos mas personas en este proyecto.",
    afterPhraseEn:
      "To maintain quality and hit the Q3 deadline, I'd recommend augmenting the team by two engineers. Here's the capacity model showing the impact.",
    afterPhraseEs:
      "Para mantener la calidad y cumplir con la fecha de Q3, recomendaria aumentar el equipo con dos ingenieros. Aqui esta el modelo de capacidad mostrando el impacto.",
    imagePrompt:
      "A PM sitting at a desk surrounded by 5 empty chairs with name tags. Each tag has a different excuse: 'on another project,' 'on PTO,' 'in meetings all day,' 'shared with 3 teams,' 'just resigned.' The PM smiles weakly at the camera. Mock documentary style like The Office.",
    altTextEn:
      "Meme about the reality of team capacity versus the headcount on paper",
    altTextEs:
      "Meme sobre la realidad de la capacidad del equipo versus el headcount en papel",
    tags: ["resource-management", "capacity", "negotiation"],
    status: "planned",
  },
  {
    id: "pm-04",
    roleCategory: "project-manager",
    sortOrder: 4,
    titleEn: "Raising the Red Flag Everyone's Been Ignoring",
    titleEs: "Levantando la Bandera Roja Que Todos Han Ignorado",
    captionEn:
      "You've been saying this for 3 sprints. Now it's urgent. Somehow that's your fault.",
    captionEs:
      "Lo has dicho durante 3 sprints. Ahora es urgente. De alguna manera es tu culpa.",
    beforePhraseEn:
      "This is going to be a big problem if we don't fix it.",
    beforePhraseEs:
      "Esto va a ser un gran problema si no lo arreglamos.",
    afterPhraseEn:
      "I'm raising this proactively: here's the risk, the probability, the business impact, and three mitigation options ranked by cost and effectiveness.",
    afterPhraseEs:
      "Estoy planteando esto proactivamente: aqui esta el riesgo, la probabilidad, el impacto al negocio, y tres opciones de mitigacion ordenadas por costo y efectividad.",
    imagePrompt:
      "Split timeline: Left panel shows a PM frantically waving a risk register at a meeting room full of people looking at their phones, ignoring the warning. Right panel (one month later) shows the same team in a panicked emergency meeting, while the PM calmly sips coffee. 'I told you so' energy without the smugness.",
    altTextEn:
      "Meme about risk warnings being ignored until they become emergencies",
    altTextEs:
      "Meme sobre advertencias de riesgo siendo ignoradas hasta que se convierten en emergencias",
    tags: ["risk-management", "escalation", "proactive-communication"],
    status: "planned",
  },
  {
    id: "pm-05",
    roleCategory: "project-manager",
    sortOrder: 5,
    titleEn: "Under-Promise, Over-Deliver (Accidentally Reversed)",
    titleEs: "Prometer Menos, Entregar Mas (Accidentalmente Invertido)",
    captionEn:
      "When sales promised the client 'everything' and now it's your timeline.",
    captionEs:
      "Cuando ventas le prometio al cliente 'todo' y ahora es tu cronograma.",
    beforePhraseEn: "We can't deliver everything by that date.",
    beforePhraseEs: "No podemos entregar todo para esa fecha.",
    afterPhraseEn:
      "Here's what we can deliver by Friday with full quality, and here's a phased approach to realize the complete vision over the next 6 weeks.",
    afterPhraseEs:
      "Esto es lo que podemos entregar para el viernes con calidad completa, y aqui hay un enfoque por fases para realizar la vision completa en las proximas 6 semanas.",
    imagePrompt:
      "Split scene: Left shows a sales team high-fiving after closing a deal, with a whiteboard of huge promises behind them. Right shows a PM staring at the same whiteboard (now translated into impossible project requirements) with a calculator showing negative time. The sales team has vanished. The handoff from hell.",
    altTextEn:
      "Meme about the gap between sales promises and project management reality",
    altTextEs:
      "Meme sobre la brecha entre las promesas de ventas y la realidad de gestion de proyectos",
    tags: ["client-management", "expectation-setting", "phased-delivery"],
    status: "planned",
  },
  {
    id: "pm-06",
    roleCategory: "project-manager",
    sortOrder: 6,
    titleEn: "This Meeting Could Have Been an Email",
    titleEs: "Esta Reunion Podria Haber Sido un Email",
    captionEn:
      "45 minutes of 'aligning' and nobody can articulate what was decided.",
    captionEs:
      "45 minutos de 'alineacion' y nadie puede articular que se decidio.",
    beforePhraseEn: "We need to make a decision right now.",
    beforePhraseEs: "Necesitamos tomar una decision ahora mismo.",
    afterPhraseEn:
      "Let me frame the decision criteria and the two options so we can align efficiently. I'll capture the outcome and action items in writing.",
    afterPhraseEs:
      "Permitanme enmarcar los criterios de decision y las dos opciones para que podamos alinearnos eficientemente. Capturare el resultado y las acciones a seguir por escrito.",
    imagePrompt:
      "A conference room clock showing 45 minutes have passed. Everyone talks at once with speech bubbles full of buzzwords: 'synergy,' 'alignment,' 'circle back,' 'take offline.' One PM sits with a notepad that just says 'DECISION: ???' with nothing written underneath. Meeting fatigue humor.",
    altTextEn:
      "Meme about unproductive meetings filled with buzzwords but no decisions",
    altTextEs:
      "Meme sobre reuniones improductivas llenas de palabras de moda pero sin decisiones",
    tags: ["meeting-facilitation", "decision-making", "efficiency"],
    status: "planned",
  },
  {
    id: "pm-07",
    roleCategory: "project-manager",
    sortOrder: 7,
    titleEn: "When Nobody Owns the Gap",
    titleEs: "Cuando Nadie Es Dueno del Vacio",
    captionEn:
      "Three teams. Zero owners. One PM trying to hold it all together with a RACI matrix and a prayer.",
    captionEs:
      "Tres equipos. Cero duenos. Un PM tratando de mantener todo junto con una matriz RACI y una oracion.",
    beforePhraseEn: "That's not my team's responsibility.",
    beforePhraseEs: "Eso no es responsabilidad de mi equipo.",
    afterPhraseEn:
      "Let me clarify the RACI so we can close the ownership gap. I'll draft a proposal and have it ready for review by tomorrow.",
    afterPhraseEs:
      "Permitanme clarificar el RACI para cerrar la brecha de responsabilidad. Redactare una propuesta y la tendre lista para revision manana.",
    imagePrompt:
      "A Venn diagram of three overlapping team circles on a whiteboard. In the tiny overlap area in the middle, a PM stands alone holding a sign that says 'THIS IS FINE.' The three team leads are each pointing at another team's circle. Classic cross-functional ownership gap humor.",
    altTextEn:
      "Meme about the PM stuck in the middle when no team owns the cross-functional gap",
    altTextEs:
      "Meme sobre el PM atrapado en el medio cuando ningun equipo es dueno de la brecha cross-funcional",
    tags: ["cross-functional", "ownership", "raci"],
    status: "planned",
  },
  {
    id: "pm-08",
    roleCategory: "project-manager",
    sortOrder: 8,
    titleEn: "The ROI Slide That Saved the Project",
    titleEs: "La Diapositiva de ROI Que Salvo el Proyecto",
    captionEn:
      "CFO: 'Why should we spend money on this?' PM: *pulls out the spreadsheet they've been building since 2 AM*",
    captionEs:
      "CFO: 'Por que deberiamos gastar dinero en esto?' PM: *saca la hoja de calculo que ha estado construyendo desde las 2 AM*",
    beforePhraseEn:
      "We just need more budget to finish the project.",
    beforePhraseEs:
      "Solo necesitamos mas presupuesto para terminar el proyecto.",
    afterPhraseEn:
      "The ROI analysis shows that a $50K investment now saves $200K in rework downstream. Here's the model with conservative and optimistic scenarios.",
    afterPhraseEs:
      "El analisis de ROI muestra que una inversion de $50K ahora ahorra $200K en retrabajo. Aqui esta el modelo con escenarios conservadores y optimistas.",
    imagePrompt:
      "Two-panel meme: Left shows a PM at 2 AM surrounded by coffee cups, building a massive Excel spreadsheet with complex formulas. Right shows the same PM presenting a clean, simple one-slide ROI chart to a boardroom of impressed executives who nod approvingly. The hero's journey from data chaos to executive clarity.",
    altTextEn:
      "Meme about the PM's journey from late-night data crunching to executive-ready ROI presentation",
    altTextEs:
      "Meme sobre el viaje del PM desde analisis de datos nocturno hasta presentacion de ROI lista para ejecutivos",
    tags: ["budget", "roi", "executive-presentation"],
    status: "planned",
  },

  // ========================================================================
  // IT MANAGER (it-01 through it-08)
  // ========================================================================
  {
    id: "it-01",
    roleCategory: "it-manager",
    sortOrder: 1,
    titleEn: "Explaining the Breach Without Causing Panic",
    titleEs: "Explicando la Brecha Sin Causar Panico",
    captionEn:
      "Somewhere between 'everything is fine' and 'update your resume' lies the truth.",
    captionEs:
      "En algun lugar entre 'todo esta bien' y 'actualiza tu curriculum' esta la verdad.",
    beforePhraseEn: "We got hacked. Someone got into the system.",
    beforePhraseEs: "Nos hackearon. Alguien entro al sistema.",
    afterPhraseEn:
      "We detected unauthorized access, contained it within 20 minutes, and are executing our incident response plan. I'll brief the executive team at 3 PM with a full assessment.",
    afterPhraseEs:
      "Detectamos acceso no autorizado, lo contuvimos en 20 minutos, y estamos ejecutando nuestro plan de respuesta a incidentes. Informare al equipo ejecutivo a las 3 PM con una evaluacion completa.",
    imagePrompt:
      "IT manager standing calmly in front of a room of panicked executives. Behind them, a screen shows red security alerts and warning notifications. The IT manager holds a detailed incident response plan and has a composed 'I've got this' expression. Contrast between chaos on screen and calm professional composure.",
    altTextEn:
      "Meme about IT managers staying calm while communicating security incidents to panicked executives",
    altTextEs:
      "Meme sobre gerentes de IT manteniendose calmados mientras comunican incidentes de seguridad a ejecutivos en panico",
    tags: ["security", "incident-response", "crisis-communication"],
    status: "planned",
  },
  {
    id: "it-02",
    roleCategory: "it-manager",
    sortOrder: 2,
    titleEn: "Enterprise Software Pricing: A Horror Story",
    titleEs: "Precios de Software Empresarial: Una Historia de Terror",
    captionEn:
      "The vendor's 'special discount' is just last year's price with a new PDF.",
    captionEs:
      "El 'descuento especial' del proveedor es solo el precio del ano pasado con un nuevo PDF.",
    beforePhraseEn: "That's too expensive. We can't afford it.",
    beforePhraseEs: "Eso es muy caro. No podemos pagarlo.",
    afterPhraseEn:
      "Based on competitive benchmarking across three vendors, we'd like to discuss volume-based pricing that reflects our long-term partnership value and growth trajectory.",
    afterPhraseEs:
      "Basandonos en un analisis competitivo de tres proveedores, nos gustaria discutir precios por volumen que reflejen el valor de nuestra asociacion a largo plazo y trayectoria de crecimiento.",
    imagePrompt:
      "Split panel: Left shows a vendor sales rep smiling confidently while presenting a price tag with a huge number. Right shows an IT Manager calmly pulling out a folder labeled 'COMPETITOR QUOTES' and 'BENCHMARK DATA.' The vendor's smile slowly fading. Enterprise negotiation standoff humor.",
    altTextEn:
      "Meme about IT managers countering enterprise software pricing with competitive benchmarking data",
    altTextEs:
      "Meme sobre gerentes de IT contrarrestando precios de software empresarial con datos de benchmarking competitivo",
    tags: ["vendor-management", "negotiation", "procurement"],
    status: "planned",
  },
  {
    id: "it-03",
    roleCategory: "it-manager",
    sortOrder: 3,
    titleEn: "Nobody Reads the Migration Email",
    titleEs: "Nadie Lee el Email de Migracion",
    captionEn:
      "You sent 5 emails, hosted 3 training sessions, and Karen from accounting still can't find her files.",
    captionEs:
      "Enviaste 5 emails, organizaste 3 sesiones de capacitacion, y Karen de contabilidad todavia no encuentra sus archivos.",
    beforePhraseEn:
      "Everyone needs to switch to the new system by Monday.",
    beforePhraseEs:
      "Todos necesitan cambiar al nuevo sistema para el lunes.",
    afterPhraseEn:
      "We've designed a phased rollout with dedicated training support and a help desk channel. Department leads will champion adoption within their teams.",
    afterPhraseEs:
      "Disenamos un despliegue por fases con soporte de capacitacion dedicado y un canal de mesa de ayuda. Los lideres de departamento impulsaran la adopcion dentro de sus equipos.",
    imagePrompt:
      "IT Manager standing next to a beautiful new system demo on a big screen. Behind them, employees use every workaround imaginable: sticky notes on monitors, personal email on phones, an ancient spreadsheet, even a fax machine. The IT Manager looks at the camera like they're in a mockumentary. The Office-style humor.",
    altTextEn:
      "Meme about users ignoring system migrations and using every workaround except the new tool",
    altTextEs:
      "Meme sobre usuarios ignorando migraciones de sistemas y usando cualquier alternativa excepto la nueva herramienta",
    tags: ["change-management", "adoption", "training"],
    status: "planned",
  },
  {
    id: "it-04",
    roleCategory: "it-manager",
    sortOrder: 4,
    titleEn: "99.9% Uptime (Let's Not Talk About That 0.1%)",
    titleEs: "99.9% Disponibilidad (No Hablemos de Ese 0.1%)",
    captionEn:
      "That 0.1% was during the CEO's demo. Of course it was.",
    captionEs:
      "Ese 0.1% fue durante la demo del CEO. Por supuesto que si.",
    beforePhraseEn: "The system went down but we fixed it.",
    beforePhraseEs: "El sistema se cayo pero lo arreglamos.",
    afterPhraseEn:
      "We experienced 23 minutes of degraded performance, primarily affecting the reporting module. Root cause was identified, patched, and we've implemented monitoring to prevent recurrence.",
    afterPhraseEs:
      "Experimentamos 23 minutos de rendimiento degradado, principalmente afectando el modulo de reportes. La causa raiz fue identificada, corregida, e implementamos monitoreo para prevenir recurrencia.",
    imagePrompt:
      "A beautiful uptime dashboard showing 99.9% in bright green. A tiny red blip on the graph is circled and zoomed in to reveal it happened exactly during a time slot labeled 'CEO LIVE DEMO TO INVESTORS.' Murphy's Law illustrated. Clean dashboard/monitoring humor.",
    altTextEn:
      "Meme about system downtime always happening during the most important moment",
    altTextEs:
      "Meme sobre el tiempo de inactividad del sistema siempre ocurriendo durante el momento mas importante",
    tags: ["uptime", "sla", "incident-reporting"],
    status: "planned",
  },
  {
    id: "it-05",
    roleCategory: "it-manager",
    sortOrder: 5,
    titleEn: "The Performance Review That's Actually Helpful",
    titleEs: "La Evaluacion de Desempeno Que Realmente Ayuda",
    captionEn:
      "The gap between 'you need to improve' and actually helping someone improve could fit an entire career.",
    captionEs:
      "La brecha entre 'necesitas mejorar' y realmente ayudar a alguien a mejorar podria abarcar toda una carrera.",
    beforePhraseEn:
      "Your performance needs improvement in several areas.",
    beforePhraseEs:
      "Tu desempeno necesita mejora en varias areas.",
    afterPhraseEn:
      "I see strong potential in your automation work. Let's create a growth plan focused on expanding your cloud architecture skills -- I can connect you with a mentor on the platform team.",
    afterPhraseEs:
      "Veo un gran potencial en tu trabajo de automatizacion. Creemos un plan de crecimiento enfocado en expandir tus habilidades de arquitectura cloud -- puedo conectarte con un mentor del equipo de plataforma.",
    imagePrompt:
      "Split panel: Left shows a generic performance review form with vague checkboxes ('Needs Improvement,' 'Meets Expectations') -- everything is gray and corporate. Right shows an IT Manager and team member at a whiteboard drawing a personalized growth roadmap with specific milestones and skills. Left is deflating; right is energizing. Leadership contrast.",
    altTextEn:
      "Meme contrasting vague performance reviews with specific, growth-oriented development conversations",
    altTextEs:
      "Meme contrastando evaluaciones de desempeno vagas con conversaciones de desarrollo especificas orientadas al crecimiento",
    tags: ["leadership", "team-development", "mentorship"],
    status: "planned",
  },
  {
    id: "it-06",
    roleCategory: "it-manager",
    sortOrder: 6,
    titleEn: "The Server Room Is Literally on Fire (Metaphorically)",
    titleEs: "La Sala de Servidores Esta Literalmente en Llamas (Metaforicamente)",
    captionEn:
      "Utilization is at 87%. The CFO asks 'But is it broken yet?' and you die a little inside.",
    captionEs:
      "La utilizacion esta al 87%. El CFO pregunta 'Pero ya se rompio?' y mueres un poco por dentro.",
    beforePhraseEn:
      "We need new servers. The old ones can't handle the load.",
    beforePhraseEs:
      "Necesitamos servidores nuevos. Los viejos no soportan la carga.",
    afterPhraseEn:
      "Current infrastructure utilization is at 87%. Proactive investment of $120K now prevents an estimated $400K in emergency spend and downtime losses when we hit capacity -- projected in Q2 based on current growth.",
    afterPhraseEs:
      "La utilizacion actual de infraestructura esta al 87%. Una inversion proactiva de $120K ahora previene un gasto de emergencia estimado de $400K y perdidas por tiempo de inactividad cuando alcancemos la capacidad -- proyectado para Q2 basado en el crecimiento actual.",
    imagePrompt:
      "IT Manager presenting a normal-looking server utilization chart to a calm CFO. Behind them (visible to the audience but not the CFO), the actual server room is struggling: fans at max speed, red warning lights, a thermometer in the red zone, and a tiny fire extinguisher on the wall. The CFO says 'Looks fine to me.' Visual irony between the chart and reality.",
    altTextEn:
      "Meme about the disconnect between infrastructure metrics and executive perception of IT needs",
    altTextEs:
      "Meme sobre la desconexion entre metricas de infraestructura y la percepcion ejecutiva de las necesidades de IT",
    tags: ["infrastructure", "budget", "capacity-planning"],
    status: "planned",
  },
  {
    id: "it-07",
    roleCategory: "it-manager",
    sortOrder: 7,
    titleEn: "No, You Can't Install That Chrome Extension",
    titleEs: "No, No Puedes Instalar Esa Extension de Chrome",
    captionEn:
      "They want admin access 'just for one thing.' That one thing is always the thing that compromises the network.",
    captionEs:
      "Quieren acceso de administrador 'solo para una cosa.' Esa cosa siempre es la que compromete la red.",
    beforePhraseEn: "You can't do that. It's against policy.",
    beforePhraseEs: "No puedes hacer eso. Es contra la politica.",
    afterPhraseEn:
      "Our security framework requires this approval step to protect the company. Let me help you find a compliant alternative that meets your needs -- I can have it set up by tomorrow.",
    afterPhraseEs:
      "Nuestro marco de seguridad requiere este paso de aprobacion para proteger a la empresa. Permiteme ayudarte a encontrar una alternativa que cumpla con las normas y satisfaga tus necesidades -- puedo tenerla lista para manana.",
    imagePrompt:
      "An employee looking longingly at a Chrome extension in the browser's web store, hand reaching for the 'Add to Chrome' button. Behind them, an IT Manager appears like a guardian angel, gently blocking the button while offering a pre-approved alternative on a silver tray. Guardian of the network humor, light and friendly tone.",
    altTextEn:
      "Meme about IT managers redirecting users from risky software to compliant alternatives",
    altTextEs:
      "Meme sobre gerentes de IT redirigiendo usuarios de software riesgoso a alternativas que cumplen las normas",
    tags: ["security-policy", "compliance", "user-support"],
    status: "planned",
  },
  {
    id: "it-08",
    roleCategory: "it-manager",
    sortOrder: 8,
    titleEn: "Translating IT Wins Into Business Language",
    titleEs: "Traduciendo Logros de IT al Lenguaje de Negocios",
    captionEn:
      "Nobody claps for 'migrated 2 petabytes to S3' but they love 'saved $180K annually.'",
    captionEs:
      "Nadie aplaude por 'migramos 2 petabytes a S3' pero les encanta 'ahorramos $180K anuales.'",
    beforePhraseEn:
      "IT is running smoothly. Everything is working fine.",
    beforePhraseEs:
      "IT esta funcionando bien. Todo esta trabajando bien.",
    afterPhraseEn:
      "IT delivered 99.7% uptime this quarter while reducing per-ticket resolution time by 18% and completing the cloud migration on budget -- saving $180K annually.",
    afterPhraseEs:
      "IT entrego 99.7% de disponibilidad este trimestre, reduciendo el tiempo de resolucion por ticket en un 18% y completando la migracion a la nube dentro del presupuesto -- ahorrando $180K anuales.",
    imagePrompt:
      "Two versions of the same quarterly report side by side. Left: 'IT Quarterly Report' full of technical jargon, server specs, and acronyms -- the executive audience in the background is asleep. Right: Same report rewritten as 'Business Impact Summary' with dollar signs, percentages, and clear outcomes -- the executives are leaning forward, engaged. Same data, different language, different impact.",
    altTextEn:
      "Meme comparing technical IT reports that put executives to sleep versus business-impact summaries that engage them",
    altTextEs:
      "Meme comparando reportes tecnicos de IT que duermen ejecutivos versus resumenes de impacto de negocio que los enganchan",
    tags: ["executive-reporting", "business-impact", "metrics"],
    status: "planned",
  },

  // ========================================================================
  // SALES / ACCOUNT EXECUTIVE (sa-01 through sa-08)
  // ========================================================================
  {
    id: "sa-01",
    roleCategory: "sales-account-executive",
    sortOrder: 1,
    titleEn: "The LinkedIn Message That Actually Gets a Reply",
    titleEs: "El Mensaje de LinkedIn Que Realmente Obtiene Respuesta",
    captionEn:
      "There's a reason 'I'd love to pick your brain' has a 0.3% response rate.",
    captionEs:
      "Hay una razon por la que 'me encantaria conocer tu opinion' tiene un 0.3% de tasa de respuesta.",
    beforePhraseEn:
      "Hi, I'd love to tell you about our product. Can we schedule a call?",
    beforePhraseEs:
      "Hola, me encantaria contarte sobre nuestro producto. Podemos agendar una llamada?",
    afterPhraseEn:
      "I noticed your team recently expanded into LATAM -- we helped a similar company reduce onboarding time by 40% during their expansion. Would a 15-minute conversation be valuable?",
    afterPhraseEs:
      "Note que tu equipo recientemente se expandio a LATAM -- ayudamos a una empresa similar a reducir el tiempo de onboarding un 40% durante su expansion. Seria valiosa una conversacion de 15 minutos?",
    imagePrompt:
      "Split inbox view: Left side shows 50 generic LinkedIn sales messages all starting with 'I'd love to...' and 'Let's connect!' -- all unread and ignored. Right side shows one personalized message with a specific insight about the recipient's company, highlighted with a notification badge and a 'Reply' button being clicked. Spam vs. strategy contrast.",
    altTextEn:
      "Meme contrasting generic LinkedIn sales messages that get ignored versus personalized outreach that gets replies",
    altTextEs:
      "Meme contrastando mensajes genericos de ventas en LinkedIn que son ignorados versus outreach personalizado que obtiene respuestas",
    tags: ["prospecting", "outreach", "personalization"],
    status: "planned",
  },
  {
    id: "sa-02",
    roleCategory: "sales-account-executive",
    sortOrder: 2,
    titleEn: "When They Say 'Your Competitor Is Cheaper'",
    titleEs: "Cuando Dicen 'Su Competidor Es Mas Barato'",
    captionEn:
      "Yes, and a bicycle is cheaper than a car. Different vehicle, different destination.",
    captionEs:
      "Si, y una bicicleta es mas barata que un auto. Diferente vehiculo, diferente destino.",
    beforePhraseEn:
      "But our solution has more features and better support.",
    beforePhraseEs:
      "Pero nuestra solucion tiene mas funcionalidades y mejor soporte.",
    afterPhraseEn:
      "I understand budget is a priority. Let me show you the total cost of ownership comparison over 3 years -- including implementation time, maintenance, and the revenue impact of faster deployment.",
    afterPhraseEs:
      "Entiendo que el presupuesto es una prioridad. Permitame mostrarle la comparacion del costo total de propiedad a 3 anos -- incluyendo tiempo de implementacion, mantenimiento, y el impacto en ingresos de un despliegue mas rapido.",
    imagePrompt:
      "A price comparison sheet with the competitor's lower price circled in red by the client. The sales exec calmly unfolds a much bigger chart showing 'TOTAL COST OF OWNERSHIP' with hidden costs, downtime, integration fees, and opportunity costs stacked on the competitor's side. The bigger picture reveal moment. Business meeting setting.",
    altTextEn:
      "Meme about reframing price objections with total cost of ownership analysis",
    altTextEs:
      "Meme sobre reformular objeciones de precio con analisis de costo total de propiedad",
    tags: ["objection-handling", "pricing", "value-selling"],
    status: "planned",
  },
  {
    id: "sa-03",
    roleCategory: "sales-account-executive",
    sortOrder: 3,
    titleEn: "When 'Flexibility on Price' Means 'Free'",
    titleEs: "Cuando 'Flexibilidad en Precio' Significa 'Gratis'",
    captionEn:
      "Every discount you give today becomes the baseline for tomorrow's negotiation.",
    captionEs:
      "Cada descuento que das hoy se convierte en la base para la negociacion de manana.",
    beforePhraseEn: "Sure, I can give you a 20% discount.",
    beforePhraseEs: "Claro, puedo darle un 20% de descuento.",
    afterPhraseEn:
      "I can structure a package that delivers more value within your budget parameters. If we adjust the implementation timeline, I can include premium onboarding at the same investment level.",
    afterPhraseEs:
      "Puedo estructurar un paquete que entregue mas valor dentro de sus parametros de presupuesto. Si ajustamos el cronograma de implementacion, puedo incluir onboarding premium al mismo nivel de inversion.",
    imagePrompt:
      "A sales exec handing over a discount coupon like feeding a seagull at the beach. One seagull (first discount request) has turned into a flock of aggressive seagulls (more discounts, free add-ons, extended trials, scope additions) all demanding more. The 'if you give a mouse a cookie' of B2B sales. Humorous beach-meets-boardroom analogy.",
    altTextEn:
      "Meme about how giving one discount creates an avalanche of future discount expectations",
    altTextEs:
      "Meme sobre como dar un descuento crea una avalancha de expectativas de descuentos futuros",
    tags: ["negotiation", "pricing", "value-preservation"],
    status: "planned",
  },
  {
    id: "sa-04",
    roleCategory: "sales-account-executive",
    sortOrder: 4,
    titleEn: "The Post-Mortem for the Deal That Got Away",
    titleEs: "El Post-Mortem del Negocio Que Se Escapo",
    captionEn:
      "VP: 'What happened?' You: *tries to explain without saying 'they ghosted us'*",
    captionEs:
      "VP: 'Que paso?' Tu: *intenta explicar sin decir 'nos dejaron en visto'*",
    beforePhraseEn: "We lost the deal. They went with a competitor.",
    beforePhraseEs:
      "Perdimos el negocio. Se fueron con un competidor.",
    afterPhraseEn:
      "We completed our deal retrospective and identified three insights: timing alignment, a gap in our mid-market positioning, and a competitor's local support advantage. I'm applying these learnings to two active opportunities.",
    afterPhraseEs:
      "Completamos nuestro analisis post-negocio e identificamos tres hallazgos: alineacion de tiempos, una brecha en nuestro posicionamiento de mercado medio, y la ventaja de soporte local del competidor. Estoy aplicando estos aprendizajes a dos oportunidades activas.",
    imagePrompt:
      "Sales pipeline dashboard showing a big deal dropping from 'Proposal' stage to 'Closed Lost' with a dramatic red arrow. The sales exec sits contemplatively in front of it. A thought bubble shows them already applying the lesson to the next deal in the pipeline, highlighted in green and moving forward. Learning from loss, not dwelling on it.",
    altTextEn:
      "Meme about turning lost deal analysis into actionable insights for the next opportunity",
    altTextEs:
      "Meme sobre convertir el analisis de negocios perdidos en insights accionables para la proxima oportunidad",
    tags: ["deal-analysis", "resilience", "continuous-improvement"],
    status: "planned",
  },
  {
    id: "sa-05",
    roleCategory: "sales-account-executive",
    sortOrder: 5,
    titleEn: "Cross-Selling Without Sounding Like a Used Car Dealer",
    titleEs: "Venta Cruzada Sin Sonar Como Vendedor de Autos Usados",
    captionEn:
      "There's a thin line between 'trusted advisor' and 'always selling.' That line is data.",
    captionEs:
      "Hay una linea delgada entre 'asesor de confianza' y 'siempre vendiendo.' Esa linea es la data.",
    beforePhraseEn: "You should also buy our premium tier.",
    beforePhraseEs:
      "Tambien deberia comprar nuestro nivel premium.",
    afterPhraseEn:
      "Based on your usage patterns over the last quarter, you're leaving about 30% ROI on the table. Here's an optimization that would unlock that value with a modest upgrade.",
    afterPhraseEs:
      "Basandome en sus patrones de uso del ultimo trimestre, estan dejando aproximadamente un 30% de ROI sobre la mesa. Aqui hay una optimizacion que desbloquearia ese valor con una actualizacion moderada.",
    imagePrompt:
      "Split scene: Left side is a pushy car salesman aggressively pointing at add-ons and upsells with a 'BUY MORE' sign (labeled 'DON'T BE THIS'). Right side is a calm business professional showing a client their own usage data dashboard with highlighted ROI opportunities (labeled 'BE THIS'). Stark contrast between pushy selling and consultative advising.",
    altTextEn:
      "Meme contrasting pushy upselling with data-driven consultative account management",
    altTextEs:
      "Meme contrastando ventas agresivas con gestion consultiva de cuentas basada en datos",
    tags: ["upselling", "consultative-selling", "data-driven"],
    status: "planned",
  },
  {
    id: "sa-06",
    roleCategory: "sales-account-executive",
    sortOrder: 6,
    titleEn: "Turning a Furious Client Into a Case Study",
    titleEs: "Convirtiendo un Cliente Furioso en un Caso de Exito",
    captionEn:
      "The fastest way to build trust is to fix something spectacularly after it breaks spectacularly.",
    captionEs:
      "La forma mas rapida de construir confianza es arreglar algo espectacularmente despues de que se rompe espectacularmente.",
    beforePhraseEn:
      "I'm sorry about the issue. It won't happen again.",
    beforePhraseEs: "Lamento el problema. No volvera a pasar.",
    afterPhraseEn:
      "I've acknowledged the impact, taken ownership with your stakeholders, and presented a resolution plan with a committed timeline. I'd like to schedule a follow-up to confirm everything is tracking.",
    afterPhraseEs:
      "Reconoci el impacto, asumi responsabilidad con sus stakeholders, y presente un plan de resolucion con un cronograma comprometido. Me gustaria agendar un seguimiento para confirmar que todo va por buen camino.",
    imagePrompt:
      "A temperature gauge / journey timeline going from red (angry client email with exclamation marks) through stages: Acknowledgment, Action Plan, Resolution, Follow-up -- landing on green (a glowing 5-star testimonial). The journey from crisis to case study visualized as a recovery arc. Clean infographic-style humor.",
    altTextEn:
      "Meme showing the journey from client crisis to glowing testimonial through structured recovery",
    altTextEs:
      "Meme mostrando el viaje de crisis con cliente a testimonio brillante a traves de recuperacion estructurada",
    tags: ["client-recovery", "escalation", "trust-building"],
    status: "planned",
  },
  {
    id: "sa-07",
    roleCategory: "sales-account-executive",
    sortOrder: 7,
    titleEn: "My Forecast Is Accurate (This Time I Promise)",
    titleEs: "Mi Pronostico Es Preciso (Esta Vez Lo Prometo)",
    captionEn:
      "When your VP asks for your 'honest forecast' but your job depends on the number being high enough.",
    captionEs:
      "Cuando tu VP pide tu 'pronostico honesto' pero tu trabajo depende de que el numero sea suficientemente alto.",
    beforePhraseEn: "I think sales will be strong this quarter.",
    beforePhraseEs:
      "Creo que las ventas seran fuertes este trimestre.",
    afterPhraseEn:
      "Based on weighted pipeline analysis, I'm forecasting $2.1M at 85% confidence. The three deals driving this are at proposal stage with decision dates confirmed by the champions.",
    afterPhraseEs:
      "Basandome en un analisis ponderado del pipeline, pronostico $2.1M con un 85% de confianza. Los tres negocios que impulsan esto estan en etapa de propuesta con fechas de decision confirmadas por los champions.",
    imagePrompt:
      "A sales forecast chart showing quarterly predictions vs. actual results -- the predicted line zigzags wildly away from actual results for every past quarter. Then a new forecast appears using weighted pipeline methodology, and for the first time the predicted line closely tracks reality. The 'before and after' of forecasting discipline. Dashboard humor with a lightbulb moment.",
    altTextEn:
      "Meme about the difference between gut-feel sales forecasts and data-driven weighted pipeline analysis",
    altTextEs:
      "Meme sobre la diferencia entre pronosticos de ventas por instinto y analisis ponderado de pipeline basado en datos",
    tags: ["forecasting", "pipeline-management", "credibility"],
    status: "planned",
  },
  {
    id: "sa-08",
    roleCategory: "sales-account-executive",
    sortOrder: 8,
    titleEn: "The Partnership Pitch That Isn't Just 'Let's Grab Coffee'",
    titleEs: "La Propuesta de Alianza Que No Es Solo 'Vamos por un Cafe'",
    captionEn:
      "Strategic partnerships don't start with 'synergy.' They start with shared math.",
    captionEs:
      "Las alianzas estrategicas no empiezan con 'sinergia.' Empiezan con matematicas compartidas.",
    beforePhraseEn:
      "I think our companies should work together. We have a lot of synergies.",
    beforePhraseEs:
      "Creo que nuestras empresas deberian trabajar juntas. Tenemos muchas sinergias.",
    afterPhraseEn:
      "I see strategic alignment between our market reach and your product capabilities. Here's a joint value proposition showing how a channel partnership could generate $500K in incremental revenue for both sides in year one.",
    afterPhraseEs:
      "Veo una alineacion estrategica entre nuestro alcance de mercado y las capacidades de su producto. Aqui hay una propuesta de valor conjunta que muestra como una alianza de canal podria generar $500K en ingresos incrementales para ambas partes en el primer ano.",
    imagePrompt:
      "Two business people shaking hands surrounded by floating buzzwords: 'synergy,' 'alignment,' 'leverage,' 'circle back.' But between their handshake, a small practical document titled 'JOINT REVENUE MODEL' with actual numbers and math falls out onto the table. The substance hiding behind the buzzwords. Professional meeting setting with a touch of humor.",
    altTextEn:
      "Meme about the difference between vague partnership buzzwords and concrete joint revenue proposals",
    altTextEs:
      "Meme sobre la diferencia entre palabras de moda vagas de alianzas y propuestas concretas de ingresos conjuntos",
    tags: ["partnerships", "strategy", "business-development"],
    status: "planned",
  },

  // ========================================================================
  // EXECUTIVE / C-SUITE (ex-01 through ex-08)
  // ========================================================================
  {
    id: "ex-01",
    roleCategory: "executive-csuite",
    sortOrder: 1,
    titleEn: "The Board Wants a Story, Not a Spreadsheet",
    titleEs: "La Junta Quiere una Historia, No una Hoja de Calculo",
    captionEn:
      "34% YoY growth sounds great until someone asks you to explain it in English during Q&A.",
    captionEs:
      "34% de crecimiento interanual suena genial hasta que alguien te pide explicarlo en ingles durante las preguntas.",
    beforePhraseEn: "The company is doing well. Revenue is up.",
    beforePhraseEs: "La empresa va bien. Los ingresos subieron.",
    afterPhraseEn:
      "We achieved 34% year-over-year growth driven by three strategic pillars: geographic expansion, product-led growth, and enterprise account penetration. Here's our roadmap to sustained acceleration through Q4.",
    afterPhraseEs:
      "Logramos un 34% de crecimiento interanual impulsado por tres pilares estrategicos: expansion geografica, crecimiento liderado por producto y penetracion de cuentas empresariales. Aqui esta nuestro plan para una aceleracion sostenida hasta Q4.",
    imagePrompt:
      "Two-panel board meeting scene. Left panel: A slide full of tiny numbers, dense tables, and spreadsheet data -- board members are checking their watches and drifting off. Right panel: Same data presented as a clean narrative with three clear pillars and a visual roadmap -- board members are leaning forward, engaged and nodding. The power of executive storytelling vs. data dumping.",
    altTextEn:
      "Meme contrasting data-heavy board presentations that lose the audience versus narrative-driven ones that engage",
    altTextEs:
      "Meme contrastando presentaciones de junta llenas de datos que pierden a la audiencia versus las narrativas que enganchan",
    tags: ["board-presentation", "storytelling", "executive-presence"],
    status: "planned",
  },
  {
    id: "ex-02",
    roleCategory: "executive-csuite",
    sortOrder: 2,
    titleEn: "Leading Through Chaos Without Looking Chaotic",
    titleEs: "Liderando en el Caos Sin Verse Caotico",
    captionEn:
      "The building is metaphorically on fire but your voice needs to be the fire extinguisher.",
    captionEs:
      "El edificio esta metaforicamente en llamas pero tu voz necesita ser el extintor.",
    beforePhraseEn:
      "We have a serious problem and I'm not sure what to do yet.",
    beforePhraseEs:
      "Tenemos un problema serio y no estoy seguro de que hacer todavia.",
    afterPhraseEn:
      "I want to be transparent about a challenge we're navigating. Here's our assessment, the actions already underway, and the timeline for resolution. We will update you at these three milestones.",
    afterPhraseEs:
      "Quiero ser transparente sobre un desafio que estamos navegando. Aqui esta nuestra evaluacion, las acciones ya en marcha, y el cronograma para la resolucion. Los actualizaremos en estos tres hitos.",
    imagePrompt:
      "An executive standing calmly at a podium during a town hall. Behind them through a window, a metaphorical dumpster fire is visible. But the executive's slide shows a clean crisis response timeline with clear milestones and green checkmarks on completed steps. The audience is calm because the leader is calm. Composure under pressure visualized.",
    altTextEn:
      "Meme about executives maintaining composure during crisis communication while chaos happens in the background",
    altTextEs:
      "Meme sobre ejecutivos manteniendo la compostura durante comunicacion de crisis mientras el caos ocurre en el fondo",
    tags: ["crisis-communication", "leadership", "transparency"],
    status: "planned",
  },
  {
    id: "ex-03",
    roleCategory: "executive-csuite",
    sortOrder: 3,
    titleEn: "Selling the Vision Without the Buzzword Bingo",
    titleEs: "Vendiendo la Vision Sin el Bingo de Palabras de Moda",
    captionEn:
      "When your strategy deck has more 'disruption' than data, investors start disrupting themselves... out the door.",
    captionEs:
      "Cuando tu presentacion estrategica tiene mas 'disrupcion' que datos, tus inversores empiezan a disrumpirse... hacia la salida.",
    beforePhraseEn:
      "We should expand into new markets. There's a big opportunity.",
    beforePhraseEs:
      "Deberiamos expandirnos a nuevos mercados. Hay una gran oportunidad.",
    afterPhraseEn:
      "Market analysis indicates a $50M addressable opportunity in LATAM. Here's the investment thesis: three competitive advantages, the entry strategy, and the 18-month path to profitability.",
    afterPhraseEs:
      "El analisis de mercado indica una oportunidad direccionable de $50M en LATAM. Aqui esta la tesis de inversion: tres ventajas competitivas, la estrategia de entrada, y el camino de 18 meses a la rentabilidad.",
    imagePrompt:
      "A strategy meeting buzzword bingo card with squares like 'synergy,' 'disrupt,' 'pivot,' 'paradigm shift,' 'deep dive' -- most squares already checked off. In the background, an executive presents a slide with real market data, unit economics, and a clear entry roadmap (no buzzwords). The audience's faces show visible relief. Buzzword fatigue meets data clarity.",
    altTextEn:
      "Meme about replacing strategy buzzword bingo with actual market data and investment theses",
    altTextEs:
      "Meme sobre reemplazar el bingo de palabras de moda estrategicas con datos reales de mercado y tesis de inversion",
    tags: ["strategy", "market-entry", "data-driven-leadership"],
    status: "planned",
  },
  {
    id: "ex-04",
    roleCategory: "executive-csuite",
    sortOrder: 4,
    titleEn: "The Feedback That Builds Instead of Breaks",
    titleEs: "El Feedback Que Construye en Vez de Destruir",
    captionEn:
      "The difference between a leader and a boss is what happens in the sentence after 'we need to talk.'",
    captionEs:
      "La diferencia entre un lider y un jefe es lo que pasa en la oracion despues de 'necesitamos hablar.'",
    beforePhraseEn:
      "Your work isn't meeting expectations. You need to step it up.",
    beforePhraseEs:
      "Tu trabajo no cumple las expectativas. Necesitas mejorar.",
    afterPhraseEn:
      "I value your contributions, especially your work on the Q2 launch. Let's align on specific targets that position you for the director track -- I want to invest in your growth here.",
    afterPhraseEs:
      "Valoro tus contribuciones, especialmente tu trabajo en el lanzamiento de Q2. Alineemos objetivos especificos que te posicionen para la via de director -- quiero invertir en tu crecimiento aqui.",
    imagePrompt:
      "Two doors in an office hallway. Door 1 labeled 'YOU NEED TO IMPROVE' -- dark, intimidating, cold lighting. Door 2 labeled 'LET'S BUILD YOUR PATH TO DIRECTOR' -- bright, welcoming, warm lighting. An employee stands between both doors, visibly relieved walking toward Door 2. Same conversation, radically different framing. Leadership communication contrast.",
    altTextEn:
      "Meme about the difference between demoralizing criticism and constructive growth-oriented executive feedback",
    altTextEs:
      "Meme sobre la diferencia entre critica desmoralizante y feedback ejecutivo constructivo orientado al crecimiento",
    tags: ["feedback", "leadership-development", "empathetic-leadership"],
    status: "planned",
  },
  {
    id: "ex-05",
    roleCategory: "executive-csuite",
    sortOrder: 5,
    titleEn: "Making Investors Believe Before the Numbers Do",
    titleEs: "Haciendo que los Inversores Crean Antes de que los Numeros Lo Hagan",
    captionEn:
      "Product-market fit is beautiful. Explaining it in English to investors who speak fluent skepticism -- that's the real challenge.",
    captionEs:
      "El product-market fit es hermoso. Explicarlo en ingles a inversores que hablan fluido escepticismo -- ese es el verdadero desafio.",
    beforePhraseEn:
      "We need more funding to grow the company.",
    beforePhraseEs:
      "Necesitamos mas financiamiento para hacer crecer la empresa.",
    afterPhraseEn:
      "Our metrics demonstrate product-market fit: 140% net revenue retention, 3-month payback period, and a $2M ARR run rate. This round accelerates our path to profitability by Q4 of next year.",
    afterPhraseEs:
      "Nuestras metricas demuestran product-market fit: 140% de retencion neta de ingresos, periodo de recuperacion de 3 meses, y un run rate de $2M ARR. Esta ronda acelera nuestro camino a la rentabilidad para Q4 del proximo ano.",
    imagePrompt:
      "Two-panel investor pitch scene. Left: Slides with vague claims ('huge market,' 'revolutionary technology,' 'game-changer') and investors looking skeptical with crossed arms. Right: Same founder presenting clear metrics, unit economics chart, and a path to profitability -- investors nodding and visibly reaching for their checkbooks. The metrics that close rounds.",
    altTextEn:
      "Meme contrasting vague startup pitches that fail versus metrics-driven pitches that close funding rounds",
    altTextEs:
      "Meme contrastando pitches vagos de startups que fallan versus pitches basados en metricas que cierran rondas de financiamiento",
    tags: ["investor-relations", "fundraising", "metrics"],
    status: "planned",
  },
  {
    id: "ex-06",
    roleCategory: "executive-csuite",
    sortOrder: 6,
    titleEn: "Buy Them Before They Buy You",
    titleEs: "Compralos Antes de Que Te Compren a Ti",
    captionEn:
      "The word 'synergies' in an M&A deck has a 90% correlation with 'we haven't actually figured this out yet.'",
    captionEs:
      "La palabra 'sinergias' en una presentacion de M&A tiene un 90% de correlacion con 'en realidad no hemos descifrado esto todavia.'",
    beforePhraseEn:
      "We should buy this company. They're a good fit.",
    beforePhraseEs:
      "Deberiamos comprar esta empresa. Son un buen fit.",
    afterPhraseEn:
      "The acquisition thesis rests on three synergies: their engineering talent fills our platform gap, their customer base gives us EMEA distribution, and combined R&D eliminates $8M in duplicate spend. Here's the 90-day integration timeline.",
    afterPhraseEs:
      "La tesis de adquisicion se basa en tres sinergias: su talento de ingenieria llena nuestra brecha de plataforma, su base de clientes nos da distribucion en EMEA, y la I+D combinada elimina $8M en gasto duplicado. Aqui esta el cronograma de integracion de 90 dias.",
    imagePrompt:
      "A chess board where one player has carefully positioned pieces for a strategic acquisition move. Each piece is labeled with specific synergies: 'Talent,' 'Distribution,' 'R&D Savings.' The opposing side's pieces are labeled with vague buzzwords: 'Synergy,' 'Leverage,' 'Alignment.' Strategy with specifics vs. strategy with hand-waving. Executive decision-making visual.",
    altTextEn:
      "Meme about the difference between vague M&A synergy claims and specific, quantified acquisition theses",
    altTextEs:
      "Meme sobre la diferencia entre afirmaciones vagas de sinergia en M&A y tesis de adquisicion especificas y cuantificadas",
    tags: ["m-and-a", "strategy", "executive-decision-making"],
    status: "planned",
  },
  {
    id: "ex-07",
    roleCategory: "executive-csuite",
    sortOrder: 7,
    titleEn: "The Town Hall That Didn't Need a Damage Control Follow-Up",
    titleEs: "El Town Hall Que No Necesito un Seguimiento de Control de Danos",
    captionEn:
      "When times are tough, employees don't need optimism -- they need a leader who tells the truth AND shows the path forward.",
    captionEs:
      "Cuando los tiempos son dificiles, los empleados no necesitan optimismo -- necesitan un lider que diga la verdad Y muestre el camino hacia adelante.",
    beforePhraseEn:
      "Times are tough but we'll get through this.",
    beforePhraseEs:
      "Los tiempos son dificiles pero saldremos adelante.",
    afterPhraseEn:
      "I want to be honest about the headwinds we're facing -- and equally clear about why I'm confident in our path forward. Here are three specific actions we're taking and how each of you contributes to our turnaround.",
    afterPhraseEs:
      "Quiero ser honesto sobre los desafios que enfrentamos -- e igualmente claro sobre por que confio en nuestro camino hacia adelante. Aqui hay tres acciones especificas que estamos tomando y como cada uno de ustedes contribuye a nuestra recuperacion.",
    imagePrompt:
      "A town hall meeting scene where the CEO stands at the podium. The slide behind them shows both a storm cloud (the challenges, labeled honestly) AND a clear roadmap through the storm with specific milestones. Employees in the audience look concerned but reassured -- not panicked. The sweet spot between radical honesty and confident direction in leadership communication.",
    altTextEn:
      "Meme about executive town hall communication that balances honesty about challenges with a clear path forward",
    altTextEs:
      "Meme sobre comunicacion ejecutiva en town halls que equilibra honestidad sobre desafios con un camino claro hacia adelante",
    tags: ["town-hall", "transparency", "employee-communication"],
    status: "planned",
  },
  {
    id: "ex-08",
    roleCategory: "executive-csuite",
    sortOrder: 8,
    titleEn: "Sound Bites That Actually Sound Smart",
    titleEs: "Frases Que Realmente Suenan Inteligentes",
    captionEn:
      "The reporter's question is a trap. Your answer is a bridge. Where you end up depends on your executive English.",
    captionEs:
      "La pregunta del reportero es una trampa. Tu respuesta es un puente. Donde terminas depende de tu ingles ejecutivo.",
    beforePhraseEn: "Our product is the best in the market.",
    beforePhraseEs: "Nuestro producto es el mejor del mercado.",
    afterPhraseEn:
      "What sets us apart is our approach to outcome-based implementation. Let me give you a concrete example: one client reduced their operational costs by 35% in 90 days using our methodology.",
    afterPhraseEs:
      "Lo que nos diferencia es nuestro enfoque en implementacion basada en resultados. Permitame darle un ejemplo concreto: un cliente redujo sus costos operativos en un 35% en 90 dias usando nuestra metodologia.",
    imagePrompt:
      "Split panel media interview scene. Left: Executive gives a generic answer to a reporter ('We're the best in the market') -- the reporter looks bored, notepad says 'boring interview, page 12.' Right: Same executive gives a specific example with concrete numbers and a client story -- the reporter leans forward excitedly, notepad says 'FRONT PAGE!' The power of specificity in media communication.",
    altTextEn:
      "Meme about the difference between generic media sound bites and specific, story-driven executive answers",
    altTextEs:
      "Meme sobre la diferencia entre frases genericas para medios y respuestas ejecutivas especificas basadas en historias",
    tags: ["media-training", "public-relations", "messaging"],
    status: "planned",
  },
];
