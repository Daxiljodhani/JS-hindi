//----------Immediately invoked function expressions(IIFE)------------
//(Use remove global scope polution)

(function chai(){                          //this name iife function(because of chai name).
    console.log(`connected`);
})();                                   //last semicolen are necessery(for ending function code).

// ( () => {                               //arrow function also use iife.
//     console.log("hii"); 
// })();

( (name) => {                               
    console.log(`${name},hii`); 
})('Dhruv');
