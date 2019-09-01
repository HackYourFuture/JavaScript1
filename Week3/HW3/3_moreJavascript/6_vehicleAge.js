function vehicleType(color,code, age) {
    if (code ===1) {
        type = "car"
    } else if 
    (code === 2) {
        type="motorbike"
    } else {
        type = "invalid value"
    }; 
    ( age > 1) ? condition = "used" : condition = "new" ;
    console.log("a" + " " + color +" " + condition + " "+ type)
};

vehicleType("blue", 1, 2);
// prints: a blue used car