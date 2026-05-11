/* ============================================================
   SMART SERVICE WORKER — Durga Psychiatric Centre
   Strategy: Network First → Cache Fallback
   
   - Always tries network FIRST (fresh content always)
   - Falls back to cache ONLY when offline
   - Auto-updates cache on every visit
   - Change VERSION number after any site update
   ============================================================ */

const VERSION = 'dpc-v3';

const OFFLINE_URLS = [
  '/',
  '/index.html',
  '/styles.css',
  '/install.html',
  '/profile.jpg'
];

/* ── INSTALL: Cache essential files only ── */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(OFFLINE_URLS))
      .then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: Delete ALL old caches instantly ── */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== VERSION)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: Network First — Cache only when offline ── */
self.addEventListener('fetch', e => {

  /* Skip non-GET and browser extension requests */
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith('http')) return;

  /* Skip YouTube, WhatsApp, external APIs */
  const url = new URL(e.request.url);
  if (url.hostname !== self.location.hostname) return;

  e.respondWith(
    fetch(e.request)
      .then(networkResponse => {
        /* Got fresh response — update cache silently */
        const clone = networkResponse.clone();
        caches.open(VERSION).then(cache => {
          cache.put(e.request, clone);
        });
        return networkResponse;
      })
      .catch(() => {
        /* Network failed — serve from cache */
        return caches.match(e.request)
          .then(cached => cached || caches.match('/'));
      })
  );
});
