console.log(`More JavaScript`);
console.log(`
Task 4 `); // a function which prints the color and a type of the vehicle

function vehicleType(color, code) {
  if (code === 1) {
    code = 'car';
  } else if (code === 2) {
    code = 'motorbike';
  } else {
    code = 'but vehicle type is unknown';
  }
  console.log('a ' + color + ' ' + code);
}

vehicleType('blue', 3);