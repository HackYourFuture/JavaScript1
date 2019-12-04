'use strict';

let drinkTray = [];

const drinks = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5; i++) {
  if (i < 2) {
    drinkTray.push(drinks[i]);
  } else {
    drinkTray.push(drinks[i - 2]);
  }
}

console.log(
  `Hey Guys!!! I brought ${drinkTray.join(', ')} to soften our throat.`
);
