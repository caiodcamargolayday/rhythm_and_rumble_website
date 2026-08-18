import React from 'react';
import { Camera } from 'lucide-react';
import { GALLERY_TILES } from '../data/landingData';

export default function UnfilteredGallery({ onOpenLightbox }) {
  return (
    <section className="section-rr" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container-rr">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <Camera size={24} color="var(--rr-orange)" style={{ margin: '0 auto 10px auto' }} />
          <h2 className="section-heading-main">
            THE <span className="text-orange">UNFILTERED</span> GALLERY
          </h2>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="gallery-editorial-grid">
          {GALLERY_TILES.map((tile, idx) => (
            <div
              key={idx}
              className={`gallery-tile-item ${tile.size}`}
              onClick={() => onOpenLightbox(GALLERY_TILES.map(t => t.src), idx)}
            >
              <img
                src={tile.src}
                alt={tile.title}
                className="gallery-tile-img"
                loading="lazy"
              />
              <div className="gallery-tile-overlay">
                <h4>{tile.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
