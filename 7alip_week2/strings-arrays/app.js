function stringsChallenge() {
  let myString = "hello,this,is,a,difficult,to,read,sentence";
  const lengthStr = myString.length;
  console.log(myString); // hello,this,is,a,difficult,to,read,sentence

  console.log(myString.length); // 42

  let modifiedStr = myString.split(',').join(' ');
  // let modifiedStr = myString.replace(/,/g, ' ');
  console.log(modifiedStr); // hello this is a difficult to read sentence
}

function arraysChallenge() {
  let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
  let maurosAnimal = 'turtle';
  favoriteAnimals.push(maurosAnimal);

  console.log(favoriteAnimals); // [ 'blowfish', 'capricorn', 'giraffe', 'turtle' ]

  /* 
  let newFavoriteAnimals = favoriteAnimals.push(maurosAnimal);
  console.log(newFavoriteAnimasls) // logs 4, not the array itslef

  If you assign new pushed array to a new variable, it returns a number. if you want to log desired result, you need to call it without assigning. 
  */

  let jimsAnimal = 'meerkat';

  // Here is the solution https://stackoverflow.com/a/12710609
  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  }

  favoriteAnimals.insert(1, jimsAnimal);
  console.log(favoriteAnimals); // [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]
  console.log(`The length of the array is: ${favoriteAnimals.length}`); // The length of the array is: 5

  favoriteAnimals.splice(3, 1);
  console.log(favoriteAnimals); //  [ 'blowfish', 'meerkat', 'capricorn', 'turtle' ]

  function removeItem(item, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
  }

  removeItem('blowfish', favoriteAnimals);
  console.log(favoriteAnimals); // [ 'meerkat', 'capricorn', 'turtle' ]

  function findIndex(item, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        console.log(`The item you are looking for is at index: ${i}`);
      }
    }
  }

  findIndex("meerkat", favoriteAnimals); // The item you are looking for is at index: 0 
}


stringsChallenge(); arraysChallenge();