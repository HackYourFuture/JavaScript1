{
  /*
   * Q1.
   * Write a program which would sort the below array in ascending order by name.
   * Hint: String.prototype.localeCompare()
   */
  const people = [
    {
      name: 'Richie Baros',
    },
    {
      name: 'Jayson Karner',
    },
    {
      name: 'Dylan Wanner',
    },
    {
      name: 'Travis Tarwater',
    },
    {
      name: 'Angelique Lyall',
    },
    {
      name: 'Stacie Dyar',
    },
  ];

  people.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  console.log(people);

  /*
   * Q2.
   * Write a function that accepts array and returns only the even numbers in it.
   * For example, if the input array is [13, 1, 4, 6, 8, 3, 2, 2], the output array should be [4, 6, 8, 2, 2].
   */
  let nes = [13, 1, 4, 6, 8, 3, 2, 2];
  const newst = nes.filter(i => i % 2 === 0);
  console.log(newst);

  /*
   * Q3.
   * A class has 5 students defined below. Write a program to calculate average score of the class.
   * Note: The average should be restricted to 2 decimal places.
   */
  const students = [
    {
      name: 'Student 1',
      score: 93,
    },
    {
      name: 'Student 2',
      score: 87,
    },
    {
      name: 'Student 3',
      score: 84,
    },
    {
      name: 'Student 4',
      score: 90,
    },
    {
      name: 'Student 5',
      score: 96,
    },
  ];

  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += parseInt(students[i].score, 10);
  }
  var avg = (sum / students.length).toFixed(2);
  console.log(avg);

  /*
   * Q4.
   * Write a JavaScript function which accept a string as argument and swaps the case of each character.
   * For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
   * Any character other than alphabets will stay as it is.
   * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
   */

  function newstring(str = '') {
    let secondstring = '';
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        secondstring = secondstring.concat(str[i].toUpperCase());
      } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        secondstring = secondstring.concat(str[i].toLowerCase());
      } else {
        secondstring = secondstring.concat(str[i]);
      }
    }
    return secondstring;
  }
  console.log(newstring('The Quick Brown Fox'));
}

//More JavaScript

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.

function sum(arr) {
  return arr.reduce(function(a, b, c) {
    return a + b + c;
  }, 0);
}

let numbers = [3, 4, 5];

console.log(sum(numbers));

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
const colorCar = color => `a ${color} car`;
console.log(colorCar('red'));

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

const carproperties = {
  name: 'mercedes',
  productiondate: '2018',
  price: '50.000 euro',
};

const print = () => {
  for (const properties in carproperties) {
    console.log(`mercedes ${properties}: ${carproperties[properties]}`);
  }
};
print();

// 4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

const vehicleType = (color, code) => {
  if (code === 1) {
    console.log(`a ${color} car`);
  } else if (code === 2) {
    console.log(`a ${color} motorbike`);
  } else {
    console.log('nothing');
  }
};
vehicleType('yellow', 2);

/* 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
 if (3 === 3) {
    console.log("yes");
  } else {
    console.log("no");
  }
 */
console.log(3 === 3 ? `yes` : `no`);

// 6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

const vehicle = (color, code, age) => {
  const newa = age === 0 ? `new` : `used`;

  if (code === 1) {
    console.log(`a ${color} ${newa} car`);
  } else if (code === 2) {
    console.log(`a ${color} ${newa} motorbike`);
  }
};
vehicle('blue', 1, 1);

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
const vehicles = ['motorbike', 'caravan', 'bike', 'car'];

//8. How do you get the third element from that list?

console.log(vehicles[2]);

//9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

let vehic = (color, code, age) => {
  age === 1 || age === 0 ? (age = 'new') : (age = 'used');
  const type = vehicles[code];
  if(code>3 || code<0){
    console.log('error');
  }
  else{ 
  console.log(`a ${color} ${age} ${type}`);
}
};

vehic('green', 3, 1);

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."

const vehicless = ['motorbike', 'car', 'caravan', 'bike'];

newPrint = () => {
  const first = vehicless[vehicless.length - 1];

  const second = vehicless
    .map(vehicless => vehicless + 's')
    .filter((add, index) => add !== first + 's')
    .join(', ');

  console.log(`Amazing Joe's Garage, we service ${second}  and ${first}s.`);
};

newPrint();

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

vehicless.push('boat');
console.log(newPrint());

// 12.Create an empty object.
const empty = {};

// 13.Create an object that contains the teachers that you have had so far for the different modules.

const teacherlesson = [
  {
    name: 'Philipp Beau',
    courses: 'HTML, CSS',
  },
  {
    name: 'Rob van Kruijsdijk',
    courses: 'HTML, CSS',
  },

  {
    name: 'Bonan Zhao',
    courses: 'CLI, Git',
  },
  {
    name: 'Yash Kapila',
    courses: 'Git, GitHub, JavaScript',
  },
];
console.log(teacherlesson);

// 17.What does the following code return? (And why?)

let bar = 42;
console.log(typeof bar);
console.log(typeof typeof bar);
// if we use 2 times typeofs always returns a string. firstl number then after will be string
