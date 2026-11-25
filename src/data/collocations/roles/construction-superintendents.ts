import type { RoleGroup } from "./types";

// Construction superintendents: prepositions from the jobsite, the subcontractor call,
// the inspection, the update to leadership and the final walkthrough with the homeowner.

export const groups: RoleGroup[] = [
  {
    title: ["The Schedule and the Jobsite", "El programa y la obra"],
    rule: [
      "The schedule is a line you are <b>on</b>, <b>behind</b> or <b>ahead of</b>; when you slip you <em>fall behind</em> it, and when you recover you get back <b>on</b> track. You are <b>on</b> site. A deadline takes <b>by</b>, and paused work is <b>on</b> hold.",
      "El programa es una línea en la que estás <b>on</b>, <b>behind</b> o <b>ahead of</b>; cuando te atrasas, <em>you fall behind</em>, y cuando te recuperas, vuelves <b>on</b> track. En la obra estás <b>on</b> site. Una fecha límite lleva <b>by</b>, y el trabajo en pausa está <b>on</b> hold.",
    ],
    items: [
      {
        q: "Be ______ site",
        k: ["on"],
        hint: ["(at the jobsite)", "(en la obra)"],
        ex: "I'm <em>on site</em> by six every morning, before the first crew shows up.",
        trap: [
          "<span class='x'>✗</span> <em>I'm in site</em>. Spanish <em>en la obra</em> pulls you toward <b>in</b>; the fixed phrase is <b>on site</b>. <em>At the site</em> is also correct.",
          "<span class='x'>✗</span> <em>I'm in site</em>. <em>En la obra</em> te jala hacia <b>in</b>; la frase fija es <b>on site</b>. <em>At the site</em> también es correcto.",
        ],
      },
      {
        q: "Fall ______ schedule",
        k: ["behind"],
        ex: "We <em>fell behind schedule</em> when the lumber delivery slipped a week.",
        note: [
          "The three positions: <b>on schedule</b>, <b>behind schedule</b>, <b>ahead of schedule</b>. Only <b>ahead</b> needs <b>of</b>.",
          "Las tres posiciones: <b>on schedule</b>, <b>behind schedule</b>, <b>ahead of schedule</b>. Solo <b>ahead</b> necesita <b>of</b>.",
        ],
      },
      {
        q: "Be two weeks ahead ______ schedule",
        k: ["of"],
        ex: "The townhomes in phase two are <em>two weeks ahead of schedule</em>.",
        trap: [
          "<span class='x'>✗</span> <em>ahead the schedule</em>. <b>Behind</b> takes its object directly, but <b>ahead</b> always needs <b>of</b>.",
          "<span class='x'>✗</span> <em>ahead the schedule</em>. <b>Behind</b> lleva el objeto directo, pero <b>ahead</b> siempre necesita <b>of</b>.",
        ],
      },
      {
        q: "Get back ______ track",
        k: ["on"],
        ex: "If the drywall crew works Saturday, we <em>get back on track</em> by the end of the month.",
      },
      {
        q: "Be finished ______ Friday",
        k: ["by"],
        hint: ["(a deadline)", "(una fecha límite)"],
        ex: "Framing has to be <em>finished by Friday</em> so the roofers can start Monday.",
        trap: [
          "<span class='x'>✗</span> <em>finished until Friday</em> · <span class='x'>✗</span> <em>finished for Friday</em>. Spanish <em>para el viernes</em> and <em>hasta el viernes</em> mislead you. A deadline is <b>by</b>; <b>until</b> is for something that continues up to that point: <em>the crew is here until Friday</em>.",
          "<span class='x'>✗</span> <em>finished until Friday</em> · <span class='x'>✗</span> <em>finished for Friday</em>. <em>Para el viernes</em> y <em>hasta el viernes</em> te confunden. Una fecha límite es <b>by</b>; <b>until</b> es para algo que continúa hasta ese momento: <em>the crew is here until Friday</em>.",
        ],
      },
      {
        q: "Be ______ hold",
        k: ["on"],
        hint: ["(paused)", "(en pausa)"],
        ex: "The kitchen on Lot 9 is <em>on hold</em> until the homeowner picks the countertops.",
      },
      {
        q: "Wait ______ the windows",
        k: ["on", "for"],
        ex: "We're <em>waiting on the windows</em> before we can close in the house.",
        note: [
          "On an American jobsite, <b>wait on</b> is everyday speech for a delivery or a trade you depend on. <b>Wait for</b> is correct everywhere and in writing.",
          "En una obra en Estados Unidos, <b>wait on</b> es lo normal al hablar de una entrega o de un oficio del que dependes. <b>Wait for</b> es correcto en cualquier contexto y por escrito.",
        ],
      },
    ],
  },
  {
    title: ["Subcontractors and Crews", "Subcontratistas y cuadrillas"],
    rule: [
      "You lean <b>on</b> the people you trust and you are responsible <b>for</b> what is yours. Work goes <b>to</b> the crew that gets it, you follow up <b>with</b> a person, and you hold a sub <b>to</b> the standard they agreed to.",
      "Te apoyas <b>on</b> la gente en la que confías y eres responsable <b>for</b> lo que te toca. El trabajo va <b>to</b> la cuadrilla que lo recibe, das seguimiento <b>with</b> una persona y, con <b>hold to</b>, le exiges a un subcontratista el estándar que aceptó.",
    ],
    items: [
      {
        q: "Rely ______",
        k: ["on"],
        hint: ["(a crew you trust)", "(una cuadrilla de confianza)"],
        ex: "I <em>rely on</em> the same framing crew for every house in this phase.",
        trap: [
          "<span class='x'>✗</span> <em>rely in the crew</em>. Spanish <em>confiar en</em> pulls you toward <b>in</b>; English uses <b>rely on</b> and <b>count on</b>.",
          "<span class='x'>✗</span> <em>rely in the crew</em>. <em>Confiar en</em> te jala hacia <b>in</b>; en inglés es <b>rely on</b> y <b>count on</b>.",
        ],
      },
      {
        q: "Be responsible ______",
        k: ["for"],
        ex: "The roofer is <em>responsible for</em> the flashing around the chimney.",
        trap: [
          "<span class='x'>✗</span> <em>responsible of the flashing</em>. Spanish <em>responsable de</em> pulls you toward <b>of</b>; English uses <b>for</b>.",
          "<span class='x'>✗</span> <em>responsible of the flashing</em>. <em>Responsable de</em> te jala hacia <b>of</b>; en inglés es <b>for</b>.",
        ],
      },
      {
        q: "Deal ______",
        k: ["with"],
        hint: ["(people or problems)", "(personas o problemas)"],
        ex: "On a single house I <em>deal with</em> about fourteen different subs.",
      },
      {
        q: "Follow up ______",
        k: ["with"],
        hint: ["(a person)", "(una persona)"],
        ex: "I'll <em>follow up with</em> the plumber today about the leak in the primary bath.",
        note: [
          "The person takes <b>with</b>; the issue takes <b>on</b> or <b>about</b>: <em>follow up on the leak</em>.",
          "La persona lleva <b>with</b>; el asunto lleva <b>on</b> o <b>about</b>: <em>follow up on the leak</em>.",
        ],
      },
      {
        q: "Assign the trim work ______ a crew",
        k: ["to"],
        ex: "I <em>assigned the trim work to</em> the second crew so the first can start on Lot 12.",
      },
      {
        q: "Show up ______ time",
        k: ["on"],
        ex: "When one crew doesn't <em>show up on time</em>, every trade after them loses a day.",
        trap: [
          "<span class='x'>✗</span> <em>show up at time</em>. Spanish <em>a tiempo</em> does not map to <b>at</b>. Punctual is <b>on time</b>.",
          "<span class='x'>✗</span> <em>show up at time</em>. <em>A tiempo</em> no se traduce con <b>at</b>. Puntual es <b>on time</b>.",
        ],
      },
      {
        q: "Hold the sub ______ the spec",
        k: ["to"],
        ex: "If the tile lines aren't straight, I <em>hold the sub to the spec</em> and they redo it.",
        note: [
          "<b>Hold someone to</b> means you make them do what they agreed to: <em>hold them to the contract</em>, <em>hold them to the schedule</em>.",
          "<b>Hold someone to</b> significa exigirle a alguien lo que aceptó: <em>hold them to the contract</em>, <em>hold them to the schedule</em>.",
        ],
      },
    ],
  },
  {
    title: ["Inspections, Code and Safety", "Inspecciones, normas y seguridad"],
    rule: [
      "The house has to meet a standard: it is <b>up to</b> code and it complies <b>with</b> the rules. You get a permit <b>for</b> the work and schedule the inspection <b>with</b> the city. <b>Pass</b> and <b>fail</b> take the inspection directly, with no preposition.",
      "La casa tiene que cumplir un estándar: está <b>up to</b> code y cumple <b>with</b> las reglas. Sacas un permiso <b>for</b> el trabajo y agendas la inspección <b>with</b> el municipio. <b>Pass</b> y <b>fail</b> llevan la inspección directo, sin preposición.",
    ],
    items: [
      {
        q: "Be up ______ code",
        k: ["to"],
        ex: "The inspector said the deck railing isn't <em>up to code</em>.",
        note: [
          "To fix it, you <b>bring</b> it <b>up to code</b>.",
          "Para corregirlo, se usa <b>bring</b>: <em>bring it up to code</em>.",
        ],
      },
      {
        q: "Pass ______ the framing inspection",
        k: ["none"],
        ex: "The house <em>passed the framing inspection</em> on the first try.",
        note: [
          "The opposite works the same way: <em>it failed the electrical inspection</em>.",
          "Lo contrario funciona igual: <em>it failed the electrical inspection</em>.",
        ],
      },
      {
        q: "Schedule an inspection ______",
        k: ["with"],
        hint: ["(the city)", "(el municipio)"],
        ex: "I <em>scheduled an inspection with</em> the city for Thursday morning.",
      },
      {
        q: "Get a permit ______",
        k: ["for"],
        hint: ["(the work)", "(el trabajo)"],
        ex: "We have to <em>get a permit for</em> the retaining wall before we dig.",
        note: [
          "The office that issues it takes <b>from</b>: <em>a permit from the county for the retaining wall</em>.",
          "La oficina que lo emite lleva <b>from</b>: <em>a permit from the county for the retaining wall</em>.",
        ],
      },
      {
        q: "Comply ______",
        k: ["with"],
        hint: ["(safety rules)", "(reglas de seguridad)"],
        ex: "Every guardrail on site has to <em>comply with</em> OSHA rules.",
        trap: [
          "<span class='x'>✗</span> <em>comply the rules</em>. Spanish <em>cumplir las reglas</em> takes a direct object; English <b>comply</b> needs <b>with</b>.",
          "<span class='x'>✗</span> <em>comply the rules</em>. <em>Cumplir las reglas</em> lleva objeto directo; en inglés <b>comply</b> necesita <b>with</b>.",
        ],
      },
      {
        q: "Be exposed ______",
        k: ["to"],
        hint: ["(a hazard)", "(un riesgo)"],
        ex: "Nobody should be <em>exposed to</em> silica dust without a respirator.",
      },
      {
        q: "Point ______ a problem",
        k: ["out"],
        ex: "The inspector <em>pointed out</em> two missing nail plates in the hallway.",
      },
    ],
  },
  {
    title: ["Reporting to Leadership", "Reportar a la dirección"],
    rule: [
      "You report <b>to</b> a person and explain things <b>to</b> them. Money sits <b>over</b>, <b>under</b> or <b>on</b> budget, and a cost accounts <b>for</b> part of it. You sign off <b>on</b> a decision, you are <b>in</b> charge of your houses, and you keep people <b>in</b> the loop.",
      "Le reportas <b>to</b> una persona y le explicas las cosas <b>to</b> ella. El dinero queda <b>over</b>, <b>under</b> u <b>on</b> budget, y un costo <em>accounts</em> <b>for</b> una parte. Apruebas una decisión con <b>sign off on</b>, estás <b>in</b> charge de tus casas y mantienes a la gente <b>in</b> the loop.",
    ],
    items: [
      {
        q: "Report ______",
        k: ["to"],
        hint: ["(your boss)", "(tu jefe)"],
        ex: "I <em>report to</em> the VP of construction for the whole region.",
        note: [
          "The topic takes <b>on</b>: <em>I report on progress every Friday</em>.",
          "El tema lleva <b>on</b>: <em>I report on progress every Friday</em>.",
        ],
      },
      {
        q: "Explain the delay ______ leadership",
        k: ["to"],
        ex: "I <em>explained the delay to leadership</em> on this morning's call.",
        trap: [
          "<span class='x'>✗</span> <em>explain leadership the delay</em> · <span class='x'>✗</span> <em>explain me</em>. Spanish <em>explicarle algo a alguien</em> puts the person first. English puts the thing first and the person after <b>to</b>.",
          "<span class='x'>✗</span> <em>explain leadership the delay</em> · <span class='x'>✗</span> <em>explain me</em>. En español dices <em>explicarle algo a alguien</em> con la persona primero. En inglés va primero la cosa y la persona después de <b>to</b>.",
        ],
      },
      {
        q: "Come in ______ budget",
        k: ["over"],
        hint: ["(more than planned)", "(más de lo planeado)"],
        ex: "The landscaping on Lot 6 <em>came in over budget</em> by eleven thousand dollars.",
        note: [
          "The others: <b>under budget</b> (less), <b>on budget</b> or <b>within budget</b> (as planned).",
          "Las demás: <b>under budget</b> (menos), <b>on budget</b> o <b>within budget</b> (según lo planeado).",
        ],
      },
      {
        q: "Account ______",
        k: ["for"],
        hint: ["(part of a total)", "(una parte del total)"],
        ex: "The extra framing labor <em>accounts for</em> most of the overrun.",
      },
      {
        q: "Sign off ______",
        k: ["on"],
        hint: ["(a change order)", "(una orden de cambio)"],
        ex: "The owner has to <em>sign off on</em> the change order before we order the cabinets.",
      },
      {
        q: "Be ______ charge of",
        k: ["in"],
        ex: "I'm <em>in charge of</em> four houses in this phase.",
        trap: [
          "<span class='x'>✗</span> <em>on charge of</em> · <span class='x'>✗</span> <em>at charge of</em>. Spanish <em>a cargo de</em> suggests <b>at</b> or <b>on</b>; English uses <b>in charge of</b>.",
          "<span class='x'>✗</span> <em>on charge of</em> · <span class='x'>✗</span> <em>at charge of</em>. <em>A cargo de</em> sugiere <b>at</b> u <b>on</b>; en inglés es <b>in charge of</b>.",
        ],
      },
      {
        q: "Keep leadership ______ the loop",
        k: ["in"],
        ex: "I <em>keep leadership in the loop</em> with a short update every Friday.",
      },
    ],
  },
  {
    title: ["The Homeowner and the Handover", "El cliente y la entrega"],
    rule: [
      "You take the buyer <b>through</b> the house and hand the keys <b>over</b>. You respond <b>to</b> a concern, take care <b>of</b> it, and pay attention <b>to</b> detail. The family moves <b>in</b>, and what breaks later is covered <b>by</b> the warranty.",
      "Llevas al comprador <b>through</b> la casa y entregas las llaves con <b>hand over</b>. Respondes <b>to</b> una inquietud, te encargas <b>of</b> ella y pones atención <b>to</b> los detalles. La familia se cambia con <b>move in</b>, y lo que falle después queda cubierto <b>by</b> la garantía.",
    ],
    items: [
      {
        q: "Walk the client ______ the house",
        k: ["through"],
        ex: "Two days before closing, I <em>walk the client through the house</em> room by room.",
        note: [
          "The noun is one word: <em>the final walkthrough</em>. Whatever you find goes on the <b>punch list</b>.",
          "El sustantivo es una sola palabra: <em>the final walkthrough</em>. Lo que encuentres va en la <b>punch list</b>, la lista de pendientes.",
        ],
      },
      {
        q: "Hand the keys ______ to the homeowner",
        k: ["over"],
        ex: "We <em>hand the keys over</em> to the homeowners on the morning of closing.",
        note: [
          "The noun is <b>handover</b>: <em>the handover is scheduled for Friday</em>.",
          "El sustantivo es <b>handover</b>: <em>the handover is scheduled for Friday</em>.",
        ],
      },
      {
        q: "Respond ______",
        k: ["to"],
        hint: ["(a concern)", "(una inquietud)"],
        ex: "I try to <em>respond to</em> every homeowner email within a day.",
        note: [
          "<b>Answer</b> takes no preposition: <em>answer an email</em>, but <em>respond to an email</em>.",
          "<b>Answer</b> va sin preposición: <em>answer an email</em>, pero <em>respond to an email</em>.",
        ],
      },
      {
        q: "Take care ______",
        k: ["of"],
        ex: "We'll <em>take care of</em> the scratch on the island before you move in.",
      },
      {
        q: "Pay attention ______ detail",
        k: ["to"],
        ex: "At this price point, buyers <em>pay attention to</em> every detail, down to the caulk lines.",
        trap: [
          "<span class='x'>✗</span> <em>pay attention in the details</em>. Spanish <em>poner atención en</em> pulls you toward <b>in</b>; English uses <b>to</b>.",
          "<span class='x'>✗</span> <em>pay attention in the details</em>. <em>Poner atención en</em> te jala hacia <b>in</b>; en inglés es <b>to</b>.",
        ],
      },
      {
        q: "Move ______",
        k: ["in"],
        hint: ["(start living there)", "(empezar a vivir ahí)"],
        ex: "The family plans to <em>move in</em> the week after closing.",
        note: [
          "With the place named, it becomes <b>into</b>: <em>they move into the house on the 15th</em>.",
          "Si nombras el lugar, cambia a <b>into</b>: <em>they move into the house on the 15th</em>.",
        ],
      },
      {
        q: "Be covered ______ the warranty",
        k: ["by", "under"],
        ex: "That hairline crack in the garage slab <em>is covered by the warranty</em>.",
      },
    ],
  },
];
