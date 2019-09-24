'use strict';

let pizzaRecipe = {
   'Meal Name' : 'Pizza',
   'Servings'  : 4,
    'Ingredients' : ['Dough','Sauce','Cheese']
   }

   for (let key in pizzaRecipe) {
        if (pizzaRecipe.hasOwnProperty(key)) {
        console.log(key + " -> " + pizzaRecipe[key]);
    }
       console.log()
   }