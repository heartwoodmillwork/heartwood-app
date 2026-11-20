// Heartwood: service worker simples (instalar como app). Sempre busca a vers\u00e3o nova na rede.
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { });
