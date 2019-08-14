{
  /*Create a function called vehicle, like before, 
but takes another parameter called age, so that 
vehicle("blue", 1, 5) prints 'a blue used car' */

  function vehicle(color, code, age) {
    // declare empty variables
    var selectVehicle;
    let carAge;

    // use if statement to update the empty variables:

    if (code === 1) {
      if (age >= 5) {
        selectVehicle = 'car';
        carAge = 'used';
        return 'A ' + color + ' ' + carAge + ' ' + selectVehicle;
      }
    } else if (code === 2) {
      if (age <= 5) {
        selectVehicle = 'motorbike';
        carAge = 'new';
        return 'A ' + color + ' ' + carAge + ' ' + selectVehicle;
      }
    } else {
      return 'Use valed values';
    }
  }
  console.log(vehicle('blue', 1, 5));
  console.log(vehicle('white', 2, 4));
  console.log(vehicle('white', 3, 6));
}
