// Exercise 4: The reading list

'use strict';
// creates object inside an array
let books =[{
    title: 'pride & prejudice',
    author: 'Jane Austin',
    alreadyRead: true
}, {
    title: 'If tommorow comes',
        author: 'Sydney Sheldon',
        alreadyRead: true

    },
    {
    title: 'Master of the game',
    author: 'Sydney Sheldon',
    alreadyRead: false
    }
]
let x;
for (x of books){
    if(x['alreadyRead']===true){
        console.log('You already read '+ x.title); //prints out the book title when alreadyRead value is true
    }
    else{
        console.log('You still need to read ' + x.title); //prints out the book title when alreadyRead value is false
    }
}