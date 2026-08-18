import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '../data/landingData';

const HERO_CAROUSEL_IMAGES = [
  "/images/muay thai.jpg",
  "/images/surf.jpg",
  "/images/cold plunge.jpg",
  "/images/sauna.JPG",
  "/images/hostel life.jpg",
  "/images/bar and cafe.jpg",
  "/images/pool.jpg"
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-carousel-section">
      {/* Background Switching Carousel (Bright, natural & vibrant) */}
      <div className="hero-carousel-bg">
        {HERO_CAROUSEL_IMAGES.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="Rhythm and Rumble Canggu Bali"
            className="hero-slide-img"
            style={{
              opacity: activeSlide === i ? 1 : 0,
              zIndex: activeSlide === i ? 2 : 1
            }}
          />
        ))}
      </div>
      <div className="hero-carousel-overlay"></div>

      {/* Centered Hero Content (Logo, Headline, Subheadline & Book Now Button) */}
      <div className="hero-centered-content">
        {/* Centered White Boxed Logo */}
        <img
          src="/logo-white.png"
          alt="Rhythm and Rumble"
          className="hero-center-logo"
        />

        {/* Headline */}
        <h1 className="hero-center-headline">
          A UNIQUE BOUTIQUE HOSTEL CONCEPT<br />
          FOR FITNESS CONSCIOUS TRAVELLERS
        </h1>

        {/* Subheadline */}
        <p className="hero-center-subheadline">
          Based in Canggu, Bali, Rhythm & Rumble is the first hostel to offer a unique combination of MMA and surf classes, all under one roof. The hostel also features a sauna and cold plunge, providing guests with a complete wellness experience
        </p>

        {/* Primary Centered Book Now Button (Navigates in the same window) */}
        <div>
          <a
            href={BRAND.cloudbedsUrl}
            target="_self"
            className="btn-book btn-book-lg"
          >
            <span>BOOK NOW</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="hero-carousel-dots">
          {HERO_CAROUSEL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`hero-dot-btn ${idx === activeSlide ? 'active' : ''}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
