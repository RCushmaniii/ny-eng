// Networking as a Professional in English — bilingual vocabulary bank.
// Every explanatory string is a pair: [English, Mexican Professional Spanish (tú)].
// The English being taught (q and ex) is never translated.
// Descriptive rule for this file: explain how American business networking works and what
// people actually say. No stereotypes, no statistics, no dollar figures.

import type { TopicBank } from "./types";

export const bank: TopicBank = {
  groups: [
    {
      title: ["The Vocabulary of Networking", "El vocabulario del networking"],
      rule: [
        "In American business culture, meeting strangers on purpose is a normal professional skill, not a personality trait. These are the nouns and verbs people use to talk about it.",
        "En la cultura de negocios de Estados Unidos, conocer gente nueva a propósito es una habilidad profesional normal, no un rasgo de personalidad. Estos son los sustantivos y verbos con los que se habla de eso.",
      ],
      items: [
        {
          q: "Networking",
          a: [
            "Building and maintaining professional relationships that can lead to information, opportunities and help in both directions.",
            "Construir y mantener relaciones profesionales que pueden llevar a información, oportunidades y ayuda en ambos sentidos.",
          ],
          ex: "Most of my best clients came from <em>networking</em>, not from advertising.",
          note: [
            "Uncountable. The verb is <b>to network</b>: <em>She networks really well</em>. It carries no negative sense of using people; it is expected of anyone ambitious.",
            "No se cuenta. El verbo es <b>to network</b>: <em>She networks really well</em>. No tiene el sentido negativo de aprovecharse de la gente; se espera de cualquier persona con ambición profesional.",
          ],
          tags: ["core"],
        },
        {
          q: "Connection",
          a: [
            "A person you know professionally; also the link itself.",
            "Una persona que conoces en lo profesional; también, el vínculo en sí.",
          ],
          ex: "She's a great <em>connection</em> to have if you're moving into healthcare.",
          note: [
            "Do not translate <em>palanca</em> or <em>conecte</em> literally. <b>I have a connection there</b> simply means you know someone; it does not imply favoritism. <b>We really connected</b> means the conversation went well.",
            "No traduzcas <em>palanca</em> ni <em>conecte</em> tal cual. <b>I have a connection there</b> solo quiere decir que conoces a alguien; no implica favoritismo. <b>We really connected</b> quiere decir que la plática salió bien.",
          ],
          tags: ["core"],
        },
        {
          q: "Contact",
          hint: ["(no preposition)", "(sin preposición)"],
          a: [
            "As a noun, a person you can reach. As a verb, to get in touch with someone.",
            "Como sustantivo, una persona a la que puedes buscar. Como verbo, ponerte en comunicación con alguien.",
          ],
          ex: "Feel free to <em>contact</em> me directly if anything comes up.",
          trap: [
            "The verb takes no preposition: <span class='x'>✗</span> <em>Please contact with me</em> · <span class='x'>✗</span> <em>I will contact to you</em> → <span class='ok'>✓</span> <em>Please <b>contact me</b></em>. <b>With</b> appears only after the noun: <em>I'm <b>in contact with</b> their team</em>.",
            "El verbo no lleva preposición: <span class='x'>✗</span> <em>Please contact with me</em> · <span class='x'>✗</span> <em>I will contact to you</em> → <span class='ok'>✓</span> <em>Please <b>contact me</b></em>. <b>With</b> solo aparece después del sustantivo: <em>I'm <b>in contact with</b> their team</em>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Referral",
          a: [
            "A recommendation that sends a client, a candidate or an opportunity to a specific person.",
            "Recomendación que dirige a un cliente, un candidato o una oportunidad hacia una persona en específico.",
          ],
          ex: "Almost all of our new business comes through <em>referrals</em>.",
          note: [
            "The verb is <b>to refer</b> someone <b>to</b> someone: <em>David referred me to you</em>. Opening with that name is the strongest first line you can use.",
            "El verbo es <b>to refer</b> someone <b>to</b> someone: <em>David referred me to you</em>. Empezar con ese nombre es la primera línea más fuerte que puedes usar.",
          ],
          tags: ["core"],
        },
        {
          q: "Warm intro / Cold outreach",
          a: [
            "A warm intro comes through someone both people know. Cold outreach is contacting a stranger with no shared link.",
            "Un <em>warm intro</em> llega por alguien que las dos personas conocen. <em>Cold outreach</em> es buscar a un desconocido sin ningún vínculo en común.",
          ],
          ex: "I'd much rather get a <em>warm intro</em> than send another cold email.",
          note: [
            "Related forms: <b>a cold email</b>, <b>a cold call</b>, <b>a warm lead</b>. <b>Intro</b> is the everyday short form of <b>introduction</b>.",
            "Formas relacionadas: <b>a cold email</b>, <b>a cold call</b>, <b>a warm lead</b>. <b>Intro</b> es la forma corta de todos los días de <b>introduction</b>.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "Elevator pitch",
          a: [
            "A clear description of who you are and what you do, short enough to deliver during an elevator ride.",
            "Descripción clara de quién eres y qué haces, tan corta que cabe en un trayecto de elevador.",
          ],
          ex: "Have your <em>elevator pitch</em> ready, because the first question is always what you do.",
          note: [
            "It should sound like conversation, not a memorized speech. Two sentences and a pause for the other person to react is enough.",
            "Debe sonar a plática, no a discurso memorizado. Con dos frases y una pausa para que la otra persona reaccione es suficiente.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "Mixer",
          a: [
            "An informal event organized so that people in an industry or group can meet each other.",
            "Evento informal organizado para que la gente de una industria o de un grupo se conozca.",
          ],
          ex: "The chamber of commerce is hosting a <em>mixer</em> on Thursday evening.",
          note: [
            "Guests stand, hold a drink and move between small groups. That movement is called <b>mingling</b> or <b>working the room</b>.",
            "Los invitados están de pie, con una bebida, y van pasando de un grupo pequeño a otro. A eso se le dice <b>mingling</b> o <b>working the room</b>.",
          ],
          tags: [],
        },
        {
          q: "Happy hour",
          a: [
            "Drinks with colleagues or contacts right after work, usually short and early.",
            "Tragos con colegas o contactos justo después del trabajo; por lo general es breve y temprano.",
          ],
          ex: "A few of us are doing <em>happy hour</em> after the session if you'd like to join.",
          note: [
            "It starts and ends early, and leaving after one drink is normal. Ordering something without alcohol is completely accepted and needs no explanation.",
            "Empieza y termina temprano, y es normal irte después de una bebida. Pedir algo sin alcohol es totalmente aceptado y no necesita explicación.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Conference",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A large multi-day professional event with talks, panels and exhibitors.",
            "Evento profesional grande, de varios días, con pláticas, paneles y expositores.",
          ],
          ex: "Are you going to the <em>conference</em> in Austin this year?",
          note: [
            "Spanish <em>conferencia</em> is often one talk. In English one talk is <b>a talk</b>, <b>a presentation</b> or <b>a keynote</b>; the <b>conference</b> is the whole event. Close to a Mexican <em>congreso</em>.",
            "En español, una conferencia muchas veces es una sola plática. En inglés, una sola plática es <b>a talk</b>, <b>a presentation</b> o <b>a keynote</b>; la <b>conference</b> es el evento completo. Se parece a lo que en México llamamos congreso.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "Panel",
          a: [
            "A session in which several experts discuss a topic on stage, guided by a moderator.",
            "Sesión en la que varios expertos comentan un tema en el escenario, guiados por un moderador.",
          ],
          ex: "I'm speaking on a <em>panel</em> about cross-border supply chains tomorrow morning.",
          note: [
            "You speak <b>on</b> a panel, not <em>in</em> one. A speaker is a <b>panelist</b>. Approaching a panelist afterward with one specific comment is a respected way to start a conversation.",
            "Se dice speak <b>on</b> a panel, no <em>in</em>. Quien participa es un <b>panelist</b>. Acercarte después a un panelista con un comentario específico es una forma bien vista de iniciar una plática.",
          ],
          tags: [],
        },
        {
          q: "Breakout session",
          a: [
            "A smaller session that runs alongside others, after the main talk, on a narrower topic.",
            "Sesión más pequeña que ocurre en paralelo con otras, después de la plática principal, sobre un tema más específico.",
          ],
          ex: "The <em>breakout session</em> on pricing was the most useful hour of the whole event.",
          note: [
            "Often shortened to <b>a breakout</b>. Smaller rooms make these the easiest place to meet people.",
            "Muchas veces se acorta a <b>a breakout</b>. Al ser salas más pequeñas, son el lugar más fácil para conocer gente.",
          ],
          tags: [],
        },
        {
          q: "Name tag",
          a: [
            "The label or badge showing your name and company at an event.",
            "La etiqueta o el gafete con tu nombre y tu empresa en un evento.",
          ],
          ex: "Sorry, your <em>name tag</em> flipped around — remind me of your name?",
          note: [
            "Mexican Spanish <em>gafete</em>. At a conference the hanging version is <b>a badge</b> on <b>a lanyard</b>. Glancing at someone's name tag is normal, not rude.",
            "En México, el gafete. En un congreso, la versión colgante es <b>a badge</b> con <b>a lanyard</b>. Voltear a ver el gafete de alguien es normal, no es grosero.",
          ],
          tags: [],
        },
        {
          q: "Business card",
          a: [
            "A small printed card with your name, title and contact details.",
            "Tarjeta impresa pequeña con tu nombre, tu puesto y tus datos de contacto.",
          ],
          ex: "I'm out of <em>business cards</em>, so let me find you on LinkedIn right now.",
          note: [
            "Usually just <b>a card</b>: <em>Do you have a card?</em> Less central than it once was; many people connect by phone on the spot.",
            "Casi siempre se dice solo <b>a card</b>: <em>Do you have a card?</em> Ya no es tan central como antes; mucha gente se conecta ahí mismo desde el celular.",
          ],
          tags: [],
        },
        {
          q: "Rapport",
          a: [
            "A feeling of ease and mutual understanding between two people.",
            "Sensación de confianza y entendimiento mutuo entre dos personas.",
          ],
          ex: "She builds <em>rapport</em> with new clients faster than anyone I know.",
          note: [
            "Pronounced <em>ra-POR</em> — the final <b>t</b> is silent. The verbs are <b>build</b> and <b>have</b>, and the preposition is <b>with</b>: <em>good rapport with the client</em>.",
            "Se pronuncia <em>ra-POR</em>; la <b>t</b> final es muda. Los verbos son <b>build</b> y <b>have</b>, y la preposición es <b>with</b>: <em>good rapport with the client</em>.",
          ],
          tags: ["error"],
        },
        {
          q: "Mentor / Sponsor",
          a: [
            "A mentor gives you advice. A sponsor is a senior person who actively recommends you for opportunities when you are not in the room.",
            "Un <em>mentor</em> te da consejos. Un <em>sponsor</em> es una persona de alto nivel que te recomienda activamente para oportunidades cuando tú no estás presente.",
          ],
          ex: "A <em>mentor</em> talks with you, but a <em>sponsor</em> talks about you.",
          note: [
            "In a career context <b>sponsor</b> has nothing to do with paying for an event. The person receiving guidance is <b>a mentee</b>.",
            "En el contexto de la trayectoria profesional, <b>sponsor</b> no tiene que ver con patrocinar un evento. Quien recibe la guía es <b>a mentee</b>.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "Alumni network",
          a: [
            "The community of people who graduated from the same university or once worked at the same company.",
            "La comunidad de personas que se graduaron de la misma universidad o que trabajaron en la misma empresa.",
          ],
          ex: "I found my first job in New York through the <em>alumni network</em>.",
          note: [
            "<b>Alumni</b> is plural; one person is <b>an alum</b> in everyday speech. Shared schools and former employers are among the strongest openers in US networking: <em>I see you went to Michigan too</em>.",
            "<b>Alumni</b> es plural; una sola persona es <b>an alum</b> en el habla diaria. Compartir universidad o ex empleador es de los mejores pretextos para iniciar una plática en Estados Unidos: <em>I see you went to Michigan too</em>.",
          ],
          tags: [],
        },
        {
          q: "Attend",
          hint: ["(not assist)", "(no es assist)"],
          a: ["To go to and be present at an event.", "Ir a un evento y estar presente."],
          ex: "I'm planning to <em>attend</em> the summit in March.",
          trap: [
            "Spanish <em>asistir</em> is <b>attend</b>. English <b>assist</b> means to help. <span class='x'>✗</span> <em>I assisted to the conference</em> → <span class='ok'>✓</span> <em>I <b>attended</b> the conference</em>. No preposition after it: <span class='x'>✗</span> <em>attend to the event</em>. In conversation <b>go to</b> is even more natural: <em>Are you going to the dinner?</em>",
            "<em>Asistir</em> es <b>attend</b>. En inglés, <b>assist</b> significa ayudar. <span class='x'>✗</span> <em>I assisted to the conference</em> → <span class='ok'>✓</span> <em>I <b>attended</b> the conference</em>. Después no lleva preposición: <span class='x'>✗</span> <em>attend to the event</em>. Al platicar, <b>go to</b> suena todavía más natural: <em>Are you going to the dinner?</em>",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Relationship",
          hint: ["(not relations)", "(no es relations)"],
          a: [
            "The ongoing connection between two people or two companies.",
            "El vínculo continuo entre dos personas o dos empresas.",
          ],
          ex: "We have a strong <em>relationship</em> with their procurement team.",
          trap: [
            "<span class='x'>✗</span> <em>I have good relations with my clients</em> → <span class='ok'>✓</span> <em>I have good <b>relationships</b> with my clients</em>. <b>Relations</b> is for institutions — <em>public relations</em>, <em>investor relations</em>, <em>US–Mexico relations</em> — and <em>to have relations with</em> a person can sound sexual.",
            "<span class='x'>✗</span> <em>I have good relations with my clients</em> → <span class='ok'>✓</span> <em>I have good <b>relationships</b> with my clients</em>. <b>Relations</b> es para instituciones: <em>public relations</em>, <em>investor relations</em>, <em>US–Mexico relations</em>; y <em>to have relations with</em> una persona puede sonar a algo sexual.",
          ],
          tags: ["falsefriend", "error"],
        },
      ],
    },
    {
      title: ["Opening a Conversation", "Cómo iniciar una conversación"],
      rule: [
        "At a US event nobody waits to be introduced. You walk up, say your name and ask a simple question. It can feel forward at first, but it is exactly what the room expects.",
        "En un evento en Estados Unidos nadie espera a que lo presenten. Te acercas, dices tu nombre y haces una pregunta sencilla. Al principio puede sentirse atrevido, pero es justo lo que todos esperan.",
      ],
      items: [
        {
          q: "\"I don't think we've met.\"",
          a: [
            "The standard way to introduce yourself to someone standing near you.",
            "La forma más común de presentarte con alguien que está cerca de ti.",
          ],
          ex: "<em>I don't think we've met — I'm Laura, from the Monterrey office.</em>",
          note: [
            "Follow it immediately with your first name and one anchor: your company, your city or your link to the event. A handshake and eye contact go with it.",
            "Enseguida di tu nombre de pila y un dato que te ubique: tu empresa, tu ciudad o tu relación con el evento. Va acompañado de un apretón de manos y contacto visual.",
          ],
          tags: ["core"],
        },
        {
          q: '"Nice to meet you."',
          hint: ["(first time only)", "(solo la primera vez)"],
          a: [
            "The reply when you are introduced to someone for the first time.",
            "La respuesta cuando te presentan a alguien por primera vez.",
          ],
          ex: "<em>Nice to meet you, Daniel — I've heard a lot about your team.</em>",
          trap: [
            "<b>Meet</b> is for the first time only. With someone you already know: <span class='x'>✗</span> <em>Nice to meet you again</em> → <span class='ok'>✓</span> <em><b>Nice to see you</b> again</em>. Saying <em>Nice to meet you</em> to a person you have met before tells them you forgot them. If unsure, <em>Good to see you</em> is safe in both cases.",
            "<b>Meet</b> es solo para la primera vez. Con alguien que ya conoces: <span class='x'>✗</span> <em>Nice to meet you again</em> → <span class='ok'>✓</span> <em><b>Nice to see you</b> again</em>. Decirle <em>Nice to meet you</em> a alguien que ya conocías le da a entender que lo olvidaste. Si tienes duda, <em>Good to see you</em> funciona en los dos casos.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"Good to see you again."',
          a: [
            "The greeting for someone you have met before.",
            "El saludo para alguien que ya conocías.",
          ],
          ex: "<em>Good to see you again — I think the last time was in Chicago.</em>",
          note: [
            "Adding where you last met, as in the example, helps the other person place you and saves them from embarrassment.",
            "Agregar dónde se vieron la última vez, como en el ejemplo, ayuda a la otra persona a ubicarte y le evita un momento incómodo.",
          ],
          tags: [],
        },
        {
          q: "Meet / Know",
          hint: ["(both are conocer)", "(los dos son conocer)"],
          a: [
            "To meet is to encounter someone for the first time. To know is to be acquainted with them already.",
            "<em>To meet</em> es encontrarte con alguien por primera vez. <em>To know</em> es conocerlo ya de antes.",
          ],
          ex: "I <em>met</em> her at a conference last year, but I don't <em>know</em> her well.",
          trap: [
            "Spanish <em>conocer</em> covers both. <span class='x'>✗</span> <em>I knew him at a dinner in Houston</em> → <span class='ok'>✓</span> <em>I <b>met</b> him at a dinner in Houston</em>. <span class='x'>✗</span> <em>Nice to know you</em> → <span class='ok'>✓</span> <em>Nice to <b>meet</b> you</em>. <span class='x'>✗</span> <em>I want to know New York</em> → <span class='ok'>✓</span> <em>I want to <b>visit</b> New York</em>.",
            "En español, <em>conocer</em> cubre los dos. <span class='x'>✗</span> <em>I knew him at a dinner in Houston</em> → <span class='ok'>✓</span> <em>I <b>met</b> him at a dinner in Houston</em>. <span class='x'>✗</span> <em>Nice to know you</em> → <span class='ok'>✓</span> <em>Nice to <b>meet</b> you</em>. <span class='x'>✗</span> <em>I want to know New York</em> → <span class='ok'>✓</span> <em>I want to <b>visit</b> New York</em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: '"What brings you here?"',
          a: [
            "A friendly question about why someone is attending the event.",
            "Pregunta amable sobre por qué alguien vino al evento.",
          ],
          ex: "<em>So, what brings you here tonight?</em>",
          note: [
            "Works in any room and is easier to answer than a question about someone's job. Have your own answer ready, because it will be asked back.",
            "Funciona en cualquier evento y es más fácil de contestar que una pregunta sobre el trabajo. Ten lista tu propia respuesta, porque te la van a devolver.",
          ],
          tags: ["core"],
        },
        {
          q: '"How do you know the host?"',
          a: [
            "An opener for private events, asking about the person's link to whoever invited everyone.",
            "Frase para abrir plática en eventos privados; pregunta por la relación de la persona con quien invitó.",
          ],
          ex: "<em>How do you know the host — do you two work together?</em>",
          note: [
            "Use the host's name if you know it: <em>How do you know Sarah?</em> The answer usually reveals something you have in common.",
            "Usa el nombre del anfitrión si lo sabes: <em>How do you know Sarah?</em> La respuesta casi siempre revela algo que tienen en común.",
          ],
          tags: [],
        },
        {
          q: '"What do you do?"',
          a: [
            "The standard question about someone's work, usually asked in the first minute.",
            "La pregunta de siempre sobre el trabajo de alguien; casi siempre se hace en el primer minuto.",
          ],
          ex: "<em>So, what do you do?</em>",
          note: [
            "In the US this is friendly and expected, not intrusive and not a way of measuring your status. Answer with what you do and who it helps, not only a title: <em>I run operations for a company that makes auto parts for US manufacturers</em>. Then return it: <em>How about you?</em>",
            "En Estados Unidos esta pregunta es amable y esperada; no es una intromisión ni una forma de medir tu nivel. Contesta con lo que haces y a quién le sirve, no solo con tu puesto: <em>I run operations for a company that makes auto parts for US manufacturers</em>. Luego devuélvela: <em>How about you?</em>",
          ],
          tags: ["core"],
        },
        {
          q: '"Mind if I join you?"',
          a: [
            "A polite way to enter a group or sit at a table where people are already talking.",
            "Forma cortés de integrarte a un grupo o de sentarte en una mesa donde ya están platicando.",
          ],
          ex: "<em>Mind if I join you, or is this seat taken?</em>",
          note: [
            "The polite answer to <em>Do you mind?</em> is <b>Not at all</b> or <b>Please do</b>. Answering <em>Yes</em> means you do mind.",
            "La respuesta cortés a <em>Do you mind?</em> es <b>Not at all</b> o <b>Please do</b>. Contestar <em>Yes</em> quiere decir que sí te molesta.",
          ],
          tags: ["error"],
        },
        {
          q: '"Is this your first time at this event?"',
          a: [
            "An easy opener that works with anyone, at any event.",
            "Pregunta fácil para abrir plática con cualquier persona, en cualquier evento.",
          ],
          ex: "<em>Is this your first time at this event, or do you come every year?</em>",
          note: [
            "Offering two options, as in the example, makes the question effortless to answer and gives the conversation somewhere to go.",
            "Dar dos opciones, como en el ejemplo, hace que contestar no cueste nada y le da rumbo a la conversación.",
          ],
          tags: [],
        },
        {
          q: '"Sorry, I didn\'t catch your name."',
          a: [
            "A natural way to ask someone to repeat their name.",
            "Forma natural de pedirle a alguien que repita su nombre.",
          ],
          ex: "<em>Sorry, I didn't catch your name — it's loud in here.</em>",
          note: [
            "<span class='x'>✗</span> <em>Can you repeat me your name?</em> → <span class='ok'>✓</span> <em>Could you <b>say your name again</b>?</em> Asking is a sign of respect. If your own name is unfamiliar to Americans, say it slowly and offer a hook: <em>It's Xóchitl — like SO-cheel</em>.",
            "<span class='x'>✗</span> <em>Can you repeat me your name?</em> → <span class='ok'>✓</span> <em>Could you <b>say your name again</b>?</em> Preguntar es una señal de respeto. Si tu nombre es poco conocido para un estadounidense, dilo despacio y dale una pista: <em>It's Xóchitl — like SO-cheel</em>.",
          ],
          tags: ["error"],
        },
        {
          q: '"I\'ve heard great things about you."',
          a: [
            "A warm line for meeting someone whose reputation reached you first.",
            "Frase cálida para cuando conoces a alguien de quien ya te habían hablado bien.",
          ],
          ex: "<em>I've heard great things about you from Marcus.</em>",
          note: [
            "Only say it when it is true, and name the source. Americans give and accept compliments directly; the right reply is simply <em>Thank you, that's kind</em>.",
            "Dila solo cuando sea verdad, y menciona quién te lo dijo. Los estadounidenses dan y reciben cumplidos de forma directa; la respuesta correcta es simplemente <em>Thank you, that's kind</em>.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: [
        "Keeping It Going — Small Talk and Showing Interest",
        "Cómo mantener la plática: small talk y mostrar interés",
      ],
      rule: [
        "Small talk is not wasted time before the real conversation; it is how people decide whether they want one. The skill is asking open questions and reacting out loud to the answers.",
        "El <em>small talk</em> no es tiempo perdido antes de la conversación de verdad; es la forma en que la gente decide si quiere tenerla. La habilidad está en hacer preguntas abiertas y reaccionar en voz alta a las respuestas.",
      ],
      items: [
        {
          q: "Small talk",
          a: [
            "Light, friendly conversation about everyday subjects.",
            "Plática ligera y amable sobre temas cotidianos.",
          ],
          ex: "A few minutes of <em>small talk</em> before the meeting makes everything after it easier.",
          note: [
            "Uncountable, with <b>make</b>: <em>I'm not great at <b>making small talk</b></em>. American small talk is brief, usually a few minutes, and then moves to business sooner than in Mexico.",
            "No se cuenta y va con <b>make</b>: <em>I'm not great at <b>making small talk</b></em>. En Estados Unidos es breve, casi siempre unos minutos, y se pasa al tema de negocios antes que en México.",
          ],
          tags: ["core"],
        },
        {
          q: "Safe topics",
          a: [
            "Subjects anyone can discuss comfortably: the event, travel, the city, food, sports, weekend plans, the weather.",
            "Temas que cualquiera puede comentar con comodidad: el evento, los viajes, la ciudad, la comida, los deportes, los planes del fin de semana, el clima.",
          ],
          ex: "Stick to <em>safe topics</em> like travel and food until you know the group better.",
          note: [
            "Avoid politics, religion, salary, age, weight and marital status with people you have just met. Asking whether someone is married or has children is friendly in Mexico; in the US, wait until they mention it first.",
            "Con gente que acabas de conocer, evita la política, la religión, el sueldo, la edad, el peso y el estado civil. Preguntar si alguien está casado o tiene hijos es amable en México; en Estados Unidos, espera a que la persona lo mencione primero.",
          ],
          tags: ["core"],
        },
        {
          q: '"How did you get into that?"',
          a: [
            "A question about how someone ended up in their field or role.",
            "Pregunta sobre cómo llegó alguien a su campo o a su puesto.",
          ],
          ex: "<em>Logistics software — interesting, how did you get into that?</em>",
          note: [
            "The best follow-up to <em>What do you do?</em> People enjoy telling their own story, and the answer gives you three more things to ask about.",
            "Es la mejor continuación de <em>What do you do?</em> A la gente le gusta contar su historia, y la respuesta te da tres cosas más para preguntar.",
          ],
          tags: ["core"],
        },
        {
          q: '"That\'s fascinating — tell me more."',
          a: [
            "A reaction that shows interest and invites the speaker to continue.",
            "Reacción que muestra interés e invita a la persona a seguir hablando.",
          ],
          ex: "<em>That's fascinating — tell me more about how that works in practice.</em>",
          note: [
            "Add what exactly you want to hear more about, as in the example. Without that detail it can sound automatic.",
            "Agrega de qué exactamente quieres saber más, como en el ejemplo. Sin ese detalle puede sonar automático.",
          ],
          tags: [],
        },
        {
          q: '"What are you working on these days?"',
          a: [
            "An open question about someone's current projects, good for people you already know a little.",
            "Pregunta abierta sobre los proyectos actuales de alguien; funciona bien con gente que ya conoces un poco.",
          ],
          ex: "<em>It's been a while — what are you working on these days?</em>",
          note: [
            "<b>These days</b> means <em>últimamente</em>. More interesting than <em>How's work?</em>, which usually gets a one-word answer.",
            "<b>These days</b> quiere decir <em>últimamente</em>. Es más interesante que <em>How's work?</em>, que casi siempre recibe una respuesta de una palabra.",
          ],
          tags: ["core"],
        },
        {
          q: '"How long have you been with them?"',
          a: [
            "A question about someone's time at their current company.",
            "Pregunta sobre el tiempo que alguien lleva en su empresa actual.",
          ],
          ex: "<em>How long have you been with them — were you there before the merger?</em>",
          note: [
            "Present perfect, because the time continues to now: <span class='x'>✗</span> <em>How long are you working there?</em> → <span class='ok'>✓</span> <em>How long <b>have you been</b> working there?</em> You are <b>with</b> a company.",
            "Va en <em>present perfect</em> porque el tiempo sigue hasta hoy: <span class='x'>✗</span> <em>How long are you working there?</em> → <span class='ok'>✓</span> <em>How long <b>have you been</b> working there?</em> Se dice estar <b>with</b> a company.",
          ],
          tags: ["error"],
        },
        {
          q: '"Any plans for the weekend?"',
          a: [
            "A light closing question toward the end of the week.",
            "Pregunta ligera para cerrar, hacia el final de la semana.",
          ],
          ex: "<em>Any plans for the weekend, or are you finally getting some rest?</em>",
          note: [
            "On Monday it becomes <em>How was your weekend?</em> A short, concrete answer is expected — one activity, one detail — followed by <em>How about you?</em>",
            "El lunes se convierte en <em>How was your weekend?</em> Se espera una respuesta corta y concreta, con una actividad y un detalle, seguida de <em>How about you?</em>",
          ],
          tags: [],
        },
        {
          q: '"Oh, really?"',
          a: [
            "A short reaction that shows you are listening and want the speaker to go on.",
            "Reacción corta que muestra que estás escuchando y quieres que la persona continúe.",
          ],
          ex: "<em>Oh, really? I had no idea they'd opened a plant in Querétaro.</em>",
          note: [
            "American listeners react out loud constantly: <b>Right</b>, <b>Sure</b>, <b>Wow</b>, <b>No kidding</b>, <b>That makes sense</b>. Listening in respectful silence can be read as lack of interest.",
            "En Estados Unidos, quien escucha reacciona en voz alta todo el tiempo: <b>Right</b>, <b>Sure</b>, <b>Wow</b>, <b>No kidding</b>, <b>That makes sense</b>. Escuchar en silencio, por respeto, puede interpretarse como falta de interés.",
          ],
          tags: [],
        },
        {
          q: "Common ground",
          a: [
            "Something two people share: a city, a school, an industry, a former employer, a hobby.",
            "Algo que dos personas comparten: una ciudad, una universidad, una industria, un ex empleador, un pasatiempo.",
          ],
          ex: "We found some <em>common ground</em> right away, since we'd both worked in Houston.",
          note: [
            "Uncountable, with <b>find</b> or <b>have</b>. Finding it is the practical purpose of small talk.",
            "No se cuenta y va con <b>find</b> o <b>have</b>. Encontrarlo es el propósito práctico del <em>small talk</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Actually",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "In fact; really. Used to correct an impression or add something unexpected.",
            "De hecho; en realidad. Se usa para corregir una impresión o agregar algo inesperado.",
          ],
          ex: "I'm <em>actually</em> based in Guadalajara, not Mexico City.",
          trap: [
            "<b>Actually</b> is not <em>actualmente</em>. <span class='x'>✗</span> <em>Actually I work at a bank</em> (meaning right now) → <span class='ok'>✓</span> <em><b>Currently</b> I work at a bank</em> or <em><b>Right now</b> I'm at a bank</em>. Used by mistake, <b>actually</b> sounds as if you are correcting the other person.",
            "<b>Actually</b> no es <em>actualmente</em>. <span class='x'>✗</span> <em>Actually I work at a bank</em> (queriendo decir en este momento) → <span class='ok'>✓</span> <em><b>Currently</b> I work at a bank</em> o <em><b>Right now</b> I'm at a bank</em>. Usado por error, <b>actually</b> suena como si estuvieras corrigiendo a la otra persona.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Eventually",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "In the end; after some time. It describes something that will definitely happen, only later.",
            "Al final; después de un tiempo. Describe algo que sí va a pasar, solo que más adelante.",
          ],
          ex: "We'd like to open a US office <em>eventually</em>, but not this year.",
          trap: [
            "<b>Eventually</b> is not <em>eventualmente</em>. <span class='x'>✗</span> <em>Eventually we could work together</em> (meaning maybe) tells an American it <em>will</em> happen. For a possibility say <b>possibly</b>, <b>maybe</b> or <b>at some point</b>; for something occasional say <b>occasionally</b>.",
            "<b>Eventually</b> no es <em>eventualmente</em>. <span class='x'>✗</span> <em>Eventually we could work together</em> (queriendo decir tal vez) le dice a un estadounidense que <em>sí</em> va a pasar. Para una posibilidad di <b>possibly</b>, <b>maybe</b> o <b>at some point</b>; para algo ocasional di <b>occasionally</b>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: '"I agree."',
          hint: ["(not I'm agree)", "(no es I'm agree)"],
          a: [
            "The simple way to say you share someone's opinion.",
            "La forma sencilla de decir que compartes la opinión de alguien.",
          ],
          ex: "<em>I agree — the hardest part of that market is distribution.</em>",
          trap: [
            "<b>Agree</b> is a verb, not an adjective: <span class='x'>✗</span> <em>I'm agree</em> · <span class='x'>✗</span> <em>I'm not agree</em> → <span class='ok'>✓</span> <em><b>I agree</b></em> · <span class='ok'>✓</span> <em><b>I don't agree</b></em>. The question is <em><b>Do</b> you agree?</em> Stronger versions: <b>Absolutely</b>, <b>I couldn't agree more</b>.",
            "<b>Agree</b> es verbo, no adjetivo: <span class='x'>✗</span> <em>I'm agree</em> · <span class='x'>✗</span> <em>I'm not agree</em> → <span class='ok'>✓</span> <em><b>I agree</b></em> · <span class='ok'>✓</span> <em><b>I don't agree</b></em>. La pregunta es <em><b>Do</b> you agree?</em> Versiones más fuertes: <b>Absolutely</b>, <b>I couldn't agree more</b>.",
          ],
          tags: ["error"],
        },
        {
          q: "Discuss",
          hint: ["(no about)", "(sin about)"],
          a: [
            "To talk about something in a serious or detailed way.",
            "Hablar de algo de manera seria o detallada.",
          ],
          ex: "I'd love to <em>discuss</em> this further when you have twenty minutes.",
          trap: [
            "No preposition: <span class='x'>✗</span> <em>We discussed about the project</em> → <span class='ok'>✓</span> <em>We <b>discussed the project</b></em> or <em>We <b>talked about</b> the project</em>. It is also neutral in tone; Spanish <em>discutir</em> in the sense of a quarrel is <b>to argue</b>.",
            "No lleva preposición: <span class='x'>✗</span> <em>We discussed about the project</em> → <span class='ok'>✓</span> <em>We <b>discussed the project</b></em> o <em>We <b>talked about</b> the project</em>. Además, su tono es neutral; <em>discutir</em> en el sentido de pelear es <b>to argue</b>.",
          ],
          tags: ["falsefriend", "error"],
        },
      ],
    },
    {
      title: ["Talking About Yourself and Your Work", "Cómo hablar de ti y de tu trabajo"],
      rule: [
        "Americans expect a direct, confident statement of what you do and what you have done. Saying it plainly is not arrogance in this culture; underselling yourself simply leaves people unsure of your level.",
        "Los estadounidenses esperan que digas de forma directa y segura qué haces y qué has logrado. Decirlo con claridad no es arrogancia en esa cultura; restarte mérito solo deja a la gente sin saber cuál es tu nivel.",
      ],
      items: [
        {
          q: '"I lead…"',
          a: [
            "A strong, simple opening for describing a leadership role.",
            "Inicio fuerte y sencillo para describir un rol de liderazgo.",
          ],
          ex: "<em>I lead the finance team for our Latin America business.</em>",
          note: [
            "Active verbs carry authority: <b>I lead</b>, <b>I run</b>, <b>I head up</b>, <b>I manage</b>. They are stronger than <em>I'm the person in charge of</em>.",
            "Los verbos activos transmiten autoridad: <b>I lead</b>, <b>I run</b>, <b>I head up</b>, <b>I manage</b>. Son más fuertes que <em>I'm the person in charge of</em>.",
          ],
          tags: ["core"],
        },
        {
          q: '"I work in…"',
          a: [
            "The basic frame for naming your field or function.",
            "La estructura básica para decir tu campo o tu función.",
          ],
          ex: "<em>I work in supply chain for a medical device company.</em>",
          note: [
            "Three prepositions: <b>in</b> a field, <b>at</b> or <b>for</b> a company, <b>as</b> a role. <span class='x'>✗</span> <em>I work like engineer</em> → <span class='ok'>✓</span> <em>I work <b>as an</b> engineer</em>. And professions need the article: <span class='x'>✗</span> <em>I'm lawyer</em> → <span class='ok'>✓</span> <em>I'm <b>a</b> lawyer</em>.",
            "Tres preposiciones: <b>in</b> para el campo, <b>at</b> o <b>for</b> para la empresa, <b>as</b> para el puesto. <span class='x'>✗</span> <em>I work like engineer</em> → <span class='ok'>✓</span> <em>I work <b>as an</b> engineer</em>. Y las profesiones llevan artículo: <span class='x'>✗</span> <em>I'm lawyer</em> → <span class='ok'>✓</span> <em>I'm <b>a</b> lawyer</em>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"I\'m based in…"',
          a: [
            "The professional way to say where you work from.",
            "La forma profesional de decir desde dónde trabajas.",
          ],
          ex: "<em>I'm based in Guadalajara, but I'm in Texas about once a month.</em>",
          note: [
            "More useful than <em>I live in</em> because it describes your working location. Adding how often you travel to the US, as in the example, makes you easier to meet with.",
            "Es más útil que <em>I live in</em> porque describe tu lugar de trabajo. Agregar cada cuánto viajas a Estados Unidos, como en el ejemplo, facilita que quieran reunirse contigo.",
          ],
          tags: ["core"],
        },
        {
          q: '"My background is in…"',
          a: [
            "A way to summarize your training and earlier experience.",
            "Una forma de resumir tu formación y tu experiencia previa.",
          ],
          ex: "<em>My background is in chemical engineering, but I moved into sales about ten years ago.</em>",
          note: [
            "<b>Background</b> covers both studies and work, which makes it the safest word for <em>formación</em> or <em>trayectoria</em>.",
            "<b>Background</b> abarca tanto estudios como trabajo, y por eso es la palabra más segura para <em>formación</em> o <em>trayectoria</em>.",
          ],
          tags: ["core"],
        },
        {
          q: '"I\'m responsible for…"',
          a: [
            "A frame for describing the scope of your job.",
            "Estructura para describir el alcance de tu puesto.",
          ],
          ex: "<em>I'm responsible for our three plants in the Bajío region.</em>",
          note: [
            "<b>Responsible</b> is an adjective only: <span class='x'>✗</span> <em>I'm the responsible of quality</em> → <span class='ok'>✓</span> <em>I'm <b>responsible for</b> quality</em> or <em>I'm <b>in charge of</b> quality</em>. The preposition is always <b>for</b>.",
            "<b>Responsible</b> es solo adjetivo: <span class='x'>✗</span> <em>I'm the responsible of quality</em> → <span class='ok'>✓</span> <em>I'm <b>responsible for</b> quality</em> o <em>I'm <b>in charge of</b> quality</em>. La preposición siempre es <b>for</b>.",
          ],
          tags: ["error"],
        },
        {
          q: '"I\'ve been with the company for ten years."',
          a: [
            "The natural way to state how long you have worked somewhere.",
            "La forma natural de decir cuánto tiempo llevas trabajando en un lugar.",
          ],
          ex: "<em>I've been with the company for ten years, the last four in this role.</em>",
          note: [
            "Spanish <em>tengo diez años trabajando</em> does not translate word for word: <span class='x'>✗</span> <em>I have ten years working here</em> → <span class='ok'>✓</span> <em><b>I've been working</b> here <b>for</b> ten years</em>. Use <b>for</b> with a length of time and <b>since</b> with a starting point.",
            "<em>Tengo diez años trabajando</em> no se traduce palabra por palabra: <span class='x'>✗</span> <em>I have ten years working here</em> → <span class='ok'>✓</span> <em><b>I've been working</b> here <b>for</b> ten years</em>. Usa <b>for</b> con una duración y <b>since</b> con un punto de inicio.",
          ],
          tags: ["error"],
        },
        {
          q: '"We help [X] do [Y]."',
          a: [
            "A one-sentence formula for explaining what your company does in terms of the customer.",
            "Fórmula de una sola frase para explicar qué hace tu empresa desde el punto de vista del cliente.",
          ],
          ex: "<em>We help US retailers source furniture from Mexican manufacturers.</em>",
          note: [
            "The grammar is <b>help</b> + person + base verb, with no <em>to</em> needed. This sentence is the core of a good elevator pitch.",
            "La gramática es <b>help</b> + persona + verbo en forma base, sin necesidad de <em>to</em>. Esta frase es el centro de un buen <em>elevator pitch</em>.",
          ],
          tags: [],
        },
        {
          q: '"I recently moved into a new role."',
          a: [
            "A way to announce a job change, which gives the other person something to ask about.",
            "Una forma de contar un cambio de puesto, que le da a la otra persona algo que preguntar.",
          ],
          ex: "<em>I recently moved into a new role, so I'm still learning who's who.</em>",
          note: [
            "Useful verbs for job changes: <b>move into</b> a role, <b>take on</b> a team, <b>step into</b> a position, <b>transition to</b> a new field.",
            "Verbos útiles para cambios de puesto: <b>move into</b> a role, <b>take on</b> a team, <b>step into</b> a position, <b>transition to</b> a new field.",
          ],
          tags: [],
        },
        {
          q: "Career",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "Your whole working life over the years: the jobs you have held and the direction they have taken.",
            "Toda tu vida laboral a lo largo de los años: los puestos que has tenido y el rumbo que han tomado.",
          ],
          ex: "I've spent most of my <em>career</em> in manufacturing.",
          trap: [
            "Spanish <em>carrera</em> in the sense of university studies is <b>degree</b> or <b>major</b>, not <b>career</b>. <span class='x'>✗</span> <em>I studied the career of law</em> · <span class='x'>✗</span> <em>I finished my career in 2005</em> (this sounds as if you retired) → <span class='ok'>✓</span> <em>I <b>studied law</b></em> · <span class='ok'>✓</span> <em>I <b>finished my degree</b> in 2005</em>.",
            "<em>Carrera</em> en el sentido de estudios universitarios es <b>degree</b> o <b>major</b>, no <b>career</b>. <span class='x'>✗</span> <em>I studied the career of law</em> · <span class='x'>✗</span> <em>I finished my career in 2005</em> (suena a que te jubilaste) → <span class='ok'>✓</span> <em>I <b>studied law</b></em> · <span class='ok'>✓</span> <em>I <b>finished my degree</b> in 2005</em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Professional",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "As a noun, a person who works in a skilled field. As an adjective, competent and appropriate for work.",
            "Como sustantivo, una persona que trabaja en un campo especializado. Como adjetivo, competente y adecuado para el trabajo.",
          ],
          ex: "The event is aimed at finance <em>professionals</em> who work across borders.",
          trap: [
            "Mexican <em>profesionista</em> has no direct English form: <span class='x'>✗</span> <em>I am a professionist</em> · <span class='x'>✗</span> <em>I am a professional in accounting</em> → <span class='ok'>✓</span> <em>I'm <b>an accountant</b></em> or <em>I <b>have a degree in</b> accounting</em>. And <span class='x'>✗</span> <em>What is your profession?</em> sounds like a government form; ask <span class='ok'>✓</span> <em><b>What do you do?</b></em>",
            "<em>Profesionista</em> no tiene una forma directa en inglés: <span class='x'>✗</span> <em>I am a professionist</em> · <span class='x'>✗</span> <em>I am a professional in accounting</em> → <span class='ok'>✓</span> <em>I'm <b>an accountant</b></em> o <em>I <b>have a degree in</b> accounting</em>. Y <span class='x'>✗</span> <em>What is your profession?</em> suena a formulario de gobierno; pregunta <span class='ok'>✓</span> <em><b>What do you do?</b></em>",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "Title / Role",
          a: [
            "Your title is the official name of your job. Your role is what you actually do.",
            "Tu <em>title</em> es el nombre oficial de tu puesto. Tu <em>role</em> es lo que haces en realidad.",
          ],
          ex: "My <em>title</em> is director, but my <em>role</em> is closer to chief of staff.",
          note: [
            "Spanish <em>cargo</em> and <em>puesto</em> are <b>title</b>, <b>role</b> or <b>position</b> — never <b>charge</b>. Titles do not match across countries, so describing the role is clearer than translating the title.",
            "<em>Cargo</em> y <em>puesto</em> son <b>title</b>, <b>role</b> o <b>position</b>; nunca <b>charge</b>. Los títulos no coinciden entre países, así que describir el rol es más claro que traducir el título.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: '"I wear a lot of hats."',
          a: [
            "An informal way to say your job covers several different functions.",
            "Forma informal de decir que tu puesto abarca varias funciones distintas.",
          ],
          ex: "<em>It's a small company, so I wear a lot of hats.</em>",
          note: [
            "Friendly and modest in tone. Follow it with the two or three hats that matter to the person you are talking to.",
            "Tiene un tono amable y modesto. Enseguida menciona las dos o tres funciones que le importan a la persona con quien hablas.",
          ],
          tags: ["idiom"],
        },
      ],
    },
    {
      title: ["Asking, Offering and Making Introductions", "Pedir, ofrecer y hacer presentaciones"],
      rule: [
        "American networking runs on clear, small requests and generous offers. Saying exactly what you are looking for is considered respectful of the other person's time, not pushy — and offering help first is the fastest way to be remembered.",
        "El networking en Estados Unidos funciona con peticiones claras y pequeñas, y con ofrecimientos generosos. Decir exactamente qué buscas se considera una muestra de respeto por el tiempo del otro, no una imprudencia; y ofrecer ayuda primero es la forma más rápida de que te recuerden.",
      ],
      items: [
        {
          q: "Introduce",
          hint: ["(not present)", "(no es present)"],
          a: [
            "To make two people known to each other by name.",
            "Hacer que dos personas se conozcan, diciendo sus nombres.",
          ],
          ex: "Let me <em>introduce</em> you to our head of operations.",
          trap: [
            "Spanish <em>presentar</em> a person is <b>introduce</b>, not <b>present</b>. <span class='x'>✗</span> <em>I present you my colleague</em> · <span class='x'>✗</span> <em>Let me introduce you my colleague</em> → <span class='ok'>✓</span> <em>Let me <b>introduce you to</b> my colleague</em>. You <b>present</b> a report or a proposal, not a person.",
            "<em>Presentar</em> a una persona es <b>introduce</b>, no <b>present</b>. <span class='x'>✗</span> <em>I present you my colleague</em> · <span class='x'>✗</span> <em>Let me introduce you my colleague</em> → <span class='ok'>✓</span> <em>Let me <b>introduce you to</b> my colleague</em>. Con <b>present</b> se presenta un reporte o una propuesta, no una persona.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: '"Have you two met?"',
          a: [
            "The line for introducing two people who are standing with you.",
            "La frase para presentar a dos personas que están contigo.",
          ],
          ex: "<em>Have you two met? Ana, this is David — he runs logistics for our Texas plants.</em>",
          note: [
            "The formula is name, <b>this is</b> name, plus one fact that gives them something to talk about. First names are normal even with very senior people.",
            "La fórmula es nombre, <b>this is</b> nombre, más un dato que les dé de qué platicar. Usar el nombre de pila es normal incluso con personas de muy alto nivel.",
          ],
          tags: [],
        },
        {
          q: '"Would you be open to…"',
          a: [
            "A polite, low-pressure way to make a request.",
            "Forma cortés y sin presión de hacer una petición.",
          ],
          ex: "<em>Would you be open to a twenty-minute call sometime next week?</em>",
          note: [
            "Followed by a noun or an <b>-ing</b> verb: <em>open to <b>a call</b></em>, <em>open to <b>meeting</b></em>. It works because it makes saying no easy, and people say yes more readily when they can.",
            "Va seguida de un sustantivo o de un verbo con <b>-ing</b>: <em>open to <b>a call</b></em>, <em>open to <b>meeting</b></em>. Funciona porque hace fácil decir que no, y la gente acepta con más gusto cuando tiene esa libertad.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"I\'d love to pick your brain."',
          a: [
            "An informal request to ask someone questions and learn from their experience.",
            "Petición informal para hacerle preguntas a alguien y aprender de su experiencia.",
          ],
          ex: "<em>I'd love to pick your brain about entering the Canadian market.</em>",
          note: [
            "Very common, but some senior people dislike it: it can sound like a vague request for free consulting with nothing offered in return. A specific alternative lands better: <em>Could I ask you two questions about how you set up distribution?</em>",
            "Es muy común, pero a algunas personas de alto nivel no les gusta: puede sonar a una petición vaga de consultoría gratis, sin ofrecer nada a cambio. Una alternativa específica funciona mejor: <em>Could I ask you two questions about how you set up distribution?</em>",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Can I put you in touch with…"',
          a: [
            "An offer to connect someone with a person who can help them.",
            "Ofrecimiento de conectar a alguien con una persona que le puede ayudar.",
          ],
          ex: "<em>Can I put you in touch with our customs broker in Laredo?</em>",
          note: [
            "<b>Put</b> someone <b>in touch with</b> someone. Offering before you ask for anything builds goodwill quickly.",
            "<b>Put</b> someone <b>in touch with</b> someone. Ofrecer antes de pedir algo genera buena disposición muy rápido.",
          ],
          tags: ["core"],
        },
        {
          q: '"I\'d be happy to make an introduction."',
          a: [
            "A clear, generous offer to connect two people.",
            "Ofrecimiento claro y generoso de conectar a dos personas.",
          ],
          ex: "<em>You should talk to Priya — I'd be happy to make an introduction.</em>",
          note: [
            "The verb is <b>make</b>: <b>make an introduction</b>, never <em>do an introduction</em>. If you offer, do it within a day or two; an offer not followed through costs more than no offer.",
            "El verbo es <b>make</b>: <b>make an introduction</b>, nunca <em>do an introduction</em>. Si lo ofreces, hazlo en uno o dos días; un ofrecimiento que no se cumple cuesta más que no haber ofrecido nada.",
          ],
          tags: ["core"],
        },
        {
          q: "Double opt-in intro",
          a: [
            "An introduction made only after both people have separately agreed to it.",
            "Presentación que se hace solo después de que las dos personas, cada una por su lado, dijeron que sí.",
          ],
          ex: "I always do a <em>double opt-in intro</em>, so let me check with her first.",
          note: [
            "Considered good manners among busy people. If someone says <em>Let me check with him first</em>, it is not a refusal; it is the polite process.",
            "Se considera buena educación entre gente ocupada. Si alguien te dice <em>Let me check with him first</em>, no es una negativa; es el proceso correcto.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Informational interview",
          a: [
            "A short conversation requested to learn about someone's field, company or career path, with no job being offered.",
            "Conversación breve que pides para conocer el campo, la empresa o la trayectoria de alguien, sin que haya una vacante de por medio.",
          ],
          ex: "She agreed to an <em>informational interview</em>, so I'm preparing five good questions.",
          note: [
            "The unwritten rule: ask for advice and information, never for a job. Arrive with questions, keep to the agreed time and send a thank-you note the same day.",
            "La regla no escrita: pide consejo e información, nunca trabajo. Llega con preguntas, respeta el tiempo acordado y manda una nota de agradecimiento el mismo día.",
          ],
          tags: [],
        },
        {
          q: '"Grab coffee"',
          a: [
            "To meet briefly and informally over coffee.",
            "Verse de manera breve e informal para tomar un café.",
          ],
          ex: "<em>I'm in Dallas the week of the tenth — any chance we could grab coffee?</em>",
          note: [
            "<b>Grab</b> signals that it will be short and casual, which is why people accept. If someone says it vaguely — <em>We should grab coffee sometime</em> — it is friendly but not yet a plan; reply with a date to make it real.",
            "<b>Grab</b> indica que será algo corto y casual, y por eso la gente acepta. Si alguien lo dice de forma vaga, <em>We should grab coffee sometime</em>, es amable pero todavía no es un plan; contesta con una fecha para que se concrete.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "Invite",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "To ask someone to come to an event or join you somewhere.",
            "Pedirle a alguien que vaya a un evento o que te acompañe a algún lugar.",
          ],
          ex: "They <em>invited</em> me to speak at their annual sales meeting.",
          trap: [
            "In Mexico <em>yo te invito</em> means I am paying. English <b>invite</b> says nothing about the bill. <span class='x'>✗</span> <em>Don't worry, I invite you</em> → <span class='ok'>✓</span> <em><b>It's on me</b></em> · <span class='ok'>✓</span> <em><b>My treat</b></em> · <span class='ok'>✓</span> <em><b>Let me get this</b></em>. When a US contact invites you to lunch, each person may pay their own share unless someone says otherwise.",
            "En México, <em>yo te invito</em> quiere decir que yo pago. En inglés, <b>invite</b> no dice nada de la cuenta. <span class='x'>✗</span> <em>Don't worry, I invite you</em> → <span class='ok'>✓</span> <em><b>It's on me</b></em> · <span class='ok'>✓</span> <em><b>My treat</b></em> · <span class='ok'>✓</span> <em><b>Let me get this</b></em>. Cuando un contacto de Estados Unidos te invita a comer, puede que cada quien pague lo suyo, a menos que alguien diga otra cosa.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: '"I\'m looking to connect with people in…"',
          a: [
            "A direct statement of who you want to meet.",
            "Una forma directa de decir a quién quieres conocer.",
          ],
          ex: "<em>I'm looking to connect with people in medical device distribution.</em>",
          note: [
            "Being this specific is welcome, not rude. A vague goal gives the listener nothing to act on; a precise one lets them say <em>Oh, you should meet…</em>",
            "Ser así de específico es bienvenido, no es grosero. Una meta vaga no le da a quien te escucha nada con qué ayudarte; una precisa le permite decir <em>Oh, you should meet…</em>",
          ],
          tags: ["core"],
        },
        {
          q: '"Who else should I be talking to?"',
          a: [
            "A closing question that turns one good conversation into the next introduction.",
            "Pregunta de cierre que convierte una buena conversación en la siguiente presentación.",
          ],
          ex: "<em>This has been really helpful — who else should I be talking to?</em>",
          note: [
            "Ask it at the end, after thanking the person. It is one of the most productive questions in networking and is never taken as an imposition.",
            "Hazla al final, después de dar las gracias. Es de las preguntas más productivas del networking y nunca se toma como un abuso.",
          ],
          tags: [],
        },
        {
          q: '"Feel free to use my name."',
          a: [
            "Permission to mention the speaker when you contact a third person.",
            "Permiso para mencionar a quien habla cuando busques a una tercera persona.",
          ],
          ex: "<em>Reach out to Tom directly, and feel free to use my name.</em>",
          note: [
            "Then your first line to that person is <em>Karen Lee suggested I get in touch</em>. Never use someone's name without this permission.",
            "Entonces tu primera línea con esa persona es <em>Karen Lee suggested I get in touch</em>. Nunca uses el nombre de alguien sin este permiso.",
          ],
          tags: [],
        },
        {
          q: "The ask",
          a: [
            "The specific thing you are requesting from someone. A noun in business English.",
            "Lo específico que le estás pidiendo a alguien. En inglés de negocios se usa como sustantivo.",
          ],
          ex: "Keep <em>the ask</em> small: fifteen minutes, one question, one introduction.",
          note: [
            "Common in phrases such as <b>a big ask</b>, <b>a small ask</b> and <em>What's the ask?</em> A clear, modest ask gets answered; a long message with no ask does not.",
            "Es común en frases como <b>a big ask</b>, <b>a small ask</b> y <em>What's the ask?</em> Una petición clara y modesta recibe respuesta; un mensaje largo sin petición, no.",
          ],
          tags: ["idiom"],
        },
      ],
    },
    {
      title: ["Exiting and Following Up", "Cómo despedirte y dar seguimiento"],
      rule: [
        "Ending a conversation after a few minutes is polite at a US event; everyone is there to meet several people. What turns a pleasant chat into a relationship is the short message you send afterward.",
        "Terminar una conversación después de unos minutos es de buena educación en un evento en Estados Unidos; todos van a conocer a varias personas. Lo que convierte una plática agradable en una relación es el mensaje breve que mandas después.",
      ],
      items: [
        {
          q: '"It was great meeting you."',
          a: [
            "The standard closing line with someone you met for the first time.",
            "La frase de cierre más común con alguien que conociste por primera vez.",
          ],
          ex: "<em>It was great meeting you, Rachel — I'll send you that article tonight.</em>",
          note: [
            "<b>Meeting</b> for a first encounter, <b>seeing</b> for someone you already knew: <em>It was great seeing you</em>. Saying the person's name and one concrete next step, as in the example, makes you memorable.",
            "<b>Meeting</b> para un primer encuentro, <b>seeing</b> para alguien que ya conocías: <em>It was great seeing you</em>. Decir el nombre de la persona y un siguiente paso concreto, como en el ejemplo, hace que te recuerden.",
          ],
          tags: ["core"],
        },
        {
          q: '"I\'ll let you mingle."',
          a: [
            "A gracious way to end a conversation by releasing the other person to meet others.",
            "Forma amable de terminar una conversación dejando libre a la otra persona para que conozca a más gente.",
          ],
          ex: "<em>I'll let you mingle, but let's definitely talk again before you leave.</em>",
          note: [
            "It frames your exit as a favor to them. <b>To mingle</b> is to move around a room talking to different people.",
            "Presenta tu salida como un favor para la otra persona. <b>To mingle</b> es moverte por el lugar platicando con distintas personas.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"I\'m going to grab another drink."',
          a: [
            "A simple, accepted reason to step away from a conversation.",
            "Un motivo sencillo y aceptado para apartarte de una conversación.",
          ],
          ex: "<em>I'm going to grab another drink — it was really nice talking with you.</em>",
          note: [
            "Nobody takes it literally or personally. Other accepted exits: <em>I need to say hello to a colleague</em>, <em>I want to catch the speaker before she leaves</em>.",
            "Nadie se lo toma literal ni personal. Otras salidas aceptadas: <em>I need to say hello to a colleague</em>, <em>I want to catch the speaker before she leaves</em>.",
          ],
          tags: [],
        },
        {
          q: '"I don\'t want to monopolize your time."',
          a: [
            "A respectful exit, especially with someone senior or in demand.",
            "Salida respetuosa, sobre todo con alguien de alto nivel o muy solicitado.",
          ],
          ex: "<em>I don't want to monopolize your time, but may I follow up by email?</em>",
          note: [
            "Pairing the exit with a request for the next step, as in the example, is the most effective thirty seconds of the conversation.",
            "Combinar la salida con una petición del siguiente paso, como en el ejemplo, es el medio minuto más efectivo de toda la conversación.",
          ],
          tags: [],
        },
        {
          q: '"Let\'s stay in touch."',
          a: [
            "A friendly closing that expresses a wish to keep the connection alive.",
            "Cierre amable que expresa el deseo de mantener el contacto.",
          ],
          ex: "<em>Let's stay in touch — I'd like to hear how the launch goes.</em>",
          note: [
            "Also <b>keep in touch</b>. On its own it is a pleasantry, not a commitment. If you want it to happen, be the one who writes first.",
            "También <b>keep in touch</b>. Por sí sola es una cortesía, no un compromiso. Si quieres que pase, sé tú quien escriba primero.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: '"Connect on LinkedIn"',
          a: [
            "To add each other as contacts on LinkedIn.",
            "Agregarse como contactos en LinkedIn.",
          ],
          ex: "<em>Are you on LinkedIn? Let's connect so I can send you that report.</em>",
          note: [
            "The preposition is <b>on</b>: <span class='x'>✗</span> <em>Add me in LinkedIn</em> → <span class='ok'>✓</span> <em>Let's connect <b>on</b> LinkedIn</em>. Send the request the same day with one line reminding them where you met.",
            "La preposición es <b>on</b>: <span class='x'>✗</span> <em>Add me in LinkedIn</em> → <span class='ok'>✓</span> <em>Let's connect <b>on</b> LinkedIn</em>. Manda la solicitud el mismo día con una línea que les recuerde dónde se conocieron.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"I\'ll shoot you an email."',
          a: [
            "An informal promise to send a quick email.",
            "Promesa informal de mandar un correo rápido.",
          ],
          ex: "<em>I'll shoot you an email tomorrow with a couple of times that work.</em>",
          note: [
            "Casual and friendly; also <b>shoot you a note</b> or <b>drop you a line</b>. In a formal written message, use <b>send</b>.",
            "Es casual y amable; también se dice <b>shoot you a note</b> o <b>drop you a line</b>. En un mensaje formal por escrito, usa <b>send</b>.",
          ],
          tags: ["idiom"],
        },
        {
          q: '"Following up on our conversation…"',
          a: [
            "The standard opening of the message you send after meeting someone.",
            "El inicio de siempre del mensaje que mandas después de conocer a alguien.",
          ],
          ex: "<em>Following up on our conversation at the summit, here is the contact I mentioned.</em>",
          note: [
            "Spelling: the verb is <b>follow up</b>, the noun and adjective are <b>follow-up</b> — <em>a follow-up email</em>. Send it soon, keep it to a few lines, and include the one thing you promised.",
            "Ortografía: el verbo es <b>follow up</b>; el sustantivo y el adjetivo son <b>follow-up</b>, como en <em>a follow-up email</em>. Mándalo pronto, que sea de pocas líneas, e incluye eso que prometiste.",
          ],
          tags: ["core", "error"],
        },
        {
          q: '"I look forward to talking more."',
          a: [
            "A warm closing line for a follow-up message.",
            "Frase cálida para cerrar un mensaje de seguimiento.",
          ],
          ex: "<em>Thanks again for your time — I look forward to talking more next week.</em>",
          note: [
            "After <b>look forward to</b> the verb takes <b>-ing</b>: <span class='x'>✗</span> <em>I look forward to meet you</em> → <span class='ok'>✓</span> <em>I look forward to <b>meeting</b> you</em>.",
            "Después de <b>look forward to</b>, el verbo lleva <b>-ing</b>: <span class='x'>✗</span> <em>I look forward to meet you</em> → <span class='ok'>✓</span> <em>I look forward to <b>meeting</b> you</em>.",
          ],
          tags: ["error"],
        },
        {
          q: "Reach out",
          a: [
            "To contact someone, especially for the first time or after a gap.",
            "Buscar a alguien, sobre todo por primera vez o después de un tiempo sin contacto.",
          ],
          ex: "I'll <em>reach out</em> to her team next week and copy you.",
          note: [
            "It needs <b>to</b>: <span class='x'>✗</span> <em>I'll reach out you</em> → <span class='ok'>✓</span> <em>I'll <b>reach out to</b> you</em>. The opposite pattern from <b>contact</b>, which takes no preposition. Warmer and more common in speech than <b>contact</b>.",
            "Necesita <b>to</b>: <span class='x'>✗</span> <em>I'll reach out you</em> → <span class='ok'>✓</span> <em>I'll <b>reach out to</b> you</em>. Es el patrón contrario a <b>contact</b>, que no lleva preposición. Suena más cálido y es más común al hablar que <b>contact</b>.",
          ],
          tags: ["core", "idiom", "error"],
        },
        {
          q: "Touch base",
          a: [
            "To make brief contact in order to check in or share an update.",
            "Ponerte en contacto brevemente para ver cómo va algo o dar una actualización.",
          ],
          ex: "Let's <em>touch base</em> after the holidays and see where things stand.",
          note: [
            "From baseball. It implies a short exchange, not a full meeting. You touch base <b>with</b> someone <b>about</b> something.",
            "Viene del beisbol. Implica un intercambio corto, no una reunión completa. Se dice touch base <b>with</b> someone <b>about</b> something.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "Circle back",
          a: [
            "To return to a topic or a person later.",
            "Retomar un tema o volver a buscar a una persona más adelante.",
          ],
          ex: "Let me check with my team and <em>circle back</em> to you by Friday.",
          note: [
            "Give it a date, as in the example. Without one, <em>I'll circle back</em> can sound like a polite way of ending the subject.",
            "Ponle fecha, como en el ejemplo. Sin fecha, <em>I'll circle back</em> puede sonar a una forma cortés de dar por cerrado el tema.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Ping",
          a: [
            "To send someone a quick, informal message, usually by chat or text.",
            "Mandarle a alguien un mensaje rápido e informal, por lo general por chat o por texto.",
          ],
          ex: "<em>Ping</em> me when you land and we'll figure out dinner.",
          note: [
            "Informal and common in tech and among colleagues. Not for a first message to a senior person you have just met.",
            "Es informal y común en tecnología y entre colegas. No lo uses en un primer mensaje a una persona de alto nivel que acabas de conocer.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Compromise",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "An agreement in which each side gives up part of what it wanted.",
            "Acuerdo en el que cada parte cede algo de lo que quería.",
          ],
          ex: "We reached a <em>compromise</em>: a short call this week and the full demo next month.",
          trap: [
            "Spanish <em>compromiso</em> is a <b>commitment</b> or a <b>prior engagement</b>, not a compromise. When leaving an event: <span class='x'>✗</span> <em>Sorry, I have another compromise</em> → <span class='ok'>✓</span> <em>Sorry, I have another <b>commitment</b></em>. And <em>estoy comprometido con el proyecto</em> is <em>I'm <b>committed</b> to the project</em>.",
            "Tu <em>compromiso</em> es <b>commitment</b> o <b>prior engagement</b>, no <b>compromise</b>. Al irte de un evento: <span class='x'>✗</span> <em>Sorry, I have another compromise</em> → <span class='ok'>✓</span> <em>Sorry, I have another <b>commitment</b></em>. Y <em>estoy comprometido con el proyecto</em> es <em>I'm <b>committed</b> to the project</em>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "Meeting",
          hint: ["(not reunion)", "(no es reunion)"],
          a: [
            "A planned occasion when people come together to discuss work.",
            "Ocasión planeada en la que varias personas se juntan para tratar temas de trabajo.",
          ],
          ex: "Could we set up a <em>meeting</em> for the week after the conference?",
          trap: [
            "Spanish <em>reunión</em> is <b>meeting</b>. English <b>reunion</b> is a gathering of people who have not seen each other in years — <em>a class reunion</em>, <em>a family reunion</em>. <span class='x'>✗</span> <em>I have a reunion with a client at four</em> → <span class='ok'>✓</span> <em>I have a <b>meeting</b> with a client at four</em>.",
            "Tu <em>reunión</em> es <b>meeting</b>. En inglés, <b>reunion</b> es un reencuentro de personas que llevan años sin verse: <em>a class reunion</em>, <em>a family reunion</em>. <span class='x'>✗</span> <em>I have a reunion with a client at four</em> → <span class='ok'>✓</span> <em>I have a <b>meeting</b> with a client at four</em>.",
          ],
          tags: ["falsefriend", "error"],
        },
      ],
    },
  ],
  cheat: [
    [
      ["CONTACT ME", "CONTACT ME"],
      [
        "<b>Contact</b> takes no preposition; <b>reach out</b> needs <b>to</b>. <em>Contact me</em> · <em>Reach out to me</em>.",
        "<b>Contact</b> no lleva preposición; <b>reach out</b> necesita <b>to</b>. <em>Contact me</em> · <em>Reach out to me</em>.",
      ],
    ],
    [
      ["MEET vs KNOW", "MEET vs KNOW"],
      [
        "You <b>meet</b> someone the first time. After that you <b>know</b> them. Both are <em>conocer</em>.",
        "La primera vez es <b>meet</b>. Después de eso es <b>know</b>. Los dos son <em>conocer</em>.",
      ],
    ],
    [
      ["MEET vs SEE", "MEET vs SEE"],
      [
        "<em>Nice to <b>meet</b> you</em> is for the first time only. After that it is <em>Nice to <b>see</b> you</em>.",
        "<em>Nice to <b>meet</b> you</em> es solo para la primera vez. Después es <em>Nice to <b>see</b> you</em>.",
      ],
    ],
    [
      ["ATTEND, NOT ASSIST", "ATTEND, NO ASSIST"],
      [
        "You <b>attend</b> an event. To <b>assist</b> is to help. No preposition: <em>I attended the conference</em>.",
        "A un evento se va con <b>attend</b>. <b>Assist</b> es ayudar. Sin preposición: <em>I attended the conference</em>.",
      ],
    ],
    [
      ["INTRODUCE, NOT PRESENT", "INTRODUCE, NO PRESENT"],
      [
        "You <b>introduce</b> a person <b>to</b> another person. You <b>present</b> a report.",
        "A una persona la presentas con <b>introduce</b> … <b>to</b>. Con <b>present</b> presentas un reporte.",
      ],
    ],
    [
      ["CAREER vs DEGREE", "CAREER vs DEGREE"],
      [
        "Your <b>career</b> is your working life. What you studied is your <b>degree</b> or <b>major</b>.",
        "Tu <b>career</b> es tu vida laboral. Lo que estudiaste es tu <b>degree</b> o <b>major</b>.",
      ],
    ],
    [
      ["SAY WHAT YOU WANT", "DI LO QUE BUSCAS"],
      [
        "A small, specific request is respectful in US business culture. <em>Would you be open to a twenty-minute call?</em>",
        "Una petición pequeña y específica es una muestra de respeto en la cultura de negocios de Estados Unidos. <em>Would you be open to a twenty-minute call?</em>",
      ],
    ],
    [
      ["FOLLOW UP", "DA SEGUIMIENTO"],
      [
        "The conversation counts only if you write afterward. Send a short <b>follow-up</b> while they still remember you.",
        "La conversación cuenta solo si escribes después. Manda un <b>follow-up</b> breve mientras todavía se acuerdan de ti.",
      ],
    ],
  ],
};
