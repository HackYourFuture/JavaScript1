"use strict";
let x="fish";
let y="cat";
let person1={ "name": "Mr. Brown", "age":45};
let person2={"name": "Mrs. Brown", "age":40};

console.log(x);
console.log(y);
console.log(person1);
console.log(person2);

if (typeof x === typeof y){
console.log("Same Type");
} else {console.log ("Not the Same Type");
}

if (typeof x === typeof person1){
console.log("Same Type");
} else {console.log ("Not the Same Type");
}

if (typeof y === typeof person2){
console.log("Same Type");
} else {console.log ("Not the Same Type");
}
