//  9. Change the function `vehicle` to use the list of question 7. So that `vehicle("green", 3, 1)` prints "a green new bike".
let vehicleList = ['otobus', 'pickup', 'motorbike', 'caravan', 'bike'];

function vehicle(color, code, age) {
  if (code => 0 && code < listOfVehicles.length && age <= 1) {
    chosenVehicle = listOfVehicles[code];
    age = [' new', ' used'];
    console.log('a ' + color + age[0] + ' bike');
  }
}

vehicle('green', 3, 1);
