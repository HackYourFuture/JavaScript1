// Array 


let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push('turtle');

console.log(favoriteAnimals); // [ 'blowfish', 'capricorn', 'giraffe', 'turtle' ]

favoriteAnimals.splice(1, 0, 'meerkat');

console.log("My favorite Animals are:")

console.log(favoriteAnimals); // [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]

console.log("The array has a length of: " + favoriteAnimals.length); // The array has a length of: 5

favoriteAnimals.splice(3, 1)

console.log(favoriteAnimals); // [ 'blowfish', 'meerkat', 'capricorn', 'turtle' ]

let index = favoriteAnimals.findIndex(favoriteAnimals => favoriteAnimals === "meerkat");

console.log("The item you are looking for is at index: " + index); // The item you are looking for is at index: 1

console.log(favoriteAnimals[index]); // meerkat