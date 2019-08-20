{
  /*Use the list of vehicles to write an advertisement. 
  So that it prints something like: "Amazing Joe's Garage, 
  we service cars, motorbikes, caravans and bikes.". 
  (Hint: use a for loop.)*/
  const vehicles = [' motorbike', ' scooter', ' caravan', ' bike'];

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

  //
}
