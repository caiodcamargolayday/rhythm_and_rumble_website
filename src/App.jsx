import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ThreePillars from './components/ThreePillars';
import MarqueeStrip from './components/MarqueeStrip';
import ConceptSection from './components/ConceptSection';
import FacilitiesSection from './components/FacilitiesSection';
import FacilitiesShowcase from './components/FacilitiesShowcase';
import MmaYellowSection from './components/MmaYellowSection';
import SurfingSection from './components/SurfingSection';
import VibeCarousel from './components/VibeCarousel';
import PromoOfferSection from './components/PromoOfferSection';
import WhyChooseSection from './components/WhyChooseSection';
import DestinationsSection from './components/DestinationsSection';
import ReviewsSection from './components/ReviewsSection';
import FinalCta from './components/FinalCta';
import StickyBookingBar from './components/StickyBookingBar';
import PhotoLightbox from './components/PhotoLightbox';
import Footer from './components/Footer';
import { initMetaTracking } from './utils/metaTracking';

export default function App() {
  const [lightboxImages, setLightboxImages] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    initMetaTracking();
  }, []);

  const handleOpenLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxImages(null);
    setLightboxIndex(0);
  };

  return (
    <div className="landing-wrapper">
      {/* Hero Section (Bright Natural Photos Carousel, Centered Logo, Headlines & Strategic Book Now Button) */}
      <HeroSection />

      {/* 3 Quick Pillars (MMA, SAUNA with Sauna picture, SURFING) */}
      <ThreePillars />

      {/* Auto-scrolling Photo Marquee Strip */}
      <MarqueeStrip onOpenLightbox={handleOpenLightbox} />

      {/* R&R Story Section ("Rhythm & Rumble Hostel") */}
      <ConceptSection />

      {/* Facilities & Amenities Section (Plant Leaves Background, BAR & CAFE, COLD PLUNGE with Cold Plunge picture, POOL) */}
      <FacilitiesSection />

      {/* Rich Facilities & Lifestyle Showcases (Food & Cafe, MMA & Gym, Sauna & Cold Plunge, Hostel Life Carousels) */}
      <FacilitiesShowcase onOpenLightbox={handleOpenLightbox} />

      {/* Mustard Yellow Combat Sports & Boxing Training Section (Harmonic Accent with High-Contrast Dark Text) */}
      <MmaYellowSection onOpenLightbox={handleOpenLightbox} />

      {/* Dedicated Surfing Section (Daily Guided Surfaris & Lessons) */}
      <SurfingSection onOpenLightbox={handleOpenLightbox} />

      {/* "See The Vibe" Widescreen Featured Carousel */}
      <VibeCarousel onOpenLightbox={handleOpenLightbox} />

      {/* 10% OFF Promo Offer Section (Featuring Ads Image & Promo Code "RUMBLE10" with Same-Window Direct CTA) */}
      <PromoOfferSection onOpenLightbox={handleOpenLightbox} />

      {/* "Everything You Need Is Here" (Plant Leaf Background with 6 Core Value Pillars) */}
      <WhyChooseSection />

      {/* Our Destinations & Canggu Location Map */}
      <DestinationsSection />

      {/* Google My Business Verified 5-Star Reviews */}
      <ReviewsSection />

      {/* "Live The Vibe" Final Full-Width Banner with Strategic Book Now Button */}
      <FinalCta />

      {/* Footer with Plant Leaves Background (Instagram Only) */}
      <Footer />

      {/* Mobile Sticky Booking Bar */}
      <StickyBookingBar />

      {/* Full-Screen Photo Lightbox */}
      {lightboxImages && (
        <PhotoLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
}
