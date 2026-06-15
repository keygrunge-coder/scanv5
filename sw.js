const CACHE_NAME = 'scan-paket-v3-cache';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://unpkg.com/html5-qrcode'
];

// Install Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});
