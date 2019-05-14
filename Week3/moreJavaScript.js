// Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(number1, number2, number3){

    return number1 + number2 + number3

};

console.log(sum( 2, 3, 4));

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color){

    console.log('a ' + color + ' car.')
};

colorCar('red');

//Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let myObject = [

    {
        day: 21,
        month: 12,
        year: 1984
    },

    {
        day: 21,
        month: 12,
        year: 1984
    }

];

function returnObject(obj){ 

        console.log(obj);
};

returnObject(myObject);

//Create a function named vehicleType that receives a color, and a code, 1 for car, 
//2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code){
    
    let vehicle = {
            1:'car',
            2:'motorbike',
    };       
    
    console.log('a ' + color + ' ' + vehicle[code]);
}

vehicleType('yellow', 1);

//Can you write the following without the if statement, but with just as a single line with console.log(...);?

console.log( (3 == 3) ? 'yes' : 'no');

//Create a function called vehicle, like before, but takes another parameter called age, so that 
//vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age){
    
    let vehicle ={

            1:'car',
            2:'motorbike',
    }; 
    
    console.log('a ' + color + ' ' + ((age > 0) ? 'used':'new') + ' ' + vehicle[code]);
}

vehicle('black', 1, 8);


//Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let vehicles = ['motorbike', 'caravan', 'bike', 'race car'];

//How do you get the third element from that list?

console.log(vehicles[2]);

//Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicleNew(color,code,age){

    let vehicles = ['motorbike', 'caravan', 'bike'];
     console.log('a ' + color + ' ' + ((age > 0) ? 'used':'new') + ' ' + vehicles[code-1])

};

vehicleNew('green',3,1);

//Use the list of vehicles to write an advertisement. So that it prints something like: 
//"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

function joesGarage(array){

    let adver = "Amazing Joe's Garage, we service ";

    for (let i = 0; i < array.length; i++){

        if (i < array.length-2){
            adver = adver + array[i] + 's, '
        }

        else if (i == array.length-2){
            adver = adver + array[i] + 's and '
        }

        else if (i == array.length-1){
            adver = adver + array[i] + 's.'
        }

    }

    console.log(adver)
};

joesGarage(vehicles);

//What if you add one more vehicle to the list, can you have that added to the advertisement 
//without changing the code for question 10?

vehicles.push('truck');

joesGarage(vehicles);



//Create an empty object.

//Create an object that contains the teachers that you have had so far for the different modules.

let teachers = [{name: 'Unmesh Joshi'},{name: 'Sander Hidding'},{name: 'Marciano Viereck'}];

//Add a property to the object you just created that contains the languages that they have taught you.

teachers[0].language = 'Git';

teachers[1].language = 'JavaScript';

teachers[2].language= 'JavaScript';

console.log(teachers);

//Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];

let y = [1, 2, 3];

let z = y;

console.log('loose equality of two identical object ("x" and "y")');
(x == y)? console.log('True'):console.log('False');

console.log('strict equality of two identical object ("x" and "y")');
(x === y)? console.log('True'):console.log('False');

console.log('loose equality of objects that one of them is assigned to other ("y" and "z")');
(y == z)? console.log('True'):console.log('False');

console.log('strict equality of objects that one\'s value is assigned from another object ("z"), while other is assigned explicitly ("x")');
(x == z)? console.log('True'):console.log('False');

//unlike primitive types, equality comparison of objects are based on the reference in the memory. 
//if the objects are assigned to same memory, they are consider equal.
//so only third comparison returns true since they point the same mamory address.



//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
//Does the order that you assign (o3 = o2 or o2 = o3) matter?

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(JSON.stringify(o2)  + ' vs ' + JSON.stringify(o3));

//lets chanege the o1

o2.foo = 'hey';

console.log(o2);

//lets see if they are still the same 

console.log(JSON.stringify(o2)  + ' vs ' + JSON.stringify(o3));

//changing o2 also changes o3. lets change o3 and see whether o2 changes.

o3.foo = "hello";

console.log(JSON.stringify(o2)  + ' vs ' + JSON.stringify(o3));

//changing o3 also changes o2.
//to sum up, changing the values of objects having same refence in the memory also changes the 
//values of objects pointing same memory. In this example, only o2 and o3 have same memory reference.
//so changing o1 does not effect o2 and o3 or vice versa.

//What does the following code return? (And why?)

let bar = 42;

console.log(typeof typeof bar);

//I thought it would return object. but i see that it returns "string". it makes sense becuz when you want to compare
//the types of variables, you can not make it with object type. 

    












