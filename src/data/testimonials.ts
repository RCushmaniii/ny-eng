export interface Testimonial {
    content: string;
    author: string;
    position: string;
    company: string;
    avatar: string;
}

export const testimonials: Testimonial[] = [
    {
        content:
            "The tools and structure this team built for us gave us full visibility into performance, timelines, and people. It’s elevated how our teams collaborate — not just internally, but with our suppliers too.",
        author: "Alberto Escobar",
        position: "COO",
        company: "Terramar Brands",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        content:
            "I’ve tested many productivity platforms, but this one actually delivered. Our consultants love the simplicity, and it’s made our entire onboarding process smoother and more scalable.",
        author: "Coolio Gomez",
        position: "CEO",
        company: "Smarty",
        avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    },
    {
        content:
            "We were looking for an edge in speed, quality, and communication — and that’s exactly what we got. It has saved us countless hours while improving our response time with investors and partners.",
        author: "Hugo Bloom",
        position: "Founder",
        company: "Bricks / 100 Ladrillos",
        avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    },
    {
        content:
            "The system's clarity and reliability have been a game-changer in our logistics and executive communication. Our Mexico operations have seen measurable improvements in accountability and outcomes.",
        author: "Andres Guzman",
        position: "COO - Mexico",
        company: "Driscoll's",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
];
