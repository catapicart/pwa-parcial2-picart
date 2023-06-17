const CACHE_NAME = 'version1';

importScripts(
    'https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.js'
);

// Esto es para que el SW no se quede "esperando" 
self.addEventListener('message', event => {
    if (event.data && event.data.type == "SKIP_WAITING") {
        self.skipWaiting();
    }
})

// Va a guardar todas las partes que el usuario va navegando y las puede mostrar cuando no hay conexion
workbox.routing.registerRoute(
    new RegExp('/*'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: CACHE_NAME
    })
);