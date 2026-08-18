import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/landingData';

export default function FaqSection({ onOpenWhatsApp }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (index) => {
    setOpenIdx(prev => prev === index ? -1 : index);
  };

  return (
    <section className="section" id="faqs" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={15} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about booking direct, classes, facilities, and your stay with us in Canggu.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={20} />
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div style={{ textAlign: 'center', marginTop: '45px' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '14px', fontSize: '0.95rem' }}>
            Have a custom question or specific date request?
          </p>
          <button
            onClick={() => onOpenWhatsApp("Hi Rhythm & Rumble! I have a question before booking my stay:")}
            className="btn btn-secondary"
          >
            <MessageCircle size={18} color="var(--emerald-accent)" />
            <span>Chat Live with Our Front Desk on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
