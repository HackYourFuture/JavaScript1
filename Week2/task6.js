console.log(`More JavaScript`);
console.log(`
Task 6 `); //a function which prints the color, type of the vehicle and used or new
function vehicle(color, code, age) {
  if (code === 1) {
    code = 'car';
  } else if (code === 2) {
    code = 'motorbike';
  } else {
    code = 'but vehicle type is unknown';
  }
  if (age > 2) {
    age = 'used';
  } else if (age === 1) {
    age = 'brand new';
  } else {
    age = 'wrong input';
  }
  console.log('a ' + color + ' ' + age + ' ' + code);
}

vehicle('blue', 2, 0);
