'use strict'

function giveCompliment (name) {

    const complimentList = ['great', 'awesome', 'kind', 'reliable','witty', 'optimistic','patient','outgoing','energetic','artistic']

    let compliment = complimentList[Math.floor(Math.random()*complimentList.length)];

    console.log(`You are ${compliment}, ${name}`)
}

giveCompliment('nour')
giveCompliment('nour')
giveCompliment('nour')

