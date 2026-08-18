import React from 'react';
import { 
  Wifi, 
  Flame, 
  Waves, 
  Coffee, 
  Laptop, 
  Bed, 
  Bath, 
  GlassWater, 
  Dumbbell, 
  Wind, 
  Plane, 
  Car, 
  ShieldCheck, 
  Sparkles,
  Lock,
  Utensils
} from 'lucide-react';

const AMENITIES = [
  { icon: Dumbbell, label: "Muay Thai & Boxing" },
  { icon: Flame, label: "Sauna" },
  { icon: Sparkles, label: "Cold Plunge" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Waves, label: "Surf Guiding" },
  { icon: Coffee, label: "Cafe & Bar" },
  { icon: Wifi, label: "High Speed Wifi" },
  { icon: Laptop, label: "Coworking Desks" },
  { icon: Bed, label: "Capsule Pods" },
  { icon: Bed, label: "Private Suites" },
  { icon: Bath, label: "Rainforest Showers" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: GlassWater, label: "Welcome Drink" },
  { icon: Lock, label: "Secure Digital Lockers" },
  { icon: Plane, label: "Airport Transfer" },
  { icon: Car, label: "Free Parking" }
];

export default function AmenitiesGrid() {
  return (
    <section className="amenities-section">
      <div className="container-rr">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-heading-main">
            FACILITIES + <span className="text-orange">AMENITIES</span>
          </h2>
          <p style={{ color: 'var(--rr-gray-400)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}>
            From vigorous workouts to blissful relaxation, we have it all under one roof.
          </p>
        </div>

        {/* Icon Badges */}
        <div className="amenities-icons-wrap">
          {AMENITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="amenity-badge-item">
                <div className="amenity-icon-circle">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <span className="amenity-label-text">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
