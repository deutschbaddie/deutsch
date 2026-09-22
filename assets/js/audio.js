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
  var ctx = null;            // AudioContext, used to hold the session open
  var silentSrc = null;      // near-silent loop that keeps it open
  var silentStop = null;

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
   * Declare this page as media playback rather than UI sound.
   *
   * This is the whole reason audio was inaudible with the ringer switch off:
   * an iPhone routes a page's default ("auto") audio session through the
   * ringer channel, which the mute switch silences. A "playback" session goes
   * through the media channel instead — the one music uses — and that channel
   * ignores the mute switch entirely.
   */
  function primeSession() {
    try {
      if (navigator.audioSession) navigator.audioSession.type = 'playback';
    } catch (e) { /* not supported here; speech may still work unmuted */ }
  }

  /**
   * iOS only actually applies the session while something is playing, and it
   * drops back to the ringer channel between utterances. Holding a near-silent
   * loop open across a phrase keeps speech on the media channel.
   * Stopped shortly after speaking so we do not sit on the user's audio
   * session — that would interrupt their music.
   */
  function holdSession() {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!ctx) ctx = new Ctx();
      if (ctx.state === 'suspended') ctx.resume();
      if (silentStop) { clearTimeout(silentStop); silentStop = null; }
      if (silentSrc) return;                       // already holding
      var buf = ctx.createBuffer(1, Math.max(1, Math.floor(ctx.sampleRate * 0.5)), ctx.sampleRate);
      silentSrc = ctx.createBufferSource();
      silentSrc.buffer = buf;
      silentSrc.loop = true;
      var g = ctx.createGain();
      g.gain.value = 0.0001;      // inaudible, but real output so iOS keeps the session
      silentSrc.connect(g);
      g.connect(ctx.destination);
      silentSrc.start(0);
    } catch (e) { /* ignore — only an optimisation */ }
  }
  function releaseSession(delay) {
    if (silentStop) clearTimeout(silentStop);
    silentStop = setTimeout(function () {
      try { if (silentSrc) { silentSrc.stop(); silentSrc.disconnect(); } } catch (e) {}
      silentSrc = null;
      silentStop = null;
    }, delay || 2000);
  }

  /**
   * iOS and Chrome refuse to speak until one utterance has been started from
   * inside a real user gesture. Spend that first gesture on a silent one, and
   * set up the audio session at the same time — both need a gesture.
   */
  function unlock() {
    primeSession();
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
    // The sound check reports failures in detail itself; a toast on top of it
    // would only cover the buttons.
    var sheet = document.getElementById('settingsSheet');
    if (sheet && !sheet.hidden) return;
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
      releaseSession(2000);
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

    primeSession();
    holdSession();
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

  /**
   * A short beep through Web Audio. Deliberately not speech: if this is
   * audible but words are not, the problem is the voice, not the mute switch.
   * Returns true if it managed to start.
   */
  A.tone = function () {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return false;
      primeSession();
      if (!ctx) ctx = new Ctx();
      if (ctx.state === 'suspended') ctx.resume();
      holdSession();
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = 660;
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.45);
      o.connect(g); g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.5);
      releaseSession(1500);
      return true;
    } catch (e) { return false; }
  };

  /** Everything we know about whether sound can work here. */
  A.status = function () {
    return {
      speech: !!synth,
      voices: voices.length,
      unlocked: unlocked,
      webAudio: !!(window.AudioContext || window.webkitAudioContext),
      sessionApi: !!navigator.audioSession,
      sessionType: navigator.audioSession ? navigator.audioSession.type : null
    };
  };

  A.stop = function () {
    stopKeepAlive();
    releaseSession(300);
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
