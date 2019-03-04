// for the first task i will do it with many ways just for practising.
console.log ("Halo, dunia! ,Ciao, mondo! ,Hola, mundo!");

let indonesian = "Halo, dunia!";
let italian = "Ciao, mondo!";
let spanish = "Hola, mundo!";
console.log(indonesian ,italian, spanish );

let helloWorld = [`${indonesian}` ,`${italian}` ,`${spanish}`];
console.log(helloWorld);
console.log(helloWorld[0]);
console.log(helloWorld[1]);
console.log(helloWorld[2]);

let helloWorld2 = ["Halo, dunia!" ,"Ciao, mondo!" ,"Hola, mundo!"];
console.log(helloWorld2);
console.log(helloWorld2[0]);
console.log(helloWorld2[1]);
console.log(helloWorld2[2]);
console.log(helloWorld2.join("-"));
console.log(helloWorld2.reverse());

let helloWorld3 = {
    indonesian: "Halo, dunia!",
    italian: "Ciao, mondo!",
    spanish: "Hola, mundo!"
   };
console.log(helloWorld3);
console.log(helloWorld3.indonesian);
console.log(helloWorld3.italian);
console.log(helloWorld3.spanish);
// end of task 1.


// task 2:
console.log("I'm awesome");

// task 3:
let x;
console.log("the value of my variable x will be: 32");
console.log(x);
x = 32;
console.log("x will be :32 ");
console.log(x);

// task 4:
let y = "Hello, Yash"
console.log("the value of my string will be: Hello, Yash ");
console.log(y);
y = "Hiiii, Yash"
console.log("the value of my string will be: Hiiii, Yash ");
console.log(y);

// task 5:
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
console.log(a > z , z > a );
if (z > a) {
    let m = z;
    console.log(m);
}
else{ 
    m = a;
    console.log(m);}


// task 6:
let animals;
console.log("the value of my array will be: cat, dog, hamster");
console.log(animals);
let myFavoriteAnimals = ["cat", "dog", "hamster"];
console.log(myFavoriteAnimals);
myFavoriteAnimals[3] = "baby pig"
console.log(myFavoriteAnimals);

// task 7:
let myString = "this is a test";
console.log(myString);
let theLengthOfMyString = myString.length;
console.log(theLengthOfMyString);
/* i did the previous two steps 
just because they are in the task as two steps 
but you can  do it just with the following step */
console.log(myString.length);

// task 8:
let name = "mike";
let age = 32;
let favoriteAnimals = ["cat", "dog"];
let fact = 1 < 2;
console.log(name);
console.log(age);
console.log(favoriteAnimals);
console.log(fact);
console.log("the type of my variables is: string, number, array, boolean");
console.log(typeof name);
console.log(typeof age);
console.log(typeof favoriteAnimals);// i do not know why it showing as an object
console.log(typeof fact);
if (typeof name === typeof age) {
    console.log('SAME TYPE');
}
else {console.log('DIFFERENT TYPE')};

// task 9:
x = 7;
x = x % 3;
console.log(x);
// x will be (1).
console.log("5 % 1 = 0  because 1 divides 5 (or any other number perfectly)");
console.log("10 % 3 = 1  Attempting to divide 10 by 3 would leave remainder as 1");
x = 9;
x = x % 5;
console.log("i think x will be 4 " );
console.log(x);


// task 10:
let myinformation = ["mike" ,32 ,"175cm"];
console.log(myinformation);
console.log(6/0 === 10/0);
console.log(6/0 !== 10/0);
console.log(6/0 > 10/0);
if (6/0 === 10/0){
    console.log("yes i can");
}
else {
    console.log("no i can not");
};

















































