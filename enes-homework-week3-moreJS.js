//Q:More JS

//Q1

function sum(a,b,c) {
  return (a+b+c);
};

console.log(sum(1,2,3));

//Q2

function colorCar(str) {
  console.log("a " + str + " car" );
}

const str1 = "red";

console.log(colorCar(str1));


//Q3
const obj1 = {
  name: "Jason",
  surname: "Born",
  age: 33,
};

function printOutPropertiesAndValues (obj) {
  for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
  }
}

printOutPropertiesAndValues(obj1);// expected output: name surname age Jason Born 33

Q4
let vehicles = "";
function codeDesigner(color, code) {//since one function is designed to do one job, I divided the question in two functions.
  if (code === 1){
    vehicles = "car";
  } else if (code === 2){
    vehicles = "motorcycle";
  } else {
    vehicles = "";
    console.log("please select 1 for cars and 2 for motorcycles");
  }
}
function vehicleType(color, code) {
  codeDesigner(color, code);
  console.log("a " + color + " " + vehicles);
}

vehicleType("blue", 1);

  /* Another method: 
  (However I could not find out how to write down  
    "please select 1 for cars and 2 for motorcycles" 
    when selected other than 1,2 with this method.)
  function vehicleType(color, code) {
    vehicles = (code ===1 ) ? "car" :
              (code === 2 ) ? "motorcyle" : 
              "";
  console.log("a " + color + " " + vehicles);
  }
  */

vehicleType("blue", 1);


//Q5

console.log((3===3) ? "yes" : "no"); //Since .log is an function it is possible to write down an expression in it.

//Q6 
/* function vehicle() necessitates the first two functions.
let vehicles = "";
function codeDesigner(color, code) {
  if (code === 1){
    vehicles = "car";
  } else if (code === 2){
    vehicles = "motorcycle";
  } else {
    vehicles = "";
    console.log("please select 1 for cars and 2 for motorcycles");
  }
}
function vehicleType(color, code) {
  codeDesigner(color, code);
  console.log("a " + color + " " + vehicles);
}
*/
let situation = "";
function vehicle(color, code, age){
  codeDesigner(color, code);
  situation = (age == 0) ? "brand-new" : "used";
  console.log("a " + color + " " + situation + " " + vehicles);
}

vehicle("gold", 2, 5);

//Q7

let listOfVehicles = ["motorbike", "caravan", "bike", "plane", "yacht"];
console.log(listOfVehicles); // expected output: motorbike caravan bike plane yacht  

//Q8

console.log(listOfVehicles[2]); // expected output: bike

//Q9 
let vehicles = "";
function codeDesigner(color, code){
  vehicles = type = (code === 1) ? "motorbike" : 
         (code === 2 ) ? "caravan" :
         (code === 3 ) ? "bike" :
         (code === 4 ) ? "plane" :
         (code === 5 ) ? "yacht" : "";
}


vehicle("green", 3, 1);

//Q10

let joesGarage = ["car", "motorbike", "caravan", "bike", "plane", "yacht"];
let arr;
let arr2 = [""];
function advertisementMaker(arr){
  for (let i = 0; i < arr.length; i++){
    arr2[i] = arr[i] + "s"; 
  }
  arr2 = arr2.slice(0, arr2.length - 1).join(', ') + ", and " + arr2.slice(-1);
  console.log("Amazing Joe's Garage, we service " + arr2 + ".");
}

advertisementMaker(joesGarage);


11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
//Q11

joesGarage.push("tank");
advertisementMaker(joesGarage);
//normally it would work. but somehow, the functions works in the question 10 but not in question 11.

//Q12
const emptyObject = {""};

//Q13
const teacherNames = {
  HTML_CSS : ["Philip", "Rob"];
  CLI : ["Unmesh", "Hardith"];
  JS1 : ["Yash"];
};

//Q14
teacherNames.languages = ["English"];

//Q15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

  function equalityTester (a, b) {
    if (a === b) {
      console.log(a + " and " + b + " are strictly equal");
    } else if (x == y) {
      console.log(a + " and " + b + "are equal but they may not be strictly equal");
    } else {
      console.log(a + " and " + b + " are not equal");
    }
  }

  x == y // expected output: false;
  x === y // expected output: false;
  z == y // expected output : true;
  z === y // expected output: true

  equalityTester(x, y); /*expected output: x and y are not equal but z and y are equal. Even though the elements of x and y are the same, 
  because they are referencing to different array data's, java does not seem them as equals. 
  On the other hand, because y and z are pointing the same data, computer treats them as equals.*/  

16. Take a look at the following code:

    ```js
    let o1 = { foo: "bar" };
    let o2 = { foo: "bar" };
    let o3 = o2;
    ```

    Show that changing `o2` changes `o3` (or not) and changing `o1` changes `o3`(or not).

    Does the order that you assign (`o3 = o2` or `o2 = o3`) matter?

17. What does the following code return? (And why?)
//Q17

it will return "string". Because typeof bar is "number" and type of "number" is "string".