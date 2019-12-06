'use strict'

const books=[{title: '365 Days With Self-Discipline',
            author: 'Martin Meadows',
            alreadyRead: true},

            {title: 'The Art of Creative Thinking',
            author: 'John Adair',
            alreadyRead: true},

            {title: '101 Creative Problem Solving Techniques',
            author: 'James M. Higgins',
            alreadyRead: false}];


for (let item of Object.values(books)) {
    if (item.alreadyRead == true) {
        console.log (`${item.title} by ${item.author}`)
        console.log(`You already read the ${item.title}`)
    } else {
        console.log (`${item.title} by ${item.author}`)
        console.log (`You still need to read the ${item.title}`)
    }
};


// inline method
for (let item of Object.values(books)) {
    (item.alreadyRead == true) ? console.log(`${item.title} by ${item.author} \nYou already read the ${item.title}`) 
                                : console.log (`${item.title} by ${item.author} \nYou still need to read the ${item.title}`)
};

