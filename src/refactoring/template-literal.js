var date = new Date();
var todayES3 = date.getFullYear()+'년 '+(date.getMonth() + 1)+'월 '+date.getDate()+'일 '+date.getHours()+':'+(date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes());
var todayES6 = '';
console.log(todayES3);
console.log(todayES6);
