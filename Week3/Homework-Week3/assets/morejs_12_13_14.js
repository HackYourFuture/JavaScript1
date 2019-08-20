{
  // 12: Create an empty object.
  const hyf = new Object();
  console.log('This is an empty object: ', hyf);

  // Create an object that contains the teachers that you have had
  //so far for the different modules.
  const teachers = {
    Philipp: {
      name: 'philipp',
    },
    rob: {
      name: 'Rob',
    },
    unmesh: {
      name: 'Unmesh',
    },
    Bonan: {
      name: 'Bonan',
    },
    yash: {
      name: 'Yash',
    },
  };

  // Add a property to the object you just created that contains
  //the languages that they have taught you.
  teachers.Philipp.languages = ['HTML', 'CSS'];
  teachers.rob.languages = ['HTML', 'CSS'];
  teachers.unmesh.languages = ['Git', 'CLI'];
  teachers.Bonan.languages = ['GIT', 'CLI'];
  teachers.yash.languages = ['JS'];

  console.log('hyf teachers: ', teachers);
  /* wil log: 
    {teachers: Array(5), lang: Array(4)}
    lang: (4) ["html", "css", "js", "cli"]
    teachers: (5) ["Philipp", "Rob", "Unmesh", "Bonan", "Yash"]
  
    */
}
