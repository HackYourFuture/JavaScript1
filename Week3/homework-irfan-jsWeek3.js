//Question1

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);

let re= /,/gi;
let myNewString = myString.replace(re," ");
console.log(myNewString);

//Question2

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.shift();
favoriteAnimals.unshift("meerkat");
favoriteAnimals.unshift("blowfish");
console.log("My new Array will include meerkat between blowfish and capricorn.")
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
let indexMeerkat = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + indexMeerkat);



//More JavaScript
/* 1 */
function sumFunction(a, b, c) {
    return a + b + c;
}
/* 2 */
function colorCar(color) {
    console.log("a "+ color + "car");
}
/* 3 */
const music = [
    {
        title: 'In Rainbow',
        artist: 'Radiohead',
        year: 2007,
        genre: 'rock'
    },
    {
        title: 'The End',
        artist: 'Shlohmo',
        year: 2015,
        genre: 'electronic'
    },
];

function printOutProperties(object){
    for(let index=0;index<music.length; index++ ){
        console.log(object[index]);
    }
}

printOutProperties(music);

/* 4 */
function vehicleType(color,code){
    if (code == 1) {
        console.log("a "+color+ " car");
      }
    else if (code==2){
        console.log("a "+color+ " motorbike");
    }
}

vehicleType("red",1);


/* 5 */
console.log((3===3) ? 'yes' : 'no');

/* 6 */
function vehicle(color,code,age){
    if (code==1 && age<3){
        console.log("a " + color + " new car")
    }
    else if (code==1 && age>2) {
        console.log("a " + color + " used car")
    }
    else if (code==2 && age<3){
        console.log("a " + color + " new motorbike")
    }
    else if (code==2 && age>2) {
        console.log("a " + color + " used motorbike")
    }
}

vehicle("red",2,2);


/* 7 */
listOfVehicles = ["motorbike","caravan","bike"];
/* 8 */
console.log(listOfVehicles[2]);


/* 9 */
function newVehicle(color,code,age){
    if (age<3){
        console.log("a " + color + " new " + listOfVehicles[code-1])
    }
    else if (age>2) {
        console.log("a " + color + " used " + listOfVehicles[code-1])
    }
    else if (age<3){
        console.log("a " + color + " new " + listOfVehicles[code-1])
    }
    else if (age>2) {
        console.log("a " + color + " used"  + listOfVehicles[code-1])
    }
}
newVehicle("green",3,1);
newVehicle("blue",2,5);


/* 10 & 11 */
const vehicleList = ["motorbike", "caravan", "bike", "automobile", "truck"];
let advertisement = "Amazing Joe's Garage, we service " 

for (let i=0; i<vehicleList.length-1; i++) {
    advertisement += vehicleList[i]+"s, ";
    }

advertisement += "and " + vehicleList[vehicleList.length-1] + "s.";
console.log(advertisement);



/* 12 */
let emptyObject = [];

/* 13 & 14 */
let teacherModules = [
    {
        Philipp: "Html&Css",
        Hardit: "GitBash",
        Marciano: "JavaScript",
        Unmesh: "Git",
        Sander: "JavaScript"
    },
];


/* 15 */
let x = [1,2,3];
let y = [1,2,3];
let z = y;

console.log(x==y);
console.log(x===y);
console.log(z==y);
console.log(z==x);


/* 16 */
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2.abc="abc";
console.log(o2);
console.log(o3)
/* It effects also o3 */

o1.xyz="xyz";
console.log(o1);
console.log(o3);
/* It doesn't effect */
/* When I tried to change the order "o2=o3", it causes an error: o2 has already been declared. */


/* 17 */
let bar =42;
console.log(typeof typeof bar);
/* Normally the type of the bar is number. But when we get the type of its again, the output 
becomes string. Because we're getting the type of 'number' when we get the type 2nd time. */