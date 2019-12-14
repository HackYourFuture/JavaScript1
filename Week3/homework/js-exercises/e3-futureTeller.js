'use strict'

function tellFortune (numChildren, partnerNames, locations, jobs) {

    const children = numChildren[Math.floor(Math.random()*numChildren.length)]
    const partner=partnerNames[Math.floor(Math.random()*partnerNames.length)]
    const location=locations[Math.floor(Math.random()*locations.length)]
    const job=jobs[Math.floor(Math.random()*jobs.length)]

    return console.log(`You will be a ${job} in ${location} & married to ${partner} with ${children} kids`)
}


const numChildren= [0,1,2,3,4]
const partnerNames=['Ashton Kutcher', 'Bradley Pitt', 'Reese Witherspoon', 'William Ferrell', 'Elle Fanning']
const locations=['Germany', 'France', 'Italy', 'Sweden', 'Belgium']
const jobs=['gold smith', 'teacher', 'engineer', 'accountant', 'lawyer']

tellFortune(numChildren, partnerNames, locations, jobs)
