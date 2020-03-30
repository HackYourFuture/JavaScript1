'use strict';

//variable contain object and array of string
let myRecipe= {title:'Kabsa' , serve:3, ingredients:['2 cup of rise','1/2kg meat',"tomoto + onions + chilli",'1 tsp salt']}
//print meal name 
console.log('meal name: ' + myRecipe.title);
//print servings 
console.log('Serves: ' + myRecipe['serve']);
//print title
console.log('Ingredients:');
//for loop to print the string from ingredients array
for(let  ingredient=0; ingredient< myRecipe.ingredients.length; ingredient++){
    console.log(myRecipe.ingredients[ingredient])

}