//---------------Array------------------

const arr = [1,2,3,4,5,6]
// console.log(arr[0]);

const num = new Array(1,2,4,6,7)
// console.log(num);
// arr.push(76)        // add elments at the last.
// arr.push(764)
// arr.pop()           // delete one elements from the last.
// arr.unshift(999)    // add elements in front.
// arr.shift()         // remove first elements.


// console.log(arr.includes(5));    //return boolean value.
// console.log(arr.indexOf(3));

// const newarr = arr.join()       //convert array into the string.
// console.log(arr);
// console.log(newarr);

const nums = arr.slice(1,3);        //only include elments from index 1 to 2 not include 3.
console.log(nums);
console.log(arr);                   //after using slice method array does not change.

const nums2 = arr.splice(1,3);      //it will take elements from index 1 to 3.
console.log(nums2);
console.log(arr);                   //after using splice method array will changed. 












