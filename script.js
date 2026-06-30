(function () {
  'use strict';

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  var header = document.querySelector('.header');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('nav--open');
    });

    mainNav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('nav--open');
      });
    });
  }

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('header--scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.addEventListener('click', function () {
        lightboxImg.src = el.getAttribute('data-lightbox');
        lightboxImg.alt = el.getAttribute('data-alt') || 'Screenshot';
        lightbox.classList.add('lightbox--open');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('lightbox--open');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('lightbox--open')) closeLightbox();
    });
  }
})();
