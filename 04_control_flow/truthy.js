const userEmail = []
// if(userEmail){
//     console.log("got user emial");
// }
// else{
//     console.log("Don't have user email");
// }

//falsy value :-

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//truthy value :-

//"0" , 'false' , " " , [] , {} , function(){}

if(userEmail.length === 0){
    console.log("array is empty..");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");  
}


//------------Nullish coalescing Operator(??) :-(null,undefined)------------

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 12
// val1 = null ?? 10 ?? 10                     //which value assign first that gives means first 10 return.
console.log(val1);


//-------------Ternary operator--------------
// condition ? true : false

const iceprice = 200
iceprice < 100 ? console.log("cheaper") : console.log("expensive");

