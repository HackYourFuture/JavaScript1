function vehicleType(color, code) {
  let type = '';
  if (code === 1) {
    type = "car";
  } else if (code === 2) {
    type = "motorbike";
  } else {
    type = "invalid value";
  };
  console.log("a" + " " + color + " " + type)
};

vehicleType("blue", 1);
// prints: a blue car 