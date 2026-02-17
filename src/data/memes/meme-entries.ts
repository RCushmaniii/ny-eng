import type { MemeEntry } from "./types";

/**
 * All 80 meme entries — 8 scenarios per role category x 10 categories.
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
    titleEn: "The Code Promotion Update That Actually Means Something",
    titleEs: "La Actualizacion de Promocion de Codigo Que Realmente Significa Algo",
    captionEn:
      "'Mostly done' is not a deployment status. Your team deserves specifics, not vibes.",
    captionEs:
      "'Casi listo' no es un estado de despliegue. Tu equipo merece especificos, no vibras.",
    beforePhraseEn: "I think it's mostly done.",
    beforePhraseEs: "Creo que esta casi listo.",
    afterPhraseEn:
      "Core build is complete. QA is testing edge cases.",
    afterPhraseEs:
      "La compilacion principal esta completa. QA esta probando casos borde.",
    imagePrompt:
      "Split panel photo meme in a modern office meeting room. Left (Before): An IT manager standing with coffee, telling his seated team 'I think it's mostly done' — the team looks skeptical and confused. Right (After): Same IT manager, confident and smiling, saying 'Core build is complete. QA is testing edge cases.' — the team is engaged and giving thumbs up. Realistic photo style with yellow Before/After header banner.",
    altTextEn:
      "Before and after meme of an IT manager giving a code promotion status update — from vague to precise and professional",
    altTextEs:
      "Meme de antes y despues de un gerente de IT dando una actualizacion de promocion de codigo — de vago a preciso y profesional",
    tags: ["code-promotion", "status-updates", "precision"],
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
      "This needs to be fixed ASAP.",
    beforePhraseEs:
      "Esto necesita arreglarse ya.",
    afterPhraseEn:
      "Addressing this now reduces the risk of a larger outage.",
    afterPhraseEs:
      "Atender esto ahora reduce el riesgo de una interrupcion mayor.",
    imagePrompt:
      "Split panel meme in a server room setting. Left (Before): A panicked IT manager sweating in front of a laptop showing 'Critical error', clutching his head, saying 'This needs to be fixed ASAP.' Red warning lights and tangled cables. Right (After): The same IT manager, calm and confident in a blazer, holding a tablet and speaking to a colleague, saying 'Addressing this now reduces the risk of a larger outage.' Clean server racks with green status lights.",
    altTextEn:
      "Before and after meme of an IT manager reacting to a server room critical error — from panic to professional risk communication",
    altTextEs:
      "Meme de antes y despues de un gerente de IT reaccionando a un error critico en la sala de servidores — del panico a la comunicacion profesional de riesgos",
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
    titleEn: "Pitching Value Without Hedging Every Word",
    titleEs: "Presentando Valor Sin Titubear en Cada Palabra",
    captionEn:
      "'Could potentially' is not a value proposition. Say what it does and own it.",
    captionEs:
      "'Podria potencialmente' no es una propuesta de valor. Di lo que hace y aduenatelo.",
    beforePhraseEn: "We believe this could potentially drive engagement.",
    beforePhraseEs:
      "Creemos que esto podria potencialmente impulsar el engagement.",
    afterPhraseEn:
      "This will increase qualified demand and brand authority.",
    afterPhraseEs:
      "Esto aumentara la demanda calificada y la autoridad de marca.",
    imagePrompt:
      "Split panel cartoon in an office. Left (Before): A sales executive pitching to a skeptical client, hedging with 'We believe this could potentially drive engagement' — the client looks unimpressed. Right (After): Same executive, confident posture, saying 'This will increase qualified demand and brand authority' — the client is engaged and nodding. Yellow Before/After header banner, professional cartoon style.",
    altTextEn:
      "Before and after meme of a sales executive pitching value — from vague hedging to confident, specific claims",
    altTextEs:
      "Meme de antes y despues de un ejecutivo de ventas presentando valor — de titubeos vagos a afirmaciones confiadas y especificas",
    tags: ["value-proposition", "confidence", "pitching"],
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
    titleEn: "Presenting the New CRM Without Sounding Like You're Apologizing",
    titleEs: "Presentando el Nuevo CRM Sin Sonar Como Si Estuvieras Pidiendo Disculpas",
    captionEn:
      "Your team can smell uncertainty. If you don't believe in the tool, neither will they.",
    captionEs:
      "Tu equipo puede oler la incertidumbre. Si tu no crees en la herramienta, ellos tampoco.",
    beforePhraseEn:
      "Uh, so, like, we're gonna, um, maybe try this new CRM thing? It's, you know, for the data... I guess? Sorry...",
    beforePhraseEs:
      "Eh, entonces, como que, vamos a, um, quizas probar esta nueva cosa de CRM? Es, ya saben, para los datos... creo? Perdon...",
    afterPhraseEn:
      "Team, this new CRM is a game-changer! It will streamline our sales process, empower us with better insights, and drive our success to new heights. Let's embrace this future together!",
    afterPhraseEs:
      "Equipo, este nuevo CRM es un cambio total! Va a optimizar nuestro proceso de ventas, nos dara mejores insights, y llevara nuestro exito a nuevas alturas. Abracemos este futuro juntos!",
    imagePrompt:
      "Before/after split panel comic. Left: nervous sweating manager at a messy meeting table mumbling about 'maybe trying this CRM thing' while confused employees think 'Is this optional?' and 'What's a CRM again?' with trash on the floor. Right: confident smiling manager presenting with a growth chart while energized employees think 'I'm in!' and 'Finally, a clear vision!' Clean, professional setting with sparkles.",
    altTextEn:
      "Before and after meme showing a sales manager going from awkward uncertain CRM pitch to confident inspiring team presentation",
    altTextEs:
      "Meme de antes y despues mostrando a un gerente de ventas pasando de una presentacion torpe e insegura del CRM a una presentacion inspiradora y segura para el equipo",
    tags: ["change-management", "team-leadership", "tool-adoption", "confidence"],
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

  // ========================================================================
  // STARTUP FOUNDER (sf-01 through sf-08)
  // ========================================================================
  {
    id: "sf-01",
    roleCategory: "startup-founder",
    sortOrder: 1,
    titleEn: "Pitch Day Pronunciation",
    titleEs: "Dia de Pitch: La Pronunciacion",
    captionEn:
      "Your startup idea is worth millions, but the word 'competitive advantage' just won't cooperate.",
    captionEs:
      "Tu idea de startup vale millones, pero la palabra 'competitive advantage' simplemente no coopera.",
    beforePhraseEn: "We have a, um, compet... competitive advant-age in the market.",
    beforePhraseEs: "Tenemos una, um, compet... competitive advant-age en el mercado.",
    afterPhraseEn:
      "Our core differentiator is speed-to-market: we deploy in 48 hours while incumbents take 6 months. That's our moat.",
    afterPhraseEs:
      "Nuestro diferenciador principal es la velocidad al mercado: desplegamos en 48 horas mientras los incumbentes tardan 6 meses. Ese es nuestro moat.",
    imagePrompt:
      "A startup founder at a pitch competition podium, mid-word with their mouth frozen in an awkward position trying to say 'competitive advantage.' The investor panel watches with a mix of sympathy and amusement. Behind the founder, their beautiful pitch deck slide reads 'Competitive Advantage' in huge letters. The irony of stumbling on the one word that matters most. Clean, modern startup event setting.",
    altTextEn:
      "Meme about startup founders stumbling over key English business terms during investor pitches",
    altTextEs:
      "Meme sobre fundadores de startups tropezando con terminos clave de negocios en ingles durante pitches a inversores",
    tags: ["pitch", "pronunciation", "investor-relations"],
    status: "planned",
  },
  {
    id: "sf-02",
    roleCategory: "startup-founder",
    sortOrder: 2,
    titleEn: "Explaining Your Burn Rate With a Straight Face",
    titleEs: "Explicando Tu Burn Rate Con Cara Seria",
    captionEn:
      "Investor: 'What's your runway?' You: *mentally converts months to something that sounds less terrifying*",
    captionEs:
      "Inversor: 'Cual es tu runway?' Tu: *mentalmente convierte meses a algo que suene menos aterrador*",
    beforePhraseEn: "We're spending money fast but we'll figure it out.",
    beforePhraseEs: "Estamos gastando dinero rapido pero lo resolveremos.",
    afterPhraseEn:
      "At our current burn rate, we have 14 months of runway. We're targeting break-even at month 10, which gives us a 4-month buffer before we'd need to raise again.",
    afterPhraseEs:
      "A nuestro burn rate actual, tenemos 14 meses de runway. Nuestro objetivo es el punto de equilibrio en el mes 10, lo que nos da un buffer de 4 meses antes de necesitar levantar capital otra vez.",
    imagePrompt:
      "Split panel: Left shows a founder looking at their bank account balance on a phone, visibly stressed with a thought bubble showing a countdown timer. Right shows the same founder in an investor meeting, calmly presenting a clean 'Path to Profitability' slide with a confident smile. The internal vs. external reality of startup finances. Modern coworking space setting.",
    altTextEn:
      "Meme about the contrast between a founder's internal financial panic and their composed investor presentation",
    altTextEs:
      "Meme sobre el contraste entre el panico financiero interno de un fundador y su presentacion compuesta ante inversores",
    tags: ["fundraising", "burn-rate", "composure"],
    status: "planned",
  },
  {
    id: "sf-03",
    roleCategory: "startup-founder",
    sortOrder: 3,
    titleEn: "The Co-Founder 'Alignment' Conversation",
    titleEs: "La Conversacion de 'Alineacion' con el Cofundador",
    captionEn:
      "You both said 'I agree' in the meeting. You both meant completely different things.",
    captionEs:
      "Ambos dijeron 'estoy de acuerdo' en la reunion. Ambos quisieron decir cosas completamente diferentes.",
    beforePhraseEn: "I think we disagree on the direction. This isn't working.",
    beforePhraseEs: "Creo que no estamos de acuerdo en la direccion. Esto no esta funcionando.",
    afterPhraseEn:
      "I want to make sure we're aligned on the strategic priority for Q2. Let me share my perspective, then I'd love to hear yours, and we'll find the overlap.",
    afterPhraseEs:
      "Quiero asegurarme de que estemos alineados en la prioridad estrategica para Q2. Permiteme compartir mi perspectiva, luego me encantaria escuchar la tuya, y encontraremos el punto en comun.",
    imagePrompt:
      "Two co-founders sitting across from each other at a small table. Both are smiling and saying 'I agree!' in speech bubbles. But their thought bubbles show completely different visions: one imagines a B2B enterprise product, the other imagines a consumer app. Same words, different movies playing in their heads. Startup office with whiteboards in the background.",
    altTextEn:
      "Meme about co-founders agreeing in words but meaning completely different things about company direction",
    altTextEs:
      "Meme sobre cofundadores que estan de acuerdo en palabras pero quieren decir cosas completamente diferentes sobre la direccion de la empresa",
    tags: ["co-founder", "alignment", "leadership"],
    status: "planned",
  },
  {
    id: "sf-04",
    roleCategory: "startup-founder",
    sortOrder: 4,
    titleEn: "Hiring When You Can't Compete on Salary",
    titleEs: "Contratando Cuando No Puedes Competir en Salario",
    captionEn:
      "Google offers 2x your budget. You offer 'the opportunity to wear many hats.' Somehow you need to make that sound exciting.",
    captionEs:
      "Google ofrece 2x tu presupuesto. Tu ofreces 'la oportunidad de usar muchos sombreros.' De alguna manera necesitas hacer que eso suene emocionante.",
    beforePhraseEn: "We can't pay as much as big companies but we're a great team.",
    beforePhraseEs: "No podemos pagar tanto como las grandes empresas pero somos un gran equipo.",
    afterPhraseEn:
      "You'll own the entire product roadmap from day one. At this stage, every decision you make shapes the company. Plus, your equity package is structured so early hires capture the most upside.",
    afterPhraseEs:
      "Seras dueno del roadmap completo del producto desde el dia uno. En esta etapa, cada decision que tomes moldea la empresa. Ademas, tu paquete de equity esta estructurado para que los primeros empleados capturen el mayor beneficio.",
    imagePrompt:
      "A startup founder at a recruitment fair. Their booth is tiny compared to the massive Google, Amazon, and Microsoft booths next to them. But the founder's sign says 'YOU'LL ACTUALLY MATTER HERE' and a line of curious candidates is forming. The David vs. Goliath of startup recruiting. Career fair setting with contrasting booth sizes.",
    altTextEn:
      "Meme about startup founders competing for talent against big tech companies with vision instead of salary",
    altTextEs:
      "Meme sobre fundadores de startups compitiendo por talento contra grandes empresas tech con vision en lugar de salario",
    tags: ["hiring", "recruiting", "startup-culture"],
    status: "planned",
  },
  {
    id: "sf-05",
    roleCategory: "startup-founder",
    sortOrder: 5,
    titleEn: "The Investor Q&A You Didn't Prepare For",
    titleEs: "Las Preguntas del Inversor Para las Que No Te Preparaste",
    captionEn:
      "Your pitch was flawless. Then someone asks about unit economics and your brain switches to your native language.",
    captionEs:
      "Tu pitch fue impecable. Luego alguien pregunta sobre unit economics y tu cerebro cambia a tu idioma nativo.",
    beforePhraseEn: "That's a good question... let me think about that... um...",
    beforePhraseEs: "Esa es una buena pregunta... dejame pensar... um...",
    afterPhraseEn:
      "Great question. Our customer acquisition cost is $45, lifetime value is $380, giving us an 8.4x LTV-to-CAC ratio. We hit payback in 3 months.",
    afterPhraseEs:
      "Gran pregunta. Nuestro costo de adquisicion de clientes es $45, el valor de por vida es $380, dandonos un ratio LTV-a-CAC de 8.4x. Alcanzamos el payback en 3 meses.",
    imagePrompt:
      "Two-panel meme: Top shows a founder delivering a polished pitch with perfect slides, looking confident and smooth. Bottom shows the same founder during Q&A, eyes wide, sweat on forehead, as an investor casually asks 'What's your LTV-to-CAC ratio?' The scripted vs. unscripted moment. Modern pitch meeting room with investors.",
    altTextEn:
      "Meme about the contrast between a founder's rehearsed pitch confidence and their panic during unscripted investor Q&A",
    altTextEs:
      "Meme sobre el contraste entre la confianza ensayada del pitch de un fundador y su panico durante las preguntas no guionadas de inversores",
    tags: ["investor-qa", "improvisation", "metrics"],
    status: "planned",
  },
  {
    id: "sf-06",
    roleCategory: "startup-founder",
    sortOrder: 6,
    titleEn: "Pivoting Without Saying 'Pivot'",
    titleEs: "Pivoteando Sin Decir 'Pivotear'",
    captionEn:
      "The original idea failed. Now you need to tell your investors it was 'strategic evolution' all along.",
    captionEs:
      "La idea original fallo. Ahora necesitas decirle a tus inversores que fue 'evolucion estrategica' todo el tiempo.",
    beforePhraseEn: "The first idea didn't work so we're trying something different.",
    beforePhraseEs: "La primera idea no funciono asi que estamos intentando algo diferente.",
    afterPhraseEn:
      "Customer discovery revealed a stronger pull toward the adjacent use case. We've repositioned to capture that demand -- same technology, larger market, and our first three paying customers validated the move.",
    afterPhraseEs:
      "El descubrimiento de clientes revelo una traccion mas fuerte hacia el caso de uso adyacente. Nos reposicionamos para capturar esa demanda -- misma tecnologia, mercado mas grande, y nuestros tres primeros clientes de pago validaron el movimiento.",
    imagePrompt:
      "A founder presenting a roadmap timeline to investors. The timeline clearly shows the original direction crossed out and a sharp turn to a new direction, but the founder has artfully relabeled it 'STRATEGIC EVOLUTION' with a smooth arrow instead of the sharp pivot angle. The investors nod approvingly. The art of reframing failure as strategy. Clean presentation room.",
    altTextEn:
      "Meme about founders reframing pivots as strategic evolution when presenting to investors",
    altTextEs:
      "Meme sobre fundadores reformulando pivotes como evolucion estrategica al presentar ante inversores",
    tags: ["pivot", "reframing", "investor-communication"],
    status: "planned",
  },
  {
    id: "sf-07",
    roleCategory: "startup-founder",
    sortOrder: 7,
    titleEn: "The Customer Discovery Call in Your Second Language",
    titleEs: "La Llamada de Descubrimiento de Clientes en Tu Segundo Idioma",
    captionEn:
      "You're supposed to be listening for pain points. Instead, you're mentally translating the question you want to ask next.",
    captionEs:
      "Se supone que debes escuchar pain points. En cambio, estas traduciendo mentalmente la pregunta que quieres hacer despues.",
    beforePhraseEn: "So... do you like our product? Would you buy it?",
    beforePhraseEs: "Entonces... te gusta nuestro producto? Lo comprarias?",
    afterPhraseEn:
      "Walk me through what happens when you hit this problem today. What's the biggest frustration? And what would solving it be worth to your team?",
    afterPhraseEs:
      "Cuentame que pasa cuando te encuentras con este problema hoy. Cual es la mayor frustracion? Y que valdria resolverlo para tu equipo?",
    imagePrompt:
      "Split brain illustration: A founder is on a video call with a potential customer. The left side of their brain is focused on the customer's words (labeled 'LISTENING MODE'). The right side is frantically translating and preparing the next question in English (labeled 'TRANSLATION MODE'). The cognitive load of customer discovery in a second language, visualized as a brain working overtime. Home office / video call setting.",
    altTextEn:
      "Meme about the cognitive load of conducting customer discovery calls in your second language",
    altTextEs:
      "Meme sobre la carga cognitiva de conducir llamadas de descubrimiento de clientes en tu segundo idioma",
    tags: ["customer-discovery", "active-listening", "bilingual"],
    status: "planned",
  },
  {
    id: "sf-08",
    roleCategory: "startup-founder",
    sortOrder: 8,
    titleEn: "The Launch Day Press Release Nobody Reads",
    titleEs: "El Comunicado de Prensa del Dia de Lanzamiento Que Nadie Lee",
    captionEn:
      "You spent 3 weeks perfecting the English in your press release. TechCrunch summarized it in one wrong sentence.",
    captionEs:
      "Pasaste 3 semanas perfeccionando el ingles de tu comunicado de prensa. TechCrunch lo resumio en una oracion incorrecta.",
    beforePhraseEn: "We're excited to announce the launch of our revolutionary platform.",
    beforePhraseEs: "Estamos emocionados de anunciar el lanzamiento de nuestra plataforma revolucionaria.",
    afterPhraseEn:
      "Today we're launching the first tool that lets logistics teams cut customs processing time by 70%. Three enterprise clients are already live. Here's a 60-second demo.",
    afterPhraseEs:
      "Hoy lanzamos la primera herramienta que permite a equipos de logistica reducir el tiempo de procesamiento aduanal en un 70%. Tres clientes empresariales ya estan en vivo. Aqui hay un demo de 60 segundos.",
    imagePrompt:
      "A founder sitting at their laptop, proudly reading their polished press release on screen (labeled 'WHAT I WROTE: 1,500 words of carefully crafted English'). Next to it, a phone shows the actual TechCrunch tweet summarizing it as a completely different product in 15 words. The founder stares in disbelief. The gap between what you write and what gets published. Home office, launch day chaos.",
    altTextEn:
      "Meme about the gap between a founder's carefully written press release and how media actually covers it",
    altTextEs:
      "Meme sobre la brecha entre el comunicado de prensa cuidadosamente escrito de un fundador y como los medios realmente lo cubren",
    tags: ["product-launch", "press", "messaging"],
    status: "planned",
  },

  // ========================================================================
  // LOGISTICS & SUPPLY CHAIN (lg-01 through lg-08)
  // ========================================================================
  {
    id: "lg-01",
    roleCategory: "logistics-supply-chain",
    sortOrder: 1,
    titleEn: "Explaining the Delay Without Saying 'Delay'",
    titleEs: "Explicando el Retraso Sin Decir 'Retraso'",
    captionEn:
      "The shipment is 3 weeks late. Your email subject says 'Timeline Adjustment Update.'",
    captionEs:
      "El envio tiene 3 semanas de retraso. El asunto de tu email dice 'Actualizacion de Ajuste de Cronograma.'",
    beforePhraseEn: "The shipment is delayed. We don't know when it will arrive.",
    beforePhraseEs: "El envio esta retrasado. No sabemos cuando llegara.",
    afterPhraseEn:
      "We've identified a port congestion issue affecting the ETA. Current revised arrival is March 15th. I've activated our backup carrier as a contingency and will update you by Friday with confirmed status.",
    afterPhraseEs:
      "Identificamos un problema de congestion portuaria que afecta el ETA. La llegada revisada actual es el 15 de marzo. Active nuestro transportista de respaldo como contingencia y los actualizare el viernes con estatus confirmado.",
    imagePrompt:
      "A logistics manager composing an email. Their screen shows a draft with the word 'DELAYED' crossed out and replaced with increasingly creative euphemisms: 'timeline adjustment,' 'revised ETA,' 'schedule optimization,' 'strategic rerouting.' A thesaurus sits open on their desk. The art of diplomatic delay communication. Office with shipping maps on the wall.",
    altTextEn:
      "Meme about logistics managers finding creative ways to communicate shipping delays professionally",
    altTextEs:
      "Meme sobre gerentes de logistica encontrando formas creativas de comunicar retrasos de envio profesionalmente",
    tags: ["delay-communication", "client-management", "diplomacy"],
    status: "planned",
  },
  {
    id: "lg-02",
    roleCategory: "logistics-supply-chain",
    sortOrder: 2,
    titleEn: "Customs Paperwork: The English Boss Level",
    titleEs: "Documentacion Aduanal: El Nivel Final del Ingles",
    captionEn:
      "You can coordinate 50 containers across 3 continents, but the customs form asks for 'consignee' and your mind goes blank.",
    captionEs:
      "Puedes coordinar 50 contenedores en 3 continentes, pero el formulario aduanal pide 'consignee' y tu mente se queda en blanco.",
    beforePhraseEn: "There's a problem with the customs documents. I need help fixing them.",
    beforePhraseEs: "Hay un problema con los documentos aduanales. Necesito ayuda para arreglarlos.",
    afterPhraseEn:
      "We have a documentation discrepancy on the bill of lading -- the consignee details don't match the letter of credit. I'm coordinating with the freight forwarder to issue a corrected BL by end of day.",
    afterPhraseEs:
      "Tenemos una discrepancia en la documentacion del bill of lading -- los detalles del consignatario no coinciden con la carta de credito. Estoy coordinando con el freight forwarder para emitir un BL corregido para hoy.",
    imagePrompt:
      "A logistics professional staring at a customs form written entirely in dense English legal terminology. Each field has a magnifying glass hovering over it: 'consignee,' 'bill of lading,' 'harmonized tariff code,' 'letter of credit.' The professional looks at the camera with a 'this is fine' expression. Customs office setting with stamps and documents everywhere.",
    altTextEn:
      "Meme about the challenge of navigating complex English customs terminology in international shipping",
    altTextEs:
      "Meme sobre el desafio de navegar la compleja terminologia aduanal en ingles en envios internacionales",
    tags: ["customs", "documentation", "terminology"],
    status: "planned",
  },
  {
    id: "lg-03",
    roleCategory: "logistics-supply-chain",
    sortOrder: 3,
    titleEn: "Negotiating With Carriers Who Know You're Desperate",
    titleEs: "Negociando Con Transportistas Que Saben Que Estas Desesperado",
    captionEn:
      "Peak season rates just tripled. The carrier knows you have 200 containers waiting. Your poker face has never been more important.",
    captionEs:
      "Las tarifas de temporada alta se triplicaron. El transportista sabe que tienes 200 contenedores esperando. Tu cara de poker nunca ha sido mas importante.",
    beforePhraseEn: "That rate is too high. Can you lower it?",
    beforePhraseEs: "Esa tarifa es muy alta. Puede bajarla?",
    afterPhraseEn:
      "We value the partnership and want to find a rate structure that works for both sides long-term. Based on our volume commitment of 200+ TEU monthly, here's what competitive benchmarking shows for this lane.",
    afterPhraseEs:
      "Valoramos la asociacion y queremos encontrar una estructura de tarifas que funcione para ambas partes a largo plazo. Basandonos en nuestro compromiso de volumen de 200+ TEU mensuales, esto es lo que muestra el benchmarking competitivo para esta ruta.",
    imagePrompt:
      "A negotiation standoff: A logistics manager and a carrier sales rep sit across a table. The carrier has a smug smile and a card showing '3X PEAK RATES.' The logistics manager calmly places down a folder labeled 'VOLUME COMMITMENT + 2 OTHER QUOTES.' The carrier's smile starts fading. A poker game but with shipping containers instead of chips. Conference room with a world map on the wall.",
    altTextEn:
      "Meme about logistics managers maintaining negotiation leverage with carriers during peak season",
    altTextEs:
      "Meme sobre gerentes de logistica manteniendo el poder de negociacion con transportistas durante temporada alta",
    tags: ["carrier-negotiation", "rates", "leverage"],
    status: "planned",
  },
  {
    id: "lg-04",
    roleCategory: "logistics-supply-chain",
    sortOrder: 4,
    titleEn: "The Client Wants 'Faster' But Won't Pay for Air Freight",
    titleEs: "El Cliente Quiere 'Mas Rapido' Pero No Pagara Flete Aereo",
    captionEn:
      "Client: 'Can we speed this up?' You: 'Yes. It costs 10x more.' Client: '...Can we speed it up for free?'",
    captionEs:
      "Cliente: 'Podemos acelerar esto?' Tu: 'Si. Cuesta 10x mas.' Cliente: '...Podemos acelerarlo gratis?'",
    beforePhraseEn: "We can't go faster unless you pay for air freight.",
    beforePhraseEs: "No podemos ir mas rapido a menos que pagues por flete aereo.",
    afterPhraseEn:
      "I've mapped out three options: ocean freight at standard timeline, express ocean with a 5-day improvement, and air freight for urgent delivery. Here's the cost-benefit for each so you can decide based on your inventory needs.",
    afterPhraseEs:
      "Prepare tres opciones: flete maritimo con cronograma estandar, maritimo express con una mejora de 5 dias, y flete aereo para entrega urgente. Aqui esta el costo-beneficio de cada uno para que pueda decidir basandose en sus necesidades de inventario.",
    imagePrompt:
      "A speed slider graphic: On the left it says 'OCEAN (cheap, slow)' and on the right 'AIR (fast, expensive).' A client's hand is trying to drag the slider to 'fast' while simultaneously pointing at the 'cheap' end. A logistics manager watches with a patient but knowing expression. The universal logistics dilemma visualized. Clean infographic-style humor.",
    altTextEn:
      "Meme about clients wanting faster shipping without paying premium rates for air freight",
    altTextEs:
      "Meme sobre clientes que quieren envios mas rapidos sin pagar tarifas premium de flete aereo",
    tags: ["client-expectations", "freight-options", "cost-benefit"],
    status: "planned",
  },
  {
    id: "lg-05",
    roleCategory: "logistics-supply-chain",
    sortOrder: 5,
    titleEn: "The 3 AM Call From the Warehouse",
    titleEs: "La Llamada de las 3 AM del Almacen",
    captionEn:
      "When a container arrives damaged at 3 AM and you need to write a professional claim email in English before your coffee kicks in.",
    captionEs:
      "Cuando un contenedor llega danado a las 3 AM y necesitas escribir un email profesional de reclamo en ingles antes de que tu cafe haga efecto.",
    beforePhraseEn: "The container arrived damaged. We need someone to fix this immediately.",
    beforePhraseEs: "El contenedor llego danado. Necesitamos que alguien arregle esto inmediatamente.",
    afterPhraseEn:
      "Container MSKU-4521890 arrived with water damage to approximately 30% of the cargo. I've documented the damage with timestamped photos, filed the preliminary insurance claim, and coordinated with the warehouse to segregate affected units. Full damage assessment will be ready by noon.",
    afterPhraseEs:
      "El contenedor MSKU-4521890 llego con danos por agua en aproximadamente el 30% de la carga. Documente los danos con fotos con marca de tiempo, presente el reclamo preliminar de seguro, y coordine con el almacen para segregar las unidades afectadas. La evaluacion completa de danos estara lista al mediodia.",
    imagePrompt:
      "Split panel: Left shows a logistics manager jolted awake at 3 AM by a phone call, hair messy, eyes barely open. Right shows the same person 10 minutes later, still in pajamas but now composed and professional, typing a detailed damage claim email with perfect English on their laptop. Coffee mug says 'LOGISTICS NEVER SLEEPS.' The 24/7 reality of supply chain management.",
    altTextEn:
      "Meme about logistics professionals handling cargo damage claims at 3 AM with professional English",
    altTextEs:
      "Meme sobre profesionales de logistica manejando reclamos por danos de carga a las 3 AM con ingles profesional",
    tags: ["damage-claims", "emergency-response", "documentation"],
    status: "planned",
  },
  {
    id: "lg-06",
    roleCategory: "logistics-supply-chain",
    sortOrder: 6,
    titleEn: "Cross-Border Compliance: When Every Word Matters",
    titleEs: "Cumplimiento Transfronterizo: Cuando Cada Palabra Importa",
    captionEn:
      "One wrong word on the export declaration and your shipment is sitting in customs for 3 weeks.",
    captionEs:
      "Una palabra incorrecta en la declaracion de exportacion y tu envio esta en aduanas por 3 semanas.",
    beforePhraseEn: "There's a compliance issue with the shipment. I'm not sure what happened.",
    beforePhraseEs: "Hay un problema de cumplimiento con el envio. No estoy seguro de que paso.",
    afterPhraseEn:
      "We identified a classification discrepancy on the export declaration -- HS code 8471.30 was applied instead of 8471.41. I've filed the amendment with customs and expect clearance within 48 hours.",
    afterPhraseEs:
      "Identificamos una discrepancia de clasificacion en la declaracion de exportacion -- se aplico el codigo HS 8471.30 en lugar de 8471.41. Presente la enmienda ante aduanas y espero el despacho dentro de 48 horas.",
    imagePrompt:
      "A magnifying glass hovering over a customs form, zoomed in on one tiny field where a single digit is wrong in an HS code. Around the magnifying glass, dominoes are lined up showing the chain reaction: 'wrong code' → 'customs hold' → 'delayed shipment' → 'angry client' → 'contract penalty.' The butterfly effect of one wrong number in logistics. Document-focused, clean design.",
    altTextEn:
      "Meme about how one small error on customs paperwork creates a chain reaction of logistics problems",
    altTextEs:
      "Meme sobre como un pequeno error en documentacion aduanal crea una reaccion en cadena de problemas logisticos",
    tags: ["compliance", "customs", "precision"],
    status: "planned",
  },
  {
    id: "lg-07",
    roleCategory: "logistics-supply-chain",
    sortOrder: 7,
    titleEn: "The Supplier Meeting Where You Nod But Don't Understand",
    titleEs: "La Reunion con el Proveedor Donde Asientes Pero No Entiendes",
    captionEn:
      "The supplier is talking about Incoterms and you're 80% sure they said 'FOB' but it might have been 'FOP' and now you're afraid to ask.",
    captionEs:
      "El proveedor esta hablando de Incoterms y estas 80% seguro de que dijo 'FOB' pero pudo haber sido 'FOP' y ahora tienes miedo de preguntar.",
    beforePhraseEn: "Yes, yes, that sounds fine. We agree.",
    beforePhraseEs: "Si, si, eso suena bien. Estamos de acuerdo.",
    afterPhraseEn:
      "Just to make sure we're aligned -- you're proposing FOB Shanghai, meaning risk transfers to us once cargo crosses the ship's rail. Can you confirm the loading charges are included on your side?",
    afterPhraseEs:
      "Solo para asegurarme de que estamos alineados -- estan proponiendo FOB Shanghai, lo que significa que el riesgo se transfiere a nosotros una vez que la carga cruza la borda del barco. Pueden confirmar que los cargos de carga estan incluidos de su lado?",
    imagePrompt:
      "A logistics professional in a meeting nodding confidently while their internal monologue runs as subtitles at the bottom of the screen: 'Did they say FOB or CIF? What does DAP mean again? Just keep nodding. Google it later.' The supplier presents enthusiastically at a whiteboard covered in Incoterms. The gap between looking confident and being confident. Meeting room with international flags.",
    altTextEn:
      "Meme about logistics professionals nodding through Incoterms discussions they don't fully understand in English",
    altTextEs:
      "Meme sobre profesionales de logistica asintiendo en discusiones de Incoterms que no entienden completamente en ingles",
    tags: ["incoterms", "supplier-meetings", "clarity"],
    status: "planned",
  },
  {
    id: "lg-08",
    roleCategory: "logistics-supply-chain",
    sortOrder: 8,
    titleEn: "Turning Supply Chain Chaos Into an Executive Summary",
    titleEs: "Convirtiendo el Caos de la Cadena de Suministro en un Resumen Ejecutivo",
    captionEn:
      "The reality: 6 containers stuck, 2 carriers ghosting you, and a warehouse at 97% capacity. The exec summary: 'Minor operational adjustments in progress.'",
    captionEs:
      "La realidad: 6 contenedores atascados, 2 transportistas que no responden, y un almacen al 97% de capacidad. El resumen ejecutivo: 'Ajustes operacionales menores en progreso.'",
    beforePhraseEn: "Supply chain is having a lot of problems right now.",
    beforePhraseEs: "La cadena de suministro esta teniendo muchos problemas ahora.",
    afterPhraseEn:
      "We're managing three concurrent disruptions: port congestion in Shanghai affecting 6 containers, a carrier capacity constraint on the Asia-LATAM lane, and elevated warehouse utilization at 97%. Here's the mitigation plan with timelines for each.",
    afterPhraseEs:
      "Estamos manejando tres disrupciones concurrentes: congestion portuaria en Shanghai afectando 6 contenedores, una restriccion de capacidad de transportistas en la ruta Asia-LATAM, y utilizacion elevada del almacen al 97%. Aqui esta el plan de mitigacion con cronogramas para cada una.",
    imagePrompt:
      "Split reality: Bottom half shows the actual supply chain situation -- a chaotic war room with red alerts, phones ringing, whiteboards covered in crisis notes, and empty coffee cups. Top half shows the executive summary email being composed: clean, structured, calm bullet points with 'STATUS: MANAGED' in green. Same situation, two completely different presentations. Logistics office setting.",
    altTextEn:
      "Meme about the gap between supply chain operational chaos and the calm executive summary that gets sent upward",
    altTextEs:
      "Meme sobre la brecha entre el caos operacional de la cadena de suministro y el resumen ejecutivo calmado que se envia hacia arriba",
    tags: ["executive-reporting", "crisis-management", "composure"],
    status: "planned",
  },

  // ========================================================================
  // HR & RECRUITER (hr-01 through hr-08)
  // ========================================================================
  {
    id: "hr-01",
    roleCategory: "hr-officer",
    sortOrder: 1,
    titleEn: "The Rejection Email That Doesn't Crush Souls",
    titleEs: "El Email de Rechazo Que No Destruye Almas",
    captionEn:
      "Somewhere between 'You're not good enough' and 'We loved everything about you but no' lies the professional rejection email.",
    captionEs:
      "En algun lugar entre 'No eres lo suficientemente bueno' y 'Nos encanto todo de ti pero no' esta el email de rechazo profesional.",
    beforePhraseEn: "Unfortunately, we decided to go with another candidate. Good luck.",
    beforePhraseEs: "Desafortunadamente, decidimos ir con otro candidato. Buena suerte.",
    afterPhraseEn:
      "After careful consideration, we've moved forward with a candidate whose experience more closely matches this specific role. Your background in data engineering impressed us -- I'd love to stay in touch for future opportunities that better align with your strengths.",
    afterPhraseEs:
      "Despues de una consideracion cuidadosa, avanzamos con un candidato cuya experiencia se alinea mas estrechamente con este rol especifico. Tu experiencia en ingenieria de datos nos impresiono -- me encantaria mantener contacto para futuras oportunidades que se alineen mejor con tus fortalezas.",
    imagePrompt:
      "A recruiter's screen showing two draft rejection emails side by side. Left draft is blunt and cold: 'You didn't get the job. Best wishes.' Right draft is warm but honest: specific feedback, genuine compliment, door left open. The left draft has a red X, the right has a green check. The recruiter is about to click send on the right one. HR office setting, professional and warm.",
    altTextEn:
      "Meme about the art of writing rejection emails that are honest yet respectful and leave the door open",
    altTextEs:
      "Meme sobre el arte de escribir emails de rechazo que son honestos pero respetuosos y dejan la puerta abierta",
    tags: ["rejection", "candidate-experience", "empathy"],
    status: "planned",
  },
  {
    id: "hr-02",
    roleCategory: "hr-officer",
    sortOrder: 2,
    titleEn: "Salary Negotiation: The Dance of Numbers",
    titleEs: "Negociacion Salarial: La Danza de los Numeros",
    captionEn:
      "Candidate: 'What's the salary range?' You: *tries to answer without actually answering*",
    captionEs:
      "Candidato: 'Cual es el rango salarial?' Tu: *intenta responder sin realmente responder*",
    beforePhraseEn: "We can't go higher than that. The budget is fixed.",
    beforePhraseEs: "No podemos ir mas alto. El presupuesto es fijo.",
    afterPhraseEn:
      "The base salary range for this role is $85-95K. Given your 7 years of experience and the cloud certifications, I can position you toward the top of that range. Let me also walk you through the total compensation including equity, bonus structure, and professional development budget.",
    afterPhraseEs:
      "El rango salarial base para este rol es $85-95K. Dada tu experiencia de 7 anos y las certificaciones cloud, puedo posicionarte hacia el tope de ese rango. Permiteme tambien explicarte la compensacion total incluyendo equity, estructura de bonos y presupuesto de desarrollo profesional.",
    imagePrompt:
      "A negotiation tango: HR professional and candidate dancing a formal tango, but instead of roses, they're exchanging salary numbers back and forth. Each spin reveals a new number: base salary, bonus, equity, benefits. The dance is elegant and structured, not confrontational. The art of salary negotiation as a collaborative dance. Stylized, professional humor.",
    altTextEn:
      "Meme about salary negotiations being a structured dance between total compensation components rather than a confrontation",
    altTextEs:
      "Meme sobre las negociaciones salariales siendo una danza estructurada entre componentes de compensacion total en lugar de una confrontacion",
    tags: ["salary-negotiation", "total-compensation", "recruiting"],
    status: "planned",
  },
  {
    id: "hr-03",
    roleCategory: "hr-officer",
    sortOrder: 3,
    titleEn: "The Performance Improvement Plan Nobody Likes Writing",
    titleEs: "El Plan de Mejora de Desempeno Que a Nadie Le Gusta Escribir",
    captionEn:
      "HR's least favorite document to write in English, and the employee's least favorite to receive in any language.",
    captionEs:
      "El documento menos favorito de RRHH para escribir en ingles, y el menos favorito del empleado para recibir en cualquier idioma.",
    beforePhraseEn: "You're on a PIP. You have 30 days to fix these issues or we'll let you go.",
    beforePhraseEs: "Estas en un PIP. Tienes 30 dias para arreglar estos problemas o te dejaremos ir.",
    afterPhraseEn:
      "This plan is designed to support your success. Here are three specific, measurable goals for the next 30 days, the resources available to help you, and the check-in cadence. I want to see you succeed in this role.",
    afterPhraseEs:
      "Este plan esta disenado para apoyar tu exito. Aqui hay tres objetivos especificos y medibles para los proximos 30 dias, los recursos disponibles para ayudarte, y la cadencia de seguimiento. Quiero verte tener exito en este rol.",
    imagePrompt:
      "Two versions of a PIP document. Left version: black and white, harsh language, feels like a termination notice. Right version: same expectations but framed with support resources, milestones, and a genuine 'here to help' tone, with color and warmth. An HR professional is shredding the left version and presenting the right one. The reframe from punishment to partnership.",
    altTextEn:
      "Meme about reframing performance improvement plans from punitive documents to supportive growth frameworks",
    altTextEs:
      "Meme sobre reformular planes de mejora de desempeno de documentos punitivos a marcos de crecimiento de apoyo",
    tags: ["pip", "performance-management", "leadership"],
    status: "planned",
  },
  {
    id: "hr-04",
    roleCategory: "hr-officer",
    sortOrder: 4,
    titleEn: "Explaining Company Culture Without Using 'We're Like a Family'",
    titleEs: "Explicando la Cultura de la Empresa Sin Usar 'Somos Como una Familia'",
    captionEn:
      "Every company says 'great culture.' The candidates who've been burned before need specifics, not vibes.",
    captionEs:
      "Cada empresa dice 'gran cultura.' Los candidatos que han sido quemados antes necesitan especificos, no vibras.",
    beforePhraseEn: "We have an amazing culture. We're like a family here.",
    beforePhraseEs: "Tenemos una cultura increible. Somos como una familia aqui.",
    afterPhraseEn:
      "Our engineering team ships weekly with 90% autonomy on technical decisions. We have a no-meeting Wednesday policy, 20% time for personal projects, and our last employee engagement score was 4.2 out of 5. Here's what three current engineers said about their experience.",
    afterPhraseEs:
      "Nuestro equipo de ingenieria hace releases semanales con 90% de autonomia en decisiones tecnicas. Tenemos una politica de miercoles sin reuniones, 20% del tiempo para proyectos personales, y nuestro ultimo score de engagement fue 4.2 de 5. Aqui esta lo que tres ingenieros actuales dijeron sobre su experiencia.",
    imagePrompt:
      "A bingo card labeled 'EMPLOYER BRANDING BINGO' with cliche squares: 'like a family,' 'fast-paced environment,' 'unlimited PTO,' 'ping pong table,' 'flat hierarchy,' 'we work hard and play hard.' Most squares are checked off. Below the card, a recruiter presents a slide with actual metrics and employee quotes instead. The shift from buzzwords to proof. Career fair / recruiting event setting.",
    altTextEn:
      "Meme about replacing generic employer branding cliches with specific, measurable culture proof points",
    altTextEs:
      "Meme sobre reemplazar cliches genericos de marca empleadora con puntos de prueba de cultura especificos y medibles",
    tags: ["employer-branding", "culture", "recruiting"],
    status: "planned",
  },
  {
    id: "hr-05",
    roleCategory: "hr-officer",
    sortOrder: 5,
    titleEn: "The Exit Interview Where They Finally Tell the Truth",
    titleEs: "La Entrevista de Salida Donde Finalmente Dicen la Verdad",
    captionEn:
      "Two weeks' notice: when employees finally feel safe enough to give you the real feedback.",
    captionEs:
      "Dos semanas de aviso: cuando los empleados finalmente se sienten lo suficientemente seguros para dar la retroalimentacion real.",
    beforePhraseEn: "I'm sorry to hear you're leaving. Is there anything we could have done differently?",
    beforePhraseEs: "Lamento escuchar que te vas. Hay algo que pudimos haber hecho diferente?",
    afterPhraseEn:
      "I appreciate your honesty during this conversation. The patterns you're describing around promotion visibility and manager communication are things I want to address. Can I share these themes -- anonymized -- with the leadership team to drive real change?",
    afterPhraseEs:
      "Aprecio tu honestidad durante esta conversacion. Los patrones que describes sobre visibilidad de promociones y comunicacion de gerentes son cosas que quiero abordar. Puedo compartir estos temas -- anonimizados -- con el equipo de liderazgo para impulsar un cambio real?",
    imagePrompt:
      "An exit interview setting: The departing employee is finally speaking freely, with a long list of honest feedback flowing out in a speech bubble. The HR professional is taking notes furiously, eyes wide, realizing this is the most honest feedback they've received all year. A thought bubble from HR says 'WHY DIDN'T ANYONE SAY THIS BEFORE?' The irony of exit interviews being the most honest conversations. Office meeting room.",
    altTextEn:
      "Meme about exit interviews being the only time employees give truly honest feedback about company culture",
    altTextEs:
      "Meme sobre las entrevistas de salida siendo el unico momento en que los empleados dan retroalimentacion verdaderamente honesta sobre la cultura de la empresa",
    tags: ["exit-interview", "feedback", "retention"],
    status: "planned",
  },
  {
    id: "hr-06",
    roleCategory: "hr-officer",
    sortOrder: 6,
    titleEn: "The LinkedIn Outreach That Doesn't Sound Like Spam",
    titleEs: "El Outreach de LinkedIn Que No Suena a Spam",
    captionEn:
      "Recruiter message template #47: 'Exciting opportunity!' Delete rate: 99.7%.",
    captionEs:
      "Plantilla de mensaje de reclutador #47: 'Oportunidad emocionante!' Tasa de eliminacion: 99.7%.",
    beforePhraseEn: "Hi! I have an exciting opportunity that would be perfect for you. Let's chat!",
    beforePhraseEs: "Hola! Tengo una oportunidad emocionante que seria perfecta para ti. Hablemos!",
    afterPhraseEn:
      "I saw your talk at ReactConf on state management -- your approach to reducing re-renders was impressive. We're building a team that tackles exactly that kind of performance challenge at scale. Would you be open to a 10-minute conversation about what we're building?",
    afterPhraseEs:
      "Vi tu charla en ReactConf sobre manejo de estado -- tu enfoque para reducir re-renders fue impresionante. Estamos construyendo un equipo que aborda exactamente ese tipo de desafio de performance a escala. Estarias abierto a una conversacion de 10 minutos sobre lo que estamos construyendo?",
    imagePrompt:
      "Two LinkedIn message previews on a phone screen. Top message is generic: 'Hi [NAME], I have an exciting opportunity...' -- it's grayed out and ignored with 47 similar messages above it. Bottom message is specific: references something the candidate actually did, mentions a concrete detail. It has a bright notification dot and the candidate is typing a reply. The difference between copy-paste and craft. Phone/LinkedIn UI mockup.",
    altTextEn:
      "Meme about the difference between generic recruiter spam and personalized, research-based candidate outreach",
    altTextEs:
      "Meme sobre la diferencia entre spam generico de reclutadores y outreach personalizado y basado en investigacion hacia candidatos",
    tags: ["candidate-outreach", "personalization", "recruiting"],
    status: "planned",
  },
  {
    id: "hr-07",
    roleCategory: "hr-officer",
    sortOrder: 7,
    titleEn: "Mediating a Manager-Employee Conflict in Your Second Language",
    titleEs: "Mediando un Conflicto Gerente-Empleado en Tu Segundo Idioma",
    captionEn:
      "Both sides think they're right. You need to find neutral English words that don't accidentally side with either.",
    captionEs:
      "Ambos lados creen que tienen razon. Necesitas encontrar palabras neutrales en ingles que no accidentalmente se pongan del lado de ninguno.",
    beforePhraseEn: "You both need to work this out. Just communicate better.",
    beforePhraseEs: "Ambos necesitan resolver esto. Solo comuniquense mejor.",
    afterPhraseEn:
      "I've heard both perspectives and I see legitimate concerns on both sides. Let me reflect back what I'm hearing so we can find common ground. The goal is a working agreement that addresses both the team's workflow needs and the flexibility requirements.",
    afterPhraseEs:
      "He escuchado ambas perspectivas y veo preocupaciones legitimas de ambos lados. Permitanme reflejar lo que estoy escuchando para que podamos encontrar un punto en comun. El objetivo es un acuerdo de trabajo que aborde tanto las necesidades de flujo de trabajo del equipo como los requisitos de flexibilidad.",
    imagePrompt:
      "An HR professional sitting between a manager and an employee who are both talking at the same time with overlapping speech bubbles. The HR person has a calm expression and holds up two hands in a 'pause' gesture. Between them, a whiteboard shows 'COMMON GROUND' with a small overlap area of both their concerns highlighted. The mediator's moment of truth. Office meeting room, tension visible but being managed.",
    altTextEn:
      "Meme about HR professionals mediating workplace conflicts by finding neutral language and common ground",
    altTextEs:
      "Meme sobre profesionales de RRHH mediando conflictos laborales encontrando lenguaje neutral y puntos en comun",
    tags: ["conflict-mediation", "neutral-language", "leadership"],
    status: "planned",
  },
  {
    id: "hr-08",
    roleCategory: "hr-officer",
    sortOrder: 8,
    titleEn: "Pitching the Training Program Without Apologizing for It",
    titleEs: "Presentando el Programa de Capacitacion Sin Disculparte por Ello",
    captionEn:
      "You know the program will transform leadership. Now say it like you believe it.",
    captionEs:
      "Sabes que el programa transformara el liderazgo. Ahora dilo como si lo creyeras.",
    beforePhraseEn: "Uh, um, maybe, if it's okay, we could, like, try this new executive training thing? It, uh, might be good, I think? Sorry...",
    beforePhraseEs: "Eh, um, tal vez, si esta bien, podriamos, como, probar este nuevo programa de capacitacion ejecutiva? Eh, podria ser bueno, creo? Perdon...",
    afterPhraseEn:
      "We are implementing this new executive training program. It will drive leadership results and is crucial for our future growth. We start next week.",
    afterPhraseEs:
      "Estamos implementando este nuevo programa de capacitacion ejecutiva. Impulsara resultados de liderazgo y es crucial para nuestro crecimiento futuro. Comenzamos la proxima semana.",
    imagePrompt:
      "Split panel meme in a conference room. Left (Before): A nervous HR officer standing in front of seated colleagues, fidgeting and hedging, colleagues look confused with question marks. Right (After): The same HR officer standing confidently, gesturing decisively, colleagues are engaged and nodding with a growth chart on the wall behind her. Professional cartoon style.",
    altTextEn:
      "Before and after meme of an HR officer pitching an executive training program — from uncertain hedging to confident leadership",
    altTextEs:
      "Meme de antes y despues de una oficial de RRHH presentando un programa de capacitacion ejecutiva — de titubear con incertidumbre a liderazgo seguro",
    tags: ["training", "initiative-pitching", "executive-presence"],
    status: "planned",
  },

  // ========================================================================
  // CONSULTANT (cn-01 through cn-08)
  // ========================================================================
  {
    id: "cn-01",
    roleCategory: "consultant",
    sortOrder: 1,
    titleEn: "The 2x2 Matrix That Explains Everything",
    titleEs: "La Matriz 2x2 Que Explica Todo",
    captionEn:
      "Client: 'This is a complex problem.' Consultant: *draws a 2x2 matrix* Client: 'Genius.'",
    captionEs:
      "Cliente: 'Este es un problema complejo.' Consultor: *dibuja una matriz 2x2* Cliente: 'Genio.'",
    beforePhraseEn: "It's complicated. There are a lot of factors to consider.",
    beforePhraseEs: "Es complicado. Hay muchos factores a considerar.",
    afterPhraseEn:
      "Let me simplify this into a framework. If we map urgency against strategic value, your initiatives fall into four quadrants. The top-right is where we should focus first -- high urgency, high value. Here's my recommended sequencing.",
    afterPhraseEs:
      "Permitame simplificar esto en un framework. Si mapeamos urgencia contra valor estrategico, sus iniciativas caen en cuatro cuadrantes. La esquina superior derecha es donde debemos enfocarnos primero -- alta urgencia, alto valor. Aqui esta mi secuencia recomendada.",
    imagePrompt:
      "A consultant standing at a whiteboard with a beautifully drawn 2x2 matrix. The client stares at it with a revelation expression, as if the meaning of life has been explained. Behind the consultant, a shelf of business books all have 2x2 matrices on their covers. The unofficial universal language of consulting. Modern consulting office, glass walls.",
    altTextEn:
      "Meme about consultants using 2x2 matrices to simplify complex business problems into actionable frameworks",
    altTextEs:
      "Meme sobre consultores usando matrices 2x2 para simplificar problemas complejos de negocios en frameworks accionables",
    tags: ["frameworks", "simplification", "client-communication"],
    status: "planned",
  },
  {
    id: "cn-02",
    roleCategory: "consultant",
    sortOrder: 2,
    titleEn: "Scope Creep Disguised as 'One More Question'",
    titleEs: "Scope Creep Disfrazado de 'Una Pregunta Mas'",
    captionEn:
      "The client said 'quick question' 47 times. Each one added a week to the project.",
    captionEs:
      "El cliente dijo 'pregunta rapida' 47 veces. Cada una agrego una semana al proyecto.",
    beforePhraseEn: "Sure, I can look into that too. No problem.",
    beforePhraseEs: "Claro, tambien puedo revisar eso. No hay problema.",
    afterPhraseEn:
      "Great question -- that's actually outside the current engagement scope, but it's an important area. I'd recommend we capture it for a Phase 2 workstream. Let me draft a brief scope addendum so we can address it properly without impacting the current deliverables.",
    afterPhraseEs:
      "Gran pregunta -- eso en realidad esta fuera del alcance del engagement actual, pero es un area importante. Recomendaria que lo capturemos para un flujo de trabajo de Fase 2. Permitame redactar un breve adendum de alcance para que podamos abordarlo adecuadamente sin impactar los entregables actuales.",
    imagePrompt:
      "A consultant's project scope document growing like a snowball rolling downhill. At the top of the hill it's a small clean document. Each 'quick question' from the client makes it bigger until at the bottom it's an enormous boulder about to crush the timeline. The client at the top cheerfully throws another 'quick question' onto the snowball. The avalanche of scope creep. Humorous physical metaphor.",
    altTextEn:
      "Meme about how each client 'quick question' snowballs into massive scope creep on consulting engagements",
    altTextEs:
      "Meme sobre como cada 'pregunta rapida' del cliente se convierte en una bola de nieve de scope creep masivo en engagements de consultoria",
    tags: ["scope-creep", "boundaries", "client-management"],
    status: "planned",
  },
  {
    id: "cn-03",
    roleCategory: "consultant",
    sortOrder: 3,
    titleEn: "Making Recommendations the Client Already Believes",
    titleEs: "Haciendo Recomendaciones en las Que el Cliente Ya Cree",
    captionEn:
      "The best consulting is when the client says 'That's exactly what I was thinking' about the idea they hired you to have.",
    captionEs:
      "La mejor consultoria es cuando el cliente dice 'Eso es exactamente lo que estaba pensando' sobre la idea por la que te contrataron.",
    beforePhraseEn: "Based on our analysis, you should do X.",
    beforePhraseEs: "Basandome en nuestro analisis, deberian hacer X.",
    afterPhraseEn:
      "The data confirms what your team has been sensing: the opportunity in LATAM is real. What our analysis adds is the sizing -- $12M addressable market -- and a tested entry playbook from three comparable companies. Your instinct was right; now you have the evidence to move.",
    afterPhraseEs:
      "Los datos confirman lo que su equipo ha estado sintiendo: la oportunidad en LATAM es real. Lo que nuestro analisis agrega es el dimensionamiento -- $12M de mercado direccionable -- y un playbook de entrada probado de tres empresas comparables. Su instinto era correcto; ahora tienen la evidencia para avanzar.",
    imagePrompt:
      "A consultant presenting findings to a client executive. The executive's face lights up with recognition: 'That's what I've been saying!' The consultant subtly winks at the camera while gesturing to a slide that says 'Data-Validated Client Insight.' The art of making your recommendation feel like the client's idea. Modern glass-walled conference room with skyline view.",
    altTextEn:
      "Meme about the consulting art of validating client intuitions with data so recommendations feel like natural conclusions",
    altTextEs:
      "Meme sobre el arte de consultoria de validar las intuiciones del cliente con datos para que las recomendaciones se sientan como conclusiones naturales",
    tags: ["recommendations", "client-alignment", "influence"],
    status: "planned",
  },
  {
    id: "cn-04",
    roleCategory: "consultant",
    sortOrder: 4,
    titleEn: "The Deliverable Presentation in Imperfect English",
    titleEs: "La Presentacion de Entregables en Ingles Imperfecto",
    captionEn:
      "The analysis is brilliant. The slide design is perfect. And then you open your mouth and suddenly 'synergistic value proposition' has too many syllables.",
    captionEs:
      "El analisis es brillante. El diseno de las diapositivas es perfecto. Y luego abres la boca y de repente 'synergistic value proposition' tiene demasiadas silabas.",
    beforePhraseEn: "So, um, this slide shows that, well, the company should maybe consider...",
    beforePhraseEs: "Entonces, um, esta diapositiva muestra que, bueno, la empresa deberia quizas considerar...",
    afterPhraseEn:
      "This slide captures our core finding: you're leaving $3M in annual savings on the table through procurement fragmentation. The fix is three-phased. Let me walk you through each phase and the expected ROI.",
    afterPhraseEs:
      "Esta diapositiva captura nuestro hallazgo principal: estan dejando $3M en ahorros anuales sobre la mesa debido a fragmentacion en compras. La solucion tiene tres fases. Permitame explicarles cada fase y el ROI esperado.",
    imagePrompt:
      "Split panel: Left shows a consultant rehearsing their presentation alone, fluent and confident, slides flowing perfectly. Right shows the same consultant in the actual client meeting, stumbling over 'synergistic value proposition' while the client watches. But then -- a third panel shows them taking a breath, simplifying the language, and delivering the insight clearly. The recovery moment. Modern conference room.",
    altTextEn:
      "Meme about consultants overcoming presentation anxiety in English by simplifying language and focusing on insights",
    altTextEs:
      "Meme sobre consultores superando la ansiedad de presentacion en ingles simplificando el lenguaje y enfocandose en insights",
    tags: ["presentation", "confidence", "simplification"],
    status: "planned",
  },
  {
    id: "cn-05",
    roleCategory: "consultant",
    sortOrder: 5,
    titleEn: "Telling the Client What They Don't Want to Hear",
    titleEs: "Diciendole al Cliente Lo Que No Quiere Escuchar",
    captionEn:
      "They hired you for your honest opinion. They meant 'honest opinion that agrees with ours.'",
    captionEs:
      "Te contrataron por tu opinion honesta. Quisieron decir 'opinion honesta que concuerde con la nuestra.'",
    beforePhraseEn: "I think your current approach isn't working.",
    beforePhraseEs: "Creo que su enfoque actual no esta funcionando.",
    afterPhraseEn:
      "The current go-to-market strategy has generated strong brand awareness, which is valuable. Where the data shows a gap is in conversion -- 0.8% versus the 2.5% industry benchmark. I'd like to present an alternative approach that preserves your brand positioning while addressing the conversion gap.",
    afterPhraseEs:
      "La estrategia go-to-market actual ha generado un fuerte reconocimiento de marca, lo cual es valioso. Donde los datos muestran una brecha es en conversion -- 0.8% versus el benchmark de la industria de 2.5%. Me gustaria presentar un enfoque alternativo que preserve su posicionamiento de marca mientras aborda la brecha de conversion.",
    imagePrompt:
      "A consultant holding up a mirror to a client executive. In the mirror, the client's strategy is reflected honestly -- showing both the strengths (green highlights) and the gaps (red highlights). The client's expression goes through stages: denial, discomfort, then grudging respect. The consultant has a supportive but firm expression. The courage of honest consulting. Elegant office setting.",
    altTextEn:
      "Meme about consultants delivering difficult truths by leading with strengths before addressing gaps",
    altTextEs:
      "Meme sobre consultores entregando verdades dificiles empezando con fortalezas antes de abordar las brechas",
    tags: ["tough-conversations", "honesty", "client-trust"],
    status: "planned",
  },
  {
    id: "cn-06",
    roleCategory: "consultant",
    sortOrder: 6,
    titleEn: "Workshop Facilitation: Herding Cats in English",
    titleEs: "Facilitacion de Talleres: Pastoreando Gatos en Ingles",
    captionEn:
      "8 stakeholders, 8 opinions, 3 languages in the room, and you need to reach 'alignment' in 90 minutes.",
    captionEs:
      "8 stakeholders, 8 opiniones, 3 idiomas en la sala, y necesitas llegar a 'alineacion' en 90 minutos.",
    beforePhraseEn: "Let's just go around the room and share our thoughts.",
    beforePhraseEs: "Vamos a dar la vuelta a la sala y compartir nuestros pensamientos.",
    afterPhraseEn:
      "We have 90 minutes and three decisions to make. I'll frame each decision with the options and trade-offs, we'll use dot voting to surface preferences, and I'll synthesize the group's direction. Sound good? Let's start with the highest-impact decision.",
    afterPhraseEs:
      "Tenemos 90 minutos y tres decisiones que tomar. Enmarcare cada decision con las opciones y trade-offs, usaremos votacion por puntos para identificar preferencias, y sintetizare la direccion del grupo. Suena bien? Comencemos con la decision de mayor impacto.",
    imagePrompt:
      "A workshop room with 8 people all talking at once, sticky notes flying everywhere, a timer showing 90 minutes counting down. In the center, a consultant stands calmly with a clear agenda board showing '3 DECISIONS' and a structured process. Half the room is chaos, but the consultant's half is organized. Order emerging from chaos. Modern workshop setting with whiteboards and colorful post-its.",
    altTextEn:
      "Meme about consultants bringing structure and process to chaotic stakeholder workshops with diverse opinions",
    altTextEs:
      "Meme sobre consultores trayendo estructura y proceso a talleres caoticos de stakeholders con opiniones diversas",
    tags: ["facilitation", "workshop", "stakeholder-alignment"],
    status: "planned",
  },
  {
    id: "cn-07",
    roleCategory: "consultant",
    sortOrder: 7,
    titleEn: "The Engagement Wrap-Up That Opens the Next Door",
    titleEs: "El Cierre de Engagement Que Abre la Siguiente Puerta",
    captionEn:
      "The project is over. The question is: do they call you back, or do they Google 'cheaper consultant'?",
    captionEs:
      "El proyecto termino. La pregunta es: te vuelven a llamar, o buscan en Google 'consultor mas barato'?",
    beforePhraseEn: "That wraps up our engagement. Let me know if you need anything else.",
    beforePhraseEs: "Eso concluye nuestro engagement. Avisame si necesitas algo mas.",
    afterPhraseEn:
      "As we close Phase 1, here's the executive summary of value delivered: $2.4M in identified savings, a 3-year roadmap your team can execute independently, and the capability-building workshops we conducted. Based on what we uncovered, I see two natural next areas where we could add value. I'd love to discuss them when you're ready.",
    afterPhraseEs:
      "Al cerrar la Fase 1, aqui esta el resumen ejecutivo de valor entregado: $2.4M en ahorros identificados, un roadmap de 3 anos que tu equipo puede ejecutar independientemente, y los talleres de construccion de capacidades que realizamos. Basandome en lo que descubrimos, veo dos areas naturales donde podriamos agregar valor. Me encantaria discutirlas cuando estes listo.",
    imagePrompt:
      "A consultant presenting a final deliverable that's beautifully packaged like a gift. Attached to it with a ribbon is a small card that says 'P.S. - Here's what else we noticed.' The client receives the deliverable with one hand and is already intrigued by the small card with the other hand. The seed of the next engagement planted in the final deliverable. Elegant handoff visual.",
    altTextEn:
      "Meme about consultants planting the seed for future engagements within the final project deliverable",
    altTextEs:
      "Meme sobre consultores plantando la semilla para futuros engagements dentro del entregable final del proyecto",
    tags: ["engagement-wrap", "business-development", "relationship"],
    status: "planned",
  },
  {
    id: "cn-08",
    roleCategory: "consultant",
    sortOrder: 8,
    titleEn: "Writing Thought Leadership That People Actually Read",
    titleEs: "Escribiendo Liderazgo de Pensamiento Que la Gente Realmente Lee",
    captionEn:
      "There are two types of consulting whitepapers: ones that change thinking and ones that get downloaded once by the author's mom.",
    captionEs:
      "Hay dos tipos de whitepapers de consultoria: los que cambian el pensamiento y los que descarga una vez la mama del autor.",
    beforePhraseEn: "In today's rapidly changing business landscape, companies must embrace digital transformation.",
    beforePhraseEs: "En el panorama empresarial que cambia rapidamente hoy en dia, las empresas deben abrazar la transformacion digital.",
    afterPhraseEn:
      "73% of LATAM manufacturing firms report that English communication gaps cost them an average of $340K annually in delayed contracts and lost partnerships. Here's the data from 200 companies and three strategies that cut that cost in half.",
    afterPhraseEs:
      "El 73% de las empresas manufactureras de LATAM reportan que las brechas de comunicacion en ingles les cuestan un promedio de $340K anuales en contratos retrasados y alianzas perdidas. Aqui estan los datos de 200 empresas y tres estrategias que reducen ese costo a la mitad.",
    imagePrompt:
      "Two thought leadership articles side by side on a screen. Left article starts with 'In today's rapidly changing...' and has 0 reads and 0 shares. Right article starts with a bold statistic and specific data point, and has 12K reads and 340 shares. The engagement metrics tell the story. The difference between generic and specific thought leadership. Content marketing dashboard view.",
    altTextEn:
      "Meme about the difference between generic consulting thought leadership and data-driven content that actually gets read",
    altTextEs:
      "Meme sobre la diferencia entre liderazgo de pensamiento generico de consultoria y contenido basado en datos que realmente se lee",
    tags: ["thought-leadership", "content-marketing", "writing"],
    status: "planned",
  },

  // ========================================================================
  // PRODUCT MANAGER (pd-01 through pd-08)
  // ========================================================================
  {
    id: "pd-01",
    roleCategory: "product-manager",
    sortOrder: 1,
    titleEn: "The Roadmap That Satisfies Nobody",
    titleEs: "El Roadmap Que No Satisface a Nadie",
    captionEn:
      "Sales wants Feature A. Engineering wants to refactor. The CEO wants AI. Your roadmap somehow needs to include all three and ship yesterday.",
    captionEs:
      "Ventas quiere Feature A. Ingenieria quiere refactorizar. El CEO quiere AI. Tu roadmap de alguna manera necesita incluir los tres y lanzar ayer.",
    beforePhraseEn: "We're working on a lot of things. Everything is a priority.",
    beforePhraseEs: "Estamos trabajando en muchas cosas. Todo es prioridad.",
    afterPhraseEn:
      "Our roadmap is organized into three horizons: H1 is enterprise authentication -- it unblocks $800K in pipeline. H2 is the API refactor -- it reduces engineering toil by 40%. H3 is the AI exploration. Here's the data behind the sequencing.",
    afterPhraseEs:
      "Nuestro roadmap esta organizado en tres horizontes: H1 es autenticacion empresarial -- desbloquea $800K en pipeline. H2 es el refactor del API -- reduce el trabajo repetitivo de ingenieria en 40%. H3 es la exploracion de AI. Aqui estan los datos detras de la secuencia.",
    imagePrompt:
      "A product manager standing in front of a roadmap whiteboard. Three stakeholders pull the roadmap in different directions like a tug of war: Sales pulls toward 'FEATURES,' Engineering pulls toward 'TECH DEBT,' and the CEO pulls toward 'AI.' The PM stands in the center holding a framework labeled 'PRIORITIZATION MATRIX' that brings order. The eternal PM balancing act. Modern product office with roadmap boards.",
    altTextEn:
      "Meme about product managers balancing competing stakeholder priorities with data-driven roadmap sequencing",
    altTextEs:
      "Meme sobre product managers balanceando prioridades de stakeholders en competencia con secuenciacion de roadmap basada en datos",
    tags: ["roadmap", "prioritization", "stakeholder-management"],
    status: "planned",
  },
  {
    id: "pd-02",
    roleCategory: "product-manager",
    sortOrder: 2,
    titleEn: "Saying 'No' Without Making Enemies",
    titleEs: "Decir 'No' Sin Crear Enemigos",
    captionEn:
      "The feature request is bad. The person requesting it is your VP. Welcome to product management.",
    captionEs:
      "La solicitud de funcionalidad es mala. La persona que la solicita es tu VP. Bienvenido a product management.",
    beforePhraseEn: "We can't build that. It doesn't make sense for the product.",
    beforePhraseEs: "No podemos construir eso. No tiene sentido para el producto.",
    afterPhraseEn:
      "I appreciate the insight behind this request. The user problem it addresses is real -- let me share what we've learned about how our top users solve it today, and propose an alternative that achieves the same outcome with half the engineering investment.",
    afterPhraseEs:
      "Aprecio la vision detras de esta solicitud. El problema del usuario que aborda es real -- permiteme compartir lo que hemos aprendido sobre como nuestros principales usuarios lo resuelven hoy, y proponer una alternativa que logre el mismo resultado con la mitad de la inversion de ingenieria.",
    imagePrompt:
      "A PM holding a polite 'NO' sign, but the letters are made of soft, friendly material (like pillows or clouds) instead of harsh block letters. Around them, stakeholders look initially surprised but then appreciative because the PM is also holding an alternative solution in the other hand. The soft no with a better yes. Product office with user research on the walls.",
    altTextEn:
      "Meme about product managers declining feature requests diplomatically while offering data-driven alternatives",
    altTextEs:
      "Meme sobre product managers declinando solicitudes de funcionalidades diplomaticamente mientras ofrecen alternativas basadas en datos",
    tags: ["saying-no", "diplomacy", "alternative-solutions"],
    status: "planned",
  },
  {
    id: "pd-03",
    roleCategory: "product-manager",
    sortOrder: 3,
    titleEn: "User Research Readout That Changes Minds",
    titleEs: "Presentacion de Investigacion de Usuarios Que Cambia Mentes",
    captionEn:
      "You interviewed 30 users. The VP still says 'But I think users want...' Based on a sample size of one: themselves.",
    captionEs:
      "Entrevistaste 30 usuarios. El VP todavia dice 'Pero creo que los usuarios quieren...' Basandose en una muestra de uno: ellos mismos.",
    beforePhraseEn: "The users we talked to said they don't like the current feature.",
    beforePhraseEs: "Los usuarios con los que hablamos dijeron que no les gusta la funcionalidad actual.",
    afterPhraseEn:
      "Across 30 user interviews, we found three consistent patterns: 78% abandon the onboarding flow at step 3, the primary reason is form fatigue, and the top-requested improvement is progressive disclosure. Let me play two 30-second clips that illustrate the pattern.",
    afterPhraseEs:
      "A traves de 30 entrevistas con usuarios, encontramos tres patrones consistentes: el 78% abandona el flujo de onboarding en el paso 3, la razon principal es fatiga de formularios, y la mejora mas solicitada es revelacion progresiva. Permitanme reproducir dos clips de 30 segundos que ilustran el patron.",
    imagePrompt:
      "A VP standing at a whiteboard with 'I THINK USERS WANT...' written on it, drawn from pure imagination. Next to them, a PM presents a research board with 30 user interview quotes, data charts, and video clip thumbnails all pointing to the opposite conclusion. The VP's thought bubble slowly changes from their idea to the data-supported finding. Evidence vs. opinion in product decisions. Modern product team room.",
    altTextEn:
      "Meme about product managers using structured research data to counter stakeholder assumptions about user needs",
    altTextEs:
      "Meme sobre product managers usando datos de investigacion estructurados para contrarrestar suposiciones de stakeholders sobre necesidades de usuarios",
    tags: ["user-research", "data-driven", "stakeholder-influence"],
    status: "planned",
  },
  {
    id: "pd-04",
    roleCategory: "product-manager",
    sortOrder: 4,
    titleEn: "Sprint Review: The Good, the Bad, and the 'We'll Fix It Next Sprint'",
    titleEs: "Sprint Review: Lo Bueno, lo Malo, y el 'Lo Arreglaremos el Proximo Sprint'",
    captionEn:
      "The demo works perfectly... on localhost. In staging, it catches fire. The stakeholders are watching.",
    captionEs:
      "La demo funciona perfectamente... en localhost. En staging, se incendia. Los stakeholders estan mirando.",
    beforePhraseEn: "The feature isn't quite ready yet. We had some issues.",
    beforePhraseEs: "La funcionalidad no esta del todo lista todavia. Tuvimos algunos problemas.",
    afterPhraseEn:
      "This sprint we shipped the core authentication flow -- you can see it working here in the demo. We discovered a performance issue in staging that we've already diagnosed. The fix is scoped for the first two days of next sprint, so the release timeline holds.",
    afterPhraseEs:
      "Este sprint lanzamos el flujo principal de autenticacion -- pueden verlo funcionando aqui en la demo. Descubrimos un problema de rendimiento en staging que ya diagnosticamos. La correccion esta programada para los primeros dos dias del proximo sprint, asi que el cronograma de lanzamiento se mantiene.",
    imagePrompt:
      "A sprint review scene: The PM's laptop screen shows a beautiful working demo. But in a tiny picture-in-picture window in the corner (only the PM can see), the staging environment shows red error logs and a loading spinner. The PM presents confidently while their hand subtly covers the corner of the screen. The art of demoing what works. Scrum room with a big screen.",
    altTextEn:
      "Meme about product managers navigating sprint reviews when the demo works locally but staging has issues",
    altTextEs:
      "Meme sobre product managers navegando sprint reviews cuando la demo funciona localmente pero staging tiene problemas",
    tags: ["sprint-review", "demo", "stakeholder-communication"],
    status: "planned",
  },
  {
    id: "pd-05",
    roleCategory: "product-manager",
    sortOrder: 5,
    titleEn: "Competitive Analysis Without Badmouthing the Competition",
    titleEs: "Analisis Competitivo Sin Hablar Mal de la Competencia",
    captionEn:
      "The competitor's product is objectively worse. Saying that out loud, however, makes you look petty instead of strategic.",
    captionEs:
      "El producto del competidor es objetivamente peor. Decirlo en voz alta, sin embargo, te hace ver mezquino en lugar de estrategico.",
    beforePhraseEn: "Their product is worse than ours. We're better.",
    beforePhraseEs: "Su producto es peor que el nuestro. Somos mejores.",
    afterPhraseEn:
      "Our differentiation is strongest in three areas: implementation speed, API flexibility, and dedicated support. Here's a feature-by-feature comparison based on the evaluation criteria our enterprise buyers care about most.",
    afterPhraseEs:
      "Nuestra diferenciacion es mas fuerte en tres areas: velocidad de implementacion, flexibilidad de API, y soporte dedicado. Aqui hay una comparacion funcionalidad por funcionalidad basada en los criterios de evaluacion que mas importan a nuestros compradores empresariales.",
    imagePrompt:
      "Two competitive analysis slides. Left: a crude slide that just says 'COMPETITOR = BAD, US = GOOD' with thumbs up and thumbs down emojis. The audience cringes. Right: a professional feature comparison matrix with specific criteria, scores, and areas where each product excels. The audience nods respectfully. The maturity gap in competitive positioning. Product strategy meeting room.",
    altTextEn:
      "Meme about the difference between petty competitor bashing and strategic competitive positioning based on data",
    altTextEs:
      "Meme sobre la diferencia entre critica mezquina al competidor y posicionamiento competitivo estrategico basado en datos",
    tags: ["competitive-analysis", "positioning", "professionalism"],
    status: "planned",
  },
  {
    id: "pd-06",
    roleCategory: "product-manager",
    sortOrder: 6,
    titleEn: "Launch Communication That Doesn't Overpromise",
    titleEs: "Comunicacion de Lanzamiento Que No Sobrepromete",
    captionEn:
      "Marketing wants 'revolutionary.' Engineering says 'it's a button.' The truth is somewhere in between, and you need to write the launch email.",
    captionEs:
      "Marketing quiere 'revolucionario.' Ingenieria dice 'es un boton.' La verdad esta en algun lugar intermedio, y necesitas escribir el email de lanzamiento.",
    beforePhraseEn: "We're excited to announce our amazing new feature that changes everything!",
    beforePhraseEs: "Estamos emocionados de anunciar nuestra increible nueva funcionalidad que cambia todo!",
    afterPhraseEn:
      "Today we're launching bulk import -- the #1 requested feature from enterprise accounts. It reduces CSV processing time from 45 minutes to under 2 minutes. Here's a 60-second walkthrough and the three workflows it improves.",
    afterPhraseEs:
      "Hoy lanzamos importacion masiva -- la funcionalidad #1 mas solicitada por cuentas empresariales. Reduce el tiempo de procesamiento de CSV de 45 minutos a menos de 2 minutos. Aqui hay un recorrido de 60 segundos y los tres flujos de trabajo que mejora.",
    imagePrompt:
      "A see-saw/balance: On one side, Marketing has stacked superlatives ('REVOLUTIONARY,' 'GAME-CHANGING,' 'GROUNDBREAKING') that weigh the see-saw down dramatically. On the other side, Engineering has placed a small sticky note that says 'we added a button.' The PM sits in the middle of the see-saw, holding the balanced version: 'Saves 43 minutes per import.' The translation layer between hype and reality. Playful office illustration.",
    altTextEn:
      "Meme about product managers finding the honest middle ground between marketing hype and engineering understatement",
    altTextEs:
      "Meme sobre product managers encontrando el punto medio honesto entre el hype de marketing y la subestimacion de ingenieria",
    tags: ["launch-communication", "messaging", "honesty"],
    status: "planned",
  },
  {
    id: "pd-07",
    roleCategory: "product-manager",
    sortOrder: 7,
    titleEn: "Boardroom Nerves: Risks Without the Hand-Waving",
    titleEs: "Nervios de Sala de Juntas: Riesgos Sin el Titubeo",
    captionEn:
      "'Monitoring closely' means nothing. The board wants numbers, plans, and proof you're ahead of it.",
    captionEs:
      "'Monitoreando de cerca' no significa nada. La junta quiere numeros, planes, y prueba de que estas adelante.",
    beforePhraseEn: "There are a few risks we're monitoring closely.",
    beforePhraseEs: "Hay algunos riesgos que estamos monitoreando de cerca.",
    afterPhraseEn:
      "Three risks identified. Mitigation plans already activated.",
    afterPhraseEs:
      "Tres riesgos identificados. Planes de mitigacion ya activados.",
    imagePrompt:
      "Split panel cartoon in a boardroom. Left (Before): A product manager nervously presenting to a skeptical executive, saying 'There are a few risks we're monitoring closely' — the executive looks unimpressed. Right (After): Same PM, confident and composed, saying 'Three risks identified. Mitigation plans already activated.' — the executive nods approvingly. Yellow Before/After header banner, professional cartoon style.",
    altTextEn:
      "Before and after meme of a product manager presenting risks in the boardroom — from vague hand-waving to specific and actionable",
    altTextEs:
      "Meme de antes y despues de un product manager presentando riesgos en la sala de juntas — de titubeos vagos a especificos y accionables",
    tags: ["boardroom", "risk-communication", "executive-presence"],
    status: "planned",
  },
  {
    id: "pd-08",
    roleCategory: "product-manager",
    sortOrder: 8,
    titleEn: "Aligning Engineering and Design When They Disagree",
    titleEs: "Alineando Ingenieria y Diseno Cuando No Estan de Acuerdo",
    captionEn:
      "Design wants pixel-perfect. Engineering wants ship-fast. You're the translator between two people who both think the other doesn't understand.",
    captionEs:
      "Diseno quiere pixel-perfect. Ingenieria quiere lanzar rapido. Tu eres el traductor entre dos personas que ambas creen que la otra no entiende.",
    beforePhraseEn: "You both need to compromise. Just figure it out.",
    beforePhraseEs: "Ambos necesitan comprometerse. Solo resuelvanlo.",
    afterPhraseEn:
      "I hear both perspectives. Design, the interaction quality matters because it drives adoption. Engineering, the ship date matters because enterprise clients are waiting. Here's a proposal: we ship V1 with the core flow on Thursday, and iterate on the micro-interactions in the fast-follow release next week. Both quality and speed are preserved.",
    afterPhraseEs:
      "Escucho ambas perspectivas. Diseno, la calidad de la interaccion importa porque impulsa la adopcion. Ingenieria, la fecha de lanzamiento importa porque los clientes empresariales estan esperando. Aqui hay una propuesta: lanzamos V1 con el flujo principal el jueves, e iteramos en las micro-interacciones en el release de seguimiento la proxima semana. Tanto la calidad como la velocidad se preservan.",
    imagePrompt:
      "A PM standing between a designer holding a beautiful but complex mockup and an engineer holding a simple but functional prototype. The PM holds up a third option that combines the best of both: the designer's core experience with the engineer's pragmatic scope. Both the designer and engineer look at it and grudgingly nod in approval. The PM as translator between craft and velocity. Product team workspace with design tools and code editors visible.",
    altTextEn:
      "Meme about product managers mediating between design perfectionism and engineering pragmatism with phased delivery",
    altTextEs:
      "Meme sobre product managers mediando entre el perfeccionismo de diseno y el pragmatismo de ingenieria con entrega por fases",
    tags: ["cross-functional", "alignment", "compromise"],
    status: "planned",
  },
];
