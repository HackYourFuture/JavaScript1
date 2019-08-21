//9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function myVehicles(color, code, age) {
  let vehicles = ['motorbike', 'caravan', 'bike', 'truck'];
  let myChosenVehicle;
  let myVehicleType;
  let i;

  if (code >= 0 && code < vehicles.length) {
    myChosenVehicle = vehicles[code];
  }

  if (age >= 1) {
    myVehicleType = 'used';
  } else {
    myVehicleType = 'new';
  }

  return `a ${color} ${myVehicleType} ${myChosenVehicle}`;
}

myVehicles('green', 3, 1);
console.log(myVehicles('green', 3, 1));
