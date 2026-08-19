import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MMA_IMAGES = [
  "/images/muay thai.jpg",
  "/images/muay thai 02.jpg",
  "/images/muay thai 03.jpg",
  "/images/space 02.jpg"
];

export default function MmaYellowSection({ onOpenLightbox }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + MMA_IMAGES.length) % MMA_IMAGES.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % MMA_IMAGES.length);
  };

  return (
    <section 
      style={{ 
        backgroundColor: 'var(--rr-gold, #E5A823)', 
        padding: '90px 0',
        color: '#111111',
        position: 'relative'
      }}
    >
      <div className="container-rr">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '48px', 
            alignItems: 'center' 
          }}
        >
          {/* Left Column: Image Carousel with Clean Frame */}
          <div>
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
                border: '4px solid #111111',
                background: '#000',
                cursor: 'pointer'
              }}
              onClick={() => onOpenLightbox(MMA_IMAGES, activeSlide)}
            >
              <img
                src={MMA_IMAGES[activeSlide]}
                alt="MMA & Muay Thai at Rhythm & Rumble"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
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
                  background: 'rgba(0,0,0,0.75)',
                  color: '#fff',
                  width: '38px',
                  height: '38px',
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
                  background: 'rgba(0,0,0,0.75)',
                  color: '#fff',
                  width: '38px',
                  height: '38px',
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

              {/* Slide Indicators */}
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
                {MMA_IMAGES.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === activeSlide ? '18px' : '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      background: i === activeSlide ? 'var(--rr-gold, #E5A823)' : 'rgba(255,255,255,0.5)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Dark Text (Clean without redundant button) */}
          <div>
            <span 
              style={{ 
                fontSize: '0.8rem', 
                fontWeight: '900', 
                letterSpacing: '0.18em', 
                textTransform: 'uppercase', 
                color: '#222222',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              COMBAT SPORTS & TRAINING
            </span>

            {/* BOXING CLASS */}
            <div style={{ marginBottom: '24px' }}>
              <h3 
                style={{ 
                  fontSize: '1.65rem', 
                  letterSpacing: '0.08em', 
                  color: '#111111', 
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  fontWeight: '800'
                }}
              >
                BOXING CLASS
              </h3>
              <p 
                style={{ 
                  color: '#222222', 
                  fontSize: '0.92rem', 
                  lineHeight: 1.65, 
                  margin: 0,
                  fontFamily: "'Cabin', sans-serif"
                }}
              >
                For Beginner and Advanced we start up with warm up and Cardio first, followed with basic boxing technique and footwork, also bagwork and padwork for Beginner. For Advanced, we work on coordination drills, heavy bagwork, and padwork. Sparring is available upon request.
              </p>
            </div>

            {/* KICK BOXING & MUAY THAI */}
            <div>
              <h3 
                style={{ 
                  fontSize: '1.65rem', 
                  letterSpacing: '0.08em', 
                  color: '#111111', 
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  fontWeight: '800'
                }}
              >
                KICK BOXING & MUAY THAI
              </h3>
              <p 
                style={{ 
                  color: '#222222', 
                  fontSize: '0.92rem', 
                  lineHeight: 1.65, 
                  margin: 0,
                  fontFamily: "'Cabin', sans-serif"
                }}
              >
                For Beginner and Advanced, start up with warm up, cardio and footwork. Followed with basic techniques and steps for beginners, padwork or bagwork. For advanced, we train Advanced Muay Thai / Kick Boxing techniques followed by coordination drills, focus training, and padwork/bagwork sparring upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
