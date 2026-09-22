/* ==========================================================================
   audio.js — pronunciation
   Two honest sources, clearly separated:
     1. the device's own built-in German voice (offline, instant, synthetic)
     2. a link to Forvo, where the recording is an actual German person
   ========================================================================== */
(function () {
  'use strict';
  var DE = window.DE, A = DE.audio = {};
  var synth = window.speechSynthesis || null;
  var voices = [];
  var warned = false;   // tell the learner once, not on every single word

  function loadVoices() {
    if (!synth) return;
    voices = (synth.getVoices() || []).filter(function (v) { return /^de/i.test(v.lang); });
  }
  if (synth) {
    loadVoices();
    synth.onvoiceschanged = loadVoices;
  }

  A.available = function () { return !!synth; };
  A.voices = function () { return voices; };

  A.voice = function () {
    if (!voices.length) return null;
    var want = DE.state.settings.voice;
    if (want) {
      for (var i = 0; i < voices.length; i++) if (voices[i].name === want) return voices[i];
    }
    // Prefer de-DE over de-AT / de-CH when the learner has not chosen.
    for (var j = 0; j < voices.length; j++) if (/de[-_]DE/i.test(voices[j].lang)) return voices[j];
    return voices[0];
  };

  /** Speak German text. `rate` defaults to the learner's setting. */
  A.say = function (text, rate, onEnd) {
    if (!synth) { DE.toast('Dieses Gerät hat keine Sprachausgabe.'); if (onEnd) onEnd(); return; }
    try { synth.cancel(); } catch (e) {}
    var u = new SpeechSynthesisUtterance(String(text));
    var v = A.voice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'de-DE'; }
    u.rate = rate || DE.state.settings.rate || 0.9;
    u.pitch = 1;
    if (onEnd) { u.onend = onEnd; u.onerror = onEnd; }
    synth.speak(u);
    if (!voices.length && !v && !warned) {
      warned = true;
      DE.toast('Keine deutsche Stimme auf diesem Gerät — nutz den 🗣-Link für echte Sprecher.', 4200);
    }
  };

  A.stop = function () { if (synth) { try { synth.cancel(); } catch (e) {} } };

  /** Native-speaker recordings of a single word. */
  A.forvo = function (word) {
    return 'https://forvo.com/word/' + encodeURIComponent(DE.util.bare(word).toLowerCase()) + '/#de';
  };

  /** Wire every [data-say] in a container to the speaker. */
  A.bind = function (root) {
    DE.util.on(root, '[data-say]', 'click', function (e, t) {
      e.preventDefault();
      e.stopPropagation();
      root.querySelectorAll('.playing').forEach(function (n) { n.classList.remove('playing'); });
      t.classList.add('playing');
      A.say(t.getAttribute('data-say'), null, function () { t.classList.remove('playing'); });
    });
  };
})();
