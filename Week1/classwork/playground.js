const city = {
  name: "Zutphen",
  postCode: 7203,
  province: "Gelderland",
  population: 52350,
  capital: false
};

console.log(city.name);
console.log(city["postCode"]);
console.log(Object.values(city));

let names = ["ahmet", "yasin", "kara", "mesut", "ibrahim"];
let ahmet = {
  name: "ahmet",
  age: 30,
  country: "turkey"
};
console.log(ahmet["name"]);

console.log(Object.keys(names));
console.log(Object.values(names));

const city = "Istanbul";
const age;

console.log(`My favourite city is: ${city} and my age is: ${age}`);

let name = "ahmet";
let age = 30;
let amIHere = true;
let who;
let example = typeof age;

console.log(typeof name);
console.log(typeof age);
console.log(typeof amIHere);
console.log(typeof who);
console.log(typeof example);
