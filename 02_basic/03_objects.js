//---------------objects-----------------
//singleton if only create using constructor.

const mysyl = Symbol("key1");
//object literals.
const jsobj = {name : "Daxil", age : 20, location : "Surat",[mysyl] : "Lion"} //key use as a object.
// console.log(jsobj.location);
// console.log(jsobj["location"]);
// console.log(jsobj["age"]);
// console.log(jsobj[mysyl]);

jsobj.age = 34              //age value change.
// Object.freeze(jsobj)        //after freeze method any objects value can not be change. 
jsobj.age = 23              //this age value don't change because of freeze method.
// console.log(jsobj);

jsobj.greeting = function(){
    console.log("Hello users...");   
}

jsobj.greetingTwo = function(){
    console.log(`hello ${this.name}`);   //technique to take any object value. 
    
}
console.log(jsobj.greeting);        //return only function reference.
console.log(jsobj.greeting());      //return funtion value.
console.log(jsobj.greetingTwo());

 


