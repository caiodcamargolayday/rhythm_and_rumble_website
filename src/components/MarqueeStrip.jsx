import React from 'react';
import { MARQUEE_IMAGES } from '../data/landingData';

export default function MarqueeStrip({ onOpenLightbox }) {
  const allImages = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {allImages.map((src, idx) => (
          <div
            key={idx}
            className="marquee-card"
            onClick={() => onOpenLightbox(MARQUEE_IMAGES, idx % MARQUEE_IMAGES.length)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={src}
              alt="Rhythm and Rumble Canggu Bali"
              className="marquee-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
