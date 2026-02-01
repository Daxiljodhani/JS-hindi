//-----------for each loop------------

const coding = ['java','cpp','python']
// coding.forEach(function (item){             //simple function.
//     console.log(item);
// })

// coding.forEach((item) => {              //using arrow function.
//     console.log(item);
// })

// function printMe(item) {                 //other method to print using foreach loop.
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{          //print wih index and whole array values.
    //console.log(item,index,arr);
})

const movie = [
    {
        movieName : "Avatar",
        rating : 9.0
    },
    {
        movieName : "bahubali",
        rating : 8.0
    }
]

movie.forEach((item) => {                   //method to access array inside the object values.
    console.log(item.movieName);
})