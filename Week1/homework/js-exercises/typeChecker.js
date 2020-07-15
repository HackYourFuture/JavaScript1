{
  let a = "17";
  let b = "hello";
  if (typeof a === typeof b) {
    console.log("SAME TYPE");
  } else {
    console.log("NOT THE SAME TYPE");
  }
}

let str1 = "first";
let str2 = "second";
let obj1 = { one: [3], two: "hi" };
let obj2 = { man: true, level: 4 };

if (typeof str1 === typeof str2) {
  console.log("str1 and str2 are same type");
} else {
  console.log("str1 and str2 are not the same type)");
}
if (typeof str1 === typeof obj1) {
  console.log("str1 and obj1 are same type");
} else {
  console.log("str1 and obj1 are not the same type");
}
if (typeof str1 === typeof obj2) {
  console.log("str1 and obj2 are same type");
} else {
  console.log("str1 and obj2 are not the same type");
}
if (typeof str2 === typeof obj1) {
  console.log("str2 and obj1 are same type");
} else {
  console.log("str2 and obj1 are not the same type");
}
if (typeof str2 === typeof obj2) {
  console.log("str2 and obj2 are same type");
} else {
  console.log("str2 and obj2 are not the same type");
}
if (typeof obj1 === typeof obj2) {
  console.log("obj1 and obj2 are same type");
} else {
  console.log("obj1 and obj2 are not the same type");
}
