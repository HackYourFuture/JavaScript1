const userDetails = {
  username: 'aCoolName',
  age: 25,
  chosenColor: 'blue',
  email: 'aCool@email.com',
};

for (const prop in userDetails) {
  // console.log(userDetails[prop]);
  console.log('value for', prop, ':', userDetails[prop]);
}
