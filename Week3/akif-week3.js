//   STRINGS! --------------
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);
console.log(myString.length);
myString = myString.replace(/[,]/g, ' ');
console.log(myString);

//   ARRAYS! -------------------------------------------------
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log("i added a new value 'meerkat' to the array");
console.log(favoriteAnimals);
console.log('The array has a length of: ' + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat'));
favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat'), 1);

//  MORE JAVASCRIPT ! ------------------------------------------------
// -----1111111111111111111-----------
function getSum(a, b, c) {
  return a + b + c;
}

// -----222222222222222222-------------
function colorCar(color) {
  return 'a ' + `${color}` + ' car';
}

//-----3333333333333333333--------------
const myBooks = {
  Dostoyevsky: 'Crime and Punishment',
  'Franz Kafka': 'The Trial',
  'Anne Frank': 'Diaries',
};

function getBook(library) {
  for (let book in library) {
    console.log(book + ' - ' + library[book]);
  }
}
getBook(myBooks);

//  -----444444444444444444------------------
const vehicleCodes = {
  1: 'car',
  2: 'motorbike',
};

function vehicleType(color, code) {
  console.log('A ' + color + ' ' + vehicleCodes[code]);
}

vehicleType('blue', 2);

//  _-------555555555555555555--------------------
console.log(3 === 3 ? 'yes' : 'no');

//  -------66666666666666666666---------------------
function vehicle(color, code, age) {
  const type = age > 0 ? 'used' : 'new';
  console.log('A ' + color + ' ' + type + ' ' + vehicleCodes[code]);
}

vehicle('blue', 1, 5);

// -------777777777777  &&  888888888888888--------------------
let vehicleList = ['car', 'motorbike', 'caravan', 'bike', 'truck'];

console.log('Third element of the array is ' + vehicleList[2]);

//  --------9999999999999999999999 -----------------------------
function vehicle1(color, code, age) {
  if (age > 1) {
    age = 'used';
  } else {
    age = 'new';
  }
  console.log('A ' + color + ' ' + age + ' ' + vehicleList[code]);
}

vehicle1('green', 3, 1);

//-------10 10 10 10 10 10 10 10 ---------------------

// function advertisement(arrname) {
//   for (let i = 0; i < arrname.length; i++) {
//     arrname[i] += 's';
//   }

//   for (let i = 0; i < arrname.length - 2; i++) {
//     arrname[i] += ',';
//   }

//   arrname[arrname.length - 2] += ' and';

//   console.log("Amazing Joe's Garage, we service " + arrname.join(' ') + '.');
// }

function advertisement(arrname) {
  const vehicles1 = arrname.slice(0, arrname.length - 1).join('s, ');
  const lastVehicle = arrname[arrname.length - 1];

  console.log(`"Amazing Joe's Garage, we service ${vehicles1}s and ${lastVehicle}s."`);
}

advertisement(vehicleList);

// --------11 11 11 111 11 11 11 11 ----------------------
vehicleList.push('ship');
advertisement(vehicleList);

// ---12 12 12 12 12 12 12 12 // 13 13 13 // 14 14 14 14 -------------------------
const teachers = {};
teachers.HTML = 'Philipp Beau';
teachers.CSS = 'Rob van Kruijsdijk';
teachers.GIT = 'Unmesh Joshi';
teachers.JS = 'Yash Kapila';
console.log(teachers);

// ---15 15 15 15 15 15 15 15 15 --------------------------------
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y); // false
console.log(x === y); // false
console.log(x == z); // false
console.log(x === z); // false
console.log(y == z); // true
console.log(y === z); // true

// When i use == or ===, it compares whether they are same array or not.
// to look they have a same content:
console.log(x.toString() === y.toString()); // true

//  ---- 16 16 16 16 16 16 16 ------------------
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o2.foo = 'o2-changed';
console.log(o3); //changing o2 change o3
o1.foo = 'o1-changed';
console.log(o3); //changing o1 doesnt change o3
// **Does the order that you assign (o3 = o2 or o2 = o3) matter?
// Yes absolutely matter. if we write o2 = o3, o2 would be declared twice and cause ERROR.

// ----17 17 17 17 17 17 17 17 ----------------
let bar = 42;
console.log(typeof typeof bar); // string
// Because typeof 'bar' is number and typeof 'number' is string. Number is text.
