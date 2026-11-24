import type { RoleGroup } from "./types";

export const groups: RoleGroup[] = [
  {
    title: ["Writing and reviewing code", "Escribir y revisar código"],
    rule: [
      "A remark lands <b>on</b> the thing it is about, one piece is split <b>into</b> several, and you search <b>for</b> what might be there. Verbs that act straight on their object (<em>request</em>, <em>lack</em>) take nothing.",
      "Un comentario cae <b>on</b> aquello de lo que trata, una pieza se divide <b>into</b> varias y buscas <b>for</b> lo que podría estar ahí. Los verbos que actúan directo sobre su objeto (<em>request</em>, <em>lack</em>) no llevan nada.",
    ],
    items: [
      {
        q: "Request ______ a review",
        k: ["none"],
        ex: "I'll <em>request a review</em> from the platform team as soon as the tests pass.",
        trap: [
          "<span class='x'>✗</span> <em>request for a review</em> as a verb. You <em>ask <b>for</b></em> a review, but you <em>request</em> a review with nothing in between. The noun does take it: <em>a request <b>for</b> a review</em>.",
          "<span class='x'>✗</span> <em>request for a review</em> como verbo. Dices <em>ask <b>for</b> a review</em>, pero <em>request a review</em> sin nada en medio. El sustantivo sí lo lleva: <em>a request <b>for</b> a review</em>.",
        ],
      },
      {
        q: "Comment ______ a pull request",
        k: ["on"],
        ex: "Two people <em>commented on</em> my pull request, but nobody approved it.",
        trap: [
          "<span class='x'>✗</span> <em>comment in a pull request</em> or <em>comment a pull request</em>. Spanish <em>comentar en</em> suggests <b>in</b>; in English you comment <b>on</b> the thing you are reacting to.",
          "<span class='x'>✗</span> <em>comment in a pull request</em> o <em>comment a pull request</em>. <em>Comentar en</em> sugiere <b>in</b>; en inglés comentas <b>on</b> aquello a lo que reaccionas.",
        ],
      },
      {
        q: "Break a function ______ smaller pieces",
        k: ["into"],
        ex: "The reviewer asked me to <em>break the function into</em> three smaller ones.",
      },
      {
        q: "Lack ______ test coverage",
        k: ["none"],
        ex: "The payment module <em>lacks test coverage</em>, so nobody wants to touch it.",
        trap: [
          "<span class='x'>✗</span> <em>lacks of test coverage</em>. Spanish <em>carecer de</em> and the noun phrase <em>a lack of</em> both suggest <b>of</b>, but the verb <em>lack</em> takes a direct object.",
          "<span class='x'>✗</span> <em>lacks of test coverage</em>. <em>Carecer de</em> y la frase nominal <em>a lack of</em> sugieren <b>of</b>, pero el verbo <em>lack</em> lleva objeto directo.",
        ],
      },
      {
        q: "Be covered ______ tests",
        k: ["by"],
        ex: "That branch of the logic isn't <em>covered by</em> any tests.",
      },
      {
        q: "Check ______ null values",
        hint: ["(look to see if any exist)", "(revisar si existe alguno)"],
        k: ["for"],
        ex: "You need to <em>check for</em> null values before you call that method.",
        note: [
          "<em>Check for</em> something means to look for its presence. <em>Check</em> something, with no preposition, means to inspect it: <em>check the logs</em>.",
          "<em>Check for</em> algo significa buscar si está presente. <em>Check</em> algo, sin preposición, significa inspeccionarlo: <em>check the logs</em>.",
        ],
      },
      {
        q: "Be consistent ______ the style guide",
        k: ["with"],
        ex: "The naming isn't <em>consistent with</em> the style guide, so the linter will flag it.",
      },
    ],
  },
  {
    title: ["Branches, builds and deploys", "Ramas, builds y deploys"],
    rule: [
      "Code that moves has a destination, so it goes <b>to</b> or <b>into</b> it. Code that has already arrived is <b>in</b> that place. The particles describe the direction of the change: <b>back</b> to before, <b>up</b> into existence, <b>out</b> of the repository and onto your machine.",
      "El código que se mueve tiene destino, así que va <b>to</b> o <b>into</b> él. El código que ya llegó está <b>in</b> ese lugar. Las partículas describen la dirección del cambio: <b>back</b> a lo anterior, <b>up</b> para crear algo, <b>out</b> del repositorio hacia tu máquina.",
    ],
    items: [
      {
        q: "Deploy ______ production",
        k: ["to"],
        ex: "We <em>deploy to production</em> every Tuesday and Thursday, never on a Friday.",
        trap: [
          "<span class='x'>✗</span> <em>deploy in production</em> or <em>deploy on production</em>. Spanish <em>desplegar en</em> suggests <b>in</b>, but a deploy is a movement, so it goes <b>to</b> an environment.",
          "<span class='x'>✗</span> <em>deploy in production</em> o <em>deploy on production</em>. <em>Desplegar en</em> sugiere <b>in</b>, pero un deploy es un movimiento, así que va <b>to</b> un ambiente.",
        ],
      },
      {
        q: "Merge a branch ______ main",
        k: ["into", "to"],
        ex: "Don't <em>merge</em> that <em>branch into main</em> until the pipeline is green.",
        note: [
          "<b>Into</b> is the standard choice. You will also hear <em>merge to main</em> in everyday speech.",
          "<b>Into</b> es la opción estándar. También vas a escuchar <em>merge to main</em> en el habla diaria.",
        ],
      },
      {
        q: "Roll ______ a deploy",
        hint: ["(return to the previous version)", "(regresar a la versión anterior)"],
        k: ["back"],
        ex: "Error rates doubled, so we <em>rolled back</em> the deploy within ten minutes.",
      },
      {
        q: "Check ______ a branch",
        hint: ["(switch to it locally)", "(cambiarte a ella en tu máquina)"],
        k: ["out"],
        ex: "<em>Check out</em> my branch and run it locally; you'll see the bug right away.",
      },
      {
        q: "Be ______ production",
        hint: ["(already live)", "(ya en vivo)"],
        k: ["in"],
        ex: "The fix has been <em>in production</em> since yesterday afternoon.",
        note: [
          "Movement versus location: you <em>deploy <b>to</b> production</em>, and then the code is <em><b>in</b> production</em>.",
          "Movimiento contra ubicación: haces <em>deploy <b>to</b> production</em> y después el código está <em><b>in</b> production</em>.",
        ],
      },
      {
        q: "Spin ______ an environment",
        hint: ["(start a new one)", "(levantar uno nuevo)"],
        k: ["up"],
        ex: "I'll <em>spin up</em> a staging environment so QA can test the branch.",
        note: [
          "The opposite is <em>spin down</em> or <em>tear down</em>: <em>tear down the environment when you're done</em>.",
          "Lo contrario es <em>spin down</em> o <em>tear down</em>: <em>tear down the environment when you're done</em>.",
        ],
      },
      {
        q: "Put a feature ______ a flag",
        k: ["behind"],
        ex: "Let's <em>put the</em> new checkout <em>behind a flag</em> and turn it on for five percent of users.",
      },
    ],
  },
  {
    title: ["Bugs and debugging", "Bugs y depuración"],
    rule: [
      "Debugging is a search, so the particles describe movement: <b>into</b> the problem, <b>down</b> to its source, <b>through</b> the code line by line, <b>out</b> for whatever you eliminate. A solution is <b>for</b> a problem, and code runs <b>on</b> a machine.",
      "Depurar es una búsqueda, así que las partículas describen movimiento: <b>into</b> el problema, <b>down</b> hasta su origen, <b>through</b> el código línea por línea, <b>out</b> para lo que descartas. Una solución es <b>for</b> un problema, y el código corre <b>on</b> una máquina.",
    ],
    items: [
      {
        q: "Investigate ______ the bug",
        k: ["none"],
        ex: "I'll <em>investigate the bug</em> this afternoon and update the ticket.",
        trap: [
          "<span class='x'>✗</span> <em>investigate about the bug</em> or <em>investigate on the bug</em>. Spanish <em>investigar sobre</em> adds a preposition; <em>investigate</em> takes a direct object. <em>Look <b>into</b> the bug</em> is the version with a preposition.",
          "<span class='x'>✗</span> <em>investigate about the bug</em> o <em>investigate on the bug</em>. <em>Investigar sobre</em> agrega preposición; <em>investigate</em> lleva objeto directo. La versión con preposición es <em>look <b>into</b> the bug</em>.",
        ],
      },
      {
        q: "Look ______ a bug",
        hint: ["(investigate it)", "(investigarlo)"],
        k: ["into"],
        ex: "Can you <em>look into</em> the login bug? Support has three tickets on it.",
      },
      {
        q: "Track ______ a bug",
        hint: ["(find where it comes from)", "(encontrar de dónde viene)"],
        k: ["down"],
        ex: "It took me two days to <em>track down</em> that memory leak.",
        note: [
          "<em>Track down</em> means the search is finished and you found the source. <em>Track</em> a bug, with no particle, means to follow its status in a ticket.",
          "<em>Track down</em> significa que la búsqueda terminó y encontraste el origen. <em>Track</em> a bug, sin partícula, significa darle seguimiento en un ticket.",
        ],
      },
      {
        q: "Step ______ the code",
        hint: ["(line by line in the debugger)", "(línea por línea en el debugger)"],
        k: ["through"],
        ex: "I <em>stepped through the code</em> in the debugger and the value changes inside the loop.",
      },
      {
        q: "Rule ______ a cause",
        hint: ["(eliminate it)", "(descartarla)"],
        k: ["out"],
        ex: "We've <em>ruled out</em> the database, so the problem has to be in the cache.",
      },
      {
        q: "A fix ______ the bug",
        k: ["for"],
        ex: "I have <em>a fix for the bug</em>, but I want to add a test before I open the pull request.",
        trap: [
          "<span class='x'>✗</span> <em>a fix of the bug</em> or <em>a solution of the problem</em>. Spanish <em>la solución del problema</em> suggests <b>of</b>; in English a fix is <b>for</b> a bug and a solution is <b>to</b> or <b>for</b> a problem.",
          "<span class='x'>✗</span> <em>a fix of the bug</em> o <em>a solution of the problem</em>. <em>La solución del problema</em> sugiere <b>of</b>; en inglés un fix es <b>for</b> un bug y una solución es <b>to</b> o <b>for</b> un problema.",
        ],
      },
      {
        q: "It works ______ my machine",
        k: ["on"],
        ex: "<em>It works on my machine</em>, so the difference has to be in the environment variables.",
        trap: [
          "<span class='x'>✗</span> <em>it works in my machine</em>. Spanish <em>en mi máquina</em> suggests <b>in</b>; software runs <b>on</b> a machine, <b>on</b> a server and <b>on</b> a phone.",
          "<span class='x'>✗</span> <em>it works in my machine</em>. <em>En mi máquina</em> sugiere <b>in</b>; el software corre <b>on</b> a machine, <b>on</b> a server y <b>on</b> a phone.",
        ],
      },
    ],
  },
  {
    title: ["Front end, back end and data", "Front end, back end y datos"],
    rule: [
      "Follow the data. A request goes <b>to</b> a system, the data comes back <b>from</b> it, and the work happens <b>on</b> the server or <b>on</b> the client. Parts make up a whole with <b>of</b>, and two things that work together are compatible <b>with</b> each other.",
      "Sigue los datos. Una petición va <b>to</b> un sistema, los datos regresan <b>from</b> él y el trabajo ocurre <b>on</b> the server o <b>on</b> the client. Las partes forman un todo con <b>of</b>, y dos cosas que funcionan juntas son compatibles <b>with</b> la otra.",
    ],
    items: [
      {
        q: "Call ______ the endpoint",
        k: ["none"],
        ex: "The front end should <em>call the endpoint</em> once, not on every keystroke.",
        trap: [
          "<span class='x'>✗</span> <em>call to the endpoint</em> as a verb. Spanish <em>llamar a</em> pulls you toward <b>to</b>; the verb <em>call</em> takes a direct object. The noun does take it: <em>make a call <b>to</b> the endpoint</em>.",
          "<span class='x'>✗</span> <em>call to the endpoint</em> como verbo. <em>Llamar a</em> te jala hacia <b>to</b>; el verbo <em>call</em> lleva objeto directo. El sustantivo sí lo lleva: <em>make a call <b>to</b> the endpoint</em>.",
        ],
      },
      {
        q: "Wait ______ the response",
        k: ["for"],
        ex: "The page shouldn't <em>wait for the response</em> before it renders the header.",
        trap: [
          "<span class='x'>✗</span> <em>wait the response</em>. Spanish <em>esperar la respuesta</em> has no preposition; <em>wait</em> always needs <b>for</b>. The verb <em>await</em> is the opposite and takes nothing: <em>await the response</em>.",
          "<span class='x'>✗</span> <em>wait the response</em>. <em>Esperar la respuesta</em> no lleva preposición; <em>wait</em> siempre necesita <b>for</b>. El verbo <em>await</em> es al revés y no lleva nada: <em>await the response</em>.",
        ],
      },
      {
        q: "Connect ______ the database",
        k: ["to"],
        ex: "The service can't <em>connect to the database</em> from the new subnet.",
        note: [
          "Machines and services connect <b>to</b> each other. <em>Connect with</em> is for people: <em>connect with a recruiter</em>.",
          "Las máquinas y los servicios se conectan <b>to</b> algo. <em>Connect with</em> es para personas: <em>connect with a recruiter</em>.",
        ],
      },
      {
        q: "Fetch data ______ the server",
        k: ["from"],
        ex: "The component <em>fetches data from the server</em> every time it mounts, which is why the page feels slow.",
      },
      {
        q: "Render a page ______ the server",
        k: ["on"],
        ex: "We <em>render the page on the server</em> so search engines get the full HTML.",
        note: [
          "Code runs <b>on</b> the server and <b>on</b> the client, but <b>in</b> the browser and <b>in</b> a container.",
          "El código corre <b>on</b> the server y <b>on</b> the client, pero <b>in</b> the browser e <b>in</b> a container.",
        ],
      },
      {
        q: "Consist ______ three services",
        k: ["of"],
        ex: "The back end <em>consists of</em> three services and a shared Postgres database.",
        trap: [
          "<span class='x'>✗</span> <em>consists in three services</em>. Spanish <em>consistir en</em> pulls you toward <b>in</b>; when you list the parts of something, English uses <b>of</b>.",
          "<span class='x'>✗</span> <em>consists in three services</em>. <em>Consistir en</em> te jala hacia <b>in</b>; cuando enumeras las partes de algo, el inglés usa <b>of</b>.",
        ],
      },
      {
        q: "Be compatible ______ older browsers",
        k: ["with"],
        ex: "The new date picker isn't <em>compatible with</em> older browsers, so we need a fallback.",
      },
    ],
  },
  {
    title: ["Stand-ups, tickets and estimates", "Stand-ups, tickets y estimaciones"],
    rule: [
      "Status is a position: you are stopped <b>by</b> something, finished <b>with</b> something, reporting <b>on</b> something. A number on a scale takes <b>at</b>. Tickets move, so they get particles: <b>up</b> from the board, <b>over</b> to the next sprint.",
      "El estatus es una posición: algo te detiene (<b>by</b>), terminaste <b>with</b> algo, informas <b>on</b> algo. Un número en una escala lleva <b>at</b>. Los tickets se mueven, así que llevan partículas: <b>up</b> desde el tablero, <b>over</b> al siguiente sprint.",
    ],
    items: [
      {
        q: "Attend ______ the stand-up",
        k: ["none"],
        ex: "I can't <em>attend the stand-up</em> tomorrow, so I'll post my update in the channel.",
        trap: [
          "<span class='x'>✗</span> <em>attend to the stand-up</em> or <em>assist to the stand-up</em>. Spanish <em>asistir a</em> causes both errors; <em>attend</em> takes a direct object, and <em>assist</em> means to help.",
          "<span class='x'>✗</span> <em>attend to the stand-up</em> o <em>assist to the stand-up</em>. <em>Asistir a</em> provoca los dos errores; <em>attend</em> lleva objeto directo, y <em>assist</em> significa ayudar.",
        ],
      },
      {
        q: "Be blocked ______ another team",
        k: ["by", "on"],
        ex: "I'm <em>blocked by</em> the API team until they publish the new schema.",
        note: [
          "<b>By</b> names who or what is stopping you. <b>On</b> names the thing you are waiting for: <em>blocked on a code review</em>.",
          "<b>By</b> nombra a quien o lo que te detiene. <b>On</b> nombra lo que estás esperando: <em>blocked on a code review</em>.",
        ],
      },
      {
        q: "Pick ______ a ticket",
        hint: ["(take it from the board)", "(tomarlo del tablero)"],
        k: ["up"],
        ex: "I finished the search bug, so I'll <em>pick up</em> the next ticket in the column.",
      },
      {
        q: "Carry a ticket ______ to the next sprint",
        k: ["over"],
        ex: "We had to <em>carry</em> two <em>tickets over to the next sprint</em> because QA ran out of time.",
        note: [
          "The noun is one word: <em>we have three points of carryover</em>.",
          "El sustantivo es una sola palabra: <em>we have three points of carryover</em>.",
        ],
      },
      {
        q: "Estimate a ticket ______ three points",
        k: ["at"],
        ex: "We <em>estimated the ticket at</em> three points, but it turned into an eight.",
        note: [
          "<b>At</b> marks a point on a scale: <em>estimated at two days</em>, <em>priced at ten dollars</em>.",
          "<b>At</b> marca un punto en una escala: <em>estimated at two days</em>, <em>priced at ten dollars</em>.",
        ],
      },
      {
        q: "Be done ______ a task",
        k: ["with"],
        ex: "I'm almost <em>done with</em> the export task; it just needs a review.",
      },
      {
        q: "Give an update ______ a ticket",
        k: ["on"],
        ex: "Can you <em>give</em> us <em>an update on</em> the migration ticket before we close the stand-up?",
      },
    ],
  },
];
