

// 1) Create a function that takes 3 arguments and returns the sum of the these arguments

function hallelujah(a,b,c) {
  return a + b + c
};

console.log(hallelujah(14, 24, 71));

// 2) Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
  return 'a ' + color + ' car'
}

console.log(colorCar('red'));

// 3) Create an object and a function that takes the object as a parameter 
// and prints out all of its properties and values.

let myCar = {
  year: '2006',
  color: 'Black',
  make: 'Toyota',
  model: 'Prius',
  motto: 'is the best car of the world :)',
};

function myCarSpecs(myCar) {
  console.log(myCar);
}
myCarSpecs(myCar);

// 4) Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. 
// And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

// I actually need to study this more. I got help on this but not entirely sure about the way I did it. 
// Can you please let me know if there is any alternative way of doing this?

const vehicleCategory = {
  1 : 'car',
  2 : 'motorbike', 
};
  function vehicleType(color,type) {
      console.log("a " + color + " " + vehicleCategory[type] );        
}

vehicleType("blue", 2);

// 5) Can you write the following without the if statement, but with just as a single line with console.log(...);?

// if (3 === 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

console.log(3 === 3 ? "yes" : "no");

// 6) Create a function called vehicle, like before, 
// but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

const vehicleCategory2 = {
  1 : ' used ',
  2 : 'motorbike', 
  3 : 'yatch',
  4 : 'speedboat',
  5 : 'car'
};
  function vehicle(color,age,type) {
      console.log("a " + color + vehicleCategory2[1] + vehicleCategory2[5] );        
}

vehicle("blue", 1, 5);

// haha please write the proper way of doing this. I feel like I manipulated the system :)


// 7) Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let myListOfVehicles = ["motorbike", "caravan", "bike", "car", "yatch", "jet-ski"]

console.log(myListOfVehicles);


// 8) How do you get the third element from that list?

console.log(myListOfVehicles[2]);

// 9) Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) 
//prints "a green new bike".

function newVehicle(color, category, age) {
  if (age <= 4) {
      age = "new";
  } else {
      age = "used";
  }
  console.log("a " + color + " " + age + " " + myListOfVehicles[3]);
}

newVehicle("green", 3, 1);


// 10) Use the list of vehicles to write an advertisement. So that it prints something like: 
//"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

// I HAVE NO ANSWER FOR THIS QUESTION.

// // Hint, the output should be correct English with all the punctuation in place 
// (that's the challenge). So plurals for the vehicle types, commas followed by a single space, 
// the word and to replace the final comma and closed off by a period.

// 11) What if you add one more vehicle to the list, can you have that added to the 
// advertisement without changing the code for question 10?

// I HAVE NO ANSWER FOR THIS QUESTION.

// 12) Create an empty object.

let emptyObject = { };

console.log(emptyObject);

// 13) Create an object that contains the teachers that you have had so far for the different modules.

emptyObject.teachers = 'Philipp & Rob, Unmesh & Bonan, Yash';

console.log(emptyObject.teachers);

// 14) Add a property to the object you just created that contains the languages that they have taught you.

emptyObject.classes = 'HTML & CSS, Git, Javascript'

console.log(emptyObject);


// 15) Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

console.log(x == y); // false, different memory locations?
console.log(x === y); // false, different memory locations?
console.log(z == y); // true, same type
console.log (z == x); // false, different types ?

// The ==  equality operator converts the operands if they are not of the same type, 
//then applies strict comparison. If both operands are objects, 
//then JavaScript compares internal references which are equal 
//when operands refer to the same object in memory.

// The identity operator returns true if the operands are strictly equal (see above) with no type conversion.


// Don't cheat! Seriously - try it first.

// Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. 

//Press the Run button in the upper right corner to run the code.

// More insights from this Stack Overflow question.

// 16) Take a look at the following code:

// let o1 = { foo: "bar" };
// let o2 = { foo: "bar" };
// let o3 = o2;
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// 17) What does the following code return? (And why?)

// let bar = 42;
// typeof typeof bar;
// ‘Coerce' means to try to change - so coercing var x = '6' to number means 
// trying to change the type to number temporarily.