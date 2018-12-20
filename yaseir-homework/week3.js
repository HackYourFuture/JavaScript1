
// String

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString); // hello,this,is,a,difficult,to,read,sentence

console.log(myString.length); // 42

console.log(myString.replace(/,/g , " ")); // hello this is a difficult to read sentence


// Array 


let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push('turtle');

console.log(favoriteAnimals); // [ 'blowfish', 'capricorn', 'giraffe', 'turtle' ]

favoriteAnimals.splice(1, 0, 'meerkat');

console.log("My favorite Animals are:")

console.log(favoriteAnimals); // [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]

console.log("The array has a length of: " + favoriteAnimals.length); // The array has a length of: 5

favoriteAnimals.splice(3, 1)

console.log(favoriteAnimals); // [ 'blowfish', 'meerkat', 'capricorn', 'turtle' ]

let index = favoriteAnimals.findIndex(favoriteAnimals => favoriteAnimals === "meerkat");

console.log("The item you are looking for is at index: " + index); // The item you are looking for is at index: 1

console.log(favoriteAnimals[index]); // meerkat



// More JavaScript
///// 1
function sum(x,y,z){
  return x+y+z;
}
let add = sum(2,3,5);
console.log(add);

///// 2

function colorCar(color){
  return console.log("a", color, "car");
}
colorCar("red");

///// 3 

let myInfo = {myName: "Yasser",myAge: 28};

function personal(cv){
 return console.log(cv);
}
personal(myInfo);


///// 4

function vehicleType(color,code){
  if(code == 1){
  return console.log("A ",color,"car")}
  else if(code == 2){
    return console.log("A ",color,"motorbike")}
}
vehicleType("blue", 2);


///// 5

console.log(3 === 3 ? true : false);

///// 6

function vehicle(color,code,age){
  if(code == 1){
    if(age == 5){
     console.log("a",color,"used car");}
    else{  console.log("a",color,"car");}
  }
  else if(code == 2 ){return console.log("a",color,"motorbike");}
}

vehicle("blue",1,5);


/////  7

let vehicles = ["motorbike", "caravan", "bike"];

/////  8

console.log(vehicles[2]);

/////  9

function vehicle(color,code,age){
  if(code == 4){
    if(age == 1){
     console.log("a",color,"new motorbike");}
    else{  console.log("a",color,"motorbike");}
  }
  else if(code == 2){
    if(age == 1){
     console.log("a",color,"new caravan");}
    else{  console.log("a",color,"caravan");}
  }

  else if(code == 3){
    if(age == 1){
     console.log("a",color,"new bike");}
    else{  console.log("a",color,"bike");}
  }
}

vehicle("green",3,1);

/////  10

let vehicles = ["motorbike", "caravan", "bike"];

let service="";
for(let counter = 0; counter < vehicles.length ; counter++){
  if(counter == vehicles.length - 1){service += vehicles[counter] + "s."}
 else {service += vehicles[counter] + "s, "}
 
}
 console.log(" \"Amazing Joe's Garage, we service" , service,"\"");


 /////  11

vehicles.push("bus");
  console.log(vehicles);
 service="";
for(let counter = 0; counter < vehicles.length ; counter++){
  if(counter == vehicles.length - 1){service += vehicles[counter] + "s."}
 else {service += vehicles[counter] + "s, "}
}
 console.log(" \"Amazing Joe's Garage, we service" , service,"\"");


 /////  12  &  13  &  14 


 let obj = {};



 let yasser = {
   teachers : { htmlCss : "Josja and Sander", cli : "Unmesh", js : "Joost and Norhan"},
   languages : { josja : "html-css", sander : "html-css", unmsh : "cli", joost : "JavaScript", norhan : "JavaScript"}
 };



/////  16

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2 = { fo: "ba" };

console.log(o2);
console.log(o3); // changing o2 doesn't change o2 

// (o3 = o2 or o2 = o3) it matter


///// 17

let bar = 42;
typeof typeof bar; // 'string'

// typeof always returns a string


