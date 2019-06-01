//String
let myString = "Hello,this,is,a,difficult-,to-,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);

//Arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals.push("turtle"));
console.log(favoriteAnimals);

let addedAnimalOfJim = ["blowfish", "capricorn", "giraffe", "turtle"];
console.log(addedAnimalOfJim.splice(1, 0, "meerkat"));
console.log("The new value will be: ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");
console.log(addedAnimalOfJim);
console.log("The array has a length of:", addedAnimalOfJim.length);

let deletedAnimalOfJason = ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"];
console.log(deletedAnimalOfJason.splice(-2, 1,));
console.log(deletedAnimalOfJason.length);
console.log(deletedAnimalOfJason[1], "The item you are looking for is at index:2");

//JavaScript
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(5, 3, 2));
//2.
function colorCar(color){
    return "A" + color + "car";
 }
 console.log(colorCar("red"));
//3.
let country = {Land: "The Netherlands", Population:"17 million", Capital:"Amsterdam"};
for (const elements in country) {
    console.log(country.elements = country[elements]);
}
//4.
function vehicleType(color, code){
    if (code === 1){
    console.log("A" + color + "car");
} else if (code === 2){
console.log("A" + color + "motorbike");}
}
vehicleType("blue", 2);
//5.
3===3 ? console.log("Yes") : console.log("No");
//6
function vehicle(color, code, age){
    if (code === 1 || age > 5){
    console.log("A" + "" + color + "" + "used car");
} else if (code === 2 || age < 5){
    console.log("A" + "" + color + "" + "new car");
}
    }
vehicle("blue", 1, 5);
//7.
const vehicleList = [
     "motorbike",
     "caravan",
     "bike",
     "bicycle",
     "car"
];
console.log(vehicleList.length);
console.log(vehicleList[2]);

//9
function newVehicle(color, code, age){
    if (vehicleList[2] <= 3){
        console.log("A" + " " + color + " " + "new" + " " + "bike");
    } else (vehicleList[2] > 3);{
        console.log("A" + " " + color + " " + "old" + " " + "bike")
    }
}
newVehicle("green", 3, 1);

//10
const advertisement = vehicleList;
console.log(advertisement);
for (let index = 0; index < advertisement; index++) {
    console.log(advertisement[index]);
}
if (advertisement.length = 5) {
    console.log("Amazing Joe's Garage >>> Here we service cars, motorbikes, caravans and bikes.");
}else {
    console.log("Amazing Joe's Garage >>> Here we service bulldozers, lorries and trucks.");
}
//11
const newVehicle = advertisement;
console.log(newVehicle.push("scooter"));
consol.log(newVehicle);
//12.
let empty = {};
//13+14
let teachers = {
    name : ["Rob", "Philip", "Unmesh"]
    };
console.log(teachers);
let task = teachers.skills = ["HTML/CSS", "HTML/CSS", "JavaScript"];
console.log(task);
//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y);
console.log(x === y);

console.log(x == z);
console.log(x === z);

console.log(y == z);
console.log(y === z);

//16.
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);
//Do you mean to make new ones?
let o1New = {quur: "quuur"};
let o2New = {quur: "quuur"};
let o3New = o2New;
console.log(o1New);

//17.
let bar = 42;
typeof typeof bar;
console.log(typeof bar); //->> number.
console.log(typeof typeof bar); //->> string.

//the end.
