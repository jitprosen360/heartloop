'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Page-wide GSAP animations, driven by data attributes so sections can stay server components.
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.remove('anim');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('[data-hero]', { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09, clearProps: 'transform' })
        .fromTo(
          '[data-hero-note]',
          { autoAlpha: 0, scale: 0.6, rotate: -20 },
          { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(2)' },
          0.6
        );

      gsap.to('[data-float]', { y: -14, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });

      gsap.set('[data-reveal]', { autoAlpha: 0, y: 32 });
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (els) =>
          gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out', clearProps: 'transform' }),
      });

      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        gsap.to(el, {
          yPercent: Number(el.dataset.parallax),
          ease: 'none',
          scrollTrigger: { trigger: el.closest('section'), start: 'top top', end: 'bottom top', scrub: true },
        });
      });
    });

    // GSAP now owns the initial hidden state via inline styles.
    root.classList.remove('anim');
    return () => ctx.revert();
  }, []);

  return null;
}
