function tien(){
    console.clear();

    let lst = ["one", 2, false];
    console.log("10.1 We can store multiple types in an array: ");
    console.log('[' + lst + ']');
    lst.forEach(value => {
        console.log(typeof(value)); // "a 5", "b 7", "c 9"
      });

    console.log("")
    console.log("10.2 We can compare infinity: ");
    console.log("(6/0 === 10/0): " + (6/0 === 10/0));
}