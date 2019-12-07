//Exercise 5: Who wants a drink?

"use strict";
let drinkTray = [];
const drinks = ["cola", "lemonade", "water"];
var i = 0;
let j = 0;

while (i < drinks.length) {
    let drink = drinks[i];
    drinkTray.push(drink);
    i++;
    while (j < 2) {
        let drink = drinks[j];
        drinkTray.push(drink);
        j++;
    }
}
console.log("Hey guys, I brought a " + drinkTray + "!");