"use strict";
const recipe = {
    title : "Falafel" ,
    servings : "3" ,
    ingredients : ['1 (15-oz.) can chickpeas, drained' , '4 cloves garlic, roughly chopped', 
                  '1 shallot, roughly chopped' , '2 tbsp. freshly chopped parsley' , '1 tsp. ground cumin',
                  '1 tsp. ground coriander' , '3 tbsp. all-purpose flour' , 'Kosher salt' , 
                  'Freshly ground black pepper']
}
function printRecipe (myRecipe) {
let ingredientList = "";
let element;
for ( element of Object.values(myRecipe)[2] ) {
 ingredientList += element+"\n";
}
return ` Meal name: ${Object.values(recipe)[0]} \n Serves: ${Object.values(recipe)[1]} \n Ingredients: \n ${ingredientList}`;
}

console.log(printRecipe(recipe));