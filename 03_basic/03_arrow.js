const user = {
    firstname: "Daxil",
    price: 3000,

    welcomeMessage: function () {
        console.log(`${this.firstname},welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.firstname = "sam"
// user.welcomeMessage()

// console.log(this);                  //empty object.

// function chai() {
//     let username = "Mohit"
//     console.log(this.username);             //here this can not be used beacuse it is not use inside the function.
// }
// chai()

const chai = () => {                    //arrow function.
    let username = "Rohit"
    console.log(this.username);
}
// chai()

// const addTwo = (n1,n2) => {               
//     return n1+n2
// }
// console.log(addTwo(3,4))

// const addTwo = (n1,n2) =>  (n1+n2)  //implicit function(it use while return only one line.) 
// console.log(addTwo(3,4))            //when curly braces use that time return keyword use necessery but when paranthsis
                                       //use that time return don't use.

const addTwo = (n1,n2) =>  ({name : "Dj"})      //method for return object. 
console.log(addTwo(5,6));
                         

