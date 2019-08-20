{
  /*Create a function called vehicle, like before, 
but takes another parameter called age, so that 
vehicle("blue", 1, 5) prints 'a blue used car' */

  function vehicle(color, code, age) {
    // Vehivle type:
    let selectVehicle;
    if (code === 1) {
      selectVehicle = 'car';
    } else if (code === 2) {
      selectVehicle = 'motobike';
    } else {
      selectVehicle = 'unknown vehicle type. Please use value 1 or 2';
    }
    // Vehivle condition:
    let carAge = 'new';
    if (age > 1) {
      carAge = 'used';
    }

    return 'A ' + color + ' ' + carAge + ' ' + selectVehicle;
  }
  console.log(vehicle('blue', 1, 5));
  console.log(vehicle('white', 2, 7));
  console.log(vehicle('white', 3, 6));
}
