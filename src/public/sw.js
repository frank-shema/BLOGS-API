self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('blog-cache').then((cache) => {
      return cache.addAll(['/', '/offline.html', '/styles.css']);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match('/offline.html')),
  );
});
