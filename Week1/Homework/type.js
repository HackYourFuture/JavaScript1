let bird = 'canary';
let dog = 'pug';
let zoo = { name: 'elephant', age: '15' };
let pet = { name: 'cat', color: 'grey', length: '40cm' };
console.log(typeof bird, typeof dog, typeof zoo, typeof pet);

if (typeof bird === typeof dog) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same....');
}

if (typeof zoo === typeof pet) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same....');
}

if (typeof bird !== typeof zoo) {
  console.log('Not the same....');
} else {
  console.log('SAME TYPE');
}

if (typeof bird !== typeof pet) {
  console.log('Not the same....');
} else {
  console.log('SAME TYPE');
}

if (typeof dog !== typeof zoo) {
  console.log('Not the same....');
} else {
  console.log('SAME TYPE');
}
if (typeof dog !== typeof pet) {
  console.log('Not the same....');
} else {
  console.log('SAME TYPE');
}
