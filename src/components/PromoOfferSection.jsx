import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Sparkles, Tag } from 'lucide-react';
import { BRAND } from '../data/landingData';

export default function PromoOfferSection({ onOpenLightbox }) {
  const [copied, setCopied] = useState(false);
  const promoCode = "RUMBLE10";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section 
      className="section-rr" 
      style={{ 
        borderTop: '1px solid var(--rr-border-subtle)',
        borderBottom: '1px solid var(--rr-border-subtle)',
        background: 'linear-gradient(180deg, rgba(20, 47, 31, 0.45) 0%, rgba(10, 15, 12, 0.98) 100%)',
        padding: '80px 20px'
      }}
    >
      <div className="container-rr">
        <div 
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h2 className="section-heading-main" style={{ marginBottom: '12px' }}>
            STAY AT R&R THIS SUMMER • <span className="text-gold">GET 10% OFF</span>
          </h2>
          <div className="gold-divider"></div>

          {/* Full Size Uncropped Ad Image (Talks for itself) */}
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              margin: '0 auto 36px auto',
              cursor: 'pointer'
            }}
            onClick={() => onOpenLightbox(["/images/R&R Ads.jpg"], 0)}
          >
            <img
              src="/images/R&R Ads.jpg"
              alt="Stay at R&R This Summer - Get 10% Off with Promo Code RUMBLE10"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                border: 'var(--rr-frame-border)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>

          {/* Promo Code & Strategic Action Bar */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              width: '100%',
              maxWidth: '560px'
            }}
          >
            {/* Copy Promo Code Pill */}
            <div 
              style={{
                background: 'rgba(0,0,0,0.75)',
                border: '1px dashed var(--rr-gold)',
                padding: '12px 20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                borderRadius: '2px'
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--rr-gray-400)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
                  PROMO CODE:
                </span>
                <span style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--rr-gold)', letterSpacing: '0.12em', fontFamily: "'Montserrat', sans-serif" }}>
                  {promoCode}
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                style={{
                  background: copied ? '#22c55e' : 'rgba(255,208,0,0.15)',
                  border: copied ? '1px solid #22c55e' : '1px solid var(--rr-gold)',
                  color: copied ? '#ffffff' : 'var(--rr-gold)',
                  padding: '6px 12px',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s ease',
                  borderRadius: '2px'
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? 'COPIED!' : 'COPY'}</span>
              </button>
            </div>

            {/* Strategic Single-Window Cloudbeds Button */}
            <a
              href={BRAND.cloudbedsUrl}
              target="_self"
              className="btn-book btn-book-lg"
              style={{ flex: '1 1 auto', minWidth: '240px' }}
            >
              <span>CLAIM 10% OFF • BOOK NOW</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
