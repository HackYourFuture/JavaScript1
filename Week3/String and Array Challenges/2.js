//2 

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0, "meerkat");
console.log(favoriteAnimals); /* I used for splice (
    1) Where do you want to start?
    2) How many elements do you want to move?
    3) Which element do you want to add instead of?
 )
*/
console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);

console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));