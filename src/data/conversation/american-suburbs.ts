// Talking About Life in the American Suburbs — bilingual vocabulary bank.
// Every explanatory string is a pair: [English, Mexican Professional Spanish (tú)].
// The English being taught (q and ex) is never translated.
// Descriptive rule for this file: say plainly how suburban life works and what the words
// mean. No mockery, no statistics, no dollar figures.

import type { TopicBank } from "./types";

export const bank: TopicBank = {
  groups: [
    {
      title: ["Where People Live", "Dónde vive la gente"],
      rule: [
        "Most of your US colleagues do not live in the city whose name is on the office address. They live in a town or neighborhood outside it, and the words below are how they place themselves on the map.",
        "La mayoría de tus colegas en Estados Unidos no vive en la ciudad que aparece en la dirección de la oficina. Vive en un pueblo o una zona residencial a las afueras, y con estas palabras se ubican en el mapa.",
      ],
      items: [
        {
          q: "Suburb",
          hint: ["(false friend — important)", "(falso amigo — importante)"],
          a: [
            "A residential town or area just outside a city, usually made up of houses with yards. In the US it is typically a middle-class, sought-after place to live.",
            "Zona o pueblo residencial a las afueras de una ciudad, casi siempre de casas con jardín. En Estados Unidos suele ser un lugar de clase media y muy buscado para vivir.",
          ],
          ex: "We moved out to the <em>suburbs</em> when the kids started school.",
          trap: [
            "Spanish <em>suburbio</em> suggests a poor area on the edge of town. A US <b>suburb</b> is closer to a Mexican <em>zona residencial</em> or <em>fraccionamiento</em>. If a colleague says <em>I live in the suburbs</em>, do not hear hardship — and do not translate your own neighborhood as <span class='x'>✗</span> <em>a suburb</em> if you mean a low-income area.",
            "En México, <em>suburbio</em> suena a zona marginada en la orilla de la ciudad. Un <b>suburb</b> de Estados Unidos se parece más a una zona residencial o a un fraccionamiento. Si un colega dice <em>I live in the suburbs</em>, no entiendas carencia; y no uses <span class='x'>✗</span> <em>a suburb</em> para hablar de una zona de bajos ingresos.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Exurb",
          a: [
            "A community beyond the suburbs, farther from the city, with larger lots and a longer drive.",
            "Comunidad más allá de los <em>suburbs</em>, más lejos de la ciudad, con terrenos más grandes y un trayecto más largo.",
          ],
          ex: "They bought a few acres out in the <em>exurbs</em>, about an hour from the office.",
          note: [
            "More common in writing and in news coverage than in speech. In conversation people usually say <b>way out</b> or name the town.",
            "Es más común en textos y noticias que al hablar. En una conversación la gente dice <b>way out</b> o simplemente el nombre del pueblo.",
          ],
          tags: [],
        },
        {
          q: "Subdivision",
          a: [
            "A planned group of houses built by one developer on land divided into lots, usually with its own name and entrance sign.",
            "Conjunto planeado de casas que construye un mismo desarrollador en un terreno dividido en lotes, casi siempre con nombre propio y letrero en la entrada.",
          ],
          ex: "Our <em>subdivision</em> has about two hundred homes and one way in.",
          note: [
            "The closest Mexican word is <em>fraccionamiento</em>. Most US subdivisions are open to the street; one with a gate and a guard is called a <b>gated community</b>.",
            "La palabra mexicana más cercana es <em>fraccionamiento</em>. La mayoría no tiene caseta ni barda; cuando sí hay reja y vigilancia se llama <b>gated community</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "Development",
          a: [
            "A general word for a newly built residential area. Often interchangeable with subdivision.",
            "Palabra general para una zona residencial de construcción reciente. Muchas veces se usa igual que <em>subdivision</em>.",
          ],
          ex: "There's a new <em>development</em> going up behind the high school.",
          note: [
            "<b>Going up</b> is the natural verb for buildings under construction. The company that builds it is <b>the developer</b> or <b>the builder</b>.",
            "<b>Going up</b> es el verbo natural para lo que está en construcción. La empresa que lo construye es <b>the developer</b> o <b>the builder</b>.",
          ],
          tags: [],
        },
        {
          q: "Cul-de-sac",
          a: [
            "A short street closed at one end, finishing in a round turnaround with houses around it.",
            "Calle corta sin salida que termina en un retorno circular con casas alrededor.",
          ],
          ex: "We're on a <em>cul-de-sac</em>, so the kids can ride their bikes in the street.",
          note: [
            "Pronounced <em>KUL-duh-sak</em>. Think of a Mexican <em>cerrada</em> with a turnaround. Families look for them because there is no through traffic. You live <b>on</b> a cul-de-sac, not <em>in</em> one.",
            "Se pronuncia <em>KUL-duh-sak</em>. Piensa en una cerrada con retorno. Las familias las buscan porque no hay tráfico de paso. Se dice <b>on</b> a cul-de-sac, no <em>in</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "Bedroom community",
          a: [
            "A town where most residents sleep and raise families but work somewhere else.",
            "Pueblo donde la mayoría de los residentes duerme y cría a su familia, pero trabaja en otro lugar.",
          ],
          ex: "It's mostly a <em>bedroom community</em> — everyone drives into the city for work.",
          note: [
            "Spanish <em>ciudad dormitorio</em>. A neutral description, not a criticism.",
            "En español, <em>ciudad dormitorio</em>. Es una descripción neutral, no una crítica.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Neighborhood",
          hint: ["(not colony)", "(no es colony)"],
          a: [
            "The area around your home, with a recognized name or identity.",
            "La zona alrededor de tu casa, con un nombre o una identidad reconocida.",
          ],
          ex: "It's a quiet <em>neighborhood</em> with a lot of young families.",
          trap: [
            "<span class='x'>✗</span> <em>I live in the Roma colony</em> → <span class='ok'>✓</span> <em>I live in the Roma <b>neighborhood</b></em>, or simply <em>I live in Roma Norte</em>. English <b>colony</b> means a territory ruled by another country. For a <em>fraccionamiento</em>, say <b>subdivision</b> or <b>gated community</b>.",
            "<span class='x'>✗</span> <em>I live in the Roma colony</em> → <span class='ok'>✓</span> <em>I live in the Roma <b>neighborhood</b></em>, o simplemente <em>I live in Roma Norte</em>. En inglés, <b>colony</b> es un territorio gobernado por otro país. Para tu fraccionamiento, di <b>subdivision</b> o <b>gated community</b>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Downtown",
          hint: ["(el centro)", "(el centro)"],
          a: [
            "The central business district of a city — offices, courts, stadiums, restaurants.",
            "El distrito central de negocios de una ciudad: oficinas, tribunales, estadios, restaurantes.",
          ],
          ex: "The office is <em>downtown</em>, but almost nobody on the team lives there.",
          trap: [
            "<span class='x'>✗</span> <em>I work in the center</em> · <span class='x'>✗</span> <em>I'm going to the downtown</em> → <span class='ok'>✓</span> <em>I work <b>downtown</b></em> · <span class='ok'>✓</span> <em>I'm going <b>downtown</b></em>. It works as an adverb, so it takes no article and no preposition. Also, a US downtown is mostly offices, not a historic <em>centro</em> with a plaza and a cathedral.",
            "<span class='x'>✗</span> <em>I work in the center</em> · <span class='x'>✗</span> <em>I'm going to the downtown</em> → <span class='ok'>✓</span> <em>I work <b>downtown</b></em> · <span class='ok'>✓</span> <em>I'm going <b>downtown</b></em>. Funciona como adverbio: sin artículo y sin preposición. Además, el <em>downtown</em> de una ciudad estadounidense es sobre todo de oficinas, no un centro histórico con plaza y catedral.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Uptown / Midtown",
          a: [
            "Named districts away from downtown. What they are like depends entirely on the city.",
            "Distritos con nombre propio fuera del <em>downtown</em>. Cómo son depende por completo de la ciudad.",
          ],
          ex: "She has a condo in <em>Midtown</em> and walks to work.",
          note: [
            "Do not assume <b>uptown</b> means wealthy or <b>downtown</b> means run-down. In Manhattan the words simply mean north and south. Ask: <em>What's that part of town like?</em>",
            "No des por hecho que <b>uptown</b> significa zona rica ni que <b>downtown</b> significa zona deteriorada. En Manhattan solo quieren decir norte y sur. Pregunta: <em>What's that part of town like?</em>",
          ],
          tags: [],
        },
        {
          q: "The city",
          a: [
            "The big city that a suburb belongs to, said without naming it.",
            "La ciudad grande a la que pertenece un <em>suburb</em>, sin decir su nombre.",
          ],
          ex: "We go into <em>the city</em> maybe twice a month for dinner.",
          note: [
            "Listen for the verbs: people <b>go into</b> the city, <b>live outside</b> the city, <b>commute into</b> the city. Someone who says <em>I'm from Chicago</em> may live forty minutes away from it.",
            "Fíjate en los verbos: la gente dice <b>go into</b> the city, <b>live outside</b> the city, <b>commute into</b> the city. Alguien que dice <em>I'm from Chicago</em> puede vivir a cuarenta minutos de ahí.",
          ],
          tags: ["core"],
        },
        {
          q: "Zip code",
          a: [
            "The five-digit postal code. Also used as shorthand for the area someone lives in.",
            "El código postal de cinco dígitos. También se usa como forma corta de referirse a la zona donde vive alguien.",
          ],
          ex: "Home prices change a lot from one <em>zip code</em> to the next.",
          note: [
            "Stores and websites ask for it constantly: <em>Can I get your zip code?</em> Say the digits one by one.",
            "Las tiendas y los sitios web lo piden todo el tiempo: <em>Can I get your zip code?</em> Di los dígitos uno por uno.",
          ],
          tags: ["core"],
        },
        {
          q: "County",
          a: [
            "The level of local government between the city and the state. It often runs courts, records, roads and sometimes schools.",
            "El nivel de gobierno local entre la ciudad y el estado. Muchas veces administra tribunales, registros, caminos y a veces escuelas.",
          ],
          ex: "We're technically outside the city limits, so we pay <em>county</em> taxes.",
          note: [
            "There is no exact Mexican match. A county usually contains several towns, so it is larger than most <em>municipios</em>. Pronounced <em>KOWN-tee</em> — do not confuse it with <b>country</b>.",
            "No tiene una contraparte exacta en México. Un <em>county</em> suele abarcar varios pueblos, así que es más grande que la mayoría de los municipios. Se pronuncia <em>KOWN-tee</em>; no lo confundas con <b>country</b>.",
          ],
          tags: ["error"],
        },
        {
          q: "Township",
          a: [
            "In some states, a unit of local government inside a county, with its own services and elected board.",
            "En algunos estados, una unidad de gobierno local dentro del <em>county</em>, con sus propios servicios y un consejo electo.",
          ],
          ex: "Our <em>township</em> handles the snow plowing and the trash pickup.",
          note: [
            "Common in the Northeast and the Midwest; many states do not use the term at all.",
            "Es común en el noreste y el medio oeste; muchos estados ni siquiera usan el término.",
          ],
          tags: [],
        },
        {
          q: "Residence",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A formal word for the place where someone lives, of any size or price.",
            "Palabra formal para el lugar donde vive alguien, de cualquier tamaño o precio.",
          ],
          ex: "The form asks for your primary <em>residence</em>, not your mailing address.",
          trap: [
            "In Mexico <em>una residencia</em> is a large, expensive house. English <b>residence</b> says nothing about size; it is paperwork language. In conversation say <b>house</b>, <b>home</b> or <b>place</b>: <span class='x'>✗</span> <em>Come to my residence</em> → <span class='ok'>✓</span> <em>Come over to <b>my place</b></em>.",
            "En México, una residencia es una casa grande y cara. En inglés, <b>residence</b> no dice nada del tamaño; es lenguaje de formularios. Al platicar di <b>house</b>, <b>home</b> o <b>place</b>: <span class='x'>✗</span> <em>Come to my residence</em> → <span class='ok'>✓</span> <em>Come over to <b>my place</b></em>.",
          ],
          tags: ["falsefriend", "error"],
        },
      ],
    },
    {
      title: ["The House and the Yard", "La casa y el jardín"],
      rule: [
        "Americans talk about their houses the way people elsewhere talk about restaurants: constantly and in detail. Knowing the house types and the parts of the property lets you follow half of Monday-morning small talk.",
        "Los estadounidenses hablan de su casa como en otros lugares se habla de restaurantes: todo el tiempo y con detalle. Si conoces los tipos de casa y las partes de la propiedad, entiendes la mitad de la plática del lunes en la mañana.",
      ],
      items: [
        {
          q: "Single-family home",
          a: [
            "A free-standing house on its own lot, built for one household. The default suburban home.",
            "Casa independiente en su propio terreno, pensada para una sola familia. Es la vivienda típica de los <em>suburbs</em>.",
          ],
          ex: "Almost everything in that area is a <em>single-family home</em>.",
          note: [
            "Real-estate language. In conversation people just say <b>a house</b>.",
            "Es lenguaje de bienes raíces. Al platicar, la gente dice simplemente <b>a house</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "Townhouse",
          a: [
            "A multi-story home that shares one or both side walls with the homes next to it.",
            "Casa de varios niveles que comparte una o las dos paredes laterales con las casas de al lado.",
          ],
          ex: "They started in a <em>townhouse</em> and bought a bigger place a few years later.",
          note: [
            "Also <b>townhome</b>. Similar to what Mexican listings call a <em>casa dúplex</em> or <em>casa en condominio horizontal</em>.",
            "También <b>townhome</b>. Se parece a lo que en México se anuncia como casa dúplex o casa en condominio horizontal.",
          ],
          tags: [],
        },
        {
          q: "Condo",
          hint: ["(condominium)", "(condominium)"],
          a: [
            "A unit in a building that you own rather than rent. The building's shared areas are owned jointly.",
            "Unidad dentro de un edificio que es tuya en propiedad, no rentada. Las áreas comunes son de todos los dueños.",
          ],
          ex: "Before the kids, we had a <em>condo</em> downtown.",
          trap: [
            "In Mexico <em>condominio</em> often describes a gated cluster of houses. In the US a <b>condo</b> is almost always an owned unit in a building — what you would call <em>un departamento propio</em>. The word describes the ownership, not the shape of the home.",
            "En México, <em>condominio</em> muchas veces describe un conjunto cerrado de casas. En Estados Unidos, un <b>condo</b> casi siempre es una unidad propia dentro de un edificio: lo que tú llamarías un departamento propio. La palabra describe el tipo de propiedad, no la forma de la vivienda.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Apartment",
          hint: ["(not department)", "(no es department)"],
          a: ["A unit in a building that you rent.", "Unidad dentro de un edificio que rentas."],
          ex: "She's renting an <em>apartment</em> near the train until she figures out where to buy.",
          trap: [
            "<span class='x'>✗</span> <em>I live in a department</em> → <span class='ok'>✓</span> <em>I live in an <b>apartment</b></em>. A <b>department</b> is a division of a company or a store. In US usage <b>apartment</b> also implies renting; if you own it, say <b>condo</b>.",
            "<span class='x'>✗</span> <em>I live in a department</em> → <span class='ok'>✓</span> <em>I live in an <b>apartment</b></em>. Un <b>department</b> es un área de una empresa o de una tienda. Además, en Estados Unidos <b>apartment</b> da a entender que rentas; si es tuyo, di <b>condo</b>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Ranch",
          hint: ["(house style)", "(estilo de casa)"],
          a: [
            "A house with everything on one level, usually long and low.",
            "Casa con todo en una sola planta, por lo general alargada y baja.",
          ],
          ex: "My parents downsized to a <em>ranch</em> so they wouldn't have to deal with stairs.",
          note: [
            "Not a <em>rancho</em>. When a colleague says <em>we live in a ranch</em>, there are no horses involved. Also called a <b>ranch-style house</b> or a <b>rambler</b> in some regions.",
            "No es un rancho. Cuando un colega dice <em>we live in a ranch</em>, no hay caballos. En algunas regiones también se llama <b>ranch-style house</b> o <b>rambler</b>.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "Split-level",
          a: [
            "A house whose floors are staggered, connected by short half-flights of stairs.",
            "Casa con niveles escalonados, unidos por tramos cortos de escalera.",
          ],
          ex: "It's a classic <em>split-level</em>: kitchen up a few steps, family room down a few.",
          tags: [],
        },
        {
          q: "Colonial",
          hint: ["(house style)", "(estilo de casa)"],
          a: [
            "A traditional two-story house with a centered front door, living areas downstairs and bedrooms upstairs.",
            "Casa tradicional de dos plantas con la puerta al centro de la fachada, áreas sociales abajo y recámaras arriba.",
          ],
          ex: "They bought a four-bedroom <em>colonial</em> in a great school district.",
          note: [
            "It names a floor plan common in the Northeast, not a historic building. Nothing to do with <em>una casa colonial</em> in San Miguel de Allende.",
            "Es el nombre de una distribución común en el noreste, no de un edificio histórico. No tiene nada que ver con una casa colonial de San Miguel de Allende.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "Driveway",
          a: [
            "The private paved strip that leads from the street to the garage, where cars are usually parked.",
            "La franja pavimentada privada que va de la calle al garaje; ahí se suelen estacionar los carros.",
          ],
          ex: "Just park in the <em>driveway</em> when you get here.",
          note: [
            "You park <b>in</b> the driveway. In snowy regions, <b>shoveling the driveway</b> is a standard winter complaint.",
            "Se dice park <b>in</b> the driveway. En las regiones donde nieva, <b>shoveling the driveway</b> es la queja clásica del invierno.",
          ],
          tags: ["core"],
        },
        {
          q: "Garage",
          a: [
            "The enclosed space attached to the house for cars, and very often for tools, bikes and storage.",
            "El espacio cerrado junto a la casa para los carros y, con mucha frecuencia, para herramienta, bicicletas y cosas guardadas.",
          ],
          ex: "The <em>garage</em> is so full of boxes that we park outside.",
          note: [
            "Pronounced <em>guh-RAHZH</em>, stress on the second syllable. Houses are described by it: <b>a two-car garage</b>.",
            "Se pronuncia <em>guh-RAHZH</em>, con el acento en la segunda sílaba. Las casas se describen con él: <b>a two-car garage</b>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Basement",
          a: [
            "The level of the house below ground. Common where winters are cold, rare in the South and West.",
            "El nivel de la casa que queda bajo tierra. Es común donde el invierno es frío y raro en el sur y el oeste.",
          ],
          ex: "We finally finished the <em>basement</em>, so the kids have their own space.",
          note: [
            "A <b>finished basement</b> has floors, walls and heating and works as a family room or home office. An <b>unfinished</b> one is bare concrete used for storage and laundry.",
            "Un <b>finished basement</b> tiene acabados, muros y calefacción, y funciona como sala familiar u oficina. Uno <b>unfinished</b> es de concreto aparente y sirve para guardar cosas y lavar ropa.",
          ],
          tags: [],
        },
        {
          q: "Deck / Patio",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "Outdoor living space behind the house. A deck is a raised wooden platform; a patio is paved at ground level.",
            "Espacio para estar al aire libre detrás de la casa. Un <em>deck</em> es una plataforma elevada de madera; un <em>patio</em> está pavimentado a nivel del suelo.",
          ],
          ex: "We ate out on the <em>deck</em> almost every night this summer.",
          note: [
            "An American <b>patio</b> is not the interior courtyard of a Mexican house. It is simply a paved area for a table and a grill. You sit <b>on</b> the deck or <b>on</b> the patio.",
            "El <b>patio</b> estadounidense no es el patio interior de una casa mexicana. Es solo un área pavimentada para una mesa y un asador. Se dice <b>on</b> the deck y <b>on</b> the patio.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "Porch",
          a: [
            "A covered area at the entrance of a house, often with chairs.",
            "Área techada en la entrada de la casa, muchas veces con sillas.",
          ],
          ex: "They left the package on the front <em>porch</em>.",
          note: [
            "Usually <b>the front porch</b>. A <b>screened-in porch</b> has mesh walls to keep insects out.",
            "Casi siempre <b>the front porch</b>. Un <b>screened-in porch</b> tiene mosquiteros alrededor para que no entren insectos.",
          ],
          tags: [],
        },
        {
          q: "Yard",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "The land around a house, usually covered in grass: the front yard and the backyard.",
            "El terreno alrededor de la casa, casi siempre con pasto: el <em>front yard</em> y el <em>backyard</em>.",
          ],
          ex: "We wanted a bigger <em>yard</em> for the dog.",
          trap: [
            "Spanish <em>jardín</em> is <b>yard</b>, not <b>garden</b>. In US English a <b>garden</b> is the specific spot where you grow flowers or vegetables. <span class='x'>✗</span> <em>The kids are playing in the garden</em> → <span class='ok'>✓</span> <em>The kids are playing in the <b>backyard</b></em>. And <b>yard</b> as a house word has nothing to do with the unit of length.",
            "Tu <em>jardín</em> es <b>yard</b>, no <b>garden</b>. En inglés estadounidense, un <b>garden</b> es el espacio específico donde cultivas flores o verduras. <span class='x'>✗</span> <em>The kids are playing in the garden</em> → <span class='ok'>✓</span> <em>The kids are playing in the <b>backyard</b></em>. Y <b>yard</b> como parte de la casa no tiene que ver con la yarda como medida.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Lawn",
          a: [
            "The area of cut grass in a yard.",
            "El área de pasto cortado dentro del <em>yard</em>.",
          ],
          ex: "He's very particular about his <em>lawn</em>.",
          note: [
            "The yard is the land; the lawn is the grass on it. Taking care of it is <b>lawn care</b>, and many families pay <b>a lawn service</b> to do it.",
            "El <em>yard</em> es el terreno; el <em>lawn</em> es el pasto. Cuidarlo es <b>lawn care</b>, y muchas familias pagan <b>a lawn service</b> para eso.",
          ],
          tags: [],
        },
        {
          q: "Yard work",
          a: [
            "The outdoor chores of a house: mowing, raking leaves, trimming, weeding.",
            "Las tareas de exterior de una casa: cortar el pasto, juntar hojas, podar, quitar hierba.",
          ],
          ex: "I spent the whole weekend doing <em>yard work</em>.",
          note: [
            "Uncountable, with <b>do</b>: <span class='x'>✗</span> <em>I made some yard works</em> → <span class='ok'>✓</span> <em>I <b>did</b> some yard work</em>. Homeowners commonly do it themselves, whatever their job title.",
            "No se cuenta y va con <b>do</b>: <span class='x'>✗</span> <em>I made some yard works</em> → <span class='ok'>✓</span> <em>I <b>did</b> some yard work</em>. Lo normal es que el dueño de la casa lo haga en persona, sin importar su puesto.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Curb appeal",
          a: [
            "How attractive a house looks from the street.",
            "Qué tan atractiva se ve una casa desde la calle.",
          ],
          ex: "The house had great <em>curb appeal</em>, but the inside needed a lot of work.",
          note: [
            "The <b>curb</b> is the edge of the sidewalk, where a buyer first stands and looks.",
            "El <b>curb</b> es el borde de la banqueta, donde se para un comprador a ver la casa por primera vez.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Fixer-upper",
          a: [
            "A house sold at a lower price because it needs repairs or renovation.",
            "Casa que se vende a menor precio porque necesita reparaciones o remodelación.",
          ],
          ex: "We bought a <em>fixer-upper</em> and have been renovating one room at a time.",
          note: [
            "From <b>to fix up</b> a house. Expect follow-up stories about contractors, kitchens and bathrooms.",
            "Viene de <b>to fix up</b> a house. Prepárate para historias sobre contratistas, cocinas y baños.",
          ],
          tags: ["idiom"],
        },
      ],
    },
    {
      title: ["Buying, Owning and the HOA", "Comprar, ser dueño y la HOA"],
      rule: [
        "Owning a home is a central life project for many Americans, and colleagues discuss rates, closings and the HOA openly. You do not need the finance in depth — only enough of the words to follow the story.",
        "Tener casa propia es un proyecto de vida central para muchos estadounidenses, y entre colegas se habla abiertamente de tasas, cierres y la HOA. No necesitas dominar las finanzas; solo las palabras suficientes para seguir la historia.",
      ],
      items: [
        {
          q: "Mortgage",
          a: [
            "The long-term loan used to buy a home, with the home as the guarantee.",
            "El préstamo a largo plazo para comprar una casa, con la casa como garantía.",
          ],
          ex: "We locked in our <em>mortgage</em> before rates went up.",
          note: [
            "Pronounced <em>MOR-gij</em> — the <b>t</b> is silent. Spanish <em>hipoteca</em>. You <b>take out</b> a mortgage and <b>pay it off</b>.",
            "Se pronuncia <em>MOR-gij</em>; la <b>t</b> es muda. En español, hipoteca. Se dice <b>take out</b> a mortgage y <b>pay it off</b>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Down payment",
          a: [
            "The part of the price paid up front in cash; the mortgage covers the rest.",
            "La parte del precio que se paga de entrada en efectivo; la hipoteca cubre el resto.",
          ],
          ex: "They've been saving for a <em>down payment</em> for a couple of years.",
          note: [
            "Mexican Spanish <em>enganche</em>. The verb is <b>to put down</b>: <em>How much did you have to put down?</em>",
            "En México, el enganche. El verbo es <b>to put down</b>: <em>How much did you have to put down?</em>",
          ],
          tags: ["core"],
        },
        {
          q: "Closing",
          a: [
            "The final meeting where the papers are signed, the money moves and the buyer gets the keys.",
            "La reunión final en la que se firman los papeles, se mueve el dinero y el comprador recibe las llaves.",
          ],
          ex: "The <em>closing</em> is on the fifteenth, and we move in that weekend.",
          note: [
            "The verb takes <b>on</b>: <em>We <b>close on</b> the house next week</em>. Roughly the moment of <em>la firma de escrituras</em>. Fees paid that day are <b>closing costs</b>.",
            "El verbo lleva <b>on</b>: <em>We <b>close on</b> the house next week</em>. Es más o menos el momento de la firma de escrituras. Los gastos de ese día son <b>closing costs</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "Escrow",
          a: [
            "Money or documents held by a neutral third party until the conditions of a deal are met.",
            "Dinero o documentos que guarda un tercero neutral hasta que se cumplen las condiciones de una operación.",
          ],
          ex: "The house is in <em>escrow</em>, so we should have the keys by the end of the month.",
          note: [
            "<b>In escrow</b> means the sale is in progress but not finished. Separately, an <b>escrow account</b> is where the lender collects monthly money to pay your property taxes and insurance.",
            "<b>In escrow</b> quiere decir que la venta está en proceso pero no ha terminado. Aparte, una <b>escrow account</b> es la cuenta donde el banco junta dinero cada mes para pagar tus impuestos prediales y tu seguro.",
          ],
          tags: [],
        },
        {
          q: "Property taxes",
          a: [
            "The yearly local tax on the value of a home.",
            "El impuesto local anual sobre el valor de una casa.",
          ],
          ex: "The <em>property taxes</em> are high there, but the schools are excellent.",
          note: [
            "Mexican Spanish <em>predial</em>, but far more significant: property taxes are the main funding source for local public schools, which is why the example sentence is one you will hear often.",
            "En México, el predial, pero con mucho más peso: estos impuestos son la fuente principal de financiamiento de las escuelas públicas locales. Por eso la frase del ejemplo se escucha tanto.",
          ],
          tags: ["core"],
        },
        {
          q: "HOA",
          hint: ["(homeowners association)", "(homeowners association)"],
          a: [
            "The organization of owners that manages a subdivision or condo building: shared areas, rules and fees.",
            "La organización de dueños que administra un fraccionamiento o un edificio de condominios: áreas comunes, reglas y cuotas.",
          ],
          ex: "The <em>HOA</em> sent us a letter about leaving the trash cans out front.",
          note: [
            "Said as three letters: <em>aitch-oh-ay</em>. Similar to the <em>asociación de colonos</em> or <em>administración del condominio</em>. Light complaining about the HOA is a classic small-talk topic, and joining in with a question is safe.",
            "Se dice letra por letra: <em>aitch-oh-ay</em>. Se parece a la asociación de colonos o a la administración del condominio. Quejarse un poco de la HOA es un tema clásico de plática, y puedes sumarte con una pregunta sin riesgo.",
          ],
          tags: ["core", "acronym"],
        },
        {
          q: "HOA fees",
          a: [
            "The regular payment each owner makes to the association for maintenance and shared services.",
            "El pago periódico que hace cada dueño a la asociación para mantenimiento y servicios comunes.",
          ],
          ex: "The <em>HOA fees</em> cover the pool, the landscaping and snow removal.",
          note: [
            "Also <b>HOA dues</b>. Mexican Spanish <em>cuota de mantenimiento</em>.",
            "También <b>HOA dues</b>. En México, la cuota de mantenimiento.",
          ],
          tags: [],
        },
        {
          q: "HOA rules",
          hint: ["(covenants)", "(covenants)"],
          a: [
            "The written restrictions owners accept when they buy: paint colors, fences, parking, what can be visible from the street.",
            "Las restricciones por escrito que aceptan los dueños al comprar: colores de pintura, bardas, estacionamiento, qué puede verse desde la calle.",
          ],
          ex: "Under the <em>HOA rules</em>, we need approval before we put up a fence.",
          note: [
            "The formal name is <b>covenants</b>, or <b>CC&amp;Rs</b> in writing. Breaking one can bring a written warning called <b>a violation notice</b>.",
            "El nombre formal es <b>covenants</b>, o <b>CC&amp;Rs</b> por escrito. Si rompes una regla puede llegarte un aviso por escrito llamado <b>a violation notice</b>.",
          ],
          tags: ["acronym"],
        },
        {
          q: "Realtor",
          a: [
            "A licensed professional who represents buyers or sellers of homes.",
            "Profesional con licencia que representa a quienes compran o venden casas.",
          ],
          ex: "Our <em>realtor</em> found us the house before it was even listed.",
          note: [
            "Two syllables: <em>REEL-ter</em>. The neutral job title is <b>real estate agent</b>. Mexican Spanish <em>asesor inmobiliario</em> or <em>agente de bienes raíces</em>.",
            "Dos sílabas: <em>REEL-ter</em>. El nombre neutral del puesto es <b>real estate agent</b>. En México, asesor inmobiliario o agente de bienes raíces.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Listing",
          a: [
            "The published advertisement for a home for sale, with photos, details and price.",
            "El anuncio publicado de una casa en venta, con fotos, detalles y precio.",
          ],
          ex: "I saw the <em>listing</em> online and we drove by that same afternoon.",
          note: [
            "The verb family: a house is <b>listed</b>, it is <b>on the market</b>, it <b>goes under contract</b>, and then it is <b>sold</b>.",
            "La familia de verbos: una casa está <b>listed</b>, está <b>on the market</b>, pasa a <b>under contract</b> y al final está <b>sold</b>.",
          ],
          tags: [],
        },
        {
          q: "Open house",
          a: [
            "A scheduled time when anyone can walk through a home that is for sale, without an appointment.",
            "Horario programado en el que cualquiera puede recorrer una casa en venta, sin cita.",
          ],
          ex: "We stopped by an <em>open house</em> on Sunday just to see what's out there.",
          note: [
            "Not a party. Schools use the same phrase for the evening when parents visit classrooms and meet teachers.",
            "No es una fiesta. Las escuelas usan la misma expresión para la tarde en que los papás visitan los salones y conocen a los maestros.",
          ],
          tags: ["core"],
        },
        {
          q: "Equity",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "The share of a home's value that the owner actually owns: its market value minus what is still owed on the mortgage.",
            "La parte del valor de la casa que de verdad es del dueño: su valor de mercado menos lo que todavía se debe de la hipoteca.",
          ],
          ex: "They used the <em>equity</em> in their house to pay for the renovation.",
          trap: [
            "In a housing conversation <b>equity</b> is not <em>equidad</em> (fairness). It is money: the owner's stake in the property. You <b>build equity</b> as you pay down the loan or as the home gains value — close to <em>patrimonio</em> plus <em>plusvalía</em>.",
            "Cuando se habla de casas, <b>equity</b> no es equidad en el sentido de justicia. Es dinero: la parte de la propiedad que ya es del dueño. Se dice <b>build equity</b> conforme pagas el préstamo o la casa sube de valor; piensa en patrimonio más plusvalía.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "Starter home",
          a: [
            "A smaller, more affordable first house that a buyer expects to leave for a larger one later.",
            "Primera casa, más pequeña y accesible, que el comprador piensa dejar más adelante por una más grande.",
          ],
          ex: "It was supposed to be a <em>starter home</em>, and we're still here twelve years later.",
          note: [
            "The opposite end is a <b>forever home</b> — the one a family plans to stay in.",
            "En el otro extremo está el <b>forever home</b>: la casa donde la familia piensa quedarse.",
          ],
          tags: ["idiom"],
        },
      ],
    },
    {
      title: ["Schools and Kids", "Escuelas e hijos"],
      rule: [
        "For colleagues with children, the school calendar runs the household — and often explains why they moved where they did. These words come up in every conversation about family, weekends and scheduling.",
        "Para los colegas con hijos, el calendario escolar organiza la casa, y muchas veces explica por qué se mudaron a donde viven. Estas palabras salen en toda plática sobre familia, fines de semana y horarios.",
      ],
      items: [
        {
          q: "School district",
          a: [
            "The local authority that runs the public schools in an area. Your address decides which district, and which school, your children attend.",
            "La autoridad local que administra las escuelas públicas de una zona. Tu domicilio define a qué distrito y a qué escuela van tus hijos.",
          ],
          ex: "Honestly, we picked the house for the <em>school district</em>.",
          note: [
            "This is the single biggest reason families give for choosing a suburb. <em>What district are you in?</em> is a normal, friendly question between parents.",
            "Es la razón número uno que dan las familias para elegir un <em>suburb</em>. <em>What district are you in?</em> es una pregunta normal y amable entre papás.",
          ],
          tags: ["core"],
        },
        {
          q: "Public school",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A school funded by taxes and free to attend for children who live in the district.",
            "Escuela financiada con impuestos y gratuita para los niños que viven en el distrito.",
          ],
          ex: "Both of our kids go to <em>public school</em>, and we've been really happy with it.",
          trap: [
            "Do not carry over Mexican assumptions about <em>escuela pública</em>. In many suburbs the public schools are the most sought-after option, and senior executives send their children there by choice. Asking <span class='x'>✗</span> <em>Why not a private school?</em> can sound like a judgment. Note the grammar too: <em>go to public school</em>, no article.",
            "No traslades las ideas que en México se asocian con la escuela pública. En muchos <em>suburbs</em>, las escuelas públicas son la opción más buscada, y hay directivos que mandan ahí a sus hijos por decisión propia. Preguntar <span class='x'>✗</span> <em>Why not a private school?</em> puede sonar a juicio. Fíjate también en la gramática: <em>go to public school</em>, sin artículo.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Private school",
          a: [
            "A school funded by tuition rather than taxes, often religious or independent.",
            "Escuela que se financia con colegiaturas y no con impuestos; muchas son religiosas o independientes.",
          ],
          ex: "They switched to a <em>private school</em> for the smaller class sizes.",
          note: [
            "What you pay is <b>tuition</b>, never <em>a college fee</em> or <em>a colegiatura</em>. A Catholic one is often called a <b>parochial school</b>.",
            "Lo que pagas es <b>tuition</b>; así se dice colegiatura. A una católica muchas veces le dicen <b>parochial school</b>.",
          ],
          tags: [],
        },
        {
          q: "Charter school",
          a: [
            "A school that is publicly funded and free, but run independently of the district. Places are often assigned by lottery.",
            "Escuela con fondos públicos y gratuita, pero que opera de forma independiente del distrito. Los lugares muchas veces se asignan por sorteo.",
          ],
          ex: "Their daughter got into a <em>charter school</em> through the lottery.",
          tags: [],
        },
        {
          q: "Grade",
          hint: ["(two meanings)", "(dos significados)"],
          a: [
            "(1) A year of school, numbered first through twelfth. (2) The mark a student receives.",
            "(1) Un año escolar, numerado de <em>first</em> a <em>twelfth</em>. (2) La calificación que recibe un alumno.",
          ],
          ex: "My oldest is in ninth <em>grade</em> this year.",
          note: [
            "Ordinal number, no article: <span class='x'>✗</span> <em>He is in the grade five</em> → <span class='ok'>✓</span> <em>He is in <b>fifth grade</b></em>. The stages are <b>elementary school</b>, <b>middle school</b> and <b>high school</b>; <b>K–12</b> means the whole run from kindergarten to twelfth grade.",
            "Número ordinal y sin artículo: <span class='x'>✗</span> <em>He is in the grade five</em> → <span class='ok'>✓</span> <em>He is in <b>fifth grade</b></em>. Las etapas son <b>elementary school</b>, <b>middle school</b> y <b>high school</b>; <b>K–12</b> es todo el trayecto, de kínder al último año de prepa.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "College",
          hint: ["(false friend — important)", "(falso amigo — importante)"],
          a: [
            "University-level education after high school, typically a four-year degree.",
            "Educación universitaria después de <em>high school</em>; por lo general, una licenciatura de cuatro años.",
          ],
          ex: "Our son starts <em>college</em> in the fall, so the house is about to get very quiet.",
          trap: [
            "<b>College</b> is not <em>colegio</em>. It is <em>la universidad</em>. <span class='x'>✗</span> <em>My daughter is seven and goes to a bilingual college</em> → <span class='ok'>✓</span> <em>goes to a bilingual <b>school</b></em>. Americans say <b>college</b> for almost any undergraduate study, even at a famous university: <em>Where did you go to college?</em>",
            "<b>College</b> no es colegio. Es la universidad. <span class='x'>✗</span> <em>My daughter is seven and goes to a bilingual college</em> → <span class='ok'>✓</span> <em>goes to a bilingual <b>school</b></em>. Los estadounidenses dicen <b>college</b> para casi cualquier licenciatura, incluso en una universidad famosa: <em>Where did you go to college?</em>",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Educated",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "Having formal schooling, especially a university degree.",
            "Que tiene estudios formales, sobre todo un título universitario.",
          ],
          ex: "It's a highly <em>educated</em> area, with two universities nearby.",
          trap: [
            "Spanish <em>educado</em> is about manners. English <b>educated</b> is about schooling. <span class='x'>✗</span> <em>Their kids are very educated</em> (meaning they say please and thank you) → <span class='ok'>✓</span> <em>Their kids are very <b>polite</b></em> or <b>well-behaved</b>. And <em>maleducado</em> is <b>rude</b>, not <em>uneducated</em>.",
            "En español, <em>educado</em> habla de modales. En inglés, <b>educated</b> habla de estudios. <span class='x'>✗</span> <em>Their kids are very educated</em> (queriendo decir que dan las gracias y piden por favor) → <span class='ok'>✓</span> <em>Their kids are very <b>polite</b></em> o <b>well-behaved</b>. Y <em>maleducado</em> es <b>rude</b>, no <em>uneducated</em>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "PTA",
          hint: ["(Parent-Teacher Association)", "(Parent-Teacher Association)"],
          a: [
            "The volunteer organization of parents and teachers at a school. It raises money and organizes events.",
            "La organización de voluntarios formada por papás y maestros de una escuela. Junta fondos y organiza eventos.",
          ],
          ex: "She's on the <em>PTA</em>, so she knows everything that's going on at that school.",
          note: [
            "Similar to the <em>sociedad de padres de familia</em>. Some schools call it the <b>PTO</b>. Volunteering for it is a common way parents get to know each other.",
            "Se parece a la sociedad de padres de familia. Algunas escuelas le dicen <b>PTO</b>. Participar como voluntario es una forma común de que los papás se conozcan.",
          ],
          tags: ["acronym"],
        },
        {
          q: "Carpool",
          a: [
            "An arrangement where families take turns driving each other's children; also the same arrangement among coworkers.",
            "Acuerdo en el que las familias se turnan para llevar a los hijos de todos; también, el mismo acuerdo entre compañeros de trabajo.",
          ],
          ex: "I've got <em>carpool</em> on Thursdays, so I can't do an eight o'clock call.",
          trap: [
            "Nothing to do with a pool. It is what Mexican parents call <em>la ronda</em>. It is also a verb: <span class='x'>✗</span> <em>We make car pool with the neighbors</em> → <span class='ok'>✓</span> <em>We <b>carpool</b> with the neighbors</em>. The two daily moments are <b>drop-off</b> and <b>pickup</b>.",
            "No tiene nada que ver con una alberca. Es lo que los papás en México llaman la ronda. También es verbo: <span class='x'>✗</span> <em>We make car pool with the neighbors</em> → <span class='ok'>✓</span> <em>We <b>carpool</b> with the neighbors</em>. Los dos momentos del día son <b>drop-off</b> y <b>pickup</b>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "School bus",
          a: [
            "The yellow bus the district provides to take children to and from public school.",
            "El camión amarillo que pone el distrito para llevar y traer a los niños de la escuela pública.",
          ],
          ex: "The <em>school bus</em> comes at 7:10, so mornings are a little chaotic.",
          note: [
            "Children wait at <b>the bus stop</b>, and a parent may say <em>I need to get the kids on the bus first</em>.",
            "Los niños esperan en <b>the bus stop</b>, y un papá o una mamá puede decir <em>I need to get the kids on the bus first</em>.",
          ],
          tags: [],
        },
        {
          q: "Sleepover",
          a: [
            "A night when a child's friends stay at the house.",
            "Noche en la que los amigos de un niño se quedan a dormir en la casa.",
          ],
          ex: "We had six ten-year-olds here for a <em>sleepover</em>, so nobody slept.",
          note: [
            "Mexican Spanish <em>pijamada</em>. The verb is <b>to sleep over</b> or <b>to have a sleepover</b>.",
            "En México, pijamada. El verbo es <b>to sleep over</b> o <b>to have a sleepover</b>.",
          ],
          tags: [],
        },
        {
          q: "Playdate",
          a: [
            "A visit arranged by parents so that young children can play together.",
            "Visita que organizan los papás para que los niños pequeños jueguen juntos.",
          ],
          ex: "We set up a <em>playdate</em> with the new family down the street.",
          note: [
            "Used for small children only. For teenagers, say they are <b>hanging out</b> with friends.",
            "Solo se usa con niños pequeños. De los adolescentes se dice que están <b>hanging out</b> con sus amigos.",
          ],
          tags: [],
        },
        {
          q: "Little League",
          a: [
            "Organized youth baseball and softball; loosely, any community children's baseball.",
            "Beisbol y softbol infantil organizado; en sentido amplio, cualquier beisbol infantil de la comunidad.",
          ],
          ex: "He coaches his daughter's <em>Little League</em> team on Saturdays.",
          note: [
            "Parents often coach as volunteers. <em>I'm coaching this season</em> is a common reason someone leaves the office on time.",
            "Muchos papás entrenan como voluntarios. <em>I'm coaching this season</em> es una razón común para salir puntual de la oficina.",
          ],
          tags: [],
        },
        {
          q: "Travel team",
          a: [
            "A competitive youth sports team with tryouts that plays against teams from other towns, often on weekends.",
            "Equipo deportivo juvenil de competencia, con pruebas de selección, que juega contra equipos de otros pueblos, muchas veces en fin de semana.",
          ],
          ex: "Our weekends disappeared once she made the <em>travel team</em>.",
          note: [
            "The relaxed alternative is <b>rec league</b> (recreational). Away competitions are <b>tournaments</b>, and families drive to them together.",
            "La alternativa relajada es <b>rec league</b> (recreativa). Las competencias fuera son <b>tournaments</b>, y las familias viajan juntas en carro.",
          ],
          tags: [],
        },
        {
          q: "Soccer mom",
          a: [
            "An informal label for a suburban mother who spends much of her time driving children to sports and activities.",
            "Etiqueta informal para una mamá de los <em>suburbs</em> que dedica buena parte de su tiempo a llevar a sus hijos a deportes y actividades.",
          ],
          ex: "She jokes that she's become a full-time <em>soccer mom</em> this fall.",
          note: [
            "People use it about themselves with humor, as in the example. Applied to someone else it can sound dismissive, so understand it but do not use it to describe a colleague.",
            "La gente la usa con humor para hablar de sí misma, como en el ejemplo. Dicha sobre otra persona puede sonar despectiva; entiéndela, pero no la uses para describir a una colega.",
          ],
          tags: ["idiom"],
        },
        {
          q: "College fund",
          a: [
            "Savings set aside over many years to pay for a child's university education.",
            "Ahorro que se va juntando durante muchos años para pagar la universidad de un hijo.",
          ],
          ex: "Every bonus goes straight into the kids' <em>college fund</em>.",
          note: [
            "You may also hear <b>a 529</b>, the tax-advantaged savings plan many families use for it.",
            "También puedes escuchar <b>a 529</b>, el plan de ahorro con beneficios fiscales que muchas familias usan para esto.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: ["Getting Around and Errands", "Traslados y pendientes"],
      rule: [
        "Suburban life happens in the car. The drive to work and the weekend round of stores are the two most reliable small-talk topics you will ever be handed.",
        "La vida en los <em>suburbs</em> transcurre en el carro. El trayecto al trabajo y la vuelta de tiendas del fin de semana son los dos temas de plática más confiables que te van a tocar.",
      ],
      items: [
        {
          q: "Commute",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "The regular trip between home and work; also the verb for making it.",
            "El trayecto habitual entre la casa y el trabajo; también el verbo para hacerlo.",
          ],
          ex: "My <em>commute</em> is about forty-five minutes each way.",
          trap: [
            "Not <em>conmutar</em>. And Spanish has no single word for it, so learners build long phrases: <span class='x'>✗</span> <em>my travel from home to the work</em> → <span class='ok'>✓</span> <em>my <b>commute</b></em>. As a verb: <em>I <b>commute</b> from New Jersey</em>. The safest small-talk question in any US office is <em>How's your commute?</em>",
            "No es conmutar. Y como en español no hay una sola palabra, es común armar frases largas: <span class='x'>✗</span> <em>my travel from home to the work</em> → <span class='ok'>✓</span> <em>my <b>commute</b></em>. Como verbo: <em>I <b>commute</b> from New Jersey</em>. La pregunta de plática más segura en cualquier oficina de Estados Unidos es <em>How's your commute?</em>",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Rush hour",
          a: [
            "The busiest periods on the roads, in the morning and the late afternoon.",
            "Los periodos de más tráfico, en la mañana y al final de la tarde.",
          ],
          ex: "If I leave after six, I miss most of <em>rush hour</em>.",
          note: [
            "Mexican Spanish <em>hora pico</em>. No article in most uses: <b>at rush hour</b>, <b>rush-hour traffic</b>. And <b>traffic</b> is uncountable: <span class='x'>✗</span> <em>a lot of traffics</em>.",
            "En México, la hora pico. Casi siempre va sin artículo: <b>at rush hour</b>, <b>rush-hour traffic</b>. Y <b>traffic</b> no se cuenta: <span class='x'>✗</span> <em>a lot of traffics</em>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Carpool lane",
          hint: ["(HOV lane)", "(HOV lane)"],
          a: [
            "A highway lane reserved for vehicles carrying two or more people.",
            "Carril de autopista reservado para vehículos con dos o más personas.",
          ],
          ex: "With two of us in the car, we can take the <em>carpool lane</em> and save twenty minutes.",
          note: [
            "<b>HOV</b> stands for high-occupancy vehicle and is said letter by letter. Road signs use HOV; people say <b>carpool lane</b>.",
            "<b>HOV</b> significa <em>high-occupancy vehicle</em> y se dice letra por letra. Los letreros dicen HOV; la gente dice <b>carpool lane</b>.",
          ],
          tags: ["acronym"],
        },
        {
          q: "Park-and-ride",
          a: [
            "A parking lot at a train or bus station where commuters leave the car and continue by public transit.",
            "Estacionamiento en una estación de tren o de camión donde la gente deja el carro y sigue en transporte público.",
          ],
          ex: "I leave the car at the <em>park-and-ride</em> and take the train in.",
          note: [
            "<b>Take the train in</b> means into the city. The opposite direction is <b>the train home</b>.",
            "<b>Take the train in</b> quiere decir hacia la ciudad. En el otro sentido es <b>the train home</b>.",
          ],
          tags: [],
        },
        {
          q: "Parking lot",
          hint: ["(not a parking)", "(no es a parking)"],
          a: [
            "An open paved area where cars are parked.",
            "Área pavimentada al aire libre donde se estacionan los carros.",
          ],
          ex: "The <em>parking lot</em> at the mall was completely full on Saturday.",
          trap: [
            "<b>Parking</b> alone is uncountable in English: <span class='x'>✗</span> <em>I left the car in a parking</em> → <span class='ok'>✓</span> <em>in a <b>parking lot</b></em>. One space is <b>a parking spot</b>; a multi-level building is <b>a parking garage</b>. <em>Is there parking?</em> is correct because it asks about availability in general.",
            "<b>Parking</b> solo no se cuenta en inglés: <span class='x'>✗</span> <em>I left the car in a parking</em> → <span class='ok'>✓</span> <em>in a <b>parking lot</b></em>. Un lugar es <b>a parking spot</b>; un edificio de varios niveles es <b>a parking garage</b>. <em>Is there parking?</em> sí es correcto porque pregunta por disponibilidad en general.",
          ],
          tags: ["error"],
        },
        {
          q: "Give someone a ride",
          a: [
            "To take a person somewhere in your car.",
            "Llevar a alguien a algún lugar en tu carro.",
          ],
          ex: "I can <em>give you a ride</em> to the airport after the meeting.",
          trap: [
            "Spanish <em>llevar</em> does not translate as <b>carry</b> or <b>take</b> on its own here: <span class='x'>✗</span> <em>I can carry you to the airport</em> → <span class='ok'>✓</span> <em>I can <b>give you a ride</b></em> or <em>I can <b>drive you</b></em>. Word order matters: <em>give <b>you</b> a ride</em>, not <span class='x'>✗</span> <em>give a ride to you</em>. Mexican <em>raite</em> comes from this word.",
            "<em>Llevar</em> no se traduce aquí como <b>carry</b> ni como <b>take</b> a secas: <span class='x'>✗</span> <em>I can carry you to the airport</em> → <span class='ok'>✓</span> <em>I can <b>give you a ride</b></em> o <em>I can <b>drive you</b></em>. El orden importa: <em>give <b>you</b> a ride</em>, no <span class='x'>✗</span> <em>give a ride to you</em>. El <em>raite</em> del norte de México viene de esta palabra.",
          ],
          tags: ["error"],
        },
        {
          q: "Strip mall",
          a: [
            "A single row of stores facing a shared parking lot along a main road.",
            "Una sola hilera de locales frente a un estacionamiento compartido, sobre una avenida principal.",
          ],
          ex: "There's a great taco place in the <em>strip mall</em> next to the gas station.",
          note: [
            "Think of a small Mexican <em>plaza comercial</em> without an interior. The enclosed kind with corridors is simply <b>a mall</b>.",
            "Piensa en una plaza comercial pequeña sin interior. La cerrada, con pasillos, es simplemente <b>a mall</b>.",
          ],
          tags: [],
        },
        {
          q: "Big-box store",
          a: [
            "A very large chain store in a plain rectangular building with a large parking lot.",
            "Tienda de cadena muy grande, en un edificio rectangular sencillo y con un estacionamiento amplio.",
          ],
          ex: "A <em>big-box store</em> opened near the highway, and it's packed every weekend.",
          note: [
            "A category word used in business talk. In daily life people name the store instead: <b>Target</b>, <b>Home Depot</b>, <b>Walmart</b>.",
            "Es una palabra de categoría que se usa al hablar de negocios. En la vida diaria la gente dice el nombre de la tienda: <b>Target</b>, <b>Home Depot</b>, <b>Walmart</b>.",
          ],
          tags: [],
        },
        {
          q: "Drive-through",
          a: [
            "A service window where you order and collect without leaving the car: coffee, food, pharmacy, bank.",
            "Ventanilla donde pides y recibes sin bajarte del carro: café, comida, farmacia, banco.",
          ],
          ex: "I hit the <em>drive-through</em> for coffee on the way in every morning.",
          note: [
            "Often spelled <b>drive-thru</b> on signs. The verb <b>to hit</b> a place means to stop there quickly.",
            "En los letreros muchas veces aparece como <b>drive-thru</b>. El verbo <b>to hit</b> un lugar quiere decir pasar rápido por ahí.",
          ],
          tags: ["core"],
        },
        {
          q: "Costco run",
          a: [
            "A trip to a warehouse store to buy household supplies in large quantities.",
            "Ida a una tienda de membresía para comprar cosas de la casa en grandes cantidades.",
          ],
          ex: "We did a <em>Costco run</em> on Saturday and somehow came home with a kayak.",
          note: [
            "<b>A ___ run</b> is a productive pattern for any quick trip with one purpose: <b>a coffee run</b>, <b>a grocery run</b>, <b>an airport run</b>.",
            "<b>A ___ run</b> es un patrón que sirve para cualquier salida rápida con un solo propósito: <b>a coffee run</b>, <b>a grocery run</b>, <b>an airport run</b>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Run errands",
          a: [
            "To go out and complete several small practical tasks: the bank, the pharmacy, the dry cleaner.",
            "Salir a resolver varios pendientes prácticos: el banco, la farmacia, la tintorería.",
          ],
          ex: "I spent Saturday morning <em>running errands</em> and the afternoon at a soccer game.",
          note: [
            "The verb is <b>run</b>: <span class='x'>✗</span> <em>I have to make some errands</em> → <span class='ok'>✓</span> <em>I have to <b>run</b> some errands</em>. Mexican Spanish <em>hacer mandados</em> or <em>hacer vueltas</em>. A perfect, ordinary answer to <em>What did you do this weekend?</em>",
            "El verbo es <b>run</b>: <span class='x'>✗</span> <em>I have to make some errands</em> → <span class='ok'>✓</span> <em>I have to <b>run</b> some errands</em>. En México, hacer mandados o hacer vueltas. Es una respuesta perfecta y normal a <em>What did you do this weekend?</em>",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Work from home",
          hint: ["(WFH)", "(WFH)"],
          a: [
            "To do your job from your house instead of the office, on some days or all of them.",
            "Hacer tu trabajo desde tu casa y no desde la oficina, algunos días o todos.",
          ],
          ex: "I <em>work from home</em> on Fridays, so that's when I catch up on laundry between calls.",
          note: [
            "The preposition is <b>from</b>: <span class='x'>✗</span> <em>I work in home</em> · <span class='x'>✗</span> <em>I make home office</em> → <span class='ok'>✓</span> <em>I <b>work from home</b></em>. In English a <b>home office</b> is the room, not the arrangement.",
            "La preposición es <b>from</b>: <span class='x'>✗</span> <em>I work in home</em> · <span class='x'>✗</span> <em>I make home office</em> → <span class='ok'>✓</span> <em>I <b>work from home</b></em>. En inglés, un <b>home office</b> es el cuarto, no la modalidad de trabajo.",
          ],
          tags: ["acronym", "error"],
        },
      ],
    },
    {
      title: ["Neighbors and Weekend Life", "Vecinos y vida de fin de semana"],
      rule: [
        "<em>How was your weekend?</em> is a real question on Monday, and the honest answers come from this list. A short, specific reply drawn from your own weekend is all the conversation needs.",
        "<em>How was your weekend?</em> es una pregunta real los lunes, y las respuestas sinceras salen de esta lista. Con una respuesta corta y específica sobre tu propio fin de semana, la plática fluye.",
      ],
      items: [
        {
          q: "Next-door neighbor",
          a: [
            "The person who lives in the house directly beside yours.",
            "La persona que vive en la casa que está justo al lado de la tuya.",
          ],
          ex: "Our <em>next-door neighbor</em> watches the dog whenever we travel.",
          note: [
            "<b>Next door</b> is also an adverb: <em>They live next door</em>. Other positions: <b>across the street</b>, <b>down the street</b>, <b>two doors down</b>.",
            "<b>Next door</b> también es adverbio: <em>They live next door</em>. Otras posiciones: <b>across the street</b>, <b>down the street</b>, <b>two doors down</b>.",
          ],
          tags: [],
        },
        {
          q: "Block party",
          a: [
            "An outdoor party for everyone on one street, usually with the street closed to cars.",
            "Fiesta al aire libre para todos los vecinos de una calle, por lo general con la calle cerrada a los carros.",
          ],
          ex: "Our street has a <em>block party</em> every Labor Day weekend.",
          note: [
            "A <b>block</b> is the stretch of street between two corners. It is also how distance is given in towns: <em>It's three blocks from here</em>.",
            "Un <b>block</b> es el tramo de calle entre dos esquinas: una cuadra. Así también se dan las distancias: <em>It's three blocks from here</em>.",
          ],
          tags: [],
        },
        {
          q: "Cookout / Barbecue",
          a: [
            "A casual meal cooked on a grill outdoors, with friends, family or neighbors.",
            "Comida informal preparada en un asador al aire libre, con amigos, familia o vecinos.",
          ],
          ex: "We're having a few people over for a <em>cookout</em> on Saturday if you're free.",
          note: [
            "The Mexican <em>carne asada</em> as a social event. The verb is <b>to grill</b>, and the host is <b>grilling</b>. In parts of the South, <b>barbecue</b> means slow-smoked meat specifically, a subject people there take seriously.",
            "Es la carne asada como evento social. El verbo es <b>to grill</b>, y el anfitrión está <b>grilling</b>. En partes del sur, <b>barbecue</b> es específicamente carne ahumada a fuego lento, un tema que allá se toma en serio.",
          ],
          tags: ["core"],
        },
        {
          q: "Potluck",
          a: [
            "A gathering where every guest brings a dish to share.",
            "Reunión en la que cada invitado lleva un platillo para compartir.",
          ],
          ex: "It's a <em>potluck</em>, so just bring whatever you like to make.",
          note: [
            "What Mexicans call a <em>comida de traje</em>. If invited, ask <em>What can I bring?</em> — a homemade Mexican dish is always welcome.",
            "Lo que en México se llama comida de traje. Si te invitan, pregunta <em>What can I bring?</em>; un platillo mexicano hecho en casa siempre es bienvenido.",
          ],
          tags: ["core"],
        },
        {
          q: "Yard sale / Garage sale",
          a: [
            "A sale of a household's used belongings, held in front of the home.",
            "Venta de cosas usadas de una casa, que se hace al frente de la vivienda.",
          ],
          ex: "We're having a <em>garage sale</em> next weekend to clear out the basement.",
          note: [
            "The two names are interchangeable. Mexican Spanish <em>venta de garage</em>.",
            "Los dos nombres se usan igual. En México, venta de garage.",
          ],
          tags: [],
        },
        {
          q: "Housewarming",
          a: [
            "A party given shortly after moving into a new home.",
            "Fiesta que se hace poco después de mudarse a una casa nueva.",
          ],
          ex: "They're having a <em>housewarming</em> on Sunday, and half the office is going.",
          note: [
            "Guests usually bring a small gift, such as a plant or a bottle of wine. If a colleague invites you, it is a sign of friendliness worth accepting.",
            "Los invitados suelen llevar un detalle, como una planta o una botella de vino. Si un colega te invita, es una muestra de cercanía que conviene aceptar.",
          ],
          tags: [],
        },
        {
          q: "Neighborhood watch",
          a: [
            "A volunteer program in which neighbors look out for suspicious activity and report it.",
            "Programa de voluntarios en el que los vecinos están atentos a actividad sospechosa y la reportan.",
          ],
          ex: "The <em>neighborhood watch</em> group mostly shares lost-dog posts these days.",
          note: [
            "Similar to a <em>vecino vigilante</em> program. Today much of it happens in neighborhood group chats and apps.",
            "Se parece a un programa de vecino vigilante. Hoy buena parte ocurre en chats y aplicaciones de vecinos.",
          ],
          tags: [],
        },
        {
          q: "Keeping up with the Joneses",
          a: [
            "Spending in order to match what the neighbors have: the car, the kitchen, the vacation.",
            "Gastar para igualar lo que tienen los vecinos: el carro, la cocina, las vacaciones.",
          ],
          ex: "We're not redoing the kitchen just to <em>keep up with the Joneses</em>.",
          note: [
            "<b>The Joneses</b> are an imaginary typical family. People say it about themselves with a smile; it is a gentle criticism of the habit, not of any person.",
            "<b>The Joneses</b> son una familia típica imaginaria. La gente lo dice de sí misma con una sonrisa; es una crítica ligera a la costumbre, no a una persona.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Trick-or-treating",
          a: [
            "The Halloween custom of children in costume going door to door for candy.",
            "La costumbre de Halloween en la que los niños disfrazados van de casa en casa pidiendo dulces.",
          ],
          ex: "We took the kids <em>trick-or-treating</em> and ran out of candy at our own house by eight.",
          note: [
            "It is a verb of motion: you <b>go</b> trick-or-treating or <b>take</b> the kids. Neighborhoods are informally judged on how good their trick-or-treating is.",
            "Es un verbo de movimiento: se dice <b>go</b> trick-or-treating o <b>take</b> the kids. A los vecindarios se les califica, en broma, por qué tan buenos son para pedir dulces.",
          ],
          tags: ["core"],
        },
        {
          q: "Snow day",
          a: [
            "A day when schools, and sometimes offices, close because of heavy snow.",
            "Día en que las escuelas, y a veces las oficinas, cierran por una nevada fuerte.",
          ],
          ex: "The kids have a <em>snow day</em>, so you may hear them in the background on our call.",
          note: [
            "Good news for children and a scheduling problem for working parents. Showing patience on a call that day is noticed and appreciated.",
            "Buena noticia para los niños y un problema de agenda para los papás que trabajan. Tener paciencia en una llamada ese día se nota y se agradece.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Mow the lawn",
          a: ["To cut the grass with a machine.", "Cortar el pasto con una máquina."],
          ex: "I need to <em>mow the lawn</em> before it rains this afternoon.",
          note: [
            "<b>Mow</b> rhymes with <em>go</em>. <b>Cut the grass</b> means the same and is just as natural. The machine is a <b>lawn mower</b>.",
            "<b>Mow</b> rima con <em>go</em>. <b>Cut the grass</b> significa lo mismo y suena igual de natural. La máquina es un <b>lawn mower</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "Chores",
          a: [
            "The routine jobs of running a home: laundry, dishes, trash, cleaning.",
            "Las tareas de rutina de una casa: lavar ropa, lavar platos, sacar la basura, limpiar.",
          ],
          ex: "The kids have to finish their <em>chores</em> before they get any screen time.",
          note: [
            "Mexican Spanish <em>quehaceres</em>. Most households do these themselves; regular domestic help is uncommon, so do not assume a colleague has it.",
            "En México, los quehaceres. En la mayoría de las casas los hace la propia familia; tener ayuda doméstica fija es poco común, así que no des por hecho que tu colega la tiene.",
          ],
          tags: [],
        },
      ],
    },
  ],
  cheat: [
    [
      ["SUBURB ≠ SUBURBIO", "SUBURB ≠ SUBURBIO"],
      [
        "A US <b>suburb</b> is a comfortable residential area outside the city — closer to a <em>zona residencial</em> than to a <em>suburbio</em>.",
        "Un <b>suburb</b> de Estados Unidos es una zona residencial cómoda a las afueras de la ciudad; se parece más a una zona residencial que a un suburbio.",
      ],
    ],
    [
      ["NEIGHBORHOOD, NOT COLONY", "NEIGHBORHOOD, NO COLONY"],
      [
        "Your <em>colonia</em> is your <b>neighborhood</b>. Your <em>fraccionamiento</em> is a <b>subdivision</b> or a <b>gated community</b>.",
        "Tu colonia es tu <b>neighborhood</b>. Tu fraccionamiento es una <b>subdivision</b> o una <b>gated community</b>.",
      ],
    ],
    [
      ["DOWNTOWN", "DOWNTOWN"],
      [
        "<em>El centro</em> is <b>downtown</b>, with no article and no preposition: <em>I work downtown</em>.",
        "El centro es <b>downtown</b>, sin artículo y sin preposición: <em>I work downtown</em>.",
      ],
    ],
    [
      ["YARD vs GARDEN", "YARD vs GARDEN"],
      [
        "The grass around the house is the <b>yard</b>. A <b>garden</b> is only where flowers or vegetables grow.",
        "El pasto alrededor de la casa es el <b>yard</b>. Un <b>garden</b> es solo donde crecen flores o verduras.",
      ],
    ],
    [
      ["APARTMENT vs CONDO", "APARTMENT vs CONDO"],
      [
        "You rent an <b>apartment</b> and own a <b>condo</b>. Neither one is a <em>department</em>.",
        "Rentas un <b>apartment</b> y eres dueño de un <b>condo</b>. Ninguno de los dos es un <em>department</em>.",
      ],
    ],
    [
      ["COLLEGE ≠ COLEGIO", "COLLEGE ≠ COLEGIO"],
      [
        "<b>College</b> is university. A child's <em>colegio</em> is simply a <b>school</b>.",
        "<b>College</b> es la universidad. El colegio de un niño es simplemente <b>school</b>.",
      ],
    ],
    [
      ["PUBLIC SCHOOL", "PUBLIC SCHOOL"],
      [
        "Tax-funded and free — and in many suburbs the option families move there to get.",
        "Financiada con impuestos y gratuita; en muchos <em>suburbs</em> es justo la opción por la que las familias se mudan ahí.",
      ],
    ],
    [
      ["THE SAFE QUESTION", "LA PREGUNTA SEGURA"],
      [
        "<em>How's your commute?</em> and <em>How was your weekend?</em> open almost any conversation with a US colleague.",
        "<em>How's your commute?</em> y <em>How was your weekend?</em> abren casi cualquier plática con un colega de Estados Unidos.",
      ],
    ],
  ],
};
