var BookList = [
  {
    title: 'Endless night',
    author: 'Agatha christie',
    alreadyRead: true,
  },
  {
    title: 'The lost symbol',
    author: 'Dan Brown',
    alreadyRead: true,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: false,
  },
];

for (let i = 0; i < BookList.length; ++i) {
  console.log(BookList[i].title + ' by ' + BookList[i].author);
  if (BookList[i].alreadyRead) {
    console.log(`You already read "${BookList[i].title}"`);
  } else {
    console.log(`You still need to read "${BookList[i].title}"`);
  }
}