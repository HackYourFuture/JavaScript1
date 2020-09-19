// Exercise 3: The recipe card
'use strict';
//create empty object 
let recipe = {};
//push values to the object
recipe["Meal name"] = "Omlette";
recipe["Serves"] = 2;
recipe["Ingredients"] = ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"];

//iterate object values from recipe
for (const key in recipe) {
  if (recipe.hasOwnProperty(key)) {
    const recipeValue = recipe[key];
    console.log(key + ": " + recipeValue); //prints out both object keys and values
  }
}
