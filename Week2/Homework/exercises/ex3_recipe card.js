"use strict";

let myRecipe = {
  Meal: "Meal name: Omelete ",
  serves: 2,
  ingredients: ["4 eggs", "2 srtips of bacon", "1 tsp salt/pepper"]
};

console.log(myRecipe.Meal);
console.log("Serves:" + " 2");
console.log("Ingredients:");
for (let i = 0; i < myRecipe.ingredients.length; i++) {
  console.log(myRecipe.ingredients[i]);
}
