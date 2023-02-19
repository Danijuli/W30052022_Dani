/* 
Recursion


need a base Condition


function processDoll(doll) {

if (found the piece chocolate)
return "Taim Taim";

else if (there are no more dolls)
return "No chocolate here"

else processDoll(the smaller doll)
}
*/

/*  
factorial

do 4!

4*3*2*1 = result 24

*/

function factorial(n) {
  if (n == 1 || n == 0) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(4));

(function (window, document) {
  const array = [11, 15, 6, 8, 9, 11];

  const recursiveSum = (array, index = 0, acc = 0) => {
    // stop condition
    // LIFO  - last in first out

    if (index === array.length) {
      return acc;
    }

    return recursiveSum(array, index + 1, acc + array[index]);
  };

  console.log(recursiveSum(array));
})(window, document);
