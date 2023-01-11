function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function operate(operator, x, y) {
  return operator(x, y);
}

console.log(operate(add, 2, 3)); // Outputs: 5
console.log(operate(multiply, 2, 3)); // Outputs: 6

// EX1 - A

function func1() {
  return "Barcelona";
}

function destination(func1) {
  const message1 = func1();
  return `You are at ${message1}`;
}

console.log(destination(func1));

// function that returns a function

function createSchool(warrior) {
  // ternary operator
  // const teacher = warrior === 'Jedi' ? 'Yoda' : 'Darth Sidious';
  let teacher;
  let schoolToReturn;
  if (warrior === "jedi") {
    teacher = "Yoda";
    schoolToReturn = function () {
      // closure - lexical scope
      console.log(`You are at the Jedi Temple, your teacher is ${teacher}`);
    };
  } else if (warrior === "sith") {
    teacher = "Darth Sidious";
    schoolToReturn = function () {
      console.log(`You are at the Sith Temple, your teacher is ${teacher}`);
    };
  }
  return schoolToReturn;
}

// createSchool('jedi')(); also an option
const jediSchool = createSchool("jedi");
jediSchool();
