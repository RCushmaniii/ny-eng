import type { RoleGroup } from "./types";

// Finance and accounting: prepositions from the close, the forecast review and the audit.

export const groups: RoleGroup[] = [
  {
    title: ["Closing the Books and Reporting", "Cierre contable y reportes"],
    rule: [
      "Numbers travel <b>to</b> a destination: you post <b>to</b> the ledger and reconcile one balance <b>to</b> another. A cutoff date takes <b>as of</b>, the way you slice a report takes <b>by</b>, and the standard you follow takes <b>with</b>.",
      "Los números viajan <b>to</b> un destino: registras <b>to</b> the ledger y concilias un saldo <b>to</b> otro. Una fecha de corte lleva <b>as of</b>, la forma en que divides un reporte lleva <b>by</b>, y la norma que sigues lleva <b>with</b>.",
    ],
    items: [
      {
        q: "Post an entry ______ the ledger",
        k: ["to"],
        ex: "Please <em>post the entry to the ledger</em> before five so it lands in this period.",
      },
      {
        q: "Reconcile the bank statement ______",
        k: ["to", "with"],
        hint: ["(the ledger)", "(el libro mayor)"],
        ex: "We <em>reconcile the bank statement to</em> the general ledger every month.",
        note: [
          "Accountants say <b>reconcile to</b> and <b>reconcile with</b> interchangeably. With no second item, there is no preposition: <em>reconcile the account</em>.",
          "En contabilidad se dice <b>reconcile to</b> y <b>reconcile with</b> por igual. Si no hay un segundo elemento, va sin preposición: <em>reconcile the account</em>.",
        ],
      },
      {
        q: "Sign off ______",
        k: ["on"],
        hint: ["(the entries)", "(las pólizas)"],
        ex: "The controller has to <em>sign off on</em> every manual journal entry.",
      },
      {
        q: "As ______ the closing date",
        k: ["of"],
        ex: "These balances are <em>as of the closing date</em>, not as of today.",
        trap: [
          "<span class='x'>✗</span> <em>the balance to September 30</em> · <span class='x'>✗</span> <em>at September 30</em>. Spanish <em>al 30 de septiembre</em> has no one-word match; American English uses <b>as of</b> for a cutoff date.",
          "<span class='x'>✗</span> <em>the balance to September 30</em> · <span class='x'>✗</span> <em>at September 30</em>. <em>Al 30 de septiembre</em> no se traduce palabra por palabra; en inglés americano la fecha de corte lleva <b>as of</b>.",
        ],
      },
      {
        q: "Be ______ balance",
        k: ["out of"],
        hint: ["(the totals do not match)", "(los totales no cuadran)"],
        ex: "The trial balance is <em>out of balance</em> by two hundred dollars.",
        note: [
          "When debits equal credits, the accounts are <b>in balance</b>.",
          "Cuando los cargos y los abonos son iguales, las cuentas están <b>in balance</b>.",
        ],
      },
      {
        q: "Be prepared in accordance ______",
        k: ["with"],
        ex: "The statements are <em>prepared in accordance with</em> the applicable accounting standards.",
        trap: [
          "<span class='x'>✗</span> <em>in accordance to the standards</em>. Spanish <em>de acuerdo a</em> pulls you toward <b>to</b>. It is <b>in accordance with</b>, but <b>according to</b>.",
          "<span class='x'>✗</span> <em>in accordance to the standards</em>. <em>De acuerdo a</em> te jala hacia <b>to</b>. Es <b>in accordance with</b>, pero <b>according to</b>.",
        ],
      },
      {
        q: "Break down the expenses ______ cost center",
        k: ["by"],
        ex: "Can you <em>break down the expenses by cost center</em> for the last two quarters?",
      },
    ],
  },
  {
    title: ["Budgets and Forecasts", "Presupuestos y pronósticos"],
    rule: [
      "A plan is a line you measure against: you are <b>on</b> track, <b>over</b> budget or <b>in line with</b> the forecast. A number rests <b>on</b> its assumptions, money goes <b>to</b> a department, and you budget <b>for</b> a cost. <em>Discuss</em> takes <b>no preposition</b>.",
      "Un plan es una línea contra la que te mides: estás <b>on</b> track, <b>over</b> budget o <b>in line with</b> the forecast. Una cifra descansa <b>on</b> sus supuestos, el dinero se asigna <b>to</b> un departamento y presupuestas <b>for</b> un costo. <em>Discuss</em> va <b>sin preposición</b>.",
    ],
    items: [
      {
        q: "Discuss ______ the forecast",
        k: ["none"],
        ex: "We need to <em>discuss the forecast</em> before it goes to the leadership team.",
        trap: [
          "<span class='x'>✗</span> <em>discuss about the forecast</em>. Spanish <em>hablar de</em> or <em>discutir sobre</em> adds a preposition; <b>discuss</b> takes its object directly. You <b>talk about</b> it, but you <b>discuss</b> it.",
          "<span class='x'>✗</span> <em>discuss about the forecast</em>. <em>Hablar de</em> o <em>discutir sobre</em> llevan preposición; <b>discuss</b> lleva el objeto directo. Es <b>talk about</b> it, pero <b>discuss</b> it.",
        ],
      },
      {
        q: "Be ______ budget",
        k: ["over"],
        hint: ["(you spent more than planned)", "(gastaste más de lo planeado)"],
        ex: "Marketing is <em>over budget</em> by twelve thousand dollars this quarter.",
        note: [
          "Spending less than planned is <b>under budget</b>; spending exactly the plan is <b>on budget</b>.",
          "Gastar menos de lo planeado es <b>under budget</b>; gastar justo lo planeado es <b>on budget</b>.",
        ],
      },
      {
        q: "Be ______ track",
        k: ["on"],
        ex: "We are <em>on track</em> to hit the full-year revenue number.",
      },
      {
        q: "Budget ______",
        k: ["for"],
        hint: ["(a cost you expect)", "(un costo que esperas)"],
        ex: "We did not <em>budget for</em> the software renewal, so it will show as a variance.",
      },
      {
        q: "Be based ______",
        k: ["on"],
        hint: ["(assumptions)", "(supuestos)"],
        ex: "The forecast is <em>based on</em> a four percent price increase in the second half.",
        trap: [
          "<span class='x'>✗</span> <em>based in last year's numbers</em>. Spanish <em>basado en</em> pulls you toward <b>in</b>; English uses <b>on</b>. <b>Based in</b> is only for a location: <em>based in Monterrey</em>.",
          "<span class='x'>✗</span> <em>based in last year's numbers</em>. <em>Basado en</em> te jala hacia <b>in</b>; en inglés es <b>on</b>. <b>Based in</b> solo se usa para un lugar: <em>based in Monterrey</em>.",
        ],
      },
      {
        q: "Allocate funds ______",
        k: ["to"],
        hint: ["(a department)", "(un departamento)"],
        ex: "We <em>allocated</em> the remaining <em>funds to</em> the operations team.",
        note: [
          "The receiver takes <b>to</b>; the purpose takes <b>for</b>: <em>allocate funds to operations for new equipment</em>.",
          "Quien recibe lleva <b>to</b>; el propósito lleva <b>for</b>: <em>allocate funds to operations for new equipment</em>.",
        ],
      },
      {
        q: "Be in line ______",
        k: ["with"],
        hint: ["(the forecast)", "(el pronóstico)"],
        ex: "Third-quarter expenses were <em>in line with</em> the forecast.",
      },
    ],
  },
  {
    title: ["Cash, Payments and Collections", "Efectivo, pagos y cobranza"],
    rule: [
      "Money attaches <b>to</b> the invoice it settles and interest sits <b>on</b> a balance. Time limits take <b>within</b> or <b>past</b>, and paying early is <b>in</b> advance. When you chase a payment you follow up <b>on</b> the invoice, and you <em>call</em> the customer with <b>no preposition</b>.",
      "El dinero se aplica <b>to</b> la factura que liquida y los intereses recaen <b>on</b> un saldo. Los plazos llevan <b>within</b> o <b>past</b>, y pagar antes es <b>in</b> advance. Cuando persigues un pago, <em>you follow up</em> <b>on</b> the invoice, y con <em>call</em> el cliente va <b>sin preposición</b>.",
    ],
    items: [
      {
        q: "Call ______ the customer",
        k: ["none"],
        ex: "I <em>called the customer</em> twice last week about the open balance.",
        trap: [
          "<span class='x'>✗</span> <em>call to the customer</em>. Spanish <em>llamar a</em> pulls you toward <b>to</b>; the person goes right after <b>call</b>.",
          "<span class='x'>✗</span> <em>call to the customer</em>. <em>Llamar a</em> te jala hacia <b>to</b>; la persona va justo después de <b>call</b>.",
        ],
      },
      {
        q: "Follow up ______",
        k: ["on"],
        hint: ["(an unpaid invoice)", "(una factura sin pagar)"],
        ex: "I will <em>follow up on</em> the two open invoices this afternoon.",
        note: [
          "The topic takes <b>on</b>; the person takes <b>with</b>: <em>follow up with the customer on the invoice</em>.",
          "El tema lleva <b>on</b>; la persona lleva <b>with</b>: <em>follow up with the customer on the invoice</em>.",
        ],
      },
      {
        q: "Be ______ due",
        k: ["past"],
        hint: ["(late)", "(vencido)"],
        ex: "That account is forty-five days <em>past due</em>.",
      },
      {
        q: "Be due ______ thirty days",
        k: ["within", "in"],
        ex: "Payment is <em>due within thirty days</em> of the invoice date.",
      },
      {
        q: "Pay ______ advance",
        k: ["in"],
        ex: "New customers <em>pay in advance</em> until we approve a credit line.",
        trap: [
          "<span class='x'>✗</span> <em>pay by advance</em> · <span class='x'>✗</span> <em>pay for advance</em>. Spanish <em>por adelantado</em> pulls you toward <b>by</b> or <b>for</b>; the fixed phrase is <b>in advance</b>.",
          "<span class='x'>✗</span> <em>pay by advance</em> · <span class='x'>✗</span> <em>pay for advance</em>. <em>Por adelantado</em> te jala hacia <b>by</b> o <b>for</b>; la frase fija es <b>in advance</b>.",
        ],
      },
      {
        q: "Apply the payment ______",
        k: ["to"],
        hint: ["(an invoice)", "(una factura)"],
        ex: "Please <em>apply the payment to</em> the oldest open invoice.",
      },
      {
        q: "Charge interest ______",
        k: ["on"],
        hint: ["(a late balance)", "(un saldo vencido)"],
        ex: "We <em>charge interest on</em> any balance more than sixty days late.",
      },
    ],
  },
  {
    title: ["Audits, Controls and Compliance", "Auditorías, controles y cumplimiento"],
    rule: [
      "Being examined puts you <b>under</b> something (<em>under audit</em>). Rules and the big picture take <b>to</b>: you adhere <b>to</b> a policy, have access <b>to</b> a system, and an error is material <b>to</b> the statements. The verbs <em>answer</em> and <em>lack</em> take <b>no preposition</b>.",
      "Cuando te revisan estás <b>under</b> algo (<em>under audit</em>). Las reglas y el panorama general llevan <b>to</b>: te apegas <b>to</b> a policy, tienes acceso <b>to</b> a system, y un error es material <b>to</b> the statements. Los verbos <em>answer</em> y <em>lack</em> van <b>sin preposición</b>.",
    ],
    items: [
      {
        q: "Be ______ audit",
        k: ["under"],
        ex: "Our last two tax returns are <em>under audit</em>.",
      },
      {
        q: "Answer ______ the auditor's question",
        k: ["none"],
        ex: "It took us two days to <em>answer the auditor's question</em> about the inventory reserve.",
        trap: [
          "<span class='x'>✗</span> <em>answer to the question</em>. Spanish <em>responder a</em> pulls you toward <b>to</b>; you <b>answer</b> a question, an email or a person directly. <b>Answer to</b> someone means that person is your boss.",
          "<span class='x'>✗</span> <em>answer to the question</em>. <em>Responder a</em> te jala hacia <b>to</b>; una pregunta, un correo o una persona van directo después de <b>answer</b>. <b>Answer to</b> alguien significa que esa persona es tu jefe.",
        ],
      },
      {
        q: "Lack ______ supporting documentation",
        k: ["none"],
        ex: "Three of the sampled entries <em>lack supporting documentation</em>.",
        trap: [
          "<span class='x'>✗</span> <em>the entries lack of support</em>. Spanish <em>carecer de</em> pulls you toward <b>of</b>. The verb takes no preposition; only the noun does: <em>a lack of support</em>.",
          "<span class='x'>✗</span> <em>the entries lack of support</em>. <em>Carecer de</em> te jala hacia <b>of</b>. El verbo va sin preposición; solo el sustantivo la lleva: <em>a lack of support</em>.",
        ],
      },
      {
        q: "Provide the auditors ______",
        k: ["with"],
        hint: ["(the documents they asked for)", "(los documentos que pidieron)"],
        ex: "We <em>provided the auditors with</em> every bank confirmation they requested.",
        note: [
          "Two patterns: <b>provide</b> someone <b>with</b> something, or <b>provide</b> something <b>to</b> someone. Do not mix them: <span class='x'>✗</span> <em>provide to the auditors the documents</em>.",
          "Hay dos estructuras: <b>provide</b> a alguien <b>with</b> algo, o <b>provide</b> algo <b>to</b> alguien. No las mezcles: <span class='x'>✗</span> <em>provide to the auditors the documents</em>.",
        ],
      },
      {
        q: "Adhere ______",
        k: ["to"],
        hint: ["(a policy)", "(una política)"],
        ex: "Every approval over that amount has to <em>adhere to</em> the two-signature policy.",
      },
      {
        q: "Have access ______",
        k: ["to"],
        hint: ["(a system)", "(un sistema)"],
        ex: "Only four people <em>have access to</em> the payroll module.",
        note: [
          "The noun takes <b>to</b>; the verb takes nothing: <em>only four people can access the payroll module</em>.",
          "El sustantivo lleva <b>to</b>; el verbo no lleva nada: <em>only four people can access the payroll module</em>.",
        ],
      },
      {
        q: "Be material ______",
        k: ["to"],
        hint: ["(the financial statements)", "(los estados financieros)"],
        ex: "The auditors agreed that the error is not <em>material to</em> the financial statements.",
      },
    ],
  },
  {
    title: [
      "Analysis, Variance and Talking to the Business",
      "Análisis, variaciones y comunicación con el negocio",
    ],
    rule: [
      "<b>By</b> answers two questions: how much (<em>increase by five percent</em>) and what caused it (<em>driven by</em>). An explanation travels <b>to</b> the listener, and you take people <b>through</b> the numbers. <em>Impact</em> and <em>attend</em> take <b>no preposition</b>.",
      "<b>By</b> responde dos preguntas: cuánto (<em>increase by five percent</em>) y qué lo causó (<em>driven by</em>). Una explicación viaja <b>to</b> quien la escucha, y llevas a la gente <b>through</b> the numbers. <em>Impact</em> y <em>attend</em> van <b>sin preposición</b>.",
    ],
    items: [
      {
        q: "Increase ______ five percent",
        k: ["by"],
        ex: "Operating expenses <em>increased by five percent</em> over the prior quarter.",
        trap: [
          "<span class='x'>✗</span> <em>increased in five percent</em>. Spanish <em>aumentar en un cinco por ciento</em> pulls you toward <b>in</b>; after the verb, the size of a change takes <b>by</b>.",
          "<span class='x'>✗</span> <em>increased in five percent</em>. <em>Aumentar en un cinco por ciento</em> te jala hacia <b>in</b>; después del verbo, el tamaño del cambio lleva <b>by</b>.",
        ],
      },
      {
        q: "Be driven ______",
        k: ["by"],
        hint: ["(a cause)", "(una causa)"],
        ex: "The unfavorable variance was <em>driven by</em> higher freight costs.",
      },
      {
        q: "Grow year ______ year",
        k: ["over", "on"],
        ex: "Revenue <em>grew</em> twelve percent <em>year over year</em>.",
        note: [
          "American finance teams say <b>year over year</b>. <b>Year on year</b> is the British form; you will hear it from international colleagues.",
          "Los equipos de finanzas en Estados Unidos dicen <b>year over year</b>. <b>Year on year</b> es la forma británica; la vas a escuchar con colegas internacionales.",
        ],
      },
      {
        q: "Impact ______ the margin",
        k: ["none"],
        ex: "The new tariff will <em>impact the margin</em> on two product lines.",
        trap: [
          "<span class='x'>✗</span> <em>it will impact in the margin</em>. Spanish <em>impactar en</em> pulls you toward <b>in</b>. The verb takes its object directly; only the noun needs a preposition: <em>have an impact on the margin</em>.",
          "<span class='x'>✗</span> <em>it will impact in the margin</em>. <em>Impactar en</em> te jala hacia <b>in</b>. El verbo lleva el objeto directo; solo el sustantivo necesita preposición: <em>have an impact on the margin</em>.",
        ],
      },
      {
        q: "Explain the variance ______ the sales team",
        k: ["to"],
        ex: "I had to <em>explain the variance to the sales team</em> in plain language.",
        trap: [
          "<span class='x'>✗</span> <em>explain me the variance</em> · <span class='x'>✗</span> <em>explain the team the variance</em>. Spanish <em>explícame</em> puts the person first; in English the person always comes after <b>to</b>: <em>explain it to me</em>.",
          "<span class='x'>✗</span> <em>explain me the variance</em> · <span class='x'>✗</span> <em>explain the team the variance</em>. <em>Explícame</em> pone primero a la persona; en inglés la persona siempre va después de <b>to</b>: <em>explain it to me</em>.",
        ],
      },
      {
        q: "Walk the team ______ the numbers",
        k: ["through"],
        ex: "Let me <em>walk the team through the numbers</em> before we open it up for questions.",
      },
      {
        q: "Attend ______ the review meeting",
        k: ["none"],
        ex: "Both plant controllers <em>attended the review meeting</em> on Tuesday.",
        trap: [
          "<span class='x'>✗</span> <em>attend to the meeting</em>. Spanish <em>asistir a</em> pulls you toward <b>to</b>; you <b>attend</b> a meeting directly. <b>Attend to</b> means to take care of something.",
          "<span class='x'>✗</span> <em>attend to the meeting</em>. <em>Asistir a</em> te jala hacia <b>to</b>; a una junta se asiste con <b>attend</b> a secas. <b>Attend to</b> significa encargarse de algo.",
        ],
      },
    ],
  },
];
