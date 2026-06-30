(function () {
  'use strict';

  var APP_STORE = 'https://apps.apple.com/app/sudoku-puzzle-offline-classic/id6782259803';
  var PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.sudoku.offline.puzzle&hl=en';
  var REDIRECT_DELAY = 900;

  var statusText = document.getElementById('downloadStatusText');
  var spinner = document.getElementById('downloadSpinner');
  var hint = document.getElementById('downloadHint');

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

  function redirect(url, platformLabel) {
    setStatus('Opening ' + platformLabel + '…', true);
    if (hint) hint.textContent = 'If nothing happens, tap the button below.';

    window.setTimeout(function () {
      window.location.href = url;
    }, REDIRECT_DELAY);
  }

  if (isIOS()) {
    redirect(APP_STORE, 'the App Store');
  } else if (isAndroid()) {
    redirect(PLAY_STORE, 'Google Play');
  } else if (statusText) {
    setStatus('Choose your platform below', false);
    if (hint) hint.textContent = 'Select App Store for iPhone/iPad or Google Play for Android.';
  }
})();
