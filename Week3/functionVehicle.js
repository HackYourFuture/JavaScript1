// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
  let type;
  let ageText;

  if (age >= 1) {
    ageText = `used`;
  } else {
    ageText = `new`;
  }

  if (code === 1) {
    type = `car`;
  } else {
    type = `motorbike`;
  }

  return `It is a ${color} ${ageText} ${type}.`;
}

vehicle('blue', 1, 2);
vehicle('green', 2, 0);
console.log(vehicle('grey', 1, 5));
console.log(vehicle('grey', 1, 0));
