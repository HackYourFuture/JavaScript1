console.log(`------- 3 -------`);
console.log(`Create an object and a function that takes the object as a parameter and prints out all of its properties and values:`);

function Book (name, author, numberOfPages, genre) {
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.genre = genre;
};

const favBook = new Book(`The Road`, `Cormac McCarthy`, 241, [`science fiction`, `tragedy`]);

function printFavouriteBook(favouriteBook) {
  for (const key of Object.keys(favouriteBook)) {
    console.log(`${key}: ${favouriteBook[key]}`);
  }
}

printFavouriteBook(favBook);
console.log(`\n`);

