import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  BedDouble, 
  Users, 
  ArrowRight, 
  MessageCircle, 
  Check, 
  Copy, 
  Sparkles, 
  ShieldCheck,
  Flame,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ROOMS, BRAND } from '../data/landingData';

export default function BookingModal({ initialData, onClose, onOpenWhatsApp }) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 3);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const [selectedRoomId, setSelectedRoomId] = useState(
    initialData?.room?.id || initialData?.roomType || ROOMS[0].id
  );
  const [checkIn, setCheckIn] = useState(initialData?.checkIn || formatDate(today));
  const [checkOut, setCheckOut] = useState(initialData?.checkOut || formatDate(tomorrow));
  const [guests, setGuests] = useState(initialData?.guests || "1");
  const [copiedCode, setCopiedCode] = useState(false);

  const currentRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(BRAND.directDiscountCode);
    setCopiedCode(true);
    try {
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
    } catch (e) {}
    setTimeout(() => setCopiedCode(false), 3000);
  };

  const handleCloudbedsRedirect = () => {
    // Build direct Cloudbeds URL
    // e.g. https://hotels.cloudbeds.com/en/reservas/vjFih8?checkin=2026-08-20&checkout=2026-08-25
    const url = `${BRAND.cloudbedsUrl}?checkin=${checkIn}&checkout=${checkOut}&promo=${BRAND.directDiscountCode}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppBooking = () => {
    const text = `Hi Rhythm & Rumble! I would like to book direct with the 10% discount:
• Room: ${currentRoom.name}
• Check-in: ${checkIn}
• Check-out: ${checkOut}
• Guests: ${guests}
• Promo code: ${BRAND.directDiscountCode} (10% OFF)
Please confirm availability and booking!`;

    onOpenWhatsApp(text);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="section-badge" style={{ marginBottom: '10px' }}>
            <Flame size={14} />
            <span>Direct Booking Reservation</span>
          </div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '800' }}>
            Complete Your Direct Booking
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
            Get guaranteed lowest rate + 1 free daily class pass + free welcome cocktail
          </p>
        </div>

        {/* Discount Code Box */}
        <div 
          style={{
            background: 'rgba(229, 169, 60, 0.1)',
            border: '1px dashed var(--border-active)',
            borderRadius: 'var(--radius-md)',
            padding: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', fontWeight: '700', textTransform: 'uppercase' }}>
              Direct Promo Code Applied
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff' }}>
              {BRAND.directDiscountCode} (10% Discount)
            </div>
          </div>

          <button
            onClick={handleCopyCode}
            className="btn btn-secondary btn-sm"
            style={{ padding: '8px 14px' }}
          >
            {copiedCode ? (
              <>
                <Check size={14} color="var(--emerald-accent)" />
                <span style={{ color: 'var(--emerald-accent)' }}>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Booking Form Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {/* Room Style */}
          <div className="widget-field">
            <label className="widget-label">
              <BedDouble size={14} />
              <span>Room Type</span>
            </label>
            <select
              className="widget-input"
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
            >
              {ROOMS.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} — ${r.directPrice}/night
                </option>
              ))}
            </select>
          </div>

          {/* Dates Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="widget-field">
              <label className="widget-label">
                <Calendar size={14} />
                <span>Check-In</span>
              </label>
              <input
                type="date"
                className="widget-input"
                value={checkIn}
                min={formatDate(today)}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            <div className="widget-field">
              <label className="widget-label">
                <Calendar size={14} />
                <span>Check-Out</span>
              </label>
              <input
                type="date"
                className="widget-input"
                value={checkOut}
                min={checkIn || formatDate(today)}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          {/* Guests */}
          <div className="widget-field">
            <label className="widget-label">
              <Users size={14} />
              <span>Guests</span>
            </label>
            <select
              className="widget-input"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3+ Guests (Group Booking)</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Cloudbeds Instant Engine */}
          <button
            onClick={handleCloudbedsRedirect}
            className="btn btn-primary btn-block btn-lg"
          >
            <span>Proceed to Cloudbeds Booking Engine</span>
            <ExternalLink size={18} />
          </button>

          {/* WhatsApp Direct */}
          <button
            onClick={handleWhatsAppBooking}
            className="btn btn-whatsapp btn-block"
          >
            <MessageCircle size={18} />
            <span>Book via WhatsApp Front Desk</span>
          </button>
        </div>

        {/* Security & Guarantees */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '20px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ShieldCheck size={14} color="var(--gold-primary)" />
            SSL Secure Booking
          </span>
          <span>·</span>
          <span>Instant Confirmation</span>
          <span>·</span>
          <span>Free 48h Cancellation</span>
        </div>
      </div>
    </div>
  );
}
