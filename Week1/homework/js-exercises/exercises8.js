'use strict';
        const name = 'Amna'; //string
        const lastName = 'Ahmad';//string

        const firstObject = {
            fatherName : 'Musleh',
            motherName: 'Fatima',
            brotherName:'Sagvan'
        }//object
        const secondObject = {
            bigSister : 'Torfa',
            secondSister: 'Nesrin',
            therdSister:'Janda'
        }//object

console.log(name);
console.log(lastName);
console.log(firstObject);
console.log(secondObject);


//first conditional

if(typeof name == typeof lastName) {
    console.log('the both of name and lastName are string');
} else{
        console.log('the both of name and lastName are not string');
}
//socond conditional
 
if(typeof firstObject == typeof secondObject) {
    console.log('the both of firstObject and  secondObject are string');
    } else{
        console.log('the both of firstObject and  secondObject are object');
    }
      //therd conditional
if(typeof name == typeof secondObject) {
    console.log('the both of name and  secondObject are string');
} else{
        console.log('the name is string and secondObject is object');
}


    //fourth conditional
    if(typeof lastName == typeof firstObject) {
        console.log('all of this are not different');
    } else{
            console.log('lastName is string but first object is an object ');
    }

    //fivth conditional

    if(typeof name == typeof firstObject) {
        console.log('all of this are not different');
    } else{
            console.log('name is string but firstObject is an object');
    }
        //sixth conditional
        if(typeof lastName == typeof secondObject) {
            console.log('all of this are not different');
        } else{
                console.log('lastName is string but secondObject is an object');
        }


        console.log(typeof name);
        console.log(typeof firstObject);

        console.log(typeof name, typeof firstObject);