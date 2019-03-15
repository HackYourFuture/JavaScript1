console.log(` 
2. Arrays!`); // how to add or remove input in an array.
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.shift();
favoriteAnimals.unshift('blowfish', 'meerkat');
console.log(favoriteAnimals);
console.log('The array has a length of' + ' ' + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log('The item you are looking for is at index: ' + favoriteAnimals.push('meerkat'));
