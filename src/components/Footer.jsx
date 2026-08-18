import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { BRAND } from '../data/landingData';

export default function Footer() {
  return (
    <footer className="footer-plant-rr">
      <div className="footer-plant-overlay"></div>

      <div className="container-rr" style={{ position: 'relative', zIndex: 10 }}>
        <div className="footer-inner-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {/* ABOUT Column */}
          <div>
            <h4 style={{ fontSize: '0.95rem', letterSpacing: '0.15em', marginBottom: '16px', color: '#FFFFFF' }}>
              ABOUT
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img
                src="/logo-white.png"
                alt="Rhythm and Rumble Logo"
                style={{ height: '40px', width: 'auto' }}
              />
              <span style={{ fontSize: '0.85rem', color: 'var(--rr-gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Boutique Capsule Hostel
              </span>
            </div>
            <p style={{ color: 'var(--rr-gray-300)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              A unique boutique hostel concept for fitness conscious travellers in Canggu, Bali.
            </p>
          </div>

          {/* QUICK CONTACT Column */}
          <div>
            <h4 style={{ fontSize: '0.95rem', letterSpacing: '0.15em', marginBottom: '16px', color: '#FFFFFF' }}>
              QUICK CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: 'var(--rr-gray-300)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <MapPin size={16} color="var(--rr-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{BRAND.location}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Phone size={16} color="var(--rr-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Phone: {BRAND.phone}</span>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA Column (Instagram Only) */}
          <div>
            <h4 style={{ fontSize: '0.95rem', letterSpacing: '0.15em', marginBottom: '16px', color: '#FFFFFF' }}>
              SOCIAL MEDIA
            </h4>
            <p style={{ color: 'var(--rr-gray-300)', fontSize: '0.85rem', marginBottom: '14px' }}>
              Follow our daily workouts, surf sessions, and Canggu vibes on Instagram.
            </p>
            <div>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(0,0,0,0.6)',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.3s ease'
                }}
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--rr-gray-400)' }}>
          © {new Date().getFullYear()} Rhythm and Rumble Hostel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
