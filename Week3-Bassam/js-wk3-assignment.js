// JS - week3 Assignment:
// Step 4: String and Array challenges

// 1. Strings!

// Consider the following string:
let myString = "hello,this,is,a,difficult,to,read,sentence";

// 1.1 Add the string to your file and log it.
console.log(myString);

// 1.2 Log the length of myString.
console.log(myString.length);

// 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
myString = myString.split(',').join(' ');

// 1.4 Log myString to see if you succeeded.
console.log(myString);

// 2. Arrays!
console.log('arrays =======================')

// Consider the following array:
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
let MauroFavoriteAnimals = favoriteAnimals.slice();
MauroFavoriteAnimals.push('turtle');

// 2.2 Log your new array!
console.log(MauroFavoriteAnimals);

// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
let JimFavoriteAnimal = MauroFavoriteAnimals.slice();
JimFavoriteAnimal.splice(1,0,'meerkat');
// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log(`the new value will be ${JimFavoriteAnimal}`);

// 2.5 Log your new array!
console.log(JimFavoriteAnimal);

// 2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
console.log(`The array has a length of: ${JimFavoriteAnimal.length} elements.`);

// 2.7 Jason does not like 'giraffe', delete this animal from the array.
let JasonFavoriteAnimal = JimFavoriteAnimal.slice();
let rmv = JasonFavoriteAnimal.indexOf('giraffe');
rmv > -1 ? JasonFavoriteAnimal.splice(rmv, 1) : JasonFavoriteAnimal = JasonFavoriteAnimal;

// 2.8 Again log your new array.
console.log(JasonFavoriteAnimal);

// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
let myFavoriteAnimal = JimFavoriteAnimal.slice();
myFavoriteAnimal = myFavoriteAnimal.filter(function(item) {
    return item !== 'meerkat';
});
console.log(myFavoriteAnimal);

// 2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
for (let i of JimFavoriteAnimal){
    i === 'meerkat' ? console.log(`the item you are looking for is at index ${JimFavoriteAnimal.indexOf(i)}`) : false;
};

// More JavaScript 🎉
// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum( a, b, c ) {
    return a + b + c
}
console.log(sum(1,2,3)) // 6

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(par) {
    
    return (`a ${par} car`);
}
console.log(colorCar('red'))

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const obj3 = {
    one : 1,
    two : 'two',
    three : function three(){
        return 3
    }
};

function getKeysAndValues(obj) {

    return Object.keys(obj) + ' , ' + Object.values(obj)
};
console.log(getKeysAndValues(obj3));

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
    code === 1 ? code = 'car' : code = 'motorbike';
    return (`a ${color} ${code}.`)
}
console.log(vehicleType('blue', 2));

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
/*
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}
*/
console.log(3 === 3 ? 'yes' : 'no');

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, type, age) {
    type === 1 ? type = 'car' : type = 'motorbike';
    let condition = '';
    age === 0 || age === 1 ? condition = 'new' : condition = 'used';
    return (`a ${color} ${condition} ${type}.`);
};
console.log(vehicle('blue', 1, 5))

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicleList = ["motorbike", "caravan", "bike"];

// 8. How do you get the third element from that list?
console.log(vehicleList[2])

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, type, age) {
    if ( type === 1 ) {
        type = 'car'
    } else if ( type === 2 ) {
        type = 'motorbike';
    } else {
        type = 'bike';
    };

    age === 0 || age === 1 ? condition = 'new' : condition = 'used';

    return (`a ${color} ${condition} ${type}.`);
};
console.log(vehicle('green', 3, 1))

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.) 
vehicleList = ['cars', "motorbikes", "caravans", "bikes"];
let copiedList = vehicleList.slice();
let part1 = copiedList.splice(0,3).join(', ');
console.log(`Amazing Joe's Garage, we service ${part1} and ${copiedList}.`)

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
function flexi(arr) {
    let copy = arr.slice();
    let copy2 = copy.splice(0,copy.length-1).join(', ');
    return (`Amazing Joe's Garage, we service ${copy2} and ${copy}.`);
};
console.log(flexi(vehicleList));

// 12. Create an empty object.
let empOb = {};

// 13. Create an object that contains the teachers that you have had so far for the different modules.

let teachers = {
    htmlCss : 'Josja',
    htmlCss : 'Sander',
    cli : 'Unmesh',
    JS : 'Joost'
};

// 14. Add a property to the object you just created that contains the languages that they have taught you.

let languages = {
    Josja :'html-css',
    Sander: 'html-css',
    Unmesh: 'cli',
    Joost :'js'
};

// 15. Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
console.log( x == y );
console.log( x === y );

let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
console.log( z == x );
console.log( z == y );

function same( a, b ) {

    let same = a.length === b.length,
        result;

    !same ? result = false : result = true;

    for ( let j of b ) {
        for ( let i of a ) {
            i === j ? result = true : result = false;
        }
    }
    
    return result;
}
console.log( same( x, y ) );
console.log( same( x, z ) );
console.log( same( y, z ) );

// 16. Take a look at the following code:
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).Does the order that you assign (o3 = o2 or o2 = o3) matter?
console.log( o1 === o2 ); // false
console.log( o1 === o3 ); // false
console.log( o2 === o3 ); // true
o2 = { foo : 'bla' };
console.log( o2 === o3 ); // false => changing.

// 17. What does the following code return? (And why?)
let bar = 42;
console.log(typeof(typeof(bar))); // string

/////   THE END   /////



