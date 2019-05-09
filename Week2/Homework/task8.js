// TASK-8

// 8. Write a program that checks the types of two 
// variables and prints out SAME TYPE if they are the same type.
// 8.1 First declare at least four variables and 
// assign them different data types.
// 8.2 For each variable write a console.log statement that logs the value

// let foo = 3;
// console.log("The value of my variable foo is: " + foo);
// (Curious to know what a foo is? Check this article on Wikipedia.)

// 8.3 Now write a console.log statement wherein you 
// first explain in words what you think the type of your variables is.
// 8.4 Now use typeof to log the actual type of your variables.
// 8.5 Now compare the types of your different variables with one another.
// 8.6 Make sure to also show a message when the 
// variables you are comparing are not the same type.

const foo = 9;
const waldo = "find me";
const awesome = true;
const cities = ["Amsterdam", "Rotterdam", "Groningen"];
let boo;
const car = {};

console.log("The value of my variable foo is: " + foo);
console.log("The value of my variable waldo is: " + waldo);
console.log("The value of my variable awesome is: " + awesome);
console.log("The value of my variable cities is: " + cities);
console.log("The value of my variable boo is: " + boo);
console.log("The value of my variable car is: " + car);

console.log("The type of my variable foo will be: number");
console.log("The type of my variable waldo will be: string");
console.log("The type of my variable awesome will be: boolean");
console.log("The type of my variable cities will be: object (array)");
console.log("The type of my variable boo will be: undefined");
console.log("The type of my variable car will be: object");

console.log(typeof foo);
console.log(typeof waldo);
console.log(typeof awesome);
console.log(typeof cities);
console.log(typeof boo);
console.log(typeof car);

if (typeof foo === typeof waldo) {
    console.log("\'" + foo + "\'" +" and "+ "\'" + waldo + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + foo + "\'" +" and "+ "\'" + waldo + "\'" + " do NOT have the same type!");
}

if (typeof foo === typeof awesome) {
    console.log("\'" + foo + "\'" +" and "+ "\'" + awesome + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + foo + "\'" +" and "+ "\'" + awesome + "\'" + " do NOT have the same type!");
}

if (typeof foo === typeof cities) {
    console.log("\'" + foo + "\'" +" and "+ "\'" + cities + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + foo + "\'" +" and "+ "\'" + cities + "\'" + " do NOT have the same type!");
}

if (typeof foo === typeof boo) {
    console.log("\'" + foo + "\'" +" and "+ "\'" + boo + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + foo + "\'" +" and "+ "\'" + boo + "\'" + " do NOT have the same type!");
}

if (typeof foo === typeof car) {
    console.log("\'" + foo + "\'" +" and "+ "\'" + car + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + foo + "\'" +" and "+ "\'" + car + "\'" + " do NOT have the same type!");
}

if (typeof waldo === typeof awesome) {
    console.log("\'" + waldo + "\'" +" and "+ "\'" + awesome + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + waldo + "\'" +" and "+ "\'" + awesome + "\'" + " do NOT have the same type!");
}

if (typeof waldo === typeof cities) {
    console.log("\'" + waldo + "\'" +" and "+ "\'" + cities + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + waldo + "\'" +" and "+ "\'" + cities + "\'" + " do NOT have the same type!");
}

if (typeof waldo === typeof boo) {
    console.log("\'" + waldo + "\'" +" and "+ "\'" + boo + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + waldo + "\'" +" and "+ "\'" + boo + "\'" + " do NOT have the same type!");
}

if (typeof waldo === typeof car) {
    console.log("\'" + waldo + "\'" +" and "+ "\'" + car + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + waldo + "\'" +" and "+ "\'" + car + "\'" + " do NOT have the same type!");
}

if (typeof awesome === typeof cities) {
    console.log("\'" + awesome + "\'" +" and "+ "\'" + cities + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + awesome + "\'" +" and "+ "\'" + cities + "\'" + " do NOT have the same type!");
}

if (typeof awesome === typeof boo) {
    console.log("\'" + awesome + "\'" +" and "+ "\'" + boo + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + awesome + "\'" +" and "+ "\'" + boo + "\'" + " do NOT have the same type!");
}

if (typeof awesome === typeof car) {
    console.log("\'" + awesome + "\'" +" and "+ "\'" + car + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + awesome + "\'" +" and "+ "\'" + car + "\'" + " do NOT have the same type!");
}

if (typeof cities === typeof boo) {
    console.log("\'" + cities + "\'" +" and "+ "\'" + boo + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + cities + "\'" +" and "+ "\'" + boo + "\'" + " do NOT have the same type!");
}

if (typeof cities === typeof car) {
    console.log("\'" + cities + "\'" +" and "+ "\'" + car + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + cities + "\'" +" and "+ "\'" + car + "\'" + " do NOT have the same type!");
}

if (typeof boo === typeof car) {
    console.log("\'" + boo + "\'" +" and "+ "\'" + car + "\'" + " HAVE the same type!");
} else {
    console.log("\'" + boo + "\'" +" and "+ "\'" + car + "\'" + " do NOT have the same type!");
}

