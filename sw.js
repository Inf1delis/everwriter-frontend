const CACHE = 'serverWorker';
const timeout = 400;
var urlsToCache = [
  '/',
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
    event.respondWith(networkOrCache(event.request)
    .catch(() => useFallback()));
});

function networkOrCache(request) {
    return fetch(request)
        .then((response) => response.ok ? response : fromCache(request))
        .catch(() => fromCache(request));
}

const FALLBACK = '<div>оффлайн</div>\n'

function useFallback() {
    return Promise.resolve(new Response(FALLBACK, { headers: {
        'Content-Type': 'text/html; charset=utf-8'
    }}));
}

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ));
}