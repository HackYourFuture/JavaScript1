'use strict'

function tellFortune (numChildren, partnerNames, locations, jobs) {

    let children = numChildren[Math.floor(Math.random()*numChildren.length)]
    let partner=partnerNames[Math.floor(Math.random()*partnerNames.length)]
    let location=locations[Math.floor(Math.random()*locations.length)]
    let job=jobs[Math.floor(Math.random()*jobs.length)]

    return console.log(`You will be a ${job} in ${location} & married to ${partner} with ${children} kids`)
}


let numChildren= [0,1,2,3,4]
let partnerNames=['Ashton Kutcher', 'Bradley Pitt', 'Reese Witherspoon', 'William Ferrell', 'Elle Fanning']
let locations=['Germany', 'France', 'Italy', 'Sweden', 'Belgium']
let jobs=['gold smith', 'teacher', 'engineer', 'accountant', 'lawyer']

tellFortune(numChildren, partnerNames, locations, jobs)
