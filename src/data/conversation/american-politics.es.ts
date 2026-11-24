// Talking American Politics — banco de vocabulario, capa en español (es-MX, registro de tú).
// Cada clave de `items` es el término en inglés (`q`) EXACTAMENTE como aparece en
// ./american-politics.en.ts. Los términos y las frases de ejemplo se quedan en inglés.
// Regla de neutralidad: se describe qué significan los términos y cómo funciona la maquinaria.
// Nunca se evalúa qué partido o postura tiene la razón.

export interface TermItemEs {
  hint?: string;
  a: string;
  note?: string;
  trap?: string;
}

export interface TermGroupEs {
  title: string;
  rule: string;
  items: Record<string, TermItemEs>;
}

export const GROUPS_ES: TermGroupEs[] = [
  {
    title: "El marco — Poderes y facultades",
    rule: "El gobierno estadounidense está diseñado para ser lento a propósito. Tres poderes tienen facultades separadas, y cada uno puede frenar a los otros. Casi todos los términos de abajo describen una pieza de esa maquinaria de frenos.",
    items: {
      "Separation of powers": {
        a: "La división del gobierno en tres poderes — legislativo, ejecutivo y judicial — cada uno con su propia autoridad.",
      },
      "Checks and balances": {
        a: "Las formas en que cada poder puede limitar a los otros dos; en español, pesos y contrapesos.",
        note: "Siempre en plural, siempre con <b>and</b>. <span class='x'>✗</span> <em>a check and balance</em>.",
      },
      "The legislative branch": {
        a: "El Congreso — el poder que redacta las leyes.",
      },
      "The executive branch": {
        a: "El Presidente más los departamentos y las agencias que ejecutan la ley.",
      },
      "The judicial branch": {
        a: "Los tribunales federales, con la Suprema Corte a la cabeza.",
      },
      "The administration": {
        hint: "(falso amigo)",
        a: "El Presidente en funciones y los funcionarios que nombró.",
        trap: "En español, <em>el gobierno</em> corresponde aquí a <b>the administration</b>, no a <b>the government</b>. En el inglés de Estados Unidos, <b>the government</b> es todo el aparato permanente; <b>the administration</b> es el equipo que está a cargo en este momento y cambia con cada Presidente.",
      },
      Federal: {
        a: "Que pertenece al gobierno nacional y no a un estado.",
        note: "La contraparte es <b>state</b> — no <em>local</em>, que se refiere al nivel de ciudad o condado.",
      },
      "States' rights": {
        a: "El principio de que las facultades que no se le dieron al gobierno nacional les corresponden a los estados.",
        note: "Fíjate dónde va el apóstrofo: los derechos <em>of the states</em>.",
      },
      "The Cabinet": {
        a: "Los titulares de los departamentos del ejecutivo, que asesoran al Presidente; el equivalente del gabinete.",
        note: "Va con mayúscula. Un solo integrante es un <b>Cabinet secretary</b> — Secretary of State, Secretary of the Treasury.",
      },
      Agency: {
        a: "Un organismo federal que redacta y hace cumplir reglas detalladas al amparo de una ley.",
        note: "Útil para los negocios: son las agencias, no el Congreso, las que redactan la mayor parte de la regulación con la que una empresa lidia en la práctica.",
      },
      Term: {
        a: "El periodo fijo durante el cual un funcionario ocupa su cargo.",
      },
      "Term limits": {
        a: "Un tope al número de periodos que alguien puede ocupar un cargo.",
      },
      Impeachment: {
        a: "La acusación formal que la Cámara de Representantes puede presentar contra un funcionario federal. Después, el Senado lleva a cabo un juicio.",
        trap: "<span class='x'>✗</span> <em>He was impeached, so he left office.</em> El impeachment es la acusación; la destitución requiere una condena por dos tercios del Senado. Hasta los hablantes nativos confunden las dos cosas todo el tiempo.",
      },
      "Oath of office": {
        a: "La promesa formal que hace un funcionario al asumir el cargo; lo que en México es la protesta de ley.",
      },
      "Sworn in": {
        a: "Asumir formalmente el cargo al prestar el juramento.",
        note: "En voz pasiva por regla general: <b>to be sworn in</b>. El sustantivo es <b>the swearing-in</b>.",
      },
      Inauguration: {
        a: "La ceremonia con la que inicia el periodo de un Presidente; se celebra el 20 de enero.",
        note: "Solo para la presidencia. De los demás funcionarios se dice simplemente que son <b>sworn in</b>.",
      },
    },
  },
  {
    title: "El Congreso — La Cámara de Representantes y el Senado",
    rule: "El Congreso tiene dos cámaras, y no son iguales en carácter. La Cámara de Representantes es grande, rápida y ligada a la población. El Senado es pequeño, lento y ligado a los estados. La mayor parte de lo que parece disfunción es el choque entre esos dos diseños.",
    items: {
      Congress: {
        hint: "(falso amigo)",
        a: "El poder legislativo nacional — las dos cámaras juntas.",
        trap: "Sin artículo: <span class='x'>✗</span> <em>the Congress approved it</em> → <span class='ok'>✓</span> <em>Congress approved it</em>. En español, <em>el Congreso</em> lleva artículo; en inglés normalmente no. Además, lo que en español es una <em>legislatura</em>, en inglés es un Congreso numerado — <em>the 119th Congress</em>.",
      },
      Bicameral: {
        a: "Que tiene dos cámaras.",
      },
      Chamber: {
        a: "Cualquiera de las dos cámaras del Congreso.",
        note: "<b>Chamber</b> y <b>house</b> funcionan por igual; <b>the House</b>, con mayúscula, se refiere específicamente a la Cámara de Representantes.",
      },
      "The House of Representatives": {
        a: "La cámara baja — 435 miembros con voto, repartidos según la población de cada estado, con periodos de dos años.",
        note: "En español, <em>Cámara de Diputados</em>. Un miembro es un <b>Representative</b>, <b>Congressman</b> o <b>Congresswoman</b> — nunca <em>deputy</em>.",
      },
      "The Senate": {
        a: "La cámara alta — 100 miembros, dos por estado sin importar la población, con periodos de seis años.",
        note: "Como a cada estado le tocan dos, un estado de cuarenta millones de habitantes y uno de seiscientos mil pesan lo mismo aquí. Esa asimetría explica buena parte de la política estadounidense.",
      },
      "Member of Congress": {
        a: "Alguien que ocupa un cargo en cualquiera de las dos cámaras, aunque en la práctica casi siempre se refiere a un miembro de la Cámara de Representantes.",
        note: "El término neutro más seguro cuando no sabes de qué cámara se trata. Por escrito se abrevia <b>MoC</b>.",
      },
      District: {
        a: "El área geográfica que representa un miembro de la Cámara de Representantes.",
      },
      Constituent: {
        a: "Una persona que vive en el área que un funcionario representa.",
        trap: "No es lo mismo que un votante — un <b>constituent</b> es cualquier persona del distrito, haya votado o no, y pueda votar o no.",
      },
      "Speaker of the House": {
        a: "Quien preside la Cámara de Representantes, elegido por sus miembros y, en la práctica, líder del partido mayoritario.",
        note: "Se puede argumentar que es el segundo cargo más poderoso de Washington, porque nada llega a votación en la Cámara sin el consentimiento del Speaker.",
      },
      "Majority Leader / Minority Leader": {
        a: "Los líderes en el pleno del partido más grande y del más pequeño en cada cámara.",
      },
      Whip: {
        a: "El funcionario del partido que cuenta los votos y presiona a los miembros para que voten con el partido.",
        note: "También es verbo: <b>to whip votes</b>. Viene del término de cacería para quien mantiene junta a la jauría.",
      },
      Caucus: {
        hint: "(dos significados)",
        a: "(1) Un grupo de miembros organizado en torno a un partido o a un interés común. (2) En algunos estados, una alternativa a la elección primaria que se hace por medio de asambleas.",
        note: "El contexto decide el significado. El segundo sentido aparece solo en torno a las nominaciones presidenciales.",
      },
      Committee: {
        a: "Un grupo más pequeño que revisa las iniciativas de un área de política pública antes de que las vea el pleno; el equivalente de una comisión.",
        note: "<b>In committee</b>, sin artículo, es la frase estándar para una iniciativa en revisión — y es donde la mayoría de las iniciativas mueren en silencio.",
      },
      "Chair / Ranking member": {
        a: "Quien encabeza un comité, del partido mayoritario, y el miembro de mayor rango del partido minoritario.",
      },
      Hearing: {
        a: "Una sesión de comité en la que los testigos declaran y los miembros hacen preguntas.",
        note: "<b>To testify</b>, <b>to be called to testify</b>, <b>to be subpoenaed</b> — un grupo de expresiones útil para cualquiera que trabaje en una industria regulada.",
      },
      Oversight: {
        a: "La supervisión que hace el Congreso de cómo el poder ejecutivo aplica la ley.",
      },
      Quorum: {
        a: "El número mínimo de miembros que deben estar presentes para que se pueda sesionar.",
      },
      "Session / Recess": {
        a: "El periodo en que una cámara está sesionando, y la pausa en que no lo está.",
        note: "<b>In session</b> e <b>in recess</b> — los dos sin artículo.",
      },
      Midterms: {
        a: "Las elecciones al Congreso que se celebran a la mitad de un periodo presidencial.",
        note: "En español, <em>elecciones intermedias</em>. Casi siempre en plural. Históricamente, el partido del Presidente tiende a perder escaños de la Cámara de Representantes en ellas.",
      },
      Incumbent: {
        a: "La persona que ocupa el cargo actualmente.",
        note: "También es adjetivo: <em>the incumbent senator</em>. El contrincante es <b>the challenger</b>.",
      },
      Seat: {
        a: "Un lugar en un órgano legislativo, del que se habla como algo que se puede ganar, conservar, perder o voltear; en español, un escaño o una curul.",
        note: "Lo que importa es el grupo de verbos: <b>hold</b> a seat, <b>lose</b> a seat, <b>flip</b> a seat, <b>pick up</b> seats.",
      },
      "Majority / Supermajority": {
        a: "Más de la mitad; y un umbral más alto, como tres quintas partes o dos tercios.",
      },
    },
  },
  {
    title: "Cómo una iniciativa se convierte en ley",
    rule: "Una iniciativa tiene que sobrevivir al comité, a las dos cámaras, a las diferencias entre las dos versiones y al Presidente. Cualquiera de esas etapas puede acabar con ella — por eso la abrumadora mayoría de las iniciativas nunca se convierte en ley.",
    items: {
      Bill: {
        a: "Una iniciativa de ley: una ley propuesta, antes de que se apruebe.",
        trap: "<span class='x'>✗</span> <em>They presented a new law</em> → <span class='ok'>✓</span> <em>They introduced a new <b>bill</b></em>. Solo es una <b>law</b> después de que se aprueba y se firma. En español, <em>ley</em> cubre las dos etapas; en inglés no.",
      },
      "Introduce a bill": {
        a: "Presentar formalmente una iniciativa para que se considere.",
        trap: "<span class='x'>✗</span> <em>present a bill</em> · <span class='x'>✗</span> <em>propose a law</em>. El verbo es <b>introduce</b>.",
      },
      "Sponsor / Co-sponsor": {
        a: "El miembro que presenta una iniciativa, y quienes le suman formalmente su apoyo.",
      },
      "Refer to committee": {
        a: "Turnar una iniciativa recién presentada al comité que corresponde.",
      },
      Markup: {
        a: "La sesión de comité en la que una iniciativa se debate y se modifica línea por línea.",
      },
      Amendment: {
        hint: "(dos significados)",
        a: "(1) Un cambio que se le hace a una iniciativa. (2) Un cambio a la Constitución misma.",
        note: "Con mayúscula y numerada en el sentido constitucional. El verbo es <b>to amend</b>.",
      },
      Rider: {
        a: "Una disposición sin relación con el tema que se le cuelga a una iniciativa con probabilidades de aprobarse.",
      },
      "Earmark / Pork barrel": {
        a: "Gasto dirigido al distrito de un miembro en particular, muchas veces a cambio de su voto.",
        note: "<b>Pork barrel</b> es el término más antiguo y más crítico; <b>pork</b> a secas es común — <em>that's pure pork</em>.",
      },
      "The floor": {
        a: "El pleno de la cámara, por oposición al comité.",
        note: "Una fuente rica de frases: <b>a floor vote</b>, <b>floor debate</b>, <b>to bring a bill to the floor</b>, <b>to yield the floor</b>.",
      },
      "Roll call vote": {
        a: "Una votación nominal: queda registrada la postura de cada miembro con su nombre.",
        note: "La alternativa es un <b>voice vote</b>, que no se registra de forma individual.",
      },
      Pass: {
        a: "Aprobar; se dice tanto de una cámara como de una iniciativa.",
        note: "Las dos formas funcionan y significan lo mismo: <em>the bill passed</em> y <em>the Senate passed the bill</em>.",
      },
      Filibuster: {
        a: "Una táctica del Senado que consiste en prolongar el debate para bloquear una votación.",
        note: "Sustantivo y verbo. Los filibusters modernos rara vez implican hablar de verdad — la sola amenaza obliga a la mayoría a conseguir 60 votos.",
      },
      Cloture: {
        a: "El procedimiento del Senado que pone fin al debate y permite votar.",
        note: "Desde 1975 se necesitan <b>60 votos</b> — tres quintas partes de todos los senadores — para invocar cloture en materia legislativa, y por eso 60 se considera el umbral real para aprobar una ley en el Senado. Las nominaciones solo necesitan mayoría simple.",
      },
      Reconciliation: {
        a: "Un procedimiento presupuestario especial que permite que ciertas iniciativas fiscales se aprueben en el Senado con 51 votos en lugar de 60.",
        note: "Por eso la legislación económica importante muchas veces se aprueba sin un solo voto del otro partido — es la única ruta para darle la vuelta al filibuster.",
      },
      "The nuclear option": {
        a: "Cambiar las reglas del Senado por mayoría simple para bajar un umbral de votación.",
      },
      "Conference committee": {
        a: "Un grupo conjunto que concilia las versiones distintas de una misma iniciativa aprobadas por la Cámara de Representantes y por el Senado.",
        note: "Muchas veces se acorta a <b>conference</b>: <em>the bill is in conference</em>.",
      },
      Veto: {
        a: "El rechazo del Presidente a una iniciativa ya aprobada.",
        note: "Verbo y sustantivo. En español, <em>vetar</em> es aquí un cognado verdadero — de los fáciles.",
      },
      "Pocket veto": {
        a: "Dejar morir una iniciativa al no firmarla cuando el Congreso ya levantó sus sesiones.",
      },
      Override: {
        a: "Aprobar una iniciativa por encima del veto del Presidente, lo que requiere dos tercios de ambas cámaras.",
        note: "Irregular: override / overrode / overridden.",
      },
      "Sign into law": {
        a: "La aprobación del Presidente que convierte una iniciativa en ley.",
        trap: "En español, <em>sancionar una ley</em> significa promulgarla. En inglés, <b>to sanction</b> casi siempre significa <em>penalize</em> — <em>sanctions on exports</em>. Nunca uses <b>sanction</b> para la firma de una iniciativa.",
      },
      Enact: {
        a: "Convertir algo en ley — el verbo formal para cuando todo el proceso se completa.",
      },
      Statute: {
        a: "Una ley aprobada por un órgano legislativo.",
        note: "<b>Statute</b> = ley escrita. Compárala con <b>regulation</b> (redactada por una agencia) y con <b>case law</b> (construida por los tribunales).",
      },
      Repeal: {
        a: "Cancelar una ley vigente; derogarla.",
      },
      Appropriations: {
        a: "La legislación que de verdad aporta el dinero.",
        note: "La distinción importa: <b>authorization</b> permite un programa; <b>appropriation</b> le da fondos. Un programa puede estar autorizado y aun así no recibir nada.",
      },
      "Continuing resolution": {
        hint: "(CR)",
        a: "Una medida provisional que mantiene al gobierno financiado en los niveles vigentes cuando no se aprobó un presupuesto.",
      },
      "Government shutdown": {
        a: "La suspensión parcial de las operaciones federales cuando se vence el financiamiento.",
      },
      "Debt ceiling": {
        a: "El tope que fija la ley a cuánto puede endeudarse el gobierno federal; el techo de deuda.",
      },
    },
  },
  {
    title: "Elecciones y campañas",
    rule: "Son dos etapas, y fuera de Estados Unidos mucha gente pasa por alto la primera. Los partidos eligen a sus propios candidatos en las primarias; solo después se enfrentan entre sí. Buena parte del comportamiento político estadounidense se explica porque los candidatos tienen que ganar dos veces, ante dos públicos distintos.",
    items: {
      Primary: {
        a: "Una elección en la que los propios votantes de un partido eligen a su candidato.",
        note: "La etapa que no tiene equivalente directo en muchos sistemas. Un candidato primero tiene que convencer a los votantes de su propio partido y después al electorado general — y eso lo jala en dos direcciones.",
      },
      "Closed / Open primary": {
        a: "Una primaria limitada a los miembros registrados del partido, frente a una en la que puede participar cualquier votante.",
      },
      "General election": {
        a: "La elección final en la que se enfrentan los candidatos de los partidos.",
      },
      "Nominee / Nomination": {
        a: "El candidato que elige un partido, y el acto de elegirlo.",
      },
      Ticket: {
        a: "La fórmula de candidatos de un partido, sobre todo la de Presidente y Vicepresidente.",
        note: "<b>The top of the ticket</b> = el candidato presidencial. <b>Down-ballot</b> = las contiendas que van debajo.",
      },
      "Running mate": {
        a: "El candidato a la vicepresidencia dentro de una fórmula.",
      },
      Campaign: {
        a: "El esfuerzo organizado para ganar una elección.",
        note: "También es verbo: <b>to campaign for</b> alguien o algo. <b>On the campaign trail</b> = de gira, de evento en evento.",
      },
      "Stump speech": {
        a: "El discurso estándar que un candidato da una y otra vez.",
        note: "Viene de hablar parado sobre el tocón de un árbol. <b>On the stump</b> = en plena campaña.",
      },
      Grassroots: {
        a: "Impulsado por simpatizantes comunes y corrientes, y no por la estructura del partido; lo que surge desde las bases.",
        note: "Lo opuesto es <b>astroturf</b> — una campaña diseñada para parecer grassroots, pero financiada y organizada desde arriba.",
      },
      Turnout: {
        a: "La proporción de votantes con derecho a voto que efectivamente vota; la participación electoral.",
        note: "Incontable: <span class='x'>✗</span> <em>turnouts were high</em>.",
      },
      Ballot: {
        a: "El papel o la pantalla donde se emite el voto; también la lista de lo que se está votando.",
        note: "En español, <em>boleta</em>. <b>On the ballot</b> = que se somete a votación.",
      },
      "Polling place / Precinct": {
        a: "El lugar donde la gente vota, y la demarcación electoral más pequeña.",
        note: "En español, <em>casilla</em>. Cuidado con <b>poll</b>: <b>the polls</b> = los lugares de votación, pero <b>a poll</b> = una encuesta de opinión.",
      },
      "Absentee / Mail-in ballot": {
        a: "Una boleta que se envía por correo en lugar de emitirse en persona.",
      },
      "Early voting": {
        a: "Votar en persona antes del día de la elección.",
      },
      "Voter registration": {
        a: "El trámite de inscribirse para poder votar.",
        note: "En español, <em>padrón electoral</em> ≈ <b>the voter rolls</b>. A diferencia de muchos países, en Estados Unidos registrarse suele ser responsabilidad del propio votante.",
      },
      Redistricting: {
        a: "Volver a trazar los límites de los distritos, normalmente después de cada censo, que se hace cada diez años; la redistritación.",
      },
      Gerrymandering: {
        a: "Trazar los límites de los distritos para darle ventaja a un partido.",
        note: "En términos mecánicos, concentra a los votantes contrarios en pocos distritos o los dispersa en muchos. Los dos partidos lo hacen donde controlan el proceso, y los dos se quejan donde lo hace el otro.",
      },
      "Swing state / Battleground": {
        a: "Un estado que cualquiera de los dos partidos podría ganar de manera creíble.",
        note: "Lo opuesto es un <b>safe state</b> o un <b>safe seat</b>.",
      },
      Landslide: {
        a: "Una victoria por un margen muy amplio.",
      },
      Margin: {
        a: "El tamaño de la diferencia entre los candidatos.",
      },
      Concede: {
        a: "Aceptar públicamente la derrota.",
        note: "El sustantivo es <b>a concession speech</b>. Reconocer la derrota es una costumbre, no un requisito legal.",
      },
      Certify: {
        a: "Confirmar oficialmente los resultados de una elección.",
        note: "En español, <em>cómputo</em> ≈ <b>the count</b> o <b>the canvass</b>; <em>impugnar</em> ≈ <b>to contest</b> o <b>to challenge</b>.",
      },
      Runoff: {
        a: "Una segunda vuelta entre los que quedaron en los primeros lugares cuando nadie supera el umbral requerido.",
      },
      "Ballot measure / Proposition": {
        a: "Una pregunta de política pública que se somete directamente a los votantes en lugar de que la decida un órgano legislativo.",
        note: "En algunos estados se llama <b>proposition</b>, sobre todo en California — <em>Prop 13</em>.",
      },
      "Lobbyist / Lobby": {
        a: "Alguien a quien le pagan por influir en la legislación; y el acto de hacerlo. En español, cabildero y cabildear.",
        note: "Neutro y legal en el uso estadounidense, a diferencia de la connotación negativa que la palabra suele tener en otros lugares. <b>K Street</b> es la forma abreviada de referirse a la industria del cabildeo.",
      },
      "PAC / Super PAC": {
        hint: "(sigla)",
        a: "Political Action Committee — una organización que recauda dinero para causas políticas. Un Super PAC puede recaudar sumas ilimitadas, pero no puede coordinarse directamente con una campaña.",
      },
      Coattails: {
        a: "El efecto de un candidato popular a la cabeza de la fórmula que ayuda a ganar a los demás candidatos de su partido; el efecto de arrastre.",
      },
      "October surprise": {
        a: "Una revelación de último momento, calculada para influir en una elección.",
      },
    },
  },
  {
    title: "El Colegio Electoral",
    rule: "Al Presidente no lo elige un voto popular nacional. Cada estado organiza su propia contienda y envía electores. Es la característica del sistema que peor se entiende en el extranjero — y los términos de abajo son los que necesitas para seguir cualquier conversación sobre el tema.",
    items: {
      "The Electoral College": {
        a: "El cuerpo de 538 electores que formalmente elige al Presidente.",
        note: "No es un lugar ni una escuela. Nunca se reúne como un solo grupo — los electores se reúnen en las capitales de sus propios estados.",
      },
      Elector: {
        a: "Una persona designada para emitir uno de los 538 votos presidenciales.",
        trap: "<span class='x'>✗</span> No lo confundas con <b>electorate</b> (todos los votantes) ni con <b>voter</b> (un ciudadano común que vota). En español, <em>elector</em> normalmente es un votante común — un falso amigo de verdad.",
      },
      "270": {
        a: "El número de votos electorales que se necesitan para ganar la presidencia — la mayoría de 538.",
        note: "<b>The path to 270</b> es la forma abreviada y estándar de referirse a la estrategia de una campaña.",
      },
      "Electoral votes": {
        a: "La parte de los 538 que le corresponde a un estado, igual a su número de Representatives más sus dos Senators.",
        note: "Como a cada estado le tocan dos votos por sus senadores sin importar su tamaño, los estados pequeños pesan un poco más por habitante.",
      },
      "Winner-take-all": {
        a: "La regla que en la mayoría de los estados le da todos los votos electorales a quien gane ese estado.",
        note: "Maine y Nebraska son las excepciones: asignan algunos votos por distrito del Congreso.",
      },
      "The popular vote": {
        a: "El total nacional de votos individuales.",
        note: "Esa diferencia entre un resultado y otro es posible y ya ocurrió. Describirla es enunciar un hecho; si es un defecto o no, esa es la parte que se debate.",
      },
      "Carry a state": {
        a: "Ganarlo.",
      },
      "Call a state": {
        a: "Cuando los medios de comunicación proyectan a un ganador antes de que termine el conteo.",
        trap: "Una <b>projection</b> de un medio no es un resultado oficial. Mantén las dos cosas separadas: <em>the race has been called</em> ≠ <em>the result has been certified</em>.",
      },
      "Faithless elector": {
        a: "Un elector que vota en contra del candidato con el que estaba comprometido.",
        note: "Hoy la mayoría de los estados obliga legalmente a sus electores.",
      },
      "Swing voter": {
        a: "Un votante que no está comprometido de manera confiable con ninguno de los dos partidos.",
      },
      "Exit poll": {
        a: "Una encuesta a los votantes cuando salen del lugar de votación; una encuesta de salida.",
      },
      Mandate: {
        a: "El argumento de que una victoria contundente da autoridad para llevar a cabo un programa.",
        note: "En español, <em>mandato</em> puede ser un periodo de gobierno; en inglés, <b>mandate</b> significa aquí la autorización de los votantes, no el periodo en sí.",
      },
    },
  },
  {
    title: "Los dos partidos y el lenguaje político",
    rule: "Este grupo describe el vocabulario, no los méritos. Los dos partidos se presentan en paralelo, con los términos que cada uno usa para hablar de sí mismo y que los periodistas usan para describir sus coaliciones — porque tu meta es seguir la conversación, no tomar partido.",
    items: {
      "The Democratic Party": {
        a: "Uno de los dos partidos principales, generalmente asociado con la izquierda y la centroizquierda dentro del espectro político estadounidense. Su coalición se inclina hacia las zonas urbanas, los votantes más jóvenes y los votantes con título universitario. En términos generales favorece un papel federal más amplio en salud, programas sociales y regulación ambiental.",
        note: "El adjetivo es <b>Democratic</b>; un miembro es <b>a Democrat</b>. <span class='x'>✗</span> <em>the Democrat Party</em> es un uso con intención que algunos opositores emplean a propósito — evítalo en un texto neutral. El símbolo es un burro; sus estados se pintan de <b>blue</b>.",
      },
      "The Republican Party": {
        hint: "(GOP)",
        a: "El otro partido principal, generalmente asociado con la derecha y la centroderecha dentro del espectro político estadounidense. Su coalición se inclina hacia las zonas rurales y exurbanas, los votantes de mayor edad y los votantes religiosos practicantes. En términos generales favorece impuestos más bajos, una regulación más ligera y un papel federal más reducido frente a los estados.",
        note: "También se le llama <b>the GOP</b> — Grand Old Party. Un miembro es <b>a Republican</b>. El símbolo es un elefante; sus estados se pintan de <b>red</b>.",
      },
      Liberal: {
        hint: "(falso amigo — importante)",
        a: "En el uso estadounidense, a la izquierda del centro: a favor de un papel más activo del gobierno en la economía y en la política social.",
        trap: "Este es el falso amigo más peligroso del inglés político estadounidense. En México, en España y en buena parte de Europa, <em>liberal</em> significa a favor del libre mercado y de un gobierno limitado — más cerca de lo que los estadounidenses llaman <b>conservative</b> o <b>libertarian</b>. Di <em>liberal</em> en Washington y van a entender lo contrario de lo que quizá quieres decir.",
      },
      Conservative: {
        a: "En el uso estadounidense, a la derecha del centro: a favor de un gobierno federal limitado, impuestos más bajos y arreglos sociales tradicionales.",
        note: "Más cerca del significado internacional de lo que está <b>liberal</b>, pero aun así más estrecho — el conservadurismo estadounidense junta posturas económicas y sociales que en otros lugares van por separado.",
      },
      Progressive: {
        a: "En el ala izquierda de la coalición demócrata, a favor de cambios estructurales más profundos.",
      },
      "Moderate / Centrist": {
        a: "Cerca del centro del espectro, muchas veces con disposición a trabajar con el otro partido.",
        note: "También <b>a swing vote</b> — el miembro cuya postura define el resultado.",
      },
      Independent: {
        a: "Un votante o funcionario que no está registrado en ninguno de los dos partidos principales.",
      },
      "Third party": {
        a: "Cualquier partido que no sea uno de los dos principales.",
        note: "Las reglas de winner-take-all les complican estructuralmente el camino a los terceros partidos; su efecto habitual es el de <b>spoiler</b>.",
      },
      "Platform / Plank": {
        a: "La declaración oficial de las posturas de un partido, y una postura individual dentro de ella.",
      },
      "The base": {
        a: "Los simpatizantes más comprometidos y confiables de un partido.",
        note: "<b>To shore up the base</b>, <b>to energize the base</b>, <b>to play to the base</b>.",
      },
      "Partisan / Bipartisan / Nonpartisan": {
        a: "Leal a un partido; apoyado por los dos; que no pertenece a ninguno.",
        note: "El trío más útil de este grupo para la redacción de negocios. <b>Nonpartisan</b> es como describes un análisis que quieres que los dos lados tomen en serio.",
      },
      "Reach across the aisle": {
        a: "Trabajar con el partido contrario.",
        note: "Viene del pasillo físico que separa a los partidos en la cámara. También <b>bipartisanship</b>, <b>a deal across the aisle</b>.",
      },
      "Party line": {
        a: "La postura oficial de un partido.",
        note: "<b>To toe the party line</b> = seguirla. Fíjate: <b>toe</b>, no <em>tow</em> — un error muy común por escrito, incluso entre hablantes nativos.",
      },
      Gridlock: {
        a: "Una situación en la que fuerzas opuestas se bloquean entre sí y no se aprueba nada.",
        note: "Términos relacionados: <b>deadlock</b>, <b>stalemate</b>, <b>a logjam</b>.",
      },
      "Divided government": {
        a: "Cuando un partido tiene la presidencia y el otro controla al menos una cámara.",
      },
      Polarization: {
        a: "La distancia cada vez mayor entre los partidos y entre sus votantes.",
      },
      Compromise: {
        hint: "(falso amigo)",
        a: "Un arreglo en el que cada parte cede algo.",
        trap: "En español, <em>compromiso</em> es un <b>commitment</b> o una <b>obligation</b> — no un compromise. <span class='x'>✗</span> <em>I have a compromise at three o'clock</em> → <span class='ok'>✓</span> <em>I have a <b>commitment</b> at three.</em> Y en inglés, <b>to compromise</b> algo también puede significar dañarlo: <em>that compromised our position</em>.",
      },
      "Lame duck": {
        a: "Un funcionario que sigue en el cargo aunque su sucesor ya fue elegido.",
      },
      "Talking points": {
        a: "Los argumentos preparados que un partido o una campaña quiere que su gente repita.",
      },
      Spin: {
        a: "Presentar la información de modo que favorezca una interpretación en particular.",
        note: "Un <b>spin doctor</b> es alguien a quien le pagan por hacerlo.",
      },
      "Flip-flop": {
        a: "Dar marcha atrás a una postura que ya se había declarado; se usa como crítica.",
        note: "Siempre peyorativo. La forma neutral es <b>to change position</b> o <b>to revise his view</b>.",
      },
      "On the record / Off the record": {
        a: "Que se puede citar con nombre; frente a lo que no se debe publicar en absoluto.",
        note: "Un tercer nivel, <b>on background</b>, quiere decir que se puede usar, pero sin atribuirlo por nombre — <em>a senior official said</em>. Conviene saberlo antes de cualquier conversación con un periodista.",
      },
    },
  },
  {
    title: "Los tribunales, la Constitución y el poder ejecutivo",
    rule: "Los tribunales deciden qué significa la ley, y en Estados Unidos eso les da un poder fuera de lo común. Para cualquiera que haga negocios del otro lado de la frontera, aquí es donde puede desaparecer una regulación con la que ya contabas en tus planes.",
    items: {
      "The Constitution": {
        a: "El documento fundacional que establece la estructura y los límites del gobierno.",
        note: "Lleva <b>the</b>, a diferencia de <b>Congress</b>. Se enmendó solo 27 veces.",
      },
      "The Bill of Rights": {
        a: "Las primeras diez enmiendas, que establecen las protecciones individuales.",
      },
      Ratify: {
        a: "Dar la aprobación formal, como hacen los estados con una enmienda constitucional o el Senado con un tratado.",
      },
      "The Supreme Court": {
        a: "El tribunal federal más alto — nueve jueces nombrados de por vida.",
        note: "Por escrito, muchas veces <b>SCOTUS</b>. Sus miembros son <b>justices</b>, nunca <em>judges</em>, y quien la encabeza es <b>the Chief Justice</b>.",
      },
      Confirmation: {
        a: "La aprobación del Senado a una persona nominada por el Presidente.",
        note: "Viene de la cláusula de <b>advice and consent</b> de la Constitución.",
      },
      "Judicial review": {
        a: "La facultad de los tribunales de invalidar las leyes que consideren inconstitucionales.",
      },
      "Strike down / Uphold": {
        a: "Invalidar una ley; frente a dejarla en pie.",
        note: "Irregular: strike / struck / struck down. El par de opuestos que conviene aprender juntos.",
      },
      Unconstitutional: {
        a: "Que choca con la Constitución y, por lo tanto, no tiene validez.",
      },
      Precedent: {
        a: "Una decisión anterior que orienta las posteriores.",
        note: "<b>To set a precedent</b>, <b>to overturn precedent</b>. El principio en latín es <em>stare decisis</em>.",
      },
      "Majority / Dissenting / Concurring opinion": {
        a: "La decisión que rige; un desacuerdo por escrito; y un acuerdo con el resultado por razones distintas.",
      },
      Recuse: {
        a: "Hacerse a un lado en un caso por un conflicto de interés; excusarse.",
        note: "Reflexivo: <b>to recuse oneself</b>.",
      },
      "Executive order": {
        a: "Una instrucción del Presidente al poder ejecutivo, con fuerza legal sin pasar por el Congreso.",
        note: "El siguiente Presidente la puede revertir, y por eso es un instrumento más débil que un statute.",
      },
      Regulation: {
        a: "Una regla detallada que redacta una agencia con la autoridad que le otorga un statute.",
        note: "<b>Rulemaking</b> es el proceso, e incluye un <b>public comment period</b> — la etapa en la que las empresas de verdad pueden influir en el resultado.",
      },
      "Red tape": {
        a: "Trámites administrativos engorrosos; la tramitología.",
      },
      Subpoena: {
        a: "Una orden legal para entregar documentos o rendir testimonio.",
        note: "Se pronuncia <em>suh-PEE-nuh</em> — la <b>b</b> es muda. También es verbo.",
      },
      Whistleblower: {
        a: "Alguien dentro de una organización que denuncia irregularidades.",
      },
      Watchdog: {
        a: "Un organismo o un medio que vigila la conducta del gobierno o de una industria.",
      },
    },
  },
  {
    title: "Hablar de política en el trabajo sin tomar partido",
    rule: "Lo más difícil de este vocabulario no es entenderlo — es estar en la sala cuando sale el tema. Estas son las frases que te permiten seguir una conversación política, conservar tu credibilidad y evitar tomar una postura sin sonar evasivo.",
    items: {
      '"I\'d rather not weigh in on that."': {
        a: "Una negativa directa y cortés a dar una opinión.",
        note: "<b>To weigh in</b> = dar una opinión. La forma más segura, y que sirve para todo, de declinar en un entorno profesional.",
      },
      '"That\'s above my pay grade."': {
        a: "Una forma ligera y autocrítica de decir que no te toca a ti juzgarlo.",
        note: "Con un toque de humor y muy común. Funciona bien porque desvía la pregunta sin dar a entender que estuvo fuera de lugar.",
      },
      '"There are good-faith arguments on both sides."': {
        a: "Reconocer la legitimidad del debate sin entrar en él.",
      },
      '"Reasonable people disagree on that."': {
        a: "La misma jugada, un poco más cálida.",
      },
      '"From what I understand…"': {
        a: "Una fórmula de cautela que te permite describir una situación sin afirmarla como un hecho.",
        note: "Esencial cuando hablas de la política de otro país. Indica que estás relatando, no presumiendo de experto.",
      },
      '"I\'m still getting up to speed on that."': {
        a: "Una admisión honesta que no te cuesta nada en lo profesional.",
        note: "<b>To get up to speed</b> = ponerse al corriente. Mucho mejor que fingir.",
      },
      '"I\'m more interested in how it affects [X]."': {
        a: "Redirigir la conversación de la política al fondo del negocio.",
        note: "La jugada más útil de este grupo — cambia de tema sin que dejes de participar.",
      },
      '"That\'s being debated right now."': {
        a: "Una descripción neutral de una cuestión que todavía no se resuelve.",
      },
      '"I try to stay out of politics at work."': {
        a: "Un límite claro, dicho sin disculparse.",
        note: "Acompáñala de un ofrecimiento, como en el ejemplo, para que se lea como una preferencia y no como un reproche.",
      },
      '"Let\'s agree to disagree."': {
        a: "Una forma de cerrar un desacuerdo sin resolverlo.",
        note: "Úsala con moderación con personas de alto nivel — puede sonar displicente si la sueltas demasiado pronto.",
      },
      '"I\'ll leave that to the voters."': {
        a: "Una forma ligera de esquivar el tema, sobre todo si no eres ciudadano.",
      },
      '"Help me understand…"': {
        a: "Una frase de entrada que invita a explicar y muestra un interés genuino.",
        note: "Las personas de alto nivel la usan todo el tiempo. Convierte una posible discusión en un intercambio de información, y sirve mucho más allá de la política.",
      },
    },
  },
];

export const CHEAT_ES: [string, string][] = [
  [
    "DOS CÁMARAS",
    "<b>The House</b> se basa en la población: periodos de dos años, 435 miembros. <b>The Senate</b> tiene dos por estado: periodos de seis años, 100 miembros.",
  ],
  [
    "DOS ETAPAS",
    "Una <b>primary</b> define al candidato de cada partido. La <b>general election</b> decide entre ellos.",
  ],
  [
    "DOS NÚMEROS",
    "<b>270</b> votos electorales ganan la presidencia. <b>60</b> votos en el Senado ponen fin a un filibuster.",
  ],
  [
    "BILL vs LAW",
    "Un <b>bill</b> es una propuesta. Se convierte en <b>law</b> solo después de que las dos cámaras lo aprueban y el Presidente lo firma.",
  ],
  [
    "GOVERNMENT vs ADMINISTRATION",
    "<b>The government</b> es el aparato permanente. <b>The administration</b> es el equipo del Presidente en funciones — en español, <em>el gobierno</em>.",
  ],
  [
    "LIBERAL ≠ LIBERAL",
    "En Estados Unidos, <b>liberal</b> significa a la izquierda del centro — más o menos lo contrario del sentido de libre mercado que la palabra tiene en español.",
  ],
  [
    "STATUTE vs REGULATION",
    "El Congreso redacta los <b>statutes</b>. Las agencias redactan las <b>regulations</b> al amparo de ellos — y de ahí sale la mayoría de las reglas para los negocios.",
  ],
  [
    "ROJO vs AZUL",
    "<b>Red</b> = Republican. <b>Blue</b> = Democratic. Al revés de la convención de colores de buena parte del mundo.",
  ],
];
