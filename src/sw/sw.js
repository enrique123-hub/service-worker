var CACHE_NAME = 'Prueba de concepto'; 
var urlsToCache = [ 
  '/', 
  '/assets/logo.png',
  '/components/HelloWorld.vue',
  '/App.vue',
  " https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic .min.css ", 
  " https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js ", 
  " https://cdnjs.cloudflare.com/ajax/libs/semantic -ui/1.11.8/semantic.min.js " 
];
self.addEventListener('install', function(evento) { 
  // el archivo de instalación se necesita sin conexión 
  event.waitUntil( 
    caches.open(CACHE_NAME) 
      .then(function(cache) { 
        console.log('Opened cache'); 
        return cache. addAll(urlsToCache); 
      }) 
  ); 
});
self.addEventListener('fetch', function(evento) { 
  // cada solicitud de nuestro sitio pasa a través del controlador de obtención 
  // Tengo prueba 
  console.log('Soy una solicitud con url: ', 
  event.request.clone ().url) 
 
});