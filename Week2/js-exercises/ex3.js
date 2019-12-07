//Exercise 3: The recipe card

'use strict';

const recipe = {
    MealName: 'Papa oats',
    Serves: 3,
    Ingredients:[ '120 Gr Oats', '120 Gr Water', '30 Gr olive oil', '30 Gr honey', '1 tsp salt'],
};

let entries = Object.entries(recipe);

for(entries of entries){
    console.log(entries)

}