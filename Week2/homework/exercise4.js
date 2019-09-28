"use strict"
var books = [
    {
        title: "We Should Be All Feminists",
        author: "Chimamanda Ngozi Adichie",
        alreadyread: true
    },

    {
        title: "My Husband's Secret",
        author: "Liane Moriarty",
        alreadyread: true
    },

    {
        title: "The Second Sex",
        author: "Simone de Beauvoir",
        alreadyread: false
    }
]

var i = 0;
var bookslen = books.length;
var bookskey = Object.keys(books[i]);
console.log(bookslen)
/*this is to run through the books list*/
for (i = 0; i < bookslen; i++){
    console.log(books[i])
}
/*this is to show book by book and the status if I already read it or not*/
for (i = 0; i < bookslen; i++){
    console.log(books[i][bookskey[0]] + " by " + books[i][bookskey[1]])
    if (books[i][bookskey[2]] === true)
    console.log("You already read " + books[i][bookskey[0]])
         else 
    console.log("You still need to read " + books[i][bookskey[0]])
    console.log("-----")
}


