const asyncLooper = require('./modules/asyncLooper');
const $ = require('jquery');
const tmplHeader = require('./components/Header.hbs');

console.log(tmplHeader);

asyncLooper(() => {
  const app = $('#app');
  app.html('');
}, 1, 100);
