function vehicleNew(color, code, age) {
    let ageType = (age === 1) ? " new " : " used "; 
    if( (typeof(color) !== "string") || (typeof(code) !== "number") || (typeof(age) !== "number") || (age < 0)) {
        console.log("the least one of three parameters is invalid!");
    } else {
        switch(code) {
            case 1:
            console.log("a " + color + ageType + vehicles[0]);
            break;
            case 2:
            console.log("a " + color + ageType + vehicles[1]);
            break;
            case 3:
            console.log("a " + color + ageType + vehicles[2]);
            break;
            case 4:
            console.log("a " + color + ageType + vehicles[3]);
            break;
            case 5:
            console.log("a " + color + ageType + vehicles[4]);
            break;
            default:
            console.log("invalid code!");
            break;
        }
    }
}

vehicleNew("green", 3, 1);
vehicleNew("white", 2, 2);
console.log("\n\n");