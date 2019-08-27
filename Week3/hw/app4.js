//  4. Create a function named `vehicleType` that receives a color, and a code, 1 for car, 2 for motorbike. And prints _'a blue motorbike'_ for example when called as `vehicleType("blue", 2)`
function vehicleType(color, code) {
  if (code === 2) {
    console.log('a ' + color + ' motorbike');
  }
  if (code === 1) {
    console.log('a ' + color + ' car');
  } else {
    console.log('please make sure you entered right value');
  }
}
vehicleType('blue', 2);
