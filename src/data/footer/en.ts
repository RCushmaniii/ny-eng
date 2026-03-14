import type { ConnectItem } from "@components/Footer.astro";
import { routes } from "@utils/paths";

export const footerContentEn = (siteConfig: { companyName: string }) => {
  const currentYear = new Date().getFullYear();
  return {
    logoLink: routes.en.home,
    tagline:
      "Empowering international leaders to communicate with authority and executive presence.",
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
          {
            name: "Executive Guides",
            href: routes.en.resources ?? "/en/resources/",
          },
          { name: "FAQs", href: "/en/faqs/" },
          { name: "Try my AI English Coach", href: "/en/chat/" },
          { name: "Blog", href: routes.en.blog },
          { name: "Benchmark Assessment", href: "/en/assessments/" },
          { name: "Executive Memes", href: "/en/meme-portfolio/all/" },
        ],
      },
      connect: {
        title: "Connect",
        items: [
          {
            type: "link",
            name: "WhatsApp Direct",
            href: "https://wa.link/pk4f97",
            target: "_blank",
            rel: "noopener noreferrer",
          },
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
      title: "You already lead. Now sound like it — in English.",
      description:
        "Book a private strategy session. In 30 minutes, I'll identify the specific gaps between your current English and the executive presence your role demands.",
      hideCta: false,
      button: {
        text: "Book My Strategy Session",
        link: "/en/book/",
      },
    },
  };
};
