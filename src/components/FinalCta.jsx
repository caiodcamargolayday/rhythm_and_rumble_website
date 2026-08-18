import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '../data/landingData';

export default function FinalCta() {
  return (
    <section className="final-banner-rr">
      <img
        src="/images/space.jpg"
        alt="Rhythm and Rumble Poolside"
        className="final-banner-bg"
      />

      <div className="final-banner-content">
        <h2 className="final-banner-title">
          LIVE THE <span className="text-gold">VIBE</span>
        </h2>

        <a
          href={BRAND.cloudbedsUrl}
          target="_self"
          className="btn-book btn-book-lg"
        >
          <span>BOOK NOW</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
