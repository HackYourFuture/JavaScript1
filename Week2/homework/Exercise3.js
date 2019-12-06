//Exercise3.js

'use strict';

const recipe = {
    mealName: 'Tomato and Egg Stir Fry',
    Serves: 2,
    Ingredients:[ '2 eggs', '2 tomatoes', '1/2 tsp. salt', '1/4 cup oil', '1/8 tsp. sugar','1 scallion'],
};

let entry = Object.entries(recipe);

for(entry of entry){
    console.log(entry)

}