//strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
//useing replac to replace comma with a space and g to target all the cummas
let myNewString = myString.replace(/,/g, ' ');
console.log(myNewString);


//arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"meerkat");
//the first number in splice refers to where we want to start splicing
//and 0 refers to how many objects we want to delet (here it is zero we don't want to delet any thing)
// and after this we add the objects that we want to add  
console.log("the value sould be : blowfish, meerkat, capricorn, giraffe, turtle ");
console.log(favoriteAnimals);
console.log("The array has a length of :" + favoriteAnimals.length);
favoriteAnimals.splice(3,1);
// because we just want to delet one object we put number 3 where we want to start and 1 is the number of the objects that we want to delet
console.log(favoriteAnimals);
//to find the position or the index of the item in the array we use .index
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));

//functions
//Q1
//Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(a,b,c){
    return a + b + c ;
}
sum(5,10,15);

//Q2
//Create a function named colorCar

function colorCar(color){
console.log("it's a " + color + " car!");
}
colorCar("yellow");

//Q3
//Create an object and a function that takes the object as a parameter and prints out all of its properties and values
const movie = {
    name: "zohan",
    year: 2000,
    genre: "comedy",
    actor: "adam sandler"
    };

    function movieInfo(object){
        let entries = Object.entries(object);
        for ( let [key,value] of entries){
    console.log(key + " : " + value);
        }  
    }
    movieInfo(movie);

//Q4
//Create a function named vehicleType
function vehicleType(color,type){
    if(type == 1){
        console.log("a " + color + " car");
    }else if (type ==2){
        console.log("a " + color + " motorbike");
    }else if (type ==3){
        console.log("a " + color + " bicycle");
    }
}
vehicleType("blue",1);
vehicleType("green",2);
vehicleType("red",3);

//Q5
// Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

console.log((3 === 3) ? "yes" : "no");

//Q6
//Create a function called vehicle

function vehicle(color,type,age){
    if(type == 1 && age == 1){
        console.log("a new " + color + " car");
    }else if(type == 1 && age == 2){
        console.log("a used " + color + " car");
    }else if (type == 2 && age == 1){
        console.log("a new " + color + " motorbike");
    }else if (type == 2 && age == 2){
        console.log("a used " + color + " motorbike");
    }
}
vehicle("blue",1,1);
vehicle("green",2,2);

//Q7
//Make a list of vehicles

let listOfVehicles = [ "car","motorbike", "caravan", "bike"];

//Q8
//How do you get the third element from list?

console.log(listOfVehicles[2]);

//Q9
//Change the function vehicle to use the list of question 7. 

function vehicle(color,type,age){
    if(type == 1 && age == 1){
        console.log("a new " + color + " " + listOfVehicles[0]);
    }else if(type == 1 && age == 2){
        console.log("a used " + color + " " + listOfVehicles[0]);
    }else if (type == 2 && age == 1){
        console.log("a new " + color + " " + listOfVehicles[1]);
    }else if (type == 2 && age == 2){
        console.log("a used " + color + " " + listOfVehicles[1]);
    }
}
vehicle("blue",1,1);
vehicle("green",2,2);

//Q10
//Use the list of vehicles to write an advertisement. 
//the list is already created above

let adv = "Amazing hani's Garage, we service ";
function advertisement (){
    for( i = 0 ; i < listOfVehicles.length; i++){
    
      if (i == listOfVehicles.length-1){
        adv +=  " and " + listOfVehicles[i] + ".";
      }else if(i == listOfVehicles.length-2){
         adv += listOfVehicles[i];
      }
      else { adv += listOfVehicles[i] +  ", " ;
      }
}console.log(adv)
}
advertisement();

//Q11
//add one more vehicle to the list

listOfVehicles.push("truck");
console.log(listOfVehicles);
advertisement();

//Q12
//create an empty object
let emptyOpject = {};

//Q13
//Create an object that contains the teachers that you have had so far 
Q13
const myTeachers = [
{
firstName: "Ze",
lastName: "German",
},
{
firstName: "Unmesh",
lastName: "Joshi",
},
{
firstName: "Sander",
lastName: "Hidding",
},
];

//Q14
//Add a property to the object you just created that contains the languages that they have taught you

function addingLanguage (){
for (i = 0 ; i < myTeachers.length; i++ ){
if(myTeachers[i].lastName === "Joshi"){
myTeachers[i].languages = "git";
}else if (myTeachers[i].lastName === "Hidding"){
myTeachers[i].languages = "java script";
}else if (myTeachers[i].lastName === "German"){
myTeachers[i].languages = "html & css";
};
}
console.log(myTeachers);
}
addingLanguage();

//Q15
//Write some code to test two arrays for equality using == and ===

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y ? true : false );
console.log(x === y ? true : false );
console.log(z == y ? true : false );
console.log(z == x ? true : false );

//Q16
//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

function changingValues(){
console.log("old value for o3 ", o3);
o2.edit = "new key";
console.log("new value for o3 after changing o2 ", o3);
o1.edit = "amsterdam";
console.log("the value of o3 after changing the value of o1 ", o3);
}
changingValues()
// changing o2 changes o3 but changing o1 dosen't effect o3 because they aren't realated to each other

//Q17
//What does the following code return? (And why?)

let bar = 42;
console.log(typeof typeof bar);

let x = true
console.log(typeof typeof x);
//by typing typeof twice we git the type of the result which is a string because it's written between quotations marks
