//  6. Create a function called `vehicle`, like before, but takes another parameter called `age`, so that `vehicle("blue", 1, 5)` prints _'a blue used car'_
vehicleCode = {
  1: 'car',
  2: 'motorbike',
  3: 'bike',
};

function vehicle(color, code, age) {
  if (code < 3) {
    if (age <= 1) {
      console.log('a ' + color + ' new ' + vehicleCode[code]);
    }
    if (age > 1) {
      console.log('a ' + color + ' used ' + vehicleCode[code]);
    }
  } else {
    console.log('please specify the color, code and age again!');
  }
}
vehicle('blue', 3, 5);
