var result = vehicleType("red", 2);
console.log(result);

function vehicleType(color, code) {
    //let a = color;
    //let b = code;
    if (code == 1) {        
        return "a " + color + " car";
    } else if (code == 2) {
        return "a " + color + " motorbike";
    } else {
        return "Select 1 or 2";
    }

}
