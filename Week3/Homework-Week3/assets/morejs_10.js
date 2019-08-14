{
  /*Use the list of vehicles to write an advertisement. 
  So that it prints something like: "Amazing Joe's Garage, 
  we service cars, motorbikes, caravans and bikes.". 
  (Hint: use a for loop.)*/
  const vehicles = [' motorbike', ' scooter', ' caravan', ' bike'];

  function advert() {
    let advString = '';

    for (let i = 0; i < vehicles.length; i++) {
      if (i === vehicles.length - 1) {
        advString += vehicles[i] + 's.';
      } else {
        advString += vehicles[i] + 's,';
      }
    }
    return "Amazing Joe's Garage, we service for" + advString;
  }
  console.log(advert());
  //
}
