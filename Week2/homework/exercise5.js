'use strict'

let drinkTray = [ ];
const drinkTypes = ['cola','lemonade','water']
console.log(drinkTypes) /*just tested if the array is working properly*/

for (let i = 0; drinkTray.length <= 5; i++) {
    var idx = drinkTypes[Math.floor(Math.random() * drinkTypes.length)]; /*wanted to pick a random piece of the array*/
    drinkTray.push(drinkTypes[idx]);
    console.log(drinkTray);
    break
}

console.log("Hey guys, I brought" + drinkTray + "!")

/*My expectation about the random var was that it would be really random so each time we run the code 
it give us back different compositions to the drinkTray array.
Another point that I still didn't find out is why there is this bunch of comas. */