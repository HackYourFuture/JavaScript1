var z = 7.25;
console.log(z);
var a = 7;
console.log(a);
console.log("the highest value is : 7.25");

// second
var a = Math.round(z);
console.log(a);
var c = z - a;
if ( c > 0 && z != a ){
    console.log("the highest value is : " + z);
} else{
    console.log("the highest value is : " + a);
}

// third
const m = Math.max (z, a);
console.log(m);
