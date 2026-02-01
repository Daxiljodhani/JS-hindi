//----------REDUCE METHOD----------------

const myNums = [1, 2, 3]

// const Sum = myNums.reduce(function (acc, currvalue) {
//     console.log(`acc ${acc} value is ${currvalue}`);
//     return (acc + currvalue) },5)

const sum = myNums.reduce((acc, currvalue) => acc + currvalue, 0)
// console.log(sum);

const price = [
    {
        courseprice: 199.99,
        time: "3 months"
    },
    {
        courseprice: 49.50,
        time: "1 month"
    },
    {
        courseprice: 1500.00,
        time: "1 year"
    }
];

const priceTopay = price.reduce((acc, item) => acc + item.courseprice, 0)
console.log(priceTopay);
