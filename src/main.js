const asyncLooper = require('./modules/asyncLooper');

asyncLooper(() => {
  console.log(new Date());
}, 5, 1000);
