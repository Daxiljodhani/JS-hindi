//---------------------function-----------------------

function mYname() {
   // console.log("Dakshil");  
}
mYname()

/* function addTonum(number1 , number2) {          //number1 and number2 are parameters.
     console.log(number1 + number2);
 }
addTonum(45,55) */                                 //45 and 55 are arguments.

/*function addnum (number1 ,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addnum(30,70)
console.log("Result: ",result); */

function message(username = "Thor"){            //thor is default parameter.
    if (username == undefined) {
        console.log("please enter a username"); 
        return
    }
    return `${username} just log in` 
}
// console.log(message());

function digits (...num){               //Rest operator.
    return num
}
console.log(digits(200,500,1000));

const obje1 = {Fname : "Daxil", age : 45}
function objectCheck(anyobject){
    console.log(`${anyobject.Fname} and ${anyobject.age}` );
}
// objectCheck(obje1)
objectCheck({Fname : "Daxil", age : 45})                //direct pass object.

// const arr = [1,2,3,4,5]
function array(getarray){
    return getarray[3]
}
console.log(array([1,2,3,4,5]));            //pass array arguments.





