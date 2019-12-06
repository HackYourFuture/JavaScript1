'use strict';
const drinkTray = [];
let drinkTypes = [ 'cola', 'lemonade', 'water' ];
let i = 0;

//Create a loop that runs 5 times
for (i = 0; i < 5; i++) {
	if (i < 2) {
		drinkTray.push(drinkTypes[0]); // 2 cola's
	} else if (i < 4) {
		drinkTray.push(drinkTypes[1]); // 2 Lemonade's
	} else {
		drinkTray.push(drinkTypes[2]); //The rest is water
	}
}

console.log(`Hey guys, I brought a  ${drinkTray}  !`);
