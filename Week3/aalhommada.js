//---------1. Strings!---------

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);
console.log(myString.length);
let newString = myString.split(',').join(' ');
// another way to do the previous step :
// myString = myString.replace(/,/g , " ");
console.log(newString);
console.log(newString.length);

//------------2. Arrays!-----------

(' use strict');
const favoritAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoritAnimals);
favoritAnimals.push('turtle');
console.log(
  `The new array after adding Mauro's favorite animal 'turtle' will be ${favoritAnimals}`,
);
console.log(favoritAnimals);
favoritAnimals.splice(1, 0, 'meerkat');
console.log(
  `The new array after adding Jim's favorite animal to the array ,it will be placed after 'blowfish' and before 'capricorn'. : ${favoritAnimals}`,
);
console.log(favoritAnimals);
console.log('The array has a length of: ' + favoritAnimals.length);
// or another way to do the previous step :
//console.log(`the length is : ${favoritAnimals.length}`);
favoritAnimals.splice(3, 1);
// or :
//favoritAnimals.splice(favoritAnimals.indexOf("giraffe"),1)
console.log(favoritAnimals);
let foundMeerkat = favoritAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index: ' + foundMeerkat);

//---------JavaScript 🎉-----------
//------------1----------------

(' use strict');
function arguments(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}
let result = arguments(1, 2, 3);
console.log(result);
// or :
// console.log(arguments(1,2,3));

//---------JavaScript 🎉-----------
//-------------2-----------

function colorCar(color) {
  return 'a ' + color + ' car';
}
console.log(colorCar('red'));

//---------JavaScript 🎉-----------
//-------------3-------------

const person = {
  firstName: 'Abdullah',
  lastName: 'Al Hommada',
  city: 'Leiden',
  education: 'Pharmacy',
  experienceYears: 10,
};

function readObject(object) {
  for (let key in object) {
    console.log('property : ' + key + ' , value : ' + object[key]);
  }
}
readObject(person);

//---------JavaScript 🎉-----------
//--------------4------------

function vehicleType(color, code) {
  if (code === 1) {
    return 'a ' + color + ' car';
  } else if (code === 2) {
    return 'a ' + color + ' motorbike';
  }
}
console.log(vehicleType('blue', 2));

//---------JavaScript 🎉-----------
//-------------5-------------------

const number = 3;
console.log(number === 3 ? 'yes' : 'no');

//---------JavaScript 🎉-----------
// ---------------6----------

function vehicle(color, code, age) {
  let status = age > 1 ? (age = 'used') : (age = 'new');
  if (code === 1) {
    return 'a ' + color + ' ' + status + ' car';
  } else if (code === 2) {
    return 'a ' + color + ' ' + status + 'motorbike';
  } else {
    return;
  }
}
console.log(vehicle('blue', 1, 5));

//---------JavaScript 🎉-----------
// --------------7----8----9------
const vehicles = ['car', 'motorbike', 'bike', 'caravan'];

console.log(vehicles.indexOf(vehicles[3]));

function vehicleType(color, type, age) {
  const condition = age > 1 ? 'used' : 'new';
  if (type > 0 && type <= vehicles.length) {
    return 'a ' + color + ' ' + condition + ' ' + vehicles[type - 1];
  }
  return 'unknown vehicle';
}

console.log(vehicleType('green', 3, 1));
console.log(vehicleType('red', 5, 1));

//---------JavaScript 🎉-----------
// ----------------10----------------

const vehicles = ['car', 'motorbike', 'caravan', 'bike'];
function advertisement(vehicleNames) {
  let servicesWeProvide = '';
  for (let i = 0; i < vehicleNames.length; i++) {
    const serviceInPlural = vehicleNames[i] + 's';
    if (i === vehicleNames.length - 1) {
      servicesWeProvide += 'and ' + serviceInPlural + '.';
    } else if (i === vehicleNames.length - 2) {
      servicesWeProvide += serviceInPlural + ' ';
    } else {
      servicesWeProvide += serviceInPlural + ', ';
    }
  }
  return "Amazing Joe's Garage, we service " + servicesWeProvide;
}

const text = advertisement(vehicles);
console.log(text);

//--------------12---13--14-------------

('use strict');
const testEmpty = {}; //empty object
const teachers = [
  {
    firstName: 'Ze',
    lastName: 'German',
  },
  {
    firstName: 'Unmesh',
    lastName: 'Joshi',
  },
  {
    firstName: 'Sander',
    lastName: 'Hidding',
  },
];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].firstName === 'Ze') {
    teachers[i].languages = ['HTML', 'CSS'];
  } else if (teachers[i].firstName === 'Unmesh') {
    teachers[i].languages = ['Git', 'CLI'];
  } else if (teachers[i].firstName === 'Sander') {
    teachers[i].languages = ['JavaScript'];
  }
}
console.log(teachers);

//----------------15----------------

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;
if (x === y) {
  console.log("When using strict equality '[" + x + "]'" + ' equals ' + "'[" + y + "]'.");
} else {
  console.log("When using strict equality '[" + x + "'] and " + "'[" + y + "]' are not equals.");
}

if (z == y) {
  console.log(
    "When using loose equality '[" + y + "]'" + ' and ' + "'[" + z + "]'" + ' are equals.',
  );
} else {
  console.log("When using loose equality '[" + y + "'] and " + "'[" + z + "]' are not equals.");
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

compareArrays(x, y);
compareArrays(y, z);
compareArrays(x, z);

// ------------------16------------------

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };

let o3 = o2;
console.log('o1', o1, 'o2', o2, 'o3', o3); //assigning o2 as a value to o3 doesn't change o2

o1.foo = 'dad';
o2 = o1;
console.log('o1', o1, 'o2', o2, 'o3', o3); // changing o1 doesn't change o3 because their values are not related to one another

o2.foo = 'hyf';
/*changing a property of o2 changes o3
because that modifies the object that o2 points to
and there for all other references that point to this object*/
console.log('o1', o1, 'o2', o2, 'o3', o3);

/*-------------------17------------------------*/

const bar = 42;
console.log(
  'typeof typeof bar returns ' +
    typeof typeof bar +
    ' because typeof bar returns ' +
    typeof bar +
    ' and that is a string.',
);

