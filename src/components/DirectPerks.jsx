import React from 'react';
import { 
  ShieldCheck, 
  Flame, 
  GlassWater, 
  Sparkles, 
  CalendarCheck2, 
  MessageCircle,
  Gift
} from 'lucide-react';
import { DIRECT_PERKS } from '../data/landingData';

const ICONS_MAP = {
  ShieldCheck,
  Flame,
  GlassWater,
  Sparkles,
  CalendarCheck2,
  MessageCircle
};

export default function DirectPerks({ onOpenBookingModal }) {
  return (
    <section className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Gift size={15} />
            <span>Why Book Direct</span>
          </div>
          <h2 className="section-title">
            Unlock VIP Perks When You <span className="text-gradient-gold">Book Direct</span>
          </h2>
          <p className="section-subtitle">
            Skip third-party booking commissions on Hostelworld & Booking.com. 
            We pass the 100% savings directly to you with exclusive bonuses you can't get anywhere else.
          </p>
        </div>

        {/* 6 Perks Grid */}
        <div className="perks-grid">
          {DIRECT_PERKS.map((perk) => {
            const IconComponent = ICONS_MAP[perk.icon] || Sparkles;
            return (
              <div key={perk.id} className="perk-card">
                <div className="perk-icon-wrap">
                  <IconComponent size={24} />
                </div>
                <h3 className="perk-title">{perk.title}</h3>
                <p className="perk-desc">{perk.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Callout Action */}
        <div style={{ textAlign: 'center', marginTop: '45px' }}>
          <button 
            onClick={() => onOpenBookingModal()}
            className="btn btn-primary btn-lg"
          >
            <span>Claim Your 10% Direct Discount</span>
          </button>
        </div>
      </div>
    </section>
  );
}
