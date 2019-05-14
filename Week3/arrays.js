let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

console.log(favoriteAnimals);

favoriteAnimals.splice( 1, 0, "meerkat");

console.log(

    'Splice methods takes 3 args. First arg: Index wich you will add the element second: number of elements to be deleted third: value of the element to be inserted'

);

console.log(favoriteAnimals);

console.log('the length of the array is: ' + favoriteAnimals.length);

favoriteAnimals.pop();

console.log(favoriteAnimals);

console.log("the item you are looking for is at index " + favoriteAnimals.indexOf("meerkat"));

favoriteAnimals.splice(favoriteAnimals.indexOf("meerkat"),1);

console.log(favoriteAnimals);

