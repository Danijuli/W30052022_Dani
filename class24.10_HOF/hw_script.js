function summary(val1, val2) {
  let sum = val1 * val2;

  return sum;
}

console.log(summary(10, 5));

function checkEvenNumber(val3, val4) {
  let divi = val3 / val4;

  if (divi % 2 === 0) {
    return divi;
  } else {
    document.write(`Write an even number please`);
  }
}

console.log(checkEvenNumber(10, 6));

// Capitalized just the first letter of the word - first option
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("federico"));

// Capitalized just the first letter of the word - second option

function capitalize(wordss) {
  const firstLatter = wordss.charAt(0);
  const firstLatterCapitalized = firstLatter.toUpperCase();
  return firstLatterCapitalized + wordss.substring(1);
}

console.log(capitalize("joaquin "));

// Capitalized all the letters of the  words
function capitalizeString(str) {
  return str.toUpperCase();
}

console.log(capitalizeString("federico es mi amigo"));

function isSubstring(parameter1, parameter2) {
  return parameter2.includes(parameter1);
}

console.log(isSubstring("cat", "catalog")); // true
console.log(isSubstring("dog", "catalog")); // false

function even(val6) {
  return val6 % 2 === 0;
}

console.log(even(3));

function factorial(val7) {
  let results = 1;
  for (let i = 2; i <= val7; i++) {
    results *= i;
  }

  return results;
}

console.log(factorial(3));

function capitalizeWords(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join the words back together into a single string
  const capitalizedString = words.join(" ");

  return capitalizedString;
}

const originalString = "the quick brown fox";
const capitalizedString = capitalizeWords(originalString);
console.log(capitalizedString); // Output: 'The Quick Brown Fox'
