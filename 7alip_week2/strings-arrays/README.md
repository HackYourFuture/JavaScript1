**1. STRINGS!**

Consider the following string:

```javascript
let myString = "hello,this,is,a,difficult,to,read,sentence";
```

**1.1. Add the string to your file and log it.**

```javascript
const lengthStr = myString.length;

console.log(myString); // hello,this,is,a,difficult,to,read,sentence
```

**1.2. Log the length of myString.**

```javascript
console.log(myString.length); // 42
```

**1.3. The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.**

```javascript
// let modifiedStr = myString.replace(/,/g, ' ');
let modifiedStr = myString.split(',').join(' ');
```

**1.4. Log myString to see if you succeeded.**

```javascript
console.log(modifiedStr); // hello this is a difficult to read sentence
```

___

**2. ARRAYS!**

Consider the following array:

```javascript
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
```

**2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.**

```javascript
let maurosAnimal = 'turtle';
favoriteAnimals.push(maurosAnimal);
```

**2.2 Log your new array!**

```javascript
console.log(favoriteAnimals); // [ 'blowfish', 'capricorn', 'giraffe', 'turtle' ]
```

>  ```javascript
> let newFavoriteAnimals = favoriteAnimals.push(maurosAnimal);
>  console.log(newFavoriteAnimasls) // logs 4, not the array itslef
>
> /* If you assign new pushed array to a new variable, it returns a number. if you want to log desired result, you need to call it without assigning. */
> ``` 

**2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.**

```javascript
let jimsAnimal = 'meerkat';

// Here is the solution https://stackoverflow.com/a/12710609
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
}

favoriteAnimals.insert(1, jimsAnimal);
```

**2.4 Write a console.log statement that explains in words you think the new value of the array is.**

```javascript
console.log("Animal list array will be: [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]")
```

**2.5 Log your new array!**

```javascript
console.log(favoriteAnimals); // [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]
```

**2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).**

```javascript
console.log(`The length of the array is: ${favoriteAnimals.length}`); // The length of the array is: 5
```

**2.7 Jason does not like 'giraffe', delete this animal from the array.**

```javascript
favoriteAnimals.splice(3, 1);
```

**2.8 Again log your new array.**

```javascript
console.log(favoriteAnimals); //  [ 'blowfish', 'meerkat', 'capricorn', 'turtle' ]
```

**2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?**

```javascript
// I create a function which removes the desired item from any given array
function removeItem(item, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
    }
  }
}

// Now remove 'blowfish' from the array
removeItem('blowfish', favoriteAnimals);

console.log(favoriteAnimals); // [ 'meerkat', 'capricorn', 'turtle' ]
```

**2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).**

```javascript
// The same approach but this function logs the result
function findIndex(item, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      console.log(`The item you are looking for is at index: ${i}`);
    }
  }
}

findIndex("meerkat", favoriteAnimals); // The item you are looking for is at index: 0
```
