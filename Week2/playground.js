/*let s = "Hello".toLowerCase();
let l = s.length;

function sum(a, b) {
  return a + b;
}
let max = function (a, b) {
  return a > b ? a : b;
}

let s1 = sum(4, 5);
let s2 = 4 + 5;

if (s2 == s1) {
  console.log("same");
} else {
  console.log("not same");
}
*/
/* Statemens:
 let s2 = 4 + 5;
 console.log("not same");
 let s = "Hello".toLowerCase();
let l = s.length;
*/

/* Expressıons:
 sum(a, b)
 sum(4, 5)
 "Hello".toLowerCase();
 (s2 == s1)
*/

/*const shoes = "blue";
const shirt = "red";
const pants = "green";

if (shoes === "green" && shirt === "green" && pants === "green" ) {
    console.log("all of clothes are green");
  }

  if (shoes === "green" || shirt === "green" || pants === "green" ) {
    console.log("one of clothes are green");
  }

  if (pants === "green" ) {
    console.log("your pants are green");
  }
  */

  const month ="April";
  let season ="";

  switch (month) {
    case "January":
        season = "winter";
        break;

    case "April":
        season ="spring" ;
        break;

    default:
        season = "summer";
  }

  console.log(season);