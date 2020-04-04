'use strict'
// function that randomly selects a compliment
function giveCompliment(name) {
    let compliments = ['great', 'awesome', 'funny', 'friendly', 'confidence', 'strong', 'brilliant', 'smart', 'brave', 'honest'];
    var randomValue = compliments[Math.floor(compliments.length * Math.random())];
    console.log(randomValue);
    console.log('you are' + ' ' + randomValue + ' ' + name);
}
giveCompliment('Noer');