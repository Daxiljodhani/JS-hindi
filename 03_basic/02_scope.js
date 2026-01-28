//--------------------------scope----------------------------
// var c = 50
let a = 100                 
if(true){
    let a = 10                  //inside if is block scope.
    const b = 20
    console.log("inner a :",a);
    // var c = 30              
}
console.log(a);
// console.log(b);     //a nd b does not print because that is inside the scope but c is print because of var.
// console.log(c);

