//10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.".

let vehicles = ['motorbike', 'caravan', 'bike', 'truck'];

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

console.log(newAdvertisement(advertisedVehicles, vehicles));
