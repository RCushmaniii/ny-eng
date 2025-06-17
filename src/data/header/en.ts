export const headerContent = {
  menu: [
    { name: "About", link: "/en/about" }, // Ensure '/en/' prefix
    { name: "Testimonials", link: "/en/testimonials" },
    { name: "Blog", link: "/en/blog" },
  ],
  cta: { text: "Contact", link: "/en/contact" }, // Ensure '/en/' prefix
  logoLink: '/en', // Link to the English homepage
} as const;