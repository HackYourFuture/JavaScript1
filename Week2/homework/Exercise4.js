//Exercise4.js

'use strict';


const books = [
    {title: 'Notorious RBG: The Life and Times of Ruth Bader Ginsburg',
    author: 'Irin Carmon and Shana Knizhnik',
    alreadyRead: false,
    },

    {title: 'The Origins of Totalitarianism',
    author: 'Hannah Arendt',
    alreadyRead: false,
    },
    
    {title: 'Eichmann in Jerusalem',
    author: 'Hannah Arendt',
    alreadyRead: true,
    }
];

for(let i = 0; i <= books.length; i++){
    console.log('\"' + books[i].title + '\"' +' by ' + books[i].author );
    
    if(books[i].alreadyRead === true){
        console.log('You already read \"' + books[i].title + '\"')
    }else{
        console.log('You still need to read \"' + books[i].title + '\"')
    }
};

