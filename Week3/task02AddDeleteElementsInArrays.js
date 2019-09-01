let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log('an array is: '+favoriteAnimals);
function mauroFavoriteAnimal() {
    favoriteAnimals.splice([favoriteAnimals.length], 0, 'turtle');
    console.log('a new array is: '+favoriteAnimals);
};
mauroFavoriteAnimal();
function jimFavoriteAnimal() {
    favoriteAnimals.splice(1, 0, 'meerkat');
    console.log('a new array is: '+favoriteAnimals);
};
jimFavoriteAnimal();
console.log("I think this line is very strange. I don't know why am I writing it :(");
console.log('The array has a length of: '+favoriteAnimals.length);
function deleteGiraffe() {
    let giraffe = favoriteAnimals.indexOf("giraffe");
    favoriteAnimals.splice([giraffe], 1);
    console.log('a new array is: '+favoriteAnimals);
};
deleteGiraffe();
function deleteMeerkat() {
    let meerkat = favoriteAnimals.indexOf("meerkat");
    console.log('The item you are looking for is at index: '+meerkat);
    favoriteAnimals.splice([meerkat], 1);
    console.log('a new array is: '+favoriteAnimals);
};
deleteMeerkat();
