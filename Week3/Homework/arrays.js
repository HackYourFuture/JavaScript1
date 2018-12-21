let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

// 2.1
favoriteAnimals.push('turtle');

// 2.2
console.log(favoriteAnimals);

// 2.3
favoriteAnimals.splice(1, 0, 'meerkat');

// 2.4
console.log(`I think the new value of the favoriteAnimals array will be: ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]`);

// 2.5
console.log(favoriteAnimals);

// 2.6
console.log(`The arrat has a length of ${favoriteAnimals.length}.`)

// 2.7
favoriteAnimals.pop();

// 2.8
console.log(favoriteAnimals);

// 2.9 - 2.10
function findMeerkat(val) {
  return val === "meerkat";
}

favoriteAnimals.indexOf(favoriteAnimals.find(findMeerkat));

console.log(`The item you are looking for is at index: ${favoriteAnimals.indexOf(favoriteAnimals.find(findMeerkat))}.`);