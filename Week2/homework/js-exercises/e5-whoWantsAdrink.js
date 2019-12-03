'use strict'

const drinkTypes = ['cola', 'lemonade', 'water'];

let randomDrink = function (array,numberOfShuffels) {
    let drinkTray=[];
    for (let i = 0; i < numberOfShuffels; i++) {
        drinkTray.push(array[i % array.length]);
    }
    return drinkTray;
}   

console.log(`Hey guys, i brought a ${randomDrink(drinkTypes,5)}!`)






