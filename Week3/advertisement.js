//10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.".
let vehicles = ['motorbike', 'caravan', 'bike', 'truck'];

let advertisedVehicles = '';

for (let i = 0; i < vehicles.length; i++) {
  if (i == vehicles.length - 1) {
    advertisedVehicles += 'and ' + vehicles[i] + 's.';
  } else {
    advertisedVehicles += vehicles[i] + 's, ';
  }
}
console.log(`Amazing HappyMan's Garage, we service ${advertisedVehicles}`);
