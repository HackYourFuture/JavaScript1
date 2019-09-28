
'use strict';


let drinkTray = [];

const drinkTypes = ["cola", "lemonade", "water"];

for(let i = 0; i < 5; i++){
   drinkTray.push(drinkTypes[i % drinkTypes.length]); 
}

console.log(drinkTray);
console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);