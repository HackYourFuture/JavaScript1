function drie(){
    console.clear();

    function sum_up(num1, num2, num3){
        return (num1+num2+num3);
    }

    console.log(sum_up(3,7,9));

    function colorCar(clr){
        console.log("a " + clr + ' car')
    }

    colorCar('red');

    function show_pairs(obj){
        console.log(Object.entries(obj));
    }
    
    cars = {one: "BMW", two: "TESLA", three:"TOYOTA" }
    show_pairs(cars);

    function vehicleType(color, code){
        if (code === 1){
            console.log("a " + color + ' car');
        }else if(code === 2){
            console.log("a " + color + ' motorbike');
        }else{
            console.log("You entered a wrong code. Please try again!");
        }
    }

    vehicleType("blue", 2);

    console.log((3===3) ? "Yes" : "No");

    function vehicle(col, code, age){
        if(code != 1 && code !=2){
            console.log("Please enter a valid code number!");
            return;
        }
        console.log("a " + col + ((age<3)? " new":" used") + ((code===1)? " car": " motorbike"));
    }

    vehicle("blue", 1, 5);

    var vehicle_list = ["car", "motorbike", "caravan", "bike"];

    console.log(vehicle_list[2]);

    function vehicle_2(col, code, age){
        let vehicle_list = ["car", "motorbike", "caravan", "bike"];

        if(vehicle_list[code] === null){
            console.log("Please enter a valid code number!");
            return;
        }
        console.log("a " + col + ((age<3)? " new ":" used ") + vehicle_list[code]);
    }

    vehicle_2("green", 3, 1);

    function Joe_ad(list){
        // "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."
        adString = "Amazing Joe's Garage, we service";
        for(i=0; i<list.length; i++){
            if (i === (list.length-1)){
                adString += " and " + list[i] + "s.";
                break;
            }
            adString += " " + list[i] + "s,";
        }
        console.log(adString);
    }

    Joe_ad(vehicle_list);
    
    vehicle_list.push("bicycle");

    Joe_ad(vehicle_list);

    var obj = new Object;

    let teachers = {HtmlCss:['Rob','Philip'], Git:['Unmesh', 'Hardit', 'Bonan'], JS:['Maher','Sander']}
    obj['teachers'] = teachers;
    obj['languages'] = ['HTML/CSS', 'BASH', 'JAVASCRIPT'];

    console.log(obj);
    

    console.log("'==' just checks the items but it doesn't check the types of items. But with '===' we can also check the types.");
    console.log("for the objects it also checks the adresses in disk. (My assumption)");
    let x = [1, 2, 3];
    let y = [1, 2, 3];
    let z = y;
    let a = '1';
    let b = 1;

    console.log("statement (==) and (===)");
    console.log("x =? y  : " + (x==y) + " and " + (x===y) );
    console.log("z =? y  : " + (z==y) + " and " + (z==y) );
    console.log("z =? x  : " + (z==x) + " and " + (z==x) );
    console.log("a =? b  : " + (a==b) + " and " + (a===b) );

    let o1 = { foo: "bar" };
    let o2 = { foo: "bar" };
    let o3 = o2;

    o2.foo = 'buzz';

    console.log(o1 , o2, o3);
    console.log("We changed o2. o3 has automatically changed.")
    o3.dish = 'borden';
    console.log(o1 , o2, o3);
    console.log("Then we added another property to o3. This also affect the o2. That means both variable have the same adress in memory.")

    let bar = 42;
    console.log(typeof typeof bar);
    console.log("This returns String. Because, 'typeof' returns the type as string.")
    console.log("When we write two times that means we want to see the type of a string which is of course string.")
    
}