import React, { useState, useEffect } from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { BRAND } from '../data/landingData';

export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-mobile-bar">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '0.72rem', color: 'var(--rr-gray-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          SPECIAL DIRECT PROMO
        </span>
        <span style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--rr-gold)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Tag size={13} />
          USE CODE: RUMBLE10 (10% OFF)
        </span>
      </div>

      <a
        href={BRAND.cloudbedsUrl}
        target="_self"
        className="btn-book"
        style={{ padding: '10px 18px', fontSize: '0.8rem' }}
      >
        <span>BOOK NOW</span>
        <ArrowRight size={14} />
      </a>
    </div>
  );
}
