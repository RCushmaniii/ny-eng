import { siteConfig } from './config';

/**
 * Generates a comprehensive JSON-LD schema that combines Organization and WebSite information
 * This provides rich structured data for search engines
 */
export function generateJsonLd(lang: string = 'en') {
  const domain = siteConfig.siteUrl || 'https://www.nyenglishteacher.com';
  const cleanDomain = domain.endsWith('/') ? domain.slice(0, -1) : domain;
  const companyName = siteConfig.companyName || 'New York English';
  
  // Determine language-specific properties
  const inLanguage = lang === 'es' ? 'es-ES' : 'en-US';
  const aboutPage = lang === 'es' ? '/es/about/' : '/en/about/';
  const contactPage = lang === 'es' ? '/es/contact/' : '/en/contact/';
  const servicesPage = lang === 'es' ? '/es/servicios/' : '/en/services/';
  const blogPage = lang === 'es' ? '/es/blog/' : '/en/blog/';
  
  // Build the JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${cleanDomain}/#organization`,
        "name": companyName,
        "url": cleanDomain,
        "logo": {
          "@type": "ImageObject",
          "@id": `${cleanDomain}/#logo`,
          "url": `${cleanDomain}/images/logos/new-york-english-og.jpg`,
          "contentUrl": `${cleanDomain}/images/logos/new-york-english-og.jpg`,
          "width": 1200,
          "height": 630,
          "caption": companyName
        },
        "image": {
          "@id": `${cleanDomain}/#logo`
        },
        "sameAs": [
          siteConfig.Socials.LinkedIn,
          siteConfig.Socials.xSocial,
          siteConfig.Socials.Instagram
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": `${cleanDomain}${contactPage}`
        }
      },
      {
        "@type": "WebSite",
        "@id": `${cleanDomain}/#website`,
        "url": cleanDomain,
        "name": companyName,
        "description": lang === 'es' 
          ? "Coaching de inglés empresarial y capacitación corporativa para profesionales"
          : "Professional Business English Coaching and Corporate Training",
        "publisher": {
          "@id": `${cleanDomain}/#organization`
        },
        "inLanguage": inLanguage,
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": `${cleanDomain}${blogPage}?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return jsonLd;
}

/**
 * Generates JSON-LD for blog posts
 */
export function generateBlogPostJsonLd({
  title,
  description,
  image,
  publishDate,
  lang = 'en',
  authorName = 'New York English',
  url
}: {
  title: string;
  description: string;
  image?: string;
  publishDate: string | Date;
  lang?: string;
  authorName?: string;
  url: string;
}) {
  const domain = siteConfig.siteUrl || 'https://www.nyenglishteacher.com';
  const cleanDomain = domain.endsWith('/') ? domain.slice(0, -1) : domain;
  const aboutPage = lang === 'es' ? '/es/about/' : '/en/about/';
  const inLanguage = lang === 'es' ? 'es-ES' : 'en-US';
  
  // Format date consistently
  const formattedDate = (() => {
    const dateStr = String(publishDate);
    if (dateStr && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      const parts = dateStr.split('-');
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const day = parseInt(parts[2], 10);
      const jsDate = new Date();
      jsDate.setFullYear(year, month - 1, day);
      jsDate.setHours(12, 0, 0, 0); // Set to noon to avoid day shifting
      return jsDate.toISOString();
    } else {
      return new Date(dateStr).toISOString();
    }
  })();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image ? new URL(image, cleanDomain).toString() : `${cleanDomain}/images/logos/new-york-english-og.jpg`,
    "datePublished": formattedDate,
    "dateModified": formattedDate,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": new URL(aboutPage, cleanDomain).toString(),
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.companyName,
      "logo": {
        "@type": "ImageObject",
        "url": new URL('/images/logos/new-york-english-og.jpg', cleanDomain).toString(),
      }
    },
    "inLanguage": inLanguage,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
  };
  
  return jsonLd;
}
