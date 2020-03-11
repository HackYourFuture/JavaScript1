let pastaBechamel = {
  Recipe: "Fluffy Pancakes",
  Servings: 4,
  Ingredients: [
'1 1/5 cups all-purpose flour', '3 1/2 teaspoons baking powder', '1 teaspoon salt', '1 1/4 cups milk', '1 egg', '3 tablespoons butter, melted'
  ]
}
// One iterating using (for in) alone the ingredients property looks jammed, so I did two loops with a condition if the property is an array so that each array element is logged on new line and it looks similar to the example shown.
for (let property in pastaBechamel) {
  if (Array.isArray(pastaBechamel[property])) {
    let arr = pastaBechamel[property];
    console.log(`${property}:`);
    for (let i=0; i<arr.length; i++){
      console.log(arr[i]);
    }
  } else {
    console.log(`${property}: ${pastaBechamel[property]}`);
  }
}
  
  


