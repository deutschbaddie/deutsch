/* ==========================================================================
   views.js — every screen in the app
   ========================================================================== */
(function () {
  'use strict';
  var DE = window.DE, U = DE.util;

  function pct(n) { return Math.round(n * 100); }

  /* =========================================================== home ==== */
  DE.route('home', function (app) {
    var openLevel = (DE.levels.filter(function (l) { return l.status === 'open'; })[0] || {}).id || 'A1';
    var units = DE.levelUnits(openLevel);
    var done = units.filter(function (u) { return DE.unitProgress(u.id) >= 0.99; }).length;
    var dueCount = DE.srs.due().length;

    var html = '';
    html += '<section class="hero">' +
      '<div class="eyebrow">Dein Kurs · Niveau ' + openLevel + '</div>' +
      '<h1>Guten Tag. Lass uns Deutsch machen.</h1>' +
      '<p>' + units.length + ' Einheiten, ' + DE.allVocab().length + ' Wörter, Präsentationen mit Ton, ' +
      'Straßendeutsch in jeder Einheit — und ein Decoder für das Deutsch, das dir auf TikTok begegnet.</p>' +
      '<div class="hero-row">' +
      '<button class="btn btn-pri" data-continue>' + (done ? '▶︎ Weitermachen' : '▶︎ Einheit 1 starten') + '</button>' +
      (dueCount ? '<a class="btn btn-ghost" href="#/trainer">🎯 ' + dueCount + ' Wörter fällig</a>' : '') +
      '<a class="btn btn-ghost" href="#/decoder">📱 TikTok-Decoder</a>' +
      '</div></section>';

    html += '<div class="levels">' + DE.levels.map(function (l) {
      return '<button class="lvl ' + (l.id === openLevel ? 'on' : 'soon') + '" ' +
        (l.status === 'open' ? '' : 'disabled') + '>' + U.esc(l.id) +
        '<small>' + (l.status === 'open' ? DE.levelUnits(l.id).length + ' Einheiten' : 'in Vorbereitung') +
        '</small></button>';
    }).join('') + '</div>';

    html += '<div class="sec-title">Einheiten <span>' + done + ' von ' + units.length + ' abgeschlossen</span></div>';
    html += '<div class="units">' + units.map(function (u) {
      var p = DE.unitProgress(u.id);
      var cls = p >= 0.99 ? 'done' : p > 0 ? 'started' : '';
      return '<button class="unit ' + cls + '" data-unit="' + u.id + '">' +
        '<div class="unit-num">' + (p >= 0.99 ? '✓' : u.num) + '</div>' +
        '<div class="unit-body">' +
        '<h3>' + U.esc(u.title) + '</h3>' +
        '<div class="de">' + U.esc(u.subtitle || '') + '</div>' +
        '<div class="unit-meta">' +
        '<span class="tag">' + u.slides.length + ' Folien</span>' +
        '<span class="tag">' + u.vocab.length + ' Wörter</span>' +
        '<span class="tag">' + u.quiz.length + ' Aufgaben</span>' +
        '</div>' +
        '<div class="bar ' + (p >= 0.99 ? 'grn' : '') + '"><i style="width:' + pct(p) + '%"></i></div>' +
        '</div></button>';
    }).join('') + '</div>';

    var soon = DE.levels.filter(function (l) { return l.status !== 'open'; });
    if (soon.length) {
      html += '<div class="soonbox"><b>Danach:</b> ' + soon.map(function (l) {
        return l.id + ' — ' + U.esc(l.blurb);
      }).join(' · ') + '<br><span class="small">Die Struktur steht schon. Neue Niveaus sind reine Inhaltsdateien: ' +
        '<code>content/a2/…</code> anlegen, in <code>content/registry.js</code> eintragen, fertig.</span></div>';
    }

    app.innerHTML = html;
    app.querySelector('[data-continue]').addEventListener('click', function () {
      var nextU = units.filter(function (u) { return DE.unitProgress(u.id) < 0.99; })[0] || units[0];
      DE.go('#/unit/' + nextU.id);
    });
    U.on(app, '[data-unit]', 'click', function (e, t) { DE.go('#/unit/' + t.dataset.unit); });
  });

  /* =========================================================== unit ==== */
  DE.route('unit', function (app, params) {
    var u = DE.unit(params[0]);
    if (!u) { app.innerHTML = '<div class="empty"><div class="e">🤷</div>Diese Einheit gibt es nicht.</div>'; return; }
    var st = DE.unitState(u.id);
    var p = DE.unitProgress(u.id);
    var resume = st.deck.slideIdx > 0 && !st.deck.done;

    app.innerHTML =
      '<button class="btn btn-ghost btn-sm" data-back style="margin-bottom:16px">← Alle Einheiten</button>' +
      '<section class="unit-hero">' +
      '<div class="eyebrow">' + u.level + ' · Einheit ' + u.num + '</div>' +
      '<h1>' + U.esc(u.title) + '</h1>' +
      '<div class="sub">' + U.esc(u.subtitle || '') + '</div>' +
      (u.can ? '<ul class="cando">' + u.can.map(function (c) { return '<li>' + U.esc(c) + '</li>'; }).join('') + '</ul>' : '') +
      '<div class="bar ' + (p >= 0.99 ? 'grn' : '') + '" style="margin-top:18px"><i style="width:' + pct(p) + '%"></i></div>' +
      '<div class="small muted" style="margin-top:7px">' + pct(p) + '% geschafft · ca. ' + (u.minutes || 35) + ' Minuten</div>' +
      '</section>' +
      '<div class="part-list">' +
      '<button class="part" data-deck>' +
      '<div class="part-ico">🎬</div><div><b>' + (resume ? 'Präsentation fortsetzen' : st.deck.done ? 'Präsentation nochmal ansehen' : 'Präsentation starten') + '</b>' +
      '<small>' + u.slides.length + ' Folien · Wortschatz, Dialog, Grammatik, Straßendeutsch' +
      (resume ? ' · bei Folie ' + Math.min(st.deck.slideIdx + 1, u.slides.length) : '') + '</small></div>' +
      '<div class="go">›</div></button>' +
      '<button class="part" data-quiz>' +
      '<div class="part-ico">✍️</div><div><b>Übungen</b><small>' + u.quiz.length + ' Aufgaben' +
      (st.quiz.best ? ' · Bestwert ' + st.quiz.best + '%' : '') + '</small></div><div class="go">›</div></button>' +
      '<button class="part" data-drillvocab>' +
      '<div class="part-ico">🎯</div><div><b>Nur die Wörter dieser Einheit</b><small>' + u.vocab.length + ' Karten, schnell durchgehen</small></div>' +
      '<div class="go">›</div></button>' +
      '</div>' +
      (u.vocab.length ? '<div class="sec-title">Wortschatz der Einheit <span>' + u.vocab.length + ' Wörter</span></div>' +
        '<div class="glist">' + u.vocab.map(function (v) {
          return '<div class="grow"><button class="spk" data-say="' + U.esc(v.de) + '">▶︎</button>' +
            '<div class="de">' + U.esc(v.de) + '</div><div class="en">' + U.esc(v.en) + '</div></div>';
        }).join('') + '</div>' : '');

    app.querySelector('[data-back]').addEventListener('click', function () { DE.go('#/'); });
    app.querySelector('[data-deck]').addEventListener('click', function () {
      DE.deck.open(u, st.deck.done ? 0 : Math.max(0, st.deck.slideIdx - 1));
    });
    app.querySelector('[data-quiz]').addEventListener('click', function () { DE.go('#/quiz/' + u.id); });
    app.querySelector('[data-drillvocab]').addEventListener('click', function () { DE.go('#/trainer/' + u.id); });
    DE.audio.bind(app);
  });

  /* =========================================================== quiz ==== */
  DE.route('quiz', function (app, params) {
    var u = DE.unit(params[0]);
    if (!u || !u.quiz.length) { app.innerHTML = '<div class="empty"><div class="e">🤷</div>Keine Übungen gefunden.</div>'; return; }
    app.innerHTML =
      '<button class="btn btn-ghost btn-sm" data-back style="margin-bottom:16px">← ' + U.esc(u.title) + '</button>' +
      '<div class="page-head"><div class="eyebrow">Übungen · Einheit ' + u.num + '</div><h1>' + U.esc(u.title) + '</h1></div>' +
      '<div class="card" data-host></div>';
    app.querySelector('[data-back]').addEventListener('click', function () { DE.go('#/unit/' + u.id); });
    var host = app.querySelector('[data-host]');
    DE.ex.runQuiz(host, U.shuffle(u.quiz), {
      onFinish: function (percent, right, total, foot) {
        var st = DE.unitState(u.id);
        if (percent > (st.quiz.best || 0)) st.quiz.best = percent;
        if (percent >= 80) st.quiz.done = true;
        DE.addXp(right * 3);
        DE.save();
        var b = U.el('button', 'btn btn-pri', 'Zurück zur Einheit');
        b.addEventListener('click', function () { DE.go('#/unit/' + u.id); });
        foot.appendChild(b);
      }
    });
  });

  /* ======================================================== trainer ==== */
  DE.route('trainer', function (app, params) {
    var scopeUnit = params[0] ? DE.unit(params[0]) : null;
    var pool = scopeUnit ? scopeUnit.vocab.slice() : DE.srs.due();
    var counts = DE.srs.counts();
    var knownN = DE.srs.known().length;

    if (!pool.length) {
      app.innerHTML =
        '<div class="page-head"><div class="eyebrow">Trainer</div><h1>Nichts fällig. Sauber.</h1>' +
        '<p>Alle Karten sitzen für heute. Neue Wörter kommen automatisch dazu, sobald du eine Wortschatz-Folie erreichst.</p></div>' +
        '<div class="btn-row"><a class="btn btn-pri" href="#/">Nächste Einheit</a>' +
        (knownN ? '<button class="btn btn-ghost" data-anyway>Trotzdem üben (' + knownN + ' Karten)</button>' : '') + '</div>' +
        boxesHtml(counts);
      var a = app.querySelector('[data-anyway]');
      if (a) a.addEventListener('click', function () { startTrainer(app, U.shuffle(DE.allVocab().filter(function (v) { return DE.srs.card(v.de); })), null); });
      return;
    }
    startTrainer(app, U.shuffle(pool), scopeUnit);
  });

  function boxesHtml(counts) {
    var labels = ['', 'neu/falsch', '1 Tag', '3 Tage', '1 Woche', '2+ Wochen', 'sitzt ✓'];
    return '<div class="boxes">' + counts.map(function (n, i) {
      if (!i) return '';
      return '<span class="boxpill">' + labels[i] + ': <b>' + n + '</b></span>';
    }).join('') + '</div>';
  }

  function startTrainer(app, pool, scopeUnit) {
    var i = 0, revealed = false, right = 0;
    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">Trainer' + (scopeUnit ? ' · ' + U.esc(scopeUnit.title) : ' · fällige Karten') + '</div>' +
      '<h1>Erst denken, dann umdrehen.</h1>' +
      '<p>Sag die Bedeutung laut, bevor du aufdeckst. Laut. Wirklich.</p></div>' +
      '<div class="quiz-head"><div class="bar"><i style="width:0%"></i></div><div class="n"></div></div>' +
      '<div data-card></div>' +
      '<div data-ctrl></div>' +
      boxesHtml(DE.srs.counts());
    var cardHost = app.querySelector('[data-card]');
    var ctrl = app.querySelector('[data-ctrl]');
    var bar = app.querySelector('.bar i'), n = app.querySelector('.n');

    function draw() {
      if (i >= pool.length) return done();
      var v = pool[i];
      revealed = false;
      bar.style.width = (i / pool.length * 100) + '%';
      n.textContent = (i + 1) + ' / ' + pool.length;
      cardHost.innerHTML =
        '<div class="flash">' +
        '<div class="fde">' + U.esc(v.de) + '</div>' +
        '<div class="fen" hidden data-en>' + U.esc(v.en) + '</div>' +
        (v.exDe ? '<div class="fex" hidden data-ex>' + U.esc(v.exDe) + '<i>' + U.esc(v.exEn || '') + '</i></div>' : '') +
        '<div class="btn-row" style="margin-top:18px">' +
        '<button class="btn btn-ghost btn-sm" data-say="' + U.esc(v.de) + '">▶︎ hören</button>' +
        '<a class="btn btn-ghost btn-sm" href="' + DE.audio.forvo(v.de) + '" target="_blank" rel="noopener">🗣 echte Stimme</a>' +
        '</div></div>';
      ctrl.innerHTML = '<div class="btn-row" style="margin-top:14px"><button class="btn btn-pri" data-flip style="flex:1">Umdrehen (Leertaste)</button></div>';
      ctrl.querySelector('[data-flip]').addEventListener('click', flip);
      DE.audio.bind(cardHost);
    }
    function flip() {
      if (revealed) return;
      revealed = true;
      var en = cardHost.querySelector('[data-en]'); if (en) en.hidden = false;
      var ex = cardHost.querySelector('[data-ex]'); if (ex) ex.hidden = false;
      ctrl.innerHTML =
        '<div class="grade">' +
        '<button class="btn g-again" data-g="again">Nochmal<small>heute wieder</small></button>' +
        '<button class="btn g-hard" data-g="hard">Schwer<small>morgen</small></button>' +
        '<button class="btn g-easy" data-g="easy">Sitzt<small>später</small></button>' +
        '</div>';
      U.on(ctrl, '[data-g]', 'click', function (e, t) { grade(t.dataset.g); });
    }
    function grade(g) {
      var v = pool[i];
      DE.srs.grade(v.de, g);
      if (g === 'easy') { right++; DE.addXp(2); }
      i++; draw();
    }
    function done() {
      bar.style.width = '100%';
      cardHost.innerHTML =
        '<div class="result"><div class="big">' + right + '/' + pool.length + '</div>' +
        '<h2>Runde durch.</h2><p>Die „Nochmal“-Karten kommen heute wieder. Der Rest ist eingeplant.</p></div>';
      ctrl.innerHTML = '<div class="btn-row"><a class="btn btn-pri" href="#/">Zum Kurs</a>' +
        '<button class="btn btn-ghost" data-again>↻ Nochmal</button></div>';
      ctrl.querySelector('[data-again]').addEventListener('click', function () {
        i = 0; right = 0; pool = U.shuffle(pool); draw();
      });
      DE.emit('stats');
    }
    function key(e) {
      if (e.code === 'Space') { e.preventDefault(); if (!revealed) flip(); }
      else if (revealed && e.key === '1') grade('again');
      else if (revealed && e.key === '2') grade('hard');
      else if (revealed && e.key === '3') grade('easy');
    }
    document.addEventListener('keydown', key);
    DE.on('route', function () { document.removeEventListener('keydown', key); });
    draw();
  }

  /* ======================================================== decoder ==== */
  DE.route('decoder', function (app) {
    var data = DE.decoder || { groups: [], items: [] };
    var active = 'alle', q = '';

    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">TikTok · Kommentare · Sprachnachrichten</div>' +
      '<h1>Der Decoder</h1>' +
      '<p>Das Deutsch aus den Kommentaren und aus dem Ton — die Wörter, die in keinem Lehrbuch stehen, ' +
      'aber in jedem zweiten Video vorkommen. Mit einer ehrlichen Angabe, wo du das sagen kannst und wo besser nicht.</p></div>' +
      '<input class="dsearch" placeholder="Suche: krass, hdf, Digga, ne?, 6-7 …" data-q>' +
      '<div class="dfilters" data-filters></div>' +
      '<div class="dgrid" data-grid></div>';

    var filters = app.querySelector('[data-filters]');
    filters.innerHTML = ['alle'].concat(data.groups).map(function (g) {
      return '<button class="chip' + (g === 'alle' ? ' gold' : '') + '" data-f="' + U.esc(g) + '">' + U.esc(g) + '</button>';
    }).join('');

    function draw() {
      var list = data.items.filter(function (it) {
        if (active !== 'alle' && it.group !== active) return false;
        if (!q) return true;
        var hay = (it.de + ' ' + it.en + ' ' + (it.use || '') + ' ' + (it.useEn || '') + ' ' + (it.lit || '')).toLowerCase();
        return hay.indexOf(q) > -1;
      });
      var grid = app.querySelector('[data-grid]');
      if (!list.length) { grid.innerHTML = '<div class="empty"><div class="e">🔍</div>Nichts gefunden.</div>'; return; }
      grid.innerHTML = list.map(function (it) {
        var risk = it.risk || 'ok';
        var riskLabel = risk === 'ok' ? 'überall ok' : risk === 'mid' ? 'nur unter Freunden' : 'heikel / vulgär';
        return '<div class="dcard">' +
          '<div class="top"><div class="de">' + U.esc(it.de) + '</div>' +
          '<button class="spk" data-say="' + U.esc(it.say || it.de) + '">▶︎</button></div>' +
          '<div class="en">' + U.esc(it.en) + '</div>' +
          (it.lit ? '<div class="small muted" style="margin-top:4px">wörtlich: ' + U.esc(it.lit) + '</div>' : '') +
          (it.use ? '<div class="use">„' + U.esc(it.use) + '“<i>' + U.esc(it.useEn || '') + '</i></div>' : '') +
          '<div class="meta"><span class="lvl-pill ' + risk + '">' + riskLabel + '</span>' +
          '<span class="chip">' + U.esc(it.group) + '</span></div></div>';
      }).join('');
      DE.audio.bind(grid);
    }
    app.querySelector('[data-q]').addEventListener('input', function () {
      q = this.value.toLowerCase().trim(); draw();
    });
    U.on(filters, '[data-f]', 'click', function (e, t) {
      active = t.dataset.f;
      filters.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('gold', c === t); });
      draw();
    });
    draw();
  });

  /* ======================================================== glossar ==== */
  DE.route('glossar', function (app) {
    var all = DE.allVocab().slice().sort(function (a, b) {
      return U.bare(a.de).localeCompare(U.bare(b.de), 'de');
    });
    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">Alle Wörter des Kurses</div><h1>Glossar</h1>' +
      '<p>Jedes Wort aus jeder Einheit, alphabetisch. Farbe = Artikel.</p></div>' +
      '<div class="gsearch-wrap"><input class="dsearch" placeholder="Wort suchen — deutsch oder englisch…" data-q></div>' +
      '<div class="gcount" data-count></div><div class="glist" data-list></div>';
    function draw(q) {
      var list = all.filter(function (v) {
        if (!q) return true;
        return (v.de + ' ' + v.en).toLowerCase().indexOf(q) > -1;
      });
      app.querySelector('[data-count]').textContent = list.length + ' Wörter';
      app.querySelector('[data-list]').innerHTML = list.map(function (v) {
        var a = U.article(v.de);
        var cls = a === 'der' ? 'g-der' : a === 'die' ? 'g-die' : a === 'das' ? 'g-das' : '';
        return '<div class="grow"><button class="spk" data-say="' + U.esc(v.de) + '">▶︎</button>' +
          '<div class="de ' + cls + '">' + U.esc(v.de) + '</div>' +
          '<div class="en">' + U.esc(v.en) + '</div>' +
          '<div class="u">E' + U.esc(String(v.unit).replace(/^a1-0?/, '')) + '</div></div>';
      }).join('');
      DE.audio.bind(app);
    }
    app.querySelector('[data-q]').addEventListener('input', function () { draw(this.value.toLowerCase().trim()); });
    draw('');
  });

  /* ============================================================ ich ==== */
  DE.route('ich', function (app) {
    var S = DE.state;
    var units = DE.units;
    var doneN = units.filter(function (u) { return DE.unitProgress(u.id) >= 0.99; }).length;
    var counts = DE.srs.counts();
    var solid = counts[5] + counts[6];
    var weak = DE.srs.weak(12);
    var days = Object.keys(S.days).length;

    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">Dein Stand</div><h1>Wo du stehst</h1>' +
      '<p>Keine geschönten Zahlen — das hier ist, was du tatsächlich angefasst hast.</p></div>' +
      '<div class="stats-grid">' +
      '<div class="sbox"><div class="n">' + S.streak + '</div><div class="l">Tage in Folge 🔥</div></div>' +
      '<div class="sbox"><div class="n">' + DE.srs.known().length + '</div><div class="l">Wörter angefangen</div></div>' +
      '<div class="sbox"><div class="n">' + solid + '</div><div class="l">Wörter sitzen</div></div>' +
      '<div class="sbox"><div class="n">' + doneN + '/' + units.length + '</div><div class="l">Einheiten fertig</div></div>' +
      '<div class="sbox"><div class="n">' + S.xp + '</div><div class="l">Punkte ⚡</div></div>' +
      '<div class="sbox"><div class="n">' + days + '</div><div class="l">aktive Tage</div></div>' +
      '</div>' +
      boxesHtml(counts) +
      (weak.length ? '<div class="sec-title">Deine Wackelkandidaten <span>die, die du immer wieder verhaust</span></div>' +
        '<div class="glist">' + weak.map(function (v) {
          var c = DE.srs.card(v.de);
          return '<div class="grow"><button class="spk" data-say="' + U.esc(v.de) + '">▶︎</button>' +
            '<div class="de">' + U.esc(v.de) + '</div><div class="en">' + U.esc(v.en) + '</div>' +
            '<div class="u">' + c.wrong + '× falsch</div></div>';
        }).join('') + '</div>' : '') +
      '<div class="sec-title">Dein Tag, 35 Minuten <span>die Reihenfolge ist Absicht</span></div>' +
      '<div class="plan">' +
      plan('0–6', 'Trainer zuerst', 'Fällige Karten wegarbeiten, solange der Kopf frisch ist.') +
      plan('6–24', 'Eine Präsentation', 'Eine Einheit durchgehen. Alles laut mitsprechen, nicht nur lesen.') +
      plan('24–32', 'Übungen', 'Die Aufgaben der Einheit. Unter 80 % heißt: nochmal.') +
      plan('32–35', 'Decoder + ein Satz', 'Drei Einträge im Decoder lesen. Dann einen echten Satz über deinen Tag schreiben.') +
      '</div>' +
      '<div class="btn-row" style="margin-top:24px"><button class="btn btn-ghost btn-sm" data-reset>Fortschritt löschen</button></div>';

    function plan(t, b, s) {
      return '<div class="pstep"><div class="t">' + t + '</div><div><b>' + b + '</b><small>' + s + '</small></div></div>';
    }
    app.querySelector('[data-reset]').addEventListener('click', function () {
      if (confirm('Wirklich alles zurücksetzen? Fortschritt, Wörter, Punkte — weg.')) DE.reset();
    });
    DE.audio.bind(app);
  });
})();
