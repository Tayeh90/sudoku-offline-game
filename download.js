(function () {
  'use strict';

  var APP_STORE = 'https://apps.apple.com/app/sudoku-puzzle-offline-classic/id6782259803';
  var PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.sudoku.offline.puzzle&hl=en';
  var REDIRECT_DELAY = 3000;

  var statusText = document.getElementById('downloadStatusText');
  var spinner = document.getElementById('downloadSpinner');
  var hint = document.getElementById('downloadHint');
  var appStoreLink = document.getElementById('appStoreLink');
  var playStoreLink = document.getElementById('playStoreLink');
  var carousel = document.getElementById('downloadCarousel');

  function isIOS() {
    var ua = navigator.userAgent || '';
    return /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  function isAndroid() {
    return /Android/i.test(navigator.userAgent || '');
  }

  function setStatus(message, showSpinner) {
    if (statusText) statusText.textContent = message;
    if (spinner) spinner.hidden = !showSpinner;
  }

  function highlightPlatform(platform) {
    if (platform === 'ios' && appStoreLink) {
      appStoreLink.classList.add('is-recommended');
      if (playStoreLink) playStoreLink.classList.remove('is-recommended');
    } else if (platform === 'android' && playStoreLink) {
      playStoreLink.classList.add('is-recommended');
      if (appStoreLink) appStoreLink.classList.remove('is-recommended');
    }
  }

  function redirect(url, platformLabel, platform) {
    highlightPlatform(platform);
    setStatus('Opening ' + platformLabel + '…', true);
    if (hint) hint.textContent = 'If nothing happens, tap the highlighted button below.';

    window.setTimeout(function () {
      window.location.href = url;
    }, REDIRECT_DELAY);
  }

  if (isIOS()) {
    redirect(APP_STORE, 'the App Store', 'ios');
  } else if (isAndroid()) {
    redirect(PLAY_STORE, 'Google Play', 'android');
  } else {
    setStatus('Choose your platform below', false);
    if (hint) hint.textContent = 'Select App Store for iPhone/iPad or Google Play for Android.';
  }

  if (carousel) {
    var slides = carousel.querySelectorAll('.hero-carousel__slide');
    var dots = carousel.querySelectorAll('.hero-carousel__dot');
    var current = 0;
    var timer = null;
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function goTo(index) {
      if (!slides.length) return;
      slides[current].classList.remove('is-active');
      if (dots[current]) dots[current].classList.remove('is-active');

      current = (index + slides.length) % slides.length;

      slides[current].classList.add('is-active');
      if (dots[current]) dots[current].classList.add('is-active');
    }

    function startAutoplay() {
      if (reducedMotion || slides.length < 2) return;
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(function () { goTo(current + 1); }, 3500);
    }

    carousel.addEventListener('mouseenter', function () {
      if (timer) window.clearInterval(timer);
    });
    carousel.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
  }

  var visitCountEl = document.getElementById('visitCount');
  var COUNTER_API = 'https://api.counterapi.dev/v1/electraglobe-sudoku/download-page';
  var SESSION_KEY = 'sudoku-download-visit-tracked';

  function showVisitCount(count) {
    if (visitCountEl && typeof count === 'number') {
      visitCountEl.textContent = count.toLocaleString();
    }
  }

  function trackPageVisit() {
    if (!visitCountEl) return;

    var endpoint = sessionStorage.getItem(SESSION_KEY) ? COUNTER_API + '/' : COUNTER_API + '/up';

    fetch(endpoint)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data && typeof data.count === 'number') {
          if (!sessionStorage.getItem(SESSION_KEY)) {
            sessionStorage.setItem(SESSION_KEY, '1');
          }
          showVisitCount(data.count);
        }
      })
      .catch(function () {
        if (visitCountEl) visitCountEl.textContent = '—';
      });
  }

  trackPageVisit();
})();
