{
  let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
  console.log(favoriteAnimals);

  // Add Mauro's favorite animal 'turtle' to the array:

  favoriteAnimals.push('turtle');
  console.log(favoriteAnimals); // ["blowfish", "capricorn", "giraffe", "turtle"]

  // Add Jim's favorite animal as index 1 to the array.
  //This can be done using .splice(index, 0, 'replacer')
  //0 means keeping of the existing element in the array. While 1 means to remove it

  favoriteAnimals.splice(1, 0, 'meerkat');
  console.log(favoriteAnimals); // ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]

  console.log('The array has a length of: ' + favoriteAnimals.length);

  // Delete en element from the array.
  favoriteAnimals.splice(3, 1);
  console.log(favoriteAnimals);

  // To find the endex of an element in the array:
  console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat'));
}
