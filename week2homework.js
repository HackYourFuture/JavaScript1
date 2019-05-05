//1
let EnglishGreeting = "Hello world!";
console.log (EnglishGreeting)
let ArabicGreeting = "مرحباً بالعالم";
console.log (ArabicGreeting)
let ItalianGreeting = "Ciao Mondo!";
console.log (ItalianGreeting)
let TurkishGreeting = "Selam Dünya!";
console.log (TurkishGreeting)
let DutchGreeting = "Hallo Wereld!";
console.log (DutchGreeting)

//2
console.log ('I\'m awesome');

//3
let x ;
console.log ("the value of my variable x will be:EvenNumber");
console.log (x);
x = 8 ;
console.log ("the value of my variable x will be:EvenNumber");
console.log (x)

//4
let y = "HackYourFuture"
console.log ("the value of the string is "+"HackYourFuture")
console.log (y)
y = "HYF"
console.log ("the value of the string is "+"HYF")
console.log (y)

//5
let z = 7.25;
console.log(z);
let a = (Math.round(z));
console.log(a);

let highest;
if (z>a){
    highest=z;
}
else{
    highest=a;
}
console.log(highest);


//6
let FavoriteAnimals = [ ];   //6.1
console.log("the value of my array is : Empty."); //6.2
console.log(FavoriteAnimals); //6.3
let MyFavoriteAnimals = [ 'Deer' , 'Horse' , 'Koala' ]; //6.4
console.log (MyFavoriteAnimals);  //6.5
let NewMyFavoriteAnimals = MyFavoriteAnimals.concat(['baby pig']); //6.6
console.log (NewMyFavoriteAnimals); //6.7

//7
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//8
let type1 = 21 ;
console.log ("The value of my variable type1 is: " + type1);
console.log (typeof(type1));
let type2 = ['HTML', 'CSS'] ;
console.log ("The value of my variable type2 is: " + type2);
console.log (typeof(type2));
let type3 = " Hello JavaScript " ;
console.log ("The value of my variable type3 is: " + type3);
console.log (typeof(type3));
let type4 = "Class21" ;
console.log ("The value of my variable type4 is: " + type4);
console.log (typeof(type4));

//8.5
if (typeof(type1)===typeof(type2))
{console.log('type1 and type2 are SameType');}
else {console.log('type1 and type2 are NOT SameType');}

if (typeof(type1)===typeof(type3))
{console.log('type1 and type3 are SameType');}
else {console.log('type1 and type3 are NOT SameType');}

if (typeof(type1)===typeof(type4))
{console.log('type1 and type4 are SameType');}
else {console.log('type1 and type4 are NOT SameType');}
 
if (typeof(type2)===typeof(type3))
{console.log('type2 and type3 are SameType');}
else {console.log('type2 and type3 are NOT SameType');}
 
if (typeof(type2)===typeof(type4))
{console.log('type2 and type4 are SameType');}
else {console.log('type2 and type4 are NOT SameType');}

if (typeof(type3)===typeof(type4))
{console.log('type3 and type4 are SameType');}
else {console.log('type3 and type4 are NOT SameType');}





//9
let X = 7 ;
X = X % 3;
console.log(X = X % 3);
console.log(X %= 3);
console.log(X);

//10.1
let multipleTypesArray = ['class', 21 , true];
console.log(typeof(multipleTypesArray[0]));
console.log(typeof(multipleTypesArray[1]));
console.log(typeof(multipleTypesArray[2]));

//10.2
let x1 = 6/0;
let y1 = 10/0;
x1 === y1? console.log('Yes') : console.log('No');
