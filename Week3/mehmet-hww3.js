// 1. Strings!
// 1.1 Add the string to your file and log it.
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);

// 1.2 Log the length of myString.
console.log(myString.length);

// 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
let myNewString = myString.replace(/,/g, ' ');

// 1.4 Log myString to see if you succeeded.
console.log(myNewString);

// 2 Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);

// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push('turtle');

// 2.2 Log your new array
console.log(favoriteAnimals);

// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, 'meerkat');

// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log(
  'The new value of the array will be: ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]',
);

// 2.5 Log your new array!
console.log(favoriteAnimals);

// 2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
console.log('The array has a length of:', favoriteAnimals.length);

// 2.7 Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3, 1);

// 2.8 Again log your new array.
console.log(favoriteAnimals);

// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
console.log(favoriteAnimals.indexOf('meerkat'));
// or we can use
const searchTerm = 'meerkat';
const indexOfMeerkat = favoriteAnimals.indexOf(searchTerm);

// note to myself -- in order to delete a specific item from the array:

// for (let i = 0; i < favoriteAnimals.length; i++) {
//   if (favoriteAnimals[i] === 'meerkat') {
//     favoriteAnimals.splice(i, 1);
//   }
// }

// 2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
console.log('The item you are looking for is at index: ' + indexOfMeerkat);

// MORE JAVASCRIPT

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.
