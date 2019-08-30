{
  /*
   * Q1.
   * Write a program which would sort the below array in ascending order by name.
   * Hint: String.prototype.localeCompare()
   */
  const people = [{
    name: 'Richie Baros'
  }, {
    name: 'Jayson Karner'
  }, {
    name: 'Dylan Wanner'
  }, {
    name: 'Travis Tarwater'
  }, {
    name: 'Angelique Lyall'
  }, {
    name: 'Stacie Dyar'
  }];


  people.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  console.log(people);


  /*
   * Q2.
   * Write a function that accepts an array and returns only the even numbers in it.
   * For example, if the input array is [13, 1, 4, 6, 8, 3, 2, 2], the output array should be [4, 6, 8, 2, 2].
   */

  function evenNumbers() {
    const myArray = [13, 1, 4, 6, 8, 3, 2, 2];
    let evenArray = [];
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] % 2 === 0) {
        evenArray.push(myArray[i]);
      }
    }
    return evensArray;

  }


  /* Q3.
  * A class has 5 students defined below. Write a program to calculate average score of the class.
  * Note: The average should be restricted to 2 decimal places.
  */
  const students = [{
    name: 'Student 1',
    score: 93
  }, {
    name: 'Student 2',
    score: 87
  }, {
    name: 'Student 3',
    score: 84
  }, {
    name: 'Student 4',
    score: 90
  }, {
    name: 'Student 5',
    score: 96
  }];


  function calculateAverage(input) {
    let sum = 0;
    for (i = 0; i < input.length; i++) {
      sum += input[i].score;
    }
    const scoreAverage = (sum / input.length).toFixed(2);
    return scoreAverage;
  }
  console.log(calculateAverage(students));


  /* Q4.
  * Write a JavaScript function which accept a string as argument and swaps the case of each character.
  * For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
  * Any character other than alphabets will stay as it is.
  * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  */

  function swapCase(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase())
        newString += string[i].toLowerCase();
      else if (string[i] === string[i].toLowerCase())
        newString += string[i].toUpperCase();
    }
    return newString;
  }

  console.log(swapCase("The Quick Brown Fox"));
  console.log(swapCase('sentence'));
  console.log(swapCase('SENTENCE'));
  console.log(swapCase('SeNtEnCe'));

}
