'use strict';
let myMealRecipe = {
	mealName: 'Pizza',
	serves: 4,
	ingredients: [ '300g cheese', 'mushroom can', '100g tomato paste', 'Pizza dough' ]
};
for (let property in myMealRecipe) {
	console.log(`${property}: ${myMealRecipe[property]}`);
}
