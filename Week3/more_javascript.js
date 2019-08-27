/*1- Create a function that takes 3 arguments and returns the sum of the these arguments.*/
function sum(x, y ,c) {
   return x+y+c;
}
console.log(sum(2,3,5)); 

/* 2- Create a function named colorCar that receives a color, and prints out, 'a red car' for example.*/
function colorCar(color){
console.log("a %o car", color);
}
colorCar("red");

/* 3- Create an object and a function that takes the object as a parameter and prints out all of its properties and values.*/

const myDetails = {
   Name : "Mosleh",
   Age : 30,
   Hoppies: ["bascketball" , "movies"]
}
function aboutMe(myDetails){
   return console.log(myDetails);
}
aboutMe(myDetails);
// I tried also to get this result using for loop 
// for (let key in myDetails){
//    console.log(key + ": " +myDetails[key]);
// }

/* 4-Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)*/

function vehicleType(color, code){
  if (code === 1){
     console.log("a %o car", color )
   
   }else if (code ===2)
   console.log("a %o motorbike", color)
}
   vehicleType("blue",1);
   vehicleType("red",2);

/* 5- Can you write the following without the if statement, but with just as a single line with console.log(...);?
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}*/
switch (3===3){
   case (true):
      console.log('Yes');
      break;
default:
       console.log('No');
}
  // using single line  
console.log((3===3 ? 'Yes' :'No'));
/* 6- Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'*/

function vehicle(color, code, age){
   if (code === 1 && age > 0 ){
      console.log("a %o used car", color);
  } else if (code ===2 && age > 0){
      console.log("a %o used motorbike", color);}
    else if (code ===1 && age === 0){
      console.log("a %o new motorbike", color);}
    else if (code ===2 && age === 0){
      console.log("a %o new motorbike", color);}
}
vehicle("blue",1,0);
vehicle("red",1,1);

/* 7- Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.*/
 
let myVehicles = ["motorbike", "caravan", "bike","car"];

/* 8- How do you get the third element from that list?*/

console.log(myVehicles[2]); // third element has index 2

/* 9- Change the function vehicle to use the list of question 7. So thxat vehicle("green", 3, 1) prints "a green new bike".*/

let i=0;
function vehicles(color,age,i){
    if (age > 0 ){
      console.log("a %o used %o",color,myVehicles[i])
  }   
   else if ( age === 0 )
      console.log ("a %o new %o",color,myVehicles[i] )
}
vehicles("green",0,2);

/* 10- Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."*/
function advertisement (arr) {
   let first =  myVehicles.slice(0, myVehicles.length - 1);
   let last = myVehicles.slice(-1);
   return first.join('s, ') + 's & ' + last+'s';
}
console.log("Amazing Joe's Garage, we service "+advertisement(myVehicles));

/*11- What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?*/
myVehicles.push("mopid");
console.log("Amazing Joe's Garage, we service "+advertisement(myVehicles));

/*12- Create an empty object.*/
let firstMethod ={};
let secondMethod = new Object();
console.log(firstMethod);
console.log(secondMethod);
/* 13- Create an object that contains the teachers that you have had so far for the different modules.*/ 
teachers=[{
   Name: 'Rob',
   language: 'HTML/CSS',
},{
   Name: 'Philipp',
   language: 'HTML/CSS',
},{
   Name: 'Unmes',
   language: 'CLI',
},{
   Name: 'Yash',
   language: 'Javascript1',
}]
console.log(teachers);

/*14- Add a property to the object you just created that contains the languages that they have taught you.*/
let teachers1={
   teacher: 'Rob, Philipp, Unmesh, Yash',
   languages:'HTML, CSS, CLI, JS',
 }
console.log(teachers1);

/*15- Test the following:*/
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
// What do you think will happen with
// x == y
console.log(x == y); // false  
// x === y
console.log(x === y); //false
// z==y
console.log(z == y);  // true
// z==x
console.log(z == x); // false

// Explanation: 
//      - Arrays are compared by their reference.
//      - That comparison checks if the array point to the same location in memory (if yes then returns true otherwise return false) 
//      - x & y are arrays with exactly the same elements and order but each one refer to diffierent instance.`
//          -> as a result ( x == y, x === y,  z == x) all returns false
//      - On the other hand y & z both refer to the same instance.
//          -> as a result (z === y) returns true

/*16- Take a look at the following code:*/

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
/* - Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).*/
// Explanation:
//Both o2 and o3 are pointing to the same object which means that change o2 will definitely lead to change o3
//In the other hand o1 is another object and point to another location in the memory so the modification of o1 doesn't  effect  o3

/* - Does the order that you assign (o3 = o2 or o2 = o3) matter?*/
// Explanation:
//- const o3 = o2;
//      -> This statement is pointing 03 to o2 which is already declared and initialized.
//-  const 02 = 03; 
//      -> Means that we redeclare a variable which is return SyntaxError
//-  o2 = o3 
//      -> Means that o2 is pointing to not declared object(03) which result in ReferenceError: s3 is not defined

/* 17- What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;*/

let bar = 42;
console.log( typeof typeof bar) // return "string"

// what happened is the following:
typeof bar // coerce the variable to "number" which is string
console.log(typeof bar)  
typeof "number" // return the data type of the "number" 
console.log(typeof "number") 
