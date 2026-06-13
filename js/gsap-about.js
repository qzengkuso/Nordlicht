(function () {
  'use strict';

  function finalizeAboutSection(section) {
    section.classList.add('about--animate-ready');
    section.querySelectorAll('.js-about-counter').forEach(function (counter) {
      const target = parseInt(counter.dataset.target, 10);
      const suffix = counter.dataset.suffix || '';
      if (!Number.isNaN(target)) {
        counter.textContent = String(target) + suffix;
      }
    });
  }

  function initAboutGsap() {
    const section = document.querySelector('#ueber-uns');
    if (!section) return;

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      finalizeAboutSection(section);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (prefersReducedMotion || isMobile) {
      finalizeAboutSection(section);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const hero = section.querySelector('.js-about-hero');
    const words = section.querySelectorAll('.about-hero__word');
    const slideLeft = section.querySelector('.js-about-slide-left');
    const slideRight = section.querySelector('.js-about-slide-right');
    const stats = section.querySelector('.js-about-stats');
    const counters = section.querySelectorAll('.js-about-counter');
    const quote = section.querySelector('.js-about-quote');

    const gray = '#9CA3AF';
    const black = '#111827';
    const mint = '#34D399';

    if (words.length) {
      gsap.set(words, { color: gray });

      gsap.to(words, {
        color: function (_index, el) {
          return el.classList.contains('about-hero__word--accent') ? mint : black;
        },
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: hero,
          start: 'top 78%',
          once: true
        }
      });
    }

    if (slideLeft) {
      gsap.set(slideLeft, { opacity: 0, x: -48 });

      gsap.to(slideLeft, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: slideLeft.closest('.about-split'),
          start: 'top 80%',
          once: true
        }
      });
    }

    if (slideRight) {
      gsap.set(slideRight, { opacity: 0, x: 48 });

      gsap.to(slideRight, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: slideRight.closest('.about-split'),
          start: 'top 80%',
          once: true
        }
      });
    }

    if (counters.length && stats) {
      counters.forEach(function (counter) {
        const target = parseInt(counter.dataset.target, 10);
        const suffix = counter.dataset.suffix || '';

        if (Number.isNaN(target)) return;

        const state = { value: 0 };

        gsap.to(state, {
          value: target,
          duration: 0.8,
          ease: 'power2.out',
          snap: { value: 1 },
          scrollTrigger: {
            trigger: stats,
            start: 'top 82%',
            once: true
          },
          onUpdate: function () {
            counter.textContent = String(Math.round(state.value)) + suffix;
          }
        });
      });
    }

    if (quote) {
      gsap.set(quote, { opacity: 0, scale: 0.97 });

      gsap.to(quote, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: quote,
          start: 'top 85%',
          once: true
        },
        onComplete: function () {
          section.classList.add('about--animate-ready');
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutGsap);
  } else {
    initAboutGsap();
  }
})();
