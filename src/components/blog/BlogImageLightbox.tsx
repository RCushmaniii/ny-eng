import React, { useState } from "react";

interface BlogImageLightboxProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

export default function BlogImageLightbox({ src, alt, children }: BlogImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="relative group cursor-pointer"
        onClick={() => setIsOpen(true)}
        style={{ overflow: "hidden" }}
      >
        {children}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-12 h-12 text-white drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleClose}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain" />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
