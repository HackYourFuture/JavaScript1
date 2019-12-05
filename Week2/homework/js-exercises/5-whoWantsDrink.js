'use strict';

const drinkTray  = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5; i++) {
  if (i < 2) {
    drinkTray.unshift(drinkTypes[0]);  // or drinkTray.push()
    continue;
  };

  if (i < 4) {
    drinkTray.unshift(drinkTypes[1]); 
    continue;
  };

  if (i < 5) {
    drinkTray.unshift(drinkTypes[2]);
    continue;
  }
};

console.log(`"Hey guys, I brought a ${drinkTray}!`);
