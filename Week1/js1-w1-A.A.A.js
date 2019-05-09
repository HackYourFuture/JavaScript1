// Greetings

console.log ('Hello World!'); //English

console.log ('Halo, Dunia!'); // Indonesian

console.log ('Ciao Mondo!'); // Italian

console.log ('Hola Mundo!'); // Spanish


// Debug single quote issue

console.log('I\'m awesome');

// Variables & Values

var x;

console.log("the value of my variable x will be: a number");

console.log(x);

x = 12;

console.log("the value of my variable x will be: a number");

console.log(x);

var y = 'Tom';

console.log("the value of my atring y will be: a name");

console.log(y);

var y = y + '&Jerry';

console.log("the value of my string y will be: a cartoon name");

console.log(y);

var z = 7.25;

console.log(z);

// Round z to the closest integer

var round = Math.round;

var a = round(z);

console.log(a);

// Print higher value z or a 

if (a<z) {
    var i = z;
    console.log(i);

} else {
    var i = a;
    console.log(i);

}

// Animals Names

var myFavoriteAnimals;

console.log('The value of heros is: animales\'s names');

console.log(myFavoriteAnimals);

myFavoriteAnimals = ['monkey', 'horse', 'turtle'];

console.log(myFavoriteAnimals);

myFavoriteAnimals = myFavoriteAnimals + [', baby pig'];

console.log(myFavoriteAnimals);

// String Length

let myString = "this is a test";

console.log(myString);

console.log(myString.length);

// Types of Data 

var success = 'Congats! the data type of your variables is identical!';

console.log(success + ' * this is a string');

console.log(typeof success);


var failure = 'Oops! the data type of your variables is different!';

console.log(failure + ' * this is a string');

console.log(typeof failure);


var number = 1;

console.log(number + ' * this is a number');

console.log(typeof number);


var boolean = true;

console.log(boolean +  ' * this is a boolean');

console.log(typeof boolean);


var array = [0, 1, 2, 3, 4];

console.log(array + ' * this is an object');

console.log(typeof array);

// Testing type of data

if (typeof success === typeof failure) {

    console.log(success);

} else {
    console.log(failure);
}


if (typeof success === typeof number) {
    console.log(success);

} else {
    console.log(failure);
}


if (typeof boolean === typeof array) {
    console.log(success);

} else {
    console.log(failure);
}

// Explaining % 

console.log(x);

console.log ('x % 5 will be 2 which is the leftover number that cannot be divided on 5');

console.log(x % 5);

// Array with multiple data types

console.log('following array contains 2 numbers, 2 strings and a boolean');

var multipleTypesArray = [0, 'hero', 2, 'too', false];

console.log(multipleTypesArray);

// Comparing infinities 

if (10/0 === 6/0) {
    console.log('Yes! they\'re equal!');

} else {
    console.log('There\'s no equality in this!');
}