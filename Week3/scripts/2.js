function twee(){
    console.clear();

    let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
    favoriteAnimals.push("turtle");
    console.log(favoriteAnimals);
    favoriteAnimals.splice(1, 0, "meerkat");
    console.log("I think the new value of the array is: ['blowfish','meerkat', 'capricorn', 'giraffe']");
    console.log(favoriteAnimals);
    console.log("The array has a length of: " + favoriteAnimals.length);
    favoriteAnimals.splice(3,1);
    console.log(favoriteAnimals);
    console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf("meerkat"));
    
}