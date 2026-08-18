import React from 'react';
import { BRAND } from '../data/landingData';

const PILLARS = [
  {
    title: "MMA",
    img: "/images/muay thai.jpg"
  },
  {
    title: "SAUNA",
    img: "/images/sauna.JPG"
  },
  {
    title: "SURFING",
    img: "/images/surf.jpg"
  }
];

export default function ThreePillars() {
  return (
    <section className="three-pillars-grid">
      {PILLARS.map((pillar, idx) => (
        <a
          key={idx}
          href={BRAND.cloudbedsUrl}
          target="_self"
          className="pillar-banner-box"
          style={{ textDecoration: 'none' }}
        >
          <img
            src={pillar.img}
            alt={pillar.title}
            className="pillar-banner-bg"
            loading="lazy"
          />
          <div className="pillar-banner-overlay"></div>

          <div className="pillar-banner-content">
            <h3 style={{ color: '#FFFFFF', letterSpacing: '0.12em', margin: 0 }}>
              {pillar.title}
            </h3>
          </div>
        </a>
      ))}
    </section>
  );
}
