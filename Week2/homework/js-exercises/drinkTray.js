'use strict';

const drinkTypes = ['cola', 'lemonade', 'water'];

let drinkTray = [];

for(i=0;i<5;i++) {
        drinkTray.push(drinkTypes[i%3]);
    
    }
    console.log("Hey guys, I brought a " + drinkTray + ".");