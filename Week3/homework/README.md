# Homework Exercises

## Strings

1. Consider the following string:

    ```JavaScript
    const myString = "hello,this,is,a,difficult,to,read,sentence";
    ```

    - Add the string to your file and log it.
    - Log the length of myString.
    - The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and __replace__ them with spaces.

2. Consider the following string:

    ```JavaScript
    const str = 'dlroW olleH';
    ```

    - The string doesn't make any sense. Find a way to _reverse_ this string so that it becomes readable.

## Arrays

1. Consider the following array:

    ```JavaScript
    const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
    ```

    - Add a statement that adds your favorite animal say 'turtle' to the existing array.
    - Explain in a comment what do you think the new array will look like.
    - Log your new array.
    - Now add another favorite animal to the array but make sure it is placed after 'blowfish' and before 'capricorn'.
    - Explain in a comment what do you think the new array will look like.
    - Log your new array.
    - Delete 'giraffe' from the array.

## Operators

1. Consider the following snippet:

    ```JavaScript
    0 == '0'; // true
    0 == [];  // true
    "0" == [];  // false
    ```

    - Mathematically, if `a == b` and `b == c`, then `a == c`. Can you explain in your words why this is not true for the above snippet?

2. Consider the following snippet:

    ```JavaScript
    const x = [1, 2, 3];
    const y = [1, 2, 3];
    const z = y;
    ```

    - What do you think will happen with `x == y`, `x === y` and `z === y` and `z == x`? Try to think of answer first before running it on browser. Also, explain in your words why this happens?

3. Consider the following snippet:

    ```JavaScript
    const o1 = { foo: "bar" };
    const o2 = { foo: "bar" };
    const o3 = o2;
    ```

    - Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
    - Does the order that you assign (o3 = o2 or o2 = o3) matter?
