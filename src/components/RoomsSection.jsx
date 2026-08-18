import React, { useState } from 'react';
import { Bed, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ROOMS, BRAND } from '../data/landingData';

export default function RoomsSection({ onOpenLightbox }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(
    ROOMS.reduce((acc, r) => ({ ...acc, [r.id]: 0 }), {})
  );

  const prevPhoto = (e, roomId, total) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => ({
      ...prev,
      [roomId]: (prev[roomId] - 1 + total) % total
    }));
  };

  const nextPhoto = (e, roomId, total) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % total
    }));
  };

  return (
    <section className="section-rr" id="accommodation" style={{ borderTop: '1px solid var(--rr-border-subtle)' }}>
      <div className="container-rr">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          <div className="section-tag">
            <Bed size={14} />
            <span>BOUTIQUE ACCOMMODATION</span>
          </div>
          <h2 className="section-heading-main">
            YOU WILL HAVE A COMFORT CORNER FROM OUR <span className="text-orange">ULTRA LUXURY DORMS & SUITES</span>
          </h2>
          <p className="section-desc-main" style={{ margin: '0 auto' }}>
            From our private double poolside rooms through to our communal dormitories, no stone has been left unturned to ensure you will sleep like a rock ready to rumble for the day ahead…
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="rooms-showcase-grid">
          {ROOMS.map((room) => {
            const currentIdx = activePhotoIdx[room.id] || 0;
            const currentImg = room.images[currentIdx];

            return (
              <div key={room.id} className="room-showcase-card">
                {/* Room Photo Carousel */}
                <div 
                  className="room-media-box"
                  onClick={() => onOpenLightbox(room.images, currentIdx)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={currentImg}
                    alt={room.name}
                    className="room-main-photo"
                  />

                  <div className="room-card-badge">
                    {room.badge}
                  </div>

                  {/* Carousel Controls */}
                  {room.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => prevPhoto(e, room.id, room.images.length)}
                        style={{
                          position: 'absolute',
                          left: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(0,0,0,0.65)',
                          color: '#fff',
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 10
                        }}
                        aria-label="Previous photo"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <button
                        onClick={(e) => nextPhoto(e, room.id, room.images.length)}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(0,0,0,0.65)',
                          color: '#fff',
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 10
                        }}
                        aria-label="Next photo"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Body Details */}
                <div className="room-card-body">
                  <h3 className="room-card-title">{room.name}</h3>
                  <div className="room-card-headline">{room.headline}</div>
                  <p className="room-card-desc">{room.desc}</p>

                  {/* Features List */}
                  <div className="room-card-features">
                    {room.features.map((feat, i) => (
                      <div key={i} className="room-feature-row">
                        <Check size={14} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Booking Action */}
                  <div className="room-cta-wrap">
                    <a
                      href={BRAND.cloudbedsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-book"
                      style={{ width: '100%', padding: '14px' }}
                    >
                      <span>BOOK NOW</span>
                      <ArrowRight size={16} />
                    </a>
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
