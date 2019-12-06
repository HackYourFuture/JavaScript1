'use strict'
// 1. Declare a variable that holds an empty array, called`drinkTray`.
let drinkTray = [];

// 2. Create a loop that runs 5 times.On each iteration, push a drink into the`drinkTray` variable.
const drinkTypes = ['cola', 'lemonade', 'water'];
for (let i = 0; i <5; i++){
    drinkTray.push(drinkTypes[i % drinkTypes.length]);
}
// 5. Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!"
console.log (`Hey guys, I brought a ${drinkTray.join()}`);


