// 1 Create a function that takes 3 arguments 
function threeArg(a,b,c){
    let d = a + b + c ;
    return d;
}

var sum = threeArg(3,4,3)
console.log(sum);

// 2  function  colorCar
function colorCar(letter ,color, auto){
    let syn = letter +" " + color + " " + auto ;
    return syn;
}

var clr = colorCar( "a","red","car");
console.log(clr);

// 3  a function that takes the object as a paramete

function obj(objec){
return objec;
}

let obje = {
    name : "Abdul",
    old : 30
}

let variable = Object.keys(obje);
let value = Object.values(obje);

for(let i = 0; i < variable.length; i++){
    console.log(obj(variable[i]));
    console.log(obj(value[i]));
}

//  4 receives a color
function vehicleType(color, code){
    if (code == 1){
        console.log("a " + color + " car");
    }else if (code == 2){
        console.log("a " + color + " motobike")
    }
}

vehicleType("blue", 2)

// 5 without the if
3 === 3 ? console.log("yes") : console.log("no");

// 6 a function called vehicle with parameter called age
function vehicle(color , code , age){
    if(code == 1){
    console.log("a "+ color + " car");
    }
}
// 7 list of vehicles
let vehicles = ["motorbike", "caravan", "bike", "car"];

// 8 get the third element from that list
console.log(vehicles[3]);

//prints "a green new bike".
console.log("a "+ color +" " +vehicles[code - 1]);

// 10 write an advertisement
 function advertisement(vehicles) {
    let par = "Amazing Joe's Garage, we service ";
    for (let i = 0; i < vehicles.length - 2; i++) {
      par += vehicles[i] + ', ';
    }
    console.log(par + vehicles[vehicles.length - 2] + 'and ' + vehicles[vehicles.length - 1]);
  }

vehicle("blue", 1, 5);
vehicle("green", 3, 5);

// 12 Create an empty object.
let emtyObject= new Object;

// 13 teachers 14
let teacher = {
     Arabic : "Amen",
    English : "Adam",
    Dutch : "Rami"
}

// 15 
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x==y); //false
console.log(x===y);//false
console.log(z==y);//true
console.log(z==x);//false

// 16
//Does the order that you assign (o3 = o2 or o2 = o3) matter? Yes
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
//Show that changing o2 changes o3 (or not)
o2.foo = 'par';
console.log(o3); // Yes it changes

console.log(o3);
o1.foo = 'parw';
console.log(o3); // No

console.log(o2);
console.log(o3);
o2 = o3;
console.log(o2);
console.log(o3);

let bar = 42;
typeof typeof bar;
console.log(typeof typeof bar);
// It is String first i have call the type of the value . second the type of the value was number and the word number is string
