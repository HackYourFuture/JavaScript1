//Strings

//1

const myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);

console.log(myString.length);

const array = myString.split (",");

console.log(array);

console.log(array.join(" "));

//2

const str = 'dlroW olleH';

console.log(str);

const arr = str.split("");

console.log(arr);

const reverseArr = arr.reverse();

console.log(reverseArr);

const newStr = reverseArr.join("");

console.log(newStr)


//Arrays

//1

const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle");  // adding turtle to last strings  

console.log(favoriteAnimals);

favoriteAnimals.splice(1,0, "eagle"); // adding eagle after first strings and no remove

console.log(favoriteAnimals);

favoriteAnimals.splice(3,1);

console.log(favoriteAnimals);




// Operators

//1

0 == '0'; // true because, this strings value 0 can easily be converted into number value of 0

0 == [];  // true // If we coerce an empty array to a number, we get it's lenght, so it is true

"0" == [];  // false // Js cannot them to the same type.

//2

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;


z.push(4)
x.push(5);
console.log(z);
console.log(y);
console.log(x)

// this is all my hypothesis
// z dublicated y array so these are same
console.log(x == y); // false // Different array cannot equal
console.log(x === y); // false // Different array cannot equal
console.log(z === y); // true // Same array
console.log(z === x); // false // Different array cannot equal

//3

const o1 = { foo: "bar" };
const o2 = { foo: "bar" };
const o3 = o2;

//changing o2 changes o3
// changing o1 is not change o3 
console.log(o3 === o2);
console.log(o2 === o3);
console.log(o1 == o3);
// we cannot assign (const o2 = o3) because, o2 already been declared and 
//we cannot change value because this is const.