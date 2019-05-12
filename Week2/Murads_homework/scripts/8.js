function acht(){
    console.clear();

    let num = 5;
    console.log("The value of my variable num is: " + num);
    console.log("The type of my variable num will be: integer");
    console.log(typeof(num));

    let name = "Murad";
    console.log("The value of my variable name is: " + name);
    console.log("The type of my variable name will be: string");
    console.log(typeof(name));

    let bool = true;
    console.log("The value of my variable bool is: " + bool);
    console.log("The type of my variable bool will be: boolean");
    console.log(typeof(bool));

    let lst = ["one", 2, false];
    console.log("The value of my variable lst is: " + lst);
    console.log("The type of my variable lst will be: object");
    console.log(typeof(lst));

    let datas = [num, name, bool, lst];
    console.log("The value of my variable datas is: " + datas);
    console.log("The type of my variable datas will be: object");
    console.log(typeof(datas));

    let dict = {"num":num, "name":name, "bool":bool, "list":lst, "datas":datas};
   
    for (const [key, value] of Object.entries(dict)){
        item = {'k':key, 'v':value};
        delete dict[key];
        for (var data in dict){
            if(typeof(item['v']) == typeof(dict[data])){
                console.log(key + " and " + data + " are in the SAME TYPE");
            }else{
                console.log(key + " and " + data + " are NOT in the same type");
            }
        }
    }

}