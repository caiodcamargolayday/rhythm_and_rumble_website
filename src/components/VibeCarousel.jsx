import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VIBE_SLIDES } from '../data/landingData';

export default function VibeCarousel({ onOpenLightbox }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + VIBE_SLIDES.length) % VIBE_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % VIBE_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevIdx = (currentIdx - 1 + VIBE_SLIDES.length) % VIBE_SLIDES.length;
  const nextIdx = (currentIdx + 1) % VIBE_SLIDES.length;
  const activeSlide = VIBE_SLIDES[currentIdx];

  return (
    <section className="section-rr">
      <div className="container-rr">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 className="section-heading-main">
            SEE THE <span className="text-orange">VIBE</span>
          </h2>
        </div>

        {/* Widescreen Carousel Frame */}
        <div className="vibe-carousel-wrap">
          <div 
            className="vibe-main-frame"
            onClick={() => onOpenLightbox(VIBE_SLIDES.map(s => s.src), currentIdx)}
            style={{ cursor: 'pointer' }}
          >
            {/* Left Preview Slice */}
            <div 
              className="vibe-side-slice left"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              title="Previous"
            >
              <img
                src={VIBE_SLIDES[prevIdx].src}
                alt="Previous slide preview"
                className="vibe-side-img"
              />
            </div>

            {/* Main Center Image */}
            <img
              src={activeSlide.src}
              alt={activeSlide.title}
              className="vibe-main-img"
            />

            {/* Right Preview Slice */}
            <div 
              className="vibe-side-slice right"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              title="Next"
            >
              <img
                src={VIBE_SLIDES[nextIdx].src}
                alt="Next slide preview"
                className="vibe-side-img"
              />
            </div>

            {/* Bottom Caption Overlay */}
            <div className="vibe-caption-bar">
              <h3>{activeSlide.title}</h3>
              <p>{activeSlide.subtitle}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="vibe-controls-bar">
            <button onClick={prevSlide} className="vibe-nav-btn" aria-label="Previous slide">
              <ChevronLeft size={22} />
            </button>

            <div className="vibe-dots-wrap">
              {VIBE_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`vibe-dot ${i === currentIdx ? 'active' : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={nextSlide} className="vibe-nav-btn" aria-label="Next slide">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
