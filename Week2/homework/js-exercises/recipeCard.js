'use strict'
const myRecipe = {
"meal name": 'Ash', 
 servings: 2,
 ingredients:['250g meat','grocery','500g flour']
};

// Log each property out seperately, using a loop (for, while or do/while)
for (let meal in myRecipe){
    if (Array.isArray(myRecipe[meal])) {
console.log(`${meal} :`);
for (let part of myRecipe[meal])  console.log(`${part}`);
    } else{
       console.log(`${meal} : ${myRecipe[meal]}`); 
    }
}