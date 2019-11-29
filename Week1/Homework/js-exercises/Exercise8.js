'use strict';
let myName = 'mahmoud';
let myLastName = 'badran';
let FavoriteCars = [ 'BMW', 'Bugatti', 'Lamborghini' ];
let FavoriteCities = [ 'Amsterdam', 'Damascus' ];
if (typeof myName == typeof myLastName) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}
if (typeof myName == typeof FavoriteCars) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}

if (typeof myName == typeof FavoriteCities) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}

if (typeof FavoriteCars == typeof FavoriteCities) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}

if (typeof FavoriteCars == typeof myLastName) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}

if (typeof FavoriteCities == typeof myLastName) {
	console.log('SAME TYPE');
} else {
	console.log('Not the same');
}
