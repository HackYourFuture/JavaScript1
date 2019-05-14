/*
Use the list of vehicles to write an advertisement.
 So that it prints something like:
"Amazing Joe's Garage, we service cars,
motorbikes, caravans and bikes.". 
(Hint: use a for loop.)
*/
function advertisement(){
    // let vehicles = [' motorbike' , ' caravan', ' bike', ' car'];
    // variable 'vehicles' is can be read from  moreJs-7and8.js
    // but i used it again inside of function to show you,
    // and in case you can run in a html seperately.
    let products = [];
    for(i=0; i<vehicles.length; i++){
        products.push(' ' + vehicles[i]+'s');
    }
    let lastTwoProduct = products[products.length - 2] + ' and' + products[products.length - 1] ;
    console.log(lastTwoProduct);
    products.splice((products.length - 2), 2,);

    console.log('Amazing Abdullah\'s Garage, we sell ' + products.join() + ',' + lastTwoProduct +'.');
    

}
advertisement();

