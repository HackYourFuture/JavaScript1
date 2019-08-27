const favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat');
console.log('value of the favoriteAnimals: ' + favoriteAnimals);

console.log(favoriteAnimals);

console.log('The array has a length of: ' + favoriteAnimals.length);

removedAnimal = favoriteAnimals.splice(3, 1);

console.log(favoriteAnimals);

const index = favoriteAnimals.indexOf('meerkat');

console.log('The item you are looking for is at index: ' + index);
