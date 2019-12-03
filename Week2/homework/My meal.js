'use strict';

let myMeal = {
    name : 'Sharkria',
    serve: 2,
    ingredients: ['one egg', '2kg yogurt', '1kg meat', '1kg rice'],
}


for (let property in myMeal){
     console.log(`${property} : ${myMeal[property]}`)
     console.log(property +': ' + myMeal[property]);
     

   }

    
    
/* 
for (let i =0 ; i < myMeal.ingredients.length; i++) {
        console.log(myMeal.ingredients[i]);   
}*/ 