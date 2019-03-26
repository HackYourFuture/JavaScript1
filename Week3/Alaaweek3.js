//strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);
// or :
console.log(myString.replace(/,/g, " "));
//Arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals); // returns ["blowfish", "capricorn", "giraffe", "turtle"]
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals); // returns ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]
console.log(favoriteAnimals.length); //returns 5
alert('The array has a length of: 5');
let remove = favoriteAnimals.splice(3, 1);
console.log(remove); // returns ["giraffe"]
console.log(favoriteAnimals); // returns ["blowfish", "meerkat", "capricorn", "turtle"]
console.log(favoriteAnimals.indexOf("meerkat"));// returns 1 
let remove2 = favoriteAnimals.splice(1, 1);
console.log(remove2); //returns ["meerkat"]
alert('The item you are looking for is at index: 1 ');
//more javascript
let param1 = 1;
let param2 = 2;
let param3 = 3;
function myFunc(param1, param2, param3) {
  return (param1 + param2 + param3);
}
console.log(myFunc(1, 2, 3)); // returns 6
console.log(myFunc(5, 6, 7));
//
function colorCar(color) {
  return "a " + color + "car";
}
console.log(colorCar("red")); //returns a red car
console.log(colorCar("orange"));
//
let someObject = {
  foo: "This",
  bar: "works!"
};
someFunc(someObject);
function someFunc(arg) {
  (arg.foo);
  (arg.bar);
}
function someFunc(someObject) {
  return someObject;
}
someFunc({ foo: "This", bar: "works!" });
console.log(({ foo: "This", bar: "works!" })); //returns {foo: "This", bar: "works!"}
//
function vehicleType(color, x) {
  if (x === 1) {
    return `a ${color} car`;
  } else if (x === 2) {
    return `a ${color} motorbike`;
  } else {
    return `a ${color} airplane`;
  };
};
vehicleType("blue", 2) //returns 'a blue motorbike' 
//
let reWrite = 3 === 3 ? "yes" : "no";
console.log(reWrite);
//
function vehicle(color, x, age) {
  if (x === 1 && age > 0) {
    return `a ${color} used car`;
  } else if (x === 2 && age > 0) {
    return `a ${color} used motorbike`;
  } else if (x === 2 && age === 0) {
    return `a ${color} airplane`;
  } else {
    return 'invalid input';
  }

}
console.log(vehicle("blue", 1, 8));
console.log(vehicle("red", 1, 2))
//
let vehicles = ["motorbike", "caravan", "bike", "car"];
console.log(vehicles); //returns (4) ["motorbike", "caravan", "bike", "car"]
console.log(vehicles[2]); //returns bike
//
function vehicleX(color, y, age) {
  if (x === 1 && age > 0) {
    return `a ${color} used car`;
  } else if (x === 2 && age > 0) {
    return `a ${color} used motorbike`;
  } else if (x === 2 && age === 0) {
    return `a ${color} airplane`;
  } else if (x === 3 && age === 0) {
    return `a ${color} new ${vehicles[2]}`;
  } else {
    return No;
  }

}
console.log(vehicleX("green", 3, 1));
//

//
let object = [];
console.log(object);//returns []
//
let objectTeachers = ["Philipe", "Unmush", "Yash"];
console.log(objectTeachers); //returns  ["Philipe", "Unmush", "Yash"]
objectTeachers.Philipe = "HTML",
  objectTeachers.Unmush = "CommandLine",
  objectTeachers.Yash = "javaScript",
  console.log(objectTeachers);// returns (3) ["Philipe", "Unmush", "Yash", Philipe: "HTML", Unmush: "CommandLine", Yash: "javaScript"]
//
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y); //returns false
console.log(x === y); //returns false
console.log(x == y);//returns false 
console.log(x === y || z == y || z == x); //this is true . 
//
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
o2 = { foo: "bar2" };
console.log(o2);//returns {foo: "bar2"}
console.log(o3);//returns {foo: "bar"}
// it did not change 
// Does the order that you assign (o3 = o2 or o2 = o3) matter? yes. 
//
let bar = 42;
console.log(typeof typeof bar); // returns a string 
// because it doing a type of for the word number