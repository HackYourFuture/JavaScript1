'use strict';
const items = [
	'cars',
	30,
	true,
	{
		theCreator: 'BMW',
		manuFacturingYear: 2010
	}
];

const colors = [ 'yellow', 'green', 'red', 'pink', 'black', 'white', 'gray' ];

console.log(items.length);

console.log(colors.length);

if (items.length == colors.length) {
	console.log('same!');
} else {
	console.log('Two different sizes');
}
