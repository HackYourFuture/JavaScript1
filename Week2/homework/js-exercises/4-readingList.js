'use strict';

//  Midnight’s Children by Salman Rushdie (1981)
//  An Artist of the Floating World by Kazuo Ishiguro (1986)
//  Underworld by Don DeLillo (1997)

const myBooks = [{ // 1 
    title : 'Midnight’s Children',
    author : 'Salman Rushdie',
    alreadyRead :false  
    },
    {
    title : 'An Artist of the Floating World',
    author : 'Kazuo Ishiguro',
    alreadyRead :false  
    },
    {
    title : 'Underworld',
    author : 'Don DeLillo',
    alreadyRead :true  
    }
];
console.log(myBooks); // 2

for (let i = 0; i < myBooks.length; i++) { // 3 

    console.log(myBooks[i].title ,' by ', myBooks[i].author);

};
// or you can creat a new loop for (IF)

for (let i = 0; i < myBooks.length; i++) {

    if (myBooks[i].alreadyRead === true){
        console.log('I already read ' , myBooks[i].title); // 4
    }else{
        console.log('I still need to read ' , myBooks[i].title); // 5
    }
};

// or like this 

for (let i = 0; i < myBooks.length; i++) { // 3 

    console.log(myBooks[i].title ,' by ', myBooks[i].author);

    if (myBooks[i].alreadyRead === true){
        console.log('I already read ' , myBooks[i].title); // 4
    }else{
        console.log('I still need to read ' , myBooks[i].title); // 5
    }

};