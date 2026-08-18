import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Waves, 
  Compass, 
  Palmtree, 
  Beer, 
  Bike, 
  Coffee,
  ExternalLink
} from 'lucide-react';
import { BRAND, NEARBY_SPOTS } from '../data/landingData';

const SPOT_ICONS = {
  Waves,
  Compass,
  Palmtree,
  Beer,
  Bike,
  Coffee
};

export default function LocationSection() {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Rhythm+and+Rumble+Hostel+Canggu+Bali`;

  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={15} />
            <span>Prime Location</span>
          </div>
          <h2 className="section-title">
            In the Heart of Canggu · <span className="text-gradient">400m to Echo Beach</span>
          </h2>
          <p className="section-subtitle">
            Walk to world-class surf breaks in 4 minutes. The best gyms, organic cafes, beach clubs, 
            and sunset spots are all right at your doorstep.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="location-grid">
          {/* Map Embed Card */}
          <div className="location-map-wrap">
            <iframe
              title="Rhythm and Rumble Canggu Bali Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3820127592476!2d115.1257253!3d-8.653457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd238848d79b293%3A0xe2c7f53eb9d05e32!2sRhythm%20%26%20Rumble%20Hostel!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Proximity Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--gold-primary)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
                Address
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '4px' }}>
                {BRAND.location}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Tucked into a quiet side street off the main strip for deep sleep, yet seconds away from the energy.
              </p>
            </div>

            {/* Walking Distances Grid */}
            <div className="nearby-spots-grid">
              {NEARBY_SPOTS.map((spot, idx) => {
                const Icon = SPOT_ICONS[spot.icon] || MapPin;
                return (
                  <div key={idx} className="spot-item">
                    <div className="spot-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#ffffff' }}>
                        {spot.name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--gold-primary)', fontWeight: '600' }}>
                        {spot.distance} · {spot.walk}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Google Directions Button */}
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ alignSelf: 'flex-start' }}
            >
              <Navigation size={16} />
              <span>Get Directions on Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
