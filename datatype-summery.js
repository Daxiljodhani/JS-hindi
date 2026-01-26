// primitive:-

//type = number, string, boolean, null, undefined, symbol, bigint
let id = Symbol('123')
let id2 = Symbol('123')
console.log(id == id2);

let bigIntNum = 1234567890123456789012345678901234567890n

// non-primitive(Reference type):-

// type = object, array, function

let person = ["name", "age", "male"];
let personObj = {
    name: "Daxil",
    age: 19,
    gender: "male"
}

const greet = function() {
    console.log("Hello World");
}





