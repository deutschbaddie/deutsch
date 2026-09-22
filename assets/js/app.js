/* ==========================================================================
   app.js — boot, chrome, settings
   ========================================================================== */
(function () {
  'use strict';
  var DE = window.DE, U = DE.util;

  /* ----------------------------------------------------------- settings */
  function renderSettings() {
    var s = DE.state.settings;
    var voices = DE.audio.voices();
    var body = document.getElementById('settingsBody');
    body.innerHTML =
      row('Light theme', 'For daylight and tired eyes.', toggle(s.theme === 'light', 'theme')) +
      row('Show translations straight away', 'Off means you have to guess first. Off is better.', toggle(s.showEn, 'showEn')) +
      row('Read the first word aloud', 'Plays the top word automatically on every vocabulary slide.', toggle(s.autoAudio, 'autoAudio')) +
      '<div class="srow"><div class="lab"><b>Speaking speed</b><small>Slower helps when you copy it back.</small></div>' +
      '<select class="sel" data-set="rate">' +
      [['0.55', 'very slow'], ['0.7', 'slow'], ['0.9', 'normal'], ['1.05', 'brisk'], ['1.25', 'fast (TikTok speed)']]
        .map(function (r) {
          return '<option value="' + r[0] + '"' + (String(s.rate) === r[0] ? ' selected' : '') + '>' + r[1] + '</option>';
        }).join('') + '</select></div>' +
      '<div class="srow"><div class="lab"><b>Voice</b><small>' +
      (voices.length ? voices.length + ' German voice(s) on this device.'
        : 'No German voice found. Install one in your system settings — or use the 🗣 link anywhere for real speakers.') +
      '</small></div>' +
      (voices.length ? '<select class="sel" data-set="voice">' +
        voices.map(function (v) {
          return '<option value="' + U.esc(v.name) + '"' + (s.voice === v.name ? ' selected' : '') + '>' +
            U.esc(v.name.replace(/Microsoft |Google /, '')) + ' · ' + U.esc(v.lang) + '</option>';
        }).join('') + '</select>' : '') +
      '</div>' +
      '<div class="srow"><div class="lab"><b>Try it</b><small>Hear what the voice sounds like.</small></div>' +
      '<button class="btn btn-ghost btn-sm" data-say="Grüß dich! Na, wie läuft\'s bei dir so?">▶︎ Probe</button></div>';

    function row(b, sm, ctrl) {
      return '<div class="srow"><div class="lab"><b>' + b + '</b><small>' + sm + '</small></div>' + ctrl + '</div>';
    }
    function toggle(on, key) {
      return '<button class="toggle' + (on ? ' on' : '') + '" data-toggle="' + key + '" role="switch" aria-checked="' + on + '"></button>';
    }

    U.on(body, '[data-toggle]', 'click', function (e, t) {
      var k = t.dataset.toggle;
      if (k === 'theme') {
        s.theme = s.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', s.theme);
      } else {
        s[k] = !s[k];
      }
      DE.save();
      renderSettings();
    });
    U.on(body, '[data-set]', 'change', function (e, t) {
      var k = t.dataset.set;
      s[k] = k === 'rate' ? parseFloat(t.value) : t.value;
      DE.save();
      if (k !== 'rate') DE.audio.say('Alles klar. Los geht\'s.');
    });
    DE.audio.bind(body);
  }

  function openSheet() {
    renderSettings();
    document.getElementById('settingsSheet').hidden = false;
  }
  function closeSheet() { document.getElementById('settingsSheet').hidden = true; }

  /* -------------------------------------------------------------- stats */
  function paintStats() {
    document.getElementById('statStreak').textContent = DE.state.streak;
    document.getElementById('statWords').textContent = DE.srs.counts().slice(5).reduce(function (a, b) { return a + b; }, 0);
    document.getElementById('statXp').textContent = DE.state.xp;
  }
  DE.on('stats', paintStats);

  /* --------------------------------------------------------------- boot */
  DE.load();

  var bar = document.getElementById('bootBar');
  var msg = document.getElementById('bootMsg');
  var files = DE.contentFiles || [];

  DE.loadScripts(files, function (p) {
    bar.style.width = Math.max(8, p * 100) + '%';
    if (p > .5) msg.textContent = 'Sorting the vocabulary…';
    if (p > .85) msg.textContent = 'Almost there…';
  }, function () {
    bar.style.width = '100%';
    DE.touchDay();
    paintStats();

    document.getElementById('boot').classList.add('hide');
    setTimeout(function () { document.getElementById('boot').remove(); }, 380);
    document.querySelector('.topbar').hidden = false;
    document.querySelector('.rail').hidden = false;
    document.getElementById('app').hidden = false;

    document.getElementById('btnSettings').addEventListener('click', openSheet);
    U.on(document.getElementById('settingsSheet'), '[data-close]', 'click', closeSheet);
    U.on(document.body, '[data-go]', 'click', function (e, t) { DE.go(t.dataset.go); });

    window.addEventListener('hashchange', DE.render);
    DE.render();

    if (!DE.units.length) {
      document.getElementById('app').innerHTML =
        '<div class="empty"><div class="e">📦</div><b>No content loaded.</b><br>' +
        '<span class="small">Check that the <code>content/</code> folder sits next to <code>index.html</code>.</span></div>';
    }
  });
})();
