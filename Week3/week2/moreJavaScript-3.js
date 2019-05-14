const user = {
    name : "Pete",
    surname : "Smith",
    age : 27,
    'doingSport' : true,
};

function printOut(obj) {
    for(prop in obj) {
        console.log(prop + " : " + obj[prop]);
    }
}

printOut(user);
console.log("\n\n");