/************************************  ARRAYS *************************************************/

// 2 
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

// 2.1  Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.

favoriteAnimals.push("turtle");

// 2.2  Log your new array!

console.log(favoriteAnimals); //     (4) ["blowfish", "capricorn", "giraffe", "turtle"]

// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.

favoriteAnimals.splice(1,0,"meerkat");

console.log(favoriteAnimals); //    (5) ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]

// 2.4 Write a console.log statement that explains in words you think the new value of the array is.

console.log('value of the favoriteAnimals array :["blowfish", "meerkat", "capricorn", "giraffe", "turtle"] ')

// 2.5 Log your new array!

console.log(favoriteAnimals); //    (5) ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]

// 2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).

console.log(favoriteAnimals.length);    //  5
console.log('The array has a length of: 5');   

// 2.7 Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3,1);

// 2.8 Again log your new array.

console.log(favoriteAnimals);   //  (4) ["blowfish", "meerkat", "capricorn", "turtle"]

// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?

const indexofmeerkat = favoriteAnimals.indexOf("meerkat");
console.log(indexofmeerkat);    //  1

// 2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).

console.log('The item you are looking for is at index: 1 ');



