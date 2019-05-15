// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum(a, b, c) {
  return a + b + c;
}

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
  console.log(`a ${color} car`);
}

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
function showObj(obj) {
  let objKeys = Object.keys(obj);

  let objVals = Object.values(obj);

  for (let i = 0; i < objKeys.length; i++) {
    console.log(`The value of the property '${objKeys[i]}' is '${objVals[i]}'`)
  }
}

const myPerson = { name: 'Ali', age: 10 };

showObj(myPerson); // The value of the property 'name' is 'Ali' // The value of the property 'age' is '10'


// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
  if (code === 1) {
    console.log(`a ${color} car`);
  } else if (code === 2) {
    console.log(`a ${color} motorbike`);
  } else {
    console.log("Invalid code!");
  }
}

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
/*
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}
*/

3 === 3 ? console.log("yes") : console.log("no");


// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
  let status = age === 0 ? "new" : "used";

  switch (code) {
    case 1:
      console.log(`${color} ${status} car`)
      break;
    case 2:
      console.log(`${color} ${status} motorbike`)
      break;
    default:
      console.log("Invalid code");
      break;
  }
}

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

const vehicles = ["motorbike", "caravan", "car", "truck"];

// 8. How do you get the third element from that list ?

let thirdItem = vehicles[2];
console.log(thirdItem); // car


// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

// Solution is in 6.

// 10. Use the list of vehicles to write an advertisement.So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

// Hint, the output should be correct English with all the punctuation in place(that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

let adStr = "Amazing Joe's Garage, we service ";

function ad(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    const lastEl = arr[arr.length - 1];

    if (currentEl !== lastEl) {
      str += `${currentEl}s, `;
    } else {
      str += `${lastEl}s.`;
    }
  }

  return str;
}

console.log(ad(adStr, vehicles)); // Amazing Joe's Garage, we service motorbike, caravan, car, truck.

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10 ?
vehicles.push("electric car");
console.log(ad(adStr, vehicles));

// 12. Create an empty object.

const emptyObj = {};
// or => const emptyObj = new Object;

// 13. Create an object that contains the teachers that you have had so far for the different modules.
const teachers = { name: ["Philip Beau", "Hardit Singh", "Unmesh Joshi", "Sander Hidding"] };

// 14. Add a property to the object you just created that contains the languages that they have taught you.

let languages = ["html", "git-basic", "git", "js"];

teachers.languages = languages;

console.log(teachers);

// 15. Write some code to test two arrays for equality using == and ===.Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y ? true : false); // false
console.log(x === y ? true : false); // false
console.log(z === y ? true : false); // true

// 16. Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

function compare(a, b) {
  function same() {
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length != bKeys.length) {
      return false;
    }

    for (var i = 0; i < aKeys.length; i++) {
      var keyName = bKeys[i];

      if (a[keyName] !== b[keyName]) {
        return false;
      }
    }

    return true;
  }

  if (same() === true) {
    console.log("Same");
  }
  else if (same() === false) {
    console.log("Not same");
  }
}

compare(o1, o2); // Same

o1.lang = "js"
o3.lang = "html";

compare(o1, o3); // Not same
compare(o2, o3); // Same


// Show that changing o2 changes o3(or not) and changing o1 changes o3(or not).

console.log(o2); // { foo: 'bar', lang: 'html' }

// Does the order that you assign(o3 = o2 or o2 = o3) matter ?
o2 = o3;
console.log(o3); // { foo: 'bar', lang: 'html' }
console.log(o2); // { foo: 'bar', lang: 'html' }

// For first time the order is important. We must assign the existing object to a new object.
let ox = { foo: "baz" }
let oy;
ox = oy;
console.log(oy); // undefined



// 17. What does the following code return? (And why ?)

let bar = 42;
typeof typeof bar;

let _type = typeof bar;
console.log(_type); // "number"
console.log(typeof _type) // typeof "number" = string

// ‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.


