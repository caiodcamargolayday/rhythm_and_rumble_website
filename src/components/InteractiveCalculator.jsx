import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Flame,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ROOMS, PACKAGES, BRAND } from '../data/landingData';

export default function InteractiveCalculator({ onOpenWhatsApp, onDirectBookingCheckout }) {
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS[0].id);
  const [nights, setNights] = useState(5);
  const [selectedAddons, setSelectedAddons] = useState([PACKAGES[0].id]); // default to fight pass

  const currentRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const roomBaseTotal = currentRoom.directPrice * nights;
  const roomOtaTotal = currentRoom.otaPrice * nights;

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const pkg = PACKAGES.find(p => p.id === id);
    return sum + (pkg ? pkg.price : 0);
  }, 0);

  const grandTotal = roomBaseTotal + addonsTotal;
  const otaGrandTotal = roomOtaTotal + addonsTotal;
  const totalSavings = otaGrandTotal - grandTotal;

  const handleCheckoutClick = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {}

    onDirectBookingCheckout({
      room: currentRoom,
      nights,
      addons: selectedAddons.map(id => PACKAGES.find(p => p.id === id)),
      grandTotal,
      savings: totalSavings
    });
  };

  const handleWhatsAppInquiry = () => {
    const addonsList = selectedAddons
      .map(id => PACKAGES.find(p => p.id === id)?.title)
      .filter(Boolean)
      .join(', ');

    const msg = `Hi Rhythm & Rumble! I calculated my custom package on your website:
• Room: ${currentRoom.name}
• Length of stay: ${nights} nights
• Add-ons: ${addonsList || 'None'}
• Direct Rate: $${grandTotal} USD (Saving $${totalSavings} USD)
Please confirm availability and booking details!`;

    onOpenWhatsApp(msg);
  };

  return (
    <section className="section" id="calculator">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calculator size={15} />
            <span>Interactive Trip Builder</span>
          </div>
          <h2 className="section-title">
            Build Your Custom <span className="text-gradient">Bali Retreat & Direct Rate</span>
          </h2>
          <p className="section-subtitle">
            Customize your stay duration, choose your accommodation, and bundle Muay Thai or surf packages 
            with transparent direct rates.
          </p>
        </div>

        {/* Calculator Interface Card */}
        <div className="calculator-card">
          {/* Left Configuration Steps */}
          <div className="calc-left">
            {/* Step 1: Select Room */}
            <div>
              <h4 className="calc-step-title">
                <span style={{ color: 'var(--gold-primary)' }}>1.</span> Select Accommodation
              </h4>
              <div className="calc-room-selector">
                {ROOMS.map((room) => {
                  const isSelected = room.id === selectedRoomId;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`calc-room-btn ${isSelected ? 'active' : ''}`}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="calc-room-name">{room.name}</span>
                        {isSelected && <Check size={16} color="var(--gold-primary)" />}
                      </div>
                      <span className="calc-room-rate">
                        Direct: ${room.directPrice}/nt <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>${room.otaPrice}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Duration */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 className="calc-step-title" style={{ margin: 0 }}>
                  <span style={{ color: 'var(--gold-primary)' }}>2.</span> Duration of Stay
                </h4>
                <span style={{ color: 'var(--gold-primary)', fontWeight: '800', fontSize: '1.1rem' }}>
                  {nights} Nights
                </span>
              </div>

              {/* Nights Quick Buttons */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                {[3, 5, 7, 10, 14, 21].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNights(n)}
                    style={{
                      background: nights === n ? 'var(--gold-primary)' : 'var(--bg-surface-elevated)',
                      color: nights === n ? '#000' : '#fff',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '6px 14px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    {n} Nights
                  </button>
                ))}
              </div>

              <input
                type="range"
                min="1"
                max="30"
                value={nights}
                onChange={(e) => setNights(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--gold-primary)',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Step 3: Add-on Experiences */}
            <div>
              <h4 className="calc-step-title">
                <span style={{ color: 'var(--gold-primary)' }}>3.</span> Optional Training & VIP Add-ons
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {PACKAGES.map((pkg) => {
                  const isChecked = selectedAddons.includes(pkg.id);
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => toggleAddon(pkg.id)}
                      className={`calc-addon-item ${isChecked ? 'active' : ''}`}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '4px',
                            border: `2px solid ${isChecked ? 'var(--gold-primary)' : 'var(--border-subtle)'}`,
                            background: isChecked ? 'var(--gold-primary)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {isChecked && <Check size={14} color="#000" strokeWidth={3} />}
                        </div>
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{pkg.title}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            {pkg.perks.join(' · ')}
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <span style={{ fontWeight: '800', color: 'var(--gold-primary)', fontSize: '1.05rem' }}>
                          +${pkg.price}
                        </span>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{pkg.period}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Box */}
          <div className="calc-right-summary">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Sparkles size={20} color="var(--gold-primary)" />
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Package Summary</h4>
              </div>

              {/* Line items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                <div className="summary-row">
                  <span>{currentRoom.name} ({nights} nights)</span>
                  <span>${roomBaseTotal}</span>
                </div>

                {selectedAddons.map(id => {
                  const p = PACKAGES.find(pkg => pkg.id === id);
                  if (!p) return null;
                  return (
                    <div key={id} className="summary-row">
                      <span>{p.title}</span>
                      <span>+${p.price}</span>
                    </div>
                  );
                })}

                <div className="summary-row" style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  <span>Regular OTA Price</span>
                  <span>${otaGrandTotal} USD</span>
                </div>

                <div className="summary-row" style={{ color: 'var(--emerald-accent)', fontWeight: '700' }}>
                  <span>Direct Booking Savings</span>
                  <span>-${totalSavings} USD</span>
                </div>

                {/* Free Included Perks */}
                <div style={{ background: 'rgba(229, 169, 60, 0.08)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--border-active)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--gold-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    🎁 Free Included Bonuses:
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#d1d5db', lineHeight: 1.4 }}>
                    • 1x Free Daily Muay Thai / Boxing class pass<br />
                    • 1x Free Signature Welcome Drink<br />
                    • Unlimited Sauna & 10-12°C Ice Bath
                  </div>
                </div>
              </div>

              {/* Grand Total */}
              <div className="summary-total">
                <div>
                  <div className="summary-total-title">Total Direct Price</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    Includes all taxes, fees & bonuses
                  </div>
                </div>
                <div className="summary-total-price">
                  ${grandTotal} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>USD</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <button
                onClick={handleCheckoutClick}
                className="btn btn-primary btn-block btn-lg"
              >
                <span>Reserve Now with 10% Discount</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="btn btn-whatsapp btn-block"
              >
                <MessageCircle size={18} />
                <span>Send Package to WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
