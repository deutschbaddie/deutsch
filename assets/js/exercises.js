/* ==========================================================================
   exercises.js — one renderer per exercise kind + a quiz runner
   Kinds:
     choice  {k:'choice', q, opts:[], a:idx, why?}
     fill    {k:'fill',   q:'Ich ___ Anna.', a:['heiße'], en?, why?}
     order   {k:'order',  en:'I am 17.', words:[...], a:'Ich bin 17.'}
     match   {k:'match',  pairs:[[de,en],...]}
     listen  {k:'listen', de:'Wie geht es dir?', a:[...], en?}
     trans   {k:'trans',  en:'My name is Max.', a:['Ich heiße Max.'], hint?}
   ========================================================================== */
(function () {
  'use strict';
  var DE = window.DE, U = DE.util, X = DE.ex = {};
  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function fbBox(ok, msg, sol) {
    var h = '<b>' + (ok ? 'Richtig! ✓' : 'Noch nicht ✗') + '</b>';
    if (!ok && sol) h += '<div>Richtig wäre: <span class="sol">' + U.esc(sol) + '</span></div>';
    if (msg) h += '<div class="small" style="margin-top:6px;opacity:.9">' + U.rich(msg) + '</div>';
    return '<div class="fb ' + (ok ? 'ok' : 'no') + '">' + h + '</div>';
  }

  function umlautBar(input) {
    var bar = U.el('div', 'umlauts');
    ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].forEach(function (ch) {
      var b = U.el('button', null, ch);
      b.type = 'button';
      b.addEventListener('click', function () {
        var s = input.selectionStart == null ? input.value.length : input.selectionStart;
        input.value = input.value.slice(0, s) + ch + input.value.slice(input.selectionEnd);
        input.focus();
        input.setSelectionRange(s + 1, s + 1);
      });
      bar.appendChild(b);
    });
    return bar;
  }

  /**
   * Render one exercise into `host`.
   * opts.onDone(correct) fires once, after the learner has committed.
   */
  X.render = function (host, ex, opts) {
    opts = opts || {};
    host.innerHTML = '';
    var wrap = U.el('div', 'ex');
    host.appendChild(wrap);
    var settled = false;
    function settle(ok, sol, why) {
      if (settled) return;
      settled = true;
      wrap.insertAdjacentHTML('beforeend', fbBox(ok, why || ex.why, sol));
      if (opts.onDone) opts.onDone(ok);
    }
    (X['r_' + ex.k] || X.r_choice)(wrap, ex, settle, opts);
    DE.audio.bind(wrap);
    return wrap;
  };

  /* ------------------------------------------------------------- choice */
  X.r_choice = function (wrap, ex, settle) {
    wrap.insertAdjacentHTML('beforeend',
      '<div class="ex-q">' + U.rich(ex.q) + '</div>' +
      (ex.sub ? '<div class="ex-sub">' + U.rich(ex.sub) + '</div>' : ''));
    var box = U.el('div', 'opts');
    ex.opts.forEach(function (o, i) {
      var b = U.el('button', 'opt', '<span class="k">' + LETTERS[i] + '</span><span>' + U.rich(o) + '</span>');
      b.addEventListener('click', function () {
        if (box.classList.contains('done')) return;
        box.classList.add('done');
        box.querySelectorAll('.opt').forEach(function (n, j) {
          n.classList.add('locked');
          if (j === ex.a) n.classList.add('ok');
          else if (j === i) n.classList.add('no');
        });
        settle(i === ex.a, ex.opts[ex.a]);
      });
      box.appendChild(b);
    });
    wrap.appendChild(box);
  };

  /* --------------------------------------------------------------- fill */
  X.r_fill = function (wrap, ex, settle) {
    var qHtml = U.rich(ex.q).replace(/_{2,}/g, '<u style="color:var(--acc)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>');
    wrap.insertAdjacentHTML('beforeend',
      '<div class="ex-q">' + qHtml + '</div>' +
      (ex.en ? '<div class="ex-sub">' + U.esc(ex.en) + '</div>' : ''));
    var inp = U.el('input', 'inp');
    inp.type = 'text';
    inp.autocapitalize = 'off';
    inp.autocomplete = 'off';
    inp.spellcheck = false;
    inp.placeholder = ex.hint || 'Antwort eintippen…';
    wrap.appendChild(inp);
    wrap.appendChild(umlautBar(inp));
    var btn = U.el('button', 'btn btn-pri btn-sm', 'Prüfen');
    btn.setAttribute('data-check', '');
    btn.style.marginTop = '12px';
    wrap.appendChild(btn);
    function check() {
      if (btn.disabled) return;
      var ok = U.matches(inp.value, ex.a);
      inp.classList.add(ok ? 'ok' : 'no');
      inp.disabled = true; btn.disabled = true;
      settle(ok, ex.a[0]);
    }
    btn.addEventListener('click', check);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    setTimeout(function () { inp.focus(); }, 60);
  };

  /* -------------------------------------------------------------- trans */
  X.r_trans = function (wrap, ex, settle) {
    wrap.insertAdjacentHTML('beforeend',
      '<div class="ex-q">Sag das auf Deutsch:</div>' +
      '<div class="ex-sub" style="font-size:16px;color:var(--ink)">„' + U.esc(ex.en) + '“</div>');
    var inp = U.el('input', 'inp');
    inp.type = 'text'; inp.autocapitalize = 'sentences'; inp.autocomplete = 'off'; inp.spellcheck = false;
    inp.placeholder = ex.hint || 'Ganzer Satz…';
    wrap.appendChild(inp);
    wrap.appendChild(umlautBar(inp));
    var btn = U.el('button', 'btn btn-pri btn-sm', 'Prüfen');
    btn.setAttribute('data-check', '');
    btn.style.marginTop = '12px';
    wrap.appendChild(btn);
    function check() {
      if (btn.disabled) return;
      var ok = U.matches(inp.value, ex.a);
      inp.classList.add(ok ? 'ok' : 'no');
      inp.disabled = true; btn.disabled = true;
      settle(ok, ex.a[0]);
    }
    btn.addEventListener('click', check);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    setTimeout(function () { inp.focus(); }, 60);
  };

  /* ------------------------------------------------------------- listen */
  X.r_listen = function (wrap, ex, settle) {
    wrap.insertAdjacentHTML('beforeend',
      '<div class="ex-q">Hör zu und tipp, was du hörst.</div>' +
      '<div class="ex-sub">So oft abspielen wie du willst. Langsam ist erlaubt.</div>');
    var row = U.el('div', 'btn-row');
    var b1 = U.el('button', 'btn btn-ghost btn-sm', '▶︎ Abspielen');
    var b2 = U.el('button', 'btn btn-ghost btn-sm', '🐢 Langsam');
    b1.addEventListener('click', function () { DE.audio.say(ex.de); });
    b2.addEventListener('click', function () { DE.audio.say(ex.de, 0.55); });
    row.appendChild(b1); row.appendChild(b2);
    wrap.appendChild(row);
    var inp = U.el('input', 'inp');
    inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false;
    inp.placeholder = 'Was hast du gehört?';
    inp.style.marginTop = '12px';
    wrap.appendChild(inp);
    wrap.appendChild(umlautBar(inp));
    var btn = U.el('button', 'btn btn-pri btn-sm', 'Prüfen');
    btn.setAttribute('data-check', '');
    btn.style.marginTop = '12px';
    wrap.appendChild(btn);
    function check() {
      if (btn.disabled) return;
      var accepted = ex.a && ex.a.length ? ex.a : [ex.de];
      var ok = U.matches(inp.value, accepted);
      inp.classList.add(ok ? 'ok' : 'no');
      inp.disabled = true; btn.disabled = true;
      settle(ok, ex.de, ex.en ? '„' + ex.de + '“ = ' + ex.en : '');
    }
    btn.addEventListener('click', check);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    setTimeout(function () { DE.audio.say(ex.de); }, 250);
  };

  /* -------------------------------------------------------------- order */
  X.r_order = function (wrap, ex, settle) {
    wrap.insertAdjacentHTML('beforeend',
      '<div class="ex-q">Bau den Satz.</div>' +
      '<div class="ex-sub">' + U.esc(ex.en) + '</div>');
    var build = U.el('div', 'build');
    wrap.appendChild(build);
    var bank = U.el('div', 'wordbank');
    wrap.appendChild(bank);
    var chosen = [];
    U.shuffle(ex.words).forEach(function (w, i) {
      var t = U.el('button', 'wtok', U.esc(w));
      t.dataset.w = w; t.dataset.i = i;
      t.addEventListener('click', function () {
        if (build.classList.contains('done')) return;
        t.classList.add('used');
        chosen.push({ w: w, src: t });
        var c = U.el('button', 'wtok', U.esc(w));
        c.addEventListener('click', function () {
          if (build.classList.contains('done')) return;
          t.classList.remove('used');
          chosen = chosen.filter(function (x) { return x.src !== t; });
          c.remove();
        });
        build.appendChild(c);
      });
      bank.appendChild(t);
    });
    var btn = U.el('button', 'btn btn-pri btn-sm', 'Prüfen');
    btn.setAttribute('data-check', '');
    btn.style.marginTop = '12px';
    wrap.appendChild(btn);
    btn.addEventListener('click', function () {
      if (btn.disabled) return;
      var got = chosen.map(function (x) { return x.w; }).join(' ');
      var ok = U.norm(got) === U.norm(ex.a);
      build.classList.add('done', ok ? 'ok' : 'no');
      btn.disabled = true;
      settle(ok, ex.a);
    });
  };

  /* -------------------------------------------------------------- match */
  X.r_match = function (wrap, ex, settle) {
    wrap.insertAdjacentHTML('beforeend',
      '<div class="ex-q">' + U.rich(ex.q || 'Was passt zusammen?') + '</div>' +
      '<div class="ex-sub">Erst Deutsch antippen, dann die Übersetzung.</div>');
    var grid = U.el('div', 'matchgrid');
    wrap.appendChild(grid);
    var left = U.shuffle(ex.pairs.map(function (p, i) { return { t: p[0], i: i }; }));
    var right = U.shuffle(ex.pairs.map(function (p, i) { return { t: p[1], i: i }; }));
    var colL = U.el('div', 'opts'), colR = U.el('div', 'opts');
    grid.appendChild(colL); grid.appendChild(colR);
    var sel = null, hits = 0, misses = 0;
    function mk(item, col, side) {
      var b = U.el('button', 'opt', '<span>' + U.esc(item.t) + '</span>');
      b.dataset.i = item.i;
      b.addEventListener('click', function () {
        if (b.classList.contains('gone')) return;
        if (side === 'L') {
          colL.querySelectorAll('.sel').forEach(function (n) { n.classList.remove('sel'); });
          b.classList.add('sel'); sel = b;
          return;
        }
        if (!sel) { DE.toast('Erst ein deutsches Wort wählen.'); return; }
        if (sel.dataset.i === b.dataset.i) {
          sel.classList.add('gone'); b.classList.add('gone');
          sel.classList.remove('sel'); sel = null; hits++;
          if (hits === ex.pairs.length) settle(misses === 0, null,
            misses === 0 ? '' : 'Du hattest ' + misses + ' Fehlversuch(e) — schau dir die Paare nochmal an.');
        } else {
          misses++;
          b.classList.add('no');
          setTimeout(function () { b.classList.remove('no'); }, 450);
        }
      });
      col.appendChild(b);
    }
    left.forEach(function (i) { mk(i, colL, 'L'); });
    right.forEach(function (i) { mk(i, colR, 'R'); });
  };

  /* --------------------------------------------------------- quiz runner */
  /**
   * Run a list of exercises one at a time with a progress bar and a result
   * screen. opts.onFinish(percent, right, total).
   */
  X.runQuiz = function (host, list, opts) {
    opts = opts || {};
    var i = 0, right = 0;
    var head = U.el('div', 'quiz-head',
      '<div class="bar"><i style="width:0%"></i></div><div class="n"></div>');
    var body = U.el('div');
    var foot = U.el('div', 'btn-row');
    foot.style.marginTop = '16px';
    host.appendChild(head); host.appendChild(body); host.appendChild(foot);

    function step() {
      foot.innerHTML = '';
      head.querySelector('.bar i').style.width = (i / list.length * 100) + '%';
      head.querySelector('.n').textContent = Math.min(i + 1, list.length) + ' / ' + list.length;
      if (i >= list.length) return finish();
      X.render(body, list[i], {
        onDone: function (ok) {
          if (ok) right++;
          var b = U.el('button', 'btn btn-pri', i === list.length - 1 ? 'Ergebnis ansehen' : 'Weiter →');
          b.addEventListener('click', function () { i++; step(); });
          foot.appendChild(b);
          setTimeout(function () { b.focus(); }, 40);
        }
      });
    }
    function finish() {
      head.querySelector('.bar i').style.width = '100%';
      var pct = Math.round(right / list.length * 100);
      body.innerHTML =
        '<div class="result">' +
        '<div class="ring" style="--p:' + pct + ';position:relative"><b>' + pct + '%</b></div>' +
        '<h2>' + (pct >= 80 ? 'Stark!' : pct >= 55 ? 'Solide.' : 'Nochmal.') + '</h2>' +
        '<p>' + right + ' von ' + list.length + ' richtig.' +
        (pct >= 80 ? ' Das sitzt.' : pct >= 55 ? ' Fast — eine Runde noch.' : ' Geh die Folien nochmal durch, dann klappt das.') +
        '</p></div>';
      var again = U.el('button', 'btn btn-ghost', '↻ Nochmal');
      again.addEventListener('click', function () { i = 0; right = 0; step(); });
      foot.appendChild(again);
      if (opts.onFinish) opts.onFinish(pct, right, list.length, foot);
    }
    step();
  };
})();
