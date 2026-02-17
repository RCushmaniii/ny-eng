import { useState, useEffect, useCallback, useRef } from "react";

interface Meme {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  roles: string[];
  datePublished: string;
  beforePhrase?: string;
  afterPhrase?: string;
}

interface MemeLightboxProps {
  memes: Meme[];
  lang: "en" | "es";
}

export default function MemeLightbox({ memes, lang }: MemeLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev !== null ? (prev + 1) % memes.length : null
    );
  }, [memes.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev !== null ? (prev - 1 + memes.length) % memes.length : null
    );
  }, [memes.length]);

  // Lock body scroll + keyboard handling
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the close button for accessibility
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, goNext, goPrev]);

  const activeMeme = activeIndex !== null ? memes[activeIndex] : null;

  const beforeLabel = lang === "en" ? "Before" : "Antes";
  const afterLabel = lang === "en" ? "After" : "Despues";

  return (
    <>
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {memes.map((meme, idx) => (
          <button
            key={meme.id}
            type="button"
            className="meme-card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg text-left cursor-pointer"
            onClick={() => setActiveIndex(idx)}
            aria-label={`${lang === "en" ? "View" : "Ver"}: ${meme.title}`}
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={meme.image}
                alt={meme.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {meme.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {meme.caption}
              </p>
              {(meme.beforePhrase || meme.afterPhrase) && (
                <div className="border-t border-gray-100 pt-3 space-y-2">
                  {meme.beforePhrase && (
                    <div className="text-xs">
                      <span className="inline-block px-1.5 py-0.5 bg-red-50 text-red-600 font-semibold rounded mr-1">
                        {beforeLabel}
                      </span>
                      <span className="text-gray-500 italic">
                        &ldquo;{meme.beforePhrase}&rdquo;
                      </span>
                    </div>
                  )}
                  {meme.afterPhrase && (
                    <div className="text-xs">
                      <span className="inline-block px-1.5 py-0.5 bg-green-50 text-green-700 font-semibold rounded mr-1">
                        {afterLabel}
                      </span>
                      <span className="text-gray-700 font-medium">
                        &ldquo;{meme.afterPhrase}&rdquo;
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isOpen && activeMeme && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 animate-fade-in"
          style={{ zIndex: "var(--z-modal, 1050)" }}
          role="dialog"
          aria-modal="true"
          aria-label={activeMeme.title}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={close}
            aria-hidden="true"
          />

          {/* Prev arrow */}
          {memes.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label={lang === "en" ? "Previous meme" : "Meme anterior"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Content */}
          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="absolute -top-2 -right-2 sm:top-0 sm:right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label={lang === "en" ? "Close" : "Cerrar"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={activeMeme.image}
              alt={activeMeme.alt}
              className="max-h-[60vh] w-auto max-w-full rounded-lg object-contain"
            />

            {/* Info panel */}
            <div className="mt-4 w-full text-center text-white px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {activeMeme.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3">
                {activeMeme.caption}
              </p>
              {(activeMeme.beforePhrase || activeMeme.afterPhrase) && (
                <div className="space-y-2">
                  {activeMeme.beforePhrase && (
                    <div className="text-sm">
                      <span className="inline-block px-2 py-0.5 bg-red-500/30 text-red-300 font-semibold rounded mr-2">
                        {beforeLabel}
                      </span>
                      <span className="text-gray-400 italic">
                        &ldquo;{activeMeme.beforePhrase}&rdquo;
                      </span>
                    </div>
                  )}
                  {activeMeme.afterPhrase && (
                    <div className="text-sm">
                      <span className="inline-block px-2 py-0.5 bg-green-500/30 text-green-300 font-semibold rounded mr-2">
                        {afterLabel}
                      </span>
                      <span className="text-white font-medium">
                        &ldquo;{activeMeme.afterPhrase}&rdquo;
                      </span>
                    </div>
                  )}
                </div>
              )}
              {/* Counter */}
              {memes.length > 1 && (
                <p className="mt-3 text-xs text-gray-500">
                  {activeIndex + 1} / {memes.length}
                </p>
              )}
            </div>
          </div>

          {/* Next arrow */}
          {memes.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label={lang === "en" ? "Next meme" : "Siguiente meme"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
