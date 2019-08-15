//1

function info(a, b, c) {
    console.log(a + b + c)
}
info(1, 5, 34);

//2

function colorCar(z) {
    print = `a ${z} car`
    console.log(print);
}
colorCar("red");

//3

let obj = {
    name: "Ahmet Husrev",
    surname: "Semiz",
    sex: "Male",
};

function objPrint(obj) {

    console.log(obj);
}
objPrint(obj);

//4

function vehicleType(a, b) {
    if (b === 1) {
        console.log(`a ${a} car`) ;
    } else if (b === 2) {
        console.log(`a ${a} motorbike`) ;
    }
}
vehicleType("blue", 2);

//5 

console.log(3 === 3 ? "yes" : "no");

//6

let motor = [0,"car", "motorbike"];

function vehicle(color, value, index) {
    if (index === 4) {
        return `a ${color} new ${motor[value]}`
    }else if ( index === 5){
        return `a ${color} used ${motor[value]}`
    }else{
        return `invalid access`
    }
}

console.log(vehicle("blue", 1, 5));

//7 - 8

let vehicles = ["car", "motobike", "caravan", "bike", "atv"]

console.log(vehicles[2]);

//9


function vehicle (color, index, value){
    if(value === 1){
        return `a ${color} new ${vehicles[index]}`
    }
    else if( value === 2){
        return `a ${color} used ${vehicles[index]}`
    }
    else{
        return `invalid access`
    }
}

console.log(vehicle("green", 3, 1))

//10

function advertisement () {
    let newArr = vehicles.join("s ").split(" ");
    for ( i = 0; i < vehicles.length; i++ ) {
    return `Amazing Joe's Garage, we service ${newArr[i]}, ${newArr[i+1]}, ${newArr[i+2]} and ${newArr[i+3]}.`
    }
}
console.log(advertisement());

//11

vehicles.push("ship");
console.log(vehicles);
console.log(advertisement());

//12

let emp = {};
console.log(emp);

//13

let objTeachers = {
    T1: "Phillip Beau",
    T2: "Rob van Kruijsdijk",
    T3: "Unmesh Joshi",
    T4: "Yash Kapila"
}

//14 

objTeachers.lang = "English";

console.log(objTeachers);

//15

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y); // False. Different arrays mean different memory on the computer.
console.log(x === y); //False. Different arrays mean different memory on the computer.
console.log(z == y); //True. It is same array. 
console.log(z == x); // False.Different arrays mean different memory on the computer.

//16

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2; // We cannot use o2=o3 because, o2 has been declared.

//17

let bar = 42;
console.log(typeof typeof bar);

// first typeof -- "number", second typeof -- "string"

//17.1

var q = "6";
console.log(typeof typeof q);

// first typeof -- "string", second typeof -- "string"