//Exercise5.js

'use strict';

const drinkTypes = ["cola", "lemonade", "water"];
let drinks = [];
console.log(drinkTypes[0])

for(let i=0; i<5; i++){
    if(i <= 2){
        drinks.push(drinkTypes[i]);
        console.log(drinks);
    }else{
        drinks.push(drinkTypes[i % 3]);
        console.log(drinks);
    }

}