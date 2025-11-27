import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_C60441bi.mjs';
import { m as meImage, c as ceoImage, $ as $$LineChart, a as $$Waves } from '../../chunks/working-with-client-1200_Hy3Yf2xp.mjs';
import '../../chunks/alberto-testimonial_CCOlA144.mjs';
import { j as julioTestimonial, h as hugobTestimonial, a as andresTestimonial, b as andreaTestimonial } from '../../chunks/andrea-testimonial_BIhra1AV.mjs';
import '../../chunks/karla-testimonial_DyWgwJc7.mjs';
/* empty css                                    */
import { $ as $$Target } from '../../chunks/Target_CcF7auwD.mjs';
import { $ as $$CheckCircle } from '../../chunks/CheckCircle_CZvtE61x.mjs';
import { $ as $$Calendar } from '../../chunks/Calendar_1OPHr6-b.mjs';
import { $ as $$FileText } from '../../chunks/FileText_X9UVvGhE.mjs';
export { renderers } from '../../renderers.mjs';

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

const $$About = createComponent(($$result, $$props, $$slots) => {
  const description = "With 20+ years of experience coaching executives, I help professionals master business English with confidence.";
  const metadata = {
    title: "About Robert Cushman | Executive English Coach NYC",
    description
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { ...metadata, "lang": "en", "tkey": "about", "ogImage": {
    src: "/images/logos/new-york-english-sq-og.jpg",
    alt: "New York English Teacher - Professional English Communication Coach",
    width: 1200,
    height: 630
  }, "data-astro-cid-emk76muo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="about-me" class="relative pt-28 pb-8 md:pt-32 md:pb-12 overflow-hidden" data-astro-cid-emk76muo> <div class="container mx-auto px-4 max-w-6xl" data-astro-cid-emk76muo> <div class="grid md:grid-cols-12 grid-cols-1 items-start gap-12" data-astro-cid-emk76muo>  <div class="md:col-span-4 order-2 md:order-1" data-astro-cid-emk76muo> <div class="relative" data-astro-cid-emk76muo> ${renderComponent($$result2, "Image", $$Image, { "src": meImage, "alt": "Robert Cushman - Business English Communication Coach", "class": "rounded-lg shadow-lg w-full", "width": 400, "height": 533, "loading": "eager", "data-astro-cid-emk76muo": true })} </div> </div>  <div class="md:col-span-8 order-1 md:order-2" data-astro-cid-emk76muo> <div class="lg:ml-8" data-astro-cid-emk76muo> <h1 class="font-heading text-4xl md:text-5xl font-bold mb-4" data-astro-cid-emk76muo>
Robert Cushman
</h1> <p class="text-2xl text-primary font-semibold mb-8" data-astro-cid-emk76muo>
Corporate Strategist & Communication Coach
</p> <div class="space-y-8 text-lg" data-astro-cid-emk76muo> <p class="text-xl leading-relaxed font-medium" data-astro-cid-emk76muo>
I help high-potential executives, founders, and senior
                professionals transition from fluent to influential.
</p> <p class="text-lg" data-astro-cid-emk76muo>
With 20+ years in corporate leadership (including 15 years at a
                Fortune 100) and 7 years of specialized coaching, I bridge the
                gap between technical expertise and C-suite communication
                authority.
</p> <div class="my-12 border-t border-b border-gray-200 dark:border-gray-700 py-12" data-astro-cid-emk76muo> <h2 class="font-heading text-2xl font-semibold mb-6" data-astro-cid-emk76muo>
My clients share two priorities:
</h2> <ul class="space-y-4" data-astro-cid-emk76muo> <li class="flex items-start" data-astro-cid-emk76muo> <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold mr-3" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo>1</span> <span style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo>They want their English to reflect their professional
                      expertise and authority.</span> </li> <li class="flex items-start" data-astro-cid-emk76muo> <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold mr-3" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo>2</span> <span style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo>They expect a professional, efficient learning experience
                      that respects their time.</span> </li> </ul> </div> <p class="text-xl text-primary font-semibold" data-astro-cid-emk76muo>
Ready to Elevate Your Communication?
</p> <p class="text-lg mt-4" data-astro-cid-emk76muo>
Speak with the clarity and confidence your role demands—book a
                no-pressure introduction call today.
</p> <div class="mt-6" data-astro-cid-emk76muo> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/book/", "variant": "primary", "size": "lg", "data-astro-cid-emk76muo": true }, { "default": ($$result3) => renderTemplate`
Book Your Free Session
` })} </div> </div> </div> </div> </div> </div> </section> <section id="about-values" class="relative pt-4 pb-8 md:pt-24 md:pb-12 bg-gray-50 dark:bg-gray-800/50" data-astro-cid-emk76muo> <div class="container mx-auto px-4 max-w-6xl" data-astro-cid-emk76muo> <div class="max-w-3xl mx-auto text-center mb-16" data-astro-cid-emk76muo> <h2 class="font-heading text-4xl md:text-5xl font-bold mb-6" data-astro-cid-emk76muo>
My Values
</h2> <p class="text-lg text-gray-600 dark:text-gray-300" data-astro-cid-emk76muo>
Professional growth starts with clear, confident communication. These
          values guide every lesson, session, and client relationship:
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12" data-astro-cid-emk76muo>  <div class="relative" data-astro-cid-emk76muo> <div class="mb-6" data-astro-cid-emk76muo> <span class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-primary font-bold text-xl" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo>
1
</span> </div> <h3 class="font-heading text-2xl font-semibold mb-4" data-astro-cid-emk76muo>
Results-Driven & Time-Respecting
</h3> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-emk76muo>
Your goals drive the process. Coaching is adapted to your
            real-world, high-pressure schedule (executive meetings,
            cross-cultural communication).
</p> </div>  <div class="relative" data-astro-cid-emk76muo> <div class="mb-6" data-astro-cid-emk76muo> <span class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-primary font-bold text-xl" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo>
2
</span> </div> <h3 class="font-heading text-2xl font-semibold mb-4" data-astro-cid-emk76muo>
Authority, Not Apology
</h3> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-emk76muo>
We move beyond fluency. I help you project authority and impact,
            ensuring your personal brand is elevated in every high-stakes
            interaction.
</p> </div>  <div class="relative" data-astro-cid-emk76muo> <div class="mb-6" data-astro-cid-emk76muo> <span class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-primary font-bold text-xl" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo>
3
</span> </div> <h3 class="font-heading text-2xl font-semibold mb-4" data-astro-cid-emk76muo>
Confidentiality & Trust
</h3> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-emk76muo>
Your goals, progress, and privacy are sacred. Our coaching
            relationship is built on transparency for high-impact, long-term
            success.
</p> </div> </div> </div> </section> <section id="about-why" class="relative py-6 md:py-12" data-astro-cid-emk76muo> <div class="container mx-auto px-4 max-w-6xl" data-astro-cid-emk76muo> <div class="max-w-3xl mx-auto text-center mb-16" data-astro-cid-emk76muo> <h2 class="font-heading text-4xl md:text-5xl font-bold mb-6" data-astro-cid-emk76muo>
The Robert Cushman Difference
</h2> <p class="text-xl text-primary font-semibold" data-astro-cid-emk76muo>
Coach, Strategist, and Corporate Insider
</p> </div> <div class="grid md:grid-cols-12 gap-12 items-center" data-astro-cid-emk76muo>  <div class="md:col-span-7 order-2 md:order-1" data-astro-cid-emk76muo> <div class="lg:pr-8" data-astro-cid-emk76muo> <h3 class="font-heading text-3xl font-bold mb-6" data-astro-cid-emk76muo>
What Sets Me Apart: Personalized Expertise
</h3> <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" data-astro-cid-emk76muo>
I'm not just another English coach—I'm a corporate strategist
              who's navigated the same challenges you're facing. My sessions are
              laser-focused on your professional goals, from nailing that
              high-stakes interview to delivering impactful presentations. No
              generic templates, no fluff—just practical, personalized coaching
              that gets results.
</p> </div> </div>  <div class="md:col-span-5 order-1 md:order-2" data-astro-cid-emk76muo> <div class="relative" data-astro-cid-emk76muo> ${renderComponent($$result2, "Image", $$Image, { "src": ceoImage, "alt": "Your time is respected. Coaching is tailored to your executive schedule.", "class": "rounded-lg shadow-lg w-full object-cover", "width": 600, "height": 400, "loading": "lazy", "data-astro-cid-emk76muo": true })} </div> </div> </div> </div> </section> <section class="relative pt-16 pb-16 md:pt-24 md:pb-12 bg-gray-50 dark:bg-gray-800/50" data-astro-cid-emk76muo> <div class="container mx-auto px-4 max-w-6xl" data-astro-cid-emk76muo> <div class="max-w-3xl mx-auto text-center mb-16" data-astro-cid-emk76muo> <p class="text-primary font-semibold mb-4" data-astro-cid-emk76muo>
Real Impact: Success Stories from My Clients
</p> <h2 class="font-heading text-4xl md:text-5xl font-bold mb-6" data-astro-cid-emk76muo>
Results That Speak for Themselves
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 mb-6" data-astro-cid-emk76muo>
I've coached COOs, CEOs, and founders to communicate with clarity and
          confidence, driving career-defining wins—from streamlining global
          operations to securing investor funding.
</p> <p class="fade-in-up delay-1 text-body opacity-90 mb-12 max-w-2xl mx-auto" data-astro-cid-emk76muo>
Here’s what they say:
</p> </div> <div class="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto" data-astro-cid-emk76muo> ${testimonials.map((testimonial, idx) => renderTemplate`<div${addAttribute([
    "bg-white dark:bg-gray-700/50 rounded-xl p-8 shadow-lg fade-in-up",
    `delay-${idx + 1}`
  ], "class:list")} data-astro-cid-emk76muo> <div class="flex items-center mb-6" data-astro-cid-emk76muo> ${renderComponent($$result2, "Image", $$Image, { "src": testimonial.avatar, "alt": testimonial.author, "class": "w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary", "loading": "lazy", "width": 56, "height": 56, "data-astro-cid-emk76muo": true })} <div data-astro-cid-emk76muo> <div class="font-heading text-lg font-semibold" data-astro-cid-emk76muo> ${testimonial.author} </div> <div class="text-sm text-gray-500 dark:text-gray-400" data-astro-cid-emk76muo> ${testimonial.position}, ${testimonial.company} </div> </div> </div> <blockquote class="mb-2" data-astro-cid-emk76muo> <p class="text-lg text-gray-600 dark:text-gray-300 italic" data-astro-cid-emk76muo>
“${testimonial.content}”
</p> </blockquote> </div>`)} </div> <div class="mt-16 bg-gradient-to-r from-primary to-gray-100 dark:from-primary dark:to-gray-800 rounded-2xl p-8 md:p-12 text-center" data-astro-cid-emk76muo> <h3 class="text-2xl font-bold text-white mb-4" data-astro-cid-emk76muo>
Ready to Elevate Your English?
</h3> <p class="text-white mb-6" data-astro-cid-emk76muo>
Book your free English coaching session to gain the clarity,
          confidence, and impact your role demands.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/book/", "variant": "ghostLight", "size": "lg", "rel": "noopener noreferrer", "data-astro-cid-emk76muo": true }, { "default": ($$result3) => renderTemplate`
Book Your Free Session
` })} </div> </div> </section> <section id="about-methodology" class="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50" data-astro-cid-emk76muo> <div class="container mx-auto px-4 max-w-6xl" data-astro-cid-emk76muo> <div class="max-w-3xl mx-auto text-center mb-16" data-astro-cid-emk76muo> <h2 class="font-heading text-4xl md:text-5xl font-bold mb-6" data-astro-cid-emk76muo>
My Methodology
</h2> <p class="text-xl text-primary font-semibold" data-astro-cid-emk76muo>
A proven framework for lasting improvement
</p> </div> <div class="grid md:grid-cols-2 gap-8 md:gap-12" data-astro-cid-emk76muo>  <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-astro-cid-emk76muo> <div class="mb-6" data-astro-cid-emk76muo> <span class="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white" data-astro-cid-emk76muo> ${renderComponent($$result2, "Target", $$Target, { "size": 32, "data-astro-cid-emk76muo": true })} </span> </div> <h3 class="font-heading text-2xl font-semibold mb-4" data-astro-cid-emk76muo>
1. Discovery and Goal Setting
</h3> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-emk76muo>
We begin with a deep analysis of your current English level,
            communication challenges, and professional goals. This ensures a
            personalized roadmap tailored to your success.
</p> </div>  <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-astro-cid-emk76muo> <div class="mb-6" data-astro-cid-emk76muo> <span class="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white" data-astro-cid-emk76muo> ${renderComponent($$result2, "LineChart", $$LineChart, { "size": 32, "data-astro-cid-emk76muo": true })} </span> </div> <h3 class="font-heading text-2xl font-semibold mb-4" data-astro-cid-emk76muo>
2. Targeted Skill Development
</h3> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-emk76muo>
Based on your goals, we focus on specific areas—such as
            pronunciation, fluency, vocabulary, or presentation skills—through
            practical exercises and real-world scenarios.
</p> </div>  <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-astro-cid-emk76muo> <div class="mb-6" data-astro-cid-emk76muo> <span class="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white" data-astro-cid-emk76muo> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "size": 32, "data-astro-cid-emk76muo": true })} </span> </div> <h3 class="font-heading text-2xl font-semibold mb-4" data-astro-cid-emk76muo>
3. Practical Application and Feedback
</h3> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-emk76muo>
You'll apply your new skills in simulated professional situations,
            receiving constructive feedback to build confidence and refine your
            performance.
</p> </div>  <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-astro-cid-emk76muo> <div class="mb-6" data-astro-cid-emk76muo> <span class="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white" data-astro-cid-emk76muo> ${renderComponent($$result2, "Calendar", $$Calendar, { "size": 32, "data-astro-cid-emk76muo": true })} </span> </div> <h3 class="font-heading text-2xl font-semibold mb-4" data-astro-cid-emk76muo>
4. Continuous Improvement and Support
</h3> <p class="text-gray-600 dark:text-gray-300" data-astro-cid-emk76muo>
Language learning is a journey. I provide ongoing support and
            resources to help you maintain momentum and continue advancing your
            English communication skills long after our sessions.
</p> </div> </div> </div> </section> <section class="relative py-6 md:py-12 bg-white dark:bg-gray-900" data-astro-cid-emk76muo> <div class="container mx-auto px-4" data-astro-cid-emk76muo> <div class="grid md:grid-cols-12 gap-8 md:gap-12" data-astro-cid-emk76muo>  <div class="md:col-span-5 md:sticky md:top-16 md:self-start" data-astro-cid-emk76muo> <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12" data-astro-cid-emk76muo> <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6" data-astro-cid-emk76muo>
How I Work with Clients
</h2> <h3 class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6" data-astro-cid-emk76muo>
A Proven Process to Elevate Your Communication
</h3> <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" data-astro-cid-emk76muo>
I guide professionals like you through a tailored journey to speak
              English with clarity and confidence in high-stakes settings.
              Here's how we'll achieve your goals:
</p> </div> </div>  <div class="md:col-span-7" data-astro-cid-emk76muo> <div class="relative pl-8 md:pl-12" data-astro-cid-emk76muo>  <div class="absolute left-6 top-0 h-full w-px bg-gray-200 dark:bg-gray-700" data-astro-cid-emk76muo></div>  <div class="relative mb-16 flex items-start" data-astro-cid-emk76muo> <div class="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo> ${renderComponent($$result2, "Waves", $$Waves, { "size": 24, "data-astro-cid-emk76muo": true })} </div> <div class="pl-16" data-astro-cid-emk76muo> <h3 class="font-heading text-xl font-bold mb-4" data-astro-cid-emk76muo>
Connect and Confirm We're a Match
</h3> <p class="text-gray-600 dark:text-gray-300 text-lg" data-astro-cid-emk76muo>
We start with a brief online introduction to discuss your
                  needs and ensure we're the right fit. This no-pressure call
                  sets the stage for a successful partnership.
</p> </div> </div>  <div class="relative mb-16 flex items-start" data-astro-cid-emk76muo> <div class="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo> ${renderComponent($$result2, "Calendar", $$Calendar, { "size": 24, "data-astro-cid-emk76muo": true })} </div> <div class="pl-16" data-astro-cid-emk76muo> <h3 class="font-heading text-xl font-bold mb-4" data-astro-cid-emk76muo>
Schedule Your First Session
</h3> <p class="text-gray-600 dark:text-gray-300 text-lg" data-astro-cid-emk76muo>
Once we're aligned, we'll book your first session at a time
                  that works for you, kicking off your journey to confident
                  communication.
</p> </div> </div>  <div class="relative mb-16 flex items-start" data-astro-cid-emk76muo> <div class="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo> ${renderComponent($$result2, "Target", $$Target, { "size": 24, "data-astro-cid-emk76muo": true })} </div> <div class="pl-16" data-astro-cid-emk76muo> <h3 class="font-heading text-xl font-bold mb-4" data-astro-cid-emk76muo>
Identify Your Goals and Gaps
</h3> <p class="text-gray-600 dark:text-gray-300 text-lg" data-astro-cid-emk76muo>
In our first session, we'll pinpoint your immediate
                  goals—whether it's leading a board meeting or pitching to
                  investors—and identify any gaps in your English skills to
                  create a focused plan.
</p> </div> </div>  <div class="relative mb-16 flex items-start" data-astro-cid-emk76muo> <div class="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo> ${renderComponent($$result2, "FileText", $$FileText, { "size": 24, "data-astro-cid-emk76muo": true })} </div> <div class="pl-16" data-astro-cid-emk76muo> <h3 class="font-heading text-xl font-bold mb-4" data-astro-cid-emk76muo>
Plan Tailored Sessions with Custom Content
</h3> <p class="text-gray-600 dark:text-gray-300 text-lg" data-astro-cid-emk76muo>
I design the first few sessions specifically for you, crafting
                  custom content that addresses your unique challenges and
                  goals, from vocabulary to delivery, ensuring every lesson
                  drives impact.
</p> </div> </div>  <div class="relative mb-16 flex items-start" data-astro-cid-emk76muo> <div class="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo> ${renderComponent($$result2, "CheckCircle", $$CheckCircle, { "size": 24, "data-astro-cid-emk76muo": true })} </div> <div class="pl-16" data-astro-cid-emk76muo> <h3 class="font-heading text-xl font-bold mb-4" data-astro-cid-emk76muo>
Review Your Progress
</h3> <p class="text-gray-600 dark:text-gray-300 text-lg" data-astro-cid-emk76muo>
After a few sessions, we'll assess your growth, reflecting on
                  how your communication has improved and adjusting our approach
                  to keep you on track.
</p> </div> </div>  <div class="relative mb-16 flex items-start" data-astro-cid-emk76muo> <div class="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white" style="font-family: 'Noto Sans KR', sans-serif;" data-astro-cid-emk76muo> ${renderComponent($$result2, "LineChart", $$LineChart, { "size": 24, "data-astro-cid-emk76muo": true })} </div> <div class="pl-16" data-astro-cid-emk76muo> <h3 class="font-heading text-xl font-bold mb-4" data-astro-cid-emk76muo>
Monitor and Refine for Lasting Results
</h3> <p class="text-gray-600 dark:text-gray-300 text-lg" data-astro-cid-emk76muo>
I'll continuously monitor your progress, providing feedback
                  and refining our plan to ensure you project authority and
                  achieve long-term success in your professional role.
</p> </div> </div> </div> </div> </div> </div> </section> ` })} `;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/about.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/about.astro";
const $$url = "/en/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
