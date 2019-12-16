'use strict';

// giveCompliment function with parameter (myname)in it araay inc 10 strings
function giveCompliment(Amna) {
    const compliment = [
    'great',
    'awesome',
    'Lief',
    'Stevig',
    'Calm',
    'Inteligent',
    'Behulpzaam',
    'Handig',
    'Sportief',
    'Geduldig',
  ];
  //make random compliment
  const randomCompliment =
    compliment[Math.floor(compliment.length * Math.random())];

  // (tody Compliment);
  console.log(`you are ${randomCompliment} ${Amna}`);
}
giveCompliment('Amna');
giveCompliment('Amna');
giveCompliment('Amna');