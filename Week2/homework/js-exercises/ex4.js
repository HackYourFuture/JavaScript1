//declare a variable that holds an array of 3 objects
const books = [
  { title: 'The Outsider', author: 'Colin Wilson', alreadyRead: true },
  {
    title: 'The Glass Bead Game',
    author: 'Hermann Hesse',
    alreadyRead: false,
  },
  {
    title: 'Thus Spoke Zarathustra ',
    author: 'Friedrich Nietzsche',
    alreadyRead: true,
  },
];

// first way to loop through the array of books
console.log('first way to loop through the array of books');
for (let myBooks in books) {
  console.log(books[myBooks]);
}

// second way to loop through the array of books
console.log('second way to loop through the array of books');
for (i = 0; i < 3; i++) console.log(books[i]);

// third way to loop through the array of books
console.log('third way to loop through the array of books');
books.forEach(function(getAllBooks) {
  console.log(getAllBooks);
});

//log the book title and book title and author in (same function)with conditional statement for book reading
books.forEach(function(getAllBooks) {
  console.log(`${getAllBooks.title} By ${getAllBooks.author}`);
  if (getAllBooks.alreadyRead == true) {
    console.log(`You already read "${getAllBooks.title}"`);
  } else {
    console.log(`You still need to read "${getAllBooks.title}"`);
  }
});
