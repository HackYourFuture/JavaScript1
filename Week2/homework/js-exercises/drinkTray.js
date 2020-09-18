'use strict';
let drinkArray = [];
const drinkTypes = ["cola", "lemonade", "water"];

for(let i=0; i<drinkTypes.length; i++) {
    drinkArray.push(drinkTypes[i]);
    if (drinkArray.length < 5) {
        drinkArray.push(drinkTypes[i]);
    } 
}
   

console.log("hey guys I brought a " + drinkArray);
