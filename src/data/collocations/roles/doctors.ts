import type { RoleGroup } from "./types";

export const groups: RoleGroup[] = [
  {
    title: ["The consultation: symptoms and history", "La consulta: síntomas y antecedentes"],
    rule: [
      "A symptom or condition is something the patient reports or carries: you complain <b>of</b> it, suffer <b>from</b> it and have a history <b>of</b> it. A state the patient is inside takes <b>in</b> or <b>on</b> (<em>in pain</em>, <em>on medication</em>), and <em>examine</em> takes its object directly.",
      "El síntoma o la enfermedad es algo que el paciente reporta o trae consigo: <em>complain <b>of</b></em>, <em>suffer <b>from</b></em>, <em>a history <b>of</b></em>. Un estado en el que se encuentra el paciente lleva <b>in</b> u <b>on</b> (<em>in pain</em>, <em>on medication</em>), y <em>examine</em> toma su objeto directo, sin preposición.",
    ],
    items: [
      {
        q: "Complain ______",
        k: ["of"],
        hint: ["(a symptom)", "(un síntoma)"],
        ex: "The patient <em>complained of</em> chest pain that started two days ago.",
        note: [
          "In clinical language a patient <b>complains of</b> a symptom. <b>Complain about</b> is for dissatisfaction: <em>complain about the wait</em>.",
          "En lenguaje clínico el paciente <em>complains <b>of</b></em> un síntoma. <em>Complain <b>about</b></em> es para una queja: <em>complain about the wait</em>.",
        ],
      },
      {
        q: "Suffer ______",
        k: ["from"],
        ex: "She has <em>suffered from</em> migraines since she was a teenager.",
        trap: [
          "<span class='x'>✗</span> <em>She suffers of migraines</em>. Spanish <em>sufrir de</em> pulls you toward <b>of</b>; English uses <b>from</b>.",
          "<span class='x'>✗</span> <em>She suffers of migraines</em>. «Sufrir de» te lleva hacia <b>of</b>; en inglés es <b>from</b>.",
        ],
      },
      {
        q: "Be allergic ______",
        k: ["to"],
        ex: "Before I write anything down, <em>are</em> you <em>allergic to</em> any medications?",
        note: [
          "The noun works the same way: <em>an allergy <b>to</b> penicillin</em>.",
          "El sustantivo funciona igual: <em>an allergy <b>to</b> penicillin</em>.",
        ],
      },
      {
        q: "Examine ______ the patient",
        k: ["none"],
        ex: "I would like to <em>examine the patient</em> before we order any tests.",
        trap: [
          "<span class='x'>✗</span> <em>I examined to the patient</em>. The Spanish personal <em>a</em> (<em>examinar a</em>) has no equivalent: <b>examine</b> takes its object directly.",
          "<span class='x'>✗</span> <em>I examined to the patient</em>. La «a» personal de «examinar a» no existe en inglés: <b>examine</b> lleva su objeto directo.",
        ],
      },
      {
        q: "Be ______ medication",
        k: ["on"],
        ex: "Are you <em>on any medication</em> right now?",
        trap: [
          "<span class='x'>✗</span> <em>He is under medication</em> / <em>He is with medication</em>. A person is <b>on</b> a medication, <b>on</b> antibiotics, <b>on</b> a diet.",
          "<span class='x'>✗</span> <em>He is under medication</em> / <em>He is with medication</em>. En inglés una persona está <b>on</b> un medicamento: <em>on antibiotics</em>, <em>on a diet</em>.",
        ],
      },
      {
        q: "Be ______ pain",
        k: ["in"],
        ex: "Tell me if you <em>are in pain</em> at any point during the exam.",
        note: [
          "Spanish says <em>tener dolor</em>; English puts the person <b>in</b> the state: <em>in pain</em>, <em>in good health</em>, <em>in remission</em>.",
          "En español dices «tener dolor»; el inglés pone a la persona <b>in</b> el estado: <em>in pain</em>, <em>in good health</em>, <em>in remission</em>.",
        ],
      },
      {
        q: "Have a family history ______",
        k: ["of"],
        ex: "She <em>has a family history of</em> heart disease.",
      },
    ],
  },
  {
    title: ["Tests and diagnosis", "Estudios y diagnóstico"],
    rule: [
      "<b>For</b> points at what you are looking for: you screen <b>for</b> it, test positive <b>for</b> it and wait <b>for</b> the results. <b>With</b> attaches the finding to the patient or to the evidence: <em>diagnosed <b>with</b></em>, <em>consistent <b>with</b></em>.",
      "<b>For</b> señala lo que estás buscando: <em>screen <b>for</b></em>, <em>test positive <b>for</b></em>, <em>wait <b>for</b> the results</em>. <b>With</b> une el hallazgo con el paciente o con la evidencia: <em>diagnosed <b>with</b></em>, <em>consistent <b>with</b></em>.",
    ],
    items: [
      {
        q: "Be diagnosed ______",
        k: ["with"],
        hint: ["(a condition)", "(una enfermedad)"],
        ex: "He <em>was diagnosed with</em> type 2 diabetes last year.",
        trap: [
          "<span class='x'>✗</span> <em>He was diagnosed of diabetes</em> / <em>They diagnosed him diabetes</em>. The person is diagnosed <b>with</b> the condition.",
          "<span class='x'>✗</span> <em>He was diagnosed of diabetes</em> / <em>They diagnosed him diabetes</em>. «Le diagnosticaron diabetes» es <em>he was diagnosed <b>with</b> diabetes</em>.",
        ],
      },
      {
        q: "Test positive ______",
        k: ["for"],
        ex: "Two patients <em>tested positive for</em> the flu this morning.",
        note: [
          "The opposite result follows the same pattern: <em>test negative <b>for</b></em>.",
          "El resultado contrario sigue el mismo patrón: <em>test negative <b>for</b></em>.",
        ],
      },
      {
        q: "Screen ______",
        k: ["for"],
        hint: ["(a disease)", "(una enfermedad)"],
        ex: "We <em>screened for</em> anemia at her annual visit.",
      },
      {
        q: "Discuss ______ the results",
        k: ["none"],
        ex: "Let's sit down and <em>discuss the results</em> of your blood work.",
        trap: [
          "<span class='x'>✗</span> <em>discuss about the results</em>. You <b>talk about</b> results, but you <b>discuss</b> them, with no preposition.",
          "<span class='x'>✗</span> <em>discuss about the results</em>. Dices <em>talk <b>about</b> the results</em>, pero <em>discuss the results</em>, sin preposición.",
        ],
      },
      {
        q: "Rule ______",
        k: ["out"],
        hint: ["(a possible cause)", "(una causa posible)"],
        ex: "We need to <em>rule out</em> an infection before we go any further.",
        note: [
          "A pronoun goes in the middle: <em>rule it out</em>.",
          "El pronombre va en medio: <em>rule it out</em>.",
        ],
      },
      {
        q: "Be consistent ______",
        k: ["with"],
        ex: "The findings <em>are consistent with</em> a mild sprain.",
        note: [
          "A careful way to say what the evidence suggests without stating it as certain.",
          "Una forma prudente de decir lo que sugiere la evidencia sin afirmarlo como un hecho.",
        ],
      },
      {
        q: "Wait ______ the results",
        k: ["for"],
        ex: "We are still <em>waiting for the results</em> from the lab.",
        trap: [
          "<span class='x'>✗</span> <em>We are waiting the results</em>. Spanish <em>esperar</em> takes a direct object; English <b>wait</b> always needs <b>for</b>.",
          "<span class='x'>✗</span> <em>We are waiting the results</em>. «Esperar» lleva objeto directo; en inglés <b>wait</b> siempre necesita <b>for</b>.",
        ],
      },
    ],
  },
  {
    title: ["Treatment and medication", "Tratamiento y medicamentos"],
    rule: [
      "<b>For</b> names the condition the treatment is aimed at; <b>to</b> and <b>from</b> describe how the patient moves: responding <b>to</b> treatment, recovering <b>from</b> an illness. A medication is something a patient is put <b>on</b> and taken <b>off</b>.",
      "<b>For</b> nombra la enfermedad a la que va dirigido el tratamiento; <b>to</b> y <b>from</b> describen cómo avanza el paciente: <em>respond <b>to</b> treatment</em>, <em>recover <b>from</b> an illness</em>. Un medicamento es algo que se le pone al paciente (<b>on</b>) y que se le retira (<b>off</b>).",
    ],
    items: [
      {
        q: "Prescribe something ______",
        k: ["for"],
        hint: ["(a condition)", "(una enfermedad)"],
        ex: "What did your last doctor <em>prescribe for</em> the pain?",
      },
      {
        q: "Be treated ______",
        k: ["for"],
        hint: ["(a condition)", "(una enfermedad)"],
        ex: "He <em>is being treated for</em> pneumonia at another hospital.",
        note: [
          "<b>For</b> the condition, <b>with</b> the medication: <em>treated <b>for</b> an infection <b>with</b> antibiotics</em>.",
          "<b>For</b> la enfermedad, <b>with</b> el medicamento: <em>treated <b>for</b> an infection <b>with</b> antibiotics</em>.",
        ],
      },
      {
        q: "Respond ______ treatment",
        k: ["to"],
        ex: "She <em>responded to treatment</em> faster than we expected.",
      },
      {
        q: "Recover ______",
        k: ["from"],
        hint: ["(an illness)", "(una enfermedad)"],
        ex: "He is still <em>recovering from</em> the flu.",
      },
      {
        q: "Take a patient ______ a medication",
        k: ["off"],
        hint: ["(stop it)", "(suspenderlo)"],
        ex: "Her cardiologist <em>took her off</em> the medication last month.",
        note: [
          "The opposite is <b>put on</b>: <em>they put him on a new medication</em>.",
          "Lo contrario es <b>put on</b>: <em>they put him on a new medication</em>.",
        ],
      },
      {
        q: "Benefit ______",
        k: ["from"],
        ex: "He really <em>benefited from</em> physical therapy after the accident.",
        note: [
          "The verb takes <b>from</b>; the noun takes <b>of</b>: <em>the benefits <b>of</b> physical therapy</em>.",
          "El verbo lleva <b>from</b>; el sustantivo lleva <b>of</b>: <em>the benefits <b>of</b> physical therapy</em>.",
        ],
      },
      {
        q: "Affect ______ the kidneys",
        k: ["none"],
        ex: "So far the infection has not <em>affected the kidneys</em>.",
        trap: [
          "<span class='x'>✗</span> <em>It affects to the kidneys</em>. Spanish <em>afectar a</em> adds a preposition; English <b>affect</b> takes its object directly.",
          "<span class='x'>✗</span> <em>It affects to the kidneys</em>. «Afectar a» agrega una preposición; en inglés <b>affect</b> lleva su objeto directo.",
        ],
      },
    ],
  },
  {
    title: ["Talking with patients", "Hablar con los pacientes"],
    rule: [
      "Information and attention travel <b>to</b> the person: you explain something <b>to</b> a patient, break the news <b>to</b> a family and listen <b>to</b> the lungs. But <em>tell</em> and <em>answer</em> take the person or the question directly, with no preposition.",
      "La información y la atención viajan <b>to</b> la persona: <em>explain something <b>to</b> a patient</em>, <em>break the news <b>to</b> a family</em>, <em>listen <b>to</b> the lungs</em>. Pero <em>tell</em> y <em>answer</em> toman a la persona o la pregunta directamente, sin preposición.",
    ],
    items: [
      {
        q: "Explain the diagnosis ______ the patient",
        k: ["to"],
        ex: "I <em>explained the diagnosis to the patient</em> and her daughter.",
        trap: [
          "<span class='x'>✗</span> <em>I explained her the diagnosis</em>. Spanish <em>le expliqué</em> hides the preposition; in English the person always needs <b>to</b>: <em>I explained it <b>to</b> her</em>.",
          "<span class='x'>✗</span> <em>I explained her the diagnosis</em>. En «le expliqué» la preposición no se ve; en inglés la persona siempre necesita <b>to</b>: <em>I explained it <b>to</b> her</em>.",
        ],
      },
      {
        q: "Tell ______ the patient the results",
        k: ["none"],
        ex: "I will <em>tell the patient the results</em> myself this afternoon.",
        trap: [
          "<span class='x'>✗</span> <em>I told to the patient</em>. <b>Tell</b> takes the person directly; <b>say</b> and <b>explain</b> are the verbs that need <b>to</b>.",
          "<span class='x'>✗</span> <em>I told to the patient</em>. <b>Tell</b> toma a la persona directamente; <b>say</b> y <b>explain</b> son los verbos que necesitan <b>to</b>.",
        ],
      },
      {
        q: "Answer ______ the patient's questions",
        k: ["none"],
        ex: "Take the time to <em>answer the patient's questions</em> before she leaves.",
        trap: [
          "<span class='x'>✗</span> <em>answer to her questions</em>. Spanish <em>responder a</em> adds a preposition; you <b>answer</b> a question directly.",
          "<span class='x'>✗</span> <em>answer to her questions</em>. «Responder a» agrega una preposición; en inglés dices <em>answer a question</em>, directo.",
        ],
      },
      {
        q: "Break the news ______ the family",
        k: ["to"],
        ex: "The attending physician <em>broke the news to the family</em> in a private room.",
      },
      {
        q: "Be due ______",
        k: ["for"],
        hint: ["(a checkup)", "(una revisión)"],
        ex: "You <em>are due for</em> your annual checkup next month.",
      },
      {
        q: "Listen ______ the patient's lungs",
        k: ["to"],
        ex: "I am going to <em>listen to your lungs</em>; take a deep breath.",
        trap: [
          "<span class='x'>✗</span> <em>Let me listen your lungs</em>. Spanish <em>escuchar</em> takes a direct object; English <b>listen</b> always needs <b>to</b>.",
          "<span class='x'>✗</span> <em>Let me listen your lungs</em>. «Escuchar» lleva objeto directo; en inglés <b>listen</b> siempre necesita <b>to</b>.",
        ],
      },
      {
        q: "Check ______ a patient",
        k: ["on"],
        hint: ["(see how she is doing)", "(ver cómo sigue)"],
        ex: "I will come back to <em>check on</em> you after lunch.",
        note: [
          "<b>Check on</b> a person is a short visit to see how she is. <b>Check</b> alone is for something you measure: <em>check her blood pressure</em>.",
          "<em>Check <b>on</b></em> una persona es una visita breve para ver cómo sigue. <b>Check</b> solo es para algo que mides: <em>check her blood pressure</em>.",
        ],
      },
    ],
  },
  {
    title: ["Colleagues, referrals and the hospital", "Colegas, referencias y el hospital"],
    rule: [
      "A patient moves <b>to</b> the specialist and an opinion comes <b>from</b> one. Being available is a state you are <b>on</b> (<em>on call</em>), your field is something you work <b>in</b>, and <em>attend</em> an event takes no preposition.",
      "El paciente se mueve <b>to</b> el especialista y la opinión viene <b>from</b> uno. Estar disponible es un estado que lleva <b>on</b> (<em>on call</em>), tu especialidad es el campo <b>in</b> el que trabajas, y <em>attend</em> un evento no lleva preposición.",
    ],
    items: [
      {
        q: "Refer a patient ______",
        k: ["to"],
        hint: ["(a specialist)", "(un especialista)"],
        ex: "I am going to <em>refer you to</em> a cardiologist.",
        note: [
          "The noun keeps the preposition: <em>a referral <b>to</b> a specialist</em>.",
          "El sustantivo conserva la preposición: <em>a referral <b>to</b> a specialist</em>.",
        ],
      },
      {
        q: "Get a second opinion ______",
        k: ["from"],
        hint: ["(a colleague)", "(un colega)"],
        ex: "She decided to <em>get a second opinion from</em> another oncologist.",
      },
      {
        q: "Be ______ call",
        k: ["on"],
        ex: "I <em>am on call</em> this weekend, so I can't travel.",
        note: [
          "This is Spanish <em>estar de guardia</em>. The same <b>on</b> appears in <em>on duty</em> and <em>on rounds</em>.",
          "Es «estar de guardia». El mismo <b>on</b> aparece en <em>on duty</em> y <em>on rounds</em>.",
        ],
      },
      {
        q: "Attend ______ a conference",
        k: ["none"],
        ex: "She is <em>attending a conference</em> in Chicago this week.",
        trap: [
          "<span class='x'>✗</span> <em>attend to a conference</em>. Spanish <em>asistir a</em> adds a preposition; you <b>attend</b> an event directly. <b>Attend to</b> a patient means to take care of her.",
          "<span class='x'>✗</span> <em>attend to a conference</em>. «Asistir a» agrega una preposición; en inglés dices <em>attend a conference</em>, directo. <em>Attend <b>to</b> a patient</em> significa atenderlo.",
        ],
      },
      {
        q: "Specialize ______",
        k: ["in"],
        ex: "He <em>specializes in</em> pediatric cardiology.",
      },
      {
        q: "Cover ______",
        k: ["for"],
        hint: ["(an absent colleague)", "(un colega ausente)"],
        ex: "I am <em>covering for</em> a colleague who is on vacation.",
      },
      {
        q: "Be affiliated ______",
        k: ["with"],
        hint: ["(a hospital)", "(un hospital)"],
        ex: "The clinic <em>is affiliated with</em> the university hospital.",
      },
    ],
  },
];
