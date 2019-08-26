
/**************************** More JavaScript ***************************** */

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(a,b,c) {
   return a + b + c
};

console.log(sum(1,2,3)); //  6

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
    return "a " + color +" car" 
}

console.log(colorCar('red'));   //  a red car

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

const bestDriver = {
    firstName:"Mika", 
    lastName:"Hakkinen", 
    teamName:"McLaren", 
    age:50};
    
function printObj(obj) {
    for (const key in obj) {
        console.log(`His ${key} : ${obj[key]}`)    
    }
 
} 

printObj(bestDriver);   


// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. 
    // And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

let vehicleCategory = {
    1 : "car",
    2 : "motorbike", 
};
    function vehicleType(color, category) {
  if (category <= 2) {
    console.log('a ' + color + ' ' + vehicleCategory[category]);
  } else {
    console.log('Please enter valid');
  }
}
vehicleType('blue', 2);
vehicleType('green', 3);

// I could have set the function vehicleType also with array like this. 

/* let vehicleCategory = ['car', 'motorbike'];
function vehicleType(color, category) {
  if (category <= 2) {
    category = vehicleCategory[1];
    console.log('a ' + color + ' ' + category);
  } else {
    console.log('Please enter valid number');
  }
}


// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

    /* Yes, we can use ternary operator to achieve it. */

console.log(3 === 3 ? "yes" : "no");
    
// 6. Create a function called vehicle, like before, but takes another parameter called age, 
    //so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, category, age) {
  if (category > 3) {
    console.log('Please enter valid number for category of vehicle');
  } else {
    if (age >= 1) {
      age = 'used';
    } else {
      age = 'new';
    }
    console.log('a ' + color + ' ' + age + ' ' + vehicleCategory[category]);
  }
}

vehicle('blue', 1, 5);
vehicle('black', 4, 5);

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let listOfVehicle = ["motorbike", "caravan", "truck", "bike", "jeep"];

// 8. How do you get the third element from that list?

console.log(listOfVehicle[2]);

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function newVehicle(color, category, age) {
  if (category > 5) {
    console.log('Please enter valid number for category of vehicle');
  } else {
    if (age > 1) {
      age = 'used';
    } else {
      age = 'new';
    }
    console.log('a ' + color + ' ' + age + ' ' + listOfVehicle[category]);
  }
}
newVehicle('green', 3, 1);
newVehicle('green', 6, 1);

 
// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

listOfVehicle = ["car", "motorbike", "caravan", "bike"];

let nameOfVehicle = "";

for (i = 1; i < listOfVehicle.length; i++) {
  if (i < listOfVehicle.length - 1) {
    nameOfVehicle += ', ' + listOfVehicle[i] + 's';
  } else if (i < listOfVehicle.length - 2) {
    nameOfVehicle += ', ' + listOfVehicle[i] + 's ';
  } else {
    nameOfVehicle += ' and ' + listOfVehicle[i] + 's.';
  }
}

console.log("Amazing Joe's Garage, we service " + listOfVehicle[0] + 's' + nameOfVehicle);

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

listOfVehicle.push('jeep');

nameOfVehicle = '';

for (i = 1; i < listOfVehicle.length; i++) {
  if (i < listOfVehicle.length - 1) {
    nameOfVehicle += ', ' + listOfVehicle[i] + 's';
  } else if (i < listOfVehicle.length - 2) {
    nameOfVehicle += ', ' + listOfVehicle[i] + 's ';
  } else {
    nameOfVehicle += ' and ' + listOfVehicle[i] + 's.';
  }
}

console.log("Amazing Joe's Garage, we service " + listOfVehicle[0] + 's' + nameOfVehicle);
  

// 12. Create an empty object.

    const class23 = new Object ();

// 13. Create an object that contains the teachers that you have had so far for the different modules.
// 14. Add a property to the object you just created that contains the languages that they have taught you.

class23.teachers = ['Philipp', 'Rob', 'Unmesh & Bonan', 'Yash'];

class23.languages = ['Html', 'CSS', 'Git', 'JavaScript1'];

console.log(
  class23,
); /* {teachers: Array(4), languages: Array(4)}
languages: (4) ["Html", "CSS", "Git", "JavaScript1"]
teachers: (4) ["Philipp", "Rob", "Unmesh & Bonan", "Yash"]0: "Philipp"1: "Rob"2: "Unmesh & Bonan"3:"Yash"
length: 4__proto__: Array(0)__proto__: Object */

// 15. Write some code to test two arrays for equality using == and ===. Test the following:

    let x = [1, 2, 3];
    let y = [1, 2, 3];
    let z = y;

    /*as we discussed the issue in the previous hw and lecture, they are objects and to ensure equlatiy, 
    it needs to reference to the same memory locations */
    
    x == y //    false --> because of the different references.
    x === y //   false --> because of the different references.
    z == y //    true --> they reference to same memory locations.
    z == x //    false --> there is no correlation.
    
// 16. 
    const o1 = { foo: "bar" };
    const o2 = { foo: "bar" };
    const o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
    
    /* Changing o2 changes o3 since o3 is referenced to value of o2.*/
    o2.foo = 'bar1';
   console.log(o2); // {foo: "bar1"}
   console.log(o3); // {foo: "bar1"}

/*But changing o1 doesn`t change o3 since they are not correlated.*/
   o1.foo = 'o1bar'; 
   console.log(o1); // {foo:"o1bar"}
   console.log(o3); // {foo:"bar1"}

// Does the order that you assign (o3 = o2 or o2 = o3) matter?
    
    /* It does matter since o2 is a constant and cannot be reassigned. */


// 17. What does the following code return? (And why?)

    let bar = 42;
    // typeof typeof bar;
    
    /* The result will be a string because typeof bar is a "number" 
    and typeof "number" is string.*/

    console.log(typeof bar); // "number"

    console.log(typeof "number"); // string
