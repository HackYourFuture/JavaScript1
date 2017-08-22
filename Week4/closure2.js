'use strict';
/**
 * Closure returning an object
 */
function someoneNamed(name) {
    var obj =  {
        getName: function() {
            return name;
        },
        getNameUpper: function() {
            return name.toUpperCase();
        }
    };
    return obj;
}

var someOtherGuy = someoneNamed('Hasan');
var thisGuy = someoneNamed("jim");
console.log('Hey, ' + someOtherGuy.getName() + '... Are you there ' + someOtherGuy.getNameUpper() + '?');
