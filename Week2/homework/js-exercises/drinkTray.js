//Exercise 5: Who wants a drink?

'use strict';
let drinkArray = []; //empty array created
const drinkTypes = ["cola", "lemonade", "water"];

//iterates througn array drinktypes
for(let i=0; i<drinkTypes.length; i++) {
    drinkArray.push(drinkTypes[i]); //push to drinkArray
    if (drinkArray.length < 5) {
        drinkArray.push(drinkTypes[i]);
    } 
}
   

console.log("hey guys I brought a " + drinkArray); //prints out the values from drinkArray
