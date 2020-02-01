'use strict';

let myMenemen = {
  title: 'Menemen',
  servings: 4,
  ingredients: [
    '8 eggs',
    '6 medium/large tomatoes, peeled and chopped into small chunks',
    '6 long green peppers cut into small chunks',
    '2 finely sliced white onions',
    'Half a cup of olive oil',
    'Salt',
    'Pepper',
  ],
};

const myMenemenArray = Object.entries(myMenemen);

for (let i = 0; i < myMenemenArray.length; i++) {
  switch (myMenemenArray[i][0]) {
    case 'title':
      console.log('Meal name: ' + myMenemenArray[i][1]);
      break;

    case 'servings':
      console.log('Serves: ' + myMenemenArray[i][1]);
      break;

    case 'ingredients':
      console.log('Ingredients:');
      for (let j = 0; j < myMenemenArray[i][1].length; j++) {
        console.log(myMenemenArray[i][1][j]);
      }
      break;
  }
}
