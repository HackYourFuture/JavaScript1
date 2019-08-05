// 8.1

let myFavoriteAnimals = ['lions', 'horses', 'eagles'];
const myFavoriteTennisPlayer = 'Nadal';
let myAge = 30;
var answer = false;

// 8.2

console.log('the value of my variable myFavoriteAnimals is:' + myFavoriteAnimals);
console.log('the value of my variable myFavoriteTennisPlayer  is:' + myFavoriteTennisPlayer);
console.log('the value of my variable myAge is:' + myAge);
console.log('the value of my variable answer is:' + answer);

// 8.3

console.log(" I think the type of my variable 'myFavoriteAnimals' is: 'object' ");
console.log(" I think the type of my variable 'myFavoriteTennisPlayer'  is: 'string' ");
console.log(" I think the type of my variable 'myAge' is: 'number' ");
console.log(" I think the type of my variable 'answer' is: 'boolean' ");

// 8.4

console.log(typeof myFavoriteAnimals);

console.log(typeof myFavoriteTennisPlayer);

console.log(typeof myAge);

console.log(typeof answer);

// // 8.5  Now compare the types of your different variables with one another.
// object ; String; Number; Boolean;

// 8.6

if (typeof myFavoriteAnimals == typeof myFavoriteTennisPlayer) {
  console.log('Same Type');
} else typeof myFavoriteAnimals != typeof myFavoriteTennisPlayer;
{
  console.log('Different Type');
}

if (typeof myFavoriteAnimals == typeof myAge) {
  console.log('Same Type');
} else typeof myFavoriteAnimals != typeof myAge;
{
  console.log('Different Type');
}

if (typeof myFavoriteAnimals == typeof answer) {
  console.log('Same Type');
} else typeof myFavoriteAnimals != typeof answer;
{
  console.log('Different Type');
}

if (typeof myFavoriteTennisPlayer == typeof myAge) {
  console.log('Same Type');
} else typeof myFavoriteTennisPlayer != typeof myAge;
{
  console.log('Different Type');
}

if (typeof myFavoriteTennisPlayer == typeof myAge) {
  console.log('Same Type');
} else typeof myFavoriteTennisPlayer != typeof myAge;
{
  console.log('Different Type');
}

if (typeof myAge == typeof answer) {
  console.log('Same Type');
} else typeof myAge != typeof answer;
{
  console.log('Different Type');
}
