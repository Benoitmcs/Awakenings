'use client';

import { useState, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Talia has been a very helpful and attentive care provider in my journey to find the right solutions for myself. Highly recommend for people who have been unable to find the right provider for themselves!",
    author: "Anonymous Patient"
  },
  {
    id: 2,
    text: "Before Awakenings, I spent years feeling dismissed and overlooked by providers who didn't take time to understand my complex diagnoses. At Awakenings, I finally feel heard—my provider takes time to explain how medications work, helping me feel empowered and informed. After 30 years of searching, I've found a place that truly treats patients as human beings, and I'm beyond grateful.",
    author: "Anonymous Patient"
  },
  {
    id: 3,
    text: "Living with multiple diagnoses, I long felt ashamed and stigmatized—even by those closest to me. At Awakenings, Heidi helped me understand the biological roots of my mental health challenges and showed me that my chemical makeup isn't something to hide. Thanks to her compassion and insight, I now wear my story with pride and no longer feel shame about the treatment I need.",
    author: "Anonymous Patient"
  }
];

export default function TestimonialCarousel() {
  const [cards, setCards] = useState(testimonials);
  const [isAnimating, setIsAnimating] = useState(false);
  const [exitingId, setExitingId] = useState(null);

  const handleClick = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setExitingId(cards[0].id);

    // After animation completes, move card to back
    setTimeout(() => {
      setCards(prev => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setExitingId(null);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, cards]);

  return (
    <section className="testimonial-section">
      <h2>What People Are Saying</h2>
      <p className="testimonial-hint">Click the cards to see more!</p>

      <div className="testimonial-deck" onClick={handleClick}>
        {cards.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${exitingId === testimonial.id ? 'slide-out' : ''}`}
            style={{
              zIndex: cards.length - index,
              transform: index === 0
                ? 'none'
                : `translateY(${index * 12}px) scale(${1 - index * 0.03})`,
              filter: `brightness(${1 - index * 0.1})`,
            }}
          >
            <blockquote>
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>
            <cite>— {testimonial.author}</cite>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="testimonial-dots">
        {testimonials.map((t, i) => (
          <span
            key={t.id}
            className={`dot ${cards[0].id === t.id ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
}
