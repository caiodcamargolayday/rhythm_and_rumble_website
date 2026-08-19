import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const SURF_IMAGES = [
  "/images/surf.jpg",
  "/images/surf 02.jpg"
];

const SURF_INCLUSIONS = [
  "Comprehensive Surf Theory & Ocean Safety Class",
  "All Premium Gear Included: Surfboards, Leashes & Rashguards",
  "Comfortable Air-Conditioned Van Transport to the Best Breaks",
  "2 Full Hours of In-Water Coaching with Expert Local Guides"
];

export default function SurfingSection({ onOpenLightbox }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + SURF_IMAGES.length) % SURF_IMAGES.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SURF_IMAGES.length);
  };

  return (
    <section className="section-rr" style={{ borderTop: '1px solid var(--rr-border-subtle)' }}>
      <div className="container-rr">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '48px', 
            alignItems: 'center' 
          }}
        >
          {/* Left Column: Text & Inclusions */}
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--rr-gold)', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              ECHO BEACH • 400M AWAY
            </span>

            <h2 className="section-heading-main" style={{ marginBottom: '16px' }}>
              SURF WITH <span className="text-gold">OUR PROS</span>
            </h2>

            <div className="gold-divider" style={{ margin: '0 0 24px 0' }}></div>

            <p style={{ color: 'var(--rr-gray-200)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '20px' }}>
              No trip to Bali is truly complete without a session on its legendary waves, and our team of local instructors have years of top level experience and will ensure you get up on that board and have a great time doing it!
            </p>

            <p style={{ color: 'var(--rr-gray-300)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px' }}>
              We offer up to 2 daily guided surfaris tailored to your surfing skills, whether you’re a first-timer or an intermediate surfer looking to hone your technique on Canggu's famous reef and beach breaks.
            </p>

            {/* Inclusions List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SURF_INCLUSIONS.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(229, 168, 35, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={13} color="var(--rr-gold)" />
                  </div>
                  <span style={{ color: 'var(--rr-gray-100)', fontSize: '0.88rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Slider */}
          <div>
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 11',
                border: 'var(--rr-frame-border)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                overflow: 'hidden',
                background: '#000',
                cursor: 'pointer'
              }}
              onClick={() => onOpenLightbox(SURF_IMAGES, activeSlide)}
            >
              <img
                src={SURF_IMAGES[activeSlide]}
                alt="Surfing in Canggu Bali"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.65)',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 10
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.65)',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 10
                }}
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>

              {/* Slide Dots */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '0',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '6px',
                  zIndex: 10
                }}
              >
                {SURF_IMAGES.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === activeSlide ? '18px' : '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      background: i === activeSlide ? 'var(--rr-gold)' : 'rgba(255,255,255,0.4)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
