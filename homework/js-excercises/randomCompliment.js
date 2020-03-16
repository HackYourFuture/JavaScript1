'use strict'
function giveCompliment (name) {
  const compliments = ['cool', 'great', 'funny', 'looking good', 'awesome', 'amazing', 'hilarious', 'something', 'one of a kind', 'the best'];
  // Getting a random number between two inclusive integer values according to the following formula Math.floor(Math.random() * (max-min +1)) +min; (source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) , in our case min =0 , and max=9.
  let i = Math.floor(Math.random()*10);
  return `You are ${compliments[i]}, ${name}!`;
}
console.log(giveCompliment('Anis'));
console.log(giveCompliment('Anis'));
console.log(giveCompliment('Anis'));

