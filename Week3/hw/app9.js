//  9. Change the function `vehicle` to use the list of question 7. So that `vehicle("green", 3, 1)` prints "a green new bike".

function vehicles(color, code, age) {
  const listOfVehicles = ['otobus', 'pickup', 'motorbike', 'caravan', 'bike'];
  const chosenVehicle = '';
  const vehicleType = '';

  for (let i = 0; i < listOfVehicles.length; i++) {
    if ((code = i)) {
      chosenVehicle = listOfVehicles[i];
    }
  }
}

if (('green', 3, 1)) {
  vehicleType = 'used';
} else {
  vehicleType = 'new';
}

console.log('a ${color} ${vehicleType} ${chosenVehicle}');
