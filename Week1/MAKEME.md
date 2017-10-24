## Homework week 1:

>[Here](https://github.com/HackYourFuture/JavaScript/tree/master/Week1/README.md) you find the readings you have to complete before the second lecture.

We covered a bit of command line usage in the first class and got a program running which is great. If you need a refresher for the command line please have a look here: https://github.com/HackYourFuture/CommandLine

## Before you start with the homework:

1. Watch: [What is programming](https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro) Just watch the 2 min video, you do not have to do the entire JavaScript course (It could be useful later on though). 
2. Please watch the following parts of the course, [Programming Foundations Fundamentals](https://www.lynda.com/Programming-Foundations-tutorials/Welcome/83603/90426-4.html) on Lynda.com (if you don't have access to Lynda yet ask Gijs):
    0. Introduction
    1. Programming Basics
    2. Core Programming Syntax 
    3. Variables and Data Types

## Step 1: Command Line

1. Create a `.js` file that prints `Hello` when you run it from the command line. (Hint: `node` is the program that can run your JavaScript files.)

```
Write commands to do following:
1. create a directory. Enter a directory. Create an empty file named blank. 
    2. Then write the content `"Hello"` five times to the file greetings.txt. 
   Then copy the file greetings.txt and paste its contents into 1.txt, 2.txt, 3.txt, 4.txt and 5.txt.
    3. Then write the text "cat" to pets.txt
   Then append the text "dog" to pets.txt
   Then append the text "hamster" to pets.txt
    4. Then write the text "cat" to commands.txt
   Then append the text "ls" to commands.txt
   Then append the text "pwd" to commands.txt
    5. Then find unique strings from these two files pets.txt and commands.txt
   and store the unique strings in lovelyCommands.txt
```


## Step 2: JavaScript

> For all the following exercises create a new .js file. Try to find a proper name for each file or make a small comment about what it does inside for future reference. 

1. Declare a variable `x` and initialize it with an integer.
  1.1 First, _declare_ your variable `x`.
  1.2 Add a console.log statement that explains what _you think_the value of `x` is, like in this example:
  ```js
  // TODO -> here you initialize your variable
  console.log('the value of my variable x will be: whateverYouThinkItWillLog')
  ```
  1.3 Add a console.log statement that logs the value of `x`
  1.4 Now _initialize_ your variable `x` with an integer
  1.5 Now add a console.log statement that explains what _you think_ the value of `x` is.
  1.6 Add a console.log statement that logs the value of `x`.
  Steps to be taken:
  
  ```js
  // TODO -> here you declare your variable
  console.log('the value of x will be: whateverYouThinkItWillLog')
  // TODO -> log the actual value of x
  // TODO -> here you initialize your variable
  console.log('the value of x will be: whateverYouThinkItWillLog')
  // TODO -> log value of x again
  ```

2. Declare a variable `y` and assign a string to it.
  2.1 Write a console.log statement in which explain what you think the value of the string is
  2.2 Now console.log the variable `y`.
  2.3 Now assign a new string to the variable `y`
  2.4 Just like you did before write a console.log statement that explains what you think will be logged to the console.
  2.5 Now console.log `y` again.
  ```js
  // TODO -> here you declare AND assign your string
  console.log('the value of my string will be: whateverYouThinkItWillLog')
  // TODO -> log the actual value of the string to the console
  // TODO -> assign a new value to your variable x
  console.log('the value of my string will be: whateverYouThinkItWillLog')
  // TODO -> log the actual value of the string to the console
  ```

3. How do you round the number 7.25, to the nearest integer?
  3.1 Declare a variable `z` and assign the number 7.25 to it.
  3.2 Console.log `z`.
  3.3 Now round `z` to the nearest integer.
  3.4 Console.log `z` again.

4. Arrays!
  4.1 Declare an empty array (you can decide on how to call it yourself).
  4.2 Write a console.log statement in which explain what you think the value of the array is.
  4.3 Console.log your array.
  4.4 Create an array that has your favorite animals inside
  4.5 Log your array
  4.6 Ads Daan's favorite animal (baby pig) to the existing array
  4.7 Log your new array!
  4.8 Now add Gijs's favorite animal to the array (moose), but make sure it will be placed after the first animal that you have placed in your array.
  4.9 Write a console.log statement in which explain what _you think_ the new value of the array is.
  4.10 Log your new new array!
  4.11 Log the length of the array, add a message: "The array has a length of: "(here you should show the length of the array)
  4.12 Eyad does not like giraffes, delete this animal from the array
  4.13 Again log your new array.
  4.14 Now if unlike Gijs, you don't like mooses and you want to delete it from the array, but you don't know the position or the `index` of the item in the array, how can you find it?
  4.15 Log the index of moose to the console. Add a message so it says: "The item you are looking for is at index: " (here you should show the index of the item)

5. More strings 
  5.1 Let's consider the following string: `let mystring = "this,is,a,test"`.
  5.2 Add the string to your file and console.log it.
  5.3 Find a way to get the length of `mystring`.
  5.4 Console.log the length of `mystring`.
  5.5 The comma's make that the sentence is quite hard to read. Find a way to remove the comma's from the sting and replace them with a spaces
  5.6 Console.log `mystring` to see if you succeeded. 


7. Write a program that checks the types of two variables and prints out `SAME TYPE` if they are the same type. 
  6.1 First declare at least four variables and assign them with different data types.
  6.2 For each variable write a console log statement that that logs the value 
  ```js 
  let foo = 3
  console.log('My the value of my variable foo is: ' + foo)
  ```
  6.3 Now write a console.log statement weiring you first explain what you think the _type_ of your variables is.
  6.4 Now use `typeof` to log the actual _type_ of your variables.
  6.5 Now compare the types of your different variables with one another.
  6.6 Make sure to also show a message when the variables you are comparing are not the same type.
  For example:    
    ```js
    let x = 9
    let y = 'Hello'

    if () {
      console.log('SAME TYPE')
    }
    // TODO -> add a way of giving feedback if your variables don't have the same type
    ```

8. If `x` equals 7, and the only other statement is `x = x % 3`, what would be the new value of `x`?
  6.1 Add at least 3 `console.log` statements in which you show that you understand what `%` does.

9. Write a program to answer the following questions:
  7.1 Can you store multiple types in an array? Numbers and strings?
  7.2 Can you compare inifities? (Not in Eyad's world) - does 6/0 == 10/0? How can you test this?
  7.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).

### Step 3: **Some freeCodeCamp challenges (10 hours):**

On freeCodeCamp.com please do the [Basic JavaScript](https://www.freecodecamp.com/challenges/learn-how-free-code-camp-works) exercises up and until the __"Shopping List"__ exercise (there are some topics we did not cover but you can do it).

### How to hand in Homework:
```
steps:
• Create a Github account
• Create a new repository (name it something like hyf-javascript1) make sure you select the option: initialize with README
• inside this repository create a folder "week1"
• Upload the files you created on your computer inside the week1 folder, write a description for this “commit”
• Open the file in your README to check if this all worked

• Create a new repository "hyf-javascript1". Also create a new folder "week1" inside this repository. 
• Upload your homework files inside the week1 folder and write a description for this “commit”.
• Your hyf-javascript1/week1 should now contain all your homework files.
• Place the link to your repository folder in Trello.
```

### Hint
If you solve the FreeCodeCamp challenges and they are new concepts to you and you would like to take a look at them later on in the program, Copy your answers from FCC in a .js file and upload them to Github in a repository for future reference. In this way you build your own little documentation, if you look back at them first try to understand what it does before you run them.

:star: Additional resources and review: [here](https://github.com/HackYourFuture/JavaScript/tree/master/Week1/REVIEW.md) (work in progress):star:

