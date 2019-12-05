'use strict'
// Declare a variable that holds an empty array, called drinkTray.
// There are 3 different types of drinks:
// Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
// If there are already two instances of a drinkType then start with the next drink in the array.
// Your drinkTray should contain 2 cola, 2 lemonade and 1 water.
// Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")

let drinkTray= [];
const drinkTypes = ['cola', 'lemonade', 'water'];
for (let i = 0; i < 5; i++) {
 drinkTray.push(drinkTypes[i%3])
}
console.log("Hey guys, I brought a "+ drinkTray.join(', ')+"!");