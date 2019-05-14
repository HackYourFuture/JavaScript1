function vehicleType(color, code) {
    if(typeof(color) !== "string" || typeof(code) !== "number") {
        console.log("the least one of two parameters is invalid!");
    } else {
        switch(code) {
            case 1:
            console.log("a " + color + " car");
            break;
            case 2:
            console.log("a " + color + " motorbike");
            break;
            default:
            console.log("invalid code!");
            break;
        }
    }
}

vehicleType(true, 2);
vehicleType(1, "black");
vehicleType("white", 3);
vehicleType("red", 1);
vehicleType("blue", 2);
console.log("\n\n");