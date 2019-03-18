// String and Array challenges

// 1 strings:

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, ' ');        // replace commas with spaces
console.log(myString);



// 2 Arrays:
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");  // adding Mauro's favorite animal at the end of the previous array
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log("using splice() a method that changes the contents of an array by removing or replacing existing elements and/or adding new elements)\n \
in .splice(1, 0, 'meerkat') the 1 defines the index that i want to work with and 0 defines the number of elements that i want to replace.\n \
so the value of the array will be:\n \
[\"blowfish\", \"meerkat\", \"capricorn\", \"giraffe\", \"turtle\"]");
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3,1);   // delete giraffe from the previous array
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: " + favoriteAnimals.findIndex(animal => animal === "meerkat"));




// More JavaScript

//1
function sum(x, y, z) {
  const result = x + y + z;
  return result;
}



//2
function colorCar(color) {
	const result = 'a ' + color + ' car';
	return result;
}



//3
function info(person = {firstName:"mark", lastName:"trump", age:50, eyeColor:"blue"}) {
	return person;
}



//4
function vehicleType(color, code){
  if(code === 1){
  return console.log("a " + color + " car")}
  else if(code === 2){
  	return console.log("a " + color + " motorbike")}
}



//5
3 === 3 ? console.log("yes") : console.log("no");



//6
function vehicle(color, code, age){
  if(code === 1){
  	   if(age > 0){
  	   	console.log("a " + color + " used car");
  	   }
  	   	else{console.log("a " + color + " car");}
  	   }
  else if(code === 2){
  	   if(age > 0){
  		console.log("a " + color + " used motorbike");
  	   }
  		else{
  	   	console.log("a " + color + " motorbike");}
  	   }
}



//7
// method 1: using objects (adding another layer of objects for fun!)
vehicle = {
	"motor": {
		id: "motorbike",
    	id2: "bus",
     	id3: "truck",
     	id4: "car"
     },
     "railed": {
     	id: "train",
     	id2: "tram",
     },
     "aircraft": {
     	id: "airplane",
     	id2: "helicopter",
     }
}
const firstKey = Object.keys(vehicle)[0];
const secondKey = Object.keys(vehicle)[1];
const thirdKey = Object.keys(vehicle)[2];
//----------------------------------------------------
console.log(vehicle["aircraft"]["id2"]);
//logs helicopter
console.log(vehicle[thirdKey]["id2"]);
//logs helicopter
//----------------------------------------------------

//method 2: using arrays
const vehicles = ["motorbike", "caravan", "bike", "bus"];




//8
console.log(vehicles[2]);




//9
const vehicles = ["motorbike", "caravan", "bike", "bus"];


function vehicle(color,code,age){
  let i;
  if(code === 1){
  	i = vehicles[0];
  }
  else if(code === 2){
  	i = vehicles[1];
  }
  else if(code === 3){
  	i = vehicles[2]
  } 
  else if(code === 4){
  	i = vehicles[3]
  } 

  let x;
  if(age <= 1){
  x = "new";
  }
  else{
	x = "used";
  }
   console.log("a",color,x,i);
}
vehicle("green", 3, 1)

/////////////////////////////////////////////////////////
//10
const vehicles = ["car", "motorbike", "caravan", "bike"];

let vehicleToService="";
for(let counter = 0; counter < vehicles.length; counter ++){
  if(counter === vehicles.length - 1){
  	vehicleToService += vehicles[counter] + "s.";
  } 
  else {vehicleToService += vehicles[counter] + "s, ";}
 }

 console.log(" \"Amazing Joe's Garage, we service" , vehicleToService,"\"");



//11
const vehicles = ["car", "motorbike", "caravan", "bike"];
vehicles.push("plane");
console.log(vehicles);
let vehicleToService="";
for(let counter = 0; counter < vehicles.length; counter ++){
  if(counter === vehicles.length - 1){
  	vehicleToService += vehicles[counter] + "s.";
  } 
  else {vehicleToService += vehicles[counter] + "s, ";}
 }

console.log(" \"Amazing Joe's Garage, we service" , vehicleToService,"\"");



//12
const object = {};



//13
const person = {htmlCss:"Philipp Beau", cli:"Unmesh Joshi", JavaScript:"Yash Kapila"};



//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(o3);
o2.foo = "something";
console.log(o3);
o1.foo = "and something else";
console.log(o3);

//Does the order that you assign (o3 = o2 or o2 = o3) matter?
//yes, because the right side is being assigned to the left side, otherwise it will show that the variable is not defined.



//What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;

//typeof bar; returns "number" because a number is assigned to bar as a value
//typeof typeof bar; returns "string" because it is returning the type of "number" which is a string