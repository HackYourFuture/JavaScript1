'use strict';

function giveCompliment(saif) {
  const compliment = [
    'great',
    'awesome',
    'lovely',
    'fabulous',
    'Calm',
    'magnificent',
    'aardig',
    'smart',
    'nice',
    'amazing',
  ];
  const randomCompliment =
    compliment[Math.floor(compliment.length * Math.random())];

  console.log(`you are ${randomCompliment} ${saif}`);
}
giveCompliment('saif');
giveCompliment('saif');
giveCompliment('saif');
