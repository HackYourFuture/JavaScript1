let drinkTray= [];
const drinkTypes = [
  'cola',
  'lemonade',
  'water'
];
for (let i=0; i<5; i++) {
  // for(let x=0; x<drinkTypes[i%drinkTypes.length];x++){
  //   while (drinkTray.indexOf(drinkTypes[i]) >-1) {
  //     drinkTray.push(drinkTypes[i]);
  //   }
  // }
  drinkTray.push(drinkTypes[i%drinkTypes.length]);
}
drinkTray = drinkTray.join(', ');
console.log(`Hey guys, I brought a ${drinkTray}!`);