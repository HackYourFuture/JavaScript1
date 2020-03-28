"use strict";
let drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];

function fillTray(tray) {

    let colaCounter = 0;
    let lemonadeCounter = 0;
    let waterCounter = 0;
    let i=0;
    while (i<5){
      if (colaCounter < 2) { tray.push(drinkTypes[0]); i++; colaCounter++; }
      else
      if (lemonadeCounter < 2)  { tray.push(drinkTypes[1]); i++; lemonadeCounter++; } 
      else
      if (waterCounter < 2)  { tray.push(drinkTypes[2]); i++; waterCounter++; }
    }
    return tray;
}
console.log(`Hey guys, I brought a ${fillTray(drinkTray)}`);