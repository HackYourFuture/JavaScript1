// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
  if (age >= 1 && code === 1) {
    return `a ${color}  used car`;
  } else if (age < 1 && code === 1) {
    return `a ${color} new car`;
  } else if (age >= 1 && code === 2) {
    return `a ${color}  used motorbike`;
  } else if (age < 1 && code === 2) {
    return `a ${color} new motorbike`;
  } else {
    return `Please select age of the vehicle `;
  }
}

vehicle('blue', 1, 2);
vehicle('green', 2, 0);
console.log(vehicle('blue', 1, 5));
