import type { QuizConfig } from "../types";

export const professionalServicesConfig: QuizConfig = {
  quizId: "professional-services",

  en: {
    title: "Professional Communication Confidence Assessment",
    subtitle:
      "For doctors, lawyers, and consultants. See how your English impacts liability, trust, client authority, and professional credibility in North America.",

    questions: [
      {
        id: 1,
        category: "clarity",
        question:
          "When advising on high-stakes matters, how confident are you that your English conveys exactly the nuance you intend?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Fully confident—I control tone, detail, and precision perfectly.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Mostly confident—I get facts right but worry I lose subtle nuance.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Anxious—I second-guess words, fearing misunderstandings creates liability.",
          },
          {
            index: 3,
            score: 0,
            label: "Unsure—I stick to written reports to be safe.",
          },
        ],
      },
      {
        id: 2,
        category: "clarity",
        question:
          "How effectively do you translate complex professional jargon into clear, reassuring English for laypeople?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Seamlessly—I make the complex feel simple and build trust instantly.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Functionally—They understand facts, but I struggle to sound warm.",
          },
          {
            index: 2,
            score: 3,
            label:
              'Poorly—Clients look confused or ask for a "simpler version."',
          },
          {
            index: 3,
            score: 0,
            label:
              "I don't—I rely on written summaries or translators for heavy details.",
          },
        ],
      },
      {
        id: 3,
        category: "confidence",
        question:
          "When challenged in a live meeting in English, how effectively do you defend your position?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "It holds firm—I defend my position calmly and persuasively in English.",
          },
          {
            index: 1,
            score: 6,
            label:
              "It wavers—I sound defensive or hesitant while searching for the right English words.",
          },
          {
            index: 2,
            score: 3,
            label:
              "It drops—I struggle to push back politely in a second language, so I stay silent.",
          },
          {
            index: 3,
            score: 0,
            label:
              "It breaks—I defer to email to avoid saying the wrong thing in English.",
          },
        ],
      },
      {
        id: 4,
        category: "negotiation",
        question:
          "How comfortable are you delivering difficult news or discussing fees/billables in English?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Very comfortable—I can be direct yet empathetic.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Somewhat comfortable—I get the message across, but sound blunter than I intend.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Uncomfortable—I over-apologize or soften the message too much.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Avoidant—I hide behind email to avoid the live conversation entirely.",
          },
        ],
      },
      {
        id: 5,
        category: "real-time",
        question:
          "During high-pressure questioning (courtroom, boardroom, or consult), how do you handle unexpected, rapid-fire questions?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Effortlessly—I pivot, reframe, and answer without missing a beat.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Competently—I answer correctly, but speak slower than usual.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Rigidly—I need a moment to translate, creating awkward silences.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Anxiously—I freeze up or give short answers to end the pressure.",
          },
        ],
      },
      {
        id: 6,
        category: "cultural",
        question:
          'How effectively does your professional empathy (your "bedside manner") translate into English?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Fully—I build deep trust and connection just as easily as in my native language.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Mostly—I am professional and polite, but feel slightly more distant.",
          },
          {
            index: 2,
            score: 3,
            label:
              "It's muted—I feel \"clinical\" because I'm focused on grammar.",
          },
          {
            index: 3,
            score: 0,
            label: "It's blocked—I feel stiff, robotic, and unable to connect.",
          },
        ],
      },
    ],

    gapDefinitions: {
      clarity: {
        name: "Precision & Liability",
        lowScoreImpact:
          "Imprecise language creates liability exposure. Clients may misunderstand critical advice, leading to poor decisions or legal disputes.",
        recommendation:
          'My Advice: Practice explaining complex concepts using "signposting" language (e.g., "There are three key risks here...").',
        urgency: "high",
      },
      confidence: {
        name: "Authority & Presence",
        lowScoreImpact:
          "When you can't defend your recommendations persuasively, clients question your expertise—even when you're right.",
        recommendation:
          'My Advice: Rehearse "pushback phrases" that allow you to stand your ground politely but firmly.',
        urgency: "high",
      },
      "real-time": {
        name: "Rapid-Fire Response",
        lowScoreImpact:
          "Hesitation under pressure signals uncertainty. In adversarial situations, opponents exploit this to undermine your credibility.",
        recommendation:
          'My Advice: Use "buying time" phrases ("That\'s a crucial point, let me address it specifically...") to gain seconds to think.',
        urgency: "medium",
      },
      negotiation: {
        name: "Friction Management",
        lowScoreImpact:
          "Avoiding difficult conversations erodes trust. Clients sense your discomfort and may question your candor.",
        recommendation:
          "My Advice: Role-play delivering bad news or fee increases until the language feels neutral and factual, not emotional.",
        urgency: "medium",
      },
      cultural: {
        name: "Rapport & Trust",
        lowScoreImpact:
          "Without rapport, relationships stay transactional. Clients won't refer you or stick with you through difficult outcomes.",
        recommendation:
          'My Advice: Focus on "active listening" cues and small talk openers to humanize the interaction before diving into business.',
        urgency: "low",
      },
    },

    results: {
      impactTitle: "The Cost of the Distance Your English Creates",
      tiers: {
        "Credibility Gap": {
          title: "Your Patients Nod, But They Don't Trust You",
          description:
            "Your clinical expertise is flawless. You've spent years mastering your craft. But when you explain a diagnosis or treatment plan in English, something gets lost. Patients nod politely, but you can see the doubt in their eyes. They leave without scheduling the procedure. They don't follow your recommendations. They seek second opinions from less qualified providers who 'just explain things better.' Your English isn't just creating distance—it's costing you patient compliance, referrals, and the trust you've earned through excellence.",
        },
        "Passive Proficiency": {
          title: "You Sound Clinical When You Need to Sound Caring",
          description:
            "Patients understand your words, but they don't feel your empathy. You're so focused on getting the English right that you sound robotic. Cold. Distant. You can explain the facts, but you struggle to reassure worried parents or anxious patients. You can answer questions, but you can't build the warm authority that makes patients say 'yes' to treatment plans. And in healthcare, that warmth isn't a nice-to-have—it's what drives compliance, prevents lawsuits, and generates referrals.",
        },
        "Executive Presence": {
          title: "Your Bedside Manner Translates Perfectly",
          description:
            "You've mastered the balance between clinical precision and human warmth in English. Patients trust both your expertise and your care. They accept treatment plans without hesitation. They refer their friends and family. The opportunity now is refinement—developing the subtle communication skills that transform you from 'excellent clinician' to 'the doctor everyone wants.' The kind of presence that commands premium fees and builds a practice through word-of-mouth alone.",
        },
      },
      eliteComparison: {
        title: "The 5 Habits I See in the Top 1% of Leaders",
        items: [
          "They translate medical complexity into patient clarity. They make worried parents feel informed, not overwhelmed—building trust through understanding, not jargon.",
          "They deliver difficult diagnoses with warm authority. Bad news doesn't shake their presence. Patients trust them more, not less, when things go wrong.",
          "They explain treatment plans without sounding defensive. When patients question their recommendations, they educate rather than lecture—and patients accept the plan.",
          "They build rapport before the exam. The first two minutes of every appointment establish the trust that makes everything else easier.",
          "They handle anxious patients with composure. Worried parents, skeptical patients, difficult family members—nothing breaks their professional warmth.",
        ],
      },
      cta: {
        title: "Ready to Improve Your English Fast?",
        subtext: "Quick discussion. Personal. No pressure.",
        buttonText: "👉 Book a Session with Me",
        footerText: "",
      },
    },
  },

  es: {
    title: "Evaluación de Comunicación Profesional",
    subtitle:
      "Para médicos, abogados y consultores. Descubre cómo tu inglés impacta tu autoridad, confianza, riesgo profesional y credibilidad con clientes norteamericanos.",

    questions: [
      {
        id: 1,
        category: "clarity",
        question:
          "Al asesorar sobre temas delicados, ¿qué tan seguro estás de que tu inglés transmite exactamente el matiz que intentas?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Totalmente seguro—controlo el tono, detalle y precisión perfectamente.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Mayormente seguro—acierto en los hechos pero temo perder matices.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Ansioso—dudo de mis palabras, temiendo que un malentendido cree responsabilidad legal.",
          },
          {
            index: 3,
            score: 0,
            label: "Inseguro—me limito a informes escritos para estar seguro.",
          },
        ],
      },
      {
        id: 2,
        category: "clarity",
        question:
          "¿Qué tan efectivamente traduces la jerga profesional compleja a un inglés claro y tranquilizador para clientes no expertos?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Perfectamente—hago que lo complejo parezca simple y genero confianza.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Funcionalmente—entienden los hechos, pero me cuesta sonar cálido.",
          },
          {
            index: 2,
            score: 3,
            label:
              'Pobremente—los clientes parecen confundidos o piden una "versión más simple".',
          },
          {
            index: 3,
            score: 0,
            label:
              "No lo hago—dependo de resúmenes escritos o traductores para los detalles.",
          },
        ],
      },
      {
        id: 3,
        category: "confidence",
        question:
          "Cuando te desafían en una reunión en vivo en inglés, ¿qué tan efectivamente defiendes tu posición?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Se mantiene firme—defiendo mi postura con calma y persuasión en inglés.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Vacila—sueno defensivo o dudoso mientras busco las palabras correctas en inglés.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Cae—me cuesta contradecir educadamente en un segundo idioma, así que guardo silencio.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Se rompe—prefiero responder por email para no equivocarme en inglés.",
          },
        ],
      },
      {
        id: 4,
        category: "negotiation",
        question:
          "¿Qué tan cómodo te sientes dando noticias difíciles o discutiendo honorarios en inglés?",
        answers: [
          {
            index: 0,
            score: 10,
            label: "Muy cómodo—puedo ser directo pero empático.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Algo cómodo—transmito el mensaje, pero sueno más brusco de lo que quisiera.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Incómodo—me disculpo demasiado o suavizo tanto el mensaje que se pierde.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Evitativo—me escondo detrás del email para evitar hablar en vivo.",
          },
        ],
      },
      {
        id: 5,
        category: "real-time",
        question:
          "Durante un interrogatorio o consulta bajo presión, ¿cómo manejas preguntas rápidas e inesperadas?",
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Sin esfuerzo—me adapto, reencuadro y respondo sin perder el ritmo.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Competentemente—respondo bien, pero hablo más lento de lo habitual.",
          },
          {
            index: 2,
            score: 3,
            label:
              "Rígidamente—necesito traducir mentalmente, creando silencios incómodos.",
          },
          {
            index: 3,
            score: 0,
            label:
              "Ansiosamente—me bloqueo o doy respuestas cortas para acabar la presión.",
          },
        ],
      },
      {
        id: 6,
        category: "cultural",
        question:
          '¿Qué tan efectivamente se traduce tu empatía profesional ("trato humano") al inglés?',
        answers: [
          {
            index: 0,
            score: 10,
            label:
              "Totalmente—genero confianza y conexión tan fácil como en mi idioma.",
          },
          {
            index: 1,
            score: 6,
            label:
              "Mayormente—soy profesional, pero me siento un poco más distante.",
          },
          {
            index: 2,
            score: 3,
            label:
              'Apagado—me siento "clínico" porque me enfoco en la gramática.',
          },
          {
            index: 3,
            score: 0,
            label:
              "Bloqueado—me siento rígido, robótico e incapaz de conectar.",
          },
        ],
      },
    ],

    gapDefinitions: {
      clarity: {
        name: "Precisión y Responsabilidad",
        lowScoreImpact:
          "El lenguaje impreciso crea riesgo legal. Los clientes pueden malinterpretar consejos críticos, llevando a malas decisiones.",
        recommendation:
          'Mi Consejo: Practica explicar conceptos complejos usando lenguaje de "señalización" (ej. "Hay tres riesgos clave aquí...").',
        urgency: "high",
      },
      confidence: {
        name: "Autoridad y Presencia",
        lowScoreImpact:
          "Cuando no puedes defender tus recomendaciones persuasivamente, los clientes cuestionan tu experiencia, aunque tengas razón.",
        recommendation:
          'Mi Consejo: Ensaya frases de "rechazo cortés" que te permitan mantener tu postura con firmeza pero educación.',
        urgency: "high",
      },
      "real-time": {
        name: "Respuesta Rápida",
        lowScoreImpact:
          "La vacilación bajo presión señala incertidumbre. En situaciones adversas, los oponentes explotan esto para minar tu credibilidad.",
        recommendation:
          'Mi Consejo: Usa frases para "ganar tiempo" ("Ese es un punto crucial, permíteme abordarlo específicamente...") para pensar.',
        urgency: "medium",
      },
      negotiation: {
        name: "Manejo de Fricción",
        lowScoreImpact:
          "Evitar conversaciones difíciles erosiona la confianza. Los clientes notan tu incomodidad y pueden cuestionar tu franqueza.",
        recommendation:
          "Mi Consejo: Haz role-play dando malas noticias hasta que el lenguaje se sienta neutral y factual, no emocional.",
        urgency: "medium",
      },
      cultural: {
        name: "Rapport y Confianza",
        lowScoreImpact:
          "Sin rapport, las relaciones son transaccionales. Los clientes no te referirán ni se quedarán contigo en momentos difíciles.",
        recommendation:
          'Mi Consejo: Enfócate en señales de "escucha activa" y frases de apertura para humanizar la interacción.',
        urgency: "low",
      },
    },

    results: {
      impactTitle: "El Costo de la Distancia que Crea tu Inglés",
      tiers: {
        "Credibility Gap": {
          title: "Tus pacientes asienten, pero no confían en ti",
          description:
            "Tu experiencia clínica es impecable. Llevas años dominando tu oficio. Pero al explicar un diagnóstico o tratamiento en inglés, algo se pierde. Los pacientes asienten por educación, pero ves la duda en sus ojos. No siguen tus recomendaciones o buscan una segunda opinión con alguien menos calificado que 'simplemente explica mejor'. Tu inglés te está costando la adherencia al tratamiento y las referencias que mereces.",
        },
        "Passive Proficiency": {
          title: "Suenas clínico cuando necesitas sonar humano",
          description:
            "Los pacientes entienden tus palabras, pero no sienten tu empatía. Estás tan concentrado en no equivocarte en inglés que suenas robótico. Frío. Distante. Puedes explicar los hechos, pero te cuesta tranquilizar a padres preocupados o pacientes ansiosos. En salud y leyes, esa calidez no es un lujo: es lo que evita demandas y genera lealtad.",
        },
        "Executive Presence": {
          title: "Tu 'Trato Humano' se traduce perfectamente",
          description:
            "Has dominado el equilibrio entre precisión técnica y calidez humana en inglés. Los clientes confían tanto en tu experiencia como en tu cuidado. Aceptan tus planes sin dudar. La oportunidad ahora es el refinamiento: desarrollar las habilidades sutiles que te transforman de 'excelente profesional' a 'el experto que todos quieren'.",
        },
      },
      eliteComparison: {
        title: "Los 5 Hábitos que veo en el Top 1% de Líderes",
        items: [
          "Traducen la complejidad en claridad. Hacen que los clientes se sientan informados, no abrumados—construyendo confianza a través del entendimiento, no de la jerga.",
          "Dan noticias difíciles con autoridad cálida. Las malas noticias no sacuden su presencia. Los pacientes confían más en ellos cuando las cosas van mal.",
          "Explican planes sin sonar defensivos. Cuando cuestionan sus recomendaciones, educan en lugar de sermonear.",
          "Construyen rapport antes del examen. Los primeros dos minutos establecen la confianza que facilita todo lo demás.",
          "Manejan pacientes ansiosos con compostura. Nada rompe su calidez profesional.",
        ],
      },
      cta: {
        title: "¿Listo para mejorar tu inglés rápido?",
        subtext: "Plática breve. Personal. Sin presión.",
        buttonText: "👉 Agendar una sesión conmigo",
        footerText: "",
      },
    },
  },
};
