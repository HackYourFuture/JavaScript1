'use strict';
let books = [
	{
		title: '"The Hobbit"',
		author: 'J.R.R. Tolkien',
		alreadyRead: true
	},
	{
		title: '"Your Dreams"',
		author: 'M.benali',
		alreadyRead: false
	},
	{
		title: '"First Day"',
		author: 'A.B. Marie',
		alreadyRead: false
	}
];

for (let i of books) {
	console.log(i);
}

for (let a = 0; a < books.length; a++) {
	if (books[a].alreadyRead === true) {
		console.log('I already read ' + books[a].title); //I already read..
	} else if (books[a].alreadyRead === false) {
		console.log('I still need to read ' + books[a].title); //I still need to read..
	}
}
