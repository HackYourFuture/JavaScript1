// 'use strict';
/**
 * An object with methods for use with `new`
 */
function Person(name) {
    this.name = name || 'unknown';
}

Person.prototype.getName = function () {
    return this.name;
};

var someGuy =  new Person('Jim');
var anotherGuy = new Person('Hasan');
console.log('Hi, ' + someGuy.getName());
