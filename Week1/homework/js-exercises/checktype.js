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
function checktype(a, b, c, d){
    if (typeof a == typeof b) {
        console.log('SAME TYPE ' + typeof a);
    }
    else if (typeof a == typeof c) {
        console.log('SAME TYPE ' + typeof a);
    }
    else if (typeof a == typeof d) {
        console.log('SAMETYPE ' + typeof a);
    }
    else if (typeof b == typeof c) {
        console.log('SAME TYPE ' + typeof c);
    }
    else if (typeof b == typeof d) {
        console.log('SAME TYPE ' + typeof b);
    }
    else if (typeof c == typeof d) {
        console.log('SAME TYPE ' + typeof c);
    }
    else{
    console.log('Not the same ...')
    }
}
checktype(x, y, z, g);