//---------------for of-----------------

let a = [1,2,3,4]

for (const i of a) {
    //console.log(i);
}

let greeting = "hello guys"
for (const element of greeting) {
    //console.log(element);
}


//*******Map******

const map = new Map()

map.set("IN","India")
map.set("USA","United ststes of america")
map.set("GRE","Germany")
map.set("IN","India")                   //duplicate value does not print.
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);        //print map using forof loop.
}

// const obj = {
//     id : 34,
//     name : 'raju'
// }
// for (const [key,value] of obj) {
//     console.log(key,':-',value);        //don't print object using for-of loop.
// }

//--------------for-in loop----------------

const obj = {
    id : 34,
    name : 'raju'
}
for (const key in obj) {
   //console.log(`${key} value is ${obj[key]} `);         //print object using for-in loop.
}

//Array also iterate using for-in loop.
//Map cna not iterate using for-in loop.