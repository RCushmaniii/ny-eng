import { routes } from "@utils/paths";

export const headerContent = {
  menu: [
    { name: "Services", link: routes.en.services },
    { name: "About", link: routes.en.about },
    { name: "Blog", link: routes.en.blog },
    { name: "Testimonials", link: routes.en.testimonials },
    { name: "Resources", link: routes.en.resources },
    { name: "Courses", link: "/en/courses/" },
    { name: "Corporate", link: "/en/services/corporate-package/" },
  ],
  cta: { text: "Contact", link: routes.en.contact },
  logoLink: routes.en.home,
} as const;
