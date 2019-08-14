console.log(`------- 2 -------`);
console.log(`Create a function named colorCar that receives a color, and prints out, 'a red car' for example:`);

function colorCar(color) {
  console.log(`The color of the car is ${color}.`);
}

let colorOfThePaint = `maroon`;
colorCar(colorOfThePaint);

console.log(`I changed the color.`)

colorOfThePaint = `black`;
colorCar(colorOfThePaint);
console.log(`\n`);

