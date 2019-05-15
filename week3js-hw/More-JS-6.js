
/*6 Create a function called vehicle, like before,
 but takes another parameter called age, 
 so that vehicle("blue", 1, 5) prints 'a blue used car'*/
function vehicle(color,code,age){
    if (code==1 && age<2){
        console.log("a " + color + " new car")
    }
    else if (code==1 && age>2) {
        console.log("a " + color + " used car")
    }}
    vehicle("blue", 1, 5);
