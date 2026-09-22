/* ==========================================================================
   srs.js — spaced repetition (Leitner boxes)
   A word enters the system the moment it appears on a vocab slide you have
   actually reached. Boxes: 1→again today, 2→1d, 3→3d, 4→7d, 5→16d, 6→retired.
   ========================================================================== */
(function () {
  'use strict';
  var DE = window.DE, U = DE.util, S = DE.srs = {};
  var GAP = [0, 0, 1, 3, 7, 16, 40];   // index = box

  function key(v) { return v.de; }
  function today() { return U.todayKey(); }
  function plusDays(n) {
    var d = new Date();
    d.setDate(d.getDate() + n);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  /** Put words into the deck (idempotent). */
  S.introduce = function (vocabList) {
    var st = DE.state.srs, added = 0;
    vocabList.forEach(function (v) {
      var k = key(v);
      if (!st[k]) { st[k] = { box: 1, due: today(), seen: 0, wrong: 0 }; added++; }
    });
    if (added) DE.save();
    return added;
  };

  S.card = function (de) { return DE.state.srs[de] || null; };
  S.known = function () { return Object.keys(DE.state.srs); };

  /** Words whose due date is today or earlier. */
  S.due = function () {
    var st = DE.state.srs, t = today(), all = DE.allVocab(), out = [];
    all.forEach(function (v) {
      var c = st[key(v)];
      if (c && c.box < 6 && c.due <= t) out.push(v);
    });
    return out;
  };

  S.counts = function () {
    var st = DE.state.srs, c = [0, 0, 0, 0, 0, 0, 0];
    Object.keys(st).forEach(function (k) { c[st[k].box] = (c[st[k].box] || 0) + 1; });
    return c;
  };

  /** grade: 'again' | 'hard' | 'easy' */
  S.grade = function (de, grade) {
    var st = DE.state.srs, c = st[de];
    if (!c) { c = st[de] = { box: 1, due: today(), seen: 0, wrong: 0 }; }
    c.seen++;
    if (grade === 'again') { c.box = 1; c.wrong++; c.due = today(); }
    else if (grade === 'hard') { c.box = Math.max(1, c.box); c.due = plusDays(1); }
    else { c.box = Math.min(6, c.box + 1); c.due = plusDays(GAP[Math.min(6, c.box)]); }
    DE.save();
    DE.emit('stats');
  };

  /** Words the learner keeps getting wrong — the honest weak list. */
  S.weak = function (limit) {
    var st = DE.state.srs;
    return DE.allVocab()
      .filter(function (v) { var c = st[v.de]; return c && c.wrong > 0; })
      .sort(function (a, b) { return st[b.de].wrong - st[a.de].wrong; })
      .slice(0, limit || 20);
  };
})();
