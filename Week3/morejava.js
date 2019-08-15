//Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3));

//Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(x) {
    return 'a ' + x + ' car';
}
console.log(colorCar('red'))

//Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let funObject = {
    name: 'Lama',
    age: 30,
    city: 'Amsterdam'
}

function printOut(z) {
    console.log(z)
}
printOut(funObject);

//Create a function named vehicleType that receives a color,
//and a code, 1 for car, 2 for motorbike.
//And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
    if (code === 1) {
        console.log('a ' + color + ' car');
    }
    if (code === 2) {
        console.log('a ' + color + ' motorbike');
    }
}
vehicleType("blue", 2)
vehicleType("red", 1)


//Can you write the following without the if statement,
//but with just as a single line with console.log(...);?

if (3 === 3) {
    console.log("yes");
} else {
    console.log("no");
}

console.log((3 === 3) ? 'yes' : 'no');

//Create a function called vehicle, like before, 
//but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, years) {
    if (code === 1 && years < 2) {
        console.log('a ' + color + ' new car')


    }
    if (code == 1 && years >= 2) {
        console.log('a ' + color + ' used car')


    }
    if (code == 2 && years < 2) {
        console.log('a ' + color + ' new motorbike')


    }
    if (code == 2 && years >= 2) {
        console.log('a ' + color + ' used motorbike')


    }

}
vehicle("blue", 1, 5);

//Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

listOfVehicles = ["motorbike", "caravan", "bike", "car"];
//How do you get the third element from that list?
listOfVehicles[2];
console.log(listOfVehicles[2]);

//Change the function vehicle to use the list of question 7.
//So that vehicle("green", 3, 1) prints "a green new bike".
function newVehicle(color, code, years) {
    if (years < 2) {
        console.log('a ' + color + ' new ' + listOfVehicles[code - 1]);
    }
    if (years >= 2) {
        console.log('a ' + color + ' used ' + listOfVehicles[code - 1]);
    }
  
}
newVehicle("green", 3, 1);//a green new bike
newVehicle("black", 4, 8);//a black used car

//Use the list of vehicles to write an advertisement.
//So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
function advertisement(listOfVehicles) {
    let adv = "Amazing Joe's Garage, we service "

    for (let i = 0; i < listOfVehicles.length; i++) {
        adv += (listOfVehicles[i] + "s, ")
    }
    console.log(adv + listOfVehicles[listOfVehicles.length - 2] + "s and " + listOfVehicles[listOfVehicles.length - 1] + "s.")
}
advertisement(listOfVehicles);

//What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
listOfVehicles.push('train');
console.log(listOfVehicles);

//Create an empty object.
let obj = {};

//Create an object that contains the teachers that you have had so far for the different modules.
const teachersInfo = {
    names: ["Philip", "Unmesh", "Yash"]
};


console.log(teachersInfo);

//Add a property to the object you just created that contains the languages that they have taught you.
teachersInfo.languages = ['HTML/CSS', 'CLI', 'JavaScript1'];
console.log(teachersInfo);


//Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y); //false 
console.log(x === y); //false 
console.log(z == y); //true
console.log(z == x) //false

//Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(o1); //foo: "bar"
console.log(o2);//foo: "bar"
console.log(o3);//foo: "bar"


//Show that changing o2 changes o3 (or not)
o2 = {
    foo: "changed"
};
console.log(o2);//foo: "changed"
console.log(o3);//foo: "bar"

//and changing o1 changes o3(or not).
o1 = {
    foo: "changed"
};

console.log(o1);//foo: "changed"
console.log(o3);//foo: "bar"

/*So when I change an object that does not affect any of the others*/

//What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;
let theType = typeof bar;
console.log(theType); //number
console.log(typeof theType); //string
/*Because the type of 42 is a number, but the type of a number is a string*/





