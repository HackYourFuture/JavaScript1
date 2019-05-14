function colorCar(color) {
    if(typeof(color) !== "string") {
        console.log(color + " is not a string!");
    } else {
        console.log("a " + color +" car");
    }
}

colorCar(2);
colorCar("red");
console.log("\n\n");