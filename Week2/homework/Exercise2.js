
//Exercise1

'use strict';
let sentence = '';

for (let i = 0; i <= 20; i++){
    if(i % 2 === 1){
        console.log(`The number ${i} is  ${sentence}!`)
        
    }else{
        sentence = 'even'
        console.log(`The number ${i} is  ${sentence}!`)
    }
    
};

