//11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

vehicles = ['motorbike', 'caravan', 'bike', 'truck'];

let advertisedVehicles = "Amazing HappyMan's Garage, we service ";

function newAdvertisement(advertisedVehicles, vehicles) {
  for (let i = 0; i < vehicles.length; i++) {
    if (i == vehicles.length - 1) {
      advertisedVehicles += 'and ' + vehicles[i] + 's.';
    } else if (i == vehicles.length - 2) {
      advertisedVehicles += vehicles[i] + 's ';
    } else {
      advertisedVehicles += vehicles[i] + 's, ';
    }
  }
  return advertisedVehicles;
}

console.log(vehicles);
vehicles.push('car');
console.log(newAdvertisement(advertisedVehicles, vehicles));
