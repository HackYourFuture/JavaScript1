"use strict"

var myRecipe = {
    name: "Brigadeiro",
    serving: "30",
    ingredients: ["condensed milk ", 
    "dark chocolate ", 
    "butter "],
};
var myRecipeKeys = Object.Keys;
for (var i = 0; i < myRecipeKeys.length; i++) {
    console.log(myRecipeKeys[i] + ": " + myRecipe[myRecipeKeys[i]])
};
