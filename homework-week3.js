// 1. Strings!

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);   //hello,this,is,a,difficult,to,read,sentence
console.log(myString.length);   //42

//Find a way to remove the commas from the string and replace them with spaces.
for (let i=0; i<myString.length; i++){
    myString = myString.replace(/,/g, " "); 
    console.log(myString);   //"hello this is a difficult to read sentence"
}

//2. Arrays!

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
//Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push("turtle");

console.log(favoriteAnimals);    //(4) ["blowfish", "capricorn", "giraffe", "turtle"]

//add 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, "meerkat");  // 1: the index of the new element,    0: the number of the elements I want to remove  

console.log("This statement should add the new element 'meerkat' in the second position which has the index 1 without removing any other elements from the existing array.");
console.log(favoriteAnimals);   //(5) ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]

//Log the length of the array
console.log(favoriteAnimals.length);
console.log("The array has a length of: " + favoriteAnimals.length);   //The array has a length of: 5

// delete 'giraffe' from the array.
const removed = favoriteAnimals.splice(3, 1);   // I'll delete more elements => I'll use let to declare my variable
/* 3: the index of the element we want to remove,    
1: how many times we want to repeat the deletion of elements which will have the index 3 after the first deletion 
*/
console.log(favoriteAnimals);    //(4) ["blowfish", "meerkat", "capricorn", "turtle"]

// you want to delete 'meerkat', but you don't know the position or the index of the item in the array, how can you find it?
favoriteAnimals.indexOf("meerkat");     // we find the index of the element ---- it is : 1
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));
//removed = favoriteAnimals.splice(1, 1);  // we delete it using .splice(the index, how many times)
//console.log(favoriteAnimals);


// ------ More JavaScript --------

// 3 arguments function that returns the sum
function sum (a,b,c) {
    return a+b+c;
}
sum (1,2,3);   // 6

//---------colorCar function -----------
function colorCar (color) {
    return "a "+ color + " car";   //the input should be a string .... I tried a lot but couldn't use red as a color not as a string????
} 
colorCar("red");   //"a red car"

//--------vehicle function (obj)---------
const personalInfo = {
    name: "Ghufran", 
    age: 34,
};
function myFunction (obj){      
    return  console.log(personalInfo.name, personalInfo.age);
}
myFunction(personalInfo) // Ghufran 34


// ------ vehicleType function-----------
function vehicleType (color,code) {
    if (code === 1){
        return "a " + color + " car";
    } else {                          
        return "a " + color + " motorbike";
    } 
}
vehicleType("blue", 2)    //"a blue motorbike"

/*
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}
*/
const message = (3 === 3) ? "yes" : "no";
console.log(message);  //      yes

//--------vehicle function (color, code, age)---------
function vehicle (color, code, age){
    if(age >= 5 && code === 1){
        return "a " + color + " used" + " car";
    } else if(age >= 5 && code === 2){
        return "a " + color + " used" + " motorbike";
    }
    else if(age < 5 && code === 1){
        return "a " + color + " new" + " car";
    }
    else if (age < 5 && code === 2){
        return "a " + color + " new" + " motorbike";
    }
}


//---------a list of vehicles--------- 
const listOfVehicles = ["motorbike", "car", "caravan", "bike"];
//----------get the third element---------
listOfVehicles[2];   //"caravan"

//--------vehicle function (color,item , age)---------
function vehicle (color,item , age){
    if (age >= 5 && item < listOfVehicles.length) {
        return "a " + color + " used " + listOfVehicles[item];
    } 
    else if (age < 5 && item < listOfVehicles.length){
        return "a " + color + " new " + listOfVehicles[item];
    } else {
        return "Item is not defined";
    }
  }

vehicle("green", 3, 1)    //"a green new bike"

// -------plurals/ commas + space---------
//const listOfVehicles = ["motorbike", "car", "caravan", "bike"];     (mentioned above)
function loopFunction(listOfVehicles){
    for (let i=0; i < listOfVehicles.length; i++){
       listOfVehicles[i] = listOfVehicles[i] + "s";
    }
    clearListOfVehicles = listOfVehicles.join(', ');   // I couldn't replace the (,) with (and), how?!!!!
    console.log("Amazing Joe's Garage, we service " + clearListOfVehicles + ".");
}   

//-------- adding a vehicle---------
listOfVehicles.push("boat");
console.log(listOfVehicles);

// ----calling the function without changes-------
loopFunction(listOfVehicles)

//-------- empty object-------
let obj = {};

//-------an object that contains the teachers -------
const listOfTeachers = {
    module1:"ze_german" ,
    module2:"unmeshjoshi" ,
    module3: "Yash Kapila",
}
console.log(listOfTeachers);

//Add a property to the object you just created that contains the languages that they have taught you.
listOfTeachers.languges = ["HTML/CSS", "CLI", "JavaScript1"];
console.log(listOfTeachers);

//---------test two arrays equality---------
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;         // I thought all the conditions were true ^^
console.log(x == y);  // false
console.log(x === y);  // false
console.log(z == y);  //true
console.log(z == x);  // false

//Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
//Show that changing o2 changes o3 (or not)
o2 = { 
    foo: "bar", 
    change: "Does not affect",
};
console.log(o2);
console.log(o3);
//and changing o1 changes o3(or not).
o1 = { 
    foo: "bar", 
    change: "Does not affect",
};
console.log(o1);
console.log(o3);
//Does the order that you assign (o3 = o2 or o2 = o3) matter?
console.log("the order that you assign (o3 = o2 or o2 = o3) matters because (o2 = o3) will gives syntax error.");

/*What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;
‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.*/
let bar = 42;
typeof typeof bar;     //"string"
console.log("It will return 'string' because it returns the typeof bar as a value for the second typeof expression");
