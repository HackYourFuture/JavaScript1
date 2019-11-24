const cities = ["paris", "london", "madrid", "amsterdam"];
const names = ["john", "wouter", "unmesh", "martin", "noer", "ahmet", "yasin"];
console.log(`cities variable have ${cities.length} elements..`);
console.log(`names variable have ${names.length} elements..`);

if (cities.length === names.length) {
  console.log("They are the same..");
} else {
  console.log("Two different sizes..");
}
