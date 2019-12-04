//Exercise3.js

'use strict';

const recipe = {
    MealName: 'Tomato and Egg Stir Fry',
    Serves: 2,
    Ingredients:[ '2 eggs', '2 tomatoes', '1/2 tsp. salt', '1/4 cup oil', '1/8 tsp. sugar','1 scallion'],
};

let entries = Object.entries(recipe);

for(entries of entries){
    console.log(entries)

}