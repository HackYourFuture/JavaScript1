let shoes = 'black';
let shirt = 'white';
let pants = 'green';

if (shoes === 'green' && shirt === 'green' && pants === 'green') {
	console.log(true);
} else if (shoes || shirt || pants === 'green') {
	console.log(true);
} else if (pants === 'green') {
	console.log(true);
}

const month = 'May';
let season = '';

switch (month) {
	case 'jun':
	case 'February':
		season = 'Winter';
		break;
	case 'March':
	case 'April':
	case 'May':
		season = 'Spring';
		break;

		season = 'summer';
	case 'jun':
	case 'jully':
	case 'augest':
		season = 'Summer';
		break;
	default:
		season = 'Unkown';
}
console.log(season); //"winter"
