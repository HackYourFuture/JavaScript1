let drinkTray = [];

const drinkTypes = ['cola', 'lemonade', 'water'];

for (i = 0 ; i < 5 ; i++) {
    if (i <3) {
        drinkTray.push(drinkTypes[i]);
    }
    else if (i >= 3) {
        drinkTray.push(drinkTypes[i % 3]);
    }
};

console.log("Hey guys, I brought a " + drinkTray + "!");