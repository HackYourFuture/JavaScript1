console.log(vehicles("yellow", 3, 3));

function vehicles(color, code, age) {
    let myVehicles = ["car", "motorbike", "caravan", "bike"];
    let selectedVehicle;
    let ageOfVehicle;
    let i;
    for (i = 0; i < 4; i++) {
        if (code == i) {
            selectedVehicle = myVehicles[i];
        }        
    }
    if (age > 1) {
        ageOfVehicle = " old ";
    } else {
        ageOfVehicle = " new ";
    }
    return "a " + color + ageOfVehicle + selectedVehicle; 
}
