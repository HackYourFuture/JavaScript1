const gradeCalc = grade => {
    /* This project will be more easy with if statemants, but I intentionally
    used switch statement. For ranges like 0- 49, if statement could be more useful. */
    switch (true) {
        case grade <= 49:
            console.log(`You got a F (${grade}%)!`)
            break;
        case grade <= 59:
            console.log(`You got a D (${grade}%)!`)
            break;
        case grade <= 69:
            console.log(`You got a E (${grade}%)!`)
            break;
        case grade <= 79:
            console.log(`You got a C (${grade}%)!`)
            break;
        case grade <= 89:
            console.log(`You got a B (${grade}%)!`)
            break;
        case grade <= 100:
            console.log(`You got a A (${grade}%)!`)
            break;

        //If user types numbers bigger than 100 or lower than 0 or a non-number character.
        default:
            console.log('You should put numbers between 0 and 100.')
            break;
    }
}

gradeCalc(25);
gradeCalc(52);
gradeCalc(64);
gradeCalc(75);
gradeCalc(88);
gradeCalc(97);
gradeCalc(105); //Bigger than 100 which is not possible for an exam note.
gradeCalc('Abc'); //Not a number.