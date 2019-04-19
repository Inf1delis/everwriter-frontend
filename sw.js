const CACHE = 'serverWorker';
const timeout = 400;
var urlsToCache = [
  '/src/*',
  '/index.html',
  '/styles/main.css',
];
self.addEventListener('install', (event) => {
    event.waitUntil(
    caches.open(CACHE)
    .then((cache) => cache.addAll(urlsToCache))
    .then(() => self.skipWaiting()))

});

self.addEventListener('activate', (event) => {
	 event.waitUntil(self.clients.claim());
        console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(networkOrCache(event.request))
});

function networkOrCache(request) {
    return fetch(request)
        .then((response) => response.ok ? response : fromCache(request))
        .catch(() => fromCache(request));
}

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
        matching || Promise.reject('no-match')
    ));
}