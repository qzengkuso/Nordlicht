(function () {
  'use strict';

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  function scrollToTop(instant) {
    window.scrollTo({ top: 0, left: 0, behavior: instant ? 'instant' : 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  scrollToTop(true);

  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const scrollProgress = document.getElementById('scroll-progress');
  const heroBg = document.querySelector('.hero__bg');
  const auroraBlobs = document.querySelectorAll('.aurora-blob');
  const backToTop = document.getElementById('back-to-top');
  const logoHome = document.getElementById('logo-home');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let ticking = false;

  function getHeaderOffset() {
    return header ? header.offsetHeight + 16 : 100;
  }

  function initPageStart() {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    scrollToTop(true);
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-ready');
  }

  document.addEventListener('DOMContentLoaded', initPageStart);

  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      initPageStart();
    }
  });

  function closeNav() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Menü öffnen');
    navMenu.classList.remove('is-open');
  }

  function openNav() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Menü schließen');
    navMenu.classList.add('is-open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeNav();
      else openNav();
    });
  }

  function scrollToSection(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({
      top: top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      scrollToSection(href);
      if (window.innerWidth < 768) closeNav();
    });
  });

  if (logoHome) {
    logoHome.addEventListener('click', function (e) {
      if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        e.preventDefault();
        scrollToTop(false);
        closeNav();
      }
    });
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      scrollToTop(false);
    });
  }

  function updateScrollProgress() {
    if (!scrollProgress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  }

  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(function (section) {
      const top = section.offsetTop - getHeaderOffset();
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }

  function onScrollFrame() {
    if (!header) return;

    const scrollY = window.scrollY;

    if (scrollY > 20) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    if (backToTop) {
      if (scrollY > 500) {
        backToTop.hidden = false;
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
        backToTop.hidden = true;
      }
    }

    if (heroBg && !prefersReducedMotion) {
      const heroEl = document.querySelector('.hero');
      const heroHeight = heroEl ? heroEl.offsetHeight : 600;
      const parallax = Math.min(scrollY, heroHeight) * 0.2;
      heroBg.style.transform = 'translate3d(0, ' + parallax + 'px, 0)';
    }

    updateScrollProgress();
    updateActiveNav();
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(onScrollFrame);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScrollFrame();

  function initReveal() {
    const reveals = document.querySelectorAll('.reveal');

    if (prefersReducedMotion) {
      reveals.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    const heroReveals = document.querySelectorAll('.hero .reveal');
    heroReveals.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('is-visible');
      }, 200 + i * 100);
    });

    const staggerGrids = document.querySelectorAll('[data-stagger]');
    const staggerObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const children = entry.target.querySelectorAll('.reveal');
          children.forEach(function (child, i) {
            setTimeout(function () {
              child.classList.add('is-visible');
            }, i * 90);
          });
          staggerObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    staggerGrids.forEach(function (grid) {
      staggerObserver.observe(grid);
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) {
      if (el.closest('.hero')) return;
      if (el.closest('[data-stagger]')) return;
      if (el.closest('#leistungen')) return;
      if (el.closest('#ueber-uns')) return;
      observer.observe(el);
    });
  }

  function initTilt() {
    if (prefersReducedMotion || window.innerWidth < 768) return;

    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform =
          'perspective(900px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  function initHeroParallax() {
    if (prefersReducedMotion) return;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    function moveAurora(clientX, clientY) {
      const rect = hero.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      auroraBlobs.forEach(function (blob, i) {
        const factor = (i + 1) * 14;
        blob.style.transform = 'translate(' + (x * factor) + 'px, ' + (y * factor) + 'px)';
      });
    }

    hero.addEventListener('mousemove', function (e) {
      moveAurora(e.clientX, e.clientY);
    });

    hero.addEventListener(
      'touchmove',
      function (e) {
        if (e.touches.length) {
          moveAurora(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      { passive: true }
    );
  }

  function initCounterAnimation() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('[data-count]').forEach(function (el) {
      const target = parseInt(el.getAttribute('data-count'), 10);
      if (!target) return;

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 20));
          const timer = setInterval(function () {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current + (el.getAttribute('data-suffix') || '');
          }, 40);
          observer.unobserve(el);
        });
      }, { threshold: 0.5 });

      observer.observe(el);
    });
  }

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.add('error');
    if (errorEl) errorEl.textContent = message;
  }

  function clearErrors() {
    if (!contactForm) return;
    contactForm.querySelectorAll('.error').forEach(function (el) {
      el.classList.remove('error');
    });
    contactForm.querySelectorAll('.form-error').forEach(function (el) {
      el.textContent = '';
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value.trim();

      let valid = true;

      if (!name) {
        showError('name', 'Bitte geben Sie Ihren Namen ein.');
        valid = false;
      }

      if (!email || !validateEmail(email)) {
        showError('email', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        valid = false;
      }

      if (!message) {
        showError('message', 'Bitte schreiben Sie eine kurze Nachricht.');
        valid = false;
      }

      if (!valid) return;

      const subject = encodeURIComponent('Anfrage über Website – ' + (service || 'Allgemein'));
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'E-Mail: ' + email + '\n' +
        'Telefon: ' + (phone || '–') + '\n' +
        'Gewünschte Leistung: ' + (service || '–') + '\n\n' +
        'Nachricht:\n' + message
      );

      window.location.href = 'mailto:nordlicht.hausgartenpflege@gmail.com?subject=' + subject + '&body=' + body;

      contactForm.querySelectorAll('input, select, textarea, button').forEach(function (el) {
        el.disabled = true;
      });

      if (formSuccess) {
        formSuccess.hidden = false;
        formSuccess.classList.add('is-visible');
      }
    });
  }

  initReveal();
  initTilt();
  initHeroParallax();
  initCounterAnimation();
})();
