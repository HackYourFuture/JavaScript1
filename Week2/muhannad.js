<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>homework2</title>
  </head>
  <body>
    <script>
      // say hello world in 3 language
      console.log('Hello World'); //English
      console.log('Hola Mundo'); //Spanish
      console.log('Bonjour le monde'); //French

      //SyntaxError: Find a solution for this error.
      console.log("I'm awesome");

      //1 First, declare your variable x (do not initialize it yet).
      let x;
      //3.2 Add a console.log statement that explains in words what you think the value of x is, like in this example:
      console.log(
        `the value of my variable x will be undefined because it dose not have any value yet`,
      );
      //3.3 Add a console.log statement that logs the value of x.
      console.log(x);
      //3.4 Now initialize your variable x with an integer.
      x = 11;
      //3.5 Next, add a console.log statement that explains what you think the value of x is.
      console.log('the value of x will be 11');
      //3.6 Add a console.log statement that logs the value of x.
      console.log(x);
      //4. Declare a variable y and assign a string to it.
      let y = 'hello javascript';
      //4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
      console.log('the value of x will be: hello javascript');
      //4.2 Now console.log the variable y.
      console.log(y);
      //4.3 Now assign a new string to the variable y.
      y = 'i am studying javascript';
      //4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
      console.log('the value of x will be: i am studying javascript');
      //Now console.log y again.
      console.log(y);
      //How do you round the number 7.25, to the nearest integer (i.e., whole number)?
      //5.1 Declare a variable z and assign the number 7.25 to it.
      let z = 7.25;
      //5.2 console.log z.
      console.log(z);
      //5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
      let a = z;
      //5.4 console.log a.
      console.log(Math.round(a));
      //5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
      //i think there are many way's to compare between 2 'built-in functions' or more value's. this is in a different way one of them.
      //5.6 console.log the highest value.
      if (a > z) {
        console.log('bigger than b', a);
      } else {
        console.log('z is bigger than a', z);
      }
      ///////////Arrays/////////////
      //6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions).
      let arr1 = [, , ,];
      //6.2 Write a console.log statement that explains in words what you think the value of the array is.
      console.log('the value of arr1 will be undefined or empty');
      //6.3 console.log your array.
      console.log(arr1);
      //6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
      let favoriteAnimals = ['rabbit', 'cow', 'dog', 'cat'];
      //6.5 Log your array.
      console.log(favoriteAnimals);
      //6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
      favoriteAnimals.push('baby pig');
      //6.7 Log your new array!
      console.log(favoriteAnimals);
      //7. More strings
      //Let's consider the following string: let myString = "this is a test".
      //7.1 Add the string to your file and console.log it.
      let myString = 'this is a test';
      console.log(myString);
      //7.2 Find a way to get the length of myString.
      //7.3 console.log the length of myString.
      console.log(myString.length);
      ///////////////////////
      //8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
      //8.1 First declare at least four variables and assign them different data types.
      let v1 = 'text1';
      let v2 = 'text2';
      let v3 = 25;
      let v4 = false;
      //8.2 For each variable write a console.log statement that logs the value
      console.log(v1, v2, v3, v4);
      //8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
      console.log('v1:string , v2:string , v3:number , v4:boolean');
      //8.4 Now use typeof to log the actual type of your variables.
      let checkV1 = typeof v1;
      let checkV2 = typeof v2;
      let checkV3 = typeof v3;
      let checkV4 = typeof v4;
      console.log(checkV1, checkV2, checkV3, checkV4);
      //8.5 Now compare the types of your different variables with one another.
      if (checkV1 === checkV2) {
        console.log('SAME THE TYPE');
      } else {
        console.log('NOT THE SAME TYPE');
      }
      //8.6 Make sure to also show a message when the variables you are comparing are not the same type.
      if (checkV3 === checkV4) {
        console.log('SAME THE TYPE');
      } else {
        console.log('NOT THE SAME TYPE');
      }
      //9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
      //9.1 Add at least 3 console.log statements in which you show that you understand what % does.
      let result = x % 3;
      console.log(result);
      console.log(34 % 10); //    ==>   it give 4
      console.log(5 % 2); //    ==>   it give 1
      console.log(15 % 4); //    ==>   it give 3
      //10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
      var information = [
        'javascript',
        15,
        true,
        (arr2 = ['firstIndex', 'secondIndex', 'thirdIndex']),
        x,
        'jquery',
      ];
      //show latest Array:information
      for (let i = 0; i < information.length; i++) {
        console.log(information[i]);
      }
      //10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
      //10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
      let number1 = 6 / 0,
        number2 = 10 / 0;
      console.log(number1, number2);
      console.log(number1.typeOf, number2.typeOf); //can not divide never by 0 because it give infinity

      /*let var1 = 10,
        var2 = true,
        var3 = 'any text',
        var4 = { key1: 'value1' },
        var5 = 205,
        var6 = 'nice code';

      console.log(typeof var1, typeof var2, typeof var3, typeof var4, typeof var5, typeof var6);
      console.log(
        'var1:' + var1,
        'var2:' + var2,
        'var3:' + var3,
        'var4:' + var4,
        'var5:' + var5,
        'var6:' + var6,
      );*/
    </script>
  </body>
</html>
