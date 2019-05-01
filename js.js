console.log("hello world!");
console.log("hallo wereld!");
console.log("selam dunya!");

console.log("I'm awesome");
console.log('I\'m awesome');


let x;
console.log("the value of x is undefined");
console.log(x);
x = 5;
console.log("the value of x is 5");
console.log(x);


let y = "string";
console.log("the value of y is string");
console.log(y);
y = "new string";
console.log("the value of y now is 'new string'");
console.log(y);


let z = 7.25;
console.log(z);
let a = Math.floor(z);
console.log(a);
let h;
if (z>a){
    h = z ;
}else {
    h = a;
};
console.log("the highest value is "+h);

let friends = [];
console.log("the value is array");
console.log(friends);
let myFavoriteAnimals = ["cat's","fish's","turtle's","bird's"];
console.log(myFavoriteAnimals);
myFavoriteAnimals[4] = "Daan's";
console.log(myFavoriteAnimals);


let myString = "this is a test";
console.log(myString);
console.log(myString.length);

let m = 5;
let n = "rami";
let o = [1];
let p = true;
console.log("the value of m is " + m);
console.log("the value of n is " + n);
console.log("the value of o is " + o);
console.log("the value of p is " + p);
console.log("the type of m is number");
console.log("the type of n is string");
console.log("the type of o is opject");
console.log("the type of p is boolean");
console.log("m = " + typeof m);
console.log("n = " + typeof n);
console.log("o = " + typeof o);
console.log("p = " + typeof p);
if (typeof m == typeof n ){
    console.log("m is the same type of n");
}else{
    console.log("m is not the same type of n");
}
if (typeof m == typeof o ){
    console.log("m is same type of o");
}else{
    console.log("m is not the same type of o");
}
if (typeof m == typeof p ){
    console.log("m is the same type of p");
}else{
    console.log("m is not the same type of p");
}
if (typeof n == typeof o ){
    console.log("n is the same type of o");
}else{
    console.log("n is not the same type of o");
}
if (typeof n == typeof p ){
    console.log("n is the same type of p");
}else{
    console.log("n is not the same type of p");
}
if (typeof o == typeof p ){
    console.log("o is the same type of p");
}else{
    console.log("o is not the same type of p");
}


x = 7;
x = x % 3;
console.log("new value of x is 1 because ' 7 / 3 = 2 and 1 left'");
console.log(x);
q = 15;
q = q % 2 ;
console.log("new value of q is 1 because ' 15 / 2 = 7 and 1 left'");
console.log(q);
w = 15 % 4 ;
console.log("the value of w is 1 because ' 15 / 4 = 3 and 3 left'");
console.log(w);

//multiple type array
let myArray = [
    "me",
    2,
    "you2",
    4,
    true
];
//comparing infinties
if (6/0 === 10/0){
    console.log("true");
}else {
    console.log("false");
}
console.log("dividing any number on zero will return infinty as a result ");
