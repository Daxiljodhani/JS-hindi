//--------------------------scope----------------------------
// var c = 50
let a = 100                 
if(true){
    let a = 10                  //inside if is block scope.
    const b = 20
    // console.log("inner a :",a);
    // var c = 30              
}
// console.log(a);
// console.log(b);     //a nd b does not print because that is inside the scope but c is print because of var.
// console.log(c);

function one(){
    const h1 = "Daxil"

    function two(){
        const h2 = "Good morning"
        // console.log(h1);                //Inner function can use outer function variable.
        
    }
    // console.log(h2);         //that shows error.
    two()
}
one()

//*************************intersting**************************


addNum(5)                           //here we call function before the function def.
function addNum(num){
    return num + 1
}
// addNum(5)

// addTwo(5)                        //this shows error.
const addTwo = function(num){           
    return num + 1
}
addTwo(5)