//Declare a variable that holds an empty array
const drinkTray = [];
//There are 3 different types of drinks:
const drinkTypes = ['cola', 'lemonade', 'water'];
// five times runing loop with continue statement
for (i = 0; i < 5; i++) {
  if (i < 2) {
    drinkTray.push(drinkTypes[0]); //first drink 2 times
    continue;
  }

  if (i < 4) {
    drinkTray.push(drinkTypes[1]); //second drink 2 times
    continue;
  }

  if (i < 5) {
    drinkTray.push(drinkTypes[2]); //third drind 1 time
    continue;
  }
}
//log to the console what in drinkTray
console.log(`"Hey guys, I brought a ${drinkTray}!`);
