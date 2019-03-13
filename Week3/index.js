//strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let myNewString = 'hello ' + 'this ' + 'is ' + 'a ' + 'difficult ' + 'to ' + 'read ' + 'sentence ';
console.log(myNewString); //succeeded and returns hello this is a difficult to read sentence
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
  console.log(param1 + param2 + param3);
}
myFunc(1, 2, 3); // returns 6 
function colorCar(x) {
  x = color;
}
console.log("a red car"); //returns a red car
let someObject = {
  foo: "This",
  bar: "works!"
};
someFunc(someObject);
function someFunc(arg) {
  (arg.foo);
  (arg.bar);
}
someFunc({ foo: "This", bar: "works!" });
console.log(({ foo: "This", bar: "works!" })); //returns {foo: "This", bar: "works!"}
let vehicleList = {
  1: 'car',
  2: 'motorbike',
};

function vehicleType(color, x) {
  console.log('a ' + color + " " + vehicleList[x]); //returns a blue car
}
vehicleType('blue', 1);
console.log(3 === 3 ? "yes" : "no"); //returns yes
let vehicle = {
  1: 'car',
  2: 'motorbikes',
  3: "age"
};
function vehicleObject(color, y, z) {
  console.log('a  ' + color + " used " + vehicle[1]); //returns a  blue used car
}
vehicleObject('blue', 1, 5);
let vehicles = ["motorbike", "caravan", "bike", "car"];
console.log(vehicles); //returns (4) ["motorbike", "caravan", "bike", "car"]
console.log(vehicles[2]); //returns bike
function vehicle2(color, boo, foo) {
  console.log("a " + color + "new " + vehicles[3]); //returns a blue new car
}
vehicle2("blue ", 1, 5);
let sentence = ("Amazing Joe\'s Garage," + " we service  ");
for (let i = 0; i < sentence; i++) {
  console.log(sentence[i] + vehicles);
}
console.log(sentence + "cars ," + "motorbikes ," + "caravans ," + "and " + "bikes .");
vehicles[4] = "airplane";
console.log(vehicles); // returns ["motorbike", "caravan", "bike", "car", "airplane"]
let object = [];
console.log(object);//returns []
let objectTeachers = ["Philipe", "Unmush", "Yash"];
console.log(objectTeachers); //returns  ["Philipe", "Unmush", "Yash"]
objectTeachers.Philipe = "HTML",
  objectTeachers.Unmush = "CommandLine",
  objectTeachers.Yash = "javaScript",
  console.log(objectTeachers);// returns (3) ["Philipe", "Unmush", "Yash", Philipe: "HTML", Unmush: "CommandLine", Yash: "javaScript"]
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y); //returns false
console.log(x === y); //returns false
console.log(x == y);//returns false 
console.log(x === y || z == y || z == x); //returns true
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
o2.foo = "bar2" ; 
console.log(o3); // returns {foo: "bar2"} 
// yes it changes
// Does the order that you assign (o3 = o2 or o2 = o3) matter? No. 
let bar = 42;
console.log( typeof typeof bar); // returns a string 
// because its doing typeof for the word number that's why it returns a string .
