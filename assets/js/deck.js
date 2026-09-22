/* ==========================================================================
   deck.js — the presentation player
   A lesson is an array of slide objects. Each `t` maps to a renderer below.
   Adding a new slide type for A2/B1/B2 = adding one function here.
   ========================================================================== */
(function () {
  'use strict';
  var DE = window.DE, U = DE.util, D = DE.deck = {};
  var R = D.renderers = {};

  /* ------------------------------------------------------------ helpers */
  function head(s) {
    return (s.kicker ? '<div class="kicker">' + U.esc(s.kicker) + '</div>' : '') +
      (s.title ? '<h2>' + U.rich(s.title) + '</h2>' : '') +
      (s.lead ? '<p>' + U.rich(s.lead) + '</p>' : '');
  }
  function note(n, kind) {
    if (!n) return '';
    return '<div class="note ' + (kind || '') + '"><b>' + (kind === 'warn' ? 'Careful' : kind === 'win' ? 'Shortcut' : 'Remember') + ':</b> ' + U.rich(n) + '</div>';
  }
  function genderClass(de) {
    var a = U.article(de);
    return a === 'der' ? 'g-der' : a === 'die' ? 'g-die' : a === 'das' ? 'g-das' : '';
  }

  /* -------------------------------------------------------------- goal */
  R.goal = function (s) {
    return '<div>' + head(s) +
      (s.points ? '<ul class="cando">' + s.points.map(function (p) {
        return '<li>' + U.rich(p) + '</li>';
      }).join('') + '</ul>' : '') +
      (s.body ? '<div class="gbox">' + s.body.split('\n').map(function (p) {
        return '<p>' + U.rich(p) + '</p>';
      }).join('') + '</div>' : '') +
      note(s.note, s.noteKind) + '</div>';
  };

  /* ------------------------------------------------------------- vocab */
  R.vocab = function (s) {
    var rows = s.items.map(function (it) {
      var de = it[0], en = it[1], ex = it[2], exEn = it[3];
      var spoken = it[4] || de;
      return '<div class="vrow">' +
        '<button class="spk" data-say="' + U.esc(spoken) + '" aria-label="Play">▶︎</button>' +
        '<div class="wb">' +
        '<div class="de ' + genderClass(de) + '">' + U.esc(de) + '</div>' +
        '<div class="en">' + U.esc(en) + '</div>' +
        (ex ? '<div class="ex">' + U.esc(ex) + (exEn ? '<em>' + U.esc(exEn) + '</em>' : '') + '</div>' : '') +
        '</div>' +
        '<a class="forvo" href="' + DE.audio.forvo(de) + '" target="_blank" rel="noopener" title="Real native speakers on Forvo">🗣</a>' +
        '</div>';
    }).join('');
    var legend = '<div class="btn-row small muted" style="margin-top:12px;gap:14px">' +
      '<span><i class="dot der"></i> der</span><span><i class="dot die"></i> die</span>' +
      '<span><i class="dot das"></i> das</span><span>🗣 = real speakers (Forvo)</span></div>';
    var all = s.items.map(function (i) { return i[0]; }).join(', ');
    return '<div>' + head(s) +
      '<div class="btn-row" style="margin-top:14px"><button class="btn btn-ghost btn-sm" data-say="' + U.esc(all) + '">▶︎ Play all</button></div>' +
      '<div class="vlist">' + rows + '</div>' + legend + note(s.note, s.noteKind) + '</div>';
  };

  /* ------------------------------------------------------------ dialog */
  R.dialog = function (s) {
    var lines = s.lines.map(function (l) {
      return '<div class="dline"><div class="who">' + U.esc(l[0].slice(0, 2)) + '</div>' +
        '<div class="txt"><div class="de">' + U.esc(l[1]) + '</div><div class="en">' + U.esc(l[2] || '') + '</div></div>' +
        '<button class="pl" data-say="' + U.esc(l[1]) + '" aria-label="Play">▶︎</button></div>';
    }).join('');
    var whole = s.lines.map(function (l) { return l[1]; }).join(' … ');
    return '<div>' + head(s) +
      (s.setting ? '<div class="setting">📍 ' + U.rich(s.setting) + '</div>' : '') +
      '<div class="btn-row" style="margin-top:12px">' +
      '<button class="btn btn-ghost btn-sm" data-say="' + U.esc(whole) + '">▶︎ Play whole dialogue</button>' +
      '<button class="btn btn-ghost btn-sm" data-toggle-en>👁 Translation</button></div>' +
      '<div class="dlg">' + lines + '</div>' + note(s.note, s.noteKind) + '</div>';
  };

  /* ----------------------------------------------------------- grammar */
  R.grammar = function (s) {
    var body = '';
    if (s.body) body += s.body.split('\n').filter(Boolean).map(function (p) { return '<p>' + U.rich(p) + '</p>'; }).join('');
    var table = '';
    if (s.table) {
      table = '<div class="tscroll"><table class="gtable"><thead><tr>' +
        s.table.head.map(function (h) { return '<th>' + U.esc(h) + '</th>'; }).join('') +
        '</tr></thead><tbody>' +
        s.table.rows.map(function (r) {
          return '<tr>' + r.map(function (c) { return '<td>' + U.rich(c) + '</td>'; }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>';
    }
    var ex = (s.examples || []).map(function (e) {
      return '<div class="ex-pair"><b>' + U.rich(e[0]) + '</b><i>' + U.esc(e[1] || '') + '</i>' +
        '<button class="pl" data-say="' + U.esc(String(e[0]).replace(/[*_`]/g, '')) + '" style="align-self:flex-start;margin-top:4px;font-size:12px;opacity:.6">▶︎ play</button></div>';
    }).join('');
    return '<div>' + head(s) +
      '<div class="gbox">' + body + table + '</div>' + ex +
      note(s.note, s.noteKind) + '</div>';
  };

  /* ------------------------------------------- street (Straßendeutsch) */
  R.street = function (s) {
    var items = (s.items || []).map(function (it) {
      return '<div class="sitem"><div class="de">' + U.esc(it[0]) +
        ' <button class="pl" data-say="' + U.esc(it[0]) + '" style="font-size:12px;opacity:.6">▶︎</button></div>' +
        '<div class="en">' + U.esc(it[1]) + '</div>' +
        (it[2] ? '<div class="nt">' + U.rich(it[2]) + '</div>' : '') + '</div>';
    }).join('');
    return '<div>' +
      '<div class="street">' +
      '<div class="kicker" style="color:var(--pnk)">Street German · how TikTok actually talks</div>' +
      '<h3>' + U.rich(s.title || 'How people actually say it') + '</h3>' +
      (s.lead ? '<p style="color:var(--ink-2);font-size:15px;margin:8px 0 0">' + U.rich(s.lead) + '</p>' : '') +
      '<div class="slist">' + items + '</div>' +
      '</div>' + note(s.note, s.noteKind || 'warn') + '</div>';
  };

  /* ----------------------------------------------------------- pattern */
  R.pattern = function (s) {
    var frame = U.esc(s.frame).replace(/\{\}/g, '<u>' + U.esc(s.slotLabel || '…') + '</u>');
    return '<div>' + head(s) +
      '<div class="frame" data-frame>' +
      '<div class="f">' + frame + '</div>' +
      '<div class="swaps">' + (s.swaps || []).map(function (w, i) {
        return '<button class="swap" data-swap="' + i + '">' + U.esc(w[0]) + '</button>';
      }).join('') + '</div>' +
      '<div class="frame-out" data-out></div>' +
      '</div>' + note(s.note, s.noteKind) + '</div>';
  };

  /* ----------------------------------------------------------- culture */
  R.culture = function (s) {
    return '<div>' + head(s) +
      '<div class="gbox">' + (s.body || '').split('\n').filter(Boolean).map(function (p) {
        return '<p>' + U.rich(p) + '</p>';
      }).join('') + '</div>' + note(s.note, s.noteKind) + '</div>';
  };

  /* ------------------------------------------------------------- drill */
  R.drill = function (s) {
    return '<div>' + head(s) + '<div data-drill></div></div>';
  };

  /* ------------------------------------------------------------- recap */
  R.recap = function (s) {
    return '<div>' + head(s) +
      '<ul class="recap">' + (s.points || []).map(function (p, i) {
        return '<li><b>' + (i + 1) + '.</b><span>' + U.rich(p) + '</span></li>';
      }).join('') + '</ul>' + note(s.note, s.noteKind || 'win') + '</div>';
  };

  /* ------------------------------------------------------------ player */
  /** Open the full-screen deck for a unit, starting at `startAt`. */
  D.open = function (unit, startAt) {
    var idx = Math.min(Math.max(0, startAt | 0), unit.slides.length - 1);
    var st = DE.unitState(unit.id);
    var root = U.el('div', 'deck');
    root.innerHTML =
      '<div class="deck-top">' +
      '<button class="icon-btn" data-exit aria-label="Close">✕</button>' +
      '<div class="ttl">' + U.esc(unit.num + '. ' + unit.title) + '</div>' +
      '<div class="count"></div></div>' +
      '<div class="deck-prog"><i></i></div>' +
      '<div class="deck-stage"><div class="slide" data-stage></div></div>' +
      '<div class="deck-bottom">' +
      '<button class="btn btn-ghost" data-prev>← Back</button>' +
      '<div class="deck-hint">← → to flip · Esc to close</div>' +
      '<button class="btn btn-pri" data-next>Next →</button>' +
      '</div>';
    document.body.appendChild(root);
    document.body.style.overflow = 'hidden';

    var stage = root.querySelector('[data-stage]');
    var prog = root.querySelector('.deck-prog i');
    var count = root.querySelector('.count');

    function draw() {
      var s = unit.slides[idx];
      var fn = R[s.t] || R.culture;
      stage.innerHTML = fn(s);
      stage.classList.remove('slide');
      void stage.offsetWidth;
      stage.classList.add('slide');
      root.querySelector('.deck-stage').scrollTop = 0;
      count.textContent = (idx + 1) + ' / ' + unit.slides.length;
      prog.style.width = ((idx + 1) / unit.slides.length * 100) + '%';
      root.querySelector('[data-prev]').disabled = idx === 0;
      root.querySelector('[data-next]').textContent =
        idx === unit.slides.length - 1 ? 'Done ✓' : 'Next →';

      DE.audio.bind(stage);
      wireExtras(s);
      markScrollableTables(stage);

      // Reaching a vocab slide puts those words into the SRS deck for real.
      if (s.t === 'vocab') {
        var added = DE.srs.introduce(s.items.map(function (i) {
          return { de: i[0], en: i[1], exDe: i[2] || '', exEn: i[3] || '' };
        }));
        if (added) DE.emit('stats');
      }
      if (idx + 1 > st.deck.slideIdx) { st.deck.slideIdx = idx + 1; DE.save(); }
      if (DE.state.settings.autoAudio && s.t === 'vocab' && s.items[0]) {
        DE.audio.say(s.items[0][0]);
      }
    }

    /** Show the edge fade only on tables that actually overflow. */
    function markScrollableTables(root) {
      root.querySelectorAll('.tscroll').forEach(function (w) {
        var t = w.querySelector('.gtable');
        w.classList.toggle('scrollable', !!t && t.scrollWidth > t.clientWidth + 2);
        if (t) t.addEventListener('scroll', function () {
          w.classList.toggle('scrollable', t.scrollWidth - t.scrollLeft > t.clientWidth + 2);
        });
      });
    }

    function wireExtras(s) {
      // dialog: line-by-line translation reveal
      var showEn = DE.state.settings.showEn;
      stage.querySelectorAll('.dline').forEach(function (d) {
        if (showEn) d.classList.add('open');
        d.addEventListener('click', function () { d.classList.toggle('open'); });
      });
      var tog = stage.querySelector('[data-toggle-en]');
      if (tog) tog.addEventListener('click', function () {
        var any = stage.querySelector('.dline:not(.open)');
        stage.querySelectorAll('.dline').forEach(function (d) { d.classList.toggle('open', !!any); });
      });

      // pattern builder
      var frame = stage.querySelector('[data-frame]');
      if (frame && s.swaps) {
        var out = frame.querySelector('[data-out]');
        frame.querySelectorAll('.swap').forEach(function (b) {
          b.addEventListener('click', function () {
            frame.querySelectorAll('.swap').forEach(function (n) { n.classList.remove('on'); });
            b.classList.add('on');
            var w = s.swaps[+b.dataset.swap];
            var sentence = s.frame.replace(/\{\}/g, w[0]);
            out.innerHTML = '„' + U.esc(sentence) + '“<i>' + U.esc((s.enFrame || '').replace(/\{\}/g, w[1] || '')) + '</i>';
            DE.audio.say(sentence);
          });
        });
      }

      // inline drill
      var host = stage.querySelector('[data-drill]');
      if (host && s.ex && s.ex.length) {
        var j = 0, correct = 0;
        (function run() {
          DE.ex.render(host, s.ex[j], {
            onDone: function (ok) {
              if (ok) { correct++; DE.addXp(2); }
              if (j < s.ex.length - 1) {
                var b = U.el('button', 'btn btn-pri btn-sm', 'Next question →');
                b.style.marginTop = '12px';
                b.addEventListener('click', function () { j++; run(); });
                host.querySelector('.ex').appendChild(b);
              } else {
                host.querySelector('.ex').insertAdjacentHTML('beforeend',
                  '<div class="note win" style="margin-top:12px"><b>Round done:</b> ' +
                  correct + ' / ' + s.ex.length + ' right. Carry on with the button below.</div>');
              }
            }
          });
        })();
      }
    }

    function close() {
      DE.audio.stop();
      document.removeEventListener('keydown', key);
      document.body.style.overflow = '';
      root.remove();
      DE.render();
    }
    function next() {
      if (idx === unit.slides.length - 1) {
        if (!st.deck.done) { st.deck.done = true; DE.addXp(20); DE.save(); }
        DE.toast('Lesson complete! +20 ⚡');
        close();
        DE.go('#/unit/' + unit.id);
        return;
      }
      idx++; draw();
    }
    function prev() { if (idx > 0) { idx--; draw(); } }
    function key(e) {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    }
    root.querySelector('[data-exit]').addEventListener('click', close);
    root.querySelector('[data-next]').addEventListener('click', next);
    root.querySelector('[data-prev]').addEventListener('click', prev);
    document.addEventListener('keydown', key);
    draw();
  };
})();
