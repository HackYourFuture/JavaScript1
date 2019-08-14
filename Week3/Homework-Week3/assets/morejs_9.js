function vehicle(color, code, age) {
  let vehicles = ['motorbike', 'scooter', 'caravan', 'bike'];
  let selectVehicle;
  let carAge;

  for (let i = 0; i < vehicles.length; i++) {
    if (code === i) {
      selectVehicle = vehicles[i];
    }
  }
  if (age >= 1) {
    carAge = 'used';
  } else if (age <= 1) {
    carAge = 'new';
  } else {
    return 'Use valed values';
  }
  return 'A ' + color + ' ' + carAge + ' ' + selectVehicle;
}

console.log(vehicle('Green', 3, 1));
