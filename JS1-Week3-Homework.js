//Question 1

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length); //output: 42

myString = myString.replace(/,/g, " ");
console.log(myString);

//Question 2

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,'meerkat');
console.log(["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]);
console.log(favoriteAnimals);
console.log('The array has a length of: '+favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
let indexOfMeerkat = favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index: '+indexOfMeerkat);

//More JavaScript 

//Question 1

function sumOfThree (a,b,c) {
    return a+b+c;
}

//Question 2

function colorCar (color) {
    console.log(`a ${color} car`);
}

//Question 3

let myObject = {c:'a'};
function objectFunc (objectName) {
    for (let key in objectName) {
        console.log(key +" "+ objectName[key]);
    }
}

//Question 4

function vehicleType (color, code) {
    vehicle = {1:'car', 2:'motorbike'};
    console.log(`a ${color} ${vehicle[code]}`)
}

//Question 5

(3===3) ? console.log("yes") : console.log("no");

//Question 6

function vehicle (color, code, age) {
    vehicle = {1:'car', 2:'motorbike'};
    (age>1) ? status = 'used' : status = 'new';
    console.log(`a ${color} ${status} ${vehicle[code]}`);
}

//Question 7
let vehicles = ["car", "motorbike", "caravan", "bike"];

//Question 8

console.log(vehicles[2]);

//Question 9

function vehicleNew (color, code, age) {
    vehicles = ["car", "motorbike", "caravan", "bike"];
    (age>1) ? status = 'used' : status = 'new';
    console.log(`a ${color} ${status} ${vehicles[code]}`);
}

//Question 10
function printMessage(arrayVehicle) {
  let vehicles = arrayVehicle;
  let message = "Amazing Joe's Garage, we service ";
  for (let i = 0; i < vehicles.length; i++) {
    if (i === vehicles.length - 1) {
      message = message + `and ${vehicles[i]}s.`;
    } else {
      message = message + `${vehicles[i]}s, `;
    }
  }
  return message;
}

console.log(printMessage(vehicles));

//Question 11

vehicles.push('truck');
console.log(printMessage(vehicles));
console.log("It'll be printing without problem");

//Question 12

let emptyObject = {};

//Question 13

emptyObject.teachers = ['rob', 'philip', 'unmesh'];

//Question 14

emptyObject.languages = ['HTML/CSS', 'GIT', 'JS1'];

//Question 15

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log('x == y will be false, x === y will be false and z == y will be true and z == x will be false');
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//Question 16

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2.newItem = 'not bar';
console.log(o3);

o1.newItem = 'may be bar';
console.log(o3);

//Question 17

let bar = 42;
typeof typeof bar;

console.log(typeof bar);
console.log(typeof typeof bar);
console.log('typeof typeof bar will be returning "string"');
