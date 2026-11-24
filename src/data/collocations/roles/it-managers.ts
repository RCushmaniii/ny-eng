import type { RoleGroup } from "./types";

export const groups: RoleGroup[] = [
  {
    title: ["Incidents and outages", "Incidentes y caídas de servicio"],
    rule: [
      "A duty or a surface that takes the hit uses <b>on</b>: <em>on call</em>, <em>an impact on customers</em>. A ticket moves up <b>to</b> a person, and a cause is always the cause <b>of</b> something. Verbs that act directly on their object (<em>discuss</em>, <em>affect</em>) take nothing.",
      "Una guardia o la superficie que recibe el golpe usan <b>on</b>: <em>on call</em>, <em>an impact on customers</em>. Un ticket sube <b>to</b> una persona, y una causa siempre es la causa <b>of</b> algo. Los verbos que actúan directo sobre su objeto (<em>discuss</em>, <em>affect</em>) no llevan nada.",
    ],
    items: [
      {
        q: "Be ______ call",
        hint: ["(available for emergencies)", "(disponible para emergencias)"],
        k: ["on"],
        ex: "I'm <em>on call</em> this weekend, so page me if the database goes down.",
        trap: [
          "<span class='x'>✗</span> <em>I'm in call</em> or <em>I'm of guard</em>. Spanish <em>estar de guardia</em> has no English twin; the fixed phrase is <b>on</b> call. <em>On a call</em> (with the article) means you are in a meeting right now.",
          "<span class='x'>✗</span> <em>I'm in call</em> o <em>I'm of guard</em>. <em>Estar de guardia</em> no se traduce palabra por palabra; la frase fija es <b>on</b> call. <em>On a call</em> (con artículo) significa que estás en una llamada en este momento.",
        ],
      },
      {
        q: "Escalate the ticket ______ a senior engineer",
        k: ["to"],
        ex: "The help desk <em>escalated the ticket to</em> the network team after twenty minutes.",
        note: [
          "The thing you escalate comes first, then <b>to</b> + the person or level: <em>escalate it to tier two</em>.",
          "Primero va lo que escalas y después <b>to</b> + la persona o el nivel: <em>escalate it to tier two</em>.",
        ],
      },
      {
        q: "Discuss ______ the outage",
        k: ["none"],
        ex: "We'll <em>discuss the outage</em> in tomorrow's postmortem, not in this channel.",
        trap: [
          "<span class='x'>✗</span> <em>discuss about the outage</em>. Spanish <em>hablar de</em> and <em>discutir sobre</em> pull you toward <b>about</b>, but <em>discuss</em> takes a direct object. <em>Talk <b>about</b> the outage</em> is the version with a preposition.",
          "<span class='x'>✗</span> <em>discuss about the outage</em>. <em>Hablar de</em> y <em>discutir sobre</em> te jalan hacia <b>about</b>, pero <em>discuss</em> lleva objeto directo. La versión con preposición es <em>talk <b>about</b> the outage</em>.",
        ],
      },
      {
        q: "The root cause ______ the outage",
        k: ["of"],
        ex: "<em>The root cause of the outage</em> was an expired certificate on the load balancer.",
        note: [
          "<em>Cause</em> takes <b>of</b>; <em>reason</em> takes <b>for</b>: <em>the reason for the delay</em>.",
          "<em>Cause</em> lleva <b>of</b>; <em>reason</em> lleva <b>for</b>: <em>the reason for the delay</em>.",
        ],
      },
      {
        q: "Fail ______ to the backup site",
        k: ["over"],
        ex: "The primary data center lost power and we <em>failed over to the backup site</em> in under five minutes.",
      },
      {
        q: "Have an impact ______ customers",
        k: ["on"],
        ex: "The outage <em>had an impact on</em> about two hundred customers in the Monterrey region.",
        trap: [
          "<span class='x'>✗</span> <em>an impact in customers</em>. Spanish <em>impacto en</em> suggests <b>in</b>; English sees the impact landing <b>on</b> something.",
          "<span class='x'>✗</span> <em>an impact in customers</em>. <em>Impacto en</em> sugiere <b>in</b>; en inglés el impacto cae <b>on</b> algo.",
        ],
      },
      {
        q: "Affect ______ the users",
        k: ["none"],
        ex: "The patch window will <em>affect the users</em> in the Guadalajara office for about an hour.",
        note: [
          "The verb <em>affect</em> takes a direct object. The noun phrase takes <b>on</b>: <em>an effect on the users</em>.",
          "El verbo <em>affect</em> lleva objeto directo, sin la <em>a</em> personal del español. El sustantivo sí lleva <b>on</b>: <em>an effect on the users</em>.",
        ],
      },
    ],
  },
  {
    title: ["Projects, roadmaps and deadlines", "Proyectos, roadmaps y fechas de entrega"],
    rule: [
      "Think of the plan as a line. You are <b>on</b> it (<em>on track</em>, <em>on time</em>), <b>behind</b> it, or <b>out of</b> it (<em>out of scope</em>). A move has a destination, so it takes <b>to</b>.",
      "Piensa en el plan como una línea. Estás <b>on</b> ella (<em>on track</em>, <em>on time</em>), <b>behind</b> ella o <b>out of</b> ella (<em>out of scope</em>). Un cambio tiene destino, así que lleva <b>to</b>.",
    ],
    items: [
      {
        q: "Be ______ schedule",
        hint: ["(late)", "(con retraso)"],
        k: ["behind"],
        ex: "The migration is two weeks <em>behind schedule</em> because the hardware arrived late.",
        note: [
          "The opposite is <em>ahead of schedule</em>. No article in either one.",
          "Lo contrario es <em>ahead of schedule</em>. Ninguna de las dos lleva artículo.",
        ],
      },
      {
        q: "Be ______ track",
        hint: ["(progressing as planned)", "(avanzando según el plan)"],
        k: ["on"],
        ex: "The rollout is <em>on track</em> for the end of the quarter.",
      },
      {
        q: "Deliver ______ time",
        hint: ["(exactly as scheduled)", "(justo en la fecha acordada)"],
        k: ["on"],
        ex: "If the vendor doesn't <em>deliver on time</em>, the whole cutover slips.",
        trap: [
          "<span class='x'>✗</span> <em>deliver at time</em> or <em>deliver to time</em>. Spanish <em>a tiempo</em> suggests <b>at</b> or <b>to</b>; punctual is <b>on</b> time. <em>In time</em> means early enough for something: <em>in time for the audit</em>.",
          "<span class='x'>✗</span> <em>deliver at time</em> o <em>deliver to time</em>. <em>A tiempo</em> sugiere <b>at</b> o <b>to</b>; puntual es <b>on</b> time. <em>In time</em> significa con suficiente anticipación para algo: <em>in time for the audit</em>.",
        ],
      },
      {
        q: "Sign off ______ the plan",
        k: ["on"],
        ex: "The steering committee has to <em>sign off on the plan</em> before we order anything.",
        note: [
          "<em>Sign off on</em> means to give formal approval. It needs both words: <b>off</b> and <b>on</b>.",
          "<em>Sign off on</em> significa dar la aprobación formal. Necesita las dos palabras: <b>off</b> y <b>on</b>.",
        ],
      },
      {
        q: "Meet ______ the deadline",
        k: ["none"],
        ex: "We can <em>meet the deadline</em> if we freeze the requirements today.",
        trap: [
          "<span class='x'>✗</span> <em>meet with the deadline</em> or <em>comply with the deadline</em>. Spanish <em>cumplir con la fecha</em> adds <b>with</b>; in English you simply <em>meet</em> or <em>miss</em> a deadline.",
          "<span class='x'>✗</span> <em>meet with the deadline</em> o <em>comply with the deadline</em>. <em>Cumplir con la fecha</em> agrega <b>with</b>; en inglés simplemente dices <em>meet</em> o <em>miss a deadline</em>.",
        ],
      },
      {
        q: "Migrate ______ the cloud",
        k: ["to"],
        ex: "We plan to <em>migrate to the cloud</em> in three phases, starting with email.",
      },
      {
        q: "Be ______ scope",
        hint: ["(not part of the project; two words)", "(fuera del proyecto; dos palabras)"],
        k: ["out of"],
        ex: "Replacing the phone system is <em>out of scope</em> for this fiscal year.",
        note: [
          "The opposite is <em>in scope</em>. Both are said without an article.",
          "Lo contrario es <em>in scope</em>. Las dos se dicen sin artículo.",
        ],
      },
    ],
  },
  {
    title: ["Vendors, contracts and budget", "Proveedores, contratos y presupuesto"],
    rule: [
      "Money goes <b>for</b> what you receive and <b>on</b> the category you spend it in. A limit you pass is <b>over</b>; an agreement that binds you is <b>under</b>. Something you receive comes <b>from</b> its source.",
      "El dinero va <b>for</b> lo que recibes y <b>on</b> el rubro en el que lo gastas. Un límite que rebasas es <b>over</b>; un acuerdo que te obliga es <b>under</b>. Lo que recibes viene <b>from</b> su origen.",
    ],
    items: [
      {
        q: "Contact ______ the vendor",
        k: ["none"],
        ex: "Please <em>contact the vendor</em> today and ask when the replacement switch ships.",
        trap: [
          "<span class='x'>✗</span> <em>contact with the vendor</em> or <em>contact to the vendor</em>. Spanish <em>contactar a</em> and <em>ponerse en contacto con</em> add a preposition; the English verb takes a direct object. The noun does take it: <em>be in contact <b>with</b> the vendor</em>.",
          "<span class='x'>✗</span> <em>contact with the vendor</em> o <em>contact to the vendor</em>. <em>Contactar a</em> y <em>ponerse en contacto con</em> agregan preposición; el verbo en inglés lleva objeto directo. El sustantivo sí la lleva: <em>be in contact <b>with</b> the vendor</em>.",
        ],
      },
      {
        q: "Be ______ budget",
        hint: ["(spending more than planned)", "(gastando más de lo planeado)"],
        k: ["over"],
        ex: "We're already ten percent <em>over budget</em> on cloud hosting this quarter.",
      },
      {
        q: "Be ______ contract",
        hint: ["(bound by a signed agreement)", "(obligado por un acuerdo firmado)"],
        k: ["under"],
        ex: "We're <em>under contract</em> with that provider until March, so switching now would cost us a penalty.",
        note: [
          "Same logic in <em>under warranty</em> and <em>under a service agreement</em>: the document sits over you.",
          "La misma lógica aplica en <em>under warranty</em> y <em>under a service agreement</em>: el documento está por encima de ti.",
        ],
      },
      {
        q: "Pay ______ a license",
        k: ["for"],
        ex: "We <em>pay for</em> forty licenses and only use twenty-eight.",
        trap: [
          "<span class='x'>✗</span> <em>pay a license</em>. Spanish <em>pagar una licencia</em> has no preposition. In English you <em>pay</em> a bill, an invoice or a person, but you <em>pay <b>for</b></em> the thing you get.",
          "<span class='x'>✗</span> <em>pay a license</em>. <em>Pagar una licencia</em> no lleva preposición. En inglés dices <em>pay</em> a bill, an invoice o a una persona, pero <em>pay <b>for</b></em> lo que recibes.",
        ],
      },
      {
        q: "Spend money ______ licenses",
        k: ["on"],
        ex: "We <em>spend</em> more <em>money on licenses</em> than on hardware.",
        trap: [
          "<span class='x'>✗</span> <em>spend money in licenses</em>. Spanish <em>gastar en</em> suggests <b>in</b>; English spends money and time <b>on</b> things.",
          "<span class='x'>✗</span> <em>spend money in licenses</em>. <em>Gastar en</em> sugiere <b>in</b>; en inglés el dinero y el tiempo se gastan <b>on</b> algo.",
        ],
      },
      {
        q: "Request a quote ______ the vendor",
        k: ["from"],
        ex: "I <em>requested a quote from</em> three vendors so procurement can compare them.",
      },
      {
        q: "Phase ______ a legacy tool",
        hint: ["(retire it gradually)", "(retirarla poco a poco)"],
        k: ["out"],
        ex: "We're going to <em>phase out</em> the old ticketing system by the end of the year.",
        note: [
          "The opposite is <em>phase in</em>: introduce something in stages.",
          "Lo contrario es <em>phase in</em>: introducir algo por etapas.",
        ],
      },
    ],
  },
  {
    title: ["Security, access and compliance", "Seguridad, accesos y cumplimiento"],
    rule: [
      "The noun <em>access</em> points <b>to</b> a target, and so does a weakness (<em>vulnerable to</em>). The verb <em>access</em> takes nothing. Rules are something you go along <b>with</b>, and being shut outside is <b>out of</b>.",
      "El sustantivo <em>access</em> apunta <b>to</b> un destino, igual que una debilidad (<em>vulnerable to</em>). El verbo <em>access</em> no lleva nada. Las reglas son algo que acompañas <b>with</b>, y quedarte afuera es <b>out of</b>.",
    ],
    items: [
      {
        q: "Access ______ the server",
        k: ["none"],
        ex: "Contractors can only <em>access the server</em> through the company network.",
        trap: [
          "<span class='x'>✗</span> <em>access to the server</em> as a verb. Spanish <em>acceder a</em> pulls you toward <b>to</b>; the English verb takes a direct object. The noun does take it: <em>get access <b>to</b> the server</em>.",
          "<span class='x'>✗</span> <em>access to the server</em> como verbo. <em>Acceder a</em> te jala hacia <b>to</b>; el verbo en inglés lleva objeto directo. El sustantivo sí lo lleva: <em>get access <b>to</b> the server</em>.",
        ],
      },
      {
        q: "Give someone access ______ the system",
        k: ["to"],
        ex: "Can you <em>give</em> the new analyst <em>access to the system</em> before her first day?",
        note: [
          "Here <em>access</em> is a noun, so <b>to</b> is required. Compare the verb: <em>she can access the system</em>.",
          "Aquí <em>access</em> es sustantivo, así que <b>to</b> es obligatorio. Compáralo con el verbo: <em>she can access the system</em>.",
        ],
      },
      {
        q: "Comply ______ the policy",
        k: ["with"],
        ex: "Every laptop has to <em>comply with the policy</em> on disk encryption before it leaves the building.",
        trap: [
          "<span class='x'>✗</span> <em>comply the policy</em> or <em>comply to the policy</em>. Spanish allows <em>cumplir la política</em> with no preposition; <em>comply</em> always needs <b>with</b>. The same goes for the noun: <em>in compliance <b>with</b></em>.",
          "<span class='x'>✗</span> <em>comply the policy</em> o <em>comply to the policy</em>. En español puedes decir <em>cumplir la política</em> sin preposición; <em>comply</em> siempre necesita <b>with</b>. Lo mismo pasa con el sustantivo: <em>in compliance <b>with</b></em>.",
        ],
      },
      {
        q: "Be vulnerable ______ attacks",
        k: ["to"],
        ex: "Any server we haven't patched is <em>vulnerable to</em> that kind of attack.",
      },
      {
        q: "Encrypt data ______ rest",
        hint: ["(while it is stored)", "(mientras está almacenada)"],
        k: ["at"],
        ex: "The auditors want proof that we <em>encrypt data at rest</em> on every backup, per the ISO 27001 checklist.",
        note: [
          "The matching phrase for data that is moving is <em>in transit</em>: <em>encrypted at rest and in transit</em>.",
          "La frase para los datos en movimiento es <em>in transit</em>: <em>encrypted at rest and in transit</em>.",
        ],
      },
      {
        q: "Be locked ______ an account",
        hint: ["(unable to get in; two words)", "(sin poder entrar; dos palabras)"],
        k: ["out of"],
        ex: "Half the sales team was <em>locked out of</em> their accounts after the password reset.",
      },
      {
        q: "Back ______ the data",
        hint: ["(make a copy)", "(hacer una copia)"],
        k: ["up"],
        ex: "We <em>back up the data</em> every night and test a restore once a month.",
        note: [
          "Two words for the verb (<em>back up the data</em>), one word for the noun (<em>a nightly backup</em>).",
          "Dos palabras para el verbo (<em>back up the data</em>), una sola para el sustantivo (<em>a nightly backup</em>).",
        ],
      },
    ],
  },
  {
    title: ["The team and the stakeholders", "El equipo y los stakeholders"],
    rule: [
      "Information travels <b>to</b> a person and is <b>on</b> a subject. Being included is <b>in</b>; agreeing in direction is <b>with</b>. Verbs like <em>join</em> go straight to their object.",
      "La información viaja <b>to</b> una persona y trata <b>on</b> un tema. Estar incluido es <b>in</b>; ir en la misma dirección es <b>with</b>. Verbos como <em>join</em> van directo a su objeto.",
    ],
    items: [
      {
        q: "Join ______ the call",
        k: ["none"],
        ex: "Can you <em>join the call</em> at ten? The CFO has questions about the renewal.",
        trap: [
          "<span class='x'>✗</span> <em>join to the call</em>. Spanish <em>unirse a</em> pulls you toward <b>to</b>; <em>join</em> takes a direct object, for calls, meetings and teams alike.",
          "<span class='x'>✗</span> <em>join to the call</em>. <em>Unirse a</em> te jala hacia <b>to</b>; <em>join</em> lleva objeto directo, igual para llamadas, juntas y equipos.",
        ],
      },
      {
        q: "Keep stakeholders ______ the loop",
        k: ["in"],
        ex: "Please <em>keep</em> finance <em>in the loop</em> on anything that changes the budget.",
      },
      {
        q: "Give someone feedback ______ their work",
        k: ["on"],
        ex: "I <em>gave</em> her <em>feedback on</em> the incident report before it went to the directors.",
      },
      {
        q: "Get a new hire ______ to speed",
        k: ["up"],
        ex: "It takes about a month to <em>get a new hire up to speed</em> on our network.",
      },
      {
        q: "Align ______ the business priorities",
        k: ["with", "to"],
        ex: "The roadmap has to <em>align with</em> the business priorities, not just with what the team finds interesting.",
      },
      {
        q: "Push ______ on a request",
        hint: ["(resist it)", "(resistirte a ella)"],
        k: ["back"],
        ex: "I had to <em>push back on</em> the request to launch before the security review.",
        note: [
          "<em>Push back on</em> is the polite, professional way to say you disagree with a request or a date.",
          "<em>Push back on</em> es la manera cortés y profesional de decir que no estás de acuerdo con una petición o una fecha.",
        ],
      },
      {
        q: "Explain the change ______ the team",
        k: ["to"],
        ex: "I'll <em>explain the change to the team</em> at Monday's staff meeting.",
        trap: [
          "<span class='x'>✗</span> <em>explain the team the change</em> or <em>explain me</em>. Spanish <em>explícame</em> makes this feel natural, but <em>explain</em> needs <b>to</b> before the person: <em>explain it <b>to</b> me</em>.",
          "<span class='x'>✗</span> <em>explain the team the change</em> o <em>explain me</em>. <em>Explícame</em> hace que suene natural, pero <em>explain</em> necesita <b>to</b> antes de la persona: <em>explain it <b>to</b> me</em>.",
        ],
      },
    ],
  },
];
