import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../chunks/Base_D0GHnMc8.mjs';
import { $ as $$Hero } from '../chunks/Eyebrow_Dor9w_17.mjs';
import { $ as $$Features, a as $$QuizPromotion, b as $$TestimonialsTitan, c as $$RecentPosts, d as $$SplitPanel, s as styleGuideImage } from '../chunks/developer_kVYivP1i.mjs';
import '../chunks/alberto-testimonial_CCOlA144.mjs';
import { j as julioTestimonial, h as hugobTestimonial, a as andresTestimonial, b as andreaTestimonial } from '../chunks/andrea-testimonial_BIhra1AV.mjs';
import '../chunks/karla-testimonial_DyWgwJc7.mjs';
import { h as heroSkyline } from '../chunks/new-york-city-skyline_CadNYtE4.mjs';
import { $ as $$Briefcase, b as $$Presentation, a as $$GraduationCap } from '../chunks/Presentation_Dj_9idFW.mjs';
import { $ as $$Users } from '../chunks/Users_B0SoIB-o.mjs';
export { renderers } from '../renderers.mjs';

const testimonials = [
  {
    content: "Robert’s coaching didn’t just improve my English—it boosted my confidence presenting to clients and investors. Our conversations on business, tech, and global topics expanded my real-world vocabulary and sharpened how I communicate. A true game changer!",
    author: "Julio Aldana",
    position: "COO",
    company: "Smarttie",
    avatar: julioTestimonial
  },
  {
    content: "Being a founder means constantly pitching, persuading, and leading. Robert’s coaching gave me the language tools—and the confidence—to do it all in English. It’s made a real difference in pitching deals and connecting with my team",
    author: "Hugo Blum",
    position: "CEO",
    company: "100 Ladrillos",
    avatar: hugobTestimonial
  },
  {
    content: "Coaching with Robert helped me become much more confident and natural when speaking English—especially with U.S. clients. I now feel more at ease in conversations and better prepared for networking opportunities and cross-border meetings.",
    author: "Andres Guzman Rubio",
    position: "COO – Mexico",
    company: "Driscoll's",
    avatar: andresTestimonial
  },
  {
    content: "Robert’s coaching helped me elevate how I communicate with senior executives across North America. I’m more strategic and persuasive in interviews, presentations, and cross-border meetings—especially in high-stakes situations. His approach is practical, focused, and incredibly effective.",
    author: "Andrea Oliveira",
    position: "Director of Business Development",
    company: "CEVA Logistics",
    avatar: andreaTestimonial
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tkey = "home";
  const testimonialsBlock = {
    eyebrow: "Real Results",
    title: "Why Top-Level Professionals Choose Coaching with Robert",
    description: "Executives, entrepreneurs, and experts across industries trust New York English to elevate fluency, confidence, and global impact.",
    testimonials,
    cta: {
      heading: "For Executives Who Lead in English",
      description: "Start with a free 30-minute coaching session to boost clarity, confidence, and authority.",
      text: "Book My Free Strategy Call",
      link: "/en/book/"
    }
  };
  const seoTitle = "Professional English Coaching | New York English Teacher";
  const seoDescription = "Boost your English fluency and confidence with personalized coaching tailored for professionals and companies.";
  const heroContent = {
    eyebrow: "Your Global Communication Advantage",
    title: "Master Business English & Advance Your Career",
    description: "I coach international leaders to communicate with calm authority, sharper clarity, and executive presence\u2014so you can lead high-stakes meetings and earn trust faster.",
    trustLine: "Trusted by leaders at Fortune 500 companies and global startups",
    trustLineLink: "/en/testimonials/",
    buttons: [
      {
        text: "Book a Private Consultation",
        link: "/en/book/",
        variant: "primary"
      },
      {
        text: "Start the Executive Assessment",
        link: "/en/assessments/",
        variant: "secondary"
      }
    ],
    backgroundImage: heroSkyline,
    backgroundImageMobile: heroSkyline,
    overlayOpacity: 0.3,
    fullHeight: true
  };
  const featuresSection = {
    eyebrow: "NY ENGLISH OFFERS",
    title: "Personalized English Coaching for Professionals",
    description: "Whether you need to improve your fluency, ace an interview, or communicate more effectively in business meetings, I'll help you get there.",
    features: [
      {
        title: "Business & Executive English",
        description: "Lead with authority in boardrooms, investor pitches, and high-stakes negotiations\u2014without translating in your head.",
        icon: $$Briefcase,
        link: "/en/quiz/executives/"
      },
      {
        title: "English for Tech & IT Teams",
        description: "Boost your salary potential and career growth by communicating technical ideas clearly with global teams and clients.",
        icon: $$Presentation,
        link: "/en/quiz/it-services/"
      },
      {
        title: "English for Professionals",
        description: "Expand your international client base and work confidently in global professional settings\u2014doctors, lawyers, consultants.",
        icon: $$Users,
        link: "/en/quiz/professional-services/"
      },
      {
        title: "High-Stakes English",
        description: "Ace job interviews, deliver high-impact presentations, and persuade decision-makers with clarity and confidence.",
        icon: $$GraduationCap,
        link: "/en/quiz/high-stakes/"
      }
    ]
  };
  const styleGuideSection = {
    eyebrow: "My Teaching Approach",
    headline: "Personalized & Goal-Oriented English Coaching",
    description: "I use a structured yet flexible approach tailored to your professional needs. Whether you're preparing for an interview, leading a meeting, or improving fluency, my coaching is designed for real-world success.",
    descriptionPoints: [
      "Have lessons built around your own job and goals",
      "Get clear, on-the-spot feedback on pronunciation, phrasing and tone",
      "Practice real tasks\u2014presentations, client calls, reports\u2014just like you do at work"
    ],
    image: {
      src: styleGuideImage,
      alt: "Professional English coaching session"
    },
    buttons: [
      {
        text: "Explore My Coaching Approach",
        link: "/en/about/",
        // Link to about page
        variant: "primary"
      }
    ]
  };
  const recentPostsSection = {
    eyebrow: "RECENT BLOG POSTS",
    title: "Insights for Business Professionals",
    description: "Practical tips on Business English, career growth, and effective communication.",
    button: {
      text: "See All Articles",
      link: "/en/blog/"
    }
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "en", "tkey": tkey, "title": seoTitle, "description": seoDescription, "heroImage": heroContent.backgroundImage, "heroImageMobile": heroContent.backgroundImageMobile, "ogImage": { src: "/images/logos/new-york-english-sq-og.jpg" }, "transparentHeader": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative bg-background-light"> ${renderComponent($$result2, "Hero", $$Hero, { "content": heroContent })} ${renderComponent($$result2, "Features", $$Features, { "content": featuresSection, "padding": "small", "background": "light" })} ${renderComponent($$result2, "QuizPromotion", $$QuizPromotion, { "lang": "en" })} <div class="mb-15 pb-0"> ${renderComponent($$result2, "Testimonials", $$TestimonialsTitan, { "content": testimonialsBlock, "background": "base", "padding": "small" })} </div> <div class="pt-10 border-t border-gray-200 dark:border-gray-700" style="padding-bottom: var(--spacing-small);"> ${renderComponent($$result2, "RecentPosts", $$RecentPosts, { "content": recentPostsSection, "background": "base", "postsToShow": 3 })} </div> ${renderComponent($$result2, "SplitPanel", $$SplitPanel, { "content": styleGuideSection, "imagePosition": "right", "background": "light", "padding": "base" })} <!-- Stats temporarily removed --> <!-- <Stats content={sideBySideStats} background="dark" padding="base" /> --> </div> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
