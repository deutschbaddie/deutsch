/* tests/smoke.js — end-to-end Browsertest.  npm test  */
const { chromium } = require('playwright-core');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT=path.resolve(__dirname,'..');
const MIME={'.html':'text/html','.js':'text/javascript','.css':'text/css',
 '.webmanifest':'application/manifest+json','.json':'application/json','.png':'image/png'};
const srv=http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p==='/')p='/index.html';
 const f=path.join(ROOT,p); if(!fs.existsSync(f)){r.writeHead(404);return r.end();}
 r.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'text/plain'}); r.end(fs.readFileSync(f));});
const out=process.argv[2]||require('os').tmpdir();
let FAILED=0;
(async()=>{
 await new Promise(r=>srv.listen(8098,r));
 const b=await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined,args:['--no-sandbox']});
 const page=await b.newPage({viewport:{width:1200,height:900}});
 const errs=[]; page.on('pageerror',e=>errs.push('PAGEERROR: '+e.message));
 page.on('console',m=>{if(m.type()==='error'&&!/CERT|favicon/i.test(m.text()))errs.push('CONSOLE: '+m.text());});
 const ok=(n,c)=>{ if(!c) FAILED++; console.log((c?'PASS':'FAIL')+' — '+n); };

 await page.goto('http://localhost:8098/',{waitUntil:'networkidle'});
 await page.waitForTimeout(900);

 // ---- exercise engine: drive each kind through DE.ex.render directly + via DOM
 await page.goto('http://localhost:8098/#/quiz/a1-01'); await page.waitForTimeout(500);

 // CHOICE: click the known-correct option, expect green feedback
 const kind = await page.evaluate(()=>{
   // force a deterministic quiz: render one of each kind into the host
   const host=document.querySelector('[data-host]'); host.innerHTML='';
   window.__res=[];
   return 'ready';
 });
 // choice, right answer
 await page.evaluate(()=>{
   const h=document.querySelector('[data-host]');
   DE.ex.render(h,{k:'choice',q:'Test',opts:['a','b','c'],a:1},{onDone:ok=>window.__res.push(['choice-right',ok])});
 });
 await page.click('.opts .opt:nth-child(2)'); await page.waitForTimeout(150);
 // choice, wrong answer
 await page.evaluate(()=>{
   const h=document.querySelector('[data-host]');
   DE.ex.render(h,{k:'choice',q:'Test',opts:['a','b','c'],a:1},{onDone:ok=>window.__res.push(['choice-wrong',ok])});
 });
 await page.click('.opts .opt:nth-child(1)'); await page.waitForTimeout(150);

 // FILL with umlaut typed as 'ss'/'ae' variants
 await page.evaluate(()=>{const h=document.querySelector('[data-host]');
   DE.ex.render(h,{k:'fill',q:'Ich ___ Emerson.',a:['heiße']},{onDone:ok=>window.__res.push(['fill-umlaut-variant',ok])});});
 await page.fill('.inp','heisse'); await page.click('.ex [data-check]'); await page.waitForTimeout(150);

 // FILL wrong
 await page.evaluate(()=>{const h=document.querySelector('[data-host]');
   DE.ex.render(h,{k:'fill',q:'Ich ___ Emerson.',a:['heiße']},{onDone:ok=>window.__res.push(['fill-wrong',ok])});});
 await page.fill('.inp','bin'); await page.click('.ex [data-check]'); await page.waitForTimeout(150);

 // FILL case + trailing period tolerance
 await page.evaluate(()=>{const h=document.querySelector('[data-host]');
   DE.ex.render(h,{k:'fill',q:'x',a:['Mir']},{onDone:ok=>window.__res.push(['fill-case-punct',ok])});});
 await page.fill('.inp','mir.'); await page.click('.ex [data-check]'); await page.waitForTimeout(150);

 // ORDER: build correct sentence
 await page.evaluate(()=>{const h=document.querySelector('[data-host]');
   DE.ex.render(h,{k:'order',en:'test',words:['Wo','wohnst','du'],a:'Wo wohnst du'},{onDone:ok=>window.__res.push(['order-right',ok])});});
 for (const w of ['Wo','wohnst','du']) await page.click(`.wordbank .wtok[data-w="${w}"]`);
 await page.click('.ex [data-check]'); await page.waitForTimeout(150);

 // ORDER: remove a token from the build area then rebuild wrong
 await page.evaluate(()=>{const h=document.querySelector('[data-host]');
   DE.ex.render(h,{k:'order',en:'test',words:['Wo','wohnst','du'],a:'Wo wohnst du'},{onDone:ok=>window.__res.push(['order-wrong',ok])});});
 for (const w of ['du','Wo','wohnst']) await page.click(`.wordbank .wtok[data-w="${w}"]`);
 await page.click('.ex [data-check]'); await page.waitForTimeout(150);

 // MATCH: all correct pairs
 await page.evaluate(()=>{const h=document.querySelector('[data-host]');
   DE.ex.render(h,{k:'match',pairs:[['eins','one'],['zwei','two'],['drei','three']]},{onDone:ok=>window.__res.push(['match',ok])});});
 for (let i=0;i<3;i++){
   const idx = await page.evaluate(()=> {
     const l=[...document.querySelectorAll('.matchgrid > div:first-child .opt')].find(n=>!n.classList.contains('gone'));
     return l.dataset.i;
   });
   await page.click(`.matchgrid > div:first-child .opt[data-i="${idx}"]`);
   await page.click(`.matchgrid > div:last-child .opt[data-i="${idx}"]`);
   await page.waitForTimeout(80);
 }
 await page.waitForTimeout(200);

 // TRANS
 await page.evaluate(()=>{const h=document.querySelector('[data-host]');
   DE.ex.render(h,{k:'trans',en:'x',a:['Ich heiße Anna.']},{onDone:ok=>window.__res.push(['trans',ok])});});
 await page.fill('.inp','ich heisse anna'); await page.click('.ex [data-check]'); await page.waitForTimeout(150);

 const res = await page.evaluate(()=>window.__res);
 const exp = {'choice-right':true,'choice-wrong':false,'fill-umlaut-variant':true,'fill-wrong':false,
   'fill-case-punct':true,'order-right':true,'order-wrong':false,'match':true,'trans':true};
 res.forEach(([n,v])=>ok(n+' → '+v, exp[n]===v));
 ok('all exercise kinds fired ('+res.length+'/9)', res.length===9);

 // ---- walk a whole deck so vocab slides seed the SRS
 await page.goto('http://localhost:8098/#/unit/a1-02'); await page.waitForTimeout(400);
 await page.click('[data-deck]'); await page.waitForTimeout(300);
 for (let i=0;i<40;i++){
   const t=await page.textContent('.deck-top .count').catch(()=>null); if(!t) break;
   const [c,n]=t.split('/').map(x=>parseInt(x)); if(c>=n) break;
   await page.click('[data-next]'); await page.waitForTimeout(70);
 }
 await page.click('[data-next]'); await page.waitForTimeout(400); // finish
 ok('deck completion marks unit done', await page.evaluate(()=>DE.unitState('a1-02').deck.done));

 // ---- quiz runner end to end on a real unit
 await page.goto('http://localhost:8098/#/quiz/a1-02'); await page.waitForTimeout(400);
 let guard=0;
 while (guard++ < 60) {
   const done = await page.$('.result'); if (done) break;
   const isMatch = await page.$('.matchgrid');
   if (isMatch) {
     const idx = await page.evaluate(()=>{
       const l=[...document.querySelectorAll('.matchgrid > div:first-child .opt')].find(n=>!n.classList.contains('gone'));
       return l ? l.dataset.i : null;
     });
     if (idx!==null) {
       await page.click(`.matchgrid > div:first-child .opt[data-i="${idx}"]`);
       await page.click(`.matchgrid > div:last-child .opt[data-i="${idx}"]`);
     }
     await page.waitForTimeout(80);
     const next0 = await page.$('.btn-row .btn-pri'); if (next0) { await next0.click(); await page.waitForTimeout(90); }
     continue;
   }
   const opt = await page.$('.opts .opt:not(.locked)');
   if (opt) { await opt.click(); }
   else {
     const bank = await page.$('.wordbank .wtok:not(.used)');
     const inp = await page.$('.inp:not([disabled])');
     if (bank) { const toks = await page.$$('.wordbank .wtok:not(.used)'); for (const t of toks) await t.click(); }
     else if (inp) await inp.fill('xyz');
     const btn = await page.$('.ex [data-check]:not([disabled])'); if (btn) await btn.click();
   }
   await page.waitForTimeout(90);
   const next = await page.$('.btn-row .btn-pri'); if (next) { await next.click(); await page.waitForTimeout(90); }
 }
 ok('quiz runner reaches result screen', !!(await page.$('.result')));
 await page.screenshot({path:out+'/t-quizresult.png'});

 // ---- srs: vocab enters deck after visiting a vocab slide
 const before = await page.evaluate(()=>DE.srs.known().length);
 ok('SRS deck populated from visited slides ('+before+')', before>0);
 await page.goto('http://localhost:8098/#/trainer'); await page.waitForTimeout(500);
 const hasFlash = await page.$('.flash');
 if (hasFlash) {
   await page.click('[data-flip]'); await page.waitForTimeout(150);
   const graded = await page.$('[data-g="easy"]');
   ok('trainer flip reveals grade buttons', !!graded);
   await page.click('[data-g="easy"]'); await page.waitForTimeout(200);
   await page.screenshot({path:out+'/t-trainer.png'});
 } else ok('trainer flip reveals grade buttons', false);

 // ---- persistence across reload
 const xpBefore = await page.evaluate(()=>DE.state.xp);
 await page.reload({waitUntil:'networkidle'}); await page.waitForTimeout(900);
 const xpAfter = await page.evaluate(()=>DE.state.xp);
 ok('progress survives reload ('+xpBefore+' → '+xpAfter+')', xpAfter===xpBefore && xpAfter>0);

 // ---- content integrity, checked in the browser against loaded data
 const bad = await page.evaluate(()=>{
   const problems=[];
   DE.units.forEach(u=>{
     if(!u.slides.length) problems.push(u.id+': no slides');
     if(u.quiz.length<10) problems.push(u.id+': only '+u.quiz.length+' quiz items');
     if(!u.vocab.length) problems.push(u.id+': no vocab');
     u.slides.forEach((s,i)=>{
       if(!DE.deck.renderers[s.t]) problems.push(u.id+' slide '+i+': unknown type '+s.t);
       if(s.t==='vocab') s.items.forEach(it=>{ if(!it[0]||!it[1]) problems.push(u.id+' vocab row incomplete'); });
       if(s.t==='pattern'&&!/\{\}/.test(s.frame)) problems.push(u.id+' pattern has no slot');
       if(s.t==='drill'&&(!s.ex||!s.ex.length)) problems.push(u.id+' drill has no exercises');
     });
     u.quiz.forEach((q,i)=>{
       const where=u.id+' quiz#'+i;
       if(q.k==='choice'){ if(!Array.isArray(q.opts)) problems.push(where+' no opts');
         else if(typeof q.a!=='number'||q.a<0||q.a>=q.opts.length) problems.push(where+' bad answer index'); }
       if(q.k==='fill'||q.k==='trans'||q.k==='listen'){ if(!Array.isArray(q.a)||!q.a.length) problems.push(where+' no accepted answers'); }
       if(q.k==='order'){ 
         const built=q.words.join(' ');
         const norm=s=>s.toLowerCase().replace(/\s+/g,' ').trim();
         if(norm([...q.words].sort().join(' '))!==norm(q.a.split(' ').sort().join(' '))) problems.push(where+' words do not match answer: "'+built+'" vs "'+q.a+'"');
       }
       if(q.k==='match'){ if(!q.pairs||q.pairs.length<2) problems.push(where+' bad pairs'); }
     });
   });
   // duplicate vocab across units
   const seen={}; DE.allVocab().forEach(v=>{ if(seen[v.de]) problems.push('duplicate vocab: '+v.de+' ('+seen[v.de]+' & '+v.unit+')'); else seen[v.de]=v.unit; });
   return problems;
 });
 ok('content integrity ('+bad.length+' problems)', bad.length===0);
 if (bad.length) console.log('  ' + bad.join('\n  '));

 // ---- offline: the precache list must cover every file the app loads
 const swSrc = fs.readFileSync(path.join(ROOT,'sw.js'),'utf8');
 const listed = new Set([...swSrc.matchAll(/'\.\/([^']+)'/g)].map(m=>m[1]));
 const needed = await page.evaluate(()=>{
   const out = [...document.querySelectorAll('script[src]')].map(s=>s.getAttribute('src'))
     .concat([...document.querySelectorAll('link[rel=stylesheet][href]')].map(l=>l.getAttribute('href')))
     .concat(DE.contentFiles);
   return [...new Set(out)].filter(u=>!/^https?:/.test(u));
 });
 const unlisted = needed.filter(f=>!listed.has(f));
 ok('sw precache covers every loaded file'+(unlisted.length?' — missing: '+unlisted.join(', '):''), unlisted.length===0);
 const ghosts = [...listed].filter(f=>f && !f.endsWith('/') && !fs.existsSync(path.join(ROOT,f)));
 ok('sw precache lists no missing files'+(ghosts.length?' — '+ghosts.join(', '):''), ghosts.length===0);

 // ---- offline: after the worker installs, the app must still boot with the network cut
 const off = await b.newPage();
 await off.goto('http://localhost:8098/', { waitUntil:'networkidle' });
 await off.evaluate(()=>navigator.serviceWorker.ready.then(()=>null));
 await off.waitForTimeout(1500);                      // let the precache finish
 await off.context().setOffline(true);
 let offlineUnits = 0;
 try {
   await off.reload({ waitUntil:'load' });
   await off.waitForTimeout(1500);
   offlineUnits = await off.evaluate(()=> (window.DE && DE.units) ? DE.units.length : 0);
 } catch (e) { offlineUnits = -1; }
 await off.context().setOffline(false);
 ok('whole course loads with the network off ('+offlineUnits+' units)', offlineUnits===12);

 // ---- GitHub Pages serves the site from /<repo>/, not from the domain root,
 // so nothing may assume it lives at /.
 const sub = http.createServer((q,r)=>{
   let u=decodeURIComponent(q.url.split('?')[0]);
   if(!u.startsWith('/deutsch')){ r.writeHead(404); return r.end(); }
   u=u.slice('/deutsch'.length)||'/';
   if(u==='/')u='/index.html';
   const f=path.join(ROOT,u);
   if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){ r.writeHead(404); return r.end(); }
   r.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'text/plain'});
   r.end(fs.readFileSync(f));
 });
 await new Promise(r=>sub.listen(8093,r));
 const subCtx = await b.newContext();
 const subPage = await subCtx.newPage();
 const subBad=[]; subPage.on('response',r=>{ if(r.status()>=400) subBad.push(r.status()+' '+r.url()); });
 await subPage.goto('http://localhost:8093/deutsch/',{waitUntil:'networkidle'});
 await subPage.waitForTimeout(1200);
 const subUnits = await subPage.evaluate(()=>(window.DE&&DE.units)?DE.units.length:0);
 ok('boots when served from a subdirectory ('+subUnits+' units, '+subBad.length+' failed requests)',
    subUnits===12 && subBad.length===0);
 const scope = await subPage.evaluate(()=>navigator.serviceWorker.ready.then(r=>r.scope).catch(()=>'none'));
 ok('service worker scopes to the subdirectory ('+scope+')', /\/deutsch\/$/.test(scope));
 const startUrl = await subPage.evaluate(async()=>{
   const l=document.querySelector('link[rel=manifest]');
   const j=await (await fetch(l.href)).json();
   return new URL(j.start_url,l.href).pathname;
 });
 ok('manifest start_url resolves inside the subdirectory ('+startUrl+')', startUrl==='/deutsch/');
 await subCtx.close(); sub.close();

 ok('no JS errors', errs.length===0);
 if (errs.length) console.log('  '+errs.join('\n  '));
 await b.close(); srv.close();
 console.log(FAILED ? '\n'+FAILED+' test(s) failed.' : '\nAll green.');
 process.exit(FAILED ? 1 : 0);
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
