import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const FEATURE_BLOCKS = [
  {
    id: "bar-cafe",
    title: "BAR & CAFE",
    subtitle: "Fuel for Your Body & Soul",
    desc: "Our bar and café area has been designed to offer guests the perfect spot at Rhythm & Rumble to fill up with nutrients and goodness ahead of a busy day or something a little bit naughty well earned after a session with our instructors. Delicious, healthy and beautifully presented is the central theme.",
    benefits: [
      "Protein Smoothie Bowls & Superfood Salads",
      "Specialty Artisan Espresso & Cold Brew",
      "Nutrient-Rich Post-Workout Recovery Meals",
      "Sunset Craft Beers & Healthy Refreshing Cocktails"
    ],
    images: [
      "/images/food 100.JPG",
      "/images/food 1000.JPG",
      "/images/food top.jpg",
      "/images/bar and cafe.jpg",
      "/images/food.jpg",
      "/images/food 10.jpg",
      "/images/drinks.JPG"
    ]
  },
  {
    id: "gym-combat",
    title: "GYM & COMBAT SPORTS FACILITY",
    subtitle: "World-Class Martial Arts & Fitness",
    desc: "Our combat sports gym and fitness facility are supremely well equipped with the very best gear, including ADIDAS gloves, wraps, heavy bags, pads, and strength equipment. Specifically designed to be bright and airy throughout the day to ensure you can exercise in comfort and push yourself physically without being held back by your surroundings.",
    benefits: [
      "Full Boxing Ring & Heavy Bag Station",
      "Certified Champion Muay Thai & Boxing Trainers",
      "Daily Boxing & Muay Thai Conditioning Sessions",
      "Bright, Airy Studio with Free Weights & Equipment"
    ],
    images: [
      "/images/muay thai 03.jpg",
      "/images/muay thai 02.jpg",
      "/images/space 02.jpg",
      "/images/muay thai.jpg"
    ]
  },
  {
    id: "sauna-plunge",
    title: "SAUNA & COLD PLUNGE",
    subtitle: "Contrast Therapy for Complete Wellness",
    desc: "Enjoy the benefits of our Finnish cedar sauna, designed to relax and detoxify the body, and a 10-12°C cold plunge ice bath, which helps reduce inflammation, speeds muscular recovery, and boosts immunity, creating a complete wellness experience.",
    benefits: [
      "Traditional High-Heat Finnish Cedar Sauna",
      "Chilled 10-12°C Cold Plunge Ice Baths",
      "Accelerates Muscle Recovery & Reduces Soreness",
      "Boosts Mental Focus, Endorphins & Circulation"
    ],
    images: [
      "/images/sauna.JPG",
      "/images/cold plunge.jpg",
      "/images/sauna 02.JPG",
      "/images/sauna 03.jpg"
    ]
  },
  {
    id: "hostel-life",
    title: "COMMUNITY & HOSTEL LIFE",
    subtitle: "Where Like-Minded Travelers Connect",
    desc: "Become part of the family of like-minded individuals, all here for the same reason as yourself—fitness, surfing, and positive island energy. From sunrise surf sessions at Echo Beach to evening pool hangouts and community dinners, Rhythm & Rumble is built for authentic connections.",
    benefits: [
      "Active Community of Surfers, Fighters & Nomads",
      "Social Events, Movie Nights & Shared Dinners",
      "Walking Distance to Canggu's Best Cafes & Bars",
      "High-Speed Fiber Wi-Fi for Digital Nomads"
    ],
    images: [
      "/images/hostel life.jpg",
      "/images/lifestyle.jpg",
      "/images/lifestyle. 02.jpg",
      "/images/lifestyle 03.JPG",
      "/images/lifestyle 04.JPG",
      "/images/lifestyle 05.JPG"
    ]
  }
];

export default function FacilitiesShowcase({ onOpenLightbox }) {
  const [slideIndices, setSlideIndices] = useState(
    FEATURE_BLOCKS.reduce((acc, f) => ({ ...acc, [f.id]: 0 }), {})
  );

  const prevSlide = (blockId, total) => {
    setSlideIndices((prev) => ({
      ...prev,
      [blockId]: (prev[blockId] - 1 + total) % total
    }));
  };

  const nextSlide = (blockId, total) => {
    setSlideIndices((prev) => ({
      ...prev,
      [blockId]: (prev[blockId] + 1) % total
    }));
  };

  return (
    <section className="section-rr" style={{ borderTop: '1px solid var(--rr-border-subtle)', background: 'rgba(255,255,255,0.01)' }}>
      <div className="container-rr">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <h2 className="section-heading-main">
            WORLD-CLASS <span className="text-gold">FACILITIES & LIFESTYLE</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-desc-main" style={{ margin: '0 auto' }}>
            Explore every corner of Rhythm & Rumble—from our high-performance martial arts gym and recovery sauna to our nutrient-packed café and social community.
          </p>
        </div>

        {/* Alternating 2-Column Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '70px' }}>
          {FEATURE_BLOCKS.map((block, idx) => {
            const currentIdx = slideIndices[block.id] || 0;
            const currentImg = block.images[currentIdx];
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={block.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '40px',
                  alignItems: 'center'
                }}
              >
                {/* Carousel Column */}
                <div style={{ order: isReversed ? 2 : 1 }}>
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '16 / 10',
                      border: 'var(--rr-frame-border)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                      overflow: 'hidden',
                      background: '#000',
                      cursor: 'pointer'
                    }}
                    onClick={() => onOpenLightbox(block.images, currentIdx)}
                  >
                    <img
                      src={currentImg}
                      alt={block.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevSlide(block.id, block.images.length);
                      }}
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.65)',
                        color: '#fff',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 10
                      }}
                      aria-label="Previous"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextSlide(block.id, block.images.length);
                      }}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.65)',
                        color: '#fff',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 10
                      }}
                      aria-label="Next"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Slide Dots Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '0',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '6px',
                        zIndex: 10
                      }}
                    >
                      {block.images.map((_, i) => (
                        <div
                          key={i}
                          style={{
                            width: i === currentIdx ? '18px' : '6px',
                            height: '6px',
                            borderRadius: '9999px',
                            background: i === currentIdx ? 'var(--rr-gold)' : 'rgba(255,255,255,0.4)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text & Benefits Column */}
                <div style={{ order: isReversed ? 1 : 2 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--rr-gold)', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    {block.subtitle}
                  </span>
                  <h3 style={{ fontSize: '1.85rem', letterSpacing: '0.1em', marginBottom: '16px', color: '#FFFFFF' }}>
                    {block.title}
                  </h3>
                  <p style={{ color: 'var(--rr-gray-300)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '24px' }}>
                    {block.desc}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                    {block.benefits.map((b, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--rr-gray-100)' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(229, 168, 35, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Check size={12} color="var(--rr-gold)" />
                        </div>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
