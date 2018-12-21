let vehicleList = ["car", "motorbike", "caravan", "bike"];

// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."

vehicleList.push("jeep");

function statement(vehicleList) {
  var vehicleList1 = vehicleList.slice(0, vehicleList.length - 1).join("s, ");
  var lastVehicle = vehicleList.slice(vehicleList.length - 1);

  console.log(`"Amazing Joe's Garage, we service ${vehicleList1}s and ${lastVehicle}s."`);

}
statement(vehicleList);