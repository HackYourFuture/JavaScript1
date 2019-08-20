{
  /* What if you add one more vehicle to the list, 
  can you have that added to the advertisement without 
  changing the code for question 10?*/

  // Yes, this function allows to add more elements to the list
  //and will console.log accordingly:

  const vehicles = [' motorbike', ' scooter', ' caravan', ' bike'];
  vehicles.push(' lorry'); // To add new element to the end of the array.

  function advert(vehicleNames) {
    let advString = '';
    for (let i = 0; i < vehicleNames.length - 1; i++) {
      const name = vehicleNames[i];
      if (i > 0) {
        advString += ',';
      }
      advString += name + 's';
    }
    advString += ' and' + vehicleNames[vehicleNames.length - 1] + 's.';
    return "Amazing Joe's Garage, we service " + advString;
  }

  const advString = advert(vehicles);
  console.log(advString);
}
