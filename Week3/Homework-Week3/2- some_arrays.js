let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat"); // adding meerkat to array
console.log("The new value of array will be [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]");
console.log(favoriteAnimals);
console.log("The array has a length of: ", favoriteAnimals.length);
favoriteAnimals.splice(3, 1); //delete giraffe
console.log(favoriteAnimals);
var indexOfMeerkat;
for (let i = 0; i < favoriteAnimals.length; i++) {
    if (favoriteAnimals[i] == "meerkat") {
        indexOfMeerkat = i;
    }
}
console.log("The item you are looking for is at index: ", indexOfMeerkat);