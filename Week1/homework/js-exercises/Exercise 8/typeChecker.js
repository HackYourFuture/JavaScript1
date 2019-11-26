const myName = 'naji';
const lastName = 'nabulsi';
const myThings = ["Glasses", "bag"];
const myIssues = ['research', 'research'];
if (typeof myName == typeof lastName) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}

if (typeof myName == typeof myThings) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}

if (typeof myName == typeof myIssues) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}

if (typeof lastName == typeof myThings) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}

if (typeof myThings == typeof myIssues) {
    console.log('SAME TYPE');
} else {
    console.log('not the SAME TYPE');
}