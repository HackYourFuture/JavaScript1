'use strict'
let drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];

for(let i = 0; i < 5; i++) {
    if(drinkTray.filter(drink => drink === 'cola').length < 2) {
        drinkTray.push(drinkTypes[0]);
    } else if(drinkTray.filter(drink => drink === 'lemonade').length < 2) {
        drinkTray.push(drinkTypes[1]);
    } else {
        drinkTray.push(drinkTypes[2])
    }
}

console.log(drinkTray);

console.log(`Hey guys, I bought ${drinkTray[0]}, ${drinkTray[1]}, ${drinkTray[2]}, ${drinkTray[3]}, ${drinkTray[4]}.`)