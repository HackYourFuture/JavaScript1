'use strict';

let drinkTray = [];

const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i =0 ; i <5 ; i++){
   drinkTray.push(drinkTypes[i], drinkTypes[i]);
   drinkTray.splice(5, drinkTypes.length);
   }

console.log(`Hey guys! I got you ${drinkTray}`);

