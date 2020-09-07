'use strict';
// Exercise 8: Type checker
var x = 'love';
var y ='patience';
var z = {name: 'Lelida',
         age: 6
        } ;      
var g = {
    favoriteBook: 'Prid&Prejudice',
    favArtist: 'Beyonce'

};
function checktype(a, b){
if (typeof a == typeof b){
    console.log('SAME TYPE')
}
else{
    console.log('Not the same ...')
}
}
checktype(x, y);
checktype(x, z);
checktype(y, z);
checktype(y, g);
checktype(g, z);