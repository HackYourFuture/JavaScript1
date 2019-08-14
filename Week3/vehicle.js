
console.log(`------- 6 -------`);
console.log(`Create a function called vehicle, like before, but takes another parameter called age`);
console.log(`so that vehicle("blue", 1, 5) prints 'a blue used car'`);

function vehicle(color, code, age) {
  let type;
  let status;
  if (code === 1) {
    type = `car`;
  } else {
    type = `motorbike`;
  }

  if (age < 5) {
    status = `new`;
  } else {
    status = `used`;
  }

  console.log(`It is a ${color} ${status} ${type}.`);
}

vehicle(`black`, 1, 2);
vehicle(`purple`, 2, 5);

console.log(`\n`);