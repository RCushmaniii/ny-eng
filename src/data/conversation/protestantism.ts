// Talking About Protestant Christianity in English — bilingual vocabulary bank (EN + es-MX, tú).
// Neutrality rule for this file: describe what terms mean and how things are practiced.
// Never evaluate any belief, church, or tradition. Where groups differ, state the
// difference plainly and in parallel. This is a vocabulary and culture briefing,
// not theology and not persuasion.

import type { TopicBank } from "./types";

export const bank: TopicBank = {
  groups: [
    {
      title: ["The Big Picture — Families of Churches", "El panorama: las familias de iglesias"],
      rule: [
        "Protestant Christianity in the US is not one church but many, grouped into families called denominations. Americans usually name the specific one, so the first skill is recognizing the names and the two or three umbrella words that sit above them.",
        "El cristianismo protestante en Estados Unidos no es una sola iglesia sino muchas, agrupadas en familias llamadas <em>denominations</em>. Los estadounidenses casi siempre mencionan la suya en específico, así que lo primero es reconocer los nombres y las dos o tres palabras generales que están por encima de ellos.",
      ],
      items: [
        {
          q: "Protestant",
          a: [
            "A Christian who belongs to one of the churches that trace their origins to the Reformation of the sixteenth century; also the adjective.",
            "Cristiano que pertenece a alguna de las iglesias cuyo origen se remonta a la Reforma del siglo XVI; también es el adjetivo.",
          ],
          ex: "My wife grew up <em>Protestant</em> and I grew up Catholic.",
          note: [
            "Capitalized, with the stress on the first syllable: <b>PROT-uh-stunt</b>. Americans use it mostly as a category; about themselves they tend to name the church: <em>I'm Methodist</em>.",
            "Va con mayúscula y con el acento en la primera sílaba: <b>PRO-tes-tant</b>. Los estadounidenses la usan sobre todo como categoría; al hablar de sí mismos suelen nombrar la iglesia: <em>I'm Methodist</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "Christian",
          hint: ["(false friend in usage)", "(falso amigo en el uso)"],
          a: [
            "A follower of Jesus Christ. The word covers Catholics, Protestants, and Orthodox alike.",
            "Seguidor de Jesucristo. La palabra abarca por igual a católicos, protestantes y ortodoxos.",
          ],
          ex: "They are a <em>Christian</em> family and very active in their church.",
          trap: [
            "In Mexico, <em>cristiano</em> often means specifically non-Catholic. Carried into English it produces <span class='x'>✗</span> <em>He isn't Catholic, he's Christian</em> → <span class='ok'>✓</span> <em>He isn't Catholic, he's <b>Protestant</b></em>, or name the church. Be aware that many American evangelicals also say <em>I'm a Christian</em> to describe their own tradition, so listen for which sense the speaker means.",
            "En México, <em>cristiano</em> muchas veces quiere decir específicamente no católico. Llevado al inglés produce <span class='x'>✗</span> <em>He isn't Catholic, he's Christian</em> → <span class='ok'>✓</span> <em>He isn't Catholic, he's <b>Protestant</b></em>, o nombra la iglesia. Ten presente que muchos evangélicos estadounidenses también dicen <em>I'm a Christian</em> para describir su propia tradición, así que pon atención a qué sentido le da quien habla.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "denomination",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "An organized family of churches with a shared name, history, and structure, such as the Methodists or the Lutherans.",
            "Familia organizada de iglesias con nombre, historia y estructura en común, como los metodistas o los luteranos.",
          ],
          ex: "The two churches belong to different <em>denominations</em> but run the food bank together.",
          note: [
            "The courteous question is <em>What denomination is your church?</em> In banking, <b>denomination</b> is also the face value of a bill, which is the sense you may already know.",
            "La pregunta cortés es <em>What denomination is your church?</em> En el mundo bancario, <b>denomination</b> también es el valor nominal de un billete, que quizá sea el sentido que ya conoces.",
          ],
          tags: ["core"],
        },
        {
          q: "mainline",
          a: [
            "The label for the long-established Protestant denominations, among them the United Methodist Church, the Episcopal Church, the Presbyterian Church (USA), and the Evangelical Lutheran Church in America.",
            "La etiqueta para las denominaciones protestantes de más larga tradición, entre ellas la <em>United Methodist Church</em>, la <em>Episcopal Church</em>, la <em>Presbyterian Church (USA)</em> y la <em>Evangelical Lutheran Church in America</em>.",
          ],
          ex: "She was raised in a <em>mainline</em> Protestant church in Ohio.",
          note: [
            "A term from journalism and sociology more than from church life. Members usually just give the name of their denomination.",
            "Es un término del periodismo y la sociología más que de la vida de las iglesias. Sus miembros normalmente solo dicen el nombre de su denominación.",
          ],
          tags: [],
        },
        {
          q: "evangelical",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "In the US, a broad Protestant movement found across many denominations that emphasizes personal conversion, the authority of the Bible, and sharing the faith with others.",
            "En Estados Unidos, un amplio movimiento protestante presente en muchas denominaciones, que pone el énfasis en la conversión personal, la autoridad de la Biblia y el compartir la fe con los demás.",
          ],
          ex: "Most of the churches in that part of the state are <em>evangelical</em>.",
          trap: [
            "In Mexico, <em>evangélico</em> is used for almost any non-Catholic Christian. In the US, <b>evangelical</b> is narrower: <span class='x'>✗</span> <em>She's Episcopalian, so she's evangelical</em> → <span class='ok'>✓</span> <em>She's Episcopalian, so she's <b>Protestant</b></em>. The news also uses <em>evangelicals</em> as a label for a group of voters, which is a separate sense from the religious one.",
            "En México, <em>evangélico</em> se usa para casi cualquier cristiano no católico. En Estados Unidos, <b>evangelical</b> es más acotado: <span class='x'>✗</span> <em>She's Episcopalian, so she's evangelical</em> → <span class='ok'>✓</span> <em>She's Episcopalian, so she's <b>Protestant</b></em>. Las noticias también usan <em>evangelicals</em> como etiqueta de un grupo de votantes, que es un sentido aparte del religioso.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "nondenominational",
          a: [
            "Describes an independent church that does not belong to any denomination.",
            "Describe a una iglesia independiente que no pertenece a ninguna denominación.",
          ],
          ex: "We go to a <em>nondenominational</em> church near the airport.",
          note: [
            "Many such churches have names with no label at all, like <em>Grace Community Church</em> or <em>Crossroads</em>. People often shorten it: <em>We're nondenominational</em>.",
            "Muchas de estas iglesias tienen nombres sin ninguna etiqueta, como <em>Grace Community Church</em> o <em>Crossroads</em>. La gente suele acortarlo: <em>We're nondenominational</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "Baptist",
          a: [
            "A family of churches that baptize people who are old enough to profess their own faith, by full immersion in water, and in which each congregation governs itself.",
            "Familia de iglesias que bautizan a personas con edad suficiente para profesar su propia fe, por inmersión total en agua, y en la que cada congregación se gobierna a sí misma.",
          ],
          ex: "He is a deacon at the First <em>Baptist</em> Church downtown.",
          note: [
            "The largest Baptist body is the <b>Southern Baptist Convention</b>. <em>First</em> in a church name, as in <em>First Baptist</em> or <em>First Presbyterian</em>, simply means it was the first of its kind founded in that town.",
            "El grupo bautista más grande es la <b>Southern Baptist Convention</b>. <em>First</em> en el nombre de una iglesia, como en <em>First Baptist</em> o <em>First Presbyterian</em>, simplemente quiere decir que fue la primera de su tipo fundada en esa ciudad.",
          ],
          tags: [],
        },
        {
          q: "Methodist",
          a: [
            "A family of churches that grew out of the eighteenth-century movement led by John Wesley in England.",
            "Familia de iglesias que surgió del movimiento encabezado por John Wesley en Inglaterra en el siglo XVIII.",
          ],
          ex: "The <em>Methodist</em> church on our street runs a preschool.",
          tags: [],
        },
        {
          q: "Lutheran",
          a: [
            "A family of churches that follow the tradition begun by Martin Luther in sixteenth-century Germany.",
            "Familia de iglesias que siguen la tradición iniciada por Martín Lutero en la Alemania del siglo XVI.",
          ],
          ex: "A lot of my colleagues in Minneapolis are <em>Lutheran</em>.",
          note: [
            "Especially common in the Upper Midwest, where many families have German or Scandinavian roots.",
            "Es especialmente común en el norte del Medio Oeste, donde muchas familias tienen raíces alemanas o escandinavas.",
          ],
          tags: [],
        },
        {
          q: "Presbyterian",
          a: [
            "A family of churches in the Reformed tradition, with roots in Scotland, governed by elected elders.",
            "Familia de iglesias de tradición reformada, con raíces en Escocia, gobernadas por ancianos (<em>elders</em>) electos.",
          ],
          ex: "They were married in a <em>Presbyterian</em> church in Pittsburgh.",
          note: [
            "Pronunciation: <b>prez-buh-TEER-ee-un</b>. The name comes from the Greek word for elder.",
            "Pronunciación: <b>pres-bi-TÍ-ri-an</b>. El nombre viene de la palabra griega para anciano.",
          ],
          tags: [],
        },
        {
          q: "Episcopal / Episcopalian",
          a: [
            "The Episcopal Church is the member church of the worldwide Anglican Communion in the United States. A member is an Episcopalian.",
            "La <em>Episcopal Church</em> es la iglesia de la Comunión Anglicana mundial en Estados Unidos. Un miembro es un <em>Episcopalian</em>.",
          ],
          ex: "Her father is an <em>Episcopalian</em> and sings in the choir at St. John's.",
          trap: [
            "Two forms with different jobs: <b>Episcopal</b> describes the church, <b>Episcopalian</b> names the person. <span class='x'>✗</span> <em>He is an Episcopal</em> → <span class='ok'>✓</span> <em>He is an <b>Episcopalian</b></em> · <span class='ok'>✓</span> <em>He goes to an <b>Episcopal</b> church</em>.",
            "Dos formas con funciones distintas: <b>Episcopal</b> describe a la iglesia, <b>Episcopalian</b> nombra a la persona. <span class='x'>✗</span> <em>He is an Episcopal</em> → <span class='ok'>✓</span> <em>He is an <b>Episcopalian</b></em> · <span class='ok'>✓</span> <em>He goes to an <b>Episcopal</b> church</em>.",
          ],
          tags: ["error"],
        },
        {
          q: "Pentecostal",
          a: [
            "A family of churches that emphasize the gifts of the Holy Spirit, such as speaking in tongues and healing, and expressive worship.",
            "Familia de iglesias que ponen el énfasis en los dones del Espíritu Santo, como el hablar en lenguas y la sanación, y en una alabanza expresiva.",
          ],
          ex: "His grandparents helped found a <em>Pentecostal</em> church in Houston.",
          note: [
            "The Assemblies of God is one well-known Pentecostal denomination. Many Spanish-speaking congregations in the US belong to this family.",
            "Las <em>Assemblies of God</em> son una denominación pentecostal muy conocida. Muchas congregaciones de habla hispana en Estados Unidos pertenecen a esta familia.",
          ],
          tags: [],
        },
        {
          q: "the Black church",
          a: [
            "The collective name for the historically African American Protestant denominations and congregations.",
            "El nombre colectivo de las denominaciones y congregaciones protestantes históricamente afroamericanas.",
          ],
          ex: "She spoke about the role of <em>the Black church</em> in the civil rights movement.",
          note: [
            "It refers to a tradition, not to one organization. A name you will see often is <b>AME</b>, the African Methodist Episcopal Church, said letter by letter.",
            "Se refiere a una tradición, no a una sola organización. Un nombre que vas a ver seguido es <b>AME</b>, la <em>African Methodist Episcopal Church</em>, que se dice letra por letra.",
          ],
          tags: ["acronym"],
        },
      ],
    },
    {
      title: ["Church Life & Worship", "La vida de la iglesia y el servicio"],
      rule: [
        "For many American Protestants, church is a full week of activities and not only Sunday morning. Almost every word here differs from the Catholic vocabulary you know, starting with the name of the Sunday gathering itself.",
        "Para muchos protestantes estadounidenses, la iglesia es toda una semana de actividades y no solo la mañana del domingo. Casi todas las palabras de aquí son distintas del vocabulario católico que conoces, empezando por el nombre mismo de la reunión del domingo.",
      ],
      items: [
        {
          q: "church",
          hint: ["(not temple)", "(no temple)"],
          a: [
            "The building, the local community that meets in it, and the activity of going there.",
            "El edificio, la comunidad local que se reúne en él y la actividad de ir ahí.",
          ],
          ex: "We met most of our friends in Atlanta through <em>church</em>.",
          trap: [
            "Spanish <em>templo</em> is <b>church</b>. <span class='x'>✗</span> <em>They go to a Christian temple</em> → <span class='ok'>✓</span> <em>They go to a Christian <b>church</b></em>. In American English, <em>temple</em> points to other traditions, for example a synagogue or a Hindu or Buddhist temple. And no article for the activity: <span class='x'>✗</span> <em>go to the church on Sundays</em> → <span class='ok'>✓</span> <em>go to <b>church</b> on Sundays</em>.",
            "<em>Templo</em> es <b>church</b>. <span class='x'>✗</span> <em>They go to a Christian temple</em> → <span class='ok'>✓</span> <em>They go to a Christian <b>church</b></em>. En el inglés de Estados Unidos, <em>temple</em> remite a otras tradiciones, por ejemplo una sinagoga o un templo hindú o budista. Y va sin artículo cuando es la actividad: <span class='x'>✗</span> <em>go to the church on Sundays</em> → <span class='ok'>✓</span> <em>go to <b>church</b> on Sundays</em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "service",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "A Protestant worship gathering. Spanish <em>culto</em>, <em>servicio</em>.",
            "La reunión de adoración en una iglesia protestante: el <em>culto</em>, el servicio.",
          ],
          ex: "The early <em>service</em> is at nine and the second one is at eleven.",
          trap: [
            "Two errors meet here. Protestants do not call it Mass: <span class='x'>✗</span> <em>How was Mass at your Baptist church?</em> → <span class='ok'>✓</span> <em>How was the <b>service</b>?</em> And Spanish <em>culto</em> is never <em>cult</em>: <span class='x'>✗</span> <em>We went to the cult on Sunday</em> → <span class='ok'>✓</span> <em>We went to the <b>service</b> on Sunday</em>.",
            "Aquí se juntan dos errores. Los protestantes no le llaman misa: <span class='x'>✗</span> <em>How was Mass at your Baptist church?</em> → <span class='ok'>✓</span> <em>How was the <b>service</b>?</em> Y <em>culto</em> nunca es <em>cult</em>: <span class='x'>✗</span> <em>We went to the cult on Sunday</em> → <span class='ok'>✓</span> <em>We went to the <b>service</b> on Sunday</em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "worship",
          a: [
            "To honor God in prayer and song; also the noun for that activity. Spanish <em>adorar</em>, <em>alabanza</em>, <em>adoración</em>.",
            "Honrar a Dios con oración y canto; también es el sustantivo de esa actividad: adorar, alabanza, adoración.",
          ],
          ex: "They <em>worship</em> at a small Lutheran church near the lake.",
          note: [
            "In many churches <b>worship</b> also means the music portion of the service: <em>the worship band</em>, <em>the worship leader</em>. Churches often describe a service as <b>traditional</b> (organ, choir, hymns) or <b>contemporary</b> (a band and newer songs).",
            "En muchas iglesias <b>worship</b> también significa la parte musical del servicio: <em>the worship band</em>, <em>the worship leader</em>. Las iglesias suelen describir un servicio como <b>traditional</b> (órgano, coro, himnos) o <b>contemporary</b> (una banda y cantos más recientes).",
          ],
          tags: [],
        },
        {
          q: "sermon",
          a: [
            "The talk on a Bible passage that is the central part of most Protestant services.",
            "La predicación sobre un pasaje de la Biblia, que es la parte central de la mayoría de los servicios protestantes.",
          ],
          ex: "The <em>sermon</em> this week was about forgiveness.",
          note: [
            "The verbs are <b>give</b> or <b>preach</b> a sermon. Many churches post sermons online, so a colleague may mention listening to one during the week.",
            "Los verbos son <b>give</b> o <b>preach</b> a sermon. Muchas iglesias publican sus sermones en línea, así que un colega puede comentar que escuchó uno entre semana.",
          ],
          tags: ["core"],
        },
        {
          q: "preaching to the choir",
          a: [
            "Making an argument to people who already agree with you.",
            "Presentar un argumento ante gente que ya está de acuerdo contigo.",
          ],
          ex: "You don't need to convince me about the budget; you're <em>preaching to the choir</em>.",
          note: [
            "A business idiom with no religious meaning today. <b>Choir</b> is pronounced <em>KWIRE</em>.",
            "Es un modismo de negocios que hoy no tiene significado religioso. <b>Choir</b> se pronuncia <em>CUAI-er</em>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "pastor",
          hint: ["(not Father)", "(no Father)"],
          a: [
            "The person who leads a Protestant congregation.",
            "La persona que encabeza una congregación protestante.",
          ],
          ex: "Their <em>pastor</em> visited my colleague in the hospital every day.",
          trap: [
            "Do not carry over the Catholic words: <span class='x'>✗</span> <em>the priest of their Baptist church</em> · <span class='x'>✗</span> <em>Thank you, Father</em> → <span class='ok'>✓</span> <em>the <b>pastor</b> of their Baptist church</em> · <span class='ok'>✓</span> <em>Thank you, <b>Pastor</b></em>. As a form of address it takes the first or last name: <b>Pastor Dave</b>, <b>Pastor Johnson</b>.",
            "No traslades las palabras católicas: <span class='x'>✗</span> <em>the priest of their Baptist church</em> · <span class='x'>✗</span> <em>Thank you, Father</em> → <span class='ok'>✓</span> <em>the <b>pastor</b> of their Baptist church</em> · <span class='ok'>✓</span> <em>Thank you, <b>Pastor</b></em>. Como forma de tratamiento lleva el nombre o el apellido: <b>Pastor Dave</b>, <b>Pastor Johnson</b>.",
          ],
          note: [
            "Protestant pastors may marry and have families. Some denominations ordain women as pastors and others do not, so both <em>he</em> and <em>she</em> are possible.",
            "Los pastores protestantes pueden casarse y tener familia. Algunas denominaciones ordenan mujeres como pastoras y otras no, así que tanto <em>he</em> como <em>she</em> son posibles.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "minister",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A member of the Protestant clergy. A more general word than pastor.",
            "Miembro del clero protestante. Es una palabra más general que <em>pastor</em>.",
          ],
          ex: "Her brother is a Methodist <em>minister</em> in Tennessee.",
          trap: [
            "In American English a <b>minister</b> is clergy, not a government official. <span class='x'>✗</span> <em>the US Minister of Education</em> → <span class='ok'>✓</span> <em>the US <b>Secretary</b> of Education</em>. Likewise, <b>ministry</b> is the work of a church or one of its programs, as in <em>youth ministry</em>, not a government department.",
            "En el inglés de Estados Unidos, un <b>minister</b> es parte del clero, no un funcionario de gobierno. <span class='x'>✗</span> <em>the US Minister of Education</em> → <span class='ok'>✓</span> <em>the US <b>Secretary</b> of Education</em>. De igual forma, <b>ministry</b> es la labor de una iglesia o uno de sus programas, como en <em>youth ministry</em>, no una dependencia de gobierno.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "Reverend",
          hint: ["(a title)", "(un título)"],
          a: [
            "The formal title for a member of the clergy, written before the full name.",
            "El título formal de un miembro del clero, que se escribe antes del nombre completo.",
          ],
          ex: "The service will be led by the <em>Reverend</em> Dr. Angela Brooks.",
          trap: [
            "Traditionally it is a title, not a job: <span class='x'>✗</span> <em>He works as a reverend</em> → <span class='ok'>✓</span> <em>He is a <b>pastor</b></em> or <em>a <b>minister</b></em>. In formal writing use <b>the Reverend</b> plus the full name, abbreviated <b>Rev.</b> In conversation you will hear <em>Reverend Brooks</em>; <em>Pastor Brooks</em> is always a safe choice.",
            "Tradicionalmente es un título, no un oficio: <span class='x'>✗</span> <em>He works as a reverend</em> → <span class='ok'>✓</span> <em>He is a <b>pastor</b></em> o <em>a <b>minister</b></em>. En textos formales usa <b>the Reverend</b> más el nombre completo, abreviado <b>Rev.</b> Al platicar vas a escuchar <em>Reverend Brooks</em>; <em>Pastor Brooks</em> siempre es una opción segura.",
          ],
          tags: ["error"],
        },
        {
          q: "congregation",
          a: [
            "The members of a local church, taken together.",
            "Los miembros de una iglesia local, en conjunto.",
          ],
          ex: "The whole <em>congregation</em> helped them move into the new house.",
          note: [
            "You will also hear <b>church family</b> used with the same meaning, and <b>members</b> for the individuals.",
            "También vas a escuchar <b>church family</b> con el mismo significado, y <b>members</b> para las personas en lo individual.",
          ],
          tags: [],
        },
        {
          q: "Sunday school",
          a: [
            "Bible classes held at church on Sunday, before or after the service. Many churches have classes for adults as well as for children.",
            "Clases bíblicas que se dan en la iglesia el domingo, antes o después del servicio. Muchas iglesias tienen clases para adultos además de las de niños.",
          ],
          ex: "She has taught <em>Sunday school</em> for twenty years.",
          note: [
            "No article: <em>the kids are in Sunday school</em>. Spanish <em>escuela dominical</em>.",
            "Sin artículo: <em>the kids are in Sunday school</em>. En español, <em>escuela dominical</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "Bible study",
          a: [
            "A regular meeting, usually on a weekday, to read and discuss the Bible together.",
            "Reunión periódica, por lo general entre semana, para leer y comentar la Biblia en grupo.",
          ],
          ex: "I can't stay late on Wednesdays; I have <em>Bible study</em>.",
          note: [
            "Used with no article, like a class: <em>I have Bible study</em>, <em>after Bible study</em>.",
            "Se usa sin artículo, como una clase: <em>I have Bible study</em>, <em>after Bible study</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "small group",
          a: [
            "A handful of church members who meet regularly in someone's home to pray, study, and support one another.",
            "Un puñado de miembros de la iglesia que se reúnen con regularidad en casa de alguien para orar, estudiar y apoyarse entre sí.",
          ],
          ex: "Our <em>small group</em> brought us dinner every night after the baby was born.",
          note: [
            "Churches use their own names for it: <b>life group</b>, <b>home group</b>, <b>community group</b>.",
            "Cada iglesia le pone su propio nombre: <b>life group</b>, <b>home group</b>, <b>community group</b>.",
          ],
          tags: [],
        },
        {
          q: "mission trip",
          a: [
            "A short trip organized by a church to do service work and share the faith, in the US or abroad.",
            "Viaje corto organizado por una iglesia para hacer trabajo de servicio y compartir la fe, dentro de Estados Unidos o en el extranjero.",
          ],
          ex: "He is using a week of vacation for a <em>mission trip</em> to Guatemala.",
          note: [
            "Teenagers often go with the church's <b>youth group</b>. A person who does this work long term is a <b>missionary</b>.",
            "Los adolescentes suelen ir con el <b>youth group</b> de la iglesia. Quien hace esta labor a largo plazo es un <b>missionary</b>.",
          ],
          tags: [],
        },
        {
          q: "VBS",
          hint: ["(vacation Bible school)", "(vacation Bible school)"],
          a: [
            "A week-long summer program for children, with Bible lessons, songs, and games, run by a church.",
            "Programa de verano de una semana para niños, con lecciones bíblicas, cantos y juegos, organizado por una iglesia.",
          ],
          ex: "The kids are at <em>VBS</em> every morning this week.",
          note: [
            "Said letter by letter. Churches usually open it to any family in the neighborhood.",
            "Se dice letra por letra. Las iglesias por lo general lo abren a cualquier familia de la colonia.",
          ],
          tags: ["acronym"],
        },
        {
          q: "tithe",
          a: [
            "To give a tenth of your income to your church; also the amount given. Spanish <em>diezmo</em>, <em>diezmar</em>.",
            "Dar la décima parte de tus ingresos a tu iglesia; también la cantidad que se da: el diezmo, diezmar.",
          ],
          ex: "They <em>tithe</em> every month, even in the lean years.",
          note: [
            "Pronunciation: one syllable, <b>TYTH</b>, with the vowel of <em>time</em> and the th of <em>the</em>. The usual phrase in a service is <b>tithes and offerings</b>.",
            "Pronunciación: una sola sílaba, <b>TAIDH</b>, con la vocal de <em>time</em> y la th de <em>the</em>. La frase habitual en un servicio es <b>tithes and offerings</b>.",
          ],
          tags: [],
        },
        {
          q: "potluck",
          a: [
            "A shared meal to which every person or family brings a dish.",
            "Comida compartida a la que cada persona o familia lleva un platillo.",
          ],
          ex: "There is a <em>potluck</em> after the service on Sunday; bring whatever you like.",
          note: [
            "A fixture of church life that offices have adopted too. If you are invited, the question to ask is <em>What can I bring?</em>",
            "Es una tradición de la vida de las iglesias que también adoptaron las oficinas. Si te invitan, la pregunta es <em>What can I bring?</em>",
          ],
          tags: ["core"],
        },
        {
          q: "megachurch",
          a: [
            "A very large Protestant congregation, with thousands of people attending each week.",
            "Congregación protestante muy grande, con miles de asistentes cada semana.",
          ],
          ex: "Their <em>megachurch</em> has three campuses and its own coffee shop.",
          note: [
            "Many are nondenominational. A large church with several sites calls each one a <b>campus</b>.",
            "Muchas son <em>nondenominational</em>. Una iglesia grande con varias sedes le llama <b>campus</b> a cada una.",
          ],
          tags: [],
        },
        {
          q: "fellowship",
          a: [
            "Friendly time spent together by members of a church; the sense of community among them.",
            "El tiempo de convivencia entre los miembros de una iglesia; el sentido de comunidad entre ellos.",
          ],
          ex: "Please join us for coffee and <em>fellowship</em> after the service.",
          note: [
            "The room where this happens is the <b>fellowship hall</b>. In universities and research, a <em>fellowship</em> is a funded position, which is an unrelated sense.",
            "El salón donde esto ocurre es el <b>fellowship hall</b>. En universidades e investigación, una <em>fellowship</em> es una beca o plaza financiada, un sentido que no tiene relación.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: ["Beliefs & Words You Will Hear", "Creencias y palabras que vas a escuchar"],
      rule: [
        "These words come up when colleagues talk about their own faith. You do not need to use them; you need to recognize them and understand what the speaker means by them.",
        "Estas palabras salen cuando los colegas hablan de su propia fe. No necesitas usarlas; necesitas reconocerlas y entender qué quiere decir con ellas quien habla.",
      ],
      items: [
        {
          q: "the Bible / Scripture",
          a: [
            "The Christian holy book. <em>Scripture</em> is a more formal word for the same text or for a passage from it.",
            "El libro sagrado cristiano. <em>Scripture</em> es una palabra más formal para el mismo texto o para un pasaje de él.",
          ],
          ex: "The pastor opened with a reading from <em>Scripture</em>.",
          note: [
            "<b>The Bible</b> takes a capital B; the adjective <b>biblical</b> does not. Spanish <em>escritura</em> in the legal sense is a <b>deed</b>, not <em>scripture</em>.",
            "<b>The Bible</b> lleva B mayúscula; el adjetivo <b>biblical</b> no. La <em>escritura</em> en sentido legal es una <b>deed</b>, no <em>scripture</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "verse",
          a: [
            "A single numbered sentence or line of the Bible. Spanish <em>versículo</em>.",
            "Una sola oración o línea numerada de la Biblia: un versículo.",
          ],
          ex: "She keeps her favorite <em>verse</em> on a card at her desk.",
          note: [
            "References are read as numbers: <em>John 3:16</em> is said <b>John three sixteen</b>. The business idiom <b>to quote chapter and verse</b> means to give the exact details or the exact rule.",
            "Las citas se leen como números: <em>John 3:16</em> se dice <b>John three sixteen</b>. El modismo de negocios <b>to quote chapter and verse</b> significa dar los detalles exactos o la regla exacta.",
          ],
          tags: [],
        },
        {
          q: "the Gospel",
          a: [
            "The Christian message about Jesus; also any of the four books of the Bible that tell his life.",
            "El mensaje cristiano sobre Jesús; también cualquiera de los cuatro libros de la Biblia que narran su vida: el Evangelio.",
          ],
          ex: "The church's mission statement is about sharing <em>the Gospel</em>.",
          note: [
            "Related uses: <b>gospel music</b>, a genre rooted in the Black church, and the idiom <b>the gospel truth</b>, meaning something completely true.",
            "Usos relacionados: <b>gospel music</b>, un género con raíces en <em>the Black church</em>, y el modismo <b>the gospel truth</b>, que significa algo totalmente cierto.",
          ],
          tags: [],
        },
        {
          q: "grace",
          hint: ["(two meanings)", "(dos significados)"],
          a: [
            "(1) In Christian teaching, God's favor given freely. (2) A short prayer of thanks before a meal.",
            "(1) En la enseñanza cristiana, el favor de Dios dado gratuitamente. (2) Una breve oración de agradecimiento antes de comer.",
          ],
          ex: "The sermon was on <em>grace</em> and what it means in daily life.",
          note: [
            "In the workplace you will also hear <b>to give someone grace</b>, meaning to be patient and forgiving with them. Unlike Spanish <em>gracia</em>, the word never refers to humor.",
            "En el trabajo también vas a escuchar <b>to give someone grace</b>, que significa tenerle paciencia y comprensión a alguien. A diferencia de <em>gracia</em> en español, la palabra nunca se refiere al humor.",
          ],
          tags: ["core", "falsefriend"],
        },
        {
          q: "born again",
          a: [
            "Having had a personal experience of conversion and commitment to Jesus. The phrase comes from the Gospel of John.",
            "Haber tenido una experiencia personal de conversión y de compromiso con Jesús. La frase viene del Evangelio de Juan.",
          ],
          ex: "He told me he was <em>born again</em> in college.",
          note: [
            "Hyphenated before a noun: <b>a born-again Christian</b>. It is a term people use about themselves.",
            "Lleva guion antes de un sustantivo: <b>a born-again Christian</b>. Es un término que la gente usa para hablar de sí misma.",
          ],
          tags: ["core"],
        },
        {
          q: "saved",
          a: [
            "In evangelical usage, having accepted Jesus as one's savior. The noun is <em>salvation</em>.",
            "En el uso evangélico, haber aceptado a Jesús como salvador. El sustantivo es <em>salvation</em>.",
          ],
          ex: "She says she was <em>saved</em> at a summer camp when she was fifteen.",
          note: [
            "You may hear <b>to get saved</b> and <b>to be saved</b>. When someone tells you this, it is a personal milestone for them, much like telling you about a wedding or a graduation.",
            "Puedes escuchar <b>to get saved</b> y <b>to be saved</b>. Cuando alguien te lo cuenta, para esa persona es un momento decisivo de su vida, parecido a contarte de una boda o una graduación.",
          ],
          tags: ["core"],
        },
        {
          q: "testimony",
          a: [
            "A person's own account of how they came to faith or how faith changed their life.",
            "El relato que una persona hace de cómo llegó a la fe o de cómo la fe cambió su vida.",
          ],
          ex: "A member of the congregation shared her <em>testimony</em> before the sermon.",
          note: [
            "The verbs are <b>share</b> or <b>give</b> your testimony. In business, a customer's statement of praise is a <b>testimonial</b>, and <em>testimony</em> is otherwise what a witness gives in court.",
            "Los verbos son <b>share</b> o <b>give</b> your testimony. En los negocios, la recomendación de un cliente es un <b>testimonial</b>, y fuera de eso <em>testimony</em> es lo que da un testigo en un juicio.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "baptism by immersion",
          a: [
            "Baptism in which the whole body is lowered under water.",
            "Bautismo en el que todo el cuerpo se sumerge en el agua.",
          ],
          ex: "Their church practices <em>baptism by immersion</em>, so they have a pool behind the stage.",
          note: [
            "Baptists, Pentecostals, and many nondenominational churches baptize people who are old enough to profess their own faith, usually by immersion; this is called <b>believer's baptism</b>. Lutherans, Methodists, Presbyterians, and Episcopalians also baptize infants, usually by pouring or sprinkling water.",
            "Los bautistas, los pentecostales y muchas iglesias <em>nondenominational</em> bautizan a personas con edad suficiente para profesar su propia fe, por lo general por inmersión; a esto se le llama <b>believer's baptism</b>. Los luteranos, metodistas, presbiterianos y episcopales también bautizan bebés, por lo general derramando o rociando agua.",
          ],
          tags: [],
        },
        {
          q: "communion / the Lord's Supper",
          a: [
            "The sharing of bread and wine, or grape juice, in memory of Jesus's last meal with his disciples.",
            "El compartir pan y vino, o jugo de uva, en memoria de la última cena de Jesús con sus discípulos.",
          ],
          ex: "Our church has <em>communion</em> on the first Sunday of every month.",
          trap: [
            "<span class='x'>✗</span> <em>We did the communion</em> · <span class='x'>✗</span> <em>We communed</em> → <span class='ok'>✓</span> <em>We <b>took</b> communion</em> or <em>We <b>had</b> communion</em>. English builds it with a verb plus the noun.",
            "<span class='x'>✗</span> <em>We did the communion</em> · <span class='x'>✗</span> <em>We communed</em> → <span class='ok'>✓</span> <em>We <b>took</b> communion</em> o <em>We <b>had</b> communion</em>. En inglés se arma con un verbo más el sustantivo.",
          ],
          note: [
            "How often it is held and how it is understood differ from one denomination to another. Churches normally announce who is invited to take part, so a guest can simply listen and follow.",
            "La frecuencia con que se celebra y la forma de entenderla cambian de una denominación a otra. Las iglesias normalmente anuncian quién está invitado a participar, así que como invitado basta con escuchar y seguir la indicación.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "the Holy Spirit",
          a: [
            "In Christian belief, the third person of the Trinity, God present and active in the world. Spanish <em>el Espíritu Santo</em>.",
            "En la fe cristiana, la tercera persona de la Trinidad, Dios presente y activo en el mundo: el Espíritu Santo.",
          ],
          ex: "The pastor prayed that <em>the Holy Spirit</em> would guide the congregation.",
          note: [
            "Older texts and some churches say <b>the Holy Ghost</b>. Often shortened to <b>the Spirit</b>.",
            "Los textos antiguos y algunas iglesias dicen <b>the Holy Ghost</b>. Muchas veces se acorta a <b>the Spirit</b>.",
          ],
          tags: [],
        },
        {
          q: "evangelism",
          hint: ["(three similar words)", "(tres palabras parecidas)"],
          a: [
            "The activity of sharing the Christian message with other people.",
            "La actividad de compartir el mensaje cristiano con otras personas.",
          ],
          ex: "The church puts a lot of energy into <em>evangelism</em> on college campuses.",
          trap: [
            "Three words, three jobs: <b>evangelism</b> is the activity, <b>an evangelist</b> is a person who preaches it, and <b>evangelical</b> is the movement or a member of it. <span class='x'>✗</span> <em>My neighbors are evangelists</em> when you mean <em>son evangélicos</em> → <span class='ok'>✓</span> <em>My neighbors are <b>evangelical</b></em>.",
            "Tres palabras, tres funciones: <b>evangelism</b> es la actividad, <b>an evangelist</b> es una persona que lo predica y <b>evangelical</b> es el movimiento o un miembro de él. <span class='x'>✗</span> <em>My neighbors are evangelists</em> cuando quieres decir <em>son evangélicos</em> → <span class='ok'>✓</span> <em>My neighbors are <b>evangelical</b></em>.",
          ],
          note: [
            "A related verb is <b>to witness</b>, meaning to tell others about your faith. Tech companies borrowed the word: a <em>product evangelist</em> promotes a technology.",
            "Un verbo relacionado es <b>to witness</b>, que significa hablarles a otros de tu fe. Las empresas de tecnología tomaron prestada la palabra: un <em>product evangelist</em> promueve una tecnología.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "calling",
          a: [
            "A strong sense that God is directing a person toward a particular kind of work or decision.",
            "La firme convicción de que Dios dirige a una persona hacia cierto tipo de trabajo o hacia una decisión.",
          ],
          ex: "She left consulting because she felt a <em>calling</em> to teach.",
          note: [
            "The verb form is <b>to feel called to</b> do something. The word is also used without any religious sense for work a person feels meant to do.",
            "La forma verbal es <b>to feel called to</b> hacer algo. La palabra también se usa sin ningún sentido religioso para el trabajo al que una persona se siente destinada.",
          ],
          tags: ["idiom"],
        },
        {
          q: "altar call",
          a: [
            "An invitation at the end of a service for people to come forward and make a public commitment of faith.",
            "Invitación al final de un servicio para que la gente pase al frente y haga un compromiso público de fe.",
          ],
          ex: "The service ended with an <em>altar call</em> while the band played quietly.",
          note: [
            "Common in Baptist, Pentecostal, and many nondenominational churches. Guests are free to stay in their seats.",
            "Es común en iglesias bautistas, pentecostales y en muchas <em>nondenominational</em>. Los invitados pueden quedarse en su lugar con toda libertad.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: ["Life Events & the Calendar", "Momentos de la vida y el calendario"],
      rule: [
        "Weddings, funerals, and the two great holidays are when a colleague is most likely to invite you into a church. The format varies from one congregation to the next, so the invitation or announcement is your best guide to what to expect.",
        "Las bodas, los funerales y las dos grandes fiestas son las ocasiones en que es más probable que un colega te invite a una iglesia. El formato cambia de una congregación a otra, así que la invitación o el aviso es tu mejor guía sobre qué esperar.",
      ],
      items: [
        {
          q: "officiant",
          a: [
            "The person who conducts a wedding ceremony.",
            "La persona que dirige una ceremonia de boda.",
          ],
          ex: "Their <em>officiant</em> was the pastor who had known the bride since she was a child.",
          note: [
            "The verb is <b>to officiate</b>: <em>Pastor Lee officiated</em>. It is equally correct to say <em>Pastor Lee <b>married</b> them</em>. The promises the couple make are their <b>vows</b>.",
            "El verbo es <b>to officiate</b>: <em>Pastor Lee officiated</em>. También es correcto decir <em>Pastor Lee <b>married</b> them</em>. Las promesas que hace la pareja son sus <b>vows</b>.",
          ],
          tags: [],
        },
        {
          q: "baby dedication",
          a: [
            "A ceremony in which parents present a baby to the congregation and promise to raise the child in the faith.",
            "Ceremonia en la que los padres presentan a su bebé ante la congregación y prometen criarlo en la fe.",
          ],
          ex: "We are driving to Dallas this weekend for our grandson's <em>baby dedication</em>.",
          note: [
            "Held in churches that baptize later, when a person can profess their own faith. Churches that baptize infants hold a <b>baptism</b> or <b>christening</b>.",
            "Se hace en las iglesias que bautizan después, cuando la persona puede profesar su propia fe. Las iglesias que bautizan bebés celebran un <b>baptism</b> o <b>christening</b>.",
          ],
          tags: [],
        },
        {
          q: "funeral / memorial service",
          a: [
            "A funeral is a service held with the body present; a memorial service is held without it, sometimes weeks later.",
            "Un <em>funeral</em> es un servicio de cuerpo presente; un <em>memorial service</em> se hace sin el cuerpo, a veces semanas después.",
          ],
          ex: "The <em>memorial service</em> will be at the family's church on the 14th.",
          note: [
            "The announcement tells you which it is and usually where to send flowers or a donation.",
            "El aviso te dice cuál de los dos es y, por lo general, a dónde mandar flores o un donativo.",
          ],
          tags: ["core"],
        },
        {
          q: "celebration of life",
          a: [
            "A gathering to remember a person who has died that focuses on stories and memories of their life.",
            "Reunión para recordar a una persona que falleció, centrada en anécdotas y recuerdos de su vida.",
          ],
          ex: "Instead of a traditional funeral, the family is holding a <em>celebration of life</em>.",
          note: [
            "It can be religious or not, and the tone and dress are often less formal. If the announcement mentions what to wear, follow it.",
            "Puede ser religiosa o no, y el tono y la vestimenta suelen ser menos formales. Si el aviso dice cómo ir vestido, sigue la indicación.",
          ],
          tags: ["core"],
        },
        {
          q: "visitation",
          a: [
            "Set hours, usually at a funeral home before the funeral, when friends come to greet the family.",
            "Horario fijo, por lo general en una funeraria antes del funeral, en el que los amigos pasan a saludar a la familia.",
          ],
          ex: "<em>Visitation</em> is Friday from five to seven, and the funeral is Saturday morning.",
          note: [
            "Also called a <b>viewing</b>; Catholic families more often say <b>wake</b>. People stay a short time, say a few words to the family, and sign the guest book.",
            "También se le llama <b>viewing</b>; las familias católicas dicen más seguido <b>wake</b>. La gente se queda poco tiempo, le dice unas palabras a la familia y firma el libro de visitas.",
          ],
          tags: [],
        },
        {
          q: "eulogy",
          a: [
            "A speech in memory of the person who has died, given by a relative, friend, or the pastor.",
            "Palabras en memoria de la persona que falleció, a cargo de un familiar, un amigo o el pastor.",
          ],
          ex: "His daughter gave a beautiful <em>eulogy</em>.",
          note: [
            "Pronunciation: <b>YOO-luh-jee</b>. The verb is <b>give</b> or <b>deliver</b> a eulogy. Do not confuse it with Spanish <em>elogio</em>, which is simply <b>praise</b>.",
            "Pronunciación: <b>IU-lo-yi</b>. El verbo es <b>give</b> o <b>deliver</b> a eulogy. No lo confundas con <em>elogio</em>, que es simplemente <b>praise</b>.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "in lieu of flowers",
          a: [
            "Instead of flowers. The standard phrase in a death announcement asking for donations to a charity or to the church.",
            "En lugar de flores. Es la frase habitual en un aviso de fallecimiento para pedir donativos a una organización o a la iglesia.",
          ],
          ex: "<em>In lieu of flowers</em>, the family asks for donations to the hospice.",
          note: [
            "<b>Lieu</b> is pronounced <em>LOO</em>. The published announcement itself is an <b>obituary</b>.",
            "<b>Lieu</b> se pronuncia <em>LU</em>. El aviso publicado es un <b>obituary</b>.",
          ],
          tags: ["idiom"],
        },
        {
          q: "pass away",
          a: [
            "To die. The gentle form most Americans use when speaking to or about a bereaved family.",
            "Morir. Es la forma suave que la mayoría de los estadounidenses usa al hablar con una familia en duelo o sobre ella.",
          ],
          ex: "I was so sorry to hear that your father <em>passed away</em>.",
          note: [
            "Equivalent to <em>fallecer</em>. You will also hear simply <b>passed</b>. In religious settings people may say <b>went home to be with the Lord</b>.",
            "Corresponde a <em>fallecer</em>. También vas a escuchar simplemente <b>passed</b>. En contextos religiosos la gente puede decir <b>went home to be with the Lord</b>.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "Easter",
          a: [
            "The celebration of the resurrection of Jesus, and the most important Sunday of the Christian year.",
            "La celebración de la resurrección de Jesús, y el domingo más importante del año cristiano.",
          ],
          ex: "We are hosting the whole family for lunch after church on <em>Easter</em>.",
          note: [
            "Many churches hold an outdoor <b>sunrise service</b>. A traditional greeting that day is <em>He is risen</em>, answered with <em>He is risen indeed</em>. Spanish <em>Pascua</em> is <b>Easter</b>, not <em>Passover</em>.",
            "Muchas iglesias tienen un <b>sunrise service</b> al aire libre. Un saludo tradicional ese día es <em>He is risen</em>, al que se responde <em>He is risen indeed</em>. La Pascua es <b>Easter</b>, no <em>Passover</em>.",
          ],
          tags: [],
        },
        {
          q: "Lent",
          a: [
            "The season of about forty days before Easter, beginning on Ash Wednesday.",
            "El tiempo de unos cuarenta días antes de la Pascua, que empieza el Miércoles de Ceniza.",
          ],
          ex: "Our Methodist church has a soup supper every Wednesday during <em>Lent</em>.",
          note: [
            "Lutheran, Episcopal, and Methodist churches, among others, observe Lent and Ash Wednesday. Many Baptist and nondenominational churches do not mark the season formally and focus on <b>Good Friday</b> and Easter.",
            "Las iglesias luteranas, episcopales y metodistas, entre otras, guardan la Cuaresma y el Miércoles de Ceniza. Muchas iglesias bautistas y <em>nondenominational</em> no marcan formalmente este tiempo y se concentran en <b>Good Friday</b> y en la Pascua.",
          ],
          tags: [],
        },
        {
          q: "Christmas Eve service",
          a: [
            "The service held on the evening of December 24, often by candlelight.",
            "El servicio que se celebra la noche del 24 de diciembre, muchas veces a la luz de las velas.",
          ],
          ex: "We go to the five o'clock <em>Christmas Eve service</em> and then have dinner at my sister's.",
          note: [
            "Often called a <b>candlelight service</b>. Churches usually hold several so that families can choose a time, and visitors are expected.",
            "Muchas veces se le llama <b>candlelight service</b>. Las iglesias suelen tener varios para que las familias elijan horario, y se cuenta con que lleguen visitantes.",
          ],
          tags: [],
        },
        {
          q: "Nativity scene",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "A set of figures showing the birth of Jesus. Spanish <em>nacimiento</em>.",
            "Conjunto de figuras que representa el nacimiento de Jesús: el <em>nacimiento</em>.",
          ],
          ex: "The church sets up a <em>Nativity scene</em> on the front lawn every December.",
          note: [
            "Spanish <em>poner el nacimiento</em> is <b>to set up the Nativity scene</b>, not <em>the birth</em>. A <em>pastorela</em> is close to a <b>Christmas pageant</b> or <b>Nativity play</b>.",
            "<em>Poner el nacimiento</em> es <b>to set up the Nativity scene</b>, no <em>the birth</em>. Una pastorela se parece a un <b>Christmas pageant</b> o <b>Nativity play</b>.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "Thanksgiving",
          a: [
            "The national holiday on the fourth Thursday of November, centered on a family meal and on gratitude.",
            "La fiesta nacional del cuarto jueves de noviembre, centrada en una comida familiar y en la gratitud.",
          ],
          ex: "At <em>Thanksgiving</em>, my father-in-law always says a prayer before we eat.",
          note: [
            "A civic holiday, not a church one, yet many families begin the meal with a prayer or by going around the table saying what each person is thankful for. The greeting is <b>Happy Thanksgiving</b>.",
            "Es una fiesta cívica, no de iglesia, pero muchas familias empiezan la comida con una oración o con una ronda en la que cada quien dice por qué está agradecido. El saludo es <b>Happy Thanksgiving</b>.",
          ],
          tags: [],
        },
      ],
    },
    {
      title: [
        "Religion in American Public & Regional Life",
        "La religión en la vida pública y regional de Estados Unidos",
      ],
      rule: [
        "Religious language is part of everyday American English, in some regions more than in others. Some phrases are deeply meant, some are pure habit, and a few Spanish look-alikes carry a much stronger charge in English.",
        "El lenguaje religioso es parte del inglés cotidiano de Estados Unidos, en unas regiones más que en otras. Algunas frases se dicen con toda intención, otras son pura costumbre, y algunas palabras parecidas al español tienen en inglés una carga mucho más fuerte.",
      ],
      items: [
        {
          q: "the Bible Belt",
          a: [
            "The informal name for the region, mainly the South and parts of the Midwest, where Protestant churchgoing is a prominent part of community life.",
            "El nombre informal de la región, principalmente el Sur y partes del Medio Oeste, donde ir a una iglesia protestante es una parte destacada de la vida comunitaria.",
          ],
          ex: "Our plant is in <em>the Bible Belt</em>, so very little is scheduled on Sunday mornings.",
          note: [
            "It has no official borders. People who live there use the term about their own region too.",
            "No tiene fronteras oficiales. La gente que vive ahí también usa el término para hablar de su propia región.",
          ],
          tags: ["core"],
        },
        {
          q: "churchgoing",
          a: [
            "Attending church regularly. The person is a <em>churchgoer</em>.",
            "Que va a la iglesia con regularidad. La persona es un <em>churchgoer</em>.",
          ],
          ex: "It is a <em>churchgoing</em> town; the restaurants fill up at noon on Sunday.",
          tags: [],
        },
        {
          q: "What church do you go to?",
          a: [
            "In much of the South, a friendly getting-to-know-you question, asked in the same spirit as <em>Where are you from?</em>",
            "En buena parte del Sur, una pregunta amistosa para conocerte, hecha con el mismo ánimo que <em>Where are you from?</em>",
          ],
          ex: 'Within five minutes of meeting us, the neighbors asked, "<em>What church do you go to?</em>"',
          note: [
            "It is usually an opening to welcome you, not a test. Easy answers: <em>We're Catholic; we go to St. Mary's</em>, or <em>We're still looking for a church home</em>, or <em>We're not churchgoers, but thank you for asking</em>.",
            "Por lo general es una forma de darte la bienvenida, no un examen. Respuestas sencillas: <em>We're Catholic; we go to St. Mary's</em>, o <em>We're still looking for a church home</em>, o <em>We're not churchgoers, but thank you for asking</em>.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "say grace",
          a: [
            "To say a short prayer of thanks before a meal. Spanish <em>bendecir los alimentos</em>, <em>dar gracias</em>.",
            "Hacer una breve oración de agradecimiento antes de comer: bendecir los alimentos, dar gracias.",
          ],
          ex: "Let's wait for everyone to sit down so we can <em>say grace</em>.",
          trap: [
            "The verb is <b>say</b> and there is no article: <span class='x'>✗</span> <em>make the grace</em> · <span class='x'>✗</span> <em>bless the foods</em> → <span class='ok'>✓</span> <em><b>say grace</b></em>. In the South you will also hear <b>say the blessing</b>. As a guest, wait to start eating until the host does.",
            "El verbo es <b>say</b> y va sin artículo: <span class='x'>✗</span> <em>make the grace</em> · <span class='x'>✗</span> <em>bless the foods</em> → <span class='ok'>✓</span> <em><b>say grace</b></em>. En el Sur también vas a escuchar <b>say the blessing</b>. Como invitado, espera a que el anfitrión empiece a comer.",
          ],
          tags: ["core", "idiom", "error"],
        },
        {
          q: "thoughts and prayers",
          a: [
            "The set phrase of sympathy offered after a death, an illness, or a disaster.",
            "La frase hecha de solidaridad que se ofrece tras un fallecimiento, una enfermedad o un desastre.",
          ],
          ex: "Our <em>thoughts and prayers</em> are with everyone affected by the storm.",
          note: [
            "In personal condolences it is entirely normal. In public statements after tragedies the phrase has been criticized by some as a substitute for action, so corporate messages often choose other wording, such as <em>We are thinking of everyone affected</em>.",
            "En un pésame personal es de lo más normal. En declaraciones públicas después de tragedias, algunas personas han criticado la frase por considerarla un sustituto de la acción, así que los mensajes corporativos suelen elegir otra redacción, como <em>We are thinking of everyone affected</em>.",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "Bless you",
          a: [
            "What people say when someone sneezes.",
            "Lo que la gente dice cuando alguien estornuda.",
          ],
          ex: '"<em>Bless you</em>!" "Thanks, it\'s allergy season."',
          note: [
            "This is the English for <em>salud</em>, and it carries no religious weight; people of every belief say it. The fuller form is <b>God bless you</b>, and the reply is <em>Thank you</em>. Do not translate literally: <span class='x'>✗</span> <em>Health!</em>",
            "Es el <em>salud</em> en inglés y no tiene peso religioso; lo dice gente de cualquier creencia. La forma completa es <b>God bless you</b>, y se responde <em>Thank you</em>. No lo traduzcas literal: <span class='x'>✗</span> <em>Health!</em>",
          ],
          tags: ["core", "idiom"],
        },
        {
          q: "God bless America",
          a: [
            "The phrase with which American politicians of both parties customarily end major speeches.",
            "La frase con la que los políticos estadounidenses de ambos partidos acostumbran cerrar los discursos importantes.",
          ],
          ex: 'She closed her remarks with "Thank you, and <em>God bless America</em>."',
          note: [
            "References to God in public life are customary in the US: the national motto on the currency is <b>In God We Trust</b>. A simple <b>God bless</b> is also used as a warm goodbye.",
            "Las referencias a Dios en la vida pública son costumbre en Estados Unidos: el lema nacional que aparece en la moneda es <b>In God We Trust</b>. Un simple <b>God bless</b> también se usa como despedida cálida.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Have a blessed day",
          a: [
            "A friendly goodbye, heard especially in the South, from cashiers, receptionists, and on voicemail greetings.",
            "Una despedida amistosa que se escucha sobre todo en el Sur, de cajeros, recepcionistas y en saludos de buzón de voz.",
          ],
          ex: "Here is your receipt. <em>Have a blessed day</em>!",
          note: [
            "The natural reply is <b>Thank you, you too</b>. Here <b>blessed</b> is one syllable, <em>BLEST</em>. Related: <em>I'm blessed</em> means I feel fortunate.",
            "La respuesta natural es <b>Thank you, you too</b>. Aquí <b>blessed</b> es de una sílaba, <em>BLEST</em>. Relacionado: <em>I'm blessed</em> significa me siento afortunado.",
          ],
          tags: ["idiom"],
        },
        {
          q: "Bless your heart",
          a: [
            "A Southern expression of sympathy or affection.",
            "Expresión del Sur que muestra compasión o cariño.",
          ],
          ex: "You drove six hours in that rain? <em>Bless your heart</em>.",
          note: [
            "Tone decides the meaning. Said warmly, it is sincere sympathy; said in a certain way, it can gently signal that the speaker thinks someone is mistaken. Understand it; there is no need to use it.",
            "El tono decide el significado. Dicha con calidez, es compasión sincera; dicha de cierta manera, puede indicar con suavidad que quien habla cree que alguien está equivocado. Entiéndela; no hace falta que la uses.",
          ],
          tags: ["idiom"],
        },
        {
          q: "faith-based",
          a: [
            "Connected to or motivated by religion. Used for organizations, programs, schools, and films.",
            "Vinculado a la religión o motivado por ella. Se usa para organizaciones, programas, escuelas y películas.",
          ],
          ex: "We partner with several <em>faith-based</em> nonprofits on the volunteer day.",
          note: [
            "The standard neutral adjective in government and corporate language, because it covers every religion.",
            "Es el adjetivo neutral habitual en el lenguaje de gobierno y de empresa, porque abarca todas las religiones.",
          ],
          tags: [],
        },
        {
          q: "separation of church and state",
          hint: ["(false friend nearby)", "(falso amigo cerca)"],
          a: [
            "The principle that government neither establishes a religion nor interferes with religious practice, grounded in the First Amendment.",
            "El principio de que el gobierno no establece una religión ni interfiere con la práctica religiosa, con fundamento en la Primera Enmienda.",
          ],
          ex: "The case turned on the <em>separation of church and state</em>.",
          trap: [
            "Spanish <em>Estado laico</em> and <em>educación laica</em> use <b>secular</b> in English: <span class='x'>✗</span> <em>a laic state</em> · <span class='x'>✗</span> <em>lay education</em> → <span class='ok'>✓</span> <em>a <b>secular</b> state</em> · <span class='ok'>✓</span> <em><b>secular</b> education</em>. <b>Lay</b> is only for a person who is not clergy.",
            "<em>Estado laico</em> y <em>educación laica</em> se dicen con <b>secular</b> en inglés: <span class='x'>✗</span> <em>a laic state</em> · <span class='x'>✗</span> <em>lay education</em> → <span class='ok'>✓</span> <em>a <b>secular</b> state</em> · <span class='ok'>✓</span> <em><b>secular</b> education</em>. <b>Lay</b> es solo para una persona que no es del clero.",
          ],
          note: [
            "The phrase itself is not in the Constitution; it comes from a letter by Thomas Jefferson. How the principle applies in specific cases is a long-running public debate.",
            "La frase como tal no está en la Constitución; viene de una carta de Thomas Jefferson. Cómo se aplica el principio en casos concretos es un debate público de muchos años.",
          ],
          tags: ["falsefriend", "error"],
        },
        {
          q: "cult",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A group regarded as controlling or dangerous to its members. A strongly negative word.",
            "Grupo al que se considera controlador o peligroso para sus miembros. Es una palabra fuertemente negativa.",
          ],
          ex: "The documentary is about a <em>cult</em> that operated in the 1970s.",
          trap: [
            "Spanish <em>culto</em> is never <em>cult</em>. For the Sunday gathering say <b>service</b>; for <em>una persona culta</em> say <b>well-read</b> or <b>cultured</b>. <span class='x'>✗</span> <em>My neighbors invited me to their cult</em> → <span class='ok'>✓</span> <em>My neighbors invited me to their <b>church</b></em>. Never apply <em>cult</em> to someone's religion.",
            "<em>Culto</em> nunca es <em>cult</em>. Para la reunión del domingo di <b>service</b>; para una persona culta di <b>well-read</b> o <b>cultured</b>. <span class='x'>✗</span> <em>My neighbors invited me to their cult</em> → <span class='ok'>✓</span> <em>My neighbors invited me to their <b>church</b></em>. Nunca le apliques <em>cult</em> a la religión de alguien.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "sect",
          hint: ["(false friend)", "(falso amigo)"],
          a: [
            "A smaller religious group that has separated from a larger one. A technical word that many listeners hear as negative.",
            "Grupo religioso más pequeño que se separó de uno mayor. Es una palabra técnica que muchos escuchan como negativa.",
          ],
          ex: "The article described the group as a small <em>sect</em> with a few hundred members.",
          note: [
            "Do not use it for a colleague's church: <span class='x'>✗</span> <em>What sect are you?</em> → <span class='ok'>✓</span> <em>What <b>denomination</b> is your church?</em> The neutral words are <b>denomination</b>, <b>church</b>, and <b>tradition</b>.",
            "No la uses para la iglesia de un colega: <span class='x'>✗</span> <em>What sect are you?</em> → <span class='ok'>✓</span> <em>What <b>denomination</b> is your church?</em> Las palabras neutrales son <b>denomination</b>, <b>church</b> y <b>tradition</b>.",
          ],
          tags: ["falsefriend"],
        },
        {
          q: "fundamentalist",
          a: [
            "Originally, a member of an early twentieth-century American Protestant movement that defended a set of core doctrines it called the fundamentals.",
            "En su origen, miembro de un movimiento protestante estadounidense de principios del siglo XX que defendía un conjunto de doctrinas centrales a las que llamó <em>the fundamentals</em>.",
          ],
          ex: "The historian traced how the word <em>fundamentalist</em> changed meaning over a century.",
          note: [
            "Today the word is mostly applied by outsiders and is often heard as criticism. Use the name a church or a person uses for itself.",
            "Hoy la palabra la aplican sobre todo personas ajenas al grupo y muchas veces se escucha como crítica. Usa el nombre que la iglesia o la persona usa para sí misma.",
          ],
          tags: [],
        },
        {
          q: "Oh my God",
          hint: ["(carries more weight in English)", "(pesa más en inglés)"],
          a: [
            "An exclamation of surprise. Extremely common, and avoided by many religious people.",
            "Exclamación de sorpresa. Es comunísima, y muchas personas religiosas la evitan.",
          ],
          ex: "<em>Oh my God</em>, I completely forgot about the client dinner.",
          trap: [
            "Spanish <em>¡Dios mío!</em> and <em>¡Jesús!</em> are mild. In English, many religious listeners hear <span class='x'>✗</span> <em>Oh my God</em> and especially <span class='x'>✗</span> <em>Jesus!</em> or <em>Jesus Christ!</em> as disrespectful use of a holy name. With people you do not know well, say <span class='ok'>✓</span> <em>Oh my <b>gosh</b></em>, <em>Oh my <b>goodness</b></em>, or simply <em><b>Wow</b></em>.",
            "<em>¡Dios mío!</em> y <em>¡Jesús!</em> son expresiones suaves en español. En inglés, muchas personas religiosas escuchan <span class='x'>✗</span> <em>Oh my God</em>, y sobre todo <span class='x'>✗</span> <em>Jesus!</em> o <em>Jesus Christ!</em>, como un uso irrespetuoso de un nombre sagrado. Con gente que no conoces bien, di <span class='ok'>✓</span> <em>Oh my <b>gosh</b></em>, <em>Oh my <b>goodness</b></em> o simplemente <em><b>Wow</b></em>.",
          ],
          tags: ["core", "falsefriend", "error"],
        },
        {
          q: "come-to-Jesus meeting",
          a: [
            "In business slang, a frank conversation in which someone is made to face a hard truth.",
            "En la jerga de negocios, una conversación franca en la que se hace que alguien enfrente una verdad difícil.",
          ],
          ex: "The CFO called a <em>come-to-Jesus meeting</em> about the project's costs.",
          note: [
            "The image comes from revival preaching. It is informal and some people find it irreverent, so it is one to understand, not to use with clients.",
            "La imagen viene de la predicación de avivamiento. Es informal y a algunas personas les parece irreverente, así que es de las que conviene entender, no usar con clientes.",
          ],
          tags: ["idiom"],
        },
      ],
    },
    {
      title: [
        "At Work — Talking About Religion Gracefully",
        "En el trabajo: hablar de religión con tacto",
      ],
      rule: [
        "When a colleague mentions church, an invitation, or a prayer, the gesture is almost always friendly. A warm, brief answer is all that is needed, and you are free to share as much or as little about yourself as you wish.",
        "Cuando un colega menciona su iglesia, una invitación o una oración, el gesto casi siempre es amistoso. Basta con una respuesta cálida y breve, y tienes toda la libertad de compartir sobre ti tanto o tan poco como quieras.",
      ],
      items: [
        {
          q: "person of faith",
          a: [
            "A religious person, of any religion. A respectful, neutral phrase.",
            "Una persona religiosa, de cualquier religión. Es una frase respetuosa y neutral.",
          ],
          ex: "As a <em>person of faith</em>, she volunteers at the shelter every month.",
          note: [
            "Plural: <b>people of faith</b>. It avoids naming a specific religion, which is why you see it in company communications.",
            "Plural: <b>people of faith</b>. Evita nombrar una religión en específico, y por eso la ves en comunicados de empresa.",
          ],
          tags: ["core"],
        },
        {
          q: "I grew up Catholic",
          a: [
            "A simple, complete answer when someone asks about your religious background.",
            "Una respuesta sencilla y completa cuando alguien te pregunta por tu formación religiosa.",
          ],
          ex: "<em>I grew up Catholic</em>, so I'd love to see what your service is like.",
          trap: [
            "Keep the particle and the capital: <span class='x'>✗</span> <em>I grew catholic</em> → <span class='ok'>✓</span> <em>I <b>grew up</b> Catholic</em>. And do not set the two words against each other: <span class='x'>✗</span> <em>I'm not Christian, I'm Catholic</em>. In English, Catholics are Christians.",
            "Conserva la partícula y la mayúscula: <span class='x'>✗</span> <em>I grew catholic</em> → <span class='ok'>✓</span> <em>I <b>grew up</b> Catholic</em>. Y no contrapongas las dos palabras: <span class='x'>✗</span> <em>I'm not Christian, I'm Catholic</em>. En inglés, los católicos son <em>Christians</em>.",
          ],
          tags: ["core", "error"],
        },
        {
          q: "spiritual but not religious",
          a: [
            "A common self-description for someone who has a spiritual life and does not belong to a religious institution.",
            "Una descripción común que hace de sí misma una persona con vida espiritual que no pertenece a una institución religiosa.",
          ],
          ex: "I would say I'm <em>spiritual but not religious</em>.",
          tags: [],
        },
        {
          q: "atheist / agnostic",
          a: [
            "An atheist does not believe in God; an agnostic holds that it cannot be known whether God exists.",
            "Un <em>atheist</em> no cree en Dios; un <em>agnostic</em> sostiene que no se puede saber si Dios existe.",
          ],
          ex: "My husband is an <em>atheist</em>, but he comes to church with us at Christmas.",
          note: [
            "<b>Atheist</b> is a noun and needs the article: <span class='x'>✗</span> <em>I'm atheist</em> → <span class='ok'>✓</span> <em>I'm <b>an</b> atheist</em>. <b>Agnostic</b> works as an adjective too: <em>I'm agnostic</em>. Pronunciation: <b>AY-thee-ist</b>.",
            "<b>Atheist</b> es sustantivo y necesita el artículo: <span class='x'>✗</span> <em>I'm atheist</em> → <span class='ok'>✓</span> <em>I'm <b>an</b> atheist</em>. <b>Agnostic</b> también funciona como adjetivo: <em>I'm agnostic</em>. Pronunciación: <b>EI-thi-ist</b>.",
          ],
          tags: [],
        },
        {
          q: "I appreciate you asking",
          a: [
            "A gracious opening for answering a personal question about faith, or for declining to answer it.",
            "Una forma amable de empezar a responder una pregunta personal sobre la fe, o de declinar responderla.",
          ],
          ex: "<em>I appreciate you asking</em>; my faith is important to me, and I'm Catholic.",
          note: [
            "It works when someone asks <em>Are you saved?</em> or <em>Do you know the Lord?</em>, questions that are asked sincerely. To keep the matter private: <em>I appreciate you asking, but that's something I keep to myself</em>.",
            "Funciona cuando alguien te pregunta <em>Are you saved?</em> o <em>Do you know the Lord?</em>, preguntas que se hacen con sinceridad. Para mantener el tema en privado: <em>I appreciate you asking, but that's something I keep to myself</em>.",
          ],
          tags: ["core"],
        },
        {
          q: "Thank you for the invitation",
          a: [
            "The courteous way to answer an invitation to church, whether you accept or decline.",
            "La forma cortés de responder a una invitación a la iglesia, ya sea que aceptes o no.",
          ],
          ex: "<em>Thank you for the invitation</em>; we already have plans on Sunday, but it was kind of you to ask.",
          note: [
            "An invitation to church is a gesture of hospitality, similar to inviting you to dinner. To accept: <em>We'd love to come. What time does the service start?</em>",
            "Una invitación a la iglesia es un gesto de hospitalidad, parecido a invitarte a cenar. Para aceptar: <em>We'd love to come. What time does the service start?</em>",
          ],
          tags: ["core"],
        },
        {
          q: "I'll be praying for you",
          a: [
            "A sincere expression of support from a religious colleague when you are facing something difficult.",
            "Una expresión sincera de apoyo de un colega religioso cuando estás enfrentando algo difícil.",
          ],
          ex: "I heard about your mom's surgery. <em>I'll be praying for you</em> and your family.",
          note: [
            "Whatever your own beliefs, the natural reply is <b>Thank you, that means a lot</b>.",
            "Sean cuales sean tus creencias, la respuesta natural es <b>Thank you, that means a lot</b>.",
          ],
          tags: ["core"],
        },
        {
          q: "Any plans for the holidays?",
          a: [
            "An open question that lets the other person mention religious plans or leave them out.",
            "Una pregunta abierta que le permite a la otra persona mencionar planes religiosos o dejarlos fuera.",
          ],
          ex: "<em>Any plans for the holidays?</em> Are you traveling or staying in town?",
          note: [
            "The same pattern works all year: <em>Any plans for Easter weekend?</em> If they mention church, a natural follow-up is <em>What is the service like?</em>",
            "El mismo patrón funciona todo el año: <em>Any plans for Easter weekend?</em> Si mencionan la iglesia, una pregunta natural para continuar es <em>What is the service like?</em>",
          ],
          tags: [],
        },
        {
          q: "proselytize",
          a: [
            "To try to persuade someone to adopt your religion. Spanish <em>hacer proselitismo</em>.",
            "Tratar de convencer a alguien de adoptar tu religión: hacer proselitismo.",
          ],
          ex: "The employee handbook asks staff not to <em>proselytize</em> at work.",
          note: [
            "Pronunciation: <b>PROSS-uh-luh-tyze</b>. It is the formal word that workplace policies use; in conversation people say <em>push your beliefs on someone</em>.",
            "Pronunciación: <b>PRO-se-li-taiz</b>. Es la palabra formal que usan las políticas laborales; al platicar, la gente dice <em>push your beliefs on someone</em>.",
          ],
          tags: [],
        },
        {
          q: "I respect that",
          a: [
            "A short, sincere way to acknowledge a belief or a practice you do not share.",
            "Una forma breve y sincera de reconocer una creencia o una práctica que no compartes.",
          ],
          ex: "You don't work on Sundays at all? <em>I respect that</em>; let's plan the launch for Monday.",
          note: [
            "It closes the topic without agreeing or disagreeing, and it pairs well with a practical next step, as in the example.",
            "Cierra el tema sin darle la razón ni quitársela a nadie, y combina bien con un siguiente paso práctico, como en el ejemplo.",
          ],
          tags: [],
        },
      ],
    },
  ],
  cheat: [
    [
      ["SERVICE, NOT MASS", "SERVICE, NO MASS"],
      [
        "A Protestant Sunday gathering is a <b>service</b>; <em>culto</em> is never <em>cult</em>.",
        "La reunión dominical protestante es un <b>service</b>; <em>culto</em> nunca es <em>cult</em>.",
      ],
    ],
    [
      ["PASTOR, NOT FATHER", "PASTOR, NO FATHER"],
      [
        "Say <b>the pastor</b> and address him or her as <b>Pastor</b> plus the name.",
        "Di <b>the pastor</b> y dirígete a él o a ella como <b>Pastor</b> más el nombre.",
      ],
    ],
    [
      ["CHURCH, NOT TEMPLE", "CHURCH, NO TEMPLE"],
      [
        "<em>Templo</em> is <b>church</b>, and you <b>go to church</b> with no article.",
        "<em>Templo</em> es <b>church</b>, y se dice <b>go to church</b> sin artículo.",
      ],
    ],
    [
      ["CHRISTIAN INCLUDES CATHOLICS", "CHRISTIAN INCLUYE A LOS CATÓLICOS"],
      [
        "For non-Catholic Christians say <b>Protestant</b> or name the church, not <em>Christian</em>.",
        "Para los cristianos no católicos di <b>Protestant</b> o nombra la iglesia, no <em>Christian</em>.",
      ],
    ],
    [
      ["EVANGELICAL IS NARROWER", "EVANGELICAL ES MÁS ACOTADO"],
      [
        "Mexican <em>evangélico</em> is broader than American <b>evangelical</b>; not every Protestant is one.",
        "<em>Evangélico</em> en México es más amplio que <b>evangelical</b> en Estados Unidos; no todo protestante lo es.",
      ],
    ],
    [
      ["MINISTER VS. SECRETARY", "MINISTER Y SECRETARY"],
      [
        "A <b>minister</b> is clergy; a member of the US Cabinet is a <b>secretary</b>.",
        "Un <b>minister</b> es del clero; un miembro del gabinete de Estados Unidos es un <b>secretary</b>.",
      ],
    ],
    [
      ["OH MY GOSH", "OH MY GOSH"],
      [
        "With people you do not know well, use <b>Oh my gosh</b> in place of <em>Oh my God</em> or <em>Jesus!</em>",
        "Con gente que no conoces bien, usa <b>Oh my gosh</b> en lugar de <em>Oh my God</em> o <em>Jesus!</em>",
      ],
    ],
    [
      ["THANK, THEN ANSWER", "AGRADECE Y LUEGO RESPONDE"],
      [
        "An invitation or a prayer is offered as kindness: say <b>thank you</b> first, then accept or decline.",
        "Una invitación o una oración se ofrece como un gesto amable: primero di <b>thank you</b> y luego acepta o declina.",
      ],
    ],
  ],
};
