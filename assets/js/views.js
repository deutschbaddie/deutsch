/* ==========================================================================
   views.js — every screen in the app
   The interface speaks English. German appears only where German is the
   thing being learned.
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
      '<div class="eyebrow">Your course · Level ' + openLevel + '</div>' +
      '<h1>Right. Let’s build some German.</h1>' +
      '<p>' + units.length + ' units, ' + DE.allVocab().length + ' words, slide lessons with audio, ' +
      'street German in every unit — and a decoder for the German you actually meet on TikTok. ' +
      'Everything is explained in English; German is what you’re learning, not what you have to fight through.</p>' +
      '<div class="hero-row">' +
      '<button class="btn btn-pri" data-continue>' + (done ? '▶︎ Continue' : '▶︎ Start unit 1') + '</button>' +
      (dueCount ? '<a class="btn btn-ghost" href="#/trainer">🎯 ' + dueCount + ' words due</a>' : '') +
      '<a class="btn btn-ghost" href="#/decoder">📱 TikTok decoder</a>' +
      '</div></section>';

    html += '<div class="levels">' + DE.levels.map(function (l) {
      return '<button class="lvl ' + (l.id === openLevel ? 'on' : 'soon') + '" ' +
        (l.status === 'open' ? '' : 'disabled') + '>' + U.esc(l.id) +
        '<small>' + (l.status === 'open' ? DE.levelUnits(l.id).length + ' units' : 'coming later') +
        '</small></button>';
    }).join('') + '</div>';

    html += '<div class="sec-title">Units <span>' + done + ' of ' + units.length + ' finished</span></div>';
    html += '<div class="units">' + units.map(function (u) {
      var p = DE.unitProgress(u.id);
      var cls = p >= 0.99 ? 'done' : p > 0 ? 'started' : '';
      return '<button class="unit ' + cls + '" data-unit="' + u.id + '">' +
        '<div class="unit-num">' + (p >= 0.99 ? '✓' : u.num) + '</div>' +
        '<div class="unit-body">' +
        '<h3>' + U.esc(u.title) + '</h3>' +
        '<div class="de">' + U.esc(u.subtitle || '') + '</div>' +
        '<div class="unit-meta">' +
        '<span class="tag">' + u.slides.length + ' slides</span>' +
        '<span class="tag">' + u.vocab.length + ' words</span>' +
        '<span class="tag">' + u.quiz.length + ' questions</span>' +
        '</div>' +
        '<div class="bar ' + (p >= 0.99 ? 'grn' : '') + '"><i style="width:' + pct(p) + '%"></i></div>' +
        '</div></button>';
    }).join('') + '</div>';

    var soon = DE.levels.filter(function (l) { return l.status !== 'open'; });
    if (soon.length) {
      html += '<div class="soonbox"><b>After that:</b> ' + soon.map(function (l) {
        return l.id + ' — ' + U.esc(l.blurb);
      }).join(' · ') + '<br><span class="small">The structure is already here. A new level is just content files: ' +
        'add <code>content/a2/…</code>, list it in <code>content/registry.js</code>, done.</span></div>';
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
    if (!u) { app.innerHTML = '<div class="empty"><div class="e">🤷</div>No such unit.</div>'; return; }
    var st = DE.unitState(u.id);
    var p = DE.unitProgress(u.id);
    var resume = st.deck.slideIdx > 0 && !st.deck.done;

    app.innerHTML =
      '<button class="btn btn-ghost btn-sm" data-back style="margin-bottom:16px">← All units</button>' +
      '<section class="unit-hero">' +
      '<div class="eyebrow">' + u.level + ' · Unit ' + u.num + '</div>' +
      '<h1>' + U.esc(u.title) + '</h1>' +
      '<div class="sub">' + U.esc(u.subtitle || '') + '</div>' +
      (u.can ? '<ul class="cando">' + u.can.map(function (c) { return '<li>' + U.esc(c) + '</li>'; }).join('') + '</ul>' : '') +
      '<div class="bar ' + (p >= 0.99 ? 'grn' : '') + '" style="margin-top:18px"><i style="width:' + pct(p) + '%"></i></div>' +
      '<div class="small muted" style="margin-top:7px">' + pct(p) + '% done · about ' + (u.minutes || 35) + ' minutes</div>' +
      '</section>' +
      '<div class="part-list">' +
      '<button class="part" data-deck>' +
      '<div class="part-ico">🎬</div><div><b>' +
      (resume ? 'Resume the lesson' : st.deck.done ? 'Watch the lesson again' : 'Start the lesson') + '</b>' +
      '<small>' + u.slides.length + ' slides · words, dialogue, grammar, street German' +
      (resume ? ' · you were on slide ' + Math.min(st.deck.slideIdx + 1, u.slides.length) : '') + '</small></div>' +
      '<div class="go">›</div></button>' +
      '<button class="part" data-quiz>' +
      '<div class="part-ico">✍️</div><div><b>Practice</b><small>' + u.quiz.length + ' questions' +
      (st.quiz.best ? ' · best so far ' + st.quiz.best + '%' : '') + '</small></div><div class="go">›</div></button>' +
      '<button class="part" data-drillvocab>' +
      '<div class="part-ico">🎯</div><div><b>Just this unit’s words</b><small>' + u.vocab.length +
      ' cards, quick run-through</small></div>' +
      '<div class="go">›</div></button>' +
      '</div>' +
      (u.vocab.length ? '<div class="sec-title">Words in this unit <span>' + u.vocab.length + '</span></div>' +
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
    if (!u || !u.quiz.length) { app.innerHTML = '<div class="empty"><div class="e">🤷</div>No questions here.</div>'; return; }
    app.innerHTML =
      '<button class="btn btn-ghost btn-sm" data-back style="margin-bottom:16px">← ' + U.esc(u.title) + '</button>' +
      '<div class="page-head"><div class="eyebrow">Practice · Unit ' + u.num + '</div><h1>' + U.esc(u.title) + '</h1></div>' +
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
        var b = U.el('button', 'btn btn-pri', 'Back to the unit');
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
        '<div class="page-head"><div class="eyebrow">Drill</div><h1>Nothing due. Good.</h1>' +
        '<p>Every card has settled for today. New words join automatically as soon as you reach a ' +
        'word slide in a lesson.</p></div>' +
        '<div class="btn-row"><a class="btn btn-pri" href="#/">Next unit</a>' +
        (knownN ? '<button class="btn btn-ghost" data-anyway>Drill anyway (' + knownN + ' cards)</button>' : '') + '</div>' +
        boxesHtml(counts);
      var a = app.querySelector('[data-anyway]');
      if (a) a.addEventListener('click', function () {
        startTrainer(app, U.shuffle(DE.allVocab().filter(function (v) { return DE.srs.card(v.de); })), null);
      });
      return;
    }
    startTrainer(app, U.shuffle(pool), scopeUnit);
  });

  function boxesHtml(counts) {
    var labels = ['', 'new / got it wrong', 'due in 1 day', 'in 3 days', 'in a week', 'in 2+ weeks', 'it sticks ✓'];
    return '<div class="boxes">' + counts.map(function (n, i) {
      if (!i) return '';
      return '<span class="boxpill">' + labels[i] + ': <b>' + n + '</b></span>';
    }).join('') + '</div>';
  }

  function startTrainer(app, pool, scopeUnit) {
    var i = 0, revealed = false, right = 0;
    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">Drill' + (scopeUnit ? ' · ' + U.esc(scopeUnit.title) : ' · cards due today') + '</div>' +
      '<h1>Think first, then flip.</h1>' +
      '<p>Say the meaning out loud before you turn the card over. Out loud. Actually.</p></div>' +
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
        '<button class="btn btn-ghost btn-sm" data-say="' + U.esc(v.de) + '">▶︎ play</button>' +
        '<a class="btn btn-ghost btn-sm" href="' + DE.audio.forvo(v.de) + '" target="_blank" rel="noopener">🗣 real voice</a>' +
        '</div></div>';
      ctrl.innerHTML = '<div class="btn-row" style="margin-top:14px">' +
        '<button class="btn btn-pri" data-flip style="flex:1">Flip (space)</button></div>';
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
        '<button class="btn g-again" data-g="again">Missed it<small>comes back today</small></button>' +
        '<button class="btn g-hard" data-g="hard">Shaky<small>tomorrow</small></button>' +
        '<button class="btn g-easy" data-g="easy">Got it<small>later on</small></button>' +
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
        '<h2>Round done.</h2><p>The ones you missed come back today. The rest are scheduled.</p></div>';
      ctrl.innerHTML = '<div class="btn-row"><a class="btn btn-pri" href="#/">Back to the course</a>' +
        '<button class="btn btn-ghost" data-again>↻ Again</button></div>';
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
    var active = 'all', q = '';

    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">TikTok · comments · voice notes</div>' +
      '<h1>The Decoder</h1>' +
      '<p>The German in the comments and in the audio — the words no textbook prints, but that ' +
      'turn up in every other video. Each one says plainly who you can say it to, and who you can’t.</p></div>' +
      '<input class="dsearch" placeholder="Search: krass, hdf, Digga, ne?, 6-7 …" data-q>' +
      '<div class="dfilters" data-filters></div>' +
      '<div class="dgrid" data-grid></div>';

    var filters = app.querySelector('[data-filters]');
    filters.innerHTML = ['all'].concat(data.groups).map(function (g) {
      return '<button class="chip' + (g === 'all' ? ' gold' : '') + '" data-f="' + U.esc(g) + '">' + U.esc(g) + '</button>';
    }).join('');

    function draw() {
      var list = data.items.filter(function (it) {
        if (active !== 'all' && it.group !== active) return false;
        if (!q) return true;
        var hay = (it.de + ' ' + it.en + ' ' + (it.use || '') + ' ' + (it.useEn || '') + ' ' + (it.lit || '')).toLowerCase();
        return hay.indexOf(q) > -1;
      });
      var grid = app.querySelector('[data-grid]');
      if (!list.length) { grid.innerHTML = '<div class="empty"><div class="e">🔍</div>Nothing found.</div>'; return; }
      grid.innerHTML = list.map(function (it) {
        var risk = it.risk || 'ok';
        var riskLabel = risk === 'ok' ? 'safe anywhere' : risk === 'mid' ? 'friends only' : 'understand, don’t say';
        return '<div class="dcard">' +
          '<div class="top"><div class="de">' + U.esc(it.de) + '</div>' +
          '<button class="spk" data-say="' + U.esc(it.say || it.de) + '">▶︎</button></div>' +
          '<div class="en">' + U.esc(it.en) + '</div>' +
          (it.lit ? '<div class="small muted" style="margin-top:4px">literally: ' + U.esc(it.lit) + '</div>' : '') +
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

  /* ======================================================== glossary ==== */
  DE.route('glossar', function (app) {
    var all = DE.allVocab().slice().sort(function (a, b) {
      return U.bare(a.de).localeCompare(U.bare(b.de), 'de');
    });
    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">Every word in the course</div><h1>Word list</h1>' +
      '<p>All of it, A to Z. The colour is the gender: ' +
      '<span class="g-der">der</span> · <span class="g-die">die</span> · <span class="g-das">das</span>.</p></div>' +
      '<div class="gsearch-wrap"><input class="dsearch" placeholder="Search — German or English…" data-q></div>' +
      '<div class="gcount" data-count></div><div class="glist" data-list></div>';
    function draw(q) {
      var list = all.filter(function (v) {
        if (!q) return true;
        return (v.de + ' ' + v.en).toLowerCase().indexOf(q) > -1;
      });
      app.querySelector('[data-count]').textContent = list.length + ' words';
      app.querySelector('[data-list]').innerHTML = list.map(function (v) {
        var a = U.article(v.de);
        var cls = a === 'der' ? 'g-der' : a === 'die' ? 'g-die' : a === 'das' ? 'g-das' : '';
        return '<div class="grow"><button class="spk" data-say="' + U.esc(v.de) + '">▶︎</button>' +
          '<div class="de ' + cls + '">' + U.esc(v.de) + '</div>' +
          '<div class="en">' + U.esc(v.en) + '</div>' +
          '<div class="u">U' + U.esc(String(v.unit).replace(/^a1-0?/, '')) + '</div></div>';
      }).join('');
      DE.audio.bind(app);
    }
    app.querySelector('[data-q]').addEventListener('input', function () { draw(this.value.toLowerCase().trim()); });
    draw('');
  });

  /* ============================================================= me ==== */
  DE.route('ich', function (app) {
    var S = DE.state;
    var units = DE.units;
    var doneN = units.filter(function (u) { return DE.unitProgress(u.id) >= 0.99; }).length;
    var counts = DE.srs.counts();
    var solid = counts[5] + counts[6];
    var weak = DE.srs.weak(12);
    var days = Object.keys(S.days).length;

    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">Where you actually are</div><h1>Your progress</h1>' +
      '<p>No flattering numbers — this is what you have genuinely touched.</p></div>' +
      '<div class="stats-grid">' +
      '<div class="sbox"><div class="n">' + S.streak + '</div><div class="l">day streak 🔥</div></div>' +
      '<div class="sbox"><div class="n">' + DE.srs.known().length + '</div><div class="l">words started</div></div>' +
      '<div class="sbox"><div class="n">' + solid + '</div><div class="l">words that stick</div></div>' +
      '<div class="sbox"><div class="n">' + doneN + '/' + units.length + '</div><div class="l">units finished</div></div>' +
      '<div class="sbox"><div class="n">' + S.xp + '</div><div class="l">points ⚡</div></div>' +
      '<div class="sbox"><div class="n">' + days + '</div><div class="l">active days</div></div>' +
      '</div>' +
      boxesHtml(counts) +
      (weak.length ? '<div class="sec-title">Your problem words <span>the ones you keep getting wrong</span></div>' +
        '<div class="glist">' + weak.map(function (v) {
          var c = DE.srs.card(v.de);
          return '<div class="grow"><button class="spk" data-say="' + U.esc(v.de) + '">▶︎</button>' +
            '<div class="de">' + U.esc(v.de) + '</div><div class="en">' + U.esc(v.en) + '</div>' +
            '<div class="u">missed ' + c.wrong + '×</div></div>';
        }).join('') + '</div>' : '') +
      '<div class="sec-title">Your 35 minutes <span>the order is deliberate</span></div>' +
      '<div class="plan">' +
      plan('0–6', 'Drill first', 'Clear the cards that are due while your head is fresh.') +
      plan('6–24', 'One lesson', 'Work through a unit. Say everything out loud, don’t just read it.') +
      plan('24–32', 'Practice', 'The unit’s questions. Under 80% means: go again.') +
      plan('32–35', 'Decoder + one sentence', 'Read three decoder entries. Then write one real sentence about your day.') +
      '</div>' +
      '<div class="btn-row" style="margin-top:24px"><button class="btn btn-ghost btn-sm" data-reset>Erase my progress</button></div>';

    function plan(t, b, s) {
      return '<div class="pstep"><div class="t">' + t + '</div><div><b>' + b + '</b><small>' + s + '</small></div></div>';
    }
    app.querySelector('[data-reset]').addEventListener('click', function () {
      if (confirm('Erase everything? Progress, words, points — all of it.')) DE.reset();
    });
    DE.audio.bind(app);
  });
})();
