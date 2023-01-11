// forEach

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum);

// map - new array - transforming the elements

const numbers2 = [65, 44, 12, 4];
const newArr = numbers2.map(myFunction2);

function myFunction2(num) {
  return num * 10;
}

myFunction2();
console.log(newArr);

// filter - new array with if - pass elements

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);

// Reduce - example -  Round all the numbers and display the sum:

const numbers3 = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo").innerHTML = numbers3.reduce(getSum, 0);

function getSum(total, num3) {
  return total + Math.round(num3);
}

const countries = [`Finland`, `Sweden`, `Denmark`, `Iceland`];
const names4 = [`Asabeneh`, `Mathias`, `Elias`, `Brook`];
const number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Excercices 3

let sum5 = 0;

countries.forEach(resu);

function resu(item) {
  console.log(item);
  sum5 += item;
}

// Excercices 4
let sum6 = 0;
names4.forEach(function (item2) {
  console.log(item2);
});

// Excercices 6
const newCountr = countries.map(function (item6) {
  return item6.toUpperCase();
});

console.log(newCountr);

// Excercices 7
const newLengCountries = countries.map(function (x) {
  return x.length;
});

console.log(newLengCountries);

// Excercices 8

const newNums = number5.map(function (x) {
  return x ** 2;
});

console.log(newNums);

// Excercices 10 - FILTER - ANOTHER WAY TO WRITE

//const result10 = countries.filter(function (country) {
//return country.includes("land");
//});
// console.log(result10);

const result10 = countries.filter(country);

function country(x) {
  return x.includes("land");
}

console.log(result10);

// Excercices 11 - FILTER -

const result11 = countries.filter(country2);

function country2(x) {
  const lengthcountr = x.length;

  return lengthcountr == 6;
}

console.log(result11);

// Excercices 13 - REDUCE -

numNew = [3, 6, 1];

const newReduceNum = function (acc, number) {
  return acc + number;
};

const newReduceFinal = numNew.reduce(newReduceNum, 0);

console.log(newReduceFinal);

/*  in order to substract each element of the array

const newReduceNum = function (acc, number, idx, array) {
  return array[idx + 1] ? acc - array[idx + 1] : acc;
};
const newReduceFinal = numNew.reduce(newReduceNum);
console.log(newReduceFinal);



*/

//14. Use reduce to concatenate all the countries and to produce this sentence:
// Finland, Sweden, Denmark, Norway, IceLand, and Estonia are north European countries
const reduceFunc = function (acc, country, i) {
  // am I the last country?
  if (countries.length - 1 === i) {
    return acc + "and " + country + " are north European countries";
  }
  return acc + country + ", ";
};
const countriesSentence = countries.reduce(reduceFunc, "");

console.log(countriesSentence);
