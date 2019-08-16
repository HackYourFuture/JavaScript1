x = 13;
y = 'cow';
z = true;
c = 26;
console.log("The value of my variable x is: " + x);
console.log("The value of my variable x is: " + y);
console.log("The value of my variable x is: " + z);
console.log("The value of my variable x is: " + c);
console.log("I think the types of my variables are all different");
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof c);
if (typeof x===typeof y) {
    console.log('SAME TYPE');
  } else {
    console.log('different TYPEs');
  };
  if (typeof y===typeof z) {
    console.log('SAME TYPE');
  } else {
    console.log('different TYPEs');
  };
  if (typeof z===typeof c) {
    console.log('SAME TYPE');
  } else {
    console.log('different TYPEs');
  };
  if (typeof c===typeof x) {
    console.log('SAME TYPE');
  } else {
    console.log('different TYPEs');
  };