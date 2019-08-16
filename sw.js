self.addEventListener('install', function(event) {
  var urlsToCache = [
    '/',
    'js/main.js',
    'js/dbhelper.js',
    'js/restaurant_info.js',
    'css/styles.css',
    'css/laptop.css',
    'css/laptopL.css',
    'css/tablet.css',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'
  ];
  event.waitUntil(
    caches.open('restaurant-static-v1').then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
 // console.log(event.request.url);

 event.respondWith(
   // caches.match(event.request).then(function(response) {
   //   return response || fetch(event.request);
   // })
   // new Response('Hello world', {
   //   headers: {'Content-Type': 'text/html'}
   // })

   // fetch(event.request).then(function(response) {
   //   if (response.status == 404) {
   //     return new Response("Whoops, not found");
   //   }
   //   return response;
   // }).catch(function() {
   //   return new Response("Uh oh, that totally failed!");
   // })
   caches.match(event.request).then(function(response) {
     if (response) return response;
     return fetch(event.request);
   })
 );
});
