//11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

vehicles = ['motorbike', 'caravan', 'bike', 'truck'];
console.log(vehicles);
vehicles.push('car');
console.log(vehicles);

let advertisedVehicles = '';

for (let i = 0; i < vehicles.length; i++) {
  if (i == vehicles.length - 1) {
    advertisedVehicles += 'and ' + vehicles[i] + 's.';
  } else {
    advertisedVehicles += vehicles[i] + 's, ';
  }
}
console.log(`Amazing HappyMan's Garage, we service ${advertisedVehicles}`);
