export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
              question: "What levels and backgrounds do you teach?",
              answer: "I work with intermediate and advanced learners—busy professionals in business, law, medicine, logistics, engineering, etc. I don’t teach absolute beginners."
            },
            {
              question: "What do your lessons cover?",
              answer: "Speaking English with confidence; work scenarios: meetings, presentations, client calls; pronunciation, phrasing, and professional tone; interview prep and general business communication."
            },
            {
              question: "How do classes work?",
              answer: "Private 60-minute sessions online via Google Meet; warm-up, targeted practice, on-the-spot feedback, and small talk; customized PDF notes delivered after each class."
            },
            {
              question: "How do I schedule or reschedule a lesson?",
              answer: "Simply send me a message on WhatsApp, email me, or call directly. Please give at least 24 hours’ notice to avoid any fees."
            },
            {
              question: "How much does coaching cost?",
              answer: "Students in Mexico: 500 MXN per hour; Students in the USA: 25 USD per hour."
            },
            {
              question: "Do you offer training for senior leadership?",
              answer: "Yes—I design custom workshops and private coaching sessions for senior leaders. Contact me for a proposal and pricing."
            },
            {
              question: "How fast will I improve?",
              answer: "Most students see clear progress within 3–5 sessions. Improvement depends on practice outside class, lesson frequency, self-discipline, and your personal goals."
            },
            {
              question: "What is your cancellation and payment policy?",
              answer: "I wait up to 15 minutes after the start time; after that the lesson is a no-show and the fee applies. Cancellations require 24 hours’ notice. Payment (individuals) is due before each session via Zelle or bank transfer. Monthly invoicing is available for companies."
            }
          ]
          
    }
};
