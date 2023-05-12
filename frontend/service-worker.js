const cacheName = 'pwaTeste-v1.2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll([
          'frontend/index.html',
          'frontend/src/editar.html',
          'frontend/src/adicionar.html',
        ]);
      })
      .then(() => self.skipWaiting())
      .catch(error => console.log('Erro ao adicionar ao cache', error))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  // Responde com a solicitação de rede, se houver conexão disponível
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});