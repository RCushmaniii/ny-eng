import type { SiteConfig } from '@data/config'; // Assuming you have a SiteConfig type for siteConfig.companyName
import type { ConnectItem } from '../../components/Footer.astro'; // Import from Footer.astro

export const footerContentEn = (siteConfig: Pick<SiteConfig, 'companyName'>) => {
  const currentYear = new Date().getFullYear();
  return {
    logoLink: "/en/",
    tagline: "Helping professionals speak confidently and fluently in English.",
    sections: {
      about: {
        title: "About",
        links: [
          { name: "About Me", href: "/en/about#about-me" },
          { name: "My Values", href: "/en/about#about-values" },
          { name: "Why Work With Me", href: "/en/about#about-why" },
        ],
      },
      resources: {
        title: "Resources",
        links: [
          { name: "FAQs", href: "/en/#faqs" },
          { name: "Blog", href: "/en/blog" },
          { name: "Free Consultation", href: "https://ny-english-teacher.odoo.com/book/7ceefa20", target: "_blank", rel: "noopener noreferrer" },
        ],
      },
      connect: {
        title: "Connect",
        items: [
          { type: "link", name: "WhatsApp Me", href: "https://wa.link/pk4f97", target: "_blank", rel: "noopener noreferrer" },
          { type: "link", name: "Schedule a Consultation", href: "https://ny-english-teacher.odoo.com/book/7ceefa20", target: "_blank", rel: "noopener noreferrer" },
          { type: "link", name: "Contact Me", href: "/en/contact" },
        ] as ConnectItem[],
      },
    },
    legalMenu: [
      { name: "Privacy Policy", href: "/en/legal/privacy-policy" },
      { name: "Terms of Service", href: "/en/legal/terms-of-service" },
    ],
    copyrightText: `© ${currentYear} ${siteConfig.companyName}. All rights reserved.`,
    // Default Footer CTA in English (can be overridden by page props passed to Layout)
    defaultFooterCta: {
      title: "Transform Your Professional English Today",
      description: "Book your free consultation to gain the clarity, confidence, and impact your role demands.",
      hideCta: false,
      button: {
        text: "Reserve My Free Consultation",
        link: "https://ny-english-teacher.odoo.com/book/7ceefa20",
        target: "_blank",
      },
    },
  };
};