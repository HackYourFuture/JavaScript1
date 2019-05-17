// Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

// Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.


let ad = "Amazing Joe's Garage, we service ";
function advertisement (){
    for( i = 0 ; i < vehicles.length; i++){

      if (i == vehicles.length-1){
        ad += 's' + ' and ' + vehicles[i] + 's' + '.';
      }else if(i == vehicles.length-2){
         ad += vehicles[i];
      }
      else { ad += vehicles[i]+ 's' +  ', ' ;
      }
}console.log(ad)
}

// adding one vehicles to the list

vehicles.push('scooter');

advertisement();


