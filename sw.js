const CACHE = 'serverWorker';
const timeout = 400;
var urlsToCache = [
  '/',
  '/idnex.html',
  '/styles/main.css',
];
self.addEventListener('install', (event) => {
    event.waitUntil(
    caches.open(CACHE)
    .then(function(cache) {
    	console.log('Установка хэша');
        return cache.addAll(urlsToCache);
    }))

});

self.addEventListener('activate', (event) => {
	 event.waitUntil(self.clients.claim());
    console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
});