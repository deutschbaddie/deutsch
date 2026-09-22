/* ==========================================================================
   core.js — state, storage, content registry, router, helpers
   Everything is global-namespaced on window.DE so the site runs from
   file:// as well as from a web server (no bundler, no modules, no fetch).
   ========================================================================== */
(function () {
  'use strict';

  var DE = window.DE = {};

  /* ---------------------------------------------------------------- utils */
  var U = DE.util = {
    /** Escape text before it touches innerHTML. */
    esc: function (s) {
      return String(s == null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    },
    /** Minimal inline markup: *bold*, _italic_, `code`. */
    rich: function (s) {
      return U.esc(s)
        .replace(/\*([^*]+)\*/g, '<b>$1</b>')
        .replace(/_([^_]+)_/g, '<i>$1</i>')
        .replace(/`([^`]+)`/g, '<code>$1</code>');
    },
    /**
     * Normalise a learner's typed answer so that spelling variants we do not
     * want to punish at A1 all compare equal: case, spacing, trailing
     * punctuation, and ae/oe/ue/ss typed instead of ä/ö/ü/ß.
     */
    norm: function (s) {
      return String(s == null ? '' : s)
        .toLowerCase().trim()
        .replace(/[.!?,;:]+$/g, '')
        .replace(/[‘’“”]/g, "'")
        .replace(/\s+/g, ' ')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
    },
    /** True when `given` matches any accepted answer. */
    matches: function (given, accepted) {
      var g = U.norm(given);
      if (!g) return false;
      for (var i = 0; i < accepted.length; i++) if (U.norm(accepted[i]) === g) return true;
      return false;
    },
    shuffle: function (a) {
      a = a.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    },
    pick: function (a) { return a[Math.floor(Math.random() * a.length)]; },
    /** Article of a noun string like "der Tisch" → "der"; else "". */
    article: function (de) {
      var m = /^(der|die|das)\s/i.exec(String(de).trim());
      return m ? m[1].toLowerCase() : '';
    },
    /** Bare noun / word without its article, for lookups and audio. */
    bare: function (de) {
      return String(de).replace(/^(der|die|das)\s+/i, '').replace(/\s*\(.*?\)\s*/g, '').trim();
    },
    todayKey: function () {
      var d = new Date();
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    },
    daysBetween: function (a, b) {
      return Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 86400000);
    },
    el: function (tag, cls, html) {
      var e = document.createElement(tag);
      if (cls) e.className = cls;
      if (html != null) e.innerHTML = html;
      return e;
    },
    on: function (root, sel, evt, fn) {
      root.addEventListener(evt, function (e) {
        var t = e.target.closest(sel);
        if (t && root.contains(t)) fn.call(t, e, t);
      });
    }
  };

  /* -------------------------------------------------------------- storage */
  var KEY = 'deutschlab.v1';
  var defaults = {
    xp: 0,
    streak: 0,
    lastDay: '',
    days: {},              // "2026-09-22": xp earned that day
    unit: {},              // unitId -> { deck:{slideIdx,done}, quiz:{best,done}, seen:true }
    srs: {},               // wordKey -> { box, due, seen, wrong }
    settings: { theme: 'dark', showEn: true, rate: 0.9, voice: '', autoAudio: false }
  };
  var S = DE.state = JSON.parse(JSON.stringify(defaults));

  DE.load = function () {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var p = JSON.parse(raw);
        for (var k in defaults) if (p[k] !== undefined) S[k] = p[k];
        for (var s in defaults.settings) if (S.settings[s] === undefined) S.settings[s] = defaults.settings[s];
      }
    } catch (e) { /* private mode / blocked storage — run with defaults */ }
    document.documentElement.setAttribute('data-theme', S.settings.theme);
  };
  DE.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ }
  };
  DE.reset = function () {
    S = DE.state = JSON.parse(JSON.stringify(defaults));
    DE.save();
    location.hash = '#/';
    location.reload();
  };

  /* ------------------------------------------------------------- progress */
  DE.unitState = function (id) {
    if (!S.unit[id]) S.unit[id] = { deck: { slideIdx: 0, done: false }, quiz: { best: 0, done: false }, seen: false };
    var u = S.unit[id];
    if (!u.deck) u.deck = { slideIdx: 0, done: false };
    if (!u.quiz) u.quiz = { best: 0, done: false };
    return u;
  };
  /** 0..1 completion of a unit: deck counts 60%, quiz score 40%. */
  DE.unitProgress = function (id) {
    var u = DE.unitState(id), unit = DE.unit(id);
    if (!unit) return 0;
    var n = unit.slides.length || 1;
    var deck = u.deck.done ? 1 : Math.min(1, u.deck.slideIdx / n);
    var quiz = Math.min(1, (u.quiz.best || 0) / 100);
    return Math.round((deck * 0.6 + quiz * 0.4) * 100) / 100;
  };
  DE.addXp = function (n) {
    if (!n) return;
    S.xp += n;
    var t = U.todayKey();
    S.days[t] = (S.days[t] || 0) + n;
    DE.touchDay();
    DE.save();
    DE.emit('stats');
  };
  DE.touchDay = function () {
    var t = U.todayKey();
    if (S.lastDay === t) return;
    if (!S.lastDay) S.streak = 1;
    else {
      var d = U.daysBetween(S.lastDay, t);
      S.streak = d === 1 ? S.streak + 1 : (d > 1 ? 1 : S.streak);
    }
    S.lastDay = t;
    DE.save();
  };

  /* ------------------------------------------------------- content registry
     Content is pure data. A unit file calls DE.registerUnit({...}) and the
     loader below pulls unit files listed in content/registry.js. To add A2 /
     B1 / B2 later you only add files + registry rows — no app code changes.
  ---------------------------------------------------------------------- */
  DE.levels = [];      // [{id:'A1', name, blurb, status:'open'|'soon', files:[...]}]
  DE.units = [];       // flat, in registration order
  var unitById = {};

  DE.registerLevel = function (lvl) { DE.levels.push(lvl); };

  DE.registerUnit = function (u) {
    u.slides = u.slides || [];
    u.quiz = u.quiz || [];
    u.vocab = DE.collectVocab(u);
    unitById[u.id] = u;
    DE.units.push(u);
  };

  DE.unit = function (id) { return unitById[id] || null; };
  DE.levelUnits = function (lvlId) {
    return DE.units.filter(function (u) { return u.level === lvlId; });
  };

  /** Pull every vocab item out of a unit's slides into one flat list. */
  DE.collectVocab = function (u) {
    var out = [], seen = {};
    u.slides.forEach(function (s) {
      if (s.t !== 'vocab' || !s.items) return;
      s.items.forEach(function (it) {
        var de = it[0];
        if (seen[de]) return;
        seen[de] = 1;
        out.push({ de: de, en: it[1], exDe: it[2] || '', exEn: it[3] || '', unit: u.id, unitTitle: u.title });
      });
    });
    return out;
  };

  /**
   * Every vocab item in the course, flat and de-duplicated.
   * A word may deliberately reappear in a later unit (new context, more
   * repetition) — but the glossary, the counts and the SRS deck must each
   * hold it once, keyed on the German side, first occurrence wins.
   */
  DE.allVocab = function () {
    var out = [], seen = {};
    DE.units.forEach(function (u) {
      u.vocab.forEach(function (v) {
        if (seen[v.de]) return;
        seen[v.de] = 1;
        out.push(v);
      });
    });
    return out;
  };

  /* --------------------------------------------------------- script loader */
  DE.loadScripts = function (srcs, onProgress, done) {
    var i = 0;
    (function next() {
      if (i >= srcs.length) return done();
      var s = document.createElement('script');
      s.src = srcs[i];
      s.onload = function () { i++; onProgress(i / srcs.length); next(); };
      s.onerror = function () {
        console.error('Could not load content file:', srcs[i]);
        i++; onProgress(i / srcs.length); next();
      };
      document.head.appendChild(s);
    })();
  };

  /* ------------------------------------------------------------ event bus */
  var handlers = {};
  DE.on = function (ev, fn) { (handlers[ev] = handlers[ev] || []).push(fn); };
  DE.emit = function (ev, data) { (handlers[ev] || []).forEach(function (f) { f(data); }); };
  DE.clear = function (ev) { handlers[ev] = []; };

  /* --------------------------------------------------------------- router */
  DE.routes = {};
  DE.route = function (name, fn) { DE.routes[name] = fn; };
  DE.go = function (hash) { location.hash = hash; };
  DE.parseHash = function () {
    var h = (location.hash || '#/').replace(/^#\/?/, '');
    return h.split('/').filter(Boolean);
  };
  DE.render = function () {
    var parts = DE.parseHash();
    var name = parts[0] || 'home';
    var fn = DE.routes[name] || DE.routes.home;
    // Let the outgoing screen detach its global listeners, then drop them.
    DE.emit('route');
    DE.clear('route');
    var app = document.getElementById('app');
    app.innerHTML = '';
    app.scrollTop = 0;
    window.scrollTo(0, 0);
    fn(app, parts.slice(1));
    document.querySelectorAll('.rail-item').forEach(function (a) {
      a.classList.toggle('on', a.dataset.route === name);
    });
  };

  /* ---------------------------------------------------------------- toast */
  var toastTimer;
  DE.toast = function (msg, ms) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, ms || 1900);
  };
})();
