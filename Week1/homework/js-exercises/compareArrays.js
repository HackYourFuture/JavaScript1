'use script';{
    var a = [12, 24, 36, 48];
    var b = [1 , "odd", 2, "even", 3, 4, 5];
    console.log('The length of the first array is ' + a.length);
    console.log('The length of the second array is ' + b.length);
    if (a.length === b.length) {
    console.log("They are the same!");
    }
    else {
    console.log("Two different sizes");
    }
}