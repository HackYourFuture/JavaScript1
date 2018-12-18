const myVehicles = ["car", "motorbike", "caravan", "bike", "suv"];

function vehicles(arrays) { 
    // const myVehicles = ["car", "motorbike", "caravan", "bike"];
    const newMyVehicles = arrays.join("s, ");
    const head = newMyVehicles.split(",").slice(0, -1) ;
    const tail = arrays[arrays.length -1];
    // newMyVehicles.slice(0, -2);   
    console.log(head); 
    console.log(tail);
    // let i;
    // let advertisementService = "";
    // for (i = 0; i < myVehicles.length; i++) { 
    //     if (i == 3) {
    //         advertisementService += "and ";
    //     }  
    //     advertisementService += myVehicles[i] + "s, ";                
    // }
    console.log(`Amazing Bibi's Garage, we service ${head} and ${tail}s.`); 
}
vehicles(myVehicles);