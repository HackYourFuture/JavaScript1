const myRecipe = {
  Meal_name: 'salad',
  Serves: 2,
  Ingredients: ['2 tomatoes', '1 cucumber', '1 onion', '1 tsp salt/lemon salt'],
};

for (const key in myRecipe) {
  if (key === 'Ingredients') {
    console.log(key + ': ');
    for (let i = 0; i < myRecipe.Ingredients.length; i++) {
      console.log(myRecipe.Ingredients[i]);
    }
  } else {
    console.log(key + ': ' + myRecipe[key]);
  }
}
