let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

x == y; //    returns false, addressing different references
x === y; //   returns false, addressing different references
z == y; //    returns true, addressing the same memory locations
z == x; //    returns false, y was assigned to z already thus addressing different references
