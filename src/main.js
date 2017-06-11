const asyncLooper = require('./modules/asyncLooper');

asyncLooper(() => {
  console.log(new Date());
}, 5, 1000);

const app = document.getElementById('app');
console.log(app);
