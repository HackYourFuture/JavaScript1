{
  /* Create an object and a function that takes the object 
   as a parameter and prints out all of its properties and values.
  */

  const car = { made: 'Honada', year: 2019, color: 'Red', availableNow: true };

  function myFunction(object) {
    const objectKeys = Object.keys(object);

    for (let i = 0; i < objectKeys.length; i++) {
      const keyName = objectKeys[i];
      console.log(keyName + ': ' + object[keyName]);
    }
  }
  myFunction(car);
}
