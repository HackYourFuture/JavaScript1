// JS1 Homework Week 3

// 1. Strings!
// 1.1 Add the string to your file and log it.
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);

// 1.2 Log the length of myString.
console.log(`The length of myString is: ` + myString.length);

// 1.3 The commas make that the sentence is quite hard to read.
// Find a way to remove the commas from the string and replace them with spaces.
// 1.4 Log myString to see if you succeeded.
console.log(myString.replace(/,/g, ` `));
// or:
console.log(myString.split(`,`).join(` `));

console.log('.............................................');

// 2. Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
console.log(favoriteAnimals.push('turtle'));

// 2.2 Log your new array!
console.log(favoriteAnimals);

// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat',
// but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, 'meerkat');

// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log(
  `The array will contain a new element between the first and the third one without deleting any element. 
  It has now 5 elements`,
);

// 2.5 Log your new array!
console.log(favoriteAnimals);

// 2.6 Log the length of the array, add a message: 'The array has a length of: '
// (here you should show the length of the array).
console.log(`The array has a length of: ` + favoriteAnimals.length);

// 2.7 Jason does not like 'giraffe', delete this animal from the array.
console.log(`Deleting: ` + favoriteAnimals.splice(3, 1));

// 2.8 Again log your new array.
console.log(favoriteAnimals);

// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array,
// but you don't know the position or the index of the item in the array, how can you find it?
console.log(`Using the method indexOf() of the array will help to find the index 'meerkat'`);

// 2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: '
// (here you should show the index of the item).
console.log(`The item you are looking for is at index: ` + favoriteAnimals.indexOf('meerkat'));

console.log('.............................................');

// More JavaScript
// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function sumEntries(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}

console.log(`sumEntries(5, 6, 9)`);
console.log(`The result is: ` + sumEntries(5, 6, 9));

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
  console.log(`a ` + color + ` car`);
}

console.log(colorCar(`red`));
console.log(colorCar(`blue`));

// 3. Create an object and a function that takes the object as a parameter
// and prints out all of its properties and values.
const obj = {
  color: `blue`,
  type: 2,
};

function printObj(obj) {
  console.log(obj);
}

printObj(obj);

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.
// And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
  if (code === 1) {
    console.log(`a ` + color + ` car`);
  } else if (code === 2) {
    console.log(`a ` + color + ` motorbike`);
  } else {
    console.log(`Please, insert code 1 for 'car' or 2 for 'motorbike'`);
  }
}

vehicleType(`yellow`, 1);
vehicleType(`green`, 2);
vehicleType(`blue`, 3);

// 5. Can you write the following without the if statement,
// but with just as a single line with console.log(...);?
console.log(`The answer is: Yes, I can write it as a single line`);
3 === 3 ? console.log(`yes`) : console.log(`no`);
// or
console.log(3 === 3 ? `yes` : `no`);
// Another example:
3 === 7 ? console.log(`yes`) : console.log(`no`);
console.log(3 === 7 ? `yes` : `no`);

// 6. Create a function called vehicle, like before, but takes another parameter called age,
// so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, code, age) {
  if (code === 1 && age === 3) {
    console.log(`a ` + color + ` new car`);
  } else if (code === 2 && age === 3) {
    console.log(`a ` + color + ` new motorbike`);
  } else if (code === 1 && age === 5) {
    console.log(`a ` + color + ` used car`);
  } else if (code === 2 && age === 5) {
    console.log(`a ` + color + ` used motorbike`);
  } else {
    console.log(`Please, insert code 1 for 'car' or 2 for 'motorbike'
      Please, insert age 3 for 'new' or 5 for 'used'`);
  }
}

console.log(vehicle(`blue`, 1, 5));
console.log(vehicle(`red`, 2, 3));
console.log(vehicle(`yellow`, 1, 3));
console.log(vehicle(`green`, 4, 6));

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
const vehicles = [`motorbike`, `caravan`, `bike`, `car`];
console.log(vehicles);

// 8. How do you get the third element from that list?
console.log(vehicles[2]);

// 9. Change the function vehicle to use the list of question 7.
// So that vehicle("green", 3, 1) prints "a green new bike".
function myVehicle(color, age, index) {
  if (index < vehicles.length && age === 3) {
    console.log(`a ` + color + ` new ` + vehicles[index]);
  } else if (index < vehicles.length && age === 5) {
    console.log(`a ` + color + ` used ` + vehicles[index]);
  } else {
    console.log(`Please, insert age 3 for 'new' or 5 for 'used'
      Please, insert index from 0 to 4 to choose your vehicle`);
  }
}

console.log(myVehicle('green', 3, 1));
console.log(myVehicle('red', 5, 3));

// 10. Use the list of vehicles to write an advertisement. So that it prints something like:
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
function printAdvertisement(array) {
  let counter = 0;
  let advertisement = `Amazing Joe's Garage, we service`;
  for (let index = 0; index < array.length; index++) {
    counter++;
    advertisement = advertisement + ` ` + array[index] + `s,`;
    if (counter === array.length - 2) {
      advertisement = advertisement + ` ` + array[index + 1] + `s`;
      console.log(advertisement + ` and ` + array[index + 2] + `s.`);
    }
  }
}

printAdvertisement(vehicles);

// 11.What if you add one more vehicle to the list,
// can you have that added to the advertisement without changing the code for question 10 ?
vehicles.push(`truck`);
console.log(vehicles);
printAdvertisement(vehicles);

// 12. Create an empty object.
const emptyObject = {};
console.log(emptyObject);

// 13. Create an object that contains the teachers that you have had so far for the different modules.
const teachers = {
  teacher1: `Philipp`,
  teacher2: `Rob`,
  teacher3: `Unmesh`,
  teacher4: `Hardit`,
  teacher5: `Yash`,
  teacher6: `Paul`,
};

console.log(teachers);

// 14. Add a property to the object you just created that contains the languages that they have taught you.
teachers.languages = [`HTML`, `CSS`, `CLI`, `GIT`, `JavaScript1`];
console.log(teachers);

// 15. Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

// I thought that all of them will be true or equal but it was not the case.
console.log(x == y); // false
console.log(x === y); // false
console.log(z == y); // true
console.log(z == x); // false

console.log(
  `It's not simple as it is shown for the person to compare two arrays, we need to compare them deeply and logically. first with the length and then compare each element in each array.`,
);

function areSameArrays(arr1, arr2) {
  let same = arr1.length === arr2.length;
  let result;
  if (!same) {
    result = false;
    console.log(`Arrays are NOT the same, the LENGTH is different.`);
  } else {
    // so far, they're the same
    result = true;
    for (let i = 0; result !== false && i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
        console.log(`Arrays are NOT the same, the INDEX is different.`);
      }
    }
  }
  console.log(`Arrays are THE SAME`);
}

console.log(areSameArrays(x, y));
console.log(areSameArrays(z, y));
console.log(areSameArrays(z, x));

// 16. Take a look at the following code:
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
// Does the order that you assign (o3 = o2 or o2 = o3) matter?
console.log(o2);
console.log(o3);
o2 = { test: `new value o2` };
console.log(o3);
console.log(`Changing the value of o2 doesn't change the value of o3`);
o1 = { test2: `new value o1` };
console.log(o3);
console.log(`Changing the value of o1 doesn't change the value of o3`);

o2 = o3;
console.log(o3);
o3 = o2;
console.log(o2);
o3 = { test3: `new value o3` };
console.log(o3);
o2 = o3;
console.log(o2);
console.log(`Yes, it does matter the order of assigning o2 and o3`);
console.log(
  `giving a new value to o3 and assigning it to o2 will change the value of o2, but not the opposite`,
);

// 17. What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;
console.log(
  `It returns 'string' because the type of 42 is a 'number', and the type of the type 'number' is a 'string'.`,
);
console.log(typeof typeof bar);
