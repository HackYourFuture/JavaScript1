'use strict'

function giveCompliment (name) {

    name=name.charAt(0).toUpperCase() + name.slice(1);

    const complimentList = ['great', 'awesome', 'kind', 'reliable','witty', 'optimistic','patient','outgoing','energetic','artistic']

    let compliment = complimentList[Math.floor(Math.random()*complimentList.length)];

    return console.log(`You are ${compliment}, ${name}`)
}

giveCompliment('nour')
giveCompliment('nour')
giveCompliment('nour')

