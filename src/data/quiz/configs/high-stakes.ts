/**
 * High-Stakes English Quiz Configuration
 * 
 * Theme: "The Language Gap" Edition
 * Target: Professionals who feel they are "smarter" in their native language.
 */

import type { QuizConfig } from '../types';

export const highStakesConfig: QuizConfig = {
  quizId: 'high-stakes',
  
  en: {
    title: 'High-Stakes Communication Confidence Assessment',
    subtitle: 'Discover if your English is bridging the gap between your expertise and your impact in high-pressure presentations, interviews, and critical meetings.',
    
    questions: [
      {
        id: 1,
        category: 'cultural', // Mapping "Identity/Presence" to cultural/soft skills bucket
        question: 'Compare how you feel presenting in your native language versus presenting in English. What is the difference?',
        answers: [
          { index: 0, score: 10, label: 'No difference. I feel equally powerful, witty, and authoritative in both languages.' },
          { index: 1, score: 6, label: 'Slight Friction. I am confident in English, but I have to focus harder to find the right tone.' },
          { index: 2, score: 3, label: 'The "Junior" Effect. I feel less senior in English because I can\'t express myself with the same nuance and speed.' },
          { index: 3, score: 0, label: 'Imposter Syndrome. In my native language, I own the room. In English, I feel lucky just to survive the meeting.' }
        ]
      },
      {
        id: 2,
        category: 'real-time',
        question: 'During an interview or Q&A, someone asks a complex, unexpected question. What happens in your brain?',
        answers: [
          { index: 0, score: 10, label: 'Direct Thought. I think and answer in English instantly without translating.' },
          { index: 1, score: 6, label: 'Buffering. I pause for a split second to organize my thoughts in English, then answer.' },
          { index: 2, score: 3, label: 'Translating. I formulate the answer in my native language first, then mentally translate it, which makes me slow to respond.' },
          { index: 3, score: 0, label: 'The Blank Stare. The stress of the language barrier makes my mind go blank, even if I know the answer.' }
        ]
      },
      {
        id: 3,
        category: 'clarity',
        question: 'You need to explain a complex strategy or tell a story to a North American audience. How do you choose your words?',
        answers: [
          { index: 0, score: 10, label: 'Precision. I use the exact right words to paint a picture, using idioms and metaphors naturally.' },
          { index: 1, score: 6, label: 'Simplicity. I stick to "safe" business vocabulary that I know I can pronounce correctly.' },
          { index: 2, score: 3, label: 'Dumbing it Down. I simplify my ideas so much to fit my vocabulary that I sound less intelligent than I actually am.' },
          { index: 3, score: 0, label: 'Avoidance. I cut the story short because I\'m afraid of getting stuck in a sentence I can\'t finish.' }
        ]
      },
      {
        id: 4,
        category: 'confidence',
        question: 'You notice a stakeholder frowning or looking confused while you are speaking. What is your first thought?',
        answers: [
          { index: 0, score: 10, label: '"They disagree." I assume they are questioning my logic, so I clarify my argument.' },
          { index: 1, score: 6, label: '"Is it me?" I briefly wonder if I mispronounced something, but I keep going.' },
          { index: 2, score: 3, label: '"My Accent." I immediately panic that my accent is too heavy or they can\'t understand my English.' },
          { index: 3, score: 0, label: '"I\'m Failing." I assume I\'ve lost them completely because of my language skills, and I want to stop talking.' }
        ]
      },
      {
        id: 5,
        category: 'cultural',
        question: 'Does your true personality—your humor, warmth, and charisma—come through when you interview or present in English?',
        answers: [
          { index: 0, score: 10, label: '100%. I am the same person in English as I am in my native language.' },
          { index: 1, score: 6, label: 'Mostly. I can be friendly, but I’m less likely to make jokes or use sarcasm.' },
          { index: 2, score: 3, label: 'It’s Muted. I feel "boring" or "robotic" in English because I have to focus so much on grammar.' },
          { index: 3, score: 0, label: 'I\'m a Different Person. I feel stiff, serious, and purely transactional because I lack the linguistic range to be myself.' }
        ]
      },
      {
        id: 6,
        category: 'real-time',
        question: 'You realize mid-sentence that you used the wrong verb tense or mispronounced a word. How do you react?',
        answers: [
          { index: 0, score: 10, label: 'Ignore it. Native speakers make mistakes too. I keep my flow and focus on the message.' },
          { index: 1, score: 6, label: 'Quick Fix. I quickly rephrase it and move on without losing much rhythm.' },
          { index: 2, score: 3, label: 'The Apology. I stop to say "Sorry, my English..." which draws attention to the mistake and lowers my status.' },
          { index: 3, score: 0, label: 'The Spiral. I get stuck on the mistake, lose my train of thought, and struggle to finish the point.' }
        ]
      }
    ],
    
    gapDefinitions: {
      cultural: {
        name: 'Professional Identity & Presence',
        lowScoreImpact: 'The "Junior Effect." Your expertise is lost because you can\'t express nuance, humor, or authority. You feel like a different, less capable person in English.',
        recommendation: 'Stop focusing on "perfect grammar" and start focusing on "emotional impact." Practice storytelling and authoritative phrasing to regain your executive voice.',
        urgency: 'high'
      },
      'real-time': {
        name: 'Mental Processing Speed',
        lowScoreImpact: 'The "Translation Lag." Translating in your head makes you slow to respond, killing the momentum of Q&A sessions and high-stakes negotiations.',
        recommendation: 'You need to break the translation habit. Practice "thinking out loud" drills to wire your brain to formulate thoughts directly in English.',
        urgency: 'high'
      },
      clarity: {
        name: 'Strategic Vocabulary',
        lowScoreImpact: 'The "Dumbing Down" Trap. You simplify your brilliant ideas to fit your limited vocabulary, making you sound less intelligent than you actually are.',
        recommendation: 'Build a "Power Phrase" library. Don\'t just learn words; learn full strategic phrases for pivoting, clarifying, and emphasizing points.',
        urgency: 'medium'
      },
      confidence: {
        name: 'Psychological Resilience',
        lowScoreImpact: 'Accent Anxiety. You interpret neutral reactions as negative judgment of your English. This insecurity becomes a self-fulfilling prophecy, making you nervous and shaky.',
        recommendation: 'Shift focus from "How do I sound?" to "What do they need?" When you obsess over value, your accent becomes secondary.',
        urgency: 'high'
      },
      // Fallback/Unused categories (required by type but not primary focus here)
      negotiation: {
        name: 'Persuasion & Defense',
        lowScoreImpact: 'Difficulty handling pushback leads to weak positioning.',
        recommendation: 'Practice diplomatic pushback scripts.',
        urgency: 'medium'
      }
    }
  },
  
  // Placeholder for Spanish (using English content for now until translated)
  es: {
    title: 'Evaluación de Comunicación de Alto Nivel',
    subtitle: 'Descubre si tu inglés está creando una brecha entre tu experiencia y tu impacto en presentaciones de alta presión, entrevistas y reuniones críticas.',
    questions: [
      {
        id: 1,
        category: 'cultural',
        question: 'Compara cómo te sientes al presentar en tu idioma nativo versus en inglés. ¿Cuál es la diferencia?',
        answers: [
          { index: 0, score: 10, label: 'Sin diferencia. Me siento igual de poderoso, ingenioso y autoritario.' },
          { index: 1, score: 6, label: 'Ligera fricción. Tengo confianza, pero debo concentrarme más para encontrar el tono correcto.' },
          { index: 2, score: 3, label: 'El efecto "Junior". Me siento menos senior en inglés porque no puedo expresarme con los mismos matices.' },
          { index: 3, score: 0, label: 'Síndrome del impostor. En mi idioma domino la sala. En inglés, siento suerte si sobrevivo la reunión.' }
        ]
      },
      {
        id: 2,
        category: 'real-time',
        question: 'Durante una entrevista o Q&A, alguien hace una pregunta compleja e inesperada. ¿Qué pasa en tu cerebro?',
        answers: [
          { index: 0, score: 10, label: 'Pensamiento directo. Pienso y respondo en inglés al instante sin traducir.' },
          { index: 1, score: 6, label: 'Buffering. Hago una pausa de un segundo para organizar mis ideas en inglés.' },
          { index: 2, score: 3, label: 'Traduciendo. Formulo la respuesta en mi idioma primero, luego traduzco mentalmente.' },
          { index: 3, score: 0, label: 'La mente en blanco. El estrés de la barrera del idioma hace que mi mente se bloquee.' }
        ]
      },
      {
        id: 3,
        category: 'clarity',
        question: 'Necesitas explicar una estrategia compleja o contar una historia. ¿Cómo eliges tus palabras?',
        answers: [
          { index: 0, score: 10, label: 'Precisión. Uso las palabras exactas para pintar una imagen, usando modismos naturalmente.' },
          { index: 1, score: 6, label: 'Simplicidad. Me apego al vocabulario de negocios "seguro" que sé pronunciar bien.' },
          { index: 2, score: 3, label: 'Simplificando demasiado. Simplifico tanto mis ideas que sueno menos inteligente de lo que soy.' },
          { index: 3, score: 0, label: 'Evasión. Corto la historia porque tengo miedo de quedarme atascado en una frase.' }
        ]
      },
      {
        id: 4,
        category: 'confidence',
        question: 'Notas que alguien frunce el ceño o parece confundido mientras hablas. ¿Cuál es tu primer pensamiento?',
        answers: [
          { index: 0, score: 10, label: '"No están de acuerdo". Asumo que cuestionan mi lógica, así que aclaro mi argumento.' },
          { index: 1, score: 6, label: '"¿Soy yo?". Me pregunto brevemente si pronuncié mal algo, pero sigo adelante.' },
          { index: 2, score: 3, label: '"Mi acento". Entro en pánico pensando que mi acento es muy fuerte o no me entienden.' },
          { index: 3, score: 0, label: '"Estoy fallando". Asumo que los he perdido por completo debido a mi inglés.' }
        ]
      },
      {
        id: 5,
        category: 'cultural',
        question: '¿Tu verdadera personalidad—tu humor, calidez y carisma—se transmite cuando presentas en inglés?',
        answers: [
          { index: 0, score: 10, label: '100%. Soy la misma persona en inglés que en mi idioma nativo.' },
          { index: 1, score: 6, label: 'Mayormente. Puedo ser amigable, pero es menos probable que haga bromas o use sarcasmo.' },
          { index: 2, score: 3, label: 'Está silenciada. Me siento "aburrido" o "robótico" porque me concentro mucho en la gramática.' },
          { index: 3, score: 0, label: 'Soy otra persona. Me siento rígido y puramente transaccional por falta de rango lingüístico.' }
        ]
      },
      {
        id: 6,
        category: 'real-time',
        question: 'Te das cuenta a mitad de una frase que usaste el tiempo verbal incorrecto. ¿Cómo reaccionas?',
        answers: [
          { index: 0, score: 10, label: 'Lo ignoro. Los nativos también cometen errores. Mantengo mi flujo.' },
          { index: 1, score: 6, label: 'Arreglo rápido. Lo reformulo rápidamente y sigo sin perder el ritmo.' },
          { index: 2, score: 3, label: 'La disculpa. Me detengo para decir "Sorry, my English...", lo cual baja mi estatus.' },
          { index: 3, score: 0, label: 'La espiral. Me quedo atascado en el error, pierdo el hilo y lucho por terminar.' }
        ]
      }
    ],

    gapDefinitions: {
      cultural: {
        name: 'Identidad y Presencia Profesional',
        lowScoreImpact: 'El "Efecto Junior". Tu experiencia se pierde porque no puedes expresar matices, humor o autoridad. Te sientes como una persona diferente y menos capaz en inglés.',
        recommendation: 'Deja de concentrarte en la "gramática perfecta" y comienza a enfocarte en el "impacto emocional". Practica la narración para recuperar tu voz ejecutiva.',
        urgency: 'high'
      },
      'real-time': {
        name: 'Velocidad de Procesamiento Mental',
        lowScoreImpact: 'El "Retraso de Traducción". Traducir en tu cabeza te hace lento para responder, matando el impulso de las sesiones de preguntas y respuestas.',
        recommendation: 'Necesitas romper el hábito de traducción. Practica ejercicios de "pensar en voz alta" para conectar tu cerebro directamente al inglés.',
        urgency: 'high'
      },
      clarity: {
        name: 'Vocabulario Estratégico',
        lowScoreImpact: 'La trampa de "Simplificar Demasiado". Simplificas tus ideas brillantes para ajustarlas a tu vocabulario limitado, sonando menos inteligente de lo que eres.',
        recommendation: 'Construye una biblioteca de "Frases de Poder". No solo aprendas palabras; aprende frases estratégicas completas para pivotar y enfatizar puntos.',
        urgency: 'medium'
      },
      confidence: {
        name: 'Resiliencia Psicológica',
        lowScoreImpact: 'Ansiedad por el Acento. Interpretas reacciones neutrales como juicios negativos de tu inglés. Esta inseguridad se convierte en una profecía autocumplida.',
        recommendation: 'Cambia el enfoque de "¿Cómo sueno?" a "¿Qué necesitan?". Cuando te obsesionas con el valor, tu acento se vuelve secundario.',
        urgency: 'high'
      },
      negotiation: {
        name: 'Persuasión y Defensa',
        lowScoreImpact: 'Dificultad para manejar el rechazo conduce a un posicionamiento débil.',
        recommendation: 'Practica guiones de rechazo diplomático.',
        urgency: 'medium'
      }
    }
  }
};
