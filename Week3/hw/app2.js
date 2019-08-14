//  2. Create a function named `colorCar` that receives a color, and prints out, _'a red car'_ for example.

colorCar = 'a red car';
function colorCar() {
  colorCar.style.color = 'red';
}
console.log(colorCar);

// or
function coloredCar(color) {
  return 'a ${color} car';
}
console.log(coloredCar('red'));
