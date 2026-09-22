/* ==========================================================================
   audio.js — pronunciation
   Two honest sources, clearly separated:
     1. the device's own built-in German voice (offline, instant, synthetic)
     2. a link to Forvo, where the recording is an actual German person

   Mobile speech synthesis is fussy, so three things matter here:
     - the first utterance must come from a real user gesture (iOS, Chrome)
     - speak() queued in the same tick as cancel() is silently dropped (Safari)
     - bind() must attach once per element, or one tap fires N overlapping
       utterances that cancel each other and you hear nothing
   ========================================================================== */
(function () {
  'use strict';
  var DE = window.DE, A = DE.audio = {};
  var synth = window.speechSynthesis || null;
  var voices = [];
  var unlocked = false;
  var warned = false;          // tell the learner once, not on every word
  var keepAlive = null;
  var onVoices = [];

  function loadVoices() {
    if (!synth) return;
    var all = synth.getVoices() || [];
    voices = all.filter(function (v) { return /^de/i.test(v.lang || ''); });
    if (voices.length) onVoices.forEach(function (f) { f(); });
  }
  if (synth) {
    loadVoices();
    synth.onvoiceschanged = loadVoices;
    // Safari sometimes populates the list late and never fires the event.
    setTimeout(loadVoices, 400);
    setTimeout(loadVoices, 1500);
  }

  /** Run fn once German voices are known (or immediately if they already are). */
  A.whenVoicesReady = function (fn) {
    if (voices.length) fn(); else onVoices.push(fn);
  };

  /**
   * iOS and Chrome refuse to speak until one utterance has been started from
   * inside a real user gesture. Spend that first gesture on a silent one.
   */
  function unlock() {
    if (unlocked || !synth) return;
    unlocked = true;
    try {
      var u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      synth.speak(u);
    } catch (e) { /* not fatal — a real utterance may still work */ }
  }
  ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) {
    document.addEventListener(ev, unlock, { capture: true, passive: true });
  });

  function stopKeepAlive() {
    if (keepAlive) { clearInterval(keepAlive); keepAlive = null; }
  }

  function failOnce(msg) {
    if (warned) return;
    warned = true;
    DE.toast(msg, 5000);
  }

  A.available = function () { return !!synth; };
  A.voices = function () { return voices; };
  A.unlocked = function () { return unlocked; };

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

  function speakNow(text, rate, onEnd) {
    var u = new SpeechSynthesisUtterance(String(text));
    var v = A.voice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'de-DE'; }
    u.rate = rate || DE.state.settings.rate || 0.9;
    u.pitch = 1;

    var started = false, done = false;
    function finish() {
      if (done) return;
      done = true;
      stopKeepAlive();
      if (onEnd) onEnd();
    }
    u.onstart = function () { started = true; };
    u.onend = finish;
    u.onerror = function (e) {
      // Tapping a second word cancels the first — that is not a failure.
      var err = e && e.error;
      if (err && err !== 'interrupted' && err !== 'canceled') {
        failOnce('Speech failed on this device — the 🗣 links still work.');
      }
      finish();
    };

    try {
      synth.speak(u);
    } catch (e) {
      failOnce('Speech failed on this device — the 🗣 links still work.');
      finish();
      return;
    }

    stopKeepAlive();
    keepAlive = setInterval(function () {
      if (!synth.speaking) { stopKeepAlive(); return; }
      if (synth.paused) synth.resume();     // some browsers stall long clips
    }, 5000);

    // If nothing has begun after a moment, speech is not working here at all.
    setTimeout(function () {
      if (!started && !done && !synth.speaking && !synth.pending) {
        failOnce('No speech on this device. Check the voice in Settings, or use the 🗣 links.');
        finish();
      }
    }, 1400);
  }

  /** Speak German text. `rate` defaults to the learner's setting. */
  A.say = function (text, rate, onEnd) {
    if (!synth) {
      failOnce('This device has no speech output — use the 🗣 links.');
      if (onEnd) onEnd();
      return;
    }
    unlock();
    if (synth.speaking || synth.pending) {
      try { synth.cancel(); } catch (e) { /* ignore */ }
      // Safari drops anything queued in the same tick as cancel().
      setTimeout(function () { speakNow(text, rate, onEnd); }, 130);
    } else {
      speakNow(text, rate, onEnd);
    }
  };

  A.stop = function () {
    stopKeepAlive();
    if (synth) { try { synth.cancel(); } catch (e) { /* ignore */ } }
  };

  /** Native-speaker recordings of a single word. */
  A.forvo = function (word) {
    return 'https://forvo.com/word/' + encodeURIComponent(DE.util.bare(word).toLowerCase()) + '/#de';
  };

  /**
   * Wire every [data-say] inside `root` to the speaker, by delegation.
   * Binds once per element: these containers are reused across renders, and
   * re-binding would stack listeners so a single tap fired several
   * overlapping utterances that cancelled each other out.
   */
  A.bind = function (root) {
    if (!root || root.__deAudioBound) return;
    root.__deAudioBound = true;
    DE.util.on(root, '[data-say]', 'click', function (e, t) {
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.playing').forEach(function (n) { n.classList.remove('playing'); });
      t.classList.add('playing');
      A.say(t.getAttribute('data-say'), null, function () { t.classList.remove('playing'); });
    });
  };
})();
