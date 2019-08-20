/*
Change the function vehicle to use the list of question 7. 
So that vehicle("green", 3, 1) prints "a green new bike".
*/

function vehicle(color, code, age) {
  let vehicles = ['motorbike', 'scooter', 'caravan', 'bike'];
  let selectVehicle;
  let carAge;

  // for (let i = 0; i < vehicles.length; i++) {
  //   if (code === i) {
  //     selectVehicle = vehicles[i];
  //   }
  // }

  if (code >= 0 && code < vehicles.length) {
    selectVehicle = code;
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
