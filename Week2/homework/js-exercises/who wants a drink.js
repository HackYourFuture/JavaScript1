'use strict';

let drinkTray = [];
const drinkType = ['cola', 'lemonade', 'water'];
for (let i = 0; i < 5; i++) {
  if (i <= 1) {
    drinkTray.push(drinkType[0]);
  }
  if (i >= 2 && i <= 3) {
    drinkTray.push(drinkType[1]);
  }
  if (i >= 4) {
    drinkTray.push(drinkType[2]);
  }
}
console.log(drinkTray);
let drink;
let hey = ' hey guys, I brought a ';
for (drink of drinkTray) {
  hey = hey + drink + ' ,';
}
console.log(hey);
