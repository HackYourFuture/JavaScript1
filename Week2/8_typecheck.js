const variables = {
  pi: 3.14,
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  isSunny: true,
  dogName: "Liefy",
}

for (property in variables) {
  console.log(`The value of variable ${property} is ${variables[property]}`);
}

console.log("\nType of variables" + "\n" +
  "'pi': " + "Number" + "\n" +
  "'days': " + "Array" + "\n" +
  "'isSunny': " + "Boolean" + "\n" +
  "'dogName': " + "String" + "\n\n");

for (property in variables) {
  console.log(`The type of variable ${property} is ${typeof variables[property]}`);
}

function isSameType(var1, var2) {
  if (typeof var1 != typeof var2) {
    console.log(`\nDifferent data types
      var1 : ${typeof var1}
      var2 : ${typeof var2}`)
  } else {
    console.log(`Same Data type of ${typeof (var1)}`)
  }
}

isSameType(variables.pi, variables.isSunny);