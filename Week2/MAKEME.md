# Homework JavaScript1 Week 2

## Todo list

1. Practice the concepts
2. JavaScript exercises
3. Code along
4. PROJECT:

## 1. Practice the concepts

In this section you will be doing interactice exercises, that will allow you to practice with the concepts you've learned about this week!

-   [Codecademy: Arrays](https://www.codecademy.com/courses/introduction-to-javascript/lessons/arrays)
-   [FreeCodeCamp: Basic data structures](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures)

## 2. JavaScript exercises

> For all the following exercises create a new .js file. Try to find a proper name for each file or make a small comment about what it does inside for future reference

**String exercises!**

Consider the following string:

```js
let myString = 'hello,this,is,a,difficult,to,read,sentence';
```

1.1
1.1 Add the string to your file and log it.<br />
1.2 Log the length of `myString`.<br />
1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.<br />
1.4 Log `myString` to see if you succeeded.<br />

**Array exercises!**

Consider the following array:

```js
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
```

2.1 Add a statement that adds Mauro's favorite animal _'turtle'_ to the existing array.<br />
2.2 Log your new array!<br />
2.3 Now add Jim's favorite animal to the array, it's _'meerkat'_, but make sure it will be placed after _'blowfish'_ and before _'capricorn'_.<br />
2.4 Write a console.log statement that explains in words _you think_ the new value of the array is.<br />
2.5 Log your new array!<br />
2.6 Log the length of the array, add a message: _'The array has a length of: '_ (here you should show the length of the array).<br />
2.7 Jason does not like _'giraffe'_, delete this animal from the array.<br />
2.8 Again log your new array.<br />
2.9 Now if unlike Jim, you don't like _'meerkat'_ and you want to delete it from the array, but you don't know the position or the `index` of the item in the array, how can you find it?<br />
2.10 Log the index of _'meerkat'_. Add a message so it says: _'The item you are looking for is at index: '_ (here you should show the index of the item).<br />

1. Create a function that takes 3 arguments and returns the sum of the these arguments.

2. Create a function named `colorCar` that receives a color, and prints out, _'a red car'_ for example.

3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

4. Create a function named `vehicleType` that receives a color, and a code, 1 for car, 2 for motorbike. And prints _'a blue motorbike'_ for example when called as `vehicleType("blue", 2)`

5. Can you write the following without the `if` statement, but with just as a single line with `console.log(...);`?

    ```js
    if (3 === 3) {
    	console.log('yes');
    } else {
    	console.log('no');
    }
    ```

6. Create a function called `vehicle`, like before, but takes another parameter called `age`, so that `vehicle("blue", 1, 5)` prints _'a blue used car'_

7. Make a list of vehicles, you can add `"motorbike"`, `"caravan"`, `"bike"`, or more.

8. How do you get the third element from that list?

9. Change the function `vehicle` to use the list of question 7. So that `vehicle("green", 3, 1)` prints "a green new bike".

10. Use the list of vehicles to write an advertisement. So that it prints something like: `"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."`. (Hint: use a `for` loop.)

    > Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

12. Create an empty object.

13. Create an object that contains the teachers that you have had so far for the different modules.

14. Add a property to the object you just created that contains the languages that they have taught you.

15. Write some code to test two arrays for equality using `==` and `===`. Test the following:

    ```js
    let x = [1, 2, 3];
    let y = [1, 2, 3];
    let z = y;
    ```

    What do you think will happen with `x == y`, `x === y` and `z == y` and `z == x`? Prove it!

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

## 3. Code along

In the following project you'll be flexing your HTML/CSS skills again, together with writing JavaScript code.

In the first part you'll be building the basic frontend, which means the way the page is going to look using only HTML/CSS. In the second part you'll be writing the logic that will allow a user to convert the temperature from one temperature scale to another (i.e. Celsius to Fahrenheit)

While watching the videos and coding along, focus on the following:

-   Why does the developer

-   [Temperature Converter Pt. I](https://www.youtube.com/watch?v=EHclqGV_KME)
-   [Temperature Converter Pt. II](https://www.youtube.com/watch?v=8mRGfLL1nzE)

### 4. PROJECT:

> Every week ends with a project you have to build on your own. Instead of getting clear-cut instructions, you'll get a list of criteria that your project needs to measure up to.

## SUBMIT YOUR HOMEWORK!

After you've finished your todo list it's time to show us what you got! The homework that needs to be submitted is the following:

1. JavaScript exercises
2. PROJECT:

Upload both to your forked JavaScript1 repository in GitHub. Make a pull request to the original repository.

> Forgotten how to upload your homework? Go through the [guide](../hand-in-homework-guide.md) to learn how to do this again.

_Deadline Saturday 23.59 CET_
