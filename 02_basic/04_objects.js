//const app = new Object();         //way to create object.
// console.log(app);

const app = {name : {username : {firstname : "Daxil",lastname : "jodhnai"}}}
// console.log(app.name);
// console.log(app.name.username);
// console.log(app.name.username.firstname);       //access method of objects.

const obj1 =  {1:"a",2:"b"}
const obj2 =  {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2)       //here {} parameter is optional.
// console.log(obj3);                          //merge to object.

const obj3 = {...obj1,...obj2};             //spread method to merge to obect.
// console.log(obj3);

// console.log(Object.keys(obj1));             //give only keys.
// console.log(Object.values(obj1));           //give only value.
// console.log(Object.entries(obj1));          //every key value pair convert into array.
// console.log(obj1.hasOwnProperty(2));        //check value is in object or not(return boolean answer).

const course = {c_name : "javascript",price : 2000}
// console.log(course.c_name);              
const{c_name : name} = course                  //easy for more time access(don't repeat course everytime).
console.log(name);

/*{
     "name" : "Daxil"                 //API means without name object. 
     "age" : "20"
 } */

/*[
    {},
    {}                          //other method for API.
] */

    












