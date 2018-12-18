console.log(vehicleType("black", 1, 0));

function vehicleType(color, code, age) {
    //let a = color;
    //let b = code;
    if (code == 1) {        
        vehicle = "car";
    } else if (code == 2) {
        vehicle = "motorbike";
    } else {
        return "Select 1 or 2";
    }

    if (age == 0) {
        status = "new";
    } else {
        status = "used";
    }

    return "a " + color + " " + status + " car";

}
