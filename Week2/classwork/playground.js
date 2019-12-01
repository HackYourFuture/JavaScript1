let s = 'Hello'.toLowerCase(); //stet//ex why why why????!!!!!!!!!!!!😱
let l = s.length; //stet

function sum(a, b) {
  //stet
  return a + b; //ex
}
let max = function(a, b) {
  //stet
  return a > b ? a : b; //ex & stet
};
let s1 = sum(4, 5); //stet
let s2 = 4 + 5; //ex

if (s2 == s1) {
  //ex
  console.log('same'); //stst
} else {
  console.log('not same'); //stet
}
console.log(!'0');
let num = !0;
num;

////start
let shoes = 'green';
let shirt = 'green';
let pants = 'green';

if (shoes === shirt && shirt === pants) {
  console.log('they are same');
} else {
  console.log('diffrent colors');
}

pants = !'green';

if (shoes === shirt || shirt !== pants) {
  console.log('they are same');
} else {
  console.log('diffrent colors');
}

if (pants !== 'green') {
  console.log('they are same');
} else {
  console.log('diffrent colors');
}

let names = ['Dado', 'Toto', 'Lala', 'Pooooo'];

for (let name of names) {
  //loop array
  console.log(name);
}
for (let name1 in names) {
  //only for object
  //loop object and array
  console.log(names[name1]);
}
//switch
const month = 'January';
let season = '';
switch (month) {
  case 'December':
  case 'January':
  case 'February':
    season = 'winter';
    break;
  case 'March':
  case 'April':
  case 'May':
    season = 'Spring';
    break;
  case 'June':
  case 'July':
  case 'Augast':
    season = 'Summer';
    break;
  case 'septemper':
  case 'October':
  case 'Novermber':
    season = 'Automn';
    break;
  default:
    season = `unkowen month ${month}`;
    break;
}

console.log(season);

//
const outFit = {
  bottomLayer: 'pants',
  topLayer: ['sweater', 'shirt'],
};
