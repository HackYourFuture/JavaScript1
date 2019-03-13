'use strict';
//String and Array challenges
// task 1:
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);
// or :
console.log(myString.replace(/,/g, " "));

// task 2:
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals);
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice (1, 0, "meerkat");
console.log("I think the new value of the array is [\"blowfish\", \"meerkat\", \"capricorn\", \"giraffe\", \"turtle\"]");
console.log(favoriteAnimals);
console.log("The array has a length of",favoriteAnimals.length);
// or :
const l = favoriteAnimals.length;
console.log(favoriteAnimals.length);
console.log("The array has a length of %s", l);
// or :
console.log(`The array has a length of ${l}`);
// or :
console.log(`The array has a length of ${favoriteAnimals.length}`);
favoriteAnimals.splice (3, 1,);
console.log(favoriteAnimals);
console.log(favoriteAnimals.indexOf("meerkat"));
console.log("The item i am looking for is at index:",favoriteAnimals.indexOf("meerkat"));
const indexOfItem = "The item i am looking for is at index: "+favoriteAnimals.indexOf("meerkat");
console.log(indexOfItem);
const item = favoriteAnimals.indexOf("meerkat");
console.log(`The item i am looking for is at index: ${item}`);
console.log(`The item i am looking for is at index: ${favoriteAnimals.indexOf("meerkat")}`);
console.log("The item i am looking for is at index: %s", item);
console.log("The item i am looking for is at index: " + item);

//Moer JavaScript 
// task 1:
function myFunction (a ,b ,c){
    return a + b + c ;
}
console.log(myFunction(3, 4, 7));
console.log(myFunction(-3, 100, 400));

// task 2:

function colorCar (color){
    return "a " + color + " car";
    //or
    // return `a ${color} car`;
}
console.log(colorCar("red"));
console.log(colorCar("green"));

// task 3:
const me = {
    name : "mike",
    age : 32,
    height : "175cm"
};
function myInformation (me){
    return me;
}
console.log(myInformation(me));

// task 4:
function vehicleType (color, x){
    if (x === 1){
        return  `a ${color} car`;
    }
    else if (x === 2){
        return `a ${color} motorbike`;
    }
    else {
        return "input error!!! try vehicleType('color',1 or 2)";
    }
}
console.log(vehicleType("red", 1));
console.log(vehicleType("blue", 2));
console.log(vehicleType("blue", 3));

// task 5:
const task5 = 3 === 3 ? "yes" : "no" ;
console.log(task5);
// or :
3 === 3 ? console.log("yes") : console.log("no");


// task 6:
function vehicle (color, x, age){
    if (x === 1 && age > 0){
        return  `a ${color} used car`;
    }
    else if (x === 2 && age > 0){
        return `a ${color} used motorbike`;
    }
    else if (x === 1 && age === 0){
        return  `a ${color} new car`;
    }
    else if (x === 2 && age === 0){
        return `a ${color} new motorbike`;
    }
    else 
        return "input error!!! try vehicle('color',1 or 2, number >= 0)";
}
console.log(vehicle("red", 1, 0));
console.log(vehicle("blue", 2, 0));
console.log(vehicle("red", 1, 3));
console.log(vehicle("blue", 2, 5));
console.log(vehicle("blue", 2, -5));
console.log(vehicle("blue", 5, 7));

// task 7:
const vehicles = ["motorbike","caravan","bike"];
console.log(vehicles);

// task 8:
console.log(vehicles[2]);

// task 9:
function vehicle2 (color, x, age){
    if (x === 1 && age > 0){
    return  `a ${color} used ${vehicles[0]}`;
    }
    else if (x === 2 && age > 0){
        return `a ${color} used ${vehicles[1]}`;
    }
    else if (x === 1 && age === 0){
        return  `a ${color} new ${vehicles[0]}`;
    }
    else if (x === 2 && age === 0){
        return `a ${color} new ${vehicles[1]}`;
    }
    else if (x === 3 && age > 0){
        return `a ${color} used ${vehicles[2]}`;
    }
    else if (x === 3 && age === 0){
        return  `a ${color} new ${vehicles[2]}`;
    }
    else 
        return "input error!!! try vehicle('color',1 to 3, number >= 0)";
}
console.log(vehicle2("red", 1, 0));
console.log(vehicle2("blue", 2, 0));
console.log(vehicle2("blue", 3, 0));
console.log(vehicle2("red", 1, 3));
console.log(vehicle2("blue", 2, 5));
console.log(vehicle2("blue", 3, 5));
console.log(vehicle2("blue", 2, -5));
console.log(vehicle2("blue", 5, 7));

// task 10:
function typingAdvertisement(){
          let s = "";
          for (let i = 0; i < vehicles.length - 2; i++) {
               s += `${vehicles[i]}s, `;
               // or :
               //  s += vehicles[i]+ "s, ";
          }
          const advertisement = `Amazing Joe's Garage, we service ${s}${vehicles[vehicles.length - 2]}s and ${vehicles[vehicles.length - 1]}s.`;
          // or :
          // const advertisement = "Amazing Joe's Garage, we service " + s + "and " + vehicles[vehicles.length - 1] + "s.";
          console.log(advertisement); 
}
typingAdvertisement();

// task 11:
vehicles.push("car");
console.log(vehicles);
console.log(vehicles.length);
typingAdvertisement();

// task 12:
const myInformation1 = {};
console.log(myInformation1);

// task 13 & 14:
const myTeachers = {
    t1: "philip",
    t2: "rop",
    t3: "unmeshjoshi",
    t4: "yash"
};
console.log(myTeachers);
myTeachers.languages = ["html","css","cli","JS"];
console.log(myTeachers);

// task 15:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x);
console.log(y);
console.log(z);
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
console.log(z === x);
console.log(z === y);
function same(a,b,c){
    let same = a.length === b.length && a.length === c.length && b.length === c.length,
        result,
        len;
    if(!same) { result = false }
    else {
        result = true;
        len = a.length;
        for(let i=0;result !== false && i < len; i++) {
            if(a[i] !== b[i] && a[i] !== c[i] && c[i] !== b[i]) {
                result = false;
            }
        }
    }  
    return result;
}
console.log(same(x, y, z));
/* a littel wierd what happend ....
the logic says that it should all of them the same ...
the function result cames same as logic ...but when i checked it by using only (===)...
the result was diffrent and it shows that only z === y is true .
*/ 

// task 16:
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);
console.log(o3.foo ===  "bar" );
o2 = { foo: "bar123" };
o1 = { foo: "bar1211222" };
o2.foo = "bar4323"
console.log(o1);
console.log(o2);
console.log(o3);
o2.foo = "bar4323"
console.log(o2);
console.log(o3.foo ===  "bar" );
console.log(o3.foo ===  "bar" ? "nothing changed" : "o3 is changed");
function changeOrNot (){
    if (o3.foo ===  "bar" ){
        return "nothing changed";
    }
    else {
        return "o3 is changed"
    }
}
console.log(changeOrNot());
console.log("in javascript the order of assign (o3 = o2 or o2 = o3)is matter");

// task 17:
const bar = 42;
console.log(typeof typeof bar);
console.log("typeof x returns a string representation of the type of x. So, naturally, typeof typeof x is string.");