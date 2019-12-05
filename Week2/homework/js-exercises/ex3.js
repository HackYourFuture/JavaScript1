/*Declare a variable that holds an object
Give the object 3 properties
'string', number,array of strings*/
const mealRecipe = {
  title: 'Pizza',
  servings: 4,
  ingredients: ['Paste', '4 Tomato', 'Olive', 'Pepperoni', 'too much Cheese'],
};
//wile loop for title :'string' property and log it
const myMeal = mealRecipe['title'];
while (myMeal === 'Pizza') {
  console.log(`Meal name: ${myMeal} 🍕`);
  break;
}
// do loop for servings:number property and log it
// fix do while loop
const serv = mealRecipe['servings'];
let counter = 0;
do {
  console.log(`Serves:🍽  ${serv}`);
  counter++;
  // if i change the number in while it give me as the number i put
} while (counter < 1);

console.log('Ingredients: 📑');

//for loop for ingredients:[Array of strings]property and log it
// fix this code to ingredients
for (ingr of mealRecipe['ingredients']) {
  console.log(ingr);
  //  const ingr = mealRecipe['ingredients'];
  // for (let i = 0; i < ingr.length; i++) {
  //   console.log(ingr[i]);
}

//for all in object
for (allProperty in mealRecipe) {
  console.log(allProperty, mealRecipe[allProperty]);
}
