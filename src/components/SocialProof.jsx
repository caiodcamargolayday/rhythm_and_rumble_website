import React from 'react';
import { 
  Star, 
  Heart, 
  CheckCircle, 
  Award, 
  Quote, 
  ExternalLink 
} from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { TESTIMONIALS, INSTAGRAM_POSTS, BRAND } from '../data/landingData';

export default function SocialProof({ onOpenLightbox }) {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={15} />
            <span>Guest Stories & Social Proof</span>
          </div>
          <h2 className="section-title">
            Voted <span className="text-gradient">#1 Fitness & Surf Retreat</span> in Bali
          </h2>
          <p className="section-subtitle">
            Join thousands of active travelers, fighters, surfers, and digital nomads who made Rhythm & Rumble 
            their Bali home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="reviews-grid">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="review-card">
              <div className="review-header">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="review-avatar"
                />
                <div className="review-user-info">
                  <h4>{item.name}</h4>
                  <span>{item.country} · {item.role}</span>
                </div>
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#e5a93c" stroke="#e5a93c" />
                ))}
              </div>

              <h4 className="review-title">"{item.title}"</h4>
              <p className="review-text">{item.text}</p>
              <div className="review-source">
                <CheckCircle size={14} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }} />
                {item.source}
              </div>
            </div>
          ))}
        </div>

        {/* Instagram UGC Feed Section */}
        <div style={{ marginTop: '70px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontWeight: '700', fontSize: '0.88rem', textTransform: 'uppercase' }}>
                <InstagramIcon size={18} />
                <span>Follow the Vibe</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800' }}>
                Live From Canggu <span className="text-gold">{BRAND.instagramHandle}</span>
              </h3>
            </div>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <InstagramIcon size={16} />
              <span>Follow on Instagram</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Instagram Post Grid */}
          <div className="instagram-grid">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <div
                key={post.id}
                className="insta-item"
                onClick={() => onOpenLightbox(INSTAGRAM_POSTS.map(p => p.img), idx)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={post.img}
                  alt={post.caption}
                  className="insta-img"
                  loading="lazy"
                />
                <div className="insta-overlay">
                  <Heart size={20} fill="#e5a93c" color="#e5a93c" />
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#ffffff' }}>
                    {post.likes} Likes
                  </span>
                  <p style={{ fontSize: '0.72rem', color: '#d1d5db', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
