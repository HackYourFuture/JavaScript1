
//7 Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let listOfVehicles = ["motorbike","caravan","bike"];

//8 How do you get the third element from that list?
console.log(listOfVehicles[2]);




/*9 Change the function vehicle to use the list of question 7.
 So that vehicle("green", 3, 1) prints "a green new bike".*/
function Vehicles(color,code,age){
if(code=listOfVehicles[2] && age<2){
    console.log("a " + color +  " new bike")
}
else {
    console.log("a " + color + "old bike")
};
}
Vehicles("green", 3, 1);


/*10 Use the list of vehicles to write an advertisement. 
So that it prints something like: 
"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". 
(Hint: use a for loop.)
Hint, the output should be correct English with all the punctuation in place 
(that's the challenge). So plurals for the vehicle types, commas followed by a single space, 
the word and to replace the final comma and closed off by a period. */

//11 What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

listOfVehicles = ["motorbike","caravan","bike","car"];

function advertisement(listOfVehicles){
    for(let i=0; i<listOfVehicles.length; i++){
        console.log();  
    }
} 
advertisement(listOfVehicles); // stucked 

    








