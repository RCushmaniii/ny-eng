import { routes } from "@utils/paths";

export const headerContent = {
  menu: [
    { name: "Services", link: routes.en.services },
    { name: "About", link: routes.en.about },
    { name: "Blog", link: routes.en.blog },
    { name: "Testimonials", link: routes.en.testimonials },
    { name: "Free", link: routes.en.free },
  ],
  cta: { text: "Contact", link: routes.en.contact },
  logoLink: routes.en.home,
} as const;
