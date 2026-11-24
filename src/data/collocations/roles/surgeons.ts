import type { RoleGroup } from "./types";

export const groups: RoleGroup[] = [
  {
    title: [
      "Before the operation: evaluation and consent",
      "Antes de la operación: valoración y consentimiento",
    ],
    rule: [
      "<b>For</b> points ahead to the operation: a candidate <b>for</b> it, scheduled <b>for</b> it, at risk <b>for</b> a complication. The patient consents <b>to</b> the procedure after you walk her <b>through</b> it and go <b>over</b> the risks.",
      "<b>For</b> apunta hacia la operación que viene: <em>a candidate <b>for</b> surgery</em>, <em>scheduled <b>for</b> surgery</em>, <em>at risk <b>for</b></em> una complicación. El paciente da su consentimiento <b>to</b> el procedimiento después de que se lo explicas paso a paso (<em>walk <b>through</b></em>) y repasas los riesgos (<em>go <b>over</b></em>).",
    ],
    items: [
      {
        q: "Consent ______",
        k: ["to"],
        hint: ["(the procedure)", "(el procedimiento)"],
        ex: "The patient <em>consented to</em> the procedure this morning.",
        trap: [
          "<span class='x'>✗</span> <em>She consented the surgery</em>. In English the patient <b>consents to</b> a procedure, or <em>gives consent</em>.",
          "<span class='x'>✗</span> <em>She consented the surgery</em>. En inglés el paciente <em>consents <b>to</b></em> un procedimiento, o bien <em>gives consent</em>.",
        ],
      },
      {
        q: "Be a candidate ______ surgery",
        k: ["for"],
        ex: "After the evaluation, we agreed that he <em>is a candidate for surgery</em>.",
      },
      {
        q: "Be at risk ______",
        k: ["for", "of"],
        hint: ["(a complication)", "(una complicación)"],
        ex: "Because of his history, he <em>is at risk for</em> bleeding.",
        trap: [
          "<span class='x'>✗</span> <em>He is in risk of bleeding</em>. Spanish <em>en riesgo de</em> becomes <b>at risk</b>. American medical English then prefers <b>for</b>; <b>of</b> is also standard.",
          "<span class='x'>✗</span> <em>He is in risk of bleeding</em>. «En riesgo de» se dice <b>at risk</b>. Después, el inglés médico de Estados Unidos prefiere <b>for</b>; <b>of</b> también es correcto.",
        ],
      },
      {
        q: "Be scheduled ______ surgery",
        k: ["for"],
        ex: "She <em>is scheduled for surgery</em> on Thursday morning.",
      },
      {
        q: "Walk the patient ______ the procedure",
        k: ["through"],
        ex: "Before you sign anything, let me <em>walk you through the procedure</em>.",
        note: [
          "<b>Walk someone through</b> something means to explain it step by step.",
          "<em>Walk someone <b>through</b></em> algo significa explicárselo paso a paso.",
        ],
      },
      {
        q: "Go ______ the risks",
        k: ["over", "through"],
        hint: ["(review them together)", "(repasarlos juntos)"],
        ex: "We <em>went over the risks</em> with the family yesterday.",
      },
      {
        q: "Call ______ the family",
        k: ["none"],
        ex: "I will <em>call the family</em> as soon as we finish.",
        trap: [
          "<span class='x'>✗</span> <em>I will call to the family</em>. The personal <em>a</em> of <em>llamar a</em> does not carry over: <b>call</b> takes the person directly.",
          "<span class='x'>✗</span> <em>I will call to the family</em>. La «a» personal de «llamar a» no pasa al inglés: <b>call</b> toma a la persona directamente.",
        ],
      },
    ],
  },
  {
    title: ["In the operating room", "En el quirófano"],
    rule: [
      "The patient is the surface you work <b>on</b>: you operate <b>on</b> a person who is <b>on</b> the table. A state is somewhere the patient or the surgeon is inside or beneath: <b>in</b> surgery, <b>under</b> anesthesia. <em>Enter</em> takes the room directly.",
      "El paciente es la superficie sobre la que trabajas: <em>operate <b>on</b></em> una persona que está <em><b>on</b> the table</em>. Un estado es un lugar dentro o debajo del cual está el paciente o el cirujano: <em><b>in</b> surgery</em>, <em><b>under</b> anesthesia</em>. <em>Enter</em> toma la sala directamente.",
    ],
    items: [
      {
        q: "Operate ______",
        k: ["on"],
        hint: ["(a patient)", "(un paciente)"],
        ex: "We <em>operated on</em> a twelve-year-old with appendicitis last night.",
        trap: [
          "<span class='x'>✗</span> <em>We operated the patient</em>. In English the surgeon <b>operates on</b> a person; you <em>operate</em> a machine.",
          "<span class='x'>✗</span> <em>We operated the patient</em>. En inglés el cirujano <em>operates <b>on</b></em> una persona; <em>operate</em> sin preposición es manejar una máquina.",
        ],
      },
      {
        q: "Scrub ______",
        k: ["in"],
        hint: ["(get ready to join an operation)", "(prepararte para entrar a una cirugía)"],
        ex: "I <em>scrubbed in</em> on three cases today.",
        note: [
          "<b>Scrub in</b> is to wash and gown up to take part in an operation. You scrub in <b>on</b> a case.",
          "<em>Scrub <b>in</b></em> es lavarte y vestirte para participar en una operación. Dices <em>scrub in <b>on</b> a case</em>.",
        ],
      },
      {
        q: "Be ______ anesthesia",
        k: ["under"],
        ex: "The patient has <em>been under anesthesia</em> for about two hours.",
        note: [
          "Also <em>go under</em> and <em>put someone under</em>: <em>she went under at eight</em>.",
          "También <em>go under</em> y <em>put someone under</em>: <em>she went under at eight</em>.",
        ],
      },
      {
        q: "Enter ______ the operating room",
        k: ["none"],
        ex: "Everyone has to wear a mask to <em>enter the operating room</em>.",
        trap: [
          "<span class='x'>✗</span> <em>enter to the operating room</em> / <em>enter in the room</em>. Spanish <em>entrar a</em> adds a preposition; <b>enter</b> takes the place directly. With <em>go</em> you do need one: <em>go <b>into</b> the room</em>.",
          "<span class='x'>✗</span> <em>enter to the operating room</em> / <em>enter in the room</em>. «Entrar a» agrega una preposición; <b>enter</b> toma el lugar directamente. Con <em>go</em> sí la necesitas: <em>go <b>into</b> the room</em>.",
        ],
      },
      {
        q: "Be ______ surgery",
        k: ["in"],
        hint: ["(operating right now)", "(operando en este momento)"],
        ex: "She <em>is in surgery</em> until noon; can I take a message?",
        note: [
          "<b>In surgery</b> is said of both the surgeon and the patient.",
          "<em><b>In</b> surgery</em> se dice tanto del cirujano como del paciente.",
        ],
      },
      {
        q: "Be ______ the table",
        k: ["on"],
        ex: "By the time I arrived, the patient <em>was on the table</em>.",
        note: [
          "Short for <em>the operating table</em>.",
          "Forma corta de <em>the operating table</em>.",
        ],
      },
      {
        q: "Close ______",
        k: ["up"],
        hint: ["(suture the incision at the end)", "(suturar la incisión al final)"],
        ex: "The count is correct, so we are ready to <em>close up</em>.",
      },
    ],
  },
  {
    title: [
      "After the operation: recovery and discharge",
      "Después de la operación: recuperación y alta",
    ],
    rule: [
      "Leaving a state or a place takes <b>out of</b> or <b>from</b>: <b>out of</b> surgery, discharged <b>from</b> the hospital. The state the patient is now inside takes <b>in</b> (<em>in recovery</em>), and <em>leave</em> takes the place directly.",
      "Salir de un estado o de un lugar lleva <b>out of</b> o <b>from</b>: <em><b>out of</b> surgery</em>, <em>discharged <b>from</b> the hospital</em>. El estado en el que ahora está el paciente lleva <b>in</b> (<em>in recovery</em>), y <em>leave</em> toma el lugar directamente.",
    ],
    items: [
      {
        q: "Be ______ surgery",
        k: ["out of"],
        hint: ["(the operation is over)", "(la operación ya terminó)"],
        ex: "Your father <em>is out of surgery</em> and resting.",
        note: [
          "The first thing a family wants to hear. Compare <em>in surgery</em>, while the operation is still going on.",
          "Lo primero que la familia quiere escuchar. Compara con <em>in surgery</em>, mientras la operación sigue en curso.",
        ],
      },
      {
        q: "Be ______ recovery",
        k: ["in"],
        ex: "She <em>is in recovery</em>; you can see her in about an hour.",
        note: [
          "Here <em>recovery</em> means the recovery room, and it takes no article.",
          "Aquí <em>recovery</em> es la sala de recuperación, y va sin artículo.",
        ],
      },
      {
        q: "Be back ______ your feet",
        k: ["on"],
        ex: "He <em>was back on his feet</em> a week after the operation.",
      },
      {
        q: "Be discharged ______ the hospital",
        k: ["from"],
        ex: "He <em>was discharged from the hospital</em> three days after the operation.",
      },
      {
        q: "Leave ______ the hospital",
        k: ["none"],
        ex: "She was able to <em>leave the hospital</em> the next morning.",
        trap: [
          "<span class='x'>✗</span> <em>She left from the hospital</em>. Spanish <em>salir de</em> adds a preposition; <b>leave</b> takes the place directly.",
          "<span class='x'>✗</span> <em>She left from the hospital</em>. «Salir de» agrega una preposición; <b>leave</b> toma el lugar directamente.",
        ],
      },
      {
        q: "Follow up ______",
        k: ["with"],
        hint: ["(your surgeon)", "(tu cirujano)"],
        ex: "You will <em>follow up with</em> me in the clinic in two weeks.",
        note: [
          "The noun is hyphenated: <em>a follow-up appointment</em>.",
          "El sustantivo lleva guion: <em>a follow-up appointment</em>.",
        ],
      },
      {
        q: "Take the stitches ______",
        k: ["out"],
        ex: "We will <em>take the stitches out</em> at your next visit.",
      },
    ],
  },
  {
    title: ["Complications and risk", "Complicaciones y riesgo"],
    rule: [
      "A complication has a source and a destination. Blood and causes come <b>from</b> somewhere; a patient who gets worse goes <b>into</b> a state or <b>to</b> a unit, and the plan converts <b>to</b> something else. <em>Survive</em> takes the operation directly.",
      "Una complicación tiene un origen y un destino. La sangre y las causas vienen <b>from</b> algún lugar; el paciente que empeora pasa <b>into</b> un estado o <b>to</b> una unidad, y el plan cambia <b>to</b> otra cosa. <em>Survive</em> toma la operación directamente.",
    ],
    items: [
      {
        q: "Bleed ______",
        k: ["from"],
        hint: ["(a site)", "(un sitio)"],
        ex: "He was <em>bleeding from</em> the incision when we changed the dressing.",
      },
      {
        q: "Survive ______ the operation",
        k: ["none"],
        ex: "Given her age, we were not sure she would <em>survive the operation</em>.",
        trap: [
          "<span class='x'>✗</span> <em>survive to the operation</em>. Spanish <em>sobrevivir a</em> adds a preposition; <b>survive</b> takes its object directly.",
          "<span class='x'>✗</span> <em>survive to the operation</em>. «Sobrevivir a» agrega una preposición; <b>survive</b> lleva su objeto directo.",
        ],
      },
      {
        q: "Be admitted ______ intensive care",
        k: ["to"],
        ex: "He <em>was admitted to intensive care</em> overnight as a precaution.",
        trap: [
          "<span class='x'>✗</span> <em>admitted in intensive care</em>. Spanish <em>internado en</em> suggests <b>in</b>, but admission is movement: <b>admitted to</b> the hospital, <b>to</b> the unit.",
          "<span class='x'>✗</span> <em>admitted in intensive care</em>. «Internado en» sugiere <b>in</b>, pero el ingreso es movimiento: <em>admitted <b>to</b> the hospital</em>, <em><b>to</b> the unit</em>.",
        ],
      },
      {
        q: "Die ______",
        k: ["of", "from"],
        hint: ["(a complication)", "(una complicación)"],
        ex: "Her grandfather <em>died of</em> complications after heart surgery.",
        note: [
          "<b>Die of</b> and <b>die from</b> are both standard; <b>of</b> is a little more common with a disease.",
          "<em>Die <b>of</b></em> y <em>die <b>from</b></em> son correctos los dos; <b>of</b> es un poco más común con una enfermedad.",
        ],
      },
      {
        q: "Convert ______",
        k: ["to"],
        hint: ["(an open procedure)", "(un procedimiento abierto)"],
        ex: "We started laparoscopically but had to <em>convert to</em> an open procedure.",
        note: [
          "Said when the team changes the surgical approach partway through.",
          "Se dice cuando el equipo cambia el abordaje quirúrgico a media operación.",
        ],
      },
      {
        q: "Watch ______",
        k: ["for"],
        hint: ["(signs of infection)", "(señales de infección)"],
        ex: "The nurses are <em>watching for</em> signs of infection.",
      },
      {
        q: "Go ______ shock",
        k: ["into"],
        ex: "The patient <em>went into shock</em> shortly after he arrived.",
        trap: [
          "<span class='x'>✗</span> <em>He entered in shock</em>. For Spanish <em>entrar en shock</em>, English uses <b>go into</b>: <em>go into shock</em>, <em>go into cardiac arrest</em>.",
          "<span class='x'>✗</span> <em>He entered in shock</em>. Para «entrar en shock» el inglés usa <b>go into</b>: <em>go into shock</em>, <em>go into cardiac arrest</em>.",
        ],
      },
    ],
  },
  {
    title: ["The surgical team", "El equipo quirúrgico"],
    rule: [
      "People take no preposition after <em>join</em> and <em>assist</em>. Training uses <b>under</b> a mentor and <b>in</b> a field; the team is briefed <b>on</b> a case, preps <b>for</b> it and asks <b>for</b> what it needs.",
      "Las personas no llevan preposición después de <em>join</em> y <em>assist</em>. La formación usa <b>under</b> un mentor e <b>in</b> una especialidad; al equipo se le informa <b>on</b> un caso, se prepara <b>for</b> él y pide (<em>ask <b>for</b></em>) lo que necesita.",
    ],
    items: [
      {
        q: "Join ______ the surgical team",
        k: ["none"],
        ex: "She <em>joined the surgical team</em> right after her fellowship.",
        trap: [
          "<span class='x'>✗</span> <em>She joined to the team</em>. Spanish <em>unirse a</em> adds a preposition; <b>join</b> takes the group directly.",
          "<span class='x'>✗</span> <em>She joined to the team</em>. «Unirse a» agrega una preposición; <b>join</b> toma al grupo directamente.",
        ],
      },
      {
        q: "Assist ______ the lead surgeon",
        k: ["none"],
        ex: "A second-year resident will <em>assist the lead surgeon</em> today.",
        trap: [
          "<span class='x'>✗</span> <em>assist to the surgeon</em>. <b>Assist</b> means to help and takes the person directly. It is a false friend of <em>asistir a</em>, which is <b>attend</b>.",
          "<span class='x'>✗</span> <em>assist to the surgeon</em>. <b>Assist</b> significa ayudar y toma a la persona directamente. Es un falso amigo de «asistir a», que en inglés es <b>attend</b>.",
        ],
      },
      {
        q: "Brief the team ______",
        k: ["on", "about"],
        hint: ["(the case)", "(el caso)"],
        ex: "She <em>briefed the team on</em> the case before the first incision.",
      },
      {
        q: "Train ______",
        k: ["under", "with"],
        hint: ["(a senior surgeon)", "(un cirujano con más experiencia)"],
        ex: "I <em>trained under</em> one of the best transplant surgeons in the country.",
        note: [
          "<b>Under</b> stresses that the senior surgeon supervised and taught you; <b>with</b> is more neutral.",
          "<b>Under</b> subraya que el cirujano con más experiencia te supervisó y te enseñó; <b>with</b> es más neutro.",
        ],
      },
      {
        q: "Do a residency ______",
        k: ["in"],
        hint: ["(a specialty)", "(una especialidad)"],
        ex: "He <em>did his residency in</em> general surgery in Houston.",
      },
      {
        q: "Ask ______",
        k: ["for"],
        hint: ["(an instrument)", "(un instrumento)"],
        ex: "The surgeon <em>asked for</em> a clamp.",
        trap: [
          "<span class='x'>✗</span> <em>She asked a clamp</em>. Spanish <em>pedir</em> takes a direct object; English needs <b>ask for</b> the thing you want. You <em>ask a question</em>, but you <em>ask <b>for</b> a clamp</em>.",
          "<span class='x'>✗</span> <em>She asked a clamp</em>. «Pedir» lleva objeto directo; en inglés necesitas <em>ask <b>for</b></em> lo que quieres. Dices <em>ask a question</em>, pero <em>ask <b>for</b> a clamp</em>.",
        ],
      },
      {
        q: "Prep ______ surgery",
        k: ["for"],
        ex: "The team is already <em>prepping for surgery</em> in room two.",
        note: [
          "Without a preposition, <em>prep</em> takes the patient or the room: <em>prep the patient</em>.",
          "Sin preposición, <em>prep</em> toma al paciente o la sala: <em>prep the patient</em>.",
        ],
      },
    ],
  },
];
