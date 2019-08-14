console.log(`------- 4 -------`);
console.log(`Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.`);
console.log(`And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)`);

function vehicleType(color, code) {
  let type;
  if (code === 1) {
    type = `car`;
  } else {
    type = `motorbike`;
  }
  console.log(`It is a ${color} ${type}.`);
}

vehicleType(`black`, 1);
vehicleType(`purple`, 2);

console.log(`\n`);

