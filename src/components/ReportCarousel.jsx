//src/components/ReportCarousel.jsx
import { useState, useEffect } from 'react';

const ReportCarousel = ({ images, autoPlayInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Default sample images - replace these with your actual report screenshots
  const defaultImages = [
    {
      src: '/images/report-sample-1.png',
      alt: 'Communication Confidence Score Overview',
      caption: 'Your personalized confidence score and growth areas'
    },
    {
      src: '/images/report-sample-2.png',
      alt: 'Detailed Analysis',
      caption: 'In-depth analysis of your communication patterns'
    },
    {
      src: '/images/report-sample-3.png',
      alt: 'Strengths Assessment',
      caption: 'Discover your unique communication strengths'
    },
    {
      src: '/images/report-sample-4.png',
      alt: 'Growth Opportunities',
      caption: 'Personalized recommendations for improvement'
    },
    {
      src: '/images/report-sample-5.png',
      alt: 'Action Plan',
      caption: 'Step-by-step guidance to boost your confidence'
    }
  ];

  const slides = images || defaultImages;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="report-carousel">
      <div className="carousel-header">
        <h3>EXAMPLE RESULTS FROM YOUR REPORT</h3>
      </div>

      <div className="carousel-container">
        {/* Navigation Arrows */}
        <button 
          className="carousel-arrow carousel-arrow-left"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Slides */}
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="slide-content">
                <img 
                  src={slide.src} 
                  alt={slide.alt}
                  loading="lazy"
                />
                <div className="slide-caption">
                  <p>{slide.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-arrow carousel-arrow-right"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .report-carousel {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .carousel-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .carousel-header h3 {
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #64748b;
          margin: 0;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
          background: #f8fafc;
        }

        .carousel-slides {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          min-height: 400px;
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          pointer-events: none;
        }

        .carousel-slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .slide-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 2rem;
        }

        .slide-content img {
          max-width: 100%;
          max-height: 80%;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .slide-caption {
          margin-top: 1.5rem;
          text-align: center;
        }

        .slide-caption p {
          font-size: 1rem;
          color: #475569;
          margin: 0;
          font-weight: 500;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          transition: all 0.2s ease;
          z-index: 10;
          color: #3b82f6;
        }

        .carousel-arrow:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-arrow:active {
          transform: translateY(-50%) scale(0.95);
        }

        .carousel-arrow-left {
          left: 1rem;
        }

        .carousel-arrow-right {
          right: 1rem;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid #cbd5e1;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          border-color: #3b82f6;
          transform: scale(1.2);
        }

        .dot.active {
          background: #3b82f6;
          border-color: #3b82f6;
          width: 24px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .report-carousel {
            padding: 1rem;
          }

          .carousel-slides {
            min-height: 300px;
          }

          .carousel-arrow {
            width: 40px;
            height: 40px;
          }

          .carousel-arrow-left {
            left: 0.5rem;
          }

          .carousel-arrow-right {
            right: 0.5rem;
          }

          .slide-content {
            padding: 1rem;
          }

          .slide-caption p {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ReportCarousel;