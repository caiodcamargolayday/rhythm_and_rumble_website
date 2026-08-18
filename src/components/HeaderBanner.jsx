import React from 'react';
import { BRAND } from '../data/landingData';

export default function HeaderBanner() {
  return (
    <header className="header-transparent">
      <div className="container-rr header-transparent-inner">
        {/* Brand Boxed Logo */}
        <a href="#" className="header-brand" aria-label="Rhythm and Rumble">
          <img
            src="/logo-white.png"
            alt="Rhythm & Rumble"
            className="header-top-logo"
          />
        </a>

        {/* Pure Single Conversion Option: Direct Book Now Button */}
        <div>
          <a
            href={BRAND.cloudbedsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </header>
  );
}
