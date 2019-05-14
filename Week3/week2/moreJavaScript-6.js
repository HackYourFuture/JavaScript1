function vehicle(color, code, age) {
    if( (typeof(color) !== "string") || (typeof(code) !== "number") || (typeof(age) !== "number") || (age < 0)) {
        console.log("the least one of three parameters is invalid!");
    } else {
        switch(code) {
            case 1:
            console.log("a " + color + " used car");
            break;
            case 2:
            console.log("a " + color + " used motorbike");
            break;
            default:
            console.log("invalid code!");
            break;
        }
    }
}

vehicle("yellow", 2, -3);
vehicle("blue", 1, 5);
console.log("\n\n");