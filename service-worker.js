console.log('service-worker.js');

self.addEventListener('install', function(event) {
  console.log('install event');
  event.waitUntil(
    caches.open('demo-of-service-worker-loader-caching-issue').then(function(cache) {
      let promise = cache.addAll([
        '49c1b8cd8a746fec01f1.worker.js',
      ]).then(function () {
        console.log('Successfully cached 49c1b8cd8a746fec01f1.worker.js.')
      }).catch(function () {
        console.log('Problem caching 49c1b8cd8a746fec01f1.worker.js.');
      });

      return promise;
    }).catch(function () {
      console.error('Error with caches.open or cache.addAll');
    })
  );
});
