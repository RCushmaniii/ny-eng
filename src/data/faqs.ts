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
                question: "Who do you work with, and what do you help with?",
                answer: "I work with C-level executives, business owners, and corporate teams who want to improve their English for career growth, confidence, and performance. Lessons often focus on real-world needs like board presentations, job interviews, client interactions, pitch decks, and more."
            },
            {
                question: "How do the classes work?",
                answer: "All sessions are held 1-on-1 on Google Meet. Each class is designed for your specific goals — whether you're improving fluency, business writing, or communication for meetings and presentations."
            },
            {
                question: "Do you offer corporate training for teams?",
                answer: "Yes, I absolutely offer coaching for teams and professionals inside companies. I also provide SAT-compliant invoicing for businesses and HR departments."
            },
            {
                question: "How fast will I improve?",
                answer: "Many clients feel more confident after just a few lessons. Your progress depends on your goals and how often you practice, but I’ll help guide you step by step."
            },
            {
                question: "What about scheduling and availability?",
                answer: "I'm flexible — sessions are available Monday to Friday from 9:00 a.m. to 8:00 p.m., and on Saturdays from 9:00 a.m. to 2:00 p.m. Just contact me to find a time that works best for you."
            }
        ]
    }
};
