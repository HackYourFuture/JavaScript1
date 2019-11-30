'use strict';
let myName = 'mahmoud';
let myLastName = 'badran';
let favoriteCars = [ 'BMW', 'Bugatti', 'Lamborghini' ];
let favoriteCities = [ 'Amsterdam', 'Damascus' ];
if (typeof myName === typeof myLastName) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}
if (typeof myName === typeof favoriteCars) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}

if (typeof myName === typeof favoriteCities) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}

if (typeof favoriteCars === typeof favoriteCities) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}

if (typeof favoriteCars === typeof myLastName) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}

if (typeof favoriteCities === typeof myLastName) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}
