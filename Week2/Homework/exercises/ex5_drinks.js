"use strict";

let drinkTray = [];

const drinks = [" cola", " lemonade", " water. "];

let i = 0;
while (i < 5) {
  drinkTray.push(drinks[i % drinks.length]);
  i++;
}
console.log("Hey guys, I brought a " + drinkTray.sort());
