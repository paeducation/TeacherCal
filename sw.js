/* Service Worker des Lehrerkalenders (Version 2026-10-08 20:19).
   - Die App läuft aus dem Zwischenspeicher, auch ohne Internet.
   - Eine neue Version wird im Hintergrund geladen und erst nach Bestätigung aktiviert
     (Pop-up "Update verfügbar!"). So kannst du vorher ein Backup erstellen.
   - Startadresse und index.html liefern immer dieselbe App.
   - Es werden nur Dateien dieser Seite gespeichert, keine Kalenderdaten. */
const VERSION = '2026-10-08 20:19';
const CACHE = 'lehrerkalender-' + VERSION;
const EXTRA = ['manifest.webmanifest', 'apple-touch-icon.png', 'icon-512.png', 'bricolage-grotesque.woff2'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    const res = await fetch(new Request('index.html', { cache: 'reload' }));
    if (!res.ok) throw new Error('index.html nicht ladbar');
    await c.put('index.html', res.clone());
    await c.put('./', res.clone());
    await c.addAll(EXTRA.map(f => new Request(f, { cache: 'reload' })));
  })());
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate') {
    e.respondWith(caches.match('index.html').then(hit => hit || fetch(r)));
    return;
  }
  e.respondWith(
    caches.match(r, { ignoreSearch: true }).then(hit => hit || fetch(r).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
      return res;
    }).catch(() => caches.match('index.html')))
  );
});
