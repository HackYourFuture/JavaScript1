function advertisement(vehicles) {
    let text = "Amazing Joe's Garage, we service ";
    for(let index = 0; index < (vehicles.length - 2); index++) {
        text += (vehicles[index] + ", ");
    }
    console.log(text + vehicles[vehicles.length -2] + " and " + vehicles[vehicles.length -1] + ".");
}

advertisement(vehicles);
console.log("\n\n");