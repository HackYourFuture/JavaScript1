'use strict';

let drinkTray =[];

const drinkTypes = ["cola", "lemonade", "water"];

let index = 0;
while(index < 5){

    drinkTray.push(drinkTypes[ index % drinkTypes.length]);
    index++;

}
console.log("Hey guys, I brought a " + drinkTray.sort());