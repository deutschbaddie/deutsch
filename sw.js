/* ==========================================================================
   sw.js — offline support
   The whole course is a few hundred KB of static files, so we simply keep
   all of it on the device. That means the lessons work on a train, on a
   plane, or anywhere with no signal.

   Strategy:
     navigations  → network first, fall back to the cached page when offline
     everything   → stale-while-revalidate: answer from cache immediately,
       else         refresh it in the background for next time
   Bump CACHE when you change any file so old copies get cleaned up.
   ========================================================================== */
'use strict';

var CACHE = 'deutschlab-v1';

var PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/app.css',
  './assets/js/core.js',
  './assets/js/audio.js',
  './assets/js/srs.js',
  './assets/js/exercises.js',
  './assets/js/deck.js',
  './assets/js/views.js',
  './assets/js/app.js',
  './content/registry.js',
  './content/decoder.js',
  './content/a1/u01.js',
  './content/a1/u02.js',
  './content/a1/u03.js',
  './content/a1/u04.js',
  './content/a1/u05.js',
  './content/a1/u06.js',
  './content/a1/u07.js',
  './content/a1/u08.js',
  './content/a1/u09.js',
  './content/a1/u10.js',
  './content/a1/u11.js',
  './content/a1/u12.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // Add one at a time: a single missing file must not break offline for
      // everything else, the way cache.addAll would.
      return Promise.all(PRECACHE.map(function (url) {
        return c.add(new Request(url, { cache: 'reload' }))
          .catch(function (err) { console.warn('[sw] could not precache', url, err); });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  // Leave other origins alone — Google Fonts and Forvo should behave normally.
  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(function () {
        return caches.match('./index.html').then(function (r) {
          return r || caches.match('./');
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (cached) {
      var fresh = fetch(req).then(function (res) {
        if (res && res.ok && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return cached; });
      return cached || fresh;
    })
  );
});
