import type { ConnectItem } from '@components/Footer.astro';
import { routes } from '@utils/paths';

export const footerContentEn = (siteConfig: { companyName: string }) => {
  const currentYear = new Date().getFullYear();
  return {
    logoLink: routes.en.home,
    tagline: "Helping professionals speak confidently and fluently in English.",
    sections: {
      about: {
        title: "About",
        links: [
          { name: "About Me", href: `${routes.en.about}#about-me` },
          { name: "My Values", href: `${routes.en.about}#about-values` },
          { name: "Why Work With Me", href: `${routes.en.about}#about-why` },
        ],
      },
      resources: {
        title: "Resources",
        links: [
          { name: "Free Downloads", href: routes.en.free },
          { name: "FAQs", href: "/en/faqs/" },
          { name: "Blog", href: routes.en.blog },
          { name: "Start Assessment", href: "/en/assessments/" },
        ],
      },
      connect: {
        title: "Connect",
        items: [
          { type: "link", name: "WhatsApp Me", href: "https://wa.link/pk4f97", target: "_blank", rel: "noopener noreferrer" },
          { type: "link", name: "Schedule a Consultation", href: "/en/book/" },
          { type: "link", name: "Email Me", href: routes.en.contact },
        ] as ConnectItem[],
      },
    },
    legalMenu: [
      { name: "Privacy Policy", href: routes.en.legal.privacy },
      { name: "Terms of Service", href: routes.en.legal.terms },
    ],
    copyrightText: `© ${currentYear} ${siteConfig.companyName}. All rights reserved.`,
    // Default Footer CTA in English (can be overridden by page props passed to Layout)
    defaultFooterCta: {
      title: "Transform Your Professional English Today",
      description: "Book your free consultation to gain the clarity, confidence, and impact your role demands.",
      hideCta: false,
      button: {
        text: "Reserve My Free Consultation",
        link: "/en/book/",
      },
    },
  };
};