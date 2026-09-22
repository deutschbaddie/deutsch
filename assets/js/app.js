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
      row('Helles Design', 'Für Tageslicht und müde Augen.', toggle(s.theme === 'light', 'theme')) +
      row('Übersetzung sofort zeigen', 'Aus = du musst erst selbst raten. Empfohlen: aus.', toggle(s.showEn, 'showEn')) +
      row('Wort automatisch vorlesen', 'Spielt auf jeder Wortschatz-Folie das erste Wort ab.', toggle(s.autoAudio, 'autoAudio')) +
      '<div class="srow"><div class="lab"><b>Sprechtempo</b><small>Langsamer hilft beim Nachsprechen.</small></div>' +
      '<select class="sel" data-set="rate">' +
      [['0.55', 'sehr langsam'], ['0.7', 'langsam'], ['0.9', 'normal'], ['1.05', 'zügig'], ['1.25', 'schnell (wie TikTok)']]
        .map(function (r) {
          return '<option value="' + r[0] + '"' + (String(s.rate) === r[0] ? ' selected' : '') + '>' + r[1] + '</option>';
        }).join('') + '</select></div>' +
      '<div class="srow"><div class="lab"><b>Stimme</b><small>' +
      (voices.length ? voices.length + ' deutsche Stimme(n) auf diesem Gerät.'
        : 'Keine deutsche Stimme gefunden. Installier eine in den Systemeinstellungen — oder nutz überall den 🗣-Link zu echten Sprechern.') +
      '</small></div>' +
      (voices.length ? '<select class="sel" data-set="voice">' +
        voices.map(function (v) {
          return '<option value="' + U.esc(v.name) + '"' + (s.voice === v.name ? ' selected' : '') + '>' +
            U.esc(v.name.replace(/Microsoft |Google /, '')) + ' · ' + U.esc(v.lang) + '</option>';
        }).join('') + '</select>' : '') +
      '</div>' +
      '<div class="srow"><div class="lab"><b>Test</b><small>Hör dir an, wie die Stimme klingt.</small></div>' +
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
      if (k !== 'rate') DE.audio.say('Alles klar.');
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
    if (p > .5) msg.textContent = 'Wortschatz wird sortiert…';
    if (p > .85) msg.textContent = 'Fast fertig…';
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
        '<div class="empty"><div class="e">📦</div><b>Keine Inhalte geladen.</b><br>' +
        '<span class="small">Prüf, ob der Ordner <code>content/</code> neben der <code>index.html</code> liegt.</span></div>';
    }
  });
})();
