// let shoes = `green`;
// let shirt = `green`;
// let pants = `green`;

// if (shoes === `green` && shoes === `green` && pants === `green`){
// console.log('they are green');
// }

let myString = 'hello,this,is,a,difficult,to,read,sentence';

console.log(myString.length);


const month = 'juli';
let season = '';

switch(month){
    case ('january'):
        season = 'winter'
        break;

        case('april'):
        season = 'spring'
        break;


        case('juli'):
        season = 'summer'
        break;

        default:
            season ='unknown ${month}'
}
console.log(season);

