"use strict";
var recipe = {
  Meal_name: "Fried Spaghetti Cake",
  Serves: 20,
  Ingredients: [
    "1 spaghetti",
    "4 egg",
    "salt",
    "pepper",
    "vegetable oil",
    "marinara sauce"
  ]
};

for (var item in recipe) {
  console.log(item + " : " + recipe[item]);
}
