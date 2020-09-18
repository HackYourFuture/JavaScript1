'use strict';

let recipe = {};
recipe["Meal name"] = "Omlette";
recipe["Serves"] = 2;
recipe["Ingredients"] = ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"];

for (const key in recipe) {
  if (recipe.hasOwnProperty(key)) {
    const recipeValue = recipe[key];
    console.log(key + ": " + recipeValue);
  }
}
