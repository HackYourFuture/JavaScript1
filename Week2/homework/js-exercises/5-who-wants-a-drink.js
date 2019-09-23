'use strict';
// empty Array
const drinkTray = [];

// Array with three items
const drinkTypes = ['cola', 'lemonade', 'water', ];


for (let i = 0; i < 5; i++) {
    let x = i % 3;
    drinkTray.push(drinkTypes[x]);

}
// Output 
console.log("Hey guys, I brought a " + drinkTray);