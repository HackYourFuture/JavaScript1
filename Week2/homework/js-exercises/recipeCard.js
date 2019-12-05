'use strict'
const myRecipe = {
mealName: 'Ash', 
 servings: 2,
    Ingredients:
        ['250g meat',
            'grocery',
            '500g flour']
};
for (const Ingredients in myRecipe) {
    console.log(`${Ingredients}: ${myRecipe[Ingredients]}`);
}
