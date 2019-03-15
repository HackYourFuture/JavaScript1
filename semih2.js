// #1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);

const newString = myString.split(",").join(" ");
console.log(newString);


// #2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.unshift("meerkat");
console.log(favoriteAnimals);
console.log("The array has a length of: ", favoriteAnimals.length);

favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: ", favoriteAnimals.indexOf("meerkat"));

favoriteAnimals.splice(favoriteAnimals.indexOf("meerkat"),1);
console.log(favoriteAnimals);


// #3
//////////////1//////////////////////
function addUp (x,y,z) {
    const totalSum = (x+y+z);
    console.log(totalSum);
}
addUp(1,10,100);
/////////////////////////////////// 


///////////////2///////////////////
function colorCar(color) {
    console.log("A", color, "car.");
}
colorCar("black");
///////////////////////////////////


///////////////3//////////////////
const myObj = {name:"john doe", age:"24", city:"amsterdam"}

function displayValue(object) {
    console.log(object.name, object.age, object.city);
}
displayValue(myObj);
////////////////////////////////


////////////4////////////////////
function vehicleType(color, code) {
    if (code===1) {
        console.log("A", color, "car.")
    } else if (code===2) {
        console.log("A", color, "motorbike.")
    }
}
vehicleType("red", 2);
//////////////////////////////////


/////////////5///////////
(3 === 3) ? console.log("true") : console.log("false")
////////////////////////


//////////////6///////////////////
function vehicle(color, code, age) {
    if (code===1) {
        if (age>0){
            console.log("A", color, "used car.")
        }else{
            console.log("A", color, "new car.")
        }
        
    } else if (code===2) {
        if (age>0){
            console.log("A", color, "used motorbike.")
        }else{
            console.log("A", color, "new motorbike.")
        }
    }
}
vehicle("red",1,0);
vehicle("white",2,1);
//////////////////////////////////


//////////////7-8//////////////////
const vehicles = ["motorbike", "caravan", "bike", "automobile", "truck"];
const thirdElement = vehicles[2];
console.log("3rd element of this list is:", vehicles[2]);
///////////////////////////////


/////////////////9/////////////
function vehicle(color, indexNumber, age) {
    const vehicles = ["motorbike", "caravan", "bike", "automobile", "truck"];
    if (age>2) {
    console.log("A", color, "old", vehicles[indexNumber-1]);
    } else{
        console.log("A", color, "new", vehicles[indexNumber-1]);
    }
}   
vehicle("green",3,1);
/////////////////////////////////


//////////////10////////////////
const vehicleList = ["motorbike", "caravan", "bike", "automobile", "truck"];
let advertisement = "Amazing Joe's Garage, we service " 

for (let i=0; i<vehicleList.length-1; i++) {
    advertisement += vehicleList[i]+", ";
}

advertisement += "and " + vehicleList[vehicleList.length-1] + ".";
console.log(advertisement);
//////////////////////////////


/////////////11///////////////
// const vehicleList = ["motorbike", "caravan", "bike", "automobile", "truck", "one more vehicle"];
// let advertisement = "Amazing Joe's Garage, we service " 

// for (let i=0; i<vehicleList.length-1; i++) {
//     advertisement += vehicleList[i]+", ";
// }

// advertisement += "and " + vehicleList[vehicleList.length-1] + ".";
// console.log(advertisement);
//////////////////////////////////


///////////////12-13-14///////////////
const obj = {};

obj["Philip"] = "HTML/CSS";
obj["Unmesh"] = "CLI";
obj["Yash"] = "Javascript 1";

console.log(obj);
/////////////////////////////////


/////////////*15////////////////
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

let result = (x == y) ? true : false;
console.log(result);

result = (x === y) ? true : false;
console.log(result);

result = (z == y) ? true : false;
console.log(result);

result = (z == x) ? true : false;
console.log(result);
//////////////////////////////


/////////////16///////////////
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2 = { foo: "barnot"};
console.log(o3);

o1 = {foo: "barnot"};
console.log(o3);
/////////////////////////////


///////////////17/////////////
let bar = 42;
const typeIs = typeof typeof bar;
//type of bar is 'number' & type of 'number' is string. that's why typeof typeof bar = 'string'.
console.log(typeIs);
/////////////////////////////


