'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Accordion logic
    const accordionHeaders = document.querySelectorAll('.accordion .acc-header');
    if (accordionHeaders.length > 0) {
      accordionHeaders.forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active');
          const body = btn.nextElementSibling;
          body.style.maxHeight = btn.classList.contains('active') ? body.scrollHeight + 'px' : '0';
        });
      });
    }

    // Lazy iframe logic
    const lazyIframes = document.querySelectorAll('iframe.lazy-embed');
    if (lazyIframes.length > 0) {
      lazyIframes.forEach(iframe => {
        if (iframe.classList.contains('skeleton')) {
          iframe.addEventListener('load', () => {
            iframe.classList.remove('skeleton');
            if (typeof AOS !== 'undefined') {
              AOS.refresh();
            }
          });
        }
      });
    }

    // Theme switcher logic
    const applySystemTheme = (isDark) => {
      document.documentElement.classList.toggle('dark', isDark);
      if (typeof AOS !== 'undefined') AOS.refreshHard();
      let currentBg = getComputedStyle(document.documentElement).getPropertyValue(isDark ? '--bg-dark' : '--bg-light').trim();
      document.querySelectorAll('.separator path').forEach(p => p.style.fill = currentBg);
    };

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    applySystemTheme(prefersDarkScheme.matches);

    const handleThemeChange = (e) => applySystemTheme(e.matches);
    prefersDarkScheme.addEventListener('change', handleThemeChange);

    // Testimonial "click-through" deck
    const setupTestimonialDeck = () => {
      if (window.matchMedia('(max-width:600px)').matches) return;

      const deck = document.getElementById('testimonials');
      if (!deck) return;

      const TRANSITION_MS = 450;
      let isAnimating = false;

      function restack() {
        const cards = [...deck.querySelectorAll('.testimonial-card')];
        cards.forEach((card, i) => { card.style.zIndex = cards.length - i; });
      }
      restack();

      const handleDeckClick = () => {
        if (isAnimating) return;
        const cards = deck.querySelectorAll('.testimonial-card');
        const topCard = cards[0];
        if (!topCard) return;

        isAnimating = true;
        topCard.classList.add('slide-out');

        const onTransitionEnd = (ev) => {
          if (ev.propertyName !== 'transform') return;
          topCard.classList.remove('slide-out');
          deck.appendChild(topCard);
          restack();
          topCard.removeEventListener('transitionend', onTransitionEnd);
          isAnimating = false;
        };

        topCard.addEventListener('transitionend', onTransitionEnd);
      };

      deck.addEventListener('click', handleDeckClick);
    };

    setupTestimonialDeck();

    return () => {
      prefersDarkScheme.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return null;
}
