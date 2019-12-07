'use strict'

const  drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];


 for (let i =0; i <=5 ; i++ ){
    
     if (i < 2) {
      drinkTray.push(drinkTypes[0]); 
      continue;
    }
    if (i < 4) {
      drinkTray.push(drinkTypes[1]); 
      continue;
    }
    if (i < 5) {
      drinkTray.push(drinkTypes[2]); 
    }
  }
 
  console.log('\"Hey guys, I brought a '+ drinkTray + '!\"');
     
            

