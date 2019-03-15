'use strict'

//strings

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length); 

const space = " ";
myString = 'hello' + space + 'this' + space + 'is' + space + 'a' + space + 'difficult' + space + 'to' + space + 'read' + space + 'sentence';
console.log(myString);

// Arrays

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
let favoriteMauroAnimals = favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkta');
console.log('i think the new value of the array is:,["blowfish", "meerkta", "capricorn", "giraffe", "turtle"]');
console.log(favoriteAnimals);
console.log('The array has a length of:', favoriteAnimals.length);
const index = favoriteAnimals.indexOf('meerkta');
favoriteAnimals.splice(index, 1);
console.log('The item I am looking for is at index:1');

//1

function sumThreeNumber (num1, num2, num3) {
  return num1+num2+num3;
}
const total = sumThreeNumber(1,2,3);
console.log(total);

//2
function colorCar (color) {
return 'a' + ' ' + color + ' ' + 'car';
}
const colors = colorCar('red');
console.log(colors);

//3

const studentObj = {
    name :"atik",
    course :"programing",
    number :'20', 
}

function printProperties(obj) {
    for (const key in obj) {
        console.log(key, ":" , obj[key]);
      }
}
printProperties(studentObj);

//4
function vehicleType(color, code) {
   switch (code) {
       case 1: 
       console.log('a' + ' ' + color + ' ' +  'car');
       break;
       case 2: 
       console.log('a' + ' ' + color + ' ' +  'motorbike');
       break;
       default:
       console.log('parameter not supported');
   }
}

vehicleType("blue", 2);

//5
3 === 3 ? console.log ('yes') : console.log('no');

//6

function vehicle(color, code, age) {
    if (age === 5 && code === 1){
        console.log('a' + ' ' + color + ' ' + 'used car');
        return;
    } else if (age === 5 && code === 2){
        console.log('a' + ' ' + color + ' ' + 'used motorbike');
        return;
    }
    switch (code) {
        case 1: 
        console.log('a' + ' ' + color + ' ' + 'car');
        break;
        case 2: 
        console.log('a' + ' ' + color + ' ' + 'motorbike');
        break;
        default:
        console.log('parameter not supported');
    }
 }

 vehicle("blue", 1, 5);
 //a blue used car

 vehicle("blue", 2, 5);

//7 
const vehicles = ["motorbike", "caravan", "bike"];

//8
console.log(vehicles[2]);

//9
function vehicle(color, code, age) {
    if (age === 1){
        console.log('a' + ' ' + color + ' ' + 'new' + ' ' + vehicles[code-1]);
    } else {
        console.log('a' + ' ' + color + ' ' + 'used' + ' ' + vehicles[code-1]);
    } 
 }
 //10
const vehicles = ["motorbike", "caravan", "bike"];
let advertisement = "Amazing Joe's Garage, we service cars, "
for (let i = 0; i < vehicles.length; i++) {
     if(i === vehicles.length - 1) {
         advertisement += "and " + vehicles[i] + "s";
     } else {
        advertisement += vehicles[i] + "s, ";
     }
 }
console.log(advertisement);

//11
const vehicles = ["motorbike", "caravan", "bike"];
let advertisement = "Amazing Joe's Garage, we service cars, "
vehicles.push("bus");
for (let i = 0; i < vehicles.length; i++) {
    if(vehicles[i].slice(-1) === "s"){
        vehicles[i] += 'e';
    }
    if(i === vehicles.length - 1) {
        advertisement += "and " + vehicles[i] + "s";
    } else {
       advertisement += vehicles[i] + "s, ";
    }
}
console.log(advertisement);


//12
const obj = {};
//13 14
const teachersName = {
        teachers: ['philip', 'Unmesh', 'Yash'],
        language1: ['Html','Css','Git','Javascript'],
        }
    
//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
    console.log('x == y', x == y, "they do not have the same reference");
    console.log('x === y', x === y, "they do not have the same reference");
    console.log("z == y", z == y, "they have the same reference" );
    console.log('z == x', z == x, "they do not have the same reference");

//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log({o1}, {o2}, {o3});
o2 = { foo2: "bar2" };
console.log({o2}, {o3});
o1 =  { foo1: "bar1" };
console.log( {o1}, {o3});
 
o3 = o2; 
o2 = o3;
console.log("It dose matter because o3 is undefined and 02 is already declared");

//17
let bar = 42;
typeof typeof bar;

console.log(typeof typeof bar);
console.log("typeof typeof bar: is string because we asked about the type of the word 'bar' which is string not about the type of the value of the variable bar which is number");
