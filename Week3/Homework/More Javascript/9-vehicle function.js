let vehicleList = ["motorbike", "caravan", "bike"];

function vehicle(color, year, type) {
  var type = vehicleList[type - 1];

  if (year > 0) {
    var year = "used";
  } else if (year === 0) {
    var year = "new";
  }
  console.log("a " + color + " " + year + " " + type);
}

vehicle("blue", 0, 3);