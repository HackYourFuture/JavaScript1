/* Create a function named vehicleType that receives a color, 
and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' 
for example when called as vehicleType("blue", 2)
*/

{
  function vehicleType(color, code) {
    // declare empty variable
    let selectVehicleType;
    // use if statement to update the empty variable (selectVehicleType)
    if (code === 1) {
      selectVehicleType = 'car';
    } else if (code === 2) {
      selectVehicleType = 'motorbike';
    } else {
      return 'Error, the values should be only 1 or 2';
    }

    return 'A ' + color + ' ' + selectVehicleType;
  }
  console.log(vehicleType('blue', 2));
  console.log(vehicleType('White', 1));
  console.log(vehicleType('Green', 3));
}
