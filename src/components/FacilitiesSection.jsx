import React from 'react';
import { 
  Wifi, 
  Flame, 
  Waves, 
  Coffee, 
  Dumbbell, 
  Wind, 
  Plane, 
  Sparkles, 
  Lock,
  ShieldCheck,
  Bath,
  GlassWater,
  Users,
  Sun
} from 'lucide-react';
import { BRAND } from '../data/landingData';

const THREE_FACILITIES = [
  {
    title: "BAR & CAFE",
    img: "/images/bar and cafe.jpg"
  },
  {
    title: "COLD PLUNGE",
    img: "/images/cold plunge.jpg"
  },
  {
    title: "POOL",
    img: "/images/pool.jpg"
  }
];

// Specific Amenities extracted directly from official Cloudbeds property specification
const CLOUDBEDS_FACILITIES = [
  { icon: Dumbbell, label: "Fitness Center & Muay Thai" },
  { icon: Flame, label: "Finnish Sauna" },
  { icon: Sparkles, label: "Sub-Zero Cold Plunge" },
  { icon: Waves, label: "Swimming Pool & Sun Deck" },
  { icon: Waves, label: "Surfing Lessons & Rentals" },
  { icon: Sparkles, label: "Yoga Classes" },
  { icon: Coffee, label: "Cafe, Bar & Restaurant" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Lock, label: "Individual Secure Lockers" },
  { icon: ShieldCheck, label: "24-Hour Check-in & Security" },
  { icon: Bath, label: "Daily Housekeeping & Towels" },
  { icon: Users, label: "Social Lounge & Events" },
  { icon: Sun, label: "Echo Beach (400m Away)" },
  { icon: GlassWater, label: "Refillable Water Stations" },
  { icon: Plane, label: "Airport Transfer & Parking" }
];

export default function FacilitiesSection() {
  return (
    <section className="facilities-plant-section">
      <div className="facilities-plant-overlay"></div>

      {/* Facilities Header Text over Plant Leaves */}
      <div className="facilities-plant-content">
        <h2 className="section-heading-main" style={{ color: '#FFFFFF', letterSpacing: '0.12em' }}>
          FACILITIES
        </h2>
        <div className="gold-divider"></div>

        <p className="facilities-plant-text">
          From vigorous workouts to blissful relaxation, we have it all. Power through a gym session, sharpen your skills in Muay Thai or boxing classes, recharge with a nourishing meal or drink at our café & bar, cool off with a dip in the pool, or unwind in the sauna and cold plunge. Every detail is designed with the fitness-conscious traveler in mind. At Rhythm & Rumble Boutique Hostel, we’ve created an experience so complete, you’ll want to come back again and again.
        </p>
      </div>

      {/* 3 Full Width Facility Cards */}
      <div className="facilities-3cards-grid" style={{ position: 'relative', zIndex: 10 }}>
        {THREE_FACILITIES.map((card, idx) => (
          <a
            key={idx}
            href={BRAND.cloudbedsUrl}
            target="_self"
            className="facility-3card-item"
            style={{ textDecoration: 'none' }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="facility-3card-bg"
              loading="lazy"
            />
            <div className="facility-3card-overlay"></div>

            <div className="facility-3card-inner">
              <h3 style={{ color: '#FFFFFF', letterSpacing: '0.12em', margin: 0 }}>
                {card.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {/* Cloudbeds Amenities Badges Grid */}
      <div className="amenities-icons-wrap">
        {CLOUDBEDS_FACILITIES.map((item, idx) => {
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
    </section>
  );
}
