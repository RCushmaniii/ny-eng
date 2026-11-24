import type { RoleGroup } from "./types";

export const groups: RoleGroup[] = [
  {
    title: ["Clients and appointments", "Clientes y citas"],
    rule: [
      "The appointment is <b>with</b> the person and <b>for</b> the service; the clock takes <b>on</b> when you keep to it and <b>behind</b> when you do not. <em>Call</em> and <em>remind</em> take the client directly.",
      "La cita es <b>with</b> la persona y <b>for</b> el servicio; el reloj lleva <b>on</b> cuando lo respetas y <b>behind</b> cuando no. <em>Call</em> y <em>remind</em> toman al cliente directamente.",
    ],
    items: [
      {
        q: "Book an appointment ______",
        k: ["with"],
        hint: ["(a stylist)", "(una estilista)"],
        ex: "She <em>booked an appointment with</em> our senior colorist.",
        note: [
          "<b>With</b> the person, <b>for</b> the service: <em>an appointment <b>with</b> her <b>for</b> a haircut</em>.",
          "<b>With</b> la persona, <b>for</b> el servicio: <em>an appointment <b>with</b> her <b>for</b> a haircut</em>.",
        ],
      },
      {
        q: "Come in ______",
        k: ["for"],
        hint: ["(a service)", "(un servicio)"],
        ex: "She <em>comes in for</em> a trim every six weeks.",
      },
      {
        q: "Be ______ time",
        k: ["on"],
        hint: ["(punctual)", "(puntual)"],
        ex: "Please <em>be on time</em>; we are fully booked on Saturdays.",
        note: [
          "<b>On time</b> is punctual. <b>In time</b> means early enough for something: <em>in time for the wedding</em>.",
          "<em><b>On</b> time</em> es puntual. <em><b>In</b> time</em> significa con tiempo suficiente para algo: <em>in time for the wedding</em>.",
        ],
      },
      {
        q: "Run ______ schedule",
        k: ["behind"],
        hint: ["(late)", "(con retraso)"],
        ex: "We are <em>running behind schedule</em>, so your stylist will be about ten minutes late.",
      },
      {
        q: "Fit a client ______",
        k: ["in"],
        hint: ["(find a time on a full day)", "(encontrarle un espacio en un día lleno)"],
        ex: "I can <em>fit you in</em> at four if that works.",
        note: [
          "Also <em>squeeze someone in</em>, when the day is really full.",
          "También <em>squeeze someone in</em>, cuando el día está de verdad lleno.",
        ],
      },
      {
        q: "Call ______ the client",
        k: ["none"],
        ex: "Can you <em>call the client</em> and confirm her appointment for tomorrow?",
        trap: [
          "<span class='x'>✗</span> <em>call to the client</em>. The personal <em>a</em> of <em>llamar a</em> does not carry over: <b>call</b> takes the person directly.",
          "<span class='x'>✗</span> <em>call to the client</em>. La «a» personal de «llamar a» no pasa al inglés: <b>call</b> toma a la persona directamente.",
        ],
      },
      {
        q: "Remind ______ the client about her appointment",
        k: ["none"],
        ex: "We <em>remind the client</em> by text the day before.",
        trap: [
          "<span class='x'>✗</span> <em>remind to the client</em> / <em>remember the client her appointment</em>. Spanish <em>recordar</em> is two English verbs: you <b>remind</b> a person, directly, and you <b>remember</b> something yourself.",
          "<span class='x'>✗</span> <em>remind to the client</em> / <em>remember the client her appointment</em>. «Recordar» son dos verbos en inglés: <b>remind</b> a otra persona, directo, y <b>remember</b> cuando eres tú quien se acuerda.",
        ],
      },
    ],
  },
  {
    title: ["Services and the chair", "Los servicios y el sillón"],
    rule: [
      "Price and reputation point <b>for</b> the service: you charge <b>for</b> it and are known <b>for</b> it. A result sits <b>on</b> the person and the client is happy <b>with</b> it; the particles <b>off</b> and <b>up</b> say what the scissors or the color do.",
      "El precio y la reputación apuntan <b>for</b> el servicio: <em>charge <b>for</b></em>, <em>be known <b>for</b></em>. El resultado queda <b>on</b> la persona y el cliente está contento <b>with</b> él; las partículas <b>off</b> y <b>up</b> dicen lo que hacen las tijeras o el color.",
    ],
    items: [
      {
        q: "Ask ______ the client what she wants",
        k: ["none"],
        ex: "Always <em>ask the client</em> what she wants before you pick up the scissors.",
        trap: [
          "<span class='x'>✗</span> <em>ask to the client</em>. Spanish <em>preguntarle a</em> adds a preposition; <b>ask</b> takes the person directly.",
          "<span class='x'>✗</span> <em>ask to the client</em>. «Preguntarle a» agrega una preposición; <b>ask</b> toma a la persona directamente.",
        ],
      },
      {
        q: "Charge ______",
        k: ["for"],
        hint: ["(a service)", "(un servicio)"],
        ex: "How much do you <em>charge for</em> highlights?",
        note: [
          "You charge the client an amount <b>for</b> the service: <em>we charge sixty dollars <b>for</b> a cut</em>.",
          "Le cobras al cliente una cantidad <b>for</b> el servicio: <em>we charge sixty dollars <b>for</b> a cut</em>.",
        ],
      },
      {
        q: "Be known ______",
        k: ["for"],
        hint: ["(what you do best)", "(lo que mejor haces)"],
        ex: "Our salon <em>is known for</em> its color work.",
      },
      {
        q: "Be happy ______",
        k: ["with"],
        hint: ["(the result)", "(el resultado)"],
        ex: "I want every client to <em>be happy with</em> the result before she leaves.",
      },
      {
        q: "Take a little ______ the ends",
        k: ["off"],
        ex: "Do you want me to <em>take a little off the ends</em>?",
      },
      {
        q: "Touch ______ the roots",
        k: ["up"],
        ex: "She comes in once a month to <em>touch up the roots</em>.",
        note: [
          "The noun is <em>a touch-up</em>: <em>a root touch-up</em>.",
          "El sustantivo es <em>a touch-up</em>: <em>a root touch-up</em>.",
        ],
      },
      {
        q: "Look good ______",
        k: ["on"],
        hint: ["(a person)", "(una persona)"],
        ex: "That shade would <em>look good on</em> you.",
        trap: [
          "<span class='x'>✗</span> <em>That color looks good to you</em> / <em>in you</em>. For Spanish <em>te queda bien</em>, English puts the color or the cut <b>on</b> the person.",
          "<span class='x'>✗</span> <em>That color looks good to you</em> / <em>in you</em>. Para «te queda bien», el inglés pone el color o el corte <b>on</b> la persona.",
        ],
      },
    ],
  },
  {
    title: ["Staff", "El personal"],
    rule: [
      "How someone is paid or absent is a state: <b>on</b> commission, calling <b>in</b> sick, someone else filling in <b>for</b> her. You look <b>for</b> the person you need, but once you find her, <em>hire</em> takes her directly.",
      "Cómo se le paga a alguien o por qué falta es un estado: <em><b>on</b> commission</em>, <em>call <b>in</b> sick</em>, y otra persona que la cubre (<em>fill in <b>for</b></em>). Buscas (<em>look <b>for</b></em>) a la persona que necesitas, pero cuando la encuentras, <em>hire</em> la toma directamente.",
    ],
    items: [
      {
        q: "Hire ______ a new stylist",
        k: ["none"],
        ex: "We need to <em>hire a new stylist</em> before the holidays.",
        trap: [
          "<span class='x'>✗</span> <em>hire to a new stylist</em>. The personal <em>a</em> of <em>contratar a</em> does not carry over: <b>hire</b> takes the person directly.",
          "<span class='x'>✗</span> <em>hire to a new stylist</em>. La «a» personal de «contratar a» no pasa al inglés: <b>hire</b> toma a la persona directamente.",
        ],
      },
      {
        q: "Look ______",
        k: ["for"],
        hint: ["(someone you need to hire)", "(alguien que necesitas contratar)"],
        ex: "We are <em>looking for</em> a receptionist who speaks English and Spanish.",
        trap: [
          "<span class='x'>✗</span> <em>We are looking a receptionist</em>. Spanish <em>buscar</em> takes a direct object; English needs <b>look for</b>.",
          "<span class='x'>✗</span> <em>We are looking a receptionist</em>. «Buscar» lleva objeto directo; en inglés necesitas <em>look <b>for</b></em>.",
        ],
      },
      {
        q: "Be paid ______ commission",
        k: ["on"],
        ex: "Our stylists <em>are paid on commission</em>, plus tips.",
        note: [
          "<em>On commission</em> means a percentage of each service instead of a fixed salary.",
          "<em>On commission</em> significa un porcentaje de cada servicio en lugar de un sueldo fijo.",
        ],
      },
      {
        q: "Rent a chair ______",
        k: ["from"],
        hint: ["(the salon owner)", "(la dueña del salón)"],
        ex: "Two of our stylists <em>rent a chair from</em> us instead of working on commission.",
        note: [
          "The stylist rents <b>from</b> the owner; the owner rents the chair <b>to</b> the stylist.",
          "La estilista renta <b>from</b> la dueña; la dueña le renta el sillón <b>to</b> la estilista.",
        ],
      },
      {
        q: "Fill in ______",
        k: ["for"],
        hint: ["(an absent stylist)", "(una estilista ausente)"],
        ex: "Can you <em>fill in for</em> her on Saturday?",
      },
      {
        q: "Call ______ sick",
        k: ["in"],
        ex: "Two stylists <em>called in sick</em> this morning.",
        note: [
          "To phone work and say you are too sick to come in.",
          "Avisar por teléfono al trabajo que estás enferma y no vas a ir.",
        ],
      },
      {
        q: "Get along ______",
        k: ["with"],
        hint: ["(the rest of the team)", "(el resto del equipo)"],
        ex: "The new assistant <em>gets along with</em> everyone on the team.",
      },
    ],
  },
  {
    title: ["Products and suppliers", "Productos y proveedores"],
    rule: [
      "Product comes <b>from</b> the supplier and money goes <b>for</b> it. Availability is a state: <b>in</b> stock, <b>out of</b> it when you run out, <b>on</b> sale when the price drops. <em>Contact</em> takes the supplier directly.",
      "El producto viene <b>from</b> el proveedor y el dinero va <b>for</b> el producto. La disponibilidad es un estado: <em><b>in</b> stock</em>, <em>run <b>out of</b></em> cuando se acaba, <em><b>on</b> sale</em> cuando baja el precio. <em>Contact</em> toma al proveedor directamente.",
    ],
    items: [
      {
        q: "Contact ______ the supplier",
        k: ["none"],
        ex: "I will <em>contact the supplier</em> about the late delivery.",
        trap: [
          "<span class='x'>✗</span> <em>contact with the supplier</em> / <em>contact to the supplier</em>. The verb <b>contact</b> takes the person directly. Only the noun uses <b>with</b>: <em>be in contact <b>with</b></em>.",
          "<span class='x'>✗</span> <em>contact with the supplier</em> / <em>contact to the supplier</em>. El verbo <b>contact</b> toma a la persona directamente. Solo el sustantivo usa <b>with</b>: <em>be in contact <b>with</b></em>.",
        ],
      },
      {
        q: "Order ______",
        k: ["from"],
        hint: ["(a supplier)", "(un proveedor)"],
        ex: "Which distributor do you <em>order from</em>?",
        trap: [
          "<span class='x'>✗</span> <em>We order to the distributor</em>. Spanish <em>pedirle a</em> suggests <b>to</b>, but in English the product comes <b>from</b> the supplier.",
          "<span class='x'>✗</span> <em>We order to the distributor</em>. «Pedirle a» sugiere <b>to</b>, pero en inglés el producto viene <b>from</b> el proveedor.",
        ],
      },
      {
        q: "Run ______",
        k: ["out of"],
        hint: ["(have none left)", "(quedarte sin nada)"],
        ex: "We <em>ran out of</em> developer on Saturday afternoon.",
        note: [
          "With no object, drop <b>of</b>: <em>we ran out</em>.",
          "Sin objeto, quita <b>of</b>: <em>we ran out</em>.",
        ],
      },
      {
        q: "Be ______ stock",
        k: ["in"],
        hint: ["(available)", "(disponible)"],
        ex: "That shampoo <em>is in stock</em> again.",
        note: ["The opposite is <em>out of stock</em>.", "Lo contrario es <em>out of stock</em>."],
      },
      {
        q: "Pay ______",
        k: ["for"],
        hint: ["(the products)", "(los productos)"],
        ex: "We <em>pay for</em> our products when they are delivered.",
        trap: [
          "<span class='x'>✗</span> <em>I paid the products</em>. You <b>pay</b> a person or a bill, but you <b>pay for</b> the thing you buy.",
          "<span class='x'>✗</span> <em>I paid the products</em>. Dices <b>pay</b> a una persona o una cuenta, pero <em>pay <b>for</b></em> lo que compras.",
        ],
      },
      {
        q: "Stock up ______",
        k: ["on"],
        ex: "We <em>stock up on</em> hair color before the holidays.",
      },
      {
        q: "Be ______ sale",
        k: ["on"],
        hint: ["(at a lower price)", "(con descuento)"],
        ex: "All styling products <em>are on sale</em> this week.",
        trap: [
          "<span class='x'>✗</span> <em>in sale</em>. <b>On sale</b> means at a reduced price. <b>For sale</b> only means available to buy: <em>the salon is for sale</em>.",
          "<span class='x'>✗</span> <em>in sale</em>. <em><b>On</b> sale</em> significa con precio rebajado. <em><b>For</b> sale</em> solo significa que está a la venta: <em>the salon is for sale</em>.",
        ],
      },
    ],
  },
  {
    title: ["Running the business", "Llevar el negocio"],
    rule: [
      "Money lands <b>on</b> what you buy and prices move <b>by</b> an amount. You apply <b>for</b> what you want, stay <b>in</b> business and keep track <b>of</b> the numbers; <em>reach</em> takes the target directly.",
      "El dinero cae <b>on</b> lo que compras y los precios se mueven <b>by</b> una cantidad. Solicitas (<em>apply <b>for</b></em>) lo que quieres, sigues <em><b>in</b> business</em> y llevas el control (<em>keep track <b>of</b></em>) de los números; <em>reach</em> toma la meta directamente.",
    ],
    items: [
      {
        q: "Reach ______ the monthly target",
        k: ["none"],
        ex: "We <em>reached the monthly target</em> a week early.",
        trap: [
          "<span class='x'>✗</span> <em>We reached to the target</em>. Spanish <em>llegar a</em> adds a preposition; <b>reach</b> takes its object directly.",
          "<span class='x'>✗</span> <em>We reached to the target</em>. «Llegar a» agrega una preposición; <b>reach</b> lleva su objeto directo.",
        ],
      },
      {
        q: "Spend money ______",
        k: ["on"],
        hint: ["(what you buy)", "(lo que compras)"],
        ex: "I do not want to <em>spend money on</em> advertising that brings in no clients.",
        trap: [
          "<span class='x'>✗</span> <em>spend money in products</em>. Spanish <em>gastar en</em> suggests <b>in</b>; English spends money <b>on</b> things.",
          "<span class='x'>✗</span> <em>spend money in products</em>. «Gastar en» sugiere <b>in</b>; en inglés el dinero se gasta <b>on</b> las cosas.",
        ],
      },
      {
        q: "Apply ______",
        k: ["for"],
        hint: ["(a license or a loan)", "(una licencia o un préstamo)"],
        ex: "We <em>applied for</em> a business license in March.",
        note: [
          "You apply <b>for</b> the thing you want and <b>to</b> the office or bank that grants it.",
          "Dices <em>apply <b>for</b></em> lo que quieres y <em>apply <b>to</b></em> la oficina o el banco que lo otorga.",
        ],
      },
      {
        q: "Be ______ business",
        k: ["in"],
        hint: ["(operating)", "(en operación)"],
        ex: "We have <em>been in business</em> for twelve years.",
      },
      {
        q: "Raise prices ______",
        k: ["by"],
        hint: ["(an amount)", "(una cantidad)"],
        ex: "We <em>raised prices by</em> ten percent in January.",
        note: [
          "<b>By</b> gives the size of the change; <b>to</b> gives the new price: <em>we raised it <b>to</b> forty dollars</em>.",
          "<b>By</b> da el tamaño del cambio; <b>to</b> da el precio nuevo: <em>we raised it <b>to</b> forty dollars</em>.",
        ],
      },
      {
        q: "Take ______ a loan",
        k: ["out"],
        ex: "We <em>took out a loan</em> to remodel the salon.",
      },
      {
        q: "Keep track ______",
        k: ["of"],
        ex: "I <em>keep track of</em> every expense in a spreadsheet.",
      },
    ],
  },
];
