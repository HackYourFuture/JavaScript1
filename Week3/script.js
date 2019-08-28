/* *** String! *** */

// 1.1

let myString = 'hello,this,is,a,difficult,to,read,sentence';

console.log(myString);

// 1.2

console.log(myString.length);

// 1.3 & 1.4

console.log(myString.replace(/,/g, ' '));

/* ***Arrays!*** */

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

// 2.1

favoriteAnimals.push('turtle');

// 2.2

console.log(favoriteAnimals);

// 2.3

favoriteAnimals.splice(1, 0, 'meerkat');

// 2.4

console.log('favoriteAnimals will be: ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"] ');

// 2.5

console.log(favoriteAnimals);

// 2.6

console.log('The array has a length of : 5');

// 2.7

favoriteAnimals.splice(3, 1);

// 2.8

console.log(favoriteAnimals);

// 2.9

console.log(favoriteAnimals.indexOf('meerkat'));

// 2.10

console.log('The item you are looking for is at index: 1');

// 1

function threeArguments(a, b, c) {
  var sum = a + b + c;

  return sum;
}

// 2

function colorCar(color) {
  return 'a ' + color + ' car';
}

console.log(colorCar('red'));

// 3

const personInfo = {
  name: 'Mehmet',
};

const entries = Object.entries(personInfo);

for (const [personInfo, name] of entries) {
  console.log(`His ${personInfo} is ${name}`);
}

// 4

function vehicleType(color, code) {
  let type = '';
  if (code === 1) {
    type = ' car';
  }
  if (code === 2) {
    type = ' motorbike';
  }

  console.log('a ' + color + type);
}

vehicleType('blue', 2);

// 5

console.log(3 === 3 ? 'yes' : 'no');

// 6

function vehicle(color, code, age) {
  let type,
    condition = '';

  if (code === 1) {
    type = ' car';
  } else if (code === 2) {
    type = ' motorbike';
  }

  if (age >= 2) {
    condition = ' used';
  } else if (age >= 0 && age <= 1) {
    condition = ' new';
  }

  console.log('a ' + color + condition + type);
}
vehicle('blue', 1, 5);

// 7

let vehicles = ['motorbike', 'caravan', 'bike', 'car'];

// 8

console.log(vehicles[2]);

// 9

function newVehicle(color, code, age) {
  let type,
    condition = '';
  
  type = vehicles[code - 1];
  
  if (age >= 2) {
    condition = ' used';
  }
  if (age >= 0 && age <= 1) {
    condition = ' new';
  }

  console.log('a ' + color + condition + ' ' + type);
}
newVehicle('green', 3, 1);

// 10
let advertisement = "Amazing Joe's Garage, we service ";
function reAdvertisement(str, vehicles) {
  for (let i = 0; i < vehicles.length; i++) {

    if (i === vehicles.length - 1) {
      advertisement += vehicles[i] + '.';
    } else if (i === vehicles.length - 2) {
      advertisement += vehicles[i] + ' and ';
    } else {
      advertisement += vehicles[i] + ', ';
    }
  }
  return advertisement;
}
console.log(reAdvertisement(advertisement, vehicles));

// 11

// If you add more vehicle to array, you will be add to advertisement.
function newFunction() {
  vehicles.push('truck');
  return console.log(reAdvertisement(advertisement, vehicles));
}
newFunction();

// 12

let newObject = {};

// 13

let hackYourFuture = new Object();
hackYourFuture.teacher1 = {};
hackYourFuture.teacher2 = {};
hackYourFuture.teacher3 = {};
hackYourFuture.teacher4 = {};
hackYourFuture.teacher5 = {};

hackYourFuture.teacher1.name = ['Philipp'];
hackYourFuture.teacher2.name = ['Rob'];
hackYourFuture.teacher3.name = ['Unmesh'];
hackYourFuture.teacher4.name = ['Bonan'];
hackYourFuture.teacher5.name = ['Yash'];

console.log(hackYourFuture);

// 14

hackYourFuture.teacher1.language = ['HTML'];
hackYourFuture.teacher2.language = ['CSS'];
hackYourFuture.teacher3.language = ['CLI'];
hackYourFuture.teacher4.language = ['BonGIT-Bashan'];
hackYourFuture.teacher5.language = ['JS'];

console.log(hackYourFuture);

// 15

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

console.log(x == y); // false - reference is not same
console.log(x === y); // false - reference is not same
console.log(z == y); // true - objects returns true when they reference the same memory location.
console.log(z == x); // false - reference is not same

// 16

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;
console.log(o2.foo);
console.log(o3);

console.log(o1 == o2); // false
console.log(o2 == o3); // true
console.log(o3 == o1); // false
console.log(o2 == o1); // false

// when we change o1 whit o3
/*

const o3 = { foo: "bar" };
const o2 = { foo: "bar" };
const o1 = o2;

*/

console.log(o1 == o2); // true
console.log(o2 == o3); // false
console.log(o3 == o1); // false
console.log(o2 == o1); // false

// when we change o2 whit o3, giving syntax error

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// sure. when you use o2 = o3, o2 declares twice. giving syntax error.

// const o1 = { foo: 'bar' };
// const o2 = { foo: 'bar' };
// const o2 = o3;

// 17

// "typeof bar" is number but "typeof typeof bar" will be string.

// because first of all, js will check first typeof which is
// the nearby to variable : (typeof bar) = "number"
// second check will be  (typeof "number") = string.
