let recipe = {
    'Meal Name' : 'Bulgur Pilavi',
    'Serves' : 4,
    'ingredients' : ['1 glass bulgur', '1 spoon tomato souce', '1 onion', 'salt-pepper']
}

//for (const property in recipe) {
//    console.log(`${property} : ${recipe[property]}`);
//}

console.log(`Meal name: ${recipe["Meal Name"]}`);
console.log(`Serves: ${recipe.Servings}`);
console.log(`Ingredients:`);
for (let i=0;i<recipe.ingredients.length;i++) {
    console.log(recipe.ingredients[i]);
}