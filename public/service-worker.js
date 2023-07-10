const activateEvent = () => {
  self.addEventListener('activate', () => {
    console.log('service worker activated');      
  });
};
activateEvent();

const installEvent = () => {
    self.addEventListener('install', () => {
      console.log('service worker installed'); 
      activateEvent();
    });
  };
  installEvent();
   