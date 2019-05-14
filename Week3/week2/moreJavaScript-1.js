function sum(arg1, arg2, arg3) {
    if(isNaN(arg1) || isNaN(arg2) || isNaN(arg3)) {
        return "least one of parameters is not a number!";
    }
    return arg1 + arg2 + arg3;
}

console.log(sum(1, 2, "afaf"));
console.log(sum(1, 2, 3));
console.log("\n\n");
