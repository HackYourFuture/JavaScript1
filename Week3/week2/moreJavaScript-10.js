function advertisement(vehicles) {
    let text = "Amazing Joe's Garage, we service ";
    for(let index = 0; index < (vehicles.length - 2); index++) {
        text += (vehicles[index] + "s, ");
    }
    console.log(text + vehicles[vehicles.length -2] + "s and " + vehicles[vehicles.length -1] + "s.");
}

advertisement(vehicles);
console.log("\n\n");
