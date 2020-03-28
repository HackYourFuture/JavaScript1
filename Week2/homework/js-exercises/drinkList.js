"use strict";
let drinkTray = [];

const drinkTypes = ["cola", "lemonade", "water"];
function myShuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
}
return array;
}

function fillTray(tray) {
    let shuffleDrinkTypes = myShuffle(drinkTypes);
    let drink;
    let drinkObjList = [];
  for( drink of shuffleDrinkTypes){
     let myObject = {name:drink , counter:0};
     drinkObjList.push(myObject);

  }
    let i = 0;
        for(drink of drinkObjList){
            while(i<5 && drink.counter<2) { 
                tray.push(drink.name); 
                drink.counter++; 
                i++; 
           }
        }
        
    return tray;
}
console.log(`Hey guys, I brought a ${fillTray(drinkTray)}`);
