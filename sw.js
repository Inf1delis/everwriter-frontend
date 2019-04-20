const CACHE = 'serverWorker';
const timeout = 400;
var urlsToCache = [
  '/',
  '/dist/index.css',
  '/dist/index.css.map',
  '/dist/index.js',
  '/dist/index.js.map',
  '/index.html',
  'sw.js',
  '/node_modules/react/umd/react.development.js',
  '/node_modules/react-dom/umd/react-dom.development.js',
  'manifest.json'
];
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
    )
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
        .then((response) => response.ok ? updateCache(response, request) : fromCache(request))
        .catch(() => fromCache(request));
}

function updateCache(response, request){
    return caches.open(CACHE).then(function(cache) {
        return cache.put(request, response.clone()).then(function() {
          return response
        })
      })
}

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
        matching || Promise.reject('no-match')
    ));
}