## Homework Week 3

```
Topics discussed in class this week:
• Git work flow
• Advanced data types [Objects]
• Conditions
• Statements vs Expressions
• Loops (for/while)
• Functions
```

>[Here](/Week2/README.md) you find the readings you have to complete before the third lecture.

## Step 0: Feedback

_Deadline Monday_

Provide feedback to the homework of last week to one of your fellow students. You will be assigned to one of the assignments by the class lead of this week.

## Step 1: Recap/Read

- Have a look at [The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)

- Review the topics of last week:
    - [Variables](../fundamentals/variables.md)
    - [Values](../fundamentals/values.md)
    - [Operators](../fundamentals/operators.md)
    - [Naming conventions](../fundamentals/naming_conventions.md)

- Go through the topics of this week:
    - Git work flow
    - [Advanced data types (Objects)](../fundamentals/objects.md)
    - Conditions
    - [Statements vs Expressions](../fundamentals/statements_expressions.md)
    - Loops (for/while)
    - [Functions](../fundamentals/functions.md)
    - Scope
    
## Step 2: Watch

1. If you haven't done already, watch: [What is programming](https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro)  
Just watch the 2 min video, you do not have to do the entire JavaScript course (It could be useful later on though).

2. Please watch the following parts of the course, [Programming Foundations Fundamentals](https://www.lynda.com/Programming-Foundations-tutorials/Welcome/83603/90426-4.html) on Lynda.com (if you don't have access to Lynda yet ask Gijs):  
    <br>**4. Writing Conditional Code**
    <br>**5. Modular Code**
    <br>**6. Iteration: Writing Loops**
    <br>**7. More About Strings**
    <br>**8. Collections**
    <br>**11. When Things Go Wrong** 

## Step 3: Rover the Robot 

Go and try out this cool game: [roverjs.com](http://roverjs.com), written by one of our HYF teachers, Joost Lubach. There are different levels, see how far you can get! 

## Step 4: String and Array challenges

_Deadline Wednesday_ 

> For all the following exercises create a new .js file. Try to find a proper name for each file or make a small comment about what it does inside for future reference

*IMPORTANT NOTE*
In each assignment write at least two `console.log` statements to verify if your code works correctly. In other words proof that you code works as expected. If you need inspiration look at the steps defined in the assignments from last week.

1\. **Strings!**  
1\.1 Let's consider the following string: `let myString = "hello,this,is,a,difficult,to,read,sentence"`   
1\.2 Add the string to your file and console.log it.   
1\.4 Console.log the length of `myString`.   
1\.5 The commas make that the sentence is quite hard to read. Find a way to remove the comma's from the sting and replace them with a spaces  
1\.6 Console.log `myString` to see if you succeeded.  

2\. **Arrays!**  

Consider the following array:

```js
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
```

2\.1 Add a statement that adds Mauro's favorite animal ('turtle') to the existing array   
2\.2 Log your new array!   
2\.3 Now add Jim's favorite animal to the array, its a 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.   
2\.4 Write a console.log statement that explains in words _you think_ the new value of the array is.   
2\.5 Log your new new array!   
2\.6 Log the length of the array, add a message: "The array has a length of: "(here you should show the length of the array)   
2\.7 Jason does not like giraffes, delete this animal from the array   
2\.8 Again log your new array.   
2\.9 Now if unlike Jim, you don't like meerkats and you want to delete it from the array, but you don't know the position or the `index` of the item in the array, how can you find it?   
2\.10 Log the index of meerkat to the console. Add a message so it says: "The item you are looking for is at index: " (here you should show the index of the item)

## More JavaScript :tada:

1. Create a function that takes 3 arguments and returns the sum of the three arguments.

2. Create a function named `colorCar` that receives a color, and prints out, "a red car" for example.

3. Create an object and a function that takes the object as a parameter and prints out all of its names and values.

4. Create a function named `vehicleType` that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as `vehicleType("blue", 2)`

5. Can you write the following without the `if` statement, but with just as a single line with `console.log(...);`?

    ```js
    if (3 === 3) {
        console.log("true")
    } else {
        console.log("false")
    }
    ```

6. Create a function called `vehicle`, like before, but takes another parameter called age, so that `vehicle("blue", 1, 5)` prints "a blue used car"

7. Make a list of vehicles, you can add `"motorbike"`, `"caravan"`, `"bike"`, or more.

8. How do you get the third element from that list?

9. Change the function `vehicle` to use the list of question 7. So that `vehicle("green", 3, 1)` prints "a green new caravan".

10. Use the list of vehicles to write an advertisement. So that it prints something like: `"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."`. (Hint: use a `for` loop.)

    > Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

12. Create an empty object.

13. Create an object that contains the teachers that you have had so far for the different modules.

14. Add a property to the object you just created that contains the languages that they have taught you.

15. Write some code to test two arrays for equality using `==` and `===`. Test the following:
    
    ```js
        let x = [1,2,3];
        let y = [1,2,3];
        let z = y;
    ```

    What do you think will happen with `x == y`, `x === y` and `z == y` and `z == x`? Prove it!
        
    > Don't cheat! Seriously - try it first.
        

    Check out this [Fiddle](http://jsfiddle.net/jimschubert/85M4z/). You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.

    More insights from this [Stack Overflow question](http://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript).


16. Take a look at the following code: 

    ```js
         let o1 = { foo: 'bar' };
         let o2 = { foo: 'bar' };
         let o3 = o2;

    ```

    Show that changing `o2` changes `o3` (or not) and changing `o1` changes `o3`(or not). 
        
    Does the order that you assign (`o3 = o2` or `o2 = o3`) matter?

17. What does the following code return? (And why?)

    ```js
    let bar = 42; 
    typeof typeof bar;
    ```

 
> ‘Coerce' means to try to change - so coercing `var x = '6'` to number means trying to change the type to number temporarily. 

## Step 7: **Finish basic freeCodeCamp challenges:**

_Deadline Saturday_

Go back to FreeCodeCamp, start where you left of and finish the rest of the Basic JavaScript challenges.

Please make sure you REALLY understand the exercises below:
- https://www.freecodecamp.com/challenges/multiply-two-decimals-with-javascript
- https://www.freecodecamp.com/challenges/store-multiple-values-in-one-variable-using-javascript-arrays
- https://www.freecodecamp.com/challenges/build-javascript-objects
- https://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object
- https://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object

## Step 8: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week2/README.md) to prepare for your next class

```
How to hand in your homework:
• Upload your homework in your "hyf-javascript1" Github repository. Make sure to create a new folder "week2" first. 
• Upload your homework files inside the week2 folder and write a description for this “commit”.
• Your hyf-javascript1/week2 should now contain all your homework files.
• Place the link to your repository folder in Trello.
```
