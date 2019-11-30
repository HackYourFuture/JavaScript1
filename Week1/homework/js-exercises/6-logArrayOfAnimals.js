'use strict';

const animals = [];

console.log('console will print [] beacuse it\'s empty array.');
console.log(animals);
console.log(typeof animals); // will print object.

const myFavoriteAnimals = [ 'mandarin duck', 'dolphin', 'Arctic fox'];

console.log(myFavoriteAnimals);

myFavoriteAnimals.push('Piglet'); // insert variables from the end of array
console.log(myFavoriteAnimals);

//or we can use unshift to 

myFavoriteAnimals.unshift('Piglet'); //insert variables from the begining of array
myFavoriteAnimals.pop(); // removed variables from the end of array
console.log(myFavoriteAnimals);
