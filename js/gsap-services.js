(function () {
  'use strict';

  function initSectionScrollAnimations(config) {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = document.querySelector(config.sectionSelector);

    if (!section) return;

    const eyebrow = section.querySelector(config.eyebrowSelector);
    const title = section.querySelector(config.titleSelector);
    const desc = section.querySelector(config.descSelector);
    const cards = section.querySelectorAll(config.cardSelector);
    const cta = config.ctaSelector ? section.querySelector(config.ctaSelector) : null;
    const readyClass = config.readyClass;

    if (prefersReducedMotion) {
      section.classList.add(readyClass);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    if (eyebrow) gsap.set(eyebrow, { opacity: 0, y: 16 });
    if (title) gsap.set(title, { opacity: 0, y: 28, filter: 'blur(14px)' });
    if (desc) gsap.set(desc, { opacity: 0, y: 20 });
    if (cta) gsap.set(cta, { opacity: 0, y: 20 });
    if (cards.length) gsap.set(cards, { opacity: 0, y: 48 });

    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section.querySelector(config.headerSelector) || section,
        start: 'top 80%',
        once: true
      },
      onComplete: function () {
        section.classList.add(readyClass);
      }
    });

    if (eyebrow) {
      headerTimeline.to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power2.out'
      });
    }

    if (title) {
      headerTimeline.to(
        title,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out'
        },
        eyebrow ? '-=0.15' : 0
      );
    }

    if (desc) {
      headerTimeline.to(
        desc,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        },
        '-=0.55'
      );
    }

    if (cards.length) {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section.querySelector(config.gridSelector),
          start: 'top 85%',
          once: true
        }
      });
    }

    if (cta) {
      gsap.to(cta, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cta,
          start: 'top 92%',
          once: true
        }
      });
    }
  }

  function initScrollAnimations() {
    initSectionScrollAnimations({
      sectionSelector: '#leistungen',
      headerSelector: '.services-header',
      eyebrowSelector: '.services-header__eyebrow',
      titleSelector: '.services-header__title',
      descSelector: '.services-header__desc',
      cardSelector: '.js-service-card',
      ctaSelector: '.js-services-cta',
      gridSelector: '.services-grid',
      readyClass: 'services--ready'
    });

    window.addEventListener('load', function () {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });

    window.addEventListener('orientationchange', function () {
      setTimeout(function () {
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 150);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
})();
