const asyncLooper = require('./modules/asyncLooper');
const $ = require('jquery');
const tmplList = require('./components/List.hbs');
const randomNumber = require('./modules/randomNumber');
const randomColor = require('./modules/randomColor');

asyncLooper(() => {
  const app = $('#app');
  app.html(tmplList({
    list: [{
      color: randomColor(),
      number: randomNumber(0, 255)
    }, {
      color: randomColor(),
      number: randomNumber(0, 255)
    }, {
      color: randomColor(),
      number: randomNumber(0, 255)
    }, {
      color: randomColor(),
      number: randomNumber(0, 255)
    }, {
      color: randomColor(),
      number: randomNumber(0, 255)
    }]
  }));
}, 10, 100);
