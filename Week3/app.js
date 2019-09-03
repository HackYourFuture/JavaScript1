// 1.Strings
const myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
const newStr = myString.split(",");
console.log(newStr);
const strStr = newStr.join(" ");
console.log(strStr);
// console.log(myString.split(",").join(" "));

// 2.Arrays
const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
// new arry  ["blowfish", "meerkat", "capricorn", "giraffe","turtle"]
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
// 2.9 ~2.10
for (let a = 0; a < favoriteAnimals.length; a++) {
    if (favoriteAnimals[a] === "meerkat") {
        console.log("The item you are looking for is at index: " + a);
    }
}

// More JavaScript 
// 1.Create a function that takes 3 arguments and returns the sum of the these arguments.
function sumArg(arg1=0, arg2=0, arg3=0) {
    // let sum = arg1 + arg2 + arg3;
    // return sum;
    return arg1 + arg2 + arg3;
}
console.log(sumArg(1, 2, 3));

// 2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
    const carColor = "a " + color + " car";
    return carColor;
}
console.log(colorCar("red"));

// 3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const testObj = {
    s: "Name",
    d: "Age",
    f: "DOB"
};
function proObj(obj) {
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}
proObj(testObj);

// 4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
let codeVehicle = {
    1: "car",
    2: 'motorbike'
};
function vehicleType(color, code) {
    console.log("a " + color + " " + codeVehicle[code]);
}
vehicleType("blue", 2);

// 5.Can you write the following without the if statement, but with just as a single line with console.log(...);?
let h = (3 === 3) ? "yes" : "no";
console.log(h);

// 6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, code, age) {
    if (age === 1) {
        console.log("a " + color + " " + "new " + codeVehicle[code]);
    } else{
        console.log("a " + color + " " + "used " + codeVehicle[code]);
    }
}
vehicle("blue", 1, 5);

// 7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let listVehicles = ["cars","motorbike", "caravan", "bike"];
// 8.How do you get the third element from that list?
console.log(listVehicles[2]);

// 9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function newVehicle(color, code, age) {
    if (age === 1) {
        console.log("a " + color + " " + "new " + listVehicles[code - 1]);
    } else{
        console.log("a " + color + " " + "used " + listVehicles[code - 1]);
    }
}
newVehicle("green", 3, 1);

// 10.Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
let advertisement = "Amazing Joe's Garage, we service ";
for (let q = 0; q < listVehicles.length; q++){
    if (q < (listVehicles.length-1)){
        advertisement = advertisement +  ", " + listVehicles[q];
    } else if (q === (listVehicles.length - 1)){
        advertisement = advertisement + " and " + listVehicles[q] + ".";
    }
}
console.log(advertisement);

// 11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
listVehicles.push("more vehicle");
// codes  in the 10 are not change

// 12.Create an empty object.
let emptyObj = {};

// 13.Create an object that contains the teachers that you have had so far for the different modules.
// 14.Add a property to the object you just created that contains the languages that they have taught you.
let myTeachers = {
    HTML : "Philipp",
    CSS : "Rob",
    CLI : "Unmesh",
    JS1 : "Yash"
};
// console.log(myTeachers);
myTeachers["Git"] = "Yash";
// console.log(myTeachers);

// 15.Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
// x == y  and x === y  ----  false , x and y are arrays and complex data type, they're store different places in Ram.
// z == y -------- true , z and y pointed same place.
// z == x -------- false , they're different place in Ram

const o1 = { foo: "bar" };
const o2 = { foo: "bar" };
const o3 = o2;
// i think o2 changes o3 --( o3 = o2 )  left side(o3) declare by right side(o2), and they're same location in the Ram.
// o1 can't changes o3 they're different location in the memory.
//but  i think the order is important--( o2 = o3 )  left side(o2) already declared 

// 17.What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;
// return  "string" , (typeof bar) is number and 'typeof number' is string.
