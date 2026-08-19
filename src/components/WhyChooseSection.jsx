import React from 'react';
import { 
  Award, 
  MapPin, 
  Dumbbell, 
  Heart, 
  Users, 
  BedDouble 
} from 'lucide-react';

const VALUE_PILLARS = [
  {
    icon: Award,
    title: "PROFESSIONAL INSTRUCTORS",
    desc: "All our instructors are qualified and experienced. Rest assured you will only get coached by the best in Muay Thai & Boxing."
  },
  {
    icon: MapPin,
    title: "PRIME CANGGU LOCATION",
    desc: "In the heart of Canggu. Everything is under 10 minutes walk from the hostel. The beach? Just 400 meters away!"
  },
  {
    icon: Dumbbell,
    title: "MODERN EQUIPMENT",
    desc: "From Adidas boxing gear and martial arts heavy bags to high-speed WiFi and air-conditioned suites."
  },
  {
    icon: Heart,
    title: "TOTAL WELLNESS & RECOVERY",
    desc: "State-of-the-art Finnish cedar sauna, 10-12°C cold plunge ice baths, and healthy superfood nutrition at our cafe."
  },
  {
    icon: Users,
    title: "LIKE-MINDED COMMUNITY",
    desc: "A boutique hostel designed for fitness-conscious solo travelers, surfers, fighters, and active digital nomads."
  },
  {
    icon: BedDouble,
    title: "PREMIUM CAPSULE PODS",
    desc: "Undeniably the best capsule beds in Bali with privacy curtains, reading lights, international sockets, and secure lockers."
  }
];

export default function WhyChooseSection() {
  return (
    <section 
      style={{ 
        position: 'relative',
        padding: '100px 0',
        backgroundImage: 'url("/images/plant background 02.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        overflow: 'hidden'
      }}
    >
      {/* Dark Overlay for readability */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 15, 12, 0.88)',
          backdropFilter: 'blur(2px)',
          zIndex: 1
        }}
      ></div>

      <div className="container-rr" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header from Screenshot 2 */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
          <h2 className="section-heading-main" style={{ color: '#FFFFFF', letterSpacing: '0.12em' }}>
            EVERYTHING YOU NEED IS HERE
          </h2>
          <div className="gold-divider"></div>

          <p 
            style={{ 
              color: 'var(--rr-gray-200)', 
              fontSize: '1.05rem', 
              lineHeight: 1.8, 
              fontFamily: "'Cabin', sans-serif",
              maxWidth: '760px',
              margin: '0 auto'
            }}
          >
            Whilst our unique boutique hostel concept offers you the chance to exercise and relax in equal measure, the surrounding area of Canggu is the most popular area on the island with something for everyone. From the surf to the shops, rice paddies to nightclubs, everything you need for the perfect Bali trip is a hop, skip and jump away.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {VALUE_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(20, 47, 31, 0.75)',
                  border: '1px solid rgba(197, 160, 89, 0.25)',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--rr-gold)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = 'rgba(20, 47, 31, 0.95)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(20, 47, 31, 0.75)';
                }}
              >
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(229, 168, 35, 0.15)',
                    border: '1px solid var(--rr-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <Icon size={28} color="var(--rr-gold)" strokeWidth={1.8} />
                </div>

                <h3 
                  style={{
                    fontSize: '1.05rem',
                    letterSpacing: '0.12em',
                    color: '#FFFFFF',
                    marginBottom: '12px',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.title}
                </h3>

                <p 
                  style={{
                    color: 'var(--rr-gray-200)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: "'Cabin', sans-serif"
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
