'use strict';
let booksList = [
    {
        title: 'Good and Evil',
        author : 'Mohammad Alshaarawi',
        alreadyRead  : true,
    },
    {
        title : 'What my father did not tell me about life',
        author : 'Karim Alshazli',
        alreadyRead  : true,
    },
    {
        title : 'Where is the way',
        author : 'Hazem aboIsmaiel',
        alreadyRead  : false,
    }
];


for (let i = 0; i < booksList.length; i++) {
	if (booksList[i].alreadyRead === true) {
		console.log('I already read ' + booksList[i].title); 
	} else if (booksList[i].alreadyRead === false) {
		console.log('I still need to read ' + booksList[i].title); 
	}
};