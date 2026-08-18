import React from 'react';
import { MapPin } from 'lucide-react';
import { DESTINATIONS } from '../data/landingData';

export default function DestinationsSection() {
  return (
    <section className="section-rr" style={{ borderTop: '1px solid var(--rr-border-subtle)' }}>
      <div className="container-rr">
        {/* Section Title */}
        <div style={{ marginBottom: '36px' }}>
          <div className="section-tag" style={{ border: '1px solid var(--rr-border-gold)', color: 'var(--rr-gold)' }}>
            <MapPin size={14} />
            <span>CANGGU LOCATION</span>
          </div>
          <h2 className="section-heading-main">
            OUR <span className="text-gold">DESTINATIONS</span>
          </h2>
          <p className="section-desc-main">
            In the heart of Canggu. Everything is under 10 minutes walk from the hostel. The beach? Just 400 meters!
          </p>
        </div>

        {/* 2-Column Layout: Places + Map */}
        <div className="destinations-grid">
          {/* Left Places List */}
          <div>
            <div className="places-list">
              {DESTINATIONS.map((place, idx) => (
                <div key={idx} className="place-card-item">
                  <div className="place-thumb">
                    <img src={place.image} alt={place.title} loading="lazy" />
                  </div>
                  <div className="place-details">
                    <h4>{place.title}</h4>
                    <span>{place.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Map Frame */}
          <div>
            <div className="map-frame-box">
              <iframe
                title="Rhythm and Rumble Canggu Bali Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3820127592476!2d115.1257253!3d-8.653457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd238848d79b293%3A0xe2c7f53eb9d05e32!2sRhythm%20%26%20Rumble%20Hostel!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
