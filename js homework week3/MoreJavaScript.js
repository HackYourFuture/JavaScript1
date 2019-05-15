// 1.Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum(a, b, c) 
{
return a + b + c
};
console.log(sum);
sum(10, 22, 3);
console.log(sum(10, 22, 3));

//2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color)
{
return 'a ' + color + ' car'
};
console.log(colorCar);
colorCar('red');
console.log(colorCar('red'));
colorCar('blue');
console.log(colorCar('blue'));

//3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

const myObject = {shape: 'square' , width: 15 , height: 20};

function funcObject (object) 
{
let property = Object.keys(object);
let value = Object.values(object);
    for (let i = 0; i < property.length; i++) 
    {
        console.log(property[i] + ': ' + value[i])
    };

}
console.log(funcObject);
funcObject(myObject);

//4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType (color, code)
{
if (code === 1) { code = 'car'}
else if (code === 2) {code = 'motorbike'};
console.log('a ' + color + ' ' + code);
};
console.log(vehicleType);
vehicleType('blue', 1);
vehicleType('red', 2)

//5.Can you write the following without the if statement, but with just as a single line with console.log(...);?

3 === 3 ? console.log("yes") : console.log("no");

//6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle (color, code, age)
{
    if (code === 1) { code = 'car'}
    else if (code === 2) {code = 'motorbike'}; 
    if (age === 0) { age = 'new'}
    else {age = 'used'};
    console.log('a ' + color + ' ' + age + ' ' + code);
};
console.log(vehicle);
vehicle('blue', 1, 5);

//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

const vehicles = ['motorbike', 'caravan', 'bike', 'car', 'train'];
console.log(vehicles);


//8.How do you get the third element from that list?

console.log(vehicles[2]);

//9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function newVehicleList (color, code, age)

  { 
    if (age <= 1) { age = 'new'}
    else {age = 'used'};
    console.log('a ' + color + ' ' + age + ' ' + vehicles[code-1]);
};
newVehicleList('green', 3, 1);

//10.Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". 

let advertisement = "\"Amazing Joe's Garage, we service " 
for (let i = 0; i < vehicles.length-2; i++) 
    {
    advertisement = advertisement + vehicles[i] + 's, '
    };

    advertisement =  advertisement + vehicles[vehicles.length-2] + 's' + ' and ' + vehicles[vehicles.length-1] + 's.' + '\"'
    console.log(advertisement);

//11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
// My first list was const vehicles = ['motorbike', 'caravan', 'bike', 'car',]
//I added 'train' to my list. And It works without changing the code.

//12.Create an empty object.

const emptyObject = new Object;

//13.Create an object that contains the teachers that you have had so far for the different modules.

let teachers = [
    {name : 'Philip'},
    {name : 'Hardit'},
    {name : 'Unmesh'},
    {name : 'Sander'}
];
console.log(teachers);

//14.Add a property to the object you just created that contains the languages that they have taught you.

teachers = [
    {
    name     : 'Philip',
    language : 'HTML & CSS'
    },
    {
    name     : 'Hardit',
    language : 'CLI'
    },
    {
    name    : 'Unmesh',
    language : 'GIT'
    },
    {
    name    : 'Sander',
    language : 'JS'
    }
];
console.log(teachers);

/*
teachers[0].language = 'HTML & CSS';
teachers[1].language = 'CLI';
teachers[2].language = 'GIT';
teachers[3].language = 'JS';
console.log(teachers);

I want to use these codes, but when I use them the object changes from the beginning.
These codes changes the first and second object at the same time. So we can't see the changes.
*/


//15.Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
//What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

x == y ? console.log('equal') : console.log('not equal'); //not equal
x == z ? console.log('equal') : console.log('not equal'); //not equal
y == z ? console.log('equal') : console.log('not equal'); //equal
y === z ? console.log('strictly equal') : console.log('not equal'); //strictly equal
x === y ? console.log('strictly equal') : console.log('not equal'); //not equal
z === x ? console.log('strictly equal') : console.log('not equal'); //not equal

/* I think the equality and the strict equality compares the arrays not the values in them. */
   
//16.Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

//Does the order that you assign (o3 = o2 or o2 = o3) matter?

o2.zoo = "car";
    
console.log(o2); //{foo: "bar", zoo: "car"}
console.log(o3); //{foo: "bar", zoo: "car"} changed

console.log(o1); //{foo: "bar"}

o1.voo = "sar";

console.log(o1); //{foo: "bar", voo: "sar"}
console.log(o3); //{foo: "bar", zoo: "car"}  there is no change in o3

o3.coo = "kar";

console.log(o2); //{foo: "bar", zoo: "car", coo: "kar"} changed
console.log(o3); //{foo: "bar", zoo: "car", coo: "kar"} 
 
//changing o3 changes o2 too, so assigning (o3 = o2 or o2 = o3) doesn't matter

//17.What does the following code return? (And why?)

let bar = 42;
console.log(bar);// 42
typeof bar;
console.log(typeof bar);// number
typeof typeof bar;
console.log(typeof typeof bar);// string

//because of 42 is a number typeof bar is "number"
//and because of "number" is a string, typeof typeof bar is a "string"



  
  