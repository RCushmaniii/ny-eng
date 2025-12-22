// Complete type definitions for the project

export interface Post {
  id: string;
  slug: string;
  permalink: string;
  publishDate: Date;
  updateDate?: Date;
  title: string;
  excerpt?: string;
  image?: string;
  category?: string;
  tags?: string[];
  author?: string;
  metadata?: {
    canonical?: string;
    robots?: {
      index?: boolean;
      follow?: boolean;
    };
    openGraph?: {
      url?: string;
      siteName?: string;
      images?: {
        url: string;
        width?: number;
        height?: number;
      }[];
      locale?: string;
      type?: string;
    };
  };
  draft?: boolean;
  Content?: any;
  content?: string;
  readingTime?: number;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  description?: string;
  openGraph?: {
    url?: string;
    siteName?: string;
    images?: {
      url: string;
      width?: number;
      height?: number;
    }[];
    locale?: string;
    type?: string;
  };
  twitter?: {
    handle?: string;
    site?: string;
    cardType?: string;
  };
}

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
  googleSiteVerificationId?: string;
}

export interface Image {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
}

export interface Testimonial {
  title?: string;
  testimonial?: string;
  name?: string;
  job?: string;
  image?: string | Image;
}

export interface Input {
  type: string;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
}

export interface Textarea {
  label?: string;
  name?: string;
  placeholder?: string;
}

export interface Disclaimer {
  label?: string;
}

// Button types
export interface Button {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary" | "tertiary" | "link";
  target?: string;
  rel?: string;
  icon?: string;
  class?: string;
}

// Form types
export interface Form {
  title?: string;
  description?: string;
  inputs?: Input[];
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description2?: string;
}

// Item types for grids and lists
export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: Button;
  image?: Image;
}

export interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<{
    description: string;
    icon?: string;
  }>;
  callToAction?: Button;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export interface Team {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<{
    icon: string;
    href: string;
  }>;
  description?: string;
  classes?: Record<string, string>;
}

export interface Stat {
  amount?: number | string;
  title?: string;
  icon?: string;
}

// Component prop interfaces
export interface CallToActionProps extends Headline, Widget {
  subtitle?: string;
  callToAction?: Button;
  callToAction2?: Button;
  image?: Image;
}

export interface ContentProps extends Headline, Widget {
  content?: string;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
  callToAction?: Button;
}

export interface FAQsProps extends Headline, Widget {
  iconUp?: string;
  iconDown?: string;
  items?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  columns?: number;
}

export interface FeaturesProps extends Headline, Widget {
  image?: Image;
  video?: Video;
  items: Item[];
  columns?: number;
  defaultIcon?: string;
  callToAction1?: Button;
  callToAction2?: Button;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface FooterProps extends Widget {
  links?: Array<{
    title?: string;
    items?: Array<{
      title: string;
      href: string;
    }>;
  }>;
  secondaryLinks?: Array<{
    title: string;
    href: string;
  }>;
  socialLinks?: Array<{
    ariaLabel: string;
    icon: string;
    href: string;
  }>;
  footNote?: string;
  theme?: "light" | "dark";
}

export interface HeaderProps extends Widget {
  links?: Array<{
    title: string;
    href: string;
  }>;
  actions?: Button[];
  isSticky?: boolean;
  isDark?: boolean;
  isFullWidth?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: "center" | "right" | "left";
}

export interface HeroProps extends Headline, Widget {
  content?: string;
  actions?: string | Button[];
  image?: Image;
  video?: Video;
}

export interface PricingProps extends Headline, Widget {
  prices?: Price[];
}

export interface StatsProps extends Headline, Widget {
  stats?: Stat[];
}

export interface StepsProps extends Headline, Widget {
  items: Array<{
    title?: string;
    description?: string;
    icon?: string;
    classes?: Record<string, string>;
  }>;
  callToAction?: Button;
  image?: Image;
  isReversed?: boolean;
}

export interface TeamProps extends Headline, Widget {
  team?: Team[];
}

export interface TestimonialsProps extends Headline, Widget {
  testimonials?: Testimonial[];
  callToAction?: Button;
}

// All types are already exported above with export interface/type declarations
