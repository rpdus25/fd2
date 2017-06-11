const asyncLooper = require('./modules/asyncLooper');
const $ = require('jquery');
const tmplList = require('./components/List.hbs');
const randomNumber = require('./modules/randomNumber');

asyncLooper(() => {
  const app = $('#app');
  app.html(tmplList({
    list: [
      randomNumber(0, 255),
      randomNumber(0, 255),
      randomNumber(0, 255),
      randomNumber(0, 255),
      randomNumber(0, 255)
    ]
  }));
}, 10, 100);
