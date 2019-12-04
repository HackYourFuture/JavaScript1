"use strict";
let myMealRecipe = {
    name: "spaghetti",
    servings: 5,
    ingredients: ["spaghett ", "salt ", "ketchup "]
};
let text = "a";
let x;
for (x in myMealRecipe) {
    text += x + ": " + myMealRecipe[x] + "" + "\n";
}
console.log(text);