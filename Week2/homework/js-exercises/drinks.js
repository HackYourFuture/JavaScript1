'use strict'

let drinkTray = [];
const drinkTypes = [
    'cola',
    'lemonade',
    'water'
];
// loop throw an array
for (let i = 0; i < 5; i++) {
    drinkTray.push(drinkTypes[i % drinkTypes.length]);
}
console.log('Hey guys, I brought a' + " " + drinkTray + '!');