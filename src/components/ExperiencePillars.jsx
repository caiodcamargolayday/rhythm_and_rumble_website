import React, { useState } from 'react';
import { 
  Flame, 
  Waves, 
  Sparkles, 
  Coffee, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Dumbbell
} from 'lucide-react';
import { EXPERIENCE_PILLARS } from '../data/landingData';

const TAB_ICONS = {
  rumble: Flame,
  rhythm: Waves,
  recover: Sparkles,
  connect: Coffee
};

export default function ExperiencePillars({ onOpenBookingModal, onOpenLightbox }) {
  const [activePillarId, setActivePillarId] = useState(EXPERIENCE_PILLARS[0].id);

  const currentPillar = EXPERIENCE_PILLARS.find(p => p.id === activePillarId) || EXPERIENCE_PILLARS[0];

  return (
    <section className="section" style={{ background: 'var(--bg-surface-elevated)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Dumbbell size={15} />
            <span>The 4 Pillars Experience</span>
          </div>
          <h2 className="section-title">
            Train Hard. Surf Daily. <span className="text-gradient-gold">Recover & Connect.</span>
          </h2>
          <p className="section-subtitle">
            Rhythm & Rumble is Bali’s first all-in-one lifestyle retreat combining pro combat sports, 
            world-class surf breaks, and 10-12°C cold plunge contrast recovery under one roof.
          </p>
        </div>

        {/* Pillar Navigation Tabs */}
        <div className="pillars-nav">
          {EXPERIENCE_PILLARS.map((pillar) => {
            const Icon = TAB_ICONS[pillar.id] || Flame;
            const isActive = pillar.id === activePillarId;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`pillar-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="pillar-detail-card">
          {/* Media Column */}
          <div className="pillar-media">
            <img
              src={currentPillar.image}
              alt={currentPillar.title}
              className="pillar-img"
              onClick={() => onOpenLightbox(currentPillar.gallery || [currentPillar.image], 0)}
              style={{ cursor: 'pointer' }}
            />
            <div className="room-badge-overlay" style={{ top: '20px', left: '20px' }}>
              {currentPillar.badge}
            </div>
          </div>

          {/* Details Column */}
          <div className="pillar-info">
            <span className="pillar-subtitle">{currentPillar.subtitle}</span>
            <h3 className="pillar-title">{currentPillar.title}</h3>
            <p className="pillar-desc">{currentPillar.desc}</p>

            {/* Highlights List */}
            <div className="pillar-highlights-list">
              {currentPillar.highlights.map((item, idx) => (
                <div key={idx} className="highlight-row">
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Schedule / Timing */}
            <div className="pillar-schedule-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} />
                <span>{currentPillar.schedule}</span>
              </div>
            </div>

            {/* CTA Trigger */}
            <div style={{ marginTop: '10px' }}>
              <button
                onClick={() => onOpenBookingModal()}
                className="btn btn-primary"
                style={{ padding: '14px 28px' }}
              >
                <span>Book Direct & Get Free Class Pass</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
