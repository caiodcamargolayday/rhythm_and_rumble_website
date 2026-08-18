import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../data/landingData';

const GOOGLE_REVIEWS = [
  {
    author: "Liam S.",
    tag: "Solo Traveler · Fitness Enthusiast",
    rating: 5,
    date: "Recent Google Review",
    review: "Best hostel experience in Bali! The combination of proper Muay Thai training, ice bath & sauna recovery, and comfortable private capsule beds is unmatched. Great social community without being a chaotic party hostel. Will definitely be back."
  },
  {
    author: "Sophie M.",
    tag: "Digital Nomad · Surfer",
    rating: 5,
    date: "Recent Google Review",
    review: "Stayed for 2 weeks as a digital nomad and active traveler. The high-speed Wi-Fi, delicious healthy food at the cafe, and morning surf sessions at Echo Beach made it the perfect stay. The capsule pods give you 100% privacy and great sleep."
  },
  {
    author: "Marco D.",
    tag: "Martial Arts & Muay Thai",
    rating: 5,
    date: "Recent Google Review",
    review: "10/10 stay. The coaching staff for boxing and Muay Thai are world-class professionals. After a hard session, jumping into the Finnish sauna and sub-zero ice bath is heavenly. Super clean rooms and incredible staff."
  },
  {
    author: "Chloe K.",
    tag: "Active Traveler",
    rating: 5,
    date: "Recent Google Review",
    review: "Everything is within walking distance in Canggu. Just a 4 minute walk to Echo Beach. The beds are the most comfortable hostel beds I’ve slept in. Great vibe, amazing people, and top-tier facilities."
  },
  {
    author: "Alex R.",
    tag: "Surfer & Fighter",
    rating: 5,
    date: "Recent Google Review",
    review: "If you are fitness conscious and love surfing, this is the best place to stay in Canggu hands down. The private poolside suites are luxurious and great value for money. 5 stars all the way!"
  },
  {
    author: "Elena B.",
    tag: "Wellness & Recovery",
    rating: 5,
    date: "Recent Google Review",
    review: "Felt like a boutique wellness resort with the warm family feel of a community hostel. Delicious post-workout protein bowls and coffee. The recovery sauna and cold plunge were a total game changer."
  }
];

export default function ReviewsSection() {
  return (
    <section className="section-rr" style={{ borderTop: '1px solid var(--rr-border-subtle)', background: 'rgba(255,255,255,0.015)' }}>
      <div className="container-rr">
        {/* Header with Google Badge */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px auto' }}>
          {/* Google 4.9 Stars Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 208, 0, 0.1)', border: '1px solid rgba(255, 208, 0, 0.3)', padding: '6px 16px', borderRadius: '9999px', marginBottom: '16px' }}>
            {/* Google "G" Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span style={{ color: 'var(--rr-gold)', fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              4.9 RATING • 500+ GOOGLE REVIEWS
            </span>
          </div>

          <h2 className="section-heading-main">
            WHAT OUR <span className="text-gold">GUESTS SAY</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-desc-main" style={{ margin: '0 auto' }}>
            Real reviews from fitness-conscious travellers, surfers, fighters, and digital nomads from around the world.
          </p>
        </div>

        {/* 6 Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--rr-surface)',
                border: '1px solid var(--rr-border-subtle)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--rr-gold)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--rr-border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Stars & Source */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--rr-gold)" color="var(--rr-gold)" />
                    ))}
                  </div>

                  <span style={{ fontSize: '0.72rem', color: 'var(--rr-gray-400)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={13} color="#22c55e" />
                    Verified Stay
                  </span>
                </div>

                {/* Review Text */}
                <p style={{ color: 'var(--rr-gray-100)', fontSize: '0.9rem', lineHeight: 1.65, fontStyle: 'normal' }}>
                  "{rev.review}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{ borderTop: '1px solid var(--rr-border-subtle)', paddingTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', letterSpacing: '0.08em', margin: 0, color: '#FFFFFF' }}>
                    {rev.author}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--rr-gray-400)' }}>
                    {rev.tag}
                  </span>
                </div>

                <span style={{ fontSize: '0.7rem', color: 'var(--rr-gold)', fontWeight: '700', textTransform: 'uppercase' }}>
                  Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
