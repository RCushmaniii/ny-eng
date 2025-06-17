export const headerContent = {
  menu: [
    { name: "Sobre mí", link: "/es/about" }, // Or /es/sobre-mi if slug changes
    { name: "Casos de Éxito", link: "/es/testimonios" },
    { name: "Blog", link: "/es/blog" },
  ],
  cta: { text: "Contacto", link: "/es/contact" }, // Or /es/contacto if slug changes
  logoLink: '/es', // Link to the Spanish homepage
} as const;