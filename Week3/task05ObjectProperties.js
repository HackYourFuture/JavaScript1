let person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
};
function showProVa() {
    console.log('Parameters of an object is '+Object.getOwnPropertyNames(person));
    console.log('The actual values of the parameters is:');
    let x;
    for (x in person) {
    console.log(person[x]);
};};
showProVa();