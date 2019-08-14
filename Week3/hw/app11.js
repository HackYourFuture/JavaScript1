//  11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

vehiclesList = ['otobus', 'pickup', 'motorbike', 'caravan', 'bike'];
vehiclesList.push('car');

let advertisement = '';

for (let i = 0; i < vehiclesList.length; i++) {
  if (i == vehiclesList.length - 1) {
    advertisement += 'and ' + vehiclesList[i] + 's.';
  } else {
    advertisement += vehiclesList[i] + 's, ';
  }
}
console.log(`Amazing Joe's Garage, we service ${advertisement}`);
