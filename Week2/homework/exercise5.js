let drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];
let cntrc =0;
let cntrl = 0;
let cntrw = 0;
for (let i=0;i<5;i++){
   let k = Math.floor(Math.random() * 3); //Randomly select a drink from array
   
   if ( k == 0  && cntrc == 2) // checking out if our drinks reach the limit or not, if it reaches increase the random number +1
   k++;
   if ( k == 1 && cntrl == 2)
   k++;
   if ( k == 2 && cntrw == 2)
   k++;

   if (k == 3) //if our number reaches the limit of array after +1;
   k = 0;
   
   switch(k){ //counts the drinks
    case 0 : { cntrc++; break; }
    case 1 : { cntrl++; break; }
    default : cntrw++;
    
}

   drinkTray.push(drinkTypes[k]);  //push the drink to array


}

console.log(`Hey guys, I brought a ${drinkTray[0]}, ${drinkTray[1]},${drinkTray[2]},${drinkTray[3]},${drinkTray[4]}!`);