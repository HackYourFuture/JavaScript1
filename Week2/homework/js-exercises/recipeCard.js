'use strict';

const recipeCard = {
  'Name of the meal': 'Menemen',
  serves: 4,
  ingredients: [
    '4 large free range eggs',
    '7-8 medium tomatoes',
    '1 Onion',
    '1 small green bell pepper',
    '2 tsp hot chilli flakes ',
    'Sunflower oil for frying',
    '1 tsp salt',
    '1 tsp pepper',
    '1 tsp salt'
  ]
};

for (let name in recipeCard) {
  if (Array.isArray(recipeCard[name])) {
    console.log(`${name} :`);
    for (let part of recipeCard[name]) console.log(`${part}`);
  } else {
    console.log(`${name} : ${recipeCard[name]}`);
  }
}
