function vehicle(color, year, type) {
  if (type === 1) {
    var type = "car";
  } else if (type === 2) {
    var type = "motorbike";
  }
  if (year > 0) {
    var year = "used";
  } else if (year === 0) {
    var year = "new";
  }
  console.log("a " + color + " " + year + " " + type);
}

vehicle("blue", 0, 2);