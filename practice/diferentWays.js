const array = [11, 15, 6, 8, 9, 10];

// 1 - Using a for loop
let forLoopSum = 0;
for (let i = 0; i < array.length; i++) {
  forLoopSum += array[i];
}
console.log(forLoopSum);

// 2 - Using the reduce method:

const reduceSum = array.reduce((acc, currentValue) => acc + currentValue);
console.log(reduceSum);

// Using the forEach method:

let sum3 = 0;
array.forEach((value) => (sum3 += value));
console.log(sum3);

/*  Using the spread operator and the Math.sum method:

const sum4 = Math.sum4(...array);
console.log(sum4); */

// Using the recursion:
const recursiveSum = (array, index = 0, acc = 0) => {
  if (index === array.length) {
    return acc;
  }
  return recursiveSum(array, index + 1, acc + array[index]);
};
console.log(recursiveSum(array));
