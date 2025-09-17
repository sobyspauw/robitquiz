// Service Worker for RobitQuiz PWA
const CACHE_NAME = 'robitquiz-v1.0.0';
const urlsToCache = [
  '/robitquiz/',
  '/robitquiz/RobitQuiztest1.html',
  '/robitquiz/JS/ui.js',
  '/robitquiz/JS/game.js',
  '/robitquiz/JS/tutorial.js',
  '/robitquiz/styles.css',
  '/robitquiz/sounds/correct.wav',
  '/robitquiz/sounds/wrong.wav',
  '/robitquiz/sounds/click.wav',
  '/robitquiz/sounds/wrong2.wav'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});