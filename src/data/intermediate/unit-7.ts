// Unit 7: "Health and Emergencies" — Full course content
// Theme: Doctor visits, symptoms, emergencies, pharmacy
// Grammar: Passive voice + advice modals (should, ought to, had better)
// Pronunciation: Schwa in passive constructions
// Section A: SurvivalPhrases (high-stakes English the user might need verbatim)

import type {
  Dialogue,
  ErrorCorrectionSet,
  IntermediateVocabItem,
} from "./types";
import type { SurvivalCategory } from "../../components/course/SurvivalPhrases";
import type { SentenceBlock, PronunciationDrill } from "../course/unit-1";

// ─── Section A: Survival Phrases ─────────────────────────────────────────────

export const survivalCategories: SurvivalCategory[] = [
  {
    label: "At the Doctor",
    labelEs: "Con el Doctor",
    icon: "stethoscope",
    description:
      "Phrases for describing symptoms and asking questions during a doctor's appointment. These are the exact words doctors expect to hear.",
    descriptionEs:
      "Frases para describir síntomas y hacer preguntas durante una cita médica. Estas son las palabras exactas que los doctores esperan escuchar.",
    phrases: [
      {
        situation: "You've had a sore throat for 3 days and want to describe it.",
        situationEs: "Has tenido dolor de garganta por 3 días y quieres describirlo.",
        english: "I've had a sore throat for three days, and it's been getting worse.",
        spanish: "He tenido dolor de garganta por tres días, y ha estado empeorando.",
        whyExact:
          "'I've had... for' uses present perfect — the tense doctors expect for ongoing symptoms. 'Getting worse' is the standard way to describe progression.",
        whyExactEs:
          "'I've had... for' usa el presente perfecto — el tiempo que los doctores esperan para síntomas continuos. 'Getting worse' es la forma estándar de describir la progresión.",
        urgency: "low",
      },
      {
        situation: "You need to ask about how to take a medication.",
        situationEs: "Necesitas preguntar cómo tomar un medicamento.",
        english: "How often should I take this, and should it be taken with food?",
        spanish: "¿Con qué frecuencia debería tomar esto, y debería tomarse con comida?",
        whyExact:
          "'Should I take' is the standard advice modal in medical contexts. 'Should it be taken' uses passive voice — the natural way to ask about a medication's instructions.",
        whyExactEs:
          "'Should I take' es el modal de consejo estándar en contextos médicos. 'Should it be taken' usa la voz pasiva — la forma natural de preguntar sobre las instrucciones de un medicamento.",
        urgency: "low",
      },
      {
        situation: "You're allergic to penicillin and need to make sure the doctor knows.",
        situationEs: "Eres alérgico a la penicilina y necesitas asegurarte de que el doctor lo sepa.",
        english: "I'm allergic to penicillin. I just want to make sure that's noted in my file.",
        spanish: "Soy alérgico a la penicilina. Solo quiero asegurarme de que esté anotado en mi expediente.",
        whyExact:
          "'I just want to make sure' is the polite, non-confrontational way to insist on something. 'That's noted' is medical-office English for 'recorded'.",
        whyExactEs:
          "'I just want to make sure' es la forma cortés y no confrontacional de insistir en algo. 'That's noted' es el inglés de consultorio médico para 'anotado'.",
        urgency: "high",
      },
      {
        situation: "You don't understand what the doctor just said.",
        situationEs: "No entiendes lo que el doctor acaba de decir.",
        english: "Could you explain that in simpler terms? I want to make sure I understand.",
        spanish: "¿Podría explicar eso en términos más simples? Quiero asegurarme de entender.",
        whyExact:
          "'Could you' is the polite request form. Saying 'I want to make sure I understand' is much better than 'I don't understand' — it shifts the focus from your limitation to your effort to follow.",
        whyExactEs:
          "'Could you' es la forma cortés de pedir. Decir 'I want to make sure I understand' es mucho mejor que 'I don't understand' — cambia el enfoque de tu limitación a tu esfuerzo por seguir la conversación.",
        urgency: "medium",
      },
    ],
  },
  {
    label: "Emergency Call",
    labelEs: "Llamada de Emergencia",
    icon: "phone",
    description:
      "If you ever need to call 911 in the U.S., these are the exact phrases that get help fastest. The dispatcher will ask in this order.",
    descriptionEs:
      "Si alguna vez necesitas llamar al 911 en EE.UU., estas son las frases exactas que consiguen ayuda más rápido. El operador preguntará en este orden.",
    phrases: [
      {
        situation: "The 911 operator answers. You need to state the emergency type immediately.",
        situationEs: "El operador del 911 contesta. Necesitas decir el tipo de emergencia inmediatamente.",
        english: "I need an ambulance. There's a medical emergency.",
        spanish: "Necesito una ambulancia. Hay una emergencia médica.",
        whyExact:
          "Lead with WHAT you need, not WHY. 'I need an ambulance' is faster than explaining symptoms first. The operator will ask follow-up questions.",
        whyExactEs:
          "Empieza con LO QUE necesitas, no con POR QUÉ. 'I need an ambulance' es más rápido que explicar síntomas primero. El operador hará preguntas de seguimiento.",
        urgency: "high",
      },
      {
        situation: "The operator asks for the address.",
        situationEs: "El operador pide la dirección.",
        english: "The address is 142 Main Street, apartment 3B. The cross street is Oak Avenue.",
        spanish: "La dirección es 142 Main Street, apartamento 3B. La calle perpendicular es Oak Avenue.",
        whyExact:
          "Always include the cross street if you can — it helps emergency services find you faster, especially in cities with long streets. 'Apartment' or 'unit' tells them which door.",
        whyExactEs:
          "Siempre incluye la calle perpendicular si puedes — ayuda a los servicios de emergencia a encontrarte más rápido, especialmente en ciudades con calles largas. 'Apartment' o 'unit' les dice qué puerta.",
        urgency: "high",
      },
      {
        situation: "The operator asks what's wrong with the person.",
        situationEs: "El operador pregunta qué le pasa a la persona.",
        english: "She's conscious but having trouble breathing. She's about 60 years old.",
        spanish: "Está consciente pero tiene dificultad para respirar. Tiene unos 60 años.",
        whyExact:
          "'Conscious' / 'unconscious' and 'breathing' / 'not breathing' are the two pieces of information that determine how help is dispatched. State them first.",
        whyExactEs:
          "'Consciente' / 'inconsciente' y 'respirando' / 'no respirando' son los dos datos que determinan cómo se despacha la ayuda. Decláralos primero.",
        urgency: "high",
      },
      {
        situation: "The operator tells you to stay on the line.",
        situationEs: "El operador te dice que te quedes en la línea.",
        english: "Yes, I'll stay on the line. What should I do until help arrives?",
        spanish: "Sí, me quedaré en la línea. ¿Qué debería hacer hasta que llegue la ayuda?",
        whyExact:
          "Asking 'what should I do' invites the dispatcher to give you instructions. They're trained to walk you through CPR, bleeding control, and other interventions.",
        whyExactEs:
          "Preguntar 'what should I do' invita al operador a darte instrucciones. Están entrenados para guiarte a través de CPR, control de sangrado y otras intervenciones.",
        urgency: "high",
      },
    ],
  },
  {
    label: "At the Pharmacy",
    labelEs: "En la Farmacia",
    icon: "pill",
    description:
      "Filling prescriptions and asking for over-the-counter medication. Pharmacists are a great resource if you know how to ask.",
    descriptionEs:
      "Surtir recetas y pedir medicamentos sin receta. Los farmacéuticos son un gran recurso si sabes cómo preguntar.",
    phrases: [
      {
        situation: "You're picking up a prescription that should be ready.",
        situationEs: "Vas a recoger una receta que debería estar lista.",
        english: "I'm here to pick up a prescription. The name is Garcia, G-A-R-C-I-A.",
        spanish: "Vengo a recoger una receta. El nombre es Garcia, G-A-R-C-I-A.",
        whyExact:
          "Always spell your last name. Pharmacists deal with hundreds of names daily — spelling avoids mix-ups, especially with names that aren't common in English.",
        whyExactEs:
          "Siempre deletrea tu apellido. Los farmacéuticos manejan cientos de nombres diariamente — deletrear evita confusiones, especialmente con nombres no comunes en inglés.",
        urgency: "low",
      },
      {
        situation: "You have a cold and want to ask the pharmacist for a recommendation.",
        situationEs: "Tienes un resfriado y quieres pedirle al farmacéutico una recomendación.",
        english: "I've come down with a cold. What would you recommend for congestion?",
        spanish: "Me ha dado un resfriado. ¿Qué me recomendaría para la congestión?",
        whyExact:
          "'Come down with' is the standard verb for catching a minor illness — much more natural than 'I have a cold'. 'What would you recommend' invites their expertise without demanding it.",
        whyExactEs:
          "'Come down with' es el verbo estándar para enfermarse de algo menor — mucho más natural que 'I have a cold'. 'What would you recommend' invita a su experticia sin exigirla.",
        urgency: "low",
      },
      {
        situation: "You want to know if a medication has side effects.",
        situationEs: "Quieres saber si un medicamento tiene efectos secundarios.",
        english: "Are there any side effects I should be aware of?",
        spanish: "¿Hay efectos secundarios de los que deba estar consciente?",
        whyExact:
          "'Side effects' is the universal medical term — never 'secondary effects' (literal Spanish translation). 'I should be aware of' is a polite way to ask without sounding worried.",
        whyExactEs:
          "'Side effects' es el término médico universal — nunca 'secondary effects' (traducción literal del español). 'I should be aware of' es una forma cortés de preguntar sin sonar preocupado.",
        urgency: "medium",
      },
    ],
  },
  {
    label: "At the Hospital",
    labelEs: "En el Hospital",
    icon: "hospital",
    description:
      "Emergency room and hospital admission English — the high-stress moments where every word matters.",
    descriptionEs:
      "Inglés de sala de emergencias y admisión hospitalaria — los momentos de alto estrés donde cada palabra importa.",
    phrases: [
      {
        situation: "You arrive at the ER with chest pain.",
        situationEs: "Llegas a la sala de emergencias con dolor de pecho.",
        english: "I'm having chest pain that started about an hour ago. I've never felt this before.",
        spanish: "Tengo dolor de pecho que empezó hace aproximadamente una hora. Nunca había sentido esto antes.",
        whyExact:
          "'Chest pain' is the magic phrase in any U.S. ER — it triggers immediate triage. Always include WHEN it started and whether it's NEW (never felt before) or familiar.",
        whyExactEs:
          "'Chest pain' es la frase mágica en cualquier sala de emergencias en EE.UU. — activa una clasificación inmediata. Siempre incluye CUÁNDO empezó y si es NUEVO (nunca sentido antes) o familiar.",
        urgency: "high",
      },
      {
        situation: "You need to give your medical history quickly.",
        situationEs: "Necesitas dar tu historial médico rápidamente.",
        english: "I have high blood pressure. I'm taking lisinopril. I have no other conditions.",
        spanish: "Tengo presión arterial alta. Estoy tomando lisinopril. No tengo otras condiciones.",
        whyExact:
          "Three short sentences in this exact order: condition, medication, anything else. Doctors trained on this format process the information instantly.",
        whyExactEs:
          "Tres oraciones cortas en este orden exacto: condición, medicamento, cualquier cosa más. Los doctores entrenados en este formato procesan la información instantáneamente.",
        urgency: "high",
      },
      {
        situation: "You're being asked to sign forms but don't fully understand them.",
        situationEs: "Te piden que firmes formularios pero no los entiendes completamente.",
        english: "Before I sign, could someone explain what I'm agreeing to? I want to be sure.",
        spanish: "Antes de firmar, ¿podría alguien explicar a qué estoy accediendo? Quiero estar seguro.",
        whyExact:
          "It is your legal right to understand any document before signing it. 'Before I sign' is firm but polite. Hospital staff are required to explain consent forms.",
        whyExactEs:
          "Es tu derecho legal entender cualquier documento antes de firmarlo. 'Before I sign' es firme pero cortés. El personal del hospital está obligado a explicar formularios de consentimiento.",
        urgency: "medium",
      },
    ],
  },
];

// ─── Section B: Dialogue Practice ────────────────────────────────────────────

export const dialogues: Dialogue[] = [
  {
    title: "A Visit to the Doctor",
    titleEs: "Una Visita al Doctor",
    setting: "A patient visits her doctor about persistent back pain",
    settingEs: "Una paciente visita a su doctora por dolor de espalda persistente",
    lines: [
      {
        speaker: "A",
        speakerLabel: "Dr. Wilson",
        speakerLabelEs: "Dra. Wilson",
        english: "Good morning. So tell me, what brings you in today?",
        spanish: "Buenos días. Dígame, ¿qué la trae por aquí hoy?",
        highlight: "what brings you in",
      },
      {
        speaker: "B",
        speakerLabel: "Carmen",
        speakerLabelEs: "Carmen",
        english:
          "I've had lower back pain for about two weeks now. It's been getting worse, especially in the morning.",
        spanish:
          "He tenido dolor de espalda baja por aproximadamente dos semanas. Ha estado empeorando, especialmente en la mañana.",
        highlight: "I've had... for about / been getting worse",
      },
      {
        speaker: "A",
        speakerLabel: "Dr. Wilson",
        speakerLabelEs: "Dra. Wilson",
        english: "I see. Have you been doing any heavy lifting recently?",
        spanish: "Ya veo. ¿Ha estado cargando cosas pesadas recientemente?",
      },
      {
        speaker: "B",
        speakerLabel: "Carmen",
        speakerLabelEs: "Carmen",
        english:
          "Not really. But I should mention that my office chair was replaced last month, and it's not very comfortable.",
        spanish:
          "No realmente. Pero debo mencionar que mi silla de oficina fue reemplazada el mes pasado, y no es muy cómoda.",
        highlight: "I should mention / was replaced",
      },
      {
        speaker: "A",
        speakerLabel: "Dr. Wilson",
        speakerLabelEs: "Dra. Wilson",
        english:
          "That could definitely be the cause. I'd like to examine your back, and then I think you should consider seeing a physical therapist.",
        spanish:
          "Eso podría ser definitivamente la causa. Me gustaría examinar su espalda, y luego creo que debería considerar ver a un fisioterapeuta.",
        highlight: "you should consider",
      },
      {
        speaker: "B",
        speakerLabel: "Carmen",
        speakerLabelEs: "Carmen",
        english:
          "Of course. Could you explain what a physical therapist does? I want to make sure I understand the recommendation.",
        spanish:
          "Por supuesto. ¿Podría explicar lo que hace un fisioterapeuta? Quiero asegurarme de entender la recomendación.",
        highlight: "Could you explain / I want to make sure",
      },
      {
        speaker: "A",
        speakerLabel: "Dr. Wilson",
        speakerLabelEs: "Dra. Wilson",
        english:
          "Of course. They'll teach you exercises that strengthen your back muscles. You ought to see results within a few weeks.",
        spanish:
          "Por supuesto. Le enseñarán ejercicios que fortalecen los músculos de la espalda. Debería ver resultados en unas pocas semanas.",
        highlight: "You ought to see",
      },
      {
        speaker: "B",
        speakerLabel: "Carmen",
        speakerLabelEs: "Carmen",
        english:
          "That sounds like a good plan. Should I take anything for the pain in the meantime?",
        spanish:
          "Eso suena como un buen plan. ¿Debería tomar algo para el dolor mientras tanto?",
        highlight: "Should I take",
      },
    ],
    keyPhrases: [
      {
        english: "What brings you in today?",
        spanish: "¿Qué lo/la trae por aquí hoy?",
        note: "The standard opening question from any U.S. doctor. Be ready for it.",
        noteEs: "La pregunta estándar de apertura de cualquier doctor en EE.UU. Prepárate para ella.",
      },
      {
        english: "I've had X for...",
        spanish: "He tenido X por...",
        note: "Present perfect — the correct tense for describing how long you've had a symptom.",
        noteEs: "Presente perfecto — el tiempo correcto para describir cuánto tiempo has tenido un síntoma.",
      },
      {
        english: "I should mention...",
        spanish: "Debo mencionar...",
        note: "The polite way to add a relevant detail you almost forgot. Doctors love this phrase.",
        noteEs: "La forma cortés de agregar un detalle relevante que casi olvidaste. Los doctores aman esta frase.",
      },
    ],
  },
];

// ─── Section C: Structure Builder ────────────────────────────────────────────

export const structureBlocks: SentenceBlock[] = [
  {
    label: "Passive voice: form and use",
    labelEs: "Voz pasiva: forma y uso",
    description:
      "Structure: be + past participle. Use it when the ACTION matters more than WHO did it. Common in medical, scientific, and formal English.",
    descriptionEs:
      "Estructura: be + participio pasado. Úsalo cuando la ACCIÓN importa más que QUIÉN la hizo. Común en inglés médico, científico y formal.",
    sentences: [
      {
        english: "The patient was examined by the doctor.",
        spanish: "El paciente fue examinado por la doctora.",
        highlight: "was examined",
      },
      {
        english: "Your prescription will be ready in 20 minutes.",
        spanish: "Su receta estará lista en 20 minutos.",
        highlight: "will be ready",
      },
      {
        english: "Side effects have been reported, but they're rare.",
        spanish: "Se han reportado efectos secundarios, pero son raros.",
        highlight: "have been reported",
      },
      {
        english: "These results need to be reviewed by a specialist.",
        spanish: "Estos resultados necesitan ser revisados por un especialista.",
        highlight: "need to be reviewed",
      },
    ],
  },
  {
    label: "Should: medical advice",
    labelEs: "Should: consejo médico",
    description:
      "'Should' is the most common modal in medical English — used by both doctors giving advice and patients asking what to do.",
    descriptionEs:
      "'Should' es el modal más común en inglés médico — usado tanto por doctores dando consejos como por pacientes preguntando qué hacer.",
    sentences: [
      {
        english: "You should take this medication twice a day.",
        spanish: "Debería tomar este medicamento dos veces al día.",
        highlight: "should take",
      },
      {
        english: "Should I be worried about these symptoms?",
        spanish: "¿Debería preocuparme por estos síntomas?",
        highlight: "Should I be worried",
      },
      {
        english: "You shouldn't drink alcohol while taking this.",
        spanish: "No debería tomar alcohol mientras toma esto.",
        highlight: "shouldn't drink",
      },
      {
        english: "When should I come back for a follow-up?",
        spanish: "¿Cuándo debería regresar para un seguimiento?",
        highlight: "should I come back",
      },
    ],
  },
  {
    label: "Ought to and had better",
    labelEs: "Ought to y had better",
    description:
      "'Ought to' is a more formal version of 'should'. 'Had better' is stronger — it implies a warning about consequences if you don't follow the advice.",
    descriptionEs:
      "'Ought to' es una versión más formal de 'should'. 'Had better' es más fuerte — implica una advertencia sobre las consecuencias si no sigues el consejo.",
    sentences: [
      {
        english: "You ought to see a specialist about that.",
        spanish: "Debería ver a un especialista sobre eso.",
        highlight: "ought to see",
      },
      {
        english: "She ought to rest for at least a week.",
        spanish: "Debería descansar por al menos una semana.",
        highlight: "ought to rest",
      },
      {
        english: "You'd better get that checked out — it doesn't look good.",
        spanish: "Más vale que se haga revisar eso — no se ve bien.",
        highlight: "You'd better get",
      },
      {
        english: "We had better leave for the hospital now.",
        spanish: "Más vale que salgamos al hospital ahora.",
        highlight: "had better leave",
      },
    ],
  },
  {
    label: "Combining passive voice with advice modals",
    labelEs: "Combinando voz pasiva con modales de consejo",
    description:
      "This combination is the bedrock of medical English. 'Should be taken', 'must be checked', 'ought to be reviewed' — these are everywhere in pharmacy labels and doctor instructions.",
    descriptionEs:
      "Esta combinación es la base del inglés médico. 'Should be taken', 'must be checked', 'ought to be reviewed' — están en todas partes en etiquetas de farmacia e instrucciones médicas.",
    sentences: [
      {
        english: "This medication should be taken with food.",
        spanish: "Este medicamento debería tomarse con comida.",
        highlight: "should be taken",
      },
      {
        english: "Your blood pressure should be checked monthly.",
        spanish: "Su presión arterial debería revisarse mensualmente.",
        highlight: "should be checked",
      },
      {
        english: "These symptoms ought to be evaluated by a professional.",
        spanish: "Estos síntomas deberían ser evaluados por un profesional.",
        highlight: "ought to be evaluated",
      },
      {
        english: "The dosage must not be exceeded.",
        spanish: "La dosis no debe excederse.",
        highlight: "must not be exceeded",
      },
    ],
  },
];

// ─── Section D: Error Correction ─────────────────────────────────────────────

export const errorCorrections: ErrorCorrectionSet = {
  title: "Common Mistakes in Medical English",
  titleEs: "Errores Comunes en Inglés Médico",
  description:
    "These errors can confuse doctors, slow down treatment, or accidentally minimize serious symptoms. Get them right — your health may depend on it.",
  descriptionEs:
    "Estos errores pueden confundir a los doctores, retrasar el tratamiento o minimizar accidentalmente síntomas serios. Hazlos bien — tu salud puede depender de ello.",
  items: [
    {
      incorrect: "I have pain in my chest since this morning.",
      correct: "I've had chest pain since this morning.",
      incorrectHighlight: "I have pain in my chest since",
      correctHighlight: "I've had chest pain since",
      explanation:
        "Two upgrades. First: with 'since' (a starting point), use present perfect, not present simple. Second: 'chest pain' is the standard medical term — much more direct than 'pain in my chest'. Triage staff process 'chest pain' as a high-priority phrase.",
      explanationEs:
        "Dos mejoras. Primero: con 'since' (un punto de inicio), usa el presente perfecto, no el presente simple. Segundo: 'chest pain' es el término médico estándar — mucho más directo que 'pain in my chest'. El personal de triaje procesa 'chest pain' como una frase de alta prioridad.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "The doctor said me to take this twice a day.",
      correct: "The doctor told me to take this twice a day.",
      incorrectHighlight: "said me to take",
      correctHighlight: "told me to take",
      explanation:
        "Same rule from Unit 5: 'tell' takes a direct object (told ME), 'say' does not. Also, after 'tell' use the infinitive 'to take' — never 'that I should take' in this construction.",
      explanationEs:
        "Misma regla de la Unidad 5: 'tell' toma un objeto directo (told ME), 'say' no. Además, después de 'tell' usa el infinitivo 'to take' — nunca 'that I should take' en esta construcción.",
      errorType: "literal-translation",
    },
    {
      incorrect: "I am sick from two days.",
      correct: "I've been sick for two days.",
      incorrectHighlight: "am sick from two days",
      correctHighlight: "have been sick for two days",
      explanation:
        "Three errors at once. 'I am sick' should be present perfect ('I've been sick'). 'From' should be 'for' (duration). And the natural medical phrasing uses 'I've been' (continuous condition), not 'I am' (current state). All three matter.",
      explanationEs:
        "Tres errores a la vez. 'I am sick' debería ser presente perfecto ('I've been sick'). 'From' debería ser 'for' (duración). Y la frase médica natural usa 'I've been' (condición continua), no 'I am' (estado actual). Los tres importan.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "This medicine should take with water.",
      correct: "This medicine should be taken with water.",
      incorrectHighlight: "should take with",
      correctHighlight: "should be taken with",
      explanation:
        "Passive voice problem. The medicine doesn't take itself — it IS taken by someone. The correct passive form is 'should BE TAKEN'. This is one of the most common errors on pharmacy instruction labels read by Spanish speakers.",
      explanationEs:
        "Problema de voz pasiva. El medicamento no se toma a sí mismo — alguien LO toma. La forma pasiva correcta es 'should BE TAKEN'. Este es uno de los errores más comunes al leer etiquetas de farmacia.",
      errorType: "tense-confusion",
    },
    {
      incorrect: "I am embarrassed because my stomach is hurting.",
      correct: "I'm uncomfortable because my stomach is hurting.",
      incorrectHighlight: "embarrassed",
      correctHighlight: "uncomfortable",
      explanation:
        "False cognate alert. 'Embarrassed' does NOT mean 'embarazada' (pregnant in Spanish). It means 'feeling shame'. If you say 'I'm embarrassed' to a doctor about a health issue, they'll think you're ashamed, not in physical discomfort. For pregnancy, say 'I'm pregnant'.",
      explanationEs:
        "Alerta de falso cognado. 'Embarrassed' NO significa 'embarazada'. Significa 'sentir vergüenza'. Si le dices 'I'm embarrassed' a un doctor sobre un problema de salud, pensará que estás avergonzado, no incómodo físicamente. Para embarazo, di 'I'm pregnant'.",
      errorType: "literal-translation",
    },
    {
      incorrect: "Are there any secondary effects of this medicine?",
      correct: "Are there any side effects of this medicine?",
      incorrectHighlight: "secondary effects",
      correctHighlight: "side effects",
      explanation:
        "'Secondary effects' is a literal translation of 'efectos secundarios' but it's not standard medical English. The correct term is 'side effects'. Pharmacists and doctors will understand 'secondary effects' but it sounds non-native immediately.",
      explanationEs:
        "'Secondary effects' es una traducción literal de 'efectos secundarios' pero no es inglés médico estándar. El término correcto es 'side effects'. Los farmacéuticos y doctores entenderán 'secondary effects' pero suena no-nativo inmediatamente.",
      errorType: "literal-translation",
    },
  ],
};

// ─── Section E: Pronunciation Lab ────────────────────────────────────────────

export const pronunciationDrills: PronunciationDrill[] = [
  {
    word: "be taken",
    spanishStress: "BE TAKEN",
    englishStress: "bi TAY-kən",
    tip: "In passive voice, 'be taken' flows together. The 'be' is short /bi/ and 'taken' has a schwa in the second syllable: TAY-kən, not TAY-ken. 'Should be taken' = 'shʊd-bi-TAY-kən'.",
    tipEs:
      "En la voz pasiva, 'be taken' fluye junto. El 'be' es corto /bi/ y 'taken' tiene una schwa en la segunda sílaba: TAY-kən, no TAY-ken. 'Should be taken' = 'shʊd-bi-TAY-kən'.",
  },
  {
    word: "patient",
    spanishStress: "PA-CIENT-E",
    englishStress: "PAY-shənt",
    tip: "'Patient' has just two syllables in English: PAY-shənt. The 'tient' becomes 'shənt' — never the four syllables Spanish speakers tend to give it. The 'a' is a long /ei/ sound.",
    tipEs:
      "'Patient' tiene solo dos sílabas en inglés: PAY-shənt. El 'tient' se vuelve 'shənt' — nunca las cuatro sílabas que tienden a darle los hispanohablantes. La 'a' es un sonido largo /ei/.",
  },
  {
    word: "medicine",
    spanishStress: "ME-DI-CI-NE",
    englishStress: "MED-sən",
    tip: "'Medicine' is two syllables in fast American English: MED-sən. The middle 'i' almost disappears. Don't say MED-i-cin (3 syllables) — that sounds non-native.",
    tipEs:
      "'Medicine' es dos sílabas en inglés americano rápido: MED-sən. La 'i' del medio casi desaparece. No digas MED-i-cin (3 sílabas) — eso suena no-nativo.",
  },
  {
    word: "comfortable",
    spanishStress: "COM-FOR-TA-BLE",
    englishStress: "KUMF-tər-bəl",
    tip: "Three syllables, not four: KUMF-tər-bəl. The 'comfor' collapses into 'KUMF', and the 'table' becomes 'tər-bəl' with two schwas. This is a notorious word for Spanish speakers.",
    tipEs:
      "Tres sílabas, no cuatro: KUMF-tər-bəl. El 'comfor' se colapsa en 'KUMF', y 'table' se vuelve 'tər-bəl' con dos schwas. Esta es una palabra notoria para hispanohablantes.",
  },
  {
    word: "ambulance",
    spanishStress: "AM-BU-LAN-CIA",
    englishStress: "AM-byə-ləns",
    tip: "'Ambulance' has three syllables in English with two schwas: AM-byə-ləns. Stress on the FIRST syllable. Spanish speakers often say AM-bu-LANCE — wrong stress placement.",
    tipEs:
      "'Ambulance' tiene tres sílabas en inglés con dos schwas: AM-byə-ləns. Acento en la PRIMERA sílaba. Los hispanohablantes frecuentemente dicen AM-bu-LANCE — colocación de acento incorrecta.",
  },
];

// ─── Section F: Self-Test Vocabulary ─────────────────────────────────────────

export const vocabularyList: IntermediateVocabItem[] = [
  // Symptom expressions
  { english: "I've had a sore throat for...", spanish: "He tenido dolor de garganta por...", type: "expression" },
  { english: "It's been getting worse.", spanish: "Ha estado empeorando.", type: "expression" },
  { english: "I'm having chest pain.", spanish: "Tengo dolor de pecho.", type: "expression" },
  { english: "I've come down with a cold.", spanish: "Me ha dado un resfriado.", type: "expression" },
  { english: "I'm allergic to...", spanish: "Soy alérgico a...", type: "expression" },
  // Question phrases for doctors
  { english: "Should I take...?", spanish: "¿Debería tomar...?", type: "expression" },
  { english: "How often should I...?", spanish: "¿Con qué frecuencia debería...?", type: "expression" },
  { english: "Are there any side effects?", spanish: "¿Hay efectos secundarios?", type: "expression" },
  { english: "Could you explain that in simpler terms?", spanish: "¿Podría explicar eso en términos más simples?", type: "expression" },
  // Emergency expressions
  { english: "I need an ambulance.", spanish: "Necesito una ambulancia.", type: "expression" },
  { english: "There's a medical emergency.", spanish: "Hay una emergencia médica.", type: "expression" },
  { english: "She's having trouble breathing.", spanish: "Tiene dificultad para respirar.", type: "expression" },
  // Body parts and conditions
  { english: "chest pain", spanish: "dolor de pecho", type: "noun" },
  { english: "side effects", spanish: "efectos secundarios", type: "noun" },
  { english: "prescription", spanish: "receta", type: "noun" },
  { english: "blood pressure", spanish: "presión arterial", type: "noun" },
  { english: "fever", spanish: "fiebre", type: "noun" },
  { english: "dizziness", spanish: "mareo", type: "noun" },
  { english: "nausea", spanish: "náusea", type: "noun" },
  { english: "swelling", spanish: "hinchazón", type: "noun" },
  { english: "rash", spanish: "sarpullido / erupción", type: "noun" },
  // Medical verbs
  { english: "to examine", spanish: "examinar", type: "verb" },
  { english: "to prescribe", spanish: "recetar", type: "verb" },
  { english: "to recover", spanish: "recuperarse", type: "verb" },
  { english: "to diagnose", spanish: "diagnosticar", type: "verb" },
];
