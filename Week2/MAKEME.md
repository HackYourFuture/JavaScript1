## Homework Week 2

```
Topics discussed in class this week:
• Intro JavaScript (What is it, where can you use it for)
• Variables (var, let, const)
• Basic Data types (strings, numbers, arrays, booleans)
• Operators
```

>[Here](/Week1/README.md) you find the readings you have to complete before the second lecture.

## Before you start with the homework:

1. Review the [Git course material](https://github.com/HackYourFuture/Git) of last week.
2. Watch: [What is programming](https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro) Just watch the 2 min video, you do not have to do the entire JavaScript course (It could be useful later on though). 
3. Please watch the following parts of the course, [Programming Foundations Fundamentals](https://www.lynda.com/Programming-Foundations-tutorials/Welcome/83603/90426-4.html) on Lynda.com (if you don't have access to Lynda yet ask Gijs):    
    0\. Introduction    
    1\. Programming Basics    
    2\. Core Programming Syntax   
    3\. Variables and Data Types    


## Step 2: Feedback

_Deadline Wednesday_

Provide feedback on the Git assignments (week 1) of one of your fellow students. You will be assigned to one of the assignments by the class lead of this week.

## Step 3: JavaScript

_Deadline Thursday_

> For all the following exercises create a new .js file. Try to find a proper name for each file or make a small comment about what it does inside for future reference. 

1\. Write a `console.log` statement saying "Hello World!" for each language that you know. 

For example:
```
Halo, dunia! // Indonesian
Ciao, mondo! // Italian
Hola, mundo! // Spanish
```

2\. Consider the following code:

```
console.log('I'm awesome');
```

Copy the code in your `.js` file and run it. You will see that you will get a SyntaxError. Find a solution for this error. Hint: read the error message carefully, it also gives an indication of where the problem is.

3\. Declare a variable `x` and initialize it with an integer, using these exact steps:    
3\.1 First, _declare_ your variable `x` (do not initialize it yet).  
3\.2 Add a console.log statement that explains that explains in words what _you think_ the value of `x` is, like in this example:
```js
  // TODO -> here you initialize your variable
  console.log('the value of my variable x will be: whateverYouThinkItWillLog');
```
3\.3 Add a console.log statement that logs the value of `x`.  
3\.4 Now _initialize_ your variable `x` with an integer.  
3\.5 Next, add a console.log statement that explains what _you think_ the value of `x` is.  
3\.6 Add a console.log statement that logs the value of `x`.
  Steps to be taken:
  
```js
  // TODO -> here you declare your variable
  console.log('the value of x will be: whateverYouThinkItWillLog');
  // TODO -> log the actual value of x
  // TODO -> here you initialize your variable
  console.log('the value of x will be: whateverYouThinkItWillLog');
  // TODO -> log value of x again
```

4\. Declare a variable `y` and assign a string to it.  
4\.1 Write a console.log statement in which you explain in words what _you think_ the value of the string is.  
4\.2 Now console.log the variable `y`.  
4\.3 Now assign a new string to the variable `y`.  
4\.4 Just like you did before write a console.log statement that explains in words what you think will be logged to the console.  
4\.5 Now console.log `y` again.  
```js
  // TODO -> here you declare AND assign your string
  console.log('the value of my string will be: whateverYouThinkItWillLog');
  // TODO -> log the actual value of the string to the console
  // TODO -> assign a new value to your variable x
  console.log('the value of my string will be: whateverYouThinkItWillLog');
  // TODO -> log the actual value of the string to the console
```

5\. How do you round the number 7.25, to the nearest integer (i.e., whole number)?  
5\.1 Declare a variable `z` and assign the number 7.25 to it.  
5\.2 Console.log `z`.  
5\.3 Declare another variable `a` that has the value of z but rounded to the nearest integer.  
5\.4 Console.log `a`.  
5\.5 So now we have `z` and `a` find a way to compare the two values and store the highest of the two in a new variable.  
5\.6 Console.log the highest value.  

6\. *Arrays!*  
6\.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See [Naming conventions](../fundamentals/naming_conventions.md).)   
6\.2 Write a console.log statement that explains in words what you think the value of the array is.  
6\.3 Console.log your array.  
6\.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).    
6\.5 Log your array.  
6\.6 Add a statement that adds Daan's favorite animal ('baby pig') to the *existing array*.  
6\.7 Log your new array!  

7\. *More strings*  
7\.1 Let's consider the following string: `let myString = "this is a test"`.  
7\.2 Add the string to your file and console.log it.  
7\.3 Find a way to get the length of `myString`.  
7\.4 Console.log the length of `myString`.  

8\. Write a program that checks the types of two variables and prints out `SAME TYPE` if they are the same type.  
8\.1 First declare at least four variables and assign them different data types.  
8\.2 For each variable write a `console.log` statement that logs the value  
  ```js 
  let foo = 3;
  console.log('The value of my variable foo is: ' + foo);
  ```

  (Curious to know what a `foo` is? Check [this article](https://en.wikipedia.org/wiki/Metasyntactic_variable) on WikiPedia.)  

8\.3 Now write a console.log statement wherein you first explain in words what you think the _type_ of your variables is.  
8\.4 Now use `typeof` to log the actual _type_ of your variables.  
8\.5 Now compare the types of your different variables with one another.  
8\.6 Make sure to also show a message when the variables you are comparing are not the same type.  

For example:

```js
let x = 9;
let y = 'Hello';

if (...) {
    console.log('SAME TYPE');
}
// TODO -> add a way of giving feedback if your variables don't have the same type
```

9\. If `x` equals 7, and the only other statement is `x = x % 3`, what would be the new value of `x`?  
9\.1 Add at least 3 `console.log` statements in which you show that you understand what `%` does.  

10\. Write a program to answer the following questions:  
10\.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.  
10\.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?  
10\.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).  

## Step 4: **Some freeCodeCamp challenges (10 hours):**

_Deadline Saturday_

On freeCodeCamp.com please do the [Basic JavaScript](https://www.freecodecamp.com/challenges/learn-how-free-code-camp-works) exercises up and until the __"Shopping List"__ exercise (there are some topics we did not cover but you can do it).

## Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week2/README.md) to prepare for your next class

### How to hand in Homework:
```
• Create a new repository "hyf-javascript1". Also create a new folder "week1" inside this repository. 
• Upload your homework files inside the week1 folder and write a description for this “commit”.
• Your hyf-javascript1/week1 should now contain all your homework files.
• Place the link to your repository folder in Trello.
```

### Hint
If you solve the FreeCodeCamp challenges and they are new concepts to you and you would like to take a look at them later on in the program, Copy your answers from FCC in a `.js` file and upload them to Github in a repository for future reference. In this way you build your own little documentation, if you look back at them first try to understand what it does before you run them.

:star: Additional resources and review: :star:

- [Variables](../fundamentals/variables.md)
- [Basic value types](../fundamentals/values.md)
- [Operators](../fundamentals/operators.md)
- [Naming conventions](../fundamentals/naming_conventions.md)
