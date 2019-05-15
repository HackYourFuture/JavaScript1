//1.Strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
myString=myString.replace(/,/g, " "); // that's totally google answer i couldn't find what the g stands for
console.log(myString);



//2 Arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
// add Mauro's favorite animal 'turtle' 
favoriteAnimals[3]="turtle";
console.log(favoriteAnimals);



//add Jim's favorite animal to the array, it's 'meerkat',to be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(favoriteAnimals.length/ 3, 0, "meerkat");
console.log("blowfish", "meerkat", "capricorn", "giraffe", "turtle");
console.log(favoriteAnimals);



// length of the array
console.log("The array has a length of: " + favoriteAnimals.length);



//  delete 'giraffe' from the array
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);




// how to find the position or the index of the item 'meerkat' in the array?
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf("meerkat"));
