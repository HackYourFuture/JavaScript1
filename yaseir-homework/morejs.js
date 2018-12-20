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


