'use strict'
// Declare a variable that holds an object (your meal recipe).
// Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
// Log each property out seperately, using a loop (for, while or do/while)

const myBreakfastRecipe = { 
    "Meal name": "Atom",
    Serves: 2,
    Ingredients: ["100g outmeal", "One babana", "100g milk"]
};

//to write ingredients in the same line
// for (const property in myBreakfastRecipe) {
//     console.log(`${property}: ${myBreakfastRecipe[property]}`);
// }

for (const property in myBreakfastRecipe) {
    if(Array.isArray(myBreakfastRecipe[property])){
        console.log(property+":");
        for (let ing of myBreakfastRecipe[property]){
            console.log(ing)
        }
        } else {
        console.log(property+": "+myBreakfastRecipe[property] )
        }
}