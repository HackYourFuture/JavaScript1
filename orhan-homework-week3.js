//1. Part Strings!

const myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
console.log(myString.replace(/,/g, " "));

//2. Part Arrays!

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log("The new value of the array will be: " + "blowfish, meerkat, capricorn, giraffe, turtle");
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));


//3. Part More JavaScript!
//1.
function sum(a, b, c) {
  return a + b + c;
}

//2.
function colorCar(color) {
  console.log(`a ${color} car`);
}
colorCar("red");

//3.
function makeUser(newObj) {
  console.log(newObj);

}
const obj = {
  name: 'John',
  age: 24
};
makeUser(obj);

//4.
let vehicleCode = {
  1: "car",
  2: "motorbike",
};
function vehicleType(color, code) {
  console.log(`a ${color} ` + vehicleCode[code]);
}
vehicleType("red", 1);

//5.
const withoutIf = 3 === 3 ? console.log("yes") : console.log("no");

//6.
function vehicle(color, code, age) {
  if (age > 0) {
    age = "used";
  } else {
    age = "new";
  }
  console.log(`a ${color} ${age} ` + vehicleCode[code]);
}
vehicle("black", 2, 2);

//7.
let vehicles = ["motorbike", "caravan", "bike"];
console.log(vehicles);
//8.
console.log("Third element of vehicles array is: " + vehicles[2]);

//9.
function vehicleNew(color, code, age) {
  if (age > 1) {
    age = "used";
  } else {
    age = "new";
  }
  console.log(vehicles[code - 1]);
  console.log(`a ${color} ${age} ` + vehicles[code - 1]);
}
vehicleNew("green", 3, 1);

//10.
vehicles.unshift("car");
let myStr = "Amazing Joe's Garage, we service "
let vehicles2 = [];
function myFunc() {
  for (let i = 0; i < vehicles.length; i++) {
    vehicles2[i] = (vehicles[i] + "s");
    if (i < vehicles.length - 2) {
      vehicles2[i] += ", ";
    } else if (i < vehicles.length - 1) {
      vehicles2[i] += " and ";
    } else {
      vehicles2[i] += ".";
    }
  }
  console.log(myStr + vehicles2.join(""));
}
myFunc();

//11. 
vehicles.push("new vehicle");
myFunc();

//12.
const user = {};
console.log(user);

//13.
const teachers = {
  name: "Philipp, Rob, Unmesh, Yash",
};
console.log(teachers.name);

//14.
teachers.language = "HTML, CSS, JS";
console.log(teachers.language);

//15.
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y); //false
console.log(x === y); //false
console.log(x.toString() === y.toString()); // true
console.log(z == y); //true
console.log(z == x); //false


//16.
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

if (o2 === o1) {
  console.log("o1 === o2");
} else {
  console.log("Object o1 and object o2 are not same");
}

o2.age = 30;

if (o2 === o3) {
  console.log("when we change Object o2, Object o3 changes");
} else {
  console.log("when we change Object o2, Object o3 does not change");
}

o1.name = "test";
if (o1 === o3) {
  console.log("when we change Object o1, Object o3 changes");
} else {
  console.log("when we change Object o1, Object o3 does not change");
}
//(o3=o2) and (o2=o3) are different, 
//because left side of the equality takes the value of right side 

//17.
const bar = 42;
console.log("bar is equal to: " + bar);
console.log("Typeof bar is: " + typeof bar);
console.log("Typeof typeof bar is: " + typeof typeof bar);
