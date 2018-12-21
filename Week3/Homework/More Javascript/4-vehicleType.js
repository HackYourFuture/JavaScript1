function vehicleType(color, code) {
  if (code === 1) {
    var code = "car";
  } else if (code === 2) {
    var code = "motorbike";
  }
  console.log("a " + color + " " + code);
}

vehicleType("blue", 2);