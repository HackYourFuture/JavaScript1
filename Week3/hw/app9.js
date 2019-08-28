//  9. Change the function `vehicle` to use the list of question 7. So that `vehicle("green", 3, 1)` prints "a green new bike".
let vehicleList = ['otobus', 'pickup', 'motorbike', 'caravan', 'bike'];

function vehicle(color, code, age) {
  if (code => 0 && code < listOfVehicles.length) {
    if (age <= 1) {
      age = ' new';
    } else {
      age = ' used';
    }
    console.log('a ' + color + age + ' bike');
  } else {
    console.log('Please modify your selection again');
  }
}

vehicle('green', 3, 2);
