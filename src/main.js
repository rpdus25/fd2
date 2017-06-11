import $ from 'jquery';
import asyncLooper from './modules/asyncLooper';
import randomNumber from './modules/randomNumber';
import randomColor from './modules/randomColor';
import tmplList from './components/List.hbs';

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
