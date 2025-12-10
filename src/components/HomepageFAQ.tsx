import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { homepageFAQs, type HomepageFAQ } from "@data/homepage-faqs";

interface HomepageFAQProps {
  lang: "en" | "es";
}

export default function HomepageFAQComponent({ lang }: HomepageFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const content = homepageFAQs[lang];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {content.faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                index === 0
                  ? "border-blue-200 bg-slate-50/50 hover:border-blue-300"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors duration-200 ${
                  index === 0
                    ? "bg-slate-50/50 hover:bg-slate-100/50"
                    : "bg-white hover:bg-slate-50"
                }`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`text-lg font-semibold pr-4 ${
                  index === 0 ? "text-blue-900" : "text-slate-900"
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    index === 0 ? "text-blue-600" : "text-slate-600"
                  } ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                <div className={`px-6 pb-5 pt-2 ${
                  index === 0 ? "bg-white/80" : ""
                }`}>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Full FAQ Page */}
        <div className="mt-12 text-center">
          <a
            href={content.ctaLink}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors duration-200 group"
          >
            {content.ctaText}
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": content.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
