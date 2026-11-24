import type { RoleGroup } from "./types";

// Logistics and supply chain: prepositions from the dock, the border and the carrier call.

export const groups: RoleGroup[] = [
  {
    title: ["Shipping and Receiving", "Embarque y recepción"],
    rule: [
      "Freight moves <b>to</b> a destination and arrives <b>at</b> a point: a dock, a warehouse, a port. While it is moving it is <b>in</b> a state (<em>in transit</em>) or <b>on</b> a path (<em>on the way</em>). <b>For</b> names what the freight is set aside for.",
      "La carga se mueve <b>to</b> un destino y llega <b>at</b> un punto: un andén, un almacén, un puerto. Mientras se mueve está <b>in</b> un estado (<em>in transit</em>) o <b>on</b> una ruta (<em>on the way</em>). <b>For</b> indica para qué está apartada la carga.",
    ],
    items: [
      {
        q: "Ship ______",
        k: ["to"],
        hint: ["(a destination)", "(un destino)"],
        ex: "We <em>ship to</em> Laredo twice a week.",
        note: [
          "The origin takes <b>from</b>: <em>we ship from our Monterrey plant to Laredo.</em>",
          "El origen lleva <b>from</b>: <em>we ship from our Monterrey plant to Laredo.</em>",
        ],
      },
      {
        q: "Arrive ______",
        k: ["at"],
        hint: ["(a dock or a warehouse)", "(un andén o un almacén)"],
        ex: "The truck <em>arrived at</em> the dock forty minutes late.",
        trap: [
          "<span class='x'>✗</span> <em>arrive to the dock</em>. Spanish <em>llegar a</em> pulls you toward <b>to</b>; English uses <b>at</b> for a specific point and <b>in</b> for a city or country.",
          "<span class='x'>✗</span> <em>arrive to the dock</em>. <em>Llegar a</em> te jala hacia <b>to</b>; en inglés es <b>at</b> para un punto específico e <b>in</b> para una ciudad o un país.",
        ],
      },
      {
        q: "Reach ______ the destination",
        k: ["none"],
        ex: "The container <em>reached the port</em> on Tuesday night.",
        trap: [
          "<span class='x'>✗</span> <em>reach to the port</em>. <b>Arrive</b> needs <b>at</b>, but <b>reach</b> takes its object directly.",
          "<span class='x'>✗</span> <em>reach to the port</em>. <b>Arrive</b> necesita <b>at</b>, pero <b>reach</b> lleva el objeto directo, sin preposición.",
        ],
      },
      {
        q: "Be ______ transit",
        k: ["in"],
        ex: "Two of the three containers are still <em>in transit</em>.",
      },
      {
        q: "Be ______ the way",
        k: ["on"],
        hint: ["(already moving toward you)", "(ya viene hacia ti)"],
        ex: "The driver just called; the replacement parts are <em>on the way</em>.",
        trap: [
          "<span class='x'>✗</span> <em>the truck is in the way</em>. Spanish <em>en camino</em> suggests <b>in</b>, but <b>in the way</b> means it is blocking something. Coming toward you is <b>on the way</b>.",
          "<span class='x'>✗</span> <em>the truck is in the way</em>. <em>En camino</em> sugiere <b>in</b>, pero <b>in the way</b> significa que está estorbando. Si ya viene, es <b>on the way</b>.",
        ],
      },
      {
        q: "Sign ______",
        k: ["for"],
        hint: ["(a delivery)", "(una entrega)"],
        ex: "Someone on the receiving team has to <em>sign for</em> every delivery.",
        note: [
          "You <b>sign</b> a document (<em>sign the bill of lading</em>), but you <b>sign for</b> the goods you receive.",
          "Un documento se firma con <b>sign</b> a secas (<em>sign the bill of lading</em>), pero la mercancía que recibes lleva <b>sign for</b>.",
        ],
      },
      {
        q: "Be scheduled ______ delivery",
        k: ["for"],
        ex: "Your order is <em>scheduled for delivery</em> on Thursday morning.",
      },
    ],
  },
  {
    title: ["Customs and Compliance", "Aduanas y cumplimiento"],
    rule: [
      "Rules sit above the goods: you comply <b>with</b> them, you are subject <b>to</b> them, or you are exempt <b>from</b> them. Money goes <b>on</b> the goods (<em>duty on</em>), and you apply <b>for</b> the document you want.",
      "Las reglas están por encima de la mercancía: cumples <b>with</b> ellas, estás sujeto <b>to</b> ellas o estás exento <b>from</b> ellas. El dinero recae <b>on</b> la mercancía (<em>duty on</em>), y solicitas <b>for</b> el documento que quieres.",
    ],
    items: [
      {
        q: "Clear ______ customs",
        k: ["none"],
        ex: "The shipment <em>cleared customs</em> in under four hours.",
        note: [
          "With <b>go</b> or <b>pass</b> you need <b>through</b>: <em>go through customs</em>. With <b>clear</b>, the shipment clears customs directly.",
          "Con <b>go</b> o <b>pass</b> necesitas <b>through</b>: <em>go through customs</em>. Con <b>clear</b>, el embarque va directo: <em>clear customs</em>.",
        ],
      },
      {
        q: "Comply ______",
        k: ["with"],
        ex: "Every pallet has to <em>comply with</em> the labeling requirements.",
        note: [
          "The noun keeps the preposition: <em>in compliance with the regulations</em>.",
          "El sustantivo conserva la preposición: <em>in compliance with the regulations</em>.",
        ],
      },
      {
        q: "Be subject ______",
        k: ["to"],
        hint: ["(duties or an inspection)", "(aranceles o una inspección)"],
        ex: "Those components are <em>subject to</em> a five percent duty.",
      },
      {
        q: "Be exempt ______",
        k: ["from"],
        ex: "Samples under that value are <em>exempt from</em> duty.",
        trap: [
          "<span class='x'>✗</span> <em>exempt of duty</em>. Spanish <em>exento de</em> pulls you toward <b>of</b>; English uses <b>from</b>.",
          "<span class='x'>✗</span> <em>exempt of duty</em>. <em>Exento de</em> te jala hacia <b>of</b>; en inglés es <b>from</b>.",
        ],
      },
      {
        q: "Apply ______",
        k: ["for"],
        hint: ["(a permit)", "(un permiso)"],
        ex: "We <em>applied for</em> the import permit three weeks ago.",
        note: [
          "<b>Apply for</b> is what you want to get; <b>apply to</b> is where you send the application: <em>apply to the agency for a permit</em>.",
          "<b>Apply for</b> es lo que quieres obtener; <b>apply to</b> es a quién le mandas la solicitud: <em>apply to the agency for a permit</em>.",
        ],
      },
      {
        q: "Pay duty ______",
        k: ["on"],
        hint: ["(the goods)", "(la mercancía)"],
        ex: "We <em>pay duty on</em> the full invoice value, including freight.",
      },
      {
        q: "Be held ______ customs",
        k: ["at", "in"],
        ex: "The load has been <em>held at customs</em> since Friday because of a missing certificate.",
      },
    ],
  },
  {
    title: ["Inventory and the Warehouse", "Inventario y almacén"],
    rule: [
      "Think of inventory as a supply you stand on. What you have is <b>on</b> hand; what is late is <b>on</b> back order; when the supply shrinks you run low <b>on</b> it. Leaving the supply is <b>out of</b>, and being inside it is <b>in</b> stock.",
      "Piensa en el inventario como una reserva sobre la que estás parado. Lo que tienes está <b>on</b> hand; lo que viene atrasado está <b>on</b> back order; cuando la reserva baja, <em>you run low</em> <b>on</b> it. Salir de la reserva es <b>out of</b>, y estar dentro es <b>in</b> stock.",
    ],
    items: [
      {
        q: "Be ______ stock",
        k: ["in"],
        hint: ["(available now)", "(disponible ahora)"],
        ex: "All four sizes are <em>in stock</em> at the Guadalajara warehouse.",
        note: ["The opposite is <b>out of stock</b>.", "Lo contrario es <b>out of stock</b>."],
      },
      {
        q: "Run out ______",
        k: ["of"],
        ex: "We <em>ran out of</em> stretch wrap halfway through the second shift.",
      },
      {
        q: "Run low ______",
        k: ["on"],
        ex: "We are <em>running low on</em> pallets, so I moved the order up.",
        note: [
          "<b>Run low on</b> means some is left; <b>run out of</b> means none is left.",
          "<b>Run low on</b> significa que todavía queda algo; <b>run out of</b>, que ya no queda nada.",
        ],
      },
      {
        q: "Be ______ back order",
        k: ["on"],
        ex: "That part number is <em>on back order</em> until the middle of next month.",
      },
      {
        q: "Have units ______ hand",
        k: ["on"],
        ex: "We <em>have</em> about four hundred <em>units on hand</em>, enough for nine days.",
        note: [
          "<b>On hand</b> is physical stock you can ship today. <b>At hand</b> means nearby, and <b>in hand</b> means under control; neither one is an inventory term.",
          "<b>On hand</b> es el inventario físico que puedes embarcar hoy. <b>At hand</b> significa que algo está cerca, e <b>in hand</b>, que está bajo control; ninguno de los dos es un término de inventario.",
        ],
      },
      {
        q: "Keep track ______",
        k: ["of"],
        ex: "The scanner lets us <em>keep track of</em> every pallet from receiving to the outbound dock.",
      },
      {
        q: "Match ______ the system count",
        k: ["none"],
        ex: "The physical count does not <em>match the system</em> for aisle twelve.",
        trap: [
          "<span class='x'>✗</span> <em>match with the system</em>. Spanish <em>coincidir con</em> pulls you toward <b>with</b>; the verb <b>match</b> takes its object directly.",
          "<span class='x'>✗</span> <em>match with the system</em>. <em>Coincidir con</em> te jala hacia <b>with</b>; el verbo <b>match</b> lleva el objeto directo, sin preposición.",
        ],
      },
    ],
  },
  {
    title: ["Delays, Problems and Claims", "Retrasos, problemas y reclamaciones"],
    rule: [
      "Time is a line: you are <b>on</b> it (<em>on time</em>) or <b>behind</b> it (<em>behind schedule</em>). A stopped truck is <b>at</b> a point, and you wait <b>for</b> it. The verbs that pass the news along, such as <em>notify</em>, and the verb <em>meet</em> with a deadline take <b>no preposition</b>.",
      "El tiempo es una línea: estás <b>on</b> ella (<em>on time</em>) o <b>behind</b> ella (<em>behind schedule</em>). Un camión detenido está <b>at</b> un punto, y lo esperas con <b>for</b>. Los verbos que pasan la noticia, como <em>notify</em>, y el verbo <em>meet</em> con una fecha límite van <b>sin preposición</b>.",
    ],
    items: [
      {
        q: "Deliver ______ time",
        k: ["on"],
        ex: "That carrier <em>delivers on time</em> about ninety-six percent of the time.",
        trap: [
          "<span class='x'>✗</span> <em>deliver at time</em>. Spanish <em>a tiempo</em> does not map to <b>at</b>. Punctual is <b>on time</b>; <b>in time</b> means early enough for something else to happen.",
          "<span class='x'>✗</span> <em>deliver at time</em>. <em>A tiempo</em> no se traduce con <b>at</b>. Puntual es <b>on time</b>; <b>in time</b> significa con el margen suficiente para que pase otra cosa.",
        ],
      },
      {
        q: "Be ______ schedule",
        k: ["behind"],
        hint: ["(late)", "(con retraso)"],
        ex: "The vessel is three days <em>behind schedule</em> because of the weather.",
        note: [
          "The other two positions: <b>on schedule</b> (as planned) and <b>ahead of schedule</b> (early).",
          "Las otras dos posiciones: <b>on schedule</b> (según el plan) y <b>ahead of schedule</b> (antes de lo planeado).",
        ],
      },
      {
        q: "Wait ______",
        k: ["for"],
        hint: ["(a truck)", "(un camión)"],
        ex: "The dock crew has been <em>waiting for</em> that truck since six this morning.",
        trap: [
          "<span class='x'>✗</span> <em>wait the truck</em>. Spanish <em>esperar</em> takes a direct object; English <b>wait</b> always needs <b>for</b> before the thing you expect.",
          "<span class='x'>✗</span> <em>wait the truck</em>. <em>Esperar</em> lleva objeto directo; en inglés <b>wait</b> siempre necesita <b>for</b> antes de lo que esperas.",
        ],
      },
      {
        q: "Be stuck ______ the border",
        k: ["at"],
        ex: "Both trucks are <em>stuck at the border</em> waiting for a secondary inspection.",
        trap: [
          "<span class='x'>✗</span> <em>stuck in the border</em>. Spanish <em>en la frontera</em> pulls you toward <b>in</b>; a border, a port or a dock is a point, so English uses <b>at</b>.",
          "<span class='x'>✗</span> <em>stuck in the border</em>. <em>En la frontera</em> te jala hacia <b>in</b>; una frontera, un puerto o un andén es un punto, así que en inglés va <b>at</b>.",
        ],
      },
      {
        q: "File a claim ______",
        k: ["with", "against"],
        hint: ["(the carrier)", "(el transportista)"],
        ex: "We <em>filed a claim with</em> the carrier for the six damaged pallets.",
        note: [
          "<b>With</b> names the company that receives the paperwork; <b>against</b> names the party you hold responsible. For a carrier, both are standard.",
          "<b>With</b> señala a la empresa que recibe el trámite; <b>against</b>, a la parte que consideras responsable. Con un transportista, las dos son correctas.",
        ],
      },
      {
        q: "Notify ______ the customer",
        k: ["none"],
        ex: "Please <em>notify the customer</em> before noon if the load is going to miss its window.",
        trap: [
          "<span class='x'>✗</span> <em>notify to the customer</em>. Spanish <em>notificar a</em> pulls you toward <b>to</b>; the person goes right after <b>notify</b>.",
          "<span class='x'>✗</span> <em>notify to the customer</em>. <em>Notificar a</em> te jala hacia <b>to</b>; la persona va justo después de <b>notify</b>.",
        ],
      },
      {
        q: "Meet ______ the deadline",
        k: ["none"],
        ex: "If the truck leaves by four, we can still <em>meet the deadline</em>.",
        trap: [
          "<span class='x'>✗</span> <em>meet with the deadline</em>. Spanish <em>cumplir con</em> pulls you toward <b>with</b>; you <b>meet</b> a deadline, a delivery window or a requirement directly.",
          "<span class='x'>✗</span> <em>meet with the deadline</em>. <em>Cumplir con</em> te jala hacia <b>with</b>; una fecha límite, una ventana de entrega o un requisito van directo después de <b>meet</b>.",
        ],
      },
    ],
  },
  {
    title: ["Carriers, Suppliers and Cost", "Transportistas, proveedores y costos"],
    rule: [
      "Goods come <b>from</b> a supplier and business moves <b>to</b> a new one. Money lands <b>on</b> what you buy (<em>spend on</em>) and you ask or charge <b>for</b> the thing with a price. The person you get in touch with follows <em>contact</em> with <b>no preposition</b>.",
      "La mercancía viene <b>from</b> un proveedor y el negocio se cambia <b>to</b> uno nuevo. El dinero recae <b>on</b> lo que compras (<em>spend on</em>), y pides o cobras <b>for</b> aquello que tiene precio. La persona con la que te comunicas va después de <em>contact</em> <b>sin preposición</b>.",
    ],
    items: [
      {
        q: "Contact ______ the carrier",
        k: ["none"],
        ex: "I <em>contacted the carrier</em> twice this morning about the pickup.",
        trap: [
          "<span class='x'>✗</span> <em>contact to the carrier</em> · <span class='x'>✗</span> <em>contact with the carrier</em>. Spanish <em>contactar a</em> and <em>comunicarse con</em> add a preposition; the verb <b>contact</b> does not.",
          "<span class='x'>✗</span> <em>contact to the carrier</em> · <span class='x'>✗</span> <em>contact with the carrier</em>. <em>Contactar a</em> y <em>comunicarse con</em> llevan preposición; el verbo <b>contact</b> no.",
        ],
      },
      {
        q: "Ask ______ a quote",
        k: ["for"],
        ex: "I <em>asked for a quote</em> from three carriers on the Querétaro lane.",
        note: [
          "<b>Request</b> works the other way and takes no preposition: <em>request a quote</em>.",
          "<b>Request</b> funciona al revés y va sin preposición: <em>request a quote</em>.",
        ],
      },
      {
        q: "Order ______",
        k: ["from"],
        hint: ["(a supplier)", "(un proveedor)"],
        ex: "We <em>order</em> the corrugated boxes <em>from</em> a supplier in Texas.",
        note: [
          "The supplier is the source, so it takes <b>from</b>, even though Spanish says <em>pedirle a</em>.",
          "El proveedor es el origen, así que lleva <b>from</b>, aunque en español digas <em>pedirle a</em>.",
        ],
      },
      {
        q: "Spend ______",
        k: ["on"],
        hint: ["(freight)", "(fletes)"],
        ex: "We <em>spend</em> almost a third of the budget <em>on</em> outbound freight.",
        trap: [
          "<span class='x'>✗</span> <em>spend in freight</em>. Spanish <em>gastar en</em> pulls you toward <b>in</b>; English money is spent <b>on</b> things.",
          "<span class='x'>✗</span> <em>spend in freight</em>. <em>Gastar en</em> te jala hacia <b>in</b>; en inglés el dinero se gasta <b>on</b> algo.",
        ],
      },
      {
        q: "Charge ______",
        k: ["for"],
        hint: ["(a service)", "(un servicio)"],
        ex: "The carrier <em>charges for</em> detention after the first two hours.",
      },
      {
        q: "Switch ______",
        k: ["to"],
        hint: ["(a new carrier)", "(un transportista nuevo)"],
        ex: "We <em>switched to</em> a regional carrier for the short lanes.",
      },
      {
        q: "Be ______ contract",
        k: ["under"],
        ex: "We are <em>under contract</em> with that carrier through the end of March.",
      },
    ],
  },
];
