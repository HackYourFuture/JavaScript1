'use strict';

const drinkTray = [];

const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5; i++) {
  drinkTray.push(drinkTypes[i]);
  if (drinkTray.length < 5) {
    drinkTray.push(drinkTypes[i]);
  }
}
let myString = 'Hey guys, I brought a ' + drinkTray + '!';
console.log(myString.replace(/,/g, ', '));
