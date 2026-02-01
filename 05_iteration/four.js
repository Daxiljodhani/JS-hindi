//const coding = ['java','cpp','python']

// const values = coding.forEach((item)=>{
//     console.log(item);                       
//     return item                                  //for-each loop don't return any value.
// })
// console.log(values);

//---------------------filter method---------------------

const run = [1,2,3,4,5,6,7,8]

// const newRun = run.filter((num) => num)             
// console.log(newRun);

const newRun = run.filter((num) => {return num > 4})             //if we use curely braces that time return is neccessery.
// console.log(newRun);

const movies = [
  { name: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { name: "The Godfather", genre: "Crime", rating: 9.2 },
  { name: "Interstellar", genre: "Sci-Fi", rating: 8.7 },
  { name: "The Dark Knight", genre: "Action", rating: 9.0 },
  { name: "Pulp Fiction", genre: "Crime", rating: 8.9 }
];

let newMovies = movies.filter((movie) => movie.genre === 'Crime')             //filter method practice.
newMovies = movies.filter((movie) => {return movie.rating > 8.8})
console.log(newMovies);

