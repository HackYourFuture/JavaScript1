// Tasks called More JavaScript

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(3,4,6));

// 2. Create a function named colorCar that receives a color,
//    and prints out, 'a red car' for example.

function colorCar(color) {
    console.log("a " + color + " car");
}

colorCar("blue");

// 3. Create an object and a function that takes the object as a parameter
//    and prints out all of its properties and values.

const car = {
    color: "red",
    type: "sedan",
    fuel: "diesel",
    engineCapacity: 3,
    electric: false
};

function printObject(car) {
    console.log(car);
}

printObject(car);

// 4. Create a function named vehicleType that receives a color, and a code, 
//    1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when 
//    called as vehicleType("blue", 2)

function vehicleType(color, code) {
    const vehicle = code === 1 ? "car" : code === 2 ? "motorbike" : "invalid";
    if (vehicle === "invalid") {
        console.log("Please provide a valid code!");
    } else {
        console.log("a " + color + " " + vehicle);
    }
}

vehicleType("black", 1);

// 5. Can you write the following without the if statement, but with just as 
//    a single line with console.log(...);?

// if (3 === 3) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }

console.log(3 === 3 ? "yes" : "no");

// 6. Create a function called vehicle, like before, but takes another parameter 
//    called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
    const vehicle = code === 1 ? "car" : code === 2 ? "motorbike" : "invalid";
    if (vehicle === "invalid") {
        console.log("Please provide a valid code!");
    } else if (typeof age !== "number" || age < 0) {
        console.log("Please provide a valid age!");
    } else if (age > 1) {
        console.log("a " + color + " used " + vehicle);
    } else {
        console.log("a " + color + " new " + vehicle);
    }
}

vehicle("green", 2, 1);

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let vehicles = ["motorbike", "caravan", "bike", "car", "UFO"];

// 8. How do you get the third element from that list?

const thirdElement = vehicles[2];
console.log(thirdElement);

// 9. Change the function vehicle to use the list of question 7. 
//    So that vehicle("green", 3, 1) prints "a green new bike".

function specialVehicle(color, code, age) {
    const vehicle = vehicles[code - 1];
    if (vehicle === undefined) {
        console.log("No vehicle for this element! The code must be between 1 and 5!");
    } else if (typeof age !== "number" || age < 0) {
        console.log("Please provide a valid age!");
    } else if (age > 1) {
        console.log("a " + color + " used " + vehicle);
    } else {
        console.log("a " + color + " new " + vehicle);
    }
}

specialVehicle("yellow", 3, 2);

// 10. Use the list of vehicles to write an advertisement. So that it prints something 
//     like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". 
//     (Hint: use a for loop.)

// using join()
function advertiseWithJoin() {
    const vehicleList = vehicles.join("s, ");
    console.log("Amazing Joe's Garage, we service " + vehicleList + "s.");
}

advertiseWithJoin();

// using for loop
function advertiseWithLoop() {
    let advertisementText = "Amazing Joe's Garage, we service ";
    for (let e = 0; e < vehicles.length; e++) {
        if (e !== vehicles.length - 1) {
            advertisementText += vehicles[e] + "s, ";
        } else {
            advertisementText += vehicles[e] + "s.";
        }
    }
    console.log(advertisementText);
}

advertiseWithLoop();

// using another for loop
function advertiseWithAnotherLoop() {
    let advertisementText = "Amazing Joe's Garage, we service ";
    for (let element of vehicles) {
        if (element !== vehicles[vehicles.length - 1]) {
            advertisementText += element + "s, ";
        } else {
            advertisementText += element + "s.";
        }
    }
    console.log(advertisementText);
}

advertiseWithAnotherLoop();

// 11. What if you add one more vehicle to the list, can you have that 
//     added to the advertisement without changing the code for question 10?

vehicles.push("plane", "boat", "train");
advertiseWithJoin();
advertiseWithLoop();
advertiseWithAnotherLoop();

// 12. Create an empty object.

const emptyObj = {};

// 13. Create an object that contains the teachers that you 
//     have had so far for the different modules.

let hackYourFuture = {teachers: ["Philipp", "Rob", "Hardit", "Unmesh", "Sander", "Marciano"]};
console.log(hackYourFuture);

// 14. Add a property to the object you just created that 
//     contains the languages that they have taught you.

hackYourFuture.languages = ["html", "css", "Git", "javascript"];
console.log(hackYourFuture);

// 15. Write some code to test two arrays for equality using == and ===. 
// Test the following:

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

// Don't cheat! Seriously - try it first.

// Check out this Fiddle. You need to open your browser’s Developer 
// Tools to see the console output. Press the Run button in the upper right 
// corner to run the code.

// More insights from this Stack Overflow question.

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log("x == y, x === y, z == y and z == x seems like true conditions. Let's try!");
console.log("x == y : " + (x == y));
console.log("x === y : " + (x === y));
console.log("z == y : " + (z == y));
console.log("z == x : " + (z == x));

console.log("So there seems to be a special situation for arrays (or objects).");
console.log("Even if two seperately created arrays have identical elements,"); 
console.log("type, length, order, etc, they are still not the same for JS.");
console.log("It is about the reference thing that objects have.");

// 16. Take a look at the following code:

// let o1 = { foo: "bar" };
// let o2 = { foo: "bar" };
// let o3 = o2;
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(o3); // same as o2
console.log("o3 === o2 : " + (o3 === o2)); // true
console.log("o2 === o3 : " + (o2 === o3)); // true
o2 = { boo : "far" };
console.log(o2); // new o2
console.log(o3); // does not change
console.log("o2 === o3 : " + (o2 === o3)); //false

o2 = o3;
console.log(o2); // {foo: "bar"}
console.log("o3 === o2 : " + (o3 === o2)); // true
o2.boo = "far";
console.log(o2); // {foo: "bar", boo: "far"}
console.log(o3); // {foo: "bar", boo: "far"} -- o3 changes but why now? is it because of order?
console.log("o3 === o2 : " + (o3 === o2)); // true
o2 = { foo: "bar" };
console.log(o2); // { foo: "bar" }
console.log(o3); // {foo: "bar", boo: "far"}
console.log("o3 === o2 : " + (o3 === o2)); // false 

// the method that I change the object matters in terms of equality!
// it is NOT about the order I assign (o3 = o2 or o2 = o3)

//let's try for o1 and o3 
o1 = { foo: "bar" };
o2 = { foo: "bar" };
o3 = o2;

console.log("o1 === o3 : " + (o1 === o3)); // false - not the same at first anyway
o1.boo = "far";
console.log(o3); // stays the same, does not change

// 17. What does the following code return? (And why?)

// let bar = 42;
// typeof typeof bar;

let bar = 42;
let whatType = typeof bar;
console.log("Type of bar: " + whatType); // number
whatType = typeof typeof bar;
console.log("type of 'typeof bar': " + whatType); // string
console.log("When I ask for the type of 42, it is number. But the type of 'number' is string!")
