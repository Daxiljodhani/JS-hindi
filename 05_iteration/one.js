//-------for loop---------

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

for (let i = 0; i <=3; i++) {
    // console.log(`outer loop : ${i}`);
    
        for (let j = 0; j <= 3; j++) {
            // console.log(`inner loop value : ${j}`);
        }
}

const array = ['flash','batman','thor'];
// console.log(array.length);

for (let index = 0; index < array.length; index++) {
    // console.log(array.length);
    const element = array[index];
    // console.log(element);   
}

//------break and continue statements---------

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        //console.log(`detected 5`);
        break
    }
    //console.log(`value of index is ${index}`);
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        // console.log(`detected 5`);
        continue
    }
    // console.log(`value of index is ${index}`);
}


//-------------------------while loop----------------------


const myArray = ['james','rohit','kohli']
let arr = 0
while (arr < myArray.length) {
    //console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}

//--------------do-while -------------------

let score = 6
do {
    console.log(score);
    score++                         // first print then check condition.
} while (score <= 5);               //minimum one time loop will be executed.
