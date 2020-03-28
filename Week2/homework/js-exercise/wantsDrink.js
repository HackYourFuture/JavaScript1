"use strict";

let drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];
var i = 0;
while (i < 5) {
  drinkTray.push(drinkTypes[i % drinkTypes.length]);
  i++;
}
console.log("Hey guys, I brought a " + drinkTray.sort());
