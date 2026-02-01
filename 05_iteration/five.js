const number = [10, 20, 30, 40, 50, 60, 70]

// const newNum = number.map((num)=> num * 12)

const newNum = number.map((num) => num * 10).map((num) => num + 20).filter((num) => num > 400)
                //multiple map and filter method use.
console.log(newNum);

