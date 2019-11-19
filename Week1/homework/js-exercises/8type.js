// we are starting to write 4 variable..
let name = "ahmet";
let color = "purple";
let student = {
  name: "yasin",
  age: 30
};
let animal = {
  name: "tiger",
  legs: 4
};
console.log(`name variable is: ${name}`);
console.log(`color variable is: ${color}`);
console.log(`student variable is: ${Object.entries(student)}`);
console.log(`animal variable is: ${Object.entries(animal)}`);
// And here, we will check type of the variables..

console.log(typeof name, typeof student);
console.log(typeof color, typeof animal);

// And here, with writing conditional statement we will check..

if (typeof name === typeof color) {
  console.log("SAME TYPE");
} else {
  console.log("name and color are not same type");
}
if (typeof name === typeof student) {
  console.log("SAME TYPE");
} else {
  console.log("name and student are not same type");
}
if (typeof name === typeof animal) {
  console.log("SAME TYPE");
} else {
  console.log("name and animal are not same type");
}
if (typeof color === typeof student) {
  console.log("SAME TYPE");
} else {
  console.log("color and student are not same type");
}
if (typeof color === typeof animal) {
  console.log("SAME TYPE");
} else {
  console.log("color and animal are not same type");
}
if (typeof student === typeof animal) {
  console.log("SAME TYPE");
} else {
  console.log("student and animal are not same type");
}
