// Talking About Catholicism in English — bilingual vocabulary bank (EN + es-MX, tú).
// Neutrality rule for this file: describe what terms mean and how things are practiced.
// Never evaluate any belief, church, or tradition. This is a vocabulary and culture
// briefing, not theology and not persuasion.

import type { TopicBank } from "./types";

export const bank: TopicBank = {
  groups: [
    {
      title: ["The Church — Who Is Who", "La Iglesia: quién es quién"],
      rule: [
        "You already know how the Church is organized. What changes in English is the label: several of the most familiar Spanish words either do not translate directly or point to something different.",
        "Ya sabes cómo está organizada la Iglesia. Lo que cambia en inglés es la etiqueta: varias de las palabras más familiares en español no se traducen directo o apuntan a otra cosa.",
      ],
      items: [
        {
          q: "the Catholic Church",
          a: [
            "The worldwide church led by the Pope. Also called the Roman Catholic Church.",
            "La Iglesia a nivel mundial, encabezada por el Papa. También se le dice <em>the Roman Catholic Church</em>.",
          ],
          ex: "She has worked with <em>the Catholic Church</em> on several housing projects.",
          note: [
            "<b>The Church</b> with a capital C is the institution; <b>a church</b> in lowercase is a building or a local congregation.",
            "<b>The Church</b> con C mayúscula es la institución; <b>a church</b> en minúscula es un edificio o una comunidad local.",
          ],
          tags: ["core"],
        },
        {
          q: "Catholic",
          a: [
            "A member of the Catholic Church, or relating to it. Works as a noun and as an adjective.",
            "Persona que pertenece a la Iglesia católica, o lo relacionado con ella. Funciona como sustantivo y como adjetivo.",
          ],
          ex: "Both of my business partners are <em>Catholic</em>.",
          trap: [
            "Always capitalized in English: <span class='x'>✗</span> <em>I am catholic</em> → <span class='ok'>✓</span> <em>I am <b>Catholic</b></em>. Religions and their members take a capital letter, unlike in Spanish. Both <b>I'm Catholic</b> and <b>I'm a Catholic</b> are correct; the first is more common in conversation.",
            "En inglés siempre va con mayúscula: <span class='x'>✗</span> <em>I am catholic</em> → <span class='ok'>✓</span> <em>I am <b>Catholic</b></em>. Las religiones y sus miembros se escriben con mayúscula, a diferencia del español. Tanto <b>I'm Catholic</b> como <b>I'm a Catholic</b> son correctas; la primera es más común al platicar.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "the Pope",
          a: [
            "The bishop of Rome and head of the Catholic Church.",
            "El obispo de Roma y cabeza de la Iglesia católica.",
          ],
          ex: "<em>The Pope</em> is visiting the United States in the fall.",
          note: [
            "Also <b>the Holy Father</b>. The adjective is <b>papal</b> (<em>a papal visit</em>) and the office is <b>the papacy</b>. Pronounce it with a long o: <em>POHP</em>.",
            "También <b>the Holy Father</b>. El adjetivo es <b>papal</b> (<em>a papal visit</em>) y el cargo es <b>the papacy</b>. Se pronuncia con o larga: <em>POUP</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "the Vatican / the Holy See",
          a: [
            "The Vatican is the city-state in Rome where the Pope lives; the Holy See is the central government of the Church.",
            "<em>The Vatican</em> es la ciudad-estado en Roma donde vive el Papa; <em>the Holy See</em> (la Santa Sede) es el gobierno central de la Iglesia.",
          ],
          ex: "<em>The Vatican</em> released a statement this morning.",
          note: [
            "In the news, <b>the Vatican</b> is used loosely for both. <b>The Holy See</b> appears mostly in diplomatic and legal contexts.",
            "En las noticias, <b>the Vatican</b> se usa para ambas cosas. <b>The Holy See</b> aparece sobre todo en contextos diplomáticos y legales.",
          ],
          tags: [],
        },
        {
          q: "cardinal",
          a: [
            "A senior church official appointed by the Pope. Cardinals under the age of 80 elect a new pope in a meeting called a conclave.",
            "Alto dignatario de la Iglesia nombrado por el Papa. Los cardenales menores de 80 años eligen al nuevo papa en una reunión llamada <em>conclave</em>.",
          ],
          ex: "The <em>cardinal</em> spoke at the university's graduation.",
          tags: [],
        },
        {
          q: "bishop / archbishop",
          a: [
            "A bishop leads a diocese; an archbishop leads an archdiocese.",
            "Un <em>bishop</em> (obispo) encabeza una diócesis; un <em>archbishop</em> (arzobispo) encabeza una arquidiócesis.",
          ],
          ex: "The <em>bishop</em> will be at the parish for confirmations in May.",
          note: [
            "Forms of address, if you ever need them: <b>Bishop</b> or <b>Your Excellency</b> for a bishop, <b>Your Eminence</b> for a cardinal, <b>Your Holiness</b> for the Pope.",
            "Formas de tratamiento, por si algún día las necesitas: <b>Bishop</b> o <b>Your Excellency</b> para un obispo, <b>Your Eminence</b> para un cardenal, <b>Your Holiness</b> para el Papa.",
          ],
          tags: [],
        },
        {
          q: "diocese / archdiocese",
          a: [
            "The territory a bishop is responsible for, made up of many parishes. An archdiocese is a larger or historically senior one.",
            "El territorio a cargo de un obispo, formado por muchas parroquias. Una <em>archdiocese</em> es una de mayor tamaño o de mayor rango histórico.",
          ],
          ex: "The <em>Archdiocese</em> of New York runs dozens of schools.",
          note: [
            "Pronunciation: <b>DY-uh-sis</b>, with the stress on the first syllable. The adjective is <b>diocesan</b> (dy-AH-suh-sun).",
            "Pronunciación: <b>DAI-o-sis</b>, con el acento en la primera sílaba. El adjetivo es <b>diocesan</b> (dai-A-se-san).",
          ],
          tags: [],
        },
        {
          q: "parish",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "The local Catholic community and its church, led by a pastor. Spanish <em>parroquia</em>.",
            "La comunidad católica local y su iglesia, a cargo de un párroco. En español, <em>parroquia</em>.",
          ],
          ex: "Our <em>parish</em> is about ten minutes from the office.",
          trap: [
            "The noun is <b>parish</b>, not <em>parochy</em>. And be careful with the adjective: outside the phrase <b>parochial school</b>, <b>parochial</b> usually means narrow in outlook. <span class='x'>✗</span> <em>the parochial priest</em> → <span class='ok'>✓</span> <em>the <b>parish</b> priest</em>.",
            "El sustantivo es <b>parish</b>, no <em>parochy</em>. Y cuidado con el adjetivo: fuera de la frase <b>parochial school</b>, <b>parochial</b> casi siempre significa de miras estrechas. <span class='x'>✗</span> <em>the parochial priest</em> → <span class='ok'>✓</span> <em>the <b>parish</b> priest</em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "priest",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "An ordained man who celebrates Mass and the other sacraments. Spanish <em>sacerdote</em>, <em>cura</em>, <em>padre</em>.",
            "Hombre ordenado que celebra la misa y los demás sacramentos. En español, <em>sacerdote</em>, <em>cura</em>, <em>padre</em>.",
          ],
          ex: "The <em>priest</em> who married us is retiring this year.",
          trap: [
            "When you talk <em>about</em> him, the noun is <b>priest</b>: <span class='x'>✗</span> <em>The father gave a nice homily</em> → <span class='ok'>✓</span> <em>The <b>priest</b> gave a nice homily</em>. <b>Father</b> is a title and a form of address, not the job. Spanish <em>cura</em> is also <b>priest</b>, never <em>cure</em>.",
            "Cuando hablas <em>de</em> él, el sustantivo es <b>priest</b>: <span class='x'>✗</span> <em>The father gave a nice homily</em> → <span class='ok'>✓</span> <em>The <b>priest</b> gave a nice homily</em>. <b>Father</b> es un título y una forma de dirigirte a él, no el oficio. <em>Cura</em> también es <b>priest</b>, nunca <em>cure</em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Father",
          hint: ["(title and form of address)", "(título y forma de tratamiento)"],
          a: [
            "How you address a priest, and the title used before his name.",
            "Así te diriges a un sacerdote, y es el título que va antes de su nombre.",
          ],
          ex: "Thank you, <em>Father</em>, it was a beautiful ceremony.",
          note: [
            "Capitalized, and used with the first name or the last name: <b>Father Mike</b>, <b>Father O'Brien</b>. In writing it is abbreviated <b>Fr.</b>",
            "Va con mayúscula y se usa con el nombre o con el apellido: <b>Father Mike</b>, <b>Father O'Brien</b>. Por escrito se abrevia <b>Fr.</b>",
          ],
          tags: ["core"],
        },
        {
          q: "pastor",
          hint: ["(Catholic sense)", "(sentido católico)"],
          a: [
            "In American Catholic usage, the priest in charge of a parish. Spanish <em>párroco</em>.",
            "En el uso católico de Estados Unidos, el sacerdote a cargo de una parroquia: el <em>párroco</em>.",
          ],
          ex: "Father Tom has been <em>pastor</em> of St. Anne's for twelve years.",
          note: [
            "In Mexico <em>pastor</em> points to a Protestant church. In the US the same word is used in both traditions, so a Catholic colleague may say <em>our pastor</em> and mean a priest.",
            "En México <em>pastor</em> te remite a una iglesia protestante. En Estados Unidos la misma palabra se usa en ambas tradiciones, así que un colega católico puede decir <em>our pastor</em> y referirse a un sacerdote.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "deacon",
          a: [
            "An ordained minister who can baptize, witness marriages, and preach, but does not celebrate Mass. Permanent deacons may be married men.",
            "Ministro ordenado que puede bautizar, presidir matrimonios y predicar, pero no celebra misa. Los diáconos permanentes pueden ser hombres casados.",
          ],
          ex: "A <em>deacon</em> from our parish performed the baptism.",
          tags: [],
        },
        {
          q: "nun / sister",
          a: [
            "A woman who belongs to a religious community and has taken vows. Spanish <em>monja</em>, <em>religiosa</em>, <em>madre</em>.",
            "Mujer que pertenece a una comunidad religiosa y ha hecho votos. En español, <em>monja</em>, <em>religiosa</em>, <em>madre</em>.",
          ],
          ex: "I was taught by <em>nuns</em> all the way through eighth grade.",
          note: [
            "Everyday speech uses both words. You address her as <b>Sister</b>: <em>Good morning, Sister</em> or <em>Sister Mary Ann</em>. Spanish <em>madre</em> as a form of address is usually <b>Sister</b> in English; <b>Mother</b> is mostly used for the head of a community.",
            "En el habla diaria se usan las dos palabras. Te diriges a ella como <b>Sister</b>: <em>Good morning, Sister</em> o <em>Sister Mary Ann</em>. El trato de <em>madre</em> en español casi siempre es <b>Sister</b> en inglés; <b>Mother</b> se usa sobre todo para la superiora de una comunidad.",
          ],
          tags: [],
        },
        {
          q: "religious",
          hint: ["(as a noun)", "(como sustantivo)"],
          a: [
            "In Church English, a member of a religious order: a sister, a brother, or an order priest. The plural is also <em>religious</em>.",
            "En el inglés de la Iglesia, un miembro de una orden religiosa: una hermana, un hermano o un sacerdote de orden. El plural también es <em>religious</em>.",
          ],
          ex: "The conference brought together priests, <em>religious</em>, and lay people.",
          trap: [
            "Outside Church documents, <b>religious</b> is an adjective. <span class='x'>✗</span> <em>My aunt is a religious</em> → <span class='ok'>✓</span> <em>My aunt is <b>a nun</b></em> or <em><b>a sister</b></em>. And <em>My aunt is religious</em> means only that she takes her faith seriously.",
            "Fuera de los documentos de la Iglesia, <b>religious</b> es adjetivo. <span class='x'>✗</span> <em>My aunt is a religious</em> → <span class='ok'>✓</span> <em>My aunt is <b>a nun</b></em> o <em><b>a sister</b></em>. Y <em>My aunt is religious</em> solo quiere decir que toma su fe en serio.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "convent / monastery",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A convent is a house where sisters or nuns live. A monastery is a community of monks, and sometimes of cloistered nuns.",
            "Un <em>convent</em> es la casa donde viven hermanas o monjas. Un <em>monastery</em> es una comunidad de monjes y, a veces, de monjas de clausura.",
          ],
          ex: "The old <em>convent</em> next to the school is now a retreat center.",
          trap: [
            "Spanish <em>convento</em> covers houses of men and of women. In everyday English, <b>convent</b> means women only. <span class='x'>✗</span> <em>a Franciscan convent of friars</em> → <span class='ok'>✓</span> <em>a Franciscan <b>friary</b></em> or <em><b>monastery</b></em>.",
            "En español, <em>convento</em> aplica a casas de hombres y de mujeres. En el inglés cotidiano, <b>convent</b> es solo de mujeres. <span class='x'>✗</span> <em>a Franciscan convent of friars</em> → <span class='ok'>✓</span> <em>a Franciscan <b>friary</b></em> o <em><b>monastery</b></em>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "clergy / laity",
          a: [
            "The clergy are the ordained: bishops, priests, and deacons. The laity are everyone else in the Church.",
            "<em>The clergy</em> son los ordenados: obispos, sacerdotes y diáconos. <em>The laity</em> son todos los demás miembros de la Iglesia.",
          ],
          ex: "The committee includes both <em>clergy</em> and <em>laity</em>.",
          note: [
            "<b>Clergy</b> is a group noun; one person is <b>a member of the clergy</b>. One member of the laity is <b>a layperson</b>, and the adjective is <b>lay</b>: <em>a lay teacher</em>. Spanish <em>laico</em> in this sense is <b>lay</b>.",
            "<b>Clergy</b> es un sustantivo colectivo; una sola persona es <b>a member of the clergy</b>. Un miembro del laicado es <b>a layperson</b>, y el adjetivo es <b>lay</b>: <em>a lay teacher</em>. <em>Laico</em> en este sentido es <b>lay</b>.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: ["Mass & Worship", "La misa y la celebración"],
      rule: [
        "This is where direct translation fails most often. The nouns are close to Spanish, but the verbs and the articles are not: you go to Mass, the priest celebrates it, and you receive Communion.",
        "Aquí es donde más falla la traducción directa. Los sustantivos se parecen al español, pero los verbos y los artículos no: en inglés <em>you go to Mass</em>, <em>the priest celebrates it</em> y <em>you receive Communion</em>.",
      ],
      items: [
        {
          q: "Mass",
          a: [
            "The central act of Catholic worship. Spanish <em>misa</em>.",
            "El acto central del culto católico: la <em>misa</em>.",
          ],
          ex: "We usually go to <em>Mass</em> on Saturday evening.",
          trap: [
            "Capital M and no article: <span class='x'>✗</span> <em>I went to the mass</em> → <span class='ok'>✓</span> <em>I went to <b>Mass</b></em>. Use an article only for one specific celebration: <em>the 10 o'clock Mass</em>, <em>a funeral Mass</em>. Lowercase <em>mass</em> means a large quantity.",
            "M mayúscula y sin artículo: <span class='x'>✗</span> <em>I went to the mass</em> → <span class='ok'>✓</span> <em>I went to <b>Mass</b></em>. Usa artículo solo para una celebración específica: <em>the 10 o'clock Mass</em>, <em>a funeral Mass</em>. <em>Mass</em> en minúscula significa una gran cantidad.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "attend Mass",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "To be present at Mass. Slightly more formal than <em>go to Mass</em>.",
            "Estar presente en misa. Un poco más formal que <em>go to Mass</em>.",
          ],
          ex: "About two hundred people <em>attend Mass</em> there on weekdays.",
          trap: [
            "Spanish <em>asistir a misa</em> is not <em>assist</em>. <span class='x'>✗</span> <em>I assisted to the Mass</em> → <span class='ok'>✓</span> <em>I <b>attended</b> Mass</em> or <em>I <b>went to</b> Mass</em>. In English, <b>to assist</b> means to help.",
            "<em>Asistir a misa</em> no es <em>assist</em>. <span class='x'>✗</span> <em>I assisted to the Mass</em> → <span class='ok'>✓</span> <em>I <b>attended</b> Mass</em> o <em>I <b>went to</b> Mass</em>. En inglés, <b>to assist</b> significa ayudar.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "celebrate Mass / say Mass",
          a: [
            "What the priest does. Both verbs are standard; <em>celebrate</em> is a little more formal.",
            "Lo que hace el sacerdote. Los dos verbos son correctos; <em>celebrate</em> es un poco más formal.",
          ],
          ex: "The bishop will <em>celebrate Mass</em> at noon on Sunday.",
          trap: [
            "Spanish <em>dar misa</em> and <em>oficiar misa</em> do not carry over: <span class='x'>✗</span> <em>The priest gave the Mass</em> · <span class='x'>✗</span> <em>made the Mass</em> → <span class='ok'>✓</span> <em>The priest <b>said</b> Mass</em> or <em><b>celebrated</b> Mass</em>. To request one for somebody, the phrase is <b>to have a Mass said for</b> them.",
            "<em>Dar misa</em> y <em>oficiar misa</em> no pasan tal cual: <span class='x'>✗</span> <em>The priest gave the Mass</em> · <span class='x'>✗</span> <em>made the Mass</em> → <span class='ok'>✓</span> <em>The priest <b>said</b> Mass</em> o <em><b>celebrated</b> Mass</em>. Para mandar decir una misa por alguien, la frase es <b>to have a Mass said for</b> esa persona.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "homily",
          a: [
            "The priest's or deacon's talk on the readings during Mass. Spanish <em>homilía</em>.",
            "La reflexión del sacerdote o del diácono sobre las lecturas durante la misa: la <em>homilía</em>.",
          ],
          ex: "The <em>homily</em> was short and very practical.",
          note: [
            "Catholics usually say <b>homily</b>. <b>Sermon</b> is understood everywhere and is the usual word in Protestant churches. Stress the first syllable: <em>HOM-uh-lee</em>.",
            "Los católicos casi siempre dicen <b>homily</b>. <b>Sermon</b> se entiende en todas partes y es la palabra habitual en las iglesias protestantes. El acento va en la primera sílaba: <em>JOM-i-li</em>.",
          ],
          tags: [],
        },
        {
          q: "Communion / the Eucharist",
          a: [
            "The sacrament at the center of the Mass, in which Catholics receive the consecrated bread and wine.",
            "El sacramento que está en el centro de la misa, en el que los católicos reciben el pan y el vino consagrados.",
          ],
          ex: "The choir sings during <em>Communion</em>.",
          note: [
            "<b>Communion</b> is the everyday word and <b>the Eucharist</b> (YOO-kuh-rist) the more formal one. The consecrated bread is <b>the host</b>, which has nothing to do with <em>host</em> as the person who invites you.",
            "<b>Communion</b> es la palabra de todos los días y <b>the Eucharist</b> (IU-ka-rist) la más formal. El pan consagrado es <b>the host</b> (la hostia), que no tiene nada que ver con <em>host</em> en el sentido de anfitrión.",
          ],
          tags: ["core"],
        },
        {
          q: "receive Communion",
          a: [
            "To take part in the sacrament. Spanish <em>comulgar</em>, which has no one-word equivalent in English.",
            "Participar en el sacramento. Es <em>comulgar</em>, que no tiene un verbo único en inglés.",
          ],
          ex: "Guests who are not Catholic do not need to <em>receive Communion</em>.",
          trap: [
            "<span class='x'>✗</span> <em>I communed</em> · <span class='x'>✗</span> <em>I did the communion</em> → <span class='ok'>✓</span> <em>I <b>received</b> Communion</em> or <em>I <b>took</b> Communion</em>. English builds it with a verb plus the noun.",
            "<span class='x'>✗</span> <em>I communed</em> · <span class='x'>✗</span> <em>I did the communion</em> → <span class='ok'>✓</span> <em>I <b>received</b> Communion</em> o <em>I <b>took</b> Communion</em>. En inglés se arma con un verbo más el sustantivo.",
          ],
          note: [
            "At a Catholic Mass, Communion is generally for Catholics. Guests who are not receiving simply stay in the pew, and nobody finds that unusual.",
            "En una misa católica, la comunión es en general para los católicos. Los invitados que no comulgan simplemente se quedan en su lugar, y a nadie le parece raro.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "church",
          hint: ["(the building and the habit)", "(el edificio y la costumbre)"],
          a: [
            "The building where a parish worships; also the activity of going there.",
            "El edificio donde una parroquia celebra; también la actividad de ir ahí.",
          ],
          ex: "We walk to <em>church</em> when the weather is nice.",
          note: [
            "No article for the activity: <span class='x'>✗</span> <em>go to the church on Sundays</em> → <span class='ok'>✓</span> <em>go to <b>church</b> on Sundays</em>. Spanish <em>templo</em> is simply <b>church</b>; in American English <em>temple</em> points to other religions. A <b>chapel</b> is a small one, a <b>cathedral</b> is the bishop's church, and a <b>shrine</b> is a place of pilgrimage.",
            "Sin artículo cuando es la actividad: <span class='x'>✗</span> <em>go to the church on Sundays</em> → <span class='ok'>✓</span> <em>go to <b>church</b> on Sundays</em>. <em>Templo</em> es simplemente <b>church</b>; en el inglés de Estados Unidos, <em>temple</em> remite a otras religiones. Una <b>chapel</b> es una capilla, una <b>cathedral</b> es la iglesia del obispo y un <b>shrine</b> es un santuario.",
          ],
          tags: ["core", "falsefriend"],
        },
        {
          q: "pew",
          a: [
            "One of the long benches people sit on in church.",
            "Cada una de las bancas largas donde se sienta la gente en la iglesia.",
          ],
          ex: "The family sat in the front <em>pew</em>.",
          note: [
            "Pronounced like <em>few</em> with a p. The padded bar you kneel on is <b>the kneeler</b>.",
            "Se pronuncia como <em>few</em> pero con p. La barra acolchonada donde te hincas es <b>the kneeler</b>.",
          ],
          tags: [],
        },
        {
          q: "congregation",
          a: [
            "The people gathered for Mass. The members of a parish are its <em>parishioners</em>.",
            "La gente reunida en la misa. Los miembros de una parroquia son sus <em>parishioners</em> (feligreses).",
          ],
          ex: "The whole <em>congregation</em> stood and applauded the choir.",
          note: [
            "Spanish <em>los asistentes</em> is not <em>the assistants</em>: <span class='x'>✗</span> <em>The assistants sang</em> → <span class='ok'>✓</span> <em>The <b>congregation</b> sang</em>. An <em>assistant</em> is someone who helps.",
            "<em>Los asistentes</em> no son <em>the assistants</em>: <span class='x'>✗</span> <em>The assistants sang</em> → <span class='ok'>✓</span> <em>The <b>congregation</b> sang</em>. Un <em>assistant</em> es alguien que ayuda.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "hymn",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A religious song sung by the congregation.",
            "Canto religioso que entona la asamblea.",
          ],
          ex: "They closed with my grandmother's favorite <em>hymn</em>.",
          note: [
            "The n is silent: it sounds exactly like <em>him</em>. And Spanish <em>himno nacional</em> is <b>national anthem</b>, never <em>national hymn</em>.",
            "La n es muda: suena igual que <em>him</em>. Y el <em>himno nacional</em> es <b>national anthem</b>, nunca <em>national hymn</em>.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "kneel",
          a: [
            "To go down on your knees. Spanish <em>hincarse</em>, <em>arrodillarse</em>.",
            "Ponerte de rodillas: <em>hincarse</em>, <em>arrodillarse</em>.",
          ],
          ex: "If you would rather not <em>kneel</em>, it is fine to sit quietly.",
          note: [
            "The k is silent. Past tense: <b>knelt</b> or <b>kneeled</b>. The quick bend of one knee on entering the pew is <b>to genuflect</b>.",
            "La k es muda. Pasado: <b>knelt</b> o <b>kneeled</b>. La genuflexión rápida al entrar a la banca es <b>to genuflect</b>.",
          ],
          tags: [],
        },
        {
          q: "the sign of the cross",
          a: [
            "The gesture of touching forehead, chest, and shoulders. Spanish <em>persignarse</em>, <em>santiguarse</em>.",
            "El gesto de tocarte la frente, el pecho y los hombros: <em>persignarse</em>, <em>santiguarse</em>.",
          ],
          ex: "He made <em>the sign of the cross</em> before the plane took off.",
          note: [
            "The verb is <b>make</b>: <em>make the sign of the cross</em>. You will also hear <b>to cross yourself</b> and <b>to bless yourself</b>.",
            "El verbo es <b>make</b>: <em>make the sign of the cross</em>. También vas a escuchar <b>to cross yourself</b> y <b>to bless yourself</b>.",
          ],
          tags: [],
        },
        {
          q: "the collection",
          a: [
            "The moment in Mass when people give money to support the parish, and the money itself.",
            "El momento de la misa en que la gente da dinero para sostener la parroquia, y el dinero mismo.",
          ],
          ex: "There is a second <em>collection</em> today for the food pantry.",
          note: [
            "Spanish <em>limosna</em> in this sense is <b>the collection</b> or <b>the offering</b>. People talk about <b>passing the basket</b>. The word <em>alms</em> exists but sounds old-fashioned.",
            "<em>Limosna</em> en este sentido es <b>the collection</b> o <b>the offering</b>. Se habla de <b>passing the basket</b>. La palabra <em>alms</em> existe, pero suena antigua.",
          ],
          tags: [],
        },
        {
          q: "Peace be with you",
          a: [
            "The greeting exchanged at the sign of peace, usually with a handshake.",
            "El saludo que se intercambia en el rito de la paz, normalmente con un apretón de manos.",
          ],
          ex: 'Everyone turned to the people around them and said, "<em>Peace be with you</em>."',
          note: [
            "It is the English for <em>La paz sea contigo</em>. When the priest says it to everyone, the congregation answers <b>And with your spirit</b>.",
            "Es el <em>La paz sea contigo</em> en inglés. Cuando el sacerdote se lo dice a todos, la asamblea responde <b>And with your spirit</b>.",
          ],
          tags: ["idiom"],
        },
      ],
    },
    {
      title: ["Sacraments & Life Events", "Sacramentos y momentos de la vida"],
      rule: [
        "These are the occasions you are most likely to be invited to or asked about. The events are familiar; the vocabulary around them, especially for family roles and for funerals, is where Spanish and English part ways.",
        "Estas son las ocasiones a las que más probablemente te inviten o sobre las que te pregunten. Los eventos los conoces; el vocabulario que los rodea, sobre todo el de los papeles familiares y el de los funerales, es donde el español y el inglés se separan.",
      ],
      items: [
        {
          q: "sacrament",
          a: [
            "One of the seven rites at the center of Catholic life: baptism, confirmation, the Eucharist, reconciliation, anointing of the sick, marriage, and holy orders.",
            "Uno de los siete ritos centrales de la vida católica: bautismo, confirmación, eucaristía, reconciliación, unción de los enfermos, matrimonio y orden sacerdotal.",
          ],
          ex: "Our kids are preparing for their first <em>sacraments</em> this year.",
          tags: [],
        },
        {
          q: "baptism / christening",
          a: [
            "The sacrament by which a person, usually a baby, becomes a member of the Church. Spanish <em>bautizo</em>, <em>bautismo</em>.",
            "El sacramento por el que una persona, por lo general un bebé, entra a formar parte de la Iglesia: <em>bautizo</em>, <em>bautismo</em>.",
          ],
          ex: "We are flying to Chicago for our niece's <em>baptism</em>.",
          note: [
            "English uses one noun, <b>baptism</b>, for both <em>bautizo</em> and <em>bautismo</em>. <b>Christening</b> (the t is silent) is a common alternative for a baby's ceremony. The verb is <b>to baptize</b>, normally passive: <em>She was baptized in March</em>.",
            "El inglés usa un solo sustantivo, <b>baptism</b>, para <em>bautizo</em> y <em>bautismo</em>. <b>Christening</b> (la t es muda) es una alternativa común para la ceremonia de un bebé. El verbo es <b>to baptize</b>, casi siempre en pasiva: <em>She was baptized in March</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "godparents",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "The godfather and godmother chosen at a baptism. The child is their godson, goddaughter, or godchild.",
            "El padrino (<em>godfather</em>) y la madrina (<em>godmother</em>) elegidos en un bautizo. El niño es su <em>godson</em>, <em>goddaughter</em> o <em>godchild</em>.",
          ],
          ex: "My brother and his wife are the baby's <em>godparents</em>.",
          trap: [
            "<b>Godparents</b> are for baptism only. The <em>padrinos</em> of a Mexican wedding have no direct counterpart: <span class='x'>✗</span> <em>We were the godparents of their wedding</em> → <span class='ok'>✓</span> <em>We were <b>in the wedding party</b></em> or <em>We were their wedding <b>sponsors</b></em>, with a short explanation. English also has no word for <em>compadre</em> or <em>comadre</em>; say <em>my son's godfather</em>.",
            "<b>Godparents</b> son solo los de bautizo. Los padrinos de una boda mexicana no tienen equivalente directo: <span class='x'>✗</span> <em>We were the godparents of their wedding</em> → <span class='ok'>✓</span> <em>We were <b>in the wedding party</b></em> o <em>We were their wedding <b>sponsors</b></em>, con una breve explicación. Tampoco existe palabra para <em>compadre</em> o <em>comadre</em>; di <em>my son's godfather</em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "sponsor",
          a: [
            "The adult who stands with a person being confirmed. Spanish <em>padrino</em> or <em>madrina de confirmación</em>.",
            "El adulto que acompaña a quien se confirma: el padrino o la madrina de confirmación.",
          ],
          ex: "She asked her aunt to be her confirmation <em>sponsor</em>.",
          note: [
            "So one Spanish word splits in two: <b>godparent</b> at baptism, <b>sponsor</b> at confirmation. At an American wedding the roles are different again: <b>best man</b>, <b>maid of honor</b>, <b>groomsmen</b>, and <b>bridesmaids</b>.",
            "Así que una sola palabra en español se divide en dos: <b>godparent</b> en el bautizo, <b>sponsor</b> en la confirmación. En una boda estadounidense los papeles son otros: <b>best man</b>, <b>maid of honor</b>, <b>groomsmen</b> y <b>bridesmaids</b>.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "First Communion",
          a: [
            "The first time a child receives Communion, usually around age seven or eight, and the family celebration that goes with it.",
            "La primera vez que un niño comulga, por lo general a los siete u ocho años, y la celebración familiar que la acompaña.",
          ],
          ex: "Their daughter is making her <em>First Communion</em> in May.",
          note: [
            "Capitalized, and the verb is <b>make</b>: <em>make your First Communion</em>. Spanish often shortens it to <em>la comunión de mi hija</em>; in English keep <b>First</b>, because <em>my daughter's communion</em> alone is not clear.",
            "Va con mayúsculas y el verbo es <b>make</b>: <em>make your First Communion</em>. En español solemos decir <em>la comunión de mi hija</em>; en inglés conserva <b>First</b>, porque <em>my daughter's communion</em> a secas no queda claro.",
          ],
          tags: ["core"],
        },
        {
          q: "confession",
          a: [
            "The sacrament in which a person tells their sins to a priest and receives absolution. Formally, the sacrament of Reconciliation.",
            "El sacramento en el que una persona le dice sus pecados a un sacerdote y recibe la absolución. Formalmente, <em>the sacrament of Reconciliation</em>.",
          ],
          ex: "The parish offers <em>confession</em> on Saturday afternoons.",
          note: [
            "Spanish <em>confesarse</em> is <b>go to confession</b>, with no article and no reflexive: <span class='x'>✗</span> <em>I confessed myself</em> → <span class='ok'>✓</span> <em>I <b>went to confession</b></em>.",
            "<em>Confesarse</em> es <b>go to confession</b>, sin artículo y sin reflexivo: <span class='x'>✗</span> <em>I confessed myself</em> → <span class='ok'>✓</span> <em>I <b>went to confession</b></em>.",
          ],
          tags: [],
        },
        {
          q: "confirmation",
          a: [
            "The sacrament that completes baptism. In the US it is often received in the teenage years.",
            "El sacramento que completa el bautismo. En Estados Unidos muchas veces se recibe en la adolescencia.",
          ],
          ex: "Our son was <em>confirmed</em> last spring, so we had the whole family over.",
          note: [
            "The verb is passive: <b>to be confirmed</b>. Many people choose a saint's name for the occasion, called a <b>confirmation name</b>.",
            "El verbo va en pasiva: <b>to be confirmed</b>. Mucha gente elige el nombre de un santo para la ocasión, el <b>confirmation name</b>.",
          ],
          tags: [],
        },
        {
          q: "wedding",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "The ceremony and celebration in which two people marry. Spanish <em>boda</em>.",
            "La ceremonia y la fiesta en la que dos personas se casan: la <em>boda</em>.",
          ],
          ex: "The <em>wedding</em> is at St. Patrick's, and the reception is downtown.",
          trap: [
            "<b>Wedding</b> is the event; <b>marriage</b> is the relationship or the institution. <span class='x'>✗</span> <em>We are invited to a marriage on Saturday</em> → <span class='ok'>✓</span> <em>We are invited to a <b>wedding</b> on Saturday</em>. A wedding held within Mass is a <b>nuptial Mass</b>.",
            "<b>Wedding</b> es el evento; <b>marriage</b> es la relación o la institución. <span class='x'>✗</span> <em>We are invited to a marriage on Saturday</em> → <span class='ok'>✓</span> <em>We are invited to a <b>wedding</b> on Saturday</em>. Una boda celebrada dentro de la misa es una <b>nuptial Mass</b>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "get married in the Church",
          a: [
            "To have a Catholic wedding, as distinct from a civil ceremony only.",
            "Casarse por la Iglesia, a diferencia de casarse solo por lo civil.",
          ],
          ex: "They had a small civil ceremony first and <em>got married in the Church</em> a year later.",
          note: [
            "In the US a priest or minister can perform a wedding that is also legally valid, as long as the couple has a marriage license. Many couples therefore have one ceremony, not two as is customary in Mexico.",
            "En Estados Unidos, un sacerdote o un ministro puede celebrar una boda que además tiene validez legal, siempre que la pareja cuente con su <em>marriage license</em>. Por eso muchas parejas tienen una sola ceremonia, no dos como se acostumbra en México.",
          ],
          tags: ["idiom"],
        },
        {
          q: "annulment",
          a: [
            "A Church declaration that a marriage was not valid in the Church's terms. It is separate from a civil divorce.",
            "Declaración de la Iglesia de que un matrimonio no fue válido en términos eclesiásticos. Es independiente del divorcio civil.",
          ],
          ex: "He received an <em>annulment</em> before remarrying in the Church.",
          tags: [],
        },
        {
          q: "last rites",
          a: [
            "The everyday name for the prayers and sacraments given to a person who is close to death, including the anointing of the sick.",
            "El nombre cotidiano de las oraciones y sacramentos que recibe una persona cercana a la muerte, entre ellos la unción de los enfermos.",
          ],
          ex: "A priest came to the hospital to give her the <em>last rites</em>.",
          note: [
            "Always plural. The sacrament itself is <b>the anointing of the sick</b>, and it is also given to people who are seriously ill and expected to recover.",
            "Siempre en plural. El sacramento en sí es <b>the anointing of the sick</b>, y también se da a personas gravemente enfermas que se espera que se recuperen.",
          ],
          tags: [],
        },
        {
          q: "wake",
          a: [
            "A gathering, usually at a funeral home the day or evening before the funeral, where people pay their respects to the family. Spanish <em>velorio</em>.",
            "Reunión, por lo general en una funeraria el día o la tarde anterior al funeral, donde la gente acompaña a la familia: el <em>velorio</em>.",
          ],
          ex: "The <em>wake</em> is Thursday from four to eight, and the funeral is Friday morning.",
          note: [
            "It normally has set hours and people stay a short time, not through the night. You will also see <b>visitation</b> or <b>viewing</b> on the announcement. A <em>funeraria</em> is a <b>funeral home</b>.",
            "Normalmente tiene horario fijo y la gente se queda poco tiempo, no toda la noche. En el aviso también vas a ver <b>visitation</b> o <b>viewing</b>. Una funeraria es una <b>funeral home</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "funeral Mass",
          a: [
            "The Mass celebrated for a person who has died, normally with the casket present.",
            "La misa que se celebra por una persona que falleció, normalmente de cuerpo presente.",
          ],
          ex: "The <em>funeral Mass</em> will be at ten, followed by a lunch in the parish hall.",
          note: [
            "Friends often send a <b>Mass card</b>, a card saying that a Mass will be offered for the person. The speech given in memory of someone is a <b>eulogy</b> (YOO-luh-jee).",
            "Los amigos suelen mandar una <b>Mass card</b>, una tarjeta que avisa que se ofrecerá una misa por la persona. Las palabras que alguien dice en su memoria son un <b>eulogy</b> (IU-lo-yi).",
          ],
          tags: ["core"],
        },
        {
          q: "cemetery",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "The place where people are buried. Spanish <em>panteón</em>, <em>cementerio</em>.",
            "El lugar donde se entierra a las personas: <em>panteón</em>, <em>cementerio</em>.",
          ],
          ex: "Only the family went on to the <em>cemetery</em> after the Mass.",
          trap: [
            "Mexican <em>panteón</em> is not <em>pantheon</em>. <span class='x'>✗</span> <em>We took flowers to the pantheon</em> → <span class='ok'>✓</span> <em>We took flowers to the <b>cemetery</b></em>. In English, a <em>pantheon</em> is a group of gods or of famous figures. The act is <b>the burial</b>, and the brief ceremony there is a <b>graveside service</b>.",
            "<em>Panteón</em> no es <em>pantheon</em>. <span class='x'>✗</span> <em>We took flowers to the pantheon</em> → <span class='ok'>✓</span> <em>We took flowers to the <b>cemetery</b></em>. En inglés, un <em>pantheon</em> es un conjunto de dioses o de figuras célebres. El entierro es <b>the burial</b>, y la breve ceremonia ahí es un <b>graveside service</b>.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "be ordained",
          a: [
            "To receive holy orders and become a deacon, priest, or bishop.",
            "Recibir el orden sacerdotal y convertirse en diácono, sacerdote u obispo.",
          ],
          ex: "Her cousin will <em>be ordained</em> a priest in June.",
          note: [
            "Passive in English, where Spanish is reflexive: <em>se ordenó</em> → <b>he was ordained</b>. The event is <b>an ordination</b>, and the school is <b>a seminary</b>.",
            "En inglés va en pasiva, donde el español es reflexivo: <em>se ordenó</em> → <b>he was ordained</b>. El evento es <b>an ordination</b> y la escuela es <b>a seminary</b>.",
          ],
          tags: [],
        },
        {
          q: "quinceañera",
          a: [
            "The celebration of a girl's fifteenth birthday, often with a Mass. English borrows the Spanish word.",
            "La celebración de los quince años de una joven, muchas veces con misa. El inglés toma prestada la palabra del español.",
          ],
          ex: "We are going back to Guadalajara for my niece's <em>quinceañera</em>.",
          note: [
            "In English the word usually names the party itself. Many Americans know it; if someone does not, comparing it to a <b>sweet sixteen</b> party with a church ceremony gets the idea across.",
            "En inglés la palabra normalmente se refiere a la fiesta. Muchos estadounidenses la conocen; si alguien no, compararla con una fiesta de <b>sweet sixteen</b> con ceremonia religiosa transmite la idea.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: [
        "The Calendar & Everyday Practices",
        "El calendario y las prácticas de todos los días",
      ],
      rule: [
        "The feasts are the same ones you grew up with, but several English names are not literal translations, and none of these days is a federal holiday in the United States except Christmas.",
        "Las fiestas son las mismas con las que creciste, pero varios nombres en inglés no son traducciones literales, y ninguno de estos días es feriado federal en Estados Unidos, salvo Navidad.",
      ],
      items: [
        {
          q: "Advent",
          a: [
            "The season of preparation for Christmas, beginning four Sundays before it.",
            "El tiempo de preparación para la Navidad, que empieza cuatro domingos antes.",
          ],
          ex: "The kids light a candle on the wreath every Sunday of <em>Advent</em>.",
          note: [
            "No article: <em>during Advent</em>. You will hear <b>Advent wreath</b> and <b>Advent calendar</b>, the second of which is popular well beyond churchgoing families.",
            "Sin artículo: <em>during Advent</em>. Vas a escuchar <b>Advent wreath</b> (corona de Adviento) y <b>Advent calendar</b>, este último muy popular también entre familias que no van a la iglesia.",
          ],
          tags: [],
        },
        {
          q: "Midnight Mass",
          a: [
            "The Mass celebrated late on Christmas Eve.",
            "La misa que se celebra ya tarde en la Nochebuena: la misa de gallo.",
          ],
          ex: "We always go to <em>Midnight Mass</em> and open presents the next morning.",
          note: [
            "<em>Nochebuena</em> is <b>Christmas Eve</b>. In most American families the main celebration and the gifts come on the morning of <b>Christmas Day</b>, December 25.",
            "La Nochebuena es <b>Christmas Eve</b>. En la mayoría de las familias estadounidenses la celebración principal y los regalos son la mañana de <b>Christmas Day</b>, el 25 de diciembre.",
          ],
          tags: [],
        },
        {
          q: "Epiphany / Three Kings' Day",
          a: [
            "The feast, traditionally January 6, that recalls the visit of the wise men to the child Jesus. Spanish <em>Día de Reyes</em>.",
            "La fiesta, tradicionalmente el 6 de enero, que recuerda la visita de los sabios de Oriente al niño Jesús: el Día de Reyes.",
          ],
          ex: "In my family the children get their gifts on <em>Three Kings' Day</em>.",
          note: [
            "<span class='x'>✗</span> <em>the Magic Kings</em> → <span class='ok'>✓</span> <em>the <b>Three Kings</b></em>, <em>the <b>Three Wise Men</b></em>, or <em>the <b>Magi</b></em> (MAY-jye). The day is little observed in most of the US, so expect to explain the tradition and the <em>rosca</em>.",
            "<span class='x'>✗</span> <em>the Magic Kings</em> → <span class='ok'>✓</span> <em>the <b>Three Kings</b></em>, <em>the <b>Three Wise Men</b></em> o <em>the <b>Magi</b></em> (MEI-yai). El día se celebra poco en la mayor parte de Estados Unidos, así que cuenta con que tendrás que explicar la tradición y la rosca.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "Ash Wednesday",
          a: [
            "The first day of Lent, when Catholics receive ashes on the forehead. Spanish <em>Miércoles de Ceniza</em>.",
            "El primer día de la Cuaresma, cuando los católicos reciben la ceniza en la frente: el Miércoles de Ceniza.",
          ],
          ex: "I am stepping out at noon to get my ashes; it is <em>Ash Wednesday</em>.",
          note: [
            "It is a normal working day in the US, so colleagues often come to the office with the ashes still visible. The phrase is <b>to get ashes</b> or <b>to receive ashes</b>.",
            "Es un día laboral normal en Estados Unidos, así que es común que los colegas lleguen a la oficina con la ceniza todavía visible. La frase es <b>to get ashes</b> o <b>to receive ashes</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "Lent",
          a: [
            "The season of about forty days of prayer and self-denial before Easter. Spanish <em>Cuaresma</em>.",
            "El tiempo de unos cuarenta días de oración y sacrificio antes de la Pascua: la Cuaresma.",
          ],
          ex: "The parish has a fish dinner every Friday during <em>Lent</em>.",
          note: [
            "Capitalized and with no article: <span class='x'>✗</span> <em>in the Lent</em> → <span class='ok'>✓</span> <em><b>during Lent</b></em>. The adjective is <b>Lenten</b>. Lowercase <em>lent</em> is the past tense of <em>lend</em>.",
            "Con mayúscula y sin artículo: <span class='x'>✗</span> <em>in the Lent</em> → <span class='ok'>✓</span> <em><b>during Lent</b></em>. El adjetivo es <b>Lenten</b>. <em>Lent</em> en minúscula es el pasado de <em>lend</em> (prestar).",
          ],
          tags: ["core"],
        },
        {
          q: "give something up for Lent",
          a: [
            "To go without something you enjoy during Lent as a personal sacrifice.",
            "Privarte de algo que disfrutas durante la Cuaresma como sacrificio personal.",
          ],
          ex: "No dessert for me, thanks; I <em>gave up</em> sugar <em>for Lent</em>.",
          note: [
            "A very common small-talk topic, and people ask it lightly: <em>What are you giving up for Lent?</em>",
            "Es un tema muy común de plática casual, y la gente lo pregunta con ligereza: <em>What are you giving up for Lent?</em>",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "fast / abstain",
          a: [
            "To fast is to eat much less than usual; to abstain is to go without one thing, in this context meat.",
            "<em>To fast</em> es comer mucho menos de lo normal (ayunar); <em>to abstain</em> es privarte de una cosa, en este contexto de la carne.",
          ],
          ex: "Many Catholics <em>fast</em> on Ash Wednesday and <em>abstain</em> from meat on Fridays in Lent.",
          note: [
            "<b>Fast</b> is both the verb and the noun, and <em>ayuno</em> as an activity is <b>fasting</b>. The preposition is <b>abstain from</b>.",
            "<b>Fast</b> es verbo y sustantivo, y el ayuno como actividad es <b>fasting</b>. La preposición es <b>abstain from</b>.",
          ],
          tags: [],
        },
        {
          q: "Holy Week",
          hint: ["(same words, different week)", "(mismas palabras, otra semana)"],
          a: [
            "The week before Easter, from Palm Sunday through Holy Saturday. Spanish <em>Semana Santa</em>.",
            "La semana anterior a la Pascua, del Domingo de Ramos al Sábado Santo: la Semana Santa.",
          ],
          ex: "Our Mexico office is closed for part of <em>Holy Week</em>, so let's meet the week before.",
          note: [
            "In the US it is a religious term, not a vacation period, and offices work as usual. The school break called <b>spring break</b> may or may not fall in the same week. <em>Domingo de Ramos</em> is <b>Palm Sunday</b> and <em>Jueves Santo</em> is <b>Holy Thursday</b>.",
            "En Estados Unidos es un término religioso, no un periodo vacacional, y las oficinas trabajan normal. Las vacaciones escolares llamadas <b>spring break</b> pueden caer o no en esa misma semana. El Domingo de Ramos es <b>Palm Sunday</b> y el Jueves Santo es <b>Holy Thursday</b>.",
          ],
          tags: ["core", "falsefriend"],
        },
        {
          q: "Good Friday",
          a: [
            "The Friday before Easter, which commemorates the crucifixion of Jesus. Spanish <em>Viernes Santo</em>.",
            "El viernes anterior a la Pascua, que conmemora la crucifixión de Jesús: el Viernes Santo.",
          ],
          ex: "The markets are closed on <em>Good Friday</em>, but our office is open.",
          trap: [
            "<span class='x'>✗</span> <em>Holy Friday</em> → <span class='ok'>✓</span> <em><b>Good</b> Friday</em>. The pattern changes within the same week: <b>Holy Thursday</b>, <b>Good Friday</b>, <b>Holy Saturday</b>. It is not a federal holiday, although the US stock markets and some employers close.",
            "<span class='x'>✗</span> <em>Holy Friday</em> → <span class='ok'>✓</span> <em><b>Good</b> Friday</em>. El patrón cambia dentro de la misma semana: <b>Holy Thursday</b>, <b>Good Friday</b>, <b>Holy Saturday</b>. No es feriado federal, aunque las bolsas de Estados Unidos y algunas empresas cierran.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "Easter",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "The celebration of the resurrection of Jesus, and the Sunday on which it falls. Spanish <em>Pascua</em>, <em>Domingo de Resurrección</em>.",
            "La celebración de la resurrección de Jesús, y el domingo en que cae: la Pascua, el Domingo de Resurrección.",
          ],
          ex: "Are you doing anything special for <em>Easter</em>?",
          trap: [
            "Spanish <em>Pascua</em> is <b>Easter</b>, not <em>Passover</em>. <b>Passover</b> is the Jewish holiday (<em>Pésaj</em>), which falls around the same time. <span class='x'>✗</span> <em>Happy Passover</em> to a Christian colleague → <span class='ok'>✓</span> <em>Happy <b>Easter</b></em>.",
            "<em>Pascua</em> es <b>Easter</b>, no <em>Passover</em>. <b>Passover</b> es la fiesta judía (Pésaj), que cae por las mismas fechas. <span class='x'>✗</span> <em>Happy Passover</em> a un colega cristiano → <span class='ok'>✓</span> <em>Happy <b>Easter</b></em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "holy day of obligation",
          a: [
            "A day other than Sunday on which Catholics are expected to attend Mass, such as Christmas or All Saints' Day.",
            "Un día distinto del domingo en el que se espera que los católicos vayan a misa, como Navidad o el Día de Todos los Santos: una fiesta de guardar.",
          ],
          ex: "Tomorrow is a <em>holy day of obligation</em>, so I am going to the early Mass before work.",
          note: [
            "The list is set country by country, so the days in the US are not exactly the ones you know from Mexico.",
            "La lista se define país por país, así que los días en Estados Unidos no son exactamente los que conoces de México.",
          ],
          tags: [],
        },
        {
          q: "feast day",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "The day on the Church calendar that honors a saint or an event. Spanish <em>fiesta</em>, <em>día de</em>.",
            "El día del calendario de la Iglesia dedicado a un santo o a un acontecimiento: la fiesta, el día de.",
          ],
          ex: "December 12 is the <em>feast day</em> of Our Lady of Guadalupe.",
          note: [
            "<b>Feast</b> here does not imply a meal or a party; it is the religious observance. The saint who protects a place or a profession is its <b>patron saint</b>. <em>La Virgen de Guadalupe</em> is <b>Our Lady of Guadalupe</b>.",
            "<b>Feast</b> aquí no implica banquete ni fiesta; es la celebración religiosa. El santo que protege un lugar o una profesión es su <b>patron saint</b>. La Virgen de Guadalupe es <b>Our Lady of Guadalupe</b>.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "name day",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "The feast day of the saint a person is named after. Spanish <em>mi santo</em>, <em>día de mi santo</em>.",
            "La fiesta del santo cuyo nombre lleva una persona: <em>mi santo</em>, el día de mi santo.",
          ],
          ex: "In Mexico, some families celebrate your <em>name day</em> as well as your birthday.",
          note: [
            "<span class='x'>✗</span> <em>Today is my saint</em> → <span class='ok'>✓</span> <em>Today is my <b>name day</b></em> or <em>my <b>saint's day</b></em>. Most Americans do not observe name days, so add a sentence of explanation.",
            "<span class='x'>✗</span> <em>Today is my saint</em> → <span class='ok'>✓</span> <em>Today is my <b>name day</b></em> o <em>my <b>saint's day</b></em>. La mayoría de los estadounidenses no celebra el santo, así que agrega una frase de explicación.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "rosary",
          a: [
            "A set of prayers counted on a string of beads, and the beads themselves. Spanish <em>rosario</em>.",
            "Conjunto de oraciones que se cuentan en una sarta de cuentas, y las cuentas mismas: el rosario.",
          ],
          ex: "My mother <em>prays the rosary</em> every evening.",
          note: [
            "The verbs are <b>pray</b> or <b>say</b>: <em>pray the rosary</em>, <em>say the rosary</em>. The individual prayers are the <b>Our Father</b> and the <b>Hail Mary</b>.",
            "Los verbos son <b>pray</b> o <b>say</b>: <em>pray the rosary</em>, <em>say the rosary</em>. Las oraciones individuales son el <b>Our Father</b> (padrenuestro) y el <b>Hail Mary</b> (avemaría).",
          ],
          tags: [],
        },
        {
          q: "novena",
          a: [
            "Nine consecutive days of prayer for a particular intention. Same word as in Spanish.",
            "Nueve días seguidos de oración por una intención particular. La misma palabra que en español.",
          ],
          ex: "The family is praying a <em>novena</em> for her recovery.",
          note: [
            "The Mexican custom of nine evenings of rosaries after a death is unfamiliar to many Americans. A clear way to put it: <em>nine days of prayer for him after the funeral</em>.",
            "La costumbre mexicana del novenario después de un fallecimiento no es conocida para muchos estadounidenses. Una forma clara de decirlo: <em>nine days of prayer for him after the funeral</em>.",
          ],
          tags: [],
        },
        {
          q: "say a prayer",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "To pray, usually briefly. Spanish <em>rezar</em>, <em>hacer una oración</em>.",
            "Rezar, por lo general de forma breve: hacer una oración.",
          ],
          ex: "Please <em>say a prayer</em> for my dad; his surgery is tomorrow.",
          note: [
            "Spanish <em>oración</em> is <b>prayer</b>, not <em>oration</em>, which is a formal speech. English also has one verb, <b>pray</b>, for both <em>rezar</em> and <em>orar</em>. You pray <b>for</b> a person and <b>to</b> God or a saint.",
            "<em>Oración</em> es <b>prayer</b>, no <em>oration</em>, que es un discurso solemne. Además, el inglés tiene un solo verbo, <b>pray</b>, para <em>rezar</em> y <em>orar</em>. Rezas <b>for</b> una persona y <b>to</b> Dios o un santo.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "Hail Mary",
          hint: ["(prayer and idiom)", "(oración y modismo)"],
          a: [
            "The prayer to the Virgin Mary; and, in everyday American English, a last attempt with little chance of success.",
            "El avemaría; y, en el inglés cotidiano de Estados Unidos, un último intento con pocas probabilidades de éxito.",
          ],
          ex: "The proposal was a <em>Hail Mary</em>, but the client said yes.",
          note: [
            "The idiom comes from American football, where a <b>Hail Mary pass</b> is a long throw at the very end of a game. You will hear it in business meetings from people of any background.",
            "El modismo viene del futbol americano, donde un <b>Hail Mary pass</b> es un pase largo al final del partido. Lo vas a escuchar en juntas de trabajo, de gente de cualquier origen.",
          ],
          tags: ["idiom"],
        },
      ],
    },
    {
      title: ["Catholic Life in the United States", "La vida católica en Estados Unidos"],
      rule: [
        "In the US, Catholics are one religious community among many, so people often describe their relationship to the Church with a short label. These are the labels and the everyday institutions you will hear about.",
        "En Estados Unidos los católicos son una comunidad religiosa entre muchas, así que la gente suele describir su relación con la Iglesia con una etiqueta breve. Estas son las etiquetas y las instituciones cotidianas de las que vas a oír hablar.",
      ],
      items: [
        {
          q: "raised Catholic",
          a: [
            "Brought up in a Catholic family. It describes background and says nothing about present practice.",
            "Criado en una familia católica. Describe el origen y no dice nada sobre la práctica actual.",
          ],
          ex: "I was <em>raised Catholic</em>, so the service felt very familiar.",
          note: [
            "A useful, neutral way to answer a question about religion without going into detail. Also <b>I grew up Catholic</b>.",
            "Una forma útil y neutral de responder a una pregunta sobre religión sin entrar en detalles. También <b>I grew up Catholic</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "cradle Catholic",
          a: [
            "A person who was baptized as a baby and raised in the Church, as opposed to someone who joined as an adult.",
            "Persona bautizada de bebé y criada en la Iglesia, a diferencia de quien se integró de adulto.",
          ],
          ex: "My husband is a convert, but I am a <em>cradle Catholic</em>.",
          tags: ["idiom"],
        },
        {
          q: "practicing",
          a: [
            "Actively living the faith: going to Mass and receiving the sacraments. Spanish <em>practicante</em>.",
            "Que vive activamente la fe: va a misa y recibe los sacramentos. En español, <em>practicante</em>.",
          ],
          ex: "She is a <em>practicing</em> Catholic and never schedules meetings on Sunday morning.",
          note: [
            "It goes before the noun: <b>a practicing Catholic</b>. The opposite people use about themselves is <b>non-practicing</b> or <b>not practicing</b>.",
            "Va antes del sustantivo: <b>a practicing Catholic</b>. Lo contrario, cuando la gente habla de sí misma, es <b>non-practicing</b> o <b>not practicing</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "lapsed",
          a: [
            "Said of a person who was raised Catholic and no longer practices.",
            "Se dice de quien fue criado como católico y ya no practica.",
          ],
          ex: "He describes himself as a <em>lapsed</em> Catholic.",
          note: [
            "People use it about themselves. About someone else, <b>raised Catholic</b> or <b>not practicing</b> is the safer choice.",
            "La gente la usa para hablar de sí misma. Para hablar de alguien más, <b>raised Catholic</b> o <b>not practicing</b> es la opción más segura.",
          ],
          tags: [],
        },
        {
          q: "devout",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "Deeply committed to one's religion. An adjective, used for any faith.",
            "Profundamente comprometido con su religión. Es adjetivo y se usa para cualquier fe.",
          ],
          ex: "His parents are <em>devout</em> Catholics and go to Mass every morning.",
          trap: [
            "Spanish <em>devoto de</em> a saint does not become <em>devout of</em>. <span class='x'>✗</span> <em>She is a devout of St. Jude</em> → <span class='ok'>✓</span> <em>She <b>has a devotion to</b> St. Jude</em>. And <b>devotee</b> in English is mostly used for fans of a hobby, an artist, or a brand.",
            "<em>Devoto de</em> un santo no se convierte en <em>devout of</em>. <span class='x'>✗</span> <em>She is a devout of St. Jude</em> → <span class='ok'>✓</span> <em>She <b>has a devotion to</b> St. Jude</em>. Y <b>devotee</b> en inglés se usa sobre todo para aficionados a un pasatiempo, un artista o una marca.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "convert",
          a: [
            "A person who joined the Church as an adult; also the verb.",
            "Persona que se integró a la Iglesia de adulta; también es el verbo.",
          ],
          ex: "She <em>converted</em> to Catholicism before they got married.",
          note: [
            "The stress moves: the noun is <b>CON-vert</b>, the verb is <b>con-VERT</b>. The verb is not reflexive and takes <b>to</b>: <em>se convirtió al catolicismo</em> → <em>he converted to Catholicism</em>.",
            "El acento cambia: el sustantivo es <b>CON-vert</b>, el verbo es <b>con-VERT</b>. El verbo no es reflexivo y lleva <b>to</b>: <em>se convirtió al catolicismo</em> → <em>he converted to Catholicism</em>.",
          ],
          tags: [],
        },
        {
          q: "Catholic school / parochial school",
          a: [
            "A private school run by the Church. A parochial school is specifically one run by a parish.",
            "Escuela privada administrada por la Iglesia. Una <em>parochial school</em> es específicamente la que depende de una parroquia.",
          ],
          ex: "All three of their kids went to <em>Catholic school</em> through twelfth grade.",
          note: [
            "No article when you mean the experience: <em>I went to Catholic school</em>. Families of other religions, or of none, also send their children to them.",
            "Sin artículo cuando hablas de la experiencia: <em>I went to Catholic school</em>. También familias de otras religiones, o de ninguna, mandan ahí a sus hijos.",
          ],
          tags: ["core"],
        },
        {
          q: "CCD",
          hint: ["(religious education)", "(catecismo)"],
          a: [
            "Weekly religion classes at the parish for children who attend non-Catholic schools. Spanish <em>catecismo</em>, <em>doctrina</em>.",
            "Clases semanales de religión en la parroquia para niños que van a escuelas no católicas: el catecismo, la doctrina.",
          ],
          ex: "I can't do Wednesday evening; I drive the kids to <em>CCD</em>.",
          note: [
            "The letters stand for Confraternity of Christian Doctrine, and they are said one by one. Many parishes now call the program <b>religious education</b> or <b>faith formation</b>.",
            "Las siglas son de <em>Confraternity of Christian Doctrine</em> y se dicen letra por letra. Muchas parroquias ahora le llaman <b>religious education</b> o <b>faith formation</b>.",
          ],
          tags: ["acronym"],
        },
        {
          q: "Catholic university",
          a: [
            "A college or university founded by the Church or by a religious order, such as Georgetown, Notre Dame, or Boston College.",
            "Universidad fundada por la Iglesia o por una orden religiosa, como Georgetown, Notre Dame o Boston College.",
          ],
          ex: "He did his MBA at a <em>Catholic university</em> in the Midwest.",
          note: [
            "You will hear <b>Jesuit</b> (JEZH-oo-it) often in this context: a <em>Jesuit school</em> is one founded by the Society of Jesus. Students and faculty come from every background.",
            "En este contexto vas a escuchar mucho <b>Jesuit</b> (YESH-u-it): una <em>Jesuit school</em> es la fundada por la Compañía de Jesús. Los estudiantes y profesores vienen de todo tipo de orígenes.",
          ],
          tags: [],
        },
        {
          q: "fish on Fridays",
          a: [
            "The custom of not eating meat on Fridays, observed by many American Catholics during Lent.",
            "La costumbre de no comer carne los viernes, que muchos católicos estadounidenses siguen durante la Cuaresma.",
          ],
          ex: "The cafeteria always has <em>fish on Fridays</em> during Lent.",
          note: [
            "In many cities, parishes hold a <b>fish fry</b> on Lenten Fridays: an inexpensive community dinner that is open to everyone.",
            "En muchas ciudades las parroquias organizan un <b>fish fry</b> los viernes de Cuaresma: una cena comunitaria económica y abierta a todos.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Irish Catholic",
          hint: ["(heritage label)", "(etiqueta de origen)"],
          a: [
            "A label that combines family origin and religion. The same pattern gives Italian Catholic, Polish Catholic, and others.",
            "Etiqueta que combina origen familiar y religión. Con el mismo patrón se dice <em>Italian Catholic</em>, <em>Polish Catholic</em> y otras.",
          ],
          ex: "I grew up in a big <em>Irish Catholic</em> family in Boston.",
          note: [
            "It describes heritage and upbringing more than current practice. Many older city parishes were founded by one immigrant community and still carry that identity.",
            "Describe el origen y la crianza más que la práctica actual. Muchas parroquias antiguas de las ciudades fueron fundadas por una comunidad inmigrante y aún conservan esa identidad.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: [
        "At Work — Talking About Religion Gracefully",
        "En el trabajo: hablar de religión con tacto",
      ],
      rule: [
        "In American workplaces religion is treated as personal. People mention it in passing, and the courteous move is to follow their lead: answer what is offered, ask open questions, and leave room for the other person not to answer.",
        "En los lugares de trabajo en Estados Unidos, la religión se considera algo personal. La gente la menciona de paso, y lo cortés es seguir su pauta: responde a lo que te comparten, haz preguntas abiertas y deja espacio para que la otra persona no conteste.",
      ],
      items: [
        {
          q: "faith",
          a: [
            "A person's religion or religious belief. The most neutral everyday word. Spanish <em>fe</em>.",
            "La religión o la creencia religiosa de una persona. Es la palabra cotidiana más neutral: <em>fe</em>.",
          ],
          ex: "Her <em>faith</em> is very important to her, so she takes Good Friday off every year.",
          note: [
            "Useful combinations: <b>a person of faith</b>, <b>people of all faiths</b>, <b>my faith</b>. It works for any religion, which is why it is so common in professional settings.",
            "Combinaciones útiles: <b>a person of faith</b>, <b>people of all faiths</b>, <b>my faith</b>. Funciona para cualquier religión, y por eso es tan común en entornos profesionales.",
          ],
          tags: ["core"],
        },
        {
          q: "I'm not very religious",
          a: [
            "A polite, low-key way to say that religion is not a large part of your life.",
            "Una forma cortés y discreta de decir que la religión no ocupa un lugar grande en tu vida.",
          ],
          ex: "<em>I'm not very religious</em>, but I always go to Mass with my family at Christmas.",
          note: [
            "<b>Religious</b> is an adjective here, so no article: <span class='x'>✗</span> <em>I'm not a religious</em>. Spanish <em>no soy creyente</em> is most naturally <b>I'm not religious</b>.",
            "<b>Religious</b> aquí es adjetivo, así que va sin artículo: <span class='x'>✗</span> <em>I'm not a religious</em>. <em>No soy creyente</em> se dice de forma más natural <b>I'm not religious</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "Do you celebrate Christmas?",
          a: [
            "An open, courteous way to learn about someone's traditions without asking them to name their religion.",
            "Una forma abierta y cortés de conocer las tradiciones de alguien sin pedirle que diga cuál es su religión.",
          ],
          ex: "<em>Do you celebrate Christmas</em>, or do you have other plans for the break?",
          note: [
            "A direct <em>What religion are you?</em> can feel intrusive at work. Asking what someone <b>celebrates</b> or <b>observes</b> lets them say as much or as little as they like.",
            "Un <em>What religion are you?</em> directo puede sentirse invasivo en el trabajo. Preguntar qué <b>celebrates</b> u <b>observes</b> la persona le permite decir tanto o tan poco como quiera.",
          ],
          tags: ["core"],
        },
        {
          q: "observe",
          a: [
            "To keep a religious day or practice. A neutral verb that works for every tradition.",
            "Guardar un día o una práctica religiosa. Es un verbo neutral que funciona para todas las tradiciones.",
          ],
          ex: "A few people on the team <em>observe</em> Lent, so let's offer a meatless option on Friday.",
          note: [
            "The noun is <b>observance</b> and the adjective is <b>observant</b>: <em>an observant Catholic</em>. This is the vocabulary HR policies use.",
            "El sustantivo es <b>observance</b> y el adjetivo es <b>observant</b>: <em>an observant Catholic</em>. Es el vocabulario que usan las políticas de Recursos Humanos.",
          ],
          tags: [],
        },
        {
          q: "I'm so sorry for your loss",
          a: [
            "The standard expression of condolence. It fits any relationship and any religion.",
            "La expresión estándar de pésame. Funciona con cualquier relación y con cualquier religión.",
          ],
          ex: "<em>I'm so sorry for your loss</em>; your mother was a wonderful person.",
          note: [
            "This is the natural English for <em>mi más sentido pésame</em>. <em>My condolences</em> is correct but more formal and mostly written. Note the noun: <b>loss</b>, not <em>lost</em>.",
            "Es la forma natural en inglés de <em>mi más sentido pésame</em>. <em>My condolences</em> es correcto, pero más formal y sobre todo escrito. Fíjate en el sustantivo: <b>loss</b>, no <em>lost</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "You're in my prayers",
          a: [
            "A warm expression of support for someone going through a difficult time.",
            "Una expresión cálida de apoyo para alguien que está pasando por un momento difícil.",
          ],
          ex: "I heard about the surgery; <em>you're in my prayers</em>.",
          note: [
            "Best with people you know to be religious. With someone whose beliefs you do not know, <b>I'm thinking of you</b> carries the same warmth.",
            "Va mejor con personas que sabes que son religiosas. Con alguien cuyas creencias no conoces, <b>I'm thinking of you</b> transmite la misma calidez.",
          ],
          tags: [],
        },
        {
          q: "Happy holidays",
          a: [
            "The December greeting that includes everyone, whatever they celebrate.",
            "El saludo de diciembre que incluye a todos, celebren lo que celebren.",
          ],
          ex: "<em>Happy holidays</em>, everyone; see you in January.",
          note: [
            "<b>Merry Christmas</b> is equally common and is natural when you know the person celebrates it. In group emails and with clients you do not know well, <b>Happy holidays</b> is the usual choice.",
            "<b>Merry Christmas</b> es igual de común y es natural cuando sabes que la persona la celebra. En correos grupales y con clientes que no conoces bien, lo habitual es <b>Happy holidays</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "God willing",
          hint: ["(carries more weight in English)", "(pesa más en inglés)"],
          a: [
            "If God permits. The literal equivalent of <em>si Dios quiere</em> or <em>primero Dios</em>.",
            "Si Dios lo permite. Es el equivalente literal de <em>si Dios quiere</em> o <em>primero Dios</em>.",
          ],
          ex: "We will see you at the wedding in June, <em>God willing</em>.",
          note: [
            "In Mexican Spanish these phrases are everyday speech. In American professional English, <b>God willing</b> is heard as a clear statement of faith, so in a status meeting most people say <b>hopefully</b> or <b>if all goes well</b>. The same goes for <em>gracias a Dios</em>: <b>thankfully</b> is the neutral version of <b>thank God</b>.",
            "En el español de México estas frases son habla de todos los días. En el inglés profesional de Estados Unidos, <b>God willing</b> se escucha como una declaración clara de fe, así que en una junta de avances la mayoría dice <b>hopefully</b> o <b>if all goes well</b>. Lo mismo pasa con <em>gracias a Dios</em>: <b>thankfully</b> es la versión neutral de <b>thank God</b>.",
          ],
          tags: ["falsefriend", "idiom"],
        },
        {
          q: "religious observance",
          a: [
            "The formal workplace term for time taken to keep a religious day or practice.",
            "El término formal en el trabajo para el tiempo que se toma con el fin de guardar un día o una práctica religiosa.",
          ],
          ex: "I will be out Friday afternoon for a <em>religious observance</em>.",
          note: [
            "You do not need to explain further. The related HR term is <b>religious accommodation</b>: an adjustment to a schedule or a rule for religious reasons.",
            "No necesitas explicar más. El término relacionado en Recursos Humanos es <b>religious accommodation</b>: un ajuste de horario o de una regla por motivos religiosos.",
          ],
          tags: [],
        },
        {
          q: "I'd rather not get into religion",
          a: [
            "A polite way to step out of a conversation that is becoming a debate.",
            "Una forma cortés de salirte de una conversación que se está volviendo debate.",
          ],
          ex: "<em>I'd rather not get into religion</em> at lunch, but I would love to hear about your trip.",
          note: [
            "Follow it with a change of subject, as in the example, and it lands as friendly. <b>Get into</b> here means to start discussing in depth.",
            "Acompáñala con un cambio de tema, como en el ejemplo, y se recibe de forma amistosa. <b>Get into</b> aquí significa empezar a discutir a fondo.",
          ],
          tags: ["idiom"],
        },
      ],
    },
  ],
  cheat: [
    [
      ["MASS", "MASS"],
      [
        "Capital M, no article: you <b>go to Mass</b>, and the priest <b>says</b> or <b>celebrates</b> it.",
        "M mayúscula y sin artículo: <b>go to Mass</b>, y el sacerdote la <b>says</b> o la <b>celebrates</b>.",
      ],
    ],
    [
      ["ATTEND, NOT ASSIST", "ATTEND, NO ASSIST"],
      [
        "<em>Asistir a misa</em> is <b>attend Mass</b>; <em>assist</em> means to help.",
        "<em>Asistir a misa</em> es <b>attend Mass</b>; <em>assist</em> significa ayudar.",
      ],
    ],
    [
      ["PRIEST VS. FATHER", "PRIEST Y FATHER"],
      [
        "<b>Priest</b> is the job; <b>Father</b> is the title and what you call him.",
        "<b>Priest</b> es el oficio; <b>Father</b> es el título y la forma de dirigirte a él.",
      ],
    ],
    [
      ["PARISH VS. PAROCHIAL", "PARISH Y PAROCHIAL"],
      [
        "<em>Parroquia</em> is <b>parish</b>; outside <b>parochial school</b>, <em>parochial</em> means narrow in outlook.",
        "<em>Parroquia</em> es <b>parish</b>; fuera de <b>parochial school</b>, <em>parochial</em> significa de miras estrechas.",
      ],
    ],
    [
      ["RECEIVE COMMUNION", "RECEIVE COMMUNION"],
      [
        "<em>Comulgar</em> has no single verb: say <b>receive Communion</b> or <b>take Communion</b>.",
        "<em>Comulgar</em> no tiene un verbo único: di <b>receive Communion</b> o <b>take Communion</b>.",
      ],
    ],
    [
      ["WEDDING VS. MARRIAGE", "WEDDING Y MARRIAGE"],
      [
        "You are invited to a <b>wedding</b>; the <b>marriage</b> is what comes after.",
        "Te invitan a una <b>wedding</b>; el <b>marriage</b> es lo que viene después.",
      ],
    ],
    [
      ["GOOD FRIDAY, EASTER", "GOOD FRIDAY, EASTER"],
      [
        "<em>Viernes Santo</em> is <b>Good Friday</b> and <em>Pascua</em> is <b>Easter</b>, never <em>Passover</em>.",
        "El Viernes Santo es <b>Good Friday</b> y la Pascua es <b>Easter</b>, nunca <em>Passover</em>.",
      ],
    ],
    [
      ["FOLLOW THEIR LEAD", "SIGUE SU PAUTA"],
      [
        "At work, let the other person bring religion up, and ask what they <b>celebrate</b>, not what they are.",
        "En el trabajo, deja que la otra persona saque el tema, y pregunta qué <b>celebrates</b>, no qué es.",
      ],
    ],
  ],
};
