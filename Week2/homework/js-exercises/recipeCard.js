'use strict'
const myRecipe = {
mealName: 'Ash', 
 servings: 2,
    Ingredients:
        ['250g meat',
            'grocery',
            '500g flour']
};
for (const pro in myRecipe) {
    console.log(`${pro}: ${myRecipe[pro]}`);
}
