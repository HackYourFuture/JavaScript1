'use strict';


function giveCompliment(name) {
    let compliments = ['Great!', 'Awesome!', 'fabulous!', 'elegant', 'magnificent! ', 'super!', 'superior', 'Doing well!', 'Excelent!', 'Nice!' ];
    return `You are ${compliments[Math.floor(Math.random() * 10)]} ${name}!` 
}

console.log(giveCompliment('Hani'));
console.log(giveCompliment('Hani'));
console.log(giveCompliment('Hani'));
console.log(giveCompliment('Hani')); 