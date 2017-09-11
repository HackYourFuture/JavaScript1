'use strict';
/**
 * Closure returning a function
 */
function greetPerson(name) {
    const defaultGreeting = 'Hello';
    const innerFunction = function (greeting) {
        greeting = greeting || defaultGreeting;
        return greeting + ', ' + name;
    };
    return innerFunction;
}

const greetTimir = greetPerson('Timir');
const timirGreeting = greetTimir('Good morning');
console.log(timirGreeting);

const greetMaartje = greetPerson('Maartje');
const maartjeGreeting = greetMaartje('Hi there');
console.log(maartjeGreeting);

