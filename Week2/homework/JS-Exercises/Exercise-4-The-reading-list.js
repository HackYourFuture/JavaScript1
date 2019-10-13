const myBooks = [
  (book1 = {
    title: 'The Odyssey',
    author: 'Homer',
    alreadyRead: true,
  }),
  (book2 = {
    title: 'Invisible Man',
    author: 'Ralph Ellison',
    alreadyRead: false,
  }),
  (book3 = {
    title: 'The Stranger',
    author: 'Albert Camus',
    alreadyRead: false,
  }),
];

for (let i = 0; i < myBooks.length; i++) {
  if (myBooks[i].alreadyRead === true) {
    console.log(myBooks[i].title + ' by ' + myBooks[i].author + ' You already read this book.');
  } else {
    console.log(
      myBooks[i].title + ' by ' + myBooks[i].author + ' You still need to read this book.',
    );
  }
}
