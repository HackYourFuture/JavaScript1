//Q1

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log("myString: the result will be 'hello,this,is,a,difficult,to,read,sentence'");
console.log(myString);
console.log('the lenght of myString will be 42');
console.log(myString.length);

let myNewString = myString.split(',').join(' ');

myString = myNewString;

console.log("myString: the result will be 'hello this is a difficult to read sentence'");
console.log(myString);

//Q2

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log('favoriteAnimals : the result will be: blowfish, capricorn, giraffe, turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat');
console.log(favoriteAnimals); //expected output: blowfish meerkat capricorn giraffe turtle
console.log(favoriteAnimals.length); //expected output: 5

favoriteAnimals.splice(
  3,
  1,
); /*i could also use the delete() method. but I learnt that it does not do reindexing. 
So, if I do favoriteAnimals.delete(3) and console.log(favoriteAnimals[3]), the result will be undefined. 
This is not we exactly wanted.*/
console.log(favoriteAnimals); //expected outcome : blowfish meerkat capricorn turtle.

var indexFinder = favoriteAnimals.Index('meerkat');
console.log('The item you are looking for is at index ' + indexFinder); //expected outcome: The item you are looking for is at index 1
