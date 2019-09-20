'use strict';

{
  // declare all variables
  let strClass = 'there is tables and chairs.';
  let strComputer = 'Computers have a lot of pieces.';
  const objLesson = {
    name: 'JavaScript1',
    mentor: 'David Ng',
    number_of_course: '3',
  };
  const objClean = {
    living_room: 'Adam',
    entrance: 'Jhonson',
    bathroom_wc: 'Jan',
  };

  if (typeof strClass === typeof strComputer) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same...');
  }

  if (typeof strClass === typeof objLesson) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same...');
  }

  if (typeof strClass === typeof objClean) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same...');
  }

  if (typeof strComputer === typeof objLesson) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same...');
  }

  if (typeof strComputer === typeof objClean) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same...');
  }

  if (typeof objLesson === typeof objClean) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same...');
  }

  // check data type
  console.log(typeof strClass);
  console.log(typeof strComputer);
  console.log(typeof objLesson);
  console.log(typeof objClean);
}
