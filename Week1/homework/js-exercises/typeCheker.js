'use script';
{
    var a = "This is a";
    var b = "This is b";
    var c = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    var d = {type:"Fiat", model:"500", color:"white"};
    if (typeof(a) === typeof(b)){
    console.log("SAME TYPE");
    }
    if (typeof(a) !== typeof(c)){
    console.log("Not the same ...");
    }
    if (typeof(b) === typeof(a)){
    console.log("SAME TYPE");
    }
    if (typeof(b) !== typeof(d)){
    console.log("Not the same ...");
    }   
    if (typeof(c) !== typeof(a)){
    console.log("Not the same ...");
    }
    if (typeof(c) === typeof(d)){
    console.log("SAME TYPE");
    }
    if (typeof(d) !== typeof(a)){
    console.log("Not the same ...");
    }
    if (typeof(d) === typeof(c)){
    console.log("SAME TYPE");
    }
    console.log(typeof(a));
    console.log(typeof(d));
    
}
