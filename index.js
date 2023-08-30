"use strict";
// MAP => return same length array
// FILTER => return same length or less
// FOREACH => returns nothing
let numbers = [2, 3, 3, 4, 6, 5, 45, 28, 1000, 10000033];
// ["even", "odd", "odd"];
let updatedArray2 = numbers.map((number) => {
    //   console.log(index);
    if (number % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
});
console.log(updatedArray2);
// let updatedArray2 = numbers.map(() => true);
// console.log("🚀 ~ file: index.ts:80 ~ updatedArray2:", updatedArray2);
let updatedArray = numbers.filter((data) => {
    if (data !== 0) {
        return true;
    }
});
console.log("🚀 ~ file: index.ts:79 ~ updatedArray:", updatedArray);
// const func = () => {
//   return 2 + 2;
// };
// let numb = func();
// console.log("🚀 ~ file: index.ts:92 ~ numb:", numb);
// Removing the even numbers
let oddNumbers = numbers.filter((item) => {
    if (item % 2 !== 0) {
        return true;
    }
});
console.log(oddNumbers);
console.log("Original Array", numbers);
// let newArr = numbers.forEach((data) => {
//   console.log(data);
// });
// console.log(newArr);
let names = ["abu hurairah", "naveed", "ali"];
names.forEach((data) => {
    console.log(`Your class on sundy will be onTime ${data}`);
});
let num = [2, -3, 4, -5, 6, -8, 5, 8];
let Enum = num.filter((item) => {
    if (item < 0) {
        return item;
    }
});
console.log(Enum);
