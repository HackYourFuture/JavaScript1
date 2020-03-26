'use strict';
let food;
let myMeal = {
  mealName: 'Omelete',
  serving: 2,
  ingredients: ['4 eggs', '2 strips of bacon', '1 tsp salt / pepper'],
};
for (food in myMeal) {
  console.log(food + ' : ' + myMeal[food]);
}
