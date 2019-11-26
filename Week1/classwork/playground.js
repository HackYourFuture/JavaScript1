const myTown = 'Hoorn';
const myHomeTown = 'Damascus';

console.log('I live in: ', myTown, 'And Iam from', myHomeTown);

let name = 'anyname';
let age = 36;
let ready = true;
let work;
console.log(typeof name, typeof age, typeof ready, typeof work);

const food = ['Chocolate', 'pasta', 'pizza', 'stroopwafel', 'falafel', 'homus'];
console.log(typeof food);

const city = {
  name: 'Hoorn',
  province: 'Noord-Holland',
  population: 9607678,
  capital: false,
};
console.log(typeof city.population);

const myArry = ['my string', 33, true, ,];
//loop is best thing ever :)
for (let i = 0; i < myArry.length; i++) {
  console.log(typeof myArry[i]);
}
// typeof myArry[1],
// typeof myArry[2],
// typeof myArry[3],
// typeof myArry[4],
