self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/ESP-customer-form/',
                '/ESP-customer-form/index.html',
                '/ESP-customer-form/manifest.json',
                '/ESP-customer-form/sw.js',
                `/ESP-customer-form/assets/icon.png`,
                `/ESP-customer-form/assets/icon-192.png`,
                // ... add other assets and resources
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
