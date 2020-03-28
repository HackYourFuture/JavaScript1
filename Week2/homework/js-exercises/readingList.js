let books = [{
        title: 'THE SOUND AND THE FURY',
        author: 'by William Faulkner',
        alreadyRead: true,
    }, {
        title: 'THE GREAT GATSBY',
        author: 'by F. Scott Fitzgerald',
        alreadyRead: false,
    },
    {
        title: 'ANIMAL FARM',
        author: 'by George Orwell',
        alreadyRead: false,
    }
]
for (let book of books)
    if (book.alreadyRead == true) {
        console.log(book.title + " " +
            book.author + " " + "You already read 'THE SOUND AND THE FURY'");
    } else {
        console.log(book.title + " " +
            book.author + " " + "You still need to read 'THE SOUND AND THE FURY'");
    }