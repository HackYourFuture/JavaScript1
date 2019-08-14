{
  /* What if you add one more vehicle to the list, 
  can you have that added to the advertisement without 
  changing the code for question 10?*/

  // Yes, this function allows to add more elements to the list
  //and will console.log accordingly:

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
  vehicles.push(' lorry'); // To add new element to the end of the array.
  console.log(advert());
  //
}
