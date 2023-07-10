const CACHE_NAME = 'my-cache-v1';

const activateEvent = () => {
  self.addEventListener('activate', () => {
    console.log('service worker activated');      
  });
};
activateEvent();

const installEvent = () => {
  self.addEventListener('install', event => {
    console.log('service worker installed'); 
    const initialInstallStatus = {
      isInstalled: false
    };

    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => cache.put('installStatus', new Response(JSON.stringify(initialInstallStatus))))
        .then(() => self.skipWaiting())
    );
  });
};
installEvent();
