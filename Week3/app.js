//1.1 Add the string to your file and log it.
let myString = 'hello,this,is,a,difficult,to,read,sentence';
//1.2 Log the length of myString.
console.log(myString);
console.log(myString.length);
//1.4 Log myString to see if you succeeded
console.log(myString.replace(/,/gi, ' '));

/////////////////Array///////////////////////
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(" 'meerkat' will be added between 'blowfish' and 'capricorn' ");
console.log(favoriteAnimals);
console.log(favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log(' The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat'));
/////////////////Function///////////////////////
function add(num1, num2, num3) {
  console.log(num1 + num2 + num3);
  return num1 + num2 + num3;
}
add(5, 5, 2);
//2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
  console.log(`a ${color} car`);
}
colorCar('red');

//Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let firstStudent = {
  firstName: 'muhannad',
  lastName: 'jo',
  age: 28,
  address: 'mainstreet129'
};

function readObject(obj) {
  console.log(obj);
}
readObject(firstStudent);

//4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue 
function vehicleType(myColor, id) {
  if (id === 1) {
    console.log('a' + ' ' + myColor + ' ' + 'car')
  } else if (id === 2) {
    console.log('a' + ' ' + myColor + ' ' + 'motorbike')
  } else {
    console.log('insert either 1 or 2')
  }
}
vehicleType('blue', 1);
//5.Can you write the following without the if statement, but with just as a single line with console.log(...);?
3 === 3 ? console.log("yes") : console.log("no");
4 === 3 ? console.log("yes") : console.log("no");
//6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, age, car) {
  console.log('a' + ' ' + color, ' ', age, ' ', car)
}
//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
////////as array ////////
let myVehicles = ["car", "motorbike", "caravan", "bike", "boot"]
//8.How do you get the third element from that list?
console.log(myVehicles[2])

////////creat more ////////
// vehicle('blue', 'used', 'car');
// vehicle('red', 'new', 'bus');
// vehicle('green', 'second hand', 'bike');
// vehicle('black', 'new', 'motor');
// vehicle('white', 'deluxe', 'caravan')

//9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, age, index) {
  console.log('a' + ' ' + color + ' ' + age + ' ' + myVehicles[index])
}
vehicle('red', 'new', 1)
vehicle('green', 'old', 2)
//10.Use the list of vehicles to write an advertisement.
//So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.
function vehicles(arr) {
  let counter = 0;
  let myText = "Amazing Joe's Garage, we service ";
  for (let i = 0; i < arr.length; i++) {
    counter++;
    myText = myText + " " + arr[i] + "s,"
    if (counter == arr.length - 1) {
      console.log(myText + " and " + arr[i + 1] + "s" + ".")
    }
  }
}
vehicles(myVehicles)
//11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
myVehicles.push('oldcar')
vehicles(myVehicles)
//12.Create an empty object.
let teachers = {};
//13.Create an object that contains the teachers that you have had so far for the different modules.
teachers = {
  first: 'Philipp',
  second: 'Rop',
  third: 'Unmesh',
  fourth: 'Hardit',
  fifth: 'yash',
};
//14.Add a property to the object you just created that contains the languages that they have taught you.
teachers.language = ['html', 'css', 'javascript'];
//test result
console.log(teachers)
console.log("-------------------------------------------------------------------")
//15.Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
/**********case 1****************/
if (x === y) {
  console.log('x === y the same')
} else {
  console.log('x === y not the same')
}
/***********case 2***************/
if (x == y) {
  console.log('x == y the same')
} else {
  console.log('x == y not the same')
}
/************case 3**************/
if (z == y) {
  console.log('z == y the same')
} else {
  console.log('z == y not the same')
}
/************case 4**************/
if (z == x) {
  console.log('z == x the same')
} else {
  console.log('z == x not the same')
}
//on other hand(explanation)
console.log("-------------------------------------------------------------------")
//create function which test (length and index's) for tow arrays and takes tow parameters 
//notes: this function shows message, it doesn't give returned value's to use it later in your program, but it's easy to add returned value's later if you wanted .
//please change once length of either x array or y array and check the result(try my function).
//after that change index of those array's and check the result(try my function).
function matchArrays(arr1, arr2) {
  if (arr1.length === arr2.length) { //match length of arrays
    let differences = 0;
    for (let index = 0; index < arr1.length; index++) {
      if (arr1[index] !== arr2[index]) { //match index content (x array) by (y array)
        differences += 1;
      } else {
        differences += 0;
      }
    }
    if (differences !== 0) {
      console.log('Not the same index')// negative index's  
    } else {
      console.log('finally, they are the have the same index and length')// positive index's  
    }
  } else {
    console.log('Not the same length') // negative lengths  
  }
}
matchArrays(x, y)
console.log("-------------------------------------------------------------------")
//16.Take a look at the following code:
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2; // assign o2 to o3 that means  o3 =>  {foo:"bar"}  because o2 = {foo: "bar" }
console.log(o3)
//whereas let o2 = o3; => give assign o3 value to o2  
console.log("-------------------------------------------------------------------")
//17.What does the following code return? (And why?)
let bar = 42;
let pp = typeof bar
console.log(pp)//returns a number
console.log(typeof pp)//returns a string
//on other hand(explanation)
let testType1 = typeof (typeof 1) === 'string'; // typeof always returns a string
console.log(testType1)//returns a string

