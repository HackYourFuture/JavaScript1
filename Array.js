// Arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

// Add a statement 
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

// placed after 'blowfish'
favoriteAnimals.splice(1,0,'meerkat');
console.log(favoriteAnimals[1]);
console.log(favoriteAnimals);
console.log('The array has a lenghrh of : ' + favoriteAnimals.length);

// Jason does not like 'giraffe', 
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);


//index of the item in the array,
let indexOfItem = favoriteAnimals.indexOf("meerkat");
console.log('The item you are looking for is at index: '+indexOfItem);
