
'use strict';

var myMeal = {
    'name': 'Pasta',
    'serves': 2,
    'ingredients': ['Boild Pasta: 2 cups','Salt:as per your teste','Oil: 3 tbsp','Mozzarella: 1 cup','Tomato sauce: 1 cup','Red chilli sauce : 2 tbsp']
};

console.log('Meal name:' + myMeal.name);
console.log('Serves: ' + myMeal.serves);
console.log('Ingredients:');
for (var i = 0; i < myMeal.ingredients.length; i++) {
    console.log(myMeal.ingredients[i]);
}