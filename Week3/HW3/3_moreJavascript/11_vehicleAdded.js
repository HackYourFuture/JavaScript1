// Yes
let vehicle = ["tram","metro", "motorbike", "caravan", "bike"];

vehicle.push("plane");

function advert(arr) { 
    txt = "Amazing Joe's Garage, we service "; 
    for ( i = 0 ; i < arr.length -2; i++) {
        txt += arr[i]+"s, " 
    }; 
    return txt += arr[arr.length -2 ]+"s" + " and " + arr[arr.length -1]+"s"; 
}

advert(vehicle);
// prints: "Amazing Joe's Garage, we service trams, 
// metros, motorbikes, caravans, bikes and planes"