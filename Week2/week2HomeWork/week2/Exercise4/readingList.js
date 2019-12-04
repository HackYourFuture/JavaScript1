const books = [{
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        alreadyRead: true
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        alreadyRead: true
    },
    {
        title: "The Lord of the Rings II",
        author: "J.R.R. Tolkien",
        alreadyRead: false
    }
];
let i = 0;
for (i of books) {
    console.log(i);
}

for (let j = 0; j < books.length; j++) {
    if (books[j].alreadyRead == true) {
        console.log("I already read .." + books[j].title);
    } else {
        console.log("still I need to read .." + books[j].title);
    }
}